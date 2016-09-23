/**
 * Created by Edward_J_Apostol on 2016-09-21.
 */

import { IJob } from '../interfaces/IJob'

export class Job implements IJob{
  id:number;
  name:string;
  description:string;
}
// because description is "optional" in the interface,
// I don't have to declare it in the class that uses it
// but really what's the point of a contract if its not followed?
