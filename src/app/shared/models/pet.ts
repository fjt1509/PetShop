import {Owner} from './owner';

export class Pet {
  id: number;
  name: string;
  type: string;
  birthdate?: Date;
  soldDate?: Date;
  color: string;
  price: number;
  previousOwner?: Owner;

}
