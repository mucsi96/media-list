$.define('utils', function (module) {
  function match (a, b) {
    return Object.keys(b).every(function (key) {
      return b[key] === a[key]
    })
  }

  function objectEquals (a, b) {
    return match(a, b) && match(b, a)
  }

  module.exports = {
    match: match,
    objectEquals: objectEquals
  }
})
