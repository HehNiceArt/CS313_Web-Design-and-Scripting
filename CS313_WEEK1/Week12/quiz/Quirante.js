function StudentGrade() {
    $("#name").css({"border": "1px solid", "border-color": "#00ff44", "backgroundColor": "black", "width": "150px", "color": 'white', 
    "font-weight": 'bold', "text-align": 'center'})
    $("#grade").css({"border": "1px solid", "border-color": "#00ff44", "backgroundColor": "black", "width": "150px", "color": 'white', 
    "font-weight": 'bold', "text-align": 'center'})

    $("#janet").css({"border": "1px solid", "border-color": "#ffa600", "backgroundColor": "red", "color": 'white'})
    $("#janetgrade").css({"border": "1px solid", "border-color": "#ffa600", "backgroundColor": "red", "color": 'white'})

    $("#david").css({"border": "1px solid", "border-color": "#ffa600", "backgroundColor": "black", "color": 'white'})
    $("#davidgrade").css({"border": "1px solid", "border-color": "#ffa600", "backgroundColor": "black", "color": 'white'})

    $("#arthur").css({"border": "1px solid", "border-color": "#ffa600", "backgroundColor": "red", "color": 'white'})
    $("#arthurgrade").css({"border": "1px solid", "border-color": "#ffa600", "backgroundColor": "red", "color": 'white'})

    $("#bill").css({"border": "1px solid", "border-color": "#ffa600", "backgroundColor": "black", "color": 'white'})
    $("#billgrade").css({"border": "1px solid", "border-color": "#ffa600", "backgroundColor": "black", "color": 'white'})

    $("#table").css({"backgroundColor": 'black'})
    // //Andrei Dominic Quirante
}
StudentGrade();

function Blink(){
    //Andrei Dominic Quirante
    $("#divName").animate({opacity:0}, 200, "linear", function(){
        $("#divName").animate({opacity:1}, 200)
    })
}

function JQueryBold(){
    //Andrei Dominic Quirant
    $(document).ready(function(){
        $('p').each(function(){
            var pdata = $(this);
            pdata.html( pdata.text().replace(/(^\w+)/,'<strong>$1</strong>') );
        });
    })   
}
JQueryBold();