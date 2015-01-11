/*global App*/
'use strict';

App.module(
  'Common.SampleValidation',
  function (SampleValidation, App, Backbone, Marionette, $, _) {

    /**
     * Is the input value undefined?
     *
     * @param  {Object}  input  Input to check if undefined.
     * @return  {Boolean}  True if undefined, false otherwise.
     */
    SampleValidation.isUndefined = function (input) {
      return _.isUndefined(input);
    };

  }
);
