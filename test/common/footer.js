module.exports = function() {

  describe('FOOTER tag', function() {

    it('should exist', function() {
      casper.then(function() {
        "footer".should.be.inDOM;
      });
    });

    describe('Footer Social area', function() {

      var selector = "footer > .social .social";

      it('should exist', function() {
        casper.then(function() {
          selector.should.be.inDOM;
        });
      });

      it('should be visible', function() {
        casper.then(function() {
          selector.should.be.visible;
        });
      });

    });

    describe('Footer Subscribe area', function() {

      var selector = "footer > .social .subscribe";

      it('should exist', function() {
        casper.then(function() {
          selector.should.be.inDOM;
        });
      });

      it('should be visible', function() {
        casper.then(function() {
          selector.should.be.visible;
        });
      });

    });

    describe('Footer Links area', function() {

      var selector = "footer > .footer > nav > ul";

      it('should exist', function() {
        casper.then(function() {
          selector.should.be.inDOM;
        });
      });

      it('should be visible', function() {
        casper.then(function() {
          selector.should.be.visible;
        });
      });

    });

    describe('Footer Copyright area', function() {

      var selector =  "footer > .footer > .copyright > ul",
          copyright = selector + " > li:nth-child(1)",
          year =      new Date().getFullYear();

      it('should exist', function() {
        casper.then(function() {
          selector.should.be.inDOM;
        });
      });

      it('should be visible', function() {
        casper.then(function() {
          selector.should.be.visible;
        });
      });

      it('should have correct text', function() {
        casper.then(function() {
          copyright.should.have.text(/Copyright.*Numenta/);
        });
      });

      it('should have correct year', function() {
        casper.then(function() {
          copyright.should.have.text(new RegExp(year));
        });
      });

    });

  });
};
