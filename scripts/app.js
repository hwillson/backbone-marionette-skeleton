/*global Marionette, APP_CONSTANTS, Backbone, _*/
'use strict';

// # Backbone.Marionette Skeleton
// This file serves as the application entry point, creating and starting the
// [Backbone.Marionette](http://marionettejs.com) based application.

var App = new Marionette.Application();

// Common application constants.
App.constants = APP_CONSTANTS;

// Create a separate event channel for entities to keep them separated from
// the default channel (helps make Sinon stubbing easier)
App.entityChannel = Backbone.Wreqr.radio.channel('entity-channel');

// Define application regions.
App.addRegions({
  searchRegion: '#search-region',
  mainMenuRegion: "#main-menu-region",
  mainRegion: "#main-region",
});

/**
 * Navigate to the requested route.
 *
 * @param  {String}  route      The route to navigate to.
 * @param  {Object}  [options]  The options hash.
 */
App.navigate = function (route, options) {
  if (!options) {
    options = {};
  }
  Backbone.history.navigate(route, options);
};

/**
 * Get the current browser route.
 *
 * @return  {String}  Current browser route.
 */
App.getCurrentRoute = function () {
  return Backbone.history.fragment;
};

/**
 * Compile and return the rendered JST based template.
 *
 * @param   {String}  template   Template path and name.
 * @param   {Object}  [options]  Options hash.
 * @return  {String}             Rendered template.
 */
App.render = function (template, options) {
  return Backbone.Marionette.Renderer.render(template, options);
};

/**
 * Define and return the common behaviors module name, so behaviors can be
 * accessed by Marionette properly.
 *
 * @return  {Object}  Common behaviors module name.
 */
Marionette.Behaviors.behaviorsLookup = function () {
  return App.Common.Behaviors;
};

// Code to run on Marionette start.
App.on('start', function () {

  if (Backbone.history) {
    Backbone.history.start();
  }

  // If no route provided show sample component 1 by default.
  if (!this.getCurrentRoute())) {
    App.trigger('sc1:show');
  }

});
