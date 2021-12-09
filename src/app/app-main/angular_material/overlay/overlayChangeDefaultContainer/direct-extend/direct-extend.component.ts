import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-direct-extend',
  templateUrl: './direct-extend.component.html',
  styleUrls: ['./direct-extend.component.scss'],
  // providers: [MatSnackBar]
})
export class DirectExtendComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar
    ) { }

  ngOnInit() {
  }

  openSnackBar() {
    this.snackBar.open('MESSAGE', '', {
      duration: 200000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

}
