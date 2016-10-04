import template from './top_content.jade';
import $ from 'jquery';
import 'jquery.backstretch';

export default function getTopContent() {
  $(document).ready(function() {
    $('body').prepend(template);
    $('.top-content').backstretch('assets/img/backgrounds/1.jpg');
  });
};
