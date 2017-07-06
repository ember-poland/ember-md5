import md5 from 'ember-md5';
import { module, test } from 'qunit';

module('Addon | Index | md5');

test('it exports md5 function', function(assert) {
  assert.ok(typeof md5 === 'function');
});

test('it hash value to md5', function(assert) {
  assert.equal(md5('ember-md5'), 'c143c0c5c3af81e8d67462faecf23bc1');
});
