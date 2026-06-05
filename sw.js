// sw.js - Dil Ke AnnS Career Saathi
// Service Worker for offline caching + background sync

const CACHE_NAME = 'dilkeanns-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/something_interesting.html',
  '/study_material.html',
  '/after_10th.html',
  '/after_12th.html',
  '/medical.html',
  '/manifest.json',
  // Add CSS/JS files if any (e.g., styles.css, app.js)
];

// Install event – cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting(); // Activate immediately
});

// Activate – clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch – network first, fallback to cache
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // For API calls (your backend) – do not cache, always network
  if (url.pathname.startsWith('/anns-ai/') || url.pathname.startsWith('/exams') || url.pathname.startsWith('/jobs') || url.pathname.startsWith('/updates')) {
    event.respondWith(fetch(event.request));
    return;
  }
  
  // For PDFs – cache on demand (first fetch stores it)
  if (url.pathname.endsWith('.pdf')) {
    event.respondWith(
      caches.open('pdf-cache').then((cache) => {
        return cache.match(event.request).then((cached) => {
          if (cached) return cached;
          return fetch(event.request).then((response) => {
            if (response.ok) cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
    return;
  }
  
  // For static assets – network first, fallback to cache (offline)
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache a copy of successful responses for next time
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          // Fallback for offline – return a basic page (optional)
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
          return new Response('Offline content not available', { status: 404 });
        });
      })
  );
});

// ========== BACKGROUND SYNC ==========
// Register a sync event for updates (called from frontend)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-updates') {
    event.waitUntil(syncUpdates());
  }
});

async function syncUpdates() {
  console.log('[SW] Background sync: fetching updates');
  try {
    const lastSync = await getLastSyncTime();
    const response = await fetch(`/updates?since=${encodeURIComponent(lastSync)}`);
    if (!response.ok) throw new Error('Sync failed');
    const data = await response.json();
    
    // Store updates in IndexedDB (via clients)
    const clients = await self.clients.matchAll({ includeUncontrolled: true });
    for (const client of clients) {
      client.postMessage({
        type: 'SYNC_UPDATES',
        payload: data
      });
    }
    
    // Save new sync timestamp
    await setLastSyncTime(data.server_time || new Date().toISOString());
    
    // Show notification if new exams/jobs found
    const newCount = (data.exams?.length || 0) + (data.jobs?.length || 0) + (data.courses?.length || 0);
    if (newCount > 0 && self.registration.showNotification) {
      self.registration.showNotification('📢 New Updates Available', {
        body: `${newCount} new exams/jobs/courses added. Open app to view.`,
        icon: '/favicon.ico',
        badge: '/favicon.ico'
      });
    }
  } catch (err) {
    console.error('[SW] Sync error:', err);
  }
}

// Helper: store last sync time in IndexedDB (from service worker)
function getLastSyncTime() {
  return new Promise((resolve) => {
    const request = indexedDB.open('DilKeAnnS_CreativeDB', 1);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('sync')) {
        db.createObjectStore('sync', { keyPath: 'id' });
      }
    };
    request.onsuccess = (e) => {
      const db = e.target.result;
      const tx = db.transaction('sync', 'readonly');
      const store = tx.objectStore('sync');
      const getReq = store.get('lastSync');
      getReq.onsuccess = () => {
        const val = getReq.result?.timestamp || '1970-01-01T00:00:00Z';
        resolve(val);
        db.close();
      };
      getReq.onerror = () => resolve('1970-01-01T00:00:00Z');
    };
    request.onerror = () => resolve('1970-01-01T00:00:00Z');
  });
}

function setLastSyncTime(timestamp) {
  return new Promise((resolve) => {
    const request = indexedDB.open('DilKeAnnS_CreativeDB', 1);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('sync')) {
        db.createObjectStore('sync', { keyPath: 'id' });
      }
    };
    request.onsuccess = (e) => {
      const db = e.target.result;
      const tx = db.transaction('sync', 'readwrite');
      const store = tx.objectStore('sync');
      store.put({ id: 'lastSync', timestamp: timestamp });
      tx.oncomplete = () => { db.close(); resolve(); };
    };
  });
}

// Listen for periodic background sync (if supported)
if ('periodicSync' in self.registration) {
  self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'periodic-updates') {
      event.waitUntil(syncUpdates());
    }
  });
}

// Optional: Push notification handler
self.addEventListener('push', (event) => {
  const data = event.data?.json() || {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'Career Saathi Update', {
      body: data.body || 'New exams/jobs available',
      icon: '/favicon.ico',
      data: { url: data.url || '/' }
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
