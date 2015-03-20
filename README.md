# NuPIC http://numenta.org

[![Build Status](https://travis-ci.org/numenta/numenta.org.png?branch=gh-pages)](https://travis-ci.org/numenta/numenta.org)

This is the open source code for the NuPIC Website hosted at
[http://numenta.org](http://numenta.org).


# Development


## Technology

* Browser/Client
  * [HTML5](http://en.wikipedia.org/wiki/HTML5) = Semantic structure and content
  * [CSS3](http://en.wikipedia.org/wiki/Cascading_Style_Sheets) = Visual styling
    * [SASS](http://sass-lang.com/) CSS Pre-processor language
  * [ECMAScript 5+](http://en.wikipedia.org/wiki/ECMAScript) (Javascript) =
    Functionality and Interaction
* Server
  * Hosting: [Github Pages](https://pages.github.com)
  * Static site generation: [Jekyll](http://jekyllrb.com/)


## Prerequisites

* [Source code](https://github.com/numenta/numenta.org) via GitHub
* [Git](http://git-scm.com/) and [GitHub](http://github.com) source control
* [Ruby](https://www.ruby-lang.org/) lang and [RubyGems](https://rubygems.org/)
  * [bundler](http://bundler.io/) ruby gem
  * [jekyll](http://jekyllrb.com/) static site generator ruby gem
  * [github-pages](https://github.com/github/pages-gem) ruby gem

Example Mac OS X setup:
```
brew install git
git clone git@github.com:numenta/numenta.org.git
cd numenta.org
gem install bundler
bundle install
```


## Build

### Local

Build and serve site:
```
bundle exec jekyll serve
```

When the build is finished, visit `http://localhost:4000` in browser.

### Staging

TBD

### Production

* Changes, Pull Requests, and Issues are welcome and appreciated!
  * Please make sure to
    [sign the Contributor licenese](http://numenta.org/licenses/cl/) first.
* Merge your PRs of final changes to the `gh-pages` branch of the
  [numenta.org repository](https://github.com/numenta/numenta.org).
* After a few minutes of building, your changes will be live in production.


## Best Practices

### All Files

* 2 space indentation

### HTML

*

### CSS / SCSS

*

### Javascript

*


## Maintenance

* Make sure to run `bundle update` occassionally to keep ruby gems modern.
