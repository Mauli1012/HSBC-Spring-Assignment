class People{
    name:string;
    age:number;
    gender:string;

    constructor(name,age,gender)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
  }

  export class Module1{
      peopleArr: People[];
      constructor(){
          this.peopleArr=[
              new People("AM",21, "Male"),
              new People("as",24, "Male"),
              new People("kahs",21, "feale")
          ];

      }
  }