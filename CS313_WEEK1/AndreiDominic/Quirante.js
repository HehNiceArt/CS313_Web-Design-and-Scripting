function PrintNums()
{
    for (let i = 0; i < 10; i++){
        document.write(i + 1 + "<br>");
    }
    //Andrei Dominic B. Quirante
}

function Person(){
    //Andrei Dominic B. Quirante
    var Person = {
        name: "John Doe",
        age: 35,
        city: "Malolos City",
    }
    alert(Person.name + " " + Person.age + " " + Person.city);

}

function ObjectLooping(){
    //Andrei Dominic B. Quirante
    var student = {
        name: "Huan",
        age: 19,
        grade: 11
    }
    for (var i in student){
        document.write(student[i] + "<br>");
    }

}
function Array(){
    //Andrei Dominic B. Quirante
    
    var fruits = ["apple", "banana", "cherry", "date"];
    //original array
    document.write(fruits + "<br>");
    //get the banana
    document.write(fruits[1] + "<br>");
    var removed = fruits.splice(2, 1, "grape");
    document.write(fruits.join(", ") + "<br>");
   // document.write(fruits + "<br>");
    fruits.push("kiwi");
    document.write(fruits.join(", "));
}

function IfElse(){
    //Andrei Dominic B. Quirante
    let temp = 30;
    if(temp >= 30){
        document.write("The temperature today is: " + temp + "<br>");
        document.write("It's a hot day!");
    }
    else{
        document.write("The temperature today is: " + temp + "<br>");
        document.write("Pretty cold!");
    }
}