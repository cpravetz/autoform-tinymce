Package.describe({
  name: 'seakaytee:autoform-tinymce',
  version: '1.0.4',
  // Brief, one-line summary of the package.
  summary: 'A small Meteor package to add the TinyMCE WYSIWYG editor as an Autoform input type',
  // URL to the Git repository containing the source code for this package.
  git:'https://github.com/oohaysmlm/autoform-tinymce',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
    "tinymce" : "5.10.3"
});

Package.onUse(function(api) {
  api.versionsFrom('2.3');
  api.use('ecmascript');
  api.use('blaze-html-templates');
  //api.use('salmanhasni:tinymce');
  api.use('aldeed:autoform');
  api.addFiles('autoform-tinymce.html', 'client');
  api.addFiles('autoform-tinymce.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('seakaytee:autoform-tinymce');
  api.addFiles('autoform-tinymce-tests.js');
});
