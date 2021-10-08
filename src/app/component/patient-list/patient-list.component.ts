import { Component, OnInit } from '@angular/core';
import {Patient} from "../../model/patient";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  patients : Patient[] | undefined;

  constructor(public userService : UserService, private router:Router) { }

  ngOnInit(): void {
    this.userService.findAllPatients().subscribe(data => {
      this.patients = data;
    });
  }

  onDelete(id:number): void {
    this.userService.deletePatient(id).subscribe(()=> {
      this.ngOnInit()
    });
  }
}
