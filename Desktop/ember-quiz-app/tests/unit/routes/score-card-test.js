import { test } from 'qunit';
import { moduleFor } from 'ember-qunit';

moduleFor('route:score-card', 'Unit | Route | score-card', {
  needs:['service:questionnaire', 'service:storage']
});

test('Test route score card', function(assert) {
  assert.expect(3);
  const route = this.subject();
  const model = route.model();
  
  assert.equal(model.correctAnswersCount, 0);
  assert.equal(model.wrongAnswersCount, 18);
  assert.equal(model.score, 0);
});
