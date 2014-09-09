// Default number of squares
var numberOfSquares = 256;

// Default number of squares per row
var squaresEachRow = 16;

//Interaction type
var interactionType = "trail";

//Set size of squares
var width = ($(".grid-container").width()) / squaresEachRow;  

// Makes 256(16x16 grid) squares on document ready (HOW TO MAKE THIS SMOOTHER? PAINFULLY SLOW ATM)
var makeGrid = function(){
  $(".grid-item").remove();
  for (var i = 1; i <= numberOfSquares; i++) {
    $('.grid-container').append("<div class='grid-item'></div>");
    $('.grid-item').css("background-color", "#000000");
    $('.grid-item').css({"width":width ,"height":width});
  }
};

//Creating of the grids
//On page load
$(document).ready(function(){
    makeGrid();
});

//Reset
$(document).ready(function(){
  $(".new-grid").click(function() {
    makeGrid();
  })
});


//Trail
$(document).ready(function(){
  $(".trail").click(function() {
    makeGrid();
    var interactionType = "trail";
  })
});

//Rdm colors
$(document).ready(function(){
  $(".random-colors").click(function() {
    makeGrid();
    var interactionType = "rdmColor";
  })
});


//Opacity
$(document).ready(function(){
  $(".new-grid").click(function() {
    makeGrid();
    var interactionType = "opacity";
  })
});

//Solid white
$(document).ready(function(){
  $(".solid-white").click(function() {
    makeGrid();
    var interactionType = "solid-white";
  })
});

//Different types of interaction with the squares

$(document).ready(function() {
  if (interactionType === "trail") 
  {
    //Draw trail
    $('.grid-item').mouseenter(function(){
    $(this).animate({backgroundColor:"#ffffff"}, 500);
  })
  $('.grid-item').mouseleave(function(){
    $(this).animate({backgroundColor:"#000000"}, 500);
  })
  }
  else if (interactionType === "rdmColor") 
  {
    //Draw with random colors
    $('.grid-item').mouseenter(function(){
      $(this).css("background-color", rdmColor());
    })
  }
  else if (interactionType === "opacity")
  {
    //Draw with opacity
    
  }
  else
  {
    //Draw with white
    $('.grid-item').mouseenter(function(){
      $(this).css("background-color", "#ffffff");
    })
  }
});

//Get random color values
function rdmColor() {
	var red = Math.floor((Math.random()*255)+1);
	var green = Math.floor((Math.random()*255)+1);
	var blue = Math.floor((Math.random()*255)+1);
	return "rgb(" + red + "," + green + "," + blue + ")";
}
  

