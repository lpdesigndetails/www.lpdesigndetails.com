jQuery(document).ready(function() {

  var setMargins = function(selector, marginTop, marginBottom, marginLeft) {
    selector.css( {'margin-top' : marginTop + 'px', 'margin-bottom' : marginBottom + 'px', 'margin-left' : marginLeft + 'px'} );
    window.scrollTo(0, 1);
  }

  var resizeCarousel = function() {
    windowHeight = $(window).outerHeight();
    navbarHeight = $('.navbar').outerHeight();

    carouselHeight = windowHeight - navbarHeight;
    carouselWidth = $('.carousel-inner.container').width();
    carouselAspectRatio = carouselWidth / carouselHeight;

    /*
    console.log(' ');
    console.log('windowHeight' + '=' + windowHeight)
    console.log('navbarHeight' + '=' + navbarHeight);
    console.log('carouselHeight' + '=' + carouselHeight);
    console.log('carouselWidth' + '=' + carouselWidth);
    console.log('carouselAspectRatio' + '=' + carouselAspectRatio);
    */

    $('.carousel-inner > .item > img').each(function(index, element) {
      image = $(element);
      originalImageHeight = image.data('height');
      originalImageWidth = image.data('width');
      imageAspectRatio = originalImageWidth / originalImageHeight;

      /*
      console.log('originalImageHeight' + '=' + originalImageHeight);
      console.log('originalImageWidth' + '=' + originalImageWidth);
      console.log('imageAspectRatio' + '=' + imageAspectRatio);
      */

      if (carouselAspectRatio > imageAspectRatio) { /* height will be constraining factor */
        image.height(carouselHeight);
        scaledImageWidth = (carouselHeight / originalImageHeight) * originalImageWidth;
        image.width(scaledImageWidth);
        targetWidth = (carouselHeight / originalImageHeight) * originalImageWidth;
        marginTop = 0;
        marginBottom = 0;
        marginLeft = (carouselWidth - targetWidth) / 2;
        setMargins(image, marginTop, marginBottom, marginLeft);
      } else { /* width will be constraining factor */
        scaledImageHeight = (carouselWidth / originalImageWidth) * originalImageHeight;
        image.height(scaledImageHeight);
        image.width(carouselWidth);
        targetHeight = (carouselWidth / originalImageWidth) * originalImageHeight;
        marginTop = (carouselHeight - targetHeight) / 2;
        marginBottom = marginTop;
        marginLeft = 0;
        setMargins(image, marginTop, marginBottom, marginLeft);
      }
    });
  };

  $(window).on('load resize orientationchange', resizeCarousel);

});