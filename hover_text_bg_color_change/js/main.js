// All custom codes with comment

$(document).ready(function () {

    //calc width
    var textwidth = $('.section-black h1').outerWidth();
    var winwidth = $(window).outerWidth();
    var diff = winwidth - textwidth;
    var diffhalf = diff / 2;
    $('h1').css('right', diffhalf);

    //calc height
    var textheight = $('.section-black h1').outerHeight();
    var winheight = $(window).outerHeight();
    var heightdiff = winheight - textheight;
    var heightdiffhalf = heightdiff / 2;
    $('h1').css('top', heightdiffhalf);

    //width colorchange
    //            $('.main').mousemove(function(event) {
    //                var getpos = event.pageX;
    //                var getwidth = winwidth - getpos;
    //                $('.section-black').css('width', getwidth);
    //            });

    //height colorchange
    $('.main').mousemove(function (event) {
        var getpos = event.pageY;

        $('.section-black').css('height', getpos);
    });
});
