import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { StarField } from '../../utils/star';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

    id = 'E8931234-KS235821-LO00998811-NM87876654';

    constructor(private router: Router) { }

    ngOnInit() {}

    ngAfterViewInit() {
        const starField = new StarField('fullScreen').render(333, 3);
    }

    login() {
        this.router.navigate(['/pages/home']);
    }

}
