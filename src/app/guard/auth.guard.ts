import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../core/servicios/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private authservice: AuthService,
            private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {


      console.log('paso por aqui');
    
      return this.authservice.renovarToken()
             .pipe(
               tap(estalogeado =>{
                 if (!estalogeado){
                   this.router.navigateByUrl('auth');
                 }
               })
             )
   
  }
  
}
