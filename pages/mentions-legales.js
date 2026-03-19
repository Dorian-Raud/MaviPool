import Head from 'next/head';
import styles from '../styles/MentionsLegales.module.css';

import { getTranslations } from '../lib/getTranslation';
import { useTranslation } from '../lib/useTranslation';

export default function MentionsLegales({ initialTranslations }) {
    const { t } = useTranslation('mentionsLegales', initialTranslations);
    return (
        <>
            <Head>
                <title>{t('meta.title')}</title>
                <meta name="description" content={t('meta.description')} />
            </Head>

            <div className={styles.mentionsLegales}>
                <h2>{t('title')}</h2>

                <h4>{t('sections.owner')}</h4>
                <ul>
                    {t('owner.company')}
                    <li>{t('owner.l1')}</li>
                    <li>{t('owner.l2')}</li>
                    <li>{t('owner.l3')}</li>
                    <li>{t('owner.l4')}</li>
                    <li>{t('owner.l5')}</li>
                    <li>{t('owner.l6')}</li>
                    <li>{t('owner.l7')}</li>
                    <li>{t('owner.l8')}</li>
                    <li>{t('owner.l9')}</li>
                    <li>{t('owner.l10')}</li>
                </ul>

                <h4>{t('sections.realization')}</h4>
                <p>{t('realization.text')}</p>

                <h4>{t('sections.hosting')}</h4>
                <p>{t('hosting.text')}</p>

                <h4>{t('sections.intellectualProperty')}</h4>
                <p>{t('intellectualProperty.text')}</p>

                <h4>{t('sections.personalData')}</h4>
                <p>{t('personalData.text')}</p>

                <h4>{t('sections.liabilityLimitation')}</h4>
                <p>{t('liabilityLimitation.text')}</p>

                <h4>{t('sections.hyperlinks')}</h4>
                <p>{t('hyperlinks.text')}</p>

                <h4>{t('sections.applicableLaw')}</h4>
                <p>{t('applicableLaw.text')}</p>
            </div>
        </>
    );
}

export async function getStaticProps({ locale }) {
    const translations = await getTranslations(locale, 'mentionsLegales');
    const commonTranslations = await getTranslations(locale, 'common');

    return {
        props: {
            initialTranslations: translations,
            commonTranslations: commonTranslations,
        },
    };
}