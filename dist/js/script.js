var $ = jQuery;


$(document).ready(function(){

    // scroll header
    $(window).on('scroll', function () {
        if($(window).scrollTop()){
            $('.header__nav').addClass('scroll');
        }
        else {
            $('.header__nav').removeClass('scroll');
        }
    });


    // slide click search
    $( ".search .button" ).click(function() {
        $( ".form-inline" ).slideToggle( "slow" );
    });





});



//
// $(document).ready(function(){
//     $( ".nav-item" )
//         .on( "mouseenter", function() {
//             $('.dropdown-menu').addClass('show');
//         })
//         .on( "mouseleave", function() {
//             $('.dropdown-menu').removeClass('show');
//         });
// });