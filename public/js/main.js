jQuery(document).ready(function() {

  var setSizeAndMargins = function(selector, width, height, marginTop, marginBottom, marginLeft) {
    selector.width(width);
    selector.height(height);
    selector.css( {'margin-top' : marginTop + 'px', 'margin-bottom' : marginBottom + 'px', 'margin-left' : marginLeft + 'px', 'margin-right' : 'auto'} );
    window.scrollTo(0, 1);
  };

  var resize = function() {
    var windowHeight = $(window).outerHeight(),
      headerHeight = $('.navbar').outerHeight(),
      footerHeight = $('#footer').outerHeight(),
      contentHeight = windowHeight - headerHeight - footerHeight,
      contentWidth = $('#content').width(),
      contentAspectRatio = contentWidth / contentHeight;

    $('#content > .maximized').each(function(index, element) {
      var item = $(element),
        optimalWidth = item.data('optimal-width'),
        optimalHeight = item.data('optimal-height'),
        optimalAspectRatio = optimalWidth / optimalHeight,
        scaledWidth,
        scaledHeight,
        marginTop,
        marginBottom,
        marginLeft;
      if (contentAspectRatio > optimalAspectRatio) { /* height will be constraining factor */
        scaledWidth = (contentHeight / optimalHeight) * optimalWidth;
        scaledHeight = contentHeight;
        marginTop = marginBottom = 0;
        marginLeft = (contentWidth - scaledWidth) / 2;
      } else { /* width will be constraining factor */
        scaledWidth = contentWidth;
        scaledHeight = (contentWidth / optimalWidth) * optimalHeight;
        marginTop = marginBottom = (contentHeight - scaledHeight) / 2;
        marginLeft = 0;
      }
      setSizeAndMargins(item, scaledWidth, scaledHeight, marginTop, marginBottom, marginLeft);
    });

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