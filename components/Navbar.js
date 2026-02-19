import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from '../lib/useTranslation';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, locale } = useTranslation('common');
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const switchLocale = (newLocale) => {
        router.push(router.asPath, router.asPath, { locale: newLocale });
    };

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <img src="/images/logo-final-forme.png" alt="MaviPool Logo" />
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
                        <Link href="/installation" onClick={() => setIsMenuOpen(false)}>
                            {t('nav.installation')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/renovation" onClick={() => setIsMenuOpen(false)}>
                            {t('nav.renovation')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/depannage" onClick={() => setIsMenuOpen(false)}>
                            {t('nav.depannage')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/entretien" onClick={() => setIsMenuOpen(false)}>
                            {t('nav.entretien')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/a-propos" onClick={() => setIsMenuOpen(false)}>
                            {t('nav.about')}
                        </Link>
                    </li>
                    <li className={styles.ctaItem}>
                        <Link href="/#contact" className="btn btn-accent" onClick={() => setIsMenuOpen(false)}>
                            {t('nav.quote')}
                        </Link>
                    </li>
                    <li className={styles.langSwitcher}>
                        <button
                            className={`${styles.langBtn} ${locale === 'fr' ? styles.langActive : ''}`}
                            onClick={() => switchLocale('fr')}
                        >
                            FR
                        </button>
                        <span className={styles.langSep}>|</span>
                        <button
                            className={`${styles.langBtn} ${locale === 'en' ? styles.langActive : ''}`}
                            onClick={() => switchLocale('en')}
                        >
                            EN
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
