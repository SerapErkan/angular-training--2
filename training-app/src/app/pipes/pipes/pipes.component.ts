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
cashValue=2000;

  constructor() { }

  ngOnInit() {
    this.turkishUpperCaseVal = (this.title as any).toLocaleUpperCase("tr-TR");
    this.today = new Date().toDateString();

  }

}
