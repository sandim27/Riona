import './contact_us.css';
import template from './contact_us.jade';

export default function getContact() {

  $(document).ready(function() {
    $('#root').prepend(template);

    $('.contact_form form input[type="text"], .contact_form form textarea').on('focus', function() {
      $('.contact_form form input[type="text"], .contact_form form textarea').removeClass('contact-error');
    });

    $('.contact_form form').submit(function(e) {
      e.preventDefault();
      $('.contact_form form input[type="text"], .contact_form form textarea').removeClass('contact-error');
      var postdata = $('.contact_form form').serialize();
      $.ajax({
        type: 'POST',
        url: 'assets/contact.php',
        data: postdata,
        dataType: 'json',
        success: function(json) {
          if(json.emailMessage != '') {
            $('.contact_form form .contact_email').addClass('contact-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
              $(this).removeClass('animated shake');
            });
          }
          if(json.subjectMessage != '') {
            $('.contact_form form .contact_subject').addClass('contact-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
              $(this).removeClass('animated shake');
            });
          }
          if(json.messageMessage != '') {
            $('.contact_form form textarea').addClass('contact-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
              $(this).removeClass('animated shake');
            });
          }
          if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
            $('.contact_form form').fadeOut('fast', function() {
              $('.contact_form').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
            });
          }
        }
      });
    });

    if (document.all && !document.addEventListener) {
      $('.contact_email, .contact_subject, .contact_message').removeAttr('placeholder');

      $('.contact_email').val('Email...');
      $('.contact_subject').val('Subject...');
      $('.contact_message').text('Message...');
    };

  });
};
