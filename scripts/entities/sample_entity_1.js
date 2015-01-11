/*global App*/
'use strict';

App.module(
  'Entities',
  function (Entities, App, Backbone, Marionette, $, _) {

    /**
     * Sample entity model.
     */
    Entities.SampleEntity1 = Backbone.Model.extend({

      defaults: {
        title: '',
        description: ''
      },

      initialize: function (options) {
        this.options = options;
      },

      validate: function (attributes, options) {

        var errors = {};

        if (!attributes.title) {
          errors.title = 'Title must be provided.';
        }

        if (!_.isEmpty(errors)) {
          return errors;
        }

      },

      parse: function (response, options) {

        var data = {};

        if (response) {
          data.id = response.id;
          data.title = response.entity_title;
          data.description = response.entity_description;
        }

        return data;

      },

      sync: function (method, model, options) {

        var data = {};

        if (method === 'create' || method === 'update') {
          data.entity_title = model.get('title');
          data.entity_description = model.get('desription');
          options.data = JSON.stringify(data);
          options.contentType = 'application/json';
        }

        return Backbone.Model.prototype.sync.apply(this, arguments);

      }

    });

    /**
     * Sample entity collection.
     */
    Entities.SampleEntity1Collection = Backbone.Collection.extend({

      url: '/sample_entities',
      model: Entities.SampleEntity1,

      /**
       * Parse the web service response, removing the top level identifier.
       *
       * @param  {Object}  response  Web service response.
       * @return  {Object}  Sample entities collection.
       */
      parse: function (response) {
        return response._embedded.sample_entities;
      }

    });

    Entities.SampleEntity1._api = {

      /**
       * Get all sample entities.
       *
       * @param   {Object}  options  Options hash.
       * @return  {Object}  jqXHR.
       */
      getSampleEntities: function (options) {
        var entities, data = {};
        entities = new Entities.SampleEntity1Collection([], options);
        return entities.fetch(data);
      }

    };

    App.entityChannel.reqres.setHandler(
      'entities:sample-entities',
      function (options) {
        return Entities.SampleEntity1._api.getSampleEntities(options);
      }
    );

  }
);
