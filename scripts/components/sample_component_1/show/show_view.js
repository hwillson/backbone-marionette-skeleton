/*global App*/
'use strict';

App.module(
  'SampleComponent1App.Show',
  function (Show, App, Backbone, Marionette, $, _) {

    /**
     * Define the item view.
     */
    Show.Item = Marionette.ItemView.extend({
      className: 'item',
      template: 'sample_component_1/show/templates/overview'
    });

  }
);
