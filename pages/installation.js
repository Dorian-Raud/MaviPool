
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Installation.module.css';
import CallButton from '../components/CallButton';
import MailButton from '../components/EmailButton';
import { useTranslation } from '../lib/useTranslation';

export default function Installation() {
    const { t } = useTranslation('installation');

    const productImages = [
        "/images/open classic.jpg",
        "/images/pac polytropic.png",
        "/images/electrolyseur-au-sel-sterilor-evo-duo-sterilor.jpg",
        "/images/pompe-intelliflo-3-vsf.png",
        "/images/filtre triton.jpg",
        "/images/eclairage brio z.jpg",
        "/images/coffret solem.png"
    ];

    const products = t('products');

    return (
        <>
            <Head>
                <title>{t('meta.title')}</title>
                <meta name="description" content={t('meta.description')} />
            </Head>

            <div className={styles.pageHero} style={{ backgroundImage: 'linear-gradient(rgba(10, 36, 99, 0.7), rgba(10, 36, 99, 0.7)), url("/images/surface-piscine.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <h1>{t('hero.title')}</h1>
                    <p>{t('hero.subtitle')}</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className={styles.intro}>
                        <h2>{t('intro.title')}</h2>
                        <p>{t('intro.description')}</p>
                    </div>

                    <div className={styles.productsGrid}>
                        {Array.isArray(products) && products.map((product, index) => (
                            <div key={index} className={styles.productCard}>
                                <div className={styles.productImage}>
                                    <img
                                        src={productImages[index]}
                                        alt={product.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        onError={(e) => { e.target.onerror = null; e.target.src = "/images/logo.png" }}
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
