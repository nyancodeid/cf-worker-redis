const uuid = require('uuid/v4')

class Redis {
  constructor(id) {
    this.keys = []
    this.api = "http://try.redis.io"
    this.sessionId = (typeof id === "string") ? id : uuid()
  }

  async exec(command) {
    const options = {
      headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6',
        'x-requested-with': 'XMLHttpRequest'
      },
      body: null,
      method: 'GET'
    }

    try {
      const response = await fetch(`${this.api}/eval?command=${command}&session_id=${this.sessionId}`, options)
      const responseJson = await response.json()

      return responseJson.response
    } catch(error) {
      return Promise.reject(error)
    }
  }

  get(key) {
    key = Buffer.from(key).toString('base64')

    return this.exec(`get+${key}`).then(value => {
      if (value === "(nil)") return "";

      try {
        var trim = Buffer.from(value.replace(/['"]+/g, ''), 'base64').toString()
      } catch(error) {
        return Promise.reject(error)
      }

      return trim
    })
  }
  set(key, value) {
    value = Buffer.from(value).toString('base64')
    key = Buffer.from(key).toString('base64')

    return this.exec(`set+${key}+${value}`)
  }
  getKeys() {
    return this.exec(`keys '*'`)
  } 
}

module.exports = Redis
