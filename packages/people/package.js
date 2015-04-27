"use strict";

Package.describe({
  name: 'cherp:people',
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
  //Meteor version
  console.log(api);
  api.versionsFrom('1.1.0.2');
  //use
  api.use(['templating'], 'client');
  //add files
  api.addFiles(['lib/view.html'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cherp:people');
  api.addFiles('people-tests.js');
});
