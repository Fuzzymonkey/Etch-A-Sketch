var pageLimit=256;

$(document).ready(function(){
  for (var i = 1; i <= pageLimit; i++) {
    $('.container').append("<div></div>");
    $('.container > div').addClass('grid-item');
  }
});

$(document).ready(function(){
  $('.grid-item').mouseenter(function(){
    $('.grid-item').animate({backgroundColor:"#345623"}, 500);
  })
  $('.grid-item').mouseleave(function(){
    $('.grid-item').animate({"background-color":"yellow"}, 500);
  })
});