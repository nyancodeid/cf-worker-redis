const { getItem, setItem } = require('../services/method.js')
const { sendResponse } = require('../helpers.js')

async function getItemController (req) {
  const url = new URL(req.url)
  const data = {
    key: url.searchParams.get("key"),
    sessionId: url.searchParams.get("session")
  }

  const response = await getItem(data)

  return sendResponse(response)
}

async function setItemController (req) {
  const url = new URL(req.url)
  const body = await req.json()
  
  const data = {
    sessionId: url.searchParams.get("session"),
    key: body.key,
    value: body.value
  }

  const response = await setItem(data)

  return sendResponse(response)
}

module.exports = { getItemController, setItemController }