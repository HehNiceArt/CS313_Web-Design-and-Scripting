function JQueryHide(){
    $(document).ready(function(){
        $("#hide").click(function(){
            $("p").hide(1000);
        });
    }); $(document).ready(function(){
        $("#show").click(function(){
            $("p").show(500);
        });
    });
}
//JQueryHide();
function JQueryToggle(){
     $(document).ready(function(){
        $("button").click(function(){
            $("div.d1").toggle(1000);
        });
    });
}
 
function JQueryFadeIn(){
    $(document).ready(function(){
        $("#FadeInButton").click(function(){
            $("#divFadeIn1").fadeIn();
            $("#divFadeIn2").fadeIn("slow");
            $("#divFadeIn3").fadeIn(3000);
        });
    });
}

function JQueryFadeOut(){
    $(document).ready(function(){
        $("button").click(function(){
            $("#div1").fadeOut();
            $("#div2").fadeOut("slow");
            $("#div3").fadeOut(3000);
        });
    });
}
// JQueryFadeIn();
// JQueryFadeOut();
function JQueryFadeToggle(){
    $(document).ready(function(){
        $("button").click(function(){
            $("#div1").fadeToggle();
            $("#div2").fadeToggle("slow");
            $("#div3").fadeToggle(3000);
        });
    });
}
//JQueryFadeToggle();
function JQuerySlideDown(){
    $(document).ready(function(){
        $("#flipDown").click(function(){
            $("#panel").slideDown("slow");
        })
        $("#flipUp").click(function(){
            $("#panel").slideUp("slow");
        })
    })
}
JQuerySlideDown();
//JQuerySlideDown();
function JQueryAnimate(){
    $(document).ready(function(){
        $("button").click(function(){
            $("div").animate({
                // left: '250px',
                // opacity: '0.5',
                // height: '150px',
                // width: '150px'
                height: 'toggle'
            });
        });
    });
}

function JQueryExerciseAnimate(){
    $(document).ready(function(){
        $("#btn1").click(function(){
            $("#box").animate({
                height: '200px',
                width: '200px'
            });
        });
        
    });
}
function JQueryReset(){
    $(document).ready(function(){
     $('#btn2').click(function(){
            $('#box').animate({
                height: '100px',
                width: '100px'
            })
        })
    })

}
JQueryExerciseAnimate();
JQueryReset();