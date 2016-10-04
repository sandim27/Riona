import template from './footer.jade';
import $ from 'jquery';

export default function getFooter() {
  $(document).ready(function() {
    $('body').prepend(template);
  });
};
