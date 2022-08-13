$(document).ready(function(){
$('.menusym i').click(function(){     
$('.navigation-mobile').fadeToggle(600);
 
});
});

$(function() {
    $('marquee').mouseover(function() {
        $(this).attr('scrollamount',0);
    }).mouseout(function() {
         $(this).attr('scrollamount',5);
    });
});