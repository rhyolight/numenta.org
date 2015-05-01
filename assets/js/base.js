/**
 * Global javascript, loads on every page
 */

'use strict';

if(! 'Numenta' in window) window.Numenta = {};


(function () {
  $(document).ready(function () {

    // Back-to-top functionality
    $('#back-to-top').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: '0px' });
    });

  });
})();
