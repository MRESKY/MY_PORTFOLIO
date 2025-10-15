export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/_next/', '/api/'],
    },
    sitemap: 'https://my-portfolio-mreskys-projects.vercel.app/sitemap.xml',
  }
}