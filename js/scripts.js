$(document).ready(function() {
  $('.open-menu').click(function() {
    $('nav').addClass('open');
  });

  $('.close-menu').click(function() {
    $('nav').removeClass('open');
  });

  $(document).keydown(function(event) {
    if (event.keyCode === 27) {
      $('nav').removeClass('open');
    }
  });

  $('form').validate();
});
