import { useEffect, useState } from 'react';
import { useTranslation } from '../lib/useTranslation';
import styles from '../styles/CookieConsent.module.css';

const GTM_ID = 'GTM-PV5KWLW4';
export const CONSENT_STORAGE_KEY = 'mavipool_cookie_consent';
export const CONSENT_CHANGE_EVENT = 'mavipool-cookie-consent-change';

function loadGTM() {
    if (typeof window === 'undefined' || window.__mavipoolGtmLoaded) return;
    window.__mavipoolGtmLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);
}

export default function CookieConsent({ initialTranslations }) {
    const { t } = useTranslation('common', initialTranslations);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const applyStoredConsent = () => {
            const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
            if (stored === 'granted') {
                loadGTM();
                setVisible(false);
            } else if (stored === 'denied') {
                setVisible(false);
            } else {
                setVisible(true);
            }
        };

        applyStoredConsent();
        window.addEventListener(CONSENT_CHANGE_EVENT, applyStoredConsent);
        return () => window.removeEventListener(CONSENT_CHANGE_EVENT, applyStoredConsent);
    }, []);

    const handleChoice = (granted) => {
        window.localStorage.setItem(CONSENT_STORAGE_KEY, granted ? 'granted' : 'denied');
        if (granted) loadGTM();
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className={styles.banner} role="dialog" aria-live="polite" aria-label={t('cookieConsent.title')}>
            <div className={styles.content}>
                <p className={styles.text}>
                    <strong>{t('cookieConsent.title')}</strong> {t('cookieConsent.text')}
                </p>
                <div className={styles.actions}>
                    <button type="button" className={styles.declineBtn} onClick={() => handleChoice(false)}>
                        {t('cookieConsent.decline')}
                    </button>
                    <button type="button" className={styles.acceptBtn} onClick={() => handleChoice(true)}>
                        {t('cookieConsent.accept')}
                    </button>
                </div>
            </div>
        </div>
    );
}
