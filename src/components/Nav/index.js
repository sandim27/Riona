import './nav.css';
import template from './nav.jade';
import $ from 'jquery';


export default function getNav() {

  function scrollTo(clickedLink, navHeight) {
    var elementClass = clickedLink.attr('href').replace('#', '.');
    var scrollto = 0;
    if(elementClass != '.top-content') {
      elementClass += '-container';
      scrollto = $(elementClass).offset().top - navHeight;
    }
    if($(window).scrollTop() != scrollto) {
      $('html, body').stop().animate({scrollTop: scrollto}, 1000);
    }
  }

  $(document).ready(function() {
    $('#root').prepend(template);

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

    $('a.scroll-link').on('click', function(e) {
      e.preventDefault();
      scrollTo($(this), $('nav').height());
    });

  });
};
