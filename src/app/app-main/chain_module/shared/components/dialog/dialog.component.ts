import { Component, ElementRef, AfterViewInit, OnDestroy, Input, AfterViewChecked, EventEmitter, Renderer2, NgZone } from '@angular/core'
import { Subscription } from 'rxjs'
import { DomHandler } from './domHandler'
import { trigger, state, style } from '@angular/animations'
import { Confirmation, DialogType, ConfirmService, ButtonItem } from 'src/app/services/dialog.service'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass'],
  animations: [
    trigger('dialogState', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
    ])
  ],
})
export class DialogComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
  confirmation: Confirmation
  subscription: Subscription

  @Input() dialogType: DialogType
  @Input() header: string
  @Input() icon: string
  @Input() message: string
  @Input() buttons: ButtonItem[]
  @Input() width: any
  @Input() height: any
  @Input() closeOnEscape = true
  @Input() rtl: boolean
  @Input() closable = true
  @Input() responsive = true
  @Input() appendTo: any
  @Input() key: string

  _visible: boolean
  documentEscapeListener: any
  documentResponsiveListener: any
  mask: any
  contentContainer: any
  positionInitialized: boolean
  executePostShowActions: boolean
  headerIcon: string
  headerIconClass: string

  constructor(public el: ElementRef,
    public domHandler: DomHandler,
    public zone: NgZone,
    public renderer: Renderer2, private confirmService: ConfirmService) {

    this.subscription = confirmService.requireConfirmation$.subscribe(confirmation => {
      if (confirmation.key === this.key) {
        this.confirmation = confirmation
        this.dialogType = this.confirmation.dialogType

        if (this.dialogType === DialogType.alert) {
          this.headerIcon = 'info'
          this.headerIconClass = 'header-icon-warning'
        }

        if (this.dialogType === DialogType.warning) {
          this.headerIcon = 'error'
          this.headerIconClass = 'header-icon-warning'
        }

        if (this.dialogType === DialogType.question) {
          this.headerIcon = 'help'
          this.headerIconClass = 'header-icon-question'
        }
        if (this.dialogType === DialogType.success) {
          this.headerIcon = 'check_circle'
          this.headerIconClass = 'header-icon-success'
        }

        const { headerIcon, headerIconClass } = this.confirmation.options

        this.headerIcon = headerIcon || this.headerIcon
        this.headerIconClass = headerIconClass || this.headerIconClass

        this.message = this.confirmation.message || this.message
        this.icon = this.confirmation.icon || this.icon
        this.header = this.confirmation.header || this.header
        this.buttons = this.confirmation.buttons || this.buttons

        this.buttons.forEach(button => {
          button.clickEvent = new EventEmitter()
          button.clickEvent.subscribe(button.action)
        })

        this.visible = true
      }
    })
  }

  @Input() get visible(): boolean {
    return this._visible
  }

  set visible(val: boolean) {
    this._visible = val

    if (this._visible) {
      if (!this.positionInitialized) {
        this.center()
        this.positionInitialized = true
      }

      this.el.nativeElement.children[0].style.zIndex = ++DomHandler.zindex
      this.bindGlobalListeners()
      this.executePostShowActions = true
    }

    if (this._visible) {
      this.enableModality()
    } else {
      this.disableModality()
    }

  }

  ngAfterViewInit() {
    this.contentContainer = this.domHandler.findSingle(this.el.nativeElement, '.ui-dialog-content')

    if (this.appendTo) {
      if (this.appendTo === 'body') {
        document.body.appendChild(this.el.nativeElement)
      } else {
        this.domHandler.appendChild(this.el.nativeElement, this.appendTo)
      }
    }
  }

  ngAfterViewChecked() {
    if (this.executePostShowActions) {
      this.domHandler.findSingle(this.el.nativeElement.children[0], 'button').focus()
      this.executePostShowActions = false
    }
  }

  center() {
    const container = this.el.nativeElement.children[0]

    let elementWidth = this.domHandler.getOuterWidth(container)
    let elementHeight = this.domHandler.getOuterHeight(container)
    if (elementWidth === 0 && elementHeight === 0) {
      container.style.visibility = 'hidden'
      container.style.display = 'block'
      elementWidth = this.domHandler.getOuterWidth(container)
      elementHeight = this.domHandler.getOuterHeight(container)
      container.style.display = 'none'
      container.style.visibility = 'visible'
    }
    const viewport = this.domHandler.getViewport()
    const x = (viewport.width - elementWidth) / 2
    // Minus 200 px makes the popup window a little higher than current position
    const y = (viewport.height - elementHeight - 200) / 2

    container.style.left = x + 'px'
    container.style.top = y + 'px'
  }

  enableModality() {
    if (!this.mask) {
      this.mask = document.createElement('div')
      this.mask.style.zIndex = this.el.nativeElement.children[0].style.zIndex - 1
      this.domHandler.addMultipleClasses(this.mask, 'ui-widget-overlay ui-dialog-mask')
      // Set mask height position to fix the dialog layout issue when scroll down the page
      this.mask.style.height = document.body.clientHeight + 'px'
      document.body.appendChild(this.mask)
      this.domHandler.addClass(document.body, 'ui-overflow-hidden')
    }
  }

  disableModality() {
    if (this.mask) {
      document.body.removeChild(this.mask)
      this.domHandler.removeClass(document.body, 'ui-overflow-hidden')
      this.mask = null
    }
  }

  close(event: Event) {
    this.hide()
    event.preventDefault()
  }

  hide() {
    this.visible = false
    this.unbindGlobalListeners()
  }

  moveOnTop() {
    this.el.nativeElement.children[0].style.zIndex = ++DomHandler.zindex
  }

  bindGlobalListeners() {
    if (this.closeOnEscape && this.closable && !this.documentEscapeListener) {
      this.documentEscapeListener = this.renderer.listen('document', 'keydown', (event) => {
        if (event.which === 27) {
          if (this.el.nativeElement.children[0].style.zIndex === DomHandler.zindex && this.visible) {
            this.close(event)
          }
        }
      })
    }

    if (this.responsive) {
      this.zone.runOutsideAngular(() => {
        this.documentResponsiveListener = this.center.bind(this)
        window.addEventListener('resize', this.documentResponsiveListener)
      })
    }
  }

  unbindGlobalListeners() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener()
      this.documentEscapeListener = null
    }

    if (this.documentResponsiveListener) {
      window.removeEventListener('resize', this.documentResponsiveListener)
      this.documentResponsiveListener = null
    }
  }

  ngOnDestroy() {
    this.disableModality()

    if (this.documentResponsiveListener) {
      this.documentResponsiveListener()
    }

    if (this.documentEscapeListener) {
      this.documentEscapeListener()
    }

    if (this.appendTo && this.appendTo === 'body') {
      document.body.removeChild(this.el.nativeElement)
    }

    this.subscription.unsubscribe()
  }

  click(button: ButtonItem) {
    if (button.clickEvent) {
      button.clickEvent.emit()
    }

    this.hide()
    this.confirmation = null
  }
}
