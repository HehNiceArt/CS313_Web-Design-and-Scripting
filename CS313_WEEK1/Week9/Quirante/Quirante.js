function JQuery1(){
    //$ > alias of JQuery
    $(document).ready(function(){
        $("h1").css("color", "#0088ff");
        $("h1").css("font-size", "30px");
        $("h1").css("text-align", "center");        
    });
}
JQuery1();
function JQueryAlert(){
    $(document).ready(function(){
        alert("Hello World!");
        
    });
}
function JQueryLoadText(){
    $(document).ready(function(){
        $("button").click(function(){
            $("p").text("Hello World!");
        });
     });
}
function JQuerySelector(){
    $(document).ready(function(){ 
        $("body").css("background", "#e4dfec");
        //Highlight element with id mark
        $("#mark").css("background", "yellow");
        //Highlight element with Class mark
        $(".mark").css("background", "red");
        
    });
}
function JQueryElements(){
    $(document).ready(function(){
        //Highlight paragraph elements
        $('input[type="text"]').css("background", "yellow");
        $('input[type="password"]').css("background", "black");
        $('input[type="password"]').css("color", "white");
    });
}

function JQueryCompoundSelector(){
    $(document).ready(function(){
        //Highlight only paragraph elements with class mark
        $("p.mark").css("background", "yellow");

        //Highlight only span elements inside the element with ID mark
        $("#mark span").css("background", "yellow");

        //Highlight li elements inside the ul elements
        $("ul#mark li").css("background", "red");

        //Highlight li elements inside all the ul element with class mark
        $("ul.mark li").css("background", "green");

        //Highlight all anchor elements with target blank
        $('a[target="_blank"]').css("background", "yellow");
    })
}

function JQueryCustomSelector(){
    $(document).ready(function(){
        //Highlight table rows appearing at odd places
        $("tr:odd").css("background", "yellow");
        //Highlight table rows appearing at even places
        $("tr:even").css("background", "orange");
        //Highlight first paragrah element
        $("p:first").css("background", "red");
        //Highlight last paragraph element
        $("p:last").css("background", "green");
        //Highlight all input elements with type text inside a form
        $("form :text").css("background", "purple");
        //Highlight all input elements with type password inside a form
        $("form :password").css("background", "blue");
        //Highlight all input elements with type submit inside a form
        $("form :submit").css("background", "violet");
    })
}
JQueryCustomSelector();