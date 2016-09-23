/**
 * Created by Edward_J_Apostol on 2016-09-22.
 */

import { Job } from './Job'
import {IColonist} from "../interfaces/IColonist";

export class Colonist implements IColonist{
  name: string;
  job: Job;
  id: number;
  age: number;
}
