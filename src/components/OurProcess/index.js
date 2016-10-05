import './our_process.css';
import template from './our_process.jade';
import $ from 'jquery';

function smallSlider1(sliderContainer) {
  var imgIndex = 1;
  $('.' + sliderContainer + ' img').each(function() {
    $(this).addClass('slider-1-img-' + imgIndex);
    $('.' + sliderContainer + ' .slider-1-nav').append('<span class="slider-1-nav-item-' + imgIndex + '"></span>');
    if($(this).hasClass('slider-1-img-active')) {
      $('.' + sliderContainer + ' .slider-1-nav-item-' + imgIndex).addClass('slider-1-nav-item-active');
    }
    imgIndex++;
  });
  // change slide
  $(document).on('click', '.' + sliderContainer + ' .slider-1-nav span', function() {
    if(!($(this).hasClass('slider-1-nav-item-active'))) {
      $('.' + sliderContainer + ' .slider-1-nav span').removeClass('slider-1-nav-item-active');
      var clickedNavIndex = $(this).attr('class').replace('slider-1-nav-item-', '');
      $(this).addClass('slider-1-nav-item-active');
      $('.' + sliderContainer + ' img.slider-1-img-active').fadeOut(300, function() {
        $(this).removeClass('slider-1-img-active');
        $('.' + sliderContainer + ' img.slider-1-img-' + clickedNavIndex).fadeIn(400, function() {
          $(this).addClass('slider-1-img-active');
        });
      });
    }
  });
}

export default function getProcess() {
  $(document).ready(function() {
    $('#root').prepend(template);
    smallSlider1('slider-1-our-process');
  });
};
