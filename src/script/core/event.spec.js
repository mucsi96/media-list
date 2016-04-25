/* global describe, it, sinon */
describe('Event', function () {
  var Event = $.require('Event')

  it('should allow to subscribe on events', function () {
    var event = new Event()
    var callback = sinon.spy()

    event.subscribe(callback)
    event.publish()
    callback.should.have.been.called
  })

  it('should allow to publish data', function () {
    var event = new Event()
    var callback = sinon.spy()

    event.subscribe(callback)
    event.publish('param1', 'param2')
    callback.should.have.been.calledWith('param1', 'param2')
  })
})
