import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ValidationServiceService } from "./validation-service.service";
import { HttpClient } from "@angular/common/http";
let JsonFormComponent = class JsonFormComponent {
    constructor(validationService, http) {
        this.validationService = validationService;
        this.http = http;
        this.title = "JsonForm";
        this.schema = this.http.get(`url:"../../../assets/schema.json"`);
        this.login = () => {
            console.log(this.formGroup.value);
        };
        // To Reset all Form Control
        this.reset = () => this.formGroup.reset();
        // To enable/disable measure unit field
        this.enable = (field) => {
            this.validationService.enableUnit(field, this.formGroup);
        };
    }
    ngOnInit() {
        this.formGroup = this.validationService.buildForm();
    }
    getEror(control) {
        const controls = "controls";
        if (!this.formGroup.get(control.name)[controls].unit.disabled) {
            return this.validationService.getErrorMessage(this.formGroup.get(control.name)[controls].unit);
        }
    }
    getError(control) {
        if (this.formGroup.get(control.name) instanceof FormGroup) {
            const controls = "controls";
            return this.validationService.getErrorMessage(this.formGroup.get(control.name)[controls].in);
        }
        return this.validationService.getErrorMessage(this.formGroup.get(control.name));
    }
};
JsonFormComponent = tslib_1.__decorate([
    Component({
        selector: "app-json-form",
        template: "<div class=\"jumbotron\">\n\n      <form [formGroup]=\"formGroup\" (ngSubmit)=\"login()\" class=\"form\">\n\n\n              <h5>Create Protocol</h5>\n\n              <ng-container *ngFor=\"let property of schema;let i=index;\">\n\n                    <!--Form field for text input  -->\n                     <div class=\"form-group\" *ngIf=\"property.dataType=='String'\">\n\n                         <mat-form-field hintLabel=\"Max {{property.maxLength}} character\"\n                                         appearance=\"outline\">\n\n                                <mat-label>{{property.alias}}\n                                  <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                </mat-label>\n\n                                <input matInput #input\n                                       formControlName={{property.name}}\n                                       maxLength={{property.maxLength}}\n                                       minLength=\"{{property.minLength}}\"\n                                       placeholder={{property.alias}} type=\"text\">\n\n                                <mat-hint align=\"end\">{{input.value.length}}/{{property.maxLength}}</mat-hint>\n\n                                <!-- <mat-error *ngIf=\"property.name + '.invalid'\">{{getError(property)}}</mat-error> -->\n                                <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                         </mat-form-field>\n\n                     </div>\n\n                    <!--Form field for number input  -->\n\n                    <div class=\"form-group\" *ngIf=\"property.dataType=='Number'\" style=\"margin-bottom:0px;\">\n\n                          <mat-form-field appearance=\"outline\">\n\n                                <mat-label>{{property.alias}}\n                                    <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                </mat-label>\n\n                                <input matInput min={{property.min}}\n                                       max={{property.max}}\n                                       formControlName={{property.name}}\n                                       type={{property.dataType|lowercase}}\n                                       placeholder={{property.alias}}>\n\n                                <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                          </mat-form-field>\n\n                    </div>\n\n                    <!--Form field for enumeration with multiselect -->\n\n                    <div class=\"form-group\" *ngIf=\"property.dataType=='Enumeration'&& property.array==true\" style=\"margin-bottom:0px;\">\n\n                          <mat-form-field appearance=\"outline\">\n\n                                 <mat-label>{{property.alias}}\n                                        <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                 </mat-label>\n\n                                 <mat-select formControlName={{property.name}} multiple>\n                                        <mat-option *ngFor=\"let opt of property.values\"\n                                                    [value]=\"opt\">{{opt}}\n                                        </mat-option>\n                                 </mat-select>\n\n                                 <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                          </mat-form-field>\n\n                    </div>\n\n                    <!--Form field for text enumeration with single selection  -->\n\n                    <div class=\"form-group\" *ngIf=\"property.dataType=='Enumeration'&& property.array==false\" style=\"margin-bottom:0px;\">\n\n                                 <mat-form-field appearance=\"outline\">\n\n                                        <mat-label>{{property.alias}}\n                                                  <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                        </mat-label>\n\n                                        <mat-select formControlName={{property.name}}>\n                                                  <mat-option>Select</mat-option>\n                                                  <mat-option *ngFor=\"let opt of property.values\"\n                                                              [value]=\"opt\">{{opt}}\n                                                  </mat-option>\n                                        </mat-select>\n\n                                        <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                                 </mat-form-field>\n\n                    </div>\n\n                    <!--Form field for Measure Datatype  -->\n\n                    <div class=\"row form-group\" *ngIf=\"property.dataType=='Measure'\" [formGroupName]=\"property.name\" style=\"margin-bottom:0px;\">\n\n                          <div class=\"col-md-6\">\n\n                                   <mat-form-field appearance=\"outline\">\n\n                                           <mat-label>{{property.alias}}\n                                                      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                           </mat-label>\n\n                                           <input matInput formControlName=\"in\"\n                                                  placeholder={{property.alias}}\n                                                  type=\"number\"\n                                                  (keyup)=\"enable(property)\"\n                                                  (focus)=\"enable(property)\" >\n\n                                   <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                                   </mat-form-field>\n                          </div>\n\n                           <div class=\"col-md-6\">\n\n                                    <mat-form-field appearance=\"outline\">\n\n                                            <mat-label>Unit\n                                                   <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                            </mat-label>\n\n                                            <mat-select formControlName=\"unit\">\n                                                   <mat-option>Select</mat-option>\n                                                   <mat-option *ngFor=\"let opt of property.units\" [value]=\"opt\">\n                                                   {{opt}}\n                                                   </mat-option>\n                                            </mat-select>\n\n                                            <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getEror(property)}}</mat-error>\n\n                                    </mat-form-field>\n                           </div>\n                      </div>\n\n\n              </ng-container>\n\n\n              <div>\n\n                     <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n\n              </div>\n\n              <div class=\"btn btn-toolbar\">\n\n                     <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!this.formGroup.valid\">Submit</button>\n                &nbsp; &nbsp;\n                     <button type=\"reset\" class=\"btn btn-primary\">Reset</button>\n\n              </div>\n\n       </form>\n\n</div>\n\n<!--\n    <pre>\n    formGroupForm?.value|json}}\n    </pre> -->\n\n\n\n\n<!--.mat-form-field-flex > .mat-form-field-infix {-->\n<!--padding: 0.35em 0px !important;-->\n<!--}-->\n",
        styles: [".jumbotron{background-color:#f8f9fa;padding:15px;margin-top:56px}.mat-form-field{width:100%}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.asterik{color:red}.form{background:#fff;box-shadow:0 2px 6px 4px rgba(0,0,0,.14);border-radius:15px;margin:0 30%;padding:20px}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ValidationServiceService, HttpClient])
], JsonFormComponent);
export { JsonFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9qc29uLWZvcm0vanNvbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUcsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBUWhELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBSzVCLFlBQW9CLGlCQUEyQyxFQUFVLElBQWdCO1FBQXJFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBSnpGLFVBQUssR0FBRyxVQUFVLENBQUM7UUFFbkIsV0FBTSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUE2QjdELFVBQUssR0FBRyxHQUFHLEVBQUU7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFBO1FBRUQsNEJBQTRCO1FBQzVCLFVBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXJDLHVDQUF1QztRQUN2QyxXQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFBO0lBbkNMLENBQUM7SUFFRCxRQUFRO1FBR04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFbEQsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFPO1FBQ2IsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM3RCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBRWhHO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUFPO1FBQ2QsSUFBSyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksU0FBUyxFQUFFO1lBQzFELE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztZQUM1QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlGO1FBQ0QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Q0FnQk4sQ0FBQTtBQTlDWSxpQkFBaUI7SUFON0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7UUFDekIsNjBQQUF5Qzs7S0FFMUMsQ0FBQzs2Q0FPdUMsd0JBQXdCLEVBQWdCLFVBQVU7R0FMOUUsaUJBQWlCLENBOEM3QjtTQTlDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyAgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlU2VydmljZX0gZnJvbSBcIi4vdmFsaWRhdGlvbi1zZXJ2aWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtanNvbi1mb3JtXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vanNvbi1mb3JtLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9qc29uLWZvcm0uY29tcG9uZW50LmNzc1wiXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBKc29uRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlID0gXCJKc29uRm9ybVwiO1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgc2NoZW1hOiBhbnkgPSB0aGlzLmh0dHAuZ2V0KGB1cmw6XCIuLi8uLi8uLi9hc3NldHMvc2NoZW1hLmpzb25cImApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlU2VydmljZSwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG5cbiAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMudmFsaWRhdGlvblNlcnZpY2UuYnVpbGRGb3JtKCk7XG5cbiAgICAgIH1cblxuICAgICAgZ2V0RXJvcihjb250cm9sKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gXCJjb250cm9sc1wiO1xuICAgICAgICBpZiAoIXRoaXMuZm9ybUdyb3VwLmdldChjb250cm9sLm5hbWUpW2NvbnRyb2xzXS51bml0LmRpc2FibGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblNlcnZpY2UuZ2V0RXJyb3JNZXNzYWdlKHRoaXMuZm9ybUdyb3VwLmdldChjb250cm9sLm5hbWUpW2NvbnRyb2xzXS51bml0KTtcblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGdldEVycm9yKGNvbnRyb2wpIHtcbiAgICAgICAgaWYgKCB0aGlzLmZvcm1Hcm91cC5nZXQoY29udHJvbC5uYW1lKSBpbnN0YW5jZW9mIEZvcm1Hcm91cCkge1xuICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0gXCJjb250cm9sc1wiO1xuICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmdldEVycm9yTWVzc2FnZSh0aGlzLmZvcm1Hcm91cC5nZXQoY29udHJvbC5uYW1lKVtjb250cm9sc10uaW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmdldEVycm9yTWVzc2FnZSh0aGlzLmZvcm1Hcm91cC5nZXQoY29udHJvbC5uYW1lKSk7XG4gICAgICB9XG5cbiAgICAgIGxvZ2luID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIFJlc2V0IGFsbCBGb3JtIENvbnRyb2xcbiAgICAgIHJlc2V0ID0gKCkgPT4gdGhpcy5mb3JtR3JvdXAucmVzZXQoKTtcblxuICAgICAgLy8gVG8gZW5hYmxlL2Rpc2FibGUgbWVhc3VyZSB1bml0IGZpZWxkXG4gICAgICBlbmFibGUgPSAoZmllbGQpID0+IHtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uU2VydmljZS5lbmFibGVVbml0KGZpZWxkLCB0aGlzLmZvcm1Hcm91cCk7XG4gICAgICB9XG5cblxuXG59XG4iXX0=