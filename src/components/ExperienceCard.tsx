import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
    role: string;
    company: string;
    location?: string;
    date: string;
    points: (string | React.ReactNode)[];
}

const ExperienceCard = ({ role, company, location, date, points }: ExperienceCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div>
                    <h3 className={styles.role}>{role}</h3>
                    <div className={styles.company}>{company}</div>
                    {location && <div className={styles.location}>{location}</div>}
                </div>
                <div className={styles.date}>{date}</div>
            </div>
            <ul className={styles.list}>
                {points.map((point, index) => (
                    <li key={index} className={styles.listItem}>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceCard;
