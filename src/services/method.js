const Redis = require('../models/redis')

function createSessionId() {
  const redis = new Redis()

  return {
    success: true,
    sessionId: redis.sessionId
  }
}

function getItem (data) {
  const redis = new Redis(data.sessionId)

  return redis.get(data.key).then(response => {
    return {
      success: true,
      value: response,
      __meta__: data
    }
  }).catch((error) => {
    return { success: false, error: String(error) }
  })
}

function setItem (data) {
  const redis = new Redis(data.sessionId)

  return redis.set(data.key, data.value).then(response => {
    return {
      success: (response === "OK"),
      key: data.key,
      value: data.value
    }
  }).catch((error) => {
    return { success: false, error: String(error) }
  })
}

module.exports = { createSessionId, getItem, setItem }