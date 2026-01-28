export default function sitemap() {
  const baseUrl = 'https://muhresky.rachmantos.org'
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