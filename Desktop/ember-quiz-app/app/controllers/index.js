import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { action } from '@ember-decorators/object';


export default class IndexController extends Controller {
  constructor() {
    super(...arguments);
    // set questionnaire service
    this.questionnaire = inject("questionnaire");
    const { data: { name, description, questions }} = this.get('questionnaire');
    // set question name
    this.name = name;
    // set question description
    this.description = description;
    // set total questions count
    this.totalCount = questions.length;
  }
  @action
  // start quiz
  start() {
    this.get('questionnaire').clearAllAnswers();
    this.transitionToRoute("question", 1);
  }
}
