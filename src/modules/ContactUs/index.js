import template from './contact_us.jade';
import $ from 'jquery';

export default function getContact() {
  $(document).ready(function() {
    $('body').prepend(template);

    $('.contact-form form input[type="text"], .contact-form form textarea').on('focus', function() {
      $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('contact-error');
    });
    $('.contact-form form').submit(function(e) {
      e.preventDefault();
      $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('contact-error');
      var postdata = $('.contact-form form').serialize();
      $.ajax({
        type: 'POST',
        url: 'assets/contact.php',
        data: postdata,
        dataType: 'json',
        success: function(json) {
          if(json.emailMessage != '') {
            $('.contact-form form .contact-email').addClass('contact-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
              $(this).removeClass('animated shake');
            });
          }
          if(json.subjectMessage != '') {
            $('.contact-form form .contact-subject').addClass('contact-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
              $(this).removeClass('animated shake');
            });
          }
          if(json.messageMessage != '') {
            $('.contact-form form textarea').addClass('contact-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
              $(this).removeClass('animated shake');
            });
          }
          if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
            $('.contact-form form').fadeOut('fast', function() {
              $('.contact-form').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
            });
          }
        }
      });
    });

  });
};
