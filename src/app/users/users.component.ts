import { Component, OnInit } from '@angular/core';
import {HTTPTestService} from "./httprequest"
import {forEach} from "@angular/router/src/utils/collection";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[HTTPTestService]
})
export class UsersComponent {
  public  data;
  constructor(public _httpService:HTTPTestService) {
    this._httpService.getjsondata()
      .subscribe(data => this.data = data,
        error=>alert(error),
        ()=>console.log(this.data)

      );

  }

  admin={
    name:"",
    email:"",
    password:""
  }

  check()
  {
    let rad=(<HTMLInputElement>document.getElementById('admin')).value
    let name=(<HTMLInputElement>document.getElementById('name')).value
    let mail=(<HTMLInputElement>document.getElementById('email')).value
    let password=(<HTMLInputElement>document.getElementById('password')).value
    if(rad=="admin")
    {
      alert(rad)
      this.admin.name=name;
      this.admin.email=mail;
      this.admin.password=password
      var eq = this.data == this.admin;
      alert(eq);
    }


  }

}
