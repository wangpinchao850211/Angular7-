import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MatDialogConfig, DialogPosition} from '@angular/material';
import { MarterialDialogComponent } from '../app-main/angular_material/marterial-dialog/marterial-dialog.component';
import { Observable } from 'rxjs';


@Injectable()
export class matDialogConfirmService {

    constructor(
        @Inject(MatDialog) public _confirmDialog: MatDialog,
        @Inject(DOCUMENT) doc: any,
    ) {
        // 打开dialog，body添加no-scroll样式
        _confirmDialog.afterOpen.subscribe((ref: MatDialogRef<any>) => {
            console.log(ref);
        });
        // 关闭dialog，body移除no-scroll样式
        _confirmDialog.afterAllClosed.subscribe(() => {
           
        });
    }

    public confirm(contentOrConfig: any): Observable<any> {
        let config = new MatDialogConfig();
        config = {
            //width: '570px',
            // minWidth: '380px',
            height: '240px',
            disableClose: true,
            backdropClass: 'wpcDialogClass', // 设置背景色
            panelClass: 'wpcPanelClass',
            maxWidth: '80vw',
        };
        config.position = { // 能够设置弹出框定位位置
          left: '200px',
          top: '100px',
        }
        if (contentOrConfig instanceof Object) {
            config.data = contentOrConfig;
        } else if ((typeof contentOrConfig) === 'string') {
            config.data = {
                content: contentOrConfig || '',
            }
        }
        return this._confirmDialog.open(MarterialDialogComponent, config).afterClosed();
    }

    public closeConfirm() {
        this._confirmDialog.closeAll();
    }
}
