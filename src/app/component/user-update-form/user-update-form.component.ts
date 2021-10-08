import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Patient} from "../../model/patient";
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-update-form',
  templateUrl: './user-update-form.component.html',
  styleUrls: ['./user-update-form.component.scss']
})
export class UserUpdateFormComponent implements OnInit {

  patient!: Patient;
  id!: number;
  private sub: Subscription | undefined;

  constructor(private userService : UserService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.sub=this.activatedRoute.paramMap.subscribe(params => {
      let idAsString :string | null = (params.get('id'));
      if (typeof idAsString === "string") {
        this.id = parseInt(idAsString);
      }
      this.userService.findPatientById(this.id).subscribe(data => {
        this.patient = data;
      });
    });
  }

  onSubmit() {
    this.userService.updatePatient(this.id, this.patient).subscribe( ()=>{
      this.router.navigate(['users']).then(() =>{});
    });
  }
}
