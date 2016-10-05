import './counters.css';
import template from './counters.jade';

export default function getCounters() {
  $(document).ready(function() {
    $('#root').prepend(template);
  });
};
