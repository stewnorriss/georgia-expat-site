const CACHE_NAME = 'stews-tbilisi-v1.0.0'
const STATIC_CACHE = 'static-v1'
const DYNAMIC_CACHE = 'dynamic-v1'

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/restaurants',
  '/transport',
  '/blog',
  '/places',
  '/accommodation',
  '/recommendations',
  '/offline',
  '/manifest.json'
]

// Assets to cache on first request
const CACHE_STRATEGIES = {
  images: 'cache-first',
  api: 'network-first',
  pages: 'stale-while-revalidate'
}

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...')
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log('Service Worker: Static assets cached')
        return self.skipWaiting()
      })
      .catch(error => {
        console.error('Service Worker: Error caching static assets', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...')
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('Service Worker: Activated')
        return self.clients.claim()
      })
  )
})

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip external requests
  if (url.origin !== location.origin) return

  // Handle different types of requests
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request))
  } else if (url.pathname.startsWith('/api/')) {
    event.respondWith(handleApiRequest(request))
  } else {
    event.respondWith(handlePageRequest(request))
  }
})

// Handle image requests - cache first strategy
async function handleImageRequest(request) {
  try {
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }

    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    console.log('Service Worker: Image request failed', error)
    // Return a placeholder image or cached version
    return caches.match('/icons/icon-192x192.png')
  }
}

// Handle API requests - network first strategy
async function handleApiRequest(request) {
  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    console.log('Service Worker: API request failed, trying cache', error)
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Return offline API response
    return new Response(JSON.stringify({
      error: 'Offline',
      message: 'This feature requires an internet connection'
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

// Handle page requests - stale while revalidate strategy
async function handlePageRequest(request) {
  try {
    const cachedResponse = await caches.match(request)
    const networkResponsePromise = fetch(request)

    if (cachedResponse) {
      // Return cached version immediately, update in background
      networkResponsePromise
        .then(networkResponse => {
          if (networkResponse.ok) {
            const cache = caches.open(DYNAMIC_CACHE)
            cache.then(c => c.put(request, networkResponse))
          }
        })
        .catch(() => {
          // Network failed, but we have cached version
        })
      
      return cachedResponse
    }

    // No cached version, wait for network
    const networkResponse = await networkResponsePromise
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    console.log('Service Worker: Page request failed', error)
    
    // Try to return cached version
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Return offline page
    return caches.match('/offline') || new Response('Offline', { status: 503 })
  }
}

// Background sync for offline actions
self.addEventListener('sync', event => {
  console.log('Service Worker: Background sync', event.tag)
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync())
  }
})

async function doBackgroundSync() {
  try {
    // Sync any pending offline actions
    const pendingActions = await getStoredActions()
    
    for (const action of pendingActions) {
      try {
        await fetch(action.url, action.options)
        await removeStoredAction(action.id)
      } catch (error) {
        console.log('Service Worker: Failed to sync action', error)
      }
    }
  } catch (error) {
    console.log('Service Worker: Background sync failed', error)
  }
}

// Push notifications
self.addEventListener('push', event => {
  console.log('Service Worker: Push received', event)
  
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Open App',
        icon: '/icons/icon-192x192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/icon-192x192.png'
      }
    ]
  }
  
  event.waitUntil(
    self.registration.showNotification('Stew\'s Tbilisi Guide', options)
  )
})

// Notification click handling
self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notification clicked', event)
  
  event.notification.close()
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})

// Helper functions for offline storage
async function getStoredActions() {
  // In a real app, this would read from IndexedDB
  return []
}

async function removeStoredAction(id) {
  // In a real app, this would remove from IndexedDB
  return true
}

// Update notification
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})