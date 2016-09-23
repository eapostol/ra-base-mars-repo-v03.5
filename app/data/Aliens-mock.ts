/**
 * Created by Edward_J_Apostol on 2016-09-22.
 */
// mock-Aliens, to explore how to use the Data returned
// from the aliens service.

// added import for Alien model, since part of the data
// returned is an array of aliens

import { Alien } from '../models/Alien';

// added import for Aliens model, since JSON returned is
// an object with Aliens property
import { AlienHorde } from "../models/AlienHorde";

export const ALIENS:AlienHorde =
{
  "aliens": [
  {"type":"Ectomorph","submitted_by":"3","id":1,"description":"Long head, slimy."},
  {"type":"Endomorph","submitted_by":"3","id":2,"description":"Smooth, silky."},
  {"type":"Green man","submitted_by":"3","id":3,"description":"Greenish grey."},
  {"type":"Grey man","submitted_by":"3","id":4,"description":"Greyish green."},
  {"type":"Big-nose-flat-head","submitted_by":"3","id":5,"description":"Big nose, flat head"},
  {"type":"Octospider","submitted_by":"3","id":6,"description":"Spiderpus."},
  {"type":"Octospider","submitted_by":"3","id":7,"description":"Spiderpus."}
  ]
};
