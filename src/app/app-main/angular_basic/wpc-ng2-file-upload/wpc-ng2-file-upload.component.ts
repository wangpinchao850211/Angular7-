import { Component, OnInit } from '@angular/core';
import { FileUploader, ParsedResponseHeaders, FileItem, FileLikeObject } from 'ng2-file-upload';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-wpc-ng2-file-upload',
  templateUrl: './wpc-ng2-file-upload.component.html',
  styleUrls: ['./wpc-ng2-file-upload.component.scss']
})
export class WpcNg2FileUploadComponent implements OnInit {

  public uploader: FileUploader;
  constructor(
    private http: HttpServiceService
  ) { }

  ngOnInit() {
    this.uploader = new FileUploader({
      // url: "/api/file/fileupload",
      method: "POST",
      itemAlias: "uploaderfile", // 文件别名
      disableMultipart: true,
      headers: [{name: 'Content-Type', value: 'multipart/form-data'}],
      autoUpload: false, // false 手动上传
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
  successItem(fileItem: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any { // 步骤3
    console.log('wwwwwwwwww');
    console.log(this.uploader.queue);
    console.log(fileItem);
  }
  /**
   * 上传一个文件错误的回调
   * @param item 上传错误的文件
   * @param response 返回的错误
   * @param status 状态码
   * @param headers 返回的错误返回头
   */
  onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any{};

  /**
   * 取消上传一个文件的回调
   * @param item 取消上传的文件
   * @param response 取消的返回信息
   * @param status 状态码
   * @param headers 取消的返回信息的返回头
   */
  onCancelItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any{};

  /**
   * 完成上传一个文件的回调
   * @param item 上传成功的文件
   * @param response 上传成功后服务器的返回
   * @param status 状态码
   * @param headers 上传成功后服务器的返回的返回头
   */
  onCompleteItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any{};

  /**
   * 完成上传所有文件的回调
   */
  onCompleteAll(): any{};

  onProgressAll(progress: number): any {
    // 整体上传文件的进度回调函数
  }
  /**
   * 添加文件之后的回调
   * @param fileItem 添加文件信息
  */
  afterAddingFile(fileItem: FileItem): any { // 步骤1
    console.log('wwwwwwwwww');
    // console.log(this.uploader.queue);
    console.log(fileItem);
  }
  selectFileOnChange(event) { // 步骤2
    console.log(event);
    console.log(this.uploader.queue[this.uploader.queue.length-1]._file.size);
    const fileSize = event[event.length - 1]._file.size;
    console.log(fileSize);
    this.checkFileSize(fileSize);
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

  // 要上传文件之前的回调
  onBeforeUploadItem(fileItem: FileItem): any{};
  // 上传文件的进度（开始上传后调用非常频繁）
  onProgressItem(fileItem: FileItem, progress: any): any{};


  // 添加完所有文件之后的回调
  onAfterAddingAll(fileItems: any): any{
    console.log(fileItems);
  };

  // 添加文件失败的回调
  onWhenAddingFileFailed(failed: FileLikeObject, filter: any, options: any): any{};


  /**
   * this.uploader有个数组类型属性queue，里面是所有选择和拖拽的文件，只要操作这个属性，可以进行文件的上传
   *    与queue的同级属性：
   *                     isUploading：是否正在上传文件中
   *                     progress：所有的上传文件的整体进度
   *                     option：上传文件的配置信息
   *    this.uploader方法详解：
   *            setOptions(options: FileUploaderOptions): void;设置上传文件的配置信息。
                addToQueue(files: File[], options?: FileUploaderOptions, filters?: FilterFunction[] | string): void;手动添加文件到FileUploader的上传队列中。
                removeFromQueue(value: FileItem): void;从FileUploader的上传队列中移除指定文件。
                clearQueue(): void;清除FileUploader上传队列中的所有文件。
                uploadItem(value: FileItem): void;上传指定文件。
                cancelItem(value: FileItem): void;取消指定文件的上传。
                uploadAll(): void;上传FileUploader的上传队列中的所有文件。
                cancelAll(): void;取消FileUploader的上传队列中的所有文件的上传。
                isFile(value: any): boolean;判断是否是文件。
                getIndexOfItem(value: any): number;获取文件在FileUploader上传队列中的位置。
                getNotUploadedItems(): Array<any>;获取FileUploader上传队列中的所有未上传的文件。
                getReadyItems(): Array<any>;获取FileUploader上传队列中的所有准备上传的文件。
                destroy(): void;销毁FileUploader实例。
                onProgressItem()
   * 1、文件上传：this.uploader.queue[0].upload()
   * 2、取消上传：this.uploader.queue[0].cancel()
   * 3、将某个文件从上传队列中移除：this.uploader.queue[0].remove()
   * 4、progress - 上传文件的进度。
        onSuccess(response: string, status: number, headers: ParsedResponseHeaders): any;上传文件成功的回调函数。
        onError(response: string, status: number, headers: ParsedResponseHeaders): any;上传文件错误的回调函数。
        onCancel(response: string, status: number, headers: ParsedResponseHeaders): any;取消上传的回调函数。
        onComplete(response: string, status: number, headers: ParsedResponseHeaders): any;上传文件完成的回调函数。
   */
  uploadFile() {
    console.log(this.uploader.queue[0]._file);
    // 进行node后台请求
    let formdata = new FormData();
    formdata.append('file', this.uploader.queue[0]._file);
    this.http.PostFormDataFileUpload('/api/file/fileupload', formdata)
              .then((res) => {
                console.log(res);
              })
    // this.uploader.queue[0].upload(); // 开始上传
    this.uploader.queue[0].onError = (response: string, status: number, headers: ParsedResponseHeaders) => {
      console.log(response);
      console.log(status);
    }
    this.uploader.queue[0].onComplete = (response: string, status: number, headers: ParsedResponseHeaders) => {
      console.log(response);
      console.log(status);
    }
  }
}

