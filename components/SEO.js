import Head from 'next/head';

export default function SEO({
    title = 'MaviPool - Expert Piscine Alpes-Maritimes',
    description = 'Expert en installation, rénovation et entretien de piscines dans les Alpes-Maritimes. De Théoule-sur-Mer à Menton. Devis gratuit.',
    keywords = 'piscine, installation piscine, rénovation piscine, entretien piscine, dépannage piscine, Alpes-Maritimes, Cannes, Nice, Monaco, Antibes, Menton',
    ogImage = '/images/og-image.jpg',
    url = 'https://www.mavipool.fr',
    type = 'website'
}) {
    const siteTitle = title.includes('MaviPool') ? title : `${title} - MaviPool`;

    return (
        <Head>
            {/* Meta Tags de Base */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:site_name" content="MaviPool" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Informations Business */}
            <meta name="geo.region" content="FR-06" />
            <meta name="geo.placename" content="Alpes-Maritimes" />
            <meta name="geo.position" content="43.7102;7.2620" />
            <meta name="ICBM" content="43.7102, 7.2620" />

            {/* Liens Canoniques */}
            <link rel="canonical" href={url} />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />

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
                        "image": ogImage,
                        "description": description,
                        "address": {
                            "@type": "PostalAddress",
                            "addressRegion": "Alpes-Maritimes",
                            "addressCountry": "FR"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "43.7102",
                            "longitude": "7.2620"
                        },
                        "url": url,
                        "telephone": "+33123456789",
                        "email": "contact@mavipool.fr",
                        "priceRange": "€€",
                        "areaServed": [
                            {
                                "@type": "City",
                                "name": "Cannes"
                            },
                            {
                                "@type": "City",
                                "name": "Nice"
                            },
                            {
                                "@type": "City",
                                "name": "Antibes"
                            },
                            {
                                "@type": "City",
                                "name": "Monaco"
                            },
                            {
                                "@type": "City",
                                "name": "Menton"
                            }
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
