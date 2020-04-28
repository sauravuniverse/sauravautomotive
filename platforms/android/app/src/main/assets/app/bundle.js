require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./login/login.component.ts");
/* harmony import */ var _vehicledetails_vehicledetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./vehicledetails/vehicledetails.component.ts");
/* harmony import */ var _updatepassword_updatepassword_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./updatepassword/updatepassword.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./map/map.component.ts");







var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "vehicledetails", component: _vehicledetails_vehicledetails_component__WEBPACK_IMPORTED_MODULE_4__["VehicledetailsComponent"] },
    { path: "updatepassword", component: _updatepassword_updatepassword_component__WEBPACK_IMPORTED_MODULE_5__["UpdatepasswordComponent"] },
    { path: "map", component: _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\nRadSideDrawer is a UI component part of the Progress NativeScript UI set of components.\nLearn more about the RadSideDrawer UI component and how it can be customized in this documentation article:\nhttp://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/SideDrawer/getting-started\n-->\n<RadSideDrawer [drawerTransition]=\"sideDrawerTransition\">\n\t<GridLayout tkDrawerContent rows=\"auto, *\" class=\"sidedrawer sidedrawer-left\">\n\t\t<StackLayout row=\"0\" class=\"sidedrawer-header\">\n\n\t\t\t<Image src=\"~/assets/face4.jpg\" borderRadius=\"100%\" height=\"60\" width=\"60\" marginright=\"20\"\n\t\t\t\tstretch=\"aspectFill\"></Image>\n\t\t\t<Label class=\"sidedrawer-header-brand\" text=\"Saurav Anand\"></Label>\n\t\t\t<Label class=\"footnote\" text=\"sauravkumar2819@mail.com\"></Label>\n\t\t</StackLayout>\n\n\t\t<ScrollView row=\"1\">\n\t\t\t<StackLayout class=\"sidedrawer-content\">\n\t\t\t\t<GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n\t\t\t\t\t<Label col=\"0\" text=\"&#xf1b9;\" class=\"fa \"></Label>\n\t\t\t\t\t<Label col=\"1\" text=\"VehicleDetails\" (tap)=\"clickvehicledetails()\"  [nsRouterLink]=\"['vehicledetails']\" class=\"p-r-10\"></Label>\n\t\t\t\t</GridLayout>\n\n\t\t\t\t<GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n\t\t\t\t\t<Label col=\"0\" text=\"&#xf041;\" class=\"fa\"></Label>\n\t\t\t\t\t<Label col=\"1\" text=\"Map\" (tap)=\"onMapReady()\" [nsRouterLink]=\"['map']\"class=\"p-r-10\"></Label>\n\t\t\t\t</GridLayout>\n\t\t\t\t\n\t\t\t\t<GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n\t\t\t\t\t<Label col=\"0\" text=\"&#xf023;\" class=\"fa\"></Label>\n\t\t\t\t\t<Label col=\"1\" text=\"UpdatePassword\"  (tap)=\"onupdatepassword()\" [nsRouterLink]=\"['updatepassword']\"  class=\"p-r-10\"></Label>\n\t\t\t\t</GridLayout>\n\n\t\t\t\t<GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n\t\t\t\t\t<Label col=\"0\" text=\"&#xf08b;\" class=\"fa\"></Label>\n\t\t\t\t\t<Label col=\"1\" text=\"Logout\" (tap)=\"onlogout()\" [clearHistory]=\"true\" [nsRouterLink]=\"['login']\" class=\"p-r-10\"></Label>\n\t\t\t\t</GridLayout>\n\n\n\n\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\n\n\n\t\t\t</StackLayout>\n\t\t</ScrollView>\n\t</GridLayout>\n\n\t<page-router-outlet tkMainContent class=\"page page-content\"></page-router-outlet>\n</RadSideDrawer>"

/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/ui-sidedrawer.js");
/* harmony import */ var nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_3__);




var AppComponent = /** @class */ (function () {
    function AppComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_3__["SlideInOnTopTransition"]();
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.clickvehicledetails = function () {
        var sideDrawer = application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.closeDrawer();
    };
    AppComponent.prototype.onlogout = function () {
        var sideDrawer = application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.closeDrawer();
    };
    AppComponent.prototype.onupdatepassword = function () {
        var sideDrawer = application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.closeDrawer();
    };
    AppComponent.prototype.onMapReady = function () {
        var sideDrawer = application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.closeDrawer();
    };
    AppComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __importDefault(__webpack_require__("./app.component.html")).default
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"},{"type":"rule","selectors":[".fa"],"declarations":[{"type":"declaration","property":"font-family","value":"\"FontAwesome\""}]},{"type":"rule","selectors":[".android-lbl"],"declarations":[{"type":"declaration","property":"color","value":"black"}]},{"type":"rule","selectors":[".page-content .page-placeholder"],"declarations":[{"type":"declaration","property":"color","value":"#D7D7D7"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"horizontal-align","value":"center"}]},{"type":"rule","selectors":[".page-content .page-icon"],"declarations":[{"type":"declaration","property":"font-size","value":"72"},{"type":"declaration","property":"vertical-align","value":"top"},{"type":"declaration","property":"horizontal-align","value":"center"},{"type":"declaration","property":"color","value":"#D7D7D7"},{"type":"declaration","property":"margin-top","value":"20%"}]},{"type":"rule","selectors":[".sidedrawer"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"-100"}]},{"type":"rule","selectors":[".sidedrawer-list-item-icon",".sidedrawer-list-item"],"declarations":[{"type":"declaration","property":"color","value":"#022734"}]},{"type":"rule","selectors":[".sidedrawer.sidedrawer-left"],"declarations":[{"type":"declaration","property":"background-color","value":"#1FAFD9"}]},{"type":"rule","selectors":[".sidedrawer.sidedrawer-left .sidedrawer-header-image"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"height","value":"60"},{"type":"declaration","property":"width","value":"60"},{"type":"declaration","property":"font-size","value":"60"},{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"margin-bottom","value":"5"},{"type":"declaration","property":"margin-top","value":"20"}]},{"type":"rule","selectors":[".sidedrawer.sidedrawer-left .footnote"],"declarations":[{"type":"declaration","property":"color","value":"rgba(255,255,255,0.5)"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-header"],"declarations":[{"type":"declaration","property":"background-color","value":"#1FAFD9"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-header .sidedrawer-header-brand"],"declarations":[{"type":"declaration","property":"color","value":"#fff"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content .sidedrawer-list-item"],"declarations":[{"type":"declaration","property":"padding-left","value":"15"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content .sidedrawer-list-item Label"],"declarations":[{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"color","value":"#022734"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content .sidedrawer-list-item .fa"],"declarations":[{"type":"declaration","property":"width","value":"20"},{"type":"declaration","property":"margin-right","value":"10"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content .sidedrawer-list-item.selected"],"declarations":[{"type":"declaration","property":"background-color","value":"#F8F8F8"}]},{"type":"rule","selectors":[".sidedrawer .sidedrawer-content .sidedrawer-list-item.selected Label"],"declarations":[{"type":"declaration","property":"color","value":"#1FAFD9"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app.component.ts");
/* harmony import */ var _home_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./home/home-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./login/login.component.ts");
/* harmony import */ var _vehicledetails_vehicledetails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./vehicledetails/vehicledetails.component.ts");
/* harmony import */ var _updatepassword_updatepassword_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./updatepassword/updatepassword.component.ts");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/@nativescript/angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./map/map.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
                _home_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NativeScriptFormsModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_11__["NativeScriptCommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _vehicledetails_vehicledetails_component__WEBPACK_IMPORTED_MODULE_8__["VehicledetailsComponent"],
                _updatepassword_updatepassword_component__WEBPACK_IMPORTED_MODULE_9__["UpdatepasswordComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_12__["MapComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".body\r\n{\r\n    font-size: 30;\r\n    font-weight: bold;\r\n    \r\n}\r\n.id\r\n{\r\n    font-size: 20;\r\n    font-weight: bold;\r\n\r\n}\r\n.owner\r\n{\r\n    font-size: 20;\r\n    font-weight: bold;\r\n}\r\n.model\r\n{\r\n   \r\n    font-size: 20;\r\n    font-weight: bold; \r\n\r\n   \r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Title\" class=\"action-bar\" style=\"background-color:#1FAFD9 ;\">\n\t<NavigationButton icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n</ActionBar>\n\n<StackLayout>\n\t<Stackayout >\n\t\t<Image  src=\"~/assets/profile.png\" borderRadius=\"100%\" height=\"70\" width=\"70\" marginTop=\"130\"\n\t\t\t stretch=\"aspectFill\"></Image>\n\t</Stackayout>\n</StackLayout>\n\n<StackLayout>\n\t<Stackayout class=\"body\">\n\t\t<Label class=\"text-center\" color=\"black\" marginTop=\"200\" text=\"Vehicle Details\">\n\t\t</Label>\n\t</Stackayout>\n</StackLayout>\n\n<StackLayout>\n\t<Stackayout class=\"id\">\n\t\t<Label class=\"text-center\" color=\"#818485\" marginTop=\"300\" text=\"Vehicle Id:{A1DDZ21F}\">\n\t\t</Label>\n\t</Stackayout>\n</StackLayout>\n\n<StackLayout>\n\t<Stackayout class=\"model\">\n\t\t<Label class=\"text-center\" color=\"#818485\" marginTop=\"340\" text=\"Vehicle Model:{A1DDZ21F}\">\n\t\t</Label>\n\t</Stackayout>\n</StackLayout>\n\n<StackLayout>\n\t<Stackayout class=\"owner\">\n\t\t<Label class=\"text-center\" color=\"#818485\" marginTop=\"380\" text=\"Owner Name:{Saurav}\">\n\t\t</Label>\n\t</Stackayout>\n</StackLayout>"

/***/ }),

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(application__WEBPACK_IMPORTED_MODULE_1__);


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./login/login.component.css":
/***/ (function(module, exports) {

module.exports = "ActionBar {\r\n    background-color:  white;\r\n    color: #ff6767;\r\n}\r\n.action-label {\r\n  font-size: 16;\r\n}\r\n.vod-logo {\r\n  margin-top: 30;\r\n}\r\n.reg-log-container {\r\n  margin-top: 40;\r\n  padding: 20;\r\n}\r\n.reg-active {\r\n  font-size: 20;\r\n  color:lightgray;\r\n  border-bottom-color: rgba(255, 0, 34, 0.644);\r\n  border-bottom-width: 2;\r\n  padding-bottom: 10;\r\n  animation-name: toggle;\r\n  animation-duration: 0.3s;\r\n\tanimation-fill-mode: forwards;\r\n}\r\nreg-active-input {\r\n  animation-name: reg_input;\r\n  animation-duration: 1s;\r\n\tanimation-fill-mode: forwards;\r\n}\r\n.reg-deactive{\r\n  color:lightgray;\r\n  font-size: 11;\r\n  padding-top: 12;\r\n  animation-name: toggle;\r\n  animation-duration: 0.3s;\r\n\tanimation-fill-mode: forwards;\r\n  animation-timing-function: cubic-bezier(0.1, 0.1, 1.0, 1.0);\r\n  \r\n}\r\n@keyframes toggle {\r\n\tfrom { opacity: 0;}\r\n  50% { opacity: 0.5; }\r\n\tto { opacity: 1; }\r\n}\r\n@keyframes reg_input {\r\n\tfrom { background-color: white; }\r\n\t50% { background-color: white; }\r\n\tto { background-color: white; }\r\n}\r\n/* .main {\r\n  transform: scale(0.3, 0.3);\r\n  animation-name: main;\r\n  animation-duration: 0.3s;\r\n\tanimation-fill-mode: forwards;\r\n  animation-timing-function: cubic-bezier(0.1, 0.1, 1.0, 1.0);\r\n}\r\n@keyframes main {\r\n\tfrom { transform: scale(0.3, 0.3); }\r\n\t50% { transform: scale(0.7, 0.7); }\r\n\tto { transform: scale(1, 1); }\r\n} */\r\n.reg-separator{\r\n  color:lightgray;\r\n  font-size: 13;\r\n  padding-top: 12;\r\n  padding-left: 20;\r\n  padding-right: 20;\r\n  animation-name: toggle;\r\n  animation-duration: 2s;\r\n\tanimation-fill-mode: forwards;\r\n}\r\n.form-input {\r\n  margin-left: 20;\r\n  margin-right: 20;\r\n  margin-top: 10;\r\n  padding: 10;\r\n  placeholder-color:rgba(207, 207, 207, 0.6);\r\n  background-color: rgba(241, 241, 241, 0.6);\r\n  font-size: 14;\r\n}\r\n.form-container {\r\n  margin-top: 15;\r\n}\r\n.form-container-submitted {\r\n  animation-name: login_submitted;\r\n  animation-duration: 2s;\r\n\tanimation-fill-mode: forwards;\r\n  animation-iteration-count: infinite;\r\n}\r\n@keyframes login_submitted {\r\n\tfrom { opacity: 1 }\r\n  50% { opacity: 0.1 }\r\n\tto { opacity: 1 }\r\n}\r\n.form-button {\r\n  margin: 20;\r\n  margin-top: 25;\r\n  border-radius: 200;\r\n  background: #C0392B;\r\n  color: white;\r\n}\r\n.form-label {\r\n  color:#ccc;\r\n  margin-top: -5; \r\n}\r\n.login-done {\r\n  width: 10;\r\n  height: 10;\r\n  border-radius: 1000;\r\n  background-color: #f84e4e;\r\n  padding: 10;\r\n  z-index: 1000000;\r\n  margin: -50;\r\n}\r\n.forget\r\n{\r\n  text-align: center;\r\n  color: #C0392B;\r\n  font-size: 15;\r\n  margin-top: auto;\r\n}\r\n.input-field{    \r\n  border-width: 1;\r\n  border-style: 'solid';\r\n  border-color: #C0392B;\r\n  border-radius: 10px;    \r\n  padding:10;\r\n  margin-top:20;\r\n  margin-left: 20;\r\n  margin-right: 20;    \r\n}"

/***/ }),

/***/ "./login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Home\" class=\"action-bar\">\r\n\t<StackLayout orientation=\"horizontal\" ios:horizontalAlignment=\"center\" android:horizontalAlignment=\"center\">\r\n\t\t<Label text=\"Minimalism\" class=\"action-label\"></Label>\r\n\t  </StackLayout>\r\n</ActionBar>\r\n\r\n\r\n<StackLayout orientation=\"vertical\" class=\"main\">\r\n\r\n\t<Image #logo width=\"140\" class=\"vod-logo\" src=\"~/login/applelogo.png\"></Image>\r\n\t<StackLayout #circle width=\"100\" height=\"100\" class=\"login-done\" orientation=\"horizontal\"></StackLayout>\r\n\r\n\t<StackLayout [visibility]=\"navigating ? 'collapsed' : 'visible'\" orientation=\"horizontal\" class=\"reg-log-container\">\r\n\t\t<Label text=\"L O G I N\" (tap)=\"setToLogin()\" [ngClass]=\"[isLogin ? 'reg-active' : 'reg-deactive']\"></Label>\r\n      \r\n    </StackLayout>\r\n\r\n   \r\n    <StackLayout [visibility]=\"navigating ? 'collapsed' : 'visible'\" orientation=\"vertical\" class=\"form-container\" [ngClass]=\"[formSubmitted ? 'form-container-submitted' : 'form-container']\">\r\n        <TextField  [(ngModel)]=\"myPostService.device_id\" hint=\"VehicleId\"  class=\"input-field\" textAlignment=\"center\" ></TextField>\r\n\t\t<TextField [(ngModel)]=\"myPostService.Password\" hint=\"Password\" class= \"input-field\" secure=\"true\" textAlignment=\"center\" ></TextField>\r\n\t\t<TextField #item [(ngModel)]=\"confirmPassword\" [visibility]=\"!isLogin ? 'visible' : 'hidden'\" hint=\"Confirm Password\" class=\"form-input\" textAlignment=\"center\"></TextField>\r\n        <Button (touch)=\"onFocus($event)\" #btn text=\"{{loginTxt}}\" (tap)=\"getdata()\"  class=\"form-button\"></Button>\r\n        <label text=\"ForgotPassword\" (tap)=\"onForgetPassword()\" style=\"color: #C0392B;\" class=\"forget\"></label>\r\n    </StackLayout>\r\n   \r\n</StackLayout>"

/***/ }),

/***/ "./login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ui_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./login/login.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_page, routerExtensions, myPostService, http) {
        this._page = _page;
        this.routerExtensions = routerExtensions;
        this.myPostService = myPostService;
        this.textFieldValue = "";
        this.isLogin = true;
        this.formSubmitted = false;
        this.navigating = false;
        this.loginTxt = "L o g i n";
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._page.on('navigatingTo', function (data) {
            _this.circleItem.scaleX = 0;
            _this.circleItem.scaleY = 0;
            _this.navigating = false;
            _this.logoItem.translateY = 0;
        });
        this._page.actionBarHidden = true;
        this.btnItem = this.btnRef.nativeElement;
        this.item = this.angularItem.nativeElement;
        this.circleItem = this.circleRef.nativeElement;
        this.logoItem = this.logoRef.nativeElement;
        this.item.scaleX = 0;
        this.item.scaleY = 0;
        this.circleItem.scaleX = 0;
        this.circleItem.scaleY = 0;
        this.btnItem.translateY = -50;
    };
    LoginComponent.prototype.getdata = function () {
        this.myPostService.getdata();
    };
    LoginComponent.prototype.onButtonTap = function () {
        var _this = this;
        this.formSubmitted = true;
        setTimeout(function () {
            _this.navigating = true;
            _this.logoItem.animate({
                translate: { x: 0, y: 200 },
                duration: 400
            }).then(function () {
                _this.circleItem.translateY = 200;
                _this.circleItem.animate({
                    scale: { x: 15, y: 15 },
                    duration: 400,
                });
            });
        }, 2500);
    };
    LoginComponent.prototype.onFocus = function (args) {
        if (args.action == "down") {
            this.btnItem.scaleX = 0.9;
            this.btnItem.scaleY = 0.9;
        }
        else if (args.action == "up") {
            this.btnItem.scaleX = 1;
            this.btnItem.scaleY = 1;
        }
    };
    LoginComponent.prototype.setToLogin = function () {
        var _this = this;
        this.item.animate({
            scale: { x: 0, y: 0 },
            duration: 300
        }).then(function () {
            _this.isLogin = true;
            _this.loginTxt = "L o g i n";
            _this.btnItem.animate({
                translate: { x: 0, y: -50 },
                duration: 200
            });
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _login_service__WEBPACK_IMPORTED_MODULE_4__["HttpPostService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("item", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "angularItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("btn", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "btnRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("circle", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "circleRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("logo", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "logoRef", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__("./login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__("./login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], _login_service__WEBPACK_IMPORTED_MODULE_4__["HttpPostService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpPostService", function() { return HttpPostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");



var HttpPostService = /** @class */ (function () {
    function HttpPostService(http, router) {
        this.http = http;
        this.router = router;
    }
    HttpPostService.prototype.getdata = function () {
        var _this = this;
        try {
            var body = { device_id: this.device_id, password: this.password };
            this.http.put("http://selfdrivecar-945382308.ap-south-1.elb.amazonaws.com/login", body).subscribe(function (res) {
                _this.login_response = JSON.parse(JSON.stringify(res));
                alert(_this.login_response);
            }, function (error) { return alert(error); });
        }
        catch (error) {
            alert(error.toString());
        }
    };
    HttpPostService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    HttpPostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HttpPostService);
    return HttpPostService;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        


var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./map/map.component.css":
/***/ (function(module, exports) {

module.exports = ".btn.btn-primary\r\n{\r\n    width: 100;\r\n}"

/***/ }),

/***/ "./map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"maps\" class=\"action-bar\" style=\"background-color:#1FAFD9 ;\"></ActionBar>\n\n\n<GridLayout rows=\"auto,*\" class=\"page\">\n  <StackLayout row=\"0\" orientation=\"horizontal\">\n    <button text=\"Add marker\" class=\"btn btn-primary\" (tap)=\"addmarker()\"></button>\n    <button text=\"Animate\" class=\"btn btn-primary\" (tap)=\"animateCamera()\"></button>\n\n  </StackLayout>\n  <ContentView row=\"1\" height=\"100%\" width=\"100%\">\n  \n     <Mapbox accessToken=\"pk.eyJ1Ijoid3VoYW4xMiIsImEiOiJjazljYnk2MWgwM2JwM2VvOG45em1sMjBpIn0.e2I7fau5o6cu6oT_yXnSjA\"\n      mapStyle=\"traffic_day\" latitude=\"26.5887 \" longitude=\"85.5013\" hideCompass=\"true\" zoomLevel=\"10\"\n      showUserLocation=\"true\" (mapReady)=\"onMapReady($event)\">\n    </Mapbox>\n  </ContentView>\n</GridLayout>"

/***/ }),

/***/ "./map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/element-registry.js");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_directions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-directions/directions.js");
/* harmony import */ var nativescript_directions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_directions__WEBPACK_IMPORTED_MODULE_2__);



Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_1__["registerElement"])("Mapbox", function () { return __webpack_require__("../node_modules/nativescript-mapbox/mapbox.js").MapboxView; });
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.directions = new nativescript_directions__WEBPACK_IMPORTED_MODULE_2__["Directions"];
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent.prototype.onMapReady = function (args) {
        this.mapBox = args.map;
    };
    MapComponent.prototype.addmarker = function () {
        var _this = this;
        var firstMarker = {
            id: 1,
            lat: 26.1542,
            lng: 85.8918,
            title: 'Darbhanga',
            subtitle: 'Find Darbhanga here!',
            onTap: function (marker) { return console.log("Marker tapped with title: '" + marker.title + "'"); },
            onCalloutTap: function (marker) {
                _this.directions.navigate({
                    from: {
                        lat: 26.1542,
                        lng: 85.8918
                    },
                    to: {
                        address: "patna"
                    }
                }).then(function () {
                    console.log("Maps app launched.");
                }, function (error) {
                    console.log(error);
                });
            }
        };
        this.mapBox.addMarkers([
            firstMarker
        ]);
    };
    MapComponent.prototype.animateCamera = function () {
        this.mapBox.animateCamera({
            // this is where we animate to
            target: {
                lat: 24.7914,
                lng: 85.0002
            },
            duration: 1500
            // zoomLevel: 17, // Android
            // altitude: 2000, // iOS (meters from the ground)
            // bearing: 270, // Where the camera is pointing, 0-360 (degrees)
            // tilt: 50,
            // duration: 5000 // default 10000 (milliseconds)
        });
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __importDefault(__webpack_require__("./map/map.component.html")).default,
            styles: [__importDefault(__webpack_require__("./map/map.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true,"markingMode":"none"},"main":"main.js","name":"tns-template-blank-ng","version":"3.1.1"};

/***/ }),

/***/ "./updatepassword/updatepassword.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"UpadtePassword\" class=\"action-bar\" style=\"background-color:#1FAFD9 ;\">\n</ActionBar>\n<GridLayout backgroundColor= \"#CCCCCC\"  class=\"body scf-card animate-bounceInLeft-delay-0ms\">\n  <ScrollView>\n      <StackLayout margin=\"10\" verticalAlignment=\"center\">\n          <StackLayout class=\"form\" padding=\"15\" backgroundColor=\"#FFFFFF\">\n              \n              <StackLayout class=\"input-field\">\n                  <Label text=\"NewPassword\" class=\"label font-weight-bold m-b-5\"></Label>\n                  <TextField class=\"input\" [(ngModel)]=\"password\" secure=\"true\"></TextField>\n                  <StackLayout class=\"hr-light\"></StackLayout>\n              </StackLayout>\n              <StackLayout class=\"input-field\">\n                  <Label text=\"ReEnterPassword\" class=\"label font-weight-bold m-b-5\"></Label>\n                  <TextField  class=\"input\" [(ngModel)]=\"Repassword\" secure=\"true\"></TextField>\n                  <StackLayout class=\"hr-light\"></StackLayout>\n\n              </StackLayout>\n              <Button class=\"btn btn-primary w-full\"  text=\"Submit\"  (tap)=\"validate()\"></Button>\n          </StackLayout>\n      </StackLayout>\n  </ScrollView>\n</GridLayout>  "

/***/ }),

/***/ "./updatepassword/updatepassword.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./updatepassword/updatepassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatepasswordComponent", function() { return UpdatepasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__);


var UpdatepasswordComponent = /** @class */ (function () {
    function UpdatepasswordComponent() {
    }
    UpdatepasswordComponent.prototype.ngOnInit = function () {
    };
    UpdatepasswordComponent.prototype.validate = function () {
        if (this.password != this.Repassword) {
            Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__["alert"])("password doesnt match");
        }
    };
    UpdatepasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-updatepassword',
            template: __importDefault(__webpack_require__("./updatepassword/updatepassword.component.html")).default,
            styles: [__importDefault(__webpack_require__("./updatepassword/updatepassword.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], UpdatepasswordComponent);
    return UpdatepasswordComponent;
}());



/***/ }),

/***/ "./vehicledetails/vehicledetails.component.css":
/***/ (function(module, exports) {

module.exports = ".body\r\n{\r\n    font-size: 30;\r\n    font-weight: bold;\r\n    \r\n}\r\n.id\r\n{\r\n    font-size: 20;\r\n    font-weight: bold;\r\n\r\n}\r\n.owner\r\n{\r\n    font-size: 20;\r\n    font-weight: bold;\r\n}\r\n.model\r\n{\r\n   \r\n    font-size: 20;\r\n    font-weight: bold; \r\n\r\n   \r\n}\r\n"

/***/ }),

/***/ "./vehicledetails/vehicledetails.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Vehicledetails\" class=\"action-bar\" style=\"background-color:#1FAFD9 ;\">\n\n</ActionBar>\n<StackLayout>\n\t<Stackayout >\n\t\t<Image  src=\"~/assets/profile.png\" borderRadius=\"100%\" height=\"70\" width=\"70\" marginTop=\"130\"\n\t\t\t stretch=\"aspectFill\"></Image>\n\t</Stackayout>\n</StackLayout>\n\n<StackLayout>\n\t<Stackayout class=\"body\">\n\t\t<Label class=\"text-center\" color=\"black\" marginTop=\"200\" text=\"Vehicle Details\">\n\t\t</Label>\n\t</Stackayout>\n</StackLayout>\n\n<StackLayout>\n\t<Stackayout class=\"id\">\n\t\t<Label class=\"text-center\" color=\"#818485\" marginTop=\"300\" text=\"Vehicle Id:{A1DDZ21F}\">\n\t\t</Label>\n\t</Stackayout>\n</StackLayout>\n\n<StackLayout>\n\t<Stackayout class=\"model\">\n\t\t<Label class=\"text-center\" color=\"#818485\" marginTop=\"340\" text=\"Vehicle Model:{A1DDZ21F}\">\n\t\t</Label>\n\t</Stackayout>\n</StackLayout>\n\n<StackLayout>\n\t<Stackayout class=\"owner\">\n\t\t<Label class=\"text-center\" color=\"#818485\" marginTop=\"380\" text=\"Owner Name:{Saurav}\">\n\t\t</Label>\n\t</Stackayout>\n</StackLayout>"

/***/ }),

/***/ "./vehicledetails/vehicledetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicledetailsComponent", function() { return VehicledetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);


var VehicledetailsComponent = /** @class */ (function () {
    function VehicledetailsComponent(router) {
        this.router = router;
    }
    VehicledetailsComponent.prototype.ngOnInit = function () {
    };
    VehicledetailsComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] }
    ]; };
    VehicledetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicledetails',
            template: __importDefault(__webpack_require__("./vehicledetails/vehicledetails.component.html")).default,
            styles: [__importDefault(__webpack_require__("./vehicledetails/vehicledetails.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], VehicledetailsComponent);
    return VehicledetailsComponent;
}());



/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vbWFwL21hcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL21hcC9tYXAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbWFwL21hcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vdXBkYXRlcGFzc3dvcmQvdXBkYXRlcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdXBkYXRlcGFzc3dvcmQvdXBkYXRlcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vdXBkYXRlcGFzc3dvcmQvdXBkYXRlcGFzc3dvcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3ZlaGljbGVkZXRhaWxzL3ZlaGljbGVkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vdmVoaWNsZWRldGFpbHMvdmVoaWNsZWRldGFpbHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdmVoaWNsZWRldGFpbHMvdmVoaWNsZWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBQ3BCO0FBQ0U7QUFDMkI7QUFFSTtBQUNqQztBQUVuRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsa0VBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLHFFQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGdHQUF1QixFQUFFO0lBQzlELEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxnR0FBdUIsRUFBRTtJQUM5RCxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLCtEQUFZLEVBQUU7Q0FDM0MsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ2E7QUFPL0Q7SUFFRSxpQ0FBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBSSxDQUFDO0lBRWpELDBDQUFRLEdBQVI7SUFDQSxDQUFDOztnQkFIMkIsNEVBQWdCOztJQUZqQyx1QkFBdUI7UUFMbkMsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsd0dBQThDOztTQUUvQyxDQUFDO3lDQUc0Qiw0RUFBZ0I7T0FGakMsdUJBQXVCLENBU25DO0lBQUQsOEJBQUM7Q0FBQTtBQVRtQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnR7SG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIlxuaW1wb3J0e0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIlxuaW1wb3J0e1ZlaGljbGVkZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi92ZWhpY2xlZGV0YWlscy92ZWhpY2xlZGV0YWlscy5jb21wb25lbnRcIlxuaW1wb3J0IHsgZnJvbSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBVcGRhdGVwYXNzd29yZENvbXBvbmVudCB9IGZyb20gXCIuL3VwZGF0ZXBhc3N3b3JkL3VwZGF0ZXBhc3N3b3JkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSBcIi4vbWFwL21hcC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sb2dpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwidmVoaWNsZWRldGFpbHNcIiwgY29tcG9uZW50OiBWZWhpY2xlZGV0YWlsc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJ1cGRhdGVwYXNzd29yZFwiLCBjb21wb25lbnQ6IFVwZGF0ZXBhc3N3b3JkQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcIm1hcFwiLCBjb21wb25lbnQ6IE1hcENvbXBvbmVudCB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tXFxuUmFkU2lkZURyYXdlciBpcyBhIFVJIGNvbXBvbmVudCBwYXJ0IG9mIHRoZSBQcm9ncmVzcyBOYXRpdmVTY3JpcHQgVUkgc2V0IG9mIGNvbXBvbmVudHMuXFxuTGVhcm4gbW9yZSBhYm91dCB0aGUgUmFkU2lkZURyYXdlciBVSSBjb21wb25lbnQgYW5kIGhvdyBpdCBjYW4gYmUgY3VzdG9taXplZCBpbiB0aGlzIGRvY3VtZW50YXRpb24gYXJ0aWNsZTpcXG5odHRwOi8vZG9jcy50ZWxlcmlrLmNvbS9kZXZ0b29scy9uYXRpdmVzY3JpcHQtdWkvQ29udHJvbHMvTmF0aXZlU2NyaXB0L1NpZGVEcmF3ZXIvZ2V0dGluZy1zdGFydGVkXFxuLS0+XFxuPFJhZFNpZGVEcmF3ZXIgW2RyYXdlclRyYW5zaXRpb25dPVxcXCJzaWRlRHJhd2VyVHJhbnNpdGlvblxcXCI+XFxuXFx0PEdyaWRMYXlvdXQgdGtEcmF3ZXJDb250ZW50IHJvd3M9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyIHNpZGVkcmF3ZXItbGVmdFxcXCI+XFxuXFx0XFx0PFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItaGVhZGVyXFxcIj5cXG5cXG5cXHRcXHRcXHQ8SW1hZ2Ugc3JjPVxcXCJ+L2Fzc2V0cy9mYWNlNC5qcGdcXFwiIGJvcmRlclJhZGl1cz1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCI2MFxcXCIgd2lkdGg9XFxcIjYwXFxcIiBtYXJnaW5yaWdodD1cXFwiMjBcXFwiXFxuXFx0XFx0XFx0XFx0c3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG5cXHRcXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kXFxcIiB0ZXh0PVxcXCJTYXVyYXYgQW5hbmRcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0PExhYmVsIGNsYXNzPVxcXCJmb290bm90ZVxcXCIgdGV4dD1cXFwic2F1cmF2a3VtYXIyODE5QG1haWwuY29tXFxcIj48L0xhYmVsPlxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxuXFxuXFx0XFx0PFNjcm9sbFZpZXcgcm93PVxcXCIxXFxcIj5cXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNpZGVkcmF3ZXItY29udGVudFxcXCI+XFxuXFx0XFx0XFx0XFx0PEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItbGlzdC1pdGVtXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMWI5O1xcXCIgY2xhc3M9XFxcImZhIFxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJWZWhpY2xlRGV0YWlsc1xcXCIgKHRhcCk9XFxcImNsaWNrdmVoaWNsZWRldGFpbHMoKVxcXCIgIFtuc1JvdXRlckxpbmtdPVxcXCJbJ3ZlaGljbGVkZXRhaWxzJ11cXFwiIGNsYXNzPVxcXCJwLXItMTBcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0XFx0PC9HcmlkTGF5b3V0PlxcblxcblxcdFxcdFxcdFxcdDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjA0MTtcXFwiIGNsYXNzPVxcXCJmYVxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJNYXBcXFwiICh0YXApPVxcXCJvbk1hcFJlYWR5KClcXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJ21hcCddXFxcImNsYXNzPVxcXCJwLXItMTBcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0XFx0PC9HcmlkTGF5b3V0PlxcblxcdFxcdFxcdFxcdFxcblxcdFxcdFxcdFxcdDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjAyMztcXFwiIGNsYXNzPVxcXCJmYVxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJVcGRhdGVQYXNzd29yZFxcXCIgICh0YXApPVxcXCJvbnVwZGF0ZXBhc3N3b3JkKClcXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJ3VwZGF0ZXBhc3N3b3JkJ11cXFwiICBjbGFzcz1cXFwicC1yLTEwXFxcIj48L0xhYmVsPlxcblxcdFxcdFxcdFxcdDwvR3JpZExheW91dD5cXG5cXG5cXHRcXHRcXHRcXHQ8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiPlxcblxcdFxcdFxcdFxcdFxcdDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYwOGI7XFxcIiBjbGFzcz1cXFwiZmFcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiTG9nb3V0XFxcIiAodGFwKT1cXFwib25sb2dvdXQoKVxcXCIgW2NsZWFySGlzdG9yeV09XFxcInRydWVcXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJ2xvZ2luJ11cXFwiIGNsYXNzPVxcXCJwLXItMTBcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0XFx0PC9HcmlkTGF5b3V0PlxcblxcblxcblxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuXFxuXFxuXFx0XFx0XFx0PC9TdGFja0xheW91dD5cXG5cXHRcXHQ8L1Njcm9sbFZpZXc+XFxuXFx0PC9HcmlkTGF5b3V0PlxcblxcblxcdDxwYWdlLXJvdXRlci1vdXRsZXQgdGtNYWluQ29udGVudCBjbGFzcz1cXFwicGFnZSBwYWdlLWNvbnRlbnRcXFwiPjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcbjwvUmFkU2lkZURyYXdlcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBSYWRTaWRlRHJhd2VyLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG4gICAgY2xpY2t2ZWhpY2xlZGV0YWlscygpXG4gICAge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKVxuICAgIH1cblxuICAgb25sb2dvdXQoKVxuICAgIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKClcbiAgICB9XG4gICAgb251cGRhdGVwYXNzd29yZCgpXG4gICAge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKVxuICAgIH1cbiAgICBvbk1hcFJlYWR5KClcbiAgICB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKVxuICAgIH1cblxuICAgIFxufVxuIiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzJ1wifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJGb250QXdlc29tZVxcXCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYW5kcm9pZC1sYmxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2UtY29udGVudCAucGFnZS1wbGFjZWhvbGRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0Q3RDdEN1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2UtY29udGVudCAucGFnZS1pY29uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiNzJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcInRvcFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNEN0Q3RDdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMjAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiLTEwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uXCIsXCIuc2lkZWRyYXdlci1saXN0LWl0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMjI3MzRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlci5zaWRlZHJhd2VyLWxlZnRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzFGQUZEOVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItaW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiNjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIuc2lkZWRyYXdlci1sZWZ0IC5mb290bm90ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItaGVhZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxRkFGRDlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1oZWFkZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMjI3MzRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1jb250ZW50IC5zaWRlZHJhd2VyLWxpc3QtaXRlbSAuZmFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1jb250ZW50IC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5zZWxlY3RlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjRjhGOEY4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW0uc2VsZWN0ZWQgTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMxRkFGRDlcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmVoaWNsZWRldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3ZlaGljbGVkZXRhaWxzL3ZlaGljbGVkZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcGRhdGVwYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vdXBkYXRlcGFzc3dvcmQvdXBkYXRlcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIlxuQE5nTW9kdWxlKHtcbiAgIGJvb3RzdHJhcDogW1xuICAgICAgQXBwQ29tcG9uZW50XG4gICBdLFxuICAgaW1wb3J0czogW1xuICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICBIdHRwQ2xpZW50TW9kdWxlXG4gICAgIFxuICAgIF0sXG4gICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgIFZlaGljbGVkZXRhaWxzQ29tcG9uZW50LFxuICAgICAgVXBkYXRlcGFzc3dvcmRDb21wb25lbnQsXG4gICAgICBNYXBDb21wb25lbnRcbiAgIF0sXG4gICBzY2hlbWFzOiBbXG4gICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuYm9keVxcclxcbntcXHJcXG4gICAgZm9udC1zaXplOiAzMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4uaWRcXHJcXG57XFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcclxcbn1cXHJcXG4ub3duZXJcXHJcXG57XFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ubW9kZWxcXHJcXG57XFxyXFxuICAgXFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcXHJcXG5cXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiVGl0bGVcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojMUZBRkQ5IDtcXFwiPlxcblxcdDxOYXZpZ2F0aW9uQnV0dG9uIGljb249XFxcInJlczovL21lbnVcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPFN0YWNrTGF5b3V0PlxcblxcdDxTdGFja2F5b3V0ID5cXG5cXHRcXHQ8SW1hZ2UgIHNyYz1cXFwifi9hc3NldHMvcHJvZmlsZS5wbmdcXFwiIGJvcmRlclJhZGl1cz1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCI3MFxcXCIgd2lkdGg9XFxcIjcwXFxcIiBtYXJnaW5Ub3A9XFxcIjEzMFxcXCJcXG5cXHRcXHRcXHQgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgY2xhc3M9XFxcImJvZHlcXFwiPlxcblxcdFxcdDxMYWJlbCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIGNvbG9yPVxcXCJibGFja1xcXCIgbWFyZ2luVG9wPVxcXCIyMDBcXFwiIHRleHQ9XFxcIlZlaGljbGUgRGV0YWlsc1xcXCI+XFxuXFx0XFx0PC9MYWJlbD5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgY2xhc3M9XFxcImlkXFxcIj5cXG5cXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBjb2xvcj1cXFwiIzgxODQ4NVxcXCIgbWFyZ2luVG9wPVxcXCIzMDBcXFwiIHRleHQ9XFxcIlZlaGljbGUgSWQ6e0ExRERaMjFGfVxcXCI+XFxuXFx0XFx0PC9MYWJlbD5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgY2xhc3M9XFxcIm1vZGVsXFxcIj5cXG5cXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBjb2xvcj1cXFwiIzgxODQ4NVxcXCIgbWFyZ2luVG9wPVxcXCIzNDBcXFwiIHRleHQ9XFxcIlZlaGljbGUgTW9kZWw6e0ExRERaMjFGfVxcXCI+XFxuXFx0XFx0PC9MYWJlbD5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgY2xhc3M9XFxcIm93bmVyXFxcIj5cXG5cXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBjb2xvcj1cXFwiIzgxODQ4NVxcXCIgbWFyZ2luVG9wPVxcXCIzODBcXFwiIHRleHQ9XFxcIk93bmVyIE5hbWU6e1NhdXJhdn1cXFwiPlxcblxcdFxcdDwvTGFiZWw+XFxuXFx0PC9TdGFja2F5b3V0PlxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG5cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIkFjdGlvbkJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICB3aGl0ZTtcXHJcXG4gICAgY29sb3I6ICNmZjY3Njc7XFxyXFxufVxcclxcbi5hY3Rpb24tbGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxNjtcXHJcXG59XFxyXFxuLnZvZC1sb2dvIHtcXHJcXG4gIG1hcmdpbi10b3A6IDMwO1xcclxcbn1cXHJcXG4ucmVnLWxvZy1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogNDA7XFxyXFxuICBwYWRkaW5nOiAyMDtcXHJcXG59XFxyXFxuLnJlZy1hY3RpdmUge1xcclxcbiAgZm9udC1zaXplOiAyMDtcXHJcXG4gIGNvbG9yOmxpZ2h0Z3JheTtcXHJcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAwLCAzNCwgMC42NDQpO1xcclxcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMDtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiB0b2dnbGU7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuXFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcbnJlZy1hY3RpdmUtaW5wdXQge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHJlZ19pbnB1dDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuXFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcbi5yZWctZGVhY3RpdmV7XFxyXFxuICBjb2xvcjpsaWdodGdyYXk7XFxyXFxuICBmb250LXNpemU6IDExO1xcclxcbiAgcGFkZGluZy10b3A6IDEyO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHRvZ2dsZTtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXHJcXG5cXHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjEsIDAuMSwgMS4wLCAxLjApO1xcclxcbiAgXFxyXFxufVxcclxcbkBrZXlmcmFtZXMgdG9nZ2xlIHtcXHJcXG5cXHRmcm9tIHsgb3BhY2l0eTogMDt9XFxyXFxuICA1MCUgeyBvcGFjaXR5OiAwLjU7IH1cXHJcXG5cXHR0byB7IG9wYWNpdHk6IDE7IH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyByZWdfaW5wdXQge1xcclxcblxcdGZyb20geyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcclxcblxcdDUwJSB7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxyXFxuXFx0dG8geyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcclxcbn1cXHJcXG4vKiAubWFpbiB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMywgMC4zKTtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBtYWluO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcclxcblxcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMSwgMC4xLCAxLjAsIDEuMCk7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgbWFpbiB7XFxyXFxuXFx0ZnJvbSB7IHRyYW5zZm9ybTogc2NhbGUoMC4zLCAwLjMpOyB9XFxyXFxuXFx0NTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7IH1cXHJcXG5cXHR0byB7IHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7IH1cXHJcXG59ICovXFxyXFxuLnJlZy1zZXBhcmF0b3J7XFxyXFxuICBjb2xvcjpsaWdodGdyYXk7XFxyXFxuICBmb250LXNpemU6IDEzO1xcclxcbiAgcGFkZGluZy10b3A6IDEyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDIwO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHRvZ2dsZTtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxyXFxuXFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcbi5mb3JtLWlucHV0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjA7XFxyXFxuICBtYXJnaW4tdG9wOiAxMDtcXHJcXG4gIHBhZGRpbmc6IDEwO1xcclxcbiAgcGxhY2Vob2xkZXItY29sb3I6cmdiYSgyMDcsIDIwNywgMjA3LCAwLjYpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0MSwgMjQxLCAwLjYpO1xcclxcbiAgZm9udC1zaXplOiAxNDtcXHJcXG59XFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1O1xcclxcbn1cXHJcXG4uZm9ybS1jb250YWluZXItc3VibWl0dGVkIHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBsb2dpbl9zdWJtaXR0ZWQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcclxcblxcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgbG9naW5fc3VibWl0dGVkIHtcXHJcXG5cXHRmcm9tIHsgb3BhY2l0eTogMSB9XFxyXFxuICA1MCUgeyBvcGFjaXR5OiAwLjEgfVxcclxcblxcdHRvIHsgb3BhY2l0eTogMSB9XFxyXFxufVxcclxcbi5mb3JtLWJ1dHRvbiB7XFxyXFxuICBtYXJnaW46IDIwO1xcclxcbiAgbWFyZ2luLXRvcDogMjU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjQzAzOTJCO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uZm9ybS1sYWJlbCB7XFxyXFxuICBjb2xvcjojY2NjO1xcclxcbiAgbWFyZ2luLXRvcDogLTU7IFxcclxcbn1cXHJcXG4ubG9naW4tZG9uZSB7XFxyXFxuICB3aWR0aDogMTA7XFxyXFxuICBoZWlnaHQ6IDEwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmODRlNGU7XFxyXFxuICBwYWRkaW5nOiAxMDtcXHJcXG4gIHotaW5kZXg6IDEwMDAwMDA7XFxyXFxuICBtYXJnaW46IC01MDtcXHJcXG59XFxyXFxuLmZvcmdldFxcclxcbntcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjQzAzOTJCO1xcclxcbiAgZm9udC1zaXplOiAxNTtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxufVxcclxcbi5pbnB1dC1maWVsZHsgICAgXFxyXFxuICBib3JkZXItd2lkdGg6IDE7XFxyXFxuICBib3JkZXItc3R5bGU6ICdzb2xpZCc7XFxyXFxuICBib3JkZXItY29sb3I6ICNDMDM5MkI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4OyAgICBcXHJcXG4gIHBhZGRpbmc6MTA7XFxyXFxuICBtYXJnaW4tdG9wOjIwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMDsgICAgXFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkhvbWVcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGlvczpob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGFuZHJvaWQ6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG5cXHRcXHQ8TGFiZWwgdGV4dD1cXFwiTWluaW1hbGlzbVxcXCIgY2xhc3M9XFxcImFjdGlvbi1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHQgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuXFxyXFxuPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgY2xhc3M9XFxcIm1haW5cXFwiPlxcclxcblxcclxcblxcdDxJbWFnZSAjbG9nbyB3aWR0aD1cXFwiMTQwXFxcIiBjbGFzcz1cXFwidm9kLWxvZ29cXFwiIHNyYz1cXFwifi9sb2dpbi9hcHBsZWxvZ28ucG5nXFxcIj48L0ltYWdlPlxcclxcblxcdDxTdGFja0xheW91dCAjY2lyY2xlIHdpZHRoPVxcXCIxMDBcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiBjbGFzcz1cXFwibG9naW4tZG9uZVxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0IFt2aXNpYmlsaXR5XT1cXFwibmF2aWdhdGluZyA/ICdjb2xsYXBzZWQnIDogJ3Zpc2libGUnXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcInJlZy1sb2ctY29udGFpbmVyXFxcIj5cXHJcXG5cXHRcXHQ8TGFiZWwgdGV4dD1cXFwiTCBPIEcgSSBOXFxcIiAodGFwKT1cXFwic2V0VG9Mb2dpbigpXFxcIiBbbmdDbGFzc109XFxcIltpc0xvZ2luID8gJ3JlZy1hY3RpdmUnIDogJ3JlZy1kZWFjdGl2ZSddXFxcIj48L0xhYmVsPlxcclxcbiAgICAgIFxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbiAgIFxcclxcbiAgICA8U3RhY2tMYXlvdXQgW3Zpc2liaWxpdHldPVxcXCJuYXZpZ2F0aW5nID8gJ2NvbGxhcHNlZCcgOiAndmlzaWJsZSdcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udGFpbmVyXFxcIiBbbmdDbGFzc109XFxcIltmb3JtU3VibWl0dGVkID8gJ2Zvcm0tY29udGFpbmVyLXN1Ym1pdHRlZCcgOiAnZm9ybS1jb250YWluZXInXVxcXCI+XFxyXFxuICAgICAgICA8VGV4dEZpZWxkICBbKG5nTW9kZWwpXT1cXFwibXlQb3N0U2VydmljZS5kZXZpY2VfaWRcXFwiIGhpbnQ9XFxcIlZlaGljbGVJZFxcXCIgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgdGV4dEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiA+PC9UZXh0RmllbGQ+XFxyXFxuXFx0XFx0PFRleHRGaWVsZCBbKG5nTW9kZWwpXT1cXFwibXlQb3N0U2VydmljZS5QYXNzd29yZFxcXCIgaGludD1cXFwiUGFzc3dvcmRcXFwiIGNsYXNzPSBcXFwiaW5wdXQtZmllbGRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgdGV4dEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiA+PC9UZXh0RmllbGQ+XFxyXFxuXFx0XFx0PFRleHRGaWVsZCAjaXRlbSBbKG5nTW9kZWwpXT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBbdmlzaWJpbGl0eV09XFxcIiFpc0xvZ2luID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcXFwiIGhpbnQ9XFxcIkNvbmZpcm0gUGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWlucHV0XFxcIiB0ZXh0QWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvVGV4dEZpZWxkPlxcclxcbiAgICAgICAgPEJ1dHRvbiAodG91Y2gpPVxcXCJvbkZvY3VzKCRldmVudClcXFwiICNidG4gdGV4dD1cXFwie3tsb2dpblR4dH19XFxcIiAodGFwKT1cXFwiZ2V0ZGF0YSgpXFxcIiAgY2xhc3M9XFxcImZvcm0tYnV0dG9uXFxcIj48L0J1dHRvbj5cXHJcXG4gICAgICAgIDxsYWJlbCB0ZXh0PVxcXCJGb3Jnb3RQYXNzd29yZFxcXCIgKHRhcCk9XFxcIm9uRm9yZ2V0UGFzc3dvcmQoKVxcXCIgc3R5bGU9XFxcImNvbG9yOiAjQzAzOTJCO1xcXCIgY2xhc3M9XFxcImZvcmdldFxcXCI+PC9sYWJlbD5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG4gICBcXHJcXG48L1N0YWNrTGF5b3V0PlwiIiwiXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgVG91Y2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSxIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCJcbmltcG9ydCB7SHR0cFBvc3RTZXJ2aWNlfSBmcm9tIFwiLi9sb2dpbi5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKFwiaXRlbVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBhbmd1bGFySXRlbTogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiYnRuXCIsIHsgc3RhdGljOiB0cnVlIH0pIGJ0blJlZjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiY2lyY2xlXCIsIHsgc3RhdGljOiB0cnVlIH0pIGNpcmNsZVJlZjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwibG9nb1wiLCB7IHN0YXRpYzogdHJ1ZSB9KSBsb2dvUmVmOiBFbGVtZW50UmVmO1xuICAgIGl0ZW06IFZpZXc7XG4gICAgYnRuSXRlbTogVmlldztcbiAgICBjaXJjbGVJdGVtOiBWaWV3O1xuICAgIGxvZ29JdGVtOiBWaWV3O1xuXG4gICAgdGV4dEZpZWxkVmFsdWU6IHN0cmluZyA9IFwiXCI7XG4gICAgaXNMb2dpbiA9IHRydWU7XG4gICAgZm9ybVN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIG5hdmlnYXRpbmcgPSBmYWxzZTtcbiAgICBsb2dpblR4dCA9IFwiTCBvIGcgaSBuXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIG15UG9zdFNlcnZpY2U6SHR0cFBvc3RTZXJ2aWNlLCBodHRwOkh0dHBDbGllbnRNb2R1bGUgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuX3BhZ2Uub24oJ25hdmlnYXRpbmdUbycsIChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuY2lyY2xlSXRlbS5zY2FsZVggPSAwO1xuICAgICAgICB0aGlzLmNpcmNsZUl0ZW0uc2NhbGVZID0gMDtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9nb0l0ZW0udHJhbnNsYXRlWSA9IDA7XG4gICAgfSlcbiAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5idG5JdGVtID0gdGhpcy5idG5SZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLml0ZW0gPSB0aGlzLmFuZ3VsYXJJdGVtLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5jaXJjbGVJdGVtID0gdGhpcy5jaXJjbGVSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmxvZ29JdGVtID0gdGhpcy5sb2dvUmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICB0aGlzLml0ZW0uc2NhbGVYID0gMDtcbiAgICB0aGlzLml0ZW0uc2NhbGVZID0gMDtcbiAgICB0aGlzLmNpcmNsZUl0ZW0uc2NhbGVYID0gMDtcbiAgICB0aGlzLmNpcmNsZUl0ZW0uc2NhbGVZID0gMDtcbiAgICB0aGlzLmJ0bkl0ZW0udHJhbnNsYXRlWSA9IC01MDtcbn1cblxuZ2V0ZGF0YSgpIHtcblxuICB0aGlzLm15UG9zdFNlcnZpY2UuZ2V0ZGF0YSgpO1xuICBcbn1cblxuXG5cbm9uQnV0dG9uVGFwKCk6IHZvaWQge1xuXG4gIHRoaXMuZm9ybVN1Ym1pdHRlZCA9IHRydWU7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICB0aGlzLm5hdmlnYXRpbmcgPSB0cnVlO1xuXG4gICAgICB0aGlzLmxvZ29JdGVtLmFuaW1hdGUoe1xuICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAyMDAgfSxcbiAgICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNpcmNsZUl0ZW0udHJhbnNsYXRlWSA9IDIwMDtcbiAgICAgICAgICB0aGlzLmNpcmNsZUl0ZW0uYW5pbWF0ZSh7XG4gICAgICAgICAgICAgIHNjYWxlOiB7IHg6IDE1LCB5OiAxNSB9LFxuICAgICAgICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgICBcbiAgICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICBcbiAgfSwgMjUwMCk7XG4gIFxufVxuXG5vbkZvY3VzKGFyZ3M6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkge1xuXG4gIGlmIChhcmdzLmFjdGlvbiA9PSBcImRvd25cIikge1xuICAgICAgdGhpcy5idG5JdGVtLnNjYWxlWCA9IDAuOTtcbiAgICAgIHRoaXMuYnRuSXRlbS5zY2FsZVkgPSAwLjk7XG4gIH0gZWxzZSBpZiAoYXJncy5hY3Rpb24gPT0gXCJ1cFwiKSB7XG4gICAgICB0aGlzLmJ0bkl0ZW0uc2NhbGVYID0gMTtcbiAgICAgIHRoaXMuYnRuSXRlbS5zY2FsZVkgPSAxO1xuICB9XG4gIFxufVxuc2V0VG9Mb2dpbigpIHtcbiAgdGhpcy5pdGVtLmFuaW1hdGUoe1xuICAgICAgc2NhbGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgZHVyYXRpb246IDMwMFxuICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuaXNMb2dpbiA9IHRydWU7XG4gICAgICB0aGlzLmxvZ2luVHh0ID0gXCJMIG8gZyBpIG5cIjtcbiAgICAgIHRoaXMuYnRuSXRlbS5hbmltYXRlKHtcbiAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogLTUwIH0sXG4gICAgICAgICAgZHVyYXRpb246IDIwMFxuICAgICAgfSlcbiAgfSk7XG59XG5zaG93UGFzc3dvcmRcbnNob3dIaWRlSWNvblxuc2hvd0ljb25cbmhpZGVJY29uXG5UZXh0RmllbGRcblxuXG5cblxuICBcblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IGdldExvY2FsZURhdGVGb3JtYXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEh0dHBQb3N0U2VydmljZSB7XHJcbiAgICBsb2dpbl9yZXNwb25zZVxyXG4gICAgcGFzc3dvcmRcclxuICAgIGRldmljZV9pZFxyXG4gICBcclxuXHJcbiAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICAgIGdldGRhdGEoKSAge1xyXG4gICAgICAgIHRyeSB7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBsZXQgYm9keT17ZGV2aWNlX2lkOnRoaXMuZGV2aWNlX2lkLCBwYXNzd29yZDp0aGlzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmh0dHAucHV0KFwiaHR0cDovL3NlbGZkcml2ZWNhci05NDUzODIzMDguYXAtc291dGgtMS5lbGIuYW1hem9uYXdzLmNvbS9sb2dpblwiLGJvZHkpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubG9naW5fcmVzcG9uc2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICAgICAgICAgICAgIGFsZXJ0KHRoaXMubG9naW5fcmVzcG9uc2UpXHJcblxyXG4gICAgICAgICAgICB9LGVycm9yPT5hbGVydChlcnJvcikpfVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGNhdGNoKGVycm9yKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvci50b1N0cmluZygpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuICAgIFxyXG5cclxuXHJcblxyXG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcblxuZW5hYmxlUHJvZE1vZGUoKTtcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5idG4uYnRuLXByaW1hcnlcXHJcXG57XFxyXFxuICAgIHdpZHRoOiAxMDA7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIm1hcHNcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojMUZBRkQ5IDtcXFwiPjwvQWN0aW9uQmFyPlxcblxcblxcbjxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sKlxcXCIgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICA8YnV0dG9uIHRleHQ9XFxcIkFkZCBtYXJrZXJcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICh0YXApPVxcXCJhZGRtYXJrZXIoKVxcXCI+PC9idXR0b24+XFxuICAgIDxidXR0b24gdGV4dD1cXFwiQW5pbWF0ZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKHRhcCk9XFxcImFuaW1hdGVDYW1lcmEoKVxcXCI+PC9idXR0b24+XFxuXFxuICA8L1N0YWNrTGF5b3V0PlxcbiAgPENvbnRlbnRWaWV3IHJvdz1cXFwiMVxcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCI+XFxuICBcXG4gICAgIDxNYXBib3ggYWNjZXNzVG9rZW49XFxcInBrLmV5SjFJam9pZDNWb1lXNHhNaUlzSW1FaU9pSmphemxqWW5rMk1XZ3dNMkp3TTJWdk9HNDVlbTFzTWpCcEluMC5lMkk3ZmF1NW82Y3U2b1RfeVhuU2pBXFxcIlxcbiAgICAgIG1hcFN0eWxlPVxcXCJ0cmFmZmljX2RheVxcXCIgbGF0aXR1ZGU9XFxcIjI2LjU4ODcgXFxcIiBsb25naXR1ZGU9XFxcIjg1LjUwMTNcXFwiIGhpZGVDb21wYXNzPVxcXCJ0cnVlXFxcIiB6b29tTGV2ZWw9XFxcIjEwXFxcIlxcbiAgICAgIHNob3dVc2VyTG9jYXRpb249XFxcInRydWVcXFwiIChtYXBSZWFkeSk9XFxcIm9uTWFwUmVhZHkoJGV2ZW50KVxcXCI+XFxuICAgIDwvTWFwYm94PlxcbiAgPC9Db250ZW50Vmlldz5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7YWxlcnR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHtNYXBib3gsTWFwYm94TWFya2VyLE1hcGJveFZpZXdBcGl9IGZyb20gXCJuYXRpdmVzY3JpcHQtbWFwYm94XCJcbmltcG9ydCB7RGlyZWN0aW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kaXJlY3Rpb25zXCJcbnJlZ2lzdGVyRWxlbWVudChcIk1hcGJveFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LW1hcGJveFwiKS5NYXBib3hWaWV3KTtcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tYXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWFwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWFwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG1hcEJveDogTWFwYm94Vmlld0FwaVxuICBkaXJlY3Rpb25zIDogRGlyZWN0aW9ucztcbiAgY29uc3RydWN0b3IoKSBcbiAgeyBcbiAgICB0aGlzLmRpcmVjdGlvbnM9bmV3IERpcmVjdGlvbnM7XG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgXG4gICAgXG4gIH1cbiAgb25NYXBSZWFkeShhcmdzKVxuICB7XG4gICAgICAgdGhpcy5tYXBCb3g9YXJncy5tYXA7XG4gICBcbiAgfVxuICBhZGRtYXJrZXIoKVxuICB7XG4gICAgICBjb25zdCBmaXJzdE1hcmtlciA9IDxNYXBib3hNYXJrZXI+eyBcbiAgICAgIGlkOiAxLCBcbiAgICAgIGxhdDogMjYuMTU0MiwgXG4gICAgICBsbmc6IDg1Ljg5MTgsIFxuICAgICAgdGl0bGU6ICdEYXJiaGFuZ2EnLCBcbiAgICAgIHN1YnRpdGxlOiAnRmluZCBEYXJiaGFuZ2EgaGVyZSEnLFxuICAgICAgb25UYXA6IG1hcmtlciA9PiBjb25zb2xlLmxvZyhcIk1hcmtlciB0YXBwZWQgd2l0aCB0aXRsZTogJ1wiICsgbWFya2VyLnRpdGxlICsgXCInXCIpLFxuICAgICAgb25DYWxsb3V0VGFwOiBtYXJrZXIgPT4ge1xuICAgICAgIHRoaXMuIGRpcmVjdGlvbnMubmF2aWdhdGUoe1xuICAgICAgICBmcm9tOiB7IC8vIG9wdGlvbmFsLCBkZWZhdWx0ICdjdXJyZW50IGxvY2F0aW9uJ1xuICAgICAgICBsYXQ6IDI2LjE1NDIgLFxuICAgICAgICBsbmc6IDg1Ljg5MThcbiAgICAgIH0sXG4gICAgICAgICAgdG86IHsgLy8gZWl0aGVyIHBhc3MgaW4gYSBzaW5nbGUgb2JqZWN0IG9yIGFuIEFycmF5IChzZWUgdGhlIFR5cGVTY3JpcHQgZXhhbXBsZSBiZWxvdylcbiAgICAgICAgICAgIGFkZHJlc3M6IFwicGF0bmFcIlxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWFwcyBhcHAgbGF1bmNoZWQuXCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgIFxuICAgdGhpcy5tYXBCb3guYWRkTWFya2VycyhbXG4gICAgICBmaXJzdE1hcmtlclxuICAgICBcbiAgICBdKVxuICB9XG4gICAgIGFuaW1hdGVDYW1lcmEoKVxuICAgICB7XG4gICAgICAgdGhpcy5tYXBCb3guYW5pbWF0ZUNhbWVyYSh7XG4gICAgICAgIC8vIHRoaXMgaXMgd2hlcmUgd2UgYW5pbWF0ZSB0b1xuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgIGxhdDogMjQuNzkxNCxcbiAgICAgICAgICAgIGxuZzogODUuMDAwMlxuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjoxNTAwXG4gICAgICAgIC8vIHpvb21MZXZlbDogMTcsIC8vIEFuZHJvaWRcbiAgICAgICAgLy8gYWx0aXR1ZGU6IDIwMDAsIC8vIGlPUyAobWV0ZXJzIGZyb20gdGhlIGdyb3VuZClcbiAgICAgICAgLy8gYmVhcmluZzogMjcwLCAvLyBXaGVyZSB0aGUgY2FtZXJhIGlzIHBvaW50aW5nLCAwLTM2MCAoZGVncmVlcylcbiAgICAgICAgLy8gdGlsdDogNTAsXG4gICAgICAgIC8vIGR1cmF0aW9uOiA1MDAwIC8vIGRlZmF1bHQgMTAwMDAgKG1pbGxpc2Vjb25kcylcbiAgICAgIH0pXG4gICAgIH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIlVwYWR0ZVBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IzFGQUZEOSA7XFxcIj5cXG48L0FjdGlvbkJhcj5cXG48R3JpZExheW91dCBiYWNrZ3JvdW5kQ29sb3I9IFxcXCIjQ0NDQ0NDXFxcIiAgY2xhc3M9XFxcImJvZHkgc2NmLWNhcmQgYW5pbWF0ZS1ib3VuY2VJbkxlZnQtZGVsYXktMG1zXFxcIj5cXG4gIDxTY3JvbGxWaWV3PlxcbiAgICAgIDxTdGFja0xheW91dCBtYXJnaW49XFxcIjEwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmb3JtXFxcIiBwYWRkaW5nPVxcXCIxNVxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRkZGRkZGXFxcIj5cXG4gICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk5ld1Bhc3N3b3JkXFxcIiBjbGFzcz1cXFwibGFiZWwgZm9udC13ZWlnaHQtYm9sZCBtLWItNVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgWyhuZ01vZGVsKV09XFxcInBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlJlRW50ZXJQYXNzd29yZFxcXCIgY2xhc3M9XFxcImxhYmVsIGZvbnQtd2VpZ2h0LWJvbGQgbS1iLTVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCAgY2xhc3M9XFxcImlucHV0XFxcIiBbKG5nTW9kZWwpXT1cXFwiUmVwYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSB3LWZ1bGxcXFwiICB0ZXh0PVxcXCJTdWJtaXRcXFwiICAodGFwKT1cXFwidmFsaWRhdGUoKVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gIDwvU2Nyb2xsVmlldz5cXG48L0dyaWRMYXlvdXQ+ICBcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2FsZXJ0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11cGRhdGVwYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGRhdGVwYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VwZGF0ZXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlcGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuXG4gIHBhc3N3b3JkXG4gIFJlcGFzc3dvcmRcblxuXG5cbiAgdmFsaWRhdGUoKVxuIHtcbiAgIGlmKHRoaXMucGFzc3dvcmQgIT10aGlzLlJlcGFzc3dvcmQpXG4gICB7XG4gICAgICBhbGVydChcInBhc3N3b3JkIGRvZXNudCBtYXRjaFwiKVxuICAgfVxuICBcblxuICBcblxuXG59XG59XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ib2R5XFxyXFxue1xcclxcbiAgICBmb250LXNpemU6IDMwO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5pZFxcclxcbntcXHJcXG4gICAgZm9udC1zaXplOiAyMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxufVxcclxcbi5vd25lclxcclxcbntcXHJcXG4gICAgZm9udC1zaXplOiAyMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5tb2RlbFxcclxcbntcXHJcXG4gICBcXHJcXG4gICAgZm9udC1zaXplOiAyMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcclxcblxcclxcbiAgIFxcclxcbn1cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJWZWhpY2xlZGV0YWlsc1xcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiMxRkFGRDkgO1xcXCI+XFxuXFxuPC9BY3Rpb25CYXI+XFxuPFN0YWNrTGF5b3V0PlxcblxcdDxTdGFja2F5b3V0ID5cXG5cXHRcXHQ8SW1hZ2UgIHNyYz1cXFwifi9hc3NldHMvcHJvZmlsZS5wbmdcXFwiIGJvcmRlclJhZGl1cz1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCI3MFxcXCIgd2lkdGg9XFxcIjcwXFxcIiBtYXJnaW5Ub3A9XFxcIjEzMFxcXCJcXG5cXHRcXHRcXHQgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgY2xhc3M9XFxcImJvZHlcXFwiPlxcblxcdFxcdDxMYWJlbCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIGNvbG9yPVxcXCJibGFja1xcXCIgbWFyZ2luVG9wPVxcXCIyMDBcXFwiIHRleHQ9XFxcIlZlaGljbGUgRGV0YWlsc1xcXCI+XFxuXFx0XFx0PC9MYWJlbD5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgY2xhc3M9XFxcImlkXFxcIj5cXG5cXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBjb2xvcj1cXFwiIzgxODQ4NVxcXCIgbWFyZ2luVG9wPVxcXCIzMDBcXFwiIHRleHQ9XFxcIlZlaGljbGUgSWQ6e0ExRERaMjFGfVxcXCI+XFxuXFx0XFx0PC9MYWJlbD5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgY2xhc3M9XFxcIm1vZGVsXFxcIj5cXG5cXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBjb2xvcj1cXFwiIzgxODQ4NVxcXCIgbWFyZ2luVG9wPVxcXCIzNDBcXFwiIHRleHQ9XFxcIlZlaGljbGUgTW9kZWw6e0ExRERaMjFGfVxcXCI+XFxuXFx0XFx0PC9MYWJlbD5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgY2xhc3M9XFxcIm93bmVyXFxcIj5cXG5cXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBjb2xvcj1cXFwiIzgxODQ4NVxcXCIgbWFyZ2luVG9wPVxcXCIzODBcXFwiIHRleHQ9XFxcIk93bmVyIE5hbWU6e1NhdXJhdn1cXFwiPlxcblxcdFxcdDwvTGFiZWw+XFxuXFx0PC9TdGFja2F5b3V0PlxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC12ZWhpY2xlZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi92ZWhpY2xlZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3ZlaGljbGVkZXRhaWxzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBWZWhpY2xlZGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIFxuICBcblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==