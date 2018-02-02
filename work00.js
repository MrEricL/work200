var canv = document.getElementById('slate');
var ctx = canv.getContext("2d")

var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");

//0 = Square
//1 = Circle
var mode = 0

//Clears the canvas
var clear_canv = function(e){
	ctx.clearRect(0,0,500,500);
}

clear.addEventListener("click",clear_canv);

//Changes the mode
var toggle_mode = function(e){
	if (mode==0){
		mode = 1;
	}
	else {
		mode = 0;
	}
}

toggle.addEventListener("click",toggle_mode);

//Makes the shapes

var click_shape = function(e){
	var x = event.offsetX;
    var y = event.offsetY;
    

    if (mode == 0){
    	ctx.fillRect(x,y,20,20);
    	console.log("x cords: " + x+30 + ", y coords: " + y+30);
    }
    else{
    	ctx.beginPath();
    	ctx.arc(x,y,10,0,2*Math.PI);
    	ctx.fill();
    }
}

canv.addEventListener("click",click_shape);
