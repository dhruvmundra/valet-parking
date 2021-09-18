var canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_width=75;
greencar_height=100;

greencar_x=5;
greencar_y=225;


function add() {
	bg_object=new Image();
	bg_object.onload=uploadBackground;
	bg_object.src=background_image;

	greencar_object=new Image();
	greencar_object.onload=uploadgreencar;
	greencar_object.src=greencar_image;

}

function uploadBackground() {
	ctx.drawImage(bg_object,0,0,canvas.clientWidth,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_object,greencar_x,greencar_y,greencar_width,greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y>=0){
		greencar_y=greencar_y-10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_y<=350){
		greencar_y=greencar_y+10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(greencar_x>=0){
		greencar_x=greencar_x-10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(greencar_x<=750){
		greencar_x=greencar_x+10;
		uploadBackground();
		uploadgreencar();
	}
}
