import { 
  AfterViewInit, 
  Component, 
  OnInit, 
  TemplateRef,
  ViewChild,
  ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-view-container-ref',
  templateUrl: './view-container-ref.component.html',
  styleUrls: ['./view-container-ref.component.scss']
})
export class ViewContainerRefComponent implements OnInit, AfterViewInit {

  @ViewChild('vc', {read: ViewContainerRef}) viewContainer: ViewContainerRef;
  @ViewChild('tpl') tpl: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const tp_view = this.tpl.createEmbeddedView(null);
    this.viewContainer.insert(tp_view);
  }
}
