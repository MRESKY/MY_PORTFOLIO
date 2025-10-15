export default function sitemap() {
  const baseUrl = 'https://my-portfolio-mreskys-projects.vercel.app'
  const currentDate = new Date()
  
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    }
  ]
}