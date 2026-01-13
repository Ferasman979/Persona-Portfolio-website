"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

const roles = ["GenAI Developer", "Data Analyst", "ML Developer"];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.greeting}>Hello, I&apos;m</p>
                    <h1 className={styles.name}>Feras</h1>
                    <div className={styles.roleWrapper}>
                        <span>I am a</span>
                        <span className={styles.dynamicRole} key={roleIndex}>
                            {roles[roleIndex]}
                        </span>
                    </div>



                    <div className={styles.socials}>
                        <Link href="https://github.com/Ferasman979" target="_blank" className={styles.socialLink}>
                            GitHub
                        </Link>
                        <Link href="https://www.linkedin.com/in/feras-mahmood/" target="_blank" className={styles.socialLink}>
                            LinkedIn
                        </Link>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <div className={styles.placeholderImage}>
                        <Image
                            src="/headshot.jpeg"
                            alt="headshot"
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
