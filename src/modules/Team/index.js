import template from './team.jade';
import $ from 'jquery';

export default function getTeam() {
  $(document).ready(function() {
    $('body').prepend(template);
  });
};
