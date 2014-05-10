$(document).ready(function() {
  Hammer($('.carousel-inner').get(0)).on('dragleft', function() {
    $('.right.carousel-control').click();
  });
  Hammer($('.carousel-inner').get(0)).on('dragright', function() {
    $('.left.carousel-control').click();
  });
});