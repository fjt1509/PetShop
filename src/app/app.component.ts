import { Component } from '@angular/core';
import {AuthenticationService} from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PetShop';
  loggedIn: string;

  constructor (auth: AuthenticationService) {

  }
}
