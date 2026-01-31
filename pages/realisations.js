import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Realisations.module.css';
import CallButton from '../components/CallButton';
import MailButton from '../components/EmailButton';

export default function Realisations() {
    const projects = [
        {
            id: 1,
            title: "Villa Moderne à Cannes",
            location: "Cannes",
            type: "Installation complète",
            description: "Piscine à débordement avec système de filtration haute performance et éclairage LED",
            features: ["Piscine 12x5m", "Débordement", "Chauffage solaire", "Éclairage LED"],
            image: "/images/installation.png"
        },
        {
            id: 2,
            title: "Rénovation Luxury à Nice",
            location: "Nice",
            type: "Rénovation",
            description: "Transformation complète avec nouveau liner, margelles en pierre naturelle et spa intégré",
            features: ["Liner premium", "Margelles pierre", "Spa intégré", "Nage à contre-courant"],
            image: "/images/renovation.png"
        },
        {
            id: 3,
            title: "Résidence Antibes",
            location: "Antibes",
            type: "Installation",
            description: "Piscine familiale avec plage immergée et système de nettoyage automatique",
            features: ["Piscine 10x4m", "Plage immergée", "Robot automatique", "Volet roulant"],
            image: "/images/hero.png"
        },
        {
            id: 4,
            title: "Villa Vue Mer Menton",
            location: "Menton",
            type: "Rénovation Premium",
            description: "Rénovation haut de gamme avec mosaïque italienne et système domotique",
            features: ["Mosaïque italienne", "Domotique", "Pompe à chaleur", "Cascade design"],
            image: "/images/entretien.png"
        },
        {
            id: 5,
            title: "Propriété Monaco",
            location: "Monaco",
            type: "Installation Luxe",
            description: "Piscine infinity avec vue mer, système de filtration au sel et jacuzzi intégré",
            features: ["Infinity pool", "Filtration sel", "Jacuzzi", "Éclairage RGB"],
            image: "/images/depannage.png"
        },
        {
            id: 6,
            title: "Mas Provençal Grasse",
            location: "Grasse",
            type: "Rénovation écologique",
            description: "Modernisation avec système écologique, chauffage solaire et traitement naturel",
            features: ["Chauffage solaire", "Traitement naturel", "Liner écologique", "Pompe basse conso"],
            image: "/images/local_technique.png"
        }
    ];

    return (
        <>
            <Head>
                <title>Nos Réalisations - MaviPool Alpes-Maritimes</title>
                <meta name="description" content="Découvrez nos réalisations de piscines dans les Alpes-Maritimes. Installations, rénovations de luxe à Cannes, Nice, Monaco." />
            </Head>

            <div className={styles.pageHero} style={{ backgroundImage: 'linear-gradient(rgba(10, 36, 99, 0.7), rgba(10, 36, 99, 0.7)), url("/images/hero.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <h1>Nos Réalisations</h1>
                    <p>Découvrez quelques-uns de nos plus beaux projets dans les Alpes-Maritimes</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className={styles.intro}>
                        <h2>Des Projets d'Exception</h2>
                        <p>
                            Chaque piscine est unique et reflète les envies de nos clients. De Théoule-sur-Mer à Menton,
                            nous avons réalisé des centaines de projets d'installation et de rénovation.
                            Voici une sélection de nos réalisations les plus remarquables.
                        </p>
                    </div>

                    <div className={styles.projectsGrid}>
                        {projects.map((project) => (
                            <div key={project.id} className={`card ${styles.projectCard}`}>
                                <div className={styles.projectImage}>
                                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div className={styles.projectType}>{project.type}</div>
                                </div>
                                <div className={styles.projectContent}>
                                    <h3>{project.title}</h3>
                                    <div className={styles.projectLocation}>
                                        📍 {project.location}
                                    </div>
                                    <p>{project.description}</p>
                                    <div className={styles.projectFeatures}>
                                        {project.features.map((feature, index) => (
                                            <span key={index} className={styles.featureTag}>
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`section ${styles.statsSection}`}>
                <div className="container">
                    <h2 className="text-center mb-xl">MaviPool en Chiffres</h2>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>15+</div>
                            <div className={styles.statLabel}>Années d'Expérience</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>500+</div>
                            <div className={styles.statLabel}>Piscines Réalisées</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>98%</div>
                            <div className={styles.statLabel}>Clients Satisfaits</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>7j/7</div>
                            <div className={styles.statLabel}>Service Disponible</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.testimonialsSection}`}>
                <div className="container">
                    <h2 className="text-center mb-xl">Ce Que Disent Nos Clients</h2>
                    <div className={`grid grid-3 ${styles.testimonialsGrid}`}>
                        <div className={`card ${styles.testimonialCard}`}>
                            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                            <p className={styles.testimonialText}>
                                "Travail impeccable ! Notre piscine a été transformée. L'équipe est professionnelle
                                et à l'écoute. Je recommande vivement MaviPool."
                            </p>
                            <div className={styles.testimonialAuthor}>
                                <strong>Marie L.</strong>
                                <span>Cannes</span>
                            </div>
                        </div>

                        <div className={`card ${styles.testimonialCard}`}>
                            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                            <p className={styles.testimonialText}>
                                "Service de dépannage ultra rapide. Problème résolu en moins de 2h.
                                Technicien compétent et sympathique. Merci !"
                            </p>
                            <div className={styles.testimonialAuthor}>
                                <strong>Jean-Pierre M.</strong>
                                <span>Nice</span>
                            </div>
                        </div>

                        <div className={`card ${styles.testimonialCard}`}>
                            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                            <p className={styles.testimonialText}>
                                "Installation parfaite de notre nouvelle piscine. Respect des délais,
                                qualité irréprochable. Une équipe au top !"
                            </p>
                            <div className={styles.testimonialAuthor}>
                                <strong>Sophie D.</strong>
                                <span>Antibes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.ctaSection}`}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Votre Projet Nous Intéresse</h2>
                        <p>Contactez-nous pour discuter de votre projet de piscine</p>
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
