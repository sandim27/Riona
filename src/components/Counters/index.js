import './counters.css';
import template from './counters.jade';
import $ from 'jquery';
import 'jquery.backstretch';

export default function getCounters() {
  $(document).ready(function() {
    $('#root').prepend(template);
    $('.counters-container').backstretch('src/images/backgrounds/2.jpg');
  });
};
