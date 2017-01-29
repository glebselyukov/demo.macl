import $ from 'jquery';

let menu = $('.nav__burger-menu').click(function () {
    if (!$(this).hasClass('nav__burger-menu--opened')) {
        $('.nav__ul').fadeToggle(300, 'linear');
    }
    else {
        $('.nav__ul').fadeToggle(0, 'linear');
    }
    $(this).toggleClass('nav__burger-menu--opened');
});

let tabs = $('ul.tabs li').click(function(){
    let tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
});

export {menu, tabs};