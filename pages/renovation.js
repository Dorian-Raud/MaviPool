import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Service.module.css';
import CallButton from '../components/CallButton';
import MailButton from '../components/EmailButton';

export default function Renovation() {
    return (
        <>
            <Head>
                <title>Rénovation de Piscine - MaviPool Alpes-Maritimes</title>
                <meta name="description" content="Expert en rénovation de piscine dans les Alpes-Maritimes. Changement de liner, étanchéité, modernisation, mise aux normes. Devis gratuit." />
            </Head>

            <div className={styles.serviceHero} style={{ backgroundImage: 'linear-gradient(rgba(10, 36, 99, 0.7), rgba(10, 36, 99, 0.7)), url("images/surface-piscine.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <h1>Rénovation de Piscine</h1>
                    <p>Donnez une seconde jeunesse à votre bassin</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className={styles.serviceIntro}>
                        <div className={styles.introText}>
                            <h2>Modernisez Votre Espace Baignade</h2>
                            <p>
                                Votre piscine a besoin d'un coup de jeune ? Le revêtement est abîmé ou vous souhaitez
                                simplement moderniser votre installation ? MaviPool vous accompagne dans tous vos
                                projets de rénovation.
                            </p>
                            <p>
                                De la simple réparation au relooking complet, nous mettons notre expertise à votre
                                service pour transformer votre piscine selon vos envies et les dernières tendances.
                            </p>
                        </div>
                        <div className={styles.introImage}>
                            <img src="/images/renovation.png" alt="Rénovation piscine" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.servicesSection}`}>
                <div className="container">
                    <h2 className="text-center mb-xl">Nos Solutions de Rénovation</h2>

                    <div className="grid grid-2">
                        <div className="card">
                            <h3>Revêtement & Étanchéité</h3>
                            <ul className={styles.serviceList}>
                                <li>Remplacement de liner et membrane armée</li>
                                <li>Rénovation de carrelage et mosaïque</li>
                                <li>Réfection des joints</li>
                                <li>Recherche et réparation de fuites</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h3>Modernisation des Équipements</h3>
                            <ul className={styles.serviceList}>
                                <li>Installation de pompe à chaleur</li>
                                <li>Passage au traitement au sel</li>
                                <li>Installation de volet roulant</li>
                                <li>Éclairage LED dernière génération</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h3>Modification du Bassin</h3>
                            <ul className={styles.serviceList}>
                                <li>Création d'escaliers ou plage immergée</li>
                                <li>Réduction de la profondeur</li>
                                <li>Changement des margelles</li>
                                <li>Création de débordement</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="text-center mb-xl">Nos Réalisations Avant / Après</h2>
                    <p className="text-center mb-xl" style={{ maxWidth: '800px', margin: '0 auto var(--spacing-xl)' }}>
                        Une image vaut mille mots. Découvrez comment nous transformons les piscines de nos clients.
                    </p>

                    <div className="grid grid-2">
                        <div className="card">
                            <div style={{ height: '250px', overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                                <img src="/images/changement_liner.png" alt="Remplacement liner piscine avant après" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3>Changement de Liner</h3>
                                <p>Remplacement d'un vieux liner bleu par un liner sable moderne pour une eau turquoise.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div style={{ height: '250px', overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                                <img src="/images/renovation_margelles.png" alt="Rénovation margelles piscine avant après" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3>Rénovation Margelles</h3>
                                <p>Remplacement de margelles en béton fissurées par du travertin en pierre naturelle.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div style={{ height: '250px', overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                                <img src="/images/renovation-local-avant-apres.png" alt="Rénovation local technique piscine avant après" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3>Modernisation Local Technique</h3>
                                <p>Remplacement complet de la filtration et des pompes pour une installation propre et efficace.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div style={{ height: '250px', overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                                <img src="/images/rattrapage_eau_verte.png" alt="Rattrapage eau verte piscine avant après" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3>Rattrapage Eau Verte</h3>
                                <p>Traitement choc et remise en route d'une piscine à l'abandon.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <h2 className="text-center mb-xl">Pourquoi Rénover Votre Piscine ?</h2>
                    <div className="grid grid-3">
                        <div className="card text-center">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
                            <h3>Esthétique</h3>
                            <p>Redonnez de l'éclat à votre piscine avec des matériaux modernes et élégants.</p>
                        </div>
                        <div className="card text-center">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
                            <h3>Économies</h3>
                            <p>Réduisez vos factures d'eau et d'électricité grâce à des équipements performants.</p>
                        </div>
                        <div className="card text-center">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
                            <h3>Sérénité</h3>
                            <p>Profitez d'une installation sûre, aux normes et garantie pour de nombreuses années.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.ctaSection}`}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Un Projet de Rénovation ?</h2>
                        <p>Nos experts se déplacent pour étudier votre projet et vous conseiller</p>
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
