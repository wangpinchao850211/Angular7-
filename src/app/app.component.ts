import { Component, HostListener } from '@angular/core';
import { RemserviceService } from 'src/app/services/remservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My First Angular App!';
  theme = false;
  constructor(private remS: RemserviceService) {
    if (sessionStorage.getItem('rem') === 'true') {
      this.remS.showrem = true;
    } else {
      this.remS.showrem = false;
    }
  }

  changeToRed(color: any) {
    this.theme = !this.theme;
    const themeWrapper = document.getElementById('theme-wrapper');
    themeWrapper.style.setProperty('--customBackgroundColor', color); // 自定义设置全局颜色
  }

}
