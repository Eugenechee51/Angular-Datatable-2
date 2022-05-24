(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");



class AppComponent {
    constructor() {
        this.title = 'Products-DataTable';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-products");
    } }, directives: [_products_products_component__WEBPACK_IMPORTED_MODULE_1__["ProductsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datatable/datatable.component */ "./src/app/datatable/datatable.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
/* harmony import */ var _services_in_memory_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/in-memory.service */ "./src/app/services/in-memory.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"],
            src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__["environment"].inMemoryDatabase ? angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_10__["InMemoryWebApiModule"].forRoot(_services_in_memory_service__WEBPACK_IMPORTED_MODULE_11__["InMemoryDataService"]) : [],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
            ngx_loading__WEBPACK_IMPORTED_MODULE_14__["NgxLoadingModule"].forRoot({}),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_0__["DataTableComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_14__["NgxLoadingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_0__["DataTableComponent"],
                    _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"],
                    src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__["environment"].inMemoryDatabase ? angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_10__["InMemoryWebApiModule"].forRoot(_services_in_memory_service__WEBPACK_IMPORTED_MODULE_11__["InMemoryDataService"]) : [],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                    ngx_loading__WEBPACK_IMPORTED_MODULE_14__["NgxLoadingModule"].forRoot({}),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/datatable/dataTable.service.ts":
/*!************************************************!*\
  !*** ./src/app/datatable/dataTable.service.ts ***!
  \************************************************/
/*! exports provided: DataTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableService", function() { return DataTableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class DataTableService {
    constructor(http) {
        this.http = http;
    }
    getData(route) {
        return this.http.get(this.baseApiUrl + '/' + route, { responseType: 'text' });
    }
    editData(route, paramValue, data) {
        const endPoint = route.split(":")[0];
        return this.http.put(`${this.baseApiUrl}/${endPoint}${paramValue}`, data, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(errorRes => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorRes);
        }));
    }
    deleteData(route, paramValue) {
        const endPoint = route.split(":")[0];
        return this.http.delete(`${this.baseApiUrl}/${endPoint}${paramValue}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(errorRes => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorRes);
        }));
    }
    deleteDataByMeasure(route, paramValue) {
        const endPoint = route.split(':')[0];
        return this.http.delete(`${this.baseApiUrl}/${endPoint}?unit=${paramValue}`, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(errorRes => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorRes);
        }));
    }
    createData(route, data) {
        return this.http.post(`${this.baseApiUrl}/${route}`, data, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(errorRes => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorRes);
        }));
    }
    getCountByManufacturer(route, manufacturerId) {
        const endPoint = route.split(':')[0];
        return this.http.get(`${this.baseApiUrl}/${endPoint}?manufactureId=${manufacturerId}`, { responseType: 'text' });
    }
    getUniqueManufactureCosts(route) {
        const endPoint = route.split(':')[0];
        return this.http.get(`${this.baseApiUrl}/${endPoint}`, { responseType: 'text' });
    }
}
DataTableService.ɵfac = function DataTableService_Factory(t) { return new (t || DataTableService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DataTableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataTableService, factory: DataTableService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/datatable/datatable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/datatable/datatable.component.ts ***!
  \**************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _dataTable_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataTable.service */ "./src/app/datatable/dataTable.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");














const _c0 = ["addEditModal"];
function DataTableComponent_ng_template_57_div_9_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DataTableComponent_ng_template_57_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DataTableComponent_ng_template_57_div_9_span_5_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](col_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.currentRecord ? ctx_r4.currentRecord[col_r5.data] : null)("name", col_r5.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (_r3.form.controls[col_r5.data] == null ? null : _r3.form.controls[col_r5.data].touched) && (_r3.form.controls[col_r5.data] == null ? null : _r3.form.controls[col_r5.data].errors));
} }
function DataTableComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_ng_template_57_Template_button_click_3_listener() { const modal_r2 = ctx.$implicit; return modal_r2.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DataTableComponent_ng_template_57_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onAddEditFormSubmit(_r3.form.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DataTableComponent_ng_template_57_div_9_Template, 6, 4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_ng_template_57_Template_button_click_11_listener() { const modal_r2 = ctx.$implicit; return modal_r2.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.currentOperation, "Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.primaryColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r3.invalid);
} }
function parseXml(xml_data) {
    var result;
    xml2js__WEBPACK_IMPORTED_MODULE_5___default.a.Parser().parseString(xml_data, (e, r) => { result = r; });
    return result;
}
class DataTableComponent {
    constructor(dataTableService, modalService, decimalPipe, toastr) {
        this.dataTableService = dataTableService;
        this.modalService = modalService;
        this.decimalPipe = decimalPipe;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showLoader = false;
    }
    ngOnInit() {
        //welcome
        const scope = this;
        this.showLoader = true;
        this.primaryColumns = [...this.customDtOptions.dataTableOptions.columns];
        const columnDefs = this.customDtOptions.dataTableOptions.columns.map((col, index) => ({
            targets: index,
            className: "dt-center",
            render: (cellData, type, row) => col.format == "text" ? cellData :
                col.format == "number" && !isNaN(cellData) ? this.decimalPipe.transform(cellData, '2.') :
                    col.format == "amount" && !isNaN(cellData) ? "$" + this.decimalPipe.transform(cellData / 1000, '2.') + "K" : cellData
        }));
        columnDefs.push({
            targets: columnDefs.length,
            className: "dt-center",
            render: (data, type, row) => `<div class="d-flex justify-content-around">
                  <button type="button" id="editRecordBtn" class="btn btn-warning">Edit</button>
                  <button type="button" id="deleteRecordBtn" class="btn btn-danger">Delete</button>
             </div>`,
            fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
                $(nTd).find("#editRecordBtn").on("click", () => this.openAddEditModal(iRow));
                $(nTd).find("#deleteRecordBtn").on("click", () => this.removeRecord(iRow));
            }
        });
        this.customDtOptions.dataTableOptions.columns.push({ title: 'Actions', data: null });
        this.dtOptions = Object.assign(Object.assign({ dom: 'lfr<"toolbar">tip', lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']], responsive: true, autoWidth: true, initComplete: () => {
                console.log("InitComplete");
                $('div.toolbar').html(`<button type="button" id="addRecordBtn" class="btn btn-primary float-right px-2 py-1  mr-3" >Add New Product</button>`);
                $('div.toolbar').find('#addRecordBtn').on('click', () => scope.openAddEditModal(-1));
                //$('div.table.thead').html(`<button type="button" id="delByMeasureBtn" class="btn btn-primary float-right px-2 py-1  mr-3" >Delete Product</button>`);
            } }, this.customDtOptions.dataTableOptions), { columnDefs });
        this.dataTableService.baseApiUrl = this.customDtOptions.baseApiUrl;
        var measure = document.getElementById('measureField');
        console.log(measure.value);
        $('div.container').find('#delByMeasureBtn').on('click', () => scope.removeByMeasure(measure.value));
        var manufacturerId = document.getElementById('manufacturerIdField');
        $('div.container').find('#countByManufacturerIdBtn').on('click', () => scope.getCountByManufacturer(manufacturerId.value));
        $('div.container').find('#getUniqueManufactureCostBtn').on('click', () => scope.getUniqueManufactureCost());
        this.getData(false);
    }
    ngAfterViewInit() {
        this.dtTrigger.subscribe(() => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.columns().every(function () {
                    const that = this;
                    $('input', this.footer()).on('keyup change', function () {
                        if (that.search() !== this['value']) {
                            that
                                .search(this['value'])
                                .draw();
                        }
                    });
                });
            });
        });
    }
    getData(flag) {
        this.dataTableService.getData(this.customDtOptions.get).subscribe((res) => {
            if (res === null) {
                console.log('null');
                //this.rerender();
                if (flag)
                    this.rerender();
                else {
                    this.dtTrigger.next();
                    this.showLoader = false;
                }
                return;
            }
            this.data = res;
            //console.log(this.data);
            this.data = parseXml(this.data);
            this.data = this.data['ArrayList']['item'];
            //console.log(this.data);
            this.dtOptions.data = this.data;
            this.templateDataObject ? "" : this.templateDataObject = Object.fromEntries(Object.keys(this.data[0]).map(key => [key, ""]));
            //console.log("templateDataObject: " + this.templateDataObject);
            if (flag)
                this.rerender();
            else {
                this.dtTrigger.next();
                this.showLoader = false;
            }
        }, (err) => {
            console.log("Error Getting Records", err.message);
            this.toastr.error(err.message, 'Error Getting Records');
        });
    }
    openAddEditModal(iRow) {
        this.currentOperation = (iRow == -1) ? "Add" : "Edit";
        //if (iRow === -1)
        //iRow = 0;
        this.currentRecord = (iRow == -1) ? this.templateDataObject : this.data[iRow];
        this.modalService.open(this.addEditModalRef).result
            .then((result) => console.log('Modal closed'))
            .catch(err => "");
        console.log(this.currentRecord);
    }
    onAddEditFormSubmit(formValue) {
        this.showLoader = true;
        this.modalService.dismissAll();
        const prop = this.customDtOptions.param;
        const paramValue = this.currentRecord[prop];
        this.customDtOptions.generateParamOnAdd && this.currentOperation == "Add" ? this.currentRecord[prop] = new Date().getTime().toString() : "";
        console.log(formValue);
        const json = {
            //id: formValue.id,
            name: formValue.name,
            coordinates: {
                x: formValue['coordinates.0.x'],
                y: formValue['coordinates.0.y']
            },
            price: formValue.price,
            manufactureCost: formValue.manufactureCost,
            unitOfMeasure: formValue.unitOfMeasure,
            manufacturer: {
                id: formValue['manufacturer.0.id'],
                name: formValue['manufacturer.0.name'],
                fullName: formValue['manufacturer.0.fullName'],
                employeesCount: formValue['manufacturer.0.employeesCount'],
                type: formValue['manufacturer.0.type']
            }
        };
        console.log(json);
        const dataToSend = Object.assign(Object.assign({}, this.currentRecord), json);
        console.log(dataToSend);
        this.currentOperation == "Add" ?
            this.dataTableService.createData(this.customDtOptions.add, dataToSend).subscribe((res) => {
                console.log(res);
                this.currentRecord = null;
                this.currentOperation = "";
                this.toastr.success('Record Added Successfully', 'Success');
                this.customDtOptions.eventCallbacks.added();
                this.getData(true);
            }, (err) => {
                console.log("Error Adding Record", err.message);
                this.toastr.error(err.message, 'Error Adding Record');
                this.currentRecord = null;
                this.currentOperation = "";
                this.showLoader = false;
            })
            : // EDIT MODE
                this.dataTableService.editData(this.customDtOptions.edit, paramValue, dataToSend).subscribe((res) => {
                    console.log(res);
                    this.currentRecord = null;
                    this.currentOperation = "";
                    this.toastr.success('Record Edited Successfully', 'Success');
                    this.customDtOptions.eventCallbacks.edited();
                    this.getData(true);
                }, (err) => {
                    console.log("Error Editing Record", err.message);
                    this.toastr.error(err.message, 'Error Editing Record');
                    this.currentRecord = null;
                    this.currentOperation = "";
                    this.showLoader = false;
                });
    }
    removeRecord(iRow) {
        this.showLoader = true;
        this.currentRecord = this.data[iRow];
        const paramValue = this.currentRecord[this.customDtOptions.param];
        this.dataTableService.deleteData(this.customDtOptions.delete, paramValue).subscribe((res) => {
            console.log(res);
            this.currentRecord = null;
            this.currentOperation = "";
            this.toastr.success('Record Deleted Successfully', 'Success');
            this.customDtOptions.eventCallbacks.deleted();
            this.getData(true);
            //this.rerender();
        }, (err) => {
            console.log("Error Deleting Record", err.message);
            this.toastr.error(err.message, 'Error Deleting Record');
            this.currentRecord = null;
            this.currentOperation = "";
            this.showLoader = false;
        });
    }
    removeByMeasure(measureType) {
        this.showLoader = true;
        this.dataTableService.deleteDataByMeasure(this.customDtOptions.deleteByMeasure, measureType).subscribe((res) => {
            console.log(res);
            this.currentRecord = null;
            this.currentOperation = "";
            this.toastr.success('Records Deleted Successfully', 'Success');
            this.customDtOptions.eventCallbacks.deleted();
            this.getData(true);
        }, (err) => {
            console.log("Error Deleting Record", err.message);
            this.toastr.error(err.message, 'Error Deleting Record');
            this.currentRecord = null;
            this.currentOperation = "";
            this.showLoader = false;
        });
    }
    getCountByManufacturer(manufacturerId) {
        this.showLoader = true;
        this.dataTableService.getCountByManufacturer(this.customDtOptions.getByManufacturer, manufacturerId).subscribe((res) => {
            console.log(res);
            this.data = res;
            this.data = parseXml(this.data);
            this.data = this.data['Count']['count'];
            console.log(this.data);
            this.currentRecord = null;
            this.currentOperation = "";
            this.toastr.success('Products counted: ' + this.data, 'Success');
            document.getElementById("p1").textContent = 'Products counted: ' + this.data;
            this.customDtOptions.eventCallbacks.countedByManufacturer();
            this.getData(true);
        }, (err) => {
            console.log("Error Cuunting Records", err.message);
            this.toastr.error(err.message, 'Error Cuunting Records');
            document.getElementById("p1").textContent = 'Products not counted';
            this.currentRecord = null;
            this.currentOperation = "";
            this.showLoader = false;
        });
    }
    getUniqueManufactureCost() {
        this.showLoader = true;
        this.dataTableService.getUniqueManufactureCosts(this.customDtOptions.getUniqueManufactureCosts).subscribe((res) => {
            console.log(res);
            this.data = res;
            this.data = parseXml(this.data);
            //this.data = this.data['Count']['count'];
            this.currentRecord = null;
            this.currentOperation = "";
            this.toastr.success('Records Received Successfully', 'Success');
            //document.getElementById("p1").textContent = 'Products counted: '+ this.data;
            this.customDtOptions.eventCallbacks.countedByManufacturer();
            this.data = this.data['ArrayList']['item'];
            console.log(this.data);
            this.dtOptions.data = this.data;
            this.rerender();
        }, (err) => {
            console.log("Error Deleting Record", err.message);
            this.toastr.error(err.message, 'Error Deleting Record');
            this.currentRecord = null;
            this.currentOperation = "";
            this.showLoader = false;
        });
    }
    rerender() {
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.destroy();
            this.dtTrigger.next();
            this.showLoader = false;
        }); /*
        this.dtTrigger.next();
        this.showLoader = false;*/
        console.log('Rerendered');
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
}
DataTableComponent.ɵfac = function DataTableComponent_Factory(t) { return new (t || DataTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dataTable_service__WEBPACK_IMPORTED_MODULE_0__["DataTableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
DataTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTableComponent, selectors: [["data-table"]], viewQuery: function DataTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addEditModalRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, inputs: { customDtOptions: "customDtOptions" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_dataTable_service__WEBPACK_IMPORTED_MODULE_0__["DataTableService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]])], decls: 60, vars: 3, consts: [[1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-hover", 3, "dtOptions", "dtTrigger"], [1, "thead"], ["type", "text", "placeholder", "Search ID", "name", "search-id"], ["type", "text", "placeholder", "Search name", "name", "search-name"], ["type", "text", "placeholder", "Search coordinates_x", "name", "search-coord-x"], ["type", "text", "placeholder", "Search coordinates_y", "name", "search-coord-y"], ["type", "text", "placeholder", "Search creationDate", "name", "search-creation-date"], ["type", "text", "placeholder", "Search price", "name", "search-price"], ["type", "text", "placeholder", "Search manufactureCost", "name", "search-manufactureCost"], ["type", "text", "placeholder", "Search unitOfMeasure", "name", "search-unitOfMeasure"], ["type", "text", "placeholder", "Search m_id", "name", "search-manu-id"], ["type", "text", "placeholder", "Search m_name", "name", "search-manu-name"], ["type", "text", "placeholder", "Search m_fullName", "name", "search-manu-fullName"], ["type", "text", "placeholder", "Search m_employeesCount", "name", "search-manu_employeesCount"], ["type", "text", "placeholder", "Search m_type", "name", "search-manu_type"], ["type", "hidden", "placeholder", "Search act", "name", "search-act"], [1, "subDiv"], [1, "measureArea"], ["id", "delByMeasureBtn", "tabindex", "2", 1, "btn", "btn-primary", "px-2", "py-1", "mr-3"], [1, "inputDiv"], ["MeasureUnit", "", "id", "measureField", 1, "select"], [1, "countArea"], ["id", "countByManufacturerIdBtn", "tabindex", "2", 1, "btn", "btn-primary", "px-2", "py-1", "mr-3"], ["type", "text", "id", "manufacturerIdField", "placeholder", "Manufacture id", "tabindex", "1"], ["id", "count", 1, "paragraph"], ["id", "p1"], [1, "uniqueArea"], ["id", "getUniqueManufactureCostBtn", "tabindex", "2", 1, "btn", "btn-primary", "px-2", "py-1", "mr-3"], ["addEditModal", ""], [3, "show"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngSubmit"], ["f", "ngForm"], ["class", "form-group row", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "ml-2", 3, "disabled"], [1, "form-group", "row"], [1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "required", "", 1, "form-control", 3, "ngModel", "name"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Delete By Measure:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "PCS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "GRAMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "CENTIMETERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "MILLILITERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Count By Manufacture:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Get Unique manufactureCost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, DataTableComponent_ng_template_57_Template, 15, 3, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "ngx-loading", 30);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("show", ctx.showLoader);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], ngx_loading__WEBPACK_IMPORTED_MODULE_9__["NgxLoadingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {\n  border-left: 5px solid #42A948;\n  \n}\n\n.ng-touched.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid #a94442;\n  \n}\n\n.measureArea[_ngcontent-%COMP%] {\n  width: 350px;\n  padding-block: 20px;\n}\n\n.countArea[_ngcontent-%COMP%] {\n  width: 500px;\n  padding-block: 20px;\n}\n\n.uniqueArea[_ngcontent-%COMP%] {\n  width: 350px;\n  padding-block: 40px;\n}\n\n.measureArea[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .measureArea[_ngcontent-%COMP%]   .inputDiv[_ngcontent-%COMP%], .measureArea[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  float: left;\n  height: 32px;\n  box-sizing: border-box;\n  margin: 0;\n  display: inline;\n}\n\n.measureArea[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 32px;\n  margin-left: 26.5px;\n  float: right;\n}\n\n.countArea[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .countArea[_ngcontent-%COMP%]   .inputDiv[_ngcontent-%COMP%] {\n  float: left;\n  height: 32px;\n  box-sizing: border-box;\n  margin: 0;\n  display: inline;\n}\n\n.countArea[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: auto;\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YXRhYmxlL0Q6XFxFZHUgUHJvamVjdHNcXEFuZ3VsYXItRGF0YXRhYmxlL3NyY1xcYXBwXFxkYXRhdGFibGVcXGRhdGF0YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGF0YXRhYmxlL2RhdGF0YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSw4QkFBQTtFQUVBLFVBQUE7QUNBRjs7QURHQTtFQUNFLDhCQUFBO0VBQ0EsUUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FERUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFHQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFHQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9kYXRhdGFibGUvZGF0YXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXZhbGlkW3JlcXVpcmVkXSxcbi5uZy12YWxpZC5yZXF1aXJlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODtcbiAgLy93aWR0aDogMjAwJTtcbiAgLyogZ3JlZW4gKi9cbn1cblxuLm5nLXRvdWNoZWQubmctaW52YWxpZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7XG4gIC8qIHJlZCAqL1xufVxuXG4ubWVhc3VyZUFyZWF7XG4gIHdpZHRoOiAzNTBweDtcbiAgcGFkZGluZy1ibG9jazogMjBweDtcbn1cbi5jb3VudEFyZWF7XG4gIHdpZHRoOiA1MDBweDtcbiAgcGFkZGluZy1ibG9jazogMjBweDtcbn1cbi51bmlxdWVBcmVhe1xuICB3aWR0aDogMzUwcHg7XG4gIHBhZGRpbmctYmxvY2s6IDQwcHg7XG59XG5cbi5tZWFzdXJlQXJlYSBidXR0b24sIC5tZWFzdXJlQXJlYSAuaW5wdXREaXYsIC5tZWFzdXJlQXJlYSBpbnB1dCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDMycHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46MDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLm1lYXN1cmVBcmVhIHNlbGVjdCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgLy9wYWRkaW5nOiAwIDNweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tbGVmdDogMjYuNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jb3VudEFyZWEgYnV0dG9uLCAuY291bnRBcmVhIC5pbnB1dERpdntcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMzJweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjowO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4uY291bnRBcmVhIGlucHV0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgd2lkdGg6IDE1MHB4O1xufVxuIiwiLm5nLXZhbGlkW3JlcXVpcmVkXSxcbi5uZy12YWxpZC5yZXF1aXJlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODtcbiAgLyogZ3JlZW4gKi9cbn1cblxuLm5nLXRvdWNoZWQubmctaW52YWxpZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7XG4gIC8qIHJlZCAqL1xufVxuXG4ubWVhc3VyZUFyZWEge1xuICB3aWR0aDogMzUwcHg7XG4gIHBhZGRpbmctYmxvY2s6IDIwcHg7XG59XG5cbi5jb3VudEFyZWEge1xuICB3aWR0aDogNTAwcHg7XG4gIHBhZGRpbmctYmxvY2s6IDIwcHg7XG59XG5cbi51bmlxdWVBcmVhIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBwYWRkaW5nLWJsb2NrOiA0MHB4O1xufVxuXG4ubWVhc3VyZUFyZWEgYnV0dG9uLCAubWVhc3VyZUFyZWEgLmlucHV0RGl2LCAubWVhc3VyZUFyZWEgaW5wdXQge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAzMnB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5tZWFzdXJlQXJlYSBzZWxlY3Qge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLWxlZnQ6IDI2LjVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY291bnRBcmVhIGJ1dHRvbiwgLmNvdW50QXJlYSAuaW5wdXREaXYge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAzMnB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5jb3VudEFyZWEgaW5wdXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB3aWR0aDogMTUwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'data-table',
                styleUrls: ['./datatable.component.scss'],
                templateUrl: './datatable.component.html',
                providers: [_dataTable_service__WEBPACK_IMPORTED_MODULE_0__["DataTableService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]]
            }]
    }], function () { return [{ type: _dataTable_service__WEBPACK_IMPORTED_MODULE_0__["DataTableService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }]; }, { customDtOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], addEditModalRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['addEditModal']
        }], dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datatable/datatable.component */ "./src/app/datatable/datatable.component.ts");



class ProductsComponent {
    constructor() { }
    ngOnInit() {
        this.customDtOptions = {
            baseApiUrl: "http://localhost:8080",
            get: "products",
            edit: "products/:id",
            add: "products",
            delete: "products/:id",
            deleteByMeasure: "products/measure",
            getByManufacturer: "products/measure",
            getUniqueManufactureCosts: "products/distinct",
            param: "id",
            generateParamOnAdd: true,
            dataTableOptions: {
                columns: [
                    { title: "id", data: "id" },
                    { title: "Name", data: "name", format: "text" },
                    { title: "coord_x", data: "coordinates.0.x" },
                    { title: "coord_y", data: "coordinates.0.y" },
                    { title: "creationDate", data: "creationDate" },
                    { title: "price", data: "price", format: "text" },
                    { title: "manufactureCost", data: "manufactureCost" },
                    { title: "unitOfMeasure", data: "unitOfMeasure", format: "text" },
                    { title: "m_id", data: "manufacturer.0.id" },
                    { title: "m_name", data: "manufacturer.0.name" },
                    { title: "m_fullName", data: "manufacturer.0.fullName" },
                    { title: "m_employeesCount", data: "manufacturer.0.employeesCount" },
                    { title: "m_type", data: "manufacturer.0.type" }
                ]
            },
            eventCallbacks: {
                edited: function () {
                    console.log("Product Edited");
                },
                added: function () {
                    console.log("Product Added");
                },
                deleted: function () {
                    console.log('Products Deleted');
                },
                countedByManufacturer: function () {
                    console.log('Products counted by manufacturer');
                },
            }
        };
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 6, vars: 1, consts: [[1, "container", "container-fluid", "employees"], [1, "text-center"], [1, "data-table-div"], [3, "customDtOptions"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Products Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "data-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customDtOptions", ctx.customDtOptions);
    } }, directives: [_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_1__["DataTableComponent"]], styles: [".products[_ngcontent-%COMP%] {\n  height: calc(100vh);\n  width: 200%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvRDpcXEVkdSBQcm9qZWN0c1xcQW5ndWxhci1EYXRhdGFibGUvc3JjXFxhcHBcXHByb2R1Y3RzXFxwcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3Rze1xuICAgIGhlaWdodDogY2FsYygxMDB2aCk7XG4gICAgd2lkdGg6IDIwMCU7XG59XG4iLCIucHJvZHVjdHMge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xuICB3aWR0aDogMjAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/in-memory.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/in-memory.service.ts ***!
  \***********************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InMemoryDataService {
    constructor() { }
    createDb() {
        let products = [{ "id": "1", "employee_name": "Tiger Nixon", "employee_salary": "320800", "employee_age": "61", "profile_image": "" }, { "id": "2", "employee_name": "Garrett Winters", "employee_salary": "170750", "employee_age": "63", "profile_image": "" }, { "id": "3", "employee_name": "Ashton Cox", "employee_salary": "86000", "employee_age": "66", "profile_image": "" }, { "id": "4", "employee_name": "Cedric Kelly", "employee_salary": "433060", "employee_age": "22", "profile_image": "" }, { "id": "5", "employee_name": "Airi Satou", "employee_salary": "162700", "employee_age": "33", "profile_image": "" }, { "id": "6", "employee_name": "Brielle Williamson", "employee_salary": "372000", "employee_age": "61", "profile_image": "" }, { "id": "7", "employee_name": "Herrod Chandler", "employee_salary": "137500", "employee_age": "59", "profile_image": "" }, { "id": "8", "employee_name": "Rhona Davidson", "employee_salary": "327900", "employee_age": "55", "profile_image": "" }, { "id": "9", "employee_name": "Colleen Hurst", "employee_salary": "205500", "employee_age": "39", "profile_image": "" }, { "id": "10", "employee_name": "Sonya Frost", "employee_salary": "103600", "employee_age": "23", "profile_image": "" }, { "id": "11", "employee_name": "Jena Gaines", "employee_salary": "90560", "employee_age": "30", "profile_image": "" }, { "id": "12", "employee_name": "Quinn Flynn", "employee_salary": "342000", "employee_age": "22", "profile_image": "" }, { "id": "13", "employee_name": "Charde Marshall", "employee_salary": "470600", "employee_age": "36", "profile_image": "" }, { "id": "14", "employee_name": "Haley Kennedy", "employee_salary": "313500", "employee_age": "43", "profile_image": "" }, { "id": "15", "employee_name": "Tatyana Fitzpatrick", "employee_salary": "385750", "employee_age": "19", "profile_image": "" }, { "id": "16", "employee_name": "Michael Silva", "employee_salary": "198500", "employee_age": "66", "profile_image": "" }, { "id": "17", "employee_name": "Paul Byrd", "employee_salary": "725000", "employee_age": "64", "profile_image": "" }, { "id": "18", "employee_name": "Gloria Little", "employee_salary": "237500", "employee_age": "59", "profile_image": "" }, { "id": "19", "employee_name": "Bradley Greer", "employee_salary": "132000", "employee_age": "41", "profile_image": "" }, { "id": "20", "employee_name": "Dai Rios", "employee_salary": "217500", "employee_age": "35", "profile_image": "" }, { "id": "21", "employee_name": "Jenette Caldwell", "employee_salary": "345000", "employee_age": "30", "profile_image": "" }, { "id": "22", "employee_name": "Yuri Berry", "employee_salary": "675000", "employee_age": "40", "profile_image": "" }, { "id": "23", "employee_name": "Caesar Vance", "employee_salary": "106450", "employee_age": "21", "profile_image": "" }, { "id": "24", "employee_name": "Doris Wilder", "employee_salary": "85600", "employee_age": "23", "profile_image": "" }];
        return { products };
    }
}
InMemoryDataService.ɵfac = function InMemoryDataService_Factory(t) { return new (t || InMemoryDataService)(); };
InMemoryDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InMemoryDataService, factory: InMemoryDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    inMemoryDatabase: false
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    inMemoryDatabase: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Edu Projects\Angular-Datatable\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map