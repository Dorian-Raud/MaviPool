import SEO from '../components/SEO';
import styles from '../styles/Confidentialite.module.css';

import { getTranslations } from '../lib/getTranslation';
import { useTranslation } from '../lib/useTranslation';

export default function Confidentialite({ initialTranslations }) {
    const { t } = useTranslation('confidentialite', initialTranslations);

    // Fonction helper pour éviter les erreurs .map lorsque les clés ne sont pas encore chargées
    const renderList = (key) => {
        const value = t(key);
        return Array.isArray(value) ? value : [];
    };

    return (
        <>
            <SEO title={t('meta.title')} description={t('meta.description')} />

            <div className={styles.confidentialite}>
                <h1>{t('title')}</h1>
                <p>{t('lastUpdate')}</p>
                <p>{t('intro')}</p>

                <h3>{t('dataCollected.title')}</h3>
                <p>{t('dataCollected.p1')}</p>
                <p>{t('dataCollected.p2')}</p>
                <ul>
                    {renderList('dataCollected.list').map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>{t('dataCollected.p3')}</p>
                <ul>
                    {renderList('dataCollected.list2').map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h3>{t('dataUse.title')}</h3>
                <p>{t('dataUse.p1')}</p>
                <ul>
                    {renderList('dataUse.list').map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>{t('dataUse.p2')}</p>

                <h3>{t('thirdParty.title')}</h3>
                <p>{t('thirdParty.p1')}</p>
                <ul>
                    {renderList('thirdParty.list').map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h3>{t('cookies.title')}</h3>
                <p>{t('cookies.p1')}</p>
                <p>{t('cookies.p2')}</p>
                <p>{t('cookies.p3')}</p>

                <h3>{t('hosting.title')}</h3>
                <p>{t('hosting.p1')}</p>
                <p>{t('hosting.p2')}</p>

                <h3>{t('retention.title')}</h3>
                <p>{t('retention.p1')}</p>

                <h3>{t('userRights.title')}</h3>
                <p>{t('userRights.p1')}</p>
                <ul>
                    {renderList('userRights.list').map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>{t('userRights.p2')}</p>

                <h3>{t('contact.title')}</h3>
                <p>{t('contact.p1')}</p>

            </div>
        </>
    );
};

export async function getStaticProps({ locale }) {
    const translations = await getTranslations(locale || 'fr', 'confidentialite');
    return {
        props: {
            initialTranslations: translations,
        },
    };
}