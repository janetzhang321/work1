
var button = document.getElementById("clear"); 
var c = document.getElementById("slate");
button.addEventListener("click", function(e){
	console.log("hi");	
	var ctx = c.getContext('2d');
	ctx.clearRect(0,0,c.clientWidth,c.clientHeight);	
});
c.addEventListener("click", function(e){
	console.log('click!')
	var x = event.clientX;     // Get the horizontal coordinate
	var y = event.clientY;     // Get the vertical coordinate
	var ctx = c.getContext('2d');
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(x,y,100,200);

});
