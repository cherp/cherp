"use strict";

Package.describe({
  name: 'cherp:core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  //client
  api.use([
    'templating',
  ], 'client');

  //common
  api.use('underscore');
  api.use('underscorestring:underscore.string@3.0.3');

  //add files
  api.addFiles('helpers.js', 'client');
  api.addFiles('cherp.js');

  //export cherp
  api.export('cherp');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cherp:core');
  api.addFiles('tests.js');
});
