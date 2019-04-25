import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.sass']
})
export class TooltipComponent implements OnInit {
    @Input() placement: string
    @Input() text: string
    @Input() maxWidth: string

  constructor() { }

  ngOnInit() {
    this.maxWidth = '100%'
  }
}
