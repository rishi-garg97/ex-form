import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AngularMaterialModule } from "./Modules/angular-material.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { JsonFormComponent } from "./component/json-form/json-form.component";
import { ValidationServiceService } from "./component/json-form/validation-service.service";
import { FormComponent } from "./component/ex-form/form.component";
import { TextFieldComponent } from "./component/ex-form/form-field/text/text-field.component";
import { NumberFieldComponent } from "./component/ex-form/form-field/number/number-field.component";
import { DropdownComponent } from "./component/ex-form/form-field/dropdown/dropdown.component";
import { MeasureComponent } from "./component/ex-form/form-field/measure/measure.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./entryComponent/login/login.component";
import { ToolBarComponent } from "./header/tool-bar/tool-bar.component";
import { MatDialogModule } from "@angular/material";
import { SignupComponent } from "./entryComponent/signup/signup.component";
import { EmailFieldComponent } from "./component/ex-form/form-field/email/email-field.component";
import { PasswordFieldComponent } from "./component/ex-form/form-field/password/password-field.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { SocialLoginModule } from "angularx-social-login";
import { HttpClientModule } from "@angular/common/http";
import { NgJsonEditorModule } from "ang-jsoneditor";
// firebase
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AuthService } from "./entryComponent/services/auth.service";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { CommonService } from "./service/common.service";
import { StepFormComponent } from "./component/ex-form/viewer/group/step-wizard/step-form.component";
import { SimpleComponent } from "./component/ex-form/viewer/basic/simple/simple.component";
import { AccordianComponent } from "./component/ex-form/viewer/group/accordian/accordian.component";
import { TabComponent } from "./component/ex-form/viewer/group/tabs/tab/tab.component";
import { UiSchemaComponent } from "./json-editor/ui-schema/ui-schema.component";
import { ModelSchemaComponent } from "./json-editor/model-schema/model-schema.component";
import { RadioComponent } from "./component/ex-form/form-field/radio/radio.component";
import { ValidationMessageGeneratorService } from "./component/ex-form/validators/validation-message-generator.service";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                JsonFormComponent,
                FormComponent,
                TextFieldComponent,
                NumberFieldComponent,
                DropdownComponent,
                MeasureComponent,
                DashboardComponent,
                LoginComponent,
                ToolBarComponent,
                SignupComponent,
                EmailFieldComponent,
                PasswordFieldComponent,
                LoadingSpinnerComponent,
                StepFormComponent,
                SimpleComponent,
                AccordianComponent,
                TabComponent,
                UiSchemaComponent,
                ModelSchemaComponent,
                RadioComponent
            ],
            imports: [
                FormsModule,
                AngularMaterialModule,
                ReactiveFormsModule,
                CommonModule,
                AppRoutingModule,
                MatDialogModule,
                BrowserModule,
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFireModule,
                AngularFirestoreModule,
                MatSnackBarModule,
                AngularFireDatabaseModule,
                AngularFireAuthModule,
                MatExpansionModule,
                MatTabsModule,
                SocialLoginModule,
                HttpClientModule,
                NgJsonEditorModule
            ],
            entryComponents: [
                LoginComponent, SignupComponent
            ],
            providers: [ValidationServiceService,
                ValidationMessageGeneratorService,
                AuthService,
                CommonService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2FwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDMUYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBQzVGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDhEQUE4RCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDREQUE0RCxDQUFDO0FBQzdGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBQzFGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FB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O2dCQUNmLGNBQWMsRUFBRSxlQUFlO2FBQ2hDO1lBRUQsU0FBUyxFQUFFLENBQUMsd0JBQXdCO2dCQUNsQyxpQ0FBaUM7Z0JBQ2pDLFdBQVc7Z0JBQ1gsYUFBYTthQUNkO1lBQ0QsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQzFCLENBQUM7T0FDVyxTQUFTLENBQ3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQURELElBQ0M7U0FEWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7QW5ndWxhck1hdGVyaWFsTW9kdWxlfSBmcm9tIFwiLi9Nb2R1bGVzL2FuZ3VsYXItbWF0ZXJpYWwubW9kdWxlXCI7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7SnNvbkZvcm1Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudC9qc29uLWZvcm0vanNvbi1mb3JtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZVNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudC9qc29uLWZvcm0vdmFsaWRhdGlvbi1zZXJ2aWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7Rm9ybUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50L2V4LWZvcm0vZm9ybS5jb21wb25lbnRcIjtcbmltcG9ydCB7VGV4dEZpZWxkQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnQvZXgtZm9ybS9mb3JtLWZpZWxkL3RleHQvdGV4dC1maWVsZC5jb21wb25lbnRcIjtcbmltcG9ydCB7TnVtYmVyRmllbGRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0tZmllbGQvbnVtYmVyL251bWJlci1maWVsZC5jb21wb25lbnRcIjtcbmltcG9ydCB7RHJvcGRvd25Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0tZmllbGQvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50XCI7XG5pbXBvcnQge01lYXN1cmVDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0tZmllbGQvbWVhc3VyZS9tZWFzdXJlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQge0FwcFJvdXRpbmdNb2R1bGV9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSBcIi4vZW50cnlDb21wb25lbnQvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQge1Rvb2xCYXJDb21wb25lbnR9IGZyb20gXCIuL2hlYWRlci90b29sLWJhci90b29sLWJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7TWF0RGlhbG9nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi9lbnRyeUNvbXBvbmVudC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFbWFpbEZpZWxkQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnQvZXgtZm9ybS9mb3JtLWZpZWxkL2VtYWlsL2VtYWlsLWZpZWxkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQYXNzd29yZEZpZWxkQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnQvZXgtZm9ybS9mb3JtLWZpZWxkL3Bhc3N3b3JkL3Bhc3N3b3JkLWZpZWxkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHtNYXRTbmFja0Jhck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhclwiO1xuaW1wb3J0IHtNYXRFeHBhbnNpb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9leHBhbnNpb25cIjtcbmltcG9ydCB7TWF0VGFic01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3RhYnNcIjtcblxuaW1wb3J0IHtTb2NpYWxMb2dpbk1vZHVsZSwgQXV0aFNlcnZpY2VDb25maWcsIEZhY2Vib29rTG9naW5Qcm92aWRlcn0gZnJvbSBcImFuZ3VsYXJ4LXNvY2lhbC1sb2dpblwiO1xuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7TmdKc29uRWRpdG9yTW9kdWxlfSBmcm9tIFwiYW5nLWpzb25lZGl0b3JcIjtcblxuXG4vLyBmaXJlYmFzZVxuaW1wb3J0IHtBbmd1bGFyRmlyZU1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2ZpcmVcIjtcbmltcG9ydCB7ZW52aXJvbm1lbnR9IGZyb20gXCIuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRcIjtcbmltcG9ydCB7QW5ndWxhckZpcmVBdXRoTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9hdXRoXCI7XG5pbXBvcnQge0FuZ3VsYXJGaXJlc3RvcmVNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9maXJlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHtBbmd1bGFyRmlyZURhdGFiYXNlTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9kYXRhYmFzZVwiO1xuXG5cbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2VudHJ5Q29tcG9uZW50L3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtMb2FkaW5nU3Bpbm5lckNvbXBvbmVudH0gZnJvbSBcIi4vbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29tbW9uU2VydmljZX0gZnJvbSBcIi4vc2VydmljZS9jb21tb24uc2VydmljZVwiO1xuaW1wb3J0IHtTdGVwRm9ybUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50L2V4LWZvcm0vdmlld2VyL2dyb3VwL3N0ZXAtd2l6YXJkL3N0ZXAtZm9ybS5jb21wb25lbnRcIjtcbmltcG9ydCB7U2ltcGxlQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnQvZXgtZm9ybS92aWV3ZXIvYmFzaWMvc2ltcGxlL3NpbXBsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7QWNjb3JkaWFuQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnQvZXgtZm9ybS92aWV3ZXIvZ3JvdXAvYWNjb3JkaWFuL2FjY29yZGlhbi5jb21wb25lbnRcIjtcbmltcG9ydCB7VGFiQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnQvZXgtZm9ybS92aWV3ZXIvZ3JvdXAvdGFicy90YWIvdGFiLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtVaVNjaGVtYUNvbXBvbmVudH0gZnJvbSBcIi4vanNvbi1lZGl0b3IvdWktc2NoZW1hL3VpLXNjaGVtYS5jb21wb25lbnRcIjtcbmltcG9ydCB7TW9kZWxTY2hlbWFDb21wb25lbnR9IGZyb20gXCIuL2pzb24tZWRpdG9yL21vZGVsLXNjaGVtYS9tb2RlbC1zY2hlbWEuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSYWRpb0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0tZmllbGQvcmFkaW8vcmFkaW8uY29tcG9uZW50XCI7XG5pbXBvcnQge1ZhbGlkYXRpb25NZXNzYWdlR2VuZXJhdG9yU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50L2V4LWZvcm0vdmFsaWRhdG9ycy92YWxpZGF0aW9uLW1lc3NhZ2UtZ2VuZXJhdG9yLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEpzb25Gb3JtQ29tcG9uZW50LFxuICAgIEZvcm1Db21wb25lbnQsXG4gICAgVGV4dEZpZWxkQ29tcG9uZW50LFxuICAgIE51bWJlckZpZWxkQ29tcG9uZW50LFxuICAgIERyb3Bkb3duQ29tcG9uZW50LFxuICAgIE1lYXN1cmVDb21wb25lbnQsXG4gICAgRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIFRvb2xCYXJDb21wb25lbnQsXG4gICAgU2lnbnVwQ29tcG9uZW50LFxuICAgIEVtYWlsRmllbGRDb21wb25lbnQsXG4gICAgUGFzc3dvcmRGaWVsZENvbXBvbmVudCxcbiAgICBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudCxcbiAgICBTdGVwRm9ybUNvbXBvbmVudCxcbiAgICBTaW1wbGVDb21wb25lbnQsXG4gICAgQWNjb3JkaWFuQ29tcG9uZW50LFxuICAgIFRhYkNvbXBvbmVudCxcbiAgICBVaVNjaGVtYUNvbXBvbmVudCxcbiAgICBNb2RlbFNjaGVtYUNvbXBvbmVudCxcbiAgICBSYWRpb0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQW5ndWxhck1hdGVyaWFsTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQW5ndWxhckZpcmVNb2R1bGUuaW5pdGlhbGl6ZUFwcChlbnZpcm9ubWVudC5maXJlYmFzZUNvbmZpZyksXG4gICAgQW5ndWxhckZpcmVNb2R1bGUsIC8vIE9ubHkgcmVxdWlyZWQgZm9yIGF1dGggZmVhdHVyZXMsXG4gICAgQW5ndWxhckZpcmVzdG9yZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBBbmd1bGFyRmlyZURhdGFiYXNlTW9kdWxlLFxuICAgIEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBTb2NpYWxMb2dpbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5nSnNvbkVkaXRvck1vZHVsZVxuXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIExvZ2luQ29tcG9uZW50LCBTaWdudXBDb21wb25lbnRcbiAgXSxcblxuICBwcm92aWRlcnM6IFtWYWxpZGF0aW9uU2VydmljZVNlcnZpY2UsXG4gICAgVmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3JTZXJ2aWNlLFxuICAgIEF1dGhTZXJ2aWNlLFxuICAgIENvbW1vblNlcnZpY2VcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuXG4iXX0=