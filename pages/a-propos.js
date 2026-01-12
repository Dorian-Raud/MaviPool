import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <>
            <Head>
                <title>À Propos de MaviPool - Pisciniste Alpes-Maritimes</title>
                <meta name="description" content="Découvrez MaviPool, votre expert pisciniste dans les Alpes-Maritimes. Notre histoire, nos valeurs et notre équipe à votre service." />
            </Head>

            <section className="section">
                <div className="container">
                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutContent}>
                            <h2>Notre Histoire</h2>
                            <p>
                                Fondée par des passionnés de la piscine, MaviPool est née d'une volonté simple :
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
                                Aujourd'hui, MaviPool est reconnu comme un acteur majeur de la piscine dans le 06,
                                intervenant auprès d'une clientèle exigeante de particuliers et de professionnels.
                            </p>
                        </div>
                        <div className={styles.aboutImage}>
                            <img src="images/patron.png" alt="Président de MaviPool" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.valuesSection}`}>
                <div className="container">
                    <h2 className="text-center mb-xl">Nos Valeurs</h2>
                    <div className="grid grid-3">
                        <div className={`card ${styles.valueCard}`}>
                            <div className={styles.valueIcon}>💎</div>
                            <h3>Excellence</h3>
                            <p>
                                Nous visons la perfection dans chaque intervention. Le souci du détail et la
                                qualité des finitions sont au cœur de notre démarche.
                            </p>
                        </div>
                        <div className={`card ${styles.valueCard}`}>
                            <div className={styles.valueIcon}>🤝</div>
                            <h3>Confiance</h3>
                            <p>
                                La transparence et l'honnêteté sont les bases de notre relation client.
                                Pas de surprise, des devis clairs et des délais respectés.
                            </p>
                        </div>
                        <div className={`card ${styles.valueCard}`}>
                            <div className={styles.valueIcon}>🚀</div>
                            <h3>Innovation</h3>
                            <p>
                                Nous restons à la pointe de la technologie pour vous proposer les solutions
                                les plus performantes et écologiques du marché.
                            </p>
                        </div>
                        <div className={`card ${styles.valueCard}`}>
                            <div className={styles.valueIcon}>🌱</div>
                            <h3>Écologie</h3>
                            <p>
                                Nous privilégions des solutions respectueuses de l'environnement pour
                                réduire la consommation d'eau et d'énergie de votre piscine.
                            </p>
                        </div>
                        <div className={`card ${styles.valueCard}`}>
                            <div className={styles.valueIcon}>⚡</div>
                            <h3>Réactivité</h3>
                            <p>
                                Nous savons qu'une panne de piscine n'attend pas. Notre organisation
                                nous permet d'intervenir rapidement en cas d'urgence.
                            </p>
                        </div>
                        <div className={`card ${styles.valueCard}`}>
                            <div className={styles.valueIcon}>🎓</div>
                            <h3>Expertise</h3>
                            <p>
                                Nos techniciens sont formés en continu aux nouvelles technologies et
                                normes en vigueur pour vous garantir un service optimal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="text-center mb-xl">Notre Zone d'Intervention</h2>
                    <div className={styles.zoneGrid}>
                        <div className={styles.zoneList}>
                            <h3>📍 Secteur Cannes / Antibes</h3>
                            <ul>
                                <li>Cannes & Cannes-la-Bocca</li>
                                <li>Le Cannet & Mougins</li>
                                <li>Antibes & Juan-les-Pins</li>
                                <li>Vallauris & Golfe-Juan</li>
                                <li>Biot & Valbonne</li>
                            </ul>
                        </div>
                        <div className={styles.zoneList}>
                            <h3>📍 Secteur Nice / Littoral</h3>
                            <ul>
                                <li>Nice & Villefranche-sur-Mer</li>
                                <li>Saint-Jean-Cap-Ferrat</li>
                                <li>Beaulieu-sur-Mer</li>
                                <li>Eze & Cap d'Ail</li>
                                <li>Cagnes-sur-Mer & St-Laurent-du-Var</li>
                            </ul>
                        </div>
                        <div className={styles.zoneList}>
                            <h3>📍 Secteur Est / Monaco</h3>
                            <ul>
                                <li>Monaco & Monte-Carlo</li>
                                <li>Menton & Roquebrune-Cap-Martin</li>
                                <li>Beausoleil</li>
                                <li>La Turbie</li>
                            </ul>
                        </div>
                        <div className={styles.zoneList}>
                            <h3>📍 Arrière-Pays</h3>
                            <ul>
                                <li>Grasse & Environs</li>
                                <li>Vence & Saint-Paul-de-Vence</li>
                                <li>Mouans-Sartoux</li>
                                <li>Pégomas & Mandelieu</li>
                            </ul>
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
                            <a href="tel:+33123456789" className="btn btn-accent">
                                📞 01 23 45 67 89
                            </a>
                            <Link href="/#contact" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
                                Demander un Devis
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
