import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { action } from '@ember-decorators/object';

/**
 *
 * ScoreCardController
 */
export default class ScoreCardController extends Controller {
  constructor() {
    super(...arguments);
    // Get questionnaire service
    this.questionnaire = inject("questionnaire");
  }
  @action
  /**
   * Start quiz
   * @return {[type]} [description]
   */
  startAgain() {
    this.get('questionnaire').clearAllAnswers();
    this.transitionToRoute("question", 1);
  }
}
