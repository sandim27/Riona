import './team.css';
import template from './team.jade';

export default function getTeam() {
  $(document).ready(function() {
    $('#root').prepend(template);
  });
};
