import './clients.css';
import template from './clients.jade';
import $ from 'jquery';

export default function getClients() {
  $(document).ready(function() {
    $('#root').prepend(template);
  });
};
