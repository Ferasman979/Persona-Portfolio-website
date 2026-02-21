import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Endorsements', href: '#endorsements' },
        { name: 'Volunteering', href: '#volunteering' },
        { name: 'Contact', href: '#contact' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    {/* Optional: Add Brand/Logo here if needed */}
                </div>

                {/* Desktop Links */}
                <div className={styles.links}>
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} className={styles.link}>
                            {item.name}
                        </Link>
                    ))}
                    <Link href="/api/resume" target="_blank" rel="noopener noreferrer" className={styles.resumeLink}>
                        RESUME
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuButton}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.showMenu : ''}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={styles.mobileLink}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/api/resume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mobileResumeLink}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        RESUME
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
