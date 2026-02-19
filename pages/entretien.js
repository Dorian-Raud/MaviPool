import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Service.module.css';
import CallButton from '../components/CallButton';
import MailButton from '../components/EmailButton';
import { useTranslation } from '../lib/useTranslation';

export default function Entretien() {
    const { t } = useTranslation('entretien');

    const prestationKeys = ['water', 'cleaning', 'diagnostic', 'maintenance'];

    return (
        <>
            <Head>
                <title>{t('meta.title')}</title>
                <meta name="description" content={t('meta.description')} />
            </Head>

            <div className={styles.serviceHero} style={{ backgroundImage: 'linear-gradient(rgba(10, 36, 99, 0.7), rgba(10, 36, 99, 0.7)), url("/images/surface-piscine.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <h1>{t('hero.title')}</h1>
                    <p>{t('hero.subtitle')}</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className={styles.serviceIntro}>
                        <div className={styles.introText}>
                            <h2>{t('intro.title')}</h2>
                            <p>{t('intro.p1')}</p>
                            <p>{t('intro.p2')}</p>
                        </div>
                        <div className={styles.introImage}>
                            <img src="/images/surface-piscine.png" alt="Entretien piscine" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.servicesSection}`}>
                <div className="container">
                    <h2 className="text-center mb-xl">{t('prestations.title')}</h2>

                    <div className="grid grid-4">
                        {prestationKeys.map((key) => {
                            const items = t(`prestations.${key}.items`);
                            return (
                                <div className="card-entretien" key={key}>
                                    <h3>{t(`prestations.${key}.title`)}</h3>
                                    <ul className={styles.serviceList}>
                                        {Array.isArray(items) && items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="text-center mb-xl">{t('plans.title')}</h2>

                    <div className={`grid grid-3 ${styles.pricingGrid}`}>
                        {/* Technical Plan */}
                        <div className={`card ${styles.pricingCard}`}>
                            <div className={styles.pricingHeader}>
                                <h3>{t('plans.technical.title')}</h3>
                            </div>
                            <ul className={styles.pricingFeatures}>
                                {(() => {
                                    const features = t('plans.technical.features');
                                    return Array.isArray(features) && features.map((f, i) => <li key={i}>✓ {f}</li>);
                                })()}
                            </ul>
                            <div className={styles.PrecisionCard}>
                                <p>{t('plans.technical.frequency')}</p>
                                <p>{t('plans.technical.note')}</p>
                            </div>
                            <Link href="/#contact" className="btn btn-outline" style={{ width: '100%' }}>
                                {t('plans.technical.cta')}
                            </Link>
                        </div>

                        {/* Premium Plan */}
                        <div className={`card ${styles.pricingCard} ${styles.featured}`}>
                            <div className={styles.badge}>{t('plans.premium.badge')}</div>
                            <div className={styles.pricingHeader}>
                                <h3>{t('plans.premium.title')}</h3>
                                <p>{t('plans.premium.subtitle')}</p>
                            </div>
                            <ul className={styles.pricingFeatures}>
                                {(() => {
                                    const features = t('plans.premium.features');
                                    return Array.isArray(features) && features.map((f, i) => <li key={i}>✓ {f}</li>);
                                })()}
                            </ul>
                            <div className={styles.PrecisionCard}>
                                <p>{t('plans.premium.frequency')}</p>
                                <p>{t('plans.premium.note')}</p>
                            </div>
                            <Link href="/#contact" className="btn btn-primary" style={{ width: '100%' }}>
                                {t('plans.premium.cta')}
                            </Link>
                        </div>

                        {/* Custom Plan */}
                        <div className={`card ${styles.pricingCard}`}>
                            <div className={styles.pricingHeader}>
                                <h3>{t('plans.custom.title')}</h3>
                            </div>
                            <ul className={styles.pricingFeatures}>
                                {(() => {
                                    const features = t('plans.custom.features');
                                    return Array.isArray(features) && features.map((f, i) => <li key={i}>✓ {f}</li>);
                                })()}
                            </ul>
                            <div className={styles.PrecisionCard}>
                                <p>{t('plans.custom.frequency')}</p>
                                <p>{t('plans.custom.note')}</p>
                            </div>
                            <Link href="/#contact" className="btn btn-primary" style={{ width: '100%' }}>
                                {t('plans.custom.cta')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.ctaSection}`}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>{t('cta.title')}</h2>
                        <p>{t('cta.subtitle')}</p>
                        <div className={styles.ctaButtons}>
                            <CallButton />
                            <MailButton />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
