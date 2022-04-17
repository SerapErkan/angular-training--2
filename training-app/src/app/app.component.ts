import { Component, OnInit } from '@angular/core';

//ngx Toast
import { Toast, ToastrService } from 'ngx-toastr';

//spinner 
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'training-app';
  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }


  ngOnInit(): void {
    this.showSpinner(),
    this.showSuccess()
     

  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  showSpinner() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

}
