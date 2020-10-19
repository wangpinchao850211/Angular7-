import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.sass']
})
export class CountDownComponent implements OnInit {

  @Input() startDate = new Date();
  @Input() futureDate: Date;
  private _MS_PER_SECOND = 1000;
  countDown$: Observable<string>;
  constructor() { 
    // 变更storage值，在home组件进行自定义事件的监听
    setTimeout(() => {
      const val = window.localStorage.getItem('watchStorage');
      if (val === 'oldValue') {
        window.localStorage.setItem('watchStorage', 'newValue');
      }
    }, 5000);
  }

  ngOnInit() {
    this.countDown$ = interval(1000).pipe(
      map(elapse => this.diffInSec(this.startDate, this.futureDate) - elapse),
      takeWhile(gap => gap >= 0),
      // tap((val) => console.log(val)),
      map(sec => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor((sec / 3600) % 24),
        minute: Math.floor((sec / 60) % 60),
        second: Math.floor(sec % 60)
      })),
      map(({ day, hour, minute, second }) => `${day}天:${hour}:${minute}:${second}`)
    )
  }

  private diffInSec = (start: Date, future: Date) => {
    const diff = future.getTime() - start.getTime() ;
    return Math.floor(diff / this._MS_PER_SECOND);
  }

}
