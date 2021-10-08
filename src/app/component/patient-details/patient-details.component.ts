import { Component, OnInit } from '@angular/core';
import {Patient} from "../../model/patient";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Note} from "../../model/note";

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  diabeteReport! : string;
  patient!: Patient;
  notes!: Note[];
  id!: number;
  str! : string;
  public note! : Note;
  private sub: Subscription | undefined;
  constructor(private route: ActivatedRoute,
              private router: Router,
              public userService: UserService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {


    //Retrieving id of concerned patient from URI
    this.sub=this.activatedRoute.paramMap.subscribe(params => {
      let idAsString :string | null = (params.get('id'));
      if (typeof idAsString === "string") {
        this.id = parseInt(idAsString);
      }

      this.userService.findPatientById(this.id).subscribe(data => {
        this.patient = data;
      });
      this.userService.findNotesByPatientId(this.id).subscribe(data => {
        this.notes = data;
        });
      this.userService.getReport(this.id).subscribe(data => {
        this.diabeteReport = data.toString()
      });
    });
  }


  onSubmit(patientId : number) {
    this.userService.addANote(new Note(patientId, this.str)).subscribe(() => {
        this.ngOnInit()
      });
  }

  onUpdate(id:number, note:Note): void {
    this.userService.updateNote(id, note).subscribe( ()=> {
      this.ngOnInit();
    });
  }

  onDelete(id:number): void {
    this.userService.deleteNote(id).subscribe(() => {
      this.ngOnInit()
    });
  }

}
