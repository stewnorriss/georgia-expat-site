import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tbilisi-expat-guide.com'
  const currentDate = new Date()

  // Main pages
  const routes = [
    '',
    '/restaurants',
    '/housing',
    '/transport',
    '/culture',
    '/language',
    '/activities',
    '/places',
    '/accommodation',
    '/sports',
    '/medical',
    '/arts',
    '/blog',
    '/recommendations',
    '/tools',
    '/emergency',
    '/legal',
    '/daytrips',
    '/shopping',
    '/community',
    '/currency',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
