$(document).ready(function () {
    $(".nav-link").click(function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
        $('.navbar-default a').removeClass('selected');
        $(this).addClass('selected');
    });

});


$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'manual'
    }).tooltip('show');
});

// $( window ).scroll(function() {   
// if($( window ).scrollTop() > 10){  // scroll down a bit and get the action   
$(".progress-bar").each(function () {
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
});