import { Component, Input } from '@angular/core';
import { Question }    from './question';
import { AccordionContent } from './accordionContent';
import { Interpreter } from './interpreter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
declare let pdfMake: any;
declare let html2canvas: any;
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
    new Question(1, "How old are you?", {
      1: "Under 60 years old",
      2: "60 - 69 years old",
      3: "70 - 79 years old",
      4: "80 years old or older",
    }),
/*    new Question(2, "Do you live in a nursing home or other long-term care facility?", {
      1: "Yes",
      2: "No",
    }),
    new Question(3, "Do you suffer from dementia or cognitive impairment?", {
      1: "Yes",
      2: "No",
    }),
    new Question(4, "How would you describe your health this week?", {
      1: "I am able to care for most of my own needs but I might need occasional assistance.",
      2: "I need quite a bit of assistance and I might need frequent medical care.",
      3: "I spend much of my time in bed or lying down.",
    }),
    new Question(5, "Are you suffering from other chronic diseases or conditions?", {
      1: "Few other health problems.",
      2: "Heart disease.",
      3: "Many other health problems (with or without heart disease).",
    }),
    new Question(6, "How important is it for you to avoid being hospitalized?", {
      1: "Very important.",
      2: "Somewhat important.",
      3: "Unsure",
      4: "Somewhat unimportant",
      5: "Unimportant",
    }),
    new Question(7, "How important is it for you to avoid having major or minor surgery?", {
      1: "Very important.",
      2: "Somewhat important.",
      3: "Unsure",
      4: "Somewhat unimportant",
      5: "Unimportant",
    }),
    new Question(8, "How important is it for you to avoid traveling for dialysis or clinic visits?", {
      1: "Very important.",
      2: "Somewhat important.",
      3: "Unsure",
      4: "Somewhat unimportant",
      5: "Unimportant",
    }),
    new Question(9, "How important is it for you to have control over what you do with your time?", {
      1: "Very important.",
      2: "Somewhat important.",
      3: "Unsure",
      4: "Somewhat unimportant",
      5: "Unimportant",
    }) */
  ];

  accordions = [
    new AccordionContent(2, "More Information", "Picture"),
    new AccordionContent(3, "More Information", "When people suffer from dementia or cognitive impairment, dialysis often makes them more confused. Dialysis is almost never a good choice for people with dementia or significant cognitive impairment."),
    new AccordionContent(4, "More Information", "The people who do best with dialysis are people who are functionally independent. If you spend much of your time in bed, or if you find you need help with day-to-day chores like dressing and bathing, dialysis probably will not help you much, if at all."),
    new AccordionContent(7, "What is surgery?", "Surgery is a procedure to diagnose or treat a medical problem.  It involves the use of instruments and cutting of body tissues."),
  ];
  page = 1;
  questionProgress = 0;
  maxPages = this.model.length;
  showResults = false;
  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  onAnswer(question: Question, answer: string, questionProgress: number, modelLength: number): number {
    if (question.selectedOption == "") {
      questionProgress = questionProgress + 1 / modelLength * 100;
    }
    if (question.selectedOption != "" && questionProgress >= 99.9999) {
      this.showResults = false;
    }
    question.selectedOption = answer;
    return questionProgress;
  }

  onSubmitForm() {
    this.showResults = true;
  }

  downloadPDF() {
    var loadingButton = <HTMLInputElement> document.getElementById('loadingButton');
    loadingButton.disabled = true;
    loadingButton.innerHTML = "Loading...";
    html2canvas(document.getElementById('exportthis'), {
      onrendered: function (canvas : any) {
        var data = canvas.toDataURL();
        var docDefinition = {
          content: [{
            image: data,
            width: 500,
          }]
        };
        pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
        loadingButton.disabled = false;
        loadingButton.innerHTML = "Download";
      }
    });
  }

  getValues(options: {}) {
    var vals = Array();
    Object.keys(options).forEach(function(k) {
      vals.push(options[k]);
    });
    return vals;
  }
}
