/**
 * Created by neerajsingh on 30/08/16.
 */



//Back to top button//


var offset = 300,

    offset_opacity = 1200,

    scroll_top_duration = 700,

    $back_to_top = $('.cd-top');

//hide or show the "back to top" link
$(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) {
        $back_to_top.addClass('cd-fade-out');
    }
});


//smooth scroll to top

$back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
            scrollTop: 0 ,
        }, scroll_top_duration
    );
});




///////////Google maps////////

$('#map-section')
    .click(function(){
        $(this).find('iframe').addClass('clicked')})
    .mouseleave(function(){
        $(this).find('iframe').removeClass('clicked')});
