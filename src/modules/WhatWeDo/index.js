import template from './what_we_do.jade';
import $ from 'jquery';

export default function getListDo() {
  $(document).ready(function() {
    $('body').prepend(template);
  });
};
