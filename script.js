var pageLimit=256;

$(document).ready(function(){
  for (var i = 1; i <= pageLimit; i++) {
    $('.container').append("<div></div>");
    $('.container > div').addClass('grid-item');
  }
});

$(document).ready(function(){
  $('.grid-item').mouseenter(function(){
    $(this).css("background", "blue");
  })
  $('.grid-item').mouseleave(function(){
    $(this).css("background", "purple");
  })
});