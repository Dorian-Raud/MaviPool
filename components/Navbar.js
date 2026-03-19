import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../lib/useTranslation';
import styles from '../styles/Navbar.module.css';

export default function Navbar({ initialTranslations }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { t, locale } = useTranslation('common', initialTranslations);
    const router = useRouter();
    const langRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const switchLocale = (newLocale) => {
        router.push(router.asPath, router.asPath, { locale: newLocale });
    };

    const languages = [
        { code: 'fr', iso: 'FR', emoji: '🇫🇷' },
        { code: 'en', iso: 'EN', emoji: '🇬🇧' },
        { code: 'it', iso: 'IT', emoji: '🇮🇹' },
        { code: 'tr', iso: 'TR', emoji: '🇹🇷' },
    ];

    const currentLang = languages.find((l) => l.code === locale) || languages[0];

    // Ferme la liste des langues si on clique en dehors.
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!isLangOpen) return;
            if (!langRef.current) return;
            if (langRef.current.contains(event.target)) return;
            setIsLangOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isLangOpen]);

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
                        <div ref={langRef} className={styles.langRoot}>
                            <button
                                type="button"
                                className={`${styles.langCurrentBtn} ${styles.langActive}`}
                                aria-label="Choisir la langue"
                                aria-expanded={isLangOpen}
                                onClick={() => setIsLangOpen((v) => !v)}
                            >
                                <span className={styles.langFlagEmoji} aria-hidden="true">
                                    {currentLang.emoji}
                                </span>
                                <span className={styles.langIso}>{currentLang.iso}</span>
                                <span className={styles.langCaret}>▼</span>
                            </button>

                            {isLangOpen && (
                                <div className={styles.langDropdown} role="menu" aria-label="Langues">
                                    {languages
                                        .filter((l) => l.code !== locale)
                                        .map((lang) => (
                                            <button
                                                key={lang.code}
                                                type="button"
                                                className={styles.langDropdownBtn}
                                                onClick={() => {
                                                    switchLocale(lang.code);
                                                    setIsLangOpen(false);
                                                    setIsMenuOpen(false);
                                                }}
                                                role="menuitem"
                                            >
                                                <span className={styles.langFlagEmoji} aria-hidden="true">
                                                    {lang.emoji}
                                                </span>
                                                <span className={styles.langIso}>{lang.iso}</span>
                                            </button>
                                        ))}
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
