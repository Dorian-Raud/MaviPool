import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import CallButton from '../components/CallButton';
import MailButton from '../components/EmailButton';
import { useTranslation } from '../lib/useTranslation';
import { GraduationCap, Zap, Gem, Handshake, Phone, Mail, MapPin } from 'lucide-react';


export default function Home() {
    const { t } = useTranslation('home');

    return (
        <>
            <Head>
                <title>{t('meta.title')}</title>
                <meta name="description" content={t('meta.description')} />
                <link rel="icon" href="/final-logo.ico" />
            </Head>

            <main>
                {/* Hero Section */}
                <section className={styles.hero} style={{ backgroundImage: 'linear-gradient(rgba(10, 36, 99, 0.6), rgba(10, 36, 99, 0.4)), url("/images/hero.png")' }}>
                    <div className={styles.heroContent}>
                        <h1>{t('hero.title')}</h1>
                        <p>{t('hero.subtitle')}</p>
                        <div className={styles.heroButtons}>
                            <Link href="/#contact" className="btn btn-primary">
                                {t('hero.cta')}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="section bg-light">
                    <div className="container">
                        <h2 className="text-center mb-xl">{t('services.title')}</h2>
                        <div className="grid grid-3">
                            {/* Service 1 */}
                            <div className="card service-card">
                                <div className={styles.serviceImage}>
                                    <img src="/images/contraste 1(1)-2.jpg" alt="Installation de piscine" />
                                </div>
                                <div className={styles.serviceContent}>
                                    <h3>{t('services.installation.title')}</h3>
                                    <p>{t('services.installation.description')}</p>
                                    <Link href="/#contact" className="text-secondary font-bold">{t('services.installation.link')}</Link>
                                </div>
                            </div>

                            {/* Service 2 */}
                            <div className="card service-card">
                                <div className={styles.serviceImage}>
                                    <img src="/images/avant-après.png" alt="Rénovation de piscine" />
                                </div>
                                <div className={styles.serviceContent}>
                                    <h3>{t('services.renovation.title')}</h3>
                                    <p>{t('services.renovation.description')}</p>
                                    <Link href="/renovation" className="text-secondary font-bold">{t('services.renovation.link')}</Link>
                                </div>
                            </div>

                            {/* Service 3 */}
                            <div className="card service-card">
                                <div className={styles.serviceImage}>
                                    <img src="/images/entretien-piscine.png" alt="Entretien de piscine" />
                                </div>
                                <div className={styles.serviceContent}>
                                    <h3>{t('services.entretien.title')}</h3>
                                    <p>{t('services.entretien.description')}</p>
                                    <Link href="/entretien" className="text-secondary font-bold">{t('services.entretien.link')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Zone d'intervention */}
                <section className="sectionIntervention">
                    <div className="container">
                        <div className="interventionWrapper">
                            <h2>{t('zone.title')}</h2>
                            <p>{t('zone.description')}</p>
                            <div className="cityGrid">
                                <div className="cityItem"><MapPin size={24} color="#c58048" /> <span>Nice</span></div>
                                <div className="cityItem"><MapPin size={24} color="#c58048" /> <span>Cannes & Mandelieu</span></div>
                                <div className="cityItem"><MapPin size={24} color="#c58048" /> <span>Antibes & Juan-les-Pins</span></div>
                                <div className="cityItem"><MapPin size={24} color="#c58048" /> <span>Monaco & Menton</span></div>
                                <div className="cityItem"><MapPin size={24} color="#c58048" /> <span>Grasse</span></div>
                                <div className="cityItem"><MapPin size={24} color="#c58048" /> <span>{t('zone.allArea')}</span></div>
                            </div>
                            <Link href="/#contact" className="btn btn-primary">
                                {t('zone.cta')}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="section bg-primary text-white">
                    <div className="container">
                        <h2 className="text-center mb-xl">{t('whyUs.title')}</h2>
                        <div className="grid grid-4">
                            <div className={styles.feature}>
                                <div className={styles.featureIcon}><GraduationCap size={60} color="#c58148" /></div>
                                <h3>{t('whyUs.expertise.title')}</h3>
                                <p>{t('whyUs.expertise.description')}</p>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.featureIcon}><Zap size={60} color="#c58148" /></div>
                                <h3>{t('whyUs.reactivity.title')}</h3>
                                <p>{t('whyUs.reactivity.description')}</p>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.featureIcon}><Gem size={60} color="#c58148" /></div>
                                <h3>{t('whyUs.quality.title')}</h3>
                                <p>{t('whyUs.quality.description')}</p>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.featureIcon}><Handshake size={60} color="#c58148" /></div>
                                <h3>{t('whyUs.trust.title')}</h3>
                                <p>{t('whyUs.trust.description')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="contact" className="section">
                    <div className="container text-center">
                        <h2>{t('cta.title')}</h2>
                        <p className="mb-lg">{t('cta.subtitle')}</p>
                        <div className={styles.ctaGroup}>
                            <CallButton />
                            <MailButton />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
