/**
 * Created by Edward_J_Apostol on 2016-09-22.
 */
import { Injectable } from '@angular/core';
import { Colonist } from './models/Colonist';
import { COLONISTS } from './data/Colonists'
import { Http, Headers } from '@angular/http';
import { Colony } from './models/Colony'
import 'rxjs/add/operator/toPromise';



@Injectable()
export class ColonistService {

  colonistsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
  constructor(private http: Http){}

  getColonists(): Promise<Colony>{
    console.log("invoking service");
    return <Promise<Colony>>Promise.resolve(COLONISTS);
    // now let's try remote
    // return this.http.get(this.colonistsUrl).toPromise().then(response => response.json()).catch(this.handleError);
  }

  // and add
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}

