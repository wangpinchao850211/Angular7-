import { Injectable } from '@angular/core';
import { Router, Route, CanActivate, CanActivateChild, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
    constructor(
        private router: Router,
        private AuthService: AuthService 
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
        let url: string = state.url;
        console.log(url);
        // return this.checkAuth(url);
        return true;
    }

    checkAuth(url): boolean {
        return true;
    }
}

