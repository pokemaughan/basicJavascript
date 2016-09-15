function doSomethingAwesome(){
	document.getElementById("move_this").style.marginTop = "100px";
}

function redTimes(){
	//console.log("here");
	$("p").css("font-family", "\"Times New Roman\", Times, serif")
	$("p").css("color","red");
}

function green(){
	//var h = document.getElementById("put").innerHTML;
	$("p").css("color","green");	
}

function blueArial(){
	$("p").css("font-family", "Arial,\"Helvetica Neue\", Helvetica, sans-serif")
	$("p").css("color","blue");
}

function blackHello(){
	document.getElementById("put").innerHTML = "Hello there";
	$("p").css("color","black");
}
