import Component from '@ember/component';

export default class ProgressBarComponent extends Component {

  // Set progress after element attached to DOM
  didInsertElement() {
    this.element.querySelector('.progress').style.height = '2px';
    this.element.querySelector('.progress-bar').style.width = this.progress;
  }

  // Listen to attributes
  didReceiveAttrs() {
    if (this.element) {
      this.element.querySelector('.progress-bar').style.width = this.progress;
    }
  }
}
