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

module.exports = "<div class=\"screen-area icdc-section\">\n\n\t<!-- screen Details part -->\n\t<div class=\"screen-detail\">\n\t\t<div class=\"mini-title-bar full\">\n\t\t\t<div class=\"left-push\">\n\t\t\t\t<div class=\"name\">Account Statement</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"\">\n\t\t\t<div class=\"grey col\">\n\t\t\t\t<div class=\"col-4 bold\">Date</div>\n\t\t\t\t<div class=\"col-4 bold center\">Dr/Cr</div>\n\t\t\t\t<div class=\"col-4 bold center\">Balance</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"inner icdc-part\">\n\t\t\t<div class=\"shadow\" [ngClass]=\"{'light-green': statement.transaction_type === 'CREDIT' , 'red' : statement.transaction_type === 'DEBIT'}\"\n\t\t\t *ngFor=\"let statement of statementList;let odd = odd;\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"col-4 date-col\">\n\t\t\t\t\t\t<span>{{ statement.created_at | millis | date:'dd/MM/yyyy' }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4 center\">\n\t\t\t\t\t\t<span class=\"read-more\" [ngClass]=\"{'green-dark': statement.transaction_type === 'CREDIT' , 'red-dark' : statement.transaction_type === 'DEBIT'}\">{{\n\t\t\t\t\t\t\tstatement.current_balance }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4 center\">\n\t\t\t\t\t\t<span class=\"bold\">{{ statement.transaction_amount }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row-line\">{{ statement.description }}</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

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

module.exports = "<div class=\"screen-area icdc-section bethis-section\">\n\n\t<!-- screen Details part -->\n\t<div class=\"screen-detail\">\n\t\t<div class=\"mini-title-bar full\">\n\t\t\t<div class=\"left-push\">\n\t\t\t\t<div class=\"name\">Bet History</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"\">\n\t\t\t<div class=\"grey col\">\n\t\t\t\t<div class=\"col-6 bold\">Runner Name</div>\n\t\t\t\t<div class=\"col-2 bold center\">Rate</div>\n\t\t\t\t<div class=\"col-2 bold center\">Stack</div>\n\t\t\t\t<div class=\"col-2 bold center\">PL</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"inner icdc-part\">\n\t\t\t<div class=\"shadow\" [ngStyle]=\"{'background': bet.bet_type === 'back' || bet.bet_type === 'yes' ? '#C8E5FC' : '#F7B1C8'   }\"\n\t\t\t *ngFor=\"let bet of betHistory\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t<span class=\"bold\">{{ bet.runner }}</span> <br />\n\t\t\t\t\t\t<span class=\"bold\"> Bet ID : {{ bet.id }}</span> <br />\n\t\t\t\t\t\t<span class=\"bold\">{{ bet.description }}</span> > {{ bet.session}} <br />\n\t\t\t\t\t\t<span>{{ bet.created_at | millis | date : 'medium' }}</span>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2 center\">\n\t\t\t\t\t\t<span class=\"bold\">{{ bet.price }}</span> <br />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2 center\">\n\t\t\t\t\t\t<span class=\"bold\">250000</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2 center\">\n\t\t\t\t\t\t<span class=\"bold\"> {{ bet.loss }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

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

module.exports = "<div class=\"screen-area betstake-section\">\n\n\t<!-- screen Details part -->\n\t<div class=\"screen-detail\">\n\t\t<div class=\"mini-title-bar full\">\n\t\t\t<div class=\"left-push\">\n\t\t\t\t<div class=\"name\">On Click Setting</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"inner\">\n\t\t\t<div class=\"use-stake\">\n\t\t\t\t<h5>Using 1 click Bet us easy :</h5>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Enable 1 Click Betting.</li>\n\t\t\t\t\t<li>Edit Your 1 Click Stack values below.</li>\n\t\t\t\t\t<li>When done with 2 Click Betting, turn off by tapping the toggle tooff.</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"click-betting\">\n\t\t\t\t<h5>Tap to turn on click Betting</h5>\n\t\t\t\t<div class=\"click-button\">\n\t\t\t\t\t<a class=\"on\" [ngClass]=\"{'active': oneClickBetting.is_on }\" (click)='oneClickBetting.is_on = !oneClickBetting.is_on'>ON</a>\n\t\t\t\t\t<a class=\"off\" [ngClass]=\"{'active': !oneClickBetting.is_on }\" (click)='oneClickBetting.is_on = !oneClickBetting.is_on'>OFF</a>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf='oneClickBetting.is_on'>\n\t\t\t\t\t<input type=\"number\" placeholder=\"Amount\" [(ngModel)]='oneClickBetting.value'>\n\t\t\t\t</div>\n\t\t\t\t<button value=\"Save\" class=\"bett-button\">Save</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"mini-title-bar full\">\n\t\t\t<div class=\"left-push\">\n\t\t\t\t<div class=\"name\">On Click Setting</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"inner\">\n\t\t\t<div class=\"bet-list\">\n\t\t\t\t<a class=\"read-more\" *ngFor=\"let bet of bets | keyvalue\" (click)='setBet(bet.key)'>{{ bet.value }}</a>\n\t\t\t</div>\n\t\t\t<form>\n\t\t\t\t<button class=\"saves\" value=\"saves\">SAVES</button>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n"

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
        this.oneClickBetting = {
            is_on: false,
            value: 0
        };
        this.bets = {
            '1000': '1k',
            '2000': '2k',
            '5000': '5k',
            '10000': '10k',
            '25000': '25k',
            '50000': '50k',
            '100000': '1Lac',
            '200000': '2Lac',
            '500000': '5Lac',
            '1000000': '10Lac'
        };
    }
    BetStakeSettingComponent.prototype.ngOnInit = function () {
    };
    BetStakeSettingComponent.prototype.setBet = function (val) {
        alert(val);
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

/***/ "./src/app/mobile/inner-pages/betting-detial-page/betting-detial-page.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/betting-detial-page.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9iZXR0aW5nLWRldGlhbC1wYWdlL2JldHRpbmctZGV0aWFsLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/betting-detial-page.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/betting-detial-page.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen-area\">\n  <div class=\"screen-tab\">\n    <div class=\"col-4 active\">\n      <span>Live Market</span>\n    </div>\n    <div class=\"col-4\">\n      <span>Matched</span>\n    </div>\n    <div class=\"col-4\">\n      <span>Unmatched</span>\n    </div>\n  </div>\n  <div class=\"screen-detail\">\n    <div class=\"tab-details show-tab\">\n      <!-- START : MATCH ODDS -->\n      <app-match-odds></app-match-odds>\n      <!-- END : MATCH ODDS -->\n\n      <!-- START : MATCH ODDS -->\n      <app-match-odds2></app-match-odds2>\n      <!-- END : MATCH ODDS -->\n\n      <!-- START : MATCH ODDS -->\n      <app-fancy></app-fancy>\n      <!-- END : MATCH ODDS -->\n\n      <!-- START : MATCH ODDS -->\n      <app-fancy2></app-fancy2>\n      <!-- END : MATCH ODDS -->\n\n      <!-- START : MATCH ODDS -->\n      <app-lottery></app-lottery>\n      <!-- END : MATCH ODDS -->\n    </div>\n\n\n    <div class=\"tab-details\">\n      <app-matched></app-matched>\n    </div>\n    <div class=\"tab-details\">\n      <app-unmatched></app-unmatched>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/betting-detial-page.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/betting-detial-page.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BettingDetialPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BettingDetialPageComponent", function() { return BettingDetialPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/detail.service */ "./src/app/mobile/shared/services/detail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BettingDetialPageComponent = /** @class */ (function () {
    function BettingDetialPageComponent(aRoute, dService) {
        this.aRoute = aRoute;
        this.dService = dService;
    }
    BettingDetialPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var event_slug = this.aRoute.snapshot.params.slug;
        var event_id = this.aRoute.snapshot.params.event_id;
        this.dService.getBookmarket(event_slug, event_id).subscribe(function (resp) {
            if (resp.status && resp.data.items) {
                _this.matchOdds2 = resp.data.items;
            }
            console.log('------- matchOdds2 --------', resp.data);
        });
        this.dService.getFancyMarket(event_slug, event_id).subscribe(function (resp) {
            if (resp.status && resp.data.items) {
                _this.fancy = resp.data.items;
            }
            console.log('------- fancy --------', resp.data);
        });
        this.dService.getFancy2Market(event_slug, event_id).subscribe(function (resp) {
            if (resp.status && resp.data.items) {
                _this.fancy2 = resp.data.items;
            }
            console.log('------- fancy2 --------', resp.data);
        });
        this.dService.getLottery(event_slug, event_id).subscribe(function (resp) {
            if (resp.status && resp.data.items) {
                _this.lottery = resp.data.items;
            }
            console.log('------- lottery --------', resp.data);
        });
    };
    BettingDetialPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-betting-detial-page',
            template: __webpack_require__(/*! ./betting-detial-page.component.html */ "./src/app/mobile/inner-pages/betting-detial-page/betting-detial-page.component.html"),
            providers: [_shared_services_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]],
            styles: [__webpack_require__(/*! ./betting-detial-page.component.css */ "./src/app/mobile/inner-pages/betting-detial-page/betting-detial-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]])
    ], BettingDetialPageComponent);
    return BettingDetialPageComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/fancy/fancy.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/fancy/fancy.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9iZXR0aW5nLWRldGlhbC1wYWdlL2ZhbmN5L2ZhbmN5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/fancy/fancy.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/fancy/fancy.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n\tFancy : {{ fancyData | json }}\n</p>\n"

/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/fancy/fancy.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/fancy/fancy.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FancyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FancyComponent", function() { return FancyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_mobile_shared_services_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/mobile/shared/services/detail.service */ "./src/app/mobile/shared/services/detail.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var FancyComponent = /** @class */ (function () {
    function FancyComponent(aRoute, dService) {
        this.aRoute = aRoute;
        this.dService = dService;
        this.loader = false;
        this.selected = {
            fancyData: null,
            object: null,
            matchIndex: null,
            runnerIndex: null,
            type: null
        };
        this.formValue = {
            price: 1.01,
            size: 0
        };
    }
    FancyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.event_slug = this.aRoute.snapshot.params.slug;
        this.event_id = this.aRoute.snapshot.params.event_id;
        this.fancySub = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(10000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.dService.getFancyMarket(_this.event_slug, _this.event_id).subscribe(function (resp) {
                console.log('--------- fancy ---------', resp);
                if (resp.status && resp.data.items) {
                    _this.fancyData = resp.data.items;
                }
            });
        })).subscribe();
    };
    FancyComponent.prototype.openForm = function (fancyData, object, type, matchIndex, runnerIndex) {
        if (object.exchange[type].length) {
            this.formValue = {
                price: object.exchange[type][0].price,
                size: 0
            };
            this.selected = {
                fancyData: fancyData, object: object, type: type, runnerIndex: runnerIndex, matchIndex: matchIndex
            };
        }
        else {
            this.closeForm();
        }
    };
    FancyComponent.prototype.closeForm = function () {
        this.formValue = {
            price: 1.01,
            size: 0
        };
        this.selected = {
            fancyData: null,
            object: null,
            matchIndex: null,
            runnerIndex: null,
            type: null
        };
    };
    FancyComponent.prototype.changeSize = function (add, val) {
        if (val) {
            if (add) {
                this.formValue.size = +this.formValue.size + (val * 1000);
            }
            else if (this.formValue.size > 0) {
                var result = this.formValue.size - (val * 1000);
                this.formValue.size = result > -1 ? result : 0;
            }
        }
        else {
            this.formValue.size = 0;
        }
    };
    FancyComponent.prototype.changePrice = function (add) {
        if (add) {
            this.formValue.price = this.formValue.price + 0.01;
        }
        else if (this.formValue.price > 1.01) {
            this.formValue.price = this.formValue.price - 0.01;
        }
    };
    FancyComponent.prototype.makeBet = function () {
        var requestData = {
            'size': this.formValue.size,
            'price': this.formValue.price,
            'runner': this.selected.object.runnerName,
            'bet_type': this.selected.type,
            'session_type': 'match_odd',
            'market_id': this.selected.fancyData.marketId,
            'event_id': this.selected.fancyData.eventId,
            'sec_id': this.selected.object.selectionId,
            'rate': this.getLatestRate(),
            'market_name': this.selected.fancyData.title
        };
        this.dService.makeBet(this.event_slug, requestData).subscribe(function (resp) {
            console.log(resp);
        });
    };
    FancyComponent.prototype.getLatestRate = function () {
        return this.fancyData[this.selected.matchIndex].runners[this.selected.runnerIndex].exchange[this.selected.type][0].price;
    };
    FancyComponent.prototype.ngOnDestroy = function () {
        this.fancySub.unsubscribe();
    };
    FancyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fancy',
            template: __webpack_require__(/*! ./fancy.component.html */ "./src/app/mobile/inner-pages/betting-detial-page/fancy/fancy.component.html"),
            styles: [__webpack_require__(/*! ./fancy.component.css */ "./src/app/mobile/inner-pages/betting-detial-page/fancy/fancy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_mobile_shared_services_detail_service__WEBPACK_IMPORTED_MODULE_3__["DetailService"]])
    ], FancyComponent);
    return FancyComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/fancy2/fancy2.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/fancy2/fancy2.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:disabled {\r\n\tbackground-color: #000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL2lubmVyLXBhZ2VzL2JldHRpbmctZGV0aWFsLXBhZ2UvZmFuY3kyL2ZhbmN5Mi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsdUJBQXVCO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbW9iaWxlL2lubmVyLXBhZ2VzL2JldHRpbmctZGV0aWFsLXBhZ2UvZmFuY3kyL2ZhbmN5Mi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uOmRpc2FibGVkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/fancy2/fancy2.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/fancy2/fancy2.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='fancy2Data'>\n\t<div class=\"news-cell blue-bg cf\">\n\t\t<div class=\"score-part\">\n\t\t\t<div class=\"desc\">\n\t\t\t\t<span> Fancy Market 2 </span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- Current Match -->\n\t<div class=\"current-match\">\n\t\t<div class=\"mini-title-bar\">\n\t\t\t<div class=\"left-push\">\n\t\t\t\t<div class=\"col-4\">Fancy 2</div>\n\t\t\t</div>\n\t\t\t<div class=\"right-push\">\n\t\t\t\t<div class=\"col-4\">NO</div>\n\t\t\t\t<div class=\"col-4\">YES</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"score-group-block\">\n\t\t\t<div class=\"score-block red\" *ngFor=\"let item of fancy2Data; let j = index;\">\n\t\t\t\t<div class=\"left-push\">\n\t\t\t\t\t<div class=\"star\" (click)='addRemoveFavorite(item)'>\n\t\t\t\t\t\t<img src=\"./assets/images/{{ +item.is_favorite ? 'star-yellow.png' : 'star-black.png' }}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t<span>{{ item.title }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button [disabled]=\"!+item.is_book\" (click)='getBookingDetail(item)'>BOOK</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right-push\">\n\t\t\t\t\t<div class=\"ball-run\" *ngIf=\"item.suspended === 'Y' ||  item.ballRunning === 'Y'\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<em class=\"open-ball left\"></em>\n\t\t\t\t\t\t\t<i>{{ item.suspended === 'Y' ? 'Suspended' : item.ballRunning === 'Y' ? 'Ball Running' : '' }}</i>\n\t\t\t\t\t\t\t<em class=\"open-ball right\"></em>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-6 black-score\">\n\t\t\t\t\t\t<div class=\"balance-info num-cell\" (click)='openForm(matchOdd , runner , \"back\" , i , j)'>\n\t\t\t\t\t\t\t<span>{{ item.data.length ? item.data[0].no : '--' }}</span>\n\t\t\t\t\t\t\t<em>{{ item.data.length ? item.data[0].no_rate : '--' }}</em>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-6 lay-score\">\n\t\t\t\t\t\t<div class=\"expose-info num-cell\" (click)='openForm(matchOdd , runner , \"lay\" , i , j)'>\n\t\t\t\t\t\t\t<span> {{ item.data.length ? item.data[0].yes : '--' }}</span>\n\t\t\t\t\t\t\t<em> {{ item.data.length ? item.data[0].yes_rate : '--' }}</em>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- <div class=\"details-popup\" >\n            <ng-container *ngTemplateOutlet=\"backLayform;\"></ng-container>\n          </div> -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<ngx-smart-modal #bookDetailModal identifier=\"bookDetailModal\">\n\t<div class=\"bet-popup\">\n\t\t<div class=\"mini-title-bar full\">\n\t\t\t<div class=\"left-push\">\n\t\t\t\t<div class=\"name\">MY BOOK</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"grey col\">\n\t\t\t<div class=\"col-6 bold center\">Runs</div>\n\t\t\t<div class=\"col-6 bold center\">PL</div>\n\t\t</div>\n\t\t<div class=\"score-pop\" *ngFor=\"let book of bookingData\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<div class=\"col-6 bold\">{{ book.price }}</div>\n\t\t\t\t<div class=\"col-6 bold center\">{{ book.profitLoss }}</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ngx-smart-modal>\n"

/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/fancy2/fancy2.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/fancy2/fancy2.component.ts ***!
  \***********************************************************************************/
/*! exports provided: Fancy2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fancy2Component", function() { return Fancy2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_mobile_shared_services_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/mobile/shared/services/detail.service */ "./src/app/mobile/shared/services/detail.service.ts");
/* harmony import */ var src_app_mobile_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/mobile/shared/services/user.service */ "./src/app/mobile/shared/services/user.service.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");








var Fancy2Component = /** @class */ (function () {
    function Fancy2Component(aRoute, dService, uService, ngxSmartModalService) {
        this.aRoute = aRoute;
        this.dService = dService;
        this.uService = uService;
        this.ngxSmartModalService = ngxSmartModalService;
        this.loader = false;
        this.selected = {
            fancy2Data: null,
            object: null,
            matchIndex: null,
            runnerIndex: null,
            type: null
        };
        this.formValue = {
            price: 1.01,
            size: 0
        };
    }
    Fancy2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.event_slug = this.aRoute.snapshot.params.slug;
        this.event_id = this.aRoute.snapshot.params.event_id;
        this.betDelaySub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(10000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.dService.getBetDelay({ slug: _this.event_slug }).subscribe(function (resp) {
                if (resp.status && resp.data.length) {
                    _this.betDelay = resp.data[0];
                }
            });
        })).subscribe();
        this.fancy2Sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(10000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.dService.getFancy2Market(_this.event_slug, _this.event_id).subscribe(function (resp) {
                console.log('--------- fancy2 ---------', resp);
                if (resp.status && resp.data.items) {
                    if (JSON.stringify(_this.fancy2Data) !== JSON.stringify(resp.data.items)) {
                        _this.fancy2Data = resp.data.items;
                    }
                }
            });
        })).subscribe();
    };
    Fancy2Component.prototype.openForm = function (fancy2Data, object, type, matchIndex, runnerIndex) {
        if (object.exchange[type].length) {
            this.formValue = {
                price: object.exchange[type][0].price,
                size: 0
            };
            this.selected = {
                fancy2Data: fancy2Data, object: object, type: type, runnerIndex: runnerIndex, matchIndex: matchIndex
            };
        }
        else {
            this.closeForm();
        }
    };
    Fancy2Component.prototype.closeForm = function () {
        this.formValue = {
            price: 1.01,
            size: 0
        };
        this.selected = {
            fancy2Data: null,
            object: null,
            matchIndex: null,
            runnerIndex: null,
            type: null
        };
    };
    Fancy2Component.prototype.changeSize = function (add, val) {
        if (val) {
            if (add) {
                this.formValue.size = +this.formValue.size + (val * 1000);
            }
            else if (this.formValue.size > 0) {
                var result = this.formValue.size - (val * 1000);
                this.formValue.size = result > -1 ? result : 0;
            }
        }
        else {
            this.formValue.size = 0;
        }
    };
    Fancy2Component.prototype.changePrice = function (add) {
        if (add) {
            this.formValue.price = this.formValue.price + 0.01;
        }
        else if (this.formValue.price > 1.01) {
            this.formValue.price = this.formValue.price - 0.01;
        }
    };
    Fancy2Component.prototype.makeBet = function () {
        var requestData = {
            'size': this.formValue.size,
            'price': this.formValue.price,
            'runner': this.selected.object.runnerName,
            'bet_type': this.selected.type,
            'session_type': 'match_odd',
            'market_id': this.selected.fancy2Data.marketId,
            'event_id': this.selected.fancy2Data.eventId,
            'sec_id': this.selected.object.selectionId,
            'rate': this.getLatestRate(),
            'market_name': this.selected.fancy2Data.title
        };
        this.dService.makeBet(this.event_slug, requestData).subscribe(function (resp) {
            console.log(resp);
        });
    };
    Fancy2Component.prototype.getLatestRate = function () {
        return this.fancy2Data[this.selected.matchIndex].runners[this.selected.runnerIndex].exchange[this.selected.type][0].price;
    };
    Fancy2Component.prototype.addRemoveFavorite = function (data) {
        var requestData = {
            'event_id': data.event_id,
            'market_id': data.market_id,
            'market_type': 'fancy2',
            'favorite': +data.is_favorite ? 'remove' : 'add'
        };
        this.uService.addRemoveFavorite(requestData).subscribe(function (resp) {
            if (resp.status) {
                data.is_favorite = !+data.is_favorite;
            }
        });
    };
    Fancy2Component.prototype.getBookingDetail = function (data) {
        var _this = this;
        this.bookingData = [];
        var requestData = {
            'event_id': data.event_id,
            'market_id': data.market_id,
            'session_type': 'fancy2',
            'price': '-'
        };
        this.dService.getBookingList(requestData).subscribe(function (resp) {
            if (resp.status) {
                _this.bookingData = resp.data;
                _this.ngxSmartModalService.getModal('bookDetailModal').open();
            }
        });
    };
    Fancy2Component.prototype.ngOnDestroy = function () {
        this.fancy2Sub.unsubscribe();
        this.betDelaySub.unsubscribe();
    };
    Fancy2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fancy2',
            template: __webpack_require__(/*! ./fancy2.component.html */ "./src/app/mobile/inner-pages/betting-detial-page/fancy2/fancy2.component.html"),
            styles: [__webpack_require__(/*! ./fancy2.component.css */ "./src/app/mobile/inner-pages/betting-detial-page/fancy2/fancy2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_mobile_shared_services_detail_service__WEBPACK_IMPORTED_MODULE_5__["DetailService"], src_app_mobile_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__["NgxSmartModalService"]])
    ], Fancy2Component);
    return Fancy2Component;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/lottery/lottery.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/lottery/lottery.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9iZXR0aW5nLWRldGlhbC1wYWdlL2xvdHRlcnkvbG90dGVyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/lottery/lottery.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/lottery/lottery.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n\tlottery : {{ lotteryData | json }}\n</p>\n"

/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/lottery/lottery.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/lottery/lottery.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LotteryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotteryComponent", function() { return LotteryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_mobile_shared_services_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/mobile/shared/services/detail.service */ "./src/app/mobile/shared/services/detail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var LotteryComponent = /** @class */ (function () {
    function LotteryComponent(aRoute, dService) {
        this.aRoute = aRoute;
        this.dService = dService;
        this.loader = false;
        this.selected = {
            lotteryData: null,
            object: null,
            matchIndex: null,
            runnerIndex: null,
            type: null
        };
        this.formValue = {
            price: 1.01,
            size: 0
        };
    }
    LotteryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.event_slug = this.aRoute.snapshot.params.slug;
        this.event_id = this.aRoute.snapshot.params.event_id;
        this.lotterySub = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(10000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.dService.getLottery(_this.event_slug, _this.event_id).subscribe(function (resp) {
                console.log('--------- Lottery ---------', resp);
                if (resp.status && resp.data.items) {
                    _this.lotteryData = resp.data.items;
                }
            });
        })).subscribe();
    };
    LotteryComponent.prototype.openForm = function (lotteryData, object, type, matchIndex, runnerIndex) {
        if (object.exchange[type].length) {
            this.formValue = {
                price: object.exchange[type][0].price,
                size: 0
            };
            this.selected = {
                lotteryData: lotteryData, object: object, type: type, runnerIndex: runnerIndex, matchIndex: matchIndex
            };
        }
        else {
            this.closeForm();
        }
    };
    LotteryComponent.prototype.closeForm = function () {
        this.formValue = {
            price: 1.01,
            size: 0
        };
        this.selected = {
            lotteryData: null,
            object: null,
            matchIndex: null,
            runnerIndex: null,
            type: null
        };
    };
    LotteryComponent.prototype.changeSize = function (add, val) {
        if (val) {
            if (add) {
                this.formValue.size = +this.formValue.size + (val * 1000);
            }
            else if (this.formValue.size > 0) {
                var result = this.formValue.size - (val * 1000);
                this.formValue.size = result > -1 ? result : 0;
            }
        }
        else {
            this.formValue.size = 0;
        }
    };
    LotteryComponent.prototype.changePrice = function (add) {
        if (add) {
            this.formValue.price = this.formValue.price + 0.01;
        }
        else if (this.formValue.price > 1.01) {
            this.formValue.price = this.formValue.price - 0.01;
        }
    };
    LotteryComponent.prototype.makeBet = function () {
        var requestData = {
            'size': this.formValue.size,
            'price': this.formValue.price,
            'runner': this.selected.object.runnerName,
            'bet_type': this.selected.type,
            'session_type': 'match_odd',
            'market_id': this.selected.lotteryData.marketId,
            'event_id': this.selected.lotteryData.eventId,
            'sec_id': this.selected.object.selectionId,
            'rate': this.getLatestRate(),
            'market_name': this.selected.lotteryData.title
        };
        this.dService.makeBet(this.event_slug, requestData).subscribe(function (resp) {
            console.log(resp);
        });
    };
    LotteryComponent.prototype.getLatestRate = function () {
        return this.lotteryData[this.selected.matchIndex].runners[this.selected.runnerIndex].exchange[this.selected.type][0].price;
    };
    LotteryComponent.prototype.ngOnDestroy = function () {
        this.lotterySub.unsubscribe();
    };
    LotteryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lottery',
            template: __webpack_require__(/*! ./lottery.component.html */ "./src/app/mobile/inner-pages/betting-detial-page/lottery/lottery.component.html"),
            styles: [__webpack_require__(/*! ./lottery.component.css */ "./src/app/mobile/inner-pages/betting-detial-page/lottery/lottery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_mobile_shared_services_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]])
    ], LotteryComponent);
    return LotteryComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/match-odds/match-odds.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/match-odds/match-odds.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9iZXR0aW5nLWRldGlhbC1wYWdlL21hdGNoLW9kZHMvbWF0Y2gtb2Rkcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/match-odds/match-odds.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/match-odds/match-odds.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='matchOdds'>\n\t<div class=\"news-cell blue-bg cf\">\n\t\t<div class=\"star\">\n\t\t\t<img src=\"./images/star.png\">\n\t\t</div>\n\t\t<div class=\"score-part\">\n\t\t\t<div class=\"desc\">\n\t\t\t\t<span>{{ matchOdds[0].title }}</span>\n\t\t\t\t<span>No data!</span>\n\t\t\t</div>\n\t\t\t<div class=\"match-score\">\n\t\t\t\t<span>255/7 (50.0)</span>\n\t\t\t\t<span>179/7 (40.0)</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- Current Match -->\n\t<div class=\"current-match\" *ngFor=\"let matchOdd of matchOdds; let i = index;\">\n\t\t<div class=\"mini-title-bar\">\n\t\t\t<div class=\"left-push\">\n\t\t\t\t<div class=\"col-4\">Match odds</div>\n\t\t\t</div>\n\t\t\t<div class=\"right-push\">\n\t\t\t\t<div class=\"col-4\">BACK</div>\n\t\t\t\t<div class=\"col-4\">LAY</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"score-group-block\">\n\t\t\t<div class=\"score-block red\" *ngFor=\"let runner of matchOdd.runners; let j = index;\">\n\t\t\t\t<div class=\"left-push\">\n\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t<span>{{ runner.runnerName }}</span>\n\t\t\t\t\t\t<div class=\"two-value\"><em>40000</em><em>-7000</em></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right-push\">\n\t\t\t\t\t<div class=\"ball-run\" *ngIf=\"matchOdds[0].suspended === 'Y' ||  matchOdds[0].ballRunning === 'Y'\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<em class=\"open-ball left\"></em>\n\t\t\t\t\t\t\t<i>{{ matchOdds[0].suspended === 'Y' ? 'Suspended' : matchOdds[0].ballRunning === 'Y' ? 'Ball Running' : '' }}</i>\n\t\t\t\t\t\t\t<em class=\"open-ball right\"></em>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-6 black-score\">\n\t\t\t\t\t\t<div class=\"balance-info num-cell\" (click)='openForm(matchOdd , runner , \"back\" , i , j)'>\n\t\t\t\t\t\t\t<span>{{ runner.exchange.back.length ? runner.exchange.back[0].price : '--' }}</span>\n\t\t\t\t\t\t\t<em>{{ runner.exchange.back.length ? runner.exchange.back[0].size : '--' }}</em>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-6 lay-score\">\n\t\t\t\t\t\t<div class=\"expose-info num-cell\" (click)='openForm(matchOdd , runner , \"lay\" , i , j)'>\n\t\t\t\t\t\t\t<span> {{ runner.exchange.lay.length ? runner.exchange.lay[0].price : '--' }}</span>\n\t\t\t\t\t\t\t<em> {{ runner.exchange.lay.length ? runner.exchange.lay[0].size : '--' }}</em>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- <div class=\"details-popup\" >\n\t\t\t\t\t<ng-container *ngTemplateOutlet=\"backLayform;\"></ng-container>\n\t\t\t\t</div> -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<ng-template #backLayform>\n\t<div class=\"totol-edit-bar\">\n\t\t<div class=\"col-6\">\n\t\t\t<div class=\"score-add\">\n\t\t\t\t<button type='button' class=\"score-minus\" (click)='changePrice(false)'></button>\n\t\t\t\t<input type=\"text\" readonly name='price' [(ngModel)]=\"formValue.price\">\n\t\t\t\t<button type='button' class=\"score-plus\" (click)='changePrice(true)'></button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-6\">\n\t\t\t<div class=\"score-add\">\n\t\t\t\t<button type='button' class=\"score-minus\" (click)='changeSize(false , 5)'></button>\n\t\t\t\t<input type=\"text\" name='size' [(ngModel)]=\"formValue.size\">\n\t\t\t\t<button type='button' class=\"score-plus\" (click)='changeSize(true , 5)'></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"price-btn\">\n\t\t<button type='button' class=\"pri-btn\" (click)='changeSize(true , 1)'>1K</button>\n\t\t<button type='button' class=\"pri-btn\" (click)='changeSize(true , 2)'>2K</button>\n\t\t<button type='button' class=\"pri-btn\" (click)='changeSize(true , 5)'>5K</button>\n\t\t<button type='button' class=\"pri-btn\" (click)='changeSize(true , 10)'>10K</button>\n\t\t<button type='button' class=\"pri-btn\" (click)='changeSize(true , 25)'>25K</button>\n\t\t<button type='button' class=\"pri-btn red-btn\" (click)='changeSize(true , 0)'>CLR</button>\n\t</div>\n\t<div class=\"submit-area\">\n\t\t<div class=\"col-6\">\n\t\t\t<button type='button' class=\"red-btn btn-prime\" (click)='closeForm()'>Cancel</button>\n\t\t</div>\n\t\t<div class=\"col-6\">\n\t\t\t<button type='button' class=\"green-sub-btn\" (click)='makeBet()'> Place Bet 0 </button>\n\t\t</div>\n\t</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/match-odds/match-odds.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/match-odds/match-odds.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MatchOddsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchOddsComponent", function() { return MatchOddsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_mobile_shared_services_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/mobile/shared/services/detail.service */ "./src/app/mobile/shared/services/detail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var MatchOddsComponent = /** @class */ (function () {
    function MatchOddsComponent(aRoute, dService) {
        this.aRoute = aRoute;
        this.dService = dService;
        this.loader = false;
        this.selected = {
            matchOdds: null,
            object: null,
            matchIndex: null,
            runnerIndex: null,
            type: null
        };
        this.formValue = {
            price: 1.01,
            size: 0
        };
    }
    MatchOddsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.event_slug = this.aRoute.snapshot.params.slug;
        this.event_id = this.aRoute.snapshot.params.event_id;
        this.betDelaySub = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(100000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.dService.getBetDelay({ slug: _this.event_slug }).subscribe(function (resp) {
                if (resp.status && resp.data.length) {
                    _this.betDelay = resp.data[0];
                }
            });
        })).subscribe();
        this.matchOddSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(100000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.dService.getMatchOdd(_this.event_slug, _this.event_id).subscribe(function (resp) {
                console.log(resp);
                if (resp.status && resp.data.items) {
                    _this.matchOdds = resp.data.items;
                }
            });
        })).subscribe();
    };
    MatchOddsComponent.prototype.openForm = function (matchOdds, object, type, matchIndex, runnerIndex) {
        if (object.exchange[type].length) {
            this.formValue = {
                price: object.exchange[type][0].price,
                size: 0
            };
            this.selected = {
                matchOdds: matchOdds, object: object, type: type, runnerIndex: runnerIndex, matchIndex: matchIndex
            };
        }
        else {
            this.closeForm();
        }
    };
    MatchOddsComponent.prototype.closeForm = function () {
        this.formValue = {
            price: 1.01,
            size: 0
        };
        this.selected = {
            matchOdds: null,
            object: null,
            matchIndex: null,
            runnerIndex: null,
            type: null
        };
    };
    MatchOddsComponent.prototype.changeSize = function (add, val) {
        if (val) {
            if (add) {
                this.formValue.size = +this.formValue.size + (val * 1000);
            }
            else if (this.formValue.size > 0) {
                var result = this.formValue.size - (val * 1000);
                this.formValue.size = result > -1 ? result : 0;
            }
        }
        else {
            this.formValue.size = 0;
        }
    };
    MatchOddsComponent.prototype.changePrice = function (add) {
        if (add) {
            this.formValue.price = this.formValue.price + 0.01;
        }
        else if (this.formValue.price > 1.01) {
            this.formValue.price = this.formValue.price - 0.01;
        }
    };
    MatchOddsComponent.prototype.makeBet = function () {
        var _this = this;
        var requestData = {
            'size': this.formValue.size,
            'price': this.formValue.price,
            'runner': this.selected.object.runnerName,
            'bet_type': this.selected.type,
            'session_type': 'match_odd',
            'market_id': this.selected.matchOdds.marketId,
            'event_id': this.selected.matchOdds.eventId,
            'sec_id': this.selected.object.selectionId,
            'rate': this.getLatestRate(),
            'market_name': this.selected.matchOdds.title
        };
        if (this.betDelay) {
            setTimeout(function () {
                _this.dService.makeBet(_this.event_slug, requestData).subscribe(function (resp) {
                    console.log(resp);
                });
            }, this.betDelay.bet_delay * 1000);
        }
        else {
            this.dService.makeBet(this.event_slug, requestData).subscribe(function (resp) {
                console.log(resp);
            });
        }
    };
    MatchOddsComponent.prototype.getLatestRate = function () {
        return this.matchOdds[this.selected.matchIndex].runners[this.selected.runnerIndex].exchange[this.selected.type][0].price;
    };
    MatchOddsComponent.prototype.ngOnDestroy = function () {
        this.matchOddSub.unsubscribe();
        this.betDelaySub.unsubscribe();
    };
    MatchOddsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-match-odds',
            template: __webpack_require__(/*! ./match-odds.component.html */ "./src/app/mobile/inner-pages/betting-detial-page/match-odds/match-odds.component.html"),
            providers: [src_app_mobile_shared_services_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]],
            styles: [__webpack_require__(/*! ./match-odds.component.css */ "./src/app/mobile/inner-pages/betting-detial-page/match-odds/match-odds.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_mobile_shared_services_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]])
    ], MatchOddsComponent);
    return MatchOddsComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/match-odds2/match-odds2.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/match-odds2/match-odds2.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9iZXR0aW5nLWRldGlhbC1wYWdlL21hdGNoLW9kZHMyL21hdGNoLW9kZHMyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/match-odds2/match-odds2.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/match-odds2/match-odds2.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  match-odds2 works!\n</p>\n"

/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/match-odds2/match-odds2.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/match-odds2/match-odds2.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MatchOdds2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchOdds2Component", function() { return MatchOdds2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MatchOdds2Component = /** @class */ (function () {
    function MatchOdds2Component() {
    }
    MatchOdds2Component.prototype.ngOnInit = function () {
    };
    MatchOdds2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-match-odds2',
            template: __webpack_require__(/*! ./match-odds2.component.html */ "./src/app/mobile/inner-pages/betting-detial-page/match-odds2/match-odds2.component.html"),
            styles: [__webpack_require__(/*! ./match-odds2.component.css */ "./src/app/mobile/inner-pages/betting-detial-page/match-odds2/match-odds2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MatchOdds2Component);
    return MatchOdds2Component;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/matched/matched.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/matched/matched.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9iZXR0aW5nLWRldGlhbC1wYWdlL21hdGNoZWQvbWF0Y2hlZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/matched/matched.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/matched/matched.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col\">\n  <div class=\"col-7\"></div>\n  <div class=\"col-2 center bold\">Odds</div>\n  <div class=\"col-2 center bold\">Stack</div>\n  <div class=\"col-2 center bold\">PL</div>\n</div>\n<div class=\"news-cell blue-bg cf\">\n  <div class=\"desc\">\n    <span>Macth ODD</span>\n  </div>\n</div>\n<div class=\"col red seprater\">\n  <div class=\"col-7 bold\">Islamabad United</div>\n  <div class=\"col-2 center bold\">1.94</div>\n  <div class=\"col-2 center bold\">5000</div>\n  <div class=\"col-2 center bold\">4700</div>\n</div>\n<div class=\"col blue seprater\">\n  <div class=\"col-7 bold\">Islamabad United</div>\n  <div class=\"col-2 center bold\">1.94</div>\n  <div class=\"col-2 center bold\">5000</div>\n  <div class=\"col-2 center bold\">4700</div>\n</div>\n<div class=\"col red seprater\">\n  <div class=\"col-7 bold\">Islamabad United</div>\n  <div class=\"col-2 center bold\">1.94</div>\n  <div class=\"col-2 center bold\">5000</div>\n  <div class=\"col-2 center bold\">4700</div>\n</div>\n<div class=\"col blue seprater\">\n  <div class=\"col-7 bold\">Islamabad United</div>\n  <div class=\"col-2 center bold\">1.94</div>\n  <div class=\"col-2 center bold\">5000</div>\n  <div class=\"col-2 center bold\">4700</div>\n</div>"

/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/matched/matched.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/matched/matched.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MatchedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchedComponent", function() { return MatchedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MatchedComponent = /** @class */ (function () {
    function MatchedComponent() {
    }
    MatchedComponent.prototype.ngOnInit = function () {
    };
    MatchedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-matched',
            template: __webpack_require__(/*! ./matched.component.html */ "./src/app/mobile/inner-pages/betting-detial-page/matched/matched.component.html"),
            styles: [__webpack_require__(/*! ./matched.component.css */ "./src/app/mobile/inner-pages/betting-detial-page/matched/matched.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MatchedComponent);
    return MatchedComponent;
}());



/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/unmatched/unmatched.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/unmatched/unmatched.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9pbm5lci1wYWdlcy9iZXR0aW5nLWRldGlhbC1wYWdlL3VubWF0Y2hlZC91bm1hdGNoZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/unmatched/unmatched.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/unmatched/unmatched.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col\">\n  <div class=\"col-7\"></div>\n  <div class=\"col-2 center bold\">Odds</div>\n  <div class=\"col-2 center bold\">Stack</div>\n  <div class=\"col-2 center bold\">PL</div>\n  <div class=\"col-2 center bold\">Delete</div>\n</div>\n<div class=\"news-cell blue-bg cf\">\n  <div class=\"desc\">\n    <span>MATCH ODD</span>\n  </div>\n</div>\n<div class=\"col red seprater\">\n  <div class=\"col-7 bold\">Islamabad United</div>\n  <div class=\"col-2 center bold\">1.94</div>\n  <div class=\"col-2 center bold\">5000</div>\n  <div class=\"col-2 center bold\">4700</div>\n  <div class=\"col-2 center\"><button class=\"delete\"><img src=\"images/delete.png\" alt=\"Delete\"></button></div>\n</div>\n<div class=\"col blue seprater\">\n  <div class=\"col-7 bold\">Islamabad United</div>\n  <div class=\"col-2 center bold\">1.94</div>\n  <div class=\"col-2 center bold\">5000</div>\n  <div class=\"col-2 center bold\">4700</div>\n  <div class=\"col-2 center\"><button class=\"delete\"><img src=\"images/delete.png\" alt=\"Delete\"></button></div>\n</div>"

/***/ }),

/***/ "./src/app/mobile/inner-pages/betting-detial-page/unmatched/unmatched.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/mobile/inner-pages/betting-detial-page/unmatched/unmatched.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UnmatchedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnmatchedComponent", function() { return UnmatchedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnmatchedComponent = /** @class */ (function () {
    function UnmatchedComponent() {
    }
    UnmatchedComponent.prototype.ngOnInit = function () {
    };
    UnmatchedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unmatched',
            template: __webpack_require__(/*! ./unmatched.component.html */ "./src/app/mobile/inner-pages/betting-detial-page/unmatched/unmatched.component.html"),
            styles: [__webpack_require__(/*! ./unmatched.component.css */ "./src/app/mobile/inner-pages/betting-detial-page/unmatched/unmatched.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UnmatchedComponent);
    return UnmatchedComponent;
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

module.exports = "<div class=\"sports-page\">\n\n\t<div class=\"screen-area\">\n\t\t<div class=\"screen-detail\">\n\t\t\t<div class=\"news-cell blue-bg cf\">\n\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t<span>SPORTS</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"sports-part inner\">\n\t\t\t\t<div class=\"sports\" *ngFor=\"let sport of sports\">\n\t\t\t\t\t<a [routerLink]=\"[ '/mobile/sports' , sport.event_slug  ]\">\n\t\t\t\t\t\t<figure><img [src]=\"sport.img\" [alt]='sport.event_type_name'></figure>\n\t\t\t\t\t\t<h4>{{ sport.event_type_name }}</h4>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

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
            console.log(resp);
            if (resp.status && resp.data.items) {
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

module.exports = "<div class=\"screen-area\">\n\n\t<!-- screen tab part -->\n\t<div class=\"screen-tab\">\n\t\t<div class=\"col-4\" (click)='setTab(\"inplay\")' [ngClass]=\"{'active': activeTab === 'inplay'}\">\n\t\t\t<span>InPlay</span>\n\t\t</div>\n\t\t<div class=\"col-4\" (click)='setTab(\"today\")' [ngClass]=\"{'active': activeTab === 'today'}\">\n\t\t\t<span>Today</span>\n\t\t</div>\n\t\t<div class=\"col-4\" (click)='setTab(\"tomorrow\")' [ngClass]=\"{'active': activeTab === 'tomorrow'}\">\n\t\t\t<span>Tomorrow</span>\n\t\t</div>\n\t</div>\n\n\t<!-- screen Details part -->\n\t<div class=\"screen-detail\">\n\n\t\t<!-- tab details part -->\n\t\t<div class=\"tab-details inplay-part\" [ngClass]=\"{'show-tab': activeTab === 'inplay'}\">\n\t\t\t<div *ngFor=\"let item of inplay\">\n\t\t\t\t<div class=\"mini-title-bar full\" *ngIf='item.list.length'>\n\t\t\t\t\t<div class=\"left-push\">\n\t\t\t\t\t\t<div class=\"name\">{{ item.title }}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"news-info-cell cf\" *ngFor=\"let obj of item.list; let j = index;\">\n\t\t\t\t\t<div class=\"star\" (click)='addRemoveFavorite(item , j)'>\n\t\t\t\t\t\t<img src=\"./assets/images/{{ +obj.is_favorite ? 'star-yellow.png' : 'star-black.png' }}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"desc\" (click)='redirectToDetail(obj)'>\n\t\t\t\t\t\t<span> {{ obj.title }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"btn-cell\">\n\t\t\t\t\t\t<a href=\"score.html\" class=\"play-btn\">In-Play</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- tab details part -->\n\t\t<div class=\"tab-details\" [ngClass]=\"{'show-tab': activeTab === 'today'}\">\n\t\t\t<div *ngFor=\"let item of today\">\n\t\t\t\t<div class=\"mini-title-bar full\" *ngIf='item.list.length'>\n\t\t\t\t\t<div class=\"left-push\">\n\t\t\t\t\t\t<div class=\"name\">{{ item.title }}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"news-info-cell cf\" *ngFor=\"let obj of item.list; let j = index;\">\n\t\t\t\t\t<div class=\" star\" (click)='addRemoveFavorite(item , j)'>\n\t\t\t\t\t\t<img src=\"./assets/images/{{ +obj.is_favorite ? 'star-yellow.png' : 'star-black.png' }}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"desc\" (click)='redirectToDetail(obj)'>\n\t\t\t\t\t\t<span> {{ obj.title }}</span>\n\t\t\t\t\t\t<em> {{ obj.time | millis | date:'medium' }}</em>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- tab details part -->\n\t\t<div class=\"tab-details\" [ngClass]=\"{'show-tab': activeTab === 'tomorrow'}\">\n\t\t\t<div *ngFor=\"let item of tomorrow\">\n\t\t\t\t<div class=\"mini-title-bar full\" *ngIf='item.list.length'>\n\t\t\t\t\t<div class=\"left-push\">\n\t\t\t\t\t\t<div class=\"name\">{{ item.title }}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"news-info-cell cf\" *ngFor=\"let obj of item.list; let j = index;\">\n\t\t\t\t\t<div class=\" star\" (click)='addRemoveFavorite(item , j)'>\n\t\t\t\t\t\t<img src=\"./assets/images/{{ +obj.is_favorite ? 'star-yellow.png' : 'star-black.png' }}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"desc\" (click)='redirectToDetail(obj)'>\n\t\t\t\t\t\t<span> {{ obj.title }}</span>\n\t\t\t\t\t\t<em> {{ obj.time | millis | date : 'medium' }}</em>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var InPlayComponent = /** @class */ (function () {
    function InPlayComponent(ipService, uService, router) {
        this.ipService = ipService;
        this.uService = uService;
        this.router = router;
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
    InPlayComponent.prototype.redirectToDetail = function (obj) {
        this.router.navigate(["/mobile/detail/" + obj.slug + "/" + obj.eventId]);
    };
    InPlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-in-play',
            template: __webpack_require__(/*! ./in-play.component.html */ "./src/app/mobile/inner-pages/in-play/in-play.component.html"),
            providers: [_shared_services_inplay_service__WEBPACK_IMPORTED_MODULE_2__["InPLayService"]],
            styles: [__webpack_require__(/*! ./in-play.component.css */ "./src/app/mobile/inner-pages/in-play/in-play.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_inplay_service__WEBPACK_IMPORTED_MODULE_2__["InPLayService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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

module.exports = "<div class=\"screen-area  profit-section\">\n\n\t<!-- screen Details part -->\n\t<div class=\"screen-detail\">\n\t\t<div class=\"mini-title-bar full\">\n\t\t\t<div class=\"left-push\">\n\t\t\t\t<div class=\"name\">Profit / Loss</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"\">\n\t\t\t<div class=\"grey col\">\n\t\t\t\t<div class=\"col-7 bold\">Market Name</div>\n\t\t\t\t<div class=\"col-2 bold center\">PL</div>\n\t\t\t\t<div class=\"col-2 bold center\">Comm.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"inner icdc-part\">\n\t\t\t<!-- Light Green -->\n\t\t\t<div class=\"shadow\" [ngClass]=\"{'light-green': item.profitLoss > 0 , 'light-red': item.profitLoss <= 0  }\" *ngFor=\"let item of profitLoss;let i =index;\">\n\t\t\t\t<span class=\"bold\">{{item.sport}}</span>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"col-7 date-col\">\n\t\t\t\t\t\t<div class=\"bold\">{{ item.event_name }}</div>\n\t\t\t\t\t\t<div class=\"bold green-color\">Winner - {{ item.winner }}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2 center\">\n\t\t\t\t\t\t<span class=\"green-color bold\">{{ item.profitLoss }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2 center\">\n\t\t\t\t\t\t<span class=\"green-color bold\">{{ item.commission }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t<div class=\"medium\">Start Time : {{ item.start_time | millis | date:'medium' }}</div>\n\t\t\t\t\t\t<div class=\"medium\">Settled Time : {{ item.settled_time | millis | date:'medium' }}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2 center\">\n\t\t\t\t\t\t<a class=\"read-more fancybox green-dark\" (click)='openBetIndex(i)'>BETS</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<ngx-smart-modal #betModal identifier=\"betModal\">\n\t<div class=\"bet-popup\" *ngIf='selectedBet'>\n\t\t<div class=\"mini-title-bar full\">\n\t\t\t<div class=\"left-push\">\n\t\t\t\t<div class=\"name\">India v Australis (5th ODI)</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"grey col\">\n\t\t\t<div class=\"col-6 bold\">Runner Name</div>\n\t\t\t<div class=\"col-2 bold center\">Odds</div>\n\t\t\t<div class=\"col-2 bold center\">Stack</div>\n\t\t\t<div class=\"col-2 bold center\">PL</div>\n\t\t</div>\n\t\t<div class=\"score-pop\" *ngFor=\"let bet of selectedBet.betList.list\">\n\t\t\t<div class=\"col\" [ngClass]=\"{'blue': bet.bet_type === 'back' , 'red' : bet.bet_type === 'lay'}\">\n\t\t\t\t<div class=\"col-6 bold\">{{ bet.runner }}</div>\n\t\t\t\t<div class=\"col-2 bold center\">1.55</div>\n\t\t\t\t<div class=\"col-2 bold center\">2000</div>\n\t\t\t\t<div class=\"col-2 bold center\">-2000</div>\n\t\t\t</div>\n\t\t\t<div class=\"medium col\" [ngClass]=\"{'light-blue': bet.bet_type === 'back' , 'light-red' : bet.bet_type === 'lay'}\">{{\n\t\t\t\tbet.updated_at | millis | date:'medium' }}</div>\n\t\t</div>\n\t</div>\n</ngx-smart-modal>\n"

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

module.exports = "<div class=\"screen-area result-section\">\n\n\t<!-- screen Details part -->\n\t<div class=\"screen-detail\">\n\t\t<div class=\"mini-title-bar full\">\n\t\t\t<div class=\"left-push\">\n\t\t\t\t<div class=\"name\">Result</div>\n\t\t\t</div>\n\t\t\t<div class=\"result-title col black\">\n\t\t\t\t<div class=\"col-8\">Market Name</div>\n\t\t\t\t<div class=\"col-2\">Winner</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"inner\">\n\t\t\t<div class=\"result col shadow\" *ngFor=\"let result of results\">\n\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t<h5>{{ result.market_name }}</h5>\n\t\t\t\t\t<p>{{ result.event_name }}</p>\n\t\t\t\t\t<p>{{ result.time | millis | date : 'medium' }}</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t<h6>{{ result.result }}</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

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

module.exports = "<div class=\"screen-area\">\r\n\r\n    <!-- screen tab part -->\r\n    <div class=\"screen-tab\">\r\n        <div class=\"col-4\" (click)='selected = i' [ngClass]=\"{'active': i === selected}\"\r\n            *ngFor='let sport of sports;let i = index;'>\r\n            <span>{{ sport.event_type_name }}</span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"screen-detail\" *ngFor='let event of events;let i = index;'>\r\n\r\n        <!-- tab details part -->\r\n        <div class=\"tab-details inplay-part\" [ngClass]=\"{'show-tab':  i === selected}\">\r\n            <div class=\"news-info-cell cf\" *ngFor=\"let obj of  event.inplay; let j = index;\">\r\n                <div class=\"star\" (click)='addRemoveFavorite(event.inplay , j)'>\r\n                    <img src=\"./assets/images/{{ +obj.is_favorite ? 'star-yellow.png' : 'star-black.png' }}\">\r\n                </div>\r\n                <div class=\"desc\" (click)='redirectToDetail(obj)'>\r\n                    <span> {{ obj.title }}</span>\r\n                </div>\r\n                <div class=\"btn-cell\">\r\n                    <a href=\"score.html\" class=\"play-btn\">In-Play</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"news-info-cell cf\" *ngFor=\"let obj of event.upcoming; let j = index;\">\r\n                <div class=\"star\" (click)='addRemoveFavorite(event.upcoming , j)'>\r\n                    <img src=\"./assets/images/{{ +obj.is_favorite ? 'star-yellow.png' : 'star-black.png' }}\">\r\n                </div>\r\n                <div class=\"desc\" (click)='redirectToDetail(obj)'>\r\n                    <span> {{ obj.title }}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>"

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
    function SportsComponent(sService, uService, aRoute, router) {
        this.sService = sService;
        this.uService = uService;
        this.aRoute = aRoute;
        this.router = router;
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
    SportsComponent.prototype.redirectToDetail = function (obj) {
        this.router.navigate(["/mobile/detail/" + obj.slug + "/" + obj.eventId]);
    };
    SportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sports',
            template: __webpack_require__(/*! ./sports.component.html */ "./src/app/mobile/inner-pages/sports/sports.component.html"),
            providers: [_shared_services_sports_service__WEBPACK_IMPORTED_MODULE_2__["SportsService"]],
            styles: [__webpack_require__(/*! ./sports.component.css */ "./src/app/mobile/inner-pages/sports/sports.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_sports_service__WEBPACK_IMPORTED_MODULE_2__["SportsService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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

module.exports = ":host {\r\n\tposition: fixed;\r\n\tbottom: 0px;\r\n\twidth: 100%;\r\n\tbackground: rgba(0, 123, 74, 0.18);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFlBQVk7Q0FDWixtQ0FBbUM7Q0FDbkMiLCJmaWxlIjoic3JjL2FwcC9tb2JpbGUvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0Ym90dG9tOiAwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAxMjMsIDc0LCAwLjE4KTtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







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
        this._headerSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            _this.gService.getBalance().subscribe(function (resp) {
                if (resp.status) {
                    _this.balance = resp.data;
                }
            });
            _this.gService.getCommentory().subscribe(function (resp) {
                if (resp.status) {
                    _this.commentary = resp.data;
                }
            });
        })).subscribe();
    };
    HeaderComponent.prototype.logout = function () {
        this.uService.logout();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this._headerSub.unsubscribe();
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

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9sYXlvdXQvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */"

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
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('v1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('12341234', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
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
/* harmony import */ var _inner_pages_betting_detial_page_betting_detial_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./inner-pages/betting-detial-page/betting-detial-page.component */ "./src/app/mobile/inner-pages/betting-detial-page/betting-detial-page.component.ts");























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
                    { path: 'detail/:slug/:event_id', component: _inner_pages_betting_detial_page_betting_detial_page_component__WEBPACK_IMPORTED_MODULE_22__["BettingDetialPageComponent"] },
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

module.exports = "\r\n@import url('https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');\n@charset \"utf-8\";\nbody.dialog-open {\n  overflow: hidden; }\n.nsm-dialog-btn-close {\n  border: 0;\n  background: none;\n  color: #2d2d2d;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  font-size: 1.2em;\n  cursor: pointer; }\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  transition: background-color 500ms;\n  background-color: transparent;\n  z-index: 999; }\n.overlay.nsm-overlay-open {\n    background-color: rgba(0, 0, 0, 0.5); }\n.overlay.transparent {\n    background-color: transparent; }\n.nsm-dialog {\n  position: relative;\n  opacity: 1;\n  visibility: visible;\n  min-height: 200px;\n  width: 100%;\n  max-width: 520px;\n  margin: 0 auto;\n  pointer-events: none; }\n.nsm-dialog.nsm-dialog-close {\n    opacity: 0; }\n.nsm-dialog.nsm-centered {\n    display: flex;\n    align-items: center;\n    min-height: calc(100% - (1.75rem * 2)); }\n.nsm-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  background-clip: padding-box;\n  background-color: #fff;\n  border-radius: 2px;\n  padding: 1rem;\n  margin: 1.75rem;\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n  outline: 0;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n.nsm-body {\n  position: relative;\n  flex: 1 1 auto; }\n/* *************************\n* Animations\n* *************************/\n.nsm-dialog[class*=nsm-dialog-animation-] {\n  transition: opacity 500ms, -webkit-transform 500ms ease-in-out;\n  transition: transform 500ms ease-in-out, opacity 500ms;\n  transition: transform 500ms ease-in-out, opacity 500ms, -webkit-transform 500ms ease-in-out; }\n.nsm-dialog-animation-ltr {\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0); }\n.nsm-dialog-animation-ltr.nsm-dialog-open {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n.nsm-dialog-animation-ltr.nsm-dialog-close {\n    -webkit-transform: translate3d(-50%, 0, 0);\n            transform: translate3d(-50%, 0, 0); }\n.nsm-dialog-animation-rtl {\n  -webkit-transform: translate3d(50%, 0, 0);\n          transform: translate3d(50%, 0, 0); }\n.nsm-dialog-animation-rtl.nsm-dialog-open {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n.nsm-dialog-animation-rtl.nsm-dialog-close {\n    -webkit-transform: translate3d(50%, 0, 0);\n            transform: translate3d(50%, 0, 0); }\n.nsm-dialog-animation-ttb {\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0); }\n.nsm-dialog-animation-ttb.nsm-dialog-open {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n.nsm-dialog-animation-ttb.nsm-dialog-close {\n    -webkit-transform: translate3d(0, -50%, 0);\n            transform: translate3d(0, -50%, 0); }\n.nsm-dialog-animation-btt {\n  -webkit-transform: translate3d(0, 50%, 0);\n          transform: translate3d(0, 50%, 0); }\n.nsm-dialog-animation-btt.nsm-dialog-open {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n.nsm-dialog-animation-btt.nsm-dialog-close {\n    -webkit-transform: translate3d(0, 50%, 0);\n            transform: translate3d(0, 50%, 0); }\n/* CSS Document */\n/* Table of Contents\r\n-----------------------------------------------------------------------------\r\n\t1. Clean Base\r\n\t2. Base Typography\r\n\t3. Images\r\n\t4. Links\r\n\t5. Forms\r\n\t6. Tables\r\n\t7. Framework \r\n*/\n/* 1. Clean Base\r\n------------------------------------------------------------------------------*/\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\nabbr,\r\naddress,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\nsamp,\r\nsmall,\r\nstrong,\r\nsub,\r\nsup,\r\nvar,\r\nb,\r\ni,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\na,\r\nnav,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n\tmargin: 0 auto;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\toutline: 0;\r\n\tfont-size: 100%;\r\n\tvertical-align: baseline;\r\n\tbackground: transparent;\r\n\ttext-decoration: none;\r\n\tlist-style: none;\r\n\toutline: none;\r\n\t-webkit-font-smoothing: subpixel-antialiased;\r\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\nhtml,\r\nbody {\r\n\t-webkit-text-size-adjust: none;\r\n\t-webkit-font-smoothing: antialiased;\r\n\theight: 100%;\r\n}\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection,\r\nsummary {\r\n\tdisplay: block;\r\n}\nimg {\r\n\tborder: none;\r\n}\ninput[type=\"text\"],\r\ninput[type=\"submit\"],\r\ninput[type=\"button\"],\r\ninput[type=\"password\"],\r\ninput[type=\"email\"],\r\ninput[type=\"tel\"],\r\ninput[type=\"search\"],\r\ntextarea {\r\n\t-webkit-appearance: none;\r\n\toutline: none;\r\n}\ntextarea:focus,\r\ninput:focus,\r\na,\r\ndiv,\r\nimg {\r\n\toutline: none;\r\n}\n.cf:before,\r\n.cf:after {\r\n\tcontent: \"\";\r\n\tdisplay: table;\r\n}\n.cf:after {\r\n\tclear: both;\r\n}\n.cf {\r\n\tzoom: 1;\r\n}\n.clear {\r\n\tclear: both;\r\n}\n.clearfix:after {\r\n\tcontent: \".\";\r\n\tdisplay: block;\r\n\theight: 0;\r\n\tclear: both;\r\n\tvisibility: hidden;\r\n}\n.clearfix {\r\n\tdisplay: inline-block;\r\n}\n* html .clearfix {\r\n\theight: 1%;\r\n}\n.clearfix {\r\n\tdisplay: block;\r\n}\n/* 2. Base Typography\r\n------------------------------------------------------------------------------*/\nbody {\r\n\tcolor: #373d48;\r\n\tfont-size: 13px;\r\n\tfont-family: 'Raleway', sans-serif;\r\n\tfont-weight: 400;\r\n\tline-height: 22px;\r\n\tdisplay: flex;\r\n\toverflow: hidden;\r\n\tmin-height: 100vh;\r\n\tflex-direction: column;\r\n}\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tmargin-bottom: 20px;\r\n\tfont-weight: normal;\r\n\tcolor: #000;\r\n}\nh1 {\r\n\tfont-size: 34px;\r\n}\nh2 {\r\n\tfont-size: 36px;\r\n}\nh3 {\r\n\tfont-size: 30px;\r\n}\nh4 {\r\n\tfont-size: 26px;\r\n}\nh5 {\r\n\tcolor: #007b4a;\r\n\tline-height: 22px;\r\n\tfont-size: 14px;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 700;\r\n\tmargin: 0 0 2px 0;\r\n}\nh6 {\r\n\tfont-size: 15px;\r\n\tfont-weight: 400;\r\n\tmargin: 0;\r\n}\np {\r\n\tcolor: #373d48;\r\n\tfont-size: 13px;\r\n\tfont-weight: 400;\r\n\tline-height: 22px;\r\n\tmargin-bottom: 20px;\r\n}\nul {\r\n\tmargin: 20px 20px;\r\n\tpadding: 0;\r\n}\nul li {\r\n\tfont-size: 13px;\r\n\tcolor: #373d48;\r\n\tfont-weight: 400;\r\n\tline-height: 22px;\r\n\tpadding: 0 0 5px 0;\r\n\tlist-style: outside circle;\r\n}\nol {\r\n\tmargin: 20px 20px;\r\n\tpadding: 0;\r\n}\nol li {\r\n\tfont-size: 13px;\r\n\tcolor: #373d48;\r\n\tfont-weight: 400;\r\n\tline-height: 18px;\r\n\tpadding: 0 0 5px 0;\r\n\tlist-style: decimal;\r\n\tmargin-left: 20px;\r\n}\nblockquote {\r\n\tdisplay: block;\r\n\ttext-align: left;\r\n\tmargin-bottom: 20px;\r\n\tposition: relative;\r\n\tbackground: #f3f3f3;\r\n\tpadding: 20px 20px 10px 20px;\r\n\tborder-left: 2px solid #1589cb;\r\n}\nblockquote p {\r\n\tfont-size: 13px;\r\n\tfont-weight: 400;\r\n\tline-height: 17px;\r\n\tmargin-bottom: 15px;\r\n\tposition: relative;\r\n}\nhr {\r\n\tborder: 0 #000 solid;\r\n\tborder-top-width: 1px;\r\n\tclear: both;\r\n\theight: 0;\r\n}\n/* 3. Images\r\n------------------------------------------------------------------------------*/\nimg {\r\n\tborder: none;\r\n\tborder-style: none;\r\n\tvertical-align: middle;\r\n}\n/* 4. Link\r\n------------------------------------------------------------------------------*/\na {\r\n\tcolor: #4777ac;\r\n\ttransition: .3s;\r\n}\na:hover {\r\n\tcolor: #4777ac;\r\n\ttext-decoration: none;\r\n}\na:active,\r\na.current {\r\n\tcolor: #e8941a;\r\n}\na:focus {\r\n\toutline: none;\r\n}\n/* 5. Forms\r\n------------------------------------------------------------------------------*/\ninput[type=\"text\"],\r\ninput[type=\"password\"],\r\ninput[type=\"email\"],\r\ninput[type=\"tel\"],\r\ninput[type=\"search\"] {\r\n\tborder: 1px solid #dedede;\r\n\tpadding: 0 15px;\r\n\tcolor: #666666;\r\n\tfont-size: 12px;\r\n\theight: 36px;\r\n}\ntextarea {\r\n\tborder: 1px solid #dedede;\r\n\tpadding: 5px 15px;\r\n\tcolor: #666666;\r\n\tfont-size: 12px;\r\n\theight: 60px;\r\n\tresize: none;\r\n\tfont-family: 'Raleway', sans-serif;\r\n\tline-height: 16px;\r\n}\ninput[type=\"submit\"],\r\ninput[type=\"button\"],\r\ninput[type=\"reset\"] {\r\n\tbackground: #666;\r\n\tcursor: pointer;\r\n\tcolor: #fff;\r\n\tborder: none;\r\n\theight: 30px;\r\n\tline-height: 28px;\r\n\tdisplay: block;\r\n\tfont-size: 15px;\r\n}\ninput[type=\"submit\"]:hover,\r\ninput[type=\"button\"]:hover {\r\n\tbackground: #666;\r\n\tcolor: #fff;\r\n}\n/* 6. Tables\r\n------------------------------------------------------------------------------*/\ntable {\r\n\tborder-spacing: 0;\r\n\tborder-collapse: collapse;\r\n}\ntd {\r\n\ttext-align: left;\r\n\tfont-weight: normal;\r\n}\n/* 7. Layout Framework\r\n------------------------------------------------------------------------------*/\n/* main container */\n#wrapper {\r\n\twidth: 100%;\r\n\tflex: 1;\r\n}\n.container {\r\n\tmax-width: 100%;\r\n\twidth: 100%;\r\n}\n.footer,\r\n.push {\r\n\theight: 22px;\r\n\t/* .push must be the same height as .footer */\r\n}\n.col {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tflex: 1;\r\n\tmargin: 0;\r\n\tpadding: 6px 15px;\r\n\talign-items: center;\r\n}\n.col-2,\r\n.col-3,\r\n.col-4,\r\n.col-5,\r\n.col-6,\r\n.col-7,\r\n.col-8 {\r\n\tmargin: 0;\r\n}\n.col-1 {\r\n\twidth: 15%;\r\n}\n.col-2 {\r\n\twidth: 20%;\r\n}\n.col-3 {\r\n\twidth: 25%;\r\n}\n.col-4 {\r\n\twidth: 33.33%;\r\n}\n.col-5 {\r\n\twidth: 40%;\r\n}\n.col-6 {\r\n\twidth: 50%;\r\n}\n.col-7 {\r\n\twidth: 55%;\r\n}\n.col-8 {\r\n\twidth: 80%;\r\n}\n.col-9 {\r\n\twidth: 75%;\r\n\tmargin: 0;\r\n}\n.center {\r\n\ttext-align: center;\r\n}\n.left {\r\n\ttext-align: left\r\n}\n.bold {\r\n\tfont-weight: 700;\r\n\tcolor: #000;\r\n}\n.black {\r\n\tbackground: #000;\r\n}\n.blue {\r\n\tbackground: #8dd2f0;\r\n}\n.light-blue {\r\n\tbackground: #d0f1ff;\r\n}\n.red {\r\n\tbackground: #feafb2;\r\n}\n.light-red {\r\n\tbackground: #ffe9ea;\r\n}\n.grey {\r\n\tbackground: #efefef;\r\n}\n.seprater {\r\n\tborder-top: 1.5px solid #fff;\r\n}\n.light-green {\r\n\tbackground: #d1e7de;\r\n}\n.green-dark {\r\n\tbackground: #007b4a;\r\n}\n.green-color {\r\n\tcolor: #007b4a;\r\n\t;\r\n}\n.red-dark {\r\n\tbackground: #ff0000;\r\n}\n.red-color {\r\n\tcolor: #ff0000;\r\n}\n.medium {\r\n\tfont-weight: 500;\r\n}\n.green-dark.read-more {\r\n\tbackground: #007b4a;\r\n\tcolor: #fff;\r\n\tfont-size: 13px;\r\n}\n.green-dark.read-more:hover {\r\n\tbackground: #000;\r\n}\n.red-dark.read-more {\r\n\tbackground: #ff0000;\r\n\tcolor: #fff;\r\n\tfont-size: 13px;\r\n}\n.red-dark.read-more:hover {\r\n\tbackground: #ff0000;\r\n}\nbutton.delete {\r\n\tbackground: transparent;\r\n\tpadding: 0;\r\n\tcursor: pointer;\r\n}\nbutton.delete:hover {\r\n\tbackground: transparent;\r\n}\n.shadow {\r\n\tbox-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);\r\n\tpadding: 15px;\r\n\tmargin-bottom: 15px;\r\n}\n.shadow:last-child {\r\n\tmargin-bottom: 0;\r\n}\n.title {\r\n\tfont-size: 15px;\r\n\tfont-weight: 700;\r\n\tcolor: #000;\r\n\tpadding-bottom: 10px;\r\n}\nbutton {\r\n\tbackground: #007b4a;\r\n\tborder: none;\r\n\tcolor: #fff;\r\n\tfont-weight: 700;\r\n\tborder-radius: 5px;\r\n\tpadding: 7px 12px;\r\n\tfont-size: 12px;\r\n\toutline: none;\r\n\ttransition: .3s;\r\n}\nbutton:hover {\r\n\tbackground: #000;\r\n}\n.read-more {\r\n\tbackground: #d9d9d9;\r\n\tcolor: #000;\r\n\tfont-weight: 700;\r\n\tdisplay: inline-block;\r\n\tpadding: 5px 10px;\r\n\tborder-radius: 5px;\r\n\tfont-size: 15px;\r\n\ttext-align: center;\r\n}\n.read-more:hover {\r\n\tbackground: #007b4a;\r\n\tcolor: #fff;\r\n}\n/* header */\nheader {\r\n\twidth: 100%;\r\n\theight: auto;\r\n}\nheader .header-top {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tbackground: #efefef;\r\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\r\n}\n.header-top .container {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n}\n.left-push {\r\n\tdisplay: inline-block;\r\n\twidth: 60%;\r\n\tfloat: left;\r\n\tpadding: 4px 1% 4px 1%;\r\n\tbox-sizing: border-box;\r\n}\n.right-push {\r\n\tdisplay: flex;\r\n\twidth: 40%;\r\n\tfloat: right;\r\n\tbackground: #007b4a;\r\n\talign-items: center;\r\n}\n.logo {\r\n\tdisplay: inline-block;\r\n\twidth: 100px;\r\n}\n.logo img {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n}\n.right-push .col-6 {\r\n\twidth: 50%;\r\n\tdisplay: inline-block;\r\n\tfloat: left;\r\n\tpadding: 7px 1%;\r\n\tbox-sizing: border-box;\r\n}\n.balance-info {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n}\n.num-cell span {\r\n\tdisplay: block;\r\n\tfont-size: 13px;\r\n\tline-height: 14px;\r\n\tcolor: #fff;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\tmargin-bottom: 5px;\r\n\ttext-transform: capitalize;\r\n}\n.num-cell em {\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tline-height: 15px;\r\n\tcolor: #fff;\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n\ttext-align: center;\r\n}\n.header-btm {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tpadding: 5px 0;\r\n\tbox-sizing: border-box;\r\n}\n.header-btm .container {\r\n\tpadding: 0 1%;\r\n\tbox-sizing: border-box;\r\n}\n.header-btm .speek-icon {\r\n\tfloat: left;\r\n}\n.speek-icon {\r\n\tdisplay: inline-block;\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tbackground-color: #d1e7de;\r\n\tborder-radius: 50%;\r\n\tpadding: 5px;\r\n\tbox-sizing: border-box;\r\n}\n.speek-icon img {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n}\n.mark-text {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tfont-size: 12px;\r\n\tline-height: 14px;\r\n\tcolor: #000;\r\n\tfont-weight: 500;\r\n\tfont-style: italic;\r\n}\nmarquee {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n}\n.marquee {\r\n\tdisplay: inline-block;\r\n}\n.header-btm .mark-text {\r\n\tdisplay: block;\r\n\twidth: calc(100% - 32px);\r\n\tfloat: left;\r\n\tpadding-left: 8px;\r\n\tbox-sizing: border-box;\r\n\tpadding-top: 5px;\r\n\ttext-transform: capitalize;\r\n}\n/* nav */\nnav {\r\n\twidth: 100%;\r\n\theight: auto;\r\n}\nnav ul {}\nnav ul li {}\nnav ul li a {}\nnav ul li a:hover,\r\nnav .active {}\n/* footer */\nfooter {\r\n\twidth: 100%;\r\n\theight: auto;\r\n}\n.footer-navigation {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\twidth: 100%;\r\n}\n.ft-tab {\r\n\tdisplay: inline-block;\r\n\twidth: 20%;\r\n\tpadding: 10px 0;\r\n\tbox-sizing: border-box;\r\n\tbackground: rgba(0, 123, 74, 0.18);\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n}\n.ft-tab figure {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tmargin-bottom: 6px;\r\n}\n.ft-tab figure img {\r\n\tdisplay: block;\r\n\tmax-width: 23px;\r\n\tmax-height: 23px;\r\n\tposition: relative;\r\n\tz-index: 9;\r\n}\n.ft-tab figure img.hover {\r\n\tposition: absolute;\r\n\ttop: 11px;\r\n\tleft: 0;\r\n\tright: 0;\r\n}\n.ft-tab:hover figure img.default,\r\n.ft-tab figure img.hover {\r\n\topacity: 0;\r\n}\n.ft-tab:hover figure img.hover {\r\n\topacity: 1;\r\n}\n.ft-tab.active figure img.hover {\r\n\topacity: 1;\r\n}\n.ft-tab.active figure img.default {\r\n\topacity: 0;\r\n}\n.ft-tab span {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tfont-size: 13px;\r\n\tline-height: 16px;\r\n\tcolor: #000;\r\n\tposition: relative;\r\n\tz-index: 9;\r\n\ttop: 3px;\r\n}\n.ft-tab.active span {\r\n\tcolor: #fff;\r\n}\n.ft-tab.active {\r\n\tbackground-color: #003c6c;\r\n}\n.ft-tab.active:before {\r\n\tleft: 0;\r\n}\n.ft-tab:before {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tbackground: #007b4a;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: -100%;\r\n\ttransition: .3s;\r\n}\n.ft-tab:hover span {\r\n\tcolor: #fff;\r\n}\n.ft-tab:hover:before {\r\n\tleft: 0;\r\n}\n.screen-area {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n}\n.screen-tab {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\twidth: 100%;\r\n\tborder-bottom: 1px solid #fff;\r\n}\n.screen-tab:after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\twidth: 100%;\r\n\theight: 1px;\r\n\tbackground: #cccccc;\r\n}\n.screen-tab .col-4 {\r\n\tdisplay: inline-block;\r\n\twidth: 33.3%;\r\n\ttext-align: center;\r\n\tcolor: #000;\r\n\tfont-size: 12px;\r\n\tline-height: 14px;\r\n\tpadding: 10px 0;\r\n\tbox-sizing: border-box;\r\n\tbackground: rgba(0, 123, 74, 0.18);\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tcursor: pointer;\r\n}\n.screen-tab .col-4 span {\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 700;\r\n\tletter-spacing: 1.5px;\r\n\tposition: relative;\r\n\tz-index: 9;\r\n}\n.screen-tab .col-4.active {\r\n\tbackground: #007b4a;\r\n\tcolor: #fff;\r\n}\n.screen-tab .col-4.active:before {\r\n\tleft: 0;\r\n}\n.screen-tab .col-4:before {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tbackground: #007b4a;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: -100%;\r\n\ttransition: .3s;\r\n}\n.screen-tab .col-4:hover {\r\n\tcolor: #fff;\r\n}\n.screen-tab .col-4:hover:before {\r\n\tleft: 0;\r\n}\n.screen-detail {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\toverflow-y: scroll;\r\n}\n.tab-details {\r\n\tdisplay: block;\r\n}\n.news-info-cell {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tborder-bottom: 1px solid #bfbfbf;\r\n\tpadding: 10px 0;\r\n\tbox-sizing: border-box;\r\n\talign-items: center;\r\n}\n.news-cell {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tborder-bottom: 1px solid #bfbfbf;\r\n\tpadding: 8px 0;\r\n\tbox-sizing: border-box;\r\n\talign-items: center;\r\n}\n.desc {\r\n\tdisplay: inline-block;\r\n\twidth: 72%;\r\n\tfloat: left;\r\n\tmargin: 0;\r\n\tpadding-left: 8px;\r\n\tbox-sizing: border-box;\r\n}\n.desc span {\r\n\tfont-size: 14px;\r\n\tline-height: 20px;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tcolor: #000000;\r\n\tfont-weight: 600;\r\n\ttext-transform: capitalize;\r\n}\n.desc span a {\r\n\tcolor: #000;\r\n}\n.desc span a:hover {\r\n\tcolor: #007b4a;\r\n}\n.desc em {\r\n\tfont-size: 12px;\r\n\tline-height: 14px;\r\n\tcolor: #007b4a;\r\n\tmargin-top: 5px;\r\n\tfont-style: normal;\r\n\tfont-weight: 400;\r\n}\n.star {\r\n\tdisplay: flex;\r\n\twidth: 18px;\r\n\tfloat: left;\r\n\tmargin: 0;\r\n\tpadding-left: 6px;\r\n\talign-items: center;\r\n}\n.star img {\r\n\twidth: 18px;\r\n\theight: 18px;\r\n\tdisplay: inline-block;\r\n}\n.btn-cell {\r\n\tdisplay: inline-block;\r\n\ttext-align: right;\r\n\tpadding-right: 5px;\r\n\tbox-sizing: border-box;\r\n\twidth: 22%;\r\n}\n.play-btn {\r\n\tfont-size: 11px;\r\n\tline-height: 13px;\r\n\tcolor: #ffffff;\r\n\tfont-weight: 400;\r\n\tpadding: 6px 6px;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 3px;\r\n\tbackground: #90cf90;\r\n\tdisplay: inline-block;\r\n\t-webkit-animation: NAME-YOUR-ANIMATION 1s infinite;\r\n\tanimation: NAME-YOUR-ANIMATION 1s infinite;\r\n\ttransition: all 1s ease 0s;\r\n}\n.play-btn:hover {\r\n\ttext-decoration: none;\r\n\tcolor: #ffffff;\r\n}\n.screen-detail .tab-details {\r\n\tdisplay: none;\r\n}\n.screen-detail .tab-details.show-tab {\r\n\tdisplay: block;\r\n}\n.news-cell.blue-bg {\r\n\tbackground: #000;\r\n\tbox-sizing: border-box;\r\n}\n.news-cell.blue-bg .desc span {\r\n\tcolor: #ffffff;\r\n\tfont-size: 13px;\r\n}\n.score-block {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tborder-bottom: 1px solid #cccccc;\r\n\tpadding-bottom: 2px;\r\n\tbackground: none;\r\n\talign-items: center;\r\n}\n.score-block.red .desc em {\r\n\tcolor: #de2425;\r\n}\n.score-block .left-push {\r\n\twidth: 50%;\r\n}\n.score-block .right-push {\r\n\twidth: 50%;\r\n\tbackground: none;\r\n\tposition: relative;\r\n}\n.score-block .black-score {\r\n\tbackground: #8dd2f0;\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n}\n.score-block .lay-score {\r\n\tbackground: #feafb2;\r\n\tcursor: pointer;\r\n}\n.score-block .num-cell span,\r\n.score-block .num-cell em {\r\n\tcolor: #000;\r\n}\n.score-block .lay-score .num-cell span,\r\n.score-block .lay-score .num-cell em {\r\n\tcolor: #000;\r\n}\n.score-block .num-cell span {\r\n\tfont-size: 14px;\r\n}\n.score-block .col-6.black-score:after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 0;\r\n\theight: 100%;\r\n\twidth: 2px;\r\n\tbackground: #ffffff;\r\n}\n.score-block .desc {\r\n\twidth: 100%;\r\n}\n.score-block.green .desc em {\r\n\tcolor: #6ebc28;\r\n}\n.two-value {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n}\n.two-value em {\r\n\tposition: relative;\r\n}\n.two-value em:nth-child(2n + 1) {\r\n\tmargin-right: 10px;\r\n\tcolor: #de2425;\r\n}\n.two-value em:nth-child(2n + 2):before {\r\n\tcontent: '→';\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tleft: -4px;\r\n\ttop: -2px;\r\n\tfont-size: 11px;\r\n}\n.score-block.green .desc em:nth-child(2n + 2):before {\r\n\tcolor: #de2425;\r\n}\n.score-block.green .desc em:nth-child(2n + 2) {\r\n\tcolor: #de2425;\r\n}\n.score-block.red .two-value em:nth-child(2n + 2) {\r\n\tcolor: #6ebc28;\r\n}\n.two-value em:nth-child(2n + 2) {\r\n\tcolor: #de2425;\r\n\tpadding-left: 12px;\r\n}\n.mini-title-bar {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tborder-bottom: 1px solid #cccccc;\r\n}\n.mini-title-bar .left-push {\r\n\tpadding: 3px;\r\n\tbox-sizing: border-box;\r\n\twidth: 50%;\r\n\tbackground: #007b4a;\r\n\tborder-bottom-right-radius: 13px;\r\n}\n.mini-title-bar .right-push {\r\n\tpadding: 3px;\r\n\tbox-sizing: border-box;\r\n\twidth: 50%;\r\n\tbackground: none;\r\n}\n.mini-title-bar .col-4 {\r\n\tmargin: auto;\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n\tfont-size: 14px;\r\n\tcolor: #fff;\r\n}\n.mini-title-bar.full .col-4 {\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tfont-size: 13px;\r\n}\n.mini-title-bar .right-push .col-4 {\r\n\tcolor: #000;\r\n\tmargin: auto;\r\n}\n.details-popup {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tpadding: 10px 7%;\r\n\tbox-sizing: border-box;\r\n\tbackground: #8dd2f0;\r\n}\n.details-popup form {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tmargin: 0;\r\n}\n.totol-edit-bar {\r\n\tdisplay: flex;\r\n\tmargin-bottom: 10px;\r\n}\n.totol-edit-bar .col-6 {\r\n\tdisplay: inline-block;\r\n\twidth: 150%;\r\n}\n.totol-edit-bar .col-6:first-child .score-add {\r\n\tmargin-left: 0;\r\n}\n.totol-edit-bar .col-6:last-child .score-add {\r\n\tmargin-right: 0;\r\n}\n.score-add {\r\n\tdisplay: block;\r\n\twidth: 90%;\r\n\tposition: relative;\r\n\tborder-radius: 5px;\r\n\toverflow: hidden;\r\n}\n.score-add .score-minus {\r\n\tdisplay: inline-block;\r\n\twidth: 25px;\r\n\theight: 100%;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbackground: #efefef;\r\n\tborder: none;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n}\n.score-add .score-plus {\r\n\tdisplay: inline-block;\r\n\twidth: 25px;\r\n\theight: 100%;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 0;\r\n\tbackground: #efefef;\r\n\tborder: none;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n}\n.score-add .score-plus:before {\r\n\tcontent: '+';\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tfont-size: 18px;\r\n\tcolor: #6ebc28;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\ttransform: translate(-50%, -50%);\r\n}\n.score-add .score-minus:before {\r\n\tcontent: '-';\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tfont-size: 22px;\r\n\tcolor: #de2425;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\ttransform: translate(-50%, -50%);\r\n}\n.score-add input {\r\n\twidth: 100%;\r\n\theight: 28px;\r\n\tpadding: 5px 50px;\r\n\tbox-sizing: border-box;\r\n\tborder: none;\r\n}\n.price-btn {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n}\n.price-btn .pri-btn {\r\n\tdisplay: inline-block;\r\n\tfont-size: 12px;\r\n\tline-height: 12px;\r\n\tcolor: #000000;\r\n\tbackground: #ffffff;\r\n\tfont-weight: bold;\r\n\tpadding: 7px 10px 6px 10px;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 5px;\r\n\tmargin-right: 1%;\r\n\twidth: 18.1%;\r\n\ttext-align: center;\r\n\tmargin-bottom: 10px;\r\n}\n.price-btn .pri-btn:hover {\r\n\tbackground: #000;\r\n\tcolor: #fff;\r\n}\n.price-btn .pri-btn:nth-child(5n + 5) {\r\n\tmargin-right: 0;\r\n}\n.pri-btn.red-btn {\r\n\tcolor: #de2425;\r\n}\n.submit-area {\r\n\tdisplay: flex;\r\n}\n.submit-area .col-6 {\r\n\twidth: 48.5%;\r\n\tdisplay: inline-block;\r\n\tmargin: auto;\r\n}\n.submit-area .col-6:first-child {\r\n\tmargin-left: 0;\r\n}\n.submit-area .col-6:last-child {\r\n\tmargin-right: 0;\r\n}\n.btn-prime {\r\n\tdisplay: inline-block;\r\n\tpadding: 8px 10px;\r\n\tbox-sizing: border-box;\r\n\tfont-size: 14px;\r\n\tline-height: 14px;\r\n\tcolor: #ffffff;\r\n\tfont-weight: bold;\r\n\tborder-radius: 5px;\r\n\tbackground: #6ebc28;\r\n\ttext-align: center;\r\n}\n.submit-area .red-btn.btn-prime {\r\n\twidth: 100%;\r\n}\n.red-btn.btn-prime {\r\n\tbackground: #000;\r\n}\n.red-btn.btn-prime:hover {\r\n\tbackground: #007b4a;\r\n\tcolor: #fff;\r\n}\ninput[type=\"submit\"].green-sub-btn {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 30px;\r\n\tbackground: #007b4a;\r\n\tfont-size: 14px;\r\n\tline-height: 14px;\r\n\tborder-radius: 5px;\r\n\tfont-weight: bold;\r\n}\ninput[type=\"submit\"].green-sub-btn:hover {\r\n\tbackground: #000;\r\n}\n.score-group-block {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n}\n/* responsive menu */\n.responsive-mb-icon {\r\n\tdisplay: none;\r\n\tmax-width: 40px;\r\n\twidth: 100%;\r\n\tbackground-color: transparent;\r\n\tfloat: right;\r\n\ttop: 30px;\r\n\tright: 10px;\r\n\tz-index: 10;\r\n\tmargin: 4px 0;\r\n}\n.responsive-mb-icon a {\r\n\tdisplay: block;\r\n\tpadding: 5px 8px;\r\n}\n.responsive-mb-icon span {\r\n\tbackground-color: #3c55ff;\r\n\theight: 2px;\r\n\tmargin: 5px auto;\r\n\tdisplay: block;\r\n\tmax-width: 100px;\r\n}\n.mobile-nav-block {\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tbackground: none;\r\n\twidth: 80%;\r\n\ttop: 0;\r\n\tleft: -80%;\r\n\tbottom: 0;\r\n\theight: 100%;\r\n\tbackground: #ffffff;\r\n\tz-index: 999;\r\n}\n.mobile-nav-block .title {\r\n\tbackground: #007b4a;\r\n\tdisplay: block;\r\n\tcolor: #fff;\r\n\tfont-size: 14px;\r\n\tletter-spacing: 0.05em;\r\n\tpadding: 15px 20px;\r\n\ttext-transform: uppercase;\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n}\n.nav-content ul {\r\n\tmargin: 0;\r\n}\n.nav-content ul li {\r\n\tlist-style: none;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tborder-bottom: 3px solid #ffffff;\r\n\t/*background: #f5f5f5;*/\r\n\tbackground: rgba(0, 123, 74, 0.18);\r\n\tbox-sizing: border-box;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 12px;\r\n\tline-height: 14px;\r\n\tpadding-bottom: 0;\r\n\tposition: relative;\r\n}\n.nav-content ul li a {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tcolor: #000;\r\n\ttext-transform: uppercase;\r\n\tpadding: 11px 15px 11px 30px;\r\n\tbox-sizing: border-box;\r\n}\n.nav-content ul li a:hover {\r\n\tbackground: #007b4a;\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n}\n.nav-content ul li img {\r\n\tposition: absolute;\r\n\tleft: 9px;\r\n\ttop: 10px;\r\n\tdisplay: inline-block;\r\n\tmax-width: 15px;\r\n}\n.nav-content ul li img.default {\r\n\topacity: 1;\r\n\t-webkit-transform: rotate(0deg);\r\n\t        transform: rotate(0deg);\r\n\ttransition: .3s;\r\n}\n.nav-content ul li img.hover {\r\n\topacity: 0;\r\n\t-webkit-transform: rotate(0deg);\r\n\t        transform: rotate(0deg);\r\n\ttransition: .3s;\r\n}\n.nav-content ul li.current img.hover {\r\n\topacity: 1;\r\n}\n.nav-content ul li.current a {\r\n\tbackground: #007b4a;\r\n\tcolor: #fff;\r\n}\n.nav-content ul li:hover img.hover {\r\n\topacity: 1;\r\n\t-webkit-transform: rotate(360deg);\r\n\t        transform: rotate(360deg);\r\n}\n.nav-content ul li:hover img.default {\r\n\topacity: 0;\r\n\t-webkit-transform: rotate(360deg);\r\n\t        transform: rotate(360deg);\r\n}\n.center-cell {\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tmargin-top: 8px;\r\n\tpadding: 0px 13px;\r\n}\n.mobile-nav-block .red-btn.btn-prime {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 400;\r\n\tborder-radius: 3px;\r\n\ttransition: all 0.3s ease 0s;\r\n}\n.mobile-nav-block .red-btn.btn-prime:hover {\r\n\tcolor: #ffffff;\r\n\ttext-decoration: none;\r\n\tbackground: #007b4a;\r\n}\n.nav-content {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tmargin-top: 3px;\r\n}\n.close-btn {\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 4px;\r\n\twidth: 19px;\r\n\theight: 20px;\r\n\tbackground: url(/assets/images/close.png) no-repeat;\r\n\tcursor: pointer;\r\n\ttransition: all 0.3s ease 0s;\r\n\tbackground-size: cover;\r\n}\nbody.open .close-btn {\r\n\tright: -27px;\r\n}\nbody.open {\r\n\tposition: relative;\r\n}\nbody.open:after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n\ttransition: all 1s ease 0s;\r\n\tz-index: 9;\r\n}\n/*login page*/\n.login-block {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tposition: relative;\r\n\tmin-height: 500px;\r\n}\n.brand-area {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tbackground: #fff;\r\n\ttext-align: center;\r\n\tpadding: 25px 10px 15px 10px;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 18px 18px 0 0;\r\n}\n.brand-area img {\r\n\tmax-width: 200px;\r\n\tmargin: -120px 0 0 0\r\n}\n.login-section {\r\n\tdisplay: block;\r\n\twidth: 90%;\r\n\tmax-width: 400px;\r\n\tbackground: #000;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tborder-radius: 18px;\r\n}\n.login-section form {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tpadding: 20px 23px;\r\n\tbox-sizing: border-box;\r\n}\n.field-cell {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n}\n.field-cell input[type=\"password\"],\r\n.field-cell input[type=\"text\"] {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tbackground: #fff;\r\n\tbox-sizing: border-box;\r\n\tmargin-bottom: 20px;\r\n\tborder: none;\r\n\tborder-radius: 6px;\r\n\tpadding-left: 35px;\r\n\tfont-size: 14px;\r\n\tcolor: #000;\r\n\t-webkit-transition: all 0.30s ease-in-out;\r\n\t-moz-transition: all 0.30s ease-in-out;\r\n\t-ms-transition: all 0.30s ease-in-out;\r\n\t-o-transition: all 0.30s ease-in-out;\r\n\toutline: none;\r\n}\n.field-cell input[type=\"password\"]:focus,\r\n.field-cell input[type=\"text\"]:focus {\r\n\tbox-shadow: 0 0 5px rgba(255, 255, 255, 1);\r\n}\n.field-cell input[type=\"submit\"] {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tbackground: #007b4a;\r\n\theight: 40px;\r\n\tborder-radius: 6px;\r\n\tcolor: #ffffff;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: bold;\r\n\ttransition: all 0.3s ease 0s;\r\n}\n.field-cell input[type=\"password\"]::-webkit-input-placeholder {\r\n\tcolor: #000;\r\n}\n.field-cell input[type=\"password\"]::-moz-placeholder {\r\n\tcolor: #000;\r\n}\n.field-cell input[type=\"password\"]:-ms-input-placeholder {\r\n\tcolor: #000;\r\n}\n.field-cell input[type=\"password\"]:-moz-placeholder {\r\n\tcolor: #000;\r\n}\n.field-cell input[type=\"text\"]::-webkit-input-placeholder {\r\n\tcolor: #000;\r\n}\n.field-cell input[type=\"text\"]::-moz-placeholder {\r\n\tcolor: #000;\r\n}\n.field-cell input[type=\"text\"]:-ms-input-placeholder {\r\n\tcolor: #000;\r\n}\n.field-cell input[type=\"text\"]:-moz-placeholder {\r\n\tcolor: #000;\r\n}\n.checkbox {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tpadding-left: 30px;\r\n\tmargin-bottom: 12px;\r\n\tcursor: pointer;\r\n\tfont-size: 14px;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tcolor: #ffffff;\r\n}\n.checkbox input {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tcursor: pointer;\r\n\theight: 0;\r\n\twidth: 0;\r\n}\n.checkmark {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\theight: 15px;\r\n\twidth: 15px;\r\n\tbackground-color: transparent;\r\n\tborder: 2px solid #fff;\r\n\tborder-radius: 3px;\r\n\tborder-radius: 3px;\r\n}\n.checkbox:hover input~.checkmark {\r\n\theight: 15px;\r\n\twidth: 15px;\r\n\tbackground-color: transparent;\r\n\tborder: 2px solid #fff;\r\n\tborder-radius: 3px;\r\n}\n.checkbox input:checked~.checkmark {\r\n\tbackground-color: transparent;\r\n\tborder: 2px solid #ffffff;\r\n}\n.checkmark:after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\tdisplay: none;\r\n}\n.checkbox input:checked~.checkmark:after {\r\n\tdisplay: block;\r\n}\n.checkbox .checkmark:after {\r\n\tleft: 6px;\r\n\ttop: 2px;\r\n\twidth: 2px;\r\n\theight: 7px;\r\n\tborder: solid white;\r\n\tborder-width: 0 2px 2px 0;\r\n\t-webkit-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n}\n.field-cell.check-box {\r\n\tpadding: 15px 0;\r\n}\n.field-cell img {\r\n\tposition: absolute;\r\n\tleft: 9px;\r\n\ttop: 8px;\r\n\tdisplay: inline-block;\r\n\tmax-width: 19px;\r\n}\n.login-backgroun-slider {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\n.login-backgroun-slider .item {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-size: cover;\r\n\tbackground-position: bottom center;\r\n}\n.login-backgroun-slider .slick-slide>div,\r\n.login-backgroun-slider .slick-slide>div>div {\r\n\theight: 100vh;\r\n\tmin-height: 500px;\r\n}\n.login-backgroun-slider {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n}\n.slick-dotted.slick-slider {\r\n\tmargin-bottom: 0px;\r\n}\n.login-backgroun-slider .slick-dots,\r\n.login-backgroun-slider .slick-arrow {\r\n\tdisplay: none !important;\r\n}\n.first-screen {\r\n\tdisplay: flex;\r\n\tflex-wrap: nowrap;\r\n\talign-content: center;\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbackground: url(/assets/images/splash1.jpg);\r\n\tbackground-size: 100%;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center center;\r\n\theight: 100vh;\r\n\tz-index: 99999;\r\n\topacity: 0;\r\n\tvisibility: hidden;\r\n}\n.first-screen figure {\r\n\tposition: absolute;\r\n\twidth: 0;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\ttransform: translate(-50%, -50%);\r\n\ttransition: all 3s ease 0s;\r\n}\n.first-screen.show {\r\n\topacity: 1;\r\n\tvisibility: visible;\r\n}\n.first-screen.show figure {\r\n\twidth: 200px;\r\n}\n.first-screen figure img {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n}\n.first-screen.hide {\r\n\topacity: 0;\r\n\tvisibility: hidden;\r\n\ttransition: all 1s ease 0s;\r\n}\n.field-cell input[type=\"submit\"]:hover {\r\n\tbackground: #ffffff;\r\n\tcolor: #007b4a;\r\n}\n@-webkit-keyframes NAME-YOUR-ANIMATION {\r\n\r\n\t0%,\r\n\t49% {\r\n\t\tbackground-color: #007b4a;\r\n\t}\r\n\r\n\t50%,\r\n\t100% {\r\n\t\tbackground-color: rgba(0, 123, 74, 0.5);\r\n\t}\r\n}\n.mini-title-bar.full {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tborder-bottom: none;\r\n\tbox-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);\r\n}\n.mini-title-bar.full .left-push {\r\n\twidth: 100%;\r\n\tpadding: 6px 10px;\r\n\tborder-radius: 0;\r\n\ttext-align: left;\r\n\tbackground: #007b4a;\r\n\ttext-transform: uppercase;\r\n}\n.mini-title-bar.full .left-push .name {\r\n\tfont-size: 13px;\r\n\ttext-align: left;\r\n\tcolor: #fff;\r\n\tfont-weight: 700;\r\n}\n.sports-page .news-cell.blue-bg {\r\n\tbackground: #007b4a;\r\n}\n.sports-page .desc {\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n}\n.sports-page .news-cell.blue-bg .desc span {\r\n\tfont-size: 14px;\r\n}\n.sports-page .screen-detail {\r\n\toverflow-x: hidden;\r\n}\n.inner {\r\n\tpadding: 20px 15px;\r\n}\n.sports-part {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: flex-start;\r\n\twidth: 767px;\r\n\tmargin: 0;\r\n}\n.sports-part .sports {\r\n\twidth: calc(25% - 10px);\r\n\tmargin: 0 5px 10px 5px;\r\n\ttext-align: center;\r\n}\n.sports-part .sports a {\r\n\tdisplay: block;\r\n}\n.sports-part .sports a:hover h4 {\r\n\tbackground: #007b4a;\r\n}\n.sports-part .sports figure {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tpadding-top: 79%;\r\n\tborder-radius: 10px 10px 0 0;\r\n}\n.sports-part .sports figure img {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\t        transform: translate(-50%, -50%);\r\n}\n.sports h4 {\r\n\tmargin: 0;\r\n\tbackground: #000;\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n\tfont-size: 17px;\r\n\tpadding: 8px 0;\r\n\ttransition: .3s;\r\n}\n.change-pwd-section h5 {\r\n\tcolor: #fff;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 700;\r\n\tfont-size: 18px;\r\n\tmargin-bottom: 30px;\r\n}\n.result-section {\r\n\tborder-top: 1px solid #fff;\r\n}\n.result-section .result-title>div {\r\n\tcolor: #fff;\r\n\tfont-weight: 700;\r\n\tletter-spacing: 1px;\r\n}\n.result-section .result-title .col-2 {\r\n\ttext-align: center;\r\n}\n.result-section .result.col {\r\n\talign-items: center;\r\n}\n.result-section .result p {\r\n\tmargin: 0;\r\n}\n.result-section .result h6 {\r\n\tmargin: 0;\r\n\tcolor: #000;\r\n\ttext-align: center;\r\n\tfont-weight: 700;\r\n\tfont-size: 17px;\r\n}\n.abt-title {\r\n\tmargin: 0;\r\n}\n.profile-section .result h5 {\r\n\tmargin: 0;\r\n}\n.match-config h5 {\r\n\ttext-transform: capitalize;\r\n}\n.match-config h5 span {\r\n\tfont-weight: 400;\r\n\tfont-size: 14px;\r\n\tcolor: #000;\r\n}\n.match-config h6 {\r\n\tfont-size: 14px;\r\n\tcolor: #000;\r\n\tfont-weight: 700;\r\n}\nh6 span {\r\n\tfont-weight: 400;\r\n}\n.two h6 {\r\n\tdisplay: inline-block;\r\n}\n.betstake-section h5 {\r\n\tfont-size: 13px;\r\n}\n.use-stake {\r\n\tborder: 2px solid #000;\r\n\tborder-radius: 5px;\r\n\tpadding: 10px;\r\n}\n.use-stake h5 {\r\n\tcolor: #000;\r\n}\n.use-stake ul {\r\n\tmargin: 10px 0 10px 10px;\r\n}\n.use-stake ul li {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tpadding: 0 0 0 17px;\r\n\tmargin-bottom: 6px;\r\n}\n.use-stake ul li:before {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 0;\r\n\twidth: 8px;\r\n\theight: 8px;\r\n\t-webkit-transform: translate(0, -50%);\r\n\t        transform: translate(0, -50%);\r\n\tbackground: #007b4a;\r\n\tborder-radius: 100%;\r\n}\n.use-stake ul li:last-child {\r\n\tmargin-bottom: 0;\r\n}\n.click-betting {\r\n\tpadding: 20px 0;\r\n}\n.click-betting h5 {\r\n\tcolor: #000;\r\n\tmargin-bottom: 10px;\r\n}\n.click-button {\r\n\tdisplay: inline-block;\r\n\tbackground: #007b4a;\r\n\tborder-radius: 20px;\r\n\tpadding: 2px;\r\n}\n.click-button a {\r\n\tborder-radius: 20px;\r\n\tcolor: #fff;\r\n\tpadding: 3px 10px;\r\n\tdisplay: inline-block;\r\n\tfont-size: 12px;\r\n\tfont-weight: 600;\r\n}\n.click-button a:hover {\r\n\tbackground: #000;\r\n}\n.click-button a.active {\r\n\tbackground: #000;\r\n}\n.click-betting form {\r\n\tpadding-top: 12px;\r\n\talign-items: center;\r\n\tdisplay: flex;\r\n}\n.click-betting form input {\r\n\tmargin-right: 35px;\r\n\tborder-radius: 5px;\r\n\tborder: 1px solid #000;\r\n\tbackground: #efefef;\r\n\theight: 24px;\r\n\ttext-align: center;\r\n\tfont-weight: 600;\r\n\tcolor: #000;\r\n}\n.click-betting form button {\r\n\tborder-radius: 20px;\r\n}\n.bet-list {\r\n\ttext-align: center;\r\n}\n.bet-list a {\r\n\twidth: 39%;\r\n\tmargin: 0 4px 8px 4px;\r\n}\n.bet-list a.active {\r\n\tbackground: #007b4a;\r\n\tcolor: #fff;\r\n}\n.betstake-section .saves {\r\n\twidth: 100%;\r\n\tmargin-top: 13px;\r\n}\n.score-part {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tpadding-right: 24px;\r\n}\n.match-score {\r\n\tflex: 1;\r\n}\n.match-score span {\r\n\tfont-size: 13px;\r\n\tline-height: 20px;\r\n\tfont-weight: 600;\r\n\tdisplay: block;\r\n\tcolor: #fff;\r\n\ttext-align: right;\r\n}\n.term-header .mini-title-bar.full {\r\n\tflex: 1;\r\n}\n.term-header .mini-title-bar.full .left-push {\r\n\ttext-transform: none;\r\n\tpadding: 10px 10px;\r\n}\n.term-header .left-push .bold {\r\n\tcolor: #fff;\r\n}\n.term-footer .ft-tab {\r\n\twidth: 50%;\r\n\tpadding: 15px 0;\r\n}\n.term-footer .ft-tab span {\r\n\tfont-weight: 700;\r\n\tcolor: #fff;\r\n}\n.term-footer .ft-tab.agree {\r\n\tbackground: #007b4a\r\n}\n.term-footer .ft-tab.agree:before {\r\n\tbackground: #000;\r\n}\n.term-footer .ft-tab.disagree {\r\n\tbackground: #000;\r\n}\n.term-section .screen-area {\r\n\tbackground-size: cover !important;\r\n\tmin-height: calc(100vh - 85px);\r\n\tbackground-position: center center !important;\r\n\tposition: relative;\r\n}\n.term-section .screen-area:before {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: rgba(0, 0, 0, 0.6);\r\n}\n.term-section .inner {\r\n\tposition: relative;\r\n}\n.term-section p {\r\n\tcolor: #fff;\r\n\tfont-weight: 600;\r\n}\n.term-section ul {\r\n\tmargin: 0 0 20px 0;\r\n}\n.term-section ul li {\r\n\tdisplay: block;\r\n\tpadding: 0 0 0 14px;\r\n\tposition: relative;\r\n\tcolor: #fff;\r\n\tfont-weight: 600;\r\n}\n.term-section ul li:before {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 0;\r\n\twidth: 8px;\r\n\theight: 8px;\r\n\tbackground: #fff;\r\n\tborder-radius: 100%;\r\n\t-webkit-transform: translate(0, -50%);\r\n\t        transform: translate(0, -50%);\r\n}\n.ball-running .col-6 {\r\n\tcursor: not-alloweds;\r\n\tpointer-events: none;\r\n}\n.ball-run {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 9;\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tcolor: #fff;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 700;\r\n\tfont-size: 15px;\r\n\tcursor: not-allowed;\r\n}\n.ball-run span {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\t        transform: translate(-50%, -50%);\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n}\n.open-ball:before {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tcontent: \" \";\r\n\tborder-radius: 100%;\r\n\tborder: 1px solid #fff;\r\n\tbackground: #fff;\r\n\tbox-sizing: border-box;\r\n\t-webkit-animation: pulsate 1.5s ease-out;\r\n\t        animation: pulsate 1.5s ease-out;\r\n\t-webkit-animation-iteration-count: infinite;\r\n\t        animation-iteration-count: infinite;\r\n\t-webkit-animation-delay: 1.1s;\r\n\t        animation-delay: 1.1s;\r\n\topacity: .5;\r\n}\n.open-ball {\r\n\tposition: relative;\r\n\tz-index: 2;\r\n\twidth: 9px;\r\n\theight: 9px;\r\n\tborder-radius: 100%;\r\n\tdisplay: inline-block;\r\n\ttop: 0;\r\n}\n.open-ball.left {\r\n\tleft: -10px;\r\n}\n.open-ball.right {\r\n\tright: -10px;\r\n}\n@keyframes pulsate {\r\n\t0% {\r\n\t\t-webkit-transform: scale(1);\r\n\t\t        transform: scale(1);\r\n\t\topacity: 0\r\n\t}\r\n\r\n\t50% {\r\n\t\topacity: 1\r\n\t}\r\n\r\n\t100% {\r\n\t\t-webkit-transform: scale(2.5);\r\n\t\t        transform: scale(2.5);\r\n\t\topacity: 0\r\n\t}\r\n}\n@-webkit-keyframes pulsate {\r\n\t0% {\r\n\t\t-webkit-transform: scale(1);\r\n\t\t        transform: scale(1);\r\n\t\topacity: 0\r\n\t}\r\n\r\n\t50% {\r\n\t\topacity: 1\r\n\t}\r\n\r\n\t100% {\r\n\t\t-webkit-transform: scale(2.5);\r\n\t\t        transform: scale(2.5);\r\n\t\topacity: 0\r\n\t}\r\n}\n.icdc-section .grey.col {\r\n\tpadding: 6px 35px;\r\n}\n.icdc-section .icdc-part .col {\r\n\tpadding: 0 5px;\r\n}\n.row-line {\r\n\tfont-weight: 500;\r\n}\n.date-col {\r\n\tfont-weight: 500;\r\n}\n.upcoming-match .score-block {\r\n\topacity: 0.5;\r\n\tpointer-events: none;\r\n\tcursor: not-allowed;\r\n}\n@-webkit-keyframes blink {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\r\n\t50% {\r\n\t\topacity: .5;\r\n\t}\r\n\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\n@keyframes blink {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\r\n\t50% {\r\n\t\topacity: .5;\r\n\t}\r\n\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\n.star.yellow img {\r\n\t-webkit-animation: blink 1s linear infinite;\r\n\t        animation: blink 1s linear infinite;\r\n}\n.bethis-section .icdc-part .col-2:last-child span {\r\n\tcolor: #ff0000;\r\n}\n.profit-section .inner .col {\r\n\tpadding: 5px 0;\r\n}\n.profit-section .bold {\r\n\tline-height: 1.2;\r\n}\n.profit-section .read-more {\r\n\tpadding: 3px 10px;\r\n}\n.profit-section .read-more:hover {\r\n\tbackground: #000;\r\n}\n.bet-popup {\r\n\twidth: 550px;\r\n\tpadding: 0;\r\n\toverflow: hidden;\r\n}\n.bet-popup .mini-title-bar.full {\r\n\tbox-shadow: none;\r\n}\n.fancybox-slide--html .fancybox-close-small {\r\n\twidth: 34px;\r\n\theight: 34px;\r\n\tbackground: #000;\r\n\tpadding: 5px;\r\n}\n.fancybox-button svg path {\r\n\tfill: #fff;\r\n}\n.current-match .score-block .left-push {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n}\n.current-match .score-block .left-push .read-more {\r\n\tpadding: 3px 10px;\r\n}\n/* ============================================================================\r\nresponsive.css\r\n===============================================================================*/\n/* CSS Document */\n/* Table of Contents\r\n-----------------------------------------------------------------------------\r\n\t1. Mobile\r\n\t2. Large Mobile\r\n\t3. iPad\r\n\t4. large desktop\r\n\t5. Other\r\n*/\n/* 1. Mobile responsive css 640px\r\n------------------------------------------------------------------------------*/\n@media (max-width:640px) {\r\n\t.sports-part {\r\n\t\twidth: 93%;\r\n\t}\r\n}\n/* 2. Large Mobile responsive css 640px\r\n------------------------------------------------------------------------------*/\n@media (min-width:641px) and (max-width:767px) {}\n/* 3. iPad responsive css 768px to 1023px\r\n------------------------------------------------------------------------------*/\n@media (min-width:768px) and (max-width:1023px) {}\n/* 4. large desktop responsive css 1024px to 1199px\r\n------------------------------------------------------------------------------*/\n@media (min-width:1024px) and (max-width:1199px) {}\n/* 5. Other media-query\r\n------------------------------------------------------------------------------*/\n@media (max-width:481px) {\r\n\t.sports-part .sports {\r\n\t\twidth: calc(50% - 10px);\r\n\t}\r\n\r\n\t.open-ball {\r\n\t\ttop: -2px;\r\n\t\twidth: 6px;\r\n\t\theight: 6px;\r\n\t}\r\n\r\n\t.icdc-section .grey.col {\r\n\t\tpadding: 6px 15px;\r\n\t}\r\n\r\n\t.icdc-part .col-2 span {\r\n\t\tfont-size: 12px;\r\n\t}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL21vYmlsZS5jb21wb25lbnQuY3NzIiwibm9kZV9tb2R1bGVzL25neC1zbWFydC1tb2RhbC9uZ3gtc21hcnQtbW9kYWwuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxnSkFBZ0o7QUFGaEosaUJBQWlCO0FDQWpCO0VBQ0UsaUJBQWlCLEVBQUU7QUFFckI7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUU7QUFFcEI7RUFDRSxnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLDhCQUE4QjtFQUM5QixhQUFhLEVBQUU7QUFDZjtJQUNFLHFDQUFxQyxFQUFFO0FBQ3pDO0lBQ0UsOEJBQThCLEVBQUU7QUFFcEM7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUJBQXFCLEVBQUU7QUFDdkI7SUFDRSxXQUFXLEVBQUU7QUFDZjtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsdUNBQXVDLEVBQUU7QUFFN0M7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1SEFBdUg7RUFDdkgsV0FBVztFQUNYLHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBRTtBQUVwQztFQUNFLG1CQUFtQjtFQUNuQixlQUFlLEVBQUU7QUFFbkI7OzRCQUU0QjtBQUM1QjtFQUNFLCtEQUF1RDtFQUF2RCx1REFBdUQ7RUFBdkQsNEZBQXVELEVBQUU7QUFFM0Q7RUFDRSwyQ0FBbUM7VUFBbkMsbUNBQW1DLEVBQUU7QUFDckM7SUFDRSx3Q0FBZ0M7WUFBaEMsZ0NBQWdDLEVBQUU7QUFDcEM7SUFDRSwyQ0FBbUM7WUFBbkMsbUNBQW1DLEVBQUU7QUFFekM7RUFDRSwwQ0FBa0M7VUFBbEMsa0NBQWtDLEVBQUU7QUFDcEM7SUFDRSx3Q0FBZ0M7WUFBaEMsZ0NBQWdDLEVBQUU7QUFDcEM7SUFDRSwwQ0FBa0M7WUFBbEMsa0NBQWtDLEVBQUU7QUFFeEM7RUFDRSwyQ0FBbUM7VUFBbkMsbUNBQW1DLEVBQUU7QUFDckM7SUFDRSx3Q0FBZ0M7WUFBaEMsZ0NBQWdDLEVBQUU7QUFDcEM7SUFDRSwyQ0FBbUM7WUFBbkMsbUNBQW1DLEVBQUU7QUFFekM7RUFDRSwwQ0FBa0M7VUFBbEMsa0NBQWtDLEVBQUU7QUFDcEM7SUFDRSx3Q0FBZ0M7WUFBaEMsZ0NBQWdDLEVBQUU7QUFDcEM7SUFDRSwwQ0FBa0M7WUFBbEMsa0NBQWtDLEVBQUU7QUQ1RnhDLGtCQUFrQjtBQUVsQjs7Ozs7Ozs7O0VBU0U7QUFFRjtnRkFDZ0Y7QUFDaEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FzRUMsZUFBZTtDQUNmLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsV0FBVztDQUNYLGdCQUFnQjtDQUNoQix5QkFBeUI7Q0FDekIsd0JBQXdCO0NBQ3hCLHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakIsY0FBYztDQUNkLDZDQUE2QztDQUM3Qyw4Q0FBOEM7Q0FDOUM7QUFFRDs7Q0FFQywrQkFBK0I7Q0FDL0Isb0NBQW9DO0NBQ3BDLGFBQWE7Q0FDYjtBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsZUFBZTtDQUNmO0FBRUQ7Q0FDQyxhQUFhO0NBQ2I7QUFFRDs7Ozs7Ozs7Q0FRQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkO0FBRUQ7Ozs7O0NBS0MsY0FBYztDQUNkO0FBRUQ7O0NBRUMsWUFBWTtDQUNaLGVBQWU7Q0FDZjtBQUVEO0NBQ0MsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxRQUFRO0NBQ1I7QUFFRDtDQUNDLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZixVQUFVO0NBQ1YsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQjtBQUVEO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBRUQ7Q0FDQyxXQUFXO0NBQ1g7QUFFRDtDQUNDLGVBQWU7Q0FDZjtBQUVEO2dGQUNnRjtBQUNoRjtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsbUNBQW1DO0NBQ25DLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCO0FBRUQ7Ozs7OztDQU1DLG9CQUFvQjtDQUNwQixvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEI7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQjtBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCO0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEI7QUFFRDtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLDBCQUEwQjtDQUMxQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCO0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLFVBQVU7Q0FDVjtBQUVEO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQjtBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWDtBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQiwyQkFBMkI7Q0FDM0I7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1g7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQjtBQUVEO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQiw2QkFBNkI7Q0FDN0IsK0JBQStCO0NBQy9CO0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsbUJBQW1CO0NBQ25CO0FBRUQ7Q0FDQyxxQkFBcUI7Q0FDckIsc0JBQXNCO0NBQ3RCLFlBQVk7Q0FDWixVQUFVO0NBQ1Y7QUFFRDtnRkFDZ0Y7QUFDaEY7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QjtBQUVEO2dGQUNnRjtBQUNoRjtDQUNDLGVBQWU7Q0FLZixnQkFBZ0I7Q0FDaEI7QUFFRDtDQUNDLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEI7QUFFRDs7Q0FFQyxlQUFlO0NBQ2Y7QUFFRDtDQUNDLGNBQWM7Q0FDZDtBQUVEO2dGQUNnRjtBQUNoRjs7Ozs7Q0FLQywwQkFBMEI7Q0FDMUIsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiO0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLGFBQWE7Q0FDYixtQ0FBbUM7Q0FDbkMsa0JBQWtCO0NBQ2xCO0FBRUQ7OztDQUdDLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEI7QUFFRDs7Q0FFQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaO0FBRUQ7Z0ZBQ2dGO0FBQ2hGO0NBQ0Msa0JBQWtCO0NBQ2xCLDBCQUEwQjtDQUMxQjtBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQjtBQUVEO2dGQUNnRjtBQUNoRixvQkFBb0I7QUFDcEI7Q0FDQyxZQUFZO0NBQ1osUUFBUTtDQUNSO0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaO0FBRUQ7O0NBRUMsYUFBYTtDQUNiLDhDQUE4QztDQUM5QztBQUVEO0NBQ0MsY0FBYztDQUNkLCtCQUErQjtDQUMvQixRQUFRO0NBQ1IsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEI7QUFFRDs7Ozs7OztDQU9DLFVBQVU7Q0FDVjtBQUVEO0NBQ0MsV0FBVztDQUNYO0FBRUQ7Q0FDQyxXQUFXO0NBQ1g7QUFFRDtDQUNDLFdBQVc7Q0FDWDtBQUVEO0NBQ0MsY0FBYztDQUNkO0FBRUQ7Q0FDQyxXQUFXO0NBQ1g7QUFFRDtDQUNDLFdBQVc7Q0FDWDtBQUVEO0NBQ0MsV0FBVztDQUNYO0FBRUQ7Q0FDQyxXQUFXO0NBQ1g7QUFFRDtDQUNDLFdBQVc7Q0FDWCxVQUFVO0NBQ1Y7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCO0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQjtBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEI7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQjtBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQjtBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyxlQUFlOztDQUVmO0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEI7QUFFRDtDQUNDLGVBQWU7Q0FDZjtBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQjtBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQjtBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyx3QkFBd0I7Q0FDeEIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQjtBQUVEO0NBQ0Msd0JBQXdCO0NBQ3hCO0FBRUQ7Q0FDQyx5Q0FBeUM7Q0FDekMsY0FBYztDQUNkLG9CQUFvQjtDQUNwQjtBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckI7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQixhQUFhO0NBQ2IsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixjQUFjO0NBS2QsZ0JBQWdCO0NBQ2hCO0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1o7QUFFRCxZQUFZO0FBQ1o7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLG9CQUFvQjtDQUNwQix5Q0FBeUM7Q0FDekM7QUFFRDtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEI7QUFFRDtDQUNDLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1gsWUFBWTtDQUNaLHVCQUF1QjtDQUN2Qix1QkFBdUI7Q0FDdkI7QUFFRDtDQUNDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsYUFBYTtDQUNiLG9CQUFvQjtDQUNwQixvQkFBb0I7Q0FDcEI7QUFFRDtDQUNDLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2I7QUFFRDtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1o7QUFFRDtDQUNDLFdBQVc7Q0FDWCxzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkI7QUFFRDtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osZUFBZTtDQUNmLHVCQUF1QjtDQUN2QjtBQUVEO0NBQ0MsY0FBYztDQUNkLHVCQUF1QjtDQUN2QjtBQUVEO0NBQ0MsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGFBQWE7Q0FDYiwwQkFBMEI7Q0FJMUIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkI7QUFFRDtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1o7QUFFRDtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQjtBQUVEO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWjtBQUVEO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtDQUNqQiwyQkFBMkI7Q0FDM0I7QUFFRCxTQUFTO0FBQ1Q7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiO0FBRUQsU0FBUztBQUVULFlBQVk7QUFFWixjQUFjO0FBRWQ7Y0FDYztBQUVkLFlBQVk7QUFDWjtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2I7QUFFRDtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkIsbUNBQW1DO0NBQ25DLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakI7QUFFRDtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQjtBQUVEO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWDtBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixRQUFRO0NBQ1IsU0FBUztDQUNUO0FBRUQ7O0NBRUMsV0FBVztDQUNYO0FBRUQ7Q0FDQyxXQUFXO0NBQ1g7QUFFRDtDQUNDLFdBQVc7Q0FDWDtBQUVEO0NBQ0MsV0FBVztDQUNYO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFNBQVM7Q0FDVDtBQUVEO0NBQ0MsWUFBWTtDQUNaO0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUI7QUFFRDtDQUNDLFFBQVE7Q0FDUjtBQUVEO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsT0FBTztDQUNQLFlBQVk7Q0FLWixnQkFBZ0I7Q0FDaEI7QUFFRDtDQUNDLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsUUFBUTtDQUNSO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osOEJBQThCO0NBQzlCO0FBRUQ7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixRQUFRO0NBQ1IsVUFBVTtDQUNWLFlBQVk7Q0FDWixZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLG1DQUFtQztDQUNuQyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQjtBQUVEO0NBQ0MsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQiwwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYO0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxRQUFRO0NBQ1I7QUFFRDtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLE9BQU87Q0FDUCxZQUFZO0NBS1osZ0JBQWdCO0NBQ2hCO0FBRUQ7Q0FDQyxZQUFZO0NBQ1o7QUFFRDtDQUNDLFFBQVE7Q0FDUjtBQUVEO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLGVBQWU7Q0FDZjtBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxZQUFZO0NBQ1osaUNBQWlDO0NBQ2pDLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkIsb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLFlBQVk7Q0FDWixpQ0FBaUM7Q0FDakMsZUFBZTtDQUNmLHVCQUF1QjtDQUN2QixvQkFBb0I7Q0FDcEI7QUFFRDtDQUNDLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1gsWUFBWTtDQUNaLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCO0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixZQUFZO0NBQ1osZUFBZTtDQUNmLGlCQUFpQjtDQUNqQiwyQkFBMkI7Q0FDM0I7QUFFRDtDQUNDLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsZUFBZTtDQUNmO0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQjtBQUVEO0NBQ0MsY0FBYztDQUNkLFlBQVk7Q0FDWixZQUFZO0NBQ1osVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEI7QUFFRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCO0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsV0FBVztDQUNYO0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUl2QixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLHNCQUFzQjtDQUN0QixtREFBbUQ7Q0FHbkQsMkNBQTJDO0NBSzNDLDJCQUEyQjtDQUMzQjtBQUVEO0NBQ0Msc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZjtBQUVEO0NBQ0MsY0FBYztDQUNkO0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkI7QUFFRDtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEI7QUFFRDtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsaUNBQWlDO0NBQ2pDLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7QUFFRDtDQUNDLFdBQVc7Q0FDWDtBQUVEO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCO0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCO0FBRUQ7O0NBRUMsWUFBWTtDQUNaO0FBRUQ7O0NBRUMsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEI7QUFFRDtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsYUFBYTtDQUNiLFdBQVc7Q0FDWCxvQkFBb0I7Q0FDcEI7QUFFRDtDQUNDLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsZUFBZTtDQUNmO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2Y7QUFFRDtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCO0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7QUFFRDtDQUNDLGVBQWU7Q0FDZjtBQUVEO0NBQ0MsZUFBZTtDQUNmO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CO0FBRUQ7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGlDQUFpQztDQUNqQztBQUVEO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixXQUFXO0NBQ1gsb0JBQW9CO0NBQ3BCLGlDQUFpQztDQUNqQztBQUVEO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQjtBQUVEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYjtBQUVEO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQjtBQUVEO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixVQUFVO0NBQ1Y7QUFFRDtDQUNDLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEI7QUFFRDtDQUNDLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1o7QUFFRDtDQUNDLGVBQWU7Q0FDZjtBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsV0FBVztDQUNYLG1CQUFtQjtDQUluQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsUUFBUTtDQUNSLE9BQU87Q0FDUCxvQkFBb0I7Q0FDcEIsYUFBYTtDQUNiLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEI7QUFFRDtDQUNDLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsT0FBTztDQUNQLG9CQUFvQjtDQUNwQixhQUFhO0NBQ2IsY0FBYztDQUNkLGdCQUFnQjtDQUNoQjtBQUVEO0NBQ0MsYUFBYTtDQUNiLFFBQVE7Q0FDUixPQUFPO0NBQ1AsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFVBQVU7Q0FDVix5Q0FBeUM7Q0FHekMsaUNBQWlDO0NBQ2pDO0FBRUQ7Q0FDQyxhQUFhO0NBQ2IsUUFBUTtDQUNSLE9BQU87Q0FDUCxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsVUFBVTtDQUNWLHlDQUF5QztDQUd6QyxpQ0FBaUM7Q0FDakM7QUFFRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2I7QUFFRDtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1o7QUFFRDtDQUNDLHNCQUFzQjtDQUN0QixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQix1QkFBdUI7Q0FJdkIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQjtBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCO0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7QUFFRDtDQUNDLGNBQWM7Q0FDZDtBQUVEO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2I7QUFFRDtDQUNDLGVBQWU7Q0FDZjtBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCO0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2QixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixrQkFBa0I7Q0FJbEIsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLGFBQWE7Q0FDYixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUlsQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCO0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7QUFFRDtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1o7QUFFRCxxQkFBcUI7QUFDckI7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWiw4QkFBOEI7Q0FDOUIsYUFBYTtDQUNiLFVBQVU7Q0FDVixZQUFZO0NBQ1osWUFBWTtDQUNaLGNBQWM7Q0FDZDtBQUVEO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQjtBQUVEO0NBQ0MsMEJBQTBCO0NBQzFCLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQjtBQUVEO0NBQ0MsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsV0FBVztDQUNYLE9BQU87Q0FDUCxXQUFXO0NBQ1gsVUFBVTtDQUNWLGFBQWE7Q0FDYixvQkFBb0I7Q0FDcEIsYUFBYTtDQUNiO0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQiwwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQjtBQUVEO0NBQ0MsVUFBVTtDQUNWO0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLFlBQVk7Q0FDWixpQ0FBaUM7Q0FDakMsd0JBQXdCO0NBQ3hCLG1DQUFtQztDQUNuQyx1QkFBdUI7Q0FDdkIsMEJBQTBCO0NBQzFCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQjtBQUVEO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixhQUFhO0NBQ2IsWUFBWTtDQUNaLDBCQUEwQjtDQUMxQiw2QkFBNkI7Q0FDN0IsdUJBQXVCO0NBQ3ZCO0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsc0JBQXNCO0NBQ3RCLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLGdCQUFnQjtDQUNoQjtBQUVEO0NBQ0MsV0FBVztDQUNYLGdDQUF3QjtTQUF4Qix3QkFBd0I7Q0FDeEIsZ0JBQWdCO0NBQ2hCO0FBRUQ7Q0FDQyxXQUFXO0NBQ1gsZ0NBQXdCO1NBQXhCLHdCQUF3QjtDQUN4QixnQkFBZ0I7Q0FDaEI7QUFFRDtDQUNDLFdBQVc7Q0FDWDtBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsV0FBVztDQUNYLGtDQUEwQjtTQUExQiwwQkFBMEI7Q0FDMUI7QUFFRDtDQUNDLFdBQVc7Q0FDWCxrQ0FBMEI7U0FBMUIsMEJBQTBCO0NBQzFCO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEI7QUFFRDtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osMEJBQTBCO0NBQzFCLGlCQUFpQjtDQUlqQixtQkFBbUI7Q0FLbkIsNkJBQTZCO0NBQzdCO0FBRUQ7Q0FDQyxlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLG9CQUFvQjtDQUNwQjtBQUVEO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEI7QUFFRDtDQUNDLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFNBQVM7Q0FDVCxZQUFZO0NBQ1osYUFBYTtDQUNiLG9EQUFvRDtDQUNwRCxnQkFBZ0I7Q0FLaEIsNkJBQTZCO0NBQzdCLHVCQUF1QjtDQUN2QjtBQUVEO0NBQ0MsYUFBYTtDQUNiO0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixhQUFhO0NBQ2IsUUFBUTtDQUNSLE9BQU87Q0FDUCwrQkFBK0I7Q0FLL0IsMkJBQTJCO0NBQzNCLFdBQVc7Q0FDWDtBQUVELGNBQWM7QUFDZDtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQjtBQUVEO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLDZCQUE2QjtDQUM3Qix1QkFBdUI7Q0FDdkIsNkJBQTZCO0NBQzdCO0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLFFBQVE7Q0FDUixTQUFTO0NBQ1Qsb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkI7QUFFRDtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CO0FBRUQ7O0NBRUMsZUFBZTtDQUNmLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQixhQUFhO0NBSWIsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLDBDQUEwQztDQUMxQyx1Q0FBdUM7Q0FDdkMsc0NBQXNDO0NBQ3RDLHFDQUFxQztDQUNyQyxjQUFjO0NBQ2Q7QUFFRDs7Q0FFQywyQ0FBMkM7Q0FDM0M7QUFFRDtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCLGFBQWE7Q0FJYixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLDBCQUEwQjtDQUMxQixrQkFBa0I7Q0FLbEIsNkJBQTZCO0NBQzdCO0FBRUQ7Q0FDQyxZQUFZO0NBQ1o7QUFFRDtDQUNDLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxZQUFZO0NBQ1o7QUFFRDtDQUNDLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxZQUFZO0NBQ1o7QUFFRDtDQUNDLFlBQVk7Q0FDWjtBQUVEO0NBQ0Msc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsMEJBQTBCO0NBQzFCLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZjtBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLFNBQVM7Q0FDVDtBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLE9BQU87Q0FDUCxRQUFRO0NBQ1IsYUFBYTtDQUNiLFlBQVk7Q0FDWiw4QkFBOEI7Q0FDOUIsdUJBQXVCO0NBSXZCLG1CQUFtQjtDQUluQixtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osOEJBQThCO0NBQzlCLHVCQUF1QjtDQUl2QixtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLDhCQUE4QjtDQUM5QiwwQkFBMEI7Q0FDMUI7QUFFRDtDQUNDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkO0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7QUFFRDtDQUNDLFVBQVU7Q0FDVixTQUFTO0NBQ1QsV0FBVztDQUNYLFlBQVk7Q0FDWixvQkFBb0I7Q0FDcEIsMEJBQTBCO0NBQzFCLGlDQUFpQztDQUVqQyx5QkFBeUI7Q0FDekI7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQjtBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixTQUFTO0NBQ1Qsc0JBQXNCO0NBQ3RCLGdCQUFnQjtDQUNoQjtBQUVEO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixhQUFhO0NBQ2I7QUFFRDtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQ0FBbUM7Q0FDbkM7QUFFRDs7Q0FFQyxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakI7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUVEOztDQUVDLHlCQUF5QjtDQUN6QjtBQUVEO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixRQUFRO0NBQ1IsT0FBTztDQUNQLDRDQUE0QztDQUM1QyxzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLG1DQUFtQztDQUNuQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsU0FBUztDQUNULFVBQVU7Q0FDVix5Q0FBeUM7Q0FHekMsaUNBQWlDO0NBS2pDLDJCQUEyQjtDQUMzQjtBQUVEO0NBQ0MsV0FBVztDQUNYLG9CQUFvQjtDQUNwQjtBQUVEO0NBQ0MsYUFBYTtDQUNiO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0NBS25CLDJCQUEyQjtDQUMzQjtBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZjtBQUVEOztDQUVDOztFQUVDLDBCQUEwQjtFQUMxQjs7Q0FFRDs7RUFFQyx3Q0FBd0M7RUFDeEM7Q0FDRDtBQUVEO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIsMENBQTBDO0NBQzFDO0FBRUQ7Q0FDQyxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLDBCQUEwQjtDQUMxQjtBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEI7QUFFRDtDQUNDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQjtBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsNEJBQTRCO0NBQzVCLGFBQWE7Q0FDYixVQUFVO0NBQ1Y7QUFFRDtDQUNDLHdCQUF3QjtDQUN4Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CO0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQjtBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsNkJBQTZCO0NBQzdCO0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFVBQVU7Q0FDVix5Q0FBaUM7U0FBakMsaUNBQWlDO0NBQ2pDO0FBRUQ7Q0FDQyxVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FLZixnQkFBZ0I7Q0FDaEI7QUFFRDtDQUNDLFlBQVk7Q0FDWiwwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEI7QUFFRDtDQUNDLDJCQUEyQjtDQUMzQjtBQUVEO0NBQ0MsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEI7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyxVQUFVO0NBQ1Y7QUFFRDtDQUNDLFVBQVU7Q0FDVixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEI7QUFFRDtDQUNDLFVBQVU7Q0FDVjtBQUVEO0NBQ0MsVUFBVTtDQUNWO0FBRUQ7Q0FDQywyQkFBMkI7Q0FDM0I7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQjtBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQjtBQUVEO0NBQ0MsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2Q7QUFFRDtDQUNDLFlBQVk7Q0FDWjtBQUVEO0NBQ0MseUJBQXlCO0NBQ3pCO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxRQUFRO0NBQ1IsV0FBVztDQUNYLFlBQVk7Q0FDWixzQ0FBOEI7U0FBOUIsOEJBQThCO0NBQzlCLG9CQUFvQjtDQUNwQixvQkFBb0I7Q0FDcEI7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQjtBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCO0FBRUQ7Q0FDQyxZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEIsb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQixhQUFhO0NBQ2I7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQjtBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2Q7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1o7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQjtBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBRUQ7Q0FDQyxXQUFXO0NBQ1gsc0JBQXNCO0NBQ3RCO0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyxRQUFRO0NBQ1IsY0FBYztDQUNkLCtCQUErQjtDQUMvQixvQkFBb0I7Q0FDcEI7QUFFRDtDQUNDLFFBQVE7Q0FDUjtBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEI7QUFFRDtDQUNDLFFBQVE7Q0FDUjtBQUVEO0NBQ0MscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQjtBQUVEO0NBQ0MsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCO0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQjtBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyxrQ0FBa0M7Q0FDbEMsK0JBQStCO0NBQy9CLDhDQUE4QztDQUM5QyxtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLE9BQU87Q0FDUCxRQUFRO0NBQ1IsWUFBWTtDQUNaLGFBQWE7Q0FDYiwrQkFBK0I7Q0FDL0I7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUVEO0NBQ0MsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQjtBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBRUQ7Q0FDQyxlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsUUFBUTtDQUNSLFdBQVc7Q0FDWCxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQixzQ0FBOEI7U0FBOUIsOEJBQThCO0NBQzlCO0FBRUQ7Q0FDQyxxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCO0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsT0FBTztDQUNQLFFBQVE7Q0FDUixXQUFXO0NBQ1gsK0JBQStCO0NBQy9CLFlBQVk7Q0FDWixhQUFhO0NBQ2IsWUFBWTtDQUNaLDBCQUEwQjtDQUMxQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtDQUNwQjtBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxVQUFVO0NBQ1YseUNBQWlDO1NBQWpDLGlDQUFpQztDQUNqQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CO0FBRUQ7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixPQUFPO0NBQ1AsUUFBUTtDQUNSLGFBQWE7Q0FDYixvQkFBb0I7Q0FDcEIsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIseUNBQWlDO1NBQWpDLGlDQUFpQztDQUNqQyw0Q0FBb0M7U0FBcEMsb0NBQW9DO0NBQ3BDLDhCQUFzQjtTQUF0QixzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFdBQVc7Q0FDWCxZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCLHNCQUFzQjtDQUN0QixPQUFPO0NBQ1A7QUFFRDtDQUNDLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsYUFBYTtDQUNiO0FBRUQ7Q0FDQztFQUNDLDRCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWOztDQUVEO0VBQ0MsVUFBVTtFQUNWOztDQUVEO0VBQ0MsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Y7Q0FDRDtBQUVEO0NBQ0M7RUFDQyw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVjs7Q0FFRDtFQUNDLFVBQVU7RUFDVjs7Q0FFRDtFQUNDLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWO0NBQ0Q7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQjtBQUVEO0NBQ0MsZUFBZTtDQUNmO0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQjtBQUVEO0NBQ0MsYUFBYTtDQUNiLHFCQUFxQjtDQUNyQixvQkFBb0I7Q0FDcEI7QUFFRDtDQUNDO0VBQ0MsV0FBVztFQUNYOztDQUVEO0VBQ0MsWUFBWTtFQUNaOztDQUVEO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7QUFaRDtDQUNDO0VBQ0MsV0FBVztFQUNYOztDQUVEO0VBQ0MsWUFBWTtFQUNaOztDQUVEO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7QUFFRDtDQUNDLDRDQUFvQztTQUFwQyxvQ0FBb0M7Q0FDcEM7QUFFRDtDQUNDLGVBQWU7Q0FDZjtBQUVEO0NBQ0MsZUFBZTtDQUNmO0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQjtBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyxhQUFhO0NBQ2IsV0FBVztDQUNYLGlCQUFpQjtDQUNqQjtBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2I7QUFFRDtDQUNDLFdBQVc7Q0FDWDtBQUVEO0NBQ0MsY0FBYztDQUNkLG9CQUFvQjtDQUNwQiwrQkFBK0I7Q0FDL0I7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQjtBQU1EOztpRkFFaUY7QUFHakYsa0JBQWtCO0FBRWxCOzs7Ozs7O0VBT0U7QUFFRjtnRkFDZ0Y7QUFDaEY7Q0FDQztFQUNDLFdBQVc7RUFDWDtDQUNEO0FBRUQ7Z0ZBQ2dGO0FBQ2hGLGlEQUFpRDtBQUVqRDtnRkFDZ0Y7QUFDaEYsa0RBQWtEO0FBRWxEO2dGQUNnRjtBQUNoRixtREFBbUQ7QUFFbkQ7Z0ZBQ2dGO0FBRWhGO0NBQ0M7RUFDQyx3QkFBd0I7RUFDeEI7O0NBRUQ7RUFDQyxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWjs7Q0FFRDtFQUNDLGtCQUFrQjtFQUNsQjs7Q0FFRDtFQUNDLGdCQUFnQjtFQUNoQjtDQUNEIiwiZmlsZSI6InNyYy9hcHAvbW9iaWxlL21vYmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJ1dGYtOFwiO1xyXG5AaW1wb3J0IFwifm5neC1zbWFydC1tb2RhbC9uZ3gtc21hcnQtbW9kYWwuY3NzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheToxMDAsMTAwaSwyMDAsMjAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaSw4MDAsODAwaSw5MDAsOTAwaScpO1xyXG4vKiBDU1MgRG9jdW1lbnQgKi9cclxuXHJcbi8qIFRhYmxlIG9mIENvbnRlbnRzXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0MS4gQ2xlYW4gQmFzZVxyXG5cdDIuIEJhc2UgVHlwb2dyYXBoeVxyXG5cdDMuIEltYWdlc1xyXG5cdDQuIExpbmtzXHJcblx0NS4gRm9ybXNcclxuXHQ2LiBUYWJsZXNcclxuXHQ3LiBGcmFtZXdvcmsgXHJcbiovXHJcblxyXG4vKiAxLiBDbGVhbiBCYXNlXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmh0bWwsXHJcbmJvZHksXHJcbmRpdixcclxuc3Bhbixcclxub2JqZWN0LFxyXG5pZnJhbWUsXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYsXHJcbnAsXHJcbmJsb2NrcXVvdGUsXHJcbnByZSxcclxuYWJicixcclxuYWRkcmVzcyxcclxuY2l0ZSxcclxuY29kZSxcclxuZGVsLFxyXG5kZm4sXHJcbmVtLFxyXG5pbWcsXHJcbmlucyxcclxua2JkLFxyXG5xLFxyXG5zYW1wLFxyXG5zbWFsbCxcclxuc3Ryb25nLFxyXG5zdWIsXHJcbnN1cCxcclxudmFyLFxyXG5iLFxyXG5pLFxyXG5kbCxcclxuZHQsXHJcbmRkLFxyXG5vbCxcclxudWwsXHJcbmxpLFxyXG5maWVsZHNldCxcclxuZm9ybSxcclxubGFiZWwsXHJcbmxlZ2VuZCxcclxudGFibGUsXHJcbmNhcHRpb24sXHJcbnRib2R5LFxyXG50Zm9vdCxcclxudGhlYWQsXHJcbnRyLFxyXG50aCxcclxudGQsXHJcbmFydGljbGUsXHJcbmFzaWRlLFxyXG5jYW52YXMsXHJcbmRldGFpbHMsXHJcbmZpZ2NhcHRpb24sXHJcbmZpZ3VyZSxcclxuZm9vdGVyLFxyXG5oZWFkZXIsXHJcbmhncm91cCxcclxubWVudSxcclxuYSxcclxubmF2LFxyXG5zZWN0aW9uLFxyXG5zdW1tYXJ5LFxyXG50aW1lLFxyXG5tYXJrLFxyXG5hdWRpbyxcclxudmlkZW8ge1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdG91dGxpbmU6IDA7XHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xyXG5cdC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcblx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmNhbnZhcyxcclxuZGV0YWlscyxcclxuZmlnY2FwdGlvbixcclxuZmlndXJlLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxuaGdyb3VwLFxyXG5tZW51LFxyXG5uYXYsXHJcbnNlY3Rpb24sXHJcbnN1bW1hcnkge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pbWcge1xyXG5cdGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5pbnB1dFt0eXBlPVwidGVsXCJdLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxyXG50ZXh0YXJlYSB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbnRleHRhcmVhOmZvY3VzLFxyXG5pbnB1dDpmb2N1cyxcclxuYSxcclxuZGl2LFxyXG5pbWcge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jZjpiZWZvcmUsXHJcbi5jZjphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLmNmOmFmdGVyIHtcclxuXHRjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNmIHtcclxuXHR6b29tOiAxO1xyXG59XHJcblxyXG4uY2xlYXIge1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY2xlYXJmaXg6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiLlwiO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGhlaWdodDogMDtcclxuXHRjbGVhcjogYm90aDtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jbGVhcmZpeCB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4qIGh0bWwgLmNsZWFyZml4IHtcclxuXHRoZWlnaHQ6IDElO1xyXG59XHJcblxyXG4uY2xlYXJmaXgge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiAyLiBCYXNlIFR5cG9ncmFwaHlcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuYm9keSB7XHJcblx0Y29sb3I6ICMzNzNkNDg7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMjJweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG5oMSB7XHJcblx0Zm9udC1zaXplOiAzNHB4O1xyXG59XHJcblxyXG5oMiB7XHJcblx0Zm9udC1zaXplOiAzNnB4O1xyXG59XHJcblxyXG5oMyB7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5oNCB7XHJcblx0Zm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG5oNSB7XHJcblx0Y29sb3I6ICMwMDdiNGE7XHJcblx0bGluZS1oZWlnaHQ6IDIycHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRtYXJnaW46IDAgMCAycHggMDtcclxufVxyXG5cclxuaDYge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxucCB7XHJcblx0Y29sb3I6ICMzNzNkNDg7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0bGluZS1oZWlnaHQ6IDIycHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxudWwge1xyXG5cdG1hcmdpbjogMjBweCAyMHB4O1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbnVsIGxpIHtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0Y29sb3I6ICMzNzNkNDg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMjJweDtcclxuXHRwYWRkaW5nOiAwIDAgNXB4IDA7XHJcblx0bGlzdC1zdHlsZTogb3V0c2lkZSBjaXJjbGU7XHJcbn1cclxuXHJcbm9sIHtcclxuXHRtYXJnaW46IDIwcHggMjBweDtcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5vbCBsaSB7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGNvbG9yOiAjMzczZDQ4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0cGFkZGluZzogMCAwIDVweCAwO1xyXG5cdGxpc3Qtc3R5bGU6IGRlY2ltYWw7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0YmFja2dyb3VuZDogI2YzZjNmMztcclxuXHRwYWRkaW5nOiAyMHB4IDIwcHggMTBweCAyMHB4O1xyXG5cdGJvcmRlci1sZWZ0OiAycHggc29saWQgIzE1ODljYjtcclxufVxyXG5cclxuYmxvY2txdW90ZSBwIHtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRsaW5lLWhlaWdodDogMTdweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaHIge1xyXG5cdGJvcmRlcjogMCAjMDAwIHNvbGlkO1xyXG5cdGJvcmRlci10b3Atd2lkdGg6IDFweDtcclxuXHRjbGVhcjogYm90aDtcclxuXHRoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qIDMuIEltYWdlc1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5pbWcge1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItc3R5bGU6IG5vbmU7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLyogNC4gTGlua1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5hIHtcclxuXHRjb2xvcjogIzQ3NzdhYztcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC4zcztcclxuXHQtbW96LXRyYW5zaXRpb246IC4zcztcclxuXHQtby10cmFuc2l0aW9uOiAuM3M7XHJcblx0LW1zLXRyYW5zaXRpb246IC4zcztcclxuXHR0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG5cdGNvbG9yOiAjNDc3N2FjO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTphY3RpdmUsXHJcbmEuY3VycmVudCB7XHJcblx0Y29sb3I6ICNlODk0MWE7XHJcbn1cclxuXHJcbmE6Zm9jdXMge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIDUuIEZvcm1zXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbmlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuaW5wdXRbdHlwZT1cInRlbFwiXSxcclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuXHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0Y29sb3I6ICM2NjY2NjY7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGhlaWdodDogMzZweDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcblx0cGFkZGluZzogNXB4IDE1cHg7XHJcblx0Y29sb3I6ICM2NjY2NjY7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGhlaWdodDogNjBweDtcclxuXHRyZXNpemU6IG5vbmU7XHJcblx0Zm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuXHRsaW5lLWhlaWdodDogMTZweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdIHtcclxuXHRiYWNrZ3JvdW5kOiAjNjY2O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcclxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogIzY2NjtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLyogNi4gVGFibGVzXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbnRhYmxlIHtcclxuXHRib3JkZXItc3BhY2luZzogMDtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG50ZCB7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4vKiA3LiBMYXlvdXQgRnJhbWV3b3JrXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIG1haW4gY29udGFpbmVyICovXHJcbiN3cmFwcGVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRmbGV4OiAxO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb290ZXIsXHJcbi5wdXNoIHtcclxuXHRoZWlnaHQ6IDIycHg7XHJcblx0LyogLnB1c2ggbXVzdCBiZSB0aGUgc2FtZSBoZWlnaHQgYXMgLmZvb3RlciAqL1xyXG59XHJcblxyXG4uY29sIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRmbGV4OiAxO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiA2cHggMTVweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29sLTIsXHJcbi5jb2wtMyxcclxuLmNvbC00LFxyXG4uY29sLTUsXHJcbi5jb2wtNixcclxuLmNvbC03LFxyXG4uY29sLTgge1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbC0xIHtcclxuXHR3aWR0aDogMTUlO1xyXG59XHJcblxyXG4uY29sLTIge1xyXG5cdHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5jb2wtMyB7XHJcblx0d2lkdGg6IDI1JTtcclxufVxyXG5cclxuLmNvbC00IHtcclxuXHR3aWR0aDogMzMuMzMlO1xyXG59XHJcblxyXG4uY29sLTUge1xyXG5cdHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5jb2wtNiB7XHJcblx0d2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNvbC03IHtcclxuXHR3aWR0aDogNTUlO1xyXG59XHJcblxyXG4uY29sLTgge1xyXG5cdHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5jb2wtOSB7XHJcblx0d2lkdGg6IDc1JTtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxlZnQge1xyXG5cdHRleHQtYWxpZ246IGxlZnRcclxufVxyXG5cclxuLmJvbGQge1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Y29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5ibGFjayB7XHJcblx0YmFja2dyb3VuZDogIzAwMDtcclxufVxyXG5cclxuLmJsdWUge1xyXG5cdGJhY2tncm91bmQ6ICM4ZGQyZjA7XHJcbn1cclxuXHJcbi5saWdodC1ibHVlIHtcclxuXHRiYWNrZ3JvdW5kOiAjZDBmMWZmO1xyXG59XHJcblxyXG4ucmVkIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmVhZmIyO1xyXG59XHJcblxyXG4ubGlnaHQtcmVkIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZlOWVhO1xyXG59XHJcblxyXG4uZ3JleSB7XHJcblx0YmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLnNlcHJhdGVyIHtcclxuXHRib3JkZXItdG9wOiAxLjVweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4ubGlnaHQtZ3JlZW4ge1xyXG5cdGJhY2tncm91bmQ6ICNkMWU3ZGU7XHJcbn1cclxuXHJcbi5ncmVlbi1kYXJrIHtcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YjRhO1xyXG59XHJcblxyXG4uZ3JlZW4tY29sb3Ige1xyXG5cdGNvbG9yOiAjMDA3YjRhO1xyXG5cdDtcclxufVxyXG5cclxuLnJlZC1kYXJrIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG59XHJcblxyXG4ucmVkLWNvbG9yIHtcclxuXHRjb2xvcjogI2ZmMDAwMDtcclxufVxyXG5cclxuLm1lZGl1bSB7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmdyZWVuLWRhcmsucmVhZC1tb3JlIHtcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YjRhO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmdyZWVuLWRhcmsucmVhZC1tb3JlOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcblxyXG4ucmVkLWRhcmsucmVhZC1tb3JlIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnJlZC1kYXJrLnJlYWQtbW9yZTpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogI2ZmMDAwMDtcclxufVxyXG5cclxuYnV0dG9uLmRlbGV0ZSB7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0cGFkZGluZzogMDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWxldGU6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc2hhZG93IHtcclxuXHRib3gtc2hhZG93OiAwIDFweCA3cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnNoYWRvdzpsYXN0LWNoaWxkIHtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGJhY2tncm91bmQ6ICMwMDdiNGE7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdHBhZGRpbmc6IDdweCAxMnB4O1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjNzO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogLjNzO1xyXG5cdC1vLXRyYW5zaXRpb246IC4zcztcclxuXHQtbXMtdHJhbnNpdGlvbjogLjNzO1xyXG5cdHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcblxyXG4ucmVhZC1tb3JlIHtcclxuXHRiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVhZC1tb3JlOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YjRhO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vKiBoZWFkZXIgKi9cclxuaGVhZGVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmhlYWRlciAuaGVhZGVyLXRvcCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogI2VmZWZlZjtcclxuXHRib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uaGVhZGVyLXRvcCAuY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmxlZnQtcHVzaCB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiA2MCU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0cGFkZGluZzogNHB4IDElIDRweCAxJTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ucmlnaHQtcHVzaCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHR3aWR0aDogNDAlO1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YjRhO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4ubG9nbyBpbWcge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmlnaHQtcHVzaCAuY29sLTYge1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHBhZGRpbmc6IDdweCAxJTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYmFsYW5jZS1pbmZvIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5udW0tY2VsbCBzcGFuIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0bGluZS1oZWlnaHQ6IDE0cHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLm51bS1jZWxsIGVtIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bGluZS1oZWlnaHQ6IDE1cHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWJ0bSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogNXB4IDA7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmhlYWRlci1idG0gLmNvbnRhaW5lciB7XHJcblx0cGFkZGluZzogMCAxJTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uaGVhZGVyLWJ0bSAuc3BlZWstaWNvbiB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5zcGVlay1pY29uIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDI1cHg7XHJcblx0aGVpZ2h0OiAyNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNkMWU3ZGU7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0LW8tYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnNwZWVrLWljb24gaW1nIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hcmstdGV4dCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5tYXJxdWVlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hcnF1ZWUge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmhlYWRlci1idG0gLm1hcmstdGV4dCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHBhZGRpbmctbGVmdDogOHB4O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0cGFkZGluZy10b3A6IDVweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLyogbmF2ICovXHJcbm5hdiB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5uYXYgdWwge31cclxuXHJcbm5hdiB1bCBsaSB7fVxyXG5cclxubmF2IHVsIGxpIGEge31cclxuXHJcbm5hdiB1bCBsaSBhOmhvdmVyLFxyXG5uYXYgLmFjdGl2ZSB7fVxyXG5cclxuLyogZm9vdGVyICovXHJcbmZvb3RlciB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZm9vdGVyLW5hdmlnYXRpb24ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZnQtdGFiIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDIwJTtcclxuXHRwYWRkaW5nOiAxMHB4IDA7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDEyMywgNzQsIDAuMTgpO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZnQtdGFiIGZpZ3VyZSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbi1ib3R0b206IDZweDtcclxufVxyXG5cclxuLmZ0LXRhYiBmaWd1cmUgaW1nIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXgtd2lkdGg6IDIzcHg7XHJcblx0bWF4LWhlaWdodDogMjNweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogOTtcclxufVxyXG5cclxuLmZ0LXRhYiBmaWd1cmUgaW1nLmhvdmVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAxMXB4O1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5mdC10YWI6aG92ZXIgZmlndXJlIGltZy5kZWZhdWx0LFxyXG4uZnQtdGFiIGZpZ3VyZSBpbWcuaG92ZXIge1xyXG5cdG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5mdC10YWI6aG92ZXIgZmlndXJlIGltZy5ob3ZlciB7XHJcblx0b3BhY2l0eTogMTtcclxufVxyXG5cclxuLmZ0LXRhYi5hY3RpdmUgZmlndXJlIGltZy5ob3ZlciB7XHJcblx0b3BhY2l0eTogMTtcclxufVxyXG5cclxuLmZ0LXRhYi5hY3RpdmUgZmlndXJlIGltZy5kZWZhdWx0IHtcclxuXHRvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uZnQtdGFiIHNwYW4ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0bGluZS1oZWlnaHQ6IDE2cHg7XHJcblx0Y29sb3I6ICMwMDA7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDk7XHJcblx0dG9wOiAzcHg7XHJcbn1cclxuXHJcbi5mdC10YWIuYWN0aXZlIHNwYW4ge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZnQtdGFiLmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwM2M2YztcclxufVxyXG5cclxuLmZ0LXRhYi5hY3RpdmU6YmVmb3JlIHtcclxuXHRsZWZ0OiAwO1xyXG59XHJcblxyXG4uZnQtdGFiOmJlZm9yZSB7XHJcblx0Y29udGVudDogJyc7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0YmFja2dyb3VuZDogIzAwN2I0YTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAtMTAwJTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC4zcztcclxuXHQtbW96LXRyYW5zaXRpb246IC4zcztcclxuXHQtby10cmFuc2l0aW9uOiAuM3M7XHJcblx0LW1zLXRyYW5zaXRpb246IC4zcztcclxuXHR0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbi5mdC10YWI6aG92ZXIgc3BhbiB7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5mdC10YWI6aG92ZXI6YmVmb3JlIHtcclxuXHRsZWZ0OiAwO1xyXG59XHJcblxyXG4uc2NyZWVuLWFyZWEge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2NyZWVuLXRhYiB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4uc2NyZWVuLXRhYjphZnRlciB7XHJcblx0Y29udGVudDogJyc7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMXB4O1xyXG5cdGJhY2tncm91bmQ6ICNjY2NjY2M7XHJcbn1cclxuXHJcbi5zY3JlZW4tdGFiIC5jb2wtNCB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAzMy4zJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6ICMwMDA7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG5cdHBhZGRpbmc6IDEwcHggMDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMTIzLCA3NCwgMC4xOCk7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2NyZWVuLXRhYiAuY29sLTQgc3BhbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDk7XHJcbn1cclxuXHJcbi5zY3JlZW4tdGFiIC5jb2wtNC5hY3RpdmUge1xyXG5cdGJhY2tncm91bmQ6ICMwMDdiNGE7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zY3JlZW4tdGFiIC5jb2wtNC5hY3RpdmU6YmVmb3JlIHtcclxuXHRsZWZ0OiAwO1xyXG59XHJcblxyXG4uc2NyZWVuLXRhYiAuY29sLTQ6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YjRhO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IC0xMDAlO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjNzO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogLjNzO1xyXG5cdC1vLXRyYW5zaXRpb246IC4zcztcclxuXHQtbXMtdHJhbnNpdGlvbjogLjNzO1xyXG5cdHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuLnNjcmVlbi10YWIgLmNvbC00OmhvdmVyIHtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNjcmVlbi10YWIgLmNvbC00OmhvdmVyOmJlZm9yZSB7XHJcblx0bGVmdDogMDtcclxufVxyXG5cclxuLnNjcmVlbi1kZXRhaWwge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLnRhYi1kZXRhaWxzIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm5ld3MtaW5mby1jZWxsIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYmZiZjtcclxuXHRwYWRkaW5nOiAxMHB4IDA7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubmV3cy1jZWxsIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYmZiZjtcclxuXHRwYWRkaW5nOiA4cHggMDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZXNjIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDcyJTtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZy1sZWZ0OiA4cHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmRlc2Mgc3BhbiB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGNvbG9yOiAjMDAwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5kZXNjIHNwYW4gYSB7XHJcblx0Y29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5kZXNjIHNwYW4gYTpob3ZlciB7XHJcblx0Y29sb3I6ICMwMDdiNGE7XHJcbn1cclxuXHJcbi5kZXNjIGVtIHtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bGluZS1oZWlnaHQ6IDE0cHg7XHJcblx0Y29sb3I6ICMwMDdiNGE7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uc3RhciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHR3aWR0aDogMThweDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZy1sZWZ0OiA2cHg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXIgaW1nIHtcclxuXHR3aWR0aDogMThweDtcclxuXHRoZWlnaHQ6IDE4cHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYnRuLWNlbGwge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR3aWR0aDogMjIlO1xyXG59XHJcblxyXG4ucGxheS1idG4ge1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHRsaW5lLWhlaWdodDogMTNweDtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdHBhZGRpbmc6IDZweCA2cHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuXHQtby1ib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGJhY2tncm91bmQ6ICM5MGNmOTA7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiBOQU1FLVlPVVItQU5JTUFUSU9OIDFzIGluZmluaXRlO1xyXG5cdC1tb3otYW5pbWF0aW9uOiBOQU1FLVlPVVItQU5JTUFUSU9OIDFzIGluZmluaXRlO1xyXG5cdC1vLWFuaW1hdGlvbjogTkFNRS1ZT1VSLUFOSU1BVElPTiAxcyBpbmZpbml0ZTtcclxuXHRhbmltYXRpb246IE5BTUUtWU9VUi1BTklNQVRJT04gMXMgaW5maW5pdGU7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAwcztcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlIDBzO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAwcztcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAwcztcclxuXHR0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAwcztcclxufVxyXG5cclxuLnBsYXktYnRuOmhvdmVyIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zY3JlZW4tZGV0YWlsIC50YWItZGV0YWlscyB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNjcmVlbi1kZXRhaWwgLnRhYi1kZXRhaWxzLnNob3ctdGFiIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm5ld3MtY2VsbC5ibHVlLWJnIHtcclxuXHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5uZXdzLWNlbGwuYmx1ZS1iZyAuZGVzYyBzcGFuIHtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5zY29yZS1ibG9jayB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XHJcblx0cGFkZGluZy1ib3R0b206IDJweDtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zY29yZS1ibG9jay5yZWQgLmRlc2MgZW0ge1xyXG5cdGNvbG9yOiAjZGUyNDI1O1xyXG59XHJcblxyXG4uc2NvcmUtYmxvY2sgLmxlZnQtcHVzaCB7XHJcblx0d2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnNjb3JlLWJsb2NrIC5yaWdodC1wdXNoIHtcclxuXHR3aWR0aDogNTAlO1xyXG5cdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2NvcmUtYmxvY2sgLmJsYWNrLXNjb3JlIHtcclxuXHRiYWNrZ3JvdW5kOiAjOGRkMmYwO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zY29yZS1ibG9jayAubGF5LXNjb3JlIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmVhZmIyO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNjb3JlLWJsb2NrIC5udW0tY2VsbCBzcGFuLFxyXG4uc2NvcmUtYmxvY2sgLm51bS1jZWxsIGVtIHtcclxuXHRjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnNjb3JlLWJsb2NrIC5sYXktc2NvcmUgLm51bS1jZWxsIHNwYW4sXHJcbi5zY29yZS1ibG9jayAubGF5LXNjb3JlIC5udW0tY2VsbCBlbSB7XHJcblx0Y29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5zY29yZS1ibG9jayAubnVtLWNlbGwgc3BhbiB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc2NvcmUtYmxvY2sgLmNvbC02LmJsYWNrLXNjb3JlOmFmdGVyIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDA7XHJcblx0dG9wOiAwO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMnB4O1xyXG5cdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zY29yZS1ibG9jayAuZGVzYyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zY29yZS1ibG9jay5ncmVlbiAuZGVzYyBlbSB7XHJcblx0Y29sb3I6ICM2ZWJjMjg7XHJcbn1cclxuXHJcbi50d28tdmFsdWUge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udHdvLXZhbHVlIGVtIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50d28tdmFsdWUgZW06bnRoLWNoaWxkKDJuICsgMSkge1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRjb2xvcjogI2RlMjQyNTtcclxufVxyXG5cclxuLnR3by12YWx1ZSBlbTpudGgtY2hpbGQoMm4gKyAyKTpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICfihpInO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAtNHB4O1xyXG5cdHRvcDogLTJweDtcclxuXHRmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5zY29yZS1ibG9jay5ncmVlbiAuZGVzYyBlbTpudGgtY2hpbGQoMm4gKyAyKTpiZWZvcmUge1xyXG5cdGNvbG9yOiAjZGUyNDI1O1xyXG59XHJcblxyXG4uc2NvcmUtYmxvY2suZ3JlZW4gLmRlc2MgZW06bnRoLWNoaWxkKDJuICsgMikge1xyXG5cdGNvbG9yOiAjZGUyNDI1O1xyXG59XHJcblxyXG4uc2NvcmUtYmxvY2sucmVkIC50d28tdmFsdWUgZW06bnRoLWNoaWxkKDJuICsgMikge1xyXG5cdGNvbG9yOiAjNmViYzI4O1xyXG59XHJcblxyXG4udHdvLXZhbHVlIGVtOm50aC1jaGlsZCgybiArIDIpIHtcclxuXHRjb2xvcjogI2RlMjQyNTtcclxuXHRwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbn1cclxuXHJcbi5taW5pLXRpdGxlLWJhciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XHJcbn1cclxuXHJcbi5taW5pLXRpdGxlLWJhciAubGVmdC1wdXNoIHtcclxuXHRwYWRkaW5nOiAzcHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR3aWR0aDogNTAlO1xyXG5cdGJhY2tncm91bmQ6ICMwMDdiNGE7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEzcHg7XHJcbn1cclxuXHJcbi5taW5pLXRpdGxlLWJhciAucmlnaHQtcHVzaCB7XHJcblx0cGFkZGluZzogM3B4O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4ubWluaS10aXRsZS1iYXIgLmNvbC00IHtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1pbmktdGl0bGUtYmFyLmZ1bGwgLmNvbC00IHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLm1pbmktdGl0bGUtYmFyIC5yaWdodC1wdXNoIC5jb2wtNCB7XHJcblx0Y29sb3I6ICMwMDA7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uZGV0YWlscy1wb3B1cCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogMTBweCA3JTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJhY2tncm91bmQ6ICM4ZGQyZjA7XHJcbn1cclxuXHJcbi5kZXRhaWxzLXBvcHVwIGZvcm0ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRvdG9sLWVkaXQtYmFyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50b3RvbC1lZGl0LWJhciAuY29sLTYge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMTUwJTtcclxufVxyXG5cclxuLnRvdG9sLWVkaXQtYmFyIC5jb2wtNjpmaXJzdC1jaGlsZCAuc2NvcmUtYWRkIHtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLnRvdG9sLWVkaXQtYmFyIC5jb2wtNjpsYXN0LWNoaWxkIC5zY29yZS1hZGQge1xyXG5cdG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLnNjb3JlLWFkZCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDkwJTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0LW8tYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2NvcmUtYWRkIC5zY29yZS1taW51cyB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAyNXB4O1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IDA7XHJcblx0YmFja2dyb3VuZDogI2VmZWZlZjtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zY29yZS1hZGQgLnNjb3JlLXBsdXMge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMjVweDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHRvcDogMDtcclxuXHRiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNjb3JlLWFkZCAuc2NvcmUtcGx1czpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICcrJztcclxuXHRsZWZ0OiAwO1xyXG5cdHRvcDogMDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Y29sb3I6ICM2ZWJjMjg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5zY29yZS1hZGQgLnNjb3JlLW1pbnVzOmJlZm9yZSB7XHJcblx0Y29udGVudDogJy0nO1xyXG5cdGxlZnQ6IDA7XHJcblx0dG9wOiAwO1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxuXHRjb2xvcjogI2RlMjQyNTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLnNjb3JlLWFkZCBpbnB1dCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAyOHB4O1xyXG5cdHBhZGRpbmc6IDVweCA1MHB4O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ucHJpY2UtYnRuIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByaWNlLWJ0biAucHJpLWJ0biB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRsaW5lLWhlaWdodDogMTJweDtcclxuXHRjb2xvcjogIzAwMDAwMDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdHBhZGRpbmc6IDdweCAxMHB4IDZweCAxMHB4O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0LW8tYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDElO1xyXG5cdHdpZHRoOiAxOC4xJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnByaWNlLWJ0biAucHJpLWJ0bjpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogIzAwMDtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnByaWNlLWJ0biAucHJpLWJ0bjpudGgtY2hpbGQoNW4gKyA1KSB7XHJcblx0bWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4ucHJpLWJ0bi5yZWQtYnRuIHtcclxuXHRjb2xvcjogI2RlMjQyNTtcclxufVxyXG5cclxuLnN1Ym1pdC1hcmVhIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc3VibWl0LWFyZWEgLmNvbC02IHtcclxuXHR3aWR0aDogNDguNSU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnN1Ym1pdC1hcmVhIC5jb2wtNjpmaXJzdC1jaGlsZCB7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zdWJtaXQtYXJlYSAuY29sLTY6bGFzdC1jaGlsZCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uYnRuLXByaW1lIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogOHB4IDEwcHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDE0cHg7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0LW8tYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRiYWNrZ3JvdW5kOiAjNmViYzI4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Ym1pdC1hcmVhIC5yZWQtYnRuLmJ0bi1wcmltZSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yZWQtYnRuLmJ0bi1wcmltZSB7XHJcblx0YmFja2dyb3VuZDogIzAwMDtcclxufVxyXG5cclxuLnJlZC1idG4uYnRuLXByaW1lOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YjRhO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLmdyZWVuLXN1Yi1idG4ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YjRhO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRsaW5lLWhlaWdodDogMTRweDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuXHQtby1ib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLmdyZWVuLXN1Yi1idG46aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuXHJcbi5zY29yZS1ncm91cC1ibG9jayB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIHJlc3BvbnNpdmUgbWVudSAqL1xyXG4ucmVzcG9uc2l2ZS1tYi1pY29uIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cdG1heC13aWR0aDogNDBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0dG9wOiAzMHB4O1xyXG5cdHJpZ2h0OiAxMHB4O1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdG1hcmdpbjogNHB4IDA7XHJcbn1cclxuXHJcbi5yZXNwb25zaXZlLW1iLWljb24gYSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogNXB4IDhweDtcclxufVxyXG5cclxuLnJlc3BvbnNpdmUtbWItaWNvbiBzcGFuIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2M1NWZmO1xyXG5cdGhlaWdodDogMnB4O1xyXG5cdG1hcmdpbjogNXB4IGF1dG87XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLm1vYmlsZS1uYXYtYmxvY2sge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdHdpZHRoOiA4MCU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IC04MCU7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLm1vYmlsZS1uYXYtYmxvY2sgLnRpdGxlIHtcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YjRhO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG5cdHBhZGRpbmc6IDE1cHggMjBweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm5hdi1jb250ZW50IHVsIHtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5uYXYtY29udGVudCB1bCBsaSB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZmZmZjtcclxuXHQvKmJhY2tncm91bmQ6ICNmNWY1ZjU7Ki9cclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDEyMywgNzQsIDAuMTgpO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bGluZS1oZWlnaHQ6IDE0cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDA7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmF2LWNvbnRlbnQgdWwgbGkgYSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0cGFkZGluZzogMTFweCAxNXB4IDExcHggMzBweDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ubmF2LWNvbnRlbnQgdWwgbGkgYTpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogIzAwN2I0YTtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXYtY29udGVudCB1bCBsaSBpbWcge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiA5cHg7XHJcblx0dG9wOiAxMHB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtYXgtd2lkdGg6IDE1cHg7XHJcbn1cclxuXHJcbi5uYXYtY29udGVudCB1bCBsaSBpbWcuZGVmYXVsdCB7XHJcblx0b3BhY2l0eTogMTtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHR0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbi5uYXYtY29udGVudCB1bCBsaSBpbWcuaG92ZXIge1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0dHJhbnNpdGlvbjogLjNzO1xyXG59XHJcblxyXG4ubmF2LWNvbnRlbnQgdWwgbGkuY3VycmVudCBpbWcuaG92ZXIge1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5uYXYtY29udGVudCB1bCBsaS5jdXJyZW50IGEge1xyXG5cdGJhY2tncm91bmQ6ICMwMDdiNGE7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXYtY29udGVudCB1bCBsaTpob3ZlciBpbWcuaG92ZXIge1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxufVxyXG5cclxuLm5hdi1jb250ZW50IHVsIGxpOmhvdmVyIGltZy5kZWZhdWx0IHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbn1cclxuXHJcbi5jZW50ZXItY2VsbCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbi10b3A6IDhweDtcclxuXHRwYWRkaW5nOiAwcHggMTNweDtcclxufVxyXG5cclxuLm1vYmlsZS1uYXYtYmxvY2sgLnJlZC1idG4uYnRuLXByaW1lIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0LW8tYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG5cclxuLm1vYmlsZS1uYXYtYmxvY2sgLnJlZC1idG4uYnRuLXByaW1lOmhvdmVyIHtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0YmFja2dyb3VuZDogIzAwN2I0YTtcclxufVxyXG5cclxuLm5hdi1jb250ZW50IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5jbG9zZS1idG4ge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDA7XHJcblx0dG9wOiA0cHg7XHJcblx0d2lkdGg6IDE5cHg7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9jbG9zZS5wbmcpIG5vLXJlcGVhdDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuYm9keS5vcGVuIC5jbG9zZS1idG4ge1xyXG5cdHJpZ2h0OiAtMjdweDtcclxufVxyXG5cclxuYm9keS5vcGVuIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmJvZHkub3BlbjphZnRlciB7XHJcblx0Y29udGVudDogJyc7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRsZWZ0OiAwO1xyXG5cdHRvcDogMDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAwcztcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlIDBzO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAwcztcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAwcztcclxuXHR0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAwcztcclxuXHR6LWluZGV4OiA5O1xyXG59XHJcblxyXG4vKmxvZ2luIHBhZ2UqL1xyXG4ubG9naW4tYmxvY2sge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5icmFuZC1hcmVhIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAyNXB4IDEwcHggMTVweCAxMHB4O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogMThweCAxOHB4IDAgMDtcclxufVxyXG5cclxuLmJyYW5kLWFyZWEgaW1nIHtcclxuXHRtYXgtd2lkdGg6IDIwMHB4O1xyXG5cdG1hcmdpbjogLTEyMHB4IDAgMCAwXHJcbn1cclxuXHJcbi5sb2dpbi1zZWN0aW9uIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogOTAlO1xyXG5cdG1heC13aWR0aDogNDAwcHg7XHJcblx0YmFja2dyb3VuZDogIzAwMDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHRib3JkZXItcmFkaXVzOiAxOHB4O1xyXG59XHJcblxyXG4ubG9naW4tc2VjdGlvbiBmb3JtIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAyMHB4IDIzcHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZpZWxkLWNlbGwge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZpZWxkLWNlbGwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4uZmllbGQtY2VsbCBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNnB4O1xyXG5cdC1vLWJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAzNXB4O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRjb2xvcjogIzAwMDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMwcyBlYXNlLWluLW91dDtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjMwcyBlYXNlLWluLW91dDtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDAuMzBzIGVhc2UtaW4tb3V0O1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjMwcyBlYXNlLWluLW91dDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZmllbGQtY2VsbCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMsXHJcbi5maWVsZC1jZWxsIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIHtcclxuXHRib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbn1cclxuXHJcbi5maWVsZC1jZWxsIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQ6ICMwMDdiNGE7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNnB4O1xyXG5cdC1vLWJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG5cclxuLmZpZWxkLWNlbGwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuXHRjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmZpZWxkLWNlbGwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOjotbW96LXBsYWNlaG9sZGVyIHtcclxuXHRjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmZpZWxkLWNlbGwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5maWVsZC1jZWxsIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTotbW96LXBsYWNlaG9sZGVyIHtcclxuXHRjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmZpZWxkLWNlbGwgaW5wdXRbdHlwZT1cInRleHRcIl06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG5cdGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uZmllbGQtY2VsbCBpbnB1dFt0eXBlPVwidGV4dFwiXTo6LW1vei1wbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5maWVsZC1jZWxsIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5maWVsZC1jZWxsIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOi1tb3otcGxhY2Vob2xkZXIge1xyXG5cdGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0cGFkZGluZy1sZWZ0OiAzMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEycHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uY2hlY2tib3ggaW5wdXQge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRoZWlnaHQ6IDA7XHJcblx0d2lkdGg6IDA7XHJcbn1cclxuXHJcbi5jaGVja21hcmsge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRoZWlnaHQ6IDE1cHg7XHJcblx0d2lkdGg6IDE1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuXHQtby1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdC1vLWJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5jaGVja2JveDpob3ZlciBpbnB1dH4uY2hlY2ttYXJrIHtcclxuXHRoZWlnaHQ6IDE1cHg7XHJcblx0d2lkdGg6IDE1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuXHQtby1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG59XHJcblxyXG4uY2hlY2ttYXJrOmFmdGVyIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrOmFmdGVyIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNoZWNrYm94IC5jaGVja21hcms6YWZ0ZXIge1xyXG5cdGxlZnQ6IDZweDtcclxuXHR0b3A6IDJweDtcclxuXHR3aWR0aDogMnB4O1xyXG5cdGhlaWdodDogN3B4O1xyXG5cdGJvcmRlcjogc29saWQgd2hpdGU7XHJcblx0Ym9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLmZpZWxkLWNlbGwuY2hlY2stYm94IHtcclxuXHRwYWRkaW5nOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5maWVsZC1jZWxsIGltZyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDlweDtcclxuXHR0b3A6IDhweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWF4LXdpZHRoOiAxOXB4O1xyXG59XHJcblxyXG4ubG9naW4tYmFja2dyb3VuLXNsaWRlciB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW4tYmFja2dyb3VuLXNsaWRlciAuaXRlbSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWJhY2tncm91bi1zbGlkZXIgLnNsaWNrLXNsaWRlPmRpdixcclxuLmxvZ2luLWJhY2tncm91bi1zbGlkZXIgLnNsaWNrLXNsaWRlPmRpdj5kaXYge1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0bWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1iYWNrZ3JvdW4tc2xpZGVyIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNsaWNrLWRvdHRlZC5zbGljay1zbGlkZXIge1xyXG5cdG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmxvZ2luLWJhY2tncm91bi1zbGlkZXIgLnNsaWNrLWRvdHMsXHJcbi5sb2dpbi1iYWNrZ3JvdW4tc2xpZGVyIC5zbGljay1hcnJvdyB7XHJcblx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmlyc3Qtc2NyZWVuIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogbm93cmFwO1xyXG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IDA7XHJcblx0YmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL3NwbGFzaDEuanBnKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0ei1pbmRleDogOTk5OTk7XHJcblx0b3BhY2l0eTogMDtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5maXJzdC1zY3JlZW4gZmlndXJlIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDA7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzcyBlYXNlIDBzO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDNzIGVhc2UgMHM7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAzcyBlYXNlIDBzO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAzcyBlYXNlIDBzO1xyXG5cdHRyYW5zaXRpb246IGFsbCAzcyBlYXNlIDBzO1xyXG59XHJcblxyXG4uZmlyc3Qtc2NyZWVuLnNob3cge1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0dmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmZpcnN0LXNjcmVlbi5zaG93IGZpZ3VyZSB7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uZmlyc3Qtc2NyZWVuIGZpZ3VyZSBpbWcge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmlyc3Qtc2NyZWVuLmhpZGUge1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UgMHM7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAwcztcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UgMHM7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UgMHM7XHJcblx0dHJhbnNpdGlvbjogYWxsIDFzIGVhc2UgMHM7XHJcbn1cclxuXHJcbi5maWVsZC1jZWxsIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0Y29sb3I6ICMwMDdiNGE7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBOQU1FLVlPVVItQU5JTUFUSU9OIHtcclxuXHJcblx0MCUsXHJcblx0NDklIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdiNGE7XHJcblx0fVxyXG5cclxuXHQ1MCUsXHJcblx0MTAwJSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyMywgNzQsIDAuNSk7XHJcblx0fVxyXG59XHJcblxyXG4ubWluaS10aXRsZS1iYXIuZnVsbCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcclxuXHRib3gtc2hhZG93OiAwIDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLm1pbmktdGl0bGUtYmFyLmZ1bGwgLmxlZnQtcHVzaCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogNnB4IDEwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGJhY2tncm91bmQ6ICMwMDdiNGE7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm1pbmktdGl0bGUtYmFyLmZ1bGwgLmxlZnQtcHVzaCAubmFtZSB7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnNwb3J0cy1wYWdlIC5uZXdzLWNlbGwuYmx1ZS1iZyB7XHJcblx0YmFja2dyb3VuZDogIzAwN2I0YTtcclxufVxyXG5cclxuLnNwb3J0cy1wYWdlIC5kZXNjIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcG9ydHMtcGFnZSAubmV3cy1jZWxsLmJsdWUtYmcgLmRlc2Mgc3BhbiB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc3BvcnRzLXBhZ2UgLnNjcmVlbi1kZXRhaWwge1xyXG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLmlubmVyIHtcclxuXHRwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5zcG9ydHMtcGFydCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdHdpZHRoOiA3NjdweDtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zcG9ydHMtcGFydCAuc3BvcnRzIHtcclxuXHR3aWR0aDogY2FsYygyNSUgLSAxMHB4KTtcclxuXHRtYXJnaW46IDAgNXB4IDEwcHggNXB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNwb3J0cy1wYXJ0IC5zcG9ydHMgYSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zcG9ydHMtcGFydCAuc3BvcnRzIGE6aG92ZXIgaDQge1xyXG5cdGJhY2tncm91bmQ6ICMwMDdiNGE7XHJcbn1cclxuXHJcbi5zcG9ydHMtcGFydCAuc3BvcnRzIGZpZ3VyZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cGFkZGluZy10b3A6IDc5JTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG59XHJcblxyXG4uc3BvcnRzLXBhcnQgLnNwb3J0cyBmaWd1cmUgaW1nIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uc3BvcnRzIGg0IHtcclxuXHRtYXJnaW46IDA7XHJcblx0YmFja2dyb3VuZDogIzAwMDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdHBhZGRpbmc6IDhweCAwO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjNzO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogLjNzO1xyXG5cdC1vLXRyYW5zaXRpb246IC4zcztcclxuXHQtbXMtdHJhbnNpdGlvbjogLjNzO1xyXG5cdHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuLmNoYW5nZS1wd2Qtc2VjdGlvbiBoNSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ucmVzdWx0LXNlY3Rpb24ge1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4ucmVzdWx0LXNlY3Rpb24gLnJlc3VsdC10aXRsZT5kaXYge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLnJlc3VsdC1zZWN0aW9uIC5yZXN1bHQtdGl0bGUgLmNvbC0yIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZXN1bHQtc2VjdGlvbiAucmVzdWx0LmNvbCB7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlc3VsdC1zZWN0aW9uIC5yZXN1bHQgcCB7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucmVzdWx0LXNlY3Rpb24gLnJlc3VsdCBoNiB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmFidC10aXRsZSB7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucHJvZmlsZS1zZWN0aW9uIC5yZXN1bHQgaDUge1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxuLm1hdGNoLWNvbmZpZyBoNSB7XHJcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5tYXRjaC1jb25maWcgaDUgc3BhbiB7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Y29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5tYXRjaC1jb25maWcgaDYge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRjb2xvcjogIzAwMDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5oNiBzcGFuIHtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4udHdvIGg2IHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5iZXRzdGFrZS1zZWN0aW9uIGg1IHtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi51c2Utc3Rha2Uge1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi51c2Utc3Rha2UgaDUge1xyXG5cdGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4udXNlLXN0YWtlIHVsIHtcclxuXHRtYXJnaW46IDEwcHggMCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi51c2Utc3Rha2UgdWwgbGkge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRwYWRkaW5nOiAwIDAgMCAxN3B4O1xyXG5cdG1hcmdpbi1ib3R0b206IDZweDtcclxufVxyXG5cclxuLnVzZS1zdGFrZSB1bCBsaTpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDhweDtcclxuXHRoZWlnaHQ6IDhweDtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YjRhO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi51c2Utc3Rha2UgdWwgbGk6bGFzdC1jaGlsZCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNsaWNrLWJldHRpbmcge1xyXG5cdHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG5cclxuLmNsaWNrLWJldHRpbmcgaDUge1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jbGljay1idXR0b24ge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YjRhO1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0cGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4uY2xpY2stYnV0dG9uIGEge1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0cGFkZGluZzogM3B4IDEwcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uY2xpY2stYnV0dG9uIGE6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuXHJcbi5jbGljay1idXR0b24gYS5hY3RpdmUge1xyXG5cdGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuXHJcbi5jbGljay1iZXR0aW5nIGZvcm0ge1xyXG5cdHBhZGRpbmctdG9wOiAxMnB4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNsaWNrLWJldHRpbmcgZm9ybSBpbnB1dCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG5cdGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcblx0aGVpZ2h0OiAyNHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uY2xpY2stYmV0dGluZyBmb3JtIGJ1dHRvbiB7XHJcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmJldC1saXN0IHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iZXQtbGlzdCBhIHtcclxuXHR3aWR0aDogMzklO1xyXG5cdG1hcmdpbjogMCA0cHggOHB4IDRweDtcclxufVxyXG5cclxuLmJldC1saXN0IGEuYWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kOiAjMDA3YjRhO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYmV0c3Rha2Utc2VjdGlvbiAuc2F2ZXMge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi10b3A6IDEzcHg7XHJcbn1cclxuXHJcbi5zY29yZS1wYXJ0IHtcclxuXHRmbGV4OiAxO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5tYXRjaC1zY29yZSB7XHJcblx0ZmxleDogMTtcclxufVxyXG5cclxuLm1hdGNoLXNjb3JlIHNwYW4ge1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udGVybS1oZWFkZXIgLm1pbmktdGl0bGUtYmFyLmZ1bGwge1xyXG5cdGZsZXg6IDE7XHJcbn1cclxuXHJcbi50ZXJtLWhlYWRlciAubWluaS10aXRsZS1iYXIuZnVsbCAubGVmdC1wdXNoIHtcclxuXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuXHRwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi50ZXJtLWhlYWRlciAubGVmdC1wdXNoIC5ib2xkIHtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRlcm0tZm9vdGVyIC5mdC10YWIge1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0cGFkZGluZzogMTVweCAwO1xyXG59XHJcblxyXG4udGVybS1mb290ZXIgLmZ0LXRhYiBzcGFuIHtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGVybS1mb290ZXIgLmZ0LXRhYi5hZ3JlZSB7XHJcblx0YmFja2dyb3VuZDogIzAwN2I0YVxyXG59XHJcblxyXG4udGVybS1mb290ZXIgLmZ0LXRhYi5hZ3JlZTpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuXHJcbi50ZXJtLWZvb3RlciAuZnQtdGFiLmRpc2FncmVlIHtcclxuXHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcblxyXG4udGVybS1zZWN0aW9uIC5zY3JlZW4tYXJlYSB7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG5cdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4NXB4KTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGVybS1zZWN0aW9uIC5zY3JlZW4tYXJlYTpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbn1cclxuXHJcbi50ZXJtLXNlY3Rpb24gLmlubmVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50ZXJtLXNlY3Rpb24gcCB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRlcm0tc2VjdGlvbiB1bCB7XHJcblx0bWFyZ2luOiAwIDAgMjBweCAwO1xyXG59XHJcblxyXG4udGVybS1zZWN0aW9uIHVsIGxpIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwYWRkaW5nOiAwIDAgMCAxNHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udGVybS1zZWN0aW9uIHVsIGxpOmJlZm9yZSB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogOHB4O1xyXG5cdGhlaWdodDogOHB4O1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxufVxyXG5cclxuLmJhbGwtcnVubmluZyAuY29sLTYge1xyXG5cdGN1cnNvcjogbm90LWFsbG93ZWRzO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uYmFsbC1ydW4ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR6LWluZGV4OiA5O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uYmFsbC1ydW4gc3BhbiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vcGVuLWJhbGw6YmVmb3JlIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0YW5pbWF0aW9uOiBwdWxzYXRlIDEuNXMgZWFzZS1vdXQ7XHJcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcblx0YW5pbWF0aW9uLWRlbGF5OiAxLjFzO1xyXG5cdG9wYWNpdHk6IC41O1xyXG59XHJcblxyXG4ub3Blbi1iYWxsIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMjtcclxuXHR3aWR0aDogOXB4O1xyXG5cdGhlaWdodDogOXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHRvcDogMDtcclxufVxyXG5cclxuLm9wZW4tYmFsbC5sZWZ0IHtcclxuXHRsZWZ0OiAtMTBweDtcclxufVxyXG5cclxuLm9wZW4tYmFsbC5yaWdodCB7XHJcblx0cmlnaHQ6IC0xMHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNhdGUge1xyXG5cdDAlIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcblx0XHRvcGFjaXR5OiAwXHJcblx0fVxyXG5cclxuXHQ1MCUge1xyXG5cdFx0b3BhY2l0eTogMVxyXG5cdH1cclxuXHJcblx0MTAwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XHJcblx0XHRvcGFjaXR5OiAwXHJcblx0fVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2F0ZSB7XHJcblx0MCUge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHRcdG9wYWNpdHk6IDBcclxuXHR9XHJcblxyXG5cdDUwJSB7XHJcblx0XHRvcGFjaXR5OiAxXHJcblx0fVxyXG5cclxuXHQxMDAlIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMi41KTtcclxuXHRcdG9wYWNpdHk6IDBcclxuXHR9XHJcbn1cclxuXHJcbi5pY2RjLXNlY3Rpb24gLmdyZXkuY29sIHtcclxuXHRwYWRkaW5nOiA2cHggMzVweDtcclxufVxyXG5cclxuLmljZGMtc2VjdGlvbiAuaWNkYy1wYXJ0IC5jb2wge1xyXG5cdHBhZGRpbmc6IDAgNXB4O1xyXG59XHJcblxyXG4ucm93LWxpbmUge1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5kYXRlLWNvbCB7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnVwY29taW5nLW1hdGNoIC5zY29yZS1ibG9jayB7XHJcblx0b3BhY2l0eTogMC41O1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmsge1xyXG5cdDAlIHtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0fVxyXG5cclxuXHQ1MCUge1xyXG5cdFx0b3BhY2l0eTogLjU7XHJcblx0fVxyXG5cclxuXHQxMDAlIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG59XHJcblxyXG4uc3Rhci55ZWxsb3cgaW1nIHtcclxuXHRhbmltYXRpb246IGJsaW5rIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLmJldGhpcy1zZWN0aW9uIC5pY2RjLXBhcnQgLmNvbC0yOmxhc3QtY2hpbGQgc3BhbiB7XHJcblx0Y29sb3I6ICNmZjAwMDA7XHJcbn1cclxuXHJcbi5wcm9maXQtc2VjdGlvbiAuaW5uZXIgLmNvbCB7XHJcblx0cGFkZGluZzogNXB4IDA7XHJcbn1cclxuXHJcbi5wcm9maXQtc2VjdGlvbiAuYm9sZCB7XHJcblx0bGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLnByb2ZpdC1zZWN0aW9uIC5yZWFkLW1vcmUge1xyXG5cdHBhZGRpbmc6IDNweCAxMHB4O1xyXG59XHJcblxyXG4ucHJvZml0LXNlY3Rpb24gLnJlYWQtbW9yZTpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogIzAwMDtcclxufVxyXG5cclxuLmJldC1wb3B1cCB7XHJcblx0d2lkdGg6IDU1MHB4O1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJldC1wb3B1cCAubWluaS10aXRsZS1iYXIuZnVsbCB7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmZhbmN5Ym94LXNsaWRlLS1odG1sIC5mYW5jeWJveC1jbG9zZS1zbWFsbCB7XHJcblx0d2lkdGg6IDM0cHg7XHJcblx0aGVpZ2h0OiAzNHB4O1xyXG5cdGJhY2tncm91bmQ6ICMwMDA7XHJcblx0cGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZmFuY3lib3gtYnV0dG9uIHN2ZyBwYXRoIHtcclxuXHRmaWxsOiAjZmZmO1xyXG59XHJcblxyXG4uY3VycmVudC1tYXRjaCAuc2NvcmUtYmxvY2sgLmxlZnQtcHVzaCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmN1cnJlbnQtbWF0Y2ggLnNjb3JlLWJsb2NrIC5sZWZ0LXB1c2ggLnJlYWQtbW9yZSB7XHJcblx0cGFkZGluZzogM3B4IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbnJlc3BvbnNpdmUuY3NzXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbi8qIENTUyBEb2N1bWVudCAqL1xyXG5cclxuLyogVGFibGUgb2YgQ29udGVudHNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQxLiBNb2JpbGVcclxuXHQyLiBMYXJnZSBNb2JpbGVcclxuXHQzLiBpUGFkXHJcblx0NC4gbGFyZ2UgZGVza3RvcFxyXG5cdDUuIE90aGVyXHJcbiovXHJcblxyXG4vKiAxLiBNb2JpbGUgcmVzcG9uc2l2ZSBjc3MgNjQwcHhcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6NjQwcHgpIHtcclxuXHQuc3BvcnRzLXBhcnQge1xyXG5cdFx0d2lkdGg6IDkzJTtcclxuXHR9XHJcbn1cclxuXHJcbi8qIDIuIExhcmdlIE1vYmlsZSByZXNwb25zaXZlIGNzcyA2NDBweFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5AbWVkaWEgKG1pbi13aWR0aDo2NDFweCkgYW5kIChtYXgtd2lkdGg6NzY3cHgpIHt9XHJcblxyXG4vKiAzLiBpUGFkIHJlc3BvbnNpdmUgY3NzIDc2OHB4IHRvIDEwMjNweFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCkgYW5kIChtYXgtd2lkdGg6MTAyM3B4KSB7fVxyXG5cclxuLyogNC4gbGFyZ2UgZGVza3RvcCByZXNwb25zaXZlIGNzcyAxMDI0cHggdG8gMTE5OXB4XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbkBtZWRpYSAobWluLXdpZHRoOjEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTE5OXB4KSB7fVxyXG5cclxuLyogNS4gT3RoZXIgbWVkaWEtcXVlcnlcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjQ4MXB4KSB7XHJcblx0LnNwb3J0cy1wYXJ0IC5zcG9ydHMge1xyXG5cdFx0d2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcblx0fVxyXG5cclxuXHQub3Blbi1iYWxsIHtcclxuXHRcdHRvcDogLTJweDtcclxuXHRcdHdpZHRoOiA2cHg7XHJcblx0XHRoZWlnaHQ6IDZweDtcclxuXHR9XHJcblxyXG5cdC5pY2RjLXNlY3Rpb24gLmdyZXkuY29sIHtcclxuXHRcdHBhZGRpbmc6IDZweCAxNXB4O1xyXG5cdH1cclxuXHJcblx0LmljZGMtcGFydCAuY29sLTIgc3BhbiB7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0fVxyXG59XHJcbiIsImJvZHkuZGlhbG9nLW9wZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5uc20tZGlhbG9nLWJ0bi1jbG9zZSB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICMyZDJkMmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXM7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiA5OTk7IH1cbiAgLm92ZXJsYXkubnNtLW92ZXJsYXktb3BlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyB9XG4gIC5vdmVybGF5LnRyYW5zcGFyZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG4ubnNtLWRpYWxvZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiAgLm5zbS1kaWFsb2cubnNtLWRpYWxvZy1jbG9zZSB7XG4gICAgb3BhY2l0eTogMDsgfVxuICAubnNtLWRpYWxvZy5uc20tY2VudGVyZWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAoMS43NXJlbSAqIDIpKTsgfVxuXG4ubnNtLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbjogMS43NXJlbTtcbiAgYm94LXNoYWRvdzogMCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDEzcHggMTlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA1cHggMjRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgb3V0bGluZTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfVxuXG4ubnNtLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDEgMSBhdXRvOyB9XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKipcbiogQW5pbWF0aW9uc1xuKiAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLm5zbS1kaWFsb2dbY2xhc3MqPW5zbS1kaWFsb2ctYW5pbWF0aW9uLV0ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZS1pbi1vdXQsIG9wYWNpdHkgNTAwbXM7IH1cblxuLm5zbS1kaWFsb2ctYW5pbWF0aW9uLWx0ciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7IH1cbiAgLm5zbS1kaWFsb2ctYW5pbWF0aW9uLWx0ci5uc20tZGlhbG9nLW9wZW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IH1cbiAgLm5zbS1kaWFsb2ctYW5pbWF0aW9uLWx0ci5uc20tZGlhbG9nLWNsb3NlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApOyB9XG5cbi5uc20tZGlhbG9nLWFuaW1hdGlvbi1ydGwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUwJSwgMCwgMCk7IH1cbiAgLm5zbS1kaWFsb2ctYW5pbWF0aW9uLXJ0bC5uc20tZGlhbG9nLW9wZW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IH1cbiAgLm5zbS1kaWFsb2ctYW5pbWF0aW9uLXJ0bC5uc20tZGlhbG9nLWNsb3NlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUwJSwgMCwgMCk7IH1cblxuLm5zbS1kaWFsb2ctYW5pbWF0aW9uLXR0YiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCk7IH1cbiAgLm5zbS1kaWFsb2ctYW5pbWF0aW9uLXR0Yi5uc20tZGlhbG9nLW9wZW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IH1cbiAgLm5zbS1kaWFsb2ctYW5pbWF0aW9uLXR0Yi5uc20tZGlhbG9nLWNsb3NlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApOyB9XG5cbi5uc20tZGlhbG9nLWFuaW1hdGlvbi1idHQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDUwJSwgMCk7IH1cbiAgLm5zbS1kaWFsb2ctYW5pbWF0aW9uLWJ0dC5uc20tZGlhbG9nLW9wZW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IH1cbiAgLm5zbS1kaWFsb2ctYW5pbWF0aW9uLWJ0dC5uc20tZGlhbG9nLWNsb3NlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDUwJSwgMCk7IH1cbiJdfQ== */"

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
/* harmony import */ var _inner_pages_betting_detial_page_betting_detial_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./inner-pages/betting-detial-page/betting-detial-page.component */ "./src/app/mobile/inner-pages/betting-detial-page/betting-detial-page.component.ts");
/* harmony import */ var _inner_pages_betting_detial_page_match_odds_match_odds_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./inner-pages/betting-detial-page/match-odds/match-odds.component */ "./src/app/mobile/inner-pages/betting-detial-page/match-odds/match-odds.component.ts");
/* harmony import */ var _inner_pages_betting_detial_page_match_odds2_match_odds2_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./inner-pages/betting-detial-page/match-odds2/match-odds2.component */ "./src/app/mobile/inner-pages/betting-detial-page/match-odds2/match-odds2.component.ts");
/* harmony import */ var _inner_pages_betting_detial_page_fancy_fancy_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./inner-pages/betting-detial-page/fancy/fancy.component */ "./src/app/mobile/inner-pages/betting-detial-page/fancy/fancy.component.ts");
/* harmony import */ var _inner_pages_betting_detial_page_fancy2_fancy2_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./inner-pages/betting-detial-page/fancy2/fancy2.component */ "./src/app/mobile/inner-pages/betting-detial-page/fancy2/fancy2.component.ts");
/* harmony import */ var _inner_pages_betting_detial_page_lottery_lottery_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./inner-pages/betting-detial-page/lottery/lottery.component */ "./src/app/mobile/inner-pages/betting-detial-page/lottery/lottery.component.ts");
/* harmony import */ var _inner_pages_betting_detial_page_matched_matched_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./inner-pages/betting-detial-page/matched/matched.component */ "./src/app/mobile/inner-pages/betting-detial-page/matched/matched.component.ts");
/* harmony import */ var _inner_pages_betting_detial_page_unmatched_unmatched_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./inner-pages/betting-detial-page/unmatched/unmatched.component */ "./src/app/mobile/inner-pages/betting-detial-page/unmatched/unmatched.component.ts");
/* harmony import */ var _shared_pipes_millis_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/pipes/millis.pipe */ "./src/app/mobile/shared/pipes/millis.pipe.ts");





































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
                _terms_terms_component__WEBPACK_IMPORTED_MODULE_25__["TermsComponent"],
                _inner_pages_betting_detial_page_betting_detial_page_component__WEBPACK_IMPORTED_MODULE_27__["BettingDetialPageComponent"],
                _inner_pages_betting_detial_page_match_odds_match_odds_component__WEBPACK_IMPORTED_MODULE_28__["MatchOddsComponent"],
                _inner_pages_betting_detial_page_match_odds2_match_odds2_component__WEBPACK_IMPORTED_MODULE_29__["MatchOdds2Component"],
                _inner_pages_betting_detial_page_fancy_fancy_component__WEBPACK_IMPORTED_MODULE_30__["FancyComponent"],
                _inner_pages_betting_detial_page_fancy2_fancy2_component__WEBPACK_IMPORTED_MODULE_31__["Fancy2Component"],
                _inner_pages_betting_detial_page_lottery_lottery_component__WEBPACK_IMPORTED_MODULE_32__["LotteryComponent"],
                _inner_pages_betting_detial_page_matched_matched_component__WEBPACK_IMPORTED_MODULE_33__["MatchedComponent"],
                _inner_pages_betting_detial_page_unmatched_unmatched_component__WEBPACK_IMPORTED_MODULE_34__["UnmatchedComponent"],
                _shared_pipes_millis_pipe__WEBPACK_IMPORTED_MODULE_35__["MillisPipe"]
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

/***/ "./src/app/mobile/shared/pipes/millis.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/mobile/shared/pipes/millis.pipe.ts ***!
  \****************************************************/
/*! exports provided: MillisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MillisPipe", function() { return MillisPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MillisPipe = /** @class */ (function () {
    function MillisPipe() {
    }
    MillisPipe.prototype.transform = function (value) {
        if (value.length === 13) {
            return +value;
        }
        else if (value.length) {
            return +value * 1000;
        }
    };
    MillisPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'millis' })
    ], MillisPipe);
    return MillisPipe;
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

/***/ "./src/app/mobile/shared/services/detail.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/mobile/shared/services/detail.service.ts ***!
  \**********************************************************/
/*! exports provided: DetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailService", function() { return DetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_custom_http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/custom-http-client */ "./src/app/mobile/shared/services/api/custom-http-client.ts");



var DetailService = /** @class */ (function () {
    function DetailService(chttp) {
        this.chttp = chttp;
    }
    DetailService.prototype.getMatchOdd = function (event_slug, event_id) {
        return this.chttp.post("v2/events/app-" + event_slug + "/match-odds/" + event_id, {});
    };
    DetailService.prototype.getBookmarket = function (event_slug, event_id) {
        return this.chttp.post("v2/events/app-" + event_slug + "/manual-session-match-odd/" + event_id, {});
    };
    DetailService.prototype.getFancyMarket = function (event_slug, event_id) {
        return this.chttp.post("v2/events/app-" + event_slug + "/manual-session/" + event_id, {});
    };
    DetailService.prototype.getFancy2Market = function (event_slug, event_id) {
        return this.chttp.post("v2/events/app-" + event_slug + "/manual-session-fancy/" + event_id, {});
    };
    DetailService.prototype.getBookingList = function (data) {
        return this.chttp.post("v2/events/app-cricket/get-profit-loss-fancy-book", data);
    };
    DetailService.prototype.getLottery = function (event_slug, event_id) {
        return this.chttp.post("v2/events/app-" + event_slug + "/manual-session-lottery/" + event_id, {});
    };
    DetailService.prototype.getMatchedUnMatchedList = function (event_id) {
        return this.chttp.post("v2/users/app-history/current-bet/" + event_id, {});
    };
    DetailService.prototype.getBetDelay = function (data) {
        return this.chttp.post('v2/events/app-event/event-setting', data);
    };
    DetailService.prototype.makeBet = function (event_slug, data) {
        return this.chttp.post("v2/events/app-" + event_slug + "/placebet", data, true);
    };
    DetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_custom_http_client__WEBPACK_IMPORTED_MODULE_2__["CustomHttpClient"]])
    ], DetailService);
    return DetailService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var GlobalService = /** @class */ (function () {
    function GlobalService(chttp) {
        this.chttp = chttp;
    }
    GlobalService.prototype.getCommentory = function () {
        return this.chttp.post('v2/events/event/commentary', {});
    };
    GlobalService.prototype.getBalance = function () {
        return this.chttp.post('v2/users/app-history/get-balance', {});
    };
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
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