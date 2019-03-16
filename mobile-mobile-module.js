(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-mobile-module"],{

/***/ "./node_modules/@angular/forms/fesm5/forms.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/forms/fesm5/forms.js ***!
  \****************************************************/
/*! exports provided: ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_z, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_bh, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_bg, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_t, AbstractControlDirective, AbstractFormGroupDirective, CheckboxControlValueAccessor, ControlContainer, NG_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgFormSelectorWarning, NgModel, NgModelGroup, RadioControlValueAccessor, FormControlDirective, FormControlName, FormGroupDirective, FormArrayName, FormGroupName, NgSelectOption, SelectControlValueAccessor, SelectMultipleControlValueAccessor, CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MinLengthValidator, PatternValidator, RequiredValidator, FormBuilder, AbstractControl, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators, VERSION, FormsModule, ReactiveFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function() { return InternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function() { return REACTIVE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function() { return SHARED_FORM_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function() { return TEMPLATE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function() { return AbstractControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function() { return ngControlStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function() { return formDirectiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function() { return NG_FORM_SELECTOR_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function() { return formControlBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function() { return modelGroupProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bh", function() { return NgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function() { return NUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function() { return NumberValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function() { return RadioControlRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bf", function() { return RANGE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bg", function() { return RangeValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function() { return NG_MODEL_WITH_FORM_CONTROL_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function() { return formControlBinding$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function() { return controlNameBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function() { return formDirectiveProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function() { return formArrayNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function() { return formGroupNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function() { return NgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function() { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function() { return CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function() { return EMAIL_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function() { return MAX_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function() { return MIN_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function() { return PATTERN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function() { return REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function() { return AbstractControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function() { return AbstractFormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function() { return CheckboxControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function() { return COMPOSITION_BUFFER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function() { return NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function() { return NgControlStatusGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function() { return NgForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFormSelectorWarning", function() { return NgFormSelectorWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function() { return NgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function() { return NgModelGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function() { return RadioControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function() { return FormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function() { return FormControlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function() { return FormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function() { return FormArrayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function() { return FormGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function() { return NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function() { return SelectControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function() { return SelectMultipleControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function() { return CheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function() { return AbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function() { return ReactiveFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license Angular v7.1.4
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */







/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * Base class for control directives.
 *
 * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
 *
 * @publicApi
 */
var AbstractControlDirective = /** @class */ (function () {
    function AbstractControlDirective() {
    }
    Object.defineProperty(AbstractControlDirective.prototype, "value", {
        /**
         * @description
         * Reports the value of the control if it is present, otherwise null.
         */
        get: function () { return this.control ? this.control.value : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
        /**
         * @description
         * Reports whether the control is valid. A control is considered valid if no
         * validation errors exist with the current value.
         * If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.valid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
        /**
         * @description
         * Reports whether the control is invalid, meaning that an error exists in the input value.
         * If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.invalid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pending", {
        /**
         * @description
         * Reports whether a control is pending, meaning that that async validation is occurring and
         * errors are not yet available for the input value. If the control is not present, null is
         * returned.
         */
        get: function () { return this.control ? this.control.pending : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
        /**
         * @description
         * Reports whether the control is disabled, meaning that the control is disabled
         * in the UI and is exempt from validation checks and excluded from aggregate
         * values of ancestor controls. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.disabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
        /**
         * @description
         * Reports whether the control is enabled, meaning that the control is included in ancestor
         * calculations of validity or value. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.enabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
        /**
         * @description
         * Reports the control's validation errors. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.errors : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
        /**
         * @description
         * Reports whether the control is pristine, meaning that the user has not yet changed
         * the value in the UI. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.pristine : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
        /**
         * @description
         * Reports whether the control is dirty, meaning that the user has changed
         * the value in the UI. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.dirty : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
        /**
         * @description
         * Reports whether the control is touched, meaning that the user has triggered
         * a `blur` event on it. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.touched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "status", {
        /**
         * @description
         * Reports the validation status of the control. Possible values include:
         * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
         * If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.status : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
        /**
         * @description
         * Reports whether the control is untouched, meaning that the user has not yet triggered
         * a `blur` event on it. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.untouched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
        /**
         * @description
         * Returns a multicasting observable that emits a validation status whenever it is
         * calculated for the control. If the control is not present, null is returned.
         */
        get: function () {
            return this.control ? this.control.statusChanges : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
        /**
         * @description
         * Returns a multicasting observable of value changes for the control that emits every time the
         * value of the control changes in the UI or programmatically.
         * If the control is not present, null is returned.
         */
        get: function () {
            return this.control ? this.control.valueChanges : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "path", {
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * Resets the control with the provided value if the control is present.
     */
    AbstractControlDirective.prototype.reset = function (value) {
        if (value === void 0) { value = undefined; }
        if (this.control)
            this.control.reset(value);
    };
    /**
     * @description
     * Reports whether the control with the given path has the error specified.
     * If no path is given, it checks for the error on the present control.
     * If the control is not present, false is returned.
     */
    AbstractControlDirective.prototype.hasError = function (errorCode, path) {
        return this.control ? this.control.hasError(errorCode, path) : false;
    };
    /**
     * @description
     * Reports error data for the control with the given path.
     * If the control is not present, null is returned.
     */
    AbstractControlDirective.prototype.getError = function (errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
    };
    return AbstractControlDirective;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * A base class for directives that contain multiple registered instances of `NgControl`.
 * Only used by the forms module.
 *
 * @publicApi
 */
var ControlContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ControlContainer, _super);
    function ControlContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ControlContainer.prototype, "formDirective", {
        /**
         * @description
         * The top-level form directive for the control.
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlContainer.prototype, "path", {
        /**
         * @description
         * The path to this group.
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    return ControlContainer;
}(AbstractControlDirective));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
/**
 * @description
 * An `InjectionToken` for registering additional synchronous validators used with `AbstractControl`s.
 *
 * @see `NG_ASYNC_VALIDATORS`
 *
 * @usageNotes
 *
 * ### Providing a custom validator
 *
 * The following example registers a custom validator directive. Adding the validator to the
 * existing collection of validators requires the `multi: true` option.
 *
 * ```typescript
 * @Directive({
 *   selector: '[customValidator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors | null {
 *     return { 'custom': true };
 *   }
 * }
 * ```
 *
 * @publicApi
 */
var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgValidators');
/**
 * @description
 * An `InjectionToken` for registering additional asynchronous validators used with `AbstractControl`s.
 *
 * @see `NG_VALIDATORS`
 *
 * @publicApi
 */
var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgAsyncValidators');
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
/**
 * @description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 *
 * @see [Form Validation](/guide/form-validation)
 *
 * @publicApi
 */
var Validators = /** @class */ (function () {
    function Validators() {
    }
    /**
     * @description
     * Validator that requires the control's value to be greater than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * @usageNotes
     *
     * ### Validate against a minimum of 3
     *
     * ```typescript
     * const control = new FormControl(2, Validators.min(3));
     *
     * console.log(control.errors); // {min: {min: 3, actual: 2}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `min` property if the validation check fails, otherwise `null`.
     *
     */
    Validators.min = function (min) {
        return function (control) {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
                return null; // don't validate empty values to allow optional controls
            }
            var value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
            return !isNaN(value) && value < min ? { 'min': { 'min': min, 'actual': control.value } } : null;
        };
    };
    /**
     * @description
     * Validator that requires the control's value to be less than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * @usageNotes
     *
     * ### Validate against a maximum of 15
     *
     * ```typescript
     * const control = new FormControl(16, Validators.max(15));
     *
     * console.log(control.errors); // {max: {max: 15, actual: 16}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `max` property if the validation check fails, otherwise `null`.
     *
     */
    Validators.max = function (max) {
        return function (control) {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
                return null; // don't validate empty values to allow optional controls
            }
            var value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
            return !isNaN(value) && value > max ? { 'max': { 'max': max, 'actual': control.value } } : null;
        };
    };
    /**
     * @description
     * Validator that requires the control have a non-empty value.
     *
     * @usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     */
    Validators.required = function (control) {
        return isEmptyInputValue(control.value) ? { 'required': true } : null;
    };
    /**
     * @description
     * Validator that requires the control's value be true. This validator is commonly
     * used for required checkboxes.
     *
     * @usageNotes
     *
     * ### Validate that the field value is true
     *
     * ```typescript
     * const control = new FormControl('', Validators.requiredTrue);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map that contains the `required` property
     * set to `true` if the validation check fails, otherwise `null`.
     */
    Validators.requiredTrue = function (control) {
        return control.value === true ? null : { 'required': true };
    };
    /**
     * @description
     * Validator that requires the control's value pass an email validation test.
     *
     * @usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @returns An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     */
    Validators.email = function (control) {
        if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
        }
        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
    };
    /**
     * @description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `minlength` if the validation check fails, otherwise `null`.
     */
    Validators.minLength = function (minLength) {
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var length = control.value ? control.value.length : 0;
            return length < minLength ?
                { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * @description
     * Validator that requires the length of the control's value to be less than or equal
     * to the provided maximum length. This validator is also provided by default if you use the
     * the HTML5 `maxlength` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field has maximum of 5 characters
     *
     * ```typescript
     * const control = new FormControl('Angular', Validators.maxLength(5));
     *
     * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
     * ```
     *
     * ```html
     * <input maxlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `maxlength` property if the validation check fails, otherwise `null`.
     */
    Validators.maxLength = function (maxLength) {
        return function (control) {
            var length = control.value ? control.value.length : 0;
            return length > maxLength ?
                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * @description
     * Validator that requires the control's value to match a regex pattern. This validator is also
     * provided
     * by default if you use the HTML5 `pattern` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field only contains letters or spaces
     *
     * ```typescript
     * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
     *
     * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
     * ```
     *
     * ```html
     * <input pattern="[a-zA-Z ]*">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `pattern` property if the validation check fails, otherwise `null`.
     */
    Validators.pattern = function (pattern) {
        if (!pattern)
            return Validators.nullValidator;
        var regex;
        var regexStr;
        if (typeof pattern === 'string') {
            regexStr = '';
            if (pattern.charAt(0) !== '^')
                regexStr += '^';
            regexStr += pattern;
            if (pattern.charAt(pattern.length - 1) !== '$')
                regexStr += '$';
            regex = new RegExp(regexStr);
        }
        else {
            regexStr = pattern.toString();
            regex = pattern;
        }
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var value = control.value;
            return regex.test(value) ? null :
                { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
        };
    };
    /**
     * @description
     * Validator that performs no operation.
     */
    Validators.nullValidator = function (control) { return null; };
    Validators.compose = function (validators) {
        if (!validators)
            return null;
        var presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
        };
    };
    /**
     * @description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
    */
    Validators.composeAsync = function (validators) {
        if (!validators)
            return null;
        var presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            var observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors));
        };
    };
    return Validators;
}());
function isPresent(o) {
    return o != null;
}
function toObservable(r) {
    var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;
    if (!(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵisObservable"])(obs))) {
        throw new Error("Expected validator to return Promise or Observable.");
    }
    return obs;
}
function _executeValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
function _executeAsyncValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
function _mergeErrors(arrayOfErrors) {
    var res = arrayOfErrors.reduce(function (res, errors) {
        return errors != null ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, res, errors) : res;
    }, {});
    return Object.keys(res).length === 0 ? null : res;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to provide a `ControlValueAccessor` for form controls.
 *
 * See `DefaultValueAccessor` for how to implement one.
 *
 * @publicApi
 */
var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgValueAccessor');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CheckboxControlValueAccessor; }),
    multi: true,
};
/**
 * @description
 * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
 * element.
 *
 * @usageNotes
 *
 * ### Using a checkbox with a reactive form.
 *
 * The following example shows how to use a checkbox with a reactive form.
 *
 * ```ts
 * const rememberLoginControl = new FormControl();
 * ```
 *
 * ```
 * <input type="checkbox" [formControl]="rememberLoginControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var CheckboxControlValueAccessor = /** @class */ (function () {
    function CheckboxControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * @description
         * The registered callback function called when a change event occurs on the input element.
         */
        this.onChange = function (_) { };
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = function () { };
    }
    /**
     * Sets the "checked" property on the input element.
     *
     * @param value The checked value
     */
    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
    };
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param isDisabled The disabled value
     */
    CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    CheckboxControlValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
            host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
            providers: [CHECKBOX_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CheckboxControlValueAccessor);
    return CheckboxControlValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var DEFAULT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return DefaultValueAccessor; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid() {
    var userAgent = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["ɵgetDOM"])() ? Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["ɵgetDOM"])().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * @description
 * Provide this token to control if form directives buffer IME input until
 * the "compositionend" event occurs.
 * @publicApi
 */
var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('CompositionEventMode');
/**
 * @description
 * The default `ControlValueAccessor` for writing a value and listening to changes on input
 * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using the default value accessor
 *
 * The following example shows how to use an input element that activates the default value accessor
 * (in this case, a text field).
 *
 * ```ts
 * const firstNameControl = new FormControl();
 * ```
 *
 * ```
 * <input type="text" [formControl]="firstNameControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var DefaultValueAccessor = /** @class */ (function () {
    function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        /**
         * @description
         * The registered callback function called when an input event occurs on the input element.
         */
        this.onChange = function (_) { };
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = function () { };
        /** Whether the user is creating a composition string (IME events). */
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    /**
     * Sets the "value" property on the input element.
     *
     * @param value The checked value
     */
    DefaultValueAccessor.prototype.writeValue = function (value) {
        var normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param isDisabled The disabled value
     */
    DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /** @internal */
    DefaultValueAccessor.prototype._handleInput = function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this.onChange(value);
        }
    };
    /** @internal */
    DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
    /** @internal */
    DefaultValueAccessor.prototype._compositionEnd = function (value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
    };
    DefaultValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
            // TODO: vsavkin replace the above selector with the one below it once
            // https://github.com/angular/angular/issues/3011 is implemented
            // selector: '[ngModel],[formControl],[formControlName]',
            host: {
                '(input)': '$any(this)._handleInput($event.target.value)',
                '(blur)': 'onTouched()',
                '(compositionstart)': '$any(this)._compositionStart()',
                '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
            },
            providers: [DEFAULT_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(COMPOSITION_BUFFER_MODE)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Boolean])
    ], DefaultValueAccessor);
    return DefaultValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeValidator(validator) {
    if (validator.validate) {
        return function (c) { return validator.validate(c); };
    }
    else {
        return validator;
    }
}
function normalizeAsyncValidator(validator) {
    if (validator.validate) {
        return function (c) { return validator.validate(c); };
    }
    else {
        return validator;
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NumberValueAccessor; }),
    multi: true
};
/**
 * @description
 * The `ControlValueAccessor` for writing a number value and listening to number input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
 * directives.
 *
 * @usageNotes
 *
 * ### Using a number input with a reactive form.
 *
 * The following example shows how to use a number input with a reactive form.
 *
 * ```ts
 * const totalCountControl = new FormControl();
 * ```
 *
 * ```
 * <input type="number" [formControl]="totalCountControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 */
var NumberValueAccessor = /** @class */ (function () {
    function NumberValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * @description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */
        this.onChange = function (_) { };
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = function () { };
    }
    /**
     * Sets the "value" property on the input element.
     *
     * @param value The checked value
     */
    NumberValueAccessor.prototype.writeValue = function (value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        var normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    NumberValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param isDisabled The disabled value
     */
    NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    NumberValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
            host: {
                '(change)': 'onChange($event.target.value)',
                '(input)': 'onChange($event.target.value)',
                '(blur)': 'onTouched()'
            },
            providers: [NUMBER_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NumberValueAccessor);
    return NumberValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function unimplemented() {
    throw new Error('unimplemented');
}
/**
 * @description
 * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * @publicApi
 */
var NgControl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgControl, _super);
    function NgControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @description
         * The parent form for the control.
         *
         * @internal
         */
        _this._parent = null;
        /**
         * @description
         * The name for the control
         */
        _this.name = null;
        /**
         * @description
         * The value accessor for the control
         */
        _this.valueAccessor = null;
        /**
         * @description
         * The uncomposed array of synchronous validators for the control
         *
         * @internal
         */
        _this._rawValidators = [];
        /**
         * @description
         * The uncomposed array of async validators for the control
         *
         * @internal
         */
        _this._rawAsyncValidators = [];
        return _this;
    }
    Object.defineProperty(NgControl.prototype, "validator", {
        /**
         * @description
         * The registered synchronous validator function for the control
         *
         * @throws An exception that this method is not implemented
         */
        get: function () { return unimplemented(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgControl.prototype, "asyncValidator", {
        /**
         * @description
         * The registered async validator function for the control
         *
         * @throws An exception that this method is not implemented
         */
        get: function () { return unimplemented(); },
        enumerable: true,
        configurable: true
    });
    return NgControl;
}(AbstractControlDirective));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RadioControlValueAccessor; }),
    multi: true
};
/**
 * @description
 * Class used by Angular to track radio buttons. For internal use only.
 */
var RadioControlRegistry = /** @class */ (function () {
    function RadioControlRegistry() {
        this._accessors = [];
    }
    /**
     * @description
     * Adds a control to the internal registry. For internal use only.
     */
    RadioControlRegistry.prototype.add = function (control, accessor) {
        this._accessors.push([control, accessor]);
    };
    /**
     * @description
     * Removes a control from the internal registry. For internal use only.
     */
    RadioControlRegistry.prototype.remove = function (accessor) {
        for (var i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    };
    /**
     * @description
     * Selects a radio button. For internal use only.
     */
    RadioControlRegistry.prototype.select = function (accessor) {
        var _this = this;
        this._accessors.forEach(function (c) {
            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
            }
        });
    };
    RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
        if (!controlPair[0].control)
            return false;
        return controlPair[0]._parent === accessor._control._parent &&
            controlPair[1].name === accessor.name;
    };
    RadioControlRegistry = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RadioControlRegistry);
    return RadioControlRegistry;
}());
/**
 * @description
 * The `ControlValueAccessor` for writing radio control values and listening to radio control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using radio buttons with reactive form directives
 *
 * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
 * a reactive form, radio buttons in the same group should have the same `formControlName`.
 * Providing a `name` attribute is optional.
 *
 * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var RadioControlValueAccessor = /** @class */ (function () {
    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        /**
         * @description
         * The registered callback function called when a change event occurs on the input element.
         */
        this.onChange = function () { };
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = function () { };
    }
    /**
     * @description
     * A lifecycle method called when the directive is initialized. For internal use only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */
    RadioControlValueAccessor.prototype.ngOnInit = function () {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
    };
    /**
     * @description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */
    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
    /**
     * @description
     * Sets the "checked" property value on the radio input element.
     *
     * @param value The checked value
     */
    RadioControlValueAccessor.prototype.writeValue = function (value) {
        this._state = value === this.value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
    };
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this._fn = fn;
        this.onChange = function () {
            fn(_this.value);
            _this._registry.select(_this);
        };
    };
    /**
     * Sets the "value" on the radio input element and unchecks it.
     *
     * @param value
     */
    RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param isDisabled The disabled value
     */
    RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    RadioControlValueAccessor.prototype._checkName = function () {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
        }
        if (!this.name && this.formControlName)
            this.name = this.formControlName;
    };
    RadioControlValueAccessor.prototype._throwNameError = function () {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], RadioControlValueAccessor.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], RadioControlValueAccessor.prototype, "formControlName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RadioControlValueAccessor.prototype, "value", void 0);
    RadioControlValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
            host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
            providers: [RADIO_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            RadioControlRegistry, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], RadioControlValueAccessor);
    return RadioControlValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RANGE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RangeValueAccessor; }),
    multi: true
};
/**
 * @description
 * The `ControlValueAccessor` for writing a range value and listening to range input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
 * directives.
 *
 * @usageNotes
 *
 * ### Using a range input with a reactive form
 *
 * The following example shows how to use a range input with a reactive form.
 *
 * ```ts
 * const ageControl = new FormControl();
 * ```
 *
 * ```
 * <input type="range" [formControl]="ageControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 */
var RangeValueAccessor = /** @class */ (function () {
    function RangeValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * @description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */
        this.onChange = function (_) { };
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = function () { };
    }
    /**
     * Sets the "value" property on the input element.
     *
     * @param value The checked value
     */
    RangeValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
    };
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    RangeValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * Sets the "disabled" property on the range input element.
     *
     * @param isDisabled The disabled value
     */
    RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    RangeValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
            host: {
                '(change)': 'onChange($event.target.value)',
                '(input)': 'onChange($event.target.value)',
                '(blur)': 'onTouched()'
            },
            providers: [RANGE_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], RangeValueAccessor);
    return RangeValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var FormErrorExamples = {
    formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
};

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ReactiveErrors = /** @class */ (function () {
    function ReactiveErrors() {
    }
    ReactiveErrors.controlParentException = function () {
        throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
    };
    ReactiveErrors.ngModelGroupException = function () {
        throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
    };
    ReactiveErrors.missingFormException = function () {
        throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
    };
    ReactiveErrors.groupParentException = function () {
        throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
    };
    ReactiveErrors.arrayParentException = function () {
        throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
    };
    ReactiveErrors.disabledAttrWarning = function () {
        console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
    };
    ReactiveErrors.ngModelWarning = function (directiveName) {
        console.warn("\n    It looks like you're using ngModel on the same form field as " + directiveName + ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/" + (directiveName === 'formControl' ? 'FormControlDirective'
            : 'FormControlName') + "#use-with-ngmodel\n    ");
    };
    return ReactiveErrors;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SelectControlValueAccessor; }),
    multi: true
};
function _buildValueString(id, value) {
    if (id == null)
        return "" + value;
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
function _extractId(valueString) {
    return valueString.split(':')[0];
}
/**
 * @description
 * The `ControlValueAccessor` for writing select control values and listening to select control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using select controls in a reactive form
 *
 * The following examples show how to use a select control in a reactive form.
 *
 * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Using select controls in a template-driven form
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * ### Customizing option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * ```ts
 * const selectedCountriesControl = new FormControl();
 * ```
 *
 * ```
 * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * **Note:** We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var SelectControlValueAccessor = /** @class */ (function () {
    function SelectControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        /**
         * @description
         * The registered callback function called when a change event occurs on the input element.
         */
        this.onChange = function (_) { };
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = function () { };
        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
        /**
         * @description
         * Tracks the option comparison algorithm for tracking identities when
         * checking for changes.
         */
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the "value" property on the input element. The "selectedIndex"
     * property is also set if an ID is provided on the option element.
     *
     * @param value The checked value
     */
    SelectControlValueAccessor.prototype.writeValue = function (value) {
        this.value = value;
        var id = this._getOptionId(value);
        if (id == null) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
        }
        var valueString = _buildValueString(id, value);
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
    };
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (valueString) {
            _this.value = _this._getOptionValue(valueString);
            fn(_this.value);
        };
    };
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * Sets the "disabled" property on the select input element.
     *
     * @param isDisabled The disabled value
     */
    SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /** @internal */
    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
    /** @internal */
    SelectControlValueAccessor.prototype._getOptionId = function (value) {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(this._optionMap.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                if (this._compareWith(this._optionMap.get(id), value))
                    return id;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    /** @internal */
    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Function])
    ], SelectControlValueAccessor.prototype, "compareWith", null);
    SelectControlValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
            host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
            providers: [SELECT_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SelectControlValueAccessor);
    return SelectControlValueAccessor;
}());
/**
 * @description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectControlValueAccessor`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var NgSelectOption = /** @class */ (function () {
    function NgSelectOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
            this.id = this._select._registerOption();
    }
    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
        /**
         * @description
         * Tracks the value bound to the option element. Unlike the value binding,
         * ngValue supports binding to objects.
         */
        set: function (value) {
            if (this._select == null)
                return;
            this._select._optionMap.set(this.id, value);
            this._setElementValue(_buildValueString(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectOption.prototype, "value", {
        /**
         * @description
         * Tracks simple string values bound to the option element.
         * For objects, use the `ngValue` input binding.
         */
        set: function (value) {
            this._setElementValue(value);
            if (this._select)
                this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    NgSelectOption.prototype._setElementValue = function (value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    };
    /**
     * @description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     */
    NgSelectOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngValue'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], NgSelectOption.prototype, "ngValue", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], NgSelectOption.prototype, "value", null);
    NgSelectOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'option' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            SelectControlValueAccessor])
    ], NgSelectOption);
    return NgSelectOption;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SelectMultipleControlValueAccessor; }),
    multi: true
};
function _buildValueString$1(id, value) {
    if (id == null)
        return "" + value;
    if (typeof value === 'string')
        value = "'" + value + "'";
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
function _extractId$1(valueString) {
    return valueString.split(':')[0];
}
/**
 * @description
 * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
 * directives.
 *
 * @see `SelectControlValueAccessor`
 *
 * @usageNotes
 *
 * ### Using a multi-select control
 *
 * The follow example shows you how to use a multi-select control with a reactive form.
 *
 * ```ts
 * const countryControl = new FormControl();
 * ```
 *
 * ```
 * <select multiple name="countries" [formControl]="countryControl">
 *   <option *ngFor="let country of countries" [ngValue]="country">
 *     {{ country.name }}
 *   </option>
 * </select>
 * ```
 *
 * ### Customizing option selection
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * See the `SelectControlValueAccessor` for usage.
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var SelectMultipleControlValueAccessor = /** @class */ (function () {
    function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        /**
         * @description
         * The registered callback function called when a change event occurs on the input element.
         */
        this.onChange = function (_) { };
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = function () { };
        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
        /**
         * @description
         * Tracks the option comparison algorithm for tracking identities when
         * checking for changes.
         */
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * Sets the "value" property on one or of more
     * of the select's options.
     *
     * @param value The value
     */
    SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
        var _this = this;
        this.value = value;
        var optionSelectedStateSetter;
        if (Array.isArray(value)) {
            // convert values to ids
            var ids_1 = value.map(function (v) { return _this._getOptionId(v); });
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
        }
        else {
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
    };
    /**
     * @description
     * Registers a function called when the control value changes
     * and writes an array of the selected options.
     *
     * @param fn The callback function
     */
    SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (_) {
            var selected = [];
            if (_.hasOwnProperty('selectedOptions')) {
                var options = _.selectedOptions;
                for (var i = 0; i < options.length; i++) {
                    var opt = options.item(i);
                    var val = _this._getOptionValue(opt.value);
                    selected.push(val);
                }
            }
            // Degrade on IE
            else {
                var options = _.options;
                for (var i = 0; i < options.length; i++) {
                    var opt = options.item(i);
                    if (opt.selected) {
                        var val = _this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
            }
            _this.value = selected;
            fn(selected);
        };
    };
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * Sets the "disabled" property on the select input element.
     *
     * @param isDisabled The disabled value
     */
    SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /** @internal */
    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
        var id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
    };
    /** @internal */
    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(this._optionMap.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                if (this._compareWith(this._optionMap.get(id)._value, value))
                    return id;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    /** @internal */
    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var id = _extractId$1(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Function])
    ], SelectMultipleControlValueAccessor.prototype, "compareWith", null);
    SelectMultipleControlValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
            host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
            providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SelectMultipleControlValueAccessor);
    return SelectMultipleControlValueAccessor;
}());
/**
 * @description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectMultipleControlValueAccessor`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var NgSelectMultipleOption = /** @class */ (function () {
    function NgSelectMultipleOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
            this.id = this._select._registerOption(this);
        }
    }
    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
        /**
         * @description
         * Tracks the value bound to the option element. Unlike the value binding,
         * ngValue supports binding to objects.
         */
        set: function (value) {
            if (this._select == null)
                return;
            this._value = value;
            this._setElementValue(_buildValueString$1(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
        /**
         * @description
         * Tracks simple string values bound to the option element.
         * For objects, use the `ngValue` input binding.
         */
        set: function (value) {
            if (this._select) {
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            }
            else {
                this._setElementValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    NgSelectMultipleOption.prototype._setElementValue = function (value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    };
    /** @internal */
    NgSelectMultipleOption.prototype._setSelected = function (selected) {
        this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
    };
    /**
     * @description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     */
    NgSelectMultipleOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngValue'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], NgSelectMultipleOption.prototype, "ngValue", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], NgSelectMultipleOption.prototype, "value", null);
    NgSelectMultipleOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'option' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            SelectMultipleControlValueAccessor])
    ], NgSelectMultipleOption);
    return NgSelectMultipleOption;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function controlPath(name, parent) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(parent.path, [name]);
}
function setUpControl(control, dir) {
    if (!control)
        _throwError(dir, 'Cannot find control with');
    if (!dir.valueAccessor)
        _throwError(dir, 'No value accessor for form control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    dir.valueAccessor.writeValue(control.value);
    setUpViewChangePipeline(control, dir);
    setUpModelChangePipeline(control, dir);
    setUpBlurPipeline(control, dir);
    if (dir.valueAccessor.setDisabledState) {
        control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
    }
    // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
    dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange)
            validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange)
            validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
    });
}
function cleanUpControl(control, dir) {
    dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
    dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
    dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    if (control)
        control._clearChangeFns();
}
function setUpViewChangePipeline(control, dir) {
    dir.valueAccessor.registerOnChange(function (newValue) {
        control._pendingValue = newValue;
        control._pendingChange = true;
        control._pendingDirty = true;
        if (control.updateOn === 'change')
            updateControl(control, dir);
    });
}
function setUpBlurPipeline(control, dir) {
    dir.valueAccessor.registerOnTouched(function () {
        control._pendingTouched = true;
        if (control.updateOn === 'blur' && control._pendingChange)
            updateControl(control, dir);
        if (control.updateOn !== 'submit')
            control.markAsTouched();
    });
}
function updateControl(control, dir) {
    if (control._pendingDirty)
        control.markAsDirty();
    control.setValue(control._pendingValue, { emitModelToViewChange: false });
    dir.viewToModelUpdate(control._pendingValue);
    control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
    control.registerOnChange(function (newValue, emitModelEvent) {
        // control -> view
        dir.valueAccessor.writeValue(newValue);
        // control -> ngModel
        if (emitModelEvent)
            dir.viewToModelUpdate(newValue);
    });
}
function setUpFormContainer(control, dir) {
    if (control == null)
        _throwError(dir, 'Cannot find control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}
function _noControlError(dir) {
    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}
function _throwError(dir, message) {
    var messageEnd;
    if (dir.path.length > 1) {
        messageEnd = "path: '" + dir.path.join(' -> ') + "'";
    }
    else if (dir.path[0]) {
        messageEnd = "name: '" + dir.path + "'";
    }
    else {
        messageEnd = 'unspecified name attribute';
    }
    throw new Error(message + " " + messageEnd);
}
function composeValidators(validators) {
    return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
}
function composeAsyncValidators(validators) {
    return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
        null;
}
function isPropertyUpdated(changes, viewModel) {
    if (!changes.hasOwnProperty('model'))
        return false;
    var change = changes['model'];
    if (change.isFirstChange())
        return true;
    return !Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵlooseIdentical"])(viewModel, change.currentValue);
}
var BUILTIN_ACCESSORS = [
    CheckboxControlValueAccessor,
    RangeValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
];
function isBuiltInAccessor(valueAccessor) {
    return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
}
function syncPendingControls(form, directives) {
    form._syncPendingControls();
    directives.forEach(function (dir) {
        var control = dir.control;
        if (control.updateOn === 'submit' && control._pendingChange) {
            dir.viewToModelUpdate(control._pendingValue);
            control._pendingChange = false;
        }
    });
}
// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
function selectValueAccessor(dir, valueAccessors) {
    if (!valueAccessors)
        return null;
    if (!Array.isArray(valueAccessors))
        _throwError(dir, 'Value accessor was not provided as an array for form control with');
    var defaultAccessor = undefined;
    var builtinAccessor = undefined;
    var customAccessor = undefined;
    valueAccessors.forEach(function (v) {
        if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
        }
        else if (isBuiltInAccessor(v)) {
            if (builtinAccessor)
                _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
        }
        else {
            if (customAccessor)
                _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
        }
    });
    if (customAccessor)
        return customAccessor;
    if (builtinAccessor)
        return builtinAccessor;
    if (defaultAccessor)
        return defaultAccessor;
    _throwError(dir, 'No valid value accessor for form control with');
    return null;
}
function removeDir(list, el) {
    var index = list.indexOf(el);
    if (index > -1)
        list.splice(index, 1);
}
// TODO(kara): remove after deprecation period
function _ngModelWarning(name, type, instance, warningConfig) {
    if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() || warningConfig === 'never')
        return;
    if (((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce) ||
        (warningConfig === 'always' && !instance._ngModelWarningSent)) {
        ReactiveErrors.ngModelWarning(name);
        type._ngModelWarningSentOnce = true;
        instance._ngModelWarningSent = true;
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
 *
 * @publicApi
 */
var AbstractFormGroupDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AbstractFormGroupDirective, _super);
    function AbstractFormGroupDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description
     * An internal callback method triggered on the instance after the inputs are set.
     * Registers the group with its parent group.
     */
    AbstractFormGroupDirective.prototype.ngOnInit = function () {
        this._checkParentType();
        this.formDirective.addFormGroup(this);
    };
    /**
     * @description
     * An internal callback method triggered before the instance is destroyed.
     * Removes the group from its parent group.
     */
    AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
        }
    };
    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
        /**
         * @description
         * The `FormGroup` bound to this directive.
         */
        get: function () { return this.formDirective.getFormGroup(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
        /**
         * @description
         * The path to this group from the top-level directive.
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
        /**
         * @description
         * The top-level directive for this group if present, otherwise null.
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
        /**
         * @description
         * The synchronous validators registered with this group.
         */
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
        /**
         * @description
         * The async validators registered with this group.
         */
        get: function () {
            return composeAsyncValidators(this._asyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    AbstractFormGroupDirective.prototype._checkParentType = function () { };
    return AbstractFormGroupDirective;
}(ControlContainer));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AbstractControlStatus = /** @class */ (function () {
    function AbstractControlStatus(cd) {
        this._cd = cd;
    }
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
        get: function () { return this._cd.control ? this._cd.control.untouched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
        get: function () { return this._cd.control ? this._cd.control.touched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
        get: function () { return this._cd.control ? this._cd.control.pristine : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
        get: function () { return this._cd.control ? this._cd.control.dirty : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
        get: function () { return this._cd.control ? this._cd.control.valid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
        get: function () { return this._cd.control ? this._cd.control.invalid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
        get: function () { return this._cd.control ? this._cd.control.pending : false; },
        enumerable: true,
        configurable: true
    });
    return AbstractControlStatus;
}());
var ngControlStatusHost = {
    '[class.ng-untouched]': 'ngClassUntouched',
    '[class.ng-touched]': 'ngClassTouched',
    '[class.ng-pristine]': 'ngClassPristine',
    '[class.ng-dirty]': 'ngClassDirty',
    '[class.ng-valid]': 'ngClassValid',
    '[class.ng-invalid]': 'ngClassInvalid',
    '[class.ng-pending]': 'ngClassPending',
};
/**
 * @description
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status.
 *
 * @usageNotes
 *
 * ### CSS classes applied
 *
 * The following classes are applied as the properties become true:
 *
 * * ng-valid
 * * ng-invalid
 * * ng-pending
 * * ng-pristine
 * * ng-dirty
 * * ng-untouched
 * * ng-touched
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var NgControlStatus = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgControlStatus, _super);
    function NgControlStatus(cd) {
        return _super.call(this, cd) || this;
    }
    NgControlStatus = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgControl])
    ], NgControlStatus);
    return NgControlStatus;
}(AbstractControlStatus));
/**
 * @description
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * @see `NgControlStatus`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var NgControlStatusGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgControlStatusGroup, _super);
    function NgControlStatusGroup(cd) {
        return _super.call(this, cd) || this;
    }
    NgControlStatusGroup = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
            host: ngControlStatusHost
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer])
    ], NgControlStatusGroup);
    return NgControlStatusGroup;
}(AbstractControlStatus));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 */
var VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 */
var INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 */
var PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 */
var DISABLED = 'DISABLED';
function _find(control, path, delimiter) {
    if (path == null)
        return null;
    if (!(path instanceof Array)) {
        path = path.split(delimiter);
    }
    if (path instanceof Array && (path.length === 0))
        return null;
    return path.reduce(function (v, name) {
        if (v instanceof FormGroup) {
            return v.controls.hasOwnProperty(name) ? v.controls[name] : null;
        }
        if (v instanceof FormArray) {
            return v.at(name) || null;
        }
        return null;
    }, control);
}
function coerceToValidator(validatorOrOpts) {
    var validator = (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators :
        validatorOrOpts);
    return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
    var origAsyncValidator = (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators :
        asyncValidator);
    return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) :
        origAsyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
    return validatorOrOpts != null && !Array.isArray(validatorOrOpts) &&
        typeof validatorOrOpts === 'object';
}
/**
 * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * @see [Forms Guide](/guide/forms)
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 * @see [Dynamic Forms Guide](/guide/dynamic-form)
 *
 * @publicApi
 */
var AbstractControl = /** @class */ (function () {
    /**
     * Initialize the AbstractControl instance.
     *
     * @param validator The function that determines the synchronous validity of this control.
     * @param asyncValidator The function that determines the asynchronous validity of this
     * control.
     */
    function AbstractControl(validator, asyncValidator) {
        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /** @internal */
        this._onCollectionChange = function () { };
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        this.pristine = true;
        /**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */
        this.touched = false;
        /** @internal */
        this._onDisabledChange = [];
    }
    Object.defineProperty(AbstractControl.prototype, "parent", {
        /**
         * The parent control.
         */
        get: function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valid", {
        /**
         * A control is `valid` when its `status` is `VALID`.
         *
         * @see `status`
         *
         * @returns True if the control has passed all of its validation tests,
         * false otherwise.
         */
        get: function () { return this.status === VALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "invalid", {
        /**
         * A control is `invalid` when its `status` is `INVALID`.
         *
         * @see `status`
         *
         * @returns True if this control has failed one or more of its validation checks,
         * false otherwise.
         */
        get: function () { return this.status === INVALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pending", {
        /**
         * A control is `pending` when its `status` is `PENDING`.
         *
         * @see `status`
         *
         * @returns True if this control is in the process of conducting a validation check,
         * false otherwise.
         */
        get: function () { return this.status == PENDING; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "disabled", {
        /**
         * A control is `disabled` when its `status` is `DISABLED`.
         *
         * @see `status`
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         *
         * @returns True if the control is disabled, false otherwise.
         */
        get: function () { return this.status === DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "enabled", {
        /**
         * A control is `enabled` as long as its `status` is not `DISABLED`.
         *
         * @see `status`
         *
         * @returns True if the control has any status other than 'DISABLED',
         * false if the status is 'DISABLED'.
         *
         */
        get: function () { return this.status !== DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "dirty", {
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        get: function () { return !this.pristine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "untouched", {
        /**
         * True if the control has not been marked as touched
         *
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         */
        get: function () { return !this.touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "updateOn", {
        /**
         * Reports the update strategy of the `AbstractControl` (meaning
         * the event on which the control updates itself).
         * Possible values: `'change'` | `'blur'` | `'submit'`
         * Default value: `'change'`
         */
        get: function () {
            return this._updateOn ? this._updateOn : (this.parent ? this.parent.updateOn : 'change');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this overwrites any existing sync validators.
     */
    AbstractControl.prototype.setValidators = function (newValidator) {
        this.validator = coerceToValidator(newValidator);
    };
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     */
    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
        this.asyncValidator = coerceToAsyncValidator(newValidator);
    };
    /**
     * Empties out the sync validator list.
     */
    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
    /**
     * Empties out the async validator list.
     */
    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value; compare `markAsDirty`;
     *
     *  @param opts Configuration options that determine how the control propagates changes
     * and emits events events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    AbstractControl.prototype.markAsTouched = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.touched = true;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsTouched(opts);
        }
    };
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     *  @param opts Configuration options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    AbstractControl.prototype.markAsUntouched = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.touched = false;
        this._pendingTouched = false;
        this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    };
    /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     *  @param opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    AbstractControl.prototype.markAsDirty = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.pristine = false;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsDirty(opts);
        }
    };
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     *  @param opts Configuration options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     */
    AbstractControl.prototype.markAsPristine = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.pristine = true;
        this._pendingDirty = false;
        this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    };
    /**
     * Marks the control as `pending`.
     *
     * A control is pending while the control performs async validation.
     *
     *  @param opts Configuration options that determine how the control propagates changes and
     * emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
     * observable emits an event with the latest status the control is marked pending.
     * When false, no events are emitted.
     *
     */
    AbstractControl.prototype.markAsPending = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.status = PENDING;
        if (opts.emitEvent !== false) {
            this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsPending(opts);
        }
    };
    /**
     * Disables the control. This means the control is exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children are also disabled.
     *
     *  @param opts Configuration options that determine how the control propagates
     * changes and emits events after the control is disabled.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is disabled.
     * When false, no events are emitted.
     */
    AbstractControl.prototype.disable = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.status = DISABLED;
        this.errors = null;
        this._forEachChild(function (control) { control.disable(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, opts, { onlySelf: true })); });
        this._updateValue();
        if (opts.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
        }
        this._updateAncestors(opts);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
    };
    /**
     * Enables the control. This means the control is included in validation checks and
     * the aggregate value of its parent. Its status recalculates based on its value and
     * its validators.
     *
     * By default, if the control has children, all children are enabled.
     *
     *  @param opts Configure options that control how the control propagates changes and
     * emits events when marked as untouched
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is enabled.
     * When false, no events are emitted.
     */
    AbstractControl.prototype.enable = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.status = VALID;
        this._forEachChild(function (control) { control.enable(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, opts, { onlySelf: true })); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        this._updateAncestors(opts);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
    };
    AbstractControl.prototype._updateAncestors = function (opts) {
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
            this._parent._updatePristine();
            this._parent._updateTouched();
        }
    };
    /**
     * @param parent Sets the parent of the control
     */
    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param opts Configuration options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     */
    AbstractControl.prototype.updateValueAndValidity = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            this.errors = this._runValidator();
            this.status = this._calculateStatus();
            if (this.status === VALID || this.status === PENDING) {
                this._runAsyncValidator(opts.emitEvent);
            }
        }
        if (opts.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
        }
    };
    /** @internal */
    AbstractControl.prototype._updateTreeValidity = function (opts) {
        if (opts === void 0) { opts = { emitEvent: true }; }
        this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity(opts); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
    };
    AbstractControl.prototype._setInitialStatus = function () {
        this.status = this._allControlsDisabled() ? DISABLED : VALID;
    };
    AbstractControl.prototype._runValidator = function () {
        return this.validator ? this.validator(this) : null;
    };
    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
        var _this = this;
        if (this.asyncValidator) {
            this.status = PENDING;
            var obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription =
                obs.subscribe(function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); });
        }
    };
    AbstractControl.prototype._cancelExistingSubscription = function () {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    };
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * @usageNotes
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     */
    AbstractControl.prototype.setErrors = function (errors, opts) {
        if (opts === void 0) { opts = {}; }
        this.errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    };
    /**
     * Retrieves a child control given the control's name or path.
     *
     * @param path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     */
    AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
    /**
     * Reports error data for a specific error occurring in this control or in another control.
     *
     * @param errorCode The error code for which to retrieve data
     * @param path The path to a control to check. If not supplied, checks for the error in this
     * control.
     *
     * @returns The error data if the control with the given path has the given error, otherwise null
     * or undefined.
     */
    AbstractControl.prototype.getError = function (errorCode, path) {
        var control = path ? this.get(path) : this;
        return control && control.errors ? control.errors[errorCode] : null;
    };
    /**
     * Reports whether the control with the given path has the error specified.
     *
     * @param errorCode The error code for which to retrieve data
     * @param path The path to a control to check. If not supplied, checks for the error in this
     * control.
     * @returns True when the control with the given path has the error, otherwise false.
     */
    AbstractControl.prototype.hasError = function (errorCode, path) { return !!this.getError(errorCode, path); };
    Object.defineProperty(AbstractControl.prototype, "root", {
        /**
         * Retrieves the top-level ancestor of this control.
         */
        get: function () {
            var x = this;
            while (x._parent) {
                x = x._parent;
            }
            return x;
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
        this.status = this._calculateStatus();
        if (emitEvent) {
            this.statusChanges.emit(this.status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    };
    /** @internal */
    AbstractControl.prototype._initObservables = function () {
        this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };
    AbstractControl.prototype._calculateStatus = function () {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this.errors)
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        return VALID;
    };
    /** @internal */
    AbstractControl.prototype._anyControlsHaveStatus = function (status) {
        return this._anyControls(function (control) { return control.status === status; });
    };
    /** @internal */
    AbstractControl.prototype._anyControlsDirty = function () {
        return this._anyControls(function (control) { return control.dirty; });
    };
    /** @internal */
    AbstractControl.prototype._anyControlsTouched = function () {
        return this._anyControls(function (control) { return control.touched; });
    };
    /** @internal */
    AbstractControl.prototype._updatePristine = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.pristine = !this._anyControlsDirty();
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    };
    /** @internal */
    AbstractControl.prototype._updateTouched = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.touched = this._anyControlsTouched();
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    };
    /** @internal */
    AbstractControl.prototype._isBoxedValue = function (formState) {
        return typeof formState === 'object' && formState !== null &&
            Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    };
    /** @internal */
    AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
    /** @internal */
    AbstractControl.prototype._setUpdateStrategy = function (opts) {
        if (isOptionsObj(opts) && opts.updateOn != null) {
            this._updateOn = opts.updateOn;
        }
    };
    return AbstractControl;
}());
/**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events.
 *
 * @see `AbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * @usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 *```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a sync validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 * ```
 *
 * @publicApi
 */
var FormControl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormControl, _super);
    /**
    * Creates a new `FormControl` instance.
    *
    * @param formState Initializes the control with an initial value,
    * or an object that defines the initial value and disabled state.
    *
    * @param validatorOrOpts A synchronous validator function, or an array of
    * such functions, or an `AbstractControlOptions` object that contains validation functions
    * and a validation trigger.
    *
    * @param asyncValidator A single async validator or array of async validator functions
    *
    */
    function FormControl(formState, validatorOrOpts, asyncValidator) {
        if (formState === void 0) { formState = null; }
        var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
        /** @internal */
        _this._onChange = [];
        _this._applyFormState(formState);
        _this._setUpdateStrategy(validatorOrOpts);
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        _this._initObservables();
        return _this;
    }
    /**
     * Sets a new value for the form control.
     *
     * @param value The new value for the control.
     * @param options Configuration options that determine how the control proopagates changes
     * and emits events when the value changes.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
     * `onChange` event to
     * update the view.
     * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
     * `ngModelChange`
     * event to update the model.
     *
     */
    FormControl.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.value = this._pendingValue = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach(function (changeFn) { return changeFn(_this.value, options.emitViewToModelChange !== false); });
        }
        this.updateValueAndValidity(options);
    };
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
     * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     *
     * @see `setValue` for options
     */
    FormControl.prototype.patchValue = function (value, options) {
        if (options === void 0) { options = {}; }
        this.setValue(value, options);
    };
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     */
    FormControl.prototype.reset = function (formState, options) {
        if (formState === void 0) { formState = null; }
        if (options === void 0) { options = {}; }
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
        this._pendingChange = false;
    };
    /**
     * @internal
     */
    FormControl.prototype._updateValue = function () { };
    /**
     * @internal
     */
    FormControl.prototype._anyControls = function (condition) { return false; };
    /**
     * @internal
     */
    FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
    /**
     * Register a listener for change events.
     *
     * @param fn The method that is called when the value changes
     */
    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
    /**
     * @internal
     */
    FormControl.prototype._clearChangeFns = function () {
        this._onChange = [];
        this._onDisabledChange = [];
        this._onCollectionChange = function () { };
    };
    /**
     * Register a listener for disabled events.
     *
     * @param fn The method that is called when the disabled status changes.
     */
    FormControl.prototype.registerOnDisabledChange = function (fn) {
        this._onDisabledChange.push(fn);
    };
    /**
     * @internal
     */
    FormControl.prototype._forEachChild = function (cb) { };
    /** @internal */
    FormControl.prototype._syncPendingControls = function () {
        if (this.updateOn === 'submit') {
            if (this._pendingDirty)
                this.markAsDirty();
            if (this._pendingTouched)
                this.markAsTouched();
            if (this._pendingChange) {
                this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
                return true;
            }
        }
        return false;
    };
    FormControl.prototype._applyFormState = function (formState) {
        if (this._isBoxedValue(formState)) {
            this.value = this._pendingValue = formState.value;
            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                this.enable({ onlySelf: true, emitEvent: false });
        }
        else {
            this.value = this._pendingValue = formState;
        }
    };
    return FormControl;
}(AbstractControl));
/**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormArray`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * @usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 *
 * @publicApi
 */
var FormGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormGroup, _super);
    /**
    * Creates a new `FormGroup` instance.
    *
    * @param controls A collection of child controls. The key for each child is the name
    * under which it is registered.
    *
    * @param validatorOrOpts A synchronous validator function, or an array of
    * such functions, or an `AbstractControlOptions` object that contains validation functions
    * and a validation trigger.
    *
    * @param asyncValidator A single async validator or array of async validator functions
    *
    */
    function FormGroup(controls, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpdateStrategy(validatorOrOpts);
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control.
     * Use {@link FormGroup#addControl addControl} instead.
     *
     * @param name The control name to register in the collection
     * @param control Provides the control for the given name
     */
    FormGroup.prototype.registerControl = function (name, control) {
        if (this.controls[name])
            return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
    };
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param name The control name to add to the collection
     * @param control Provides the control for the given name
     */
    FormGroup.prototype.addControl = function (name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Remove a control from this group.
     *
     * @param name The control name to remove from the collection
     */
    FormGroup.prototype.removeControl = function (name) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Replace an existing control.
     *
     * @param name The control name to replace in the collection
     * @param control Provides the control for the given name
     */
    FormGroup.prototype.setControl = function (name, control) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * Reports false for disabled controls. If you'd like to check for existence in the group
     * only, use {@link AbstractControl#get get} instead.
     *
     * @param name The control name to check for existence in the collection
     *
     * @returns false for disabled controls, true otherwise.
     */
    FormGroup.prototype.contains = function (controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    };
    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * @usageNotes
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     * ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you excluding the value of a control.
     *
     * @param value The new value for the control that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     */
    FormGroup.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._checkAllValuesPresent(value);
        Object.keys(value).forEach(function (name) {
            _this._throwIfControlMissing(name);
            _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Patches the value of the `FormGroup`. It accepts an object with control
     * names as keys, and does its best to match the values to the correct controls
     * in the group.
     *
     * It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     * @usageNotes
     * ### Patch the value for a form group
     *
     * ```
     * const form = new FormGroup({
     *    first: new FormControl(),
     *    last: new FormControl()
     * });
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.patchValue({first: 'Nancy'});
     * console.log(form.value);   // {first: 'Nancy', last: null}
     * ```
     *
     * @param value The object that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes and
     * emits events after the value is patched.
     * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
     * true.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    FormGroup.prototype.patchValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        Object.keys(value).forEach(function (name) {
            if (_this.controls[name]) {
                _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     */
    FormGroup.prototype.reset = function (value, options) {
        if (value === void 0) { value = {}; }
        if (options === void 0) { options = {}; }
        this._forEachChild(function (control, name) {
            control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
        this._updatePristine(options);
        this._updateTouched(options);
    };
    /**
     * The aggregate value of the `FormGroup`, including any disabled controls.
     *
     * Retrieves all values regardless of disabled status.
     * The `value` property is the best way to get the value of the group, because
     * it excludes disabled controls in the `FormGroup`.
     */
    FormGroup.prototype.getRawValue = function () {
        return this._reduceChildren({}, function (acc, control, name) {
            acc[name] = control instanceof FormControl ? control.value : control.getRawValue();
            return acc;
        });
    };
    /** @internal */
    FormGroup.prototype._syncPendingControls = function () {
        var subtreeUpdated = this._reduceChildren(false, function (updated, child) {
            return child._syncPendingControls() ? true : updated;
        });
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    };
    /** @internal */
    FormGroup.prototype._throwIfControlMissing = function (name) {
        if (!Object.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: " + name + ".");
        }
    };
    /** @internal */
    FormGroup.prototype._forEachChild = function (cb) {
        var _this = this;
        Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
    };
    /** @internal */
    FormGroup.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) {
            control.setParent(_this);
            control._registerOnCollectionChange(_this._onCollectionChange);
        });
    };
    /** @internal */
    FormGroup.prototype._updateValue = function () { this.value = this._reduceValue(); };
    /** @internal */
    FormGroup.prototype._anyControls = function (condition) {
        var _this = this;
        var res = false;
        this._forEachChild(function (control, name) {
            res = res || (_this.contains(name) && condition(control));
        });
        return res;
    };
    /** @internal */
    FormGroup.prototype._reduceValue = function () {
        var _this = this;
        return this._reduceChildren({}, function (acc, control, name) {
            if (control.enabled || _this.disabled) {
                acc[name] = control.value;
            }
            return acc;
        });
    };
    /** @internal */
    FormGroup.prototype._reduceChildren = function (initValue, fn) {
        var res = initValue;
        this._forEachChild(function (control, name) { res = fn(res, control, name); });
        return res;
    };
    /** @internal */
    FormGroup.prototype._allControlsDisabled = function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(this.controls)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var controlName = _c.value;
                if (this.controls[controlName].enabled) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
    };
    /** @internal */
    FormGroup.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, name) {
            if (value[name] === undefined) {
                throw new Error("Must supply a value for form control with name: '" + name + "'.");
            }
        });
    };
    return FormGroup;
}(AbstractControl));
/**
 * Tracks the value and validity state of an array of `FormControl`,
 * `FormGroup` or `FormArray` instances.
 *
 * A `FormArray` aggregates the values of each child `FormControl` into an array.
 * It calculates its status by reducing the status values of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormGroup`.
 *
 * @usageNotes
 *
 * ### Create an array of form controls
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * ### Create a form array with array-level validators
 *
 * You include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators are passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
  * ### Set the updateOn property for all controls in a form array
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const arr = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls from a form array
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that result in strange and unexpected behavior such
 * as broken change detection.
 *
 * @publicApi
 */
var FormArray = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormArray, _super);
    /**
    * Creates a new `FormArray` instance.
    *
    * @param controls An array of child controls. Each child control is given an index
    * where it is registered.
    *
    * @param validatorOrOpts A synchronous validator function, or an array of
    * such functions, or an `AbstractControlOptions` object that contains validation functions
    * and a validation trigger.
    *
    * @param asyncValidator A single async validator or array of async validator functions
    *
    */
    function FormArray(controls, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpdateStrategy(validatorOrOpts);
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Get the `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to retrieve the control
     */
    FormArray.prototype.at = function (index) { return this.controls[index]; };
    /**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param control Form control to be inserted
     */
    FormArray.prototype.push = function (control) {
        this.controls.push(control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to insert the control
     * @param control Form control to be inserted
     */
    FormArray.prototype.insert = function (index, control) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity();
    };
    /**
     * Remove the control at the given `index` in the array.
     *
     * @param index Index in the array to remove the control
     */
    FormArray.prototype.removeAt = function (index) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        this.updateValueAndValidity();
    };
    /**
     * Replace an existing control.
     *
     * @param index Index in the array to replace the control
     * @param control The `AbstractControl` control to replace the existing control
     */
    FormArray.prototype.setControl = function (index, control) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        if (control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
        }
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    Object.defineProperty(FormArray.prototype, "length", {
        /**
         * Length of the control array.
         */
        get: function () { return this.controls.length; },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * @usageNotes
     * ### Set the values for the controls in the form array
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl(),
     *   new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.setValue(['Nancy', 'Drew']);
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    FormArray.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._checkAllValuesPresent(value);
        value.forEach(function (newValue, index) {
            _this._throwIfControlMissing(index);
            _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Patches the value of the `FormArray`. It accepts an array that matches the
     * structure of the control, and does its best to match the values to the correct
     * controls in the group.
     *
     * It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     * @usageNotes
     * ### Patch the values for controls in a form array
     *
     * ```
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.patchValue(['Nancy']);
     * console.log(arr.value);   // ['Nancy', null]
     * ```
     *
     * @param value Array of latest values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    FormArray.prototype.patchValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        value.forEach(function (newValue, index) {
            if (_this.at(index)) {
                _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * @usageNotes
     * ### Reset the values in a form array
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    FormArray.prototype.reset = function (value, options) {
        if (value === void 0) { value = []; }
        if (options === void 0) { options = {}; }
        this._forEachChild(function (control, index) {
            control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
        this._updatePristine(options);
        this._updateTouched(options);
    };
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     */
    FormArray.prototype.getRawValue = function () {
        return this.controls.map(function (control) {
            return control instanceof FormControl ? control.value : control.getRawValue();
        });
    };
    /** @internal */
    FormArray.prototype._syncPendingControls = function () {
        var subtreeUpdated = this.controls.reduce(function (updated, child) {
            return child._syncPendingControls() ? true : updated;
        }, false);
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    };
    /** @internal */
    FormArray.prototype._throwIfControlMissing = function (index) {
        if (!this.controls.length) {
            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.at(index)) {
            throw new Error("Cannot find form control at index " + index);
        }
    };
    /** @internal */
    FormArray.prototype._forEachChild = function (cb) {
        this.controls.forEach(function (control, index) { cb(control, index); });
    };
    /** @internal */
    FormArray.prototype._updateValue = function () {
        var _this = this;
        this.value =
            this.controls.filter(function (control) { return control.enabled || _this.disabled; })
                .map(function (control) { return control.value; });
    };
    /** @internal */
    FormArray.prototype._anyControls = function (condition) {
        return this.controls.some(function (control) { return control.enabled && condition(control); });
    };
    /** @internal */
    FormArray.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) { return _this._registerControl(control); });
    };
    /** @internal */
    FormArray.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, i) {
            if (value[i] === undefined) {
                throw new Error("Must supply a value for form control at index: " + i + ".");
            }
        });
    };
    /** @internal */
    FormArray.prototype._allControlsDisabled = function () {
        var e_2, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                var control = _c.value;
                if (control.enabled)
                    return false;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this.controls.length > 0 || this.disabled;
    };
    FormArray.prototype._registerControl = function (control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
    };
    return FormArray;
}(AbstractControl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgForm; })
};
var resolvedPromise = Promise.resolve(null);
/**
 * @description
 * Creates a top-level `FormGroup` instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You optionally export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * `FormGroup` instance are duplicated on the directive itself, so a reference to it
 * gives you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, use `NgModel` with a `name`
 * attribute. You may use `NgModelGroup` to create sub-groups within the form.
 *
 * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event emits the original form
 * submission event.
 *
 * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
 * To import the `FormsModule` but skip its usage in some forms,
 * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
 * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
 * unnecessary because the `<form>` tags are inert. In that case, you would
 * refrain from using the `formGroup` directive.
 *
 * @usageNotes
 *
 * ### Migrating from deprecated ngForm selector
 *
 * Support for using `ngForm` element selector has been deprecated in Angular v6 and will be removed
 * in Angular v9.
 *
 * This has been deprecated to keep selectors consistent with other core Angular selectors,
 * as element selectors are typically written in kebab-case.
 *
 * Now deprecated:
 * ```html
 * <ngForm #myForm="ngForm">
 * ```
 *
 * After:
 * ```html
 * <ng-form #myForm="ngForm">
 * ```
 *
 * ### Listening for form submission
 *
 * The following example shows how to capture the form values from the "ngSubmit" event.
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Setting the update options
 *
 * The following example shows you how to change the "updateOn" option from its default using
 * ngFormOptions.
 *
 * ```html
 * <form [ngFormOptions]="{updateOn: 'blur'}">
 *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
 * </form>
 * ```
 *
 * @ngModule FormsModule
 * @publicApi
 */
var NgForm = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgForm, _super);
    function NgForm(validators, asyncValidators) {
        var _this = _super.call(this) || this;
        /**
         * @description
         * Returns whether the form submission has been triggered.
         */
        _this.submitted = false;
        _this._directives = [];
        /**
         * @description
         * Event emitter for the "ngSubmit" event
         */
        _this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.form =
            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        return _this;
    }
    /**
     * @description
     * Lifecycle method called after the view is initialized. For internal use only.
     */
    NgForm.prototype.ngAfterViewInit = function () { this._setUpdateStrategy(); };
    Object.defineProperty(NgForm.prototype, "formDirective", {
        /**
         * @description
         * The directive instance.
         */
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "control", {
        /**
         * @description
         * The internal `FormGroup` instance.
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "path", {
        /**
         * @description
         * Returns an array representing the path to this group. Because this directive
         * always lives at the top level of a form, it is always an empty array.
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "controls", {
        /**
         * @description
         * Returns a map of the controls in this group.
         */
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param dir The `NgModel` directive instance.
     */
    NgForm.prototype.addControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var container = _this._findContainer(dir.path);
            dir.control =
                container.registerControl(dir.name, dir.control);
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({ emitEvent: false });
            _this._directives.push(dir);
        });
    };
    /**
     * @description
     * Retrieves the `FormControl` instance from the provided `NgModel` directive.
     *
     * @param dir The `NgModel` directive instance.
     */
    NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
    /**
     * @description
     * Removes the `NgModel` instance from the internal list of directives
     *
     * @param dir The `NgModel` directive instance.
     */
    NgForm.prototype.removeControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
            removeDir(_this._directives, dir);
        });
    };
    /**
     * @description
     * Adds a new `NgModelGroup` directive instance to the form.
     *
     * @param dir The `NgModelGroup` directive instance.
     */
    NgForm.prototype.addFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var container = _this._findContainer(dir.path);
            var group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({ emitEvent: false });
        });
    };
    /**
     * @description
     * Removes the `NgModelGroup` directive instance from the form.
     *
     * @param dir The `NgModelGroup` directive instance.
     */
    NgForm.prototype.removeFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    };
    /**
     * @description
     * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
     *
     * @param dir The `NgModelGroup` directive instance.
     */
    NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
    /**
     * Sets the new value for the provided `NgControl` directive.
     *
     * @param dir The `NgControl` directive instance.
     * @param value The new value for the directive's control.
     */
    NgForm.prototype.updateModel = function (dir, value) {
        var _this = this;
        resolvedPromise.then(function () {
            var ctrl = _this.form.get(dir.path);
            ctrl.setValue(value);
        });
    };
    /**
     * @description
     * Sets the value for this `FormGroup`.
     *
     * @param value The new value
     */
    NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
    /**
     * @description
     * Method called when the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param $event The "submit" event object
     */
    NgForm.prototype.onSubmit = function ($event) {
        this.submitted = true;
        syncPendingControls(this.form, this._directives);
        this.ngSubmit.emit($event);
        return false;
    };
    /**
     * @description
     * Method called when the "reset" event is triggered on the form.
     */
    NgForm.prototype.onReset = function () { this.resetForm(); };
    /**
     * @description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param value The new value for the form.
     */
    NgForm.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this.submitted = false;
    };
    NgForm.prototype._setUpdateStrategy = function () {
        if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
        }
    };
    /** @internal */
    NgForm.prototype._findContainer = function (path) {
        path.pop();
        return path.length ? this.form.get(path) : this.form;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngFormOptions'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgForm.prototype, "options", void 0);
    NgForm = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,ng-form,[ngForm]',
            providers: [formDirectiveProvider],
            host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
            outputs: ['ngSubmit'],
            exportAs: 'ngForm'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array, Array])
    ], NgForm);
    return NgForm;
}(ControlContainer));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var TemplateDrivenErrors = /** @class */ (function () {
    function TemplateDrivenErrors() {
    }
    TemplateDrivenErrors.modelParentException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
    };
    TemplateDrivenErrors.formGroupNameException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    TemplateDrivenErrors.missingNameException = function () {
        throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
    };
    TemplateDrivenErrors.modelGroupParentException = function () {
        throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    TemplateDrivenErrors.ngFormWarning = function () {
        console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    ");
    };
    return TemplateDrivenErrors;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * `InjectionToken` to provide to turn off the warning when using 'ngForm' deprecated selector.
 */
var NG_FORM_SELECTOR_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgFormSelectorWarning');
/**
 * This directive is solely used to display warnings when the deprecated `ngForm` selector is used.
 *
 * @deprecated in Angular v6 and will be removed in Angular v9.
 * @ngModule FormsModule
 * @publicApi
 */
var NgFormSelectorWarning = /** @class */ (function () {
    function NgFormSelectorWarning(ngFormWarning) {
        if (((!ngFormWarning || ngFormWarning === 'once') && !NgFormSelectorWarning_1._ngFormWarning) ||
            ngFormWarning === 'always') {
            TemplateDrivenErrors.ngFormWarning();
            NgFormSelectorWarning_1._ngFormWarning = true;
        }
    }
    NgFormSelectorWarning_1 = NgFormSelectorWarning;
    var NgFormSelectorWarning_1;
    /**
     * Static property used to track whether the deprecation warning for this selector has been sent.
     * Used to support warning config of "once".
     *
     * @internal
     */
    NgFormSelectorWarning._ngFormWarning = false;
    NgFormSelectorWarning = NgFormSelectorWarning_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'ngForm' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_FORM_SELECTOR_WARNING)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], NgFormSelectorWarning);
    return NgFormSelectorWarning;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var modelGroupProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgModelGroup; })
};
/**
 * @description
 * Creates and binds a `FormGroup` instance to a DOM element.
 *
 * This directive can only be used as a child of `NgForm` (within `<form>` tags).
 *
 * Use this directive to validate a sub-group of your form separately from the
 * rest of your form, or if some values in your domain model make more sense
 * to consume together in a nested object.
 *
 * Provide a name for the sub-group and it will become the key
 * for the sub-group in the form's full value. If you need direct access, export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * @usageNotes
 *
 * ### Consuming controls in a grouping
 *
 * The following example shows you how to combine controls together in a sub-group
 * of the form.
 *
 * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * @ngModule FormsModule
 * @publicApi
 */
var NgModelGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgModelGroup, _super);
    function NgModelGroup(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    NgModelGroup_1 = NgModelGroup;
    /** @internal */
    NgModelGroup.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup_1) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
        }
    };
    var NgModelGroup_1;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngModelGroup'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgModelGroup.prototype, "name", void 0);
    NgModelGroup = NgModelGroup_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer, Array, Array])
    ], NgModelGroup);
    return NgModelGroup;
}(AbstractFormGroupDirective));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formControlBinding = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgModel; })
};
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have and old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel` have been changed.
 * - this is a general problem when using `exportAs` for directives!
 */
var resolvedPromise$1 = Promise.resolve(null);
/**
 * @description
 * Creates a `FormControl` instance from a domain model and binds it
 * to a form control element.
 *
 * The `FormControl` instance tracks the value, user interaction, and
 * validation status of the control and keeps the view synced with the model. If used
 * within a parent form, the directive also registers itself with the form as a child
 * control.
 *
 * This directive is used by itself or as part of a larger form. Use the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional `Input`. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
 * class sets the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-box syntax'), the value in the UI always syncs back to
 * the domain model in your class.
 *
 * To inspect the properties of the associated `FormControl` (like validity state),
 * export the directive into a local template variable using `ngModel` as the key (ex: `#myVar="ngModel"`).
 * You then access the control using the directive's `control` property,
 * but most properties used (like `valid` and `dirty`) fall through to the control anyway for direct access.
 * See a full list of properties directly available in `AbstractControlDirective`.
 *
 * @see `RadioControlValueAccessor`
 * @see `SelectControlValueAccessor`
 *
 * @usageNotes
 *
 * ### Using ngModel on a standalone control
 *
 * The following examples show a simple standalone control using `ngModel`:
 *
 * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
 * as the parent form syncs the value for you. You access its properties by exporting it into a
 * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
 * needed on form submission.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * ### Using ngModel within a form
 *
 * The following example shows controls using `ngModel` within a form:
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Using a standalone ngModel within a group
 *
 * The following example shows you how to use a standalone ngModel control
 * within a form. This controls the display of the form, but doesn't contain form data.
 *
 * ```html
 * <form>
 *   <input name="login" ngModel placeholder="Login">
 *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
 * </form>
 * <!-- form value: {login: ''} -->
 * ```
 *
 * ### Setting the ngModel name attribute through options
 *
 * The following example shows you an alternate way to set the name attribute. The name attribute is used
 * within a custom form component, and the name `@Input` property serves a different purpose.
 *
 * ```html
 * <form>
 *   <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
 *   </my-person-control>
 * </form>
 * <!-- form value: {user: ''} -->
 * ```
 *
 * @ngModule FormsModule
 * @publicApi
 */
var NgModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgModel, _super);
    function NgModel(parent, validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this.control = new FormControl();
        /** @internal */
        _this._registered = false;
        /**
         * @description
         * Event emitter for producing the `ngModelChange` event after
         * the view model updates.
         */
        _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    /**
     * @description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */
    NgModel.prototype.ngOnChanges = function (changes) {
        this._checkForErrors();
        if (!this._registered)
            this._setUpControl();
        if ('isDisabled' in changes) {
            this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);
            this.viewModel = this.model;
        }
    };
    /**
     * @description
     * Lifecycle method called before the directive's instance is destroyed. For internal
     * use only.
     */
    NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
    Object.defineProperty(NgModel.prototype, "path", {
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */
        get: function () {
            return this._parent ? controlPath(this.name, this._parent) : [this.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "formDirective", {
        /**
         * @description
         * The top-level directive for this control if present, otherwise null.
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "validator", {
        /**
         * @description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "asyncValidator", {
        /**
         * @description
         * Async validator function composed of all the async validators registered with this
         * directive.
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value emitted by `ngModelChange`.
     */
    NgModel.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    NgModel.prototype._setUpControl = function () {
        this._setUpdateStrategy();
        this._isStandalone() ? this._setUpStandalone() :
            this.formDirective.addControl(this);
        this._registered = true;
    };
    NgModel.prototype._setUpdateStrategy = function () {
        if (this.options && this.options.updateOn != null) {
            this.control._updateOn = this.options.updateOn;
        }
    };
    NgModel.prototype._isStandalone = function () {
        return !this._parent || !!(this.options && this.options.standalone);
    };
    NgModel.prototype._setUpStandalone = function () {
        setUpControl(this.control, this);
        this.control.updateValueAndValidity({ emitEvent: false });
    };
    NgModel.prototype._checkForErrors = function () {
        if (!this._isStandalone()) {
            this._checkParentType();
        }
        this._checkName();
    };
    NgModel.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup) &&
            this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
        }
        else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
        }
    };
    NgModel.prototype._checkName = function () {
        if (this.options && this.options.name)
            this.name = this.options.name;
        if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
        }
    };
    NgModel.prototype._updateValue = function (value) {
        var _this = this;
        resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
    };
    NgModel.prototype._updateDisabled = function (changes) {
        var _this = this;
        var disabledValue = changes['isDisabled'].currentValue;
        var isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
        resolvedPromise$1.then(function () {
            if (isDisabled && !_this.control.disabled) {
                _this.control.disable();
            }
            else if (!isDisabled && _this.control.disabled) {
                _this.control.enable();
            }
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgModel.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disabled'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgModel.prototype, "isDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngModel'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgModel.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngModelOptions'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgModel.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('ngModelChange'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgModel.prototype, "update", void 0);
    NgModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ngModel]:not([formControlName]):not([formControl])',
            providers: [formControlBinding],
            exportAs: 'ngModel'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALUE_ACCESSOR)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer,
            Array,
            Array, Array])
    ], NgModel);
    return NgModel;
}(NgControl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Token to provide to turn off the ngModel warning on formControl and formControlName.
 */
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgModelWithFormControlWarning');
var formControlBinding$1 = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormControlDirective; })
};
/**
 * @description
 * * Syncs a standalone `FormControl` instance to a form control element.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * ### Registering a single form control
 *
 * The following examples shows how to register a standalone control and set its value.
 *
 * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * ### Use with ngModel
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
 *
 * Now deprecated:
 *
 * ```html
 * <input [formControl]="control" [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * This has been deprecated for a few reasons. First, developers have found this pattern
 * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
 * an input/output property named `ngModel` on the reactive form directive that simply
 * approximates (some of) its behavior. Specifically, it allows getting/setting the value
 * and intercepting value events. However, some of `ngModel`'s other features - like
 * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
 * which has understandably caused some confusion.
 *
 * In addition, this pattern mixes template-driven and reactive forms strategies, which
 * we generally don't recommend because it doesn't take advantage of the full benefits of
 * either strategy. Setting the value in the template violates the template-agnostic
 * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
 * the class removes the convenience of defining forms in the template.
 *
 * To update your code before v7, you'll want to decide whether to stick with reactive form
 * directives (and get/set values using reactive forms patterns) or switch over to
 * template-driven directives.
 *
 * After (choice 1 - use reactive forms):
 *
 * ```html
 * <input [formControl]="control">
 * ```
 *
 * ```ts
 * this.control.setValue('some value');
 * ```
 *
 * After (choice 2 - use template-driven forms):
 *
 * ```html
 * <input [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * By default, when you use this pattern, you will see a deprecation warning once in dev
 * mode. You can choose to silence this warning by providing a config for
 * `ReactiveFormsModule` at import time:
 *
 * ```ts
 * imports: [
 *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
 * ]
 * ```
 *
 * Alternatively, you can choose to surface a separate warning for each instance of this
 * pattern with a config value of `"always"`. This may help to track down where in the code
 * the pattern is being used as the code is being updated.
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var FormControlDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormControlDirective, _super);
    function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this = _super.call(this) || this;
        _this._ngModelWarningConfig = _ngModelWarningConfig;
        /** @deprecated as of v6 */
        _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular `FormControlDirective` instance. Used to support warning config of "always".
         *
         * @internal
         */
        _this._ngModelWarningSent = false;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    FormControlDirective_1 = FormControlDirective;
    Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
        /**
         * @description
         * Triggers a warning that this input should not be used with reactive forms.
         */
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */
    FormControlDirective.prototype.ngOnChanges = function (changes) {
        if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);
            if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
            }
            this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControl', FormControlDirective_1, this, this._ngModelWarningConfig);
            this.form.setValue(this.model);
            this.viewModel = this.model;
        }
    };
    Object.defineProperty(FormControlDirective.prototype, "path", {
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "validator", {
        /**
         * @description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
        /**
         * @description
         * Async validator function composed of all the async validators registered with this
         * directive.
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "control", {
        /**
         * @description
         * The `FormControl` bound to this directive.
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value for the view model.
     */
    FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    FormControlDirective.prototype._isControlChanged = function (changes) {
        return changes.hasOwnProperty('form');
    };
    var FormControlDirective_1;
    /**
     * @description
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlDirective. Used to support warning config of "once".
     *
     * @internal
     */
    FormControlDirective._ngModelWarningSentOnce = false;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formControl'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", FormControl)
    ], FormControlDirective.prototype, "form", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disabled'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
    ], FormControlDirective.prototype, "isDisabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngModel'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormControlDirective.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('ngModelChange'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormControlDirective.prototype, "update", void 0);
    FormControlDirective = FormControlDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALUE_ACCESSOR)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_MODEL_WITH_FORM_CONTROL_WARNING)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array,
            Array, Array, Object])
    ], FormControlDirective);
    return FormControlDirective;
}(NgControl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider$1 = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormGroupDirective; })
};
/**
 * @description
 *
 * Binds an existing `FormGroup` to a DOM element.
 *
 * This directive accepts an existing `FormGroup` instance. It will then use this
 * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
 * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
 * and `FormArrayName` directives.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * ### Register Form Group
 *
 * The following example registers a `FormGroup` with first name and last name controls,
 * and listens for the *ngSubmit* event when the button is clicked.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var FormGroupDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormGroupDirective, _super);
    function FormGroupDirective(_validators, _asyncValidators) {
        var _this = _super.call(this) || this;
        _this._validators = _validators;
        _this._asyncValidators = _asyncValidators;
        /**
         * @description
         * Reports whether the form submission has been triggered.
         */
        _this.submitted = false;
        /**
         * @description
         * Tracks the list of added `FormControlName` instances
         */
        _this.directives = [];
        /**
         * @description
         * Tracks the `FormGroup` bound to this directive.
         */
        _this.form = null;
        /**
         * @description
         * Emits an event when the form submission has been triggered.
         */
        _this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    /**
     * @description
     * A lifecycle method called when the directive's inputs change. For internal use only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */
    FormGroupDirective.prototype.ngOnChanges = function (changes) {
        this._checkFormPresent();
        if (changes.hasOwnProperty('form')) {
            this._updateValidators();
            this._updateDomValue();
            this._updateRegistrations();
        }
    };
    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
        /**
         * @description
         * Returns this directive's instance.
         */
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "control", {
        /**
         * @description
         * Returns the `FormGroup` bound to this directive.
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "path", {
        /**
         * @description
         * Returns an array representing the path to this group. Because this directive
         * always lives at the top level of a form, it always an empty array.
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param dir The `FormControlName` directive instance.
     */
    FormGroupDirective.prototype.addControl = function (dir) {
        var ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
    };
    /**
     * @description
     * Retrieves the `FormControl` instance from the provided `FormControlName` directive
     *
     * @param dir The `FormControlName` directive instance.
     */
    FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
    /**
     * @description
     * Removes the `FormControlName` instance from the internal list of directives
     *
     * @param dir The `FormControlName` directive instance.
     */
    FormGroupDirective.prototype.removeControl = function (dir) { removeDir(this.directives, dir); };
    /**
     * Adds a new `FormGroupName` directive instance to the form.
     *
     * @param dir The `FormGroupName` directive instance.
     */
    FormGroupDirective.prototype.addFormGroup = function (dir) {
        var ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * No-op method to remove the form group.
     *
     * @param dir The `FormGroupName` directive instance.
     */
    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
    /**
     * @description
     * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
     *
     * @param dir The `FormGroupName` directive instance.
     */
    FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
    /**
     * Adds a new `FormArrayName` directive instance to the form.
     *
     * @param dir The `FormArrayName` directive instance.
     */
    FormGroupDirective.prototype.addFormArray = function (dir) {
        var ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * No-op method to remove the form array.
     *
     * @param dir The `FormArrayName` directive instance.
     */
    FormGroupDirective.prototype.removeFormArray = function (dir) { };
    /**
     * @description
     * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
     *
     * @param dir The `FormArrayName` directive instance.
     */
    FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
    /**
     * Sets the new value for the provided `FormControlName` directive.
     *
     * @param dir The `FormControlName` directive instance.
     * @param value The new value for the directive's control.
     */
    FormGroupDirective.prototype.updateModel = function (dir, value) {
        var ctrl = this.form.get(dir.path);
        ctrl.setValue(value);
    };
    /**
     * @description
     * Method called with the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param $event The "submit" event object
     */
    FormGroupDirective.prototype.onSubmit = function ($event) {
        this.submitted = true;
        syncPendingControls(this.form, this.directives);
        this.ngSubmit.emit($event);
        return false;
    };
    /**
     * @description
     * Method called when the "reset" event is triggered on the form.
     */
    FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
    /**
     * @description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param value The new value for the form.
     */
    FormGroupDirective.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this.submitted = false;
    };
    /** @internal */
    FormGroupDirective.prototype._updateDomValue = function () {
        var _this = this;
        this.directives.forEach(function (dir) {
            var newCtrl = _this.form.get(dir.path);
            if (dir.control !== newCtrl) {
                cleanUpControl(dir.control, dir);
                if (newCtrl)
                    setUpControl(newCtrl, dir);
                dir.control = newCtrl;
            }
        });
        this.form._updateTreeValidity({ emitEvent: false });
    };
    FormGroupDirective.prototype._updateRegistrations = function () {
        var _this = this;
        this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
        if (this._oldForm)
            this._oldForm._registerOnCollectionChange(function () { });
        this._oldForm = this.form;
    };
    FormGroupDirective.prototype._updateValidators = function () {
        var sync = composeValidators(this._validators);
        this.form.validator = Validators.compose([this.form.validator, sync]);
        var async = composeAsyncValidators(this._asyncValidators);
        this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
    };
    FormGroupDirective.prototype._checkFormPresent = function () {
        if (!this.form) {
            ReactiveErrors.missingFormException();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formGroup'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", FormGroup)
    ], FormGroupDirective.prototype, "form", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormGroupDirective.prototype, "ngSubmit", void 0);
    FormGroupDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[formGroup]',
            providers: [formDirectiveProvider$1],
            host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
            exportAs: 'ngForm'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array, Array])
    ], FormGroupDirective);
    return FormGroupDirective;
}(ControlContainer));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formGroupNameProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormGroupName; })
};
/**
 * @description
 *
 * Syncs a nested `FormGroup` to a DOM element.
 *
 * This directive can only be used with a parent `FormGroupDirective`.
 *
 * It accepts the string name of the nested `FormGroup` to link, and
 * looks for a `FormGroup` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * Use nested form groups to validate a sub-group of a
 * form separately from the rest or to group the values of certain
 * controls into their own nested object.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * @usageNotes
 *
 * ### Access the group by name
 *
 * The following example uses the {@link AbstractControl#get get} method to access the
 * associated `FormGroup`
 *
 * ```ts
 *   this.form.get('name');
 * ```
 *
 * ### Access individual controls in the group
 *
 * The following example uses the {@link AbstractControl#get get} method to access
 * individual controls within the group using dot syntax.
 *
 * ```ts
 *   this.form.get('name.first');
 * ```
 *
 * ### Register a nested `FormGroup`.
 *
 * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
 * and provides methods to retrieve the nested `FormGroup` and individual controls.
 *
 * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var FormGroupName = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormGroupName, _super);
    function FormGroupName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /** @internal */
    FormGroupName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formGroupName'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], FormGroupName.prototype, "name", void 0);
    FormGroupName = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[formGroupName]', providers: [formGroupNameProvider] }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer, Array, Array])
    ], FormGroupName);
    return FormGroupName;
}(AbstractFormGroupDirective));
var formArrayNameProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormArrayName; })
};
/**
 * @description
 *
 * Syncs a nested `FormArray` to a DOM element.
 *
 * This directive is designed to be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested `FormArray` you want to link, and
 * will look for a `FormArray` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var FormArrayName = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormArrayName, _super);
    function FormArrayName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * @description
     * A lifecycle method called when the directive's inputs are initialized. For internal use only.
     *
     * @throws If the directive does not have a valid parent.
     */
    FormArrayName.prototype.ngOnInit = function () {
        this._checkParentType();
        this.formDirective.addFormArray(this);
    };
    /**
     * @description
     * A lifecycle method called before the directive's instance is destroyed. For internal use only.
     */
    FormArrayName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormArray(this);
        }
    };
    Object.defineProperty(FormArrayName.prototype, "control", {
        /**
         * @description
         * The `FormArray` bound to this directive.
         */
        get: function () { return this.formDirective.getFormArray(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "formDirective", {
        /**
         * @description
         * The top-level directive for this group if present, otherwise null.
         */
        get: function () {
            return this._parent ? this._parent.formDirective : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "path", {
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "validator", {
        /**
         * @description
         * Synchronous validator function composed of all the synchronous validators registered with this
         * directive.
         */
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
        /**
         * @description
         * Async validator function composed of all the async validators registered with this directive.
         */
        get: function () {
            return composeAsyncValidators(this._asyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    FormArrayName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formArrayName'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], FormArrayName.prototype, "name", void 0);
    FormArrayName = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[formArrayName]', providers: [formArrayNameProvider] }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer, Array, Array])
    ], FormArrayName);
    return FormArrayName;
}(ControlContainer));
function _hasInvalidParent(parent) {
    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
        !(parent instanceof FormArrayName);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var controlNameBinding = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormControlName; })
};
/**
 * @description
 * Syncs a `FormControl` in an existing `FormGroup` to a form control
 * element by name.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * ### Register `FormControl` within a group
 *
 * The following example shows how to register multiple form controls within a form group
 * and set their value.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: `RadioControlValueAccessor`
 * * Selects: `SelectControlValueAccessor`
 *
 * ### Use with ngModel
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
 *
 * Now deprecated:
 *
 * ```html
 * <form [formGroup]="form">
 *   <input formControlName="first" [(ngModel)]="value">
 * </form>
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * This has been deprecated for a few reasons. First, developers have found this pattern
 * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
 * an input/output property named `ngModel` on the reactive form directive that simply
 * approximates (some of) its behavior. Specifically, it allows getting/setting the value
 * and intercepting value events. However, some of `ngModel`'s other features - like
 * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
 * which has understandably caused some confusion.
 *
 * In addition, this pattern mixes template-driven and reactive forms strategies, which
 * we generally don't recommend because it doesn't take advantage of the full benefits of
 * either strategy. Setting the value in the template violates the template-agnostic
 * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
 * the class removes the convenience of defining forms in the template.
 *
 * To update your code before v7, you'll want to decide whether to stick with reactive form
 * directives (and get/set values using reactive forms patterns) or switch over to
 * template-driven directives.
 *
 * After (choice 1 - use reactive forms):
 *
 * ```html
 * <form [formGroup]="form">
 *   <input formControlName="first">
 * </form>
 * ```
 *
 * ```ts
 * this.form.get('first').setValue('some value');
 * ```
 *
 * After (choice 2 - use template-driven forms):
 *
 * ```html
 * <input [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * By default, when you use this pattern, you will see a deprecation warning once in dev
 * mode. You can choose to silence this warning by providing a config for
 * `ReactiveFormsModule` at import time:
 *
 * ```ts
 * imports: [
 *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
 * ]
 * ```
 *
 * Alternatively, you can choose to surface a separate warning for each instance of this
 * pattern with a config value of `"always"`. This may help to track down where in the code
 * the pattern is being used as the code is being updated.
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var FormControlName = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormControlName, _super);
    function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this = _super.call(this) || this;
        _this._ngModelWarningConfig = _ngModelWarningConfig;
        _this._added = false;
        /** @deprecated as of v6 */
        _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlName instance. Used to support warning config of "always".
         *
         * @internal
         */
        _this._ngModelWarningSent = false;
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    FormControlName_1 = FormControlName;
    Object.defineProperty(FormControlName.prototype, "isDisabled", {
        /**
         * @description
         * Triggers a warning that this input should not be used with reactive forms.
         */
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * A lifecycle method called when the directive's inputs change. For internal use only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */
    FormControlName.prototype.ngOnChanges = function (changes) {
        if (!this._added)
            this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControlName', FormControlName_1, this, this._ngModelWarningConfig);
            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
        }
    };
    /**
     * @description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     */
    FormControlName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeControl(this);
        }
    };
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value for the view model.
     */
    FormControlName.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    Object.defineProperty(FormControlName.prototype, "path", {
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "formDirective", {
        /**
         * @description
         * The top-level directive for this group if present, otherwise null.
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "validator", {
        /**
         * @description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
        /**
         * @description
         * Async validator function composed of all the async validators registered with this
         * directive.
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    FormControlName.prototype._checkParentType = function () {
        if (!(this._parent instanceof FormGroupName) &&
            this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
        }
        else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
            !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
        }
    };
    FormControlName.prototype._setUpControl = function () {
        this._checkParentType();
        this.control = this.formDirective.addControl(this);
        if (this.control.disabled && this.valueAccessor.setDisabledState) {
            this.valueAccessor.setDisabledState(true);
        }
        this._added = true;
    };
    var FormControlName_1;
    /**
     * @description
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlName. Used to support warning config of "once".
     *
     * @internal
     */
    FormControlName._ngModelWarningSentOnce = false;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formControlName'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], FormControlName.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disabled'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
    ], FormControlName.prototype, "isDisabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngModel'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormControlName.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('ngModelChange'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormControlName.prototype, "update", void 0);
    FormControlName = FormControlName_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[formControlName]', providers: [controlNameBinding] }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALUE_ACCESSOR)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_MODEL_WITH_FORM_CONTROL_WARNING)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer,
            Array,
            Array, Array, Object])
    ], FormControlName);
    return FormControlName;
}(NgControl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 */
var REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RequiredValidator; }),
    multi: true
};
/**
 * @description
 * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 */
var CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CheckboxRequiredValidator; }),
    multi: true
};
/**
 * @description
 * A directive that adds the `required` validator to any controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a required validator using template-driven forms
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var RequiredValidator = /** @class */ (function () {
    function RequiredValidator() {
    }
    Object.defineProperty(RequiredValidator.prototype, "required", {
        /**
         * @description
         * Tracks changes to the required attribute bound to this directive.
         */
        get: function () { return this._required; },
        set: function (value) {
            this._required = value != null && value !== false && "" + value !== 'false';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * Method that validates whether the control is empty.
     * Returns the validation result if enabled, otherwise null.
     */
    RequiredValidator.prototype.validate = function (control) {
        return this.required ? Validators.required(control) : null;
    };
    /**
     * @description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param fn The callback function
     */
    RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], RequiredValidator.prototype, "required", null);
    RequiredValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
            providers: [REQUIRED_VALIDATOR],
            host: { '[attr.required]': 'required ? "" : null' }
        })
    ], RequiredValidator);
    return RequiredValidator;
}());
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a required checkbox validator using template-driven forms
 *
 * The following example shows how to add a checkbox required validator to an input attached to an ngModel binding.
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * @publicApi
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var CheckboxRequiredValidator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CheckboxRequiredValidator, _super);
    function CheckboxRequiredValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description
     * Method that validates whether or not the checkbox has been checked.
     * Returns the validation result if enabled, otherwise null.
     */
    CheckboxRequiredValidator.prototype.validate = function (control) {
        return this.required ? Validators.requiredTrue(control) : null;
    };
    CheckboxRequiredValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
            providers: [CHECKBOX_REQUIRED_VALIDATOR],
            host: { '[attr.required]': 'required ? "" : null' }
        })
    ], CheckboxRequiredValidator);
    return CheckboxRequiredValidator;
}(RequiredValidator));
/**
 * @description
 * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
 */
var EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return EmailValidator; }),
    multi: true
};
/**
 * A directive that adds the `email` validator to controls marked with the
 * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding an email validator
 *
 * The following example shows how to add an email validator to an input attached to an ngModel binding.
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * @publicApi
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    Object.defineProperty(EmailValidator.prototype, "email", {
        /**
         * @description
         * Tracks changes to the email attribute bound to this directive.
         */
        set: function (value) {
            this._enabled = value === '' || value === true || value === 'true';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * Method that validates whether an email address is valid.
     * Returns the validation result if enabled, otherwise null.
     */
    EmailValidator.prototype.validate = function (control) {
        return this._enabled ? Validators.email(control) : null;
    };
    /**
     * @description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param fn The callback function
     */
    EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], EmailValidator.prototype, "email", null);
    EmailValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[email][formControlName],[email][formControl],[email][ngModel]',
            providers: [EMAIL_VALIDATOR]
        })
    ], EmailValidator);
    return EmailValidator;
}());
/**
 * @description
 * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 */
var MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MinLengthValidator; }),
    multi: true
};
/**
 * A directive that adds minimum length validation to controls marked with the
 * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` mult-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a minimum length validator
 *
 * The following example shows how to add a minimum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel minlength="4">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var MinLengthValidator = /** @class */ (function () {
    function MinLengthValidator() {
    }
    /**
     * @description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */
    MinLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('minlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @description
     * Method that validates whether the value meets a minimum length
     * requirement. Returns the validation result if enabled, otherwise null.
     */
    MinLengthValidator.prototype.validate = function (control) {
        return this.minlength == null ? null : this._validator(control);
    };
    /**
     * @description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param fn The callback function
     */
    MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    MinLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.minLength(parseInt(this.minlength, 10));
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], MinLengthValidator.prototype, "minlength", void 0);
    MinLengthValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
            providers: [MIN_LENGTH_VALIDATOR],
            host: { '[attr.minlength]': 'minlength ? minlength : null' }
        })
    ], MinLengthValidator);
    return MinLengthValidator;
}());
/**
 * @description
 * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 */
var MAX_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MaxLengthValidator; }),
    multi: true
};
/**
 * A directive that adds max length validation to controls marked with the
 * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a maximum length validator
 *
 * The following example shows how to add a maximum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel maxlength="25">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var MaxLengthValidator = /** @class */ (function () {
    function MaxLengthValidator() {
    }
    /**
     * @description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */
    MaxLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('maxlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @description
     * Method that validates whether the value exceeds
     * the maximum length requirement.
     */
    MaxLengthValidator.prototype.validate = function (control) {
        return this.maxlength != null ? this._validator(control) : null;
    };
    /**
     * @description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param fn The callback function
     */
    MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    MaxLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], MaxLengthValidator.prototype, "maxlength", void 0);
    MaxLengthValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
            providers: [MAX_LENGTH_VALIDATOR],
            host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
        })
    ], MaxLengthValidator);
    return MaxLengthValidator;
}());
/**
 * @description
 * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
 */
var PATTERN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return PatternValidator; }),
    multi: true
};
/**
 * @description
 * A directive that adds regex pattern validation to controls marked with the
 * `pattern` attribute. The regex must match the entire control value.
 * The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a pattern validator
 *
 * The following example shows how to add a pattern validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var PatternValidator = /** @class */ (function () {
    function PatternValidator() {
    }
    /**
     * @description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */
    PatternValidator.prototype.ngOnChanges = function (changes) {
        if ('pattern' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @description
     * Method that validates whether the value matches the
     * the pattern requirement.
     */
    PatternValidator.prototype.validate = function (control) { return this._validator(control); };
    /**
     * @description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param fn The callback function
     */
    PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], PatternValidator.prototype, "pattern", void 0);
    PatternValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
            providers: [PATTERN_VALIDATOR],
            host: { '[attr.pattern]': 'pattern ? pattern : null' }
        })
    ], PatternValidator);
    return PatternValidator;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * Creates an `AbstractControl` from a user-specified configuration.
 *
 * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
 * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
 * forms.
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 * @publicApi
 */
var FormBuilder = /** @class */ (function () {
    function FormBuilder() {
    }
    /**
     * @description
     * Construct a new `FormGroup` instance.
     *
     * @param controlsConfig A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param legacyOrOpts Configuration options object for the `FormGroup`. The object can
     * have two shapes:
     *
     * 1) `AbstractControlOptions` object (preferred), which consists of:
     * * `validators`: A synchronous validator function, or an array of validator functions
     * * `asyncValidators`: A single async validator or array of async validator functions
     * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
     * submit')
     *
     * 2) Legacy configuration object, which consists of:
     * * `validator`: A synchronous validator function, or an array of validator functions
     * * `asyncValidator`: A single async validator or array of async validator functions
     *
     */
    FormBuilder.prototype.group = function (controlsConfig, legacyOrOpts) {
        if (legacyOrOpts === void 0) { legacyOrOpts = null; }
        var controls = this._reduceControls(controlsConfig);
        var validators = null;
        var asyncValidators = null;
        var updateOn = undefined;
        if (legacyOrOpts != null &&
            (legacyOrOpts.asyncValidator !== undefined || legacyOrOpts.validator !== undefined)) {
            // `legacyOrOpts` are legacy form group options
            validators = legacyOrOpts.validator != null ? legacyOrOpts.validator : null;
            asyncValidators = legacyOrOpts.asyncValidator != null ? legacyOrOpts.asyncValidator : null;
        }
        else if (legacyOrOpts != null) {
            // `legacyOrOpts` are `AbstractControlOptions`
            validators = legacyOrOpts.validators != null ? legacyOrOpts.validators : null;
            asyncValidators = legacyOrOpts.asyncValidators != null ? legacyOrOpts.asyncValidators : null;
            updateOn = legacyOrOpts.updateOn != null ? legacyOrOpts.updateOn : undefined;
        }
        return new FormGroup(controls, { asyncValidators: asyncValidators, updateOn: updateOn, validators: validators });
    };
    /**
     * @description
     * Construct a new `FormControl` with the given state, validators and options.
     *
     * @param formState Initializes the control with an initial state value, or
     * with an object that contains both a value and a disabled status.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator
     * functions.
     *
     * @usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts"
     *   linenums="false" region="disabled-control">
     * </code-example>
     */
    FormBuilder.prototype.control = function (formState, validatorOrOpts, asyncValidator) {
        return new FormControl(formState, validatorOrOpts, asyncValidator);
    };
    /**
     * Constructs a new `FormArray` from the given array of configurations,
     * validators and options.
     *
     * @param controlsConfig An array of child controls or control configs. Each
     * child control is given an index when it is registered.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator
     * functions.
     */
    FormBuilder.prototype.array = function (controlsConfig, validatorOrOpts, asyncValidator) {
        var _this = this;
        var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
        return new FormArray(controls, validatorOrOpts, asyncValidator);
    };
    /** @internal */
    FormBuilder.prototype._reduceControls = function (controlsConfig) {
        var _this = this;
        var controls = {};
        Object.keys(controlsConfig).forEach(function (controlName) {
            controls[controlName] = _this._createControl(controlsConfig[controlName]);
        });
        return controls;
    };
    /** @internal */
    FormBuilder.prototype._createControl = function (controlConfig) {
        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
            controlConfig instanceof FormArray) {
            return controlConfig;
        }
        else if (Array.isArray(controlConfig)) {
            var value = controlConfig[0];
            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
        }
        else {
            return this.control(controlConfig);
        }
    };
    FormBuilder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FormBuilder);
    return FormBuilder;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @publicApi
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Version"]('7.1.4');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 *
 * Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * @publicApi
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 */
var NgNoValidate = /** @class */ (function () {
    function NgNoValidate() {
    }
    NgNoValidate = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
            host: { 'novalidate': '' },
        })
    ], NgNoValidate);
    return NgNoValidate;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SHARED_FORM_DIRECTIVES = [
    NgNoValidate,
    NgSelectOption,
    NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    RangeValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator,
    CheckboxRequiredValidator,
    EmailValidator,
];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm, NgFormSelectorWarning];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */
var InternalFormsSharedModule = /** @class */ (function () {
    function InternalFormsSharedModule() {
    }
    InternalFormsSharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: SHARED_FORM_DIRECTIVES,
            exports: SHARED_FORM_DIRECTIVES,
        })
    ], InternalFormsSharedModule);
    return InternalFormsSharedModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Exports the required providers and directives for template-driven forms,
 * making them available for import by NgModules that import this module.
 * @see [Forms](guide/forms)
 *
 * @see [Forms Guide](/guide/forms)
 *
 * @publicApi
 */
var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule_1 = FormsModule;
    /**
     * @description
     * Provides options for configuring the template-driven forms module.
     *
     * @param opts An object of configuration options
     * * `warnOnDeprecatedNgFormSelector` Configures when to emit a warning when the deprecated
     * `ngForm` selector is used.
     */
    FormsModule.withConfig = function (opts) {
        return {
            ngModule: FormsModule_1,
            providers: [{ provide: NG_FORM_SELECTOR_WARNING, useValue: opts.warnOnDeprecatedNgFormSelector }]
        };
    };
    var FormsModule_1;
    FormsModule = FormsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: TEMPLATE_DRIVEN_DIRECTIVES,
            providers: [RadioControlRegistry],
            exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
        })
    ], FormsModule);
    return FormsModule;
}());
/**
 * Exports the required infrastructure and directives for reactive forms,
 * making them available for import by NgModules that import this module.
 * @see [Forms](guide/reactive-forms)
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 * @publicApi
 */
var ReactiveFormsModule = /** @class */ (function () {
    function ReactiveFormsModule() {
    }
    ReactiveFormsModule_1 = ReactiveFormsModule;
    /**
     * @description
     * Provides options for configuring the reactive forms module.
     *
     * @param opts An object of configuration options
     * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
     * binding is used with reactive form directives.
     */
    ReactiveFormsModule.withConfig = function (opts) {
        return {
            ngModule: ReactiveFormsModule_1,
            providers: [{
                    provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                    useValue: opts.warnOnNgModelWithFormControl
                }]
        };
    };
    var ReactiveFormsModule_1;
    ReactiveFormsModule = ReactiveFormsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [REACTIVE_DRIVEN_DIRECTIVES],
            providers: [FormBuilder, RadioControlRegistry],
            exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
        })
    ], ReactiveFormsModule);
    return ReactiveFormsModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=forms.js.map


/***/ }),

/***/ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js ***!
  \**************************************************************/
/*! exports provided: NgxSmartModalService, NgxSmartModalComponent, NgxSmartModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSmartModalService", function() { return NgxSmartModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSmartModalComponent", function() { return NgxSmartModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSmartModalModule", function() { return NgxSmartModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license ngx-smart-modal
 * MIT license
 */




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxSmartModalService = (function () {
    function NgxSmartModalService() {
        this.modalStack = [];
    }
    /**
     * Add a new modal instance. This step is essential and allows to retrieve any modal at any time.
     * It stores an object that contains the given modal identifier and the modal itself directly in the `modalStack`.
     *
     * @param {?} modalInstance The object that contains the given modal identifier and the modal itself.
     * @param {?=} force Optional parameter that forces the overriding of modal instance if it already exists.
     * @return {?} nothing special.
     */
    NgxSmartModalService.prototype.addModal = /**
     * Add a new modal instance. This step is essential and allows to retrieve any modal at any time.
     * It stores an object that contains the given modal identifier and the modal itself directly in the `modalStack`.
     *
     * @param {?} modalInstance The object that contains the given modal identifier and the modal itself.
     * @param {?=} force Optional parameter that forces the overriding of modal instance if it already exists.
     * @return {?} nothing special.
     */
    function (modalInstance, force) {
        if (force) {
            var /** @type {?} */ i = this.modalStack.findIndex(function (o) {
                return o.id === modalInstance.id;
            });
            if (i > -1) {
                this.modalStack[i].modal = modalInstance.modal;
            }
            else {
                this.modalStack.push(modalInstance);
            }
            return;
        }
        this.modalStack.push(modalInstance);
    };
    /**
     * Retrieve a modal instance by its identifier.
     *
     * @param {?} id The modal identifier used at creation time.
     * @return {?}
     */
    NgxSmartModalService.prototype.getModal = /**
     * Retrieve a modal instance by its identifier.
     *
     * @param {?} id The modal identifier used at creation time.
     * @return {?}
     */
    function (id) {
        return this.modalStack.filter(function (o) {
            return o.id === id;
        })[0].modal;
    };
    /**
     * Alias of `getModal` to retrieve a modal instance by its identifier.
     *
     * @param {?} id The modal identifier used at creation time.
     * @return {?}
     */
    NgxSmartModalService.prototype.get = /**
     * Alias of `getModal` to retrieve a modal instance by its identifier.
     *
     * @param {?} id The modal identifier used at creation time.
     * @return {?}
     */
    function (id) {
        return this.getModal(id);
    };
    /**
     * Open a given modal
     *
     * @param {?} id The modal identifier used at creation time.
     * @param {?=} force Tell the modal to open top of all other opened modals
     * @return {?}
     */
    NgxSmartModalService.prototype.open = /**
     * Open a given modal
     *
     * @param {?} id The modal identifier used at creation time.
     * @param {?=} force Tell the modal to open top of all other opened modals
     * @return {?}
     */
    function (id, force) {
        if (force === void 0) { force = false; }
        var /** @type {?} */ instance = this.modalStack.find(function (o) {
            return o.id === id;
        });
        if (!!instance) {
            instance.modal.open(force);
        }
        else {
            throw new Error('Modal not found');
        }
    };
    /**
     * Close a given modal
     *
     * @param {?} id The modal identifier used at creation time.
     * @return {?}
     */
    NgxSmartModalService.prototype.close = /**
     * Close a given modal
     *
     * @param {?} id The modal identifier used at creation time.
     * @return {?}
     */
    function (id) {
        var /** @type {?} */ instance = this.modalStack.find(function (o) {
            return o.id === id;
        });
        if (!!instance) {
            instance.modal.close();
        }
        else {
            throw new Error('Modal not found');
        }
    };
    /**
     * Toggles a given modal
     * If the retrieved modal is opened it closes it, else it opens it.
     *
     * @param {?} id The modal identifier used at creation time.
     * @param {?=} force Tell the modal to open top of all other opened modals
     * @return {?}
     */
    NgxSmartModalService.prototype.toggle = /**
     * Toggles a given modal
     * If the retrieved modal is opened it closes it, else it opens it.
     *
     * @param {?} id The modal identifier used at creation time.
     * @param {?=} force Tell the modal to open top of all other opened modals
     * @return {?}
     */
    function (id, force) {
        if (force === void 0) { force = false; }
        var /** @type {?} */ instance = this.modalStack.find(function (o) {
            return o.id === id;
        });
        if (!!instance) {
            instance.modal.toggle(force);
        }
        else {
            throw new Error('Modal not found');
        }
    };
    /**
     * Retrieve all the created modals.
     *
     * @return {?} an array that contains all modal instances.
     */
    NgxSmartModalService.prototype.getModalStack = /**
     * Retrieve all the created modals.
     *
     * @return {?} an array that contains all modal instances.
     */
    function () {
        return this.modalStack;
    };
    /**
     * Retrieve all the opened modals. It looks for all modal instances with their `visible` property set to `true`.
     *
     * @return {?} an array that contains all the opened modals.
     */
    NgxSmartModalService.prototype.getOpenedModals = /**
     * Retrieve all the opened modals. It looks for all modal instances with their `visible` property set to `true`.
     *
     * @return {?} an array that contains all the opened modals.
     */
    function () {
        var /** @type {?} */ modals = [];
        this.modalStack.forEach(function (o) {
            if (o.modal.visible) {
                modals.push(o);
            }
        });
        return modals;
    };
    /**
     * Get the higher `z-index` value between all the modal instances. It iterates over the `ModalStack` array and
     * calculates a higher value (it takes the highest index value between all the modal instances and adds 1).
     * Use it to make a modal appear foreground.
     *
     * @return {?} a higher index from all the existing modal instances.
     */
    NgxSmartModalService.prototype.getHigherIndex = /**
     * Get the higher `z-index` value between all the modal instances. It iterates over the `ModalStack` array and
     * calculates a higher value (it takes the highest index value between all the modal instances and adds 1).
     * Use it to make a modal appear foreground.
     *
     * @return {?} a higher index from all the existing modal instances.
     */
    function () {
        var /** @type {?} */ index = [1041];
        var /** @type {?} */ modals = this.getModalStack();
        modals.forEach(function (o) {
            index.push(o.modal.layerPosition);
        });
        return Math.max.apply(Math, index) + 1;
    };
    /**
     * It gives the number of modal instances. It's helpful to know if the modal stack is empty or not.
     *
     * @return {?} the number of modal instances.
     */
    NgxSmartModalService.prototype.getModalStackCount = /**
     * It gives the number of modal instances. It's helpful to know if the modal stack is empty or not.
     *
     * @return {?} the number of modal instances.
     */
    function () {
        return this.modalStack.length;
    };
    /**
     * Remove a modal instance from the modal stack.
     *
     * @param {?} id The modal identifier.
     * @return {?} the removed modal instance.
     */
    NgxSmartModalService.prototype.removeModal = /**
     * Remove a modal instance from the modal stack.
     *
     * @param {?} id The modal identifier.
     * @return {?} the removed modal instance.
     */
    function (id) {
        var /** @type {?} */ i = this.modalStack.findIndex(function (o) {
            return o.id === id;
        });
        if (i > -1) {
            this.modalStack.splice(i, 1);
        }
    };
    /**
     * Associate data to an identified modal. If the modal isn't already associated to some data, it creates a new
     * entry in the `modalData` array with its `id` and the given `data`. If the modal already has data, it rewrites
     * them with the new ones. Finally if no modal found it returns an error message in the console and false value
     * as method output.
     *
     * @param {?} data The data you want to associate to the modal.
     * @param {?} id The modal identifier.
     * @param {?=} force If true, overrides the previous stored data if there was.
     * @return {?} true if the given modal exists and the process has been tried, either false.
     */
    NgxSmartModalService.prototype.setModalData = /**
     * Associate data to an identified modal. If the modal isn't already associated to some data, it creates a new
     * entry in the `modalData` array with its `id` and the given `data`. If the modal already has data, it rewrites
     * them with the new ones. Finally if no modal found it returns an error message in the console and false value
     * as method output.
     *
     * @param {?} data The data you want to associate to the modal.
     * @param {?} id The modal identifier.
     * @param {?=} force If true, overrides the previous stored data if there was.
     * @return {?} true if the given modal exists and the process has been tried, either false.
     */
    function (data, id, force) {
        if (!!this.modalStack.find(function (o) {
            return o.id === id;
        })) {
            this.getModal(id).setData(data, force);
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Retrieve modal data by its identifier.
     *
     * @param {?} id The modal identifier used at creation time.
     * @return {?} the associated modal data.
     */
    NgxSmartModalService.prototype.getModalData = /**
     * Retrieve modal data by its identifier.
     *
     * @param {?} id The modal identifier used at creation time.
     * @return {?} the associated modal data.
     */
    function (id) {
        return this.getModal(id).getData();
    };
    /**
     * Reset the data attached to a given modal.
     *
     * @param {?} id The modal identifier used at creation time.
     * @return {?} the removed data or false if modal doesn't exist.
     */
    NgxSmartModalService.prototype.resetModalData = /**
     * Reset the data attached to a given modal.
     *
     * @param {?} id The modal identifier used at creation time.
     * @return {?} the removed data or false if modal doesn't exist.
     */
    function (id) {
        if (!!this.modalStack.find(function (o) {
            return o.id === id;
        })) {
            var /** @type {?} */ removed = this.getModal(id).getData();
            this.getModal(id).removeData();
            return removed;
        }
        else {
            return false;
        }
    };
    /**
     * Close the latest opened modal if it has been declared as escapable
     * Using a debounce system because one or more modals could be listening
     * escape key press event.
     * @return {?}
     */
    NgxSmartModalService.prototype.closeLatestModal = /**
     * Close the latest opened modal if it has been declared as escapable
     * Using a debounce system because one or more modals could be listening
     * escape key press event.
     * @return {?}
     */
    function () {
        var /** @type {?} */ me = this;
        clearTimeout(this.debouncer);
        this.debouncer = setTimeout(function () {
            var /** @type {?} */ tmp;
            me.getOpenedModals().forEach(function (m) {
                if (m.modal.layerPosition > (!!tmp ? tmp.modal.layerPosition : 0 && false)) {
                    tmp = m;
                }
            });
            return !!tmp ? tmp.modal.close() : false;
        }, 100);
    };
    NgxSmartModalService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgxSmartModalService.ctorParameters = function () { return []; };
    return NgxSmartModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxSmartModalComponent = (function () {
    function NgxSmartModalComponent(_renderer, _changeDetectorRef, _ngxSmartModalService) {
        var _this = this;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._ngxSmartModalService = _ngxSmartModalService;
        this.closable = true;
        this.escapable = true;
        this.dismissable = true;
        this.identifier = '';
        this.customClass = 'nsm-dialog-animation-fade';
        this.visible = false;
        this.backdrop = true;
        this.force = true;
        this.hideDelay = 500;
        this.autostart = false;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCloseFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDismissFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onAnyCloseEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onAnyCloseEventFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEscape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDataAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDataRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.layerPosition = 1041;
        this.overlayVisible = false;
        this.openedClass = false;
        this.escapeKeyboardEvent = function (event) {
            if (event.keyCode === 27) {
                _this.onEscape.emit(_this);
                _this._ngxSmartModalService.closeLatestModal();
            }
        };
    }
    /**
     * @return {?}
     */
    NgxSmartModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!!this.identifier && this.identifier.length) {
            this.layerPosition += this._ngxSmartModalService.getModalStackCount();
            this._ngxSmartModalService.addModal({ id: this.identifier, modal: this }, this.force);
            if (this.autostart) {
                this._ngxSmartModalService.open(this.identifier);
            }
        }
        else {
            throw new Error('identifier field isn’t set. Please set one before calling <ngx-smart-modal> in a template.');
        }
    };
    /**
     * @return {?}
     */
    NgxSmartModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._ngxSmartModalService.removeModal(this.identifier);
        window.removeEventListener('keyup', this.escapeKeyboardEvent);
        if (!this._ngxSmartModalService.getModalStack.length) {
            this._renderer.removeClass(document.body, 'dialog-open');
        }
    };
    /**
     * @param {?=} top
     * @return {?}
     */
    NgxSmartModalComponent.prototype.open = /**
     * @param {?=} top
     * @return {?}
     */
    function (top) {
        var _this = this;
        if (top) {
            this.layerPosition = this._ngxSmartModalService.getHigherIndex();
        }
        this._renderer.addClass(document.body, 'dialog-open');
        this.overlayVisible = true;
        this.visible = true;
        setTimeout(function () {
            _this.openedClass = true;
            if (_this.target) {
                _this.targetPlacement();
            }
            _this._changeDetectorRef.markForCheck();
        });
        this.onOpen.emit(this);
        if (this.escapable) {
            window.addEventListener('keyup', this.escapeKeyboardEvent);
        }
    };
    /**
     * @return {?}
     */
    NgxSmartModalComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ me = this;
        this.openedClass = false;
        this.onClose.emit(this);
        this.onAnyCloseEvent.emit(this);
        if (this._ngxSmartModalService.getOpenedModals().length < 2) {
            this._renderer.removeClass(document.body, 'dialog-open');
        }
        setTimeout(function () {
            me.visibleChange.emit(me.visible);
            me.visible = false;
            me.overlayVisible = false;
            me._changeDetectorRef.markForCheck();
            me.onCloseFinished.emit(me);
            me.onAnyCloseEventFinished.emit(me);
        }, this.hideDelay);
        window.removeEventListener('keyup', this.escapeKeyboardEvent);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxSmartModalComponent.prototype.dismiss = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var /** @type {?} */ me = this;
        if (!this.dismissable) {
            return;
        }
        if (e.target.classList.contains('overlay')) {
            this.openedClass = false;
            this.onDismiss.emit(this);
            this.onAnyCloseEvent.emit(this);
            if (this._ngxSmartModalService.getOpenedModals().length < 2) {
                this._renderer.removeClass(document.body, 'dialog-open');
            }
            setTimeout(function () {
                me.visible = false;
                me.visibleChange.emit(me.visible);
                me.overlayVisible = false;
                me._changeDetectorRef.markForCheck();
                me.onDismissFinished.emit(me);
                me.onAnyCloseEventFinished.emit(me);
            }, this.hideDelay);
            window.removeEventListener('keyup', this.escapeKeyboardEvent);
        }
    };
    /**
     * @param {?=} top
     * @return {?}
     */
    NgxSmartModalComponent.prototype.toggle = /**
     * @param {?=} top
     * @return {?}
     */
    function (top) {
        if (this.visible) {
            this.close();
        }
        else {
            this.open(top);
        }
    };
    /**
     * @param {?} className
     * @return {?}
     */
    NgxSmartModalComponent.prototype.addCustomClass = /**
     * @param {?} className
     * @return {?}
     */
    function (className) {
        if (!this.customClass.length) {
            this.customClass = className;
        }
        else {
            this.customClass += ' ' + className;
        }
    };
    /**
     * @param {?=} className
     * @return {?}
     */
    NgxSmartModalComponent.prototype.removeCustomClass = /**
     * @param {?=} className
     * @return {?}
     */
    function (className) {
        if (className) {
            this.customClass = this.customClass.replace(className, '').trim();
        }
        else {
            this.customClass = '';
        }
    };
    /**
     * @return {?}
     */
    NgxSmartModalComponent.prototype.isVisible = /**
     * @return {?}
     */
    function () {
        return this.visible;
    };
    /**
     * @return {?}
     */
    NgxSmartModalComponent.prototype.hasData = /**
     * @return {?}
     */
    function () {
        return this._data !== undefined;
    };
    /**
     * @param {?} data
     * @param {?=} force
     * @return {?}
     */
    NgxSmartModalComponent.prototype.setData = /**
     * @param {?} data
     * @param {?=} force
     * @return {?}
     */
    function (data, force) {
        if (!this.hasData() || (this.hasData() && force)) {
            this._data = data;
            this.onDataAdded.emit(this._data);
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NgxSmartModalComponent.prototype.getData = /**
     * @return {?}
     */
    function () {
        return this._data;
    };
    /**
     * @return {?}
     */
    NgxSmartModalComponent.prototype.removeData = /**
     * @return {?}
     */
    function () {
        this._data = undefined;
        this.onDataRemoved.emit(true);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    NgxSmartModalComponent.prototype.targetPlacement = /**
     * @return {?}
     */
    function () {
        if (!this.nsmDialog || !this.nsmContent || !this.nsmOverlay || !this.target) {
            return;
        }
        var /** @type {?} */ targetElementRect = document.querySelector(this.target).getBoundingClientRect();
        var /** @type {?} */ bodyRect = this.nsmOverlay.nativeElement.getBoundingClientRect();
        var /** @type {?} */ nsmContentRect = this.nsmContent.nativeElement.getBoundingClientRect();
        var /** @type {?} */ nsmDialogRect = this.nsmDialog.nativeElement.getBoundingClientRect();
        var /** @type {?} */ marginLeft = parseInt(/** @type {?} */ (getComputedStyle(this.nsmContent.nativeElement).marginLeft), 10);
        var /** @type {?} */ marginTop = parseInt(/** @type {?} */ (getComputedStyle(this.nsmContent.nativeElement).marginTop), 10);
        var /** @type {?} */ offsetTop = targetElementRect.top - nsmDialogRect.top - ((nsmContentRect.height - targetElementRect.height) / 2);
        var /** @type {?} */ offsetLeft = targetElementRect.left - nsmDialogRect.left - ((nsmContentRect.width - targetElementRect.width) / 2);
        if (offsetLeft + nsmDialogRect.left + nsmContentRect.width + (marginLeft * 2) > bodyRect.width) {
            offsetLeft = bodyRect.width - (nsmDialogRect.left + nsmContentRect.width) - (marginLeft * 2);
        }
        else if (offsetLeft + nsmDialogRect.left < 0) {
            offsetLeft = -nsmDialogRect.left;
        }
        if (offsetTop + nsmDialogRect.top + nsmContentRect.height + marginTop > bodyRect.height) {
            offsetTop = bodyRect.height - (nsmDialogRect.top + nsmContentRect.height) - marginTop;
        }
        if (offsetTop < 0) {
            offsetTop = 0;
        }
        this._renderer.setStyle(this.nsmContent.nativeElement, 'top', offsetTop + 'px');
        this._renderer.setStyle(this.nsmContent.nativeElement, 'left', offsetLeft + 'px');
    };
    NgxSmartModalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-smart-modal',
                    template: "\n    <div *ngIf=\"overlayVisible\"\n         [style.z-index]=\"visible ? layerPosition-1 : -1\"\n         [ngClass]=\"{'transparent':!backdrop, 'overlay':true, 'nsm-overlay-open':openedClass}\"\n         (click)=\"dismiss($event)\" #nsmOverlay>\n      <div [style.z-index]=\"visible ? layerPosition : -1\"\n           [ngClass]=\"['nsm-dialog', customClass, openedClass ? 'nsm-dialog-open': 'nsm-dialog-close']\" #nsmDialog>\n        <div class=\"nsm-content\" #nsmContent>\n          <div class=\"nsm-body\">\n            <ng-content></ng-content>\n          </div>\n          <button type=\"button\" *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"nsm-dialog-btn-close\">\n            <img\n              src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNS45NDMsNi4wNThjLTguMDc3LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDksMEw2LjA1OCw0NzYuNjkzYy04LjA3Nyw4LjA3Ny04LjA3NywyMS4xNzIsMCwyOS4yNDkgICAgQzEwLjA5Niw1MDkuOTgyLDE1LjM5LDUxMiwyMC42ODMsNTEyYzUuMjkzLDAsMTAuNTg2LTIuMDE5LDE0LjYyNS02LjA1OUw1MDUuOTQzLDM1LjMwNiAgICBDNTE0LjAxOSwyNy4yMyw1MTQuMDE5LDE0LjEzNSw1MDUuOTQzLDYuMDU4eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNS45NDIsNDc2LjY5NEwzNS4zMDYsNi4wNTljLTguMDc2LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDgsMGMtOC4wNzcsOC4wNzYtOC4wNzcsMjEuMTcxLDAsMjkuMjQ4bDQ3MC42MzYsNDcwLjYzNiAgICBjNC4wMzgsNC4wMzksOS4zMzIsNi4wNTgsMTQuNjI1LDYuMDU4YzUuMjkzLDAsMTAuNTg3LTIuMDE5LDE0LjYyNC02LjA1N0M1MTQuMDE4LDQ5Ny44NjYsNTE0LjAxOCw0ODQuNzcxLDUwNS45NDIsNDc2LjY5NHoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K\" />\n          </button>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    NgxSmartModalComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: NgxSmartModalService, },
    ]; };
    NgxSmartModalComponent.propDecorators = {
        "closable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "escapable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dismissable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "identifier": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "customClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "backdrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "force": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hideDelay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "autostart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "target": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visibleChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onCloseFinished": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onDismiss": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onDismissFinished": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onAnyCloseEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onAnyCloseEventFinished": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onEscape": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onDataAdded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onDataRemoved": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "nsmContent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['nsmContent',] },],
        "nsmDialog": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['nsmDialog',] },],
        "nsmOverlay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['nsmOverlay',] },],
        "targetPlacement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] },],
    };
    return NgxSmartModalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxSmartModalModule = (function () {
    function NgxSmartModalModule() {
    }
    /**
     * Use in AppModule: new instance of NgxSmartModal.
     * @return {?}
     */
    NgxSmartModalModule.forRoot = /**
     * Use in AppModule: new instance of NgxSmartModal.
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxSmartModalModule,
            providers: [NgxSmartModalService]
        };
    };
    /**
     * Use in features modules with lazy loading: new instance of NgxSmartModal.
     * @return {?}
     */
    NgxSmartModalModule.forChild = /**
     * Use in features modules with lazy loading: new instance of NgxSmartModal.
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxSmartModalModule,
            providers: [NgxSmartModalService]
        };
    };
    NgxSmartModalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [NgxSmartModalComponent],
                    exports: [NgxSmartModalComponent],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
                },] },
    ];
    /** @nocollapse */
    NgxSmartModalModule.ctorParameters = function () { return []; };
    return NgxSmartModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Public classes.

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Entry point for all public APIs of the package.
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-smart-modal.js.map


/***/ }),

/***/ "./src/app/mobile/inner-pages/account-statement/account-statement.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/account-statement/account-statement.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9hY2NvdW50LXN0YXRlbWVudC9hY2NvdW50LXN0YXRlbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/account-statement/account-statement.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/account-statement/account-statement.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen-area icdc-section\">\n\n  <!-- screen Details part -->\n  <div class=\"screen-detail\">\n    <div class=\"mini-title-bar full\">\n      <div class=\"left-push\">\n        <div class=\"name\">Account Statement</div>\n      </div>\n    </div>\n    <div class=\"\">\n      <div class=\"grey col\">\n        <div class=\"col-4 bold\">Date</div>\n        <div class=\"col-4 bold center\">Dr/Cr</div>\n        <div class=\"col-4 bold center\">Balance</div>\n      </div>\n    </div>\n    <div class=\"inner icdc-part\">\n      <div class=\"light-green shadow\" [ngClass]=\"{'light-green': odd , 'red' : !odd}\"\n        *ngFor=\"let statement of statementList;let odd = odd;\">\n        <div class=\"col\">\n          <div class=\"col-4 date-col\">\n            <span>{{ statement.created_at }}</span>\n          </div>\n          <div class=\"col-4 center\">\n            <span class=\"green-dark read-more\">{{ statement.current_balance }}</span>\n          </div>\n          <div class=\"col-4 center\">\n            <span class=\"bold\">{{ statement.transaction_amount }}</span>\n          </div>\n        </div>\n        <div class=\"row-line\">{{ statement.description }}</div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mobile/inner-pages/account-statement/account-statement.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/account-statement/account-statement.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AccountStatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountStatementComponent", function() { return AccountStatementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/mobile/shared/services/user.service.ts");



var AccountStatementComponent = /** @class */ (function () {
    function AccountStatementComponent(uService) {
        this.uService = uService;
        this.statementList = [];
    }
    AccountStatementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uService.getAccountStatement().subscribe(function (resp) {
            console.log(resp);
            if (resp.status) {
                _this.statementList = resp.data.items;
            }
        });
    };
    AccountStatementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-statement',
            template: __webpack_require__(/*! ./account-statement.component.html */ "./src/app/mobile/inner-pages/account-statement/account-statement.component.html"),
            styles: [__webpack_require__(/*! ./account-statement.component.css */ "./src/app/mobile/inner-pages/account-statement/account-statement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AccountStatementComponent);
    return AccountStatementComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/bet-history/bet-history.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/bet-history/bet-history.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9iZXQtaGlzdG9yeS9iZXQtaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/bet-history/bet-history.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/bet-history/bet-history.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen-area icdc-section bethis-section\">\n\n  <!-- screen Details part -->\n  <div class=\"screen-detail\">\n    <div class=\"mini-title-bar full\">\n      <div class=\"left-push\">\n        <div class=\"name\">Bet History</div>\n      </div>\n    </div>\n    <div class=\"\">\n      <div class=\"grey col\">\n        <div class=\"col-6 bold\">Market Name</div>\n        <div class=\"col-2 bold center\">Rate</div>\n        <div class=\"col-2 bold center\">Stack</div>\n        <div class=\"col-2 bold center\">PL</div>\n      </div>\n    </div>\n    <div class=\"inner icdc-part\">\n      <div class=\"shadow\" [ngClass]=\"{'red': bet.bet_status === 'Loss' , 'light-green': bet.bet_status === 'Win'}\"\n        *ngFor=\"let bet of betHistory\">\n        <div class=\"col\">\n          <div class=\"col-6\">\n            <span class=\"bold\">{{ bet.description }}</span>\n          </div>\n          <div class=\"col-2 center\">\n            <span class=\"bold\">{{ bet.price }}</span>\n          </div>\n          <div class=\"col-2 center\">\n            <span class=\"bold\">250000</span>\n          </div>\n          <div class=\"col-2 center\">\n            <span class=\"bold\"> {{ bet.loss }}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mobile/inner-pages/bet-history/bet-history.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/bet-history/bet-history.component.ts ***!
  \*************************************************************************/
/*! exports provided: BetHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetHistoryComponent", function() { return BetHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/mobile/shared/services/user.service.ts");



var BetHistoryComponent = /** @class */ (function () {
    function BetHistoryComponent(uService) {
        this.uService = uService;
        this.betHistory = [];
    }
    BetHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uService.getBetHistory().subscribe(function (resp) {
            console.log(resp);
            if (resp.status) {
                _this.betHistory = resp.data.items;
            }
        });
    };
    BetHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bet-history',
            template: __webpack_require__(/*! ./bet-history.component.html */ "./src/app/mobile/inner-pages/bet-history/bet-history.component.html"),
            styles: [__webpack_require__(/*! ./bet-history.component.css */ "./src/app/mobile/inner-pages/bet-history/bet-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], BetHistoryComponent);
    return BetHistoryComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/bet-stake-setting/bet-stake-setting.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/bet-stake-setting/bet-stake-setting.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9iZXQtc3Rha2Utc2V0dGluZy9iZXQtc3Rha2Utc2V0dGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/bet-stake-setting/bet-stake-setting.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/bet-stake-setting/bet-stake-setting.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen-area betstake-section\">\n\n  <!-- screen Details part -->\n  <div class=\"screen-detail\">\n    <div class=\"mini-title-bar full\">\n      <div class=\"left-push\">\n        <div class=\"name\">On Click Setting</div>\n      </div>\n    </div>\n    <div class=\"inner\">\n      <div class=\"use-stake\">\n        <h5>Using 1 click Bet us easy :</h5>\n        <ul>\n          <li>Enable 1 Click Betting.</li>\n          <li>Edit Your 1 Click Stack values below.</li>\n          <li>When done with 2 Click Betting, turn off by tapping the toggle tooff.</li>\n        </ul>\n      </div>\n      <div class=\"click-betting\">\n        <h5>Tap to turn on click Betting</h5>\n        <div class=\"click-button\">\n          <a class=\"on active\" href=\"#\">ON</a>\n          <a class=\"off\" href=\"#\">OFF</a>\n        </div>\n        <form>\n          <input type=\"number\" placeholder=\"Amount\">\n          <button value=\"Save\" class=\"bett-button\">Save</button>\n        </form>\n      </div>\n    </div>\n    <div class=\"mini-title-bar full\">\n      <div class=\"left-push\">\n        <div class=\"name\">On Click Setting</div>\n      </div>\n    </div>\n    <div class=\"inner\">\n      <div class=\"bet-list\">\n        <a class=\"read-more\" href=\"javascript:;\">1k</a>\n        <a class=\"read-more\" href=\"javascript:;\">2k</a>\n        <a class=\"read-more\" href=\"javascript:;\">5k</a>\n        <a class=\"read-more\" href=\"javascript:;\">10k</a>\n        <a class=\"read-more\" href=\"javascript:;\">25k</a>\n        <a class=\"read-more\" href=\"javascript:;\">50k</a>\n        <a class=\"read-more\" href=\"javascript:;\">1Lac</a>\n        <a class=\"read-more\" href=\"javascript:;\">2Lac</a>\n        <a class=\"read-more\" href=\"javascript:;\">5Lac</a>\n        <a class=\"read-more\" href=\"javascript:;\">10Lac</a>\n      </div>\n      <form>\n        <button class=\"saves\" value=\"saves\">SAVES</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mobile/inner-pages/bet-stake-setting/bet-stake-setting.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/bet-stake-setting/bet-stake-setting.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BetStakeSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetStakeSettingComponent", function() { return BetStakeSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BetStakeSettingComponent = /** @class */ (function () {
    function BetStakeSettingComponent() {
    }
    BetStakeSettingComponent.prototype.ngOnInit = function () {
    };
    BetStakeSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bet-stake-setting',
            template: __webpack_require__(/*! ./bet-stake-setting.component.html */ "./src/app/mobile/inner-pages/bet-stake-setting/bet-stake-setting.component.html"),
            styles: [__webpack_require__(/*! ./bet-stake-setting.component.css */ "./src/app/mobile/inner-pages/bet-stake-setting/bet-stake-setting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BetStakeSettingComponent);
    return BetStakeSettingComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/change-password/change-password.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/change-password/change-password.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/change-password/change-password.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/change-password/change-password.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-block cf\">\n  <div class=\"login-backgroun-slider cf\">\n    <div class=\"item\" style=\"background-image: url(./assets/images/cricket-ball.jpg)\"></div>\n    <!-- <div class=\"item\" style=\"background-image: url(./assets/images/football-ground.jpg)\"></div>\n    <div class=\"item\" style=\"background-image: url(./assets/images/tennis-ground.jpg)\"></div> -->\n  </div>\n  <div class=\"login-section change-pwd-section\">\n    <div class=\"brand-area\">\n      <img src=\"assets/images/logo.png\">\n    </div>\n    <form [formGroup]='changePasswordForm' (submit)='changePassword()'>\n      <h5>Change Password</h5>\n      <div class=\"field-cell\">\n        <img src=\"assets/images/lock-black.png\">\n        <input type=\"password\" placeholder=\"Old Password\" formControlName='oldpassword'>\n      </div>\n      <div class=\"field-cell\">\n        <img src=\"assets/images/lock-black.png\">\n        <input type=\"password\" placeholder=\"New Password\" formControlName='password'>\n      </div>\n      <div class=\"field-cell\">\n        <img src=\"assets/images/lock-black.png\">\n        <input type=\"password\" placeholder=\"Confirm Password\" formControlName='cpassword'>\n      </div>\n      <div class=\"field-cell\">\n        <input type=\"submit\" value=\"Change Password\" [disabled]='!changePasswordForm.valid'>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mobile/inner-pages/change-password/change-password.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/change-password/change-password.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/mobile/shared/services/user.service.ts");




var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(uService) {
        this.uService = uService;
        this.changePasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "oldpassword": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            "password": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            "cpassword": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.changePassword = function () {
        if (this.changePasswordForm.valid) {
            this.uService.changePassword(this.changePasswordForm.value).subscribe(function (resp) {
                if (resp.status) {
                    alert('Changed');
                }
            });
        }
    };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/mobile/inner-pages/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/mobile/inner-pages/change-password/change-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/favorite/favorite.component.css":
/*!********************************************************************!*\
  !*** ./src/app/mobile/inner-pages/favorite/favorite.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9mYXZvcml0ZS9mYXZvcml0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/favorite/favorite.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/mobile/inner-pages/favorite/favorite.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen-area favourite-section\">\n  <div class=\"screen-tab\">\n    <div class=\"col-4 active\">\n      <span>Live Market</span>\n    </div>\n    <div class=\"col-4\">\n      <span>Matched</span>\n    </div>\n    <div class=\"col-4\">\n      <span>Unmatched</span>\n    </div>\n  </div>\n  <div class=\"screen-detail\">\n    <div class=\"tab-details show-tab\">\n      <div class=\"news-cell blue-bg cf\">\n        <div class=\"star yellow\">\n          <img src=\"./assets/images/star-yellow.png\">\n        </div>\n        <div class=\"score-part\">\n          <div class=\"desc\">\n            <span>Circket - New Zealnad v Bangladesh</span>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"mini-title-bar\">\n        <div class=\"left-push\">\n          <div class=\"col-4\">Match odds</div>\n        </div>\n        <div class=\"right-push\">\n          <div class=\"col-4\">BACK</div>\n          <div class=\"col-4\">LAY</div>\n        </div>\n\n      </div>\n      <div class=\"score-group-block\">\n        <div class=\"score-block red\">\n          <div class=\"left-push\">\n            <div class=\"desc\">\n              <span>The Draw</span>\n              <div class=\"two-value bold\">0</div>\n            </div>\n          </div>\n          <div class=\"right-push\">\n            <div class=\"col-6 black-score\">\n              <div class=\"balance-info num-cell\">\n                <span>3.80</span>\n                <em>569.59</em>\n              </div>\n            </div>\n            <div class=\"col-6 lay-score\">\n              <div class=\"expose-info num-cell\">\n                <span>3.90</span>\n                <em>345.37</em>\n              </div>\n            </div>\n          </div>\n          <div class=\"details-popup\">\n            <form>\n              <div class=\"totol-edit-bar\">\n                <div class=\"col-6\">\n                  <div class=\"score-add\">\n                    <button class=\"score-minus\"></button>\n                    <input type=\"text\">\n                    <button class=\"score-plus\"></button>\n                  </div>\n                </div>\n                <div class=\"col-6\">\n                  <div class=\"score-add\">\n                    <button class=\"score-minus\"></button>\n                    <input type=\"text\">\n                    <button class=\"score-plus\"></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"price-btn\">\n                <a class=\"pri-btn\" href=\"#\">1K</a>\n                <a class=\"pri-btn\" href=\"#\">2K</a>\n                <a class=\"pri-btn\" href=\"#\">5K</a>\n                <a class=\"pri-btn\" href=\"#\">10K</a>\n                <a class=\"pri-btn\" href=\"#\">25K</a>\n                <a class=\"pri-btn red-btn\" href=\"#\">CLR</a>\n              </div>\n              <div class=\"submit-area\">\n                <div class=\"col-6\">\n                  <a href=\"#\" class=\"red-btn btn-prime\">Cancel</a>\n                </div>\n                <div class=\"col-6\">\n                  <input type=\"submit\" value=\"Place Bet 0\" class=\"green-sub-btn\">\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class=\"score-block red\">\n          <div class=\"left-push\">\n            <div class=\"desc\">\n              <span>The Draw</span>\n              <div class=\"two-value bold\">0</div>\n            </div>\n          </div>\n          <div class=\"right-push\">\n            <div class=\"col-6 black-score\">\n              <div class=\"balance-info num-cell\">\n                <span>3.80</span>\n                <em>569.59</em>\n              </div>\n            </div>\n            <div class=\"col-6 lay-score\">\n              <div class=\"expose-info num-cell\">\n                <span>3.90</span>\n                <em>345.37</em>\n              </div>\n            </div>\n          </div>\n          <div class=\"details-popup\">\n            <form>\n              <div class=\"totol-edit-bar\">\n                <div class=\"col-6\">\n                  <div class=\"score-add\">\n                    <button class=\"score-minus\"></button>\n                    <input type=\"text\">\n                    <button class=\"score-plus\"></button>\n                  </div>\n                </div>\n                <div class=\"col-6\">\n                  <div class=\"score-add\">\n                    <button class=\"score-minus\"></button>\n                    <input type=\"text\">\n                    <button class=\"score-plus\"></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"price-btn\">\n                <a class=\"pri-btn\" href=\"#\">1K</a>\n                <a class=\"pri-btn\" href=\"#\">2K</a>\n                <a class=\"pri-btn\" href=\"#\">5K</a>\n                <a class=\"pri-btn\" href=\"#\">10K</a>\n                <a class=\"pri-btn\" href=\"#\">25K</a>\n                <a class=\"pri-btn red-btn\" href=\"#\">CLR</a>\n              </div>\n              <div class=\"submit-area\">\n                <div class=\"col-6\">\n                  <a href=\"#\" class=\"red-btn btn-prime\">Cancel</a>\n                </div>\n                <div class=\"col-6\">\n                  <input type=\"submit\" value=\"Place Bet 0\" class=\"green-sub-btn\">\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class=\"score-block red\">\n          <div class=\"left-push\">\n            <div class=\"desc\">\n              <span>The Draw</span>\n              <div class=\"two-value bold\">0</div>\n            </div>\n          </div>\n          <div class=\"right-push\">\n            <div class=\"col-6 black-score\">\n              <div class=\"balance-info num-cell\">\n                <span>3.80</span>\n                <em>569.59</em>\n              </div>\n            </div>\n            <div class=\"col-6 lay-score\">\n              <div class=\"expose-info num-cell\">\n                <span>3.90</span>\n                <em>345.37</em>\n              </div>\n            </div>\n          </div>\n          <div class=\"details-popup\">\n            <form>\n              <div class=\"totol-edit-bar\">\n                <div class=\"col-6\">\n                  <div class=\"score-add\">\n                    <button class=\"score-minus\"></button>\n                    <input type=\"text\">\n                    <button class=\"score-plus\"></button>\n                  </div>\n                </div>\n                <div class=\"col-6\">\n                  <div class=\"score-add\">\n                    <button class=\"score-minus\"></button>\n                    <input type=\"text\">\n                    <button class=\"score-plus\"></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"price-btn\">\n                <a class=\"pri-btn\" href=\"#\">1K</a>\n                <a class=\"pri-btn\" href=\"#\">2K</a>\n                <a class=\"pri-btn\" href=\"#\">5K</a>\n                <a class=\"pri-btn\" href=\"#\">10K</a>\n                <a class=\"pri-btn\" href=\"#\">25K</a>\n                <a class=\"pri-btn red-btn\" href=\"#\">CLR</a>\n              </div>\n              <div class=\"submit-area\">\n                <div class=\"col-6\">\n                  <a href=\"#\" class=\"red-btn btn-prime\">Cancel</a>\n                </div>\n                <div class=\"col-6\">\n                  <input type=\"submit\" value=\"Place Bet 0\" class=\"green-sub-btn\">\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"tab-details\">\n      <div class=\"col\">\n        <div class=\"col-7\"></div>\n        <div class=\"col-2 center bold\">Odds</div>\n        <div class=\"col-2 center bold\">Stack</div>\n        <div class=\"col-2 center bold\">PL</div>\n      </div>\n      <div class=\"news-cell blue-bg cf\">\n        <div class=\"desc\">\n          <span>Macth ODD</span>\n        </div>\n      </div>\n      <div class=\"col red seprater\">\n        <div class=\"col-7 bold\">Islamabad United</div>\n        <div class=\"col-2 center bold\">1.94</div>\n        <div class=\"col-2 center bold\">5000</div>\n        <div class=\"col-2 center bold\">4700</div>\n      </div>\n      <div class=\"col blue seprater\">\n        <div class=\"col-7 bold\">Islamabad United</div>\n        <div class=\"col-2 center bold\">1.94</div>\n        <div class=\"col-2 center bold\">5000</div>\n        <div class=\"col-2 center bold\">4700</div>\n      </div>\n      <div class=\"col red seprater\">\n        <div class=\"col-7 bold\">Islamabad United</div>\n        <div class=\"col-2 center bold\">1.94</div>\n        <div class=\"col-2 center bold\">5000</div>\n        <div class=\"col-2 center bold\">4700</div>\n      </div>\n      <div class=\"col blue seprater\">\n        <div class=\"col-7 bold\">Islamabad United</div>\n        <div class=\"col-2 center bold\">1.94</div>\n        <div class=\"col-2 center bold\">5000</div>\n        <div class=\"col-2 center bold\">4700</div>\n      </div>\n    </div>\n    <div class=\"tab-details\">\n      <div class=\"col\">\n        <div class=\"col-7\"></div>\n        <div class=\"col-2 center bold\">Odds</div>\n        <div class=\"col-2 center bold\">Stack</div>\n        <div class=\"col-2 center bold\">PL</div>\n        <div class=\"col-2 center bold\">Delete</div>\n      </div>\n      <div class=\"news-cell blue-bg cf\">\n        <div class=\"desc\">\n          <span>MATCH ODD</span>\n        </div>\n      </div>\n      <div class=\"col red seprater\">\n        <div class=\"col-7 bold\">Islamabad United</div>\n        <div class=\"col-2 center bold\">1.94</div>\n        <div class=\"col-2 center bold\">5000</div>\n        <div class=\"col-2 center bold\">4700</div>\n        <div class=\"col-2 center\"><button class=\"delete\"><img src=\"images/delete.png\" alt=\"Delete\"></button></div>\n      </div>\n      <div class=\"col blue seprater\">\n        <div class=\"col-7 bold\">Islamabad United</div>\n        <div class=\"col-2 center bold\">1.94</div>\n        <div class=\"col-2 center bold\">5000</div>\n        <div class=\"col-2 center bold\">4700</div>\n        <div class=\"col-2 center\"><button class=\"delete\"><img src=\"images/delete.png\" alt=\"Delete\"></button></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mobile/inner-pages/favorite/favorite.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/mobile/inner-pages/favorite/favorite.component.ts ***!
  \*******************************************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function() { return FavoriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/favorite.service */ "./src/app/mobile/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_sports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/sports.service */ "./src/app/mobile/shared/services/sports.service.ts");




var FavoriteComponent = /** @class */ (function () {
    function FavoriteComponent(sService, fService) {
        this.sService = sService;
        this.fService = fService;
        this.sports = [];
        this.events = [];
    }
    FavoriteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sService.getSports().subscribe(function (resp) {
            if (resp.status) {
                _this.sports = resp.data.items;
                _this.sports.forEach(function (sport, index) {
                    _this.events[index] = {};
                    _this.getFavoriteList(sport.event_slug, index);
                });
            }
        });
    };
    FavoriteComponent.prototype.getFavoriteList = function (slug, index) {
        var _this = this;
        this.fService.getFavoriteList(slug).subscribe(function (resp) {
            console.log('-------- getFavoriteList --------', resp);
            if (resp.status && resp.data.items) {
                _this.events[index] = resp.data.items;
            }
        });
    };
    FavoriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorite',
            template: __webpack_require__(/*! ./favorite.component.html */ "./src/app/mobile/inner-pages/favorite/favorite.component.html"),
            providers: [_shared_services_sports_service__WEBPACK_IMPORTED_MODULE_3__["SportsService"], _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_2__["FavoriteService"]],
            styles: [__webpack_require__(/*! ./favorite.component.css */ "./src/app/mobile/inner-pages/favorite/favorite.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_sports_service__WEBPACK_IMPORTED_MODULE_3__["SportsService"], _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_2__["FavoriteService"]])
    ], FavoriteComponent);
    return FavoriteComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/home/home.component.css":
/*!************************************************************!*\
  !*** ./src/app/mobile/inner-pages/home/home.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/home/home.component.html":
/*!*************************************************************!*\
  !*** ./src/app/mobile/inner-pages/home/home.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sports-page\">\n\n  <div class=\"screen-area\">\n    <div class=\"screen-detail\">\n      <div class=\"news-cell blue-bg cf\">\n        <div class=\"desc\">\n          <span>SPORTS</span>\n        </div>\n      </div>\n      <div class=\"sports-part inner\">\n        <div class=\"sports\" *ngFor=\"let sport of sports\">\n          <a [routerLink]=\"[ '/mobile/sports' , sport.event_slug  ]\">\n            <figure><img [src]=\"sport.icon\" [alt]='sport.event_type_name'></figure>\n            <h4>{{ sport.event_type_name }}</h4>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mobile/inner-pages/home/home.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/mobile/inner-pages/home/home.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_sports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/sports.service */ "./src/app/mobile/shared/services/sports.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(sService) {
        this.sService = sService;
        this.sports = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sService.getSports().subscribe(function (resp) {
            if (resp.status) {
                _this.sports = resp.data.items;
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/mobile/inner-pages/home/home.component.html"),
            providers: [_shared_services_sports_service__WEBPACK_IMPORTED_MODULE_2__["SportsService"]],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/mobile/inner-pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_sports_service__WEBPACK_IMPORTED_MODULE_2__["SportsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/in-play/in-play.component.css":
/*!******************************************************************!*\
  !*** ./src/app/mobile/inner-pages/in-play/in-play.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9pbi1wbGF5L2luLXBsYXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/in-play/in-play.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/mobile/inner-pages/in-play/in-play.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen-area\">\n\n  <!-- screen tab part -->\n  <div class=\"screen-tab\">\n    <div class=\"col-4\" (click)='setTab(\"inplay\")' [ngClass]=\"{'active': activeTab === 'inplay'}\">\n      <span>InPlay</span>\n    </div>\n    <div class=\"col-4\" (click)='setTab(\"today\")' [ngClass]=\"{'active': activeTab === 'today'}\">\n      <span>Today</span>\n    </div>\n    <div class=\"col-4\" (click)='setTab(\"tomorrow\")' [ngClass]=\"{'active': activeTab === 'tomorrow'}\">\n      <span>Tomorrow</span>\n    </div>\n  </div>\n\n  <!-- screen Details part -->\n  <div class=\"screen-detail\">\n\n    <!-- tab details part -->\n    <div class=\"tab-details inplay-part\" [ngClass]=\"{'show-tab': activeTab === 'inplay'}\">\n      <div *ngFor=\"let item of inplay\">\n        <div class=\"mini-title-bar full\" *ngIf='item.list.length'>\n          <div class=\"left-push\">\n            <div class=\"name\">{{ item.title }}</div>\n          </div>\n        </div>\n        <div class=\"news-info-cell cf\" *ngFor=\"let obj of item.list; let j = index;\">\n          <div class=\"star\" (click)='addRemoveFavorite(item , j)'>\n            <img src=\"./assets/images/{{ +obj.is_favorite ? 'star-yellow.png' : 'star-black.png' }}\">\n          </div>\n          <div class=\"desc\">\n            <span> {{ obj.title }}</span>\n          </div>\n          <div class=\"btn-cell\">\n            <a href=\"score.html\" class=\"play-btn\">In-Play</a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- tab details part -->\n    <div class=\"tab-details\" [ngClass]=\"{'show-tab': activeTab === 'today'}\">\n      <div *ngFor=\"let item of today\">\n        <div class=\"mini-title-bar full\" *ngIf='item.list.length'>\n          <div class=\"left-push\">\n            <div class=\"name\">{{ item.title }}</div>\n          </div>\n        </div>\n        <div class=\"news-info-cell cf\" *ngFor=\"let obj of item.list; let j = index;\">\n          <div class=\" star\" (click)='addRemoveFavorite(item , j)'>\n            <img src=\"./assets/images/{{ +obj.is_favorite ? 'star-yellow.png' : 'star-black.png' }}\">\n          </div>\n          <div class=\"desc\">\n            <span> {{ obj.title }}</span>\n            <em> {{ obj.time }}</em>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- tab details part -->\n    <div class=\"tab-details\" [ngClass]=\"{'show-tab': activeTab === 'tomorrow'}\">\n      <div *ngFor=\"let item of tomorrow\">\n        <div class=\"mini-title-bar full\" *ngIf='item.list.length'>\n          <div class=\"left-push\">\n            <div class=\"name\">{{ item.title }}</div>\n          </div>\n        </div>\n        <div class=\"news-info-cell cf\" *ngFor=\"let obj of item.list; let j = index;\">\n          <div class=\" star\" (click)='addRemoveFavorite(item , j)'>\n            <img src=\"./assets/images/{{ +obj.is_favorite ? 'star-yellow.png' : 'star-black.png' }}\">\n          </div>\n          <div class=\"desc\">\n            <span> {{ obj.title }}</span>\n            <em> {{ obj.time }}</em>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mobile/inner-pages/in-play/in-play.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/mobile/inner-pages/in-play/in-play.component.ts ***!
  \*****************************************************************/
/*! exports provided: InPlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InPlayComponent", function() { return InPlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_inplay_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/inplay.service */ "./src/app/mobile/shared/services/inplay.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/mobile/shared/services/user.service.ts");




var InPlayComponent = /** @class */ (function () {
    function InPlayComponent(ipService, uService) {
        this.ipService = ipService;
        this.uService = uService;
        this.activeTab = 'inplay';
    }
    InPlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ipService.getMatchList().subscribe(function (resp) {
            console.log(resp);
            if (resp.status) {
                _this.inplay = resp.data.items.inplay;
                _this.today = resp.data.items.today;
                _this.tomorrow = resp.data.items.tomorrow;
            }
        });
    };
    InPlayComponent.prototype.setTab = function (tabName) {
        this.activeTab = tabName;
    };
    InPlayComponent.prototype.addRemoveFavorite = function (item, index) {
        var data = item.list[index];
        var requestData = {
            "event_id": data.eventId,
            "market_id": data.marketId,
            "market_type": "match_odd",
            "favorite": +data.is_favorite ? 'remove' : 'add'
        };
        this.uService.addRemoveFavorite(requestData).subscribe(function (resp) {
            if (resp.status) {
                data.is_favorite = !+data.is_favorite;
            }
        });
    };
    InPlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-in-play',
            template: __webpack_require__(/*! ./in-play.component.html */ "./src/app/mobile/inner-pages/in-play/in-play.component.html"),
            providers: [_shared_services_inplay_service__WEBPACK_IMPORTED_MODULE_2__["InPLayService"]],
            styles: [__webpack_require__(/*! ./in-play.component.css */ "./src/app/mobile/inner-pages/in-play/in-play.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_inplay_service__WEBPACK_IMPORTED_MODULE_2__["InPLayService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], InPlayComponent);
    return InPlayComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/market/market.component.css":
/*!****************************************************************!*\
  !*** ./src/app/mobile/inner-pages/market/market.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9tYXJrZXQvbWFya2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/market/market.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/mobile/inner-pages/market/market.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen-area\">\n  <div class=\"screen-detail\">\n    <div class=\"tab-details show-tab\">\n\n      <div *ngFor=\"let obj of marketList | keyvalue\">\n        <div *ngFor=\"let item of obj.value\">\n          <div class=\"news-cell blue-bg cf\">\n            <div class=\"star\">\n              <img src=\"./images/star.png\">\n            </div>\n            <div class=\"score-part\">\n              <div class=\"desc\">\n                <span>{{ item.title }}</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"current-match\">\n            <div class=\"mini-title-bar\">\n              <div class=\"left-push\">\n                <div class=\"col-4\">Match odds</div>\n              </div>\n              <div class=\"right-push\">\n                <div class=\"col-4\">BACK</div>\n                <div class=\"col-4\">LAY</div>\n              </div>\n\n            </div>\n            <div class=\"score-group-block\">\n              <div class=\"score-block red\">\n                <div class=\"left-push\">\n                  <div class=\"desc\">\n                    <span>6 over run isu</span>\n                  </div>\n                  <a href=\"#book1\" class=\"read-more fancybox green-dark\">BETS</a>\n                </div>\n                <!-- Bet Popup -->\n                <div id=\"book1\" class=\"bet-popup\" style=\"display: none;\">\n                  <div class=\"mini-title-bar full\">\n                    <div class=\"left-push\">\n                      <div class=\"name\">India v Australis (5th ODI)</div>\n                    </div>\n                  </div>\n                  <div class=\"grey col\">\n                    <div class=\"col-6 bold\">Runner Name</div>\n                    <div class=\"col-2 bold center\">Odds</div>\n                    <div class=\"col-2 bold center\">Stack</div>\n                    <div class=\"col-2 bold center\">PL</div>\n                  </div>\n                  <div class=\"score-pop\">\n                    <div class=\"blue col\">\n                      <div class=\"col-6 bold\">India</div>\n                      <div class=\"col-2 bold center\">1.55</div>\n                      <div class=\"col-2 bold center\">2000</div>\n                      <div class=\"col-2 bold center\">-2000</div>\n                    </div>\n                    <div class=\"light-blue medium col\">Mar 13, 2019, 22:17:56 pm</div>\n                  </div>\n                  <div class=\"score-pop\">\n                    <div class=\"red col\">\n                      <div class=\"col-6 bold\">India</div>\n                      <div class=\"col-2 bold center\">1.55</div>\n                      <div class=\"col-2 bold center\">2000</div>\n                      <div class=\"col-2 bold center\">-2000</div>\n                    </div>\n                    <div class=\"light-red medium col\">Mar 13, 2019, 22:17:56 pm</div>\n                  </div>\n                  <div class=\"score-pop\">\n                    <div class=\"blue col\">\n                      <div class=\"col-6 bold\">India</div>\n                      <div class=\"col-2 bold center\">1.55</div>\n                      <div class=\"col-2 bold center\">2000</div>\n                      <div class=\"col-2 bold center\">-2000</div>\n                    </div>\n                    <div class=\"light-blue medium col\">Mar 13, 2019, 22:17:56 pm</div>\n                  </div>\n                  <div class=\"score-pop\">\n                    <div class=\"red col\">\n                      <div class=\"col-6 bold\">India</div>\n                      <div class=\"col-2 bold center\">1.55</div>\n                      <div class=\"col-2 bold center\">2000</div>\n                      <div class=\"col-2 bold center\">-2000</div>\n                    </div>\n                    <div class=\"light-red medium col\">Mar 13, 2019, 22:17:56 pm</div>\n                  </div>\n                </div>\n                <div class=\"right-push\">\n                  <div class=\"col-6 black-score\">\n                    <div class=\"balance-info num-cell\">\n                      <span>1.43</span>\n                      <em>20.00</em>\n                    </div>\n                  </div>\n                  <div class=\"col-6 lay-score\">\n                    <div class=\"expose-info num-cell\">\n                      <span>1.47</span>\n                      <em>4,462.47</em>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"details-popup\">\n                  <form>\n                    <div class=\"totol-edit-bar\">\n                      <div class=\"col-6\">\n                        <div class=\"score-add\">\n                          <button class=\"score-minus\"></button>\n                          <input type=\"text\">\n                          <button class=\"score-plus\"></button>\n                        </div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"score-add\">\n                          <button class=\"score-minus\"></button>\n                          <input type=\"text\">\n                          <button class=\"score-plus\"></button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"price-btn\">\n                      <a class=\"pri-btn\" href=\"#\">1K</a>\n                      <a class=\"pri-btn\" href=\"#\">2K</a>\n                      <a class=\"pri-btn\" href=\"#\">5K</a>\n                      <a class=\"pri-btn\" href=\"#\">10K</a>\n                      <a class=\"pri-btn\" href=\"#\">25K</a>\n                      <a class=\"pri-btn red-btn\" href=\"#\">CLR</a>\n                    </div>\n                    <div class=\"submit-area\">\n                      <div class=\"col-6\">\n                        <a href=\"#\" class=\"red-btn btn-prime\">Cancel</a>\n                      </div>\n                      <div class=\"col-6\">\n                        <input type=\"submit\" value=\"Place Bet 0\" class=\"green-sub-btn\">\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"score-block green\">\n                <div class=\"left-push\">\n                  <div class=\"desc\">\n                    <span>6 over run isu</span>\n                  </div>\n                  <a href=\"#book2\" class=\"read-more fancybox green-dark\">BETS</a>\n                </div>\n\n                <!-- Bet Popup -->\n                <div id=\"book2\" class=\"bet-popup\" style=\"display: none;\">\n                  <div class=\"mini-title-bar full\">\n                    <div class=\"left-push\">\n                      <div class=\"name\">India v Australis (5th ODI)</div>\n                    </div>\n                  </div>\n                  <div class=\"grey col\">\n                    <div class=\"col-6 bold\">Runner Name</div>\n                    <div class=\"col-2 bold center\">Odds</div>\n                    <div class=\"col-2 bold center\">Stack</div>\n                    <div class=\"col-2 bold center\">PL</div>\n                  </div>\n                  <div class=\"score-pop\">\n                    <div class=\"blue col\">\n                      <div class=\"col-6 bold\">India</div>\n                      <div class=\"col-2 bold center\">1.55</div>\n                      <div class=\"col-2 bold center\">2000</div>\n                      <div class=\"col-2 bold center\">-2000</div>\n                    </div>\n                    <div class=\"light-blue medium col\">Mar 13, 2019, 22:17:56 pm</div>\n                  </div>\n                  <div class=\"score-pop\">\n                    <div class=\"blue col\">\n                      <div class=\"col-6 bold\">India</div>\n                      <div class=\"col-2 bold center\">1.55</div>\n                      <div class=\"col-2 bold center\">2000</div>\n                      <div class=\"col-2 bold center\">-2000</div>\n                    </div>\n                    <div class=\"light-blue medium col\">Mar 13, 2019, 22:17:56 pm</div>\n                  </div>\n                  <div class=\"score-pop\">\n                    <div class=\"red col\">\n                      <div class=\"col-6 bold\">India</div>\n                      <div class=\"col-2 bold center\">1.55</div>\n                      <div class=\"col-2 bold center\">2000</div>\n                      <div class=\"col-2 bold center\">-2000</div>\n                    </div>\n                    <div class=\"light-red medium col\">Mar 13, 2019, 22:17:56 pm</div>\n                  </div>\n                  <div class=\"score-pop\">\n                    <div class=\"red col\">\n                      <div class=\"col-6 bold\">India</div>\n                      <div class=\"col-2 bold center\">1.55</div>\n                      <div class=\"col-2 bold center\">2000</div>\n                      <div class=\"col-2 bold center\">-2000</div>\n                    </div>\n                    <div class=\"light-red medium col\">Mar 13, 2019, 22:17:56 pm</div>\n                  </div>\n                </div>\n                <div class=\"right-push\">\n                  <div class=\"col-6 black-score\">\n                    <div class=\"balance-info num-cell\">\n                      <span>1.43</span>\n                      <em>20.00</em>\n                    </div>\n                  </div>\n                  <div class=\"col-6 lay-score\">\n                    <div class=\"expose-info num-cell\">\n                      <span>1.47</span>\n                      <em>4,462.47</em>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"details-popup\">\n                  <form>\n                    <div class=\"totol-edit-bar\">\n                      <div class=\"col-6\">\n                        <div class=\"score-add\">\n                          <button class=\"score-minus\"></button>\n                          <input type=\"text\">\n                          <button class=\"score-plus\"></button>\n                        </div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"score-add\">\n                          <button class=\"score-minus\"></button>\n                          <input type=\"text\">\n                          <button class=\"score-plus\"></button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"price-btn\">\n                      <a class=\"pri-btn\" href=\"#\">1K</a>\n                      <a class=\"pri-btn\" href=\"#\">2K</a>\n                      <a class=\"pri-btn\" href=\"#\">5K</a>\n                      <a class=\"pri-btn\" href=\"#\">10K</a>\n                      <a class=\"pri-btn\" href=\"#\">25K</a>\n                      <a class=\"pri-btn red-btn\" href=\"#\">CLR</a>\n                    </div>\n                    <div class=\"submit-area\">\n                      <div class=\"col-6\">\n                        <a href=\"#\" class=\"red-btn btn-prime\">Cancel</a>\n                      </div>\n                      <div class=\"col-6\">\n                        <input type=\"submit\" value=\"Place Bet 0\" class=\"green-sub-btn\">\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Cricket Current Match -->\n\n\n      <div class=\"news-cell blue-bg cf\">\n        <div class=\"star\">\n          <img src=\"./images/star.png\">\n        </div>\n        <div class=\"score-part\">\n          <div class=\"desc\">\n            <span>Tennis - Bencic v Pliskova</span>\n          </div>\n        </div>\n      </div>\n      <!-- Tennis Current Match -->\n      <div class=\"current-match\">\n        <div class=\"mini-title-bar\">\n          <div class=\"left-push\">\n            <div class=\"col-4\">Match odds</div>\n          </div>\n          <div class=\"right-push\">\n            <div class=\"col-4\">BACK</div>\n            <div class=\"col-4\">LAY</div>\n          </div>\n\n        </div>\n        <div class=\"score-group-block\">\n          <div class=\"score-block red\">\n            <div class=\"left-push\">\n              <div class=\"desc\">\n                <span>Nick Kyrgios</span>\n                <div class=\"two-value\"><em>40000</em><em>-7000</em></div>\n              </div>\n            </div>\n            <div class=\"right-push\">\n              <div class=\"col-6 black-score\">\n                <div class=\"balance-info num-cell\">\n                  <span>1.43</span>\n                  <em>20.00</em>\n                </div>\n              </div>\n              <div class=\"col-6 lay-score\">\n                <div class=\"expose-info num-cell\">\n                  <span>1.47</span>\n                  <em>4,462.47</em>\n                </div>\n              </div>\n            </div>\n            <div class=\"details-popup\">\n              <form>\n                <div class=\"totol-edit-bar\">\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"price-btn\">\n                  <a class=\"pri-btn\" href=\"#\">1K</a>\n                  <a class=\"pri-btn\" href=\"#\">2K</a>\n                  <a class=\"pri-btn\" href=\"#\">5K</a>\n                  <a class=\"pri-btn\" href=\"#\">10K</a>\n                  <a class=\"pri-btn\" href=\"#\">25K</a>\n                  <a class=\"pri-btn red-btn\" href=\"#\">CLR</a>\n                </div>\n                <div class=\"submit-area\">\n                  <div class=\"col-6\">\n                    <a href=\"#\" class=\"red-btn btn-prime\">Cancel</a>\n                  </div>\n                  <div class=\"col-6\">\n                    <input type=\"submit\" value=\"Place Bet 0\" class=\"green-sub-btn\">\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"score-block green\">\n            <div class=\"left-push\">\n              <div class=\"desc\">\n                <span>Nick Kyrgios</span>\n                <div class=\"two-value\"><em>40000</em><em>-7000</em></div>\n              </div>\n            </div>\n            <div class=\"right-push\">\n              <div class=\"col-6 black-score\">\n                <div class=\"balance-info num-cell\">\n                  <span>1.43</span>\n                  <em>20.00</em>\n                </div>\n              </div>\n              <div class=\"col-6 lay-score\">\n                <div class=\"expose-info num-cell\">\n                  <span>1.47</span>\n                  <em>4,462.47</em>\n                </div>\n              </div>\n            </div>\n            <div class=\"details-popup\">\n              <form>\n                <div class=\"totol-edit-bar\">\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"price-btn\">\n                  <a class=\"pri-btn\" href=\"#\">1K</a>\n                  <a class=\"pri-btn\" href=\"#\">2K</a>\n                  <a class=\"pri-btn\" href=\"#\">5K</a>\n                  <a class=\"pri-btn\" href=\"#\">10K</a>\n                  <a class=\"pri-btn\" href=\"#\">25K</a>\n                  <a class=\"pri-btn red-btn\" href=\"#\">CLR</a>\n                </div>\n                <div class=\"submit-area\">\n                  <div class=\"col-6\">\n                    <a href=\"#\" class=\"red-btn btn-prime\">Cancel</a>\n                  </div>\n                  <div class=\"col-6\">\n                    <input type=\"submit\" value=\"Place Bet 0\" class=\"green-sub-btn\">\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"news-cell blue-bg cf\">\n        <div class=\"star\">\n          <img src=\"./images/star.png\">\n        </div>\n        <div class=\"score-part\">\n          <div class=\"desc\">\n            <span>Football - Inter v Eintracht</span>\n          </div>\n        </div>\n      </div>\n      <!-- Football Current Match -->\n      <div class=\"current-match\">\n        <div class=\"mini-title-bar\">\n          <div class=\"left-push\">\n            <div class=\"col-4\">Match odds</div>\n          </div>\n          <div class=\"right-push\">\n            <div class=\"col-4\">BACK</div>\n            <div class=\"col-4\">LAY</div>\n          </div>\n\n        </div>\n        <div class=\"score-group-block\">\n          <div class=\"score-block red\">\n            <div class=\"left-push\">\n              <div class=\"desc\">\n                <span>Nick Kyrgios</span>\n                <div class=\"two-value\"><em>40000</em><em>-7000</em></div>\n              </div>\n            </div>\n            <div class=\"right-push\">\n              <div class=\"col-6 black-score\">\n                <div class=\"balance-info num-cell\">\n                  <span>1.43</span>\n                  <em>20.00</em>\n                </div>\n              </div>\n              <div class=\"col-6 lay-score\">\n                <div class=\"expose-info num-cell\">\n                  <span>1.47</span>\n                  <em>4,462.47</em>\n                </div>\n              </div>\n            </div>\n            <div class=\"details-popup\">\n              <form>\n                <div class=\"totol-edit-bar\">\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"price-btn\">\n                  <a class=\"pri-btn\" href=\"#\">1K</a>\n                  <a class=\"pri-btn\" href=\"#\">2K</a>\n                  <a class=\"pri-btn\" href=\"#\">5K</a>\n                  <a class=\"pri-btn\" href=\"#\">10K</a>\n                  <a class=\"pri-btn\" href=\"#\">25K</a>\n                  <a class=\"pri-btn red-btn\" href=\"#\">CLR</a>\n                </div>\n                <div class=\"submit-area\">\n                  <div class=\"col-6\">\n                    <a href=\"#\" class=\"red-btn btn-prime\">Cancel</a>\n                  </div>\n                  <div class=\"col-6\">\n                    <input type=\"submit\" value=\"Place Bet 0\" class=\"green-sub-btn\">\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"score-block green\">\n            <div class=\"left-push\">\n              <div class=\"desc\">\n                <span>Nick Kyrgios</span>\n                <div class=\"two-value\"><em>40000</em><em>-7000</em></div>\n              </div>\n            </div>\n            <div class=\"right-push\">\n              <div class=\"col-6 black-score\">\n                <div class=\"balance-info num-cell\">\n                  <span>1.43</span>\n                  <em>20.00</em>\n                </div>\n              </div>\n              <div class=\"col-6 lay-score\">\n                <div class=\"expose-info num-cell\">\n                  <span>1.47</span>\n                  <em>4,462.47</em>\n                </div>\n              </div>\n            </div>\n            <div class=\"details-popup\">\n              <form>\n                <div class=\"totol-edit-bar\">\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"price-btn\">\n                  <a class=\"pri-btn\" href=\"#\">1K</a>\n                  <a class=\"pri-btn\" href=\"#\">2K</a>\n                  <a class=\"pri-btn\" href=\"#\">5K</a>\n                  <a class=\"pri-btn\" href=\"#\">10K</a>\n                  <a class=\"pri-btn\" href=\"#\">25K</a>\n                  <a class=\"pri-btn red-btn\" href=\"#\">CLR</a>\n                </div>\n                <div class=\"submit-area\">\n                  <div class=\"col-6\">\n                    <a href=\"#\" class=\"red-btn btn-prime\">Cancel</a>\n                  </div>\n                  <div class=\"col-6\">\n                    <input type=\"submit\" value=\"Place Bet 0\" class=\"green-sub-btn\">\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mobile/inner-pages/market/market.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/mobile/inner-pages/market/market.component.ts ***!
  \***************************************************************/
/*! exports provided: MarketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketComponent", function() { return MarketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_sports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/sports.service */ "./src/app/mobile/shared/services/sports.service.ts");
/* harmony import */ var _shared_services_market_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/market.service */ "./src/app/mobile/shared/services/market.service.ts");




var MarketComponent = /** @class */ (function () {
    function MarketComponent(sService, mService) {
        this.sService = sService;
        this.mService = mService;
        this.sports = [];
        this.marketList = {};
    }
    MarketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sService.getSports().subscribe(function (resp) {
            if (resp.status) {
                _this.sports = resp.data.items;
                _this.sports.forEach(function (sport, index) {
                    _this.marketList[sport.event_slug] = [];
                    _this.getMarketList(sport.event_slug, index);
                });
            }
        });
    };
    MarketComponent.prototype.getMarketList = function (slug, index) {
        var _this = this;
        this.mService.getMarketList(slug).subscribe(function (resp) {
            // console.log('----------- Market List ----------', resp);
            if (resp.status && resp.data.items) {
                _this.marketList[slug] = resp.data.items;
            }
            console.log('----------- Market List ----------', _this.marketList);
        });
    };
    MarketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-market',
            template: __webpack_require__(/*! ./market.component.html */ "./src/app/mobile/inner-pages/market/market.component.html"),
            providers: [_shared_services_sports_service__WEBPACK_IMPORTED_MODULE_2__["SportsService"], _shared_services_market_service__WEBPACK_IMPORTED_MODULE_3__["MarketService"]],
            styles: [__webpack_require__(/*! ./market.component.css */ "./src/app/mobile/inner-pages/market/market.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_sports_service__WEBPACK_IMPORTED_MODULE_2__["SportsService"], _shared_services_market_service__WEBPACK_IMPORTED_MODULE_3__["MarketService"]])
    ], MarketComponent);
    return MarketComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/my-profile/my-profile.component.css":
/*!************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/my-profile/my-profile.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/my-profile/my-profile.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/my-profile/my-profile.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen-area profile-section\">\n\n  <!-- screen Details part -->\n  <div class=\"screen-detail\">\n    <div class=\"mini-title-bar full\">\n      <div class=\"left-push\">\n        <div class=\"name\">About You</div>\n      </div>\n    </div>\n    <div class=\"inner\">\n      <div class=\"result col shadow\">\n        <div class=\"abt-title\">\n          <h5>Name:</h5>\n        </div>\n        <div class=\"col-7\">\n          <h6>{{ userDetail?.username }}</h6>\n        </div>\n      </div>\n      <div class=\"result col shadow\">\n        <div class=\"abt-title\">\n          <h5>Languages :</h5>\n        </div>\n        <div class=\"col-7\">\n          <h6>English</h6>\n        </div>\n      </div>\n    </div>\n    <div class=\"mini-title-bar full\">\n      <div class=\"left-push\">\n        <div class=\"name\">Bet Configure</div>\n      </div>\n    </div>\n    <div class=\"inner match-config\">\n      <div *ngFor=\"let config of betConfigs\">\n        <div class=\"title\">{{ config.event_type_name }}</div>\n        <div class=\"result col shadow\">\n          <div class=\"abt-title\">\n            <h5>Min Bet: <span>{{ config.min_stack }}</span></h5>\n            <h5>Exposure : <span>0</span></h5>\n          </div>\n          <div class=\"col-7\">\n            <div class=\"two\">\n              <h6>Max Bet : <span>{{ config.max_stack }}</span></h6>\n              <h6>Bet Delay : <span>{{ config.bet_delay }} Sec</span></h6>\n            </div>\n            <h6>Profit : <span>{{ config.max_profit }}</span></h6>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mobile/inner-pages/my-profile/my-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/mobile/inner-pages/my-profile/my-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/mobile/shared/services/user.service.ts");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth/auth.service */ "./src/app/mobile/shared/services/auth/auth.service.ts");




var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(uService, aService) {
        this.uService = uService;
        this.aService = aService;
        this.betConfigs = [];
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userDetail = this.aService.getStoredUser();
        this.uService.getProfile().subscribe(function (resp) {
            console.log(resp);
            if (resp.status) {
                _this.betConfigs = resp.data.items;
            }
        });
    };
    MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! ./my-profile.component.html */ "./src/app/mobile/inner-pages/my-profile/my-profile.component.html"),
            styles: [__webpack_require__(/*! ./my-profile.component.css */ "./src/app/mobile/inner-pages/my-profile/my-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/profit-loss/profit-loss.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/profit-loss/profit-loss.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9wcm9maXQtbG9zcy9wcm9maXQtbG9zcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/profit-loss/profit-loss.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/profit-loss/profit-loss.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen-area  profit-section\">\n\n  <!-- screen Details part -->\n  <div class=\"screen-detail\">\n    <div class=\"mini-title-bar full\">\n      <div class=\"left-push\">\n        <div class=\"name\">Profit / Loss</div>\n      </div>\n    </div>\n    <div class=\"\">\n      <div class=\"grey col\">\n        <div class=\"col-7 bold\">Market Name</div>\n        <div class=\"col-2 bold center\">PL</div>\n        <div class=\"col-2 bold center\">Comm.</div>\n      </div>\n    </div>\n    <div class=\"inner icdc-part\">\n      <!-- Light Green -->\n      <div class=\"shadow\" [ngClass]=\"{'light-green': item.profitLoss > 0 , 'light-red': item.profitLoss <= 0  }\"\n        *ngFor=\"let item of profitLoss;let i =index;\">\n        <span class=\"bold\">{{item.sport}}</span>\n        <div class=\"col\">\n          <div class=\"col-7 date-col\">\n            <div class=\"bold\">{{ item.event_name }}</div>\n            <div class=\"bold green-color\">Winner - {{ item.winner }}</div>\n          </div>\n          <div class=\"col-2 center\">\n            <span class=\"green-color bold\">{{ item.profitLoss }}</span>\n          </div>\n          <div class=\"col-2 center\">\n            <span class=\"green-color bold\">{{ item.commission }}</span>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-9\">\n            <div class=\"medium\">Start Time : {{ item.start_time }}</div>\n            <div class=\"medium\">Settled Time : {{ item.settled_time }}</div>\n          </div>\n          <div class=\"col-2 center\">\n            <a class=\"read-more fancybox green-dark\" (click)='openBetIndex(i)'>BETS</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ngx-smart-modal #betModal identifier=\"betModal\">\n  <div class=\"bet-popup\" *ngIf='selectedBet'>\n    <div class=\"mini-title-bar full\">\n      <div class=\"left-push\">\n        <div class=\"name\">India v Australis (5th ODI)</div>\n      </div>\n    </div>\n    <div class=\"grey col\">\n      <div class=\"col-6 bold\">Runner Name</div>\n      <div class=\"col-2 bold center\">Odds</div>\n      <div class=\"col-2 bold center\">Stack</div>\n      <div class=\"col-2 bold center\">PL</div>\n    </div>\n    <div class=\"score-pop\" *ngFor=\"let bet of selectedBet.betList.list\">\n      <div class=\"blue col\">\n        <div class=\"col-6 bold\">{{ bet.runner }}</div>\n        <div class=\"col-2 bold center\">1.55</div>\n        <div class=\"col-2 bold center\">2000</div>\n        <div class=\"col-2 bold center\">-2000</div>\n      </div>\n      <div class=\"light-blue medium col\">Mar 13, 2019, 22:17:56 pm</div>\n    </div>\n    <div class=\"score-pop\">\n      <div class=\"blue col\">\n        <div class=\"col-6 bold\">India</div>\n        <div class=\"col-2 bold center\">1.55</div>\n        <div class=\"col-2 bold center\">2000</div>\n        <div class=\"col-2 bold center\">-2000</div>\n      </div>\n      <div class=\"light-blue medium col\">Mar 13, 2019, 22:17:56 pm</div>\n    </div>\n    <div class=\"score-pop\">\n      <div class=\"blue col\">\n        <div class=\"col-6 bold\">India</div>\n        <div class=\"col-2 bold center\">1.55</div>\n        <div class=\"col-2 bold center\">2000</div>\n        <div class=\"col-2 bold center\">-2000</div>\n      </div>\n      <div class=\"light-blue medium col\">Mar 13, 2019, 22:17:56 pm</div>\n    </div>\n    <div class=\"score-pop\">\n      <div class=\"red col\">\n        <div class=\"col-6 bold\">India</div>\n        <div class=\"col-2 bold center\">1.55</div>\n        <div class=\"col-2 bold center\">2000</div>\n        <div class=\"col-2 bold center\">-2000</div>\n      </div>\n      <div class=\"light-red medium col\">Mar 13, 2019, 22:17:56 pm</div>\n    </div>\n  </div>\n</ngx-smart-modal>"

/***/ }),

/***/ "./src/app/mobile/inner-pages/profit-loss/profit-loss.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/profit-loss/profit-loss.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProfitLossComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitLossComponent", function() { return ProfitLossComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/mobile/shared/services/user.service.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");




var ProfitLossComponent = /** @class */ (function () {
    function ProfitLossComponent(uService, ngxSmartModalService) {
        this.uService = uService;
        this.ngxSmartModalService = ngxSmartModalService;
        this.profitLoss = [];
    }
    ProfitLossComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uService.getProfitLoss().subscribe(function (resp) {
            console.log(resp);
            if (resp.status) {
                _this.profitLoss = resp.data.items;
            }
        });
    };
    ProfitLossComponent.prototype.openBetIndex = function (index) {
        this.selectedBet = this.profitLoss[index];
        this.ngxSmartModalService.getModal('betModal').open();
    };
    ProfitLossComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profit-loss',
            template: __webpack_require__(/*! ./profit-loss.component.html */ "./src/app/mobile/inner-pages/profit-loss/profit-loss.component.html"),
            styles: [__webpack_require__(/*! ./profit-loss.component.css */ "./src/app/mobile/inner-pages/profit-loss/profit-loss.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__["NgxSmartModalService"]])
    ], ProfitLossComponent);
    return ProfitLossComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/results/results.component.css":
/*!******************************************************************!*\
  !*** ./src/app/mobile/inner-pages/results/results.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/results/results.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/mobile/inner-pages/results/results.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen-area result-section\">\n\n  <!-- screen Details part -->\n  <div class=\"screen-detail\">\n    <div class=\"mini-title-bar full\">\n      <div class=\"left-push\">\n        <div class=\"name\">Result</div>\n      </div>\n      <div class=\"result-title col black\">\n        <div class=\"col-8\">Market Name</div>\n        <div class=\"col-2\">Winner</div>\n      </div>\n    </div>\n    <div class=\"inner\">\n      <div class=\"result col shadow\" *ngFor=\"let result of results\">\n        <div class=\"col-8\">\n          <h5>{{ result.market_name }}</h5>\n          <p>{{ result.event_name }}</p>\n          <p>{{ result.time }}</p>\n        </div>\n        <div class=\"col-2\">\n          <h6>{{ result.result }}</h6>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mobile/inner-pages/results/results.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/mobile/inner-pages/results/results.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/mobile/shared/services/user.service.ts");



var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(uService) {
        this.uService = uService;
        this.results = [];
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uService.getResults().subscribe(function (resp) {
            if (resp.status) {
                _this.results = resp.data.items;
            }
        });
    };
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/mobile/inner-pages/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/mobile/inner-pages/results/results.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/scores/scores.component.css":
/*!****************************************************************!*\
  !*** ./src/app/mobile/inner-pages/scores/scores.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9zY29yZXMvc2NvcmVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/scores/scores.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/mobile/inner-pages/scores/scores.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen-area\">\n  <div class=\"screen-tab\">\n    <div class=\"col-4 active\">\n      <span>Live Market</span>\n    </div>\n    <div class=\"col-4\">\n      <span>Matched</span>\n    </div>\n    <div class=\"col-4\">\n      <span>Unmatched</span>\n    </div>\n  </div>\n  <div class=\"screen-detail\">\n    <div class=\"tab-details show-tab\">\n      <div class=\"news-cell blue-bg cf\">\n        <div class=\"star\">\n          <img src=\"./images/star.png\">\n        </div>\n        <div class=\"score-part\">\n          <div class=\"desc\">\n            <span>India Women v England Women (3rd T20)</span>\n            <span>No data!</span>\n          </div>\n          <div class=\"match-score\">\n            <span>255/7 (50.0)</span>\n            <span>179/7 (40.0)</span>\n          </div>\n        </div>\n      </div>\n\n      <!-- Upcoming Match -->\n      <div class=\"upcoming-match\">\n        <div class=\"mini-title-bar\">\n          <div class=\"left-push\">\n            <div class=\"col-4\">Match odds</div>\n          </div>\n          <div class=\"right-push\">\n            <div class=\"col-4\">BACK</div>\n            <div class=\"col-4\">LAY</div>\n          </div>\n\n        </div>\n        <div class=\"score-group-block\">\n          <div class=\"score-block red\">\n            <div class=\"left-push\">\n              <div class=\"desc\">\n                <span>Nick Kyrgios</span>\n                <div class=\"two-value\"><em>40000</em><em>-7000</em></div>\n              </div>\n            </div>\n            <div class=\"right-push\">\n              <div class=\"col-6 black-score\">\n                <div class=\"balance-info num-cell\">\n                  <span>1.43</span>\n                  <em>20.00</em>\n                </div>\n              </div>\n              <div class=\"col-6 lay-score\">\n                <div class=\"expose-info num-cell\">\n                  <span>1.47</span>\n                  <em>4,462.47</em>\n                </div>\n              </div>\n            </div>\n            <div class=\"details-popup\">\n              <form>\n                <div class=\"totol-edit-bar\">\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"price-btn\">\n                  <a class=\"pri-btn\" href=\"#\">1K</a>\n                  <a class=\"pri-btn\" href=\"#\">2K</a>\n                  <a class=\"pri-btn\" href=\"#\">5K</a>\n                  <a class=\"pri-btn\" href=\"#\">10K</a>\n                  <a class=\"pri-btn\" href=\"#\">25K</a>\n                  <a class=\"pri-btn red-btn\" href=\"#\">CLR</a>\n                </div>\n                <div class=\"submit-area\">\n                  <div class=\"col-6\">\n                    <a href=\"#\" class=\"red-btn btn-prime\">Cancel</a>\n                  </div>\n                  <div class=\"col-6\">\n                    <input type=\"submit\" value=\"Place Bet 0\" class=\"green-sub-btn\">\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"score-block green\">\n            <div class=\"left-push\">\n              <div class=\"desc\">\n                <span>Nick Kyrgios</span>\n                <div class=\"two-value\"><em>40000</em><em>-7000</em></div>\n              </div>\n            </div>\n            <div class=\"right-push\">\n              <div class=\"col-6 black-score\">\n                <div class=\"balance-info num-cell\">\n                  <span>1.43</span>\n                  <em>20.00</em>\n                </div>\n              </div>\n              <div class=\"col-6 lay-score\">\n                <div class=\"expose-info num-cell\">\n                  <span>1.47</span>\n                  <em>4,462.47</em>\n                </div>\n              </div>\n            </div>\n            <div class=\"details-popup\">\n              <form>\n                <div class=\"totol-edit-bar\">\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"price-btn\">\n                  <a class=\"pri-btn\" href=\"#\">1K</a>\n                  <a class=\"pri-btn\" href=\"#\">2K</a>\n                  <a class=\"pri-btn\" href=\"#\">5K</a>\n                  <a class=\"pri-btn\" href=\"#\">10K</a>\n                  <a class=\"pri-btn\" href=\"#\">25K</a>\n                  <a class=\"pri-btn red-btn\" href=\"#\">CLR</a>\n                </div>\n                <div class=\"submit-area\">\n                  <div class=\"col-6\">\n                    <a href=\"#\" class=\"red-btn btn-prime\">Cancel</a>\n                  </div>\n                  <div class=\"col-6\">\n                    <input type=\"submit\" value=\"Place Bet 0\" class=\"green-sub-btn\">\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Current Match -->\n      <div class=\"current-match\">\n        <div class=\"mini-title-bar\">\n          <div class=\"left-push\">\n            <div class=\"col-4\">Match odds</div>\n          </div>\n          <div class=\"right-push\">\n            <div class=\"col-4\">BACK</div>\n            <div class=\"col-4\">LAY</div>\n          </div>\n\n        </div>\n        <div class=\"score-group-block\">\n          <div class=\"score-block red\">\n            <div class=\"left-push\">\n              <div class=\"desc\">\n                <span>Nick Kyrgios</span>\n                <div class=\"two-value\"><em>40000</em><em>-7000</em></div>\n              </div>\n            </div>\n            <div class=\"right-push\">\n              <div class=\"col-6 black-score\">\n                <div class=\"balance-info num-cell\">\n                  <span>1.43</span>\n                  <em>20.00</em>\n                </div>\n              </div>\n              <div class=\"col-6 lay-score\">\n                <div class=\"expose-info num-cell\">\n                  <span>1.47</span>\n                  <em>4,462.47</em>\n                </div>\n              </div>\n            </div>\n            <div class=\"details-popup\">\n              <form>\n                <div class=\"totol-edit-bar\">\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"price-btn\">\n                  <a class=\"pri-btn\" href=\"#\">1K</a>\n                  <a class=\"pri-btn\" href=\"#\">2K</a>\n                  <a class=\"pri-btn\" href=\"#\">5K</a>\n                  <a class=\"pri-btn\" href=\"#\">10K</a>\n                  <a class=\"pri-btn\" href=\"#\">25K</a>\n                  <a class=\"pri-btn red-btn\" href=\"#\">CLR</a>\n                </div>\n                <div class=\"submit-area\">\n                  <div class=\"col-6\">\n                    <a href=\"#\" class=\"red-btn btn-prime\">Cancel</a>\n                  </div>\n                  <div class=\"col-6\">\n                    <input type=\"submit\" value=\"Place Bet 0\" class=\"green-sub-btn\">\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"score-block green\">\n            <div class=\"left-push\">\n              <div class=\"desc\">\n                <span>Nick Kyrgios</span>\n                <div class=\"two-value\"><em>40000</em><em>-7000</em></div>\n              </div>\n            </div>\n            <div class=\"right-push\">\n              <div class=\"col-6 black-score\">\n                <div class=\"balance-info num-cell\">\n                  <span>1.43</span>\n                  <em>20.00</em>\n                </div>\n              </div>\n              <div class=\"col-6 lay-score\">\n                <div class=\"expose-info num-cell\">\n                  <span>1.47</span>\n                  <em>4,462.47</em>\n                </div>\n              </div>\n            </div>\n            <div class=\"details-popup\">\n              <form>\n                <div class=\"totol-edit-bar\">\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"price-btn\">\n                  <a class=\"pri-btn\" href=\"#\">1K</a>\n                  <a class=\"pri-btn\" href=\"#\">2K</a>\n                  <a class=\"pri-btn\" href=\"#\">5K</a>\n                  <a class=\"pri-btn\" href=\"#\">10K</a>\n                  <a class=\"pri-btn\" href=\"#\">25K</a>\n                  <a class=\"pri-btn red-btn\" href=\"#\">CLR</a>\n                </div>\n                <div class=\"submit-area\">\n                  <div class=\"col-6\">\n                    <a href=\"#\" class=\"red-btn btn-prime\">Cancel</a>\n                  </div>\n                  <div class=\"col-6\">\n                    <input type=\"submit\" value=\"Place Bet 0\" class=\"green-sub-btn\">\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"score-block red\">\n            <div class=\"left-push\">\n              <div class=\"desc\">\n                <span>Nick Kyrgios</span>\n                <div class=\"two-value\"><em>-7000</em></div>\n              </div>\n            </div>\n            <div class=\"right-push\">\n              <div class=\"col-6 black-score\">\n                <div class=\"balance-info num-cell\">\n                  <span>1.43</span>\n                  <em>20.00</em>\n                </div>\n              </div>\n              <div class=\"col-6 lay-score\">\n                <div class=\"expose-info num-cell\">\n                  <span>1.47</span>\n                  <em>4,462.47</em>\n                </div>\n              </div>\n            </div>\n            <div class=\"details-popup\">\n              <form>\n                <div class=\"totol-edit-bar\">\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"price-btn\">\n                  <a class=\"pri-btn\" href=\"#\">1K</a>\n                  <a class=\"pri-btn\" href=\"#\">2K</a>\n                  <a class=\"pri-btn\" href=\"#\">5K</a>\n                  <a class=\"pri-btn\" href=\"#\">10K</a>\n                  <a class=\"pri-btn\" href=\"#\">25K</a>\n                  <a class=\"pri-btn red-btn\" href=\"#\">CLR</a>\n                </div>\n                <div class=\"submit-area\">\n                  <div class=\"col-6\">\n                    <a href=\"#\" class=\"red-btn btn-prime\">Cancel</a>\n                  </div>\n                  <div class=\"col-6\">\n                    <input type=\"submit\" value=\"Place Bet 0\" class=\"green-sub-btn\">\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"score-block green\">\n            <div class=\"left-push\">\n              <div class=\"desc\">\n                <span>Alexander Zverev</span>\n                <div class=\"two-value\"><em>7040</em></div>\n              </div>\n            </div>\n            <div class=\"right-push ball-running\">\n              <div class=\"ball-run\">\n                <span>\n                  <em class=\"open-ball left\"></em>\n                  <i>Ball Running</i>\n                  <em class=\"open-ball right\"></em>\n                </span>\n              </div>\n              <div class=\"col-6 black-score\">\n                <div class=\"balance-info num-cell\">\n                  <span>3.10</span>\n                  <em>2116.67</em>\n                </div>\n              </div>\n              <div class=\"col-6 lay-score\">\n                <div class=\"expose-info num-cell\">\n                  <span>3.35</span>\n                  <em>8.54</em>\n                </div>\n              </div>\n            </div>\n            <div class=\"details-popup\">\n              <form>\n                <div class=\"totol-edit-bar\">\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <div class=\"score-add\">\n                      <button class=\"score-minus\"></button>\n                      <input type=\"text\">\n                      <button class=\"score-plus\"></button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"price-btn\">\n                  <a class=\"pri-btn\" href=\"#\">1K</a>\n                  <a class=\"pri-btn\" href=\"#\">2K</a>\n                  <a class=\"pri-btn\" href=\"#\">5K</a>\n                  <a class=\"pri-btn\" href=\"#\">10K</a>\n                  <a class=\"pri-btn\" href=\"#\">25K</a>\n                  <a class=\"pri-btn red-btn\" href=\"#\">CLR</a>\n                </div>\n                <div class=\"submit-area\">\n                  <div class=\"col-6\">\n                    <a href=\"#\" class=\"red-btn btn-prime\">Cancel</a>\n                  </div>\n                  <div class=\"col-6\">\n                    <input type=\"submit\" value=\"Place Bet 0\" class=\"green-sub-btn\">\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"tab-details\">\n      <div class=\"col\">\n        <div class=\"col-7\"></div>\n        <div class=\"col-2 center bold\">Odds</div>\n        <div class=\"col-2 center bold\">Stack</div>\n        <div class=\"col-2 center bold\">PL</div>\n      </div>\n      <div class=\"news-cell blue-bg cf\">\n        <div class=\"desc\">\n          <span>Macth ODD</span>\n        </div>\n      </div>\n      <div class=\"col red seprater\">\n        <div class=\"col-7 bold\">Islamabad United</div>\n        <div class=\"col-2 center bold\">1.94</div>\n        <div class=\"col-2 center bold\">5000</div>\n        <div class=\"col-2 center bold\">4700</div>\n      </div>\n      <div class=\"col blue seprater\">\n        <div class=\"col-7 bold\">Islamabad United</div>\n        <div class=\"col-2 center bold\">1.94</div>\n        <div class=\"col-2 center bold\">5000</div>\n        <div class=\"col-2 center bold\">4700</div>\n      </div>\n      <div class=\"col red seprater\">\n        <div class=\"col-7 bold\">Islamabad United</div>\n        <div class=\"col-2 center bold\">1.94</div>\n        <div class=\"col-2 center bold\">5000</div>\n        <div class=\"col-2 center bold\">4700</div>\n      </div>\n      <div class=\"col blue seprater\">\n        <div class=\"col-7 bold\">Islamabad United</div>\n        <div class=\"col-2 center bold\">1.94</div>\n        <div class=\"col-2 center bold\">5000</div>\n        <div class=\"col-2 center bold\">4700</div>\n      </div>\n    </div>\n    <div class=\"tab-details\">\n      <div class=\"col\">\n        <div class=\"col-7\"></div>\n        <div class=\"col-2 center bold\">Odds</div>\n        <div class=\"col-2 center bold\">Stack</div>\n        <div class=\"col-2 center bold\">PL</div>\n        <div class=\"col-2 center bold\">Delete</div>\n      </div>\n      <div class=\"news-cell blue-bg cf\">\n        <div class=\"desc\">\n          <span>MATCH ODD</span>\n        </div>\n      </div>\n      <div class=\"col red seprater\">\n        <div class=\"col-7 bold\">Islamabad United</div>\n        <div class=\"col-2 center bold\">1.94</div>\n        <div class=\"col-2 center bold\">5000</div>\n        <div class=\"col-2 center bold\">4700</div>\n        <div class=\"col-2 center\"><button class=\"delete\"><img src=\"images/delete.png\" alt=\"Delete\"></button></div>\n      </div>\n      <div class=\"col blue seprater\">\n        <div class=\"col-7 bold\">Islamabad United</div>\n        <div class=\"col-2 center bold\">1.94</div>\n        <div class=\"col-2 center bold\">5000</div>\n        <div class=\"col-2 center bold\">4700</div>\n        <div class=\"col-2 center\"><button class=\"delete\"><img src=\"images/delete.png\" alt=\"Delete\"></button></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mobile/inner-pages/scores/scores.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/mobile/inner-pages/scores/scores.component.ts ***!
  \***************************************************************/
/*! exports provided: ScoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresComponent", function() { return ScoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScoresComponent = /** @class */ (function () {
    function ScoresComponent() {
    }
    ScoresComponent.prototype.ngOnInit = function () {
    };
    ScoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scores',
            template: __webpack_require__(/*! ./scores.component.html */ "./src/app/mobile/inner-pages/scores/scores.component.html"),
            styles: [__webpack_require__(/*! ./scores.component.css */ "./src/app/mobile/inner-pages/scores/scores.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScoresComponent);
    return ScoresComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/sports/sports.component.css":
/*!****************************************************************!*\
  !*** ./src/app/mobile/inner-pages/sports/sports.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9zcG9ydHMvc3BvcnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/sports/sports.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/mobile/inner-pages/sports/sports.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen-area\">\r\n\r\n    <!-- screen tab part -->\r\n    <div class=\"screen-tab\">\r\n        <div class=\"col-4\" (click)='selected = i' [ngClass]=\"{'active': i === selected}\"\r\n            *ngFor='let sport of sports;let i = index;'>\r\n            <span>{{ sport.event_type_name }}</span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"screen-detail\" *ngFor='let event of events;let i = index;'>\r\n\r\n        <!-- tab details part -->\r\n        <div class=\"tab-details inplay-part\" [ngClass]=\"{'show-tab':  i === selected}\">\r\n            <div class=\"news-info-cell cf\" *ngFor=\"let obj of  event.inplay; let j = index;\">\r\n                <div class=\"star\" (click)='addRemoveFavorite(event.inplay , j)'>\r\n                    <img src=\"./assets/images/{{ +obj.is_favorite ? 'star-yellow.png' : 'star-black.png' }}\">\r\n                </div>\r\n                <div class=\"desc\">\r\n                    <span> {{ obj.title }}</span>\r\n                </div>\r\n                <div class=\"btn-cell\">\r\n                    <a href=\"score.html\" class=\"play-btn\">In-Play</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"news-info-cell cf\" *ngFor=\"let obj of event.upcoming; let j = index;\">\r\n                <div class=\"star\" (click)='addRemoveFavorite(event.upcoming , j)'>\r\n                    <img src=\"./assets/images/{{ +obj.is_favorite ? 'star-yellow.png' : 'star-black.png' }}\">\r\n                </div>\r\n                <div class=\"desc\">\r\n                    <span> {{ obj.title }}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>"

/***/ }),

/***/ "./src/app/mobile/inner-pages/sports/sports.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/mobile/inner-pages/sports/sports.component.ts ***!
  \***************************************************************/
/*! exports provided: SportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsComponent", function() { return SportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_sports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/sports.service */ "./src/app/mobile/shared/services/sports.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/mobile/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SportsComponent = /** @class */ (function () {
    function SportsComponent(sService, uService, aRoute) {
        this.sService = sService;
        this.uService = uService;
        this.aRoute = aRoute;
        this.sports = [];
        this.events = [];
        this.selected = 0;
    }
    SportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var slug = this.aRoute.snapshot.params.slug;
        this.sService.getSports().subscribe(function (resp) {
            if (resp.status) {
                _this.sports = resp.data.items;
                _this.sports.forEach(function (sport, index) {
                    if (!_this.selected) {
                        _this.selected = (sport.event_slug === slug) ? index : 0;
                    }
                    _this.events[index] = {};
                    _this.getSportsEvents(sport.event_slug, index);
                });
            }
        });
    };
    SportsComponent.prototype.getSportsEvents = function (slug, index) {
        var _this = this;
        this.sService.getSportsEvents(slug).subscribe(function (resp) {
            if (resp.status) {
                _this.events[index] = resp.data.items;
            }
        });
    };
    SportsComponent.prototype.addRemoveFavorite = function (item, index) {
        var data = item[index];
        var requestData = {
            "event_id": data.eventId,
            "market_id": data.marketId,
            "market_type": "match_odd",
            "favorite": +data.is_favorite ? 'remove' : 'add'
        };
        this.uService.addRemoveFavorite(requestData).subscribe(function (resp) {
            if (resp.status) {
                data.is_favorite = !+data.is_favorite;
            }
        });
    };
    SportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sports',
            template: __webpack_require__(/*! ./sports.component.html */ "./src/app/mobile/inner-pages/sports/sports.component.html"),
            providers: [_shared_services_sports_service__WEBPACK_IMPORTED_MODULE_2__["SportsService"]],
            styles: [__webpack_require__(/*! ./sports.component.css */ "./src/app/mobile/inner-pages/sports/sports.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_sports_service__WEBPACK_IMPORTED_MODULE_2__["SportsService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SportsComponent);
    return SportsComponent;
}());



/***/ }),

/***/ "./src/app/mobile/layout/footer/footer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/mobile/layout/footer/footer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mobile/layout/footer/footer.component.html":
/*!************************************************************!*\
  !*** ./src/app/mobile/layout/footer/footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container\">\r\n        <div class=\"footer-navigation\">\r\n            <a [routerLink]=\"[ '/mobile/home']\" [routerLinkActive]=\"['active']\" class=\"ft-tab home-tab\">\r\n                <figure>\r\n                    <img class=\"default\" src=\"./assets/images/home-black.png\">\r\n                    <img class=\"hover\" src=\"./assets/images/home.png\">\r\n                </figure>\r\n                <span>Home</span>\r\n            </a>\r\n            <a [routerLink]=\"[ '/mobile/in-play']\" [routerLinkActive]=\"['active']\" class=\"ft-tab timer-tab\">\r\n                <figure>\r\n                    <img class=\"default\" src=\"./assets/images/timer-black.png\">\r\n                    <img class=\"hover\" src=\"./assets/images/timer.png\">\r\n                </figure>\r\n                <span>InPlay</span>\r\n            </a>\r\n            <a [routerLink]=\"[ '/mobile/sports']\" [routerLinkActive]=\"['active']\" class=\"ft-tab win-tab\">\r\n                <figure>\r\n                    <img class=\"default\" src=\"./assets/images/trophy-black.png\">\r\n                    <img class=\"hover\" src=\"./assets/images/trophy.png\">\r\n                </figure>\r\n                <span>Sport</span>\r\n            </a>\r\n            <a [routerLink]=\"[ '/mobile/market']\" [routerLinkActive]=\"['active']\" class=\"ft-tab market-tab\">\r\n                <figure>\r\n                    <img class=\"default\" src=\"./assets/images/market-black.png\">\r\n                    <img class=\"hover\" src=\"./assets/images/market.png\">\r\n                </figure>\r\n                <span>Market</span>\r\n            </a>\r\n            <a [routerLink]=\"[ '/mobile/favorite']\" [routerLinkActive]=\"['active']\" class=\"ft-tab star-tab\">\r\n                <figure>\r\n                    <img class=\"default\" src=\"./assets/images/star-black.png\">\r\n                    <img class=\"hover\" src=\"./assets/images/star.png\">\r\n                </figure>\r\n                <span>Favorite</span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/mobile/layout/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/mobile/layout/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mobile-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/mobile/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/mobile/layout/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/mobile/layout/header/header.component.css":
/*!***********************************************************!*\
  !*** ./src/app/mobile/layout/header/header.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".open{\r\n    left: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9tb2JpbGUvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcGVue1xyXG4gICAgbGVmdDogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/mobile/layout/header/header.component.html":
/*!************************************************************!*\
  !*** ./src/app/mobile/layout/header/header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- resposive menu -->\r\n<div class=\"mobile-nav-block\" [ngClass]=\"{'open': menuOpen}\">\r\n    <div class=\"close-btn\" (click)='menuOpen = !menuOpen'></div>\r\n    <div class=\"title\">My Account</div>\r\n    <div class=\"nav-content\">\r\n        <ul (click)='menuOpen = !menuOpen'>\r\n            <li [routerLinkActive]=\"['current']\"><img class=\"defualt\" src=\"assets/images/male-black.png\"><img\r\n                    class=\"hover\" src=\"assets/images/male.png\"><a [routerLink]=\"[ '/mobile/my-profile']\">My profile</a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['current']\"><img class=\"defualt\" src=\"assets/images/settings-black.png\"><img\r\n                    class=\"hover\" src=\"assets/images/settings.png\"><a [routerLink]=\"[ '/mobile/bet-stake-setting']\">Bet\r\n                    stake setting</a></li>\r\n            <li [routerLinkActive]=\"['current']\"><img class=\"defualt\" src=\"assets/images/statistics-black.png\"><img\r\n                    class=\"hover\" src=\"assets/images/statistics.png\"><a\r\n                    [routerLink]=\"[ '/mobile/account-statement']\">account statement</a></li>\r\n            <li [routerLinkActive]=\"['current']\"><img class=\"defualt\" src=\"assets/images/star-black.png\"><img\r\n                    class=\"hover\" src=\"assets/images/star.png\"><a [routerLink]=\"[ '/mobile/favorite']\">Favorite</a></li>\r\n            <li [routerLinkActive]=\"['current']\"><img class=\"defualt\" src=\"assets/images/timer-black.png\"><img\r\n                    class=\"hover\" src=\"assets/images/timer.png\"><a [routerLink]=\"[ '/mobile/bet-history']\">Bet\r\n                    History</a></li>\r\n            <li [routerLinkActive]=\"['current']\"><img class=\"defualt\" src=\"assets/images/bar-chart-black.png\"><img\r\n                    class=\"hover\" src=\"assets/images/bar-chart.png\"><a\r\n                    [routerLink]=\"[ '/mobile/profit-loss']\">Profit/Loss</a></li>\r\n            <li [routerLinkActive]=\"['current']\"><img class=\"defualt\" src=\"assets/images/result-black.png\"><img\r\n                    class=\"hover\" src=\"assets/images/result.png\"><a [routerLink]=\"[ '/mobile/results']\">Results</a></li>\r\n            <li [routerLinkActive]=\"['current']\"><img class=\"defualt\" src=\"assets/images/unlock-black.png\"><img\r\n                    class=\"hover\" src=\"assets/images/unlock.png\"><a [routerLink]=\"[ '/mobile/change-password']\">Change\r\n                    Password</a></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"center-cell\">\r\n        <a class=\"red-btn btn-prime\" (click)='logout()'>Logout</a>\r\n    </div>\r\n</div>\r\n\r\n<header>\r\n    <div class=\"header-top\">\r\n        <div class=\"container\">\r\n            <div class=\"left-push\" (click)='menuOpen = !menuOpen'>\r\n                <a class=\"logo\">\r\n                    <img src=\"./assets/images/logo.png\">\r\n                </a>\r\n            </div>\r\n            <div class=\"right-push\">\r\n                <div class=\"col-6\">\r\n                    <div class=\"balance-info num-cell\">\r\n                        <span>Balance</span>\r\n                        <em>{{ balance ? balance.balance : '00' }}</em>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <div class=\"expose-info num-cell\">\r\n                        <span>Expose</span>\r\n                        <em>{{ balance ? balance.expose : '00' }}</em>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"header-btm\">\r\n        <div class=\"container cf\">\r\n            <div class=\"speek-icon\">\r\n                <img src=\"./assets/images/megaphone.png\">\r\n            </div>\r\n            <div class=\"mark-text\">\r\n                <marquee behavior=\"repeat\"><span class=\"marquee\">\r\n                        {{ commentary ? commentary.global_commentary : '' }}</span></marquee>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>"

/***/ }),

/***/ "./src/app/mobile/layout/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/mobile/layout/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/global.service */ "./src/app/mobile/shared/services/global.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/mobile/shared/services/user.service.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, gService, uService) {
        this.router = router;
        this.gService = gService;
        this.uService = uService;
        this.menuOpen = false;
    }
    HeaderComponent.prototype.navigateTo = function (name) {
        this.router.navigate(['mobile/' + name]);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gService.balance$.subscribe(function (data) {
            _this.balance = data;
        });
        this.gService.commentary$.subscribe(function (data) {
            _this.commentary = data;
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.uService.logout();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mobile-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/mobile/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/mobile/layout/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/mobile/layout/main/main.component.css":
/*!*******************************************************!*\
  !*** ./src/app/mobile/layout/main/main.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9sYXlvdXQvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mobile/layout/main/main.component.html":
/*!********************************************************!*\
  !*** ./src/app/mobile/layout/main/main.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n    <mobile-header></mobile-header>\r\n    <div id=\"content-area\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"footer-push\"></div>\r\n</div>\r\n<mobile-footer></mobile-footer>"

/***/ }),

/***/ "./src/app/mobile/layout/main/main.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mobile/layout/main/main.component.ts ***!
  \******************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () { };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/mobile/layout/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/mobile/layout/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/mobile/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/mobile/login/login.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mobile/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/mobile/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"first-screen\">\r\n    <figure>\r\n        <img src=\"./assets/images/logo.png\">\r\n    </figure>\r\n</div>\r\n<!-- start -->\r\n<div id=\"wrapper\">\r\n\r\n    <!-- content area part -->\r\n    <div id=\"content-area\">\r\n        <div class=\"login-block cf\">\r\n            <div class=\"login-backgroun-slider cf\">\r\n                <div class=\"item\" style=\"background-image: url(./assets/images/cricket-ball.jpg)\"></div>\r\n                <!-- <div class=\"item\" style=\"background-image: url(./assets/images/football-ground.jpg)\"></div>\r\n                <div class=\"item\" style=\"background-image: url(./assets/images/tennis-ground.jpg)\"></div> -->\r\n            </div>\r\n            <div class=\"login-section\">\r\n                <div class=\"brand-area\">\r\n                    <img src=\"assets/images/logo.png\">\r\n                </div>\r\n                <form [formGroup]='loginForm' (submit)='login()'>\r\n                    <div class=\"field-cell\">\r\n                        <img src=\"assets/images/login-black.png\">\r\n                        <input type=\"text\" placeholder=\"Username\" formControlName='username' name='username'>\r\n                    </div>\r\n                    <div class=\"field-cell\">\r\n                        <img src=\"assets/images/lock-black.png\">\r\n                        <input type=\"password\" placeholder=\"Password\" formControlName='password' name='password'>\r\n                    </div>\r\n                    <div class=\"field-cell check-box\">\r\n                        <label class=\"checkbox\">Stay Joined\r\n                            <input type=\"checkbox\">\r\n                            <span class=\"checkmark\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"field-cell\">\r\n                        <input type=\"submit\" value=\"login\" [disabled]='!loginForm.valid'>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mobile/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/mobile/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/mobile/shared/services/user.service.ts");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/auth/auth.service */ "./src/app/mobile/shared/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, uService, router) {
        this.authService = authService;
        this.uService = uService;
        this.router = router;
        this.router.navigate(['/mobile/home']);
        // if (this.authService.getStoredUser()) {
        //     alert('Navigate');
        // }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('c2', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('123456', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.uService.login(this.loginForm.value).subscribe(function (resp) {
                if (resp.status) {
                    _this.router.navigate(['/mobile/terms-conditions']);
                }
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/mobile/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/mobile/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mobile/mobile-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/mobile/mobile-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MobileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileRoutingModule", function() { return MobileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mobile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile.component */ "./src/app/mobile/mobile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/mobile/login/login.component.ts");
/* harmony import */ var _layout_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/main/main.component */ "./src/app/mobile/layout/main/main.component.ts");
/* harmony import */ var _inner_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inner-pages/home/home.component */ "./src/app/mobile/inner-pages/home/home.component.ts");
/* harmony import */ var _inner_pages_account_statement_account_statement_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inner-pages/account-statement/account-statement.component */ "./src/app/mobile/inner-pages/account-statement/account-statement.component.ts");
/* harmony import */ var _inner_pages_bet_history_bet_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inner-pages/bet-history/bet-history.component */ "./src/app/mobile/inner-pages/bet-history/bet-history.component.ts");
/* harmony import */ var _inner_pages_bet_stake_setting_bet_stake_setting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inner-pages/bet-stake-setting/bet-stake-setting.component */ "./src/app/mobile/inner-pages/bet-stake-setting/bet-stake-setting.component.ts");
/* harmony import */ var _inner_pages_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inner-pages/favorite/favorite.component */ "./src/app/mobile/inner-pages/favorite/favorite.component.ts");
/* harmony import */ var _inner_pages_in_play_in_play_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inner-pages/in-play/in-play.component */ "./src/app/mobile/inner-pages/in-play/in-play.component.ts");
/* harmony import */ var _inner_pages_sports_sports_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inner-pages/sports/sports.component */ "./src/app/mobile/inner-pages/sports/sports.component.ts");
/* harmony import */ var _inner_pages_scores_scores_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./inner-pages/scores/scores.component */ "./src/app/mobile/inner-pages/scores/scores.component.ts");
/* harmony import */ var _inner_pages_market_market_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inner-pages/market/market.component */ "./src/app/mobile/inner-pages/market/market.component.ts");
/* harmony import */ var _inner_pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inner-pages/change-password/change-password.component */ "./src/app/mobile/inner-pages/change-password/change-password.component.ts");
/* harmony import */ var _inner_pages_profit_loss_profit_loss_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./inner-pages/profit-loss/profit-loss.component */ "./src/app/mobile/inner-pages/profit-loss/profit-loss.component.ts");
/* harmony import */ var _inner_pages_results_results_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./inner-pages/results/results.component */ "./src/app/mobile/inner-pages/results/results.component.ts");
/* harmony import */ var _shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/services/auth/auth.guard */ "./src/app/mobile/shared/services/auth/auth.guard.ts");
/* harmony import */ var _inner_pages_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./inner-pages/my-profile/my-profile.component */ "./src/app/mobile/inner-pages/my-profile/my-profile.component.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/mobile/terms/terms.component.ts");






















var routes = [
    {
        path: '', component: _mobile_component__WEBPACK_IMPORTED_MODULE_4__["MobileComponent"], children: [
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
            { path: 'terms-conditions', component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_21__["TermsComponent"] },
            {
                path: '', component: _layout_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], canActivate: [_shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]], children: [
                    { path: '', component: _inner_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
                    { path: 'home', component: _inner_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
                    { path: 'my-profile', component: _inner_pages_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_20__["MyProfileComponent"] },
                    { path: 'account-statement', component: _inner_pages_account_statement_account_statement_component__WEBPACK_IMPORTED_MODULE_8__["AccountStatementComponent"] },
                    { path: 'bet-history', component: _inner_pages_bet_history_bet_history_component__WEBPACK_IMPORTED_MODULE_9__["BetHistoryComponent"] },
                    { path: 'bet-stake-setting', component: _inner_pages_bet_stake_setting_bet_stake_setting_component__WEBPACK_IMPORTED_MODULE_10__["BetStakeSettingComponent"] },
                    { path: 'favorite', component: _inner_pages_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_11__["FavoriteComponent"] },
                    { path: 'in-play', component: _inner_pages_in_play_in_play_component__WEBPACK_IMPORTED_MODULE_12__["InPlayComponent"] },
                    { path: 'market', component: _inner_pages_market_market_component__WEBPACK_IMPORTED_MODULE_15__["MarketComponent"] },
                    { path: 'profit-loss', component: _inner_pages_profit_loss_profit_loss_component__WEBPACK_IMPORTED_MODULE_17__["ProfitLossComponent"] },
                    { path: 'results', component: _inner_pages_results_results_component__WEBPACK_IMPORTED_MODULE_18__["ResultsComponent"] },
                    { path: 'scores', component: _inner_pages_scores_scores_component__WEBPACK_IMPORTED_MODULE_14__["ScoresComponent"] },
                    { path: 'sports', component: _inner_pages_sports_sports_component__WEBPACK_IMPORTED_MODULE_13__["SportsComponent"] },
                    { path: 'sports/:slug', component: _inner_pages_sports_sports_component__WEBPACK_IMPORTED_MODULE_13__["SportsComponent"] },
                    { path: 'change-password', component: _inner_pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"] },
                ]
            }
        ]
    },
];
var MobileRoutingModule = /** @class */ (function () {
    function MobileRoutingModule() {
    }
    MobileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MobileRoutingModule);
    return MobileRoutingModule;
}());



/***/ }),

/***/ "./src/app/mobile/mobile.component.css":
/*!*********************************************!*\
  !*** ./src/app/mobile/mobile.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url('https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');\n@charset \"utf-8\";\nbody.dialog-open {\n  overflow: hidden; }\n.nsm-dialog-btn-close {\n  border: 0;\n  background: none;\n  color: #2d2d2d;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  font-size: 1.2em;\n  cursor: pointer; }\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  transition: background-color 500ms;\n  background-color: transparent;\n  z-index: 999; }\n.overlay.nsm-overlay-open {\n    background-color: rgba(0, 0, 0, 0.5); }\n.overlay.transparent {\n    background-color: transparent; }\n.nsm-dialog {\n  position: relative;\n  opacity: 1;\n  visibility: visible;\n  min-height: 200px;\n  width: 100%;\n  max-width: 520px;\n  margin: 0 auto;\n  pointer-events: none; }\n.nsm-dialog.nsm-dialog-close {\n    opacity: 0; }\n.nsm-dialog.nsm-centered {\n    display: flex;\n    align-items: center;\n    min-height: calc(100% - (1.75rem * 2)); }\n.nsm-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  background-clip: padding-box;\n  background-color: #fff;\n  border-radius: 2px;\n  padding: 1rem;\n  margin: 1.75rem;\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n  outline: 0;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n.nsm-body {\n  position: relative;\n  flex: 1 1 auto; }\n/* *************************\n* Animations\n* *************************/\n.nsm-dialog[class*=nsm-dialog-animation-] {\n  transition: opacity 500ms, -webkit-transform 500ms ease-in-out;\n  transition: transform 500ms ease-in-out, opacity 500ms;\n  transition: transform 500ms ease-in-out, opacity 500ms, -webkit-transform 500ms ease-in-out; }\n.nsm-dialog-animation-ltr {\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0); }\n.nsm-dialog-animation-ltr.nsm-dialog-open {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n.nsm-dialog-animation-ltr.nsm-dialog-close {\n    -webkit-transform: translate3d(-50%, 0, 0);\n            transform: translate3d(-50%, 0, 0); }\n.nsm-dialog-animation-rtl {\n  -webkit-transform: translate3d(50%, 0, 0);\n          transform: translate3d(50%, 0, 0); }\n.nsm-dialog-animation-rtl.nsm-dialog-open {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n.nsm-dialog-animation-rtl.nsm-dialog-close {\n    -webkit-transform: translate3d(50%, 0, 0);\n            transform: translate3d(50%, 0, 0); }\n.nsm-dialog-animation-ttb {\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0); }\n.nsm-dialog-animation-ttb.nsm-dialog-open {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n.nsm-dialog-animation-ttb.nsm-dialog-close {\n    -webkit-transform: translate3d(0, -50%, 0);\n            transform: translate3d(0, -50%, 0); }\n.nsm-dialog-animation-btt {\n  -webkit-transform: translate3d(0, 50%, 0);\n          transform: translate3d(0, 50%, 0); }\n.nsm-dialog-animation-btt.nsm-dialog-open {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n.nsm-dialog-animation-btt.nsm-dialog-close {\n    -webkit-transform: translate3d(0, 50%, 0);\n            transform: translate3d(0, 50%, 0); }\n/* CSS Document */\n/* Table of Contents\r\n-----------------------------------------------------------------------------\r\n\t1. Clean Base\r\n\t2. Base Typography\r\n\t3. Images\r\n\t4. Links\r\n\t5. Forms\r\n\t6. Tables\r\n\t7. Framework \r\n*/\n/* 1. Clean Base\r\n------------------------------------------------------------------------------*/\nhtml, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, \r\nlegend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, a, nav, section, summary, time, mark, audio, video \r\n{margin:0 auto; padding:0; border:0; outline:0; font-size:100%; vertical-align:baseline; background:transparent; text-decoration:none; list-style:none; outline:none; -webkit-font-smoothing: subpixel-antialiased; -webkit-tap-highlight-color:rgba(0,0,0,0);}\nhtml,body { -webkit-text-size-adjust:none; -webkit-font-smoothing: antialiased; height: 100%;}\narticle, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary {display: block;}\nimg{border:none;}\ninput[type=\"text\"], input[type=\"submit\"], input[type=\"button\"], input[type=\"password\"], input[type=\"email\"], input[type=\"tel\"], input[type=\"search\"], textarea {-webkit-appearance: none; outline: none;}\ntextarea:focus, input:focus, a, div, img { outline: none; }\n.cf:before, .cf:after { content: \"\"; display: table; }\n.cf:after { clear: both; }\n.cf { zoom: 1; }\n.clear { clear: both; }\n.clearfix:after { content: \".\"; display: block; height: 0; clear: both; visibility: hidden; }\n.clearfix { display: inline-block; }\n* html .clearfix { height: 1%; }\n.clearfix { display: block;}\n/* 2. Base Typography\r\n------------------------------------------------------------------------------*/\nbody{ color:#373d48; font-size:13px; font-family: 'Raleway', sans-serif; font-weight:400; line-height:22px; display: flex;overflow: hidden;min-height: 100vh;flex-direction: column; }\nh1, h2, h3, h4, h5, h6{ margin-bottom:20px; font-weight:normal;color: #000;}\nh1{ font-size:34px; }\nh2{ font-size:36px; }\nh3{ font-size:30px; }\nh4{ font-size:26px; }\nh5 {color: #007b4a;line-height: 22px;font-size: 14px;text-transform: uppercase;font-weight: 700;margin: 0 0 2px 0;}\nh6 {font-size:15px;font-weight: 400;margin: 0;}\np{ color:#373d48; font-size:13px; font-weight:400; line-height:22px; margin-bottom:20px;}\nul{ margin:20px 20px; padding:0;}\nul li{ font-size:13px;  color:#373d48; font-weight:400; line-height:22px; padding:0 0 5px 0; list-style:outside circle;}\nol{ margin:20px 20px; padding:0;}\nol li{ font-size:13px;  color:#373d48; font-weight:400; line-height:18px; padding:0 0 5px 0; list-style: decimal; margin-left:20px;}\nblockquote{ display:block; text-align:left; margin-bottom:20px; position:relative; background:#f3f3f3; padding:20px 20px 10px 20px; border-left:2px solid #1589cb;}\nblockquote p{ font-size:13px; font-weight:400; line-height:17px; margin-bottom:15px; position:relative; }\nhr {border:0 #000 solid; border-top-width:1px; clear:both; height:0;}\n/* 3. Images\r\n------------------------------------------------------------------------------*/\nimg{border:none; border-style: none;vertical-align: middle;}\n/* 4. Link\r\n------------------------------------------------------------------------------*/\na{color:#4777ac;transition: .3s;}\na:hover{color:#4777ac; text-decoration: none;}\na:active, a.current {color: #e8941a;}\na:focus {outline: none;}\n/* 5. Forms\r\n------------------------------------------------------------------------------*/\ninput[type=\"text\"], input[type=\"password\"], input[type=\"email\"], input[type=\"tel\"], input[type=\"search\"]{ border:1px solid #dedede; padding:0 15px; color:#666666; font-size:12px; height:36px; }\ntextarea{ border:1px solid #dedede; padding:5px 15px; color:#666666; font-size:12px; height:60px; resize:none;  font-family: 'Raleway', sans-serif; line-height:16px;}\ninput[type=\"submit\"], input[type=\"button\"], input[type=\"reset\"]{ background:#666; cursor:pointer; color:#fff; border:none; height:30px; line-height:28px; display:block; font-size:15px;}\ninput[type=\"submit\"]:hover, input[type=\"button\"]:hover{ background:#666; color:#fff;}\n/* 6. Tables\r\n------------------------------------------------------------------------------*/\ntable {border-spacing: 0; border-collapse: collapse;}\ntd {text-align: left; font-weight: normal;}\n/* 7. Layout Framework\r\n------------------------------------------------------------------------------*/\n/* main container */\n#wrapper{ width:100%; flex: 1; }\n.container{ max-width:100%; width:100%;}\n.footer, .push {height: 22px; /* .push must be the same height as .footer */}\n.col {display: flex;justify-content: space-between;flex: 1;margin: 0;padding: 6px 15px;align-items: center;}\n.col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8 {margin: 0;}\n.col-1 {width: 15%;}\n.col-2 {width: 20%;}\n.col-3 {width: 25%;}\n.col-4 {width: 33.33%;}\n.col-5 {width: 40%;}\n.col-6 {width: 50%;}\n.col-7 {width: 55%;}\n.col-8 {width: 80%;}\n.col-9 {width: 75%;margin: 0;}\n.center {text-align: center;}\n.left {text-align: left}\n.bold {font-weight: 700;color: #000;}\n.black {background: #000;}\n.blue {background: #8dd2f0;}\n.light-blue {background: #d0f1ff;}\n.red {background: #feafb2;}\n.light-red {background: #ffe9ea;}\n.grey {background: #efefef;}\n.seprater {border-top: 1.5px solid #fff;}\n.light-green {background: #d1e7de;}\n.green-dark {background: #007b4a;}\n.green-color {color: #007b4a;;}\n.red-dark {background: #ff0000;}\n.red-color {color: #ff0000;}\n.medium {font-weight: 500;}\n.green-dark.read-more {background: #007b4a;color: #fff;font-size: 13px;}\n.green-dark.read-more:hover {background: #000;}\n.red-dark.read-more {background: #ff0000;color: #fff;font-size: 13px;}\n.red-dark.read-more:hover {background: #ff0000;}\nbutton.delete {background: transparent;padding: 0;cursor: pointer;}\nbutton.delete:hover {background: transparent;}\n.shadow {box-shadow: 0 1px 7px rgba(0,0,0,0.2);padding: 15px;margin-bottom: 15px;}\n.shadow:last-child {margin-bottom: 0;}\n.title {font-size: 15px;font-weight: 700;color: #000;padding-bottom: 10px;}\nbutton {background: #007b4a;border: none;color: #fff;font-weight: 700;border-radius: 5px;\r\npadding: 7px 12px;font-size: 12px;outline: none;transition: .3s;}\nbutton:hover {background: #000;}\n.read-more {\r\n    background: #d9d9d9;\r\n    color: #000;\r\n    font-weight: 700;\r\n    display: inline-block;\r\n    padding: 5px 10px;\r\n    border-radius: 5px;font-size: 15px;text-align: center;\r\n}\n.read-more:hover {background: #007b4a;color: #fff;}\n/* header */\nheader{ width:100%; height:auto; }\nheader .header-top{ display: block; width: 100%; background:#efefef; box-shadow: 0 1px 1px rgba(0,0,0,0.2);}\n.header-top .container{ display: flex; flex-wrap: wrap; }\n.left-push{ display: inline-block; width: 60%; float: left; padding: 4px 1% 4px 1%; box-sizing: border-box; }\n.right-push{ display: flex; width: 40%; float: right;background: #007b4a;align-items: center; }\n.logo{ display: inline-block; width: 100px; }\n.logo img{ display: block; width: 100%; }\n.right-push .col-6{ width: 50%; display: inline-block; float: left; padding: 7px 1%; box-sizing: border-box; }\n.balance-info{ display: block; width: 100%; text-align: center; }\n.num-cell span { display: block; font-size: 13px; line-height: 14px; color: #fff; font-weight: bold; text-align: center; margin-bottom: 5px;text-transform: capitalize;}\n.num-cell em{ display: block; font-size: 12px; line-height: 15px; color:#fff; font-weight: 400; font-style: normal; text-align: center; }\n.header-btm { display: block; width: 100%; padding: 5px 0; box-sizing: border-box; }\n.header-btm .container{padding: 0 1%; box-sizing: border-box; }\n.header-btm .speek-icon{ float: left; }\n.speek-icon{ display: inline-block; width: 25px; height: 25px; background-color: #d1e7de; border-radius: 50%; padding: 5px; box-sizing: border-box; }\n.speek-icon img{ display: block; width: 100%; }\n.mark-text { display: block; width: 100%; font-size:12px; line-height: 14px; color:#000;font-weight: 500;font-style: italic;}\nmarquee{ display: block; width: 100%; }\n.marquee{ display: inline-block; }\n.header-btm .mark-text{ display: block; width: calc( 100% - 32px ); float: left; padding-left: 8px; box-sizing: border-box; padding-top: 5px;    text-transform: capitalize; }\n/* nav */\nnav{ width:100%; height:auto;}\nnav ul{}\nnav ul li{}\nnav ul li a{}\nnav ul li a:hover, nav .active{}\n/* footer */\nfooter{ width:100%; height:auto; }\n.footer-navigation{ display: flex; flex-wrap: wrap; width: 100%; }\n.ft-tab{ display: inline-block; width: 20%; padding: 10px 0; box-sizing: border-box; background: rgba(0, 123, 74, 0.18);position: relative;overflow: hidden;}\n.ft-tab figure{ display: block; width: 100%; text-align: center; margin-bottom: 6px; }\n.ft-tab figure img{ display: block; max-width: 23px; max-height: 23px; position: relative;z-index: 9; }\n.ft-tab figure img.hover {    position: absolute;\r\n    top: 11px;\r\n    left: 0;\r\n    right: 0;}\n.ft-tab:hover figure img.default, .ft-tab figure img.hover {opacity: 0;}\n.ft-tab:hover figure img.hover {opacity: 1;}\n.ft-tab.active figure img.hover {opacity: 1;}\n.ft-tab.active figure img.default {opacity: 0;}\n.ft-tab span{ display: block; width: 100%; text-align: center; font-size: 13px; line-height: 16px; color:#000; position: relative;z-index: 9;top: 3px;}\n.ft-tab.active span {color: #fff;}\n.ft-tab.active{ background-color: #003c6c; }\n.ft-tab.active:before{left: 0;}\n.ft-tab:before {content: '';display: block;background: #007b4a;width: 100%;height: 100%;position: absolute;top: 0;left: -100%;transition: .3s;}\n.ft-tab:hover span {color: #fff;}\n.ft-tab:hover:before {left: 0;}\n.screen-area{ display: block; width: 100%; }\n.screen-tab { position: relative; display: flex; flex-wrap: wrap; width: 100%;border-bottom: 1px solid #fff; }\n.screen-tab:after{ content: ''; display: block; position: absolute; left: 0; bottom: 0; width: 100%; height: 1px; background: #cccccc; }\n.screen-tab .col-4{ display: inline-block; width: 33.3%; text-align: center; color:#000; font-size: 12px; line-height: 14px; padding: 10px 0; box-sizing: border-box;background: rgba(0, 123, 74, 0.18);position: relative;overflow: hidden;cursor: pointer;}\n.screen-tab .col-4 span{ display: block; text-align: center; text-transform: uppercase; font-weight: 700;letter-spacing: 1.5px;position: relative;z-index: 9;}\n.screen-tab .col-4.active{ background: #007b4a;color: #fff; }\n.screen-tab .col-4.active:before{left: 0;}\n.screen-tab .col-4:before {content: '';display: block;background: #007b4a;width: 100%;height: 100%;position: absolute;top: 0;left: -100%;transition: .3s;}\n.screen-tab .col-4:hover {color: #fff;}\n.screen-tab .col-4:hover:before {left: 0;}\n.screen-detail{ display: block; width: 100%;overflow-y: scroll; }\n.tab-details{ display: block; }\n.news-info-cell{ position: relative; display: flex; width: 100%; border-bottom: 1px solid #bfbfbf; padding: 10px 0; box-sizing: border-box; align-items: center; }\n.news-cell{ position: relative; display: flex; width: 100%; border-bottom: 1px solid #bfbfbf; padding: 8px 0; box-sizing: border-box; align-items: center; }\n.desc{ display: inline-block; width: 72%; float: left; margin: 0; padding-left: 8px; box-sizing: border-box; }\n.desc span{ font-size: 14px; line-height:20px; display: block; width: 100%; color:#000000; font-weight: 600; text-transform: capitalize;}\n.desc span a {color: #000;}\n.desc span a:hover {color: #007b4a;}\n.desc em{ font-size: 12px; line-height: 14px; color: #007b4a; margin-top: 5px; font-style: normal; font-weight: 400; }\n.star{ display: flex; width: 18px; float: left; margin: 0; padding-left: 6px; align-items: center; }\n.star img{ width: 18px; height: 18px; display: inline-block;}\n.btn-cell{ display: inline-block; text-align: right; padding-right: 5px; box-sizing: border-box; width: 22%; }\n.play-btn{ font-size: 11px; line-height: 13px; color: #ffffff; font-weight: 400; padding: 6px 6px; box-sizing: border-box; border-radius: 3px; background: #90cf90;  display: inline-block; -webkit-animation: NAME-YOUR-ANIMATION 1s infinite;animation: NAME-YOUR-ANIMATION 1s infinite; transition: all 1s ease 0s; }\n.play-btn:hover{ text-decoration: none; color:#ffffff; }\n.screen-detail .tab-details{ display: none; }\n.screen-detail .tab-details.show-tab{ display: block; }\n.news-cell.blue-bg{ background: #000; box-sizing: border-box; }\n.news-cell.blue-bg .desc span{ color:#ffffff; font-size: 13px; }\n.score-block{ display: flex; flex-wrap: wrap; border-bottom: 1px solid #cccccc; padding-bottom: 2px;background: none;align-items: center;}\n.score-block.red .desc em{ color:#de2425; }\n.score-block .left-push{ width: 50%; }\n.score-block .right-push{ width: 50%; background: none;position: relative;}\n.score-block .black-score{ background: #8dd2f0; position: relative;cursor: pointer;}\n.score-block .lay-score{ background: #feafb2;cursor: pointer;}\n.score-block .num-cell span, .score-block .num-cell em{ color:#000; }\n.score-block .lay-score .num-cell span, .score-block .lay-score .num-cell em {color: #000;}\n.score-block .num-cell span{ font-size: 14px; }\n.score-block .col-6.black-score:after{ content: ''; display: block; position: absolute; right: 0; top:0; height: 100%;  width: 2px; background: #ffffff; }\n.score-block .desc{ width: 100%; }\n.score-block.green .desc em{ color:#6ebc28; }\n.two-value{ display: block; width: 100%; }\n.two-value em{ position: relative; }\n.two-value em:nth-child( 2n + 1 ){ margin-right: 10px; color:#de2425; }\n.two-value em:nth-child( 2n + 2 ):before{ content: '→'; display: block; position: absolute; left: -4px; top: -2px; font-size: 11px; }\n.score-block.green .desc em:nth-child( 2n + 2 ):before{ color:#de2425; }\n.score-block.green .desc em:nth-child( 2n + 2 ){ color:#de2425; }\n.score-block.red .two-value em:nth-child( 2n + 2 ){ color:#6ebc28; }\n.two-value em:nth-child( 2n + 2 ){ color:#de2425; padding-left: 12px; }\n.mini-title-bar{ display: flex; flex-wrap: wrap; border-bottom: 1px solid #cccccc; }\n.mini-title-bar .left-push{ padding: 3px; box-sizing: border-box; width: 50%; background: #007b4a; border-bottom-right-radius: 13px; }\n.mini-title-bar .right-push{ padding: 3px; box-sizing: border-box; width: 50%; background: none; }\n.mini-title-bar .col-4 {margin: auto;text-align: center; font-weight: bold; font-size: 14px; color:#fff;}\n.mini-title-bar.full .col-4 {width: 100%;text-align: left;font-size: 13px;}\n.mini-title-bar .right-push .col-4 {color: #000;margin: auto;}\n.details-popup{ display: none; width: 100%; padding: 10px 7%; box-sizing: border-box; background: #8dd2f0; }\n.details-popup form{ display: block; width: 100%; margin: 0; }\n.totol-edit-bar{ display: flex; margin-bottom: 10px; }\n.totol-edit-bar .col-6{ display: inline-block; width: 150%; }\n.totol-edit-bar .col-6:first-child .score-add{ margin-left: 0; }\n.totol-edit-bar .col-6:last-child .score-add{ margin-right: 0; }\n.score-add{ display: block; width: 90%; position: relative; border-radius: 5px; overflow: hidden; }\n.score-add .score-minus{ display: inline-block; width: 25px; height: 100%; position: absolute; left: 0; top:0; background: #efefef;border: none;outline: none;cursor: pointer;}\n.score-add .score-plus{ display: inline-block; width: 25px; height: 100%; position: absolute; right: 0; top:0; background: #efefef;border: none;outline: none;cursor: pointer;}\n.score-add .score-plus:before{ content: '+'; left: 0; top:0; font-size: 18px; color:#6ebc28; position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); }\n.score-add .score-minus:before{ content: '-'; left: 0; top:0; font-size: 22px; color:#de2425; position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); }\n.score-add input{ width: 100%; height: 28px; padding: 5px 50px; box-sizing: border-box; border: none; }\n.price-btn{ display: block; width: 100%; }\n.price-btn .pri-btn{ display: inline-block; font-size: 12px; line-height: 12px; color: #000000; background: #ffffff; font-weight: bold; padding: 7px 10px 6px 10px; box-sizing: border-box; border-radius: 5px; margin-right: 1%; width: 18.1%; text-align: center; margin-bottom: 10px; }\n.price-btn .pri-btn:hover {background: #000;color: #fff;}\n.price-btn .pri-btn:nth-child( 5n + 5 ){ margin-right: 0; }\n.pri-btn.red-btn{ color:#de2425; }\n.submit-area{ display: flex; }\n.submit-area .col-6{ width: 48.5%; display: inline-block;margin: auto; }\n.submit-area .col-6:first-child{ margin-left: 0; }\n.submit-area .col-6:last-child{ margin-right: 0; }\n.btn-prime{ display: inline-block; padding: 8px 10px; box-sizing: border-box; font-size: 14px; line-height: 14px; color:#ffffff; font-weight: bold; border-radius: 5px; background: #6ebc28; text-align: center; }\n.submit-area .red-btn.btn-prime{ width: 100%; }\n.red-btn.btn-prime{ background: #000; }\n.red-btn.btn-prime:hover {background: #007b4a;color: #fff;}\ninput[type=\"submit\"].green-sub-btn{ display: block; width: 100%; height: 30px; background:#007b4a; font-size: 14px; line-height: 14px; border-radius: 5px; font-weight: bold; }\ninput[type=\"submit\"].green-sub-btn:hover {background: #000;}\n.score-group-block{ display: block; width: 100%; }\n/* responsive menu */\n.responsive-mb-icon { display:none; max-width:40px; width:100%; background-color:transparent; float:right; top:30px; right:10px; z-index:10; margin:4px 0; }\n.responsive-mb-icon a { display:block; padding:5px 8px; }\n.responsive-mb-icon span { background-color:#3c55ff; height:2px; margin: 5px auto; display:block; max-width:100px; }\n.mobile-nav-block{ display: block; position: absolute; background: none; width: 80%; top: 0; left: -80%; bottom: 0; height: 100%; background: #ffffff; z-index: 999; }\n.mobile-nav-block .title{ background: #007b4a; display: block; color: #fff; font-size: 14px; letter-spacing: 0.05em; padding: 15px 20px; text-transform: uppercase; text-align: center; font-weight: bold; }\n.nav-content ul{ margin: 0; }\n.nav-content ul li{ list-style: none; display: block; width: 100%; border-bottom: 3px solid #ffffff; /*background: #f5f5f5;*/ background: rgba(0, 123, 74, 0.18); box-sizing: border-box; text-transform: uppercase; font-size: 12px; line-height: 14px; padding-bottom: 0; position: relative; }\n.nav-content ul li a{ display: block; width: 100%; height: 100%; color:#000; text-transform: uppercase; padding: 11px 15px 11px 30px; box-sizing: border-box; }\n.nav-content ul li a:hover{ background: #007b4a; text-decoration: none;color: #fff; }\n.nav-content ul li img{ position: absolute; left: 9px; top: 10px; display: inline-block; max-width: 15px; }\n.nav-content ul li img.default {opacity: 1;-webkit-transform: rotate(0deg);transform: rotate(0deg);transition: .3s;}\n.nav-content ul li img.hover {opacity: 0;-webkit-transform: rotate(0deg);transform: rotate(0deg);transition: .3s;}\n.nav-content ul li.current img.hover {opacity: 1;}\n.nav-content ul li.current a {background: #007b4a;color: #fff;}\n.nav-content ul li:hover img.hover {opacity: 1;-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n.nav-content ul li:hover img.default {opacity: 0;-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n.center-cell{ display: block; text-align: center; margin-top: 8px; padding: 0px 13px; }\n.mobile-nav-block .red-btn.btn-prime{ display: block; width: 100%; text-transform: uppercase; font-weight: 400; border-radius: 3px; transition: all 0.3s ease 0s; }\n.mobile-nav-block .red-btn.btn-prime:hover{ color:#ffffff; text-decoration: none; background: #007b4a; }\n.nav-content{ display: block; width: 100%; margin-top: 3px; }\n.close-btn {display: inline-block; position: absolute; right: 0; top: 4px; width: 19px; height: 20px; background: url(/assets/images/close.png) no-repeat; cursor: pointer; transition: all 0.3s ease 0s; background-size: cover; }\nbody.open .close-btn { right: -27px;}\nbody.open{ position: relative; }\nbody.open:after{ content: ''; display: block; position: absolute; width: 100%; height: 100%; left: 0; top:0; background: rgba(0,0,0,0.5); transition: all 1s ease 0s;z-index: 9;}\n/*login page*/\n.login-block{ display: flex; flex-wrap: wrap; align-items: center; width: 100%; height: 100vh; position: relative; min-height: 500px; }\n.brand-area{ display: block; width: 100%; background: #fff; text-align: center; padding: 25px 10px 15px 10px; box-sizing: border-box;border-radius: 18px 18px 0 0;}\n.brand-area img{ max-width: 200px; margin: -120px 0 0 0}\n.login-section{ display: block; width: 90%; max-width: 400px; background: #000; position: absolute; left: 0; right: 0;border-radius: 18px;}\n.login-section form{ display: block; width: 100%; padding: 20px 23px; box-sizing: border-box; }\n.field-cell{ display: block; width: 100%; position: relative; }\n.field-cell input[type=\"password\"], .field-cell input[type=\"text\"]{ display: block; width: 100%; background: #fff; box-sizing: border-box; margin-bottom: 20px; border: none; border-radius: 6px; padding-left: 35px; font-size: 14px; color:#000;  -webkit-transition: all 0.30s ease-in-out; -moz-transition: all 0.30s ease-in-out; -ms-transition: all 0.30s ease-in-out; -o-transition: all 0.30s ease-in-out; outline: none; }\n.field-cell input[type=\"password\"]:focus, .field-cell input[type=\"text\"]:focus{ box-shadow: 0 0 5px rgba(255, 255, 255, 1); }\n.field-cell input[type=\"submit\"]{ display: block; width: 100%; background: #007b4a; height: 40px; border-radius: 6px; color:#ffffff; text-transform: uppercase; font-weight: bold; transition: all 0.3s ease 0s; }\n.field-cell input[type=\"password\"]::-webkit-input-placeholder { color: #000; }\n.field-cell input[type=\"password\"]::-moz-placeholder { color: #000; }\n.field-cell input[type=\"password\"]:-ms-input-placeholder { color: #000; }\n.field-cell input[type=\"password\"]:-moz-placeholder { color: #000; }\n.field-cell input[type=\"text\"]::-webkit-input-placeholder { color: #000; }\n.field-cell input[type=\"text\"]::-moz-placeholder { color: #000; }\n.field-cell input[type=\"text\"]:-ms-input-placeholder { color: #000; }\n.field-cell input[type=\"text\"]:-moz-placeholder { color: #000; }\n.checkbox { display: inline-block; position: relative; padding-left: 30px; margin-bottom: 12px; cursor: pointer; font-size: 14px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; color: #ffffff; }\n.checkbox input { position: absolute; opacity: 0; cursor: pointer; height: 0; width: 0; }\n.checkmark { position: absolute; top: 0; left: 0; height: 15px; width: 15px; background-color: transparent; border: 2px solid #fff; border-radius: 3px; border-radius: 3px; }\n.checkbox:hover input ~ .checkmark { height: 15px; width: 15px; background-color: transparent; border: 2px solid #fff; border-radius: 3px; }\n.checkbox input:checked ~ .checkmark { background-color: transparent; border: 2px solid #ffffff; }\n.checkmark:after { content: \"\"; position: absolute; display: none; }\n.checkbox input:checked ~ .checkmark:after { display: block; }\n.checkbox .checkmark:after { left: 6px; top: 2px; width: 2px; height: 7px; border: solid white; border-width: 0 2px 2px 0; -webkit-transform: rotate(45deg); transform: rotate(45deg); }\n.field-cell.check-box{ padding: 15px 0; }\n.field-cell img{ position: absolute; left: 9px; top: 8px; display: inline-block; max-width: 19px; }\n.login-backgroun-slider{ display: block; width: 100%; height: 100%; }\n.login-backgroun-slider .item{ display: block; width: 100%; height: 100%; background-size: cover; background-position: bottom center;}\n.login-backgroun-slider .slick-slide > div, .login-backgroun-slider .slick-slide > div > div{ height: 100vh; min-height: 500px; }\n.login-backgroun-slider{display: block; width: 100%; height: 100%; overflow: hidden; }\n.slick-dotted.slick-slider { margin-bottom: 0px; }\n.login-backgroun-slider .slick-dots, .login-backgroun-slider .slick-arrow{ display: none !important; }\n.first-screen {display: flex; flex-wrap: nowrap; align-content: center; width: 100%; position: absolute; left: 0; top:0; background: url(/assets/images/splash1.jpg);background-size: 100%;background-repeat: no-repeat;background-position: center center;height: 100vh; z-index: 99999; opacity: 0; visibility: hidden;}\n.first-screen figure{ position: absolute; width: 0; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); transition: all 3s ease 0s; }\n.first-screen.show{ opacity: 1; visibility: visible; }\n.first-screen.show figure{ width: 200px; }\n.first-screen figure img{ display: block; width: 100%; }\n.first-screen.hide{ opacity: 0; visibility: hidden; transition: all 1s ease 0s;  }\n.field-cell input[type=\"submit\"]:hover{background: #ffffff;color: #007b4a;}\n@-webkit-keyframes NAME-YOUR-ANIMATION {\r\n  0%, 49% {\r\n    background-color: #007b4a;\r\n  }\r\n  50%, 100% {\r\n    background-color: rgba(0,123,74,0.5);\r\n  }\r\n}\n.mini-title-bar.full {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    border-bottom: none;\r\n    box-shadow: 0 1px 10px rgba(0,0,0,0.3);\r\n}\n.mini-title-bar.full .left-push {\r\n    width: 100%;padding: 6px 10px;\r\n    border-radius: 0;\r\n    text-align: left;\r\n    background: #007b4a;\r\n    text-transform: uppercase;\r\n}\n.mini-title-bar.full .left-push .name {font-size: 13px;text-align: left;color: #fff;\r\n    font-weight: 700;}\n.sports-page .news-cell.blue-bg {background: #007b4a;}\n.sports-page .desc {width: 100%;text-align: center;}\n.sports-page .news-cell.blue-bg .desc span {font-size: 14px;}\n.sports-page .screen-detail {overflow-x: hidden;}\n.inner {padding: 20px 15px;}\n.sports-part {display: flex;flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n    width: 767px;\r\n    margin: 0;\r\n}\n.sports-part .sports {\r\n    width: calc(25% - 10px);\r\n    margin: 0 5px 10px 5px;\r\n    text-align: center;\r\n}\n.sports-part .sports a {display: block;}\n.sports-part .sports a:hover h4 {background: #007b4a;}\n.sports-part .sports figure {position: relative;overflow: hidden;padding-top: 79%;border-radius: 10px 10px 0 0;}\n.sports-part .sports figure img {position: absolute;top: 50%;left: 50%;-webkit-transform: translate(-50%,-50%);transform: translate(-50%,-50%);}\n.sports h4 {margin: 0;background: #000;color: #fff;text-align: center;font-size: 17px;padding: 8px 0; transition: .3s;}\n.change-pwd-section h5 {color: #fff;text-transform: uppercase;font-weight: 700; font-size: 18px;margin-bottom: 30px;}\n.result-section {border-top: 1px solid #fff;}\n.result-section .result-title > div {color: #fff;font-weight: 700;letter-spacing: 1px;}\n.result-section .result-title .col-2 {text-align: center;}\n.result-section .result.col {align-items: center;}\n.result-section .result p {margin: 0;}\n.result-section .result h6 {margin: 0;color: #000;text-align: center;font-weight: 700;font-size: 17px;}\n.abt-title {margin: 0;}\n.profile-section .result h5 {margin: 0;}\n.match-config h5 {text-transform: capitalize;}\n.match-config h5 span {font-weight: 400;font-size: 14px;color: #000;}\n.match-config h6 {font-size: 14px;color: #000;font-weight: 700;}\nh6 span {font-weight: 400;}\n.two h6 {display: inline-block;}\n.betstake-section h5 {font-size: 13px;}\n.use-stake {border: 2px solid #000;border-radius: 5px;padding: 10px;}\n.use-stake h5 {color: #000;}\n.use-stake ul {margin: 10px 0 10px 10px;}\n.use-stake ul li {display: block;position: relative;padding: 0 0 0 17px;margin-bottom: 6px;}\n.use-stake ul li:before {content: \"\";display: block;position: absolute;top: 50%;left: 0;width: 8px;height: 8px;-webkit-transform: translate(0,-50%);transform: translate(0,-50%);background: #007b4a;border-radius: 100%;}\n.use-stake ul li:last-child {margin-bottom: 0;}\n.click-betting {padding: 20px 0;}\n.click-betting h5 {color: #000;margin-bottom: 10px;}\n.click-button {display: inline-block;background: #007b4a;border-radius: 20px;padding: 2px;}\n.click-button a {border-radius: 20px;color: #fff;padding: 3px 10px;display: inline-block;font-size: 12px;font-weight: 600;}\n.click-button a:hover {background: #000;}\n.click-button a.active {background: #000;}\n.click-betting form {padding-top: 12px;align-items: center;display: flex;}\n.click-betting form input {margin-right: 35px;border-radius: 5px;\r\n    border: 1px solid #000;\r\n    background: #efefef;\r\n    height: 24px;\r\n    text-align: center;\r\n    font-weight: 600;\r\n    color: #000;}\n.click-betting form button {border-radius: 20px;}\n.bet-list {text-align: center;}\n.bet-list a {width: 39%;margin: 0 4px 8px 4px;}\n.bet-list a.active {background: #007b4a;color: #fff;}\n.betstake-section .saves {width: 100%;margin-top: 13px;}\n.score-part {\r\n    flex: 1;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding-right: 24px;\r\n}\n.match-score {flex: 1;}\n.match-score span {font-size: 13px;line-height: 20px;font-weight: 600; display: block;color: #fff;text-align: right;}\n.term-header .mini-title-bar.full {flex: 1;}\n.term-header .mini-title-bar.full .left-push {text-transform: none;padding: 10px 10px;}\n.term-header .left-push .bold{color: #fff;}\n.term-footer .ft-tab {width: 50%;padding: 15px 0;}\n.term-footer .ft-tab span{font-weight: 700;color: #fff;}\n.term-footer .ft-tab.agree {background: #007b4a}\n.term-footer .ft-tab.agree:before {background: #000;}\n.term-footer .ft-tab.disagree {background: #000;}\n.term-section .screen-area {background-size: cover !important;min-height: calc(100vh - 85px);    background-position: center center !important;position: relative;}\n.term-section .screen-area:before {content: \"\";display: block;position: absolute;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,0.6);}\n.term-section .inner {position:relative;}\n.term-section p {color: #fff;font-weight: 600;}\n.term-section ul {margin: 0 0 20px 0;}\n.term-section ul li {display: block;padding: 0 0 0 14px;position: relative;color: #fff;font-weight: 600;}\n.term-section ul li:before {content: \"\";display: block;position: absolute;top: 50%;left: 0;width: 8px;height: 8px;background: #fff;border-radius: 100%;-webkit-transform: translate(0,-50%);transform: translate(0,-50%);}\n.ball-running .col-6 {cursor: not-alloweds;pointer-events: none;}\n.ball-run {position: absolute;top: 0;left: 0;z-index: 9;background: rgba(0,0,0,0.5);width: 100%;height: 100%;color: #fff;text-transform: uppercase;font-weight: 700;font-size: 15px;cursor: not-allowed;}\n.ball-run span {position: absolute;top: 50%;left: 50%;-webkit-transform: translate(-50%,-50%);transform: translate(-50%,-50%);width: 100%;text-align: center;}\n.open-ball:before {width: 100%;height: 100%;position: absolute;top: 0;left: 0;content: \" \";border-radius: 100%;border: 1px solid #fff;background: #fff;box-sizing: border-box;-webkit-animation: pulsate 1.5s ease-out;animation: pulsate 1.5s ease-out;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;-webkit-animation-delay: 1.1s;animation-delay: 1.1s;opacity: .5;}\n.open-ball {position: relative;z-index: 2;width: 9px;height: 9px;border-radius: 100%;display: inline-block;top: 0;}\n.open-ball.left {left: -10px;}\n.open-ball.right {right: -10px;}\n@keyframes pulsate {0% {-webkit-transform: scale(1);transform: scale(1);opacity: 0}50% {opacity: 1}100% {-webkit-transform: scale(2.5);transform: scale(2.5);opacity: 0}}\n@-webkit-keyframes pulsate {0% {-webkit-transform: scale(1);transform: scale(1);opacity: 0}50% {opacity: 1}100% {-webkit-transform: scale(2.5);transform: scale(2.5);opacity: 0}}\n.icdc-section .grey.col {padding: 6px 35px;}\n.icdc-section .icdc-part .col {padding: 0 5px;}\n.row-line {font-weight: 500;}\n.date-col {font-weight: 500;}\n.upcoming-match .score-block {opacity: 0.5;pointer-events: none;cursor: not-allowed;}\n@-webkit-keyframes blink{\r\n0%{opacity: 0;}\r\n50%{opacity: .5;}\r\n100%{opacity: 1;}}\n@keyframes blink{\r\n0%{opacity: 0;}\r\n50%{opacity: .5;}\r\n100%{opacity: 1;}}\n.star.yellow img {-webkit-animation: blink 1s linear infinite;animation: blink 1s linear infinite;}\n.bethis-section .icdc-part .col-2:last-child span {color: #ff0000;}\n.profit-section .inner .col {padding: 5px 0;}\n.profit-section .bold {line-height: 1.2;}\n.profit-section .read-more {padding: 3px 10px;}\n.profit-section .read-more:hover {background: #000;}\n.bet-popup {width: 550px;padding: 0;overflow: hidden;}\n.bet-popup .mini-title-bar.full {box-shadow: none;}\n.fancybox-slide--html .fancybox-close-small {width: 34px;height: 34px;background: #000;padding: 5px;}\n.fancybox-button svg path {fill: #fff;}\n.current-match .score-block .left-push{display: flex;align-items: center;justify-content: space-between;}\n.current-match .score-block .left-push .read-more {padding: 3px 10px;}\n/* ============================================================================\r\nresponsive.css\r\n===============================================================================*/\n/* CSS Document */\n/* Table of Contents\r\n-----------------------------------------------------------------------------\r\n\t1. Mobile\r\n\t2. Large Mobile\r\n\t3. iPad\r\n\t4. large desktop\r\n\t5. Other\r\n*/\n/* 1. Mobile responsive css 640px\r\n------------------------------------------------------------------------------*/\n@media (max-width:640px) {\r\n    .sports-part {width: 93%;}\r\n}\n/* 2. Large Mobile responsive css 640px\r\n------------------------------------------------------------------------------*/\n@media (min-width:641px) and (max-width:767px) {\r\n\r\n}\n/* 3. iPad responsive css 768px to 1023px\r\n------------------------------------------------------------------------------*/\n@media (min-width:768px) and (max-width:1023px) {\r\n\r\n}\n/* 4. large desktop responsive css 1024px to 1199px\r\n------------------------------------------------------------------------------*/\n@media (min-width:1024px) and (max-width:1199px) {\t\r\n\r\n}\n/* 5. Other media-query\r\n------------------------------------------------------------------------------*/\n@media (max-width:481px) {\t\r\n    .sports-part .sports {width: calc(50% - 10px);}\r\n    .open-ball {top: -2px;width: 6px;height: 6px;}\r\n    .icdc-section .grey.col {padding: 6px 15px;}\r\n    .icdc-part .col-2 span {font-size: 12px;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL21vYmlsZS5jb21wb25lbnQuY3NzIiwibm9kZV9tb2R1bGVzL25neC1zbWFydC1tb2RhbC9uZ3gtc21hcnQtbW9kYWwuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxnSkFBZ0o7QUFGaEosaUJBQWlCO0FDQWpCO0VBQ0UsaUJBQWlCLEVBQUU7QUFFckI7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUU7QUFFcEI7RUFDRSxnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLDhCQUE4QjtFQUM5QixhQUFhLEVBQUU7QUFDZjtJQUNFLHFDQUFxQyxFQUFFO0FBQ3pDO0lBQ0UsOEJBQThCLEVBQUU7QUFFcEM7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUJBQXFCLEVBQUU7QUFDdkI7SUFDRSxXQUFXLEVBQUU7QUFDZjtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsdUNBQXVDLEVBQUU7QUFFN0M7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1SEFBdUg7RUFDdkgsV0FBVztFQUNYLHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBRTtBQUVwQztFQUNFLG1CQUFtQjtFQUNuQixlQUFlLEVBQUU7QUFFbkI7OzRCQUU0QjtBQUM1QjtFQUNFLCtEQUF1RDtFQUF2RCx1REFBdUQ7RUFBdkQsNEZBQXVELEVBQUU7QUFFM0Q7RUFDRSwyQ0FBbUM7VUFBbkMsbUNBQW1DLEVBQUU7QUFDckM7SUFDRSx3Q0FBZ0M7WUFBaEMsZ0NBQWdDLEVBQUU7QUFDcEM7SUFDRSwyQ0FBbUM7WUFBbkMsbUNBQW1DLEVBQUU7QUFFekM7RUFDRSwwQ0FBa0M7VUFBbEMsa0NBQWtDLEVBQUU7QUFDcEM7SUFDRSx3Q0FBZ0M7WUFBaEMsZ0NBQWdDLEVBQUU7QUFDcEM7SUFDRSwwQ0FBa0M7WUFBbEMsa0NBQWtDLEVBQUU7QUFFeEM7RUFDRSwyQ0FBbUM7VUFBbkMsbUNBQW1DLEVBQUU7QUFDckM7SUFDRSx3Q0FBZ0M7WUFBaEMsZ0NBQWdDLEVBQUU7QUFDcEM7SUFDRSwyQ0FBbUM7WUFBbkMsbUNBQW1DLEVBQUU7QUFFekM7RUFDRSwwQ0FBa0M7VUFBbEMsa0NBQWtDLEVBQUU7QUFDcEM7SUFDRSx3Q0FBZ0M7WUFBaEMsZ0NBQWdDLEVBQUU7QUFDcEM7SUFDRSwwQ0FBa0M7WUFBbEMsa0NBQWtDLEVBQUU7QUQ1RnhDLGtCQUFrQjtBQUVsQjs7Ozs7Ozs7O0VBU0U7QUFFRjtnRkFDZ0Y7QUFDaEY7O0NBRUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsNkNBQTZDLENBQUMsMENBQTBDLENBQUM7QUFFL1AsWUFBWSw4QkFBOEIsQ0FBQyxvQ0FBb0MsQ0FBQyxhQUFhLENBQUM7QUFDOUYsMEdBQTBHLGVBQWUsQ0FBQztBQUMxSCxJQUFJLFlBQVksQ0FBQztBQUVqQixnS0FBZ0sseUJBQXlCLENBQUMsY0FBYyxDQUFDO0FBQ3pNLDJDQUEyQyxjQUFjLEVBQUU7QUFFM0Qsd0JBQXdCLFlBQVksQ0FBQyxlQUFlLEVBQUU7QUFDdEQsWUFBWSxZQUFZLEVBQUU7QUFDMUIsTUFBTSxRQUFRLEVBQUU7QUFDaEIsU0FBUyxZQUFZLEVBQUU7QUFDdkIsa0JBQWtCLGFBQWEsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRTtBQUM3RixZQUFZLHNCQUFzQixFQUFFO0FBQ3BDLG1CQUFtQixXQUFXLEVBQUU7QUFDaEMsWUFBWSxlQUFlLENBQUM7QUFFNUI7Z0ZBQ2dGO0FBQ2hGLE1BQU0sY0FBYyxDQUFDLGVBQWUsQ0FBQyxtQ0FBbUMsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLGlCQUFpQixrQkFBa0IsdUJBQXVCLEVBQUU7QUFFdEwsd0JBQXdCLG1CQUFtQixDQUFDLG1CQUFtQixZQUFZLENBQUM7QUFDNUUsSUFBSSxlQUFlLEVBQUU7QUFDckIsSUFBSSxlQUFlLEVBQUU7QUFDckIsSUFBSSxlQUFlLEVBQUU7QUFDckIsSUFBSSxlQUFlLEVBQUU7QUFDckIsSUFBSSxlQUFlLGtCQUFrQixnQkFBZ0IsMEJBQTBCLGlCQUFpQixrQkFBa0IsQ0FBQztBQUNuSCxJQUFJLGVBQWUsaUJBQWlCLFVBQVUsQ0FBQztBQUUvQyxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUM7QUFFekYsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUM7QUFDakMsT0FBTyxlQUFlLEVBQUUsY0FBYyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLDBCQUEwQixDQUFDO0FBRXhILElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDO0FBQ2pDLE9BQU8sZUFBZSxFQUFFLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQztBQUVwSSxZQUFZLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyw4QkFBOEIsQ0FBQztBQUNuSyxjQUFjLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRTtBQUV6RyxJQUFJLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7QUFFckU7Z0ZBQ2dGO0FBQ2hGLElBQUksWUFBWSxDQUFDLG1CQUFtQix1QkFBdUIsQ0FBQztBQUU1RDtnRkFDZ0Y7QUFDaEYsRUFBRSxjQUFjLEFBQW9GLGdCQUFnQixDQUFDO0FBQ3JILFFBQVEsY0FBYyxDQUFDLHNCQUFzQixDQUFDO0FBQzlDLHFCQUFxQixlQUFlLENBQUM7QUFDckMsU0FBUyxjQUFjLENBQUM7QUFFeEI7Z0ZBQ2dGO0FBQ2hGLDBHQUEwRyx5QkFBeUIsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUU7QUFDak0sVUFBVSx5QkFBeUIsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsbUNBQW1DLENBQUMsaUJBQWlCLENBQUM7QUFFdEssaUVBQWlFLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDO0FBQ3pMLHdEQUF3RCxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7QUFFckY7Z0ZBQ2dGO0FBQ2hGLE9BQU8sa0JBQWtCLENBQUMsMEJBQTBCLENBQUM7QUFDckQsSUFBSSxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQztBQUUzQztnRkFDZ0Y7QUFDaEYsb0JBQW9CO0FBQ3BCLFVBQVUsV0FBVyxDQUFDLFFBQVEsRUFBRTtBQUNoQyxZQUFZLGVBQWUsQ0FBQyxXQUFXLENBQUM7QUFDeEMsZ0JBQWdCLGFBQWEsQ0FBQyw4Q0FBOEMsQ0FBQztBQUM3RSxNQUFNLGNBQWMsK0JBQStCLFFBQVEsVUFBVSxrQkFBa0Isb0JBQW9CLENBQUM7QUFDNUcsd0RBQXdELFVBQVUsQ0FBQztBQUNuRSxRQUFRLFdBQVcsQ0FBQztBQUNwQixRQUFRLFdBQVcsQ0FBQztBQUNwQixRQUFRLFdBQVcsQ0FBQztBQUNwQixRQUFRLGNBQWMsQ0FBQztBQUN2QixRQUFRLFdBQVcsQ0FBQztBQUNwQixRQUFRLFdBQVcsQ0FBQztBQUNwQixRQUFRLFdBQVcsQ0FBQztBQUNwQixRQUFRLFdBQVcsQ0FBQztBQUNwQixRQUFRLFdBQVcsVUFBVSxDQUFDO0FBQzlCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsT0FBTyxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLGlCQUFpQixZQUFZLENBQUM7QUFDckMsUUFBUSxpQkFBaUIsQ0FBQztBQUMxQixPQUFPLG9CQUFvQixDQUFDO0FBQzVCLGFBQWEsb0JBQW9CLENBQUM7QUFDbEMsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQixZQUFZLG9CQUFvQixDQUFDO0FBQ2pDLE9BQU8sb0JBQW9CLENBQUM7QUFDNUIsV0FBVyw2QkFBNkIsQ0FBQztBQUN6QyxjQUFjLG9CQUFvQixDQUFDO0FBQ25DLGFBQWEsb0JBQW9CLENBQUM7QUFDbEMsY0FBYyxlQUFlLEVBQUU7QUFDL0IsV0FBVyxvQkFBb0IsQ0FBQztBQUNoQyxZQUFZLGVBQWUsQ0FBQztBQUM1QixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLHVCQUF1QixvQkFBb0IsWUFBWSxnQkFBZ0IsQ0FBQztBQUN4RSw2QkFBNkIsaUJBQWlCLENBQUM7QUFDL0MscUJBQXFCLG9CQUFvQixZQUFZLGdCQUFnQixDQUFDO0FBQ3RFLDJCQUEyQixvQkFBb0IsQ0FBQztBQUNoRCxlQUFlLHdCQUF3QixXQUFXLGdCQUFnQixDQUFDO0FBQ25FLHFCQUFxQix3QkFBd0IsQ0FBQztBQUM5QyxTQUFTLHNDQUFzQyxjQUFjLG9CQUFvQixDQUFDO0FBQ2xGLG9CQUFvQixpQkFBaUIsQ0FBQztBQUN0QyxRQUFRLGdCQUFnQixpQkFBaUIsWUFBWSxxQkFBcUIsQ0FBQztBQUMzRSxRQUFRLG9CQUFvQixhQUFhLFlBQVksaUJBQWlCLG1CQUFtQjtBQUN6RixrQkFBa0IsZ0JBQWdCLGNBQWMsQUFBb0YsZ0JBQWdCLENBQUM7QUFDckosY0FBYyxpQkFBaUIsQ0FBQztBQUNoQztJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CLGdCQUFnQixtQkFBbUI7Q0FDekQ7QUFDRCxrQkFBa0Isb0JBQW9CLFlBQVksQ0FBQztBQUVuRCxZQUFZO0FBQ1osUUFBUSxXQUFXLENBQUMsWUFBWSxFQUFFO0FBQ2xDLG9CQUFvQixlQUFlLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLHNDQUFzQyxDQUFDO0FBQzVHLHdCQUF3QixjQUFjLENBQUMsZ0JBQWdCLEVBQUU7QUFDekQsWUFBWSxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixFQUFFO0FBQzdHLGFBQWEsY0FBYyxDQUFDLFdBQVcsQ0FBQyxhQUFhLG9CQUFvQixvQkFBb0IsRUFBRTtBQUMvRixPQUFPLHNCQUFzQixDQUFDLGFBQWEsRUFBRTtBQUM3QyxXQUFXLGVBQWUsQ0FBQyxZQUFZLEVBQUU7QUFDekMsb0JBQW9CLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLEVBQUU7QUFDOUcsZUFBZSxlQUFlLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFO0FBQ2pFLGlCQUFpQixlQUFlLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLG1CQUFtQiwyQkFBMkIsQ0FBQztBQUN4SyxjQUFjLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLEVBQUU7QUFDekksY0FBYyxlQUFlLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsRUFBRTtBQUNwRix1QkFBdUIsY0FBYyxDQUFDLHVCQUF1QixFQUFFO0FBQy9ELHlCQUF5QixZQUFZLEVBQUU7QUFDdkMsYUFBYSxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUE2RSxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsdUJBQXVCLEVBQUU7QUFDak8saUJBQWlCLGVBQWUsQ0FBQyxZQUFZLEVBQUU7QUFDL0MsYUFBYSxlQUFlLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLGlCQUFpQixtQkFBbUIsQ0FBQztBQUM3SCxTQUFTLGVBQWUsQ0FBQyxZQUFZLEVBQUU7QUFDdkMsVUFBVSxzQkFBc0IsRUFBRTtBQUNsQyx3QkFBd0IsZUFBZSxDQUFDLDJCQUEyQixDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsSUFBSSwyQkFBMkIsRUFBRTtBQUU5SyxTQUFTO0FBQ1QsS0FBSyxXQUFXLENBQUMsWUFBWSxDQUFDO0FBQzlCLFFBQVE7QUFDUixXQUFXO0FBQ1gsYUFBYTtBQUNiLGdDQUFnQztBQUVoQyxZQUFZO0FBQ1osUUFBUSxXQUFXLENBQUMsWUFBWSxFQUFFO0FBQ2xDLG9CQUFvQixjQUFjLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFO0FBQ2xFLFNBQVMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLG1DQUFtQyxtQkFBbUIsaUJBQWlCLENBQUM7QUFDN0osZ0JBQWdCLGVBQWUsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLEVBQUU7QUFDdEYsb0JBQW9CLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsV0FBVyxFQUFFO0FBQ3ZHLDhCQUE4QixtQkFBbUI7SUFDN0MsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTLENBQUM7QUFDZCw0REFBNEQsV0FBVyxDQUFDO0FBQ3hFLGdDQUFnQyxXQUFXLENBQUM7QUFDNUMsaUNBQWlDLFdBQVcsQ0FBQztBQUM3QyxtQ0FBbUMsV0FBVyxDQUFDO0FBQy9DLGNBQWMsZUFBZSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLFdBQVcsU0FBUyxDQUFDO0FBQ3ZKLHFCQUFxQixZQUFZLENBQUM7QUFDbEMsZ0JBQWdCLDBCQUEwQixFQUFFO0FBQzVDLHNCQUFzQixRQUFRLENBQUM7QUFDL0IsZ0JBQWdCLFlBQVksZUFBZSxvQkFBb0IsWUFBWSxhQUFhLG1CQUFtQixPQUFPLFlBQVksQUFBcUYsZ0JBQWdCLENBQUM7QUFDcE8sb0JBQW9CLFlBQVksQ0FBQztBQUNqQyxzQkFBc0IsUUFBUSxDQUFDO0FBRS9CLGNBQWMsZUFBZSxDQUFDLFlBQVksRUFBRTtBQUM1QyxjQUFjLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLDhCQUE4QixFQUFFO0FBQzlHLG1CQUFtQixZQUFZLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRTtBQUN4SSxvQkFBb0Isc0JBQXNCLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsbUNBQW1DLG1CQUFtQixpQkFBaUIsZ0JBQWdCLENBQUM7QUFDN1AseUJBQXlCLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQyxpQkFBaUIsc0JBQXNCLG1CQUFtQixXQUFXLENBQUM7QUFDOUosMkJBQTJCLG9CQUFvQixZQUFZLEVBQUU7QUFDN0QsaUNBQWlDLFFBQVEsQ0FBQztBQUMxQywyQkFBMkIsWUFBWSxlQUFlLG9CQUFvQixZQUFZLGFBQWEsbUJBQW1CLE9BQU8sWUFBWSxBQUFxRixnQkFBZ0IsQ0FBQztBQUMvTywwQkFBMEIsWUFBWSxDQUFDO0FBQ3ZDLGlDQUFpQyxRQUFRLENBQUM7QUFDMUMsZ0JBQWdCLGVBQWUsQ0FBQyxZQUFZLG1CQUFtQixFQUFFO0FBQ2pFLGNBQWMsZUFBZSxFQUFFO0FBQy9CLGlCQUFpQixtQkFBbUIsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGlDQUFpQyxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixFQUFFO0FBQ2xLLFlBQVksbUJBQW1CLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxpQ0FBaUMsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLEVBQUU7QUFDNUosT0FBTyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsRUFBRTtBQUM5RyxZQUFZLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLDJCQUEyQixDQUFDO0FBQ3pJLGNBQWMsWUFBWSxDQUFDO0FBQzNCLG9CQUFvQixlQUFlLENBQUM7QUFDcEMsVUFBVSxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUU7QUFDdEgsT0FBTyxjQUFjLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLEVBQUU7QUFDcEcsV0FBVyxZQUFZLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0FBQzdELFdBQVcsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFO0FBQzlHLFdBQVcsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUE2RSxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRSxzQkFBc0IsQ0FBQyxtREFBbUQsQUFBZ0csMkNBQTJDLENBQXFJLDJCQUEyQixFQUFFO0FBQ3htQixpQkFBaUIsc0JBQXNCLENBQUMsY0FBYyxFQUFFO0FBQ3hELDZCQUE2QixjQUFjLEVBQUU7QUFDN0Msc0NBQXNDLGVBQWUsRUFBRTtBQUN2RCxvQkFBb0IsaUJBQWlCLENBQUMsdUJBQXVCLEVBQUU7QUFDL0QsK0JBQStCLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRTtBQUNoRSxjQUFjLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxpQ0FBaUMsQ0FBQyxvQkFBb0IsaUJBQWlCLG9CQUFvQixDQUFDO0FBQzFJLDJCQUEyQixjQUFjLEVBQUU7QUFDM0MseUJBQXlCLFdBQVcsRUFBRTtBQUN0QywwQkFBMEIsV0FBVyxDQUFDLGlCQUFpQixtQkFBbUIsQ0FBQztBQUMzRSwyQkFBMkIsb0JBQW9CLENBQUMsbUJBQW1CLGdCQUFnQixDQUFDO0FBQ3BGLHlCQUF5QixvQkFBb0IsZ0JBQWdCLENBQUM7QUFDOUQsd0RBQXdELFdBQVcsRUFBRTtBQUNyRSw4RUFBOEUsWUFBWSxDQUFDO0FBQzNGLDZCQUE2QixnQkFBZ0IsRUFBRTtBQUMvQyx1Q0FBdUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsb0JBQW9CLEVBQUU7QUFDMUosb0JBQW9CLFlBQVksRUFBRTtBQUNsQyw2QkFBNkIsY0FBYyxFQUFFO0FBQzdDLFlBQVksZUFBZSxDQUFDLFlBQVksRUFBRTtBQUMxQyxlQUFlLG1CQUFtQixFQUFFO0FBQ3BDLG1DQUFtQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUU7QUFDdkUsMENBQTBDLGFBQWEsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtBQUNySSx3REFBd0QsY0FBYyxFQUFFO0FBQ3hFLGlEQUFpRCxjQUFjLEVBQUU7QUFDakUsb0RBQW9ELGNBQWMsRUFBRTtBQUNwRSxtQ0FBbUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFO0FBQ3ZFLGlCQUFpQixjQUFjLENBQUMsZ0JBQWdCLENBQUMsaUNBQWlDLEVBQUU7QUFDcEYsNEJBQTRCLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsaUNBQWlDLEVBQUU7QUFDdEksNkJBQTZCLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUU7QUFDbEcsd0JBQXdCLGFBQWEsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0FBQ3pHLDZCQUE2QixZQUFZLGlCQUFpQixnQkFBZ0IsQ0FBQztBQUMzRSxvQ0FBb0MsWUFBWSxhQUFhLENBQUM7QUFDOUQsZ0JBQWdCLGNBQWMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLEVBQUU7QUFDNUcscUJBQXFCLGVBQWUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFO0FBQzlELGlCQUFpQixjQUFjLENBQUMsb0JBQW9CLEVBQUU7QUFDdEQsd0JBQXdCLHNCQUFzQixDQUFDLFlBQVksRUFBRTtBQUM3RCwrQ0FBK0MsZUFBZSxFQUFFO0FBQ2hFLDhDQUE4QyxnQkFBZ0IsRUFBRTtBQUNoRSxZQUFZLGVBQWUsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQTZFLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFO0FBQy9LLHlCQUF5QixzQkFBc0IsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLGFBQWEsY0FBYyxnQkFBZ0IsQ0FBQztBQUMvSyx3QkFBd0Isc0JBQXNCLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG9CQUFvQixhQUFhLGNBQWMsZ0JBQWdCLENBQUM7QUFDL0ssK0JBQStCLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLHlDQUF5QyxDQUE2RSxpQ0FBaUMsRUFBRTtBQUMvUixnQ0FBZ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMseUNBQXlDLENBQTZFLGlDQUFpQyxFQUFFO0FBQ2hTLGtCQUFrQixZQUFZLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRTtBQUN2RyxZQUFZLGVBQWUsQ0FBQyxZQUFZLEVBQUU7QUFDMUMscUJBQXFCLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQywyQkFBMkIsQ0FBQyx1QkFBdUIsQ0FBNkUsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixFQUFFO0FBQ3RXLDJCQUEyQixpQkFBaUIsWUFBWSxDQUFDO0FBQ3pELHlDQUF5QyxnQkFBZ0IsRUFBRTtBQUMzRCxrQkFBa0IsY0FBYyxFQUFFO0FBQ2xDLGNBQWMsY0FBYyxFQUFFO0FBQzlCLHFCQUFxQixhQUFhLENBQUMsc0JBQXNCLGFBQWEsRUFBRTtBQUN4RSxpQ0FBaUMsZUFBZSxFQUFFO0FBQ2xELGdDQUFnQyxnQkFBZ0IsRUFBRTtBQUNsRCxZQUFZLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBNkUsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLEVBQUU7QUFDOVIsaUNBQWlDLFlBQVksRUFBRTtBQUMvQyxvQkFBb0IsaUJBQWlCLEVBQUU7QUFDdkMsMEJBQTBCLG9CQUFvQixZQUFZLENBQUM7QUFDM0Qsb0NBQW9DLGVBQWUsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUE2RSxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRTtBQUMzUCwwQ0FBMEMsaUJBQWlCLENBQUM7QUFDNUQsb0JBQW9CLGVBQWUsQ0FBQyxZQUFZLEVBQUU7QUFFbEQscUJBQXFCO0FBQ3JCLHNCQUFzQixhQUFhLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO0FBQzVKLHdCQUF3QixjQUFjLENBQUMsZ0JBQWdCLEVBQUU7QUFDekQsMkJBQTJCLHlCQUF5QixDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUU7QUFDcEgsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRTtBQUN0SywwQkFBMEIsb0JBQW9CLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRTtBQUM1TSxpQkFBaUIsVUFBVSxFQUFFO0FBQzdCLG9CQUFvQixpQkFBaUIsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGlDQUFpQyxDQUFDLHdCQUF3QixDQUFDLG1DQUFtQyxDQUFDLHVCQUF1QixDQUFDLDBCQUEwQixDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixFQUFFO0FBQ2pTLHNCQUFzQixlQUFlLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsMEJBQTBCLENBQUMsNkJBQTZCLENBQUMsdUJBQXVCLEVBQUU7QUFDL0osNEJBQTRCLG9CQUFvQixDQUFDLHNCQUFzQixZQUFZLEVBQUU7QUFDckYsd0JBQXdCLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLEVBQUU7QUFDM0csZ0NBQWdDLFdBQVcsZ0NBQXdCLEFBQXhCLHdCQUF3QixnQkFBZ0IsQ0FBQztBQUNwRiw4QkFBOEIsV0FBVyxnQ0FBd0IsQUFBeEIsd0JBQXdCLGdCQUFnQixDQUFDO0FBQ2xGLHNDQUFzQyxXQUFXLENBQUM7QUFDbEQsOEJBQThCLG9CQUFvQixZQUFZLENBQUM7QUFDL0Qsb0NBQW9DLFdBQVcsa0NBQTBCLEFBQTFCLDBCQUEwQixDQUFDO0FBQzFFLHNDQUFzQyxXQUFXLGtDQUEwQixBQUExQiwwQkFBMEIsQ0FBQztBQUM1RSxjQUFjLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtBQUN2RixzQ0FBc0MsZUFBZSxDQUFDLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxpQkFBaUIsQ0FBNkUsbUJBQW1CLENBQTZJLDZCQUE2QixFQUFFO0FBQzNYLDRDQUE0QyxjQUFjLENBQUMsc0JBQXNCLENBQUMsb0JBQW9CLEVBQUU7QUFDeEcsY0FBYyxlQUFlLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFO0FBQzdELFlBQVksc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLG9EQUFvRCxDQUFDLGdCQUFnQixDQUE2SSw2QkFBNkIsQ0FBQyx1QkFBdUIsRUFBRTtBQUMvVyx1QkFBdUIsYUFBYSxDQUFDO0FBQ3JDLFdBQVcsbUJBQW1CLEVBQUU7QUFDaEMsaUJBQWlCLFlBQVksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLDRCQUE0QixDQUFxSSwyQkFBMkIsV0FBVyxDQUFDO0FBRXJULGNBQWM7QUFDZCxjQUFjLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixFQUFFO0FBQ3ZJLGFBQWEsZUFBZSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyx1QkFBdUIsNkJBQTZCLENBQUM7QUFDbkssaUJBQWlCLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDO0FBQ3hELGdCQUFnQixlQUFlLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxTQUFTLG9CQUFvQixDQUFDO0FBQzNJLHFCQUFxQixlQUFlLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLHVCQUF1QixFQUFFO0FBQy9GLGFBQWEsZUFBZSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRTtBQUMvRCxvRUFBb0UsZUFBZSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQTZFLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSwwQ0FBMEMsQ0FBQyx1Q0FBdUMsQ0FBQyxzQ0FBc0MsQ0FBQyxxQ0FBcUMsQ0FBQyxjQUFjLEVBQUU7QUFDaGYsZ0ZBQWdGLDJDQUEyQyxFQUFFO0FBQzdILGtDQUFrQyxlQUFlLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBNkUsbUJBQW1CLENBQUMsY0FBYyxDQUFDLDBCQUEwQixDQUFDLGtCQUFrQixDQUE2SSw2QkFBNkIsRUFBRTtBQUMxYSxnRUFBZ0UsWUFBWSxFQUFFO0FBQzlFLHVEQUF1RCxZQUFZLEVBQUU7QUFDckUsMkRBQTJELFlBQVksRUFBRTtBQUN6RSxzREFBc0QsWUFBWSxFQUFFO0FBQ3BFLDREQUE0RCxZQUFZLEVBQUU7QUFDMUUsbURBQW1ELFlBQVksRUFBRTtBQUNqRSx1REFBdUQsWUFBWSxFQUFFO0FBQ3JFLGtEQUFrRCxZQUFZLEVBQUU7QUFDaEUsWUFBWSxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQyx1QkFBdUIsQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUU7QUFDaFAsa0JBQWtCLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO0FBQ3pGLGFBQWEsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLDhCQUE4QixDQUFDLHVCQUF1QixDQUE2RSxtQkFBbUIsQ0FDakwsbUJBQW1CLEVBQUU7QUFDdkUscUNBQXFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsOEJBQThCLENBQUMsdUJBQXVCLENBQTZFLG1CQUFtQixFQUFFO0FBQ3hOLHVDQUF1Qyw4QkFBOEIsQ0FBQywwQkFBMEIsRUFBRTtBQUNsRyxtQkFBbUIsWUFBWSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRTtBQUNwRSw2Q0FBNkMsZUFBZSxFQUFFO0FBQzlELDZCQUE2QixVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsMEJBQTBCLENBQUMsaUNBQWlDLENBQStCLHlCQUF5QixFQUFFO0FBQ3ROLHVCQUF1QixnQkFBZ0IsRUFBRTtBQUN6QyxpQkFBaUIsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsRUFBRTtBQUNuRyx5QkFBeUIsZUFBZSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUU7QUFDckUsK0JBQStCLGVBQWUsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLG1DQUFtQyxDQUFDO0FBQ3RJLDhGQUE4RixjQUFjLENBQUMsa0JBQWtCLEVBQUU7QUFDakksd0JBQXdCLGVBQWUsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFO0FBQ3RGLDZCQUE2QixtQkFBbUIsRUFBRTtBQUNsRCwyRUFBMkUseUJBQXlCLEVBQUU7QUFDdEcsZUFBZSxjQUFjLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsNENBQTRDLHNCQUFzQiw2QkFBNkIsbUNBQW1DLGNBQWMsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDO0FBQzFULHNCQUFzQixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyx5Q0FBeUMsQ0FBNkUsaUNBQWlDLENBQXFJLDJCQUEyQixFQUFFO0FBQ2xZLG9CQUFvQixXQUFXLENBQUMsb0JBQW9CLEVBQUU7QUFDdEQsMkJBQTJCLGFBQWEsRUFBRTtBQUMxQywwQkFBMEIsZUFBZSxDQUFDLFlBQVksRUFBRTtBQUN4RCxvQkFBb0IsV0FBVyxDQUFDLG1CQUFtQixDQUFxSSwyQkFBMkIsR0FBRztBQUN0Tix1Q0FBdUMsb0JBQW9CLGVBQWUsQ0FBQztBQUUzRTtFQUNFO0lBQ0UsMEJBQTBCO0dBQzNCO0VBQ0Q7SUFDRSxxQ0FBcUM7R0FDdEM7Q0FDRjtBQUNEO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsdUNBQXVDO0NBQzFDO0FBQ0Q7SUFDSSxZQUFZLGtCQUFrQjtJQUM5QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiwwQkFBMEI7Q0FDN0I7QUFDRCx1Q0FBdUMsZ0JBQWdCLGlCQUFpQixZQUFZO0lBQ2hGLGlCQUFpQixDQUFDO0FBQ3RCLGlDQUFpQyxvQkFBb0IsQ0FBQztBQUN0RCxvQkFBb0IsWUFBWSxtQkFBbUIsQ0FBQztBQUNwRCw0Q0FBNEMsZ0JBQWdCLENBQUM7QUFDN0QsNkJBQTZCLG1CQUFtQixDQUFDO0FBQ2pELFFBQVEsbUJBQW1CLENBQUM7QUFDNUIsY0FBYyxjQUFjLGdCQUFnQjtJQUN4Qyw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFVBQVU7Q0FDYjtBQUNEO0lBQ0ksd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixtQkFBbUI7Q0FDdEI7QUFDRCx3QkFBd0IsZUFBZSxDQUFDO0FBQ3hDLGlDQUFpQyxvQkFBb0IsQ0FBQztBQUN0RCw2QkFBNkIsbUJBQW1CLGlCQUFpQixpQkFBaUIsNkJBQTZCLENBQUM7QUFDaEgsaUNBQWlDLG1CQUFtQixTQUFTLFVBQVUsd0NBQWdDLEFBQWhDLGdDQUFnQyxDQUFDO0FBQ3hHLFlBQVksVUFBVSxpQkFBaUIsWUFBWSxtQkFBbUIsZ0JBQWdCLGVBQWUsQ0FBcUYsZ0JBQWdCLENBQUM7QUFDM00sd0JBQXdCLFlBQVksMEJBQTBCLGlCQUFpQixDQUFDLGdCQUFnQixvQkFBb0IsQ0FBQztBQUVySCxpQkFBaUIsMkJBQTJCLENBQUM7QUFDN0MscUNBQXFDLFlBQVksaUJBQWlCLG9CQUFvQixDQUFDO0FBQ3ZGLHNDQUFzQyxtQkFBbUIsQ0FBQztBQUMxRCw2QkFBNkIsb0JBQW9CLENBQUM7QUFDbEQsMkJBQTJCLFVBQVUsQ0FBQztBQUN0Qyw0QkFBNEIsVUFBVSxZQUFZLG1CQUFtQixpQkFBaUIsZ0JBQWdCLENBQUM7QUFDdkcsWUFBWSxVQUFVLENBQUM7QUFDdkIsNkJBQTZCLFVBQVUsQ0FBQztBQUN4QyxrQkFBa0IsMkJBQTJCLENBQUM7QUFDOUMsdUJBQXVCLGlCQUFpQixnQkFBZ0IsWUFBWSxDQUFDO0FBQ3JFLGtCQUFrQixnQkFBZ0IsWUFBWSxpQkFBaUIsQ0FBQztBQUNoRSxTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsc0JBQXNCLENBQUM7QUFFaEMsc0JBQXNCLGdCQUFnQixDQUFDO0FBQ3ZDLFlBQVksdUJBQXVCLG1CQUFtQixjQUFjLENBQUM7QUFDckUsZUFBZSxZQUFZLENBQUM7QUFDNUIsZUFBZSx5QkFBeUIsQ0FBQztBQUN6QyxrQkFBa0IsZUFBZSxtQkFBbUIsb0JBQW9CLG1CQUFtQixDQUFDO0FBQzVGLHlCQUF5QixZQUFZLGVBQWUsbUJBQW1CLFNBQVMsUUFBUSxXQUFXLFlBQVkscUNBQTZCLEFBQTdCLDZCQUE2QixvQkFBb0Isb0JBQW9CLENBQUM7QUFDckwsNkJBQTZCLGlCQUFpQixDQUFDO0FBQy9DLGdCQUFnQixnQkFBZ0IsQ0FBQztBQUNqQyxtQkFBbUIsWUFBWSxvQkFBb0IsQ0FBQztBQUNwRCxlQUFlLHNCQUFzQixvQkFBb0Isb0JBQW9CLGFBQWEsQ0FBQztBQUMzRixpQkFBaUIsb0JBQW9CLFlBQVksa0JBQWtCLHNCQUFzQixnQkFBZ0IsaUJBQWlCLENBQUM7QUFDM0gsdUJBQXVCLGlCQUFpQixDQUFDO0FBQ3pDLHdCQUF3QixpQkFBaUIsQ0FBQztBQUMxQyxxQkFBcUIsa0JBQWtCLG9CQUFvQixjQUFjLENBQUM7QUFDMUUsMkJBQTJCLG1CQUFtQixtQkFBbUI7SUFDN0QsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZLENBQUM7QUFDakIsNEJBQTRCLG9CQUFvQixDQUFDO0FBQ2pELFdBQVcsbUJBQW1CLENBQUM7QUFDL0IsYUFBYSxXQUFXLHNCQUFzQixDQUFDO0FBQy9DLG9CQUFvQixvQkFBb0IsWUFBWSxDQUFDO0FBQ3JELDBCQUEwQixZQUFZLGlCQUFpQixDQUFDO0FBQ3hEO0lBQ0ksUUFBUTtJQUNSLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0Isb0JBQW9CO0NBQ3ZCO0FBQ0QsY0FBYyxRQUFRLENBQUM7QUFDdkIsbUJBQW1CLGdCQUFnQixrQkFBa0IsaUJBQWlCLENBQUMsZUFBZSxZQUFZLGtCQUFrQixDQUFDO0FBQ3JILG1DQUFtQyxRQUFRLENBQUM7QUFDNUMsOENBQThDLHFCQUFxQixtQkFBbUIsQ0FBQztBQUN2Riw4QkFBOEIsWUFBWSxDQUFDO0FBQzNDLHNCQUFzQixXQUFXLGdCQUFnQixDQUFDO0FBQ2xELDBCQUEwQixpQkFBaUIsWUFBWSxDQUFDO0FBQ3hELDRCQUE0QixtQkFBbUIsQ0FBQztBQUNoRCxtQ0FBbUMsaUJBQWlCLENBQUM7QUFDckQsK0JBQStCLGlCQUFpQixDQUFDO0FBQ2pELDRCQUE0QixrQ0FBa0MsK0JBQStCLElBQUksOENBQThDLG1CQUFtQixDQUFDO0FBQ25LLG1DQUFtQyxZQUFZLGVBQWUsbUJBQW1CLE9BQU8sUUFBUSxZQUFZLGFBQWEsNEJBQTRCLENBQUM7QUFDdEosc0JBQXNCLGtCQUFrQixDQUFDO0FBQ3pDLGlCQUFpQixZQUFZLGlCQUFpQixDQUFDO0FBQy9DLGtCQUFrQixtQkFBbUIsQ0FBQztBQUN0QyxxQkFBcUIsZUFBZSxvQkFBb0IsbUJBQW1CLFlBQVksaUJBQWlCLENBQUM7QUFDekcsNEJBQTRCLFlBQVksZUFBZSxtQkFBbUIsU0FBUyxRQUFRLFdBQVcsWUFBWSxpQkFBaUIsb0JBQW9CLHFDQUE2QixBQUE3Qiw2QkFBNkIsQ0FBQztBQUNyTCxzQkFBc0IscUJBQXFCLHFCQUFxQixDQUFDO0FBQ2pFLFdBQVcsbUJBQW1CLE9BQU8sUUFBUSxXQUFXLDRCQUE0QixZQUFZLGFBQWEsWUFBWSwwQkFBMEIsaUJBQWlCLGdCQUFnQixvQkFBb0IsQ0FBQztBQUN6TSxnQkFBZ0IsbUJBQW1CLFNBQVMsVUFBVSx3Q0FBZ0MsQUFBaEMsZ0NBQWdDLFlBQVksbUJBQW1CLENBQUM7QUFDdEgsbUJBQW1CLFlBQVksYUFBYSxtQkFBbUIsT0FBTyxRQUFRLGFBQWEsb0JBQW9CLHVCQUF1QixpQkFBaUIsdUJBQXVCLHlDQUFpQyxBQUFqQyxpQ0FBaUMsNENBQW9DLEFBQXBDLG9DQUFvQyw4QkFBc0IsQUFBdEIsc0JBQXNCLFlBQVksQ0FBQztBQUN0UixZQUFZLG1CQUFtQixXQUFXLFdBQVcsWUFBWSxvQkFBb0Isc0JBQXNCLE9BQU8sQ0FBQztBQUNuSCxpQkFBaUIsWUFBWSxDQUFDO0FBQzlCLGtCQUFrQixhQUFhLENBQUM7QUFDaEMsb0JBQW9CLElBQUksNEJBQW9CLEFBQXBCLG9CQUFvQixVQUFVLENBQUMsS0FBSyxVQUFVLENBQUMsTUFBTSw4QkFBc0IsQUFBdEIsc0JBQXNCLFVBQVUsQ0FBQyxDQUFDO0FBQUEsNEJBQTRCLElBQUksNEJBQW9CLEFBQXBCLG9CQUFvQixVQUFVLENBQUMsS0FBSyxVQUFVLENBQUMsTUFBTSw4QkFBc0IsQUFBdEIsc0JBQXNCLFVBQVUsQ0FBQyxDQUFDO0FBQ3RPLHlCQUF5QixrQkFBa0IsQ0FBQztBQUM1QywrQkFBK0IsZUFBZSxDQUFDO0FBQy9DLFdBQVcsaUJBQWlCLENBQUM7QUFDN0IsV0FBVyxpQkFBaUIsQ0FBQztBQUM3Qiw4QkFBOEIsYUFBYSxxQkFBcUIsb0JBQW9CLENBQUM7QUFDckY7QUFDQSxHQUFHLFdBQVcsQ0FBQztBQUNmLElBQUksWUFBWSxDQUFDO0FBQ2pCLEtBQUssV0FBVyxDQUFDLENBQUM7QUFIbEI7QUFDQSxHQUFHLFdBQVcsQ0FBQztBQUNmLElBQUksWUFBWSxDQUFDO0FBQ2pCLEtBQUssV0FBVyxDQUFDLENBQUM7QUFDbEIsa0JBQWtCLDRDQUFvQyxBQUFwQyxvQ0FBb0MsQ0FBQztBQUN2RCxtREFBbUQsZUFBZSxDQUFDO0FBQ25FLDZCQUE2QixlQUFlLENBQUM7QUFDN0MsdUJBQXVCLGlCQUFpQixDQUFDO0FBQ3pDLDRCQUE0QixrQkFBa0IsQ0FBQztBQUMvQyxrQ0FBa0MsaUJBQWlCLENBQUM7QUFDcEQsWUFBWSxhQUFhLFdBQVcsaUJBQWlCLENBQUM7QUFDdEQsaUNBQWlDLGlCQUFpQixDQUFDO0FBQ25ELDZDQUE2QyxZQUFZLGFBQWEsaUJBQWlCLGFBQWEsQ0FBQztBQUNyRywyQkFBMkIsV0FBVyxDQUFDO0FBQ3ZDLHVDQUF1QyxjQUFjLG9CQUFvQiwrQkFBK0IsQ0FBQztBQUN6RyxtREFBbUQsa0JBQWtCLENBQUM7QUFNdEU7O2lGQUVpRjtBQUdqRixrQkFBa0I7QUFFbEI7Ozs7Ozs7RUFPRTtBQUVGO2dGQUNnRjtBQUNoRjtJQUNJLGNBQWMsV0FBVyxDQUFDO0NBQzdCO0FBRUQ7Z0ZBQ2dGO0FBQ2hGOztDQUVDO0FBRUQ7Z0ZBQ2dGO0FBQ2hGOztDQUVDO0FBRUQ7Z0ZBQ2dGO0FBQ2hGOztDQUVDO0FBRUQ7Z0ZBQ2dGO0FBRWhGO0lBQ0ksc0JBQXNCLHdCQUF3QixDQUFDO0lBQy9DLFlBQVksVUFBVSxXQUFXLFlBQVksQ0FBQztJQUM5Qyx5QkFBeUIsa0JBQWtCLENBQUM7SUFDNUMsd0JBQXdCLGdCQUFnQixDQUFDO0NBQzVDIiwiZmlsZSI6InNyYy9hcHAvbW9iaWxlL21vYmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJ1dGYtOFwiO1xyXG5AaW1wb3J0IFwifm5neC1zbWFydC1tb2RhbC9uZ3gtc21hcnQtbW9kYWwuY3NzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheToxMDAsMTAwaSwyMDAsMjAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaSw4MDAsODAwaSw5MDAsOTAwaScpO1xyXG4vKiBDU1MgRG9jdW1lbnQgKi9cclxuXHJcbi8qIFRhYmxlIG9mIENvbnRlbnRzXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0MS4gQ2xlYW4gQmFzZVxyXG5cdDIuIEJhc2UgVHlwb2dyYXBoeVxyXG5cdDMuIEltYWdlc1xyXG5cdDQuIExpbmtzXHJcblx0NS4gRm9ybXNcclxuXHQ2LiBUYWJsZXNcclxuXHQ3LiBGcmFtZXdvcmsgXHJcbiovXHJcblxyXG4vKiAxLiBDbGVhbiBCYXNlXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmh0bWwsIGJvZHksIGRpdiwgc3Bhbiwgb2JqZWN0LCBpZnJhbWUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSwgYWJiciwgYWRkcmVzcywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzYW1wLCBzbWFsbCwgc3Ryb25nLCBzdWIsIHN1cCwgdmFyLCBiLCBpLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIFxyXG5sZWdlbmQsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIGEsIG5hdiwgc2VjdGlvbiwgc3VtbWFyeSwgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIFxyXG57bWFyZ2luOjAgYXV0bzsgcGFkZGluZzowOyBib3JkZXI6MDsgb3V0bGluZTowOyBmb250LXNpemU6MTAwJTsgdmVydGljYWwtYWxpZ246YmFzZWxpbmU7IGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7IHRleHQtZGVjb3JhdGlvbjpub25lOyBsaXN0LXN0eWxlOm5vbmU7IG91dGxpbmU6bm9uZTsgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7IC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApO31cclxuXHRcclxuaHRtbCxib2R5IHsgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0Om5vbmU7IC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOyBoZWlnaHQ6IDEwMCU7fVxyXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiwgc3VtbWFyeSB7ZGlzcGxheTogYmxvY2s7fVxyXG5pbWd7Ym9yZGVyOm5vbmU7fVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgaW5wdXRbdHlwZT1cImVtYWlsXCJdLCBpbnB1dFt0eXBlPVwidGVsXCJdLCBpbnB1dFt0eXBlPVwic2VhcmNoXCJdLCB0ZXh0YXJlYSB7LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBvdXRsaW5lOiBub25lO31cclxudGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3VzLCBhLCBkaXYsIGltZyB7IG91dGxpbmU6IG5vbmU7IH1cclxuIFxyXG4uY2Y6YmVmb3JlLCAuY2Y6YWZ0ZXIgeyBjb250ZW50OiBcIlwiOyBkaXNwbGF5OiB0YWJsZTsgfVxyXG4uY2Y6YWZ0ZXIgeyBjbGVhcjogYm90aDsgfVxyXG4uY2YgeyB6b29tOiAxOyB9XHJcbi5jbGVhciB7IGNsZWFyOiBib3RoOyB9XHJcbi5jbGVhcmZpeDphZnRlciB7IGNvbnRlbnQ6IFwiLlwiOyBkaXNwbGF5OiBibG9jazsgaGVpZ2h0OiAwOyBjbGVhcjogYm90aDsgdmlzaWJpbGl0eTogaGlkZGVuOyB9XHJcbi5jbGVhcmZpeCB7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxyXG4qIGh0bWwgLmNsZWFyZml4IHsgaGVpZ2h0OiAxJTsgfVxyXG4uY2xlYXJmaXggeyBkaXNwbGF5OiBibG9jazt9XHJcblxyXG4vKiAyLiBCYXNlIFR5cG9ncmFwaHlcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuYm9keXsgY29sb3I6IzM3M2Q0ODsgZm9udC1zaXplOjEzcHg7IGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7IGZvbnQtd2VpZ2h0OjQwMDsgbGluZS1oZWlnaHQ6MjJweDsgZGlzcGxheTogZmxleDtvdmVyZmxvdzogaGlkZGVuO21pbi1oZWlnaHQ6IDEwMHZoO2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7IG1hcmdpbi1ib3R0b206MjBweDsgZm9udC13ZWlnaHQ6bm9ybWFsO2NvbG9yOiAjMDAwO31cclxuaDF7IGZvbnQtc2l6ZTozNHB4OyB9XHJcbmgyeyBmb250LXNpemU6MzZweDsgfVxyXG5oM3sgZm9udC1zaXplOjMwcHg7IH1cclxuaDR7IGZvbnQtc2l6ZToyNnB4OyB9XHJcbmg1IHtjb2xvcjogIzAwN2I0YTtsaW5lLWhlaWdodDogMjJweDtmb250LXNpemU6IDE0cHg7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtmb250LXdlaWdodDogNzAwO21hcmdpbjogMCAwIDJweCAwO31cclxuaDYge2ZvbnQtc2l6ZToxNXB4O2ZvbnQtd2VpZ2h0OiA0MDA7bWFyZ2luOiAwO31cclxuXHJcbnB7IGNvbG9yOiMzNzNkNDg7IGZvbnQtc2l6ZToxM3B4OyBmb250LXdlaWdodDo0MDA7IGxpbmUtaGVpZ2h0OjIycHg7IG1hcmdpbi1ib3R0b206MjBweDt9XHJcblxyXG51bHsgbWFyZ2luOjIwcHggMjBweDsgcGFkZGluZzowO31cclxudWwgbGl7IGZvbnQtc2l6ZToxM3B4OyAgY29sb3I6IzM3M2Q0ODsgZm9udC13ZWlnaHQ6NDAwOyBsaW5lLWhlaWdodDoyMnB4OyBwYWRkaW5nOjAgMCA1cHggMDsgbGlzdC1zdHlsZTpvdXRzaWRlIGNpcmNsZTt9XHJcblxyXG5vbHsgbWFyZ2luOjIwcHggMjBweDsgcGFkZGluZzowO31cclxub2wgbGl7IGZvbnQtc2l6ZToxM3B4OyAgY29sb3I6IzM3M2Q0ODsgZm9udC13ZWlnaHQ6NDAwOyBsaW5lLWhlaWdodDoxOHB4OyBwYWRkaW5nOjAgMCA1cHggMDsgbGlzdC1zdHlsZTogZGVjaW1hbDsgbWFyZ2luLWxlZnQ6MjBweDt9XHJcblxyXG5ibG9ja3F1b3RleyBkaXNwbGF5OmJsb2NrOyB0ZXh0LWFsaWduOmxlZnQ7IG1hcmdpbi1ib3R0b206MjBweDsgcG9zaXRpb246cmVsYXRpdmU7IGJhY2tncm91bmQ6I2YzZjNmMzsgcGFkZGluZzoyMHB4IDIwcHggMTBweCAyMHB4OyBib3JkZXItbGVmdDoycHggc29saWQgIzE1ODljYjt9XHJcbmJsb2NrcXVvdGUgcHsgZm9udC1zaXplOjEzcHg7IGZvbnQtd2VpZ2h0OjQwMDsgbGluZS1oZWlnaHQ6MTdweDsgbWFyZ2luLWJvdHRvbToxNXB4OyBwb3NpdGlvbjpyZWxhdGl2ZTsgfVxyXG5cclxuaHIge2JvcmRlcjowICMwMDAgc29saWQ7IGJvcmRlci10b3Atd2lkdGg6MXB4OyBjbGVhcjpib3RoOyBoZWlnaHQ6MDt9XHJcblxyXG4vKiAzLiBJbWFnZXNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuaW1ne2JvcmRlcjpub25lOyBib3JkZXItc3R5bGU6IG5vbmU7dmVydGljYWwtYWxpZ246IG1pZGRsZTt9XHJcblxyXG4vKiA0LiBMaW5rXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmF7Y29sb3I6IzQ3NzdhYzstd2Via2l0LXRyYW5zaXRpb246IC4zczstbW96LXRyYW5zaXRpb246IC4zczstby10cmFuc2l0aW9uOiAuM3M7LW1zLXRyYW5zaXRpb246IC4zczt0cmFuc2l0aW9uOiAuM3M7fVxyXG5hOmhvdmVye2NvbG9yOiM0Nzc3YWM7IHRleHQtZGVjb3JhdGlvbjogbm9uZTt9XHJcbmE6YWN0aXZlLCBhLmN1cnJlbnQge2NvbG9yOiAjZTg5NDFhO31cclxuYTpmb2N1cyB7b3V0bGluZTogbm9uZTt9XHJcblxyXG4vKiA1LiBGb3Jtc1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJ0ZWxcIl0sIGlucHV0W3R5cGU9XCJzZWFyY2hcIl17IGJvcmRlcjoxcHggc29saWQgI2RlZGVkZTsgcGFkZGluZzowIDE1cHg7IGNvbG9yOiM2NjY2NjY7IGZvbnQtc2l6ZToxMnB4OyBoZWlnaHQ6MzZweDsgfVxyXG50ZXh0YXJlYXsgYm9yZGVyOjFweCBzb2xpZCAjZGVkZWRlOyBwYWRkaW5nOjVweCAxNXB4OyBjb2xvcjojNjY2NjY2OyBmb250LXNpemU6MTJweDsgaGVpZ2h0OjYwcHg7IHJlc2l6ZTpub25lOyAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjsgbGluZS1oZWlnaHQ6MTZweDt9XHJcblxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwicmVzZXRcIl17IGJhY2tncm91bmQ6IzY2NjsgY3Vyc29yOnBvaW50ZXI7IGNvbG9yOiNmZmY7IGJvcmRlcjpub25lOyBoZWlnaHQ6MzBweDsgbGluZS1oZWlnaHQ6MjhweDsgZGlzcGxheTpibG9jazsgZm9udC1zaXplOjE1cHg7fVxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyLCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyeyBiYWNrZ3JvdW5kOiM2NjY7IGNvbG9yOiNmZmY7fVxyXG5cclxuLyogNi4gVGFibGVzXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbnRhYmxlIHtib3JkZXItc3BhY2luZzogMDsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTt9XHJcbnRkIHt0ZXh0LWFsaWduOiBsZWZ0OyBmb250LXdlaWdodDogbm9ybWFsO31cclxuXHJcbi8qIDcuIExheW91dCBGcmFtZXdvcmtcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogbWFpbiBjb250YWluZXIgKi9cclxuI3dyYXBwZXJ7IHdpZHRoOjEwMCU7IGZsZXg6IDE7IH1cclxuLmNvbnRhaW5lcnsgbWF4LXdpZHRoOjEwMCU7IHdpZHRoOjEwMCU7fVxyXG4uZm9vdGVyLCAucHVzaCB7aGVpZ2h0OiAyMnB4OyAvKiAucHVzaCBtdXN0IGJlIHRoZSBzYW1lIGhlaWdodCBhcyAuZm9vdGVyICovfVxyXG4uY29sIHtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtmbGV4OiAxO21hcmdpbjogMDtwYWRkaW5nOiA2cHggMTVweDthbGlnbi1pdGVtczogY2VudGVyO31cclxuLmNvbC0yLCAuY29sLTMsIC5jb2wtNCwgLmNvbC01LCAuY29sLTYsIC5jb2wtNywgLmNvbC04IHttYXJnaW46IDA7fVxyXG4uY29sLTEge3dpZHRoOiAxNSU7fVxyXG4uY29sLTIge3dpZHRoOiAyMCU7fVxyXG4uY29sLTMge3dpZHRoOiAyNSU7fVxyXG4uY29sLTQge3dpZHRoOiAzMy4zMyU7fVxyXG4uY29sLTUge3dpZHRoOiA0MCU7fVxyXG4uY29sLTYge3dpZHRoOiA1MCU7fVxyXG4uY29sLTcge3dpZHRoOiA1NSU7fVxyXG4uY29sLTgge3dpZHRoOiA4MCU7fVxyXG4uY29sLTkge3dpZHRoOiA3NSU7bWFyZ2luOiAwO31cclxuLmNlbnRlciB7dGV4dC1hbGlnbjogY2VudGVyO31cclxuLmxlZnQge3RleHQtYWxpZ246IGxlZnR9XHJcbi5ib2xkIHtmb250LXdlaWdodDogNzAwO2NvbG9yOiAjMDAwO31cclxuLmJsYWNrIHtiYWNrZ3JvdW5kOiAjMDAwO31cclxuLmJsdWUge2JhY2tncm91bmQ6ICM4ZGQyZjA7fVxyXG4ubGlnaHQtYmx1ZSB7YmFja2dyb3VuZDogI2QwZjFmZjt9XHJcbi5yZWQge2JhY2tncm91bmQ6ICNmZWFmYjI7fVxyXG4ubGlnaHQtcmVkIHtiYWNrZ3JvdW5kOiAjZmZlOWVhO31cclxuLmdyZXkge2JhY2tncm91bmQ6ICNlZmVmZWY7fVxyXG4uc2VwcmF0ZXIge2JvcmRlci10b3A6IDEuNXB4IHNvbGlkICNmZmY7fVxyXG4ubGlnaHQtZ3JlZW4ge2JhY2tncm91bmQ6ICNkMWU3ZGU7fVxyXG4uZ3JlZW4tZGFyayB7YmFja2dyb3VuZDogIzAwN2I0YTt9XHJcbi5ncmVlbi1jb2xvciB7Y29sb3I6ICMwMDdiNGE7O31cclxuLnJlZC1kYXJrIHtiYWNrZ3JvdW5kOiAjZmYwMDAwO31cclxuLnJlZC1jb2xvciB7Y29sb3I6ICNmZjAwMDA7fVxyXG4ubWVkaXVtIHtmb250LXdlaWdodDogNTAwO31cclxuLmdyZWVuLWRhcmsucmVhZC1tb3JlIHtiYWNrZ3JvdW5kOiAjMDA3YjRhO2NvbG9yOiAjZmZmO2ZvbnQtc2l6ZTogMTNweDt9XHJcbi5ncmVlbi1kYXJrLnJlYWQtbW9yZTpob3ZlciB7YmFja2dyb3VuZDogIzAwMDt9XHJcbi5yZWQtZGFyay5yZWFkLW1vcmUge2JhY2tncm91bmQ6ICNmZjAwMDA7Y29sb3I6ICNmZmY7Zm9udC1zaXplOiAxM3B4O31cclxuLnJlZC1kYXJrLnJlYWQtbW9yZTpob3ZlciB7YmFja2dyb3VuZDogI2ZmMDAwMDt9XHJcbmJ1dHRvbi5kZWxldGUge2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O3BhZGRpbmc6IDA7Y3Vyc29yOiBwb2ludGVyO31cclxuYnV0dG9uLmRlbGV0ZTpob3ZlciB7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxyXG4uc2hhZG93IHtib3gtc2hhZG93OiAwIDFweCA3cHggcmdiYSgwLDAsMCwwLjIpO3BhZGRpbmc6IDE1cHg7bWFyZ2luLWJvdHRvbTogMTVweDt9XHJcbi5zaGFkb3c6bGFzdC1jaGlsZCB7bWFyZ2luLWJvdHRvbTogMDt9XHJcbi50aXRsZSB7Zm9udC1zaXplOiAxNXB4O2ZvbnQtd2VpZ2h0OiA3MDA7Y29sb3I6ICMwMDA7cGFkZGluZy1ib3R0b206IDEwcHg7fVxyXG5idXR0b24ge2JhY2tncm91bmQ6ICMwMDdiNGE7Ym9yZGVyOiBub25lO2NvbG9yOiAjZmZmO2ZvbnQtd2VpZ2h0OiA3MDA7Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5wYWRkaW5nOiA3cHggMTJweDtmb250LXNpemU6IDEycHg7b3V0bGluZTogbm9uZTstd2Via2l0LXRyYW5zaXRpb246IC4zczstbW96LXRyYW5zaXRpb246IC4zczstby10cmFuc2l0aW9uOiAuM3M7LW1zLXRyYW5zaXRpb246IC4zczt0cmFuc2l0aW9uOiAuM3M7fVxyXG5idXR0b246aG92ZXIge2JhY2tncm91bmQ6ICMwMDA7fVxyXG4ucmVhZC1tb3JlIHtcclxuICAgIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtmb250LXNpemU6IDE1cHg7dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5yZWFkLW1vcmU6aG92ZXIge2JhY2tncm91bmQ6ICMwMDdiNGE7Y29sb3I6ICNmZmY7fVxyXG5cclxuLyogaGVhZGVyICovXHJcbmhlYWRlcnsgd2lkdGg6MTAwJTsgaGVpZ2h0OmF1dG87IH0gXHJcbmhlYWRlciAuaGVhZGVyLXRvcHsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBiYWNrZ3JvdW5kOiNlZmVmZWY7IGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMik7fVxyXG4uaGVhZGVyLXRvcCAuY29udGFpbmVyeyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IH1cclxuLmxlZnQtcHVzaHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogNjAlOyBmbG9hdDogbGVmdDsgcGFkZGluZzogNHB4IDElIDRweCAxJTsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4ucmlnaHQtcHVzaHsgZGlzcGxheTogZmxleDsgd2lkdGg6IDQwJTsgZmxvYXQ6IHJpZ2h0O2JhY2tncm91bmQ6ICMwMDdiNGE7YWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4ubG9nb3sgZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMTAwcHg7IH1cclxuLmxvZ28gaW1neyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IH1cclxuLnJpZ2h0LXB1c2ggLmNvbC02eyB3aWR0aDogNTAlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZsb2F0OiBsZWZ0OyBwYWRkaW5nOiA3cHggMSU7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuLmJhbGFuY2UtaW5mb3sgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuLm51bS1jZWxsIHNwYW4geyBkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAxM3B4OyBsaW5lLWhlaWdodDogMTRweDsgY29sb3I6ICNmZmY7IGZvbnQtd2VpZ2h0OiBib2xkOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDVweDt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTt9XHJcbi5udW0tY2VsbCBlbXsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgbGluZS1oZWlnaHQ6IDE1cHg7IGNvbG9yOiNmZmY7IGZvbnQtd2VpZ2h0OiA0MDA7IGZvbnQtc3R5bGU6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbi5oZWFkZXItYnRtIHsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiA1cHggMDsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4uaGVhZGVyLWJ0bSAuY29udGFpbmVye3BhZGRpbmc6IDAgMSU7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuLmhlYWRlci1idG0gLnNwZWVrLWljb257IGZsb2F0OiBsZWZ0OyB9XHJcbi5zcGVlay1pY29ueyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAyNXB4OyBoZWlnaHQ6IDI1cHg7IGJhY2tncm91bmQtY29sb3I6ICNkMWU3ZGU7IC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlOyAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTsgLW8tYm9yZGVyLXJhZGl1czogNTAlOyBib3JkZXItcmFkaXVzOiA1MCU7IHBhZGRpbmc6IDVweDsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4uc3BlZWstaWNvbiBpbWd7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgfVxyXG4ubWFyay10ZXh0IHsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBmb250LXNpemU6MTJweDsgbGluZS1oZWlnaHQ6IDE0cHg7IGNvbG9yOiMwMDA7Zm9udC13ZWlnaHQ6IDUwMDtmb250LXN0eWxlOiBpdGFsaWM7fVxyXG5tYXJxdWVleyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IH1cclxuLm1hcnF1ZWV7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxyXG4uaGVhZGVyLWJ0bSAubWFyay10ZXh0eyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IGNhbGMoIDEwMCUgLSAzMnB4ICk7IGZsb2F0OiBsZWZ0OyBwYWRkaW5nLWxlZnQ6IDhweDsgYm94LXNpemluZzogYm9yZGVyLWJveDsgcGFkZGluZy10b3A6IDVweDsgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cclxuXHJcbi8qIG5hdiAqL1xyXG5uYXZ7IHdpZHRoOjEwMCU7IGhlaWdodDphdXRvO31cclxubmF2IHVse31cclxubmF2IHVsIGxpe31cclxubmF2IHVsIGxpIGF7fVxyXG5uYXYgdWwgbGkgYTpob3ZlciwgbmF2IC5hY3RpdmV7fVxyXG5cclxuLyogZm9vdGVyICovXHJcbmZvb3Rlcnsgd2lkdGg6MTAwJTsgaGVpZ2h0OmF1dG87IH1cclxuLmZvb3Rlci1uYXZpZ2F0aW9ueyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IHdpZHRoOiAxMDAlOyB9XHJcbi5mdC10YWJ7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDIwJTsgcGFkZGluZzogMTBweCAwOyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEyMywgNzQsIDAuMTgpO3Bvc2l0aW9uOiByZWxhdGl2ZTtvdmVyZmxvdzogaGlkZGVuO31cclxuLmZ0LXRhYiBmaWd1cmV7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tYm90dG9tOiA2cHg7IH1cclxuLmZ0LXRhYiBmaWd1cmUgaW1neyBkaXNwbGF5OiBibG9jazsgbWF4LXdpZHRoOiAyM3B4OyBtYXgtaGVpZ2h0OiAyM3B4OyBwb3NpdGlvbjogcmVsYXRpdmU7ei1pbmRleDogOTsgfVxyXG4uZnQtdGFiIGZpZ3VyZSBpbWcuaG92ZXIgeyAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7fVxyXG4uZnQtdGFiOmhvdmVyIGZpZ3VyZSBpbWcuZGVmYXVsdCwgLmZ0LXRhYiBmaWd1cmUgaW1nLmhvdmVyIHtvcGFjaXR5OiAwO31cclxuLmZ0LXRhYjpob3ZlciBmaWd1cmUgaW1nLmhvdmVyIHtvcGFjaXR5OiAxO31cclxuLmZ0LXRhYi5hY3RpdmUgZmlndXJlIGltZy5ob3ZlciB7b3BhY2l0eTogMTt9XHJcbi5mdC10YWIuYWN0aXZlIGZpZ3VyZSBpbWcuZGVmYXVsdCB7b3BhY2l0eTogMDt9XHJcbi5mdC10YWIgc3BhbnsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMTNweDsgbGluZS1oZWlnaHQ6IDE2cHg7IGNvbG9yOiMwMDA7IHBvc2l0aW9uOiByZWxhdGl2ZTt6LWluZGV4OiA5O3RvcDogM3B4O31cclxuLmZ0LXRhYi5hY3RpdmUgc3BhbiB7Y29sb3I6ICNmZmY7fVxyXG4uZnQtdGFiLmFjdGl2ZXsgYmFja2dyb3VuZC1jb2xvcjogIzAwM2M2YzsgfVxyXG4uZnQtdGFiLmFjdGl2ZTpiZWZvcmV7bGVmdDogMDt9XHJcbi5mdC10YWI6YmVmb3JlIHtjb250ZW50OiAnJztkaXNwbGF5OiBibG9jaztiYWNrZ3JvdW5kOiAjMDA3YjRhO3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO2xlZnQ6IC0xMDAlOy13ZWJraXQtdHJhbnNpdGlvbjogLjNzOy1tb3otdHJhbnNpdGlvbjogLjNzOyAtby10cmFuc2l0aW9uOiAuM3M7LW1zLXRyYW5zaXRpb246IC4zczt0cmFuc2l0aW9uOiAuM3M7fVxyXG4uZnQtdGFiOmhvdmVyIHNwYW4ge2NvbG9yOiAjZmZmO31cclxuLmZ0LXRhYjpob3ZlcjpiZWZvcmUge2xlZnQ6IDA7fVxyXG5cclxuLnNjcmVlbi1hcmVheyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IH1cclxuLnNjcmVlbi10YWIgeyBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgd2lkdGg6IDEwMCU7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7IH1cclxuLnNjcmVlbi10YWI6YWZ0ZXJ7IGNvbnRlbnQ6ICcnOyBkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyBib3R0b206IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDFweDsgYmFja2dyb3VuZDogI2NjY2NjYzsgfVxyXG4uc2NyZWVuLXRhYiAuY29sLTR7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDMzLjMlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiMwMDA7IGZvbnQtc2l6ZTogMTJweDsgbGluZS1oZWlnaHQ6IDE0cHg7IHBhZGRpbmc6IDEwcHggMDsgYm94LXNpemluZzogYm9yZGVyLWJveDtiYWNrZ3JvdW5kOiByZ2JhKDAsIDEyMywgNzQsIDAuMTgpO3Bvc2l0aW9uOiByZWxhdGl2ZTtvdmVyZmxvdzogaGlkZGVuO2N1cnNvcjogcG9pbnRlcjt9XHJcbi5zY3JlZW4tdGFiIC5jb2wtNCBzcGFueyBkaXNwbGF5OiBibG9jazsgdGV4dC1hbGlnbjogY2VudGVyOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBmb250LXdlaWdodDogNzAwO2xldHRlci1zcGFjaW5nOiAxLjVweDtwb3NpdGlvbjogcmVsYXRpdmU7ei1pbmRleDogOTt9XHJcbi5zY3JlZW4tdGFiIC5jb2wtNC5hY3RpdmV7IGJhY2tncm91bmQ6ICMwMDdiNGE7Y29sb3I6ICNmZmY7IH1cclxuLnNjcmVlbi10YWIgLmNvbC00LmFjdGl2ZTpiZWZvcmV7bGVmdDogMDt9XHJcbi5zY3JlZW4tdGFiIC5jb2wtNDpiZWZvcmUge2NvbnRlbnQ6ICcnO2Rpc3BsYXk6IGJsb2NrO2JhY2tncm91bmQ6ICMwMDdiNGE7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDA7bGVmdDogLTEwMCU7LXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7LW1vei10cmFuc2l0aW9uOiAuM3M7IC1vLXRyYW5zaXRpb246IC4zczstbXMtdHJhbnNpdGlvbjogLjNzO3RyYW5zaXRpb246IC4zczt9XHJcbi5zY3JlZW4tdGFiIC5jb2wtNDpob3ZlciB7Y29sb3I6ICNmZmY7fVxyXG4uc2NyZWVuLXRhYiAuY29sLTQ6aG92ZXI6YmVmb3JlIHtsZWZ0OiAwO31cclxuLnNjcmVlbi1kZXRhaWx7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTtvdmVyZmxvdy15OiBzY3JvbGw7IH1cclxuLnRhYi1kZXRhaWxzeyBkaXNwbGF5OiBibG9jazsgfVxyXG4ubmV3cy1pbmZvLWNlbGx7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogZmxleDsgd2lkdGg6IDEwMCU7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiZmJmOyBwYWRkaW5nOiAxMHB4IDA7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuLm5ld3MtY2VsbHsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBmbGV4OyB3aWR0aDogMTAwJTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJmYmY7IHBhZGRpbmc6IDhweCAwOyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbi5kZXNjeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA3MiU7IGZsb2F0OiBsZWZ0OyBtYXJnaW46IDA7IHBhZGRpbmctbGVmdDogOHB4OyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbi5kZXNjIHNwYW57IGZvbnQtc2l6ZTogMTRweDsgbGluZS1oZWlnaHQ6MjBweDsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBjb2xvcjojMDAwMDAwOyBmb250LXdlaWdodDogNjAwOyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTt9XHJcbi5kZXNjIHNwYW4gYSB7Y29sb3I6ICMwMDA7fVxyXG4uZGVzYyBzcGFuIGE6aG92ZXIge2NvbG9yOiAjMDA3YjRhO31cclxuLmRlc2MgZW17IGZvbnQtc2l6ZTogMTJweDsgbGluZS1oZWlnaHQ6IDE0cHg7IGNvbG9yOiAjMDA3YjRhOyBtYXJnaW4tdG9wOiA1cHg7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC13ZWlnaHQ6IDQwMDsgfVxyXG4uc3RhcnsgZGlzcGxheTogZmxleDsgd2lkdGg6IDE4cHg7IGZsb2F0OiBsZWZ0OyBtYXJnaW46IDA7IHBhZGRpbmctbGVmdDogNnB4OyBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbi5zdGFyIGltZ3sgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuLmJ0bi1jZWxseyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHRleHQtYWxpZ246IHJpZ2h0OyBwYWRkaW5nLXJpZ2h0OiA1cHg7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IHdpZHRoOiAyMiU7IH1cclxuLnBsYXktYnRueyBmb250LXNpemU6IDExcHg7IGxpbmUtaGVpZ2h0OiAxM3B4OyBjb2xvcjogI2ZmZmZmZjsgZm9udC13ZWlnaHQ6IDQwMDsgcGFkZGluZzogNnB4IDZweDsgYm94LXNpemluZzogYm9yZGVyLWJveDsgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7IC1tb3otYm9yZGVyLXJhZGl1czogNXB4OyAtby1ib3JkZXItcmFkaXVzOiA1cHg7IGJvcmRlci1yYWRpdXM6IDNweDsgYmFja2dyb3VuZDogIzkwY2Y5MDsgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLXdlYmtpdC1hbmltYXRpb246IE5BTUUtWU9VUi1BTklNQVRJT04gMXMgaW5maW5pdGU7IC1tb3otYW5pbWF0aW9uOiBOQU1FLVlPVVItQU5JTUFUSU9OIDFzIGluZmluaXRlOyAtby1hbmltYXRpb246IE5BTUUtWU9VUi1BTklNQVRJT04gMXMgaW5maW5pdGU7YW5pbWF0aW9uOiBOQU1FLVlPVVItQU5JTUFUSU9OIDFzIGluZmluaXRlOyAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlIDBzOyAtbW96LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlIDBzOyAtbXMtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UgMHM7IC1vLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlIDBzOyB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAwczsgfVxyXG4ucGxheS1idG46aG92ZXJ7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgY29sb3I6I2ZmZmZmZjsgfVxyXG4uc2NyZWVuLWRldGFpbCAudGFiLWRldGFpbHN7IGRpc3BsYXk6IG5vbmU7IH1cclxuLnNjcmVlbi1kZXRhaWwgLnRhYi1kZXRhaWxzLnNob3ctdGFieyBkaXNwbGF5OiBibG9jazsgfVxyXG4ubmV3cy1jZWxsLmJsdWUtYmd7IGJhY2tncm91bmQ6ICMwMDA7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuLm5ld3MtY2VsbC5ibHVlLWJnIC5kZXNjIHNwYW57IGNvbG9yOiNmZmZmZmY7IGZvbnQtc2l6ZTogMTNweDsgfVxyXG4uc2NvcmUtYmxvY2t7IGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7IHBhZGRpbmctYm90dG9tOiAycHg7YmFja2dyb3VuZDogbm9uZTthbGlnbi1pdGVtczogY2VudGVyO31cclxuLnNjb3JlLWJsb2NrLnJlZCAuZGVzYyBlbXsgY29sb3I6I2RlMjQyNTsgfVxyXG4uc2NvcmUtYmxvY2sgLmxlZnQtcHVzaHsgd2lkdGg6IDUwJTsgfVxyXG4uc2NvcmUtYmxvY2sgLnJpZ2h0LXB1c2h7IHdpZHRoOiA1MCU7IGJhY2tncm91bmQ6IG5vbmU7cG9zaXRpb246IHJlbGF0aXZlO31cclxuLnNjb3JlLWJsb2NrIC5ibGFjay1zY29yZXsgYmFja2dyb3VuZDogIzhkZDJmMDsgcG9zaXRpb246IHJlbGF0aXZlO2N1cnNvcjogcG9pbnRlcjt9XHJcbi5zY29yZS1ibG9jayAubGF5LXNjb3JleyBiYWNrZ3JvdW5kOiAjZmVhZmIyO2N1cnNvcjogcG9pbnRlcjt9XHJcbi5zY29yZS1ibG9jayAubnVtLWNlbGwgc3BhbiwgLnNjb3JlLWJsb2NrIC5udW0tY2VsbCBlbXsgY29sb3I6IzAwMDsgfVxyXG4uc2NvcmUtYmxvY2sgLmxheS1zY29yZSAubnVtLWNlbGwgc3BhbiwgLnNjb3JlLWJsb2NrIC5sYXktc2NvcmUgLm51bS1jZWxsIGVtIHtjb2xvcjogIzAwMDt9XHJcbi5zY29yZS1ibG9jayAubnVtLWNlbGwgc3BhbnsgZm9udC1zaXplOiAxNHB4OyB9XHJcbi5zY29yZS1ibG9jayAuY29sLTYuYmxhY2stc2NvcmU6YWZ0ZXJ7IGNvbnRlbnQ6ICcnOyBkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgdG9wOjA7IGhlaWdodDogMTAwJTsgIHdpZHRoOiAycHg7IGJhY2tncm91bmQ6ICNmZmZmZmY7IH1cclxuLnNjb3JlLWJsb2NrIC5kZXNjeyB3aWR0aDogMTAwJTsgfVxyXG4uc2NvcmUtYmxvY2suZ3JlZW4gLmRlc2MgZW17IGNvbG9yOiM2ZWJjMjg7IH1cclxuLnR3by12YWx1ZXsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyB9XHJcbi50d28tdmFsdWUgZW17IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxyXG4udHdvLXZhbHVlIGVtOm50aC1jaGlsZCggMm4gKyAxICl7IG1hcmdpbi1yaWdodDogMTBweDsgY29sb3I6I2RlMjQyNTsgfVxyXG4udHdvLXZhbHVlIGVtOm50aC1jaGlsZCggMm4gKyAyICk6YmVmb3JleyBjb250ZW50OiAn4oaSJzsgZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTRweDsgdG9wOiAtMnB4OyBmb250LXNpemU6IDExcHg7IH1cclxuLnNjb3JlLWJsb2NrLmdyZWVuIC5kZXNjIGVtOm50aC1jaGlsZCggMm4gKyAyICk6YmVmb3JleyBjb2xvcjojZGUyNDI1OyB9XHJcbi5zY29yZS1ibG9jay5ncmVlbiAuZGVzYyBlbTpudGgtY2hpbGQoIDJuICsgMiApeyBjb2xvcjojZGUyNDI1OyB9XHJcbi5zY29yZS1ibG9jay5yZWQgLnR3by12YWx1ZSBlbTpudGgtY2hpbGQoIDJuICsgMiApeyBjb2xvcjojNmViYzI4OyB9XHJcbi50d28tdmFsdWUgZW06bnRoLWNoaWxkKCAybiArIDIgKXsgY29sb3I6I2RlMjQyNTsgcGFkZGluZy1sZWZ0OiAxMnB4OyB9XHJcbi5taW5pLXRpdGxlLWJhcnsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYzsgfVxyXG4ubWluaS10aXRsZS1iYXIgLmxlZnQtcHVzaHsgcGFkZGluZzogM3B4OyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB3aWR0aDogNTAlOyBiYWNrZ3JvdW5kOiAjMDA3YjRhOyBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTNweDsgfVxyXG4ubWluaS10aXRsZS1iYXIgLnJpZ2h0LXB1c2h7IHBhZGRpbmc6IDNweDsgYm94LXNpemluZzogYm9yZGVyLWJveDsgd2lkdGg6IDUwJTsgYmFja2dyb3VuZDogbm9uZTsgfVxyXG4ubWluaS10aXRsZS1iYXIgLmNvbC00IHttYXJnaW46IGF1dG87dGV4dC1hbGlnbjogY2VudGVyOyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjojZmZmO31cclxuLm1pbmktdGl0bGUtYmFyLmZ1bGwgLmNvbC00IHt3aWR0aDogMTAwJTt0ZXh0LWFsaWduOiBsZWZ0O2ZvbnQtc2l6ZTogMTNweDt9XHJcbi5taW5pLXRpdGxlLWJhciAucmlnaHQtcHVzaCAuY29sLTQge2NvbG9yOiAjMDAwO21hcmdpbjogYXV0bzt9XHJcbi5kZXRhaWxzLXBvcHVweyBkaXNwbGF5OiBub25lOyB3aWR0aDogMTAwJTsgcGFkZGluZzogMTBweCA3JTsgYm94LXNpemluZzogYm9yZGVyLWJveDsgYmFja2dyb3VuZDogIzhkZDJmMDsgfVxyXG4uZGV0YWlscy1wb3B1cCBmb3JteyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IG1hcmdpbjogMDsgfVxyXG4udG90b2wtZWRpdC1iYXJ7IGRpc3BsYXk6IGZsZXg7IG1hcmdpbi1ib3R0b206IDEwcHg7IH1cclxuLnRvdG9sLWVkaXQtYmFyIC5jb2wtNnsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMTUwJTsgfVxyXG4udG90b2wtZWRpdC1iYXIgLmNvbC02OmZpcnN0LWNoaWxkIC5zY29yZS1hZGR7IG1hcmdpbi1sZWZ0OiAwOyB9XHJcbi50b3RvbC1lZGl0LWJhciAuY29sLTY6bGFzdC1jaGlsZCAuc2NvcmUtYWRkeyBtYXJnaW4tcmlnaHQ6IDA7IH1cclxuLnNjb3JlLWFkZHsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiA5MCU7IHBvc2l0aW9uOiByZWxhdGl2ZTsgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7IC1tb3otYm9yZGVyLXJhZGl1czogNXB4OyAtby1ib3JkZXItcmFkaXVzOiA1cHg7IGJvcmRlci1yYWRpdXM6IDVweDsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4uc2NvcmUtYWRkIC5zY29yZS1taW51c3sgZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMjVweDsgaGVpZ2h0OiAxMDAlOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDowOyBiYWNrZ3JvdW5kOiAjZWZlZmVmO2JvcmRlcjogbm9uZTtvdXRsaW5lOiBub25lO2N1cnNvcjogcG9pbnRlcjt9XHJcbi5zY29yZS1hZGQgLnNjb3JlLXBsdXN7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDI1cHg7IGhlaWdodDogMTAwJTsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgdG9wOjA7IGJhY2tncm91bmQ6ICNlZmVmZWY7Ym9yZGVyOiBub25lO291dGxpbmU6IG5vbmU7Y3Vyc29yOiBwb2ludGVyO31cclxuLnNjb3JlLWFkZCAuc2NvcmUtcGx1czpiZWZvcmV7IGNvbnRlbnQ6ICcrJzsgbGVmdDogMDsgdG9wOjA7IGZvbnQtc2l6ZTogMThweDsgY29sb3I6IzZlYmMyODsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDUwJTsgbGVmdDogNTAlOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cclxuLnNjb3JlLWFkZCAuc2NvcmUtbWludXM6YmVmb3JleyBjb250ZW50OiAnLSc7IGxlZnQ6IDA7IHRvcDowOyBmb250LXNpemU6IDIycHg7IGNvbG9yOiNkZTI0MjU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA1MCU7IGxlZnQ6IDUwJTsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XHJcbi5zY29yZS1hZGQgaW5wdXR7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDI4cHg7IHBhZGRpbmc6IDVweCA1MHB4OyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBib3JkZXI6IG5vbmU7IH1cclxuLnByaWNlLWJ0bnsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyB9XHJcbi5wcmljZS1idG4gLnByaS1idG57IGRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBsaW5lLWhlaWdodDogMTJweDsgY29sb3I6ICMwMDAwMDA7IGJhY2tncm91bmQ6ICNmZmZmZmY7IGZvbnQtd2VpZ2h0OiBib2xkOyBwYWRkaW5nOiA3cHggMTBweCA2cHggMTBweDsgYm94LXNpemluZzogYm9yZGVyLWJveDsgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7IC1tb3otYm9yZGVyLXJhZGl1czogNXB4OyAtby1ib3JkZXItcmFkaXVzOiA1cHg7IGJvcmRlci1yYWRpdXM6IDVweDsgbWFyZ2luLXJpZ2h0OiAxJTsgd2lkdGg6IDE4LjElOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDEwcHg7IH1cclxuLnByaWNlLWJ0biAucHJpLWJ0bjpob3ZlciB7YmFja2dyb3VuZDogIzAwMDtjb2xvcjogI2ZmZjt9XHJcbi5wcmljZS1idG4gLnByaS1idG46bnRoLWNoaWxkKCA1biArIDUgKXsgbWFyZ2luLXJpZ2h0OiAwOyB9XHJcbi5wcmktYnRuLnJlZC1idG57IGNvbG9yOiNkZTI0MjU7IH0gXHJcbi5zdWJtaXQtYXJlYXsgZGlzcGxheTogZmxleDsgfVxyXG4uc3VibWl0LWFyZWEgLmNvbC02eyB3aWR0aDogNDguNSU7IGRpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW46IGF1dG87IH1cclxuLnN1Ym1pdC1hcmVhIC5jb2wtNjpmaXJzdC1jaGlsZHsgbWFyZ2luLWxlZnQ6IDA7IH1cclxuLnN1Ym1pdC1hcmVhIC5jb2wtNjpsYXN0LWNoaWxkeyBtYXJnaW4tcmlnaHQ6IDA7IH1cclxuLmJ0bi1wcmltZXsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwYWRkaW5nOiA4cHggMTBweDsgYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogMTRweDsgY29sb3I6I2ZmZmZmZjsgZm9udC13ZWlnaHQ6IGJvbGQ7IC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4OyAtbW96LWJvcmRlci1yYWRpdXM6IDVweDsgLW8tYm9yZGVyLXJhZGl1czogNXB4OyBib3JkZXItcmFkaXVzOiA1cHg7IGJhY2tncm91bmQ6ICM2ZWJjMjg7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4uc3VibWl0LWFyZWEgLnJlZC1idG4uYnRuLXByaW1leyB3aWR0aDogMTAwJTsgfVxyXG4ucmVkLWJ0bi5idG4tcHJpbWV7IGJhY2tncm91bmQ6ICMwMDA7IH1cclxuLnJlZC1idG4uYnRuLXByaW1lOmhvdmVyIHtiYWNrZ3JvdW5kOiAjMDA3YjRhO2NvbG9yOiAjZmZmO31cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5ncmVlbi1zdWItYnRueyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMzBweDsgYmFja2dyb3VuZDojMDA3YjRhOyBmb250LXNpemU6IDE0cHg7IGxpbmUtaGVpZ2h0OiAxNHB4OyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDsgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7IC1vLWJvcmRlci1yYWRpdXM6IDVweDsgYm9yZGVyLXJhZGl1czogNXB4OyBmb250LXdlaWdodDogYm9sZDsgfVxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLmdyZWVuLXN1Yi1idG46aG92ZXIge2JhY2tncm91bmQ6ICMwMDA7fVxyXG4uc2NvcmUtZ3JvdXAtYmxvY2t7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgfVxyXG5cclxuLyogcmVzcG9uc2l2ZSBtZW51ICovXHJcbi5yZXNwb25zaXZlLW1iLWljb24geyBkaXNwbGF5Om5vbmU7IG1heC13aWR0aDo0MHB4OyB3aWR0aDoxMDAlOyBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50OyBmbG9hdDpyaWdodDsgdG9wOjMwcHg7IHJpZ2h0OjEwcHg7IHotaW5kZXg6MTA7IG1hcmdpbjo0cHggMDsgfVxyXG4ucmVzcG9uc2l2ZS1tYi1pY29uIGEgeyBkaXNwbGF5OmJsb2NrOyBwYWRkaW5nOjVweCA4cHg7IH1cclxuLnJlc3BvbnNpdmUtbWItaWNvbiBzcGFuIHsgYmFja2dyb3VuZC1jb2xvcjojM2M1NWZmOyBoZWlnaHQ6MnB4OyBtYXJnaW46IDVweCBhdXRvOyBkaXNwbGF5OmJsb2NrOyBtYXgtd2lkdGg6MTAwcHg7IH1cclxuLm1vYmlsZS1uYXYtYmxvY2t7IGRpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJhY2tncm91bmQ6IG5vbmU7IHdpZHRoOiA4MCU7IHRvcDogMDsgbGVmdDogLTgwJTsgYm90dG9tOiAwOyBoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQ6ICNmZmZmZmY7IHotaW5kZXg6IDk5OTsgfVxyXG4ubW9iaWxlLW5hdi1ibG9jayAudGl0bGV7IGJhY2tncm91bmQ6ICMwMDdiNGE7IGRpc3BsYXk6IGJsb2NrOyBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxNHB4OyBsZXR0ZXItc3BhY2luZzogMC4wNWVtOyBwYWRkaW5nOiAxNXB4IDIwcHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cclxuLm5hdi1jb250ZW50IHVseyBtYXJnaW46IDA7IH1cclxuLm5hdi1jb250ZW50IHVsIGxpeyBsaXN0LXN0eWxlOiBub25lOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmZmZmOyAvKmJhY2tncm91bmQ6ICNmNWY1ZjU7Ki8gYmFja2dyb3VuZDogcmdiYSgwLCAxMjMsIDc0LCAwLjE4KTsgYm94LXNpemluZzogYm9yZGVyLWJveDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgZm9udC1zaXplOiAxMnB4OyBsaW5lLWhlaWdodDogMTRweDsgcGFkZGluZy1ib3R0b206IDA7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxyXG4ubmF2LWNvbnRlbnQgdWwgbGkgYXsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGNvbG9yOiMwMDA7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IHBhZGRpbmc6IDExcHggMTVweCAxMXB4IDMwcHg7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuLm5hdi1jb250ZW50IHVsIGxpIGE6aG92ZXJ7IGJhY2tncm91bmQ6ICMwMDdiNGE7IHRleHQtZGVjb3JhdGlvbjogbm9uZTtjb2xvcjogI2ZmZjsgfVxyXG4ubmF2LWNvbnRlbnQgdWwgbGkgaW1neyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDlweDsgdG9wOiAxMHB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1heC13aWR0aDogMTVweDsgfVxyXG4ubmF2LWNvbnRlbnQgdWwgbGkgaW1nLmRlZmF1bHQge29wYWNpdHk6IDE7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7dHJhbnNpdGlvbjogLjNzO31cclxuLm5hdi1jb250ZW50IHVsIGxpIGltZy5ob3ZlciB7b3BhY2l0eTogMDt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt0cmFuc2l0aW9uOiAuM3M7fVxyXG4ubmF2LWNvbnRlbnQgdWwgbGkuY3VycmVudCBpbWcuaG92ZXIge29wYWNpdHk6IDE7fVxyXG4ubmF2LWNvbnRlbnQgdWwgbGkuY3VycmVudCBhIHtiYWNrZ3JvdW5kOiAjMDA3YjRhO2NvbG9yOiAjZmZmO31cclxuLm5hdi1jb250ZW50IHVsIGxpOmhvdmVyIGltZy5ob3ZlciB7b3BhY2l0eTogMTt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cclxuLm5hdi1jb250ZW50IHVsIGxpOmhvdmVyIGltZy5kZWZhdWx0IHtvcGFjaXR5OiAwO3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxyXG4uY2VudGVyLWNlbGx7IGRpc3BsYXk6IGJsb2NrOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi10b3A6IDhweDsgcGFkZGluZzogMHB4IDEzcHg7IH1cclxuLm1vYmlsZS1uYXYtYmxvY2sgLnJlZC1idG4uYnRuLXByaW1leyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGZvbnQtd2VpZ2h0OiA0MDA7IC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4OyAtbW96LWJvcmRlci1yYWRpdXM6IDNweDsgLW8tYm9yZGVyLXJhZGl1czogM3B4OyBib3JkZXItcmFkaXVzOiAzcHg7IC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwczsgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzOyAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwczsgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwczsgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwczsgfVxyXG4ubW9iaWxlLW5hdi1ibG9jayAucmVkLWJ0bi5idG4tcHJpbWU6aG92ZXJ7IGNvbG9yOiNmZmZmZmY7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgYmFja2dyb3VuZDogIzAwN2I0YTsgfVxyXG4ubmF2LWNvbnRlbnR7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDogM3B4OyB9XHJcbi5jbG9zZS1idG4ge2Rpc3BsYXk6IGlubGluZS1ibG9jazsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgdG9wOiA0cHg7IHdpZHRoOiAxOXB4OyBoZWlnaHQ6IDIwcHg7IGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9jbG9zZS5wbmcpIG5vLXJlcGVhdDsgY3Vyc29yOiBwb2ludGVyOyAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7IC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwczsgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7IC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cclxuYm9keS5vcGVuIC5jbG9zZS1idG4geyByaWdodDogLTI3cHg7fVxyXG5ib2R5Lm9wZW57IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxyXG5ib2R5Lm9wZW46YWZ0ZXJ7IGNvbnRlbnQ6ICcnOyBkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBsZWZ0OiAwOyB0b3A6MDsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpOyAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlIDBzOyAtbW96LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlIDBzOyAtbXMtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UgMHM7IC1vLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlIDBzOyB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAwczt6LWluZGV4OiA5O31cclxuXHJcbi8qbG9naW4gcGFnZSovXHJcbi5sb2dpbi1ibG9ja3sgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBhbGlnbi1pdGVtczogY2VudGVyOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDB2aDsgcG9zaXRpb246IHJlbGF0aXZlOyBtaW4taGVpZ2h0OiA1MDBweDsgfVxyXG4uYnJhbmQtYXJlYXsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBiYWNrZ3JvdW5kOiAjZmZmOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDI1cHggMTBweCAxNXB4IDEwcHg7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7Ym9yZGVyLXJhZGl1czogMThweCAxOHB4IDAgMDt9XHJcbi5icmFuZC1hcmVhIGltZ3sgbWF4LXdpZHRoOiAyMDBweDsgbWFyZ2luOiAtMTIwcHggMCAwIDB9XHJcbi5sb2dpbi1zZWN0aW9ueyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDkwJTsgbWF4LXdpZHRoOiA0MDBweDsgYmFja2dyb3VuZDogIzAwMDsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyByaWdodDogMDtib3JkZXItcmFkaXVzOiAxOHB4O31cclxuLmxvZ2luLXNlY3Rpb24gZm9ybXsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiAyMHB4IDIzcHg7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuLmZpZWxkLWNlbGx7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgcG9zaXRpb246IHJlbGF0aXZlOyB9XHJcbi5maWVsZC1jZWxsIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgLmZpZWxkLWNlbGwgaW5wdXRbdHlwZT1cInRleHRcIl17IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgYmFja2dyb3VuZDogI2ZmZjsgYm94LXNpemluZzogYm9yZGVyLWJveDsgbWFyZ2luLWJvdHRvbTogMjBweDsgYm9yZGVyOiBub25lOyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDsgLW1vei1ib3JkZXItcmFkaXVzOiA2cHg7IC1vLWJvcmRlci1yYWRpdXM6IDZweDsgYm9yZGVyLXJhZGl1czogNnB4OyBwYWRkaW5nLWxlZnQ6IDM1cHg7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6IzAwMDsgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzBzIGVhc2UtaW4tb3V0OyAtbW96LXRyYW5zaXRpb246IGFsbCAwLjMwcyBlYXNlLWluLW91dDsgLW1zLXRyYW5zaXRpb246IGFsbCAwLjMwcyBlYXNlLWluLW91dDsgLW8tdHJhbnNpdGlvbjogYWxsIDAuMzBzIGVhc2UtaW4tb3V0OyBvdXRsaW5lOiBub25lOyB9XHJcbi5maWVsZC1jZWxsIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cywgLmZpZWxkLWNlbGwgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXN7IGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxyXG4uZmllbGQtY2VsbCBpbnB1dFt0eXBlPVwic3VibWl0XCJdeyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQ6ICMwMDdiNGE7IGhlaWdodDogNDBweDsgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHg7IC1tb3otYm9yZGVyLXJhZGl1czogNnB4OyAtby1ib3JkZXItcmFkaXVzOiA2cHg7IGJvcmRlci1yYWRpdXM6IDZweDsgY29sb3I6I2ZmZmZmZjsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgZm9udC13ZWlnaHQ6IGJvbGQ7IC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwczsgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzOyAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwczsgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwczsgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwczsgfVxyXG4uZmllbGQtY2VsbCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogIzAwMDsgfVxyXG4uZmllbGQtY2VsbCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Oi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjogIzAwMDsgfVxyXG4uZmllbGQtY2VsbCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICMwMDA7IH1cclxuLmZpZWxkLWNlbGwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjogIzAwMDsgfVxyXG4uZmllbGQtY2VsbCBpbnB1dFt0eXBlPVwidGV4dFwiXTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAjMDAwOyB9XHJcbi5maWVsZC1jZWxsIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICMwMDA7IH1cclxuLmZpZWxkLWNlbGwgaW5wdXRbdHlwZT1cInRleHRcIl06LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICMwMDA7IH1cclxuLmZpZWxkLWNlbGwgaW5wdXRbdHlwZT1cInRleHRcIl06LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjMDAwOyB9XHJcbi5jaGVja2JveCB7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWxlZnQ6IDMwcHg7IG1hcmdpbi1ib3R0b206IDEycHg7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1zaXplOiAxNHB4OyAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAtbW96LXVzZXItc2VsZWN0OiBub25lOyAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IHVzZXItc2VsZWN0OiBub25lOyBjb2xvcjogI2ZmZmZmZjsgfVxyXG4uY2hlY2tib3ggaW5wdXQgeyBwb3NpdGlvbjogYWJzb2x1dGU7IG9wYWNpdHk6IDA7IGN1cnNvcjogcG9pbnRlcjsgaGVpZ2h0OiAwOyB3aWR0aDogMDsgfVxyXG4uY2hlY2ttYXJrIHsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IGhlaWdodDogMTVweDsgd2lkdGg6IDE1cHg7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBib3JkZXI6IDJweCBzb2xpZCAjZmZmOyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDsgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7IC1vLWJvcmRlci1yYWRpdXM6IDNweDsgYm9yZGVyLXJhZGl1czogM3B4OyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDsgLW8tYm9yZGVyLXJhZGl1czogM3B4OyBib3JkZXItcmFkaXVzOiAzcHg7IH1cclxuLmNoZWNrYm94OmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7IGhlaWdodDogMTVweDsgd2lkdGg6IDE1cHg7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBib3JkZXI6IDJweCBzb2xpZCAjZmZmOyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDsgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7IC1vLWJvcmRlci1yYWRpdXM6IDNweDsgYm9yZGVyLXJhZGl1czogM3B4OyB9XHJcbi5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmOyB9XHJcbi5jaGVja21hcms6YWZ0ZXIgeyBjb250ZW50OiBcIlwiOyBwb3NpdGlvbjogYWJzb2x1dGU7IGRpc3BsYXk6IG5vbmU7IH1cclxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHsgZGlzcGxheTogYmxvY2s7IH1cclxuLmNoZWNrYm94IC5jaGVja21hcms6YWZ0ZXIgeyBsZWZ0OiA2cHg7IHRvcDogMnB4OyB3aWR0aDogMnB4OyBoZWlnaHQ6IDdweDsgYm9yZGVyOiBzb2xpZCB3aGl0ZTsgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxyXG4uZmllbGQtY2VsbC5jaGVjay1ib3h7IHBhZGRpbmc6IDE1cHggMDsgfVxyXG4uZmllbGQtY2VsbCBpbWd7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogOXB4OyB0b3A6IDhweDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXgtd2lkdGg6IDE5cHg7IH1cclxuLmxvZ2luLWJhY2tncm91bi1zbGlkZXJ7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB9XHJcbi5sb2dpbi1iYWNrZ3JvdW4tc2xpZGVyIC5pdGVteyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjt9XHJcbi5sb2dpbi1iYWNrZ3JvdW4tc2xpZGVyIC5zbGljay1zbGlkZSA+IGRpdiwgLmxvZ2luLWJhY2tncm91bi1zbGlkZXIgLnNsaWNrLXNsaWRlID4gZGl2ID4gZGl2eyBoZWlnaHQ6IDEwMHZoOyBtaW4taGVpZ2h0OiA1MDBweDsgfVxyXG4ubG9naW4tYmFja2dyb3VuLXNsaWRlcntkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4uc2xpY2stZG90dGVkLnNsaWNrLXNsaWRlciB7IG1hcmdpbi1ib3R0b206IDBweDsgfVxyXG4ubG9naW4tYmFja2dyb3VuLXNsaWRlciAuc2xpY2stZG90cywgLmxvZ2luLWJhY2tncm91bi1zbGlkZXIgLnNsaWNrLWFycm93eyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cclxuLmZpcnN0LXNjcmVlbiB7ZGlzcGxheTogZmxleDsgZmxleC13cmFwOiBub3dyYXA7IGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgd2lkdGg6IDEwMCU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOjA7IGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9zcGxhc2gxLmpwZyk7YmFja2dyb3VuZC1zaXplOiAxMDAlO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtoZWlnaHQ6IDEwMHZoOyB6LWluZGV4OiA5OTk5OTsgb3BhY2l0eTogMDsgdmlzaWJpbGl0eTogaGlkZGVuO31cclxuLmZpcnN0LXNjcmVlbiBmaWd1cmV7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDA7IHRvcDogNTAlOyBsZWZ0OiA1MCU7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgM3MgZWFzZSAwczsgLW1vei10cmFuc2l0aW9uOiBhbGwgM3MgZWFzZSAwczsgLW1zLXRyYW5zaXRpb246IGFsbCAzcyBlYXNlIDBzOyAtby10cmFuc2l0aW9uOiBhbGwgM3MgZWFzZSAwczsgdHJhbnNpdGlvbjogYWxsIDNzIGVhc2UgMHM7IH1cclxuLmZpcnN0LXNjcmVlbi5zaG93eyBvcGFjaXR5OiAxOyB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XHJcbi5maXJzdC1zY3JlZW4uc2hvdyBmaWd1cmV7IHdpZHRoOiAyMDBweDsgfVxyXG4uZmlyc3Qtc2NyZWVuIGZpZ3VyZSBpbWd7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgfVxyXG4uZmlyc3Qtc2NyZWVuLmhpZGV7IG9wYWNpdHk6IDA7IHZpc2liaWxpdHk6IGhpZGRlbjsgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAwczsgLW1vei10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAwczsgLW1zLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlIDBzOyAtby10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAwczsgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UgMHM7ICB9XHJcbi5maWVsZC1jZWxsIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXJ7YmFja2dyb3VuZDogI2ZmZmZmZjtjb2xvcjogIzAwN2I0YTt9XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgTkFNRS1ZT1VSLUFOSU1BVElPTiB7XHJcbiAgMCUsIDQ5JSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YjRhO1xyXG4gIH1cclxuICA1MCUsIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDEyMyw3NCwwLjUpO1xyXG4gIH1cclxufVxyXG4ubWluaS10aXRsZS1iYXIuZnVsbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggcmdiYSgwLDAsMCwwLjMpO1xyXG59XHJcbi5taW5pLXRpdGxlLWJhci5mdWxsIC5sZWZ0LXB1c2gge1xyXG4gICAgd2lkdGg6IDEwMCU7cGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiNGE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5taW5pLXRpdGxlLWJhci5mdWxsIC5sZWZ0LXB1c2ggLm5hbWUge2ZvbnQtc2l6ZTogMTNweDt0ZXh0LWFsaWduOiBsZWZ0O2NvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDt9XHJcbi5zcG9ydHMtcGFnZSAubmV3cy1jZWxsLmJsdWUtYmcge2JhY2tncm91bmQ6ICMwMDdiNGE7fVxyXG4uc3BvcnRzLXBhZ2UgLmRlc2Mge3dpZHRoOiAxMDAlO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5zcG9ydHMtcGFnZSAubmV3cy1jZWxsLmJsdWUtYmcgLmRlc2Mgc3BhbiB7Zm9udC1zaXplOiAxNHB4O31cclxuLnNwb3J0cy1wYWdlIC5zY3JlZW4tZGV0YWlsIHtvdmVyZmxvdy14OiBoaWRkZW47fVxyXG4uaW5uZXIge3BhZGRpbmc6IDIwcHggMTVweDt9XHJcbi5zcG9ydHMtcGFydCB7ZGlzcGxheTogZmxleDtmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogNzY3cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnNwb3J0cy1wYXJ0IC5zcG9ydHMge1xyXG4gICAgd2lkdGg6IGNhbGMoMjUlIC0gMTBweCk7XHJcbiAgICBtYXJnaW46IDAgNXB4IDEwcHggNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zcG9ydHMtcGFydCAuc3BvcnRzIGEge2Rpc3BsYXk6IGJsb2NrO31cclxuLnNwb3J0cy1wYXJ0IC5zcG9ydHMgYTpob3ZlciBoNCB7YmFja2dyb3VuZDogIzAwN2I0YTt9XHJcbi5zcG9ydHMtcGFydCAuc3BvcnRzIGZpZ3VyZSB7cG9zaXRpb246IHJlbGF0aXZlO292ZXJmbG93OiBoaWRkZW47cGFkZGluZy10b3A6IDc5JTtib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO31cclxuLnNwb3J0cy1wYXJ0IC5zcG9ydHMgZmlndXJlIGltZyB7cG9zaXRpb246IGFic29sdXRlO3RvcDogNTAlO2xlZnQ6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO31cclxuLnNwb3J0cyBoNCB7bWFyZ2luOiAwO2JhY2tncm91bmQ6ICMwMDA7Y29sb3I6ICNmZmY7dGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtc2l6ZTogMTdweDtwYWRkaW5nOiA4cHggMDstd2Via2l0LXRyYW5zaXRpb246IC4zczstbW96LXRyYW5zaXRpb246IC4zczstby10cmFuc2l0aW9uOiAuM3M7LW1zLXRyYW5zaXRpb246IC4zczsgdHJhbnNpdGlvbjogLjNzO31cclxuLmNoYW5nZS1wd2Qtc2VjdGlvbiBoNSB7Y29sb3I6ICNmZmY7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDE4cHg7bWFyZ2luLWJvdHRvbTogMzBweDt9XHJcblxyXG4ucmVzdWx0LXNlY3Rpb24ge2JvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO31cclxuLnJlc3VsdC1zZWN0aW9uIC5yZXN1bHQtdGl0bGUgPiBkaXYge2NvbG9yOiAjZmZmO2ZvbnQtd2VpZ2h0OiA3MDA7bGV0dGVyLXNwYWNpbmc6IDFweDt9XHJcbi5yZXN1bHQtc2VjdGlvbiAucmVzdWx0LXRpdGxlIC5jb2wtMiB7dGV4dC1hbGlnbjogY2VudGVyO31cclxuLnJlc3VsdC1zZWN0aW9uIC5yZXN1bHQuY29sIHthbGlnbi1pdGVtczogY2VudGVyO31cclxuLnJlc3VsdC1zZWN0aW9uIC5yZXN1bHQgcCB7bWFyZ2luOiAwO31cclxuLnJlc3VsdC1zZWN0aW9uIC5yZXN1bHQgaDYge21hcmdpbjogMDtjb2xvcjogIzAwMDt0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC13ZWlnaHQ6IDcwMDtmb250LXNpemU6IDE3cHg7fVxyXG4uYWJ0LXRpdGxlIHttYXJnaW46IDA7fVxyXG4ucHJvZmlsZS1zZWN0aW9uIC5yZXN1bHQgaDUge21hcmdpbjogMDt9XHJcbi5tYXRjaC1jb25maWcgaDUge3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO31cclxuLm1hdGNoLWNvbmZpZyBoNSBzcGFuIHtmb250LXdlaWdodDogNDAwO2ZvbnQtc2l6ZTogMTRweDtjb2xvcjogIzAwMDt9XHJcbi5tYXRjaC1jb25maWcgaDYge2ZvbnQtc2l6ZTogMTRweDtjb2xvcjogIzAwMDtmb250LXdlaWdodDogNzAwO31cclxuaDYgc3BhbiB7Zm9udC13ZWlnaHQ6IDQwMDt9XHJcbi50d28gaDYge2Rpc3BsYXk6IGlubGluZS1ibG9jazt9XHJcblxyXG4uYmV0c3Rha2Utc2VjdGlvbiBoNSB7Zm9udC1zaXplOiAxM3B4O31cclxuLnVzZS1zdGFrZSB7Ym9yZGVyOiAycHggc29saWQgIzAwMDtib3JkZXItcmFkaXVzOiA1cHg7cGFkZGluZzogMTBweDt9XHJcbi51c2Utc3Rha2UgaDUge2NvbG9yOiAjMDAwO31cclxuLnVzZS1zdGFrZSB1bCB7bWFyZ2luOiAxMHB4IDAgMTBweCAxMHB4O31cclxuLnVzZS1zdGFrZSB1bCBsaSB7ZGlzcGxheTogYmxvY2s7cG9zaXRpb246IHJlbGF0aXZlO3BhZGRpbmc6IDAgMCAwIDE3cHg7bWFyZ2luLWJvdHRvbTogNnB4O31cclxuLnVzZS1zdGFrZSB1bCBsaTpiZWZvcmUge2NvbnRlbnQ6IFwiXCI7ZGlzcGxheTogYmxvY2s7cG9zaXRpb246IGFic29sdXRlO3RvcDogNTAlO2xlZnQ6IDA7d2lkdGg6IDhweDtoZWlnaHQ6IDhweDt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC01MCUpO2JhY2tncm91bmQ6ICMwMDdiNGE7Ym9yZGVyLXJhZGl1czogMTAwJTt9XHJcbi51c2Utc3Rha2UgdWwgbGk6bGFzdC1jaGlsZCB7bWFyZ2luLWJvdHRvbTogMDt9XHJcbi5jbGljay1iZXR0aW5nIHtwYWRkaW5nOiAyMHB4IDA7fVxyXG4uY2xpY2stYmV0dGluZyBoNSB7Y29sb3I6ICMwMDA7bWFyZ2luLWJvdHRvbTogMTBweDt9XHJcbi5jbGljay1idXR0b24ge2Rpc3BsYXk6IGlubGluZS1ibG9jaztiYWNrZ3JvdW5kOiAjMDA3YjRhO2JvcmRlci1yYWRpdXM6IDIwcHg7cGFkZGluZzogMnB4O31cclxuLmNsaWNrLWJ1dHRvbiBhIHtib3JkZXItcmFkaXVzOiAyMHB4O2NvbG9yOiAjZmZmO3BhZGRpbmc6IDNweCAxMHB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztmb250LXNpemU6IDEycHg7Zm9udC13ZWlnaHQ6IDYwMDt9XHJcbi5jbGljay1idXR0b24gYTpob3ZlciB7YmFja2dyb3VuZDogIzAwMDt9XHJcbi5jbGljay1idXR0b24gYS5hY3RpdmUge2JhY2tncm91bmQ6ICMwMDA7fVxyXG4uY2xpY2stYmV0dGluZyBmb3JtIHtwYWRkaW5nLXRvcDogMTJweDthbGlnbi1pdGVtczogY2VudGVyO2Rpc3BsYXk6IGZsZXg7fVxyXG4uY2xpY2stYmV0dGluZyBmb3JtIGlucHV0IHttYXJnaW4tcmlnaHQ6IDM1cHg7Ym9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwMDA7fVxyXG4uY2xpY2stYmV0dGluZyBmb3JtIGJ1dHRvbiB7Ym9yZGVyLXJhZGl1czogMjBweDt9XHJcbi5iZXQtbGlzdCB7dGV4dC1hbGlnbjogY2VudGVyO31cclxuLmJldC1saXN0IGEge3dpZHRoOiAzOSU7bWFyZ2luOiAwIDRweCA4cHggNHB4O31cclxuLmJldC1saXN0IGEuYWN0aXZlIHtiYWNrZ3JvdW5kOiAjMDA3YjRhO2NvbG9yOiAjZmZmO30gXHJcbi5iZXRzdGFrZS1zZWN0aW9uIC5zYXZlcyB7d2lkdGg6IDEwMCU7bWFyZ2luLXRvcDogMTNweDt9XHJcbi5zY29yZS1wYXJ0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcclxufVxyXG4ubWF0Y2gtc2NvcmUge2ZsZXg6IDE7fVxyXG4ubWF0Y2gtc2NvcmUgc3BhbiB7Zm9udC1zaXplOiAxM3B4O2xpbmUtaGVpZ2h0OiAyMHB4O2ZvbnQtd2VpZ2h0OiA2MDA7IGRpc3BsYXk6IGJsb2NrO2NvbG9yOiAjZmZmO3RleHQtYWxpZ246IHJpZ2h0O31cclxuLnRlcm0taGVhZGVyIC5taW5pLXRpdGxlLWJhci5mdWxsIHtmbGV4OiAxO31cclxuLnRlcm0taGVhZGVyIC5taW5pLXRpdGxlLWJhci5mdWxsIC5sZWZ0LXB1c2gge3RleHQtdHJhbnNmb3JtOiBub25lO3BhZGRpbmc6IDEwcHggMTBweDt9XHJcbi50ZXJtLWhlYWRlciAubGVmdC1wdXNoIC5ib2xke2NvbG9yOiAjZmZmO31cclxuLnRlcm0tZm9vdGVyIC5mdC10YWIge3dpZHRoOiA1MCU7cGFkZGluZzogMTVweCAwO31cclxuLnRlcm0tZm9vdGVyIC5mdC10YWIgc3Bhbntmb250LXdlaWdodDogNzAwO2NvbG9yOiAjZmZmO31cclxuLnRlcm0tZm9vdGVyIC5mdC10YWIuYWdyZWUge2JhY2tncm91bmQ6ICMwMDdiNGF9XHJcbi50ZXJtLWZvb3RlciAuZnQtdGFiLmFncmVlOmJlZm9yZSB7YmFja2dyb3VuZDogIzAwMDt9XHJcbi50ZXJtLWZvb3RlciAuZnQtdGFiLmRpc2FncmVlIHtiYWNrZ3JvdW5kOiAjMDAwO31cclxuLnRlcm0tc2VjdGlvbiAuc2NyZWVuLWFyZWEge2JhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDttaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODVweCk7ICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4udGVybS1zZWN0aW9uIC5zY3JlZW4tYXJlYTpiZWZvcmUge2NvbnRlbnQ6IFwiXCI7ZGlzcGxheTogYmxvY2s7cG9zaXRpb246IGFic29sdXRlO3RvcDogMDtsZWZ0OiAwO3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7fVxyXG4udGVybS1zZWN0aW9uIC5pbm5lciB7cG9zaXRpb246cmVsYXRpdmU7fVxyXG4udGVybS1zZWN0aW9uIHAge2NvbG9yOiAjZmZmO2ZvbnQtd2VpZ2h0OiA2MDA7fVxyXG4udGVybS1zZWN0aW9uIHVsIHttYXJnaW46IDAgMCAyMHB4IDA7fVxyXG4udGVybS1zZWN0aW9uIHVsIGxpIHtkaXNwbGF5OiBibG9jaztwYWRkaW5nOiAwIDAgMCAxNHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTtjb2xvcjogI2ZmZjtmb250LXdlaWdodDogNjAwO31cclxuLnRlcm0tc2VjdGlvbiB1bCBsaTpiZWZvcmUge2NvbnRlbnQ6IFwiXCI7ZGlzcGxheTogYmxvY2s7cG9zaXRpb246IGFic29sdXRlO3RvcDogNTAlO2xlZnQ6IDA7d2lkdGg6IDhweDtoZWlnaHQ6IDhweDtiYWNrZ3JvdW5kOiAjZmZmO2JvcmRlci1yYWRpdXM6IDEwMCU7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNTAlKTt9XHJcbi5iYWxsLXJ1bm5pbmcgLmNvbC02IHtjdXJzb3I6IG5vdC1hbGxvd2Vkcztwb2ludGVyLWV2ZW50czogbm9uZTt9XHJcbi5iYWxsLXJ1biB7cG9zaXRpb246IGFic29sdXRlO3RvcDogMDtsZWZ0OiAwO3otaW5kZXg6IDk7YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtjb2xvcjogI2ZmZjt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO2ZvbnQtd2VpZ2h0OiA3MDA7Zm9udC1zaXplOiAxNXB4O2N1cnNvcjogbm90LWFsbG93ZWQ7fVxyXG4uYmFsbC1ydW4gc3BhbiB7cG9zaXRpb246IGFic29sdXRlO3RvcDogNTAlO2xlZnQ6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO3dpZHRoOiAxMDAlO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5vcGVuLWJhbGw6YmVmb3JlIHt3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7cG9zaXRpb246IGFic29sdXRlO3RvcDogMDtsZWZ0OiAwO2NvbnRlbnQ6IFwiIFwiO2JvcmRlci1yYWRpdXM6IDEwMCU7Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtiYWNrZ3JvdW5kOiAjZmZmO2JveC1zaXppbmc6IGJvcmRlci1ib3g7YW5pbWF0aW9uOiBwdWxzYXRlIDEuNXMgZWFzZS1vdXQ7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7YW5pbWF0aW9uLWRlbGF5OiAxLjFzO29wYWNpdHk6IC41O31cclxuLm9wZW4tYmFsbCB7cG9zaXRpb246IHJlbGF0aXZlO3otaW5kZXg6IDI7d2lkdGg6IDlweDtoZWlnaHQ6IDlweDtib3JkZXItcmFkaXVzOiAxMDAlO2Rpc3BsYXk6IGlubGluZS1ibG9jazt0b3A6IDA7fVxyXG4ub3Blbi1iYWxsLmxlZnQge2xlZnQ6IC0xMHB4O31cclxuLm9wZW4tYmFsbC5yaWdodCB7cmlnaHQ6IC0xMHB4O31cclxuQGtleWZyYW1lcyBwdWxzYXRlIHswJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTtvcGFjaXR5OiAwfTUwJSB7b3BhY2l0eTogMX0xMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDIuNSk7b3BhY2l0eTogMH19QC13ZWJraXQta2V5ZnJhbWVzIHB1bHNhdGUgezAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO29wYWNpdHk6IDB9NTAlIHtvcGFjaXR5OiAxfTEwMCUge3RyYW5zZm9ybTogc2NhbGUoMi41KTtvcGFjaXR5OiAwfX1cclxuLmljZGMtc2VjdGlvbiAuZ3JleS5jb2wge3BhZGRpbmc6IDZweCAzNXB4O31cclxuLmljZGMtc2VjdGlvbiAuaWNkYy1wYXJ0IC5jb2wge3BhZGRpbmc6IDAgNXB4O31cclxuLnJvdy1saW5lIHtmb250LXdlaWdodDogNTAwO31cclxuLmRhdGUtY29sIHtmb250LXdlaWdodDogNTAwO31cclxuLnVwY29taW5nLW1hdGNoIC5zY29yZS1ibG9jayB7b3BhY2l0eTogMC41O3BvaW50ZXItZXZlbnRzOiBub25lO2N1cnNvcjogbm90LWFsbG93ZWQ7fVxyXG5Aa2V5ZnJhbWVzIGJsaW5re1xyXG4wJXtvcGFjaXR5OiAwO31cclxuNTAle29wYWNpdHk6IC41O31cclxuMTAwJXtvcGFjaXR5OiAxO319XHJcbi5zdGFyLnllbGxvdyBpbWcge2FuaW1hdGlvbjogYmxpbmsgMXMgbGluZWFyIGluZmluaXRlO31cclxuLmJldGhpcy1zZWN0aW9uIC5pY2RjLXBhcnQgLmNvbC0yOmxhc3QtY2hpbGQgc3BhbiB7Y29sb3I6ICNmZjAwMDA7fVxyXG4ucHJvZml0LXNlY3Rpb24gLmlubmVyIC5jb2wge3BhZGRpbmc6IDVweCAwO31cclxuLnByb2ZpdC1zZWN0aW9uIC5ib2xkIHtsaW5lLWhlaWdodDogMS4yO31cclxuLnByb2ZpdC1zZWN0aW9uIC5yZWFkLW1vcmUge3BhZGRpbmc6IDNweCAxMHB4O31cclxuLnByb2ZpdC1zZWN0aW9uIC5yZWFkLW1vcmU6aG92ZXIge2JhY2tncm91bmQ6ICMwMDA7fVxyXG4uYmV0LXBvcHVwIHt3aWR0aDogNTUwcHg7cGFkZGluZzogMDtvdmVyZmxvdzogaGlkZGVuO31cclxuLmJldC1wb3B1cCAubWluaS10aXRsZS1iYXIuZnVsbCB7Ym94LXNoYWRvdzogbm9uZTt9XHJcbi5mYW5jeWJveC1zbGlkZS0taHRtbCAuZmFuY3lib3gtY2xvc2Utc21hbGwge3dpZHRoOiAzNHB4O2hlaWdodDogMzRweDtiYWNrZ3JvdW5kOiAjMDAwO3BhZGRpbmc6IDVweDt9XHJcbi5mYW5jeWJveC1idXR0b24gc3ZnIHBhdGgge2ZpbGw6ICNmZmY7fVxyXG4uY3VycmVudC1tYXRjaCAuc2NvcmUtYmxvY2sgLmxlZnQtcHVzaHtkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO31cclxuLmN1cnJlbnQtbWF0Y2ggLnNjb3JlLWJsb2NrIC5sZWZ0LXB1c2ggLnJlYWQtbW9yZSB7cGFkZGluZzogM3B4IDEwcHg7fVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxucmVzcG9uc2l2ZS5jc3NcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuLyogQ1NTIERvY3VtZW50ICovXHJcblxyXG4vKiBUYWJsZSBvZiBDb250ZW50c1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDEuIE1vYmlsZVxyXG5cdDIuIExhcmdlIE1vYmlsZVxyXG5cdDMuIGlQYWRcclxuXHQ0LiBsYXJnZSBkZXNrdG9wXHJcblx0NS4gT3RoZXJcclxuKi9cclxuXHJcbi8qIDEuIE1vYmlsZSByZXNwb25zaXZlIGNzcyA2NDBweFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5AbWVkaWEgKG1heC13aWR0aDo2NDBweCkge1xyXG4gICAgLnNwb3J0cy1wYXJ0IHt3aWR0aDogOTMlO31cclxufVxyXG5cclxuLyogMi4gTGFyZ2UgTW9iaWxlIHJlc3BvbnNpdmUgY3NzIDY0MHB4XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbkBtZWRpYSAobWluLXdpZHRoOjY0MXB4KSBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG5cclxufVxyXG5cclxuLyogMy4gaVBhZCByZXNwb25zaXZlIGNzcyA3NjhweCB0byAxMDIzcHhcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOjEwMjNweCkge1xyXG5cclxufVxyXG5cclxuLyogNC4gbGFyZ2UgZGVza3RvcCByZXNwb25zaXZlIGNzcyAxMDI0cHggdG8gMTE5OXB4XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbkBtZWRpYSAobWluLXdpZHRoOjEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTE5OXB4KSB7XHRcclxuXHJcbn1cclxuXHJcbi8qIDUuIE90aGVyIG1lZGlhLXF1ZXJ5XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo0ODFweCkge1x0XHJcbiAgICAuc3BvcnRzLXBhcnQgLnNwb3J0cyB7d2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7fVxyXG4gICAgLm9wZW4tYmFsbCB7dG9wOiAtMnB4O3dpZHRoOiA2cHg7aGVpZ2h0OiA2cHg7fVxyXG4gICAgLmljZGMtc2VjdGlvbiAuZ3JleS5jb2wge3BhZGRpbmc6IDZweCAxNXB4O31cclxuICAgIC5pY2RjLXBhcnQgLmNvbC0yIHNwYW4ge2ZvbnQtc2l6ZTogMTJweDt9XHJcbn0iLCJib2R5LmRpYWxvZy1vcGVuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4ubnNtLWRpYWxvZy1idG4tY2xvc2Uge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjMmQyZDJkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogOHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogOTk5OyB9XG4gIC5vdmVybGF5Lm5zbS1vdmVybGF5LW9wZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuICAub3ZlcmxheS50cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuLm5zbS1kaWFsb2cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gIC5uc20tZGlhbG9nLm5zbS1kaWFsb2ctY2xvc2Uge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgLm5zbS1kaWFsb2cubnNtLWNlbnRlcmVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gKDEuNzVyZW0gKiAyKSk7IH1cblxuLm5zbS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW46IDEuNzVyZW07XG4gIGJveC1zaGFkb3c6IDAgN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxM3B4IDE5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNXB4IDI0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG91dGxpbmU6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IH1cblxuLm5zbS1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxIDEgYXV0bzsgfVxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIEFuaW1hdGlvbnNcbiogKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5uc20tZGlhbG9nW2NsYXNzKj1uc20tZGlhbG9nLWFuaW1hdGlvbi1dIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDUwMG1zOyB9XG5cbi5uc20tZGlhbG9nLWFuaW1hdGlvbi1sdHIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApOyB9XG4gIC5uc20tZGlhbG9nLWFuaW1hdGlvbi1sdHIubnNtLWRpYWxvZy1vcGVuIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XG4gIC5uc20tZGlhbG9nLWFuaW1hdGlvbi1sdHIubnNtLWRpYWxvZy1jbG9zZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTsgfVxuXG4ubnNtLWRpYWxvZy1hbmltYXRpb24tcnRsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1MCUsIDAsIDApOyB9XG4gIC5uc20tZGlhbG9nLWFuaW1hdGlvbi1ydGwubnNtLWRpYWxvZy1vcGVuIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XG4gIC5uc20tZGlhbG9nLWFuaW1hdGlvbi1ydGwubnNtLWRpYWxvZy1jbG9zZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1MCUsIDAsIDApOyB9XG5cbi5uc20tZGlhbG9nLWFuaW1hdGlvbi10dGIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApOyB9XG4gIC5uc20tZGlhbG9nLWFuaW1hdGlvbi10dGIubnNtLWRpYWxvZy1vcGVuIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XG4gIC5uc20tZGlhbG9nLWFuaW1hdGlvbi10dGIubnNtLWRpYWxvZy1jbG9zZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKTsgfVxuXG4ubnNtLWRpYWxvZy1hbmltYXRpb24tYnR0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MCUsIDApOyB9XG4gIC5uc20tZGlhbG9nLWFuaW1hdGlvbi1idHQubnNtLWRpYWxvZy1vcGVuIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XG4gIC5uc20tZGlhbG9nLWFuaW1hdGlvbi1idHQubnNtLWRpYWxvZy1jbG9zZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MCUsIDApOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/mobile/mobile.component.html":
/*!**********************************************!*\
  !*** ./src/app/mobile/mobile.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n</router-outlet>"

/***/ }),

/***/ "./src/app/mobile/mobile.component.ts":
/*!********************************************!*\
  !*** ./src/app/mobile/mobile.component.ts ***!
  \********************************************/
/*! exports provided: MobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileComponent", function() { return MobileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MobileComponent = /** @class */ (function () {
    function MobileComponent(deviceService, router) {
        this.deviceService = deviceService;
        this.router = router;
        // if (!this.deviceService.isMobile()) {
        //     this.router.navigate(['./']);
        // }
    }
    MobileComponent.prototype.ngOnInit = function () { };
    MobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./mobile.component.html */ "./src/app/mobile/mobile.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./mobile.component.css */ "./src/app/mobile/mobile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__["DeviceDetectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MobileComponent);
    return MobileComponent;
}());



/***/ }),

/***/ "./src/app/mobile/mobile.module.ts":
/*!*****************************************!*\
  !*** ./src/app/mobile/mobile.module.ts ***!
  \*****************************************/
/*! exports provided: MobileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileModule", function() { return MobileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _mobile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile.component */ "./src/app/mobile/mobile.component.ts");
/* harmony import */ var _mobile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile-routing.module */ "./src/app/mobile/mobile-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/mobile/login/login.component.ts");
/* harmony import */ var _layout_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/main/main.component */ "./src/app/mobile/layout/main/main.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/mobile/layout/header/header.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/mobile/layout/footer/footer.component.ts");
/* harmony import */ var _inner_pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inner-pages/home/home.component */ "./src/app/mobile/inner-pages/home/home.component.ts");
/* harmony import */ var _inner_pages_in_play_in_play_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inner-pages/in-play/in-play.component */ "./src/app/mobile/inner-pages/in-play/in-play.component.ts");
/* harmony import */ var _inner_pages_market_market_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inner-pages/market/market.component */ "./src/app/mobile/inner-pages/market/market.component.ts");
/* harmony import */ var _inner_pages_sports_sports_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./inner-pages/sports/sports.component */ "./src/app/mobile/inner-pages/sports/sports.component.ts");
/* harmony import */ var _inner_pages_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inner-pages/favorite/favorite.component */ "./src/app/mobile/inner-pages/favorite/favorite.component.ts");
/* harmony import */ var _inner_pages_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inner-pages/my-profile/my-profile.component */ "./src/app/mobile/inner-pages/my-profile/my-profile.component.ts");
/* harmony import */ var _inner_pages_bet_stake_setting_bet_stake_setting_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./inner-pages/bet-stake-setting/bet-stake-setting.component */ "./src/app/mobile/inner-pages/bet-stake-setting/bet-stake-setting.component.ts");
/* harmony import */ var _inner_pages_account_statement_account_statement_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./inner-pages/account-statement/account-statement.component */ "./src/app/mobile/inner-pages/account-statement/account-statement.component.ts");
/* harmony import */ var _inner_pages_bet_history_bet_history_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./inner-pages/bet-history/bet-history.component */ "./src/app/mobile/inner-pages/bet-history/bet-history.component.ts");
/* harmony import */ var _inner_pages_profit_loss_profit_loss_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./inner-pages/profit-loss/profit-loss.component */ "./src/app/mobile/inner-pages/profit-loss/profit-loss.component.ts");
/* harmony import */ var _inner_pages_results_results_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./inner-pages/results/results.component */ "./src/app/mobile/inner-pages/results/results.component.ts");
/* harmony import */ var _inner_pages_scores_scores_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./inner-pages/scores/scores.component */ "./src/app/mobile/inner-pages/scores/scores.component.ts");
/* harmony import */ var _inner_pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./inner-pages/change-password/change-password.component */ "./src/app/mobile/inner-pages/change-password/change-password.component.ts");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/services/global.service */ "./src/app/mobile/shared/services/global.service.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/mobile/terms/terms.component.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/mobile/shared/services/user.service.ts");




























var MobileModule = /** @class */ (function () {
    function MobileModule() {
    }
    MobileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _mobile_component__WEBPACK_IMPORTED_MODULE_5__["MobileComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _layout_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _inner_pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _inner_pages_in_play_in_play_component__WEBPACK_IMPORTED_MODULE_12__["InPlayComponent"],
                _inner_pages_market_market_component__WEBPACK_IMPORTED_MODULE_13__["MarketComponent"],
                _inner_pages_sports_sports_component__WEBPACK_IMPORTED_MODULE_14__["SportsComponent"],
                _inner_pages_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_15__["FavoriteComponent"],
                _inner_pages_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_16__["MyProfileComponent"],
                _inner_pages_bet_stake_setting_bet_stake_setting_component__WEBPACK_IMPORTED_MODULE_17__["BetStakeSettingComponent"],
                _inner_pages_account_statement_account_statement_component__WEBPACK_IMPORTED_MODULE_18__["AccountStatementComponent"],
                _inner_pages_bet_history_bet_history_component__WEBPACK_IMPORTED_MODULE_19__["BetHistoryComponent"],
                _inner_pages_profit_loss_profit_loss_component__WEBPACK_IMPORTED_MODULE_20__["ProfitLossComponent"],
                _inner_pages_results_results_component__WEBPACK_IMPORTED_MODULE_21__["ResultsComponent"],
                _inner_pages_scores_scores_component__WEBPACK_IMPORTED_MODULE_22__["ScoresComponent"],
                _inner_pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_23__["ChangePasswordComponent"],
                _terms_terms_component__WEBPACK_IMPORTED_MODULE_25__["TermsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _mobile_routing_module__WEBPACK_IMPORTED_MODULE_6__["MobileRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_4__["NgxSmartModalModule"].forChild()
            ],
            exports: [],
            providers: [_shared_services_global_service__WEBPACK_IMPORTED_MODULE_24__["GlobalService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_26__["UserService"]],
        })
    ], MobileModule);
    return MobileModule;
}());



/***/ }),

/***/ "./src/app/mobile/shared/services/auth/auth.guard.ts":
/*!***********************************************************!*\
  !*** ./src/app/mobile/shared/services/auth/auth.guard.ts ***!
  \***********************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/mobile/shared/services/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, myRoute) {
        this.auth = auth;
        this.myRoute = myRoute;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.getStoredUser()) {
            return true;
        }
        else {
            this.myRoute.navigate(['mobile/login']);
            return false;
        }
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        // return this.canActivate(route, state);
        return this.canActivate(route, state);
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/mobile/shared/services/favorite.service.ts":
/*!************************************************************!*\
  !*** ./src/app/mobile/shared/services/favorite.service.ts ***!
  \************************************************************/
/*! exports provided: FavoriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return FavoriteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_custom_http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/custom-http-client */ "./src/app/mobile/shared/services/api/custom-http-client.ts");



var FavoriteService = /** @class */ (function () {
    function FavoriteService(chhtp) {
        this.chhtp = chhtp;
    }
    FavoriteService.prototype.getFavoriteList = function (slug) {
        return this.chhtp.post("v2/events/app-event/my-favorite-" + slug, {});
    };
    FavoriteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_custom_http_client__WEBPACK_IMPORTED_MODULE_2__["CustomHttpClient"]])
    ], FavoriteService);
    return FavoriteService;
}());



/***/ }),

/***/ "./src/app/mobile/shared/services/global.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/mobile/shared/services/global.service.ts ***!
  \**********************************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _api_custom_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/custom-http-client */ "./src/app/mobile/shared/services/api/custom-http-client.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var GlobalService = /** @class */ (function () {
    function GlobalService(chttp) {
        var _this = this;
        this.chttp = chttp;
        this.commentary$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.balance$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        setInterval(function () {
            _this.getBalance();
            _this.getCommentory();
        }, 100000);
    }
    GlobalService.prototype.getCommentory = function () {
        var _this = this;
        this.chttp.post('v2/events/event/commentary', {}).subscribe(function (resp) {
            if (resp.status) {
                _this.commentary$.next(resp.data);
            }
        });
    };
    GlobalService.prototype.getBalance = function () {
        var _this = this;
        this.chttp.post('v2/users/app-history/get-balance', {}).subscribe(function (resp) {
            if (resp.status) {
                _this.balance$.next(resp.data);
            }
        });
    };
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_custom_http_client__WEBPACK_IMPORTED_MODULE_1__["CustomHttpClient"]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/mobile/shared/services/inplay.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/mobile/shared/services/inplay.service.ts ***!
  \**********************************************************/
/*! exports provided: InPLayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InPLayService", function() { return InPLayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_custom_http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/custom-http-client */ "./src/app/mobile/shared/services/api/custom-http-client.ts");



var InPLayService = /** @class */ (function () {
    function InPLayService(chttp) {
        this.chttp = chttp;
    }
    InPLayService.prototype.getMatchList = function () {
        return this.chttp.post('v2/events/app-event/inplay-today-tomorrow', {});
    };
    InPLayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_custom_http_client__WEBPACK_IMPORTED_MODULE_2__["CustomHttpClient"]])
    ], InPLayService);
    return InPLayService;
}());



/***/ }),

/***/ "./src/app/mobile/shared/services/market.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/mobile/shared/services/market.service.ts ***!
  \**********************************************************/
/*! exports provided: MarketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketService", function() { return MarketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_custom_http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/custom-http-client */ "./src/app/mobile/shared/services/api/custom-http-client.ts");



var MarketService = /** @class */ (function () {
    function MarketService(chhtp) {
        this.chhtp = chhtp;
    }
    MarketService.prototype.getMarketList = function (slug) {
        return this.chhtp.post("v2/events/app-event/my-market-" + slug, {});
    };
    MarketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_custom_http_client__WEBPACK_IMPORTED_MODULE_2__["CustomHttpClient"]])
    ], MarketService);
    return MarketService;
}());



/***/ }),

/***/ "./src/app/mobile/shared/services/sports.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/mobile/shared/services/sports.service.ts ***!
  \**********************************************************/
/*! exports provided: SportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsService", function() { return SportsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_custom_http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/custom-http-client */ "./src/app/mobile/shared/services/api/custom-http-client.ts");



var SportsService = /** @class */ (function () {
    function SportsService(chttp) {
        this.chttp = chttp;
    }
    SportsService.prototype.getSports = function () {
        return this.chttp.post('v2/events/app-event/list', {}, true);
    };
    SportsService.prototype.getSportsEvents = function (slug) {
        return this.chttp.post("v2/events/app-" + slug, {}, true);
    };
    SportsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_custom_http_client__WEBPACK_IMPORTED_MODULE_2__["CustomHttpClient"]])
    ], SportsService);
    return SportsService;
}());



/***/ }),

/***/ "./src/app/mobile/shared/services/user.service.ts":
/*!********************************************************!*\
  !*** ./src/app/mobile/shared/services/user.service.ts ***!
  \********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/mobile/shared/services/auth/auth.service.ts");
/* harmony import */ var _api_custom_http_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/custom-http-client */ "./src/app/mobile/shared/services/api/custom-http-client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var UserService = /** @class */ (function () {
    function UserService(chttp, authService, router) {
        var _this = this;
        this.chttp = chttp;
        this.authService = authService;
        this.router = router;
        this.login = function (data) {
            return _this.chttp.post('v2/app-auth/login', data, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
                if (res.status) {
                    _this.authService.storeUser(res.data);
                }
            }));
        };
        this.logout = function () {
            return _this.chttp
                .post('v2/app-auth/logout', {}, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
                if (res.status === 'success') {
                    _this.authService.removeUser();
                    _this.router.navigate(['mobile/login']);
                }
            }))
                .subscribe();
        };
        this.getProfile = function () {
            return _this.chttp.post('v2/users/setting/bet-config', {});
        };
        this.changePassword = function (data) {
            return _this.chttp.post('v2/users/change-password', data);
        };
        this.getAccountStatement = function () {
            return _this.chttp.post('v2/users/app-history/transaction', {});
        };
        this.getBetHistory = function () {
            return _this.chttp.post('v2/users/app-history/bet-history', {});
        };
        this.getProfitLoss = function () {
            return _this.chttp.post('v2/users/app-history/profit-loss', {});
        };
        this.getResults = function () {
            return _this.chttp.post('v2/users/app-history/market-result', {});
        };
        // if (this.authService.getStoredUser()) {
        //     this.router.navigate(['/dashboard']);
        // }
    }
    UserService.prototype.addRemoveFavorite = function (data) {
        // {
        // 	"event_id": "abc",
        // 	"market_id": "abc",
        // 	"market_type": "match_odd|match_odd2|fancy|fancy2",
        // 	"favorite": "add|remove"
        // }
        return this.chttp.post('v2/users/setting/add-remove-favorite', data);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_custom_http_client__WEBPACK_IMPORTED_MODULE_3__["CustomHttpClient"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/mobile/terms/terms.component.css":
/*!**************************************************!*\
  !*** ./src/app/mobile/terms/terms.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS90ZXJtcy90ZXJtcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mobile/terms/terms.component.html":
/*!***************************************************!*\
  !*** ./src/app/mobile/terms/terms.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start -->\n<div id=\"wrapper\">\n\n  <!-- header part -->\n  <header>\n    <div class=\"header-top term-header\">\n      <div class=\"container\">\n        <div class=\"mini-title-bar full\">\n          <div class=\"left-push\">\n            <div class=\"center bold\">Term and Condition</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <!-- content area part -->\n  <div id=\"content-area\" class=\"term-section\">\n    <div class=\"screen-area\" style=\"background: url(assets/images/term-bg.jpg) no-repeat;\">\n      <div class=\"screen-detail\">\n        <div class=\"inner\">\n          <p>\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti\n            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique\n            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum\n            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil\n            impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor\n            repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et\n            voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,\n            ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"</p>\n          <ul>\n            <li>Temporibus autem quibusdam et aut officiis</li>\n            <li>Temporibus autem quibusdam et aut officiis</li>\n            <li>Temporibus autem quibusdam et aut officiis</li>\n            <li>Temporibus autem quibusdam et aut officiis</li>\n          </ul>\n          <p>\"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and\n            demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain\n            and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through\n            weakness of will, which is the same as saying through shrinking from toil and pain. These cases are\n            perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when\n            nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain\n            avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will\n            frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always\n            holds in these matters to this principle of selection: he rejects pleasures to secure other greater\n            pleasures, or else he endures pains to avoid worse pains.\"</p>\n          <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n            anim id est laborum.\"</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-push\"></div>\n</div>\n\n<!-- footer part -->\n<footer class=\"term-footer\">\n  <div class=\"container\">\n    <div class=\"footer-navigation\">\n      <a [routerLink]=\"[ '/mobile']\" class=\"ft-tab agree\">\n        <span>Agree</span>\n      </a>\n      <a class=\"ft-tab disagree\" (click)='logout()'>\n        <span>Disagree</span>\n      </a>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/mobile/terms/terms.component.ts":
/*!*************************************************!*\
  !*** ./src/app/mobile/terms/terms.component.ts ***!
  \*************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/mobile/shared/services/user.service.ts");



var TermsComponent = /** @class */ (function () {
    function TermsComponent(uService) {
        this.uService = uService;
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent.prototype.logout = function () {
        this.uService.logout();
    };
    TermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(/*! ./terms.component.html */ "./src/app/mobile/terms/terms.component.html"),
            styles: [__webpack_require__(/*! ./terms.component.css */ "./src/app/mobile/terms/terms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=mobile-mobile-module.js.map