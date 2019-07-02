import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bs-carousel',
  templateUrl: './bs-carousel.component.html',
  styleUrls: ['./bs-carousel.component.scss']
})
export class BsCarouselComponent implements OnInit {

  noWrapSlides = false;
  showIndicator = true;
  myInterval = 2000;
  activeSlideIndex = 1;
  slideChangeMessage = '';
  showFlagNow: number;
  @Input() get showFlag(): number {
      return this.showFlagNow;
  };
  set showFlag(val: number) { // 实现清除计时器了！！！
    this.showFlagNow = val;
    console.log(this.showFlagNow);
    if (this.showFlagNow === 0) {
        this.noWrapSlides = false;
    }
    console.log(this.noWrapSlides);
  }
  constructor() { }

  ngOnInit() {// 实现清除计时器了！！！
    console.log(this.showFlag);
    if (this.showFlag !== 0) {
        this.noWrapSlides = true;
    } else {
        this.noWrapSlides = false;
    }
    console.log(this.noWrapSlides);
  }

  logSlideChange(event: number) {
    console.log(this.showFlag);
    if (this.showFlag !== 0) {// 实现清除计时器了！！！
        this.noWrapSlides = true;
    } else {
        this.noWrapSlides = false;
    }
    this.slideChangeMessage = `Slide has been switched: ${event}`;
    console.log(this.slideChangeMessage);
  }
}
