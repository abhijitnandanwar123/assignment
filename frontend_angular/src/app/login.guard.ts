import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var isLogin = localStorage.getItem('token') !==null ? true : false;
     // console.log(typeof(localStorage.getItem('isLoggedIn')))

      if (!isLogin) {
        //if not loggin
        this.router.navigate(['/login']);
      }
      return isLogin;
  }
  
}
