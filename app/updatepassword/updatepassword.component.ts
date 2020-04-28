import { Component, OnInit } from '@angular/core';
import {alert} from "tns-core-modules/ui/dialogs";




@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.scss']
})
export class UpdatepasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  password
  Repassword



  validate()
 {
   if(this.password !=this.Repassword)
   {
      alert("password doesnt match")
   }
  

  


}
}


