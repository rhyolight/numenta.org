module.exports = function() {

  describe('Response', function() {

    it('should have correct response code', function() {
      casper.then(function() {
        expect(casper.currentHTTPStatus).to.equal(200);
      });
    });

    describe('Basic Markup Tree', function() {

      describe('HTML tag', function() {

        it('should exist', function() {
          casper.then(function() {
            "html".should.be.inDOM;
          });
        });

        describe('HEAD tag', function() {

          it('should exist', function() {
            casper.then(function() {
              "html > head".should.be.inDOM;
            });
          });

          describe('TITLE tag', function() {

            it('should exist', function() {
              var selector = "html > head > title";

              casper.then(function() {
                selector.should.be.inDOM;
              });
            });

          });

        }); // head tag

      }); // html tag

    }); // basic markup tree

  }); // response

}; // module.exports
