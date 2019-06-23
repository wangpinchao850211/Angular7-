import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-marterial-dialog',
  templateUrl: './marterial-dialog.component.html',
  styleUrls: ['./marterial-dialog.component.sass']
})
export class MarterialDialogComponent implements OnInit {

  config: {
		Title: '',
	   Content: '',
	   buttons: '',
	   titleIcon: '',
	   changeColor: ''
	};

	isTitle: boolean = false;
	isIcon: boolean = false;

	constructor(
		public dialogRef: MatDialogRef<MarterialDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) { this.config = data; }

	public ngOnInit() {
		if(this.config.Title && this.config.Title != null && this.config.Title != "")
		{
			this.isTitle = true;
		}
		if(this.config.titleIcon && this.config.titleIcon != null && this.config.titleIcon != "")
		{
			this.isIcon = true;
		}
  }

	ngOnDestroy() { }
	onNoClick(): void {
		this.dialogRef.close();
	}
}
