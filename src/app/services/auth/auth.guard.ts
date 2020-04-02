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
        this.AuthService.startURL = url;
        // return this.checkAuth(url);
        return true;
    }

    checkAuth(url): boolean {
        const result = this.AuthService.checkAuthenicated();
        if (result) {
            if (this.AuthService.isloginUrl(url)) { // 跳转到内部路由
                this.AuthService.isLoginIn = true; // 通过守卫，设置为登录状态
                this.router.navigate([url]);
                return true;
            } else { // 跳转到白名单
                this.router.navigate([url]);
                return true;
            }
        } else {
            this.AuthService.logout(); // 没有权限登出
            return false;
        }
    }

}