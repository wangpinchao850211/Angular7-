import { 
  AfterViewInit, 
  Component, 
  OnInit,
  OnChanges, 
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef, 
  ViewRef,
  Input,
  Output,
  EventEmitter} from '@angular/core';

@Component({
  selector: 'app-view-container-ref',
  templateUrl: './view-container-ref.component.html',
  styleUrls: ['./view-container-ref.component.scss']
})
export class ViewContainerRefComponent implements OnInit, AfterViewInit, OnChanges {

  changeRef = '';
  @Input() get changeTemRef() {
    return this.changeRef;
  };

  set changeTemRef(val: string) {
    console.log(val);
    if (val) { // radio 为空值不进行设置
      this.changeRef = val;
    }
  };

  @Output() update: EventEmitter<string>;

  @ViewChild('vc', {read: ViewContainerRef}) viewContainer: ViewContainerRef;
  @ViewChild('tpl', {read: TemplateRef}) tpl: TemplateRef<any>;
  @ViewChild('tp2', {read: TemplateRef}) tp2: TemplateRef<any>;

  view1: ViewRef;
  view2: ViewRef;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // 创建一个内嵌视图并将其驻留在一个视图容器上，返回一个对视图的引用
    this.view1 = this.tpl.createEmbeddedView(null);
    this.view2 = this.tp2.createEmbeddedView(null);
    this.changeRefTemp(); // 插入默认
  }

  ngAfterViewChecked() {
  }

  changeRefTemp() {
    this.viewContainer.detach();
    if (this.changeRef === 'Y') {
      this.viewContainer.insert(this.view1); // 插入默认
    } else {
      this.viewContainer.insert(this.view2);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(this.viewContainer.element.nativeElement.contains(this.view2['rootNodes'][0].target));
    // console.log(this.viewContainer.element.nativeElement.contains(this.tp2.elementRef.nativeElement)); 
    // 判断viewContainer是否包括某些template节点: 注意viewContainer是被替换，是个空节点，无法判断永远返回false
    // console.log(this.viewContainer.indexOf(this.view2)); // 最后使用这个判断，为-1就是没有，否则就返回具体的位置
    console.log(this.tp2.elementRef);
    console.log(changes);
    if (!changes.changeTemRef.firstChange) { // 保证第一次不执行相应操作
      this.changeRefTemp(); // 动态插入不同的TemplateRef
    }
  }

  emitParent(e) {
    console.log(e);
  }
}
