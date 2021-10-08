import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Patient} from "../../model/patient";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  patient: Patient;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    this.patient = new Patient();
  }

  onSubmit() {
    this.userService.savePatient(this.patient).subscribe(result => this.router.navigate(['/users']));
  }
}
