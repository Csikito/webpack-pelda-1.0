import '../index.html';


import getDate from './date';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

import 'bootstrap';

$(document).ready(() => {
    $('.js-content').html(`It's ${getDate()}`);

    $('.js-modal').modal({
        show: true,
        keyboard: true
    });
});