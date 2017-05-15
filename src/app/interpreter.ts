import { Question }    from './question';
export class Interpreter {
  constructor(
    public questions: Array<Question>,
  ) {}
  interpret() {
    var content = "";
    this.questions.forEach(function (m) {
      content += `Question: ${m.title} Answer: ${m.selectedOption}\n`;
    });
    return content;
  }
}
