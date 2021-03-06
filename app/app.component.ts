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
import {AlienHorde} from "./models/AlienHorde";

import { ColonistService } from './colonist.service'
import { Colony } from './models/Colony'

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
    <h2>Test Colonists</h2>
  <!-- note the example below, where I set up an ngFor loop with an index. that way, I can limit loop with an *ngIf 
  statement -->
    <div *ngIf="colonists" style="border: #00ff33 double">
      <ul>
      <span *ngFor="let colonist of colonists.colonists; let i = index"> 
       <span *ngIf="i<10">
        <li>    
        {{colonist.name}} - {{colonist.job.description}}       
        </li>
         </span>
        </span>
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
  providers: [HeroService,AlienService,ColonistService]
})
export class AppComponent {
  title = 'Tour of Heroes';
  // heroes = HEROES;
  // pt 5. services
  heroes: Hero[];
  // Mars Project: add a sample "aliens" collection to test service
  aliens: AlienHorde;
  // Mars Project: add a sample "colony" collection to test service
  colonists: Colony;

  selectedHero: Hero;

  ngOnInit(): void{
    this.getHeroes();
    this.getAliens();
    this.getColonists();

  }

  // pt 5 toh add constructor
  constructor(private heroService: HeroService,
              private alienService: AlienService,
              private colonistService: ColonistService){}



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
    let aliensPromise:Promise<AlienHorde> = this.alienService.getAliens();
    aliensPromise.then( (a:AlienHorde) => {this.aliens = a; } );
  }

  getColonists(): void {

    let colonistsPromise:Promise<Colony> = this.colonistService.getColonists();
    colonistsPromise.then( (c:Colony) => { (this.colonists) = c; console.log(this.colonists)}  );

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
