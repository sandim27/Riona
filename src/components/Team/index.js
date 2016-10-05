import './team.css';
import template from './team.jade';
import $ from 'jquery';

export default function getTeam() {
  $(document).ready(function() {
    $('#root').prepend(template);
  });
};
