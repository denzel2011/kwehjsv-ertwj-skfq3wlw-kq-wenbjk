canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "racing.jp";
rover_image = "car1.png";
rover_image = "car1 copy.png";

rover_x = 10;
rover_y = 10;

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadrover()
{
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
    
}

window.addEventListener("keydown",my_keydown);
 
function my_keydown(e)
{
   keypressed = e.keyCode;
   console.log(keypressed);
    if(keypressed == '38')
    {
        up();
      console.log("up");
    } 
    if (keypressed == '40')
    {
        down();
        console.log("down");
    }
    if (keypressed == '37')
    {
        left();
        console.log("left");
    }
    if (keypressed == '39')
    {
        right();
        console.log("right");
    }

}
