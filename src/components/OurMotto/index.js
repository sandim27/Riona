import './our_motto.css';
import template from './our_motto.jade';
import $ from 'jquery';
import 'jquery.backstretch';

export default function getMotto() {
  $(document).ready(function() {
    $('#root').prepend(template);
    $('.our-motto-container').backstretch('src/images/backgrounds/2.jpg');
  });
};
