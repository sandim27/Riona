import './footer.css';
import template from './footer.jade';

export default function getFooter() {
  $(document).ready(function() {
    $('#root').prepend(template);
  });
};
