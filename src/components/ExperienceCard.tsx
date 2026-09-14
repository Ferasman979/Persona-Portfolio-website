"use client";

import { useId, useState } from 'react';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
    role: string;
    company: string;
    location?: string;
    date: string;
    points?: (string | React.ReactNode)[];
    alwaysExpanded?: boolean;
}

const ExperienceCard = ({ role, company, location, date, points = [], alwaysExpanded = false }: ExperienceCardProps) => {
    const [isExpanded, setIsExpanded] = useState(alwaysExpanded);
    const contentId = useId();

    const headerContent = (
        <>
            <span>
                <span className={styles.role}>{role}</span>
                <span className={styles.company}>{company}</span>
                {location && <span className={styles.location}>{location}</span>}
            </span>
            <span className={styles.dateAndArrow}>
                <span className={styles.date}>{date}</span>
                {!alwaysExpanded && (
                    <svg
                        aria-hidden="true"
                        className={`${styles.chevron} ${isExpanded ? styles.chevronExpanded : ''}`}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </span>
        </>
    );

    return (
        <article
            className={`${styles.card} ${isExpanded ? styles.expanded : ''} ${alwaysExpanded ? styles.alwaysExpanded : ''}`}
        >
            {alwaysExpanded ? (
                <h3 className={styles.header}>{headerContent}</h3>
            ) : (
                <button
                    type="button"
                    className={`${styles.header} ${styles.toggle}`}
                    aria-expanded={isExpanded}
                    aria-controls={contentId}
                    onClick={() => setIsExpanded((current) => !current)}
                >
                    {headerContent}
                </button>
            )}
            {points.length > 0 && (
                <div id={contentId} className={styles.listContainer} hidden={!alwaysExpanded && !isExpanded}>
                    <ul className={styles.list}>
                        {points.map((point, index) => (
                            <li key={index} className={styles.listItem}>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </article>
    );
};

export default ExperienceCard;
