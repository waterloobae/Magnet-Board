
var colors = ['White','Yellow','Orange','Blue','Green','Pink','Brown','Red','Purple','Black'];
var shapes = ['Triangle','Square','Rectangle','Diamond','Star','Heart','Oval','Circle'];
var numbers = ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'];
var alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function init(){
	playSound("load");
};

function gotoNext(obj){
	//alert(this.id);	
	//$(this).effect("shake");		
	if(obj.id == "cbutton"){
		playSound('spin');
		window.location.replace('./1color/cmain.html');
		//setTimeout("window.location.replace('./1color/cmain.html')",2000);
	}else if(obj.id == "abutton"){
		playSound('spin');
		window.location.replace('./2alphabet/amain.html');
		//setTimeout("window.location.replace('./2alphabet/amain.html')",2000);
	}else if(obj.id == "nbutton"){
		playSound('spin');
		window.location.replace('./3number/nmain.html');
		//setTimeout("window.location.replace('./3number/nmain.html')",2000);
	}else if(obj.id == "sbutton"){
		playSound('spin');
		window.location.replace('./4shape/smain.html');
		//setTimeout("window.location.replace('./4shape/smain.html')",2000);
	}else if(obj.id == "hmenu2"){
		playSound('menu');
		window.location.replace('../index.html');
	}else if(obj.id == "cmenu2"){
		playSound('menu');
		window.location.replace('../1color/cmain.html');
	}else if(obj.id == "amenu2"){
		playSound('menu');
		window.location.replace('../2alphabet/amain.html');
	}else if(obj.id == "nmenu2"){
		playSound('menu');
		window.location.replace('../3number/nmain.html');
	}else if(obj.id == "smenu2"){
		playSound('menu');
		window.location.replace('../4shape/smain.html');
	}else if(obj.id == "bmenu2"){
		playSound('menu');
		window.location.replace('../ccboard/index.html');
	}else if(obj.id == "goback"){
		playSound('menu');
		window.history.back(1);
	}else if(obj.id == "button1"){
		playSound('spin');
		window.location.replace('1.html');
		//setTimeout("window.location.replace('1.html')",2000);
	}else if(obj.id == "button2"){
		playSound('spin');
		window.location.replace('2.html');
		//setTimeout("window.location.replace('2.html')",2000);
	}else if(obj.id == "button3"){
		playSound('spin');
		window.location.replace('3.html');
		//setTimeout("window.location.replace('3.html')",2000);		
	}else if(obj.id == "button4"){
		playSound('spin');
		window.location.replace('4.html');
		//setTimeout("window.location.replace('4.html')",2000);		
	}
};

function playSound(str){

	/****
	var menuS = new Audio("./sounds/menu.wav");
	var spinS = new Audio("./sounds/chimesSpin.wav");
	var loadS = new Audio("./sounds/chimesLoad.wav");

	if(str == "menu"){
		menuS.play();
	}else if(str == "spin"){
		spinS.play();
	}else if( str == "load") {
		loadS.play();
	}
	*****/
	
};

// JavaScript Document
//$( document ).ready(function() {
$(function() { 
    // Your code here.
	window.onload = function() {
    	init();
	};	
});
	
