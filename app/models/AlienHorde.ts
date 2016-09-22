/**
 * Created by Edward_J_Apostol on 2016-09-22.
 */
// this "model" sets up the structure of the JSON data
// returned from the calling the Alien Service at
// https://red-wdp-api.herokuapp.com/api/mars/aliens

  import { Alien } from './Alien'

export class Aliens{
  aliens: Alien[];

}
