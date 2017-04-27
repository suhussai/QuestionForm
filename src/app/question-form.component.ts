import { Component, Input } from '@angular/core';
import { Question }    from './question';
import { AccordionContent } from './accordionContent';
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
          animate('0.5s 0.1s ease', style({
            transform: 'translateX(0)',
            width: "100%"
          })),
          animate('0.4s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition(':leave', [
        animate(800, style({opacity:0}))
      ])
    ])
  ]
})

export class QuestionFormComponent {

  model = [
    new Question(1, "How old are you?", [
      "Under 60 years old",
      "60 - 69 years old",
      "70 - 79 years old",
      "80 years old or older",
    ]),
    new Question(2, "Do you live in a nursing home or other long-term care facility?", [
      "Yes",
      "No",
    ]),
    new Question(3, "H3ow old are you?", [
      "1",
      "2",
      "3",
      "4",
    ]),
];

  accordions = [
    new AccordionContent(2, "More Information", "Picture"),
    new AccordionContent(3, "More Information", "When people suffer from dementia or cognitive impairment, dialysis often makes them more confused. Dialysis is almost never a good choice for people with dementia or significant cognitive impairment."),
    new AccordionContent(4, "More Information", "The people who do best with dialysis are people who are functionally independent. If you spend much of your time in bed, or if you find you need help with day-to-day chores like dressing and bathing, dialysis probably will not help you much, if at all."),
    new AccordionContent(7, "What is surgery?", "Picture"),
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
