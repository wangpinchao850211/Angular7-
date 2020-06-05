import { Injectable } from '@angular/core'
import * as io from 'socket.io-client'
import { Subject } from 'rxjs'
import { environment } from '../../environments/environment'
import { AuthService, LoginStatus } from './auth/auth.service';

export interface Notification {
  ID?: number
  EventType?: string
  CreatedBy?: string
  CreatedDate?: Date
  CreatedDateStr?: string
  daysBefore?: string
  Params?: any
  Status?: number
  UserType?: string
  UserID?: number
  Message?: string
}

export enum WsTypeEnum {
  NOTIFICATION_UPDATE = 'NotificationEvent'
}

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket
  WSEvent = new Subject<Notification>()
  constructor(private auth: AuthService) {
    this.auth.loginCompleted.subscribe(e => {
      if (e === LoginStatus.Success) {
        this.socket = io(environment.websocketUrl, {
          path: `/${environment.websocketPath}/websocket`
        })
        this.socket.on('connect', () => {
          // console.log('socket io connected')
        })
        this.socket.on('event', (data: any) => {
          // console.log(data)
          // this.socket.emit('event', 'pong')
        })

        // this.socket.emit('event', 'pong')
        this.socket.on('disconnect', () => {
          // console.log('socket io disconnected')
        })
        for (let v of Object.values(WsTypeEnum)) {
          if (v) {
            this.socket.on(v, (data: any) => {
              this.WSEvent.next(data)
            })
          }
        }
      }
    })
    // this.socket.on(NotificationType.PublicInfoUpdated, (data: any) => {
    //   this.WSEvent.next(data)
    // })
  }
}


