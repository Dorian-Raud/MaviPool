import SEO from '../components/SEO';
import styles from '../styles/MentionsLegales.module.css';

import { getTranslations } from '../lib/getTranslation';
import { useTranslation } from '../lib/useTranslation';

export default function MentionsLegales({ initialTranslations }) {
    const { t } = useTranslation('mentionsLegales', initialTranslations);
    return (
        <>
            <SEO title={t('meta.title')} description={t('meta.description')} />

            <div className={styles.mentionsLegales}>
                <h1>{t('title')}</h1>

                <h3>{t('sections.owner')}</h3>
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

                <h3>{t('sections.realization')}</h3>
                <p>{t('realization.text')}</p>

                <h3>{t('sections.hosting')}</h3>
                <p>{t('hosting.text')}</p>

                <h3>{t('sections.intellectualProperty')}</h3>
                <p>{t('intellectualProperty.text')}</p>

                <h3>{t('sections.personalData')}</h3>
                <p>{t('personalData.text')}</p>

                <h3>{t('sections.liabilityLimitation')}</h3>
                <p>{t('liabilityLimitation.text')}</p>

                <h3>{t('sections.hyperlinks')}</h3>
                <p>{t('hyperlinks.text')}</p>

                <h3>{t('sections.applicableLaw')}</h3>
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