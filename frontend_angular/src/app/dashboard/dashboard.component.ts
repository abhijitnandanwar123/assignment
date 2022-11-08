import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fullname:string="bakasur"
  name:any
  id:any
  detail:any
  constructor(private apiService:ApiService,private toastr:ToastrService,private router:Router) { }
  loggedinUser:any
  userDetail: any = {
    firstname: '',
    lastname: '',
    address:{ add_line1: '', add_line2: '', city: '', state: '' },
    email: '',
    number: 0,
  };
  ngOnInit(): void {  
    this.loggedinUser = JSON.parse(localStorage.getItem('user') as any);
    this.userDetail=JSON.parse(localStorage.getItem('user') as any);
    this.id=this.userDetail._id
   
  }

displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

  customerEdit(data:any )
  {
    this.apiService.edit(this.id,data).subscribe((res:any) => {
      console.log(res);
      if(res.status){
        this.closePopup() 

        localStorage.setItem('user', JSON.stringify(res.result));
        this.ngOnInit()
      }
    });
  }

  handleLogout() {
    localStorage.clear();
    this.toastr.success('Logout Successfull','Success')
    this.router.navigate(['/login']);
  }
}