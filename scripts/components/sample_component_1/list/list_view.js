/*global App*/
'use strict';

App.module(
  'SampleComponent1App.List',
  function (List, App, Backbone, Marionette, $, _) {

    /**
     * Define the no items found list view.
     */
    List.NoneFound = Marionette.ItemView.extend({
      tagName: 'tr',
      className: 'none',
      template: 'sample_component_1/list/templates/none'
    });

    /**
     * Define the single sc1 item row view.
     */
    List.Item = Marionette.ItemView.extend({
      tagName: 'tr',
      className: 'item',
      template: 'sample_component_1/list/templates/sc1_item'
    });

    /**
    * Define the sc1 items list view.
    */
    List.Items = Marionette.CompositeView.extend({
      template: 'sample_component_1/list/templates/sc1_items',
      childView: List.Item,
      childViewContainer: 'tbody',
      emptyView: List.NoneFound
    });

  }
);
