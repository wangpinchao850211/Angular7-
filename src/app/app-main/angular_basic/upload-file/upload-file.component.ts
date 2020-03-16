import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  // uploadedFiles: any[] = []; prime-Ng 文件上传

  // ng2-file-upload 官方demo ts
  uploader:FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;

  constructor() {
    this.uploader = new FileUploader({
      url: "http://localhost:3000/api/fileupload",
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      autoUpload: true,
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item) => {
        return new Promise( (resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });

    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = '';

    this.uploader.response.subscribe( res => this.response = res );
  }

  ngOnInit() {
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  // prime-Ng 文件上传
  // onBasicBeforeUpload(event) {
  //   console.log(event);
  // }
  // onUpload(event) {
  //   console.log(event);
  //   for(let file of event.files) {
  //       this.uploadedFiles.push(file);
  //   }
  // }

  // ng2-file-upload 官方demo ts


}
