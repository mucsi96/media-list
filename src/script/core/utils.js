$.define('utils', function (module) {
  function match (a, b) {
    return Object.keys(b).every(function (key) {
      return b[key] === a[key]
    })
  }

  module.exports = {
    match: match
  }
})
