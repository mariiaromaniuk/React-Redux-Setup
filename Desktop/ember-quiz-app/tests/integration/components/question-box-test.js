import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | question-box', function(hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function(assert) {
    assert.expect(1);
    this.set('headline', 'question comes here?');
    this.set('id', 1);
    await render(hbs`{{question-box id=id headline=headline }}`);
    assert.equal(this.element.querySelector('.card-header h5').innerText, '1. question comes here?', 'Passed number-box component');
  });
});
