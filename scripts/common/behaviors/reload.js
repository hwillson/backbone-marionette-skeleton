/*global App, window*/
'use strict';

App.module(
  'Common.Behaviors',
  function (Behaviors, App, Backbone, Marionette, $, _) {

    /**
     * Reload the browser window when ".js-reload" is clicked.
     */
    Behaviors.Reload = Marionette.Behavior.extend({

      events: {
        'click .js-reload': 'reloadBrowser'
      },

      reloadBrowser: function (e) {
        e.preventDefault();
        window.location.reload();
      }

    });

  }
);
