/*global Backbone, App, _, $*/
'use strict';

// Original Backbone sync function
var sync = Backbone.sync;

/**
 * A Backbone function override example.
 *
 * @param   {String}  method  Request method.
 * @param   {Object}  model  Backbone model.
 * @param   {Object}  options  Sync options.
 * @return  {Object}  XHR.
 */
Backbone.sync = function (method, model, options) {

  // Do something extra, like maintaining an XHR pool ...

  return sync(method, model, options);

};
