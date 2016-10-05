import './our_motto.css';
import template from './our_motto.jade';

export default function getMotto() {
  $(document).ready(function() {
    $('#root').prepend(template);
  });
};
