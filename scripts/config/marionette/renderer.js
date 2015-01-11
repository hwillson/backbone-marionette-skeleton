/*global Backbone, JST*/
'use strict';

/**
 * Render a JST HTML template, converting it into javascript.
 *
 * @param   {String}  template  Template path/name.
 * @param   {Object}  data  Data passed into template.
 * @return  {String}  Rendered template javascript.
 */
Backbone.Marionette.Renderer.render = function (template, data) {
  var ext, rootTemplate, appsTemplate;
  ext = '.jst';
  rootTemplate = template + ext;
  appsTemplate = 'components/' + rootTemplate;
  if (JST[rootTemplate]) {
    return JST[rootTemplate](data);
  }
  if (JST[appsTemplate]) {
    return JST[appsTemplate](data);
  }
  throw 'Template "' + template + '" not found!';
};
