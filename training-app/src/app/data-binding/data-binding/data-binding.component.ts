import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  data = {
    name: "Serap",
    surname: "Kantar",
    job: "Front-end Developer ",
    image: "https://images.pexels.com/photos/4705050/pexels-photo-4705050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    isEditable: false
  };


  constructor() { }

  ngOnInit(): void {
  }
  changeEditable() {
    this.data.isEditable = !this.data.isEditable

  }

  inputSubmit(value: any) {
    alert(value.target.value + " geldi");

  }
}
