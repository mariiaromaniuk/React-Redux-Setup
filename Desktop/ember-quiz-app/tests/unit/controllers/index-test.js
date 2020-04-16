import { test } from 'qunit';
import { moduleFor } from 'ember-qunit';

moduleFor('controller:index', 'Unit | Controller | index', {
  needs:['service:questionnaire', 'service:storage']
});

test('it exists', function(assert) {
  assert.expect(3);

  const controller = this.subject();

  controller.set('name', 'Quiz Name');
  controller.set('description', 'Quiz description');
  controller.set('totalCount', 'Quiz totalCount');

  assert.equal(controller.get('name'), 'Quiz Name');
  assert.equal(controller.get('description'), 'Quiz description');
  assert.equal(controller.get('totalCount'), 'Quiz totalCount');
});
