/*global App*/
'use strict';

App.module(
  'Common.Controllers',
  function (Controllers, App, Backbone, Marionette, $, _) {

    /**
     * Base controller.
     */
    Controllers.Base = {

      /**
       * Sample action.
       *
       * @param  {Object}  options  Options hash.
       */
      sampleAction: function (options) {
        return undefined;
      }

    };

  }
);
