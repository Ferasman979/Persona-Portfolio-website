import Image from 'next/image';
import styles from './CertificationCard.module.css';

interface CertificationCardProps {
    name: string;
    issuer: string;
    status: string;
    logoSrc: string;
    logoAlt: string;
    inProgress?: boolean;
}

const CertificationCard = ({ name, issuer, status, logoSrc, logoAlt, inProgress = false }: CertificationCardProps) => {
    return (
        <div className={styles.card}>
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
            </div>
        </div>
    );
};

export default CertificationCard;
