(function() {

    var committersUrl = "http://tooling.numenta.org/committers";
    var tmpl = Handlebars.compile($("#committers-tmpl").html());

    function displayCommitters(committers) {
        // Fill HTML template for committers.
        $('#committers').html(tmpl({committers: committers}));
    }

    $.ajax({
        url: committersUrl,
        dataType: 'jsonp',
        jsonp: 'callback',
        success: displayCommitters
    });

}());
