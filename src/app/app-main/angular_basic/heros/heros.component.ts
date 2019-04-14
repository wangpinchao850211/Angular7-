import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  title = 'Tour of Heroes';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPath(str) {
    this.router.navigate([`/AngularBasic/heros/${str}`]);
  }
}
