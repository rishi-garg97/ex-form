import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ValidationServiceService } from "./validation-service.service";
import { HttpClient } from "@angular/common/http";
var JsonFormComponent = /** @class */ (function () {
    function JsonFormComponent(validationService, http) {
        var _this = this;
        this.validationService = validationService;
        this.http = http;
        this.title = "JsonForm";
        this.login = function () {
            console.log(_this.formGroup.value);
        };
        // To Reset all Form Control
        this.reset = function () { return _this.formGroup.reset(); };
        // To enable/disable measure unit field
        this.enable = function (field) {
            _this.validationService.enableUnit(field, _this.formGroup);
        };
        this.schema = this.http.get("./assets/schema.json").toPromise();
    }
    JsonFormComponent.prototype.ngOnInit = function () {
        this.formGroup = this.validationService.buildForm();
    };
    JsonFormComponent.prototype.getEror = function (control) {
        var controls = "controls";
        if (!this.formGroup.get(control.name)[controls].unit.disabled) {
            return this.validationService.getErrorMessage(this.formGroup.get(control.name)[controls].unit);
        }
    };
    JsonFormComponent.prototype.getError = function (control) {
        if (this.formGroup.get(control.name) instanceof FormGroup) {
            var controls = "controls";
            return this.validationService.getErrorMessage(this.formGroup.get(control.name)[controls].in);
        }
        return this.validationService.getErrorMessage(this.formGroup.get(control.name));
    };
    JsonFormComponent = tslib_1.__decorate([
        Component({
            selector: "app-json-form",
            template: "<div class=\"jumbotron\">\n\n      <form [formGroup]=\"formGroup\" (ngSubmit)=\"login()\" class=\"form\">\n\n\n              <h5>Create Protocol</h5>\n\n              <ng-container *ngFor=\"let property of schema;let i=index;\">\n\n                    <!--Form field for text input  -->\n                     <div class=\"form-group\" *ngIf=\"property.dataType=='String'\">\n\n                         <mat-form-field hintLabel=\"Max {{property.maxLength}} character\"\n                                         appearance=\"outline\">\n\n                                <mat-label>{{property.alias}}\n                                  <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                </mat-label>\n\n                                <input matInput #input\n                                       formControlName={{property.name}}\n                                       maxLength={{property.maxLength}}\n                                       minLength=\"{{property.minLength}}\"\n                                       placeholder={{property.alias}} type=\"text\">\n\n                                <mat-hint align=\"end\">{{input.value.length}}/{{property.maxLength}}</mat-hint>\n\n                                <!-- <mat-error *ngIf=\"property.name + '.invalid'\">{{getError(property)}}</mat-error> -->\n                                <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                         </mat-form-field>\n\n                     </div>\n\n                    <!--Form field for number input  -->\n\n                    <div class=\"form-group\" *ngIf=\"property.dataType=='Number'\" style=\"margin-bottom:0px;\">\n\n                          <mat-form-field appearance=\"outline\">\n\n                                <mat-label>{{property.alias}}\n                                    <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                </mat-label>\n\n                                <input matInput min={{property.min}}\n                                       max={{property.max}}\n                                       formControlName={{property.name}}\n                                       type={{property.dataType|lowercase}}\n                                       placeholder={{property.alias}}>\n\n                                <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                          </mat-form-field>\n\n                    </div>\n\n                    <!--Form field for enumeration with multiselect -->\n\n                    <div class=\"form-group\" *ngIf=\"property.dataType=='Enumeration'&& property.array==true\" style=\"margin-bottom:0px;\">\n\n                          <mat-form-field appearance=\"outline\">\n\n                                 <mat-label>{{property.alias}}\n                                        <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                 </mat-label>\n\n                                 <mat-select formControlName={{property.name}} multiple>\n                                        <mat-option *ngFor=\"let opt of property.values\"\n                                                    [value]=\"opt\">{{opt}}\n                                        </mat-option>\n                                 </mat-select>\n\n                                 <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                          </mat-form-field>\n\n                    </div>\n\n                    <!--Form field for text enumeration with single selection  -->\n\n                    <div class=\"form-group\" *ngIf=\"property.dataType=='Enumeration'&& property.array==false\" style=\"margin-bottom:0px;\">\n\n                                 <mat-form-field appearance=\"outline\">\n\n                                        <mat-label>{{property.alias}}\n                                                  <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                        </mat-label>\n\n                                        <mat-select formControlName={{property.name}}>\n                                                  <mat-option>Select</mat-option>\n                                                  <mat-option *ngFor=\"let opt of property.values\"\n                                                              [value]=\"opt\">{{opt}}\n                                                  </mat-option>\n                                        </mat-select>\n\n                                        <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                                 </mat-form-field>\n\n                    </div>\n\n                    <!--Form field for Measure Datatype  -->\n\n                    <div class=\"row form-group\" *ngIf=\"property.dataType=='Measure'\" [formGroupName]=\"property.name\" style=\"margin-bottom:0px;\">\n\n                          <div class=\"col-md-6\">\n\n                                   <mat-form-field appearance=\"outline\">\n\n                                           <mat-label>{{property.alias}}\n                                                      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                           </mat-label>\n\n                                           <input matInput formControlName=\"in\"\n                                                  placeholder={{property.alias}}\n                                                  type=\"number\"\n                                                  (keyup)=\"enable(property)\"\n                                                  (focus)=\"enable(property)\" >\n\n                                   <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                                   </mat-form-field>\n                          </div>\n\n                           <div class=\"col-md-6\">\n\n                                    <mat-form-field appearance=\"outline\">\n\n                                            <mat-label>Unit\n                                                   <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                            </mat-label>\n\n                                            <mat-select formControlName=\"unit\">\n                                                   <mat-option>Select</mat-option>\n                                                   <mat-option *ngFor=\"let opt of property.units\" [value]=\"opt\">\n                                                   {{opt}}\n                                                   </mat-option>\n                                            </mat-select>\n\n                                            <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getEror(property)}}</mat-error>\n\n                                    </mat-form-field>\n                           </div>\n                      </div>\n\n\n              </ng-container>\n\n\n              <div>\n\n                     <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n\n              </div>\n\n              <div class=\"btn btn-toolbar\">\n\n                     <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!this.formGroup.valid\">Submit</button>\n                &nbsp; &nbsp;\n                     <button type=\"reset\" class=\"btn btn-primary\">Reset</button>\n\n              </div>\n\n       </form>\n\n</div>\n\n<!--\n    <pre>\n    formGroupForm?.value|json}}\n    </pre> -->\n\n\n\n\n<!--.mat-form-field-flex > .mat-form-field-infix {-->\n<!--padding: 0.35em 0px !important;-->\n<!--}-->\n",
            styles: [".jumbotron{background-color:#f8f9fa;padding:15px;margin-top:56px}.mat-form-field{width:100%}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.asterik{color:red}.form{background:#fff;box-shadow:0 2px 6px 4px rgba(0,0,0,.14);border-radius:15px;margin:0 30%;padding:20px}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ValidationServiceService, HttpClient])
    ], JsonFormComponent);
    return JsonFormComponent;
}());
export { JsonFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9qc29uLWZvcm0vanNvbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUcsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBUWhEO0lBS0UsMkJBQW9CLGlCQUEyQyxFQUFVLElBQWdCO1FBQXpGLGlCQUVDO1FBRm1CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBSnpGLFVBQUssR0FBRyxVQUFVLENBQUM7UUErQmYsVUFBSyxHQUFHO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQTtRQUVELDRCQUE0QjtRQUM1QixVQUFLLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQXRCLENBQXNCLENBQUM7UUFFckMsdUNBQXVDO1FBQ3ZDLFdBQU0sR0FBRyxVQUFDLEtBQUs7WUFDYixLQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFBO1FBcENILElBQUksQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUdFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRWxELENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDN0QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUVoRztJQUNILENBQUM7SUFFRCxvQ0FBUSxHQUFSLFVBQVMsT0FBTztRQUNkLElBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLFNBQVMsRUFBRTtZQUMxRCxJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUM7WUFDNUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM5RjtRQUNELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBOUJNLGlCQUFpQjtRQU43QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6Qiw2MFBBQXlDOztTQUUxQyxDQUFDO2lEQU91Qyx3QkFBd0IsRUFBZ0IsVUFBVTtPQUw5RSxpQkFBaUIsQ0E4QzdCO0lBQUQsd0JBQUM7Q0FBQSxBQTlDRCxJQThDQztTQTlDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyAgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlU2VydmljZX0gZnJvbSBcIi4vdmFsaWRhdGlvbi1zZXJ2aWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtanNvbi1mb3JtXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vanNvbi1mb3JtLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9qc29uLWZvcm0uY29tcG9uZW50LmNzc1wiXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBKc29uRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlID0gXCJKc29uRm9ybVwiO1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgc2NoZW1hOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2VTZXJ2aWNlLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICB0aGlzLnNjaGVtYSAgPSB0aGlzLmh0dHAuZ2V0KFwiLi9hc3NldHMvc2NoZW1hLmpzb25cIikudG9Qcm9taXNlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuXG4gICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmJ1aWxkRm9ybSgpO1xuXG4gICAgICB9XG5cbiAgICAgIGdldEVyb3IoY29udHJvbCkge1xuICAgICAgICBjb25zdCBjb250cm9scyA9IFwiY29udHJvbHNcIjtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm1Hcm91cC5nZXQoY29udHJvbC5uYW1lKVtjb250cm9sc10udW5pdC5kaXNhYmxlZCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmdldEVycm9yTWVzc2FnZSh0aGlzLmZvcm1Hcm91cC5nZXQoY29udHJvbC5uYW1lKVtjb250cm9sc10udW5pdCk7XG5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBnZXRFcnJvcihjb250cm9sKSB7XG4gICAgICAgIGlmICggdGhpcy5mb3JtR3JvdXAuZ2V0KGNvbnRyb2wubmFtZSkgaW5zdGFuY2VvZiBGb3JtR3JvdXApIHtcbiAgICAgICAgICBjb25zdCBjb250cm9scyA9IFwiY29udHJvbHNcIjtcbiAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5nZXRFcnJvck1lc3NhZ2UodGhpcy5mb3JtR3JvdXAuZ2V0KGNvbnRyb2wubmFtZSlbY29udHJvbHNdLmluKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5nZXRFcnJvck1lc3NhZ2UodGhpcy5mb3JtR3JvdXAuZ2V0KGNvbnRyb2wubmFtZSkpO1xuICAgICAgfVxuXG4gICAgICBsb2dpbiA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtR3JvdXAudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICAvLyBUbyBSZXNldCBhbGwgRm9ybSBDb250cm9sXG4gICAgICByZXNldCA9ICgpID0+IHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG5cbiAgICAgIC8vIFRvIGVuYWJsZS9kaXNhYmxlIG1lYXN1cmUgdW5pdCBmaWVsZFxuICAgICAgZW5hYmxlID0gKGZpZWxkKSA9PiB7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvblNlcnZpY2UuZW5hYmxlVW5pdChmaWVsZCwgdGhpcy5mb3JtR3JvdXApO1xuICAgICAgfVxuXG5cblxufVxuIl19