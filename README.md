lpdesigndetails.github.io
=========================

```
docker run --volume `pwd`:/gh-pages --publish 4000:4000 lukewpatterson/lpdesigndetails
```


// Extra small screen / phone
@screen-xs:                  480px;
// Small screen / tablet
@screen-sm:                  768px;
// Medium screen / desktop
@screen-md:                  992px;
// Large screen / wide desktop
@screen-lg:                  1200px;



@screen-lg
1080p - 1920 x 888


Home1 was 2400x1600 - size is 1,855,682 bytes


@screen-xs - 480px - 1.5 aspect ratio
iPhone 3GS - landscape
480x320 px, css px

@screen-sm - 768px - 1.78 aspect ratio
iPhone 5 - landscape
1136x640 px
568x320 css px

@screen-md - 992px - 1.33 aspect ratio
iPad 3/4 - landscape
2048x1536 px
1024x768 css px

@screen-lg - 1200px - 1.78 aspect ratio
WXGA Monitor
1366x768 px, css px



TODO figure out usable areas


to view metadata
exiftool
to strip metadata
exiftool -all= image.jpg

to size
convert index_1_original.jpg -resize 768x512 index_0_sm.jpg


convert portfolio_commercial_31-original_.jpg -resize '480' portfolio_commercial_31-xs.jpg &&
convert portfolio_commercial_31-original_.jpg -resize '768' portfolio_commercial_31-sm.jpg &&
convert portfolio_commercial_31-original_.jpg -resize '992' portfolio_commercial_31-md.jpg && 
convert portfolio_commercial_31-original_.jpg -resize '1200' portfolio_commercial_31-lg.jpg


Sauce Targets:

Windows -   IE8* x
            IE9 x
            IE10 x
            IE11 x
            Firefox n x
            Chrome n x
OS X -      iPhone 7.1 x
            iPad 7.1 x
            Safari 7 x
            Firefox n x
            Chrome n x
Linux -     Android 4.3 x
            Firefox n
            Chrome n

test diff, again
 
