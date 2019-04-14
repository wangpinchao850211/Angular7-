import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interface/hero';
import { HeroserviceService } from 'src/app/services/heroservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-herodashboard',
  templateUrl: './herodashboard.component.html',
  styleUrls: ['./herodashboard.component.scss']
})
export class HerodashboardComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(
    private heroService: HeroserviceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  gotoHeroDetail(hero) {
    console.log(hero);
    this.router.navigate([`/AngularBasic/heros/detail/${hero.id}`]);
  }

}
