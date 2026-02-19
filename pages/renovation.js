import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Service.module.css';
import CallButton from '../components/CallButton';
import MailButton from '../components/EmailButton';
import { useTranslation } from '../lib/useTranslation';

export default function Renovation() {
    const { t } = useTranslation('renovation');

    const solutionKeys = ['equipment', 'coating', 'basin'];

    const galleryImages = [
        "/images/changement_liner.png",
        "/images/renovation_margelles.png",
        "/images/filtres neufs.jpeg",
        "/images/rattrapage_eau_verte.png"
    ];

    const galleryAlts = [
        "Remplacement liner piscine avant après",
        "Rénovation margelles piscine avant après",
        "Rénovation local technique piscine avant après",
        "Rattrapage eau verte piscine avant après"
    ];

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

            <section className={`section ${styles.serviceRenovation}`}>
                <div className={styles.introText}>
                    <h2>{t('intro.title')}</h2>
                    <p>{t('intro.p1')}</p>
                    <p>{t('intro.p2')}</p>
                </div>
            </section>

            <section className={`section ${styles.servicesSection}`}>
                <div className="container">
                    <h2 className="text-center mb-xl">{t('solutions.title')}</h2>

                    <div className="grid grid-2">
                        {solutionKeys.map((key) => {
                            const items = t(`solutions.${key}.items`);
                            return (
                                <div className="card" key={key}>
                                    <h3>{t(`solutions.${key}.title`)}</h3>
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
                    <h2 className="text-center mb-xl">{t('gallery.title')}</h2>
                    <p className="text-center mb-xl" style={{ maxWidth: '800px', margin: '0 auto var(--spacing-xl)' }}>
                        {t('gallery.subtitle')}
                    </p>

                    <div className="grid grid-2">
                        {(() => {
                            const items = t('gallery.items');
                            return Array.isArray(items) && items.map((item, i) => (
                                <div className="card-renovation" key={i}>
                                    <div style={{ height: '250px', overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                                        <img src={galleryImages[i]} alt={galleryAlts[i]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ padding: '1.5rem' }}>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ));
                        })()}
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
