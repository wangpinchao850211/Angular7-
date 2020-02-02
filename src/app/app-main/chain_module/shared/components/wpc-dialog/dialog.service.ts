import { Injectable, Inject, Type } from '@angular/core';
import { DomService, ChildConfig } from './dom.service';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private readonly dialogElementId = 'dialog-container';
  private readonly overlayElementId = 'overlay';
  // BehaviorSubject用于储存数据，特点能够保存最新一次的数据
  private data$ = new BehaviorSubject<object | null>(null);

  constructor(
    private domService: DomService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  open(component: Type<any>, config: ChildConfig) {
    this.domService.appendComponentTo(this.dialogElementId, component, config);
    // 设置样式
    if (config.position) {
      const element = this.document.getElementById(this.dialogElementId);
      element.style.width = config.position.width;
      element.style.height = config.position.height;
      element.style.top = config.position.top;
      element.style.left = config.position.left;
    }
    this.toggleAll();
    this.data$.next(null); // 新打开是清空数据
  }

  close() {
    this.domService.removeComponent();
    this.toggleAll();
  }

  saveData(data: object | null) {
    this.data$.next(data);
  }
  getData() {
    return this.data$.asObservable();
  }

  private toggleAll() {
    this.toggleVisibility(this.document.getElementById(this.dialogElementId));
    this.toggleVisibility(this.document.getElementById(this.overlayElementId));
  }

  private toggleVisibility(element: HTMLElement) {
    if (element.classList.contains('show')) {
      element.classList.remove('show');
      element.classList.add('hidden');
      return;
    }
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
      element.classList.add('show');
    }
  }
}
