
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Installation.module.css';
import CallButton from '../components/CallButton';
import MailButton from '../components/EmailButton';

export default function Installation() {

    const products = [
        {
            category: "Protection & Sécurité",
            title: "Volet Roulant Automatique",
            description: "Sécurisez votre bassin avec élégance. Nos volets roulants, immergés ou hors-sol, offrent une protection optimale, maintiennent la température de l'eau et réduisent l'évaporation.",
            image: "images/couverture oé.jpg"
        },
        {
            category: "Chauffage",
            title: "Pompe à Chaleur Polytropic",
            description: "Prolongez la baignade avec les PAC Polytropic. Silencieuses et connectées, elles adaptent leur puissance pour un confort thermique idéal toute l'année.",
            image: "images/pac polytropic.png"
        },
        {
            category: "Traitement de l'Eau",
            title: "Électrolyseur au Sel",
            description: "Fini les produits agressifs. L'électrolyse au sel désinfecte votre eau automatiquement pour une baignade douce, sans odeur de chlore ni irritation.",
            image: "images/electrolyseur-au-sel-sterilor-evo-duo-sterilor.jpg"
        },
        {
            category: "Filtration",
            title: "Pompe de Filtration",
            description: "Le cœur de votre piscine. Nous installons des pompes performantes et économes en énergie (vitesse variable) pour une eau cristalline sans bruit excessif.",
            image: "images/pompe-intelliflo-3-vsf.png"
        },
        {
            category: "Filtration",
            title: "Filtre Triton",
            description: "Le cœur de votre piscine. Nous installons des filtres performants pour une eau cristalline.",
            image: "images/filtre triton.jpg"
        },
        {
            category: "Éclairage",
            title: "Éclairage LED",
            description: "Illuminez vos soirées. Des projecteurs LED puissants et économiques (blancs ou RGB) pour créer des ambiances uniques et mettre en valeur votre bassin.",
            image: "images/eclairage brio z.jpg"
        },
        {
            category: "Électricité",
            title: "Coffret Électrique Connecté",
            description: "Pilotez votre piscine du bout des doigts. Coffrets intelligents pour gérer filtration, éclairage et chauffage directement depuis votre smartphone.",
            image: "images/coffret solem.png"
        }
    ];

    return (
        <>
            <Head>
                <title>Nos produits Piscine - Mavi Pool Alpes-Maritimes</title>
                <meta name="description" content="Découvrez notre sélection de produits piscine : volets, pompes à chaleur, électrolyseurs, robots... Installation par Mavi Pool dans le 06." />
            </Head>

            <div className={styles.pageHero} style={{ backgroundImage: 'linear-gradient(rgba(10, 36, 99, 0.7), rgba(10, 36, 99, 0.7)), url("/images/surface-piscine.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <h1>Nos Équipements</h1>
                    <p>Une sélection de produits performants pour votre confort</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className={styles.intro}>
                        <h2>Qualité • Performance • Durabilité</h2>
                        <p>
                            Chez Mavi Pool, nous ne posons que ce que nous approuvons. Nous avons sélectionné pour vous
                            les meilleures marques et les équipements les plus fiables du marché pour garantir
                            la longévité de votre installation et votre tranquillité d'esprit.
                        </p>
                    </div>

                    <div className={styles.productsGrid}>
                        {products.map((product, index) => (
                            <div key={index} className={styles.productCard}>
                                <div className={styles.productImage}>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        onError={(e) => { e.target.onerror = null; e.target.src = "/images/logo.png" }} // Fallback au logo si pas d'image
                                    />
                                </div>
                                <div className={styles.productContent}>
                                    <span className={styles.productCategory}>{product.category}</span>
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`section ${styles.ctaSection}`}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Un projet d'équipement ?</h2>
                        <p>Besoin d'un conseil ou d'un devis pour l'installation d'un de ces produits ?</p>
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
