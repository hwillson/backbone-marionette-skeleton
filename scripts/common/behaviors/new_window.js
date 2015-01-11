/*global App*/
'use strict';

App.module(
  'Common.Behaviors',
  function (Behaviors, App, Backbone, Marionette, $, _) {

    /**
     * Open ".js-new-window" links in a new browser window.
     */
    Behaviors.NewWindow = Marionette.Behavior.extend({

      events: {
        'click .js-new-window': 'newWindow'
      },

      newWindow: function (e) {
        $(e.target).attr('target', '_blank');
      }

    });

  }
);
