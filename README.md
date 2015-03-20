# NuPIC http://numenta.org

[![Build Status](https://travis-ci.org/numenta/numenta.org.png?branch=gh-pages)](https://travis-ci.org/numenta/numenta.org)

This is the open source code for the NuPIC Website hosted at
[http://numenta.org](http://numenta.org). It is built using
[HTML5](http://en.wikipedia.org/wiki/HTML5),
[CSS3](http://en.wikipedia.org/wiki/Cascading_Style_Sheets), and modern
[ECMAScript](http://en.wikipedia.org/wiki/ECMAScript) (Javascript).
It is hosted using [Github Pages](https://pages.github.com),
and built with [Jekyll](http://jekyllrb.com/).


# Development

### Prerequisites

* [Source code](https://github.com/numenta/numenta.org)
* [Git](http://git-scm.com/) and [GitHub](http://github.com)
* [Ruby](https://www.ruby-lang.org/)
  * [RubyGems](https://rubygems.org/)
    * [bundler](http://bundler.io/) ruby gem
    * [jekyll](http://jekyllrb.com/) static site generator ruby gem
    * [github-pages](https://github.com/github/pages-gem) ruby gem

Example Mac OS X setup:
```
$ brew install git
$ git clone git@github.com:numenta/numenta.org.git
$ cd numenta.org
$ gem install bundler
$ bundle install
```


### Local

* Build and serve site:
  ```
  $ bundle exec jekyll serve --baseurl=
  ```
*  When the build is finished, visit `http://localhost:4000` in browser.

### Staging

TBD

### Production

* Merge your PR of final changes to the `gh-pages` branch of the
  [numenta.org repository](https://github.com/numenta/numenta.org).
* After a few minutes of building, your changes will be live.
* Changes, Pull Requests, and Issues are welcome and appreciated!

### Misc

* Make sure to run `bundle update` occassionally to keep ruby gems modern.
