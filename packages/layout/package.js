Package.describe({
  name: 'cherp:layout',
  version: '0.0.1',
  summary: 'ChERP - Layout',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  //use
  api.use([
    'templating',
    'semantic:ui-css'
  ], 'client');
  //add files
  api.addFiles([
    'components/footer/footer.html',
    'components/layout/layout.html',
    'components/main/main.html',
    'components/menu/menu.html',
    'components/sidebar/sidebar.html',
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cherp:core');
  api.addFiles('core-tests.js');
});
