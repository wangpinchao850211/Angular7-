import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  uploadedFiles: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  onBasicBeforeUpload(event) {
    console.log(event);
  }
  onUpload(event) {
    console.log(event);
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
  }

}
