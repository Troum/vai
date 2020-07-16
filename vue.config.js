const SitemapPlugin = require('sitemap-webpack-plugin').default;
const paths = [
  {
    path: "/",
    lastmod: new Date().toISOString().slice(0,10),
    priority: '0.8',
    changefreq: 'hourly'
  },
  {
    path: "/contact",
    lastmod: new Date().toISOString().slice(0,10),
    priority: '0.8',
    changefreq: 'hourly'
  },
  {
    path: "/photos",
    lastmod: new Date().toISOString().slice(0,10),
    priority: '0.8',
    changefreq: 'hourly'
  },
  {
    path: "/videos",
    lastmod: new Date().toISOString().slice(0,10),
    priority: '0.8',
    changefreq: 'hourly'
  },
  {
    path: "/about",
    lastmod: new Date().toISOString().slice(0,10),
    priority: '0.8',
    changefreq: 'hourly'
  },
  {
    path: "/band",
    lastmod: new Date().toISOString().slice(0,10),
    priority: '0.8',
    changefreq: 'hourly'
  },
  {
    path: "/opera",
    lastmod: new Date().toISOString().slice(0,10),
    priority: '0.8',
    changefreq: 'hourly'
  }
];
module.exports = {
  configureWebpack: {
    plugins: [
      new SitemapPlugin('https://malashkevich.by', paths, {
        filename: 'sitemap.xml',
        lastmod: true,
        changefreq: 'hourly',
        priority: '0.8'
      })
    ]
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
