import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import CallButton from '../components/CallButton';
import MailButton from '../components/EmailButton';
import { GraduationCap, Zap, Gem, Handshake, Phone, Mail, MapPin } from 'lucide-react';


export default function Home() {
    return (
        <>
            <Head>
                <title>MaviPool - Expert Piscine Alpes-Maritimes | Installation, Rénovation, Entretien</title>
                <meta name="description" content="MaviPool, votre expert pisciniste dans les Alpes-Maritimes (06). Installation, rénovation, entretien et dépannage de piscines. De Théoule-sur-Mer à Menton." />
                <link rel="icon" href="/final-logo.ico" />
            </Head>

            <main>
                {/* Hero Section */}
                <section className={styles.hero} style={{ backgroundImage: 'linear-gradient(rgba(10, 36, 99, 0.6), rgba(10, 36, 99, 0.4)), url("/images/hero.png")' }}>
                    <div className={styles.heroContent}>
                        <h1>Votre Expert Piscine dans les Alpes-Maritimes</h1>
                        <p>Installation, rénovation et entretien de prestige pour votre bassin.</p>
                        <div className={styles.heroButtons}>
                            <Link href="/#contact" className="btn btn-primary">
                                Demander un Devis Gratuit
                            </Link>
                            <Link href="/realisations" className="btn btn-outline">
                                Nos Réalisations
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="section bg-light">
                    <div className="container">
                        <h2 className="text-center mb-xl">Nos Services</h2>
                        <div className="grid grid-3">
                            {/* Service 1 */}
                            <div className="card service-card">
                                <div className={styles.serviceImage}>
                                    <img src="/images/installation.png" alt="Installation de piscine" />
                                </div>
                                <div className={styles.serviceContent}>
                                    <h3>Installation</h3>
                                    <p>Construction de piscines sur-mesure, coques ou béton, adaptées à votre terrain et vos envies.</p>
                                    <Link href="/#contact" className="text-secondary font-bold">En savoir plus →</Link>
                                </div>
                            </div>

                            {/* Service 2 */}
                            <div className="card service-card">
                                <div className={styles.serviceImage}>
                                    <img src="/images/renovation.png" alt="Rénovation de piscine" />
                                </div>
                                <div className={styles.serviceContent}>
                                    <h3>Rénovation</h3>
                                    <p>Modernisation de votre bassin, changement de liner, étanchéité et mise aux normes.</p>
                                    <Link href="/renovation" className="text-secondary font-bold">En savoir plus →</Link>
                                </div>
                            </div>

                            {/* Service 3 */}
                            <div className="card service-card">
                                <div className={styles.serviceImage}>
                                    <img src="/images/entretien.png" alt="Entretien de piscine" />
                                </div>
                                <div className={styles.serviceContent}>
                                    <h3>Entretien</h3>
                                    <p>Contrats d'entretien annuels ou saisonniers pour une eau cristalline toute l'année.</p>
                                    <Link href="/entretien" className="text-secondary font-bold">En savoir plus →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Zone d'intervention */}
                <section className="section">
                    <div className="container">
                        <div className="grid grid-2">
                            <div className={styles.zoneContent}>
                                <h2>Zone d'Intervention</h2>
                                <p>Nous intervenons dans tout le département des Alpes-Maritimes (06), pour vous offrir un service de proximité et réactif.</p>
                                <ul className={styles.cityList}>
                                    <li><MapPin size={20} color="#0A2463" /> Nice</li>
                                    <li><MapPin size={20} color="#0A2463" /> Cannes & Mandelieu</li>
                                    <li><MapPin size={20} color="#0A2463" /> Antibes & Juan-les-Pins</li>
                                    <li><MapPin size={20} color="#0A2463" /> Monaco & Menton</li>
                                    <li><MapPin size={20} color="#0A2463" /> Grasse</li>
                                    <li><MapPin size={20} color="#0A2463" /> Arrière-pays</li>
                                </ul>
                                <Link href="/#contact" className="btn btn-primary mt-md">
                                    Vérifier mon éligibilité
                                </Link>
                            </div>
                            <div className={styles.mapContainer}>
                                <div className={styles.mapPlaceholder} style={{ backgroundImage: 'url("/images/alpes-maritimes53.gif")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="section bg-primary text-white">
                    <div className="container">
                        <h2 className="text-center mb-xl">Pourquoi Choisir MaviPool ?</h2>
                        <div className="grid grid-4">
                            <div className={styles.feature}>
                                <div className={styles.featureIcon}><GraduationCap size={60} color="#c58148" /></div>
                                <h3>Expertise</h3>
                                <p>Plus de 15 ans d'expérience dans le domaine de la piscine.</p>
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

                {/* CTA Section */}
                <section id="contact" className="section">
                    <div className="container text-center">
                        <h2>Prêt à plonger ?</h2>
                        <p className="mb-lg">Contactez-nous dès aujourd'hui pour votre projet piscine.</p>
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
