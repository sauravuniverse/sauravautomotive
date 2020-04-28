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
           
            this.http.put("http://selfdrivecar-945382308.ap-south-1.elb.amazonaws.com/login",body,{headers:headers}).subscribe(res => {
                
            this.login_response = JSON.parse(JSON.stringify(res))
               alert(this.login_response)

            },error=>alert(error))}
            

            catch(error)
            {
                alert(error.toString())
            }
            

            
            
            

                
    }
}

    



