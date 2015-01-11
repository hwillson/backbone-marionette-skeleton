/*global App*/
'use strict';

App.module(
  'Common.Views.Helpers',
  function (Helpers, App, Backbone, Marionette, $, _) {

    /**
     * Sample helper.
     */
    Helpers.SampleHelper = {

      /**
       * Is this helpful?
       *
       * @return  {Boolean}  Returns true.
       */
      isThisHelpful: function () {
        return true;
      }

    };

  }
);
