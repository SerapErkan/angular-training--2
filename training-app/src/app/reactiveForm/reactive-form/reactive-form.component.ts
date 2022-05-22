import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { BlackListValidator } from 'src/libs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  registerForm : FormGroup | undefined;

  constructor() { }

  ngOnInit(): void {
    this.resetForm();
   
  }
  save(event:any){
    console.log(event);
  }
  resetForm(){
    this.registerForm=new FormGroup({
      username:new FormControl("",{
      validators:[
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
        // BlackListValidator("null")
        BlackListValidator("ğ")
      ]
      }),
      age:new FormControl(0)

    });
  }

}
