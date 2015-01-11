/*global App*/
'use strict';

App.module(
  'SampleComponent1App',
  function (SampleComponent1App, App, Backbone, Marionette, $, _) {

    SampleComponent1App.Router = Marionette.AppRouter.extend({

      // TODO

    });

    SampleComponent1App._api = {

      // TODO

    };

    // TODO - events

    App.addInitializer(function () {
      return new SampleComponent1App.Router({
        controller: SampleComponent1App._api
      });
    });

  }
);
