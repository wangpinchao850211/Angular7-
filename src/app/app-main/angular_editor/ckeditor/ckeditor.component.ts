import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
// import * as ClassicEditor from '../ckeditor.js';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as _ from 'lodash';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent implements OnInit, OnDestroy {

  @ViewChild( 'editor' ) editorComponent;
  public Editor = ClassicEditor;
  public ckeditorInstance;
  public model = {
    editorData: '<p>Hello, world!</p>',
    showEditer: false, // 标识是否显示隐藏
    Width: 'auto'
  };
  public sourceData: null;
  public isDisabled = false; // 控制编辑器只读状态
  config = {
      toolbar: [ 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ]
  };

  constructor() {
    
  }

  ngOnInit() {
    this.sourceData = _.cloneDeep(this.model); // 存储一下数据，取消时可以恢复
  }

  public onReady( editor ) {
    console.log(editor);
    // editor.ui.getEditableElement().parentElement.insertBefore(
    //     editor.ui.view.toolbar.element,
    //     editor.ui.getEditableElement()
    // );

    console.log(this.editorComponent.editorInstance); // 编辑器实例，与上面的editor相同
    this.ckeditorInstance = editor;
    console.log(this.Editor);
  }

  public onChange( { editor } ) {
    const data = editor.getData();
    console.log( data );
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
    console.log(this.ckeditorInstance.getData());
    this.ckeditorInstance.setData('<p>编辑器已被禁用</p>');

  }

  ngOnDestroy() {
    // 编辑器销毁
    // this.ckeditorInstance.destroy()
    // .catch( error => {
    //     console.log( error );
    // } );
  }

  GetContentWidth(value){ // 获取字符长度，可以对着一下与offsetWidth的区别
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "22px graphik-medium";
    return ctx.measureText(value).width -20;
  }
  // 使用js控制span和input切换编辑输入
  modifyContent(input, data) {
    data.editorData = input.value;
    data.Width = this.GetContentWidth(data.editorData);
  }
  TitleEdit(event, data) {
    data.Width = this.GetContentWidth(data.editorData);
    data.showEditer = !data.showEditer;
    event.stopPropagation();
  }
  TitleSave(event, data) {
    data.showEditer = !data.showEditer;
    this.sourceData = _.cloneDeep(this.model); // 更新存储数据，取消时可以恢复
    event.stopPropagation();
  }
  TitleCancel(event) {
    this.model = _.cloneDeep(this.sourceData);
    event.stopPropagation();
  }
}
