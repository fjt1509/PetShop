import {Pet} from './pet';

export class Owner {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  email: string;
  listOfPets?: Pet[];
}

