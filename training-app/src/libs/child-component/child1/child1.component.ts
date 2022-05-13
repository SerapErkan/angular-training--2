import { Component, OnInit, Input ,Output,EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

// @Input('isim') name:string;


  @Input() data:any;
  // <{name,id,...}>
  @Output() resetForm:EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitForm(event:any){
  this.resetForm.emit(event);
}


}
