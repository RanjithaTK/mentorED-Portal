import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash-es';
import * as moment from 'moment';
import {MatSnackBar} from '@angular/material/snack-bar';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  nullValidator?: boolean;
}
interface JsonFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}
interface JsonFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  class: string;
  position: string;
  disabled?: boolean;
  options?: JsonFormControlOptions;
  validators: JsonFormValidators;
  numberOfStars?:number;
  errorMessage?:string;
  dependentKey?:string;
  isNumberOnly?: boolean;
  placeHolder?:string;
}
export interface DynamicFormData {
  controls: JsonFormControls[];
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() jsonFormData: any;
  textBoxTypes = ['email', 'number', 'text', 'password', 'search', 'tel', 'secretCode'];
  public myForm: FormGroup = this.fb.group({});
  showForm:boolean = false
  isScreenTouchable: boolean;
  deviceRegexp = /android|iphone|kindle|ipad/i;
  selectedChips: any;
  currentDate = new Date();
  maxDate = new Date(moment(this.currentDate).add(10, "years").format());
  dependedChild: any;
  dependedChildDate: any;
  dependedParent: any;
  dependedParentDate: any;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) { }


  ngOnInit() {
    this.isScreenTouchable = this.deviceRegexp.test(navigator.userAgent)
    this.jsonFormData.controls.find((element: any, index: number) => {
      if(element.type == "select"){
        this.jsonFormData.controls[index].options = _.sortBy(this.jsonFormData.controls[index].options, ['label']);
      }
    });
    setTimeout(() => {
      this.createForm(this.jsonFormData.controls);
      this.showForm = true;
    });
  }

  createForm(controls: JsonFormControls[]) {
    for (const control of controls) {
      const validatorsToAdd = [];
      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'min':
            validatorsToAdd.push(Validators.min(value));
            break;
          case 'max':
            validatorsToAdd.push(Validators.max(value));
            break;
          case 'required':
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'requiredTrue':
            if (value) {
              validatorsToAdd.push(Validators.requiredTrue);
            }
            break;
          case 'email':
            if (value) {
              validatorsToAdd.push(Validators.email);
            }
            break;
          case 'minLength':
            validatorsToAdd.push(Validators.minLength(value));
            break;
          case 'maxLength':
            validatorsToAdd.push(Validators.maxLength(value));
            break;
          case 'pattern':
            validatorsToAdd.push(Validators.pattern(value));
            break;
          case 'nullValidator':
            if (value) {
              validatorsToAdd.push(Validators.nullValidator);
            }
            break;
          default:
            break;
        }
      }
      this.myForm.addControl(
        control.name,
        this.fb.control(
          { value: control.value, disabled: control.disabled || false },
          validatorsToAdd
        )
      );
    }
  }

  compareWith(a:any, b:any) {
    a = _.flatten([a]);
    b = _.flatten([b]);
    return JSON.stringify(a) == JSON.stringify(b);
  }
  
  onSubmit() {
    console.log(this.myForm.value)
    this.isFormValid();
  }
  
  reset() {
    this.myForm.reset();
  }

  isFormValid() {
    return this.myForm.statusChanges;
  }

  hideShowPassword(control:any) {
    control.type = control.type === 'text' ? 'password' : 'text';
    control.showPasswordIcon = true;
  }

  alertToast(){
    this._snackBar.open("Please refer to the on-boarding email for your secret code");
  }

  dateSelected(control:any, date:any) {
    if(control.dependedChild){
      this.dependedChild = control.dependedChild;
      this.dependedChildDate = new Date(date.value);
    } else {
      this.dependedParent = control.dependedParent
      this.dependedParentDate = new Date(date.value);
    }
  }
}
