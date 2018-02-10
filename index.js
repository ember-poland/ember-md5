'use strict';

module.exports = {
  name: 'ember-md5',

  included: function(app) {
    this._super.included(app);

    app.import('node_modules/blueimp-md5/js/md5.js');
    app.import('vendor/shims/md5.js');
  },
};
