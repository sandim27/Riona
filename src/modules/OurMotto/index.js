import template from './our_motto.jade';
import $ from 'jquery';
import 'jquery.backstretch';

export default function getMotto() {
  $(document).ready(function() {
    $('body').prepend(template);
    $('.our-motto-container').backstretch('assets/img/backgrounds/2.jpg');
  });
};
