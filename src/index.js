const styles = require('./index.less');
const statics = require.context("./assets/images/", true, /^.*/);
const fonts = require.context("./assets/fonts/", true, /^.*/);
const $ = require('jquery/dist/jquery.min.js');

$('.nav__burger-menu').click(function () {
    if (!$(this).hasClass('nav__burger-menu--opened')) {
        $('.nav__ul').fadeToggle(300, 'linear');
    }
    else {
        $('.nav__ul').fadeToggle(0, 'linear');
    }
    $(this).toggleClass('nav__burger-menu--opened');
});