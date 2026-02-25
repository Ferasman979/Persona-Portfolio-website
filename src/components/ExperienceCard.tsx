"use client";

import { useState } from 'react';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
    role: string;
    company: string;
    location?: string;
    date: string;
    points: (string | React.ReactNode)[];
    alwaysExpanded?: boolean;
}

const ExperienceCard = ({ role, company, location, date, points, alwaysExpanded = false }: ExperienceCardProps) => {
    const [isExpanded, setIsExpanded] = useState(alwaysExpanded);
    // Track if the expansion was triggered by a click to prevent hover-leave from closing it
    const [isClickedOpen, setIsClickedOpen] = useState(false);

    const handleClick = () => {
        if (!alwaysExpanded) {
            const newState = !isExpanded;
            setIsExpanded(newState);
            setIsClickedOpen(newState);
        }
    };

    const handleMouseEnter = () => {
        if (!alwaysExpanded && !isClickedOpen) {
            setIsExpanded(true);
        }
    };

    const handleMouseLeave = () => {
        if (!alwaysExpanded && !isClickedOpen) {
            setIsExpanded(false);
        }
    };

    return (
        <div
            className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: alwaysExpanded ? 'default' : 'pointer' }}
        >
            <div className={styles.header}>
                <div>
                    <h3 className={styles.role}>{role}</h3>
                    <div className={styles.company}>{company}</div>
                    {location && <div className={styles.location}>{location}</div>}
                </div>
                <div className={styles.dateAndArrow}>
                    <div className={styles.date}>{date}</div>
                    {!alwaysExpanded && (
                        <svg
                            className={`${styles.chevron} ${isExpanded ? styles.chevronExpanded : ''}`}
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 9L12 15L18 9"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </div>
            </div>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    {points.map((point, index) => (
                        <li key={index} className={styles.listItem}>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCard;
