import { SafeHtmlPipe } from './piples/safeHtml.pipe'
import { CheckBoxFormatPipe } from './piples/checkBoxValue.pipe'
import { BlankValuePipe } from './piples/blanckValue.pipe'
import { FieldEmptyPipe } from './piples/fieldEmpty.pipe'
import { SupplierCardContentFormatPipe } from './piples/supplier.card.content.format'

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HeaderComponent } from './components/layout/header/header.component'
import { DomHandler } from './components/dialog/domHandler'
import { MultipleDropdownComponent } from '../shared/components/multiple-dropdown/multiple-dropdown.component'
import { ButtonComponent } from './components/button/button.component'
import { CheckboxComponent } from './components/checkbox/checkbox.component'
import { HeaderBarComponent } from './components/layout/header-bar/header-bar.component'
import { OnboardProcessCircleComponent } from './components/onboard-process-circle/onboard-process-circle.componet'
import { SideNavComponent } from './components/layout/side-nav/side-nav.component'
import { NotificationComponent } from './components/notification/notification.component'
import { HistoryComponent } from './components/history/history.component'
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component'
import { PrivacyStatementPoppageComponent } from './components/privacy-statement-poppage/privacy-statement-poppage.component'
import { WpcTooltipComponent } from './components/wpc-tooltip/wpc-tooltip.component'
import { WpcTooltipDirective } from './components/wpc-tooltip/wpc-tooltip-directive.directive';
import { WpcDialogComponent } from './components/wpc-dialog/dialog.component.ts/dialog.component.ts.component';
import { DialogDirective } from './components/wpc-dialog/dialog.directive';
import { WpcMessageComponent } from './components/wpc-message/wpc-message.component';
@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    HeaderBarComponent,
    HeaderComponent,
    SupplierCardContentFormatPipe,
    SafeHtmlPipe,
    CheckBoxFormatPipe,
    BlankValuePipe,
    FieldEmptyPipe,
    MultipleDropdownComponent,
    OnboardProcessCircleComponent,
    SideNavComponent,
    NotificationComponent,
    HistoryComponent,
    ToggleButtonComponent,
    PrivacyStatementPoppageComponent,
    WpcTooltipComponent,
    WpcTooltipDirective,
    WpcDialogComponent,
    DialogDirective,
    WpcMessageComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [
    ButtonComponent, CheckboxComponent,
    HeaderBarComponent, SafeHtmlPipe, 
    MultipleDropdownComponent, OnboardProcessCircleComponent, CheckBoxFormatPipe, SideNavComponent,
    BrowserAnimationsModule, NotificationComponent, HistoryComponent, BlankValuePipe, FieldEmptyPipe, ToggleButtonComponent,
    PrivacyStatementPoppageComponent,
    WpcTooltipComponent,
    // 必须导出指令
    WpcTooltipDirective 
  ],
  entryComponents: [
    WpcDialogComponent,
    WpcMessageComponent // 全局message要再entry里加一下
  ],
  providers: [
    DomHandler
  ]
})
export class SharedModule { }
