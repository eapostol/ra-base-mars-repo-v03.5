/**
 * Created by Edward_J_Apostol on 2016-09-22.
 */

import { IAlien } from '../interfaces/IAlien';

export class Alien implements IAlien {
  type: string;
  submitted_by: string;
  id:number;
  description:string;
}
