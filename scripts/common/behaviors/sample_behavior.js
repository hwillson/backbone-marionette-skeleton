/*global App*/
'use strict';

App.module(
  'Common.Behaviors',
  function (Behaviors, App, Backbone, Marionette, $, _) {

    /**
     * Sample behavior.
     */
    Behaviors.SampleBehavior = Marionette.Behavior.extend({

      events: {
        'click .js-do-something': 'doSomething'
      },

      doSomething: function (e) {
        console.log('Will do something productive.');
      }

    });

  }
);
