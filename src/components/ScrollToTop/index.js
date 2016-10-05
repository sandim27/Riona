import './scroll_to_top.css';
import template from './scroll_to_top.jade';

export default function getScroll() {
  $(document).ready(function() {
    $('#root').prepend(template);
  });
};
