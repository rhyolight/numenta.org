var opts = casper.cli.options || {},
    host = opts.host || 'localhost',
    port = opts.port || 8008;

module.exports = {
  getUrl: function(path) {
    return [
      'http://',
      host,
      ':',
      port,
      path
    ].join('');
  }
};
