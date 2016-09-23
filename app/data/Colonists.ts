/**
 * Created by Edward_J_Apostol on 2016-09-22.
 */

import { Colony } from '../models/Colony'
import { Colonist } from '../models/Colonist'

export const COLONISTS:Colony = {
  "colonists": [
    <Colonist>{
      "name": "Johnny",
      "job": {"name": "Battery technician", "id": 3, "description": "Keeping the lights on."},
      "id": 555,
      "age": 34
    },
    <Colonist>{
      "name": "Johnny",
      "job": {"name": "Yoga teacher", "id": 4, "description": "Stay limber on the red planet."}, "id": 556, "age": 78
    },
    <Colonist>{
      "name": "johnny",
      "job": {"name": "Dust farmer", "id": 1, "description": "Growing dust."}, "id": 557, "age": 58
    },
    <Colonist>{
      "name": "bjbbk",
      "job": {"name": "Alien hunter", "id": 2, "description": "Providing delicious aliens for dinner"},
      "id": 558,
      "age": 55
    },
    <Colonist>{
      "name": "hhf",
      "job": {"name": "Alien hunter", "id": 2, "description": "Providing delicious aliens for dinner"},
      "id": 559,
      "age": 56
    }
  ]
}
