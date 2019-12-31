import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import * as ClassicEditor from '../ckeditor.js';


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
    editorData: '<p>Hello, world!</p>'
  };
  public isDisabled = false; // 控制编辑器只读状态
  config = {
      toolbar: [ 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ]
  };

  constructor() {
    
  }

  ngOnInit() {

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
    this.ckeditorInstance.destroy()
    .catch( error => {
        console.log( error );
    } );
  }

}
