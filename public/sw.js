// I've declared the global db variable here
// this is what you'll assign a database into and
// access at later points
let db;

/**
 * TASK 1
 * 
 * open a database and handle the following events:
 *  - onerror: log the event to the console
 *  - onupgradeneeded:
 *      - assign the result of the event into the global db variable
 *      - create an object store with the name "operations", with the keyPath 'id' and autoIncrement: true
 *  - onsuccess: assign the result of the event into the global db variable
 */
function createDatabase() {
    console.log('Create database called');
}

/**
 * TASK 2
 * 
 * Implement a standard service worker install event
 */
self.addEventListener('install', () => {
    console.log('SW install event triggered');
});

/**
 * TASK 3
 * 
 * Implement a standard service worker activate event
 *  - call 'createDatabase' before the SW claims clients
 */
self.addEventListener('activate', (event) => {
    console.log('SW activate event triggered');
});

/**
 * TASK 4
 * 
 * @param {Request} request - a DELETE request
 * @returns Response
 * 
 * Implement a fetch request handler that:
 *  - attempts to make the request and return the response like normal
 *  - if you catch an error:
 *      - open a readwrite transaction with permission to access the 'operations' object store
 *      - access the 'operations' object store
 *      - add an entry to this object store with the appropriate 'method' and 'url'
 *      - return this value: new Response(JSON.stringify({ failure: true }))
 */
const handleDelete = async (request) => {
    console.log('handleDelete called');
}

/**
 * TASK 5
 * 
 * @param {Request} request - a POST request
 * @returns Response
 * 
 * Implement a fetch request handler that:
 *  - attempts to make the request and return the response like normal
 *  - if you catch an error:
 *      - get the json contents of the request
 *          - open a readwrite transaction with permission to access the 'operations' object store
 *          - access the 'operations' object store
 *          - add an entry to this object store with the appropriate 'method', 'value', and 'url'
 *      - return this value: new Response(JSON.stringify({ failure: true }))
 */
const handlePost = async (request) => {
    console.log('handlePost called');
}

/**
 * TASK 6
 * 
 * @param {Request} request - a GET Request 
 * @returns Response
 * 
 * Implement a fetch handler with standard caching behavior
 *  - attempt to find a match for this request and return it if found
 *  - if no match is found:
 *      - try to fetch the response normally
 *      - open the cache 'cmt-250-final'
 *      - put the request and response into the cache
 *      - return the response
 *  - if you catch an error:
 *      - return this value: new Response('Network error happened', {
            status: 408,
            headers: { 'Content-Type': 'text/plain' },
        });
 */
const handleOtherGets = async (request) => {
    console.log('handleOtherGets called');
}

/**
 * TASK 7
 * 
 * @param {Request} request - a GET Request 
 * @returns a Response
 * 
 * Implement a fetch handler specifically for the endpoint 'http://localhost:3000/tasks'
 *  - Attempt to fetch and return the response as normal
 *  - if you catch an error:
 *      - return this value: new Response(JSON.stringify({ failure: true }));
 *      -- the Response value listed above produces specific results in the app,
 *      -- it is important that you return that value specifically so the app
 *      -- doesn't break when it fetches tasks
 */
const handleGetTasks = async (request) => {
    console.log('handleGetTasks called');
}

/**
 * TASK 8
 * 
 * @param {Request} request - a GET Request
 * @returns Response
 * 
 * Check the value of the url of the request
 *  - if the url is 'http://localhost:3000/tasks', call 'handleGetTasks'
 *  - for all other urls, call 'handleOtherGets'
 */
async function handleFetch(request) {
    console.log('handleFetch called');
}

/**
 * TASK 9
 * 
 * Check the method of the request on the event
 *  - if the method is DELETE, respond to the event with the result of 'handleDelete'
 *  - if the method is POST, respond to the event with the result of 'handlePost'
 *  - if the method if GET, response to the event with the result of 'handleFetch'
 */
self.addEventListener('fetch', (event) => {
    console.log('fetch event handler triggered');
});

/**
 * Task 10
 * 
 * Service workers are not able to listen to the 'online' event directly,
 * the event that triggers when the browser regains internet. Because of this,
 * we need to implement a message listener that received a message from the main
 * app.
 * 
 * Implement this message listener that reads the operations from
 * the 'operations' object store and make requests to execute the
 * original requests they represent.
 * 
 *  - if event.data is equal to 'ONLINE':
 *      - get access to the object store
 *      - get all entries in the object store
 *      - for each entry:
 *          - delete the entry from the object store
 *              - when a deletion is complete, format an 'options' object that you will use in a fetch
 *              - NOTE: when formatting your 'options', remember POST requests will need a body, and 
 *                DELETE requests don't, and may break if they have one
 *              - execute the fetch to the URL of the entry with the 'options' you set
 */
self.addEventListener('message', async (event) => {
    console.log('message event handler triggered');
});