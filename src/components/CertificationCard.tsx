import Image from 'next/image';
import styles from './CertificationCard.module.css';

interface CertificationCardProps {
    name: string;
    issuer: string;
    status: string;
    logoSrc: string;
    logoAlt: string;
    inProgress?: boolean;
    href?: string;
}

const CertificationCard = ({ name, issuer, status, logoSrc, logoAlt, inProgress = false, href }: CertificationCardProps) => {
    const content = (
        <>
            <div className={styles.logoContainer}>
                <Image
                    src={logoSrc}
                    alt={logoAlt}
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className={styles.details}>
                <div className={`${styles.badge} ${inProgress ? styles.inProgress : ''}`}>{status}</div>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.issuer}>{issuer}</div>
                {href && (
                    <span className={styles.viewLink}>
                        View certificate <span aria-hidden="true">↗</span>
                    </span>
                )}
            </div>
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.card} ${styles.cardLink}`}
                aria-label={`View ${name} certificate (opens in a new tab)`}
            >
                {content}
            </a>
        );
    }

    return <div className={styles.card}>{content}</div>;
};

export default CertificationCard;
