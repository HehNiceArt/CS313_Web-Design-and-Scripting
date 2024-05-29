function AnimationSequence(){
    $(document).ready(function(){
        $("#startAnim").click(function(){
            $("#imageAnim").hide(1000);
            $("#imageAnim").delay(500).show(1000);
            $("#imageAnim").delay(1000).animate({
                height:'200px',
                width:'200px'
            });
            $("#imageAnim").delay(1500).slideUp(1000);
            $("#imageAnim").delay(2000).slideDown(1000);
            $("#imageAnim").delay(1000).animate({
                height:'300px',
                width:'300px',
            });
            $("#imageAnim").animate({
                height: '250px',
                width: '250px'
            })
        })
    })
}
AnimationSequence();