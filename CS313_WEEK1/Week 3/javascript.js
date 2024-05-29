function operators(){
	let x = 5; 
	let y = 10;
	let z = x + y;
	document.getElementById("p1").innerHTML += z;	//returns 15
		z = y - x;
	document.getElementById("p2").innerHTML += z; //returns 5
		z = x * y;
	document.getElementById("p3").innerHTML += z; //returns 50
		z = y / x;
	document.getElementById("p4").innerHTML += z; //returns 2
		z = x % 2;
	document.getElementById("p5").innerHTML += z; //returns 1
	// --x post increment
	// x++ pre increment
};

function increments(){
	let x = 5;
		document.getElementById('addPost').innerHTML += x++;
		document.getElementById('addPostRes').innerHTML += x;

		document.getElementById('addPre').innerHTML += ++x;

		document.getElementById('subPost').innerHTML += x--;
		document.getElementById('subPostRes').innerHTML += x;

		document.getElementById('subPre').innerHTML += --x;
};

function operatorString(){
	let a = 5, b = "Hello", c = "World!", d = 10;

		document.getElementById('first').innerHTML = a + b;
		document.getElementById('second').innerHTML = b + c;
		document.getElementById('third').innerHTML =  a + d;
		document.getElementById('fourth').innerHTML = b + true;
		document.getElementById('fifth').innerHTML = c - b;
};

function ternary(){
	let x = 10, y = 5;
	let c = x > y ? x : y;
	let d = x > y ? y : x;

	document.getElementById('test').innerHTML = c;
	document.getElementById('hold').innerHTML = d;
};