import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any
  
    constructor(private apiService:ApiService,private router:Router,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {

    this.loginForm=new FormGroup({
      
      'email': new FormControl("",[Validators.required,  	Validators.pattern("^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"),
    ]),
      'password': new FormControl("",[Validators.required,Validators.minLength(8)]),
    })
  }

  // userLogin(item:any )
  // {
  //   console.log(item.value);
    
  //   this.apiService.login(item.value).subscribe((res:any) => {
  //     console.log(res);
  //     localStorage.setItem("Token",res.token)
  //     localStorage.setItem("id",res.id)
  //     if(res.token){
  //     this.router.navigate(["dashboard"])

  //     }
  //   });
  // }
  userLogin(){
    this.apiService.login(this.loginForm.value).subscribe((res:any) => {
      console.log(res);
      if(res.status==200){
        this.toastr.success(res.message, 'Success');
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.result));
        this.router.navigate(["dashboard"])
        }
    });
  }

}
