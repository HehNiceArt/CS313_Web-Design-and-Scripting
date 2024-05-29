function colors() {
  var color1 = "Red";
  var color2 = "Green";
  var color3 = "Blue";
  document.write(color1 + "<br>");
  document.write(color2 + "<br>");
  document.write(color3 + "<br>");
}

//global arrays
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
var colors = ["Red", "Green", "Blue"];
function array1() {
  var cities = ["London", "Paris", "New York"];
  var person = ["John", "Wick", 32];

  document.write(colors[1] + "<br>");
  document.write(fruits[2] + "<br>");
  document.write(cities[1] + "<br>");
  document.write(person[1] + "<br>");
}

function arrayAccess() {
  document.write(fruits[0] + "<br>");
  document.write(fruits[1] + "<br>");
  document.write(fruits[2] + "<br>");
  document.write(fruits[fruits.length - 1]);
}

function fruitLengths() {
  document.write(fruits.length);
}

function loops() {
  for (var i = 4; i < fruits.length; i++) {
    //i is the index
    //specific num is the value of array
    document.write(fruits[1] + "<br>");
  }
}

function forofloop() {
  //Iterates over array elements
  for (var fruit of fruits) {
    document.write(fruit + "<br>");
  }
}
function forinloop() {
  // Loops through all the elements in the array
  for (var i in fruits) {
    document.write(fruits[i] + "<br>");
  }
}

function AddElements() {
  //Last of array
  colors.push("Yellow", "White");
  //First of array
  colors.unshift("Black", "Violet");
  document.write(colors.join(", ") + "<br>");
  document.write(colors.length);
}

function RemoveElements() {
  var last = colors.pop();
  var first = colors.shift();
  document.write(last + "<br>");
  document.write(first + "<br>");
  document.write(colors.length);
}

function Splicing() {
  //(start, deleteCount, item1, item2, ...)
  var removed = colors.splice(0, 1); //removes the first element
  document.write(colors + "<br>"); //prints green, blue
  document.write(removed + "<br>"); //prints red
  document.write(removed.length + "<br>"); //prints 1

  removed = colors.splice(1, 0, "Pink", "Yellow"); //inserts two items at position 1
  document.write(colors + "<br>"); //prints green, pink, yellow, blue
  document.write(removed + "<br>"); //empty array
  document.write(removed.length + "<br>"); //prints 0

  removed = colors.splice(1, 1, "Purple ", "Violet"); //inserts two values, remove one
  document.write(colors + "<br>"); //prints green, purple, violet, yellow, blue
  document.write(removed + "<br>"); //prints pink (one item array)
  document.write(removed.length); //prints 1
}

function CreateString() {
  document.write(colors.join() + "<br>");
  document.write(colors.join("") + "<br>");
  document.write(colors.join("-") + "<br>");
  document.write(colors.join(", ")) + "<br>";
}

function MergeArrays() {
  var pets = ["Cat", "Dog", "Parrot"];
  var wilds = ["Tiger", "Wolf", "Zebra"];
  var animals = pets.concat(wilds);

  var fruitcolors = fruits.concat(colors);
  var overall = animals.concat(fruitcolors);
  document.write(overall);
}

function SearchingArray() {
  document.write(fruits.indexOf("Apple"));
}

function Filter() {
  var arr = [1, 0, 3, 1, false, 5, 1, 4, 7];
  var result = arr.filter(function (element) {
    return element > 4;
  });
  document.write(result + "<br>");
  document.write(result.length);
}

function Object1() {
  var person = {
    name: "Peter",
    age: 28,
    gender: "Male",
    displayName: function () {
      alert(this.name);
    },
  };
  document.write(person.name + "<br>");
  document.write(person.age + "<br>");
  document.write(person.gender);
  console.log(person);
}
