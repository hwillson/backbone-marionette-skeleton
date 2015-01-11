/*global App*/
'use strict';

App.module(
  'SampleComponent1App.List',
  function (List, App, Backbone, Marionette, $, _) {

    /**
     * Controls sample component 1 list actions.
     */
    List.Controller = {

      /**
       * Return this controllers event prefix. Events associated with this
       * controller will be prefixed by this value.
       *
       * @return  {String}  Event prefix.
       */
      channelPrefix: function () {
        return 'sc1:';
      },

      /**
      * List records.
      *
      * @param  {Object}  options  Options hash.
      */
      listRecords: function (options) {
        return undefined;
      }

      /**
       * Get the list layout view.
       *
       * @param   {Object}  options  Options hash.
       * @return  {Object}  List layout view.
       */
      _getLayout: function (options) {
        return undefined;
      },

      /**
       * Get the sample component 1 items collection.
       *
       * @param   {Object}  options  Options hash.
       * @return  {Object}  Items collection.
       */
      _getItems: function (options) {
        return App.entityChannel.reqres.request(
          'entities:sample-entities',
          options
        );
      }

    };

  }
);
