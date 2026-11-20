"use client";

import { useId, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    /** Short pitch, always visible. */
    summary: React.ReactNode;
    /** Visual shown on the collapsed card (e.g. a diagram). */
    media?: React.ReactNode;
    /** Shown only when expanded, beside the text on wide screens. */
    details?: React.ReactNode;
    /** Shown only when expanded. */
    description?: React.ReactNode;
    /** Shown only when expanded. */
    features?: { title: string; items: (string | React.ReactNode)[] }[];
    githubLink?: string;
    demoLink?: string;
    technologies: string[];
    status?: string;
}

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
    const [expanded, setExpanded] = useState(false);
    const cardRef = useRef<HTMLElement>(null);
    const contentId = useId();
    const hasMore = Boolean(details || description || (features && features.length));

    const toggle = () => {
        setExpanded((current) => !current);
        // Expanding moves the card onto its own full-width row (and collapsing moves it back),
        // so bring its top into view if the move pushed it off-screen.
        requestAnimationFrame(() => {
            const card = cardRef.current;
            if (!card) return;
            const { top } = card.getBoundingClientRect();
            if (top < 0 || top > window.innerHeight * 0.6) {
                const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                card.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
            }
        });
    };

    return (
        <article
            ref={cardRef}
            className={`${styles.card} ${expanded ? styles.cardExpanded : ''}`}
            data-expanded={expanded ? 'true' : undefined}
        >
            {status && (
                <div className={styles.completedBadge}>{status}</div>
            )}
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
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
            </div>

            <div className={styles.summary}>{summary}</div>

            {media && <div className={styles.media}>{media}</div>}

            {hasMore && (
                <button
                    type="button"
                    onClick={toggle}
                    className={`${styles.descriptionToggle} ${expanded ? '' : styles.toggleBottom}`}
                    aria-expanded={expanded}
                    aria-controls={contentId}
                >
                    {expanded ? 'Hide details' : 'Show details'}
                </button>
            )}

            {hasMore && expanded && (
                <div id={contentId} className={styles.expanded}>
                    <div className={`${styles.expandedGrid} ${details ? styles.withDetails : ''}`}>
                        {details && <div className={styles.details}>{details}</div>}

                        <div className={styles.textColumn}>
                            {description && <div className={styles.description}>{description}</div>}

                            {features && features.length > 0 && (
                                <div className={`${styles.featuresGrid} ${details ? '' : styles.wide}`}>
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
            )}

            <div className={styles.techStack}>
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
