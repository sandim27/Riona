import './top_content.css';
import template from './top_content.jade';
import $ from 'jquery';
import 'jquery.backstretch';

export default function getTopContent() {
  $(document).ready(function() {
    $('#root').prepend(template);
    $('.top-content').backstretch('src/images/backgrounds/1.jpg');
  });
};
