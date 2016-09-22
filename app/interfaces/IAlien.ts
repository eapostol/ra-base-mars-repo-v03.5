/**
 * Created by Edward_J_Apostol on 2016-09-22.
 */

// after completing the service lesson in TOH,
// we begin recreating the Alien Service.
// based upon the URL
// https://red-wdp-api.herokuapp.com/api/mars/aliens
// we build the appropriate interface

/*
* id: a unique ID for the alien
* type: a string, that has several values (ENUMS) ex. Ectomorph, Endomorph
* submitted_by: the ID of the colonist
* description: a string - a textual description that has
* several values (ENUMS) ex. "Long Head, slimy"
* */

export interface IAlien{
  type: string;
  submitted_by: string;
  id:number;
  description:string;
}
