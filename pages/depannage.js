import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Service.module.css';
import CallButton from '../components/CallButton';
import MailButton from '../components/EmailButton';
import { useTranslation } from '../lib/useTranslation';

export default function Depannage() {
    const { t } = useTranslation('depannage');

    const domains = [
        { key: 'water' },
        { key: 'filtration' },
        { key: 'electrical' },
        { key: 'automatic' }
    ];

    const steps = t('process.steps');

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
                            <p>{t('intro.p3')}</p>
                            <div className="mt-md">
                                <a href="tel:+33674813721" className="btn btn-accent">
                                    {t('intro.emergencyCall')}
                                </a>
                            </div>
                        </div>
                        <div className={styles.introImageDepannage}>
                            <img src="/images/traficante-dans-le-bendo.png" alt="vehicule-de-depannage" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.servicesSection}`}>
                <div className="container">
                    <h2 className="text-center mb-xl">{t('domains.title')}</h2>

                    <div className="grid grid-2">
                        {domains.map((domain) => {
                            const items = t(`domains.${domain.key}.items`);
                            return (
                                <div className="card" key={domain.key}>
                                    <h3>{t(`domains.${domain.key}.title`)}</h3>
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

            <section className="section bg-light">
                <div className="container">
                    <h2 className="text-center mb-xl">{t('process.title')}</h2>
                    <div className="grid grid-4">
                        {Array.isArray(steps) && steps.map((step, i) => (
                            <div className="card text-center" key={i}>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-secondary)', marginBottom: '1rem' }}>{i + 1}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
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
