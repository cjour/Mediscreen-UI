import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';
import { PatientListComponent } from './component/patient-list/patient-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UserService} from "./service/user.service";
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserUpdateFormComponent } from './component/user-update-form/user-update-form.component';
import { PatientDetailsComponent } from './component/patient-details/patient-details.component';
import {RouterModule} from "@angular/router";
import { UpdateNoteComponent } from './update-note/update-note.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    UserFormComponent,
    UserUpdateFormComponent,
    PatientDetailsComponent,
    UpdateNoteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
