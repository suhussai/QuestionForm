import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form.component';
import { QuestionFormComponent } from './question-form.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    QuestionFormComponent,
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
