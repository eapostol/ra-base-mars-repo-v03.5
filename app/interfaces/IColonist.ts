/**
 * Created by Edward_J_Apostol on 2016-09-23.
 */

import { Job } from '../models/Job'

export interface IColonist {
  name: string;
  job: Job;
  id: number;
  age: number;
}
