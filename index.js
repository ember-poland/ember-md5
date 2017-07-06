/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-md5',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/ember-md5/md5.js');
    app.import('vendor/ember-md5/shims/md5-shim.js');
  },

  treeForVendor(tree) {
    let trees = [tree];
    let md5Path = path.join(this.app.project.nodeModulesPath, 'blueimp-md5', 'js');

    trees.push(new Funnel(md5Path, {
      destDir: 'ember-md5',
      files: ['md5.js']
    }));

    return mergeTrees(trees);
  }
};
