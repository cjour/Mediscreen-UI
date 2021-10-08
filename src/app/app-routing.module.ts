import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientListComponent} from "./component/patient-list/patient-list.component";
import {UserFormComponent} from "./component/user-form/user-form.component";
import {UserUpdateFormComponent} from "./component/user-update-form/user-update-form.component";
import {PatientDetailsComponent} from "./component/patient-details/patient-details.component";
import {UpdateNoteComponent} from "./update-note/update-note.component";

const routes: Routes = [
  { path: 'users', component: PatientListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'edit/:id', component: UserUpdateFormComponent},
  { path: 'delete/:id', component: PatientListComponent},
  { path: 'seeDetails/:id', component: PatientDetailsComponent},
  { path: 'addANote/:id', component :PatientDetailsComponent},
  { path: 'deleteNote/:id', component : PatientDetailsComponent},
  { path: 'updateNote/:id', component : UpdateNoteComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
