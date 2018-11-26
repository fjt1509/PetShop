import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn;
  }

  Logout() {
    this.auth.logout();
  }

}
