var commonTests = require('./common/');
var util = require('./lib/util');


describe('Numenta Anomaly Benchmark (NAB)', function () {

  before(function () {
    casper.start(util.getUrl('/nab/'));
  });

  commonTests();

  describe('Page Meta', function () {

    it('should have correct page title', function () {
      casper.then(function () {
        "NAB Competition".should.matchTitle;
      });
    });

  }); // meta

  describe('Page Content', function () {

    describe('h1 Title', function () {

      var selector = "main section h1";

      it('should exist', function () {
        casper.then(function () {
          selector.should.be.inDOM;
        });
      });

      it('should be visible', function () {
        casper.then(function () {
          selector.should.be.visible;
        });
      });

      it('should contain valid text', function () {
        casper.then(function () {
          selector.should.have.text(/Numenta Anomaly Benchmark Competition/);
        });
      });

    }); // h1

    describe('Paragraph Text', function () {

      var selector = "main section p";

      it('should exist', function () {
        casper.then(function () {
          selector.should.be.inDOM;
        });
      });

      it('should be visible', function () {
        casper.then(function () {
          selector.should.be.visible;
        });
      });

      it('should contain valid text', function () {
        casper.then(function () {
          selector.should.have.text(/encouraged to enter/);
        });
      });

    }); // p

  }); // content

}); // nab
