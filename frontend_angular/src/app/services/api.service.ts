import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) { }

  Token:any=localStorage.getItem("token")
  private apiURL = 'http://localhost:8201';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:this.Token
    }),
  };


  customer(data: any) {
    console.log(data,"signup");
    return this.httpclient.post(`${this.apiURL}/customer/customerSignup`, data);
  }

  login(data: any) {
    console.log(data);
    return this.httpclient.post(`${this.apiURL}/customer/customerLogin`, data);
  }
  customerById(id: any) {
    console.log(id);
    return this.httpclient.post(`${this.apiURL}/customer/getCustomerbyid`, {id});
  }

  edit(_id:any,data: any,) {
    let userData = { ...data, _id };
    console.log(userData,"aaaa");
    
     return this.httpclient.put(`${this.apiURL}/customer/updateCustomerang`, userData,this.httpOptions);
   }
}
