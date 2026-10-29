const fs = require('fs');
const path = require('path');

// Run after `vuepress build`: list the built pages in dist/sitemap.xml.
const siteUrl = 'https://docs.uniwebview.com';
const distDir = path.join(__dirname, '../dist');

// Pages that are not documentation: the 404 page and the test pages in public/.
const excludedPages = new Set(['/404.html', '/game.html', '/passthrough.html']);

function collectPages(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      return collectPages(fullPath);
    }
    return entry.name.endsWith('.html') ? [fullPath] : [];
  });
}

function toUrlPath(file) {
  const urlPath = '/' + path.relative(distDir, file).split(path.sep).join('/');
  return urlPath.replace(/(^|\/)index\.html$/, '$1');
}

const urls = collectPages(distDir)
  .map(toUrlPath)
  .filter(urlPath => !excludedPages.has(urlPath))
  .sort();

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(urlPath => `  <url><loc>${siteUrl}${urlPath}</loc></url>`),
  '</urlset>',
  ''
].join('\n');

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log(`Wrote ${urls.length} URLs to dist/sitemap.xml`);
