/* global describe, it, chai, sinon */

describe('View', function () {
  var View = $.require('View')

  it('should be able to render using template', function () {
    var view = new View()
    var testElement = $('#test')
    testElement.empty()
    view.render('test', testElement, { name: 'alpha', email: 'alpha@email.com' })
    var html = testElement.html().replace(/\s/g, '')
    html.should.equal('<h1>alpha</h1><h2>alpha@email.com</h2>')
  });
});
