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
// import { ALIENS } from './data/Aliens-mock'

// then try to use the remote alien service
import { Http, Headers } from '@angular/http';

// use this to confirm the structure of data returned
import { Aliens } from './models/Aliens'



// this was from the slides. correction: rxjs is supported 3rd party
// library from Angular.
// so we can use it
// see https://angular.io/docs/ts/latest/guide/server-communication.html#!#promises

import 'rxjs/add/operator/toPromise';



@Injectable()
export class AlienService {

  aliensUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
  // dependency injection, add the HTTP object for immediate use
  // the constructor does nothing with it, but we
  // at least have http available.
  constructor(private http: Http){}

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
    console.log("invoking service");
    // first, test with the local service
    // console.log(ALIENS);
    // return Promise.resolve(ALIENS);

    // now let's try remote
     return this.http.get(this.aliensUrl).toPromise()
       .then(response => response.json()).catch(this.handleError);
  }

  // and add
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
