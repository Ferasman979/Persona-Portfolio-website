"use client";

import { useId, useState } from 'react';
import styles from './EndorsementCard.module.css';

interface EndorsementCardProps {
    name: string;
    role: string;
    text: string;
    date: string;
    relationship: string;
}

const EndorsementCard = ({ name, role, text, date, relationship }: EndorsementCardProps) => {
    const [open, setOpen] = useState(false);
    const statementId = useId();

    return (
        <article className={styles.card}>
            <header className={styles.header}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.role}>{role}</p>
            </header>

            <div className={styles.footer}>
                <span className={styles.relationship}>{relationship}</span>
                <span className={styles.date}>{date}</span>
            </div>

            <button
                type="button"
                className={styles.toggle}
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls={statementId}
            >
                {open ? 'Hide statement' : 'Show statement'}
            </button>

            {open && (
                <div id={statementId} className={styles.body}>
                    <p className={styles.text}>&ldquo;{text}&rdquo;</p>
                </div>
            )}
        </article>
    );
};

export default EndorsementCard;
