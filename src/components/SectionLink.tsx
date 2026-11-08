"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const PENDING_KEY = 'pendingSection';

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
}

function clearHash() {
    if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
}

interface SectionLinkProps {
    id: string;
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

/** Link to a section on the home page that never leaves a #hash in the URL. */
export const SectionLink = ({ id, className, onClick, children }: SectionLinkProps) => {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <Link
            href={`/#${id}`}
            className={className}
            onClick={(event) => {
                event.preventDefault();
                onClick?.();
                if (pathname === '/') {
                    scrollToSection(id);
                    clearHash();
                } else {
                    try {
                        sessionStorage.setItem(PENDING_KEY, id);
                    } catch {
                        // sessionStorage unavailable: just go home
                    }
                    router.push('/');
                }
            }}
        >
            {children}
        </Link>
    );
};

/** Render once on the home page: handles arriving from another page or from an old #hash URL. */
export const PendingScroll = () => {
    useEffect(() => {
        let target: string | null = window.location.hash.replace(/^#/, '') || null;
        try {
            const pending = sessionStorage.getItem(PENDING_KEY);
            if (pending) {
                sessionStorage.removeItem(PENDING_KEY);
                target = pending;
            }
        } catch {
            // ignore
        }
        if (target) {
            requestAnimationFrame(() => {
                scrollToSection(target as string);
                clearHash();
            });
            // Next.js can re-apply the hash after hydration; clear it again once things settle.
            const timer = window.setTimeout(clearHash, 400);
            return () => window.clearTimeout(timer);
        }
    }, []);

    return null;
};
