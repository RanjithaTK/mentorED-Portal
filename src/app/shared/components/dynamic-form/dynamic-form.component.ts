import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash-es';
import * as moment from 'moment';

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
  required?: boolean;
  disabled?: boolean;
  options?: JsonFormControlOptions;
  validators: JsonFormValidators;
  numberOfStars?:number;
  errorMessage?:string;
  dependentKey?:string;
  isNumberOnly?: boolean;
  alertLabel?: string;
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
  textBoxTypes = ['email', 'number', 'text', 'password', 'search', 'tel', 'date', 'time', 'url'];
  public myForm: FormGroup = this.fb.group({});
  showForm:boolean = false

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.jsonFormData.controls.find((element: any, index: number) => {
      if(element.type == "select"){
        console.log(element, index);
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

}
