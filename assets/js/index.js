/**
 * Homepage script
 */
$(document).ready(function() {

  // download button show operating system
  if(! platform) return;
  var os = platform.os.family.toString();
  $('#os').text(os);

});
