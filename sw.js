const CACHE_NAME = 'study-material-v1';
const PDF_URLS = [
    'https://ncert.nic.in/textbook/pdf/fesc1.pdf',
    'https://ncert.nic.in/textbook/pdf/fess1.pdf',
    'https://ncert.nic.in/textbook/pdf/iesc1.pdf',
    'https://ncert.nic.in/textbook/pdf/jesc1.pdf',
    'https://ncert.nic.in/textbook/pdf/keph1.pdf',
    'https://ncert.nic.in/textbook/pdf/keph2.pdf',
    'https://ncert.nic.in/textbook/pdf/kech1.pdf',
    'https://ncert.nic.in/textbook/pdf/kech2.pdf',
    'https://ncert.nic.in/textbook/pdf/kebo1.pdf',
    'https://ncert.nic.in/textbook/pdf/kemh1.pdf',
    'https://ncert.nic.in/textbook/pdf/leph1.pdf',
    'https://ncert.nic.in/textbook/pdf/leph2.pdf',
    'https://ncert.nic.in/textbook/pdf/lech1.pdf',
    'https://ncert.nic.in/textbook/pdf/lech2.pdf',
    'https://ncert.nic.in/textbook/pdf/lebo1.pdf',
    'https://ncert.nic.in/textbook/pdf/lemh1.pdf',
    'https://ncert.nic.in/textbook/pdf/keac1.pdf',
    'https://ncert.nic.in/textbook/pdf/keac2.pdf',
    'https://ncert.nic.in/textbook/pdf/leac1.pdf',
    'https://ncert.nic.in/textbook/pdf/leac2.pdf',
    'https://ncert.nic.in/textbook/pdf/kebs1.pdf',
    'https://ncert.nic.in/textbook/pdf/lebs1.pdf',
    'https://ncert.nic.in/textbook/pdf/keec1.pdf',
    'https://ncert.nic.in/textbook/pdf/legy1.pdf',
    'https://ncert.nic.in/textbook/pdf/lehs1.pdf',
    'https://ncert.nic.in/textbook/pdf/leps1.pdf',
    'https://www.upsc.gov.in/sites/default/files/Notif-CSP-2025-Engl.pdf',
    'https://www.upsc.gov.in/question-papers',
    'https://ssc.nic.in'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(PDF_URLS);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
