import './clients.css';
import template from './clients.jade';

export default function getClients() {
  $(document).ready(function() {
    $('#root').prepend(template);
  });
};
