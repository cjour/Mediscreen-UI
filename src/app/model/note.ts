export class Note {
  id! : number;
  patId! : number;
  description : string;


  constructor(patId : number, description : string){
    this.patId = patId;
    this.description = description;
  }
}
