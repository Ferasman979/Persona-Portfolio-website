"use client";

import { useId, useState } from 'react';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    /** Short pitch, always visible. */
    summary: React.ReactNode;
    /** Visual shown on the collapsed card (e.g. a diagram). */
    media?: React.ReactNode;
    /** Shown only when expanded, above the description. */
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
    const contentId = useId();
    const hasMore = Boolean(details || description || (features && features.length));

    return (
        <article className={styles.card}>
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
                    onClick={() => setExpanded(!expanded)}
                    className={styles.descriptionToggle}
                    aria-expanded={expanded}
                    aria-controls={contentId}
                >
                    {expanded ? 'Hide details' : 'Show details'}
                </button>
            )}

            {hasMore && expanded && (
                <div id={contentId} className={styles.expanded}>
                    {details && <div className={styles.details}>{details}</div>}

                    {description && <div className={styles.description}>{description}</div>}

                    {features && features.map((feature, idx) => (
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
