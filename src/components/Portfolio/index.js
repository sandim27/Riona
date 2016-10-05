import './portfolio.css';
import template from './portfolio.jade';
import $ from 'jquery';
import 'magnific-popup';
import 'jquery-bridget/jquery-bridget';
import Masonry from 'masonry-layout';
import retina from 'retinajs';

$.bridget( 'masonry', Masonry, $ );

export default function getPortfolio() {

  $(document).ready(function() {
    $('#root').prepend(template);
  });

  $(window).on('load',retina,function() {

    $('.portfolio-masonry').masonry({
      columnWidth: '.portfolio-box',
      itemSelector: '.portfolio-box',
      transitionDuration: '0.5s'
    });

    $('.portfolio-filters a').on('click', function(e) {
      e.preventDefault();
      if(!$(this).hasClass('active')) {
        $('.portfolio-filters a').removeClass('active');
        var clickedFilter = $(this).attr('class').replace('filter-', '');
        $(this).addClass('active');
        if( clickedFilter != 'all' ) {
          $('.portfolio-box:not(.' + clickedFilter + ')').css('display', 'none');
          $('.portfolio-box:not(.' + clickedFilter + ')').removeClass('portfolio-box');
          $('.' + clickedFilter).addClass('portfolio-box');
          $('.' + clickedFilter).css('display', 'block');
          $('.portfolio-masonry').masonry();
        } else{
          $('.portfolio-masonry > div').addClass('portfolio-box');
          $('.portfolio-masonry > div').css('display', 'block');
          $('.portfolio-masonry').masonry();
        }
      }
    });

    $(window).on('resize', function() {
      $('.portfolio-masonry').masonry();
    });

    // image popup
    $('.portfolio-box-text').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: 'The image could not be loaded.',
        titleSrc: function(item) {
          return item.el.find('p').text();
        }
      },
      callbacks: {
        elementParse: function(item) {
          item.src = item.el.parent('.portfolio-box-text-container').siblings('img').attr('src');
        }
      }
    });
  });
};
