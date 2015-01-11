/*global App*/
'use strict';

App.module(
  'Common.SampleViews',
  function (SampleViews, App, Backbone, Marionette, $, _) {

    /**
     * Define the common loading view.
     */
    SampleViews.Loading = Marionette.ItemView.extend({
      className: 'loading',
      template: 'common/templates/sample_template'
    });

    /**
     * Define the common error view.
     */
    SampleViews.Error = Marionette.ItemView.extend({
      className: 'error',
      template: 'common/templates/sample_template_2'
    });

  }
);
