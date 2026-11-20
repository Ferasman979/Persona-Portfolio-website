"use client";

import { useEffect, useId, useRef } from 'react';
import Link from 'next/link';
import styles from './ProjectCard.module.css';
import { useProjects } from './ProjectsView';

interface ProjectCardProps {
    title: string;
    /** Short pitch, always visible. */
    summary: React.ReactNode;
    /** Visual shown only when the project is open (e.g. a diagram). */
    media?: React.ReactNode;
    /** Shown only when open, beside the text on wide screens. */
    details?: React.ReactNode;
    /** Shown only when open. */
    description?: React.ReactNode;
    /** Shown only when open. */
    features?: { title: string; items: (string | React.ReactNode)[] }[];
    githubLink?: string;
    demoLink?: string;
    technologies: string[];
    status?: string;
}

const COMPACT_TECH_COUNT = 4;

const ProjectCard = ({
    title,
    summary,
    media,
    details,
    description,
    features,
    githubLink,
    demoLink,
    technologies,
    status,
}: ProjectCardProps) => {
    const { active, setActive } = useProjects();
    const rootRef = useRef<HTMLElement | HTMLButtonElement | null>(null);
    const contentId = useId();

    const isOpen = active === title;
    const isOther = active !== null && !isOpen;
    const hasMore = Boolean(media || details || description || (features && features.length));

    // If this card unmounts while open (e.g. "Show fewer projects"), close it.
    useEffect(() => {
        return () => setActive((current) => (current === title ? null : current));
    }, [title, setActive]);

    const open = () => {
        setActive(title);
        // The card jumps to the top of the section; bring it into view.
        setTimeout(() => {
            const el = rootRef.current;
            if (!el) return;
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        }, 0);
    };

    const close = () => {
        setActive(null);
        setTimeout(() => {
            const section = document.getElementById('projects');
            if (!section) return;
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        }, 0);
    };

    // Another project is open: this one becomes a small button.
    if (isOther) {
        return (
            <button
                ref={(el) => { rootRef.current = el; }}
                type="button"
                className={styles.chip}
                onClick={open}
                aria-label={`Open ${title}`}
            >
                {title}
            </button>
        );
    }

    const links = (
        <div className={styles.links}>
            {githubLink && (
                <Link href={githubLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} on GitHub (opens in a new tab)`} className={styles.iconLink}>
                    GitHub ↗
                </Link>
            )}
            {demoLink && (
                <Link href={demoLink} target="_blank" rel="noopener noreferrer" aria-label={`View the ${title} demo video (opens in a new tab)`} className={styles.demoButton}>
                    View Demo ▶
                </Link>
            )}
        </div>
    );

    // Compact card (nothing open) -------------------------------------------------
    if (!isOpen) {
        const shown = technologies.slice(0, COMPACT_TECH_COUNT);
        const extra = technologies.length - shown.length;
        return (
            <article ref={(el) => { rootRef.current = el; }} className={`${styles.card} ${styles.compact}`}>
                {status && <div className={styles.completedBadge}>{status}</div>}
                <h3 className={styles.title}>{title}</h3>
                <div className={`${styles.summary} ${styles.clamp}`}>{summary}</div>
                <div className={styles.compactFooter}>
                    <div className={styles.techStack}>
                        {shown.map((tech) => (
                            <span key={tech} className={styles.techItem}>{tech}</span>
                        ))}
                        {extra > 0 && <span className={styles.techItem}>+{extra}</span>}
                    </div>
                    {hasMore && (
                        <button
                            type="button"
                            onClick={open}
                            className={styles.descriptionToggle}
                            aria-expanded={false}
                            aria-label={`Open ${title}`}
                        >
                            Open project
                        </button>
                    )}
                </div>
            </article>
        );
    }

    // Open card (full width, details visible) --------------------------------------
    const hasVisual = Boolean(media || details);
    return (
        <article
            ref={(el) => { rootRef.current = el; }}
            id={contentId}
            className={`${styles.card} ${styles.cardExpanded}`}
        >
            <div className={styles.openTop}>
                <button type="button" onClick={close} className={styles.backButton} aria-expanded={true}>
                    <span aria-hidden="true">←</span> Back to projects
                </button>
                {links}
            </div>

            {status && <div className={styles.completedBadge}>{status}</div>}
            <h3 className={`${styles.title} ${styles.titleOpen}`}>{title}</h3>
            <div className={`${styles.summary} ${styles.summaryOpen}`}>{summary}</div>

            <div className={styles.expanded}>
                <div className={`${styles.expandedGrid} ${hasVisual ? styles.withDetails : ''}`}>
                    {hasVisual && (
                        <div className={styles.details}>
                            {media && <div className={styles.media}>{media}</div>}
                            {details}
                        </div>
                    )}

                    <div className={styles.textColumn}>
                        {description && <div className={styles.description}>{description}</div>}

                        {features && features.length > 0 && (
                            <div className={`${styles.featuresGrid} ${hasVisual ? '' : styles.wide}`}>
                                {features.map((feature, idx) => (
                                    <div key={idx} className={styles.features}>
                                        <span className={styles.featureTitle}>{feature.title}</span>
                                        <ul className={styles.featureList}>
                                            {feature.items.map((item, i) => (
                                                <li key={i} className={styles.featureItem}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={`${styles.techStack} ${styles.techStackOpen}`}>
                {technologies.map((tech) => (
                    <span key={tech} className={styles.techItem}>
                        {tech}
                    </span>
                ))}
            </div>
        </article>
    );
};

export default ProjectCard;
