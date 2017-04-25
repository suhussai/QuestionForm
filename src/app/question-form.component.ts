import { Component } from '@angular/core';

import { Question }    from './question';

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
];

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
