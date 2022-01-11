import { module, test } from 'ember-qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('helper:md5', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders MD5 string', async function (assert) {
    this.set('value', 'Ember MD5');

    await render(hbs`{{md5 value}}`);

    assert.equal(this.element.textContent.trim(), '40399919c9c028001b3d74fa454f403f');
  });

  test('it renders MD5 string with key', async function (assert) {
    this.set('value', 'Ember MD5');
    this.set('key', 'Ember Addon');

    await render(hbs`{{md5 value key}}`);

    assert.equal(this.element.textContent.trim(), '19ea5861f9f057d1eb737d6deeda50f0');
  });

  test('it renders MD5 with raw option', async function (assert) {
    this.set('value', 'Ember MD5');
    this.set('key', 'Ember Addon');
    this.set('raw', true);

    await render(hbs`{{md5 value key raw}}`);

    assert.equal(this.element.textContent.trim(), 'êXaùðWÑës}mîÚPð');
  });
});