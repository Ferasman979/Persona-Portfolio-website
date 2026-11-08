import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.eyebrow}>Feras Mahmood · AI Researcher | Data and AI Infra Engineering</p>
                    <h1 id="hero-title" className={styles.title}>
                        I enjoy researching, designing, and testing AI infrastructure.
                    </h1>
                    <p className={styles.summary}>
                        I have worked with Mitacs-funded healthcare, hardware, and educational startups to engineer data storage infrastructure and search engines.
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
                            src="/headshot-white.jpeg"
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
