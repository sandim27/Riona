import template from './scroll_to_top.jade';
import $ from 'jquery';

export default function getScroll() {

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
    $('body').prepend(template);

    $('a.scroll-link').on('click', function(e) {
      e.preventDefault();
      scrollTo($(this), $('nav').height());
    });
  });
};
