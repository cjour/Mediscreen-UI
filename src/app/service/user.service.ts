import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Patient} from "../model/patient";
import {catchError} from "rxjs/operators";
import {Note} from "../model/note";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly patientsListUrl: string;
  private readonly patientAddUrl: string;
  private readonly patientGetByIdUrl: string;
  private readonly patientUpdateUrl: string;
  private readonly patientDeleteUrl: string;

  private readonly notesListUrl: string;
  private readonly notesOfPatientById: string;
  private readonly addANoteUrl: string;
  private readonly deleteNoteUrl: string;
  private readonly updateNoteUrl : string;
  private readonly getReportUrl : string;
  private readonly noteById : string;


  constructor(private http: HttpClient, private router : Router) {
    this.patientsListUrl = 'http://localhost:8081/patient/list';
    this.patientAddUrl = 'http://localhost:8081/patient/add';
    this.patientGetByIdUrl = 'http://localhost:8081/patient/';
    this.patientUpdateUrl = 'http://localhost:8081/patient/update/';
    this.patientDeleteUrl = 'http://localhost:8081/patient/delete/';

    this.notesListUrl = 'http://localhost:8082/notes';
    this.notesOfPatientById = 'http://localhost:8082/patientNote/';
    this.noteById = 'http://localhost:8082/patientNote/note/'
    this.addANoteUrl = 'http://localhost:8082/patientNote/add';
    this.deleteNoteUrl = 'http://localhost:8082/patientNote/delete/';
    this.updateNoteUrl = 'http://localhost:8082/patientNote/update/';

    this.getReportUrl = 'http://localhost:8080/assess/id/';
  }

  findAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsListUrl);
  }

  findPatientById(id: number) {
    return this.http.get<Patient>(this.patientGetByIdUrl + id);
  }

  savePatient(patient: Patient) {
    return this.http.post<Patient>(this.patientAddUrl
                                    + "?family=" + patient.firstname
                                    + "&given=" + patient.name
                                    + "&dob=" + patient.birthdate
                                    + "&sex=" + patient.genre
                                    + "&address=" + patient.address
                                    + "&phone=" + patient.phoneNumber
                                    ,null);
  }

  updatePatient(id: number | null, patient: Patient) {
    return this.http.put<Patient>(this.patientUpdateUrl + id
                                      + "?family=" + patient.firstname
                                      + "&given=" + patient.name
                                      + "&dob=" + patient.birthdate
                                      + "&sex=" + patient.genre
                                      + "&address=" + patient.address
                                      + "&phone=" + patient.phoneNumber
                                      , null);
  }

  deletePatient(id: number) {
    return this.http.delete<Patient>(this.patientDeleteUrl + id);
  }

  findNotesByPatientId(id: number) {
    return this.http.get<Note[]>(this.notesOfPatientById + id);
  }

  addANote(note : Note) {
    return this.http.post<Note>(this.addANoteUrl, note);
  }

  deleteNote(_id: Object) {
    return this.http.delete(this.deleteNoteUrl + _id);
  }

  updateNote(_id: Object, note : Note) {
    return this.http.put<Note>(this.updateNoteUrl + _id, note);
  }

  getNote(id:string) {
    return this.http.get<Note>(this.noteById + id);
  }

  getReport(id : number) {
    return this.http.get<String>(this.getReportUrl + id)
  }
}
