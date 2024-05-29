function callName(){
	document.getElementById('fullName').innerHTML = "ANDREI DOMINIC BIBLANIAS QUIRANTE";
}

function buttonTrigger(){
	document.getElementById('fullName').style.color = "blue";
	document.getElementById('colorChange').innerHTML = "BLUE";
	setTimeout(function(){
		document.getElementById('colorChange').innerHTML = "BLACK";
		document.getElementById('fullName').style.color = "black";
	},3000)
}
