import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
// import { UploadXHRArgs } from 'ng-zorro-antd/upload';
import { NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import { forkJoin } from 'rxjs';
import { FileUploader } from 'ng2-file-upload';
import { HttpServiceService } from '../../../services/http-service.service';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';

export const errFileType = (fileName: string, regexp: string): boolean => {
	if (fileName.lastIndexOf(".") != -1) {
		const fileType = (fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length)).toLowerCase();
		return !regexp.includes(fileType);
	} else {
		return false;
	}
}

interface UpItem {
	name: string;
	src: string;
	progress: number;
	group: string;
	checked: boolean;
}

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit, AfterViewInit, OnDestroy {

  uploadedFiles: any[] = []; // prime-Ng 文件上传

  // ng2-file-upload 官方demo ts
  uploader:FileUploader;
  uploaderArray: FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;

  // pic - upload
  @ViewChild('fileForm') fileForm: ElementRef;
  upList: Array<UpItem> = [];
  curGroup: string = '';
  get showList(): Array<UpItem> {
		return (this.curGroup === '' || this.curGroup === '-1') ? this.upList : this.upList.filter(e => e.group === this.curGroup);
	}

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
  ngOnInit() {}
  ngAfterViewInit() {
    this.uploadListen();
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

  // ------------------------------------- basic start file upload ---------------------------------------------------
	uploadListen() {
		const { nativeElement: f } = this.fileForm;
		f.addEventListener('change', (ev) => {
			let files = ev.target.files;
			if (files.length > 5) { // check
				ev.target.value = null;
				return;
			}
			let upSize = false, errType = false;
			for (let i = 0; i < files.length; i++) {
				if (files[i].size > 3120000) { upSize  = true; break; }
				if (errFileType(files[i].name, 'jpg|jpeg|png|bmp|gif')) { errType = true; break; }
			}
			if (upSize || errType) {
				ev.target.value = null;
				return;
			}
			this.uploadPic(files);
			ev.target.value = null;
		});
	}

	uploadPic(files: FileList) {
		for (let i = 0; i < files.length; i++) {
			const formData = new FormData();
			formData.append('file', files[i]);
			const f: UpItem = { name: files[i].name, src: '', progress: 0, group: this.curGroup, checked: false };
			this.upList.push(f);
      // formData.append('file', files[i] as any);
      const req = new HttpRequest('POST', 'http://localhost:3000/api/upload', formData, {
        reportProgress: true,
        // withCredentials: true, 1、注释调这个解决跨域报错问题
        headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
      });
      // console.log(req);
      this.antHttp.request(req).subscribe(ev => {
        console.log(ev);
				if (ev.type === HttpEventType.UploadProgress) {
					f.progress = Math.round(100 * ev.loaded / ev.total);
				} else if (ev.type === HttpEventType.DownloadProgress) {

				} else if (ev.type === HttpEventType.Sent) {

				} else if (ev.type === HttpEventType.User) {

				} else if (ev.type === HttpEventType.ResponseHeader) {

				} else if (ev instanceof HttpResponse) {
					f.progress = 100;
					setTimeout(() => { f.progress += 1; }, 800);
					if (ev.ok) {
						// f.src = `${ environment.host }${ ev.body['fileUrl'] }`;
					}
				}
			});
		}
	}

	clickInputFile() {
		this.fileForm.nativeElement.click();
	}
	// ------------------------------------- file upload end------------------------------------------------
}
