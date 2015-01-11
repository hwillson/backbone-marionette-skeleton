/*global App*/
'use strict';

App.module(
  'SampleComponent1App.Edit',
  function (Edit, App, Backbone, Marionette, $, _) {

    /**
     * Sample component 1 edit controller.
     */
    Edit.Controller = {

      /**
       * Return this controllers event prefix. Events associated with this
       * controller will be prefixed by this value.
       *
       * @return  {String}  Event prefix.
       */
      channelPrefix: function () {
        return 'sc1:';
      };

      /**
       * Edit record.
       *
       * @param  {Object}  record  Record model.
       * @param  {Object}  options  Options hash.
       */
      editRecord: function (record, options) {
        return undefined
      },

      /**
       * Get the form view.
       *
       * @param   {Object}  record  Record model.
       * @return  {Object}  Form view.
       */
      _getRecordView: function (record) {
        var view = new App.SampleComponent1App.Common.Form();
        view.model = record;
        return view;
      }

    };

  }
);
