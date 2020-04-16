import Controller from "@ember/controller";
import { inject } from '@ember/service';
import { action, computed } from '@ember-decorators/object';
/**
 *
 * IndexController
 */
export default class IndexController extends Controller {
  constructor() {
    super(...arguments);
    // get questionnaire service
    this.questionnaire = inject("questionnaire");
  }
  @computed('model.question_type')
  get isMultiple() {
    return this.get('model').question_type === "multiple-choice" && this.get('model').multiple === "true"
  }
  @computed('model.id')
  get isPrevDisabled() {
    return this.model.id - 1 === 0;
  }
  @computed('model.id')
  get isNextDisabled() {
    return this.model.id === this.model.totalCount;
  }
  @computed('model.id')
  get progress() {
    const id = this.model.id;
    const totalCount = this.model.totalCount;
    return `${((id / totalCount) *100).toFixed()}%`;
  }
  /**
   * [saveAnswer description]
   * @return {[type]} [description]
   */
  saveAnswer() {
    const key = this.model.identifier;
    this.get("questionnaire").saveAnswer(key, this.selectedValue);
  }
  @action
  /**
   * [handleChange description]
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  handleChange(value) {
    if(this.isMultiple) {
      const index = this.selectedValue.findIndex((item) => item === value);
      if(index === -1) {
        this.selectedValue.push(value);
      } else {
        this.selectedValue.splice(index, 1);
      }
    } else {
      this.selectedValue =  value;
    }
    this.saveAnswer();
  }
  @action
  /**
   * [showNextQuestion description]
   * @return {[type]} [description]
   */
  showNextQuestion() {
    const nextQuestionId = this.model.id + 1;
    this.transitionToRoute("question", nextQuestionId);
  }
  @action
  /**
   * [showPrevQuestion description]
   * @return {[type]} [description]
   */
  showPrevQuestion() {
    const nextQuestionId = this.model.id - 1;
    this.transitionToRoute("question", nextQuestionId);
  }
}
