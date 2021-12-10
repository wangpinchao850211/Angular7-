import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
// import { UploadXHRArgs } from 'ng-zorro-antd/upload';
import { NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import { forkJoin } from 'rxjs';
import { FileUploader } from 'ng2-file-upload';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit, OnDestroy {

  uploadedFiles: any[] = []; // prime-Ng 文件上传

  // ng2-file-upload 官方demo ts
  uploader:FileUploader;
  uploaderArray: FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;

  constructor(
    private http: HttpServiceService,
    private antHttp: HttpClient
  ) {

    this.uploader = this.inituploader("/api/file/fileupload");
    this.uploaderArray = this.inituploader("/api/file/fileuploadArray");

    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = '';
    this.uploader.response.subscribe( res => {
      console.log(res);
      this.response = res
    });
  }

  inituploader(url) {
    return new FileUploader({
      method: "POST",
      url: url,
      // itemAlias: "uploaderfile", // 文件别名
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
      },
      headers: [{name: 'Content-Type', value: 'multipart/form-data'}],
    })
  }
  ngOnInit() {
  }
  ngOnDestroy() {

  }
   // ng2-file-upload 官方demo ts

  public fileOverBase(e:any):void {
    // 拖拽状态改变的回调函数
    this.hasBaseDropZoneOver = e;
  }

  public fileDropOver(e:any):void {
    // 文件拖拽完成的回调函数
    console.log(e);
  }
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
  public fileAnotherDropOver(e:any):void {
    console.log(e);
  }

  // prime-Ng 文件上传：可上传成功
  // onBasicBeforeUpload(event) {
  //   console.log(event);
  // }
  // onUpload(event) {
  //   console.log(event);
  //   for(let file of event.files) {
  //       this.uploadedFiles.push(file);
  //   }
  // }

  // ant-zorro fileUpload 官方demo ts

  handleChange(info: any): void {
    console.log(info);
  }

  customReq = (item: NzUploadXHRArgs) => {
    console.log(item);
    // Create a FormData here to store files and other parameters.
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    formData.append('file', item.file as any);
    const req = new HttpRequest('POST', item.action!, formData, {
      reportProgress: true,
      withCredentials: true,
      headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
    });
    // Always returns a `Subscription` object. nz-upload would automatically unsubscribe it at correct time.
    return this.antHttp.request(req).subscribe(
      // tslint:disable-next-line no-any
      (event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress) {
          if (event.total! > 0) {
            // tslint:disable-next-line:no-any
            (event as any).percent = (event.loaded / event.total!) * 100;
            console.log((event as any).percent);
          }
          item.onProgress!(event, item.file!);
        } else if (event instanceof HttpResponse) {
          item.onSuccess!(event.body, item.file!, event);
        }
      },
      err => {
        item.onError!(err, item.file!);
      }
    );
  };

  // A simple sliced upload. 处理大文件的
  // customBigReq = (item: NzUploadXHRArgs) => {
  //   const size = item.file.size;
  //   const chunkSize = parseInt(size / 3 + '', 10);
  //   const maxChunk = Math.ceil(size / chunkSize);
  //   const reqs = Array(maxChunk)
  //     .fill(0)
  //     .map((_: {}, index: number) => {
  //       const start = index * chunkSize;
  //       let end = start + chunkSize;
  //       if (size - end < 0) {
  //         end = size;
  //       }
  //       const formData = new FormData();
  //       formData.append('file', item.file.slice(start, end));
  //       formData.append('start', start.toString());
  //       formData.append('end', end.toString());
  //       formData.append('index', index.toString());
  //       const req = new HttpRequest('POST', item.action!, formData, {
  //         withCredentials: true
  //       });
  //       return this.http.request(req);
  //     });
  //   return forkJoin(...reqs).subscribe(
  //     () => {
  //       item.onSuccess!({}, item.file!, event);
  //     },
  //     err => {
  //       item.onError!(err, item.file!);
  //     }
  //   );
  // };
}
