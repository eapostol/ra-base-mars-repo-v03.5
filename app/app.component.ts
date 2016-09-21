import { Component } from '@angular/core';

// TODO: rename to colonists. Then make one for Aliens
// We can add additional properties here to match up with the
// Mars Project right away (they won't be used...yet)

// const COLONISTS: Colonist
// (also... const ALIENS: Alien)
const HEROES: Hero[] = [
  { id: 11, name: 'Edward' },
  { id: 12, name: 'Cody' },
  { id: 13, name: 'Marissa' },
  { id: 14, name: 'Dan' },
  { id: 15, name: 'Ala' },
  { id: 16, name: 'Brendon' },
  { id: 17, name: 'Sarah' },
  { id: 18, name: 'Kelsie' },
  { id: 19, name: 'Rachael' },
  { id: 20, name: 'Matt' }
];


export class Hero {
  id : number;
  name : string;

}

@Component({
  selector: 'my-app',
  template: `  
  <!-- 
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
 --> 
  <!-- [(ngModel)]="hero.name" is the same as value="{{hero.name}}" -->
 
  <h2>My Heroes / Colonists / Encounters </h2>
  <!-- pt 2  display list of heroes -->
  <!-- note: this could be list to display a list of encounters -->
<ul class="heroes">
    <!-- each hero goes here -->
    <!-- pt 2 replace empty <li> tag with new one and *ngFor loop -->
    <li *ngFor="let hero of heroes" (click)="onSelect(hero)"
    [class.selected]="hero === selectedHero">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
</ul>
<br>
<!-- pt 2: for click handler, display hero IF one is available -->
<div *ngIf="selectedHero">
  <h2>{{selectedHero.name}} details!</h2>
  <div><label>id: </label>{{selectedHero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="selectedHero.name" placeholder="name"/>
  </div>
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
  /* removed when adding a hero clicked event
  hero = {
    id : 1,
    name : 'Windstorm'
  };
  */

  // pt 2: added
  selectedHero: Hero;
  heroes = HEROES;

  // pt 2: added
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
