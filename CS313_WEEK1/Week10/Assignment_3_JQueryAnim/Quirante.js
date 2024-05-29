function DayWeek(input){
    switch(input){
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        break;
        default:
            return "Invalid Day!";
            break;
    }
}

function CheckDayWeek(){
    $(document).ready(function(){
        $("#submit").click(function(){
            let firstInputValue = $("#firstInput").val();
            let firstInputValueConvert = parseInt(firstInputValue);
            $("#firstOutput").html (DayWeek(firstInputValueConvert));
            
            let secondInputValue = $("#secondInput").val();
            let secondInputValueConvert = parseInt(secondInputValue);
            $("#secondOutput").html (DayWeek(secondInputValueConvert));

            let thirdInputValue = $("#thirdInput").val();
            let thirdInputValueConvert = parseInt(thirdInputValue);
            $("#thirdOutput").html (DayWeek(thirdInputValueConvert));

        })
    })
}
CheckDayWeek();