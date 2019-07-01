import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-carousel',
  templateUrl: './bs-carousel.component.html',
  styleUrls: ['./bs-carousel.component.scss']
})
export class BsCarouselComponent implements OnInit {

  noWrapSlides = false;
  showIndicator = true;
  myInterval = 1500;
  activeSlideIndex = 0;
  slideChangeMessage = '';
  constructor() { }

  ngOnInit() {
  }

  logSlideChange(event: number) {
    this.slideChangeMessage = `Slide has been switched: ${event}`;
    console.log(this.slideChangeMessage);
  }
}
