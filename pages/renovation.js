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
                    <p>Donnez un nouveau coup d'éclat à votre piscine</p>
                </div>
            </div>

            <section className={`section ${styles.serviceRenovation}`}>
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
            </section>

            <section className={`section ${styles.servicesSection}`}>
                <div className="container">
                    <h2 className="text-center mb-xl">Nos Solutions de Rénovation</h2>

                    <div className="grid grid-2">

                        <div className="card">
                            <h3>Modernisation des Équipements</h3>
                            <ul className={styles.serviceList}>
                                <li>Optimisation de votre local technique</li>
                                <li>Installation de pompe à chaleur</li>
                                <li>Installation de couverture de sécurité piscine (NF P 90-308)</li>
                                <li>Traitement de l'eau automatique (electrolyse au sel, pompes doseuses chlore pH ...)</li>
                                <li>Eclairage LED</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h3>Revêtement & Étanchéité</h3>
                            <ul className={styles.serviceList}>
                                <li>Réparation du revêtement de la piscine (coque, polyester, liner et PVC armé ...)</li>
                                <li>Remplacement de la mosaïque ou du carrelage</li>
                                <li>Réfection des joints</li>
                                <li>Recherche et réparation de fuites</li>
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
                        <div className="card-renovation">
                            <div style={{ height: '250px', overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                                <img src="/images/changement_liner.png" alt="Remplacement liner piscine avant après" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3>Changement de Liner</h3>
                                <p>Remplacement d'un liner d'une piscine laissée à l'abandon par un liner sable 75/100ème pour une piscine en harmonie avec le jardin</p>
                            </div>
                        </div>

                        <div className="card-renovation">
                            <div style={{ height: '250px', overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                                <img src="/images/renovation_margelles.png" alt="Rénovation margelles piscine avant après" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3>Rénovation Margelles</h3>
                                <p>Remplacement de margelles par du travertin</p>
                            </div>
                        </div>

                        <div className="card-renovation">
                            <div style={{ height: '250px', overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                                <img src="/images/filtres neufs.jpeg" alt="Rénovation local technique piscine avant après" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3>Modernisation Local Technique</h3>
                                <p>Remplacement complet de la filtration et des pompes pour une installation propre, efficace et autonome, les lavages de filtres se font automatiquement avec la vanne BESGO</p>
                            </div>
                        </div>

                        <div className="card-renovation">
                            <div style={{ height: '250px', overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                                <img src="/images/rattrapage_eau_verte.png" alt="Rattrapage eau verte piscine avant après" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3>Rattrapage Eau Verte</h3>
                                <p>Traitement choc et remise en route d'une piscine à l'abandon</p>
                            </div>
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
