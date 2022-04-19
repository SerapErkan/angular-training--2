import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss']
})
export class LocalStorageComponent implements OnInit {
  name = "";
  localStorageVal:any="";
  localStorageObj:any="";

  objName="";
  objSurname="";
  objAge="";

  constructor() { }

  ngOnInit(): void {
  }


  //key-value

  setItem(value:string) {
    localStorage.setItem("name", value);
  }

  getItem() {
    this.localStorageVal=localStorage.getItem("name");
  }

  clearItem() {
    localStorage.removeItem("name");

  }

  clearAll() {
    localStorage.clear();
  }


  setObj(){
    const obj={name:this.objName,surname:this.objSurname,age:this.objAge};
    localStorage.setItem("obj",JSON.stringify(obj));
  }
  getObj(){
this.localStorageObj=localStorage.getItem("obj");

  }


}
