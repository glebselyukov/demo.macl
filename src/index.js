const styles = require('./index.less');
const statics = require.context("./assets/", true, /^.*/);

import $ from 'jquery';
import menu from './components/menus/scripts';
import Swiper from 'swiper';


$('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
});


var swiper = new Swiper('.swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
});