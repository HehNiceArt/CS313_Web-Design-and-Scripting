function  TextMethod() {
   $(document).ready(function(){
    $(".btn-one").click(function(){
        var str = $("p").text();
        alert(str);
    });
    $(".btn-two").click(function(){
        var str = $("p:first").text();
        alert(str);
    });
    $(".btn-three").click(function(){
        var str = $("p.extra").text();
        alert(str);
    });
   }) 
}
function HTMLMethod(){
    $(document).ready(function(){
        $(".btn-one").click(function(){
            var str = $("p").html();
            alert(str);
        });
        $(".btn-two").click(function(){
            // var str = $("#container").html();
            // alert (str);
            var str = $("img#sky").attr("alt");
            alert(str);
        });
    })
}
function MultipleAttributes(){
    $(document).ready(function(){
        $("button").click(function(){
            $("img").attr({
                "class": "frame",
                "title": "This is the Sky"
            })
        })
    })
}
MultipleAttributes();
// function JQueryVal(){
//     $(document).ready(function(){
//         $("button.get-name").click(function(){
//             var name = $('input[type="text"]#name').val();
//             alert(name);
//         })
//         $("button.get-comment").click(function(){
//             var comment = $("textarea#comment").val();
//             alert(comment);
//         })
//         $("button.get-city").click(function(){
//             var city = $("select#city").val();
//             alert(city;)
//         })
//     })
// }
// function AppendText(){
//     $(document).ready(function(){
//         $("p").append(' <a href="#">read more...</a>');
//         $("button").click(function(){
//             $("#container").append("This is demo text.");
//         });
//     });
// }
