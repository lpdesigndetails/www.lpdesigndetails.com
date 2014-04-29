jQuery(document).ready(function() {

  var setSizeAndMargins = function(selector, height, width, marginTop, marginBottom, marginLeft) {
    selector.height(height);
    selector.width(width);
    selector.children().height(height);
    selector.children().width(width);
    selector.css( {'margin-top' : marginTop + 'px', 'margin-bottom' : marginBottom + 'px', 'margin-left' : 'auto', 'margin-right' : 'auto'} );
    window.scrollTo(0, 1);
  };

  var resizeCarousel = function() {
    var windowHeight = $(window).outerHeight(),
        navbarHeight = $('.navbar').outerHeight(),
        footerHeight = $('#footer').outerHeight(),
        carouselHeight = windowHeight - navbarHeight - footerHeight,
        carouselWidth = $('.carousel').width(),
        carouselAspectRatio = carouselWidth / carouselHeight;

    $('.carousel-inner > .item').each(function(index, element) {
      var item = $(element),
          optimalHeight = item.data('optimal-height'),
          optimalWidth = item.data('optimal-width'),
          aspectRatio = optimalWidth / optimalHeight,
          scaledImageWidth,
          scaledImageHeight,
          marginTop,
          marginBottom,
          marginLeft;
      if (carouselAspectRatio > aspectRatio) { /* height will be constraining factor */
        scaledImageWidth = (carouselHeight / optimalHeight) * optimalWidth;
        scaledImageHeight = carouselHeight;
        marginTop = marginBottom = 0;
        marginLeft = (carouselWidth - scaledImageWidth) / 2;
      } else { /* width will be constraining factor */
        scaledImageWidth = carouselWidth;
        scaledImageHeight = (carouselWidth / optimalWidth) * optimalHeight;
        marginTop = marginBottom = (carouselHeight - scaledImageHeight) / 2;
        marginLeft = 0;
      }
      setSizeAndMargins(item, scaledImageHeight, scaledImageWidth, marginTop, marginBottom, marginLeft);
    });

  };

  $(window).on('load resize orientationchange', resizeCarousel);

});

$(document).ready(function() {  
      Hammer($('.carousel-inner').get(0)).on('dragleft', function() {
        $('.right.carousel-control').click();
      });
      Hammer($('.carousel-inner').get(0)).on('dragright', function() {
        $('.left.carousel-control').click();
      });
 });