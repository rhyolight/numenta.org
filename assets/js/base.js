/**
 * Back-to-top functionality
 */
$('#back-to-top').on('click', function(event) {
  event.preventDefault();
  $('html, body').animate({ scrollTop: '0px' });
});
