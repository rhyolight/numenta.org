module.exports = function () {

  describe('Response', function () {

    it('should have correct response code', function () {
      casper.then(function () {
        expect(casper.currentHTTPStatus).to.equal(200);
      });
    });

    describe('Basic Markup Tree', function () {

      describe('HTML tag', function () {

        it('should exist', function () {
          casper.then(function () {
            "html".should.be.inDOM;
          });
        });

        describe('HEAD tag', function () {

          it('should exist', function () {
            casper.then(function () {
              "html > head".should.be.inDOM;
            });
          });

          describe('TITLE tag', function () {

            it('should exist', function () {
              casper.then(function () {
                "html > head > title".should.be.inDOM;
              });
            });

          });

          describe('LINK tag', function () {

            it('should exist', function () {
              casper.then(function () {
                "html > head > link".should.be.inDOM;
              });
            });

            describe('Stylesheet Loads', function () {

              it('should load Base', function () {
                casper.then(function () {
                  "base.css".should.be.loaded;
                });
              });

            });

          });

        }); // head tag

        describe('BODY tag', function () {

          it('should exist', function () {
            casper.then(function () {
              "html > body".should.be.inDOM;
            });
          });

          describe('SCRIPT tag', function () {

            it('should exist', function () {
              casper.then(function () {
                "html > body > script".should.be.inDOM;
              });
            });

            describe('Script Loads', function () {

              it('should load jQuery', function () {
                casper.then(function () {
                  "jquery.min.js".should.be.loaded;
                });
              });

              it('should load Bootstrap', function () {
                casper.then(function () {
                  "bootstrap.min.js".should.be.loaded;
                });
              });

              it('should load Platform', function () {
                casper.then(function () {
                  "platform.js".should.be.loaded;
                });
              });

              it('should load Base', function () {
                casper.then(function () {
                  "base.js".should.be.loaded;
                });
              });

            });

          });

        }); // body tag

      }); // html tag

    }); // basic markup tree

  }); // response

}; // module.exports
