import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Service.module.css';
import CallButton from '../components/CallButton';
import MailButton from '../components/EmailButton';

export default function Depannage() {
    return (
        <>
            <Head>
                <title>Dépannage Piscine - MaviPool Alpes-Maritimes | Intervention Rapide</title>
                <meta name="description" content="Dépannage piscine rapide dans les Alpes-Maritimes. Panne pompe, fuite, eau verte, problème électrique. Intervention 7j/7 en saison." />
            </Head>

            <div className={styles.serviceHero} style={{ backgroundImage: 'linear-gradient(rgba(10, 36, 99, 0.7), rgba(10, 36, 99, 0.7)), url("images/surface-piscine.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <h1>Dépannage Piscine</h1>
                    <p>Intervention rapide et efficace pour tous vos problèmes techniques</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className={styles.serviceIntro}>
                        <div className={styles.introText}>
                            <h2>Une Panne ? Nous Intervenons Rapidement</h2>
                            <p>
                                Une eau qui tourne, une pompe en panne ou une fuite suspecte ? Ne laissez pas un problème
                                technique gâcher votre saison de baignade. MaviPool intervient rapidement dans tout le
                                département des Alpes-Maritimes.
                            </p>
                            <p>
                                Nos techniciens qualifiés disposent de tout le matériel nécessaire pour diagnostiquer
                                et réparer la plupart des pannes dès la première visite.
                            </p>

                            <p>
                                Nous intervenons rapidement dans tout le département des Alpes-Maritimes : Nice, Saint-Laurent-du-Var, Cagnes-sur-Mer, Villeneuve-Loubet, Antibes, Cannes, Mougins, Valbonne, Grasse, Vence, Saint-Paul-de-Vence, La colle-sur-Loup, Roquefort-les-Pins, Le Rouret, Opio, Biot, Mandelieu, Théoule-sur-Mer ... 
                            </p>
                            <div className="mt-md">
                                <a href="tel:+33123456789" className="btn btn-accent">
                                    Appel d'Urgence : 06 74 81 37 21
                                </a>
                            </div>
                        </div>
                        <div className={styles.introImageDepannage}>
                            <img src="images/traficante-dans-le-bendo.png" alt="vehicule-de-depannage" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.servicesSection}`}>
                <div className="container">
                    <h2 className="text-center mb-xl">Nos Domaines d'Intervention</h2>

                    <div className="grid grid-2">
                        <div className="card">
                            <h3>Problèmes d'Eau</h3>
                            <ul className={styles.serviceList}>
                                <li>Rattrapage eau verte</li>
                                <li>Eau trouble ou laiteuse</li>
                                <li>Problème de pH ou chlore</li>
                                <li>Traitement choc</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h3>Filtration & Pompes</h3>
                            <ul className={styles.serviceList}>
                                <li>Pompe bruyante ou arrêtée</li>
                                <li>Filtre colmaté ou cassé</li>
                                <li>Fuite au local technique</li>
                                <li>Problème d'amorçage</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h3>Électricité & Chauffage</h3>
                            <ul className={styles.serviceList}>
                                <li>Panne coffret électrique</li>
                                <li>Pompe à chaleur en défaut</li>
                                <li>Éclairage défectueux</li>
                                <li>Problème électrolyseur</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h3>Équipements Automatiques</h3>
                            <ul className={styles.serviceList}>
                                <li>Panne volet roulant</li>
                                <li>Robot nettoyeur en panne</li>
                                <li>Régulateur pH/Redox HS</li>
                                <li>Domotique défaillante</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <h2 className="text-center mb-xl">Notre Processus d'Intervention</h2>
                    <div className="grid grid-4">
                        <div className="card text-center">
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-secondary)', marginBottom: '1rem' }}>1</div>
                            <h3>Contact</h3>
                            <p>Appel téléphonique pour pré-diagnostic et prise de rendez-vous.</p>
                        </div>
                        <div className="card text-center">
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-secondary)', marginBottom: '1rem' }}>2</div>
                            <h3>Diagnostic</h3>
                            <p>Déplacement sur site et identification précise de la panne.</p>
                        </div>
                        <div className="card text-center">
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-secondary)', marginBottom: '1rem' }}>3</div>
                            <h3>Devis</h3>
                            <p>Proposition chiffrée immédiate pour la réparation.</p>
                        </div>
                        <div className="card text-center">
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-secondary)', marginBottom: '1rem' }}>4</div>
                            <h3>Intervention</h3>
                            <p>Intervention immédiate ou commande rapide des pièces.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.ctaSection}`}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Besoin d'un Dépannage Urgent ?</h2>
                        <p>Nous sommes disponibles 7j/7 en saison estivale</p>
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
