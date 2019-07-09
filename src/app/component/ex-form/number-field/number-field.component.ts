import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormBuildingService} from "../form-building.service";
import {Validators} from "@angular/forms";
import {ValidationMessageGenerator} from "../validators/validation-message-generator";
import {RequiredValidator} from "../validators/required-validator";
import {MaxValueValidator} from "../validators/max-value-validator";
import {MinValueValidator} from "../validators/min-value-validator";
@Component({
  selector: "app-number-field",
  templateUrl: "./number-field.component.html",
  styleUrls: ["./number-field.component.css"]
})
export class NumberFieldComponent implements OnInit {
  @Input() formGroup;
  @Input() formFieldControl;
  @Input() property;
  @Output() changeEvent = new EventEmitter();

  constructor(private formService: FormBuildingService) { }

  ngOnInit() {

     this.addValidator();

  }

  //
  // ngAfterViewInit() {
  //
  //   setTimeout(() => {
  //     this.addValidator();
  //
  //   }, 100);
  // }
  addValidator = () => {

        const validators = [];
        if (this.property.required) {
          validators.push(new RequiredValidator().get());
        }
        if (this.property.max && this.property.max != null ) {
          validators.push(new MaxValueValidator().get(this.property.max));
        }
        if (this.property.max && this.property.min != null ) {
          validators.push(new MinValueValidator().get(this.property.min));
        }
        this.formGroup.controls[this.property.name].setValidators(validators);
  }


  getError = () => {
   return ValidationMessageGenerator.errorMessage(this.formGroup, this.property);
  }

  fieldValueChanged = () => {
    this.changeEvent.emit(this.formFieldControl.value);
  }

}
