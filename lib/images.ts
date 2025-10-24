// Utility functions for generating placeholder images
export const generatePlaceholderImage = (
  width: number = 400,
  height: number = 300,
  text: string = '',
  bgColor: string = '6366f1',
  textColor: string = 'ffffff'
): string => {
  return `https://via.placeholder.com/${width}x${height}/${bgColor}/${textColor}?text=${encodeURIComponent(text)}`
}

export const getUnsplashImage = (
  category: string,
  width: number = 400,
  height: number = 300,
  seed?: string
): string => {
  const seedParam = seed ? `&sig=${seed}` : ''
  return `https://source.unsplash.com/${width}x${height}/?${category}${seedParam}`
}

// Restaurant image categories
export const restaurantImages = {
  georgian: 'https://source.unsplash.com/400x300/?georgian-food,khachapuri',
  traditional: 'https://source.unsplash.com/400x300/?traditional-restaurant,cozy',
  fine_dining: 'https://source.unsplash.com/400x300/?fine-dining,elegant',
  casual: 'https://source.unsplash.com/400x300/?casual-dining,friendly',
  international: 'https://source.unsplash.com/400x300/?international-cuisine',
  wine: 'https://source.unsplash.com/400x300/?wine,restaurant'
}

// Place image categories
export const placeImages = {
  fortress: 'https://source.unsplash.com/400x300/?ancient-fortress,castle',
  church: 'https://source.unsplash.com/400x300/?orthodox-church,cathedral',
  museum: 'https://source.unsplash.com/400x300/?museum,art-gallery',
  park: 'https://source.unsplash.com/400x300/?city-park,green-space',
  bridge: 'https://source.unsplash.com/400x300/?modern-bridge,architecture',
  old_town: 'https://source.unsplash.com/400x300/?old-town,cobblestone',
  mountain: 'https://source.unsplash.com/400x300/?mountain-view,landscape',
  thermal: 'https://source.unsplash.com/400x300/?thermal-baths,spa'
}

// Transport image categories
export const transportImages = {
  metro: 'https://source.unsplash.com/400x300/?subway-station,metro',
  bus: 'https://source.unsplash.com/400x300/?city-bus,public-transport',
  taxi: 'https://source.unsplash.com/400x300/?taxi,urban-transport',
  airport: 'https://source.unsplash.com/400x300/?airport,terminal'
}

// Activity image categories
export const activityImages = {
  hiking: 'https://source.unsplash.com/400x300/?hiking,mountain-trail',
  wine_tour: 'https://source.unsplash.com/400x300/?vineyard,wine-tasting',
  cultural: 'https://source.unsplash.com/400x300/?cultural-activity,traditional',
  adventure: 'https://source.unsplash.com/400x300/?adventure-sports,outdoor'
}