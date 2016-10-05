import './testimonials.css';
import template from './testimonials.jade';

export default function getTestimonials() {
  $(document).ready(function() {
    $('#root').prepend(template);

    $('.testimonial_active').html('<p>' + $('.testimonial_single:first p').html() + '</p>');
    $('.testimonial_single:first .testimonial-single_image img').css('opacity', '1');

    $('.testimonial-single_image img').on('click', function() {
      $('.testimonial-single_image img').css('opacity', '0.5');
      $(this).css('opacity', '1');
      var newTestimonialText = $(this).parent('.testimonial-single_image').siblings('p').html();
      $('.testimonial_active p').fadeOut(300, function() {
        $(this).html(newTestimonialText);
        $(this).fadeIn(400);
      });
    });

  });
};
