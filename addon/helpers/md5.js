/* eslint-disable ember/no-classic-classes */
import Helper from '@ember/component/helper';
import md5 from 'ember-md5';

export default Helper.extend({
  compute: function([value, key, raw]) {
    return md5(value, key, raw);
  }
});
