import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {PetsListComponent} from './pets/pets-list/pets-list.component';
import {PetsDetailsComponent} from './pets/pets-details/pets-details.component';
import {PetAddComponent} from './pets/pet-add/pet-add.component';
import {PetUpdateComponent} from './pets/pet-update/pet-update.component';
import {OwnerAddComponent} from './owners/owner-add/owner-add.component';
import {OwnerListComponent} from './owners/owner-list/owner-list.component';
import {OwnerUpdateComponent} from './owners/owner-update/owner-update.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: 'pets', component: PetsListComponent, canActivate: [AuthGuard] },
  { path: 'pets/:id', component: PetsDetailsComponent, canActivate: [AuthGuard] },
  { path: 'pet-add', component: PetAddComponent, canActivate: [AuthGuard] },
  { path: 'pet-update/:id', component: PetUpdateComponent, canActivate: [AuthGuard] },
  { path: 'owner-add', component: OwnerAddComponent, canActivate: [AuthGuard]},
  { path: 'owners', component: OwnerListComponent, canActivate: [AuthGuard]},
  { path: 'owner-update/:id', component: OwnerUpdateComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent}




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
