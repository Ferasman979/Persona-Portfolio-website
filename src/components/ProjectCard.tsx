"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    description: string | React.ReactNode;
    githubLink?: string;
    demoLink?: string;
    technologies: string[];
    features?: { title: string; items: (string | React.ReactNode)[] }[];
    status?: string;
}

const ProjectCard = ({ title, description, githubLink, demoLink, technologies, features, status }: ProjectCardProps) => {
    const [showDescription, setShowDescription] = useState(false);
    const descriptionId = `${title.replace(/\s+/g, '-').toLowerCase()}-description`;

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

            <button
                type="button"
                onClick={() => setShowDescription(!showDescription)}
                className={styles.descriptionToggle}
                aria-expanded={showDescription}
                aria-controls={descriptionId}
            >
                {showDescription ? 'Hide description' : 'Show description'}
            </button>

            {showDescription && (
                <div id={descriptionId} className={styles.description}>{description}</div>
            )}

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
