/**
 * Created by Edward_J_Apostol on 2016-09-21.
 * This begins exploring part 3 of tour of heroes
 * What you should try to do is figure out how
 * part 3 can be used - its about making multiple components
 * So compare to the Mars project. Remember you need to recognize
 * What components you need from the solution site of the Mars Project
 * This explicit component **could** be used for example, to create the
 * list of encounters.
 */

import { Component, Input } from '@angular/core';

// part 3 - added the Hero class so this component can use it
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
`

})
export class HeroDetailComponent {
  // pt 3: requires us to extract HERO from app.commponent.ts
  // and put it in its own file.
  hero: Hero;

}
