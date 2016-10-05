import './testimonials.css';
import template from './testimonials.jade';

export default function getTestimonials() {
  $(document).ready(function() {
    $('#root').prepend(template);

    $('.testimonial-active').html('<p>' + $('.testimonial-single:first p').html() + '</p>');
    $('.testimonial-single:first .testimonial-single-image img').css('opacity', '1');

    $('.testimonial-single-image img').on('click', function() {
      $('.testimonial-single-image img').css('opacity', '0.5');
      $(this).css('opacity', '1');
      var newTestimonialText = $(this).parent('.testimonial-single-image').siblings('p').html();
      $('.testimonial-active p').fadeOut(300, function() {
        $(this).html(newTestimonialText);
        $(this).fadeIn(400);
      });
    });

  });
};
