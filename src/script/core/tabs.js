$.define('tabs', function (module) {
  module.exports = function (elements) {
    elements.tabs.on('click', 'li', function (event) {
      var activeTab = elements.tabs.find('.active')
      activeTab.removeClass('active')
      $('#' + activeTab.data('toggle')).removeClass('active')
      var selectedTab = $(event.currentTarget)
      selectedTab.addClass('active')
      $('#' + selectedTab.data('toggle')).addClass('active')
    })
  }
})
