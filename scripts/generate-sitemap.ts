import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CONFIGURATION
const BASE_URL = 'https://arda.tr';
const OUTPUT_FILE = path.join(__dirname, '..', 'dist', 'sitemap.xml');

// All routes for the portfolio website
const routes = [
    { path: '/', priority: '1.0', changefreq: 'monthly' },
    { path: '/#about', priority: '0.8', changefreq: 'monthly' },
    { path: '/#portfolio', priority: '0.8', changefreq: 'monthly' },
];

/**
 * Generate sitemap XML content
 */
function generateSitemapXml(): string {
    const today = new Date().toISOString().split('T')[0];

    const urlEntries = routes
        .map(
            route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
        )
        .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

// Main execution
function main() {
    // Ensure dist directory exists
    const distDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
    }

    const sitemapContent = generateSitemapXml();
    fs.writeFileSync(OUTPUT_FILE, sitemapContent);

    console.log(`✅ Sitemap generated at: ${OUTPUT_FILE}`);
    console.log(`   - Total URLs: ${routes.length}`);
}

main();
