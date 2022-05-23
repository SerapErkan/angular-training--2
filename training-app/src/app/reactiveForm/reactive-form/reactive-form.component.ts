import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { BlackListValidator, UserNameExistValidator } from 'src/libs';
import { UserService } from 'src/libs/services/user.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  registerForm: FormGroup | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.resetForm();

  }
  save(event: any) {
    console.log(event);
  }
  resetForm() {
    this.registerForm = new FormGroup({
      username: new FormControl("", {
        validators: [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
          BlackListValidator("ğ")
        ],

        // asyncValidators: [UserNameExistValidator(this.userService)],
      
      }
      
      
      ),
      age: new FormControl(0)

    });
  }

}
