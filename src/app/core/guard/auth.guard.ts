import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router'
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/services/auth.service";


@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate{

    constructor(private authservice:AuthService,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.authservice.isAuth()){
            return true
        }else{
            this.router.navigate(['/auth/login'])
            return false;
        }
    }
}