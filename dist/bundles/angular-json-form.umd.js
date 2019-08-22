(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/material'), require('@angular/platform-browser/animations'), require('@angular/platform-browser'), require('@angular/common'), require('@angular/forms'), require('lodash'), require('ang-jsoneditor'), require('@angular/router'), require('firebase/app'), require('@angular/fire/auth'), require('@angular/fire/firestore'), require('@angular/fire/database'), require('@angular/material/snack-bar'), require('@angular/material/dialog'), require('@angular/material/expansion'), require('@angular/material/tabs'), require('angularx-social-login'), require('@angular/fire')) :
    typeof define === 'function' && define.amd ? define('angular-json-form', ['exports', '@angular/core', '@angular/common/http', '@angular/material', '@angular/platform-browser/animations', '@angular/platform-browser', '@angular/common', '@angular/forms', 'lodash', 'ang-jsoneditor', '@angular/router', 'firebase/app', '@angular/fire/auth', '@angular/fire/firestore', '@angular/fire/database', '@angular/material/snack-bar', '@angular/material/dialog', '@angular/material/expansion', '@angular/material/tabs', 'angularx-social-login', '@angular/fire'], factory) :
    (global = global || self, factory(global['angular-json-form'] = {}, global.ng.core, global.ng.common.http, global.ng.material, global.ng.platformBrowser.animations, global.ng.platformBrowser, global.ng.common, global.ng.forms, global._, global.angJsoneditor, global.ng.router, global.app, global.ng.fire.auth, global.ng.fire.firestore, global.ng.fire.database, global.ng.material['snack-bar'], global.ng.material.dialog, global.ng.material.expansion, global.ng.material.tabs, global.angularxSocialLogin, global.ng.fire));
}(this, function (exports, core, http, material, animations, platformBrowser, common, forms, _, angJsoneditor, router, app, auth, firestore, database, snackBar, dialog, expansion, tabs, angularxSocialLogin, fire) { 'use strict';

    _ = _ && _.hasOwnProperty('default') ? _['default'] : _;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var CommonService = /** @class */ (function () {
        function CommonService(http) {
            var _this = this;
            this.http = http;
            this.showHideSpinner = function (show) {
                // this.isSpinnerVisible = show;
                if (show) {
                    jQuery("#loaderModal")
                        .modal({ backdrop: "static", keyboard: false })
                        .modal("show");
                }
                else {
                    setTimeout(function () {
                        jQuery("#loaderModal").modal("hide");
                    }, 1000);
                }
            };
            this.loadSignUpJson = function () { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.http.get("./assets/signup.json").toPromise()];
                        case 1:
                            _a.signUpJson = _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); };
            this.getValidationErrorMesageJson = function () { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.http.get("./assets/validation-message.json").toPromise()];
                        case 1:
                            _a.errorMessageJson = _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); };
        }
        CommonService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CommonService_Factory() { return new CommonService(core.ɵɵinject(http.HttpClient)); }, token: CommonService, providedIn: "root" });
        CommonService = __decorate([
            core.Injectable({
                providedIn: "root"
            }),
            __metadata("design:paramtypes", [http.HttpClient])
        ], CommonService);
        return CommonService;
    }());

    var AppComponent = /** @class */ (function () {
        function AppComponent(commonService) {
            this.commonService = commonService;
        }
        AppComponent.prototype.ngOnInit = function () {
            this.commonService.loadSignUpJson();
            this.commonService.getValidationErrorMesageJson();
        };
        AppComponent = __decorate([
            core.Component({
                selector: "app-root",
                template: "<!--<nav class=\"navbar fixed-top navbar-dark bg-dark\"-->\n     <!--style=\"color: white;\">-->\n\n  <!--<a class=\"navbar-brand\">Angular Form</a>-->\n\n<!--</nav>-->\n<app-tool-bar></app-tool-bar>\n\n<div style=\"margin-top: 30px;\">\n\n  <router-outlet></router-outlet>\n  <div id=\"loaderModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"loader-dialog modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\" style=\"background-color: unset; border: unset;\">\n        <div class=\"modal-body\">\n          <app-loading-spinner></app-loading-spinner>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n\n\n\n<!--<app-loading-spinner *ngIf=\"commonService.isSpinnerVisible\"></app-loading-spinner>-->\n\n",
                styles: [""]
            }),
            __metadata("design:paramtypes", [CommonService])
        ], AppComponent);
        return AppComponent;
    }());

    var AngularMaterialModule = /** @class */ (function () {
        function AngularMaterialModule() {
        }
        AngularMaterialModule = __decorate([
            core.NgModule({
                declarations: [],
                imports: [
                    platformBrowser.BrowserModule,
                    animations.BrowserAnimationsModule,
                    material.MatIconModule,
                    material.MatButtonModule,
                    material.MatNativeDateModule,
                    material.MatDatepickerModule,
                    material.MatCheckboxModule,
                    material.MatInputModule,
                    material.MatFormFieldModule,
                    material.MatOptionModule,
                    material.MatSelectModule,
                    material.MatCardModule,
                    material.MatToolbarModule,
                    material.MatProgressSpinnerModule,
                    material.MatGridListModule,
                    material.MatStepperModule
                ],
                exports: [
                    platformBrowser.BrowserModule,
                    animations.BrowserAnimationsModule,
                    material.MatIconModule,
                    material.MatButtonModule,
                    material.MatNativeDateModule,
                    material.MatDatepickerModule,
                    material.MatCheckboxModule,
                    material.MatInputModule,
                    material.MatFormFieldModule,
                    material.MatOptionModule,
                    material.MatSelectModule,
                    material.MatCardModule,
                    material.MatToolbarModule,
                    material.MatGridListModule,
                    material.MatProgressSpinnerModule,
                    material.MatStepperModule
                ]
            })
        ], AngularMaterialModule);
        return AngularMaterialModule;
    }());

    var ValidationServiceService = /** @class */ (function () {
        function ValidationServiceService(formBuilder, http) {
            var _this = this;
            this.formBuilder = formBuilder;
            this.http = http;
            this.schema = this.http.get("url: \"get ../../../assets/schema.json\"");
            this.buildForm = function () {
                var allControl = {};
                var validators = [];
                _this.schema.forEach(function (element) {
                    //  Assign Validator to all form Control
                    validators = [];
                    if (element.required) {
                        validators.push(forms.Validators.required);
                    }
                    if (element.dataType === "String") {
                        validators.push(forms.Validators.minLength(element.minLength));
                        validators.push(forms.Validators.maxLength(element.maxLength));
                        validators.push(forms.Validators.pattern(element.pattern));
                    }
                    if ((element.dataType === "Number" || element.dataType === "Measure")) {
                        validators.push(forms.Validators.max(element.max));
                        validators.push(forms.Validators.min(element.min));
                    }
                    if (element.dataType === "Measure") {
                        validators = [];
                        var unitvalue = "";
                        if (element.units.length === 1) {
                            unitvalue = element.units[0];
                        }
                        if (element.required) {
                            validators = [forms.Validators.required, forms.Validators.min(element.min), forms.Validators.max(element.max)];
                        }
                        allControl[element.name] = _this.formBuilder.group({
                            in: ["", validators],
                            unit: [{ value: unitvalue, disabled: true }, forms.Validators.required]
                        });
                    }
                    else {
                        allControl[element.name] = ["", validators];
                    }
                });
                return _this.formBuilder.group(allControl);
            };
        }
        ValidationServiceService.prototype.getErrorMessage = function (control) {
            var msg = "";
            if (control.hasError("required")) {
                msg = "This Field is required";
            }
            else if (control.hasError("pattern")) {
                msg = "This field contain only character value.";
            }
            else if (control.hasError("minlength")) {
                msg = "This field require minimum " + control.errors.minlength.requiredLength + " characters";
            }
            else if (control.hasError("maxlength")) {
                msg = "This field has maximum " + control.errors.maxlength.requiredLength + " characters";
            }
            else if (control.hasError("min")) {
                msg = "This field required minimum value " + control.errors.min.min;
            }
            else if (control.hasError("max")) {
                msg = "This field has maximum value " + control.errors.max.max;
            }
            return msg;
        };
        ValidationServiceService.prototype.enableUnit = function (field, myForm) {
            if (myForm.get(field.name).value.in && (field.units.length > 1)) {
                myForm.get(field.name).controls.unit.enable();
            }
            else {
                if (field.units.length > 1) {
                    myForm.get(field.name).controls.unit.reset();
                }
                myForm.get(field.name).controls.unit.disable();
            }
        };
        ValidationServiceService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ValidationServiceService_Factory() { return new ValidationServiceService(core.ɵɵinject(forms.FormBuilder), core.ɵɵinject(http.HttpClient)); }, token: ValidationServiceService, providedIn: "root" });
        ValidationServiceService = __decorate([
            core.Injectable({
                providedIn: "root"
            }),
            __metadata("design:paramtypes", [forms.FormBuilder, http.HttpClient])
        ], ValidationServiceService);
        return ValidationServiceService;
    }());

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
            if (this.formGroup.get(control.name) instanceof forms.FormGroup) {
                var controls = "controls";
                return this.validationService.getErrorMessage(this.formGroup.get(control.name)[controls].in);
            }
            return this.validationService.getErrorMessage(this.formGroup.get(control.name));
        };
        JsonFormComponent = __decorate([
            core.Component({
                selector: "app-json-form",
                template: "<div class=\"jumbotron\">\n\n      <form [formGroup]=\"formGroup\" (ngSubmit)=\"login()\" class=\"form\">\n\n\n              <h5>Create Protocol</h5>\n\n              <ng-container *ngFor=\"let property of schema;let i=index;\">\n\n                    <!--Form field for text input  -->\n                     <div class=\"form-group\" *ngIf=\"property.dataType=='String'\">\n\n                         <mat-form-field hintLabel=\"Max {{property.maxLength}} character\"\n                                         appearance=\"outline\">\n\n                                <mat-label>{{property.alias}}\n                                  <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                </mat-label>\n\n                                <input matInput #input\n                                       formControlName={{property.name}}\n                                       maxLength={{property.maxLength}}\n                                       minLength=\"{{property.minLength}}\"\n                                       placeholder={{property.alias}} type=\"text\">\n\n                                <mat-hint align=\"end\">{{input.value.length}}/{{property.maxLength}}</mat-hint>\n\n                                <!-- <mat-error *ngIf=\"property.name + '.invalid'\">{{getError(property)}}</mat-error> -->\n                                <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                         </mat-form-field>\n\n                     </div>\n\n                    <!--Form field for number input  -->\n\n                    <div class=\"form-group\" *ngIf=\"property.dataType=='Number'\" style=\"margin-bottom:0px;\">\n\n                          <mat-form-field appearance=\"outline\">\n\n                                <mat-label>{{property.alias}}\n                                    <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                </mat-label>\n\n                                <input matInput min={{property.min}}\n                                       max={{property.max}}\n                                       formControlName={{property.name}}\n                                       type={{property.dataType|lowercase}}\n                                       placeholder={{property.alias}}>\n\n                                <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                          </mat-form-field>\n\n                    </div>\n\n                    <!--Form field for enumeration with multiselect -->\n\n                    <div class=\"form-group\" *ngIf=\"property.dataType=='Enumeration'&& property.array==true\" style=\"margin-bottom:0px;\">\n\n                          <mat-form-field appearance=\"outline\">\n\n                                 <mat-label>{{property.alias}}\n                                        <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                 </mat-label>\n\n                                 <mat-select formControlName={{property.name}} multiple>\n                                        <mat-option *ngFor=\"let opt of property.values\"\n                                                    [value]=\"opt\">{{opt}}\n                                        </mat-option>\n                                 </mat-select>\n\n                                 <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                          </mat-form-field>\n\n                    </div>\n\n                    <!--Form field for text enumeration with single selection  -->\n\n                    <div class=\"form-group\" *ngIf=\"property.dataType=='Enumeration'&& property.array==false\" style=\"margin-bottom:0px;\">\n\n                                 <mat-form-field appearance=\"outline\">\n\n                                        <mat-label>{{property.alias}}\n                                                  <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                        </mat-label>\n\n                                        <mat-select formControlName={{property.name}}>\n                                                  <mat-option>Select</mat-option>\n                                                  <mat-option *ngFor=\"let opt of property.values\"\n                                                              [value]=\"opt\">{{opt}}\n                                                  </mat-option>\n                                        </mat-select>\n\n                                        <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                                 </mat-form-field>\n\n                    </div>\n\n                    <!--Form field for Measure Datatype  -->\n\n                    <div class=\"row form-group\" *ngIf=\"property.dataType=='Measure'\" [formGroupName]=\"property.name\" style=\"margin-bottom:0px;\">\n\n                          <div class=\"col-md-6\">\n\n                                   <mat-form-field appearance=\"outline\">\n\n                                           <mat-label>{{property.alias}}\n                                                      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                           </mat-label>\n\n                                           <input matInput formControlName=\"in\"\n                                                  placeholder={{property.alias}}\n                                                  type=\"number\"\n                                                  (keyup)=\"enable(property)\"\n                                                  (focus)=\"enable(property)\" >\n\n                                   <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                                   </mat-form-field>\n                          </div>\n\n                           <div class=\"col-md-6\">\n\n                                    <mat-form-field appearance=\"outline\">\n\n                                            <mat-label>Unit\n                                                   <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                            </mat-label>\n\n                                            <mat-select formControlName=\"unit\">\n                                                   <mat-option>Select</mat-option>\n                                                   <mat-option *ngFor=\"let opt of property.units\" [value]=\"opt\">\n                                                   {{opt}}\n                                                   </mat-option>\n                                            </mat-select>\n\n                                            <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getEror(property)}}</mat-error>\n\n                                    </mat-form-field>\n                           </div>\n                      </div>\n\n\n              </ng-container>\n\n\n              <div>\n\n                     <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n\n              </div>\n\n              <div class=\"btn btn-toolbar\">\n\n                     <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!this.formGroup.valid\">Submit</button>\n                &nbsp; &nbsp;\n                     <button type=\"reset\" class=\"btn btn-primary\">Reset</button>\n\n              </div>\n\n       </form>\n\n</div>\n\n<!--\n    <pre>\n    formGroupForm?.value|json}}\n    </pre> -->\n\n\n\n\n<!--.mat-form-field-flex > .mat-form-field-infix {-->\n<!--padding: 0.35em 0px !important;-->\n<!--}-->\n",
                styles: [".jumbotron{background-color:#f8f9fa;padding:15px;margin-top:56px}.mat-form-field{width:100%}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.asterik{color:red}.form{background:#fff;box-shadow:0 2px 6px 4px rgba(0,0,0,.14);border-radius:15px;margin:0 30%;padding:20px}"]
            }),
            __metadata("design:paramtypes", [ValidationServiceService, http.HttpClient])
        ], JsonFormComponent);
        return JsonFormComponent;
    }());

    var FormComponent = /** @class */ (function () {
        function FormComponent() {
            var _this = this;
            this.initialize = function () {
                var uiSchema = Object.assign({}, _this.uiSchema);
                if (uiSchema.type === "Normal") {
                    uiSchema.fields = _this.formatFields(uiSchema);
                }
                else {
                    _.each(uiSchema.steps, function (step) {
                        step.fields = _this.formatFields(step);
                    });
                }
                _this.modifiedUiSchema = uiSchema;
                _this.modifiedUiSchema.name = _this.modelSchema.name;
            };
            this.formatFields = function (schema) {
                return _.map(schema.fields, function (field) {
                    var matchedField = _.find(_this.modelSchema.properties, { name: field.name });
                    if (matchedField) {
                        return __assign({}, field, matchedField);
                    }
                });
            };
        }
        FormComponent.prototype.ngOnInit = function () {
            this.initialize();
            // console.log(this.formGroup);
        };
        FormComponent.prototype.ngOnChanges = function (changes) {
            for (var propName in changes) {
                var chng = changes[propName];
                var cur = JSON.stringify(chng.currentValue);
                var prev = JSON.stringify(chng.previousValue);
                if (cur !== prev) {
                    this.initialize();
                }
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], FormComponent.prototype, "modelSchema", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], FormComponent.prototype, "uiSchema", void 0);
        FormComponent = __decorate([
            core.Component({
                selector: "app-form",
                template: "<app-simple *ngIf=\"modifiedUiSchema.type == 'Normal' \"\n            [uiSchema]=\"modifiedUiSchema\">\n</app-simple>\n\n\n\n<!--<app-accordian *ngIf=\"modifiedUiSchema.type =='Group'\"-->\n               <!--[uiSchema]=\"modifiedUiSchema\">-->\n<!--</app-accordian>-->\n\n\n\n<!--<app-step-form *ngIf=\"modifiedUiSchema.type =='Group'\"-->\n               <!--[uiSchema]=\"modifiedUiSchema\">-->\n<!--</app-step-form>-->\n\n<app-tab *ngIf=\"modifiedUiSchema.type =='Group'\"\n         [uiSchema]=\"modifiedUiSchema\">\n</app-tab>\n",
                styles: [".jumbotron{background-color:#f8f9fa;padding:15px;margin-top:56px}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}.asterik{color:red}.ex-form{background:#fff;box-shadow:0 2px 6px 4px rgba(0,0,0,.14);border-radius:15px;padding:20px}.padding-right-zero{padding-right:0}.padding-zero{padding:0}"]
            }),
            __metadata("design:paramtypes", [])
        ], FormComponent);
        return FormComponent;
    }());

    var RequiredValidator = /** @class */ (function () {
        function RequiredValidator() {
            this.get = function () {
                return forms.Validators.required;
            };
        }
        return RequiredValidator;
    }());

    var MinLengthValidator = /** @class */ (function () {
        function MinLengthValidator() {
            this.get = function (minLength) {
                return forms.Validators.minLength(minLength);
            };
        }
        return MinLengthValidator;
    }());

    var MaxLengthValidator = /** @class */ (function () {
        function MaxLengthValidator() {
            this.get = function (maxLength) {
                return forms.Validators.maxLength(maxLength);
            };
        }
        return MaxLengthValidator;
    }());

    /**
     * Created by rgarg on 08-07-2019.
     */
    var PatternValidator = /** @class */ (function () {
        function PatternValidator() {
            this.get = function (pattern) {
                return forms.Validators.pattern(pattern);
            };
        }
        return PatternValidator;
    }());

    var ValidationMessageGeneratorService = /** @class */ (function () {
        function ValidationMessageGeneratorService(http, commonService) {
            var _this = this;
            this.http = http;
            this.commonService = commonService;
            this.validationMessage = this.commonService.errorMessageJson;
            this.errorMessage = function (formGroup, property) {
                var msg = "Field is Invalid";
                var control = formGroup.get(property.name);
                var fieldError = _this.validationMessage.fields[property.name] ? _this.validationMessage.fields[property.name] : "";
                if (control.hasError("required")) {
                    if (fieldError.required) {
                        msg = fieldError.required;
                    }
                    else {
                        msg = _this.validationMessage.common.required;
                    }
                }
                else if (control.hasError("pattern") && property.name === "mobileNo") {
                    if (fieldError.mobile) {
                        msg = fieldError.mobile;
                    }
                    else {
                        msg = _this.validationMessage.common.mobile;
                    }
                }
                else if (control.hasError("pattern")) {
                    if (fieldError.pattern) {
                        msg = fieldError.pattern;
                    }
                    else {
                        msg = _this.validationMessage.common.pattern;
                    }
                }
                else if (control.hasError("minlength")) {
                    if (fieldError.minLength) {
                        msg = fieldError.minLength;
                    }
                    else {
                        msg = _this.validationMessage.common.minLength;
                    }
                }
                else if (control.hasError("maxlength")) {
                    if (fieldError.maxLength) {
                        msg = fieldError.maxLength;
                    }
                    else {
                        msg = _this.validationMessage.common.maxLength;
                    }
                }
                else if (control.hasError("min")) {
                    if (fieldError.min) {
                        msg = fieldError.min;
                    }
                    else {
                        msg = _this.validationMessage.common.min;
                    }
                }
                else if (control.hasError("max")) {
                    if (fieldError.max) {
                        msg = fieldError.max;
                    }
                    else {
                        msg = _this.validationMessage.common.max;
                    }
                }
                else if (control.hasError("email")) {
                    if (fieldError.email) {
                        msg = fieldError.email;
                    }
                    else {
                        msg = _this.validationMessage.common.email;
                    }
                }
                var alias = property.alias, min = property.min, max = property.max, minLength = property.minLength, maxLength = property.maxLength, pattern = property.pattern;
                return Mustache.render(msg, { fieldName: alias, min: min, max: max, minLength: minLength, maxLength: maxLength, pattern: pattern });
            };
        }
        ValidationMessageGeneratorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ValidationMessageGeneratorService_Factory() { return new ValidationMessageGeneratorService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(CommonService)); }, token: ValidationMessageGeneratorService, providedIn: "root" });
        ValidationMessageGeneratorService = __decorate([
            core.Injectable({
                providedIn: "root"
            }),
            __metadata("design:paramtypes", [http.HttpClient, CommonService])
        ], ValidationMessageGeneratorService);
        return ValidationMessageGeneratorService;
    }());

    var TextFieldComponent = /** @class */ (function () {
        function TextFieldComponent(formBuilder, validationMessageGenerator) {
            var _this = this;
            this.formBuilder = formBuilder;
            this.validationMessageGenerator = validationMessageGenerator;
            this.addControl = new core.EventEmitter();
            this.addValidator = function () {
                var _a;
                var validators = [];
                if (_this.property.required) {
                    validators.push(new RequiredValidator().get());
                }
                if (_this.property.minLength && _this.property.minLength != null) {
                    validators.push(new MinLengthValidator().get(_this.property.minLength));
                }
                if (_this.property.maxLength && _this.property.maxLength != null) {
                    validators.push(new MaxLengthValidator().get(_this.property.maxLength));
                }
                if (_this.property.pattern && _this.property.pattern != null) {
                    validators.push(new PatternValidator().get(_this.property.pattern));
                }
                _this.formGroup = _this.formBuilder.group((_a = {},
                    _a[_this.property.name] = [{
                            value: "",
                            disabled: !_this.property.enable
                        }, validators],
                    _a));
                _this.formGroup.updateValueAndValidity();
                _this.addControl.emit({ key: _this.property.name, value: _this.formGroup });
            };
            this.getError = function () {
                return _this.validationMessageGenerator.errorMessage(_this.formGroup, _this.property);
            };
        }
        TextFieldComponent.prototype.ngOnInit = function () {
            this.addValidator();
        };
        TextFieldComponent.prototype.ngOnChanges = function () {
            // if (this.formGroup) {
            //   this.formGroup.updateValueAndValidity();
            // }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], TextFieldComponent.prototype, "property", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], TextFieldComponent.prototype, "addControl", void 0);
        TextFieldComponent = __decorate([
            core.Component({
                selector: "app-text-field",
                template: "<div [formGroup]=\"formGroup\">\n   <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n  <input matInput #input\n         formControlName={{property.name}}\n         placeholder={{property.alias}}\n         type=\"text\"\n         [attr.maxlength] = \"property.maxLength ? null : property.maxLength\"\n         [attr.minlength] = \"property.minLength ? null : property.minLength\">\n\n    <mat-hint align=\"end\" *ngIf = \"property.maxLength != null\">{{input.value.length}}/{{property.maxLength}}</mat-hint>\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n</div>\n",
                styles: [".mat-form-field{width:100%}.asterik{color:red}"]
            }),
            __metadata("design:paramtypes", [forms.FormBuilder, ValidationMessageGeneratorService])
        ], TextFieldComponent);
        return TextFieldComponent;
    }());

    /**
     * Created by rgarg on 08-07-2019.
     */
    var MaxValueValidator = /** @class */ (function () {
        function MaxValueValidator() {
            this.get = function (maxValue) {
                return forms.Validators.max(maxValue);
            };
        }
        return MaxValueValidator;
    }());

    /**
     * Created by rgarg on 08-07-2019.
     */
    var MinValueValidator = /** @class */ (function () {
        function MinValueValidator() {
            this.get = function (minValue) {
                return forms.Validators.min(minValue);
            };
        }
        return MinValueValidator;
    }());

    var NumberFieldComponent = /** @class */ (function () {
        function NumberFieldComponent(formBuilder, validationMessageGenerator) {
            var _this = this;
            this.formBuilder = formBuilder;
            this.validationMessageGenerator = validationMessageGenerator;
            this.addControl = new core.EventEmitter();
            this.addValidator = function () {
                var _a;
                var validators = [];
                if (_this.property.required) {
                    validators.push(new RequiredValidator().get());
                }
                if (_this.property.max && _this.property.max != null) {
                    validators.push(new MaxValueValidator().get(_this.property.max));
                }
                if (_this.property.max && _this.property.min != null) {
                    validators.push(new MinValueValidator().get(_this.property.min));
                }
                if (_this.property.pattern && _this.property.pattern != null) {
                    validators.push(new PatternValidator().get(_this.property.pattern));
                }
                _this.formGroup = _this.formBuilder.group((_a = {}, _a[_this.property.name] = [{ value: "", disabled: !_this.property.enable }, validators], _a));
                _this.formGroup.updateValueAndValidity();
                _this.addControl.emit({ key: _this.property.name, value: _this.formGroup });
            };
            this.getError = function () {
                return _this.validationMessageGenerator.errorMessage(_this.formGroup, _this.property);
            };
        }
        NumberFieldComponent.prototype.ngOnInit = function () {
            this.addValidator();
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NumberFieldComponent.prototype, "property", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], NumberFieldComponent.prototype, "addControl", void 0);
        NumberFieldComponent = __decorate([
            core.Component({
                selector: "app-number-field",
                template: "<div [formGroup]=\"formGroup\">\n\n  <mat-form-field appearance=\"outline\">\n    <mat-label>\n      {{property.alias}}\n      <span *ngIf=\"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n      <input  matInput\n              formControlName={{property.name}}\n              type=\"number\"\n              [attr.min] = \"property.min ? null : property.min\"\n              [attr.max] = \"property.max ? null : property.max\"\n              placeholder={{property.alias}}>\n    <!--(change)=\"fieldValueChanged()\">-->\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">\n      {{getError()}}\n    </mat-error>\n\n  </mat-form-field>\n</div>\n\n<!--formControlName={{property.name}}-->\n",
                styles: [".mat-form-field{width:100%}.asterik{color:red}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}"]
            }),
            __metadata("design:paramtypes", [forms.FormBuilder, ValidationMessageGeneratorService])
        ], NumberFieldComponent);
        return NumberFieldComponent;
    }());

    var DropdownComponent = /** @class */ (function () {
        function DropdownComponent(formBuilder, validationMessageGenerator) {
            var _this = this;
            this.formBuilder = formBuilder;
            this.validationMessageGenerator = validationMessageGenerator;
            this.addControl = new core.EventEmitter();
            this.getError = function () {
                return _this.validationMessageGenerator.errorMessage(_this.formGroup, _this.property);
            };
        }
        DropdownComponent.prototype.ngOnInit = function () {
            this.addValidator();
        };
        DropdownComponent.prototype.addValidator = function () {
            var _a;
            var validators = [];
            var dropDowninitialValue = "";
            var dropwDownDisable = false;
            if (this.property.required) {
                validators.push(new RequiredValidator().get());
            }
            if (this.property.values && this.property.values.length === 1) {
                // setUnitValue.setValue(this.property.values[0]);
                dropDowninitialValue = this.property.values[0];
                dropwDownDisable = true;
            }
            else {
                dropwDownDisable = !this.property.enable;
            }
            this.formGroup = this.formBuilder.group((_a = {}, _a[this.property.name] = [{ value: dropDowninitialValue, disabled: dropwDownDisable }, validators], _a));
            this.formGroup.updateValueAndValidity();
            this.addControl.emit({ key: this.property.name, value: this.formGroup });
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], DropdownComponent.prototype, "property", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], DropdownComponent.prototype, "addControl", void 0);
        DropdownComponent = __decorate([
            core.Component({
                selector: "app-dropdown",
                template: "<div [formGroup]=\"formGroup\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n    <mat-select formControlName={{property.name}} multiple={{property.array}}>\n      <mat-option *ngIf=\"!property.array\">Select</mat-option>\n      <mat-option *ngFor=\"let opt of property.values\" [value]=\"opt\">\n        {{opt}}\n      </mat-option>\n    </mat-select>\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n\n</div>\n",
                styles: [".mat-form-field{width:100%}.asterik{color:red}"]
            }),
            __metadata("design:paramtypes", [forms.FormBuilder, ValidationMessageGeneratorService])
        ], DropdownComponent);
        return DropdownComponent;
    }());

    var MeasureComponent = /** @class */ (function () {
        function MeasureComponent(formBuilder) {
            var _this = this;
            this.formBuilder = formBuilder;
            this.formGroup = this.formBuilder.group({});
            this.addControl = new core.EventEmitter();
            this.newProperty = {
                measure: {}, unit: {}
            };
            this.onMeasureChange = function (measureValue) {
                var control = _this.formGroup.controls[_this.newProperty.unit.name];
                var values = "values";
                if (measureValue && _this.property[values].length > 1) {
                    control.enable();
                }
                else {
                    if (_this.property[values].length > 1) {
                        control.reset();
                    }
                    control.disable();
                }
            };
            this.addMeasureControl = function (data) {
                _this.formGroup.addControl(data.key, data.value);
                _this.formGroup.updateValueAndValidity();
                _this.addControl.emit({ key: _this.property.name, value: _this.formGroup });
            };
        }
        MeasureComponent.prototype.ngOnInit = function () {
            this.newProperty.measure = __assign({}, this.property);
            this.newProperty.measure.name += "Measure";
            this.newProperty.unit = __assign({}, this.property);
            this.newProperty.unit.name += "Unit";
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MeasureComponent.prototype, "property", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], MeasureComponent.prototype, "addControl", void 0);
        MeasureComponent = __decorate([
            core.Component({
                selector: "app-measure",
                template: "<div class=\"row col-sm-12\" style=\"padding: 0;\">\n  <div class=\"col-sm-6\" [formGroup]=\"formGroup\" style=\"padding-right: 0;\">\n    <app-number-field\n      [property]=\"newProperty.measure\"\n      (addControl)= \"addMeasureControl($event)\" >\n    </app-number-field>\n  </div>\n\n  <div class=\"col-sm-6\" [formGroup]=\"formGroup\" style=\"padding-right: 0;\">\n\n    <app-dropdown\n      [property]=\"newProperty.unit\"\n      (addControl)=\"addMeasureControl($event)\" >\n    </app-dropdown>\n  </div>\n\n</div>\n",
                styles: [""]
            }),
            __metadata("design:paramtypes", [forms.FormBuilder])
        ], MeasureComponent);
        return MeasureComponent;
    }());

    var DashboardService = /** @class */ (function () {
        function DashboardService(http) {
            var _this = this;
            this.http = http;
            // formSchema: any;
            this.schemaUrl = "assets/schema.json";
            this.schema = {
                model: {
                    form: {},
                    editor: {}
                },
                ui: {
                    form: {},
                    editor: {}
                }
            };
            this.enitityModelSchema = function (name) {
                var schema = __assign({}, _this.modelSchema);
                var entitySchema = _.find(schema, function (formSchema) {
                    if (formSchema.name === name) {
                        return formSchema;
                    }
                });
                if (entitySchema.steps && entitySchema.steps !== null) {
                    entitySchema.steps.forEach(function (step) {
                        step.refs = __spread(entitySchema.refs);
                        step = _this.mapsUnitToValue(step);
                    });
                }
                else {
                    entitySchema.properties = _this.mapsUnitToValue(entitySchema);
                }
                var modelEditor = __assign({}, entitySchema);
                _this.schema.model.form = modelEditor;
                _this.schema.model.editor = _.clone(modelEditor);
                return _this.schema.model.editor;
            };
            this.mapsUnitToValue = function (refEntitySchema) {
                refEntitySchema.properties = refEntitySchema.properties.map(function (property) {
                    if (property.dataType === "Ref") {
                        refEntitySchema.refs.forEach(function (ref) {
                            if (property.ref === ref.name) {
                                Object.keys(ref).forEach(function (key) { return (ref[key] == null) && delete ref[key]; });
                                delete ref.name;
                                Object.assign(property, ref);
                            }
                        });
                        //  property.values = [...property.units];
                    }
                    if (property.dataType === "Measure" && property.units) {
                        property.values = __spread(property.units);
                        delete property.units;
                    }
                    return property;
                });
                return refEntitySchema.properties;
            };
            this.uiSchema = function (type) {
                var uiEditor = _.find(_this.UISchema, { type: type });
                _this.schema.ui.form = _.cloneDeep(uiEditor);
                _this.schema.ui.editor = _.cloneDeep(uiEditor);
                return _this.schema.ui.editor;
            };
            this.init = function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.http.get(this.schemaUrl).toPromise()];
                });
            }); };
            this.initUiSchema = function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.http.get("./assets/ui-schema.json").toPromise()];
                });
            }); };
        }
        DashboardService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DashboardService_Factory() { return new DashboardService(core.ɵɵinject(http.HttpClient)); }, token: DashboardService, providedIn: "root" });
        DashboardService = __decorate([
            core.Injectable({
                providedIn: "root"
            }),
            __metadata("design:paramtypes", [http.HttpClient])
        ], DashboardService);
        return DashboardService;
    }());

    var DashboardComponent = /** @class */ (function () {
        function DashboardComponent(dashboardService) {
            var _this = this;
            this.dashboardService = dashboardService;
            this.entity = [
                { name: "Aliquot" }, { name: "Case" }, { name: "Demographic" },
                { name: "Diagnosis" }, { name: "Experiment" }, { name: "Instrument" },
                { name: "InstrumentModel" }, { name: "Lab" }, { name: "Project" },
                { name: "Protocol" }, { name: "Sample" }
            ];
            this.formType = ["Normal", "Group"];
            this.selected = "Protocol";
            this.selectedType = "Normal";
            this.initialize = function () {
                _this.editorModelSchema = _this.dashboardService.enitityModelSchema(_this.selected);
                _this.formModelSchema = _this.dashboardService.schema.model.form;
                _this.editorUISchema = _this.dashboardService.uiSchema(_this.selectedType);
                _this.formUISchema = _this.dashboardService.schema.ui.form;
            };
            this.reinitialize = function () {
                _this.initialize();
            };
            this.uiSchemaChange = function (data) {
                _this.formUISchema = data;
            };
            this.modelSchemaChange = function (data) {
                _this.formModelSchema = data;
            };
            this.setUiSchema = function (id) {
                _this.editorUISchema = _this.dashboardService.uiSchema(id);
                _this.formUISchema = _this.dashboardService.schema.ui.form;
            };
        }
        DashboardComponent.prototype.ngOnInit = function () {
            this.initialize();
        };
        __decorate([
            core.ViewChild(angJsoneditor.JsonEditorComponent, { static: false }),
            __metadata("design:type", angJsoneditor.JsonEditorComponent)
        ], DashboardComponent.prototype, "editor", void 0);
        DashboardComponent = __decorate([
            core.Component({
                selector: "app-dashboard",
                template: "<div class=\"row\" style=\"margin:0;\">\n  &nbsp;&nbsp;&nbsp;&nbsp;<h4>angular-jsonschema-form</h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  <ul class=\"nav nav-pills mb-3\" role=\"tablist\">\n    <li class=\"nav-item\"\n        *ngFor=\"let type of formType\"\n        (click)=\"setUiSchema(type)\">\n      <a class=\"nav-link active\"\n         data-toggle=\"pill\"\n         [class.active]=\"type === selectedType\"\n         href=\"\">{{type}}</a>\n    </li>\n  </ul>\n\n</div>\n\n<div class=\"row\" style=\"margin:0;\">\n  <div class=\"col-sm-6\">\n    <app-ui-schema\n      [uiSchemaData]=\"editorUISchema\"\n      (uiSchemaChange)=\"uiSchemaChange($event)\">\n    </app-ui-schema>\n\n    <app-model-schema\n      [modelSchemaData]=\"editorModelSchema\"\n      (modelSchemaChange)=\"modelSchemaChange($event)\">\n    </app-model-schema>\n\n\n  </div>\n  <div class=\"col-sm-6\">\n\n\n\n      <!--<mat-form-field appearance=\"outline\">-->\n        <!--<mat-label>Entity</mat-label>-->\n        <!--<mat-select [(value)]=\"selected\" (selectionChange)=\"reinitialize()\">-->\n          <!--<mat-option *ngFor=\"let opt of entity\" [value]=\"opt.name\">-->\n            <!--{{opt.name}}-->\n          <!--</mat-option>-->\n        <!--</mat-select>-->\n      <!--</mat-form-field>-->\n\n      <app-form\n        [modelSchema]=\"formModelSchema\"\n        [uiSchema]=\"formUISchema\">\n      </app-form>\n\n\n  </div>\n</div>\n",
                styles: ["::ng-deep div.jsoneditor-menu{width:100%;height:35px;padding:2px;margin:0;box-sizing:border-box;color:#fff;background-color:#3883fa;border-bottom:1px solid #3883fa;display:none}mat-card{background:#f5f5f5;padding:0;border:1px solid #000}::ng-deep div.jsoneditor{border:none}"]
            }),
            __metadata("design:paramtypes", [DashboardService])
        ], DashboardComponent);
        return DashboardComponent;
    }());

    var AuthService = /** @class */ (function () {
        function AuthService(afd, afs, // Inject Firestore service
        afAuth, // Inject Firebase auth service
        router) {
            var _this = this;
            this.afd = afd;
            this.afs = afs;
            this.afAuth = afAuth;
            this.router = router;
            // Sign up with email/password
            this.SignUp = function (email, password) { return __awaiter(_this, void 0, void 0, function () {
                var result, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(email, password)];
                        case 1:
                            result = _a.sent();
                            this.SetUserData(result.user);
                            return [2 /*return*/, result];
                        case 2:
                            error_1 = _a.sent();
                            return [2 /*return*/, error_1];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            // && user.emailVerified !== false
            // Sign in with Google
            this.GoogleAuth = function () { return __awaiter(_this, void 0, void 0, function () {
                var result, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.afAuth.auth.signInWithPopup(new app.auth.GoogleAuthProvider())];
                        case 1:
                            result = _a.sent();
                            this.SetUserData(result.user);
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            window.alert(error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            // read Data from Firebase database
            this.getUsers = function () {
                var userRef = _this.afd.database.ref("users/NoWPNhcWEXX5npSgSk3GdGxIdVw2");
                userRef.once("value").then(function (snapshot) {
                    var username = snapshot.val() || "Anonymous";
                    // console.log(username);
                });
            };
            /* Saving user uiSchemaData in localstorage when
             logged in and setting up null when logged out */
            this.afAuth.authState.subscribe(function (user) {
                if (user) {
                    _this.userData = user;
                    localStorage.setItem("user", JSON.stringify(_this.userData));
                }
                else {
                    localStorage.setItem("user", null);
                    JSON.parse(localStorage.getItem("user"));
                }
            });
        }
        // Sign in with email/password
        AuthService.prototype.SignIn = function (email, password) {
            return this.afAuth.auth.signInWithEmailAndPassword(email, password);
        };
        // Send email verfificaiton when new user sign up
        AuthService.prototype.sendVerificationMail = function () {
            return this.afAuth.auth.currentUser.sendEmailVerification()
                .then(function () {
                //  this.router.navigate(["verify-email-address"]);
            });
        };
        Object.defineProperty(AuthService.prototype, "isLoggedIn", {
            // // Reset Forggot password
            // ForgotPassword(passwordResetEmail) {
            //   return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            //     .then(() => {
            //       window.alert("Password reset email sent, check your inbox.");
            //     }).catch((error) => {
            //       window.alert(error)
            //     })
            // }
            // Returns true when user is looged in and email is verified
            get: function () {
                var user = JSON.parse(localStorage.getItem("user"));
                return (user !== null) ? true : false;
            },
            enumerable: true,
            configurable: true
        });
        // Auth logic to run auth providers
        AuthService.prototype.AuthLogin = function (provider) {
            return this.afAuth.auth.signInWithPopup(provider);
        };
        // /* Setting up user uiSchemaData when sign in with username/password,
        //  sign up with username/password and sign in with social auth
        //  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
        AuthService.prototype.SetUserData = function (user) {
            var userRef = this.afd.database.ref("users/" + user.uid);
            var userData = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName === null ? "" : user.displayName,
                photoURL: user.photoURL === null ? "" : user.photoURL,
                emailVerified: user.emailVerified
            };
            var response = userRef.set(userData);
            // console.log(response);
            return response;
        };
        // const signUpRef  = this.afd.database.ref("signUp");
        // signUpRef.push(userInfo);
        //
        // console.log(db.ref("users/" + user.uid).set({
        //     firstName: user.firstName,
        //     lastName: user.lastName,
        //     email: user.email,
        //
        // }));
        // Sign out
        AuthService.prototype.SignOut = function () {
            var _this = this;
            return this.afAuth.auth.signOut().then(function () {
                localStorage.removeItem("user");
                _this.router.navigate([""]);
            });
        };
        AuthService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(core.ɵɵinject(database.AngularFireDatabase), core.ɵɵinject(firestore.AngularFirestore), core.ɵɵinject(auth.AngularFireAuth), core.ɵɵinject(router.Router)); }, token: AuthService, providedIn: "root" });
        AuthService = __decorate([
            core.Injectable({
                providedIn: "root"
            }),
            __metadata("design:paramtypes", [database.AngularFireDatabase,
                firestore.AngularFirestore,
                auth.AngularFireAuth,
                router.Router])
        ], AuthService);
        return AuthService;
    }());

    var SnackBarMessageService = /** @class */ (function () {
        function SnackBarMessageService(snackBar) {
            var _this = this;
            this.snackBar = snackBar;
            this.config = { duration: 2000 };
            this.show = function (message, action) {
                _this.snackBar.open(message, action, _this.config);
            };
        }
        SnackBarMessageService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SnackBarMessageService_Factory() { return new SnackBarMessageService(core.ɵɵinject(snackBar.MatSnackBar)); }, token: SnackBarMessageService, providedIn: "root" });
        SnackBarMessageService = __decorate([
            core.Injectable({
                providedIn: "root"
            }),
            __metadata("design:paramtypes", [material.MatSnackBar])
        ], SnackBarMessageService);
        return SnackBarMessageService;
    }());

    var SignupComponent = /** @class */ (function () {
        function SignupComponent(router, dialogRef, data, formBuilder, http, authService, commonService, snackBarMessageService) {
            var _this = this;
            this.router = router;
            this.dialogRef = dialogRef;
            this.data = data;
            this.formBuilder = formBuilder;
            this.http = http;
            this.authService = authService;
            this.commonService = commonService;
            this.snackBarMessageService = snackBarMessageService;
            this.formGroup = this.formBuilder.group({});
            this.schema = this.commonService.signUpJson;
            this.signup = function () { return __awaiter(_this, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.commonService.showHideSpinner(true);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.authService.SignUp(this.formGroup.controls["email"].value["email"], this.formGroup.controls["password"].value["password"])];
                        case 2:
                            _a.sent();
                            // this.authService.sendVerificationMail();
                            this.commonService.showHideSpinner(false);
                            this.router.navigate(["dashboard"]);
                            this.snackBarMessageService.show("User Registered Successfully");
                            this.dialogRef.close();
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            if (error_1) {
                                console.log(error_1);
                                this.snackBarMessageService.show(error_1.message);
                            }
                            this.commonService.showHideSpinner(false);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            this.getError = function (fieldName) {
                if (_this.formGroup.controls[fieldName].hasError("required")) {
                    return "You must enter a value";
                }
                if (_this.formGroup.controls[fieldName].hasError("pattern") && fieldName === ("password" || "confirmPassword")) {
                    return "This field contain only character value.";
                }
                if (_this.formGroup.controls[fieldName].hasError("pattern")) {
                    return "This field contain only character value.";
                }
                if (_this.formGroup.controls[fieldName].hasError("email")) {
                    return "Invalid Email !";
                }
                return "error";
            };
            this.addControl = function (data) {
                _this.formGroup.addControl(data.key, data.value);
                _this.formGroup.updateValueAndValidity();
            };
        }
        SignupComponent.prototype.ngOnInit = function () {
        };
        SignupComponent.prototype.cancel = function () {
            this.dialogRef.close();
        };
        SignupComponent = __decorate([
            core.Component({
                selector: "app-signup",
                template: "<div class=\"main\">\n  <h2 mat-dialog-title>Sign Up</h2>\n  <mat-dialog-content>\n    <form [formGroup]=\"formGroup\" class=\"ex-form\">\n      <div>\n        <ng-container *ngFor=\"let property of schema.properties;let i=index;\">\n          <!--Form field for text input  -->\n          <div class=\"form-group\" *ngIf=\"property.dataType=='String'\">\n            <app-text-field [property]=\"property\"\n                            (addControl)= \"addControl($event)\" >\n            </app-text-field>\n          </div>\n\n          <!--Form field for number input  -->\n          <div class=\"form-group\" *ngIf=\"property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n            <app-number-field [property]=\"property\"\n                              (addControl)= \"addControl($event)\" >\n            </app-number-field>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"property.dataType=='Email'\" style=\"margin-bottom:0;\">\n\n            <app-email-field  [property]=\"property\"\n                              (addControl)= \"addControl($event)\" >\n            </app-email-field>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"property.dataType=='Password'\" style=\"margin-bottom:0;\">\n\n            <app-password-field  [property]=\"property\"\n                                 (addControl)= \"addControl($event)\" >\n            </app-password-field>\n          </div>\n\n        </ng-container>\n      </div>\n\n    </form>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-button (click)=\"signup()\" [disabled]=\"!formGroup.valid\" color=\"primary\">Sign Up</button>\n    <button mat-button (click)=\"cancel()\" color=\"primary\">Cancel</button>\n\n  </mat-dialog-actions>\n\n</div>\n",
                styles: [".asterik{color:red}.main{width:450px;height:auto}.form-group{padding:0;margin-bottom:3px}.mat-form-field{-webkit-appearance:none;-moz-appearance:none;appearance:none}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}"]
            }),
            __param(2, core.Inject(material.MAT_DIALOG_DATA)),
            __metadata("design:paramtypes", [router.Router, material.MatDialogRef, Object, forms.FormBuilder, http.HttpClient, AuthService,
                CommonService, SnackBarMessageService])
        ], SignupComponent);
        return SignupComponent;
    }());

    var LoginComponent = /** @class */ (function () {
        function LoginComponent(router, dialogRef, data, formBuilder, authService, commonService, snackBarMessageService, dialog) {
            var _this = this;
            this.router = router;
            this.dialogRef = dialogRef;
            this.data = data;
            this.formBuilder = formBuilder;
            this.authService = authService;
            this.commonService = commonService;
            this.snackBarMessageService = snackBarMessageService;
            this.dialog = dialog;
            this.login = function (mode) { return __awaiter(_this, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.commonService.showHideSpinner(true);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 6, , 7]);
                            if (!(mode === "google")) return [3 /*break*/, 3];
                            this.commonService.showHideSpinner(false);
                            return [4 /*yield*/, this.authService.GoogleAuth()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 3: return [4 /*yield*/, this.authService.SignIn(this.formGroup.controls["email"].value, this.formGroup.controls["password"].value)];
                        case 4:
                            _a.sent();
                            this.commonService.showHideSpinner(false);
                            _a.label = 5;
                        case 5:
                            this.snackBarMessageService.show("LogIn Successfull");
                            this.router.navigate(["dashboard"]);
                            this.dialogRef.close();
                            return [3 /*break*/, 7];
                        case 6:
                            error_1 = _a.sent();
                            if (error_1) {
                                if (error_1.code === "auth/user-not-found") {
                                    this.openSignupDialog();
                                }
                                else {
                                    this.snackBarMessageService.show(error_1.message);
                                }
                            }
                            this.commonService.showHideSpinner(false);
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            }); };
            this.getError = function (fieldName) {
                if (_this.formGroup.controls[fieldName].hasError("required")) {
                    return fieldName + " is required. ";
                }
                if (_this.formGroup.controls[fieldName].hasError("email")) {
                    return "Invalid Email !";
                }
                return "error";
            };
            this.openSignupDialog = function () {
                _this.dialog.closeAll();
                var dialogRef = _this.dialog.open(SignupComponent);
                dialogRef.afterClosed().subscribe(function (result) {
                });
            };
        }
        LoginComponent.prototype.ngOnInit = function () {
            this.formGroup = this.formBuilder.group({
                email: ["r@gmail.com", [forms.Validators.required, forms.Validators.email]],
                password: ["rishi1997", [forms.Validators.required]]
            });
            this.authService.getUsers();
        };
        LoginComponent.prototype.cancel = function () {
            this.dialogRef.close();
        };
        LoginComponent = __decorate([
            core.Component({
                selector: "app-login",
                template: "<div class=\"main\">\n  <h2 mat-dialog-title>Login</h2>\n\n  <mat-dialog-content>\n    <form class=\"example-form\" [formGroup]=\"formGroup\">\n\n      <div class=\"col-sm-12\" style=\"padding: 0;margin-top:7px\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Email</mat-label>\n          <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n          <mat-error *ngIf=\"formGroup.controls['email'].invalid\">{{getError(\"email\")}}</mat-error>\n\n        </mat-form-field>\n\n      </div>\n      <div class=\"col-sm-12\" style=\"padding: 0;margin-top:7px\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input matInput  type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n          <mat-error *ngIf=\"formGroup.controls['password'].invalid\">{{getError(\"password\")}}</mat-error>\n\n        </mat-form-field>\n      </div>\n\n\n\n\n    </form>\n\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n\n      <div class=\"googleLogin\" style=\"width:100%\">\n        <button mat-raised-button color=\"warn\" (click)=\"login('google')\" style=\"width:100%\">\n          <span><i class=\"fab fa-google-plus-g\"></i>&nbsp;&nbsp;Log in with Google</span>\n        </button>\n\n\n\n      </div>\n\n    <div class=\"login-actions col-sm-12 row\">\n      <div class=\"col-sm-6\">\n        <button mat-raised-button color=\"primary\" (click)=\"login('email')\" [disabled]=\"this.formGroup.invalid\">Login</button>\n\n      </div>\n      <div class=\"col-sm-6\">\n        <button mat-raised-button (click)=\"cancel()\">Cancel</button>\n\n      </div>\n\n    </div>\n\n    <!--<button type=\"button\" class=\"btn googleBtn\" (click)=\"authService.GoogleAuth()\">-->\n      <!--<i class=\"fab fa-google-plus-g\"></i>-->\n      <!--Log in with Google-->\n    <!--</button>-->\n  </mat-dialog-actions>\n\n</div>\n",
                styles: [".main{width:300px;height:280px}.mat-form-field{display:block}.googleLogin{color:#fff;margin-left:0}.login-actions{margin:6px 0 0;text-align:center;padding:0}.login-actions button{width:100%}.login-actions div{padding:0}.login-actions div:first-child{padding-right:5px}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}"]
            }),
            __param(2, core.Inject(material.MAT_DIALOG_DATA)),
            __metadata("design:paramtypes", [router.Router, material.MatDialogRef, Object, forms.FormBuilder, AuthService, CommonService,
                SnackBarMessageService, material.MatDialog])
        ], LoginComponent);
        return LoginComponent;
    }());

    var AuthenticationGuard = /** @class */ (function () {
        function AuthenticationGuard(authService, router, dialog, dashboardService) {
            var _this = this;
            this.authService = authService;
            this.router = router;
            this.dialog = dialog;
            this.dashboardService = dashboardService;
            this.init = function () { return __awaiter(_this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = this.dashboardService;
                            return [4 /*yield*/, this.dashboardService.init()];
                        case 1:
                            _a.modelSchema = _c.sent();
                            _b = this.dashboardService;
                            return [4 /*yield*/, this.dashboardService.initUiSchema()];
                        case 2:
                            _b.UISchema = _c.sent();
                            return [2 /*return*/, true];
                    }
                });
            }); };
        }
        AuthenticationGuard.prototype.canActivate = function (next, state) {
            if (!this.authService.isLoggedIn) {
                var dialogRef = this.dialog.open(LoginComponent);
                dialogRef.afterClosed().subscribe(function (result) {
                });
                return false;
            }
            return this.init();
        };
        AuthenticationGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AuthenticationGuard_Factory() { return new AuthenticationGuard(core.ɵɵinject(AuthService), core.ɵɵinject(router.Router), core.ɵɵinject(dialog.MatDialog), core.ɵɵinject(DashboardService)); }, token: AuthenticationGuard, providedIn: "root" });
        AuthenticationGuard = __decorate([
            core.Injectable({
                providedIn: "root"
            }),
            __metadata("design:paramtypes", [AuthService, router.Router, material.MatDialog,
                DashboardService])
        ], AuthenticationGuard);
        return AuthenticationGuard;
    }());

    var routes = [
        { path: "dashboard", component: DashboardComponent, canActivate: [AuthenticationGuard] }
    ];
    var AppRoutingModule = /** @class */ (function () {
        function AppRoutingModule() {
        }
        AppRoutingModule = __decorate([
            core.NgModule({
                imports: [router.RouterModule.forRoot(routes)],
                exports: [router.RouterModule]
            })
        ], AppRoutingModule);
        return AppRoutingModule;
    }());

    var ToolBarComponent = /** @class */ (function () {
        function ToolBarComponent(dialog, authService) {
            var _this = this;
            this.dialog = dialog;
            this.authService = authService;
            this.openLoginDialog = function () {
                var dialogRef = _this.dialog.open(LoginComponent);
                dialogRef.afterClosed().subscribe(function (result) {
                });
            };
            this.openSignupDialog = function () {
                var dialogRef = _this.dialog.open(SignupComponent);
                dialogRef.afterClosed().subscribe(function (result) {
                });
            };
        }
        ToolBarComponent.prototype.ngOnInit = function () {
        };
        ToolBarComponent = __decorate([
            core.Component({
                selector: "app-tool-bar",
                template: "<mat-toolbar color=\"primary\">\n  <span>Dynamic Form</span>\n\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"example-fill-remaining-space\"></span>\n\n  <!-- login Button -->\n  <button mat-button (click)=\"openLoginDialog()\" *ngIf=\"!authService.isLoggedIn\">Login</button>\n  <button mat-button (click)=\"openSignupDialog()\" *ngIf=\"!authService.isLoggedIn\">Sign Up</button>\n  <button mat-button (click)=\"authService.SignOut()\" *ngIf=\"authService.isLoggedIn\">Logout</button>\n\n\n</mat-toolbar>\n",
                styles: [".example-fill-remaining-space{flex:1 1 auto}"]
            }),
            __metadata("design:paramtypes", [material.MatDialog, AuthService])
        ], ToolBarComponent);
        return ToolBarComponent;
    }());

    var EmailFieldComponent = /** @class */ (function () {
        function EmailFieldComponent(formBuilder, validationMessageGenerator) {
            var _this = this;
            this.formBuilder = formBuilder;
            this.validationMessageGenerator = validationMessageGenerator;
            this.addControl = new core.EventEmitter();
            this.addValidator = function () {
                var _a;
                var validators = [];
                if (_this.property.required) {
                    validators.push(new RequiredValidator().get());
                }
                validators.push(forms.Validators.email);
                _this.formGroup = _this.formBuilder.group((_a = {},
                    _a[_this.property.name] = [{
                            value: "",
                            disabled: !_this.property.enable
                        }, validators],
                    _a));
                _this.formGroup.updateValueAndValidity();
                _this.addControl.emit({ key: _this.property.name, value: _this.formGroup });
            };
            this.getError = function () {
                return _this.validationMessageGenerator.errorMessage(_this.formGroup, _this.property);
            };
        }
        EmailFieldComponent.prototype.ngOnInit = function () {
            this.addValidator();
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], EmailFieldComponent.prototype, "property", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], EmailFieldComponent.prototype, "addControl", void 0);
        EmailFieldComponent = __decorate([
            core.Component({
                selector: "app-email-field",
                template: "<div [formGroup]=\"formGroup\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n    <input matInput #input\n           formControlName={{property.name}}\n           placeholder={{property.alias}}\n           type=\"email\">\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n</div>\n",
                styles: [".mat-form-field{width:100%}.asterik{color:red}"]
            }),
            __metadata("design:paramtypes", [forms.FormBuilder, ValidationMessageGeneratorService])
        ], EmailFieldComponent);
        return EmailFieldComponent;
    }());

    var PasswordFieldComponent = /** @class */ (function () {
        function PasswordFieldComponent(formBuilder, validationMessageGenerator) {
            var _this = this;
            this.formBuilder = formBuilder;
            this.validationMessageGenerator = validationMessageGenerator;
            this.addControl = new core.EventEmitter();
            this.addValidator = function () {
                // validators.push(new RequiredValidator());
                var _a;
                var validators = [];
                if (_this.property.required) {
                    validators.push(new RequiredValidator().get());
                }
                if (_this.property.minLength && _this.property.minLength != null) {
                    validators.push(new MinLengthValidator().get(_this.property.minLength));
                }
                if (_this.property.maxLength && _this.property.maxLength != null) {
                    validators.push(new MaxLengthValidator().get(_this.property.maxLength));
                }
                if (_this.property.pattern && _this.property.pattern != null) {
                    validators.push(new PatternValidator().get(_this.property.pattern));
                }
                _this.formGroup = _this.formBuilder.group((_a = {}, _a[_this.property.name] = [{ value: "", disabled: !_this.property.enable }, validators], _a));
                _this.formGroup.updateValueAndValidity();
                _this.addControl.emit({ key: _this.property.name, value: _this.formGroup });
            };
            this.getError = function () {
                return _this.validationMessageGenerator.errorMessage(_this.formGroup, _this.property);
            };
        }
        PasswordFieldComponent.prototype.ngOnInit = function () {
            this.addValidator();
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], PasswordFieldComponent.prototype, "property", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], PasswordFieldComponent.prototype, "addControl", void 0);
        PasswordFieldComponent = __decorate([
            core.Component({
                selector: "app-password-field",
                template: "<div [formGroup]=\"formGroup\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n    <input matInput #input\n           formControlName={{property.name}}\n           placeholder={{property.alias}}\n           type=\"password\"\n           [attr.maxlength] = \"property.maxLength ? null : property.maxLength\"\n           [attr.minlength] = \"property.minLength ? null : property.minLength\" >\n\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n</div>\n",
                styles: [".mat-form-field{width:100%}.asterik{color:red}"]
            }),
            __metadata("design:paramtypes", [forms.FormBuilder, ValidationMessageGeneratorService])
        ], PasswordFieldComponent);
        return PasswordFieldComponent;
    }());

    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.
    var environment = {
        production: false,
        firebaseConfig: {
            apiKey: "AIzaSyAhthWRtzWHuG_C6xyKhNU3wPD_Ck9PS34",
            authDomain: "form-35b09.firebaseapp.com",
            databaseURL: "https://form-35b09.firebaseio.com",
            projectId: "form-35b09",
            storageBucket: "",
            messagingSenderId: "368882932305",
            appId: "1:368882932305:web:891e308aaacd6c73"
        }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    var LoadingSpinnerComponent = /** @class */ (function () {
        function LoadingSpinnerComponent() {
        }
        LoadingSpinnerComponent.prototype.ngOnInit = function () {
        };
        LoadingSpinnerComponent = __decorate([
            core.Component({
                selector: "app-loading-spinner",
                template: "<div class=\"spinner-wrapper\">\n  <div class=\"spinner\">\n    <div class=\"rect1\"></div>\n    <div class=\"rect2\"></div>\n    <div class=\"rect3\"></div>\n    <div class=\"rect4\"></div>\n    <div class=\"rect5\"></div>\n  </div>\n</div>\n\n\n",
                styles: [".spinner-wrapper{display:flex;z-index:9998;opacity:.5;pointer-events:none;position:absolute;top:0;right:0;left:0;bottom:0}.spinner{width:50px;height:40px;text-align:center;font-size:10px;margin:auto;z-index:9999}.spinner>div{background-color:#003cff;height:100%;width:6px;display:inline-block;-webkit-animation:1.2s ease-in-out infinite sk-stretchdelay;animation:1.2s ease-in-out infinite sk-stretchdelay}.spinner .rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.spinner .rect3{-webkit-animation-delay:-1s;animation-delay:-1s}.spinner .rect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}.spinner .rect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-stretchdelay{0%,100%,40%{-webkit-transform:scaleY(.4)}20%{-webkit-transform:scaleY(1)}}@keyframes sk-stretchdelay{0%,100%,40%{transform:scaleY(.4);-webkit-transform:scaleY(.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}"]
            }),
            __metadata("design:paramtypes", [])
        ], LoadingSpinnerComponent);
        return LoadingSpinnerComponent;
    }());

    var StepFormComponent = /** @class */ (function () {
        function StepFormComponent(formBuilder) {
            var _this = this;
            this.formBuilder = formBuilder;
            this.formGroup = this.formBuilder.group({});
            this.addControl = function (data) {
                _.each(_this.uiSchema.steps, function (step) {
                    var matchedField = _.find(step.fields, function (field) {
                        return field.name === data.key;
                    });
                    if (matchedField) {
                        var fc = _this.formGroup.controls[step.sequence - 1];
                        fc.addControl(data.key, data.value);
                        _this.formGroup.updateValueAndValidity();
                    }
                });
            };
            this.formValue = function () {
                console.log(_this.formGroup.getRawValue());
            };
            this.reset = function () {
                _this.formGroup.reset();
            };
        }
        StepFormComponent.prototype.ngOnInit = function () {
            var _this = this;
            var allSteps = [];
            var steps = _.range(this.uiSchema.totalSteps);
            steps.forEach(function (step) {
                allSteps[step] = _this.formBuilder.group({});
            });
            this.formGroup = this.formBuilder.group(allSteps);
        };
        StepFormComponent.prototype.ngOnChanges = function () {
            this.formGroup = this.formBuilder.group({}); // when ui or model formSchema changes re initialize form group
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], StepFormComponent.prototype, "uiSchema", void 0);
        StepFormComponent = __decorate([
            core.Component({
                selector: "app-step-form",
                template: "  <div class=\"ex-form\">\n\n    <h5>{{uiSchema.name}}</h5>\n\n  <mat-horizontal-stepper [linear]=\"true\" labelPosition=\"bottom\" #stepper>\n\n\n    <ng-container *ngFor=\"let stepControl of formGroup.controls | keyvalue;let i = index;\">\n\n        <mat-step [stepControl]=\"stepControl.value\" [completed]=\"false\">\n          <form [formGroup]=\"stepControl.value\" >\n            <div class=\"row\">\n              <ng-container *ngFor=\"let property of uiSchema.steps[i].fields;\">\n                <ng-template matStepLabel  matStepperIcon=\"number\">{{uiSchema.steps[i].label}}</ng-template>\n\n                <!--Form field for text input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='String'\">\n                  <app-text-field [property]=\"property\"\n                                  (addControl)= \"addControl($event)\" >\n                  </app-text-field>\n                </div>\n\n                <!--Form field for email input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Email'\">\n\n                  <app-email-field  [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-email-field>\n                </div>\n\n                <!--Form field for password input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Password'\">\n\n                  <app-password-field  [property]=\"property\"\n                                       (addControl)= \"addControl($event)\" >\n                  </app-password-field>\n                </div>\n                <!--Form field for number input  -->\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n                  <app-number-field [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-number-field>\n\n                </div>\n\n                <!--Form field for enumeration-->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Enumeration'\"\n                     style=\"margin-bottom:0px;\">\n                  <app-dropdown [property]=\"property\"\n                                (addControl)= \"addControl($event)\" >\n                  </app-dropdown>\n\n                </div>\n\n                <!--Form field for Measure Datatype-->\n\n                <div class=\"form-group col-sm-6\"\n                     *ngIf=\"property && property.dataType=='Measure'\"\n                     style=\"margin-bottom:0;padding-right: 0;\">\n\n\n\n                  <app-measure\n                    [property]=\"property\"\n                    (addControl)= \"addControl($event)\" >\n                  </app-measure>\n\n                </div>\n              </ng-container>\n\n            </div>\n\n            <div>\n              <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n            </div>\n            <div class=\"btn btn-toolbar\">\n              <button mat-button matStepperPrevious *ngIf=\"i > 0\">Back</button>\n              <button\n                mat-button\n                matStepperNext\n                *ngIf=\"i < uiSchema.totalSteps-1\">\n                Next\n              </button>\n\n              <button\n                mat-raised-button\n                type=\"button\"\n                color=\"primary\"\n                *ngIf= \"i === uiSchema.totalSteps-1\"\n                (click)=\"formValue()\"\n                [disabled]=\"!formGroup.valid\">\n                Submit\n              </button>\n            </div>\n\n          </form>\n\n        </mat-step>\n\n\n    </ng-container>\n  </mat-horizontal-stepper>\n\n</div>\n\n",
                styles: [".jumbotron{background-color:#f8f9fa;padding:15px;margin-top:56px}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}.asterik{color:red}.ex-form{background:#fff;box-shadow:0 2px 6px 4px rgba(0,0,0,.14);border-radius:15px;padding:20px}.padding-right-zero{padding-right:0}.padding-zero{padding:0}::ng-deep .mat-horizontal-stepper-header{pointer-events:none!important}"]
            }),
            __metadata("design:paramtypes", [forms.FormBuilder])
        ], StepFormComponent);
        return StepFormComponent;
    }());

    var SimpleComponent = /** @class */ (function () {
        function SimpleComponent(formBuilder) {
            var _this = this;
            this.formBuilder = formBuilder;
            this.formGroup = this.formBuilder.group({});
            this.addControl = function (data) {
                _this.formGroup.addControl(data.key, data.value);
                _this.formGroup.updateValueAndValidity();
            };
            this.getFormValue = function () {
                console.log(_this.formGroup.getRawValue());
            };
            this.reset = function () {
                console.log(_this.formGroup);
                _this.formGroup.reset();
            };
        }
        SimpleComponent.prototype.ngOnInit = function () {
        };
        SimpleComponent.prototype.ngOnChanges = function () {
            this.formGroup = this.formBuilder.group({}); // when ui or model formSchema changes re initialize form group
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SimpleComponent.prototype, "uiSchema", void 0);
        SimpleComponent = __decorate([
            core.Component({
                selector: "app-simple",
                template: "<div>\n  <form [formGroup]=\"formGroup\" class=\"ex-form\">\n    <h5>{{uiSchema.name}}</h5>\n    <div class=\"row\">\n      <ng-container *ngFor=\"let property of uiSchema.fields; let i=index;\">\n        <!--Form field for text input  -->\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='String'\">\n          <app-text-field [property]=\"property\"\n                          (addControl)= \"addControl($event)\" >\n          </app-text-field>\n        </div>\n\n\n        <!--Form field for password input  -->\n\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Password'\">\n\n          <app-password-field  [property]=\"property\"\n                               (addControl)= \"addControl($event)\" >\n          </app-password-field>\n        </div>\n\n        <!--Form field for email input  -->\n\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Email'\">\n\n          <app-email-field  [property]=\"property\"\n                            (addControl)= \"addControl($event)\" >\n          </app-email-field>\n        </div>\n\n        <!--Form field for number input  -->\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n          <app-number-field [property]=\"property\"\n                            (addControl)= \"addControl($event)\" >\n          </app-number-field>\n\n        </div>\n        <!--Form field for enumeration-->\n\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Enumeration'\"\n             style=\"margin-bottom:0px;\">\n          <app-dropdown [property]=\"property\"\n                        (addControl)= \"addControl($event)\" >\n          </app-dropdown>\n\n        </div>\n\n\n\n        <div class=\"form-group col-sm-6\"\n             *ngIf=\"property && property.dataType=='Measure'\"\n             style=\"margin-bottom:0;\n                    padding-right:0;\">\n\n\n          <app-measure\n            [property]=\"property\"\n            (addControl)= \"addControl($event)\" >\n          </app-measure>\n\n        </div>\n\n      </ng-container>\n    </div>\n\n    <div>\n      <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n    </div>\n    <div class=\"btn btn-toolbar\">\n\n      <button type=\"button\" class=\"btn btn-primary\" (click)= \"getFormValue()\" [disabled]=\"!formGroup.valid\">Submit</button>\n      &nbsp; &nbsp;\n\n      <button type=\"button\" (click)=\"reset()\" class=\"btn btn-primary\">Reset</button>\n    </div>\n\n  </form>\n\n</div>\n",
                styles: [".jumbotron{background-color:#f8f9fa;padding:15px;margin-top:56px}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}.asterik{color:red}.ex-form{background:#fff;box-shadow:0 2px 6px 4px rgba(0,0,0,.14);border-radius:15px;padding:20px}.padding-right-zero{padding-right:0}.padding-zero{padding:0}"]
            }),
            __metadata("design:paramtypes", [forms.FormBuilder])
        ], SimpleComponent);
        return SimpleComponent;
    }());

    var AccordianComponent = /** @class */ (function () {
        function AccordianComponent(formBuilder) {
            var _this = this;
            this.formBuilder = formBuilder;
            this.formGroup = this.formBuilder.group({});
            this.step = 0;
            this.addControl = function (data) {
                _.each(_this.uiSchema.steps, function (step) {
                    var matchedField = _.find(step.fields, function (field) {
                        return field.name === data.key;
                    });
                    if (matchedField) {
                        var fc = _this.formGroup.controls[step.sequence - 1];
                        fc.addControl(data.key, data.value);
                        _this.formGroup.updateValueAndValidity();
                    }
                });
            };
            this.formValue = function () {
                console.log(_this.formGroup.getRawValue());
            };
            this.reset = function () {
                _this.formGroup.reset();
            };
        }
        AccordianComponent.prototype.ngOnInit = function () {
            var _this = this;
            console.log("UI Schema", this.uiSchema);
            var allSteps = [];
            var steps = _.range(this.uiSchema.totalSteps);
            steps.forEach(function (step) {
                allSteps[step] = _this.formBuilder.group({});
            });
            this.formGroup = this.formBuilder.group(allSteps);
        };
        AccordianComponent.prototype.ngOnChanges = function () {
            this.formGroup = this.formBuilder.group({}); // when ui or model formSchema changes re initialize form group
        };
        AccordianComponent.prototype.setStep = function (index) {
            this.step = index;
        };
        AccordianComponent.prototype.nextStep = function () {
            this.step++;
        };
        AccordianComponent.prototype.prevStep = function () {
            this.step--;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AccordianComponent.prototype, "uiSchema", void 0);
        AccordianComponent = __decorate([
            core.Component({
                selector: "app-accordian",
                template: "<div class=\"ex-form\">\n\n  <h5>{{uiSchema.name}}</h5>\n\n  <div style=\"margin: 3% 0;\">\n\n\n    <mat-accordion class=\"example-headers-align\">\n\n      <ng-container *ngFor=\"let stepControl of formGroup.controls | keyvalue;let i = index;\">\n\n        <mat-expansion-panel [expanded]=\"step === uiSchema.steps[i].sequence-1 \" (opened)=\"setStep(uiSchema.steps[i].sequence-1)\" hideToggle>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n             <b> {{uiSchema.steps[i].label}}</b>\n            </mat-panel-title>\n            <mat-panel-description>\n              {{uiSchema.steps[i].description}}\n              <!--<mat-icon>account_circle</mat-icon>-->\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n\n\n          <form [formGroup]=\"stepControl.value\" style=\"margin-top: 20px\" >\n            <div class=\"row\">\n              <ng-container *ngFor=\"let property of uiSchema.steps[i].fields;\">\n                <ng-template matStepLabel  matStepperIcon=\"number\">{{uiSchema.steps[i].label}}</ng-template>\n\n                <!--Form field for text input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='String'\">\n                  <app-text-field [property]=\"property\"\n                                  (addControl)= \"addControl($event)\" >\n                  </app-text-field>\n                </div>\n\n                <!--Form field for email input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Email'\">\n\n                  <app-email-field  [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-email-field>\n                </div>\n\n                <!--Form field for password input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Password'\">\n\n                  <app-password-field  [property]=\"property\"\n                                       (addControl)= \"addControl($event)\" >\n                  </app-password-field>\n                </div>\n                <!--Form field for number input  -->\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n                  <app-number-field [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-number-field>\n\n                </div>\n\n                <!--Form field for enumeration-->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Enumeration'\"\n                     style=\"margin-bottom:0px;\">\n                  <app-dropdown [property]=\"property\"\n                                (addControl)= \"addControl($event)\" >\n                  </app-dropdown>\n\n                </div>\n\n                <!--Form field for Measure Datatype-->\n\n                <div class=\"form-group col-sm-6\"\n                     *ngIf=\"property && property.dataType=='Measure'\"\n                     style=\"margin-bottom:0;padding-right: 0;\">\n\n\n\n                  <app-measure\n                    [property]=\"property\"\n                    (addControl)= \"addControl($event)\" >\n                  </app-measure>\n\n                </div>\n              </ng-container>\n\n            </div>\n\n            <div>\n              <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n            </div>\n            <div class=\"btn btn-toolbar\">\n              <button mat-button\n                      *ngIf=\"i > 0\"\n                      (click)=\"prevStep()\">\n                Back\n              </button>\n              <button\n                mat-button\n                [disabled]=\"!stepControl.value.valid\"\n                (click)=\"nextStep()\"\n                *ngIf=\"i < uiSchema.totalSteps-1\">\n                Next\n              </button>\n\n              <button\n                mat-raised-button\n                type=\"button\"\n                color=\"primary\"\n                *ngIf= \"i === uiSchema.totalSteps-1\"\n                (click)=\"formValue()\"\n                [disabled]=\"!formGroup.valid\">\n                Submit\n              </button>\n            </div>\n\n          </form>\n\n        </mat-expansion-panel>\n\n      </ng-container>\n\n    </mat-accordion>\n  </div>\n\n</div>\n",
                styles: ["::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}.asterik{color:red}.ex-form{background:#fff;box-shadow:0 1px 2px 2px rgba(0,0,0,.14);padding:30px}.padding-right-zero{padding-right:0}.padding-zero{padding:0}mat-expansion-panel{margin-bottom:20px}"]
            }),
            __metadata("design:paramtypes", [forms.FormBuilder])
        ], AccordianComponent);
        return AccordianComponent;
    }());

    var TabComponent = /** @class */ (function () {
        function TabComponent(formBuilder) {
            var _this = this;
            this.formBuilder = formBuilder;
            this.formGroup = this.formBuilder.group({});
            this.buildStepFormGroup = function () {
                var allSteps = [];
                var steps = _.range(_this.uiSchema.totalSteps);
                steps.forEach(function (step) {
                    allSteps[step] = _this.formBuilder.group({});
                });
                _this.formGroup = _this.formBuilder.group(allSteps);
            };
            this.addControl = function (data) {
                _.each(_this.uiSchema.steps, function (step) {
                    var matchedField = _.find(step.fields, function (field) {
                        return field.name === data.key;
                    });
                    if (matchedField) {
                        var fc = _this.formGroup.controls[step.sequence - 1];
                        fc.addControl(data.key, data.value);
                        _this.formGroup.updateValueAndValidity();
                    }
                });
            };
            this.formValue = function () {
                console.log(_this.formGroup.getRawValue());
            };
            this.reset = function () {
                _this.formGroup.reset();
            };
        }
        TabComponent.prototype.ngOnInit = function () {
            this.buildStepFormGroup();
        };
        TabComponent.prototype.ngOnChanges = function () {
            this.buildStepFormGroup();
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], TabComponent.prototype, "uiSchema", void 0);
        TabComponent = __decorate([
            core.Component({
                selector: "app-tab",
                template: "\n\n\n\n<div class=\"ex-form\">\n\n  <h5>{{uiSchema.name}}</h5>\n\n  <mat-tab-group animationDuration=\"0ms\" #tabGroup>\n\n\n    <ng-container *ngFor=\"let stepControl of formGroup.controls | keyvalue;let i = index;\">\n\n      <!--<mat-step [stepControl]=\"stepControl.value\" [completed]=\"false\">-->\n        <mat-tab [label] = \"uiSchema.steps[i].label\">\n          <form [formGroup]=\"stepControl.value\" >\n            <div class=\"row\">\n              <ng-container *ngFor=\"let property of uiSchema.steps[i].fields;\">\n                <ng-template matStepLabel  matStepperIcon=\"number\">{{uiSchema.steps[i].label}}</ng-template>\n\n                <!--Form field for text input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='String'\">\n                  <app-text-field [property]=\"property\"\n                                  (addControl)= \"addControl($event)\" >\n                  </app-text-field>\n                </div>\n\n                <!--Form field for email input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Email'\">\n\n                  <app-email-field  [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-email-field>\n                </div>\n\n                <!--Form field for password input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Password'\">\n\n                  <app-password-field  [property]=\"property\"\n                                       (addControl)= \"addControl($event)\" >\n                  </app-password-field>\n                </div>\n\n                <!--Form field for number input  -->\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n                  <app-number-field [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-number-field>\n\n                </div>\n\n                <!--Form field for enumeration-->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Enumeration'\"\n                     style=\"margin-bottom:0px;\">\n                  <app-dropdown [property]=\"property\"\n                                (addControl)= \"addControl($event)\" >\n                  </app-dropdown>\n\n                </div>\n\n                <!--Form field for Measure Datatype-->\n\n                <div class=\"form-group col-sm-6\"\n                     *ngIf=\"property && property.dataType=='Measure'\"\n                     style=\"margin-bottom:0;padding-right: 0;\">\n\n\n\n                  <app-measure\n                    [property]=\"property\"\n                    (addControl)= \"addControl($event)\" >\n                  </app-measure>\n\n                </div>\n              </ng-container>\n\n            </div>\n\n            <div>\n              <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n            </div>\n            <div class=\"btn btn-toolbar\">\n              <button mat-button *ngIf=\"i > 0\"\n                      (click)=\"tabGroup.selectedIndex = i-1\">Back</button>\n              <button\n                mat-button\n                *ngIf=\"i < uiSchema.totalSteps-1\"\n                [disabled]=\"!stepControl.value.valid\"\n                (click)=\"tabGroup.selectedIndex = i+1\">\n                Next\n              </button>\n\n              <button\n                mat-raised-button\n                type=\"button\"\n                color=\"primary\"\n                *ngIf= \"i === uiSchema.totalSteps-1\"\n                (click)=\"formValue()\"\n                [disabled]=\"!formGroup.valid\">\n                Submit\n              </button>\n            </div>\n\n          </form>\n        </mat-tab>\n\n\n\n      <!--</mat-step>-->\n\n\n    </ng-container>\n  </mat-tab-group>\n\n</div>\n\n",
                styles: ["::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}.asterik{color:red}.ex-form{background:#fff;box-shadow:0 2px 6px 4px rgba(0,0,0,.14);border-radius:15px;padding:20px}.padding-right-zero{padding-right:0}.padding-zero{padding:0}::ng-deep .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;pointer-events:none}::ng-deep .mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height .5s cubic-bezier(.35,0,.25,1);margin:25px 0 0}::ng-deep .mat-tab-body-content{overflow:visible!important}"]
            }),
            __metadata("design:paramtypes", [forms.FormBuilder])
        ], TabComponent);
        return TabComponent;
    }());

    var UiSchemaComponent = /** @class */ (function () {
        function UiSchemaComponent() {
            this.uiSchemaChange = new core.EventEmitter();
            this.uiSchemaEditorOptions = new angJsoneditor.JsonEditorOptions();
            this.uiSchemaEditorOptions.mode = "code";
        }
        UiSchemaComponent.prototype.ngOnInit = function () {
            console.log("Old UI Schema", this.uiSchemaData);
        };
        UiSchemaComponent.prototype.getData = function (event) {
            if (this.editor.isValidJson()) {
                this.uiSchemaChange.emit(this.editor.get());
            }
            else {
                console.log("UI Schema is incorrect");
            }
        };
        __decorate([
            core.ViewChild(angJsoneditor.JsonEditorComponent, { static: false }),
            __metadata("design:type", angJsoneditor.JsonEditorComponent)
        ], UiSchemaComponent.prototype, "editor", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], UiSchemaComponent.prototype, "uiSchemaData", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], UiSchemaComponent.prototype, "uiSchemaChange", void 0);
        UiSchemaComponent = __decorate([
            core.Component({
                selector: "app-ui-schema",
                template: "<div style=\"margin-bottom: 10px;\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>UI Schema</mat-card-title>\n    </mat-card-header>\n\n    <mat-card-content>\n      <json-editor [options]=\"uiSchemaEditorOptions\" [data]=\"uiSchemaData\" (keyup)=\"getData($event)\"></json-editor>\n    </mat-card-content>\n  </mat-card>\n\n</div>\n",
                styles: ["::ng-deep div.jsoneditor-menu{width:100%;height:35px;padding:2px;margin:0;box-sizing:border-box;color:#fff;background-color:#3883fa;border-bottom:1px solid #3883fa;display:none}mat-card{background:#f5f5f5;padding:0;border:1px solid #000}::ng-deep div.jsoneditor{border:none}"]
            }),
            __metadata("design:paramtypes", [])
        ], UiSchemaComponent);
        return UiSchemaComponent;
    }());

    var ModelSchemaComponent = /** @class */ (function () {
        function ModelSchemaComponent() {
            this.modelSchemaChange = new core.EventEmitter();
            this.modelSchemaEditorOptions = new angJsoneditor.JsonEditorOptions();
            this.modelSchemaEditorOptions.mode = "code";
        }
        ModelSchemaComponent.prototype.ngOnInit = function () {
            console.log("Old model Schema", this.modelSchemaData);
        };
        ModelSchemaComponent.prototype.getData = function (event) {
            if (this.editor.isValidJson()) {
                this.modelSchemaChange.emit(this.editor.get());
                console.log("correct");
            }
            else {
                // console.log("UI Schema is incorrect");
            }
        };
        __decorate([
            core.ViewChild(angJsoneditor.JsonEditorComponent, { static: false }),
            __metadata("design:type", angJsoneditor.JsonEditorComponent)
        ], ModelSchemaComponent.prototype, "editor", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], ModelSchemaComponent.prototype, "modelSchemaData", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], ModelSchemaComponent.prototype, "modelSchemaChange", void 0);
        ModelSchemaComponent = __decorate([
            core.Component({
                selector: "app-model-schema",
                template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Model Schema</mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n    <json-editor [options]=\"modelSchemaEditorOptions\" [data]=\"modelSchemaData\" (keyup)=\"getData($event)\"></json-editor>\n  </mat-card-content>\n</mat-card>\n",
                styles: ["::ng-deep div.jsoneditor-menu{width:100%;height:35px;padding:2px;margin:0;box-sizing:border-box;color:#fff;background-color:#3883fa;border-bottom:1px solid #3883fa;display:none}mat-card{background:#f5f5f5;padding:0;border:1px solid #000}::ng-deep div.jsoneditor{border:none}"]
            }),
            __metadata("design:paramtypes", [])
        ], ModelSchemaComponent);
        return ModelSchemaComponent;
    }());

    var RadioComponent = /** @class */ (function () {
        function RadioComponent() {
        }
        RadioComponent.prototype.ngOnInit = function () {
        };
        RadioComponent = __decorate([
            core.Component({
                selector: "app-radio",
                template: "<!--<div [formGroup]=\"formGroup\">-->\n  <!--<mat-form-field appearance=\"outline\">-->\n    <!--<mat-label>{{property.alias}}-->\n      <!--<span *ngIf = \"property.required\" class=\"asterik\">*</span>-->\n    <!--</mat-label>-->\n\n    <!--&lt;!&ndash;<mat-select formControlName={{property.name}} multiple={{property.array}}>&ndash;&gt;-->\n      <!--&lt;!&ndash;<mat-option *ngIf=\"!property.array\">Select</mat-option>&ndash;&gt;-->\n      <!--&lt;!&ndash;<mat-option *ngFor=\"let opt of property.values\" [value]=\"opt\">&ndash;&gt;-->\n        <!--&lt;!&ndash;{{opt}}&ndash;&gt;-->\n      <!--&lt;!&ndash;</mat-option>&ndash;&gt;-->\n    <!--&lt;!&ndash;</mat-select>&ndash;&gt;-->\n\n    <!--<mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>-->\n\n  <!--</mat-form-field>-->\n\n<!--</div>-->\n",
                styles: [""]
            }),
            __metadata("design:paramtypes", [])
        ], RadioComponent);
        return RadioComponent;
    }());

    var AppModule = /** @class */ (function () {
        function AppModule() {
        }
        AppModule = __decorate([
            core.NgModule({
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
                    forms.FormsModule,
                    AngularMaterialModule,
                    forms.ReactiveFormsModule,
                    common.CommonModule,
                    AppRoutingModule,
                    material.MatDialogModule,
                    platformBrowser.BrowserModule,
                    fire.AngularFireModule.initializeApp(environment.firebaseConfig),
                    fire.AngularFireModule,
                    firestore.AngularFirestoreModule,
                    snackBar.MatSnackBarModule,
                    database.AngularFireDatabaseModule,
                    auth.AngularFireAuthModule,
                    expansion.MatExpansionModule,
                    tabs.MatTabsModule,
                    angularxSocialLogin.SocialLoginModule,
                    http.HttpClientModule,
                    angJsoneditor.NgJsonEditorModule
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

    exports.AppModule = AppModule;
    exports.ɵa = AppComponent;
    exports.ɵb = CommonService;
    exports.ɵba = RadioComponent;
    exports.ɵbb = AngularMaterialModule;
    exports.ɵbc = AppRoutingModule;
    exports.ɵbd = AuthenticationGuard;
    exports.ɵbe = environment;
    exports.ɵc = JsonFormComponent;
    exports.ɵd = ValidationServiceService;
    exports.ɵe = FormComponent;
    exports.ɵf = TextFieldComponent;
    exports.ɵg = ValidationMessageGeneratorService;
    exports.ɵh = NumberFieldComponent;
    exports.ɵi = DropdownComponent;
    exports.ɵj = MeasureComponent;
    exports.ɵk = DashboardComponent;
    exports.ɵl = DashboardService;
    exports.ɵm = LoginComponent;
    exports.ɵn = AuthService;
    exports.ɵo = SnackBarMessageService;
    exports.ɵp = ToolBarComponent;
    exports.ɵq = SignupComponent;
    exports.ɵr = EmailFieldComponent;
    exports.ɵs = PasswordFieldComponent;
    exports.ɵt = LoadingSpinnerComponent;
    exports.ɵu = StepFormComponent;
    exports.ɵv = SimpleComponent;
    exports.ɵw = AccordianComponent;
    exports.ɵx = TabComponent;
    exports.ɵy = UiSchemaComponent;
    exports.ɵz = ModelSchemaComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angular-json-form.umd.js.map
