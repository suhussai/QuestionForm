"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var question_1 = require("./question");
var QuestionFormComponent = (function () {
    function QuestionFormComponent() {
        this.model = [
            new question_1.Question(1, "How old are you?", [
                "1",
                "2",
                "3",
                "4",
            ]),
            new question_1.Question(2, "H2ow old are you?", [
                "1",
                "2",
                "3",
                "4",
            ]),
            new question_1.Question(3, "H3ow old are you?", [
                "1",
                "2",
                "3",
                "4",
            ]),
        ];
        this.page = 1;
        this.questionProgress = 0;
        this.submitted = false;
    }
    QuestionFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(QuestionFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    QuestionFormComponent.prototype.onAnswer = function (question, answer, questionProgress, modelLength) {
        if (question.selectedOption == 0) {
            questionProgress = questionProgress + 1 / modelLength * 100;
        }
        question.selectedOption = answer;
        return questionProgress;
    };
    return QuestionFormComponent;
}());
QuestionFormComponent = __decorate([
    core_1.Component({
        selector: 'question-form',
        templateUrl: './question-form.component.html'
    })
], QuestionFormComponent);
exports.QuestionFormComponent = QuestionFormComponent;
//# sourceMappingURL=question-form.component.js.map