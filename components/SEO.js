import Head from 'next/head';
import { useRouter } from 'next/router';

const SITE_URL = 'https://www.mavipool.fr';
const LOCALES = ['fr', 'en', 'it', 'tr'];
const OG_LOCALES = { fr: 'fr_FR', en: 'en_US', it: 'it_IT', tr: 'tr_TR' };

function localizedPath(locale, pathname) {
    const cleanPath = pathname === '/' ? '' : pathname;
    return locale === 'fr' ? cleanPath : `/${locale}${cleanPath}`;
}

export default function SEO({
    title = 'MaviPool - Expert Piscine Alpes-Maritimes',
    description = 'Expert en installation, rénovation et entretien de piscines dans les Alpes-Maritimes. De Théoule-sur-Mer à Menton. Devis gratuit.',
    ogImage = '/images/hero.png',
    type = 'website',
    noindex = false
}) {
    const router = useRouter();
    const { locale, pathname } = router;
    const siteTitle = title.includes('MaviPool') ? title : `${title} - MaviPool`;
    const canonicalUrl = `${SITE_URL}${localizedPath(locale, pathname)}`;
    const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

    return (
        <Head>
            {/* Meta Tags de Base */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />

            {noindex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <>
                    {/* Liens Canoniques et alternates de langue */}
                    <link rel="canonical" href={canonicalUrl} />
                    {LOCALES.map((loc) => (
                        <link
                            key={loc}
                            rel="alternate"
                            hrefLang={loc}
                            href={`${SITE_URL}${localizedPath(loc, pathname)}`}
                        />
                    ))}
                    <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${localizedPath('fr', pathname)}`} />
                </>
            )}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteOgImage} />
            <meta property="og:locale" content={OG_LOCALES[locale] || 'fr_FR'} />
            <meta property="og:site_name" content="MaviPool" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteOgImage} />

            {/* Informations Business */}
            <meta name="geo.region" content="FR-06" />
            <meta name="geo.placename" content="Nice" />
            <meta name="geo.position" content="43.7034;7.2663" />
            <meta name="ICBM" content="43.7034, 7.2663" />

            {/* Preconnect pour les polices */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* Schema.org pour Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "MaviPool",
                        "image": absoluteOgImage,
                        "description": description,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "9 Rue Esther Poggio",
                            "postalCode": "06300",
                            "addressLocality": "Nice",
                            "addressRegion": "Provence-Alpes-Côte d'Azur",
                            "addressCountry": "FR"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "43.7034",
                            "longitude": "7.2663"
                        },
                        "url": SITE_URL,
                        "telephone": "+33674813721",
                        "email": "mavipool@outlook.fr",
                        "priceRange": "€€",
                        "areaServed": [
                            { "@type": "City", "name": "Cannes" },
                            { "@type": "City", "name": "Nice" },
                            { "@type": "City", "name": "Antibes" },
                            { "@type": "City", "name": "Monaco" },
                            { "@type": "City", "name": "Menton" }
                        ],
                        "serviceType": [
                            "Installation de piscine",
                            "Rénovation de piscine",
                            "Entretien de piscine",
                            "Dépannage de piscine"
                        ],
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday"
                            ],
                            "opens": "08:00",
                            "closes": "18:00"
                        }
                    })
                }}
            />
        </Head>
    );
}
