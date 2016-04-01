/**
 * Homepage script
 */

'use strict';


/**
 * Quickstart console example - dynamic change per OS.
 * Key is one of ['linux','osx','windows']
 */
function augmentQuickstartConsole() {
  var $console =  $('#console');
  var family = window.platform.os.family || 'osx';
  var key = family.replace(/\s/g, '').toLowerCase();
  var $element;

  if(key === 'ubuntu') {
    key = 'linux';
  }
  $element = $console.find('.' + key);
  $console.children().addClass('hidden');
  $element.removeClass('hidden');
}


/**
 * Homeage Script - Main
 */
(function () {
  $(document).ready(function () {

    augmentQuickstartConsole();

  });
})();
