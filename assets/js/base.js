/**
 * Global javascript, loads on every page
 */

'use strict';


// requires

var jquery = require('jquery');
window.$ = jquery;
window.jQuery = jquery;

require('bootstrap-sass/assets/javascripts/bootstrap');

var platform = require('platform/platform');
window.platform =  platform;


// methods

(function () {
  $(document).ready(function() {

    // Back-to-top functionality
    $('#back-to-top').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: '0px' });
    });

  });
})();
