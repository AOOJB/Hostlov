var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var canvaslåda = document.getElementById('canvaslåda');

var width = 800;
var height = 800;

canvaslåda.style.width = width;
canvaslåda.style.height = height;

var r = 100;
var g = 100;
var b = 100;

var x = width/2;
var y = 0;
var skillnadx = 0;
var skillnady = 0;
ctx.moveTo(x, y);

function Triangel(){
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    //ctx.fillStyle = `#${r}${g}${b}`;
    ctx.fillRect(0,0, width, height);

    rng = Math.ceil(Math.random()*5);

    if(rng == 1){
        skillnadx = ((width/2) - x)/2;
        skillnady = (0 - y)/2;
        r = r*4;
        g = g/2;
        b = b/2;
    }

    if(rng == 2){
        skillnadx = (width - x)/2;
        skillnady = ((height/2) - y)/2;
    }

    if(rng == 3){
        skillnadx = (((2*width)/3) - x)/2;
        skillnady = (height - y)/2;
        r = r/2;
        g = g*4;
        b = b/2;
    }

    if(rng == 4){
        skillnadx = ((width/3) - x)/2;
        skillnady = (height - y)/2;
        r = r/2
        g = g/2;
        b = b*4;
    }
    if(rng == 5){
        skillnadx = (0 - x)/2;
        skillnady = ((height/2) - y)/2;
    }

    x += skillnadx;
    y += skillnady;

    ctx.lineTo(x,y);
    ctx.stroke();

    console.log(ctx.fillStyle)
}

setInterval(Triangel,25);