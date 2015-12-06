


$(document).ready(function() {
    $(".topOne").click(function(){

        $('html, body').animate({scrollTop: $('.ab').offset().top},2000);

    });
    $(".topTwo").click(function(){

        $('html, body').animate({scrollTop: $('.our1').offset().top}, 2000);

    });

    $(".toptree").click(function(){

        $('html, body').animate({scrollTop: $('.numb').offset().top},2000);

    });

    $(".topfiv").click(function(){

        $('html, body').animate({scrollTop: $('.portf').offset().top}, 2000);

    });

    $(".topsix").click(function(){

        $('html, body').animate({scrollTop: $('.form').offset().top}, 2000);

    });
    $(".topse").click(function(){

        $('html, body').animate({scrollTop: $('.form').offset().top}, 2000);

    });


    //STICKY menu

    var stickyNavTop=$('.sticked').offset().top;

    var sticky=function(){
        var scrollTop=$(window).scrollTop();

        if(scrollTop >stickyNavTop){
        $('.sticked').addClass("stick")
        }else{
        $('.sticked').removeClass("stick")
        }
    }

    sticky()

    $(window).scroll(function () {
        sticky()
    })





});

