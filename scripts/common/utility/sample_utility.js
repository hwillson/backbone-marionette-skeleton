/*global App, window*/
'use strict';

App.module(
  'Common.SampleUtility',
  function (SampleUtility, App, Backbone, Marionette, $, _) {

    /**
     * Do something utilitarian.
     *
     * @return  {Boolean}  Always true.
     */
    SampleUtility.isThisHandy = function () {
      return true;
    };

  }
);
