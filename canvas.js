var oldx = -1
var oldy = -1

var button = document.getElementById("clear"); 
var c = document.getElementById("slate");
button.addEventListener("click", function(e){
    console.log("hi");	
    var ctx = c.getContext('2d');
    ctx.clearRect(0,0,c.clientWidth,c.clientHeight);
    oldx = -1;
    oldy = -1;
});

var drawRect = function(e){
    console.log('click!');
    var x = e.offsetX;     // Get the horizontal coordinate
    var y = e.offsetY;     // Get the vertical coordinate
    var ctx = c.getContext('2d');
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(x,y,100,200);

};

var drawDot = function(e){
    console.log('click!');
    var x = e.offsetX;     // Get the horizontal coordinate
    var y = e.offsetY;     // Get the vertical coordinate
    var ctx = c.getContext('2d');
    ctx.fillStyle = "#ff0000";
    if (oldx == -1){
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.arc(x,y,10,0,2*Math.PI);
	ctx.fill()
	ctx.stroke();
	oldx = x;
	oldy = y;
	ctx.moveTo(x,y);
    }
    else{
	ctx.lineTo(x,y);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.arc(x,y,10,0,2*Math.PI);
	ctx.moveTo(x,y);
	ctx.fill()
	ctx.stroke()
    }
   // ctx.moveTo(x,y);
   // ctx.stroke()
   // ctx.arc(x,y,10,0,2*Math.PI)
   // ctx.stroke()
};


c.addEventListener("click", drawDot);
