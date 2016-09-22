/**
 * Created by Edward_J_Apostol on 2016-09-21.
 */
import { Injectable } from '@angular/core';

// in this demo we are building upon the
// services lesson of TOH. using the Alien
// service slides from MARS

// import { Hero } from './models/Hero'
import { Alien } from './models/Alien';

// HEROES was our actual data, but now we are getting it from
// remote resource
// import { HEROES } from './data/Heroes';
// first, we can 'test' with the local service
// uncomment the lines below to test the local alien service
import { ALIENS } from './data/Aliens-mock'
import { Aliens } from './models/Aliens'

// then, we can test with the remote alien service
import { Http, Headers } from '@angular/http';
// import Promise = require("core-js/es6/promise");

// this was from the slides. but probably don't need it
// so I commented it out (since we showed that there
// was native Promise support in Angular from TOH
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlienService {

  aliensUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
  // dependency injection, add the HTTP object for immediate use
  // the constructor does nothing with it, but we
  // at least have http available.
  // constructor(private http: Http){}

  // replace
  /*
  getHeroes(): Promise<Hero[]> {
    // return HEROES;
    // pt 5 toh, ensure signature changes to indicate returning a PROMISE
    return Promise.resolve(HEROES);
  };
   */

  // with
  getAliens(): Promise<Aliens>{
    // first, test with the local service
    console.log(ALIENS);
    return Promise.resolve(ALIENS);
  }

}
