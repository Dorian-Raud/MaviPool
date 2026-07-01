const EXTERNAL_DATA_URL = 'https://www.mavipool.fr';
const LOCALES = ['fr', 'en', 'it', 'tr'];
const DEFAULT_LOCALE = 'fr';

const PAGES = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/installation', changefreq: 'weekly', priority: 0.9 },
    { url: '/entretien', changefreq: 'monthly', priority: 0.8 },
    { url: '/renovation', changefreq: 'monthly', priority: 0.8 },
    { url: '/depannage', changefreq: 'monthly', priority: 0.8 },
    { url: '/a-propos', changefreq: 'monthly', priority: 0.7 },
    { url: '/mentions-legales', changefreq: 'yearly', priority: 0.2 },
    { url: '/confidentialite', changefreq: 'yearly', priority: 0.2 },
];

function localizedPath(locale, url) {
    const cleanPath = url === '/' ? '' : url;
    return locale === DEFAULT_LOCALE ? cleanPath || '/' : `/${locale}${cleanPath}`;
}

function SiteMap() {
    // Ce composant ne fait rien, le XML est envoyé par le serveur
}

export async function getServerSideProps({ res }) {
    const entries = PAGES.flatMap((page) =>
        LOCALES.map((locale) => ({
            loc: `${EXTERNAL_DATA_URL}${localizedPath(locale, page.url)}`,
            changefreq: page.changefreq,
            priority: page.priority,
            alternates: LOCALES.map((altLocale) => ({
                hreflang: altLocale,
                href: `${EXTERNAL_DATA_URL}${localizedPath(altLocale, page.url)}`,
            })),
        }))
    );

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
            .map(
                (entry) => `  <url>
    <loc>${entry.loc}</loc>
${entry.alternates
                        .map(
                            (alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`
                        )
                        .join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${entry.alternates.find((a) => a.hreflang === DEFAULT_LOCALE).href}" />
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
            )
            .join('\n')}
</urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
