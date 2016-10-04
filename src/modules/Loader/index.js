import template from './loader.jade';
import $ from 'jquery';
import WOW from 'wow.js';

export default function getLoader() {
  new WOW().init();

  $(document).ready(function() {
    $('body').prepend(template);
  });

  $(window).on('load',function() {
    $('.loader-img').fadeOut();
    $('.loader').delay(1000).fadeOut('slow');
  });

};
