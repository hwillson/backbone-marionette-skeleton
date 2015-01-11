/*global App*/
'use strict';

App.module(
  'SampleComponent1App.Common',
  function (Common, App, Backbone, Marionette, $, _) {

    /**
     * Define the new/edit sample component 1 form view.
     */
    Common.Form = Marionette.ItemView.extend({
      className: 'sc1-form',
      template: 'sample_component_1/common/templates/sc1_form'
    });

  }
);
