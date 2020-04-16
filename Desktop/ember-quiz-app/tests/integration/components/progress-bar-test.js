import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | progress-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('Test progress', async function(assert) {
    this.set('progress', '50%');

    await render(hbs`{{progress-bar progress=progress}}`);
    assert.equal(this.element.querySelector('.progress-bar').style.width, '50%');
  });
});
