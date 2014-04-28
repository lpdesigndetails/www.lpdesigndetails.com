jQuery(document).ready(function() {

    var setMargins = function(selector, marginTop, marginBottom, marginLeft) {
        selector.css( {'margin-top' : marginTop + 'px', 'margin-bottom' : marginBottom + 'px', 'margin-left' : marginLeft + 'px'} );
        window.scrollTo(0, 1);
    }

    var resizeImage = function() {
        var windowHeight = $(window).outerHeight();
        var navbarHeight = $('.navbar').outerHeight();

        var imageHeight = windowHeight - navbarHeight;
        var imageWidth = $('.main-image').width();
        var containerAspectRatio = imageWidth / imageHeight;

        /*
         console.log(' ');
         console.log('windowHeight' + '=' + windowHeight)
         console.log('navbarHeight' + '=' + navbarHeight);
         console.log('imageHeight' + '=' + imageHeight);
         console.log('imageWidth' + '=' + imageWidth);
         console.log('carouselAspectRatio' + '=' + carouselAspectRatio);
         */

        $('.main-image > img').each(function(index, element) {
            var image = $(element);
            var originalImageHeight = image.data('height');
            var originalImageWidth = image.data('width');
            var imageAspectRatio = defaultWidth / defaultHeight;

            /*
             console.log('defaultHeight' + '=' + defaultHeight);
             console.log('defaultWidth' + '=' + defaultWidth);
             console.log('aspectRatio' + '=' + aspectRatio);
             */

            if (containerAspectRatio > aspectRatio) { /* height will be constraining factor */
                image.height(imageHeight);
                var scaledImageWidth = (imageHeight / defaultHeight) * defaultWidth;
                image.width(scaledImageWidth);
                var targetWidth = (imageHeight / defaultHeight) * defaultWidth;
                var marginTop = 0;
                var marginBottom = 0;
                var marginLeft = (imageWidth - targetWidth) / 2;
                setMargins(image, marginTop, marginBottom, marginLeft);
            } else { /* width will be constraining factor */
                var scaledImageHeight = (imageWidth / defaultWidth) * defaultHeight;
                image.height(scaledImageHeight);
                image.width(imageWidth);
                var targetHeight = (imageWidth / defaultWidth) * defaultHeight;
                var marginTop = (imageHeight - targetHeight) / 2;
                var marginBottom = marginTop;
                var marginLeft = 0;
                setMargins(image, marginTop, marginBottom, marginLeft);
            }
        });
    };

    $(window).on('load resize orientationchange', resizeImage);

});