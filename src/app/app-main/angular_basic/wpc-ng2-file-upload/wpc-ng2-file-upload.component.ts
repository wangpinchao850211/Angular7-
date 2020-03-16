import { Component, OnInit } from '@angular/core';
import { FileUploader, ParsedResponseHeaders, FileItem } from 'ng2-file-upload';

@Component({
  selector: 'app-wpc-ng2-file-upload',
  templateUrl: './wpc-ng2-file-upload.component.html',
  styleUrls: ['./wpc-ng2-file-upload.component.scss']
})
export class WpcNg2FileUploadComponent implements OnInit {

  public uploader: FileUploader;
  constructor() { }

  ngOnInit() {
    this.uploader = new FileUploader({
      method: "POST",
      itemAlias: "uploaderfile", // 文件别名
      disableMultipart: true,
      headers: [{name: 'Content-Type', value: 'multipart/form-data'}],
      // autoUpload: false, // false 手动上传
      // allowedFileType: ["application", "image", "xls", "video", "audio", "pdf", "compress", "doc", "ppt"], // 过滤掉非该类型的文件
      // authToken: "上传验证token",
      // maxFileSize: 20, // 最大可上传文件大小
      // removeAfterUpload: false, // 是否在上传完后从队列中移除
      // url: "上传地址",
      // authTokenHeader: "auth验证token的请求头"
    })
    console.log(this.uploader);
    this.uploader.onSuccessItem = this.successItem.bind(this);
    this.uploader.onAfterAddingFile = this.afterAddingFile;
    this.uploader.onBuildItemForm = this.buildItemForm;
  }

  selectFileOnChange(event) {
    console.log(event);
    console.log(this.uploader.queue[this.uploader.queue.length-1]._file.size);
    const fileSize = event[event.length - 1]._file.size;
    console.log(fileSize);
    this.checkFileSize(fileSize);
  }

  checkFileSize(fileSize: number) {
    if (fileSize > 20971520) {
      this.uploader.clearQueue();
      return;
    }
  }

  /**
   * 文件上传成功回调
   * @param fileItem 上传成功的文件信息，FileItem类型
   * @param response 长传成功后服务器的返回信息
   * @param status 状态码
   * @param headers 上传成功后服务器的返回头
   */
  successItem(fileItem: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    console.log('wwwwwwwwww');
    console.log(this.uploader.queue);
    console.log(fileItem);
  }
  /**
   * 添加问价之后的回调
   * @param fileItem 添加文件信息
  */
  afterAddingFile(fileItem: FileItem): any {
    console.log('wwwwwwwwww');
    // console.log(this.uploader.queue);
    console.log(fileItem);
  }
  /**
   * 创建文件之后的回调，大约是在进行实际上传前，这个事件经常用来对form进行处理，用以传递一些文件以外的业务信息
   * @param fileItem
   * @param form formData类型
   */
  buildItemForm(fileItem: FileItem, form: any): any {
    console.log('wwwwwwwwww');
    console.log(this.uploader.queue);
    console.log(fileItem);
    form.append("fileName", fileItem["realFileName"]);
  }

  uploadFile() {
    this.uploader.queue[0].upload(); // 开始上传
    this.uploader.queue[0].onError = (response: string, status: number, headers: ParsedResponseHeaders) => {

    }
    this.uploader.queue[0].onComplete = (response: string, status: number, headers: ParsedResponseHeaders) => {

    }
  }
}

