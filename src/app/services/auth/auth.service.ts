import { Injectable, EventEmitter } from '@angular/core';
import * as JWT from 'jwt-decode';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import storage from './storage';
import { Router } from '@angular/router';
export enum LoginStatus {
    TokenExpired,
    TokenNone,
    Success
  }
  
@Injectable({
    providedIn: 'root'
})

export class AuthService {
    public TOKENKEY = environment.OAuth.storage.TOKEN_KEYS;
    public EXPIRATION_KEY = environment.OAuth.storage.EXPIRATION_KEY;
    public USERNAME = environment.OAuth.storage.USERNAME;
    public clientID = environment.OAuth.clientID;
    public TENANT = environment.OAuth.tenant;
    public localloginUrl = environment.OAuth.localLoginUrl;
    public expireOffset = environment.OAuth.expireOffsetSeconds;
    public responseType = environment.OAuth.response_type;

    public whiteUrList = ['/login', '/setPassword', '/activation', '/404'];
    public startURL = '/login'; // 存储当前location
    public authData = {
        isAuthenticated: false, // 当前系统是否存在token
        userName: '' // 用户名(邮箱)
    };
    public token = null;
    public expiredTime = null;
    public headertoken = '';

    loginStatus: LoginStatus = LoginStatus.TokenNone
    loginCompleted: EventEmitter<any> = new EventEmitter()
    
    public isLoginIn = false;
    public UserRole: any;
    public redirectUrl: any;
    constructor(
        private router: Router
    ) {
        this.expiredTime = storage._getItem(this.EXPIRATION_KEY)?storage._getItem(this.EXPIRATION_KEY): null;
        this.updateDataFromCache();
    }

    getToken(resource) {
        return storage._getItem(`${this.TOKENKEY}${resource}`);
    }
    getExpiration(resource) {
        return storage._getItem(`${this.EXPIRATION_KEY}${resource}`);
    }
    getUserProfile() {
        return storage._getItem(this.USERNAME);
    }

    checkAuthenicated() {
        return this.authData.isAuthenticated && this.isLoginIn
    }

    isloginUrl(uri) {
        if (this.whiteUrList.includes(uri)) {
            return false;
        } else {
            return true;
        }
    }
    logout() {
        storage._clear();
        this.router.navigate(['/login']);
    }
    getCacheToken(resource) {
        const token = this.getToken(resource);
        const expiredTime = this.getExpiration(resource);

        if (!token && !expiredTime) {
            return null;
        }
        
        if (expiredTime && (expiredTime > this.getNow() + parseInt(`${this.expireOffset}`))) {
            this.token = token;
            this.expiredTime = expiredTime;
            return token;
        } else { // 存在过期token，清除
            storage._clear();
            return null;
        }
    }
    getCacheUser() {}
    
    // 获取浏览器传来的token
    getWindowCallback() {}
    getEid() {}
    getEmail() {}
    handleAuthentication(claims): void {
        // 设置效期时间
        this.expiredTime = claims[`${this.EXPIRATION_KEY}${this.clientID}`];
        storage._setItem(`${this.EXPIRATION_KEY}${this.clientID}`, this.expiredTime);
        // 设置eid
        storage._setItem('thirdparty.usernameEid', claims.samaccount_name);
        // 设置用户信息
        this.authData.userName = claims['UserInfo']['Email'];
        storage._setItem('UserInfo', claims['UserInfo']);
        sessionStorage.setItem('thirdparty.email', claims.email);
        // 设置请求头
        // this.headertoken = claims['headertoken'];
    }
    // 解析token
    resolveToken(token) { // 解析token, set token, expired, userInfo
        // 第一步，存储token
        this.token = this.token ? this.token : token;
        storage._setItem(`${this.TOKENKEY}${this.clientID}`, token);
        // 第二步，解析token
        let claims = JWT(token);
        console.log(claims);
        this.handleAuthentication(claims);
        this.updateDataFromCache(); // 初始化数据
    }
    getNow() {
        return Math.round(new Date().getTime() / 1000.0);
    }

    initStorageSource() {
        // 第一步 将token解析存储到session
        this.resolveToken(this.token);
        const interval = window.setInterval(() => {
            console.log(this.getNow());
            if (this.expiredTime < (this.getNow() + parseInt('120'))) {
                // 跳转到login页, 清除session
                storage._clear();
                this.router.navigate(['/login']);
                clearInterval(interval);
            }
        }, 5000);
    }
    updateDataFromCache() { // 闭环了！！！
        this.token = this.token ? this.token : this.getCacheToken(this.clientID);
        this.authData.isAuthenticated = this.token != null && this.token.length > 0;
        if (this.authData.isAuthenticated) {
          this.initStorageSource();
          // 初始化init数据接口，跳转到this.startURL
        } else { // 没有token，判断this.startURL是否属于白名单
          if (this.whiteUrList.includes(this.startURL)) {
            this.router.navigate([this.startURL]);
          } else { // 没有权限，并且不是白名单，登出 或者 renewToken
            this.logout()
          }
        }
    }
}
