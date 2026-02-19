import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// Cache pour éviter de recharger les mêmes fichiers
const translationCache = {};

export function useTranslation(namespace = 'common') {
    const router = useRouter();
    const locale = router.locale || 'fr';
    const [translations, setTranslations] = useState({});

    useEffect(() => {
        const cacheKey = `${locale}/${namespace}`;

        if (translationCache[cacheKey]) {
            setTranslations(translationCache[cacheKey]);
            return;
        }

        fetch(`/locales/${locale}/${namespace}.json`)
            .then((res) => res.json())
            .then((data) => {
                translationCache[cacheKey] = data;
                setTranslations(data);
            })
            .catch((err) => {
                console.error(`Failed to load translations: ${cacheKey}`, err);
            });
    }, [locale, namespace]);

    // Fonction t() qui supporte les clés imbriquées avec des points : "hero.title"
    const t = (key) => {
        const keys = key.split('.');
        let value = translations;
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key; // Retourne la clé si traduction manquante
            }
        }
        return value;
    };

    return { t, locale };
}
