const Router = require('../src/router.js')
const expect = require('chai').expect


describe('Router Test', function () {
  it('it will create initial route', function () {
    const route = new Router()

    expect(route).to.have.property('routes').with.lengthOf(0)
  })

  it('it will create simple route get', function () {
    const route = new Router()

    route.get('/get', function() {})

    expect(route).to.be.a('object')
    expect(route).to.have.property('routes').with.lengthOf(1)
  })

  it('it will create simple route post', function () {
    const route = new Router()

    route.post('/set', function() {})

    expect(route).to.be.a('object')
    expect(route).to.have.property('routes').with.lengthOf(1)
  })

  it('it will have 2 conditions as a function', function() {
    const route = new Router()

    route.post('/set', function() {})
    
    expect(route).to.be.a('object')
    expect(route).to.have.property('routes').with.lengthOf(1)
    expect(route.routes[0].conditions).to.have.lengthOf(2)
    expect(route.routes[0].conditions[0]).to.be.a('function')
  })
})