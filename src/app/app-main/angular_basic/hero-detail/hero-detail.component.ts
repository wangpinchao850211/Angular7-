import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/interface/hero';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroserviceService } from 'src/app/services/heroservice.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private heroService: HeroserviceService,
    private router: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    console.log(this.hero);
    console.log(this.router.snapshot.paramMap.get('id'));
    if (!this.hero) {
      // this.hero = this.router.queryParams
    }
    this.getHero();
  }

  getHero(): void {
    const id = +this.router.snapshot.paramMap.get('id');
    this.heroService.getHeroes(id)
      .subscribe(h => {
        console.log(h);
        this.hero = h[0];
      });
  }
  goBack() {
    this.location.back();
  }
}
