var $header = $('header');
var $div = $('header div');
var $nav = $('header nav');
var $a = $('header a');
var $flotante = $(".divFlotante");
var previousScroll = 0;

$(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > previousScroll && scroll > 600) {
        $header.addClass('headerOnOff');
        $header.removeClass('bgcolor');
        $flotante.removeClass('divFlotante');
    } else {
        $header.removeClass('headerOnOff');
        if (scroll < previousScroll && scroll > 600) {
            $header.addClass('bgcolor');
            $flotante.addClass('divFlotante');
            $div.fadeOut();
            $nav.fadeOut();
            $a.fadeOut();
        }
        if (scroll < previousScroll && scroll < 600) {
            $header.removeClass('bgcolor');
            $div.fadeIn();
            $nav.fadeIn();
            $a.fadeIn();
        }
    }
    previousScroll = scroll;
});
