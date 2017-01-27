$(document).ready(function () {
    $('.menu-btn-trig').click(function () {
        var menu = $('#btn-menu');
        var menuli = $('#btn-menu ul li');
        var menuspan = $('.menu-btn-trig span');
        if (menu.hasClass('btn-menu-close')) {
            menu.removeClass('btn-menu-close');
            menu.addClass('btn-menu-open');
            menuli.addClass('menu-open');
            menuspan.addClass('active');
        }
        else {
            menu.addClass('btn-menu-close');
            menu.removeClass('btn-menu-open');
            menuli.removeClass('menu-open');
            menuspan.removeClass('active');
        }
        
    });
});