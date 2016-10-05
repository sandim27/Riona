import './counters.css';
import template from './counters.jade';
import $ from 'jquery';

export default function getCounters() {
  $(document).ready(function() {
    $('#root').prepend(template);
  });
};
