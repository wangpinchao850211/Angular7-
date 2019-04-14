import { Injectable } from '@angular/core';
import { Hero, HEROES } from '../interface/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroserviceService {

  constructor(private messageService: MessageService) { }
  getHeroes(id?: number): Observable<Hero[]> {
    if (id) {
      this.messageService.add(`HeroService: fetched heroes id=${id}`);
      // of() 函数来模拟从服务器返回数据。
      const theHero = HEROES.find(hero => hero.id === id);
      console.log(theHero);
      return of([theHero]);
    } else {
      return of(HEROES);
    }
  }
}
