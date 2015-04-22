/**
 * Homepage script
 */

'use strict';

(function () {
  $(document).ready(function () {
    var $form;
    var os;
    var url;
    var version;

    // download button - dynamic functionality
    {
      if(url = window.Numenta.url.download) {
        // switch button from general target url to specific versioned url
        $form = $('form');
        $form.attr('action', url);
        // set overlay button click target, i don't trust the form action fully
        $form.find('button').on('click', function (event) {
          event.preventDefault();
          window.location.href = url;
          return;
        });

        // show download semver version release number
        if(version = url.split('/').pop()) {
          $('#ver').text('Version ' + version);
        }
      }

      // show users operating system name
      if(window.platform) {
        if(os = window.platform.os.family.toString()) {
          $('#os').text(os);
        }
      }
    } // download button

  });
})();
