$(function(){
    $(window).on("scroll", function(){
        var scroll = $(window).scrollTop();
        if(scroll >= 50){
            $("nav").addClass("stickyadd");
            $("nav").removeClass("stick");
        }else{
            $("nav").removeClass("stickyadd");
            $("nav").addClass("stick");
        }
    });
});

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});