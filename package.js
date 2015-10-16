var fs = Npm.require('fs');
var path = Npm.require('path');
//var finder = Npm.require('findit').find(process.cwd());

Package.describe({
  name: 'huttonr:bootstrap4',
  summary: 'Modular, customizable Bootstrap 4.',
  version: '4.0.0_1',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.use('isobuild:compiler-plugin@1.0.0');
  api.use('fourseven:scss');
});

Package.registerBuildPlugin({
  name: 'huttonr:bootstrap4',
  use: [
    'underscore'
  ],
  sources: [
    'plugin/bootstrap4.js'
  ],
  npmDependencies: {
    'node-sass': '3.3.3'
  }
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('huttonr:bootstrap4');
//   api.addFiles('bootstrap4-tests.js');
// });


// find . -not -path '*/\.*' -type f -exec echo '"{}"' \; | grep -v '^$' | paste -s -d ","
