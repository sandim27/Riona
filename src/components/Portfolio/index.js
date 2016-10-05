import './portfolio.css';
import template from './portfolio.jade';
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

    $('.portfolio_masonry').masonry({
      columnWidth: '.portfolio_box',
      itemSelector: '.portfolio_box',
      transitionDuration: '0.5s'
    });

    $('.portfolio_filters a').on('click', function(e) {
      e.preventDefault();
      if(!$(this).hasClass('active')) {
        $('.portfolio_filters a').removeClass('active');
        var clickedFilter = $(this).attr('class').replace('filter-', '');
        $(this).addClass('active');
        if( clickedFilter != 'all' ) {
          $('.portfolio_box:not(.' + clickedFilter + ')').css('display', 'none');
          $('.portfolio_box:not(.' + clickedFilter + ')').removeClass('portfolio_box');
          $('.' + clickedFilter).addClass('portfolio_box');
          $('.' + clickedFilter).css('display', 'block');
          $('.portfolio_masonry').masonry();
        } else{
          $('.portfolio_masonry > div').addClass('portfolio_box');
          $('.portfolio_masonry > div').css('display', 'block');
          $('.portfolio_masonry').masonry();
        }
      }
    });

    $(window).on('resize', function() {
      $('.portfolio_masonry').masonry();
    });

    // image popup
    $('.portfolio-box_text').magnificPopup({
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
          item.src = item.el.parent('.portfolio-box_text-container').siblings('img').attr('src');
        }
      }
    });
  });
};
