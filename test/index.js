var commonTests = require('./common/'),
    util =        require('./lib/util');

describe('Homepage', function() {

  before(function() {
    casper.start(util.getUrl('/'));
  });

  commonTests();

  it('should have correct page title', function() {
    casper.then(function() {
      "NuPIC | Numenta Platform for Intelligent Computing".should.matchTitle;
    });
  });


  describe('Page-specific Main Content area', function() {

    var selector = "main > div.index";

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

    describe('Main Page Sections', function() {

      describe('Hero Section', function() {

        var selector = "main > div.index > section.hero";

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

        describe('h1 Title', function() {

          var selector = "main > div.index > section.hero h1";

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

          it('should contain valid text', function() {
            casper.then(function() {
              selector.should.have.text(/Leading.*New Era.*Machine Intelligence/);
            });
          });

        }); // h1

        describe('Paragraph Text', function() {

          var selector = "main > div.index > section.hero p";

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

          it('should contain valid text', function() {
            casper.then(function() {
              selector.should.have.text(/Numenta has developed a cohesive theory/);
            });
          });

        }); // p

        describe('Videos', function() {

          var selector = "main > div.index > section.hero a.youtube";

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

        }); // videos

      }); // hero

      describe('Machine Intelligence Section', function() {

        var selector = "main > div.index > section.intelligence";

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

        describe('Heading', function() {

          var selector = "main > div.index > section.intelligence h3";

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

          it('should contain valid text', function() {
            casper.then(function() {
              selector.should.have.text(/Machine Intelligence/);
            });
          });

        }); // heading

        describe('Content', function() {

          var selector = "main > div.index > section.intelligence p";

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

          it('should contain valid text', function() {
            casper.then(function() {
              selector.should.have.text(/intelligent machines/);
            });
          });

        }); // content

      }); // machine intel

      describe('Technology Section', function() {

        var selector = "main > div.index > section.technology";

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

        describe('Heading', function() {

          var selector = "main > div.index > section.technology h2";

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

          it('should contain valid text', function() {
            casper.then(function() {
              selector.should.have.text(/Technology/);
            });
          });

        }); // heading

        describe('Content', function() {

          var selector = "main > div.index > section.technology p";

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

          it('should contain valid text', function() {
            casper.then(function() {
              selector.should.have.text(/learning algorithms/);
            });
          });

          describe('Video', function() {

            var selector = "main > div.index > section.technology a.youtube";

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

          }); // video

        }); // content

      }); // tech

      describe('Applications Section', function() {

        var selector = "main > div.index > section.applications";

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

        describe('Heading', function() {

          var selector = "main > div.index > section.applications h2";

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

          it('should contain valid text', function() {
            casper.then(function() {
              selector.should.have.text(/Applications/);
            });
          });

          describe('Video', function() {

            var selector = "main > div.index > section.applications a.youtube";

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

          }); // video

        }); // heading

        describe('Content', function() {

          var selector = "main > div.index > section.applications .container .row div";

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

          it('should contain valid text', function() {
            casper.then(function() {
              selector.should.have.text(/variety of applications/);
            });
          });

        }); // content

      }); // apps

      describe('Get Started Section', function() {

        var selector = "main > div.index > section.start";

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

        describe('Heading', function() {

          var selector = "main > div.index > section.start h2";

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

          it('should contain valid text', function() {
            casper.then(function() {
              selector.should.have.text(/Get Started/);
            });
          });

        }); // heading

        describe('Content', function() {

          var selector = "main > div.index > section.start p";

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

          it('should contain valid text', function() {
            casper.then(function() {
              selector.should.have.text(/how to get started/);
            });
          });

        }); // content

      }); // get started

      describe('Latest Section', function() {

        var selector = "main > div.index > section.latest";

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

        describe('Heading', function() {

          var selector = "main > div.index > section.latest h3";

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

          it('should contain valid text', function() {
            casper.then(function() {
              selector.should.have.text(/Blog/);
            });
          });

        }); // heading

        describe('Content', function() {

          var selector = "main > div.index > section.latest p";

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

        }); // content

      }); // latest

    });

  });

});
