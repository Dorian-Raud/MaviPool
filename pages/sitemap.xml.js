const EXTERNAL_DATA_URL = 'https://www.mavipool.fr';

function SiteMap() {
    // Ce composant ne fait rien, le XML est envoyé par le serveur
}

export async function getServerSideProps({ res }) {
    const pages = [
        { url: '/', changefreq: 'weekly', priority: 1.0 },
        { url: '/entretien', changefreq: 'monthly', priority: 0.8 },
        { url: '/renovation', changefreq: 'monthly', priority: 0.8 },
        { url: '/depannage', changefreq: 'monthly', priority: 0.8 },
        { url: '/installation', changefreq: 'weekly', priority: 0.9 },
        { url: '/a-propos', changefreq: 'monthly', priority: 0.7 },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
            .map(
                (page) => `  <url>
    <loc>${EXTERNAL_DATA_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
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
