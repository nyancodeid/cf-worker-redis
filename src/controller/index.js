const { createSessionId } = require('../services/method.js')
const { sendResponse } = require('../helpers.js')

function sessionController () {
  const response = createSessionId()

  return sendResponse(response)
}

module.exports = { sessionController }
