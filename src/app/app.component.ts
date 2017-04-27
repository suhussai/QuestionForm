import { Component } from '@angular/core';

import { Hero }    from './hero';
import { Question }    from './question';

const HEROES: Hero[] = [
  new Hero(42, 'SkyDog',
    'Fetch any object at any distance',
    'Leslie Rollover'
  ),
  new Hero(42, 'SkyDog2',
    'Fetch any object at any distance2',
    'Leslie Rollover2'
  )
];
@Component({
  selector: 'my-app',
  template: `
<!--    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-form></hero-form>
    -->
    <question-form></question-form>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
}
