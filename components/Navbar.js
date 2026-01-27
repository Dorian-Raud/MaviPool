import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <img src="images/logo-final-forme.png" alt="MaviPool Logo" />
                </Link>

                <button
                    className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                    <li>
                        <Link href="/" onClick={() => setIsMenuOpen(false)}>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link href="/entretien" onClick={() => setIsMenuOpen(false)}>
                            Entretien
                        </Link>
                    </li>
                    <li>
                        <Link href="/renovation" onClick={() => setIsMenuOpen(false)}>
                            Rénovation
                        </Link>
                    </li>
                    <li>
                        <Link href="/depannage" onClick={() => setIsMenuOpen(false)}>
                            Dépannage
                        </Link>
                    </li>
                    <li>
                        <Link href="/realisations" onClick={() => setIsMenuOpen(false)}>
                            Réalisations
                        </Link>
                    </li>
                    <li>
                        <Link href="/a-propos" onClick={() => setIsMenuOpen(false)}>
                            À propos
                        </Link>
                    </li>
                    <li className={styles.ctaItem}>
                        <Link href="#contact" className="btn btn-accent" onClick={() => setIsMenuOpen(false)}>
                            Devis Gratuit
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
