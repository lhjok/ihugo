$(document).ready(function(){
    $(".clicktop").click(function(){
        $(".mCSB_container,.mCSB_dragger").animate({top:0},"slow");
    });
});
$(document).ready(function(){
    setTimeout(function() {
        $('.siteinfo').fadeOut(500, function(){
            $(this).css("display","block");
        });
    }, 1800);
});
$(".closes").click(function(){
    $(".siteinfo").fadeOut(500, function(){
        $(this).remove();
    });
});
$(document).ready(function(){
    setTimeout(function() {
        $(".Message").fadeOut(500, function(){
            $(this).css("display","block");
        });
    }, 1800);
});
$(".ns-close").click(function(){
    $(".Message").fadeOut(500, function(){
        $(this).remove();
    });
});
$(document).ready(function(){
    setTimeout(function() {
        $(".Message").fadeOut(500, function(){
            $(this).remove();
        });
    }, 9000);
});