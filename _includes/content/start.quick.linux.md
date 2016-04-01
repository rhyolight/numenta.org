{% highlight py %}
# see: https://github.com/numenta/nupic#install-linux
$ pip install {{ site.data.url.ext.package }}
$ pip install nupic
$ python
>>> import nupic, sys
>>> print 'nupic' in sys.modules
True
>>> # Success!
{% endhighlight %}
