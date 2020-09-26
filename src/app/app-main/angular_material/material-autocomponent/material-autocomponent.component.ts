import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  console.log(opt);
  console.log(value);

  const filterValue = value.toLowerCase();
  console.log(opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0));

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-material-autocomponent',
  templateUrl: './material-autocomponent.component.html',
  styleUrls: ['./material-autocomponent.component.scss']
})
export class MaterialAutocomponentComponent implements OnInit {

  public www: boolean = true;
  OneStateForm: FormGroup = this._formBuilder.group({
    myControl: '',
  });

  // myControl = new FormControl();

  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [{
    letter: 'A',
    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
  }, {
    letter: 'C',
    names: ['California', 'Colorado', 'Connecticut']
  }, {
    letter: 'D',
    names: ['Delaware']
  }, {
    letter: 'F',
    names: ['Florida']
  }, {
    letter: 'G',
    names: ['Georgia']
  }, {
    letter: 'H',
    names: ['Hawaii']
  }, {
    letter: 'I',
    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  }, {
    letter: 'K',
    names: ['Kansas', 'Kentucky']
  }, {
    letter: 'L',
    names: ['Louisiana']
  }, {
    letter: 'M',
    names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana']
  }, {
    letter: 'N',
    names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
      'New Mexico', 'New York', 'North Carolina', 'North Dakota']
  }, {
    letter: 'O',
    names: ['Ohio', 'Oklahoma', 'Oregon']
  }, {
    letter: 'P',
    names: ['Pennsylvania']
  }, {
    letter: 'R',
    names: ['Rhode Island']
  }, {
    letter: 'S',
    names: ['South Carolina', 'South Dakota']
  }, {
    letter: 'T',
    names: ['Tennessee', 'Texas']
  }, {
    letter: 'U',
    names: ['Utah']
  }, {
    letter: 'V',
    names: ['Vermont', 'Virginia']
  }, {
    letter: 'W',
    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  }];

  stateGroupOptions: Observable<StateGroup[]>;
  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.filteredOptions = this.OneStateForm.get('myControl')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );
  }
  private _filter(value: string): string[] {
    console.log(value);
    if (value) {
      const filterValue = value.toLowerCase();
      console.log(filterValue);
      console.log(this.options.filter(option => option.toLowerCase().includes(filterValue)));
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    return this.options;
  }
  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }
    return this.stateGroups;
  }

  displayUser(user: { letter: string;names:[]}) { // 重点
    console.log(user);
    return user ? user.names : '';
  }
  selectPat(ev) {
    console.log(ev);
    console.log('下拉选择');
  }

}
