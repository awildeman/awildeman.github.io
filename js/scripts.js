$(document).ready(function() {

  // Mobile menu
  $('.open-menu').click(function() {
    $('nav').addClass('open');
  });

  $('.close-menu').click(function() {
    $('nav').removeClass('open');
  });

  // Close menu on esc
  $(document).keydown(function(event) {
    if (event.keyCode === 27) {
      $('nav').removeClass('open');
    }
  });

  // Form success message
  var formQueryString = window.location.href.match(/form=submitted/);
  var formSubmitted = formQueryString !== null && formQueryString.length > 0;
  if (formSubmitted) {
    $('.form-success').show().delay(5000).fadeOut(400);
  }

  // Form validation
  $('form').validate();
});
