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
       * Return this controllers event prefix. Events associated with this
       * controller will be prefixed by this value.
       *
       * @return  {String}  Event prefix.
       */
      channelPrefix: function () {
        return '';
      },

      /**
       * Sample action.
       *
       * @param  {Object}  options  Options hash.
       */
      sampleAction: function (options) {
        return undefined;
      },

      /**
       * Get the record view.
       *
       * @param   {Object}  record  Record view.
       * @param   {Object}  options  Options hash.
       * @return  {Object}  Record view.
       */
      _getRecordView: function (record, options) {
        return undefined;
      }

    };

  }
);
