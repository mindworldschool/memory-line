// v2: переход на общую оболочку trainer-shell. Новое имя удаляет старый кэш у посетителей.
// Раньше всё отдавалось из кэша навсегда, и обновления не доходили до вернувшихся посетителей.
const CACHE_NAME = 'memory-line-v2';

// Пути относительно папки тренажёра (раньше были от корня сайта и кэшировали чужое)
const urlsToCache = [
  './',
  './index.html',
  './app.js',
  './styles.css',
  './manifest.json',
  './assets/leo_mascot.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .catch((err) => console.error('Cache install failed:', err))
  );
  // Новая версия включается сразу, не дожидаясь закрытия всех вкладок
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  // Чужие адреса (шрифты Google, аналитика) — без вмешательства
  if (url.origin !== self.location.origin) return;

  const scopePath = new URL(self.registration.scope).pathname;
  const inScope = url.pathname.startsWith(scopePath);

  // Сеть в приоритете для страницы, кода, стилей, JSON и оболочки:
  // так правки доходят сразу, а кэш нужен только без сети.
  const isCode = request.mode === 'navigate' ||
    /\.(html|js|css|json)$/.test(url.pathname) ||
    url.pathname.endsWith('/') ||
    !inScope;

  if (isCode) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok && inScope) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Картинки и звуки тренажёра — из кэша, если уже есть, иначе из сети с сохранением
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).then((response) => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
      }
      return response;
    }))
  );
});
