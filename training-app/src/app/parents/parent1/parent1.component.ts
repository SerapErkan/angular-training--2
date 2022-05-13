import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {

  name="";
  successStatus=0;
  calculaterData!:any;


  constructor() { }

  ngOnInit(): void {
  }
  calculate(){
this.calculaterData={
  name:this.name,
  status:this.successStatus
};
  }
  resetParentForm(){
    this.name="";
    this.successStatus=0;
  }
}
