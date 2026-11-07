import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.eyebrow}>Feras Mahmood · software developer | Researcher</p>
                    <h1 id="hero-title" className={styles.title}>
                        I build dependable AI systems, from data pipeline to inference.
                    </h1>
                    <p className={styles.summary}>
                        I research, build, and deploy AI infrastructure. I engineer agentic workflows, machine-learning infrastructure, and data platforms designed for AI agents and real users for compliance heavy products.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/#projects" className={styles.primaryAction}>
                            Explore my work
                        </Link>
                        <Link href="https://github.com/Ferasman979" target="_blank" rel="noopener noreferrer" className={styles.secondaryAction}>
                            GitHub <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <div className={styles.imageFrame}>
                        <Image
                            src="/api/profile-image"
                            alt="Feras Mahmood"
                            width={350}
                            height={350}
                            className={styles.headshot}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
