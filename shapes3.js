// JavaScript Document
function createCanvas(canvas, parent, size){
	if(!document.getElementById(canvas)){
		var obj = document.createElement("canvas");
		obj.setAttribute("name",canvas);
		obj.setAttribute("id",canvas);
		//obj.setAttribute("style","border: 1px solid #9C9898;");
		obj.setAttribute("style","left:10px; top:210px");
		obj.setAttribute("class","drag");
		obj.setAttribute("height",size);
		obj.setAttribute("width",size);	
		document.getElementById(parent).appendChild(obj);
	}
 } 
 
// (x,y) - the top left corner of the surrounding rectangle
// width,height - the size of the surrounding rectangle
function drawHeart(canvas,parent, size, color, drag, shadow){
	var x = 0;
	var y = 0;
	var height = size;
	var width = size;
	
	var x0 = x + 0.5 * width, y0 = y + 0.2 * height;
	var x1 = x + 0.1 * width, y1 = y - 0.2 * height;
	var x2 = x - 0.2 * width, y2 = y + 0.3 * height;
	var x3 = x + 0.5 * width, y3 = y + 0.9 * height;
	var x4 = x + 1.2 * width, y4 = y + 0.3 * height;
	var x5 = x + 0.9 * width, y5 = y - 0.2 * height;

	createCanvas(canvas,parent,size);		
	var ctx = document.getElementById(canvas).getContext("2d");

	ctx.save();
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.moveTo(x0,y0);
	ctx.bezierCurveTo(x1,y1,x2,y2,x3,y3);
	ctx.bezierCurveTo(x4,y4,x5,y5,x0,y0);
	ctx.stroke();
	ctx.restore();
	ctx.fillStyle = color;	

	// shadow 
	ctx.shadowBlur = shadow;
	ctx.shadowColor = "#999";
  	ctx.shadowOffsetX = shadow;
  	ctx.shadowOffsetY = shadow;	
		
	ctx.fill();

	if(drag){
		dragDrop.initElement(canvas);
	}
}

function drawStar(canvas,parent, size, color, drag, shadow)
{
	var x = size / 2;
	var y = size / 2;
	var r = (size / 2 ) * 0.9;
	var p = 5;
	var m = 0.5;
	
	createCanvas(canvas,parent,size);
	var ctx = document.getElementById(canvas).getContext("2d");	
	
	ctx.save();
	ctx.beginPath();
	ctx.translate(x, y);
	ctx.moveTo(0,0 - r);
	for (var i = 0; i < p; i++)
	{
		ctx.rotate(Math
		.PI / p);
		ctx.lineTo(0, 0 - (r*m));
		ctx.rotate(Math.PI / p);
		ctx.lineTo(0, 0 - r);
	}
	ctx.fillStyle = color;

	// shadow 
	ctx.shadowBlur = shadow;
	ctx.shadowColor = "#999";
  	ctx.shadowOffsetX = shadow;
  	ctx.shadowOffsetY = shadow;	
	
	ctx.fill();	
	ctx.restore();
	
	if(drag){
		dragDrop.initElement(canvas);
	}	
}

function drwaCircle(canvas, parent, size, color, drag, shadow){
	
	var centerX = size / 2;
	var centerY = size / 2;
	var width = size * 0.7;
	var height = size * 0.7;
	var radius = (size / 2 ) * 0.8;
	
	createCanvas(canvas,parent,size);	
	var ctx = document.getElementById(canvas).getContext("2d");		
	var startingAngle = 0;
	var endingAngle = 2 * Math.PI; // 360 degrees is equal to 2π radians
	var circumference = Math.max(width, height);
	var scaleX = width / circumference;
	var scaleY = height / circumference;
	ctx.save();
	ctx.translate(centerX, centerY);
	ctx.scale(scaleX, scaleY);
	ctx.beginPath();
	ctx.arc(0, 0, radius, startingAngle, endingAngle, true);
	ctx.closePath();
	ctx.fillStyle = color;

	// shadow 
	ctx.shadowBlur = shadow;
	ctx.shadowColor = "#999";
  	ctx.shadowOffsetX = shadow;
  	ctx.shadowOffsetY = shadow;	
	
	ctx.fill();	
	ctx.restore();	
	
	if(drag){
		dragDrop.initElement(canvas);
	}	
}

function drwaOval(canvas, parent, size, color, drag, shadow){
	
	var centerX = size / 2;
	var centerY = size / 2;
	var width = size * 0.7;
	var height = size * 0.95;
	var radius = (size / 2 ) * 0.9;
	
	createCanvas(canvas,parent,size);	
	var ctx = document.getElementById(canvas).getContext("2d");		
	var startingAngle = 0;
	var endingAngle = 2 * Math.PI; // 360 degrees is equal to 2π radians
	var circumference = Math.max(width, height);
	var scaleX = width / circumference;
	var scaleY = height / circumference;
	ctx.save();
	ctx.translate(centerX, centerY);
	ctx.scale(scaleX, scaleY);
	ctx.beginPath();
	ctx.arc(0, 0, radius, startingAngle, endingAngle, true);
	ctx.closePath();
	ctx.fillStyle = color;

	// shadow 
	ctx.shadowBlur = shadow;
	ctx.shadowColor = "#999";
  	ctx.shadowOffsetX = shadow;
  	ctx.shadowOffsetY = shadow;	
	
	ctx.fill();	
	ctx.restore();	
	
	if(drag){
		dragDrop.initElement(canvas);
	}	
}

function drawSpade(canvas, parent, size, color, drag, shadow){

	var x = size / 2;
	var y = (size / 2 ) * 0.1;
	var width = size * 0.7;
	var height = size * 0.9;

	createCanvas(canvas,parent,size);
	var ctx = document.getElementById(canvas).getContext("2d");
    ctx.save();
    var bottomWidth = width * 0.7;
    var topHeight = height * 0.7;
    var bottomHeight = height * 0.3;
 
    ctx.beginPath();
    ctx.moveTo(x, y);
 
    // top left of spade          
    ctx.bezierCurveTo(
		x, y + topHeight / 2, // control point 1
    	x - width / 2, y + topHeight / 2, // control point 2
    	x - width / 2, y + topHeight // end point
    );
 
    // bottom left of spade
    ctx.bezierCurveTo(
		x - width / 2, y + topHeight * 1.3, // control point 1
    	x, y + topHeight * 1.3, // control point 2
    	x, y + topHeight // end point
    );
 
    // bottom right of spade
    ctx.bezierCurveTo(
		x, y + topHeight * 1.3, // control point 1
    	x + width / 2, y + topHeight * 1.3, // control point 2
    	x + width / 2, y + topHeight // end point
    );
 
    // top right of spade
    ctx.bezierCurveTo(
		x + width / 2, y + topHeight / 2, // control point 1
    	x, y + topHeight / 2, // control point 2
    	x, y // end point
    );
 
    ctx.closePath();
    ctx.fillStyle = color;	

	// shadow 
	ctx.shadowBlur = shadow;
	ctx.shadowColor = "#999";
  	ctx.shadowOffsetX = shadow;
  	ctx.shadowOffsetY = shadow;	
	
    ctx.fill();
 
    // bottom of spade
    ctx.beginPath();
    ctx.moveTo(x, y + topHeight);
    ctx.quadraticCurveTo(
		x, y + topHeight + bottomHeight, // control point
    	x - bottomWidth / 2, y + topHeight + bottomHeight // end point
    );
    ctx.lineTo(x + bottomWidth / 2, y + topHeight + bottomHeight);
    ctx.quadraticCurveTo(
		x, y + topHeight + bottomHeight, // control point
    	x, y + topHeight // end point
    );
    ctx.closePath();
	
	// shadow 
	ctx.shadowBlur = shadow;
	ctx.shadowColor = "#999";
  	ctx.shadowOffsetX = shadow;
  	ctx.shadowOffsetY = shadow;	
	
    ctx.fill();
    ctx.restore();	
	
	if(drag){
		dragDrop.initElement(canvas);
	}	
}

function drawHeart2(canvas, parent, size, color, drag, shadow ){
	
	var x = size / 2;
	var y = (size / 2) * 0.1;
	var width = size * 0.7;
	var height = size * 0.9;
	
	createCanvas(canvas,parent,size);	
	var ctx = document.getElementById(canvas).getContext("2d");	
	ctx.save();
    ctx.beginPath();
	var topCurveHeight = height * 0.3;
    ctx.moveTo(x, y + topCurveHeight);
    // top left curve
    ctx.bezierCurveTo(
		x, y, 
		x - width / 2, y, 
		x - width / 2, y + topCurveHeight
	);
 
    // bottom left curve
    ctx.bezierCurveTo(
		x - width / 2, y + (height + topCurveHeight) / 2, 
		x, y + (height + topCurveHeight) / 2, 
		x, y + height
	);
 
    // bottom right curve
    ctx.bezierCurveTo(
		x, y + (height + topCurveHeight) / 2, 
		x + width / 2, y + (height + topCurveHeight) / 2, 
		x + width / 2, y + topCurveHeight
	);
 
    // top right curve
    ctx.bezierCurveTo(
		x + width / 2, y, 
		x, y, 
		x, y + topCurveHeight
	);
 
    ctx.closePath();
    ctx.fillStyle = color;
	
	// shadow 
	ctx.shadowBlur = shadow;
	ctx.shadowColor = "#999";
  	ctx.shadowOffsetX = shadow;
  	ctx.shadowOffsetY = shadow;	
	
	ctx.fill();
	
	ctx.restore();	
	
	if(drag){
		dragDrop.initElement(canvas);
	}	
}

function drawClub(canvas, parent, size, color, drag, shadow ){
	
	var x = size / 2;
	var y = (size / 2) * 0.1;
	var width = size * 0.7;
	var height = size * 0.9;

	createCanvas(canvas,parent,size);		
	var ctx = document.getElementById(canvas).getContext("2d");	
		
	ctx.save();
	var circleRadius = width * 0.3;
	var bottomWidth = width * 0.5;
	var bottomHeight = height * 0.35;
    ctx.fillStyle = color;
 
    // top circle
    ctx.beginPath();
    ctx.arc(
		x, y + circleRadius + (height * 0.05), 
		circleRadius, 0, 2 * Math.PI, false
	);
	// shadow 
	ctx.shadowBlur = shadow;
	ctx.shadowColor = "#999";
  	ctx.shadowOffsetX = shadow;
  	ctx.shadowOffsetY = shadow;	
		
    ctx.fill();
 
    // bottom right circle
    ctx.beginPath();
    ctx.arc(
		x + circleRadius, y + (height * 0.6), 
		circleRadius, 0, 2 * Math.PI, false
	);
	// shadow 
		
    ctx.fill();
 
    // bottom left circle
    ctx.beginPath();
    ctx.arc(
		x - circleRadius, y + (height * 0.6), 
		circleRadius, 0, 2 * Math.PI, false
	);
	// shadow 	
		
    ctx.fill();
	
    // center filler circle
    ctx.beginPath();
    ctx.arc(
		x, y + (height * 0.5), 
		circleRadius / 2, 0, 2 * Math.PI, false
	);
	ctx.shadowBlur = 0;
  	ctx.shadowOffsetX = 0;
  	ctx.shadowOffsetY = 0;	 			
    ctx.fill();
    ctx.closePath();

    // bottom of club
    ctx.beginPath();	
    ctx.moveTo(x, y + (height * 0.6));
    ctx.quadraticCurveTo(
		x, y + height, 
		x - bottomWidth / 2, y + height
	);
    ctx.lineTo(x + bottomWidth / 2, y + height);
    ctx.quadraticCurveTo(
		x, y + height, 
		x, y + (height * 0.6)
	);
    ctx.closePath();
	
	// shadow 
	ctx.shadowBlur = shadow;
	ctx.shadowColor = "#999";
  	ctx.shadowOffsetX = shadow;
  	ctx.shadowOffsetY = shadow;	
	
    ctx.fill();
	ctx.restore();	
	
	if(drag){
		dragDrop.initElement(canvas);
	}	
}

function drawDiamond(canvas, parent, size, color, drag, shadow ){
	
	var x = size / 2;
	var y = (size / 2) * 0.1;
	var width = size * 0.7;
	var height = size * 0.9;

	createCanvas(canvas,parent,size);
	var ctx = document.getElementById(canvas).getContext("2d");
		
	ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y);
 
    // top left edge
    ctx.lineTo(x - width / 2, y + height / 2);
 
    // bottom left edge
    ctx.lineTo(x, y + height);
 
    // bottom right edge
    ctx.lineTo(x + width / 2, y + height / 2);
 
    // closing the path automatically creates
    // the top right edge
    ctx.closePath();
 
    ctx.fillStyle = color;

	// shadow 
	ctx.shadowBlur = shadow;
	ctx.shadowColor = "#999";
  	ctx.shadowOffsetX = shadow;
  	ctx.shadowOffsetY = shadow;	
		
    ctx.fill();
	ctx.restore();	
	
	if(drag){
		dragDrop.initElement(canvas);
	}	
}

function drawPoly(canvas, parent, size, color, drag, shadow, n) {
	
	var sx = size / 2;
	var sy = size / 2;
	var rad = ( size / 2 ) * 0.9;
	
	createCanvas(canvas,parent,size);	
	var ctx = document.getElementById(canvas).getContext("2d");	

	var xCenter = size / 2;
	var yCenter = size / 2;
	ctx.translate(xCenter, yCenter);		
	ctx.rotate(Math.PI / n);	
	sx = sx - xCenter;
	sy = sy - yCenter;

	ctx.beginPath();
	ctx.fillStyle = color;

	var i;
    var angle = (2*Math.PI)/n  //parens may not be needed.
	ctx.moveTo(sx+rad*Math.cos(-.5*angle), sy+rad*Math.sin(-.5*angle));
	for (i=1;i<n;i++) {
	  ctx.lineTo(sx+rad*Math.cos((i-.5)*angle),sy+rad*Math.sin((i-.5)*angle));
	}
	ctx.closePath();

	// shadow 
	ctx.shadowBlur = shadow;
	ctx.shadowColor = "#999";
  	ctx.shadowOffsetX = shadow;
  	ctx.shadowOffsetY = shadow;	
	
	ctx.fill();		
	ctx.restore();	
	
	if(drag){
		dragDrop.initElement(canvas);
	}	
}

function drawRect(canvas, parent, size, color, drag, shadow) {
	
	var sx = size * 0.2;
	var sy = size * 0.1;
	var ex = size * 0.6;
	var ey = size * 0.8;

	createCanvas(canvas,parent,size);		
	var ctx = document.getElementById(canvas).getContext("2d");	

	// shadow 	
	ctx.shadowColor = "#999";
	ctx.shadowBlur = shadow;
  	ctx.shadowOffsetX = shadow;
  	ctx.shadowOffsetY = shadow;	
	
	ctx.fillStyle = color;		
	ctx.fillRect(sx, sy, ex, ey);
	
    ctx.fill();
	ctx.restore();	
	
	if(drag){
		dragDrop.initElement(canvas);}	
}

function drawSquare(canvas, parent, size, color, drag, shadow) {
	
	var sx = size * 0.2;
	var sy = size * 0.2;
	var ex = size * 0.6;
	var ey = size * 0.6;

	createCanvas(canvas,parent,size);		
	var ctx = document.getElementById(canvas).getContext("2d");	

	// shadow 
	ctx.shadowBlur = shadow;
	ctx.shadowColor = "#999";
  	ctx.shadowOffsetX = shadow;
  	ctx.shadowOffsetY = shadow;
			
	ctx.fillStyle = color;
	ctx.fillRect(sx, sy, ex, ey);
	
	ctx.fill();		
	ctx.restore();	
	
	if(drag){
		dragDrop.initElement(canvas);}	
}

function drawTri(canvas, parent, size, color, drag, shadow) {
	
	var width = size * 0.8;
	var height = size * 0.8 * Math.sin(Math.PI / 3);
	var padding = size * 0.1;
	
	createCanvas(canvas,parent,size);		
	var ctx = document.getElementById(canvas).getContext("2d");	

	// Draw a path
	ctx.beginPath();
	ctx.moveTo(padding + width/2, padding);        // Top Corner
	ctx.lineTo(padding + width, height + padding); // Bottom Right
	ctx.lineTo(padding, height + padding);         // Bottom Left
	ctx.closePath();

	// Fill the path
	// shadow 
	ctx.shadowBlur = shadow;
	ctx.shadowColor = "#999";
  	ctx.shadowOffsetX = shadow;
  	ctx.shadowOffsetY = shadow;	
		
	ctx.fillStyle = color;
	ctx.fill();
	
	if(drag){
		dragDrop.initElement(canvas);
	}
}

function drawChar(canvas, parent, size, color, drag, shadow, char) {
	
	createCanvas(canvas,parent,size);		
	var ctx = document.getElementById(canvas).getContext("2d");	
	ctx.font="bold " + (size * 0.8)+ "px Comic Sans";  
	ctx.fillStyle = color;	
	
	ctx.shadowBlur = shadow;
	ctx.shadowColor = "#999";
  	ctx.shadowOffsetX = shadow;
  	ctx.shadowOffsetY = shadow;	
		
	ctx.fillText(char, size * 0.1, size * 0.7);
		
	if(drag){
		dragDrop.initElement(canvas);
	}	
}

function is_touch_device() {
  return 'ontouchstart' in window        // works on most browsers 
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};

dragDrop = {
	initialMouseX: undefined,
	initialMouseY: undefined,
	startX: undefined,
	startY: undefined,
	draggedObject: undefined,
	initElement: function (element) {
		if (typeof element == 'string')
			element = document.getElementById(element);
		if(is_touch_device()){	
			element.ontouchstart = dragDrop.startDragMouse;
		}else{
			element.onmousedown = dragDrop.startDragMouse;
		}
	},
	startDragMouse: function (e) {
		dragDrop.startDrag(this);
		if(is_touch_device()){
			// This code use JavaScript library not jQuery
			var evt = e.touches[0];
		}else{
			var evt = e || window.event;			
		}	

		dragDrop.initialMouseX = evt.clientX;
		dragDrop.initialMouseY = evt.clientY;
		
		if(is_touch_device()){	
			$(document).on('touchmove',dragDrop.dragMouse);
			$(document).on('touchend',dragDrop.releaseElement);
		}else{
			$(document).on('mousemove',dragDrop.dragMouse);
			$(document).on('mouseup',dragDrop.releaseElement);
		}
	    // This code is for debuggin the location
		//document.getElementById("debug").innerHTML = dragDrop.draggedObject.style.left+" in "+dragDrop.draggedObject.parentNode.id;
	
		return false;
	},
	startDrag: function (obj) {
		if (dragDrop.draggedObject)
			dragDrop.releaseElement();
		dragDrop.startX = obj.offsetLeft;
		dragDrop.startY = obj.offsetTop;
		dragDrop.draggedObject = obj;
		obj.className += ' dragged';
	},
	dragMouse: function (e) {
		
		//This is not working for a touch device.
		if(is_touch_device()){
			// This code use jQuery library not JavaScript
			var evt = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
			//var evt = e.touches[0];			
		}else{
			var evt = e || window.event;			
		}

	    // This code is for debuggin the location
		//document.getElementById("debug").innerHTML = dragDrop.draggedObject.style.left+" in "+dragDrop.draggedObject.parentNode.id;
		var dX = evt.clientX - dragDrop.initialMouseX;
		var dY = evt.clientY - dragDrop.initialMouseY;
		dragDrop.setPosition(dX,dY);
		return false;
	},
	setPosition: function (dx,dy) {
		dragDrop.draggedObject.style.left = dragDrop.startX + dx + 'px';
		dragDrop.draggedObject.style.top = dragDrop.startY + dy + 'px';

        var trash = document.getElementById("trash");
		var child = document.getElementById(dragDrop.draggedObject.id);

		if(dragDrop.draggedObject.style.left.replace(/px/,'') > $("#trash").offset().left
			&& dragDrop.draggedObject.style.left.replace(/px/,'') < ($("#trash").offset().left + 50)
			&& dragDrop.draggedObject.style.top.replace(/px/,'') > $("#trash").offset().top 
			&& dragDrop.draggedObject.style.top.replace(/px/,'') < ($("#trash").offset().top + 50)
		){
			child.style.display = "none";
		}			
		
	},
	releaseElement: function() {

		if(is_touch_device()){
			$(document).off('touchmove',dragDrop.dragMouse);
			$(document).off('touchend',dragDrop.releaseElement);
		}else{
			$(document).off('mousemove',dragDrop.dragMouse);
			$(document).off('mouseup',dragDrop.releaseElement);
		}
		
		dragDrop.draggedObject.className = dragDrop.draggedObject.className.replace(/dragged/,'');
	    // This code is for debuggin the location
		//document.getElementById("debug").innerHTML = dragDrop.draggedObject.style.left+" > "+$("#trash").offset().left;
		
		var parent = document.getElementById("wrapper");
        var trash = document.getElementById("trash");
		var child = document.getElementById(dragDrop.draggedObject.id);
		if(dragDrop.draggedObject.parentNode.id == "wrapper" 
			&& dragDrop.draggedObject.style.left.replace(/px/,'') > $("#trash").offset().left
			&& dragDrop.draggedObject.style.left.replace(/px/,'') < ($("#trash").offset().left + 50)
			&& dragDrop.draggedObject.style.top.replace(/px/,'') > $("#trash").offset().top 
			&& dragDrop.draggedObject.style.top.replace(/px/,'') < ($("#trash").offset().top + 50)
		){
			parent.removeChild(child);
		}
		dragDrop.draggedObject = null;
	}
}
