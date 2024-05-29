
function Alert(){
	window.alert("Andrei Dominic Quirante");
};

let h2 = document.querySelector(".external");
	h2.addEventListener("mouseenter", function(e){
		h2.innerText = "Hi Students, Welcome to JS CLASS";
	});
	h2.addEventListener("mouseout", function(e){
		h2.innerText = "";
	});