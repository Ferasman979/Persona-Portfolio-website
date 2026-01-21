import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },

        { name: 'Endorsements', href: '#endorsements' },
        { name: 'Volunteering', href: '#volunteering' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.links}>
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} className={styles.link}>
                            {item.name}
                        </Link>
                    ))}
                    <div className={styles.resumeGroup}>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeLink}>
                            RESUME
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
