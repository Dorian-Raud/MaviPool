import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Service.module.css';
import CallButton from '../components/CallButton';
import MailButton from '../components/EmailButton';

export default function Entretien() {
    return (
        <>
            <Head>
                <title>Entretien de Piscine - MaviPool Alpes-Maritimes</title>
                <meta name="description" content="Service d'entretien professionnel de piscine dans les Alpes-Maritimes. Maintenance régulière, traitement de l'eau, nettoyage. Devis gratuit." />
            </Head>

            <div className={styles.serviceHero} style={{ backgroundImage: 'linear-gradient(rgba(10, 36, 99, 0.7), rgba(10, 36, 99, 0.7)), url("images/surface-piscine.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <h1>Entretien de Piscine</h1>
                    <p>Profitez d'une piscine toujours propre et saine</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className={styles.serviceIntro}>
                        <div className={styles.introText}>
                            <h2>Un Entretien Professionnel pour une Eau Cristalline</h2>
                            <p>
                                L'entretien régulier de votre piscine est essentiel pour garantir une eau saine,
                                claire et agréable tout au long de l'année. Notre équipe d'experts prend en charge
                                tous les aspects de la maintenance de votre bassin.
                            </p>
                            <p>
                                Nous intervenons dans toutes les Alpes-Maritimes, de Théoule-sur-Mer à Menton,
                                pour vous offrir un service de qualité et une tranquillité d'esprit totale.
                            </p>
                        </div>
                        <div className={styles.introImage}>
                            <img src="images/surface-piscine.png" alt="Entretien piscine" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.servicesSection}`}>
                <div className="container">
                    <h2 className="text-center mb-xl">Nos Prestations d'Entretien</h2>

                    <div className="grid grid-4">
                        <div className="card-entretien">
                            <h3>Traitement de l'eau</h3>
                            <ul className={styles.serviceList}>
                                <li>Analyse complète de l'eau (pH, chlore, alcalinité)</li>
                                <li>Équilibrage chimique optimal</li>
                                <li>Traitement anti-algues et désinfection</li>
                                <li>Contrôle de la qualité de l'eau</li>
                            </ul>
                        </div>

                        <div className="card-entretien">
                            <h3>Nettoyage piscine</h3>
                            <ul className={styles.serviceList}>
                                <li>Aspiration du fond et des parois</li>
                                <li>Nettoyage de la ligne d'eau</li>
                                <li>Élimination des débris et feuilles</li>
                                <li>Brossage des surfaces</li>
                            </ul>
                        </div>

                        <div className="card-entretien">
                            <h3>Maintenance équipements</h3>
                            <ul className={styles.serviceList}>
                                <li>Vérification du système de filtration</li>
                                <li>Nettoyage des filtres et skimmers</li>
                                <li>Contrôle des pompes et moteurs</li>
                                <li>Inspection des équipements électriques</li>
                            </ul>
                        </div>

                        <div className="card-entretien">
                            <h3>Diagnostic préventif</h3>
                            <ul className={styles.serviceList}>
                                <li>Détection précoce des problèmes</li>
                                <li>Conseils d'optimisation</li>
                                <li>Recommandations personnalisées</li>
                                <li>Rapport d'intervention détaillé</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="text-center mb-xl">Nos Formules d'Entretien</h2>

                    <div className={`grid grid-3 ${styles.pricingGrid}`}>
                        <div className={`card ${styles.pricingCard}`}>
                            <div className={styles.pricingHeader}>
                                <h3>Technique</h3>
                            </div>
                            <ul className={styles.pricingFeatures}>
                                <li>✓ Mise en route et Hivernage</li>
                                <li>✓ Filtration (Lavage et rinçage du filtre) </li>
                                <li>✓ Contrôle des organes hydrauliques (pompes, filtres, vannes, etc.) et électriques</li>
                                <li>✓ Chimie de l'eau (Analyse complète et ajustement)</li>
                                <li>✓ Suivi </li>
                            </ul>
                            <div className={styles.PrecisionCard}>
                                <p>Fréquence : 1 passage par mois </p>
                                <p>(Produits de traitement non inclus)</p>
                            </div>

                            <Link href="/#contact" className="btn btn-outline" style={{ width: '100%' }}>
                                Demander un Devis
                            </Link>
                        </div>

                        <div className={`card ${styles.pricingCard} ${styles.featured}`}>
                            <div className={styles.badge}>Populaire</div>
                            <div className={styles.pricingHeader}>
                                <h3>Premium</h3>
                                <p>(Comprend le contrat technique)</p>
                            </div>
                            <ul className={styles.pricingFeatures}>
                                <li>✓ Passage de l’épuisette</li>
                                <li>✓ Brossage des parois et lignes d’eau</li>
                                <li>✓ Aspiration manuelle (ou gestion du robot)</li>
                                <li>✓ Nettoyage des paniers de skimmers</li>
                                <li>✓ Nettoyage  du pré-filtre de pompe</li>
                                <li>✓ Vérification et ajustement du niveau d’eau</li>
                            </ul>
                            <div className={styles.PrecisionCard}>
                                <p>Fréquence (sur la base de 31 passages/an)</p>
                                <p>(Produits de traitement non inclus)</p>
                            </div>

                            <Link href="/#contact" className="btn btn-primary" style={{ width: '100%' }}>
                                Demander un Devis
                            </Link>
                        </div>

                        <div className={`card ${styles.pricingCard}`}>
                            <div className={styles.pricingHeader}>
                                <h3>Personnalisée</h3>
                            </div>
                            <ul className={styles.pricingFeatures}>
                                <li>✓ Fréquence adaptée</li>
                                <li>✓ Services à la carte</li>
                                <li>✓ Suivi personnalisé</li>
                                <li>✓ Audit complet</li>
                                <li>✓ Conseils d'optimisation</li>
                            </ul>
                            <div className={styles.PrecisionCard}>
                                <p>Fréquence (à définir ensemble)</p>
                                <p>(Produits de traitement non inclus)</p>
                            </div>

                            <Link href="/#contact" className="btn btn-primary" style={{ width: '100%' }}>
                                Demander un Devis
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.ctaSection}`}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Confiez l'Entretien de Votre Piscine à des Experts</h2>
                        <p>Contactez-nous pour un devis gratuit et personnalisé</p>
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
