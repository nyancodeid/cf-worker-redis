require('isomorphic-fetch')

const uuid = require('uuid/v4')
const services = require('../src/services/method.js')
const should = require('should')

const sessionId = uuid()

describe('Worker Test', function () {
  it('it will be return sessionId', function () {
    const session = services.createSessionId()

    should(session).have.property('success', true)
  })

  it('it will be successfully set key', async function () {
    const data = {
      sessionId: sessionId,
      key: "TEST_KEY",
      value: "TEST_VALUE"
    }
    const result = await services.setItem(data)

    should(result).have.property('success', true)
    should(result).have.property('key').equal(data.key)
    should(result).have.property('value').equal(data.value)
  })

  it('it will be successfully get key', async function () {
    const data = {
      sessionId: sessionId,
      key: "TEST_KEY"
    }
    const result = await services.getItem(data)

    should(result).have.property('success', true)
    should(result).have.property('value').equal("TEST_VALUE")
  })
})