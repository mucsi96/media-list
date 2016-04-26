/* global describe, it, beforeEach, afterEach, sinon */
describe('Notification', function () {
  var Notification = $.require('Notification')
  var clock

  beforeEach(function () {
    clock = sinon.useFakeTimers()
  })

  afterEach(function () {
    clock.restore()
  })

  it('should notify user about errors', function () {
    var notificationElement = $('<div>')
    var notification = new Notification({
      notification: notificationElement
    })
    notification.notify('Test error')
    notificationElement.is('.active').should.equal(true)
    notificationElement.text().should.equal('Test error')
  })

  it('should hide notification after timeout', function () {
    var notificationElement = $('<div>')
    var notification = new Notification({
      notification: notificationElement
    }, 1000)
    notification.notify('Test error')
    clock.tick(1001)
    notificationElement.is('.active').should.equal(false)
  })
})
