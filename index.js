var cloneDeep = require('lodash.clonedeep');
var loaderUtils = require('loader-utils');
var yaml = require('js-yaml');

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var options = cloneDeep(loaderUtils.getOptions(this) || {});
  try {
    var res = yaml.safeLoad(source, options);
    return JSON.stringify(res, undefined, '\t');
  }
  catch (err) {
    this.emitError(err);
    return null;
  }
};
