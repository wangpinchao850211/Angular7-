import { Component, OnInit, Input } from '@angular/core'
import { OnBoardingStatus } from 'src/app/interface/supplier'

@Component({
  selector: 'app-onboard-process-circle',
  templateUrl: './onboard-process-circle.componet.html',
  styleUrls: ['./onboard-process-circle.componet.sass']
})
export class OnboardProcessCircleComponent implements OnInit {
  @Input() circleStep: any
  @Input() isLast = false
  eStatus = OnBoardingStatus

  constructor() { }

  ngOnInit() {

  }
}
