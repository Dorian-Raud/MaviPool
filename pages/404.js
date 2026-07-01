import Link from 'next/link';
import SEO from '../components/SEO';
import { useTranslation } from '../lib/useTranslation';
import { getTranslations } from '../lib/getTranslation';

export default function Custom404({ initialTranslations }) {
    const { t } = useTranslation('common', initialTranslations);

    return (
        <>
            <SEO title={t('notFound.title')} description={t('notFound.subtitle')} noindex />

            <section className="section text-center">
                <div className="container">
                    <h1>404 - {t('notFound.title')}</h1>
                    <p className="mb-lg">{t('notFound.subtitle')}</p>
                    <Link href="/" className="btn btn-primary">
                        {t('notFound.backHome')}
                    </Link>
                </div>
            </section>
        </>
    );
}

export async function getStaticProps({ locale }) {
    const commonTranslations = await getTranslations(locale, 'common');
    return {
        props: {
            initialTranslations: commonTranslations,
            commonTranslations: commonTranslations,
        },
    };
}
