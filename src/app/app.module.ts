import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsListComponent } from './pets/pets-list/pets-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PetsDetailsComponent } from './pets/pets-details/pets-details.component';
import { PetAddComponent } from './pets/pet-add/pet-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PetUpdateComponent } from './pets/pet-update/pet-update.component';
import {HttpClientModule} from '@angular/common/http';
import { OwnerAddComponent } from './owners/owner-add/owner-add.component';
import { OwnerUpdateComponent } from './owners/owner-update/owner-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MzCheckboxModule,
  MzCollapsibleModule,
  MzCollectionModule,
  MzDatepickerModule,
  MzInputModule,
  MzNavbarModule,
  MzParallaxModule, MzSelectModule,
  MzSpinnerModule
} from 'ngx-materialize';
import { MzProgressModule } from 'ngx-materialize';
import { MzCardModule } from 'ngx-materialize';
import { MzButtonModule } from 'ngx-materialize';
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize';
import { MzDropdownModule } from 'ngx-materialize';
import { MzSidenavModule } from 'ngx-materialize';
import { OwnerListComponent } from './owners/owner-list/owner-list.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    NavbarComponent,
    WelcomeComponent,
    PetsDetailsComponent,
    PetAddComponent,
    PetUpdateComponent,
    OwnerAddComponent,
    OwnerUpdateComponent,
    OwnerListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MzNavbarModule,
    MzProgressModule,
    MzCardModule,
    MzIconModule,
    MzIconMdiModule,
    MzButtonModule,
    MzDropdownModule,
    MzSidenavModule,
    MzCollapsibleModule,
    MzCollectionModule,
    MzInputModule,
    MzSpinnerModule,
    FormsModule,
    MzParallaxModule,
    MzDatepickerModule,
    MzCheckboxModule,
    MzSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
