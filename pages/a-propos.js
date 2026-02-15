import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';
import { GraduationCap, Zap, Gem, Handshake, Phone, Mail, MapPin } from 'lucide-react';
import CallButton from '../components/CallButton';
import MailButton from '../components/EmailButton';

export default function About() {
    return (
        <>
            <Head>
                <title>À Propos de Mavi Pool - Pisciniste Alpes-Maritimes</title>
                <meta name="description" content="Découvrez Mavi Pool, votre expert pisciniste dans les Alpes-Maritimes. Notre histoire, nos valeurs et notre équipe à votre service." />
            </Head>

            <section className="section">
                <div className="container">
                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutContent}>
                            <h2>Notre Histoire</h2>
                            <p>
                                Fondée par un passionné de la piscine, Mavi Pool est née d'une volonté simple :
                                offrir un service d'excellence dans le domaine de la piscine sur la Côte d'Azur.
                            </p>
                            <p>
                                + de 10 ans d'expéricence maintenant !

                                Magasinier, Commercial, Technicien, Responsable, puis dans les coulisses des fabricants…
                                J’ai appris à comprendre les besoins des clients, les contraintes des équipes et les secrets des produits qui composent une piscine fiable et durable.

                                Cette expérience, je la transmets pour créer un climat de confiance.
                                Pour travailler avec honnêteté, qualité et transparence.
                                Pour vous guider vers les meilleures décisions, au juste prix.
                            </p>
                            <p>
                                Aujourd'hui, MaviPool est reconnu comme un acteur majeur de la piscine dans les Alpes-Maritimes,
                                intervenant auprès d'une clientèle exigeante de particuliers et de professionnels.
                            </p>
                        </div>
                        <div className={styles.aboutImage}>
                            <img src="images/ceto-le-patron.jpeg" alt="Président de Mavi Pool" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-primary text-white">
                <div className="container">
                    <h2 className="text-center mb-xl">Pourquoi Choisir Mavi Pool ?</h2>
                    <div className="grid grid-4">
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}><GraduationCap size={60} color="#c58148" /></div>
                            <h3>Expertise</h3>
                            <p>Plus de 10 ans d'expérience dans le domaine de la piscine.</p>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}><Zap size={60} color="#c58148" /></div>
                            <h3>Réactivité</h3>
                            <p>Intervention rapide en cas de panne ou d'urgence.</p>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}><Gem size={60} color="#c58148" /></div>
                            <h3>Qualité</h3>
                            <p>Utilisation des meilleurs matériaux et équipements du marché.</p>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}><Handshake size={60} color="#c58148" /></div>
                            <h3>Confiance</h3>
                            <p>Devis transparents et respect des délais annoncés.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.ctaSection}`}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Envie de Travailler avec Nous ?</h2>
                        <p>Contactez-nous pour discuter de votre projet</p>
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
