import styles from './EndorsementCard.module.css';

interface EndorsementCardProps {
    name: string;
    role: string;
    text: string;
    date: string;
    relationship: string;
}

const EndorsementCard = ({ name, role, text, date, relationship }: EndorsementCardProps) => {
    return (
        <article className={styles.card}>
            <header className={styles.header}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.role}>{role}</p>
            </header>
            <div className={styles.body}>
                <p className={styles.text}>"{text}"</p>
                <div className={styles.footer}>
                    <span className={styles.relationship}>{relationship}</span>
                    <span className={styles.date}>{date}</span>
                </div>
            </div>
        </article>
    );
};

export default EndorsementCard;
