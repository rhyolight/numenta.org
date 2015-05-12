module.exports = function() {

  describe('HEADER tag', function() {

    it('should exist', function() {
      casper.then(function() {
        "header".should.be.inDOM;
      });
    });

    describe('Header NAV tag', function() {

      var selector = "header > nav";

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

      describe('Header NAV Logo', function() {

        var selector = "header > nav a.navbar-brand > img";

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

      }); // header nav logo

      describe('Header NAV Menu', function() {

        var selector = "header > nav ul.nav";

        it('should exist', function() {
          casper.then(function() {
            selector.should.be.inDOM;
          });
        });

        describe('Header NAV Menu Items', function() {

          describe('Machine Intelligence', function() {

            var selector = "header > nav ul.nav > li:nth-child(1) > a";

            it('should exist', function() {
              casper.then(function() {
                selector.should.be.inDOM;
              });
            });

            it('should be a link', function() {
              casper.then(function() {
                selector.should.have.attribute('href');
              });
            });

            it('should contain correct text', function() {
              casper.then(function() {
                selector.should.have.text('Machine Intelligence');
              });
            });

          }); // machine intel

          describe('Technology', function() {

            var selector = "header > nav ul.nav > li:nth-child(2) > a";

            it('should exist', function() {
              casper.then(function() {
                selector.should.be.inDOM;
              });
            });

            it('should be a link', function() {
              casper.then(function() {
                selector.should.have.attribute('href');
              });
            });

            it('should contain correct text', function() {
              casper.then(function() {
                selector.should.have.text('Technology');
              });
            });

          }); // technology

          describe('Applications', function() {

            var selector = "header > nav ul.nav > li:nth-child(3) > a";

            it('should exist', function() {
              casper.then(function() {
                selector.should.be.inDOM;
              });
            });

            it('should be a link', function() {
              casper.then(function() {
                selector.should.have.attribute('href');
              });
            });

            it('should contain correct text', function() {
              casper.then(function() {
                selector.should.have.text('Applications');
              });
            });

          }); // applications

          describe('Get Started', function() {

            var selector = "header > nav ul.nav > li:nth-child(4) > a";

            it('should exist', function() {
              casper.then(function() {
                selector.should.be.inDOM;
              });
            });

            it('should be a link', function() {
              casper.then(function() {
                selector.should.have.attribute('href');
              });
            });

            it('should contain correct text', function() {
              casper.then(function() {
                selector.should.have.text('Get Started');
              });
            });

          }); // technology

        }); // header nav menu items

        describe('Header NAV Menu Dropdown', function() {

          var selector = "header > nav ul.nav > li.dropdown ul.dropdown-menu";

          it('should exist', function() {
            casper.then(function() {
              selector.should.be.inDOM;
            });
          });

          it('should NOT be visible by default', function() {
            casper.then(function() {
              selector.should.not.be.visible;
            });
          });

        });

      }); // header nav menu

    }); // header nav

  }); // header

};
