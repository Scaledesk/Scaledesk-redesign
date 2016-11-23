$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


//custom scrollspy
// $(function(){
//     $('#custom-nav').data('size','big');
// });
//
// $(window).scroll(function(){
//     if($(document).scrollTop() > 0)
//     {
//         if($('#custom-nav').data('size') == 'big')
//         {
//             $('#custom-nav').data('size','small');
//             $('#custom-nav').stop().animate({
//                 height:'50px'
//             },600);
//
//         }
//     }
//     else
//     {
//         if($('#custom-nav').data('size') == 'small')
//         {
//             $('#custom-nav').data('size','big');
//             $('#custom-nav').stop().animate({
//                 height:'80px'
//             },600);
//         }
//     }
// });

// $(window).scroll(function() {
//     if ($(document).scrollTop() > 100) {
//         $('.cd-primary-nav > li > a').addClass('shrink');
//         $('.cd-main-header').css("height","50px");
//     } else {
//         $('.cd-primary-nav > li > a').removeClass('shrink');
//         $('.cd-main-header').css("height","80px");
//
//     }
// });