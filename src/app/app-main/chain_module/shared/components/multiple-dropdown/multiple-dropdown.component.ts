import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild } from '@angular/core'
import {CheckNoValue as multipleNoValue} from '../../shared'
@Component({
  selector: 'app-multiple-dropdown',
  templateUrl: './multiple-dropdown.component.html',
  styleUrls: ['./multiple-dropdown.component.sass']
})
export class MultipleDropdownComponent implements OnInit {

  @Input() isMultiple = true
  @Input() valueMember = 'Code'
  @Input() displayMember = 'Text'
  @Input() dataSource: any[] = []
  @Input() selectedKeys: string[] = []
  @Input() width: string
  @Input() isEmptyChoice: boolean
  @Output() saveSectionEvent = new EventEmitter()

  searchText: string
  selectedItems: any[] = []
  selectedText: string
  showPanel = false
  emitValue: any = []
  @ViewChild('dropPanel') dropPanel: ElementRef

  constructor() { }

  ngOnInit() {
    if (this.dataSource) {
      this.dataSource.forEach(kv => {
        kv.checked = false,
        kv.disabled = false
      })
    }
    // this.dataSource = [{'Key': 'k1', 'Value': 'Test'}, {'Key': 'k2', 'Value': 'Test2'}
    //   , {'Key': 'k3', 'Value': 'Test3'}, {'Key': 'k4', 'Value': 'Test4'}, {'Key': 'k5', 'Value': 'Test5'}]

    // this.selectedKeys = ['k2', 'k4']

    this.selectedItems = []
    if (this.selectedKeys) {
      this.dataSource.forEach(kv => {
          if (this.selectedKeys.includes(kv[this.valueMember])) {
            this.selectedItems.push(kv)
          }
      })
      this.selectedKeys.forEach(kv => {
        if (this.checkSelectedValue(kv)) {
          this.dataSource.forEach(v => {
            if (v.Code !== kv) {
              v.disabled = true
            }
          })
        } else {
          this.dataSource.forEach(v => {
            if (this.checkNoValue(v)) {
              v.disabled = true
            }
          })
        }
      })
    }
    this.setValue()
  }

  swapPanel() {
    this.showPanel = !this.showPanel
    this.searchText = ''
  }

  get bind(): any[] {
    let list
    if (this.selectedKeys) {
      this.dataSource.forEach(kv => {
          kv.checked = this.selectedKeys.includes(kv[this.valueMember])
      })
    }
    if (this.isEmptyChoice) {
      this.dataSource.forEach(kv => {
        kv.checked = false
      })
    }
    if (this.searchText) {
      list = this.dataSource.filter(kv => kv[this.displayMember].indexOf(this.searchText) >= 0)
    } else {
      list = this.dataSource
    }
    return list
  }

  get selectedValue() {
    if (this.isEmptyChoice) {
      this.selectedText = ''
    }
    return this.selectedText
  }

  checkedChanged(event, kv: any) {
    kv.checked = !kv.checked
    if (this.checkNoValue(kv)) {
      this.dataSource.forEach(v => {
        if (v.Text !== kv.Text) {
          v.disabled = !v.disabled
        }
      })
    } else {
      this.changeNoAvailable(kv)
    }
    if (kv.checked && !this.isMultiple) {
      this.dataSource.forEach(data => { data.checked = data[this.valueMember] === kv[this.valueMember] })
    }
    this.selectedKeys = []
    this.selectedItems = []
    this.dataSource.forEach(data => {
      if (data.checked) {
        this.selectedKeys.push(data[this.valueMember])
        this.selectedItems.push(data)
      }
     })
     this.setValue()
    // console.log('jjiabin.pei02', this.selectedKeys)
    if (this.dataSource) {
      this.emitValue = []
      this.dataSource.map(v => {
        if (v.checked) {
          this.emitValue.push(v.Text)
        }
        return v
      })
    }
     this.saveSectionEvent.emit(this.emitValue)
  }

  checkNoValue(kv) {
    return kv.Text === multipleNoValue.NotApplicable
            || kv.Text === multipleNoValue.DontKnow
            || kv.Text === multipleNoValue.NO
            || kv.Text === multipleNoValue.No
            || kv.Text === multipleNoValue.NotSureNote
  }

  checkSelectedValue(v) {
    return v === multipleNoValue.NotApplicable
            || v === multipleNoValue.DontKnow
            || v === multipleNoValue.NO
            || v === multipleNoValue.No
            || v === multipleNoValue.NotSureNote
  }

  changeNoAvailable(kv) {
    if (kv.checked) {
      this.dataSource.forEach(v => {
        if (this.checkNoValue(v)) {
          v.disabled = true
        }
      })
    } else if (!kv.checked && this.selectedItems.length === 1) {
      this.dataSource.forEach(v => {
        if (this.checkNoValue(v)) {
          v.disabled = false
        }
      })
    }
  }

  selectSingle(kv: any) {
    this.selectedItems = [kv]
    this.selectedKeys = [kv[this.valueMember]]
    this.setValue()
    this.showPanel = false
  }

  setValue() {
    this.emitValue =  this.emitValue.map(e => {
      if (e !== this.selectedItems) {
        this.emitValue.push(this.selectedItems)
      }
    })
    this.selectedText = this.selectedItems.map(kv => kv[this.displayMember]).join(', ')
  }

  @HostListener('document:click', ['$event'])
  documentClick(evt) {
    if (this.dropPanel.nativeElement.contains(event.target)) {
      return
    }
    this.showPanel = false
  }
}
