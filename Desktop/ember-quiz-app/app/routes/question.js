import Route from "@ember/routing/route";
import { copy } from '@ember/object/internals';
import { inject } from '@ember/service';


export default class QuestionRoute extends Route {
  constructor() {
    super(...arguments);
    // Get questionnaire service
    this.questionnaire = inject("questionnaire");
    // Get storage service
    this.storage = inject("storage");
  }
  /**
   * Get model
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  model(params) {
    const id = Number(params.id);
    const questionnaire  = this.get('questionnaire').data;
    const totalCount = this.get('questionnaire').totalCount;
    const { questions } = questionnaire;
    const question = questions[id - 1];
    // get question answer
    const answer = this.get("questionnaire").getAnswer(question.identifier);
    const ques = copy(question, true);
    let selectedValue = [];

    if(Array.isArray(answer)) {
      selectedValue = [];
      const mapping = answer.reduce((acc, item) => {
        acc[item] = item;
        return acc;
      }, {});

      ques.choices = ques.choices.reduce((acc, choice) =>  {
        if(mapping[choice.value]) {
          choice.selected = true;
          selectedValue.push(choice.value);
        }
        acc.push(choice);
        return acc;
      }, []);
    } else if(ques.choices) {
      ques.choices = ques.choices.reduce((acc, choice) =>  {
        if(choice.value === answer) {
          choice.selected = true;
          selectedValue = choice.value;
        }
        acc.push(choice);
        return acc;
      }, []);
    } else {
      selectedValue = answer || '';
    }
    return {
      ...ques,
      originalAns: ques.answer,
      id,
      totalCount,
      answer,
      selectedValue,
    }
    // return Object.assign({}, ques, {
    //   id,
    //   question_type: ques.question_type,
    //   totalCount,
    //   answer,
    //   selectedValue,
    // });
  }
  /**
   * [setupController description]
   * @param  {[type]} controller [description]
   * @param  {[type]} model      [description]
   * @return {[type]}            [description]
   */
  setupController(controller, model) {
    controller.set("model", model);
    controller.set("selectedValue", model.selectedValue);
  }
}
