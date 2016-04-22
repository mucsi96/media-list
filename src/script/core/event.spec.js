/* global App, describe, it, chai, sinon */

describe('Event', function () {
  it('should allow to subscribe on event', function() {
    var event = new App.Event()
    var callback = sinon.spy()

    event.subscribe(callback)
    event.publish();
    callback.should.have.been.called

  })
})
