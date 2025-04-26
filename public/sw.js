self.addEventListener('install', () => {
    console.log('Service worker installed');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service worker activated');
    event.waitUntil(clients.claim());
});

self.addEventListener('message', async (event) => {
    console.log('Message Received');
    console.log(event.data);
    event.source.postMessage('Message from SW to Client');
});

async function handleFetch(event) {
    const request = event.request;
    const responseFromCache = await caches.match(request);

    if (responseFromCache) {
        console.log('Responding from cache');
        return responseFromCache;
    }

    try {

        const responseFromNetwork = await fetch(request.clone());
        const cache = await caches.open('v1')
        cache.put(request, responseFromNetwork.clone());
        console.log('Responding from network');
        return responseFromNetwork;

    } catch (error) {
        
        return new Response('Network error happened', {
            status: 408,
            headers: { 'Content-Type': 'text/plain' },
        });
    }
}