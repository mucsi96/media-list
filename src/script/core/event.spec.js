/* global describe, it, chai, sinon */

describe('Event', function () {
  var Event = $.require('Event')

  it('should allow to subscribe on events', function() {
    var event = new Event()
    var callback = sinon.spy()

    event.subscribe(callback)
    event.publish();
    callback.should.have.been.called

  })
})
