import Service from '@ember/service';
import QuizData from './quizData';
import { inject } from '@ember/service';

/**
 *
 * QuestionnaireService
 */
export default class QuestionnaireService extends Service {
    constructor() {
        super(...arguments);
        // Get storage service
        this.storage = inject("storage");
        const { questions } = QuizData.questionnaire;
        this.allAnswers = questions.reduce((acc, question) => {
            acc[question.identifier] = question.answer;
            return acc;
        }, {});
        this.data = null;
        this.answers = null;
        this.totalCount = null;
        this.data = QuizData.questionnaire;
        this.totalCount = questions.length;

        // populate answers from storage if any;
        this.answers = this.getAllAnswers();
    }
    /**
     * Save answer
     * @param  {[type]} key  [description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    saveAnswer(key, data) {
        this.answers[key] = data;
        this.get("storage").setItem(key, data);
    }
    /**
     * Get answer
     * @param  {[type]} key [description]
     * @return {[type]}     [description]
     */
    getAnswer(key) {
        const storage = this.get("storage");
        if(storage.has(key)) {
            this.answers[key] = storage.getItem(key);
            return this.answers[key];
        }
        return null;
    }
    /**
     * Get all answers
     * @return {[type]} [description]
     */
    getAllAnswers() {
        const storage = this.get("storage");
        const allItemKeys = storage.getAllItemKeys();
        if(allItemKeys && allItemKeys.length) {
            return storage.getAllItemKeys().reduce((acc, key) => {
                acc[key] = storage.getItem(key);
                return acc;
            }, {});
        }
        return {};
    }
    /**
     * Clear all answers
     * @return {[type]} [description]
     */
    clearAllAnswers() {
      const storage = this.get("storage");
      storage.clearAll();
      this.set('answers', {});
    }
}
