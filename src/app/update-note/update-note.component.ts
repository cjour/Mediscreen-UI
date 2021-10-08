import { Component, OnInit } from '@angular/core';
import {Patient} from "../model/patient";
import {Subscription} from "rxjs";
import {UserService} from "../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Note} from "../model/note";

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  note!: Note;
  id!: string;
  idPatient!: number;
  private sub: Subscription | undefined;

  constructor(private userService : UserService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.sub=this.activatedRoute.paramMap.subscribe(params => {
      let idAsString :string | null = (params.get('id'));
      if (typeof idAsString === "string") {
        this.id = idAsString;
      }
      this.userService.getNote(this.id.toString()).subscribe( data => {
        this.note = data;
      });
    });
  }

  onSubmit(patId:number) {
    this.userService.updateNote(this.id, this.note).subscribe( ()=>{
      this.router.navigate(['seeDetails/' + patId])
    });
  }

}
