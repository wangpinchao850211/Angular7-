import { Injectable } from '@angular/core';
import { Hero, HEROES } from '../interface/hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroserviceService {

  constructor() { }
  getHeroes(): Observable<Hero[]> {
    // of() 函数来模拟从服务器返回数据。
    return of(HEROES);
  }
}
