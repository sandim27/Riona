import template from './nav.jade';
import $ from 'jquery';

export default function getNav() {
  $(document).ready(function() {
    $('body').prepend(template);

    $('.show-menu a').on('click', function(e) {
      e.preventDefault();
      $(this).fadeOut(100, function() {
        $('nav').slideDown();
      });
    });
    $('.hide-menu a').on('click', function(e) {
      e.preventDefault();
      $('nav').slideUp(function() {
        $('.show-menu a').fadeIn();
      });
    });

  });
};
