"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'About', href: '/#about' },
        { name: 'Experience', href: '/#experience' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Blog', href: '/#blog' },
        { name: 'Contact', href: '/#contact' },
    ];

    useEffect(() => {
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsMenuOpen(false);
        };

        window.addEventListener('keydown', closeOnEscape);
        return () => window.removeEventListener('keydown', closeOnEscape);
    }, []);

    return (
        <nav className={styles.navbar} aria-label="Primary navigation">
            <div className={styles.container}>
                <Link href="/" className={styles.brand} aria-label="Feras Mahmood, home">
                    FM
                </Link>

                <div className={styles.links}>
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} className={styles.link}>
                            {item.name}
                        </Link>
                    ))}
                    <Link href="/resume" target="_blank" rel="noopener noreferrer" className={styles.resumeLink} aria-label="Open résumé in a new tab">
                        Résumé ↗
                    </Link>
                </div>

                <button
                    className={styles.mobileMenuButton}
                    onClick={() => setIsMenuOpen((current) => !current)}
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} aria-hidden="true">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                {isMenuOpen && (
                    <div id="mobile-navigation" className={styles.mobileMenu}>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={styles.mobileLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/resume"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.mobileResumeLink}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Résumé ↗
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
