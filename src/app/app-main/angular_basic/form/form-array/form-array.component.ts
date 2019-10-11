import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  profileForm: FormGroup;

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    console.log(this.fb);
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      aliases: this.fb.array([
        this.fb.control('w'),
        this.fb.control('wp'),
        this.fb.control('wpc'),
        this.fb.control('wpc8'),
        this.fb.control('wpc84'),
        this.fb.control('wpc84@'),
        this.fb.control('wpc84@126.'),
        this.fb.control('wpc84@126.com'),
      ])
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
  arrayChange(val) {
    // 可以获取到值
    console.log(val);
  }

}
