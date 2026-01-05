import styles from './Section.module.css';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
    return (
        <section id={id} className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <div>{children}</div>
            </div>
        </section>
    );
};

export default Section;
