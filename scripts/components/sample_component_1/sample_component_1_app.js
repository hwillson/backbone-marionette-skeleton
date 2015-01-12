/*global App*/
'use strict';

App.module(
  'SampleComponent1App',
  function (SampleComponent1App, App, Backbone, Marionette, $, _) {

    SampleComponent1App.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'sc1': 'listRecords',
        'sc1/:id': 'showRecord',
        'sc1/new': 'newRecord',
        'sc1/:id/edit': 'editRecord'
      }
    });

    SampleComponent1App._api = {

      /**
       * List records.
       */
      listRecords: function () {
        App.navigate('sc1');
        SampleComponent1App.List.Controller.listRecords();
      },

      /**
       * Show record.
       *
       * @param  {Number}  id  Record id.
       */
      showRecord: function (id) {
        App.navigate('sc1/' + id);
        SampleComponent1App.Show.Controller.showRecord(id);
      },

      /**
       * Show record.
       */
      newRecord: function () {
        App.navigate('sc1/new');
        SampleComponent1App.New.Controller.newRecord();
      },

      /**
       * Edit record.
       *
       * @param  {Number}  id  Record id.
       */
      editRecord: function (id) {
        App.navigate('sc1/' + id + '/edit');
        SampleComponent1App.Edit.Controller.editRecord);
      }

    };

    App.vent.on('sc1:list', function () {
      SampleComponent1App._api.listRecords();
    });

    App.vent.on('sc1:show', function (id) {
      SampleComponent1App._api.showRecord(id);
    });

    App.vent.on('sc1:new', function () {
      SampleComponent1App._api.newRecord();
    });

    App.vent.on('sc1:edit', function (id) {
      SampleComponent1App._api.editRecord(id);
    });

    App.addInitializer(function () {
      return new SampleComponent1App.Router({
        controller: SampleComponent1App._api
      });
    });

  }
);
