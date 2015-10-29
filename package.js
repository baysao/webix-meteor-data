Package.describe({
  name: 'baysao:meteor-webix-data',
  version: '0.1.0-4',
  // Brief, one-line summary of the package.
  summary: 'Meteor Webix',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/baysao/meteor-webix.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1.0.2');

  api.use([
    "baysao:meteor-webix@0.1.0-6"
  ]);
  api.addFiles(['./codebase/meteor-data.js'], 'client');
  api.export('webix', 'client');
});

