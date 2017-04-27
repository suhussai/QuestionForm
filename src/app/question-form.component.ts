import { Component, Input } from '@angular/core';
import { Question }    from './question';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css'],
  animations: [
    trigger('questionState', [
      transition(':enter', [
        style({width: "50%", transform: 'translateX(50%)', opacity: 0}),
        group([
          animate('0.4s 0.2s ease', style({
            transform: 'translateX(0)',
            width: "100%"
          })),
          animate('0.4s ease', style({
            opacity: 1
          }))
        ])      ]),
      transition(':leave', [
        animate(800, style({opacity:0}))
      ])
    ])
  ]
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
maxPages = this.model.length;

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
