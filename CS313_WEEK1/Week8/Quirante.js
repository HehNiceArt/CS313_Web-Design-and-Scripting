function example() {
    var paragraphs = document.getElementsByTagName("p");
    for (var i = 0; i < paragraphs.length; i++) {
        document.write("aaaaa");
    }
}

function GetElementsByName() {
    let elements = document.getElementsByName("fname");
    document.getElementById("demo").innerHTML = elements[0].tagName;
}

function GetElementsByClassName() {
    let num = document.getElementsByName("animal").length;
    document.getElementById("demo").innerHTML = num;
}

function QuerySelectorAll() {
    const nodeList = document.querySelectorAll(".example");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "yellow";
    }
}
function DOM() {
    "use strict";//running the page color
    document.body.style.background = "#d0ebf9";//red bg
    setTimeout(() => document.body.style.background = '', 3000);//return back

}

function ValidationForm(){
    let x = document.forms["myForm"]["searchEnter"].value
    if (x == ""){
        alert("AAAAAAAA");
        return false;
    }
}
ValidationForm();
