import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {


  title="mErHaBa dÜnYA (i)";
  turkishUpperCaseVal="";

  constructor() { }

  ngOnInit() {
    this.turkishUpperCaseVal=(this.title as any).toLocaleUpperCase("tr-TR");
  }

}
