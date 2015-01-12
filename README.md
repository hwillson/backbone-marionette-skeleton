# Backbone.Marionette Skeleton Project

A simple [Backbone.Marionette](http://marionettejs.com) starter project.

- Recommends a simple production tested file/directory organization structure for Marionette applications (based initially on [Brian Mann's recommended structure](https://github.com/mrichard/generator-marionette/issues/37))
- Uses Marionette's default Module approach (no AMD, CommonJS, etc.)
- Configured to use Underscore JST based templates in separate files
- CSS pre-processing handled by Stylus
- Sample gulp config
- Bootstraps unit testing

## Directory/File Structure

```
/scripts (All application JavaScript files)
  /common (Common/shared files)
    behaviors (Marionette beavhiors)
    controllers (Common base controllers)
    templates (Common JST templates)
    utility (Common utility objects/functions)
    validation (Common validation helpers)
    views (Common view definition files)
      helpers (Common view helpers)
  components (Main application components)
    sample_component_1
      common (views and templates shared within the component)
        templates
      edit (edit controllers/views/templates)
      list (list controllers/views/templates)
        templates
      new (new controllers/views/templates)
      show (show controllers/views/templates)
        templates
  config (Application config files)
    backbone (Backbone library overrides)
    marionette (Marionette library overrides, core additions, etc.)
  entities (Application models/collections)
  vendor (Vendor libraries)
styles (Stylus (CSS) files)
test (Unit tests and helpers)
```

## TODO

- Add in test structure
- Add in sample Gulp config
- Configure Groc (docs)
