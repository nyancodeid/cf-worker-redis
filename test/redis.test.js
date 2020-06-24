require('isomorphic-fetch')

const uuid = require('uuid/v4')
const services = require('../src/services/method.js')
const expect = require('chai').expect

const sessionId = uuid()

describe('Worker Test', function () {
  it('it will be return sessionId', function () {
    const session = services.createSessionId()

    expect(session).to.have.property('success', true)
  })

  it('it will be successfully set key', async function () {
    const data = {
      sessionId: sessionId,
      key: "TEST_KEY",
      value: "TEST_VALUE"
    }
    const result = await services.setItem(data)

    expect(result).to.have.property('success', true)
    expect(result).to.have.property('key').equal(data.key)
    expect(result).to.have.property('value').equal(data.value)
  })

  it('it will be successfully get key', async function () {
    const data = {
      sessionId: sessionId,
      key: "TEST_KEY"
    }
    const result = await services.getItem(data)

    expect(result).to.have.property('success', true)
    expect(result).to.have.property('value').equal("TEST_VALUE")
  })
})