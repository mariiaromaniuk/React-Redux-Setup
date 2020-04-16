import Component from "@ember/component";
import { action } from '@ember-decorators/object';

export default class QuestionBoxComponent extends Component {
  /*
   * Creates an instance of QuestionBoxComponent.
   * @memberof QuestionBoxComponent
   */
  constructor() {
    super(...arguments);
    this._animationDir = "bounce-right";
  }
  /*
   * Get animationDir
   * @memberof QuestionBoxComponent
   */
  get animationDir() {
    return this._animationDir;
  }
  /*
   * set animation direction
   * @memberof QuestionBoxComponent
   */
  set animationDir(dir) {
    this._animationDir = dir;
  }
  /*
   * Start animation
   */
  animate() {
    const questionBoxEle = this.$(".question-box");
    if (questionBoxEle) {
      questionBoxEle.addClass(`${this.animationDir}`);
      questionBoxEle.on("animationend", () => {
        questionBoxEle.removeClass(`${this.animationDir}`);
        this.autoFocusTextArea();
      });
    }
  }
  /*
   * set autofocus for text area elements
   * @return {[type]} [description]
   */
  autoFocusTextArea() {
    const textAreaEle = this.$("#textarea");
    if (textAreaEle && textAreaEle.length) {
      textAreaEle[0].focus();
    }
  }
  /*
   *
   * Set animation after element attached to DOM
   */
  didInsertElement() {
    this.animate();
  }
  /*
   *
   * Listen to attributes
   */
  didReceiveAttrs() {
    this.animate();
  }
  @action
  handleChange(a) {
    this.onChange(a);
  }
  @action
  showNextQuestion() {
    this.set("animationDir", "bounce-right");
    this.onShowNextQuestion();
  }
  @action
  showPrevQuestion() {
    this.set("animationDir", "bounce-left");
    this.onShowPrevQuestion();
  }
}
