import { Injectable } from '@angular/core'
import { EventEmitter } from '@angular/core'
import { Subject } from 'rxjs'

export enum DialogType {
  question,
  warning,
  alert,
  success,
  sstReject = 'AP SST Reject',
  sstTerminate = 'AP SST Terminated',
  sstApprove = 'AP SST Review Approved',
  qcReject = 'AP QC Reject',
  qcTerminate = 'AP QC Terminated',
  qcApprove = 'AP QC Review Approved',
  replace = 'Replace Email',
  sendInvitation = 'Send Invitation'
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

export class APReivewService {

  requireReviewSource = new Subject<Confirmation>()
  requireReview$ = this.requireReviewSource.asObservable()

  confirm(confirmation: Confirmation) {
    this.requireReviewSource.next(confirmation)
    return this
  }
}

@Injectable()
export class DialogService {
  constructor(
      private confirmationService: ConfirmService,
      private apReviewService: APReivewService
    ) { }

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

  async apSstReject(message: string, options = {title: 'Rejection Input'}): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.apReviewService.confirm({
        dialogType: DialogType.sstReject,
        message,
        options
      })
    })
  }

  async apSstTerminate(message: string, options = {title: 'Termination Input'}): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.apReviewService.confirm({
        dialogType: DialogType.sstTerminate,
        message,
        options
      })
    })
  }

  async apSstApprove(message: string, options = {title: 'Approvement Input'}): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.apReviewService.confirm({
        dialogType: DialogType.sstApprove,
        message,
        options
      })
    })
  }

  async apQcReject(message: string, options = {title: 'Rejection Input'}): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.apReviewService.confirm({
        dialogType: DialogType.qcReject,
        message,
        options
      })
    })
  }

  async apQcTerminate(message: string, options = {title: 'Termination Input'}): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.apReviewService.confirm({
        dialogType: DialogType.qcTerminate,
        message,
        options
      })
    })
  }

  async apQcApprove(message: string, options = {title: 'Approvement Input'}): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.apReviewService.confirm({
        dialogType: DialogType.qcApprove,
        message,
        options
      })
    })
  }

  async replaceEmail(message: string, options = {title: 'Send Invitation'}): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.apReviewService.confirm({
        dialogType: DialogType.replace,
        message,
        options
      })
    })
  }


  async sendInvitation(message: string, options = {title: 'Send Invitation'}): Promise<any> {
    console.log('message-------->',message)
    return new Promise<any>((resolve, reject) => {
      this.apReviewService.confirm({
        dialogType: DialogType.sendInvitation,
        message,
        options
      })
    })
  }
}
