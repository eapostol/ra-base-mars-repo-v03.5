import { Component, Input } from '@angular/core';
import { Hero } from './models/Hero';
// import { Job } from './Job';
import { OCCUPATIONS } from './data/Occupations';

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

/*
const OCCUPATIONS: Job[] = [
  {id:1,name:"nerf herder"},
  {id:2,name:"yoga teacher"},
  {id:3,name:"student"},
  {id:4,name:"football player"},
  {id:5,name:"bounty hunter"}
];
*/

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero" style="border: dashed 1px">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
        <p><label>job:</label>
        <select style="width: 150px">
          <option *ngFor="let job of occupations" 
          [selected]="job.id===hero.occupationID">
          {{job.name}}
          </option>

        </select>
        </p>
      </div>
    </div>
  `
})


export class HeroDetailComponent {
  @Input()
  hero: Hero;
  occupations = OCCUPATIONS;
}
