import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  today = "";
  title = "mErHaBa dÜnYA (i)";
  turkishUpperCaseVal = "";
  cashValue = 2000;
  percentVal=50;
  cityName ="ANKARA";

  objectVal: object = [
    {
      name: "serap",
      age: 27,
      nested: { xyz: 3, number: [1, 2, 3, 4, 5] }
    }
  ]
  cities = [
    "istanbul",
    "izmir",
    "ankara",
    "edirne",
    "mersin",
    "antalya",
    "samsun"
  ];

  constructor() { }

  ngOnInit() {
    this.turkishUpperCaseVal = (this.title as any).toLocaleUpperCase("tr-TR");
    this.today = new Date().toDateString();

  }

}
