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
    }, 1000);
});
$(".closes").click(function(){
    $(".siteinfo").fadeOut(500, function(){
        $(this).remove();
    });
});
/*  // 自动关闭提示。
$(document).ready(function(){
    setTimeout(function() {
        $(".siteinfo").fadeOut(500, function(){
            $(this).remove();
        });
    }, 9000);
});
*/