export class Question {
  public selectedOption: string;
  constructor(
    public id: number,
    public title: string,
    public options: {},
  ) {
    this.selectedOption = "";
  }
}
