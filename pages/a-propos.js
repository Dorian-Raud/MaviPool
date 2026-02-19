import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';
import { GraduationCap, Zap, Gem, Handshake, Phone, Mail, MapPin } from 'lucide-react';
import CallButton from '../components/CallButton';
import MailButton from '../components/EmailButton';
import { useTranslation } from '../lib/useTranslation';

export default function About() {
    const { t } = useTranslation('about');

    return (
        <>
            <Head>
                <title>{t('meta.title')}</title>
                <meta name="description" content={t('meta.description')} />
            </Head>

            <section className="section">
                <div className="container">
                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutContent}>
                            <h2>{t('history.title')}</h2>
                            <p>{t('history.p1')}</p>
                            <p>{t('history.p2')}</p>
                            <p>{t('history.p3')}</p>
                        </div>
                        <div className={styles.aboutImage}>
                            <img src="/images/ceto-le-patron.jpeg" alt="Président de Mavi Pool" />
                        </div>
                    </div>
                </div>
            </section>

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
