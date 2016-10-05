import './our_motto.css';
import template from './our_motto.jade';
import $ from 'jquery';

export default function getMotto() {
  $(document).ready(function() {
    $('#root').prepend(template);
  });
};
