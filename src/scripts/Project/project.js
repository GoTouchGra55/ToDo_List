export class Project {
  constructor(name){
    this.name  = name
    this.id = crypto.randomUUID();
  }

  get name(){
    return this.name;
  }

  get id(){
    return this.id;
  }
}