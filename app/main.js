$(document).ready(function() {
    $("#btn__hamburguer").click(function(){
        if ($('.header').hasClass('open')){
            $('.header').removeClass('open');
            $('body').removeClass('noscroll');
            $('.in__fade').removeClass('fade-in');
            $('.in__fade').addClass('fade-out');
            $('.line-hamburguer').removeClass('mobile__clic');
        }else{
            $('.header').addClass('open');
            $('body').addClass('noscroll');
            $('.in__fade').addClass('fade-in');
            $('.in__fade').removeClass('fade-out');
            $('.line-hamburguer').addClass('mobile__clic');
 
        }
    });

  
});

