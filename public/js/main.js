jQuery(document).ready(function() {

  var resize = function() {
    var windowHeight = $(window).outerHeight(),
      headerHeight = $('#header').outerHeight(),
      footerHeight = $('#footer').outerHeight(),
      contentHeight = windowHeight - headerHeight - footerHeight,
      contentWidth = $('#header').width(),
      selector = $('img.maximized');
      selector.width(contentWidth);
      selector.height(contentHeight);
  };

  $(window).on('load resize orientationchange', resize);

});

$(document).ready(function() {
  Hammer($('.carousel-inner').get(0)).on('dragleft', function() {
    $('.right.carousel-control').click();
  });
  Hammer($('.carousel-inner').get(0)).on('dragright', function() {
    $('.left.carousel-control').click();
  });
});