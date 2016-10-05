import './footer.css';
import template from './footer.jade';
import $ from 'jquery';

export default function getFooter() {
  $(document).ready(function() {
    $('#root').prepend(template);
  });
};
