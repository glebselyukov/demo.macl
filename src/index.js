var styles = require('./index.less');
var statics = require.context("./assets/images/", true, /^.*/);
var fonts = require.context("./assets/fonts/", true, /^.*/);
var $ = require('jquery');

$('.nav__burger-menu').click(function () {
    if (!$(this).hasClass('nav__burger-menu--opened')) {
        $('.nav__ul').fadeToggle(300, 'linear');
    }
    else {
        $('.nav__ul').fadeToggle(0, 'linear');
    }
    $(this).toggleClass('nav__burger-menu--opened');
});