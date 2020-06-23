const Router = require('./router.js')
const { sessionController } = require('./controller/index.js')
const { getItemController, setItemController } = require('./controller/redis.js')

/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const route = new Router()

    route.get('/', sessionController)
    route.get('/get', getItemController)
    route.post('/set', setItemController)

    const response = await route.route(request)
    return response
}
