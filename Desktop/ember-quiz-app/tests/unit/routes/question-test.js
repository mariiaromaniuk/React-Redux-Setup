import { test } from 'qunit';
import { moduleFor } from 'ember-qunit';

moduleFor('route:question', 'Unit | Route | question', {
  needs:['service:questionnaire', 'service:storage']
});

test('Test question router', function(assert) {
  assert.expect(2);
  
  const route = this.subject();
  const model = route.model({
    id: 1
  });

  assert.equal(model.totalCount, 18);
  assert.equal(model.id, 1);
});
