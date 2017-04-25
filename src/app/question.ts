export class Question {
  public selectedOption: number;
  constructor(
    public id: number,
    public title: string,
    public options: Array<string>,
  ) {
    this.selectedOption = 0;
  }
}
