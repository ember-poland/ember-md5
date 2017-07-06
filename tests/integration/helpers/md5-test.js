import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md5', 'helper:md5', {
  integration: true
});

test('it renders MD5 string', function(assert) {
  this.set('value', 'Ember MD5');

  this.render(hbs`{{md5 value}}`);

  assert.equal(this.$().text().trim(), '40399919c9c028001b3d74fa454f403f');
});

test('it renders MD5 string with key', function(assert) {
  this.set('value', 'Ember MD5');
  this.set('key', 'Ember Addon');

  this.render(hbs`{{md5 value key}}`);

  assert.equal(this.$().text().trim(), '19ea5861f9f057d1eb737d6deeda50f0');
});

test('it renders MD5 with raw option', function(assert) {
  this.set('value', 'Ember MD5');
  this.set('key', 'Ember Addon');
  this.set('raw', true);

  this.render(hbs`{{md5 value key raw}}`);

  assert.equal(this.$().text().trim(), 'êXaùðWÑës}mîÚPð');
});
