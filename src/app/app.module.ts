import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BusyModule } from 'angular2-busy';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form.component';
import { HeroDetailComponent } from './hero-detail.component';
import { QuestionFormComponent } from './question-form.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    BusyModule,
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    QuestionFormComponent,
    HeroDetailComponent,
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
