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
    
    loginCompleted: EventEmitter<any> = new EventEmitter()
    
    constructor(
    ) {
    }
}
