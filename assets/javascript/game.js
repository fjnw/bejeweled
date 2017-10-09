var magic = 0;			// magic number needed to be matched
var player = 0;			// player's number counter
var pointsAdded = 0;	// assumes last crystal value to be displayed in the log

var win = 0;			
var loss = 0;
var log = "";

var red = 0;
var white = 0;
var blue = 0;
var green = 0;

$(document).ready(function() {
	numberReset();

	$('#red').on("click", function() {
		player += red
		pointsAdded = red
		printToScreen();
		gameCheck();
	});
	$('#white').on("click", function() {
		player += white
		pointsAdded = white
		printToScreen();
		gameCheck();
	});
	$('#blue').on("click", function() {
		player += blue
		pointsAdded = blue
		printToScreen();
		gameCheck();
	});
	$('#green').on("click", function() {
		player += green
		pointsAdded = green
		printToScreen();
		gameCheck();
	});

});


function gameCheck(){
	if (player > magic){
		player = 0;
		loss++;

		log = "You lost!";
		printToScreen();

		numberReset();
	} else {
		log = pointsAdded + " points added!"
		printToScreen();
	}
	if (player === magic) {
		player = 0;
		win++;

		log = "You WON!";
		printToScreen();

		numberReset();
	}
}

function printToScreen(){								// displays player's #, wins, losses, and log.
	$("#player").html(player);
	$("#win").html(win);
	$("#loss").html(loss);
	$("#log").html(log);
}

function numberReset() {								
	magic = Math.floor(Math.random() * (120-19+1))+19	// new random Magic # between19-120
	$("#magic").html(magic);

	red = Math.floor(Math.random() * (12))+1			// new random crystal #'s between 1-12
	white = Math.floor(Math.random() * (12))+1
	blue = Math.floor(Math.random() * (12))+1
	green = Math.floor(Math.random() * (12))+1
	// console.log("red = " + red);						// for cheaters or TAs
	// console.log("white = " + white);
	// console.log("blue = " + blue);
	// console.log("green = " + green);
}

