import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

user=["ahmet","serap","elif","hasan"]
//kayıtlı diyelim

  constructor() { }
  isExistName(val:string){
    if(this.user.indexOf(val)>-1){
      return of(true);
    }else{
return of(false);
    }
    }
  }

