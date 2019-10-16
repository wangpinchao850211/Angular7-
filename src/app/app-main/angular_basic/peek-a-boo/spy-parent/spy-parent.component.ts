import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/interface/hero';
import { LoggerService } from '../../logger.service';

@Component({
  selector: 'app-spy-parent',
  templateUrl: './spy-parent.component.html',
  styleUrls: ['./spy-parent.component.scss']
})
export class SpyParentComponent implements OnInit {

  addHero: string;
  heroes = HEROES;
  loggers = [];
  constructor(private logger: LoggerService) {
    this.logger.logmsg$.subscribe(msg => {
      // console.log(msg);
      this.loggers = [...this.loggers, msg];
    })
  }

  ngOnInit() {
  }

  addhero() {
    this.heroes.push({
      id: this.heroes[this.heroes.length-1].id + 1,
      name: this.addHero
    });
  }
  resethero() {
    this.heroes = [];
  }

}
