/**
 * Created by Edward_J_Apostol on 2016-09-21.
 */
import { Injectable } from '@angular/core';

// pt 5, services
import { Hero } from './models/Hero'
import { HEROES } from './data/Heroes';

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    // return HEROES;
    // pt 5 toh, ensure signature changes to indicate returning a PROMISE
    return Promise.resolve(HEROES);
  };

}

