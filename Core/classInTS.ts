console.log('---- Classes in TypeScript ----')

class youtubes {
  firstname: string;
  lastname: string;
  age: number;

  getFirstname(){
    console.log('My firstname is ' + this.firstname);
  }

  getLastname(){

  }
}

let ytobj = new youtubes();
ytobj.firstname = 'Hiren';
ytobj.getFirstname();