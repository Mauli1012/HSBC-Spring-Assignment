import { Component, OnInit } from '@angular/core';
import { Module1 } from './MOdule1';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  peoplelist:any[]
  people2:any[]
  constructor() {
    this.peoplelist=[
      {
        "name": "Mauli",
        "age": "21",
        "gender": "female"
        },
        {
            "name": "Shivam",
            "age": "21",
            "gender": "Male"
         },
        {
            "name": "shina",
            "age": "21",
            "gender": "female"
        }
    ];
   }

  module = new Module1();

  getAllPeople(){
    this.people2 = this.module.peopleArr;
  }
  
  ngOnInit() {
  }

}
