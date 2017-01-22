const styles = require('./index.less');
const statics = require.context("./assets/", true, /^.*/);
const $ = require('jquery/dist/jquery.min.js');
// const scripts = require.context('/components/', true, /^\.\/.*\.js$/);

$('.nav__burger-menu').click(function () {
    if (!$(this).hasClass('nav__burger-menu--opened')) {
        $('.nav__ul').fadeToggle(300, 'linear');
    }
    else {
        $('.nav__ul').fadeToggle(0, 'linear');
    }
    $(this).toggleClass('nav__burger-menu--opened');
});