// Default number of squares
var numberOfSquares = 256;

// Default number of squares per row
var squaresEachRow=16;

// Makes 256(16x16 grid) squares on document ready (NEED TO CHANGE THIS SO IT CAN TAKE ARGUMENTS, LIKE THE DIFFERENT INTERACTIONS)
$(document).ready(function(){
  for (var i = 1; i <= numberOfSquares; i++) {
    $('.grid-container').append("<div></div>");
    $('.grid-container > div').addClass('grid-item');
  }
});

//Adjust size of squares
$(document).ready(function(){
  var width = ($(".grid-container").width()) / squaresEachRow;  
	$(".grid-item").css({"width":width ,"height":width});
});

//Different types of interaction with the squares (NEED TO PUT THIS INTO sOME SORT OF IF/ELSE)
// Trail
$(document).ready(function(){
  $('.grid-item').mouseenter(function(){
    $(this).animate({backgroundColor:"#ffffff"}, 500);
  })
  $('.grid-item').mouseleave(function(){
    $(this).animate({backgroundColor:"#000000"}, 500);
  })
});
//Draw with white
$(document).ready(function(){
  $('.grid-item').mouseenter(function(){
    $(this).css("background-color", "#ffffff");
  })
});
//Draw with random colors
$(document).ready(function(){
  $('.grid-item').mouseenter(function(){
    $(this).css("background-color", rdmColor());
  })
});
//Each pass adds 10% black


//Get random color values
function rdmColor() {
	var red = Math.floor((Math.random()*255)+1);
	var green = Math.floor((Math.random()*255)+1);
	var blue = Math.floor((Math.random()*255)+1);
	return "rgb(" + red + "," + green + "," + blue + ")";
}
