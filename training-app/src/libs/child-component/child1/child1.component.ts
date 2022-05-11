import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

// @Input('isim') name:string;


  @Input() data:any;


  constructor() { }

  ngOnInit(): void {
  }

}
