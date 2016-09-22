import { Component } from '@angular/core';

// part 3: added Hero import
// note that this could be used to create the Colonist class
// and the Alien class
// TODO: rename to colonists. Then make one for Aliens
// We can add additional properties here to match up with the
// Mars Project right away (they won't be used...yet)
// const COLONISTS: Colonist
// (also... const ALIENS: Alien)

import { Hero } from './models/Hero';

// refactor Heroes constant out to its own file
import { HEROES } from './data/Heroes'
import {HeroService} from "./hero.service";
import {Alien} from "./models/Alien";
// For extending the service lesson, get Alien data
import {AlienService} from "./alien.service";
import {Aliens} from "./models/Aliens";


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
    <br>
    <h2>Test Aliens</h2>
    <div *ngIf="aliens" style="border: #ff4655 double">
      <ul>
        <li *ngFor="let alien of aliens.aliens">
        {{alien.type}} - {{alien.description}}
        </li>
      </ul>
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
  `],
  providers: [HeroService,AlienService]
})
export class AppComponent {
  title = 'Tour of Heroes';
  // heroes = HEROES;
  // pt 5. services
  heroes: Hero[];
  // Mars Project: add a sample "aliens" collection to test service
  aliens: Aliens;
  selectedHero: Hero;

  ngOnInit(): void{
    this.getHeroes();
    this.getAliens();

  }

  // pt 5 toh add constructor
  constructor(private heroService: HeroService,
              private alienService: AlienService){
    console.log("aliens = " + this.aliens);
  }

  getHeroes(): void{

    // pt 5 toh - refactor this.heroes into their own method
    // note how we cast the fat arrow function
    // argument in parentheses, and cast the getHeroes() method
    // call as <Promise<Hero[]>>

    <Promise<Hero[]>>(this.heroService.getHeroes()).then( (heroes:Hero[]) => this.heroes = heroes);

  }

  getAliens(): void {
    console.log("test retrieving aliens");

    // this was to test locally
    // this.alienService.getAliens().then((a:Aliens) => {console.log(a);this.aliens = <Aliens>a;});

    // this is to test the remote service
    this.alienService.getAliens().then( (a:Aliens) => {this.aliens = <Aliens>a; } );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
