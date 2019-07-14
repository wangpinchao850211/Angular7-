import { Component, HostListener } from '@angular/core';
import { RemserviceService } from 'src/app/services/remservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My First Angular App!';
  constructor(private remS: RemserviceService) {
    if (sessionStorage.getItem('rem') === 'true') {
      this.remS.showrem = true;
    } else {
      this.remS.showrem = false;
    }
  }

}
