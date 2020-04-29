import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { getLocaleDateFormat } from "@angular/common";

@Injectable({
    providedIn: 'root',

})

export class HttpPostService {
    login_response
    password
    device_id
   

   
    constructor(private http: HttpClient, public router: Router) { }

    getdata()  {
        try { 
            let headers= new HttpHeaders({
               'Content-Type':'application/json'
               
            })
           let body={device_id:this.device_id, password:this.password}
          // alert("id:"+this.device_id+" pass:"+this.password)

            this.http.put("http://selfdrivecar-945382308.ap-south-1.elb.amazonaws.com/login",body).subscribe(res => {
                
            this.login_response = JSON.parse(JSON.stringify(res))
         
           if(this.login_response)
               //localStorage.setItem('token',this.login_response["AUTH-TOKEN"]);
              // alert(localStorage.getItem("token"))
                this.router.navigate(["/home"])
            },error=>alert("password and vehicle_id didnt match"))}
            

            catch(error)
            {

               alert("password and vehicle_id didnt match")
            }
            

            
            
            

                
    }
}

    



