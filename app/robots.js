export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/_next/', '/api/'],
    },
    sitemap: 'https://muhresky.rachmantos.org/sitemap.xml',
  }
}