import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bs-pagination',
  templateUrl: './bs-pagination.component.html',
  styleUrls: ['./bs-pagination.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BsPaginationComponent implements OnInit {

  public showBoundaryLinks = true;
  totalItems: number = 64;
  currentPage: number = 4;
  smallnumPages: number = 0;
  constructor() { }

  ngOnInit() {
  }
  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

}
