import $ from 'jquery';

var menu = $('.nav__burger-menu').click(function () {
    if (!$(this).hasClass('nav__burger-menu--opened')) {
        $('.nav__ul').fadeToggle(300, 'linear');
    }
    else {
        $('.nav__ul').fadeToggle(0, 'linear');
    }
    $(this).toggleClass('nav__burger-menu--opened');
});

export default menu;