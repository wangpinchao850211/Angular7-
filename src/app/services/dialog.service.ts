import { Injectable } from '@angular/core'
import { EventEmitter } from '@angular/core'
import { Subject } from 'rxjs'

export enum DialogType {
  question,
  warning,
  alert,
  success
}

export enum ButtonCommand {
  yes,
  no,
  ok,
  cancel,
  close,
  redo,
  proceed
}

export enum ButtonCommands {
  YesNo,
  Ok,
  Close,
  ProceedCancel
}

export interface ButtonItem {
  icon?: string
  label?: string
  action?: Function
  command?: ButtonCommand
  iswhite?: boolean
  clickEvent?: EventEmitter<any>
}

export interface Confirmation {
  dialogType: DialogType
  icon?: string
  header?: string
  message?: string
  key?: string
  options?: any
  buttons?: ButtonItem[]
}

export class ConfirmService {

  requireConfirmationSource = new Subject<Confirmation>()
  requireConfirmation$ = this.requireConfirmationSource.asObservable()

  confirm(confirmation: Confirmation) {
    this.requireConfirmationSource.next(confirmation)
    return this
  }
}

@Injectable()
export class DialogService {
  constructor(private confirmationService: ConfirmService) { }

  async saveConfirm() {
    const dialogType = DialogType.warning

    return new Promise<string>((resolve, reject) => {

      const cancel: ButtonItem = {
        label: 'Cancel',
        iswhite: true,
        action: () => {
          resolve('cancel')
        }
      }

      const discard: ButtonItem = {
        label: 'Discard',
        iswhite: true,
        action: () => {
          resolve('discard')
        }
      }

      const save: ButtonItem = {
        label: 'Save',
        action: () => {
          resolve('save')
        }
      }

      return this.confirmationService.confirm({
        dialogType,
        message: 'You have modified the form. You can save your changes, discard your changes, or cancel to continue editing.',
        header: 'Confirm',
        options: {},
        buttons: [cancel, discard, save]
      })
    })
  }

  async confirm(dialogType: DialogType, message: string, buttons: ButtonItem[], header = 'Confirm', options = {}): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.confirmationService.confirm({
        dialogType,
        message,
        header,
        options,
        buttons
      })
    })
  }

  async fileUploadFialedDialog(message: string, options = {}): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.confirmationService.confirm({
        dialogType: DialogType.warning,
        message,
        header: 'FILE UPLOADING FAILED',
        options,
        buttons: [
          {
            icon: 'close',
            label: 'Close',
            action: () => {
              resolve(ButtonCommand.close)
            }
          },
          {
            icon: 'autorenew',
            label: 'Re-upload',
            action: () => {
              resolve(ButtonCommand.redo)
            }
          }
        ]
      })
    })
  }

  async dialog(message: string, command: ButtonCommands, dialogType = DialogType.alert, header = 'Confirm', options = {}): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let btns = []
      switch (command) {
        case ButtonCommands.YesNo:
          btns = [
            {
              iswhite: true,
              icon: 'close',
              label: 'No',
              action: () => {
                resolve(ButtonCommand.no)
              }
            },
            {
              icon: 'check',
              label: 'Yes',
              action: () => {
                resolve(ButtonCommand.yes)
              }
            }
          ]
          break
        case ButtonCommands.ProceedCancel:
          btns = [
            {
              iswhite: true,
              icon: 'close',
              label: 'Cancel',
              action: () => {
                resolve(ButtonCommand.no)
              }
            },
            {
              icon: 'check',
              label: 'Proceed',
              action: () => {
                resolve(ButtonCommand.yes)
              }
            }
          ]
          break
        case ButtonCommands.Ok:
          btns = [
            {
              icon: 'check',
              label: 'Ok',
              action: () => {
                resolve(ButtonCommand.ok)
              }
            }
          ]
          break
        case ButtonCommands.Close:
          btns = [
            {
              iswhite: true,
              icon: 'close',
              label: 'Close',
              action: () => {
                resolve(ButtonCommand.close)
              }
            }
          ]
          break
      }

      this.confirmationService.confirm({
        dialogType: dialogType,
        message,
        header,
        options,
        buttons: btns
      })
    })
  }
}
