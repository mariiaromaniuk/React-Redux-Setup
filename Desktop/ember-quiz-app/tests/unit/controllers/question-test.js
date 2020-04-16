import { test } from 'qunit';
import { moduleFor } from 'ember-qunit';
import { run } from '@ember/runloop';

moduleFor('controller:question', 'Unit | Controller | question', {
  needs:['service:questionnaire', 'service:storage']
});

test('Controller question', function(assert) {
  assert.expect(3);

  const controller = this.subject();
  const questionnaire  = controller.get('questionnaire').data;
  const totalCount = controller.get('questionnaire').totalCount;
  const { questions } = questionnaire;
  const question = questions[0];

   run(function() {
     controller.set('model', Object.assign({}, question, {
       id: 1,
       totalCount,
     }))
   });

   assert.equal(controller.get('isPrevDisabled'), true);
   assert.equal(controller.get('isNextDisabled'), false);
   assert.equal(controller.get('isMultiple'), false);
});
