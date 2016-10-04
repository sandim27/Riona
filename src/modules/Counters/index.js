import template from './counters.jade';
import $ from 'jquery';
import 'jquery.backstretch';

export default function getCounters() {
  $(document).ready(function() {
    $('body').prepend(template);
    $('.counters-container').backstretch('assets/img/backgrounds/2.jpg');
  });
};
