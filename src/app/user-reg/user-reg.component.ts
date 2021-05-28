import { Component, OnInit } from '@angular/core';
import{user} from '../models/user.model'

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent  {

 userobj1:user={u:"",d:"",e:""}
 adduserdata(){
   console.log(this.userobj1)
 }

  

}
