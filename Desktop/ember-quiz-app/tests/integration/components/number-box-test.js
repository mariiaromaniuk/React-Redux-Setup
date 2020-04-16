import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | number-box', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);
    this.set('number', 10);
    await render(hbs`{{number-box number=number }}`);
    assert.equal(this.element.querySelector('h1').innerText, '10', 'Passed number-box component');
  });

  test('it renders', async function(assert) {
    assert.expect(1);
    this.set('title', 'title');
    await render(hbs`{{number-box title="title"}}`);
    assert.equal(this.element.querySelector('h3').innerText, 'title', 'Passed number-box component');
  });
});
