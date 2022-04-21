import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  title = false;
  name = "";
  userName = "";
 color ="";
 
  cities = [
    {
      id: 1,
      name:"serap",
      age: 27
    },
  {
      id: 3,
      name:"sudiye" ,
      age: 27
    },
  {
      id: 2,
      name:"yavuz",
      age: 27
    },
    {
      id: 4,
      name:"taha",
      age: 27
    },
    {
      id: 5,
      name:"murat",
      age: 27
    },
  

  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle() {
    this.title = !this.title;
  }

}
