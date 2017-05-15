import { Question }    from './question';
export class Interpreter {
  constructor(
    public questions: Array<Question>,
  ) {}
  interpret() {
    var content = Array();
    var treatmentOptionsTable = {
      style: 'tableExample',
      table: {
        body: [
          ['', 'Conservative Kidney Management (CKM) No dialysis or transplant', 'Dialysis'],
          [
            {text: 'How does this treatment work?'},
            {
              stack: [
                'CKM is a treatment option for managing kidney failure. It involves:',
                {
                  ul: [
                    'Treating symptoms',
                    'Preventing or managing problems.',
                    'Protecting remaining kidney function.',
                    'Psychosocial care.',
                    'Helping plan for the future.',
                  ]
                }, "CKM does not include dialysis, but it does include all of the other parts of kidney care. The goal of CKM is to live well without dialysis. To learn more about CKM click FIXME!"
              ]
            },
            [
              'Dialysis is a medical treatment that does some of the kidneys’ work to remove toxins and water from your body. It will not cure kidney disease or stop kidneys from getting worse. Dialysis will not treat other medical problems like diabetes or heart conditions. It requires a great deal of time and effort. Patients’ experiences vary widely. In general, the healthier you are, the more likely you are to find it helpful. There are two main types of dialysis. To learn more about dialysis and to see how it actually works, click FIXME!!!',
              {
                table: {
                  body: [
                    ['Peritoneal dialysis', 'Hemodialysis'],
                    ['This type of dialysis happens inside your body and uses the lining of your belly to remove toxins and water. Clean fluid goes in your belly through a tube and fluid with toxins is flushed out. You can do this at home.', 'This type of dialysis happens outside your body. A machine filters your blood and then returns it to your body. Hemodialysis is usually done in a dialysis unit in a clinic or hospital. Some patients can do it at home.']
                  ]
                },
              }
            ]
          ], [
            {text: "Can I change from one treatment to another?"},
            {text: "You can change your mind. All options may still be possible."},
            {text: "You can change your mind. All options may still be possible."},
          ]
        ]
      }
    };

    var progrnosisTable = {};

    content.push({text: "PDA Results", style: "header"});
    content.push({text: "My Treatment Options", style: "subHeader"});
    content.push(treatmentOptionsTable);


    this.questions.forEach(function (m) {
      content.push(`Question: ${m.title} Answer: ${m.selectedOption}\n`);
    });

    content.push();

    var styles = {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subHeader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableExample: {
        margin: [0, 5, 0, 15]
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    };

    return {content: content, styles: styles};
  }
}
