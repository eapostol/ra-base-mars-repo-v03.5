import { Component } from '@angular/core';

// part 3: added Hero import
// note that this could be used to create the Colonist class
// and the Alien class
import { Hero } from './hero';


// TODO: rename to colonists. Then make one for Aliens
// We can add additional properties here to match up with the
// Mars Project right away (they won't be used...yet)

// const COLONISTS: Colonist
// (also... const ALIENS: Alien)

import { Hero } from './models/Hero';
// TODO: take this HEROES constant and place in a separate file in
// the appropriate folder
const HEROES: Hero[] = [
  { id: 11, name: 'Edward', age:20, occupationID:1 },
  { id: 12, name: 'Marissa', age:20, occupationID:2 },
  { id: 13, name: 'Dan', age:20, occupationID:3 },
  { id: 14, name: 'Ala', age:20, occupationID:4 },
  { id: 15, name: 'Brendon', age:20, occupationID:5 },
  { id: 16, name: 'Matt', age:20, occupationID:1 },
  { id: 17, name: 'Rachael', age:20, occupationID:2 },
  { id: 18, name: 'Kelsie', age:20, occupationID:3 },
  { id: 19, name: 'Sarah', age:20, occupationID:4 },
  { id: 20, name: 'Cody', age:20, occupationID:5 }
];
@Component({
  selector: 'my-app',
  template: `<div style="border: groove">
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
