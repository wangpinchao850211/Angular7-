import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-herosmessages',
  templateUrl: './herosmessages.component.html',
  styleUrls: ['./herosmessages.component.scss']
})
export class HerosmessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
