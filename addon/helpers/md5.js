import Ember from 'ember';
import md5 from 'ember-md5';

const { Helper } = Ember;

export default Helper.extend({
  compute: function([value, key, raw]) {
    return md5(value, key, raw);
  }
});
