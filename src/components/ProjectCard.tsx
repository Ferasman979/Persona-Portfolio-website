import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    description: string | React.ReactNode;
    githubLink?: string;
    demoLink?: string;
    technologies: string[];
    features?: { title: string; items: string[] }[];
}

const ProjectCard = ({ title, description, githubLink, demoLink, technologies, features }: ProjectCardProps) => {
    return (
        <article className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.links}>
                    {githubLink && (
                        <Link href={githubLink} target="_blank" aria-label="GitHub Link" className={styles.iconLink}>
                            GitHub ↗
                        </Link>
                    )}
                    {demoLink && (
                        <Link href={demoLink} target="_blank" aria-label="View Demo Video" className={styles.demoButton}>
                            View Demo ▶
                        </Link>
                    )}
                </div>
            </div>

            <div className={styles.description}>{description}</div>

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
