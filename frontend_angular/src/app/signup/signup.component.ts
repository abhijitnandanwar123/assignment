import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm :any
  isLogged :any=false

  constructor(private router:Router,private apiService:ApiService,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      'firstname': new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      'lastname': new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      'add_line1': new FormControl("",[Validators.required,]),
      'add_line2': new FormControl("",),

      'state': new FormControl("",[Validators.required,]),
      'city': new FormControl("",[Validators.required,]),
      'email': new FormControl("",[Validators.required,  	Validators.pattern("^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"),
    ]),
      'number': new FormControl("",[Validators.required,Validators.pattern('[0-9]*$'),Validators.minLength(10), Validators.maxLength(10)]),
      'password': new FormControl("",[Validators.required,Validators.minLength(8)]),
      
    })
    
  }
  Signup(){
    console.log(this.signupForm.value,"in sin ts");

    this.apiService.customer(this.signupForm.value).subscribe((res:any) => {
      if(res.status){
        this.toaster.success(res.message, 'Success');
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.result));
        this.router.navigate(["dashboard"])
        }
    });
  }

  resetForm(){
    this.signupForm.reset()
  }



}
