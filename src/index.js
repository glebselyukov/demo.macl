const index = require('./index.html');
const styles = require('./index.less');
const statics = require.context("./assets/", true, /^.*/);

import {menu, tabs} from './components/menus/scripts';
import swiper from './components/slider/scripts';
import js_section_3_list from './components/vue/scripts';