import Head from 'next/head';
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
            <Head>
                <title>{t('meta.title')}</title>
                <meta name="description" content={t('meta.description')} />
            </Head>

            <div className={styles.confidentialite}>
                <h2>{t('title')}</h2>
                <p>{t('lastUpdate')}</p>
                <p>{t('intro')}</p>

                <h4>{t('dataCollected.title')}</h4>
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

                <h4>{t('dataUse.title')}</h4>
                <p>{t('dataUse.p1')}</p>
                <ul>
                    {renderList('dataUse.list').map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>{t('dataUse.p2')}</p>

                <h4>{t('thirdParty.title')}</h4>
                <p>{t('thirdParty.p1')}</p>
                <ul>
                    {renderList('thirdParty.list').map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h4>{t('cookies.title')}</h4>
                <p>{t('cookies.p1')}</p>
                <p>{t('cookies.p2')}</p>

                <h4>{t('hosting.title')}</h4>
                <p>{t('hosting.p1')}</p>
                <p>{t('hosting.p2')}</p>

                <h4>{t('retention.title')}</h4>
                <p>{t('retention.p1')}</p>

                <h4>{t('userRights.title')}</h4>
                <p>{t('userRights.p1')}</p>
                <ul>
                    {renderList('userRights.list').map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>{t('userRights.p2')}</p>

                <h4>{t('contact.title')}</h4>
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