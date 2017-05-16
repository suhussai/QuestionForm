import { Question }    from './question';
import { nursingImage } from './nursingImage';
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

    var progrnosisTable = {
      style: 'tableExample',
      table: {
        body: [
          ['', 'Conservative Kidney Management (CKM) No dialysis or transplant', 'Dialysis'],
          [
            {
              text: 'Quality of Life'
            },
            {
              text: "Quality of life is anticipated to remain stable until the last 1-2 months of life. At that time you are likely to feel more weak and may lose interest in the details of daily life."
            },
            {
              text: "Dialysis is not likely to make you feel better. The side effects and burden of dialysis may even lower your quality of life."
            }
          ],
          [
            {text: "Symptoms"},
            {text: "Symptoms are common with kidney failure.  The severity of symptoms tend to remain stable with CKM until the last month of life when they may increase. These symptoms can be treated and aggressive symptom management will be a part of your CKM care."},
            {text: "Symptoms are common with kidney failure. The severity of symptoms will likely not improve with dialysis. The dialysis procedure may cause or worsen some symptoms such as muscle cramping and fatigue."},
          ],
          [
            {text: "Function"},
            {text: "Your level of physical function will likely be relatively stable until the last 1-2 months of life."},
            {text: "People in a nursing home or with poor physical function do poorly on dialysis and can lose physical function rapidly after starting dialysis. Only 13% of people living in a nursing home maintain their level of function after 1 year on dialysis."},
          ],
          [
            {text: "Survival", fillColor: '#eeeeee'},
            {text: "Your life span will likely be the same with CKM than with dialysis. Some people like you may actually live longer with CKM, especially if your kidney function is quite stable."},
            {
              stack: [
                "Dialysis is unlikely to keep you alive longer than if you had CKM. Dialysis may actually hasten death.",
                {
                  image: 'nursingHomeStats',
                  width: 150,
                },
                "Estimated probability of dying within 6 months after starting dialysis:16%* *Note: calculated from nearly 70,000 kidney failure patients age 67 years or older who started dialysis"
              ]
            },
          ],
        ]
      }
    };

    content.push({text: "PDA Results", style: "header"});
    content.push({text: "My Treatment Options", style: "subHeader"});
    content.push(treatmentOptionsTable);
    content.push({text: "My Prognosis", style: "subHeader"});
    content.push(progrnosisTable);
    content.push(
      {
        image: 'nursingHomeStats',
      }
    );


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

    var images = {
      nursingHomeStats: nursingImage
    };

    return {content: content, styles: styles, images: images};
  }
}
