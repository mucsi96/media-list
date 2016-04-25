/* global describe, it */
describe('tabs', function () {
  var tabs = $.require('tabs')

  it('should handle tab switching', function () {
    var tab1 = $('<li class="active" data-toggle="test-tab1">')
    var tab2 = $('<li data-toggle="test-tab2">')
    var tabsElement = $('<ul>').append(tab1).append(tab2)
    tabs({
      tabs: tabsElement
    })
    tab2.click()
    tab1.is('.active').should.equal(false)
    $('#test-tab1').is('.active').should.equal(false)
    tab2.is('.active').should.equal(true)
    $('#test-tab2').is('.active').should.equal(true)
  })
})
