var colors = ['Gray','Yellow','Orange','Blue','Green','Pink','Brown','Red','Purple','Black'];
var shapes = ['Triangle','Square','Rectangle','Diamond','Star','Heart','Oval','Circle'];
var gColor = "black"
var gCanvasNo = 1;

function changeColor(number){
	gColor = colors[number];
	init();	
}

function createColorCSS(){
	colors.forEach(function(item, index){
		item = item.toLowerCase();
		cssSelector = "."+item;
		$(cssSelector).css("background-color",item);		
		}); 	
}

function createShape(number){

	switch (number)
	{
		case 1:
		drawTri("shape"+gCanvasNo,"wrapper",90,gColor,1,5);
  		break;
		case 2:
		drawSquare("shape"+gCanvasNo,"wrapper",90,gColor,1,5);	
  		break;
		case 3:
		drawRect("shape"+gCanvasNo,"wrapper",90,gColor,1,5);
  		break;
		case 4:
		drawDiamond("shape"+gCanvasNo,"wrapper",90,gColor,1,5);
  		break;
		case 5:
		drawStar("shape"+gCanvasNo,"wrapper", 90,gColor,1,5);
  		break;
		case 6:
		drawHeart("shape"+gCanvasNo,"wrapper", 90,gColor,1,5);	
  		break;
		case 7:
		drwaOval("shape"+gCanvasNo,"wrapper", 90,gColor,1,5);
  		break;
		case 8:
		drwaCircle("shape"+gCanvasNo,"wrapper", 90,gColor,1,5);		
  		break;
		case 9:
		var Char = document.getElementById("txtShape").value;
		if(Char != ""){
			drawChar("shape"+gCanvasNo,"wrapper",90,gColor,1,5,Char);
		}
		document.getElementById("txtShape").value = "";	
  		break;
		
	}
	gCanvasNo++;
}

function init(){

	drawTri("smenu1","myDiv",90,gColor,1,5);	
	drawSquare("smenu2","myDiv",90,gColor,1,5);	
	drawRect("smenu3","myDiv",90,gColor,1,5);
	drawDiamond("smenu4","myDiv",90,gColor,1,5);
	drawStar("smenu5","myDiv", 90,gColor,1,5);
	drawHeart("smenu6","myDiv", 90,gColor,1,5);	
	drwaOval("smenu7","myDiv", 90,gColor,1,5);
	drwaCircle("smenu8","myDiv", 90,gColor,1,5);	

	/*
	drawHeart("canvas1","myDiv",200,"black",1,5);	
	drawStar("canvas2","myDiv", 200,"yellow",1,5);
	drwaOval("canvas3","myDiv", 200,"brown",1,5);
	drawSpade("canvas4","myDiv",200,"blue",1,5);
	drawHeart2("canvas5","myDiv",200,"red",1,5);
	drawClub("canvas6","myDiv",200,"black",1,5);
	drawDiamond("canvas7","myDiv",200,"red",1,5);
	drawPoly("canvas8","myDiv",200,"red",1,5,6);
	drawRect("canvas9","myDiv",200,"blue",1,5);
	drawSquare("canvas10","myDiv",200,"orange",1,5);	
	drawTri("canvas11","myDiv",200,"yellow",1,5);	
	drawChar("canvas12","myDiv",200,"black",1,5,"P");	
	drwaCircle("canvas13","myDiv", 200,"brown",1,5);	
	*/		

}

// JavaScript Document
//$( document ).ready(function() {
$(function() { 
    // Your code here.
	window.onload = function() {
    	init();
		createColorCSS();
	};
	
	/******
	for(i = 0; i <= 9; i++){
		colorSel="#gColor"+i;
		$(colorSel).on("click",function(event){changeColor(i);});
		$(colorSel).on("touchstart",function(event){changeColor(i);});
	}
	********/

	$("#gColor0").on("click",function(event){changeColor(0);});
	$("#gColor1").on("click",function(event){changeColor(1);});
	$("#gColor2").on("click",function(event){changeColor(2);});
	$("#gColor3").on("click",function(event){changeColor(3);});	
	$("#gColor4").on("click",function(event){changeColor(4);});	
	$("#gColor5").on("click",function(event){changeColor(5);});	
	$("#gColor6").on("click",function(event){changeColor(6);});	
	$("#gColor7").on("click",function(event){changeColor(7);});
	$("#gColor8").on("click",function(event){changeColor(8);});			
	$("#gColor9").on("click",function(event){changeColor(9);});	

	$("#gColor0").on("touchstart",function(event){changeColor(0);});
	$("#gColor1").on("touchstart",function(event){changeColor(1);});
	$("#gColor2").on("touchstart",function(event){changeColor(2);});
	$("#gColor3").on("touchstart",function(event){changeColor(3);});	
	$("#gColor4").on("touchstart",function(event){changeColor(4);});	
	$("#gColor5").on("touchstart",function(event){changeColor(5);});	
	$("#gColor6").on("touchstart",function(event){changeColor(6);});	
	$("#gColor7").on("touchstart",function(event){changeColor(7);});
	$("#gColor8").on("touchstart",function(event){changeColor(8);});			
	$("#gColor9").on("touchstart",function(event){changeColor(9);});	
	
	$("#menuShape1").on("click",function(event){createShape(1);});
	$("#menuShape2").on("click",function(event){createShape(2);});	
	$("#menuShape3").on("click",function(event){createShape(3);});	
	$("#menuShape4").on("click",function(event){createShape(4);});	
	$("#menuShape5").on("click",function(event){createShape(5);});	
	$("#menuShape6").on("click",function(event){createShape(6);});	
	$("#menuShape7").on("click",function(event){createShape(7);});	
	$("#menuShape8").on("click",function(event){createShape(8);});	
	$("#txtShape").on("keyup",function(event){createShape(9);});	

	$("#menuShape1").on("touchstart",function(event){createShape(1);});
	$("#menuShape2").on("touchstart",function(event){createShape(2);});	
	$("#menuShape3").on("touchstart",function(event){createShape(3);});	
	$("#menuShape4").on("touchstart",function(event){createShape(4);});	
	$("#menuShape5").on("touchstart",function(event){createShape(5);});	
	$("#menuShape6").on("touchstart",function(event){createShape(6);});	
	$("#menuShape7").on("touchstart",function(event){createShape(7);});	
	$("#menuShape8").on("touchstart",function(event){createShape(8);});	
	$("#txtShape").on("keypress",function(event){createShape(9);});	
				
});


