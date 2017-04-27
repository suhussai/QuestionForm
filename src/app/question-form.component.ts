import { Component } from '@angular/core';
import { Question }    from './question';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html'
})
export class QuestionFormComponent {

  model = [
    new Question(1, "How old are you?", [
      "1",
      "2",
      "3",
      "4",
    ]),
    new Question(2, "H2ow old are you?", [
      "1",
      "2",
      "3",
      "4",
    ]),
    new Question(3, "H3ow old are you?", [
      "1",
      "2",
      "3",
      "4",
    ]),
];
page = 1;
questionProgress = 0;

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  onAnswer(question: Question, answer: number, questionProgress: number, modelLength: number): number {
    if (question.selectedOption == 0) {
      questionProgress = questionProgress + 1 / modelLength * 100;
    }
    question.selectedOption = answer;
    return questionProgress;
  }

}
