import './top_content.css';
import template from './top_content.jade';

export default function getTopContent() {
  $(document).ready(function() {
    $('#root').prepend(template);
  });
};
