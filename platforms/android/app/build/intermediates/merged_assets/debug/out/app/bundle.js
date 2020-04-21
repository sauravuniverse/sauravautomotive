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





var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "vehicledetails", component: _vehicledetails_vehicledetails_component__WEBPACK_IMPORTED_MODULE_4__["VehicledetailsComponent"] },
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

module.exports = "<!--\nRadSideDrawer is a UI component part of the Progress NativeScript UI set of components.\nLearn more about the RadSideDrawer UI component and how it can be customized in this documentation article:\nhttp://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/SideDrawer/getting-started\n-->\n<RadSideDrawer [drawerTransition]=\"sideDrawerTransition\">\n\t<GridLayout tkDrawerContent rows=\"auto, *\" class=\"sidedrawer sidedrawer-left\">\n\t\t<StackLayout row=\"0\" class=\"sidedrawer-header\">\n\n\t\t\t<Image src=\"~/assets/face4.jpg\" borderRadius=\"100%\" height=\"60\" width=\"60\" marginright=\"20\"\n\t\t\t\tstretch=\"aspectFill\"></Image>\n\t\t\t<Label class=\"sidedrawer-header-brand\" text=\"Saurav Anand\"></Label>\n\t\t\t<Label class=\"footnote\" text=\"sauravkumar2819@mail.com\"></Label>\n\t\t</StackLayout>\n\n\t\t<ScrollView row=\"1\">\n\t\t\t<StackLayout class=\"sidedrawer-content\">\n\t\t\t\t<GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n\t\t\t\t\t<Label col=\"0\" text=\"&#xf1b9;\" class=\"fa \"></Label>\n\t\t\t\t\t<Label col=\"1\" text=\"VehicleDetails\" (tap)=\"clickvehicledetails()\"  [nsRouterLink]=\"['vehicledetails']\" class=\"p-r-10\"></Label>\n\t\t\t\t</GridLayout>\n\n\t\t\t\t<GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n\t\t\t\t\t<Label col=\"0\" text=\"&#xf041;\" class=\"fa\"></Label>\n\t\t\t\t\t<Label col=\"1\" text=\"Map\" class=\"p-r-10\"></Label>\n\t\t\t\t</GridLayout>\n\n\t\t\t\t<GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n\t\t\t\t\t<Label col=\"0\" text=\"&#xf08b;\" class=\"fa\"></Label>\n\t\t\t\t\t<Label col=\"1\" text=\"Logout\" (tap)=\"onlogout()\" [clearHistory]=\"true\" [nsRouterLink]=\"['login']\" class=\"p-r-10\"></Label>\n\t\t\t\t</GridLayout>\n\n\n\n\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\n\n\n\t\t\t</StackLayout>\n\t\t</ScrollView>\n\t</GridLayout>\n\n\t<page-router-outlet tkMainContent class=\"page page-content\"></page-router-outlet>\n</RadSideDrawer>"

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
                _home_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _vehicledetails_vehicledetails_component__WEBPACK_IMPORTED_MODULE_8__["VehicledetailsComponent"]
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

module.exports = "<ActionBar title=\"Home\" class=\"action-bar\">\r\n\t<StackLayout orientation=\"horizontal\" ios:horizontalAlignment=\"center\" android:horizontalAlignment=\"center\">\r\n\t\t<Label text=\"Minimalism\" class=\"action-label\"></Label>\r\n\t  </StackLayout>\r\n</ActionBar>\r\n\r\n\r\n<StackLayout orientation=\"vertical\" class=\"main\">\r\n\r\n\t<Image #logo width=\"140\" class=\"vod-logo\" src=\"~/login/applelogo.png\"></Image>\r\n\t<StackLayout #circle width=\"100\" height=\"100\" class=\"login-done\" orientation=\"horizontal\"></StackLayout>\r\n\r\n\t<StackLayout [visibility]=\"navigating ? 'collapsed' : 'visible'\" orientation=\"horizontal\" class=\"reg-log-container\">\r\n\t\t<Label text=\"L O G I N\" (tap)=\"setToLogin()\" [ngClass]=\"[isLogin ? 'reg-active' : 'reg-deactive']\"></Label>\r\n        <!-- <Label text=\" | \" class=\"reg-separator\"></Label> -->\r\n        <!-- <Label text=\"R E G I S T E R\" (tap)=\"setToRegister()\" [ngClass]=\"[!isLogin ? 'reg-active' : 'reg-deactive']\"></Label> -->\r\n    </StackLayout>\r\n\r\n   \r\n    <StackLayout [visibility]=\"navigating ? 'collapsed' : 'visible'\" orientation=\"vertical\" class=\"form-container\" [ngClass]=\"[formSubmitted ? 'form-container-submitted' : 'form-container']\">\r\n        <TextField  [(ngModel)]=\"phoneNumber\" hint=\"VehicleId\"  class=\"input-field\" textAlignment=\"center\" ></TextField>\r\n        <GridLayout row=\"1\" columns=\"\\*, auto\">\r\n        <TextField [(ngModel)]=\"password\" hint=\"Password\" class= \"input-field\" secure=\"true\" textAlignment=\"center\" ></TextField>\r\n        <Label col=\"1\" [text]=\"showHideIcon\" class=\"fa show-hide-icon font-size-lg\" (tap)=\"showHidePassword()\" verticalAlignment=\"middle\"></Label>\r\n\r\n    </GridLayout>\r\n\t\t<TextField #item [(ngModel)]=\"confirmPassword\" [visibility]=\"!isLogin ? 'visible' : 'hidden'\" hint=\"Confirm Password\" class=\"form-input\" textAlignment=\"center\"></TextField>\r\n        <Button (touch)=\"onFocus($event)\" #btn text=\"{{loginTxt}}\" (tap)=\"onButtonTap()\" [nsRouterLink]=\"['/home']\" class=\"form-button\"></Button>\r\n        <label text=\"ForgotPassword\" (tap)=\"onForgetPassword()\" style=\"color: #C0392B;\" class=\"forget\"></label>\r\n    </StackLayout>\r\n   \r\n    <!-- <AbsoluteLayout [visibility]=\"navigating ? 'collapsed' : 'visible'\">\r\n        <Image left=\"220\" top=\"-25\" width=\"150\" height=\"150\" src=\"~/home/01.jpg\"></Image>\r\n    </AbsoluteLayout> -->\r\n</StackLayout>"

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



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_page, routerExtensions) {
        this._page = _page;
        this.routerExtensions = routerExtensions;
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
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
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
        __metadata("design:paramtypes", [ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], LoginComponent);
    return LoginComponent;
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

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true,"markingMode":"none"},"main":"main.js","name":"tns-template-blank-ng","version":"3.1.1"};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL3ZlaGljbGVkZXRhaWxzL3ZlaGljbGVkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vdmVoaWNsZWRldGFpbHMvdmVoaWNsZWRldGFpbHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdmVoaWNsZWRldGFpbHMvdmVoaWNsZWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFD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QWUsc0JBQXNCLDBCQUEwQixLQUFLLGVBQWUsNkJBQTZCLDBCQUEwQixpQkFBaUIsSzs7Ozs7OztBQ0F6VCw2R0FBNkcsOGlCQUE4aUIsU0FBUyxnTUFBZ00sU0FBUyw2TEFBNkwsT0FBTyxtRDs7Ozs7Ozs7QUNBampDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDYTtBQU8vRDtJQUVFLGlDQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFJLENBQUM7SUFFakQsMENBQVEsR0FBUjtJQUNBLENBQUM7O2dCQUgyQiw0RUFBZ0I7O0lBRmpDLHVCQUF1QjtRQUxuQywrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5Qix3R0FBOEM7O1NBRS9DLENBQUM7eUNBRzRCLDRFQUFnQjtPQUZqQyx1QkFBdUIsQ0FTbkM7SUFBRCw4QkFBQztDQUFBO0FBVG1DIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydHtIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiXG5pbXBvcnR7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiXG5pbXBvcnR7VmVoaWNsZWRldGFpbHNDb21wb25lbnR9IGZyb20gXCIuL3ZlaGljbGVkZXRhaWxzL3ZlaGljbGVkZXRhaWxzLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBmcm9tIH0gZnJvbSBcInJ4anNcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sb2dpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwidmVoaWNsZWRldGFpbHNcIiwgY29tcG9uZW50OiBWZWhpY2xlZGV0YWlsc0NvbXBvbmVudCB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tXFxuUmFkU2lkZURyYXdlciBpcyBhIFVJIGNvbXBvbmVudCBwYXJ0IG9mIHRoZSBQcm9ncmVzcyBOYXRpdmVTY3JpcHQgVUkgc2V0IG9mIGNvbXBvbmVudHMuXFxuTGVhcm4gbW9yZSBhYm91dCB0aGUgUmFkU2lkZURyYXdlciBVSSBjb21wb25lbnQgYW5kIGhvdyBpdCBjYW4gYmUgY3VzdG9taXplZCBpbiB0aGlzIGRvY3VtZW50YXRpb24gYXJ0aWNsZTpcXG5odHRwOi8vZG9jcy50ZWxlcmlrLmNvbS9kZXZ0b29scy9uYXRpdmVzY3JpcHQtdWkvQ29udHJvbHMvTmF0aXZlU2NyaXB0L1NpZGVEcmF3ZXIvZ2V0dGluZy1zdGFydGVkXFxuLS0+XFxuPFJhZFNpZGVEcmF3ZXIgW2RyYXdlclRyYW5zaXRpb25dPVxcXCJzaWRlRHJhd2VyVHJhbnNpdGlvblxcXCI+XFxuXFx0PEdyaWRMYXlvdXQgdGtEcmF3ZXJDb250ZW50IHJvd3M9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyIHNpZGVkcmF3ZXItbGVmdFxcXCI+XFxuXFx0XFx0PFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItaGVhZGVyXFxcIj5cXG5cXG5cXHRcXHRcXHQ8SW1hZ2Ugc3JjPVxcXCJ+L2Fzc2V0cy9mYWNlNC5qcGdcXFwiIGJvcmRlclJhZGl1cz1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCI2MFxcXCIgd2lkdGg9XFxcIjYwXFxcIiBtYXJnaW5yaWdodD1cXFwiMjBcXFwiXFxuXFx0XFx0XFx0XFx0c3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG5cXHRcXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kXFxcIiB0ZXh0PVxcXCJTYXVyYXYgQW5hbmRcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0PExhYmVsIGNsYXNzPVxcXCJmb290bm90ZVxcXCIgdGV4dD1cXFwic2F1cmF2a3VtYXIyODE5QG1haWwuY29tXFxcIj48L0xhYmVsPlxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxuXFxuXFx0XFx0PFNjcm9sbFZpZXcgcm93PVxcXCIxXFxcIj5cXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNpZGVkcmF3ZXItY29udGVudFxcXCI+XFxuXFx0XFx0XFx0XFx0PEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItbGlzdC1pdGVtXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMWI5O1xcXCIgY2xhc3M9XFxcImZhIFxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJWZWhpY2xlRGV0YWlsc1xcXCIgKHRhcCk9XFxcImNsaWNrdmVoaWNsZWRldGFpbHMoKVxcXCIgIFtuc1JvdXRlckxpbmtdPVxcXCJbJ3ZlaGljbGVkZXRhaWxzJ11cXFwiIGNsYXNzPVxcXCJwLXItMTBcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0XFx0PC9HcmlkTGF5b3V0PlxcblxcblxcdFxcdFxcdFxcdDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjA0MTtcXFwiIGNsYXNzPVxcXCJmYVxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJNYXBcXFwiIGNsYXNzPVxcXCJwLXItMTBcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0XFx0PC9HcmlkTGF5b3V0PlxcblxcblxcdFxcdFxcdFxcdDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjA4YjtcXFwiIGNsYXNzPVxcXCJmYVxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJMb2dvdXRcXFwiICh0YXApPVxcXCJvbmxvZ291dCgpXFxcIiBbY2xlYXJIaXN0b3J5XT1cXFwidHJ1ZVxcXCIgW25zUm91dGVyTGlua109XFxcIlsnbG9naW4nXVxcXCIgY2xhc3M9XFxcInAtci0xMFxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHRcXHQ8L0dyaWRMYXlvdXQ+XFxuXFxuXFxuXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG5cXG5cXG5cXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcblxcdFxcdDwvU2Nyb2xsVmlldz5cXG5cXHQ8L0dyaWRMYXlvdXQ+XFxuXFxuXFx0PHBhZ2Utcm91dGVyLW91dGxldCB0a01haW5Db250ZW50IGNsYXNzPVxcXCJwYWdlIHBhZ2UtY29udGVudFxcXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuPC9SYWRTaWRlRHJhd2VyPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFJhZFNpZGVEcmF3ZXIsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHNlcnZpY2VzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cbiAgICBjbGlja3ZlaGljbGVkZXRhaWxzKClcbiAgICB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5jbG9zZURyYXdlcigpXG4gICAgfVxuXG4gICBvbmxvZ291dCgpXG4gICAge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKVxuICAgIH1cbiAgICBcbn1cbiIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzcydcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJcXFwiRm9udEF3ZXNvbWVcXFwiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFuZHJvaWQtbGJsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wYWdlLWNvbnRlbnQgLnBhZ2UtcGxhY2Vob2xkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNEN0Q3RDdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wYWdlLWNvbnRlbnQgLnBhZ2UtaWNvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjcyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJ0b3BcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjRDdEN0Q3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjIwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIi0xMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvblwiLFwiLnNpZGVkcmF3ZXItbGlzdC1pdGVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDIyNzM0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIuc2lkZWRyYXdlci1sZWZ0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxRkFGRDlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlci5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI2MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyLnNpZGVkcmF3ZXItbGVmdCAuZm9vdG5vdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWhlYWRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMUZBRkQ5XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItaGVhZGVyIC5zaWRlZHJhd2VyLWhlYWRlci1icmFuZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1jb250ZW50IC5zaWRlZHJhd2VyLWxpc3QtaXRlbSBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDIyNzM0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW0gLmZhXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW0uc2VsZWN0ZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0Y4RjhGOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLnNlbGVjdGVkIExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMUZBRkQ5XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFZlaGljbGVkZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi92ZWhpY2xlZGV0YWlscy92ZWhpY2xlZGV0YWlscy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgYm9vdHN0cmFwOiBbXG4gICAgICBBcHBDb21wb25lbnRcbiAgIF0sXG4gICBpbXBvcnRzOiBbXG4gICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgSG9tZVJvdXRpbmdNb2R1bGVcbiAgIF0sXG4gICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgIFZlaGljbGVkZXRhaWxzQ29tcG9uZW50XG4gICBdLFxuICAgc2NoZW1hczogW1xuICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmJvZHlcXHJcXG57XFxyXFxuICAgIGZvbnQtc2l6ZTogMzA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmlkXFxyXFxue1xcclxcbiAgICBmb250LXNpemU6IDIwO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHJcXG59XFxyXFxuLm93bmVyXFxyXFxue1xcclxcbiAgICBmb250LXNpemU6IDIwO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLm1vZGVsXFxyXFxue1xcclxcbiAgIFxcclxcbiAgICBmb250LXNpemU6IDIwO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDsgXFxyXFxuXFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcblxcclxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIlRpdGxlXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IzFGQUZEOSA7XFxcIj5cXG5cXHQ8TmF2aWdhdGlvbkJ1dHRvbiBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxTdGFja0xheW91dD5cXG5cXHQ8U3RhY2theW91dCA+XFxuXFx0XFx0PEltYWdlICBzcmM9XFxcIn4vYXNzZXRzL3Byb2ZpbGUucG5nXFxcIiBib3JkZXJSYWRpdXM9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiNzBcXFwiIHdpZHRoPVxcXCI3MFxcXCIgbWFyZ2luVG9wPVxcXCIxMzBcXFwiXFxuXFx0XFx0XFx0IHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiPjwvSW1hZ2U+XFxuXFx0PC9TdGFja2F5b3V0PlxcbjwvU3RhY2tMYXlvdXQ+XFxuXFxuPFN0YWNrTGF5b3V0PlxcblxcdDxTdGFja2F5b3V0IGNsYXNzPVxcXCJib2R5XFxcIj5cXG5cXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBjb2xvcj1cXFwiYmxhY2tcXFwiIG1hcmdpblRvcD1cXFwiMjAwXFxcIiB0ZXh0PVxcXCJWZWhpY2xlIERldGFpbHNcXFwiPlxcblxcdFxcdDwvTGFiZWw+XFxuXFx0PC9TdGFja2F5b3V0PlxcbjwvU3RhY2tMYXlvdXQ+XFxuXFxuPFN0YWNrTGF5b3V0PlxcblxcdDxTdGFja2F5b3V0IGNsYXNzPVxcXCJpZFxcXCI+XFxuXFx0XFx0PExhYmVsIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgY29sb3I9XFxcIiM4MTg0ODVcXFwiIG1hcmdpblRvcD1cXFwiMzAwXFxcIiB0ZXh0PVxcXCJWZWhpY2xlIElkOntBMUREWjIxRn1cXFwiPlxcblxcdFxcdDwvTGFiZWw+XFxuXFx0PC9TdGFja2F5b3V0PlxcbjwvU3RhY2tMYXlvdXQ+XFxuXFxuPFN0YWNrTGF5b3V0PlxcblxcdDxTdGFja2F5b3V0IGNsYXNzPVxcXCJtb2RlbFxcXCI+XFxuXFx0XFx0PExhYmVsIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgY29sb3I9XFxcIiM4MTg0ODVcXFwiIG1hcmdpblRvcD1cXFwiMzQwXFxcIiB0ZXh0PVxcXCJWZWhpY2xlIE1vZGVsOntBMUREWjIxRn1cXFwiPlxcblxcdFxcdDwvTGFiZWw+XFxuXFx0PC9TdGFja2F5b3V0PlxcbjwvU3RhY2tMYXlvdXQ+XFxuXFxuPFN0YWNrTGF5b3V0PlxcblxcdDxTdGFja2F5b3V0IGNsYXNzPVxcXCJvd25lclxcXCI+XFxuXFx0XFx0PExhYmVsIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgY29sb3I9XFxcIiM4MTg0ODVcXFwiIG1hcmdpblRvcD1cXFwiMzgwXFxcIiB0ZXh0PVxcXCJPd25lciBOYW1lOntTYXVyYXZ9XFxcIj5cXG5cXHRcXHQ8L0xhYmVsPlxcblxcdDwvU3RhY2theW91dD5cXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxuXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJBY3Rpb25CYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGU7XFxyXFxuICAgIGNvbG9yOiAjZmY2NzY3O1xcclxcbn1cXHJcXG4uYWN0aW9uLWxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTY7XFxyXFxufVxcclxcbi52b2QtbG9nbyB7XFxyXFxuICBtYXJnaW4tdG9wOiAzMDtcXHJcXG59XFxyXFxuLnJlZy1sb2ctY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDQwO1xcclxcbiAgcGFkZGluZzogMjA7XFxyXFxufVxcclxcbi5yZWctYWN0aXZlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjA7XFxyXFxuICBjb2xvcjpsaWdodGdyYXk7XFxyXFxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMCwgMzQsIDAuNjQ0KTtcXHJcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTA7XFxyXFxuICBhbmltYXRpb24tbmFtZTogdG9nZ2xlO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcclxcblxcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5yZWctYWN0aXZlLWlucHV0IHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiByZWdfaW5wdXQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcblxcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG4ucmVnLWRlYWN0aXZle1xcclxcbiAgY29sb3I6bGlnaHRncmF5O1xcclxcbiAgZm9udC1zaXplOiAxMTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMjtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiB0b2dnbGU7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuXFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xLCAwLjEsIDEuMCwgMS4wKTtcXHJcXG4gIFxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHRvZ2dsZSB7XFxyXFxuXFx0ZnJvbSB7IG9wYWNpdHk6IDA7fVxcclxcbiAgNTAlIHsgb3BhY2l0eTogMC41OyB9XFxyXFxuXFx0dG8geyBvcGFjaXR5OiAxOyB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgcmVnX2lucHV0IHtcXHJcXG5cXHRmcm9tIHsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXHJcXG5cXHQ1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcclxcblxcdHRvIHsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXHJcXG59XFxyXFxuLyogLm1haW4ge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMsIDAuMyk7XFxyXFxuICBhbmltYXRpb24tbmFtZTogbWFpbjtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXHJcXG5cXHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjEsIDAuMSwgMS4wLCAxLjApO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIG1haW4ge1xcclxcblxcdGZyb20geyB0cmFuc2Zvcm06IHNjYWxlKDAuMywgMC4zKTsgfVxcclxcblxcdDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMC43LCAwLjcpOyB9XFxyXFxuXFx0dG8geyB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpOyB9XFxyXFxufSAqL1xcclxcbi5yZWctc2VwYXJhdG9ye1xcclxcbiAgY29sb3I6bGlnaHRncmF5O1xcclxcbiAgZm9udC1zaXplOiAxMztcXHJcXG4gIHBhZGRpbmctdG9wOiAxMjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjA7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyMDtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiB0b2dnbGU7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcclxcblxcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG4uZm9ybS1pbnB1dCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMjA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwO1xcclxcbiAgbWFyZ2luLXRvcDogMTA7XFxyXFxuICBwYWRkaW5nOiAxMDtcXHJcXG4gIHBsYWNlaG9sZGVyLWNvbG9yOnJnYmEoMjA3LCAyMDcsIDIwNywgMC42KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDEsIDI0MSwgMC42KTtcXHJcXG4gIGZvbnQtc2l6ZTogMTQ7XFxyXFxufVxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNTtcXHJcXG59XFxyXFxuLmZvcm0tY29udGFpbmVyLXN1Ym1pdHRlZCB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogbG9naW5fc3VibWl0dGVkO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXHJcXG5cXHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGxvZ2luX3N1Ym1pdHRlZCB7XFxyXFxuXFx0ZnJvbSB7IG9wYWNpdHk6IDEgfVxcclxcbiAgNTAlIHsgb3BhY2l0eTogMC4xIH1cXHJcXG5cXHR0byB7IG9wYWNpdHk6IDEgfVxcclxcbn1cXHJcXG4uZm9ybS1idXR0b24ge1xcclxcbiAgbWFyZ2luOiAyMDtcXHJcXG4gIG1hcmdpbi10b3A6IDI1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjAwO1xcclxcbiAgYmFja2dyb3VuZDogI0MwMzkyQjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmZvcm0tbGFiZWwge1xcclxcbiAgY29sb3I6I2NjYztcXHJcXG4gIG1hcmdpbi10b3A6IC01OyBcXHJcXG59XFxyXFxuLmxvZ2luLWRvbmUge1xcclxcbiAgd2lkdGg6IDEwO1xcclxcbiAgaGVpZ2h0OiAxMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg0ZTRlO1xcclxcbiAgcGFkZGluZzogMTA7XFxyXFxuICB6LWluZGV4OiAxMDAwMDAwO1xcclxcbiAgbWFyZ2luOiAtNTA7XFxyXFxufVxcclxcbi5mb3JnZXRcXHJcXG57XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI0MwMzkyQjtcXHJcXG4gIGZvbnQtc2l6ZTogMTU7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG4uaW5wdXQtZmllbGR7ICAgIFxcclxcbiAgYm9yZGVyLXdpZHRoOiAxO1xcclxcbiAgYm9yZGVyLXN0eWxlOiAnc29saWQnO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjQzAzOTJCO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgICAgXFxyXFxuICBwYWRkaW5nOjEwO1xcclxcbiAgbWFyZ2luLXRvcDoyMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjA7ICAgIFxcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJIb21lXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxyXFxuXFx0PFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiBpb3M6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBhbmRyb2lkOmhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuXFx0XFx0PExhYmVsIHRleHQ9XFxcIk1pbmltYWxpc21cXFwiIGNsYXNzPVxcXCJhY3Rpb24tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0ICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvQWN0aW9uQmFyPlxcclxcblxcclxcblxcclxcbjxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIGNsYXNzPVxcXCJtYWluXFxcIj5cXHJcXG5cXHJcXG5cXHQ8SW1hZ2UgI2xvZ28gd2lkdGg9XFxcIjE0MFxcXCIgY2xhc3M9XFxcInZvZC1sb2dvXFxcIiBzcmM9XFxcIn4vbG9naW4vYXBwbGVsb2dvLnBuZ1xcXCI+PC9JbWFnZT5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgI2NpcmNsZSB3aWR0aD1cXFwiMTAwXFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgY2xhc3M9XFxcImxvZ2luLWRvbmVcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcdDxTdGFja0xheW91dCBbdmlzaWJpbGl0eV09XFxcIm5hdmlnYXRpbmcgPyAnY29sbGFwc2VkJyA6ICd2aXNpYmxlJ1xcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJyZWctbG9nLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0PExhYmVsIHRleHQ9XFxcIkwgTyBHIEkgTlxcXCIgKHRhcCk9XFxcInNldFRvTG9naW4oKVxcXCIgW25nQ2xhc3NdPVxcXCJbaXNMb2dpbiA/ICdyZWctYWN0aXZlJyA6ICdyZWctZGVhY3RpdmUnXVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDwhLS0gPExhYmVsIHRleHQ9XFxcIiB8IFxcXCIgY2xhc3M9XFxcInJlZy1zZXBhcmF0b3JcXFwiPjwvTGFiZWw+IC0tPlxcclxcbiAgICAgICAgPCEtLSA8TGFiZWwgdGV4dD1cXFwiUiBFIEcgSSBTIFQgRSBSXFxcIiAodGFwKT1cXFwic2V0VG9SZWdpc3RlcigpXFxcIiBbbmdDbGFzc109XFxcIlshaXNMb2dpbiA/ICdyZWctYWN0aXZlJyA6ICdyZWctZGVhY3RpdmUnXVxcXCI+PC9MYWJlbD4gLS0+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuICAgXFxyXFxuICAgIDxTdGFja0xheW91dCBbdmlzaWJpbGl0eV09XFxcIm5hdmlnYXRpbmcgPyAnY29sbGFwc2VkJyA6ICd2aXNpYmxlJ1xcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250YWluZXJcXFwiIFtuZ0NsYXNzXT1cXFwiW2Zvcm1TdWJtaXR0ZWQgPyAnZm9ybS1jb250YWluZXItc3VibWl0dGVkJyA6ICdmb3JtLWNvbnRhaW5lciddXFxcIj5cXHJcXG4gICAgICAgIDxUZXh0RmllbGQgIFsobmdNb2RlbCldPVxcXCJwaG9uZU51bWJlclxcXCIgaGludD1cXFwiVmVoaWNsZUlkXFxcIiAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiB0ZXh0QWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiID48L1RleHRGaWVsZD5cXHJcXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvdz1cXFwiMVxcXCIgY29sdW1ucz1cXFwiXFxcXCosIGF1dG9cXFwiPlxcclxcbiAgICAgICAgPFRleHRGaWVsZCBbKG5nTW9kZWwpXT1cXFwicGFzc3dvcmRcXFwiIGhpbnQ9XFxcIlBhc3N3b3JkXFxcIiBjbGFzcz0gXFxcImlucHV0LWZpZWxkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIHRleHRBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgPjwvVGV4dEZpZWxkPlxcclxcbiAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgW3RleHRdPVxcXCJzaG93SGlkZUljb25cXFwiIGNsYXNzPVxcXCJmYSBzaG93LWhpZGUtaWNvbiBmb250LXNpemUtbGdcXFwiICh0YXApPVxcXCJzaG93SGlkZVBhc3N3b3JkKClcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJtaWRkbGVcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuICAgIDwvR3JpZExheW91dD5cXHJcXG5cXHRcXHQ8VGV4dEZpZWxkICNpdGVtIFsobmdNb2RlbCldPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIFt2aXNpYmlsaXR5XT1cXFwiIWlzTG9naW4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1xcXCIgaGludD1cXFwiQ29uZmlybSBQYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0taW5wdXRcXFwiIHRleHRBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9UZXh0RmllbGQ+XFxyXFxuICAgICAgICA8QnV0dG9uICh0b3VjaCk9XFxcIm9uRm9jdXMoJGV2ZW50KVxcXCIgI2J0biB0ZXh0PVxcXCJ7e2xvZ2luVHh0fX1cXFwiICh0YXApPVxcXCJvbkJ1dHRvblRhcCgpXFxcIiBbbnNSb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIiBjbGFzcz1cXFwiZm9ybS1idXR0b25cXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgPGxhYmVsIHRleHQ9XFxcIkZvcmdvdFBhc3N3b3JkXFxcIiAodGFwKT1cXFwib25Gb3JnZXRQYXNzd29yZCgpXFxcIiBzdHlsZT1cXFwiY29sb3I6ICNDMDM5MkI7XFxcIiBjbGFzcz1cXFwiZm9yZ2V0XFxcIj48L2xhYmVsPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgIFxcclxcbiAgICA8IS0tIDxBYnNvbHV0ZUxheW91dCBbdmlzaWJpbGl0eV09XFxcIm5hdmlnYXRpbmcgPyAnY29sbGFwc2VkJyA6ICd2aXNpYmxlJ1xcXCI+XFxyXFxuICAgICAgICA8SW1hZ2UgbGVmdD1cXFwiMjIwXFxcIiB0b3A9XFxcIi0yNVxcXCIgd2lkdGg9XFxcIjE1MFxcXCIgaGVpZ2h0PVxcXCIxNTBcXFwiIHNyYz1cXFwifi9ob21lLzAxLmpwZ1xcXCI+PC9JbWFnZT5cXHJcXG4gICAgPC9BYnNvbHV0ZUxheW91dD4gLS0+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcIml0ZW1cIiwgeyBzdGF0aWM6IHRydWUgfSkgYW5ndWxhckl0ZW06IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImJ0blwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBidG5SZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImNpcmNsZVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBjaXJjbGVSZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImxvZ29cIiwgeyBzdGF0aWM6IHRydWUgfSkgbG9nb1JlZjogRWxlbWVudFJlZjtcbiAgICBpdGVtOiBWaWV3O1xuICAgIGJ0bkl0ZW06IFZpZXc7XG4gICAgY2lyY2xlSXRlbTogVmlldztcbiAgICBsb2dvSXRlbTogVmlldztcblxuICAgIHRleHRGaWVsZFZhbHVlOiBzdHJpbmcgPSBcIlwiO1xuICAgIGlzTG9naW4gPSB0cnVlO1xuICAgIGZvcm1TdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICBuYXZpZ2F0aW5nID0gZmFsc2U7XG4gICAgbG9naW5UeHQgPSBcIkwgbyBnIGkgblwiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLl9wYWdlLm9uKCduYXZpZ2F0aW5nVG8nLCAoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmNpcmNsZUl0ZW0uc2NhbGVYID0gMDtcbiAgICAgICAgdGhpcy5jaXJjbGVJdGVtLnNjYWxlWSA9IDA7XG4gICAgICAgIHRoaXMubmF2aWdhdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvZ29JdGVtLnRyYW5zbGF0ZVkgPSAwO1xuICAgIH0pXG4gICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMuYnRuSXRlbSA9IHRoaXMuYnRuUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5pdGVtID0gdGhpcy5hbmd1bGFySXRlbS5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuY2lyY2xlSXRlbSA9IHRoaXMuY2lyY2xlUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5sb2dvSXRlbSA9IHRoaXMubG9nb1JlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5pdGVtLnNjYWxlWCA9IDA7XG4gICAgdGhpcy5pdGVtLnNjYWxlWSA9IDA7XG4gICAgdGhpcy5jaXJjbGVJdGVtLnNjYWxlWCA9IDA7XG4gICAgdGhpcy5jaXJjbGVJdGVtLnNjYWxlWSA9IDA7XG4gICAgdGhpcy5idG5JdGVtLnRyYW5zbGF0ZVkgPSAtNTA7XG59XG5vbkJ1dHRvblRhcCgpOiB2b2lkIHtcblxuICB0aGlzLmZvcm1TdWJtaXR0ZWQgPSB0cnVlO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgdGhpcy5uYXZpZ2F0aW5nID0gdHJ1ZTtcblxuICAgICAgdGhpcy5sb2dvSXRlbS5hbmltYXRlKHtcbiAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMjAwIH0sXG4gICAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaXJjbGVJdGVtLnRyYW5zbGF0ZVkgPSAyMDA7XG4gICAgICAgICAgdGhpcy5jaXJjbGVJdGVtLmFuaW1hdGUoe1xuICAgICAgICAgICAgICBzY2FsZTogeyB4OiAxNSwgeTogMTUgfSxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgXG4gIH0sIDI1MDApO1xuICBcbn1cblxub25Gb2N1cyhhcmdzOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpIHtcblxuICBpZiAoYXJncy5hY3Rpb24gPT0gXCJkb3duXCIpIHtcbiAgICAgIHRoaXMuYnRuSXRlbS5zY2FsZVggPSAwLjk7XG4gICAgICB0aGlzLmJ0bkl0ZW0uc2NhbGVZID0gMC45O1xuICB9IGVsc2UgaWYgKGFyZ3MuYWN0aW9uID09IFwidXBcIikge1xuICAgICAgdGhpcy5idG5JdGVtLnNjYWxlWCA9IDE7XG4gICAgICB0aGlzLmJ0bkl0ZW0uc2NhbGVZID0gMTtcbiAgfVxuICBcbn1cbnNldFRvTG9naW4oKSB7XG4gIHRoaXMuaXRlbS5hbmltYXRlKHtcbiAgICAgIHNjYWxlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgIGR1cmF0aW9uOiAzMDBcbiAgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmlzTG9naW4gPSB0cnVlO1xuICAgICAgdGhpcy5sb2dpblR4dCA9IFwiTCBvIGcgaSBuXCI7XG4gICAgICB0aGlzLmJ0bkl0ZW0uYW5pbWF0ZSh7XG4gICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IC01MCB9LFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICAgIH0pXG4gIH0pO1xufVxuc2hvd1Bhc3N3b3JkXG5zaG93SGlkZUljb25cbnNob3dJY29uXG5oaWRlSWNvblxuVGV4dEZpZWxkXG5cblxuXG5cbiAgXG5cbn1cbiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmJvZHlcXHJcXG57XFxyXFxuICAgIGZvbnQtc2l6ZTogMzA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmlkXFxyXFxue1xcclxcbiAgICBmb250LXNpemU6IDIwO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHJcXG59XFxyXFxuLm93bmVyXFxyXFxue1xcclxcbiAgICBmb250LXNpemU6IDIwO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLm1vZGVsXFxyXFxue1xcclxcbiAgIFxcclxcbiAgICBmb250LXNpemU6IDIwO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDsgXFxyXFxuXFxyXFxuICAgXFxyXFxufVxcclxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIlZlaGljbGVkZXRhaWxzXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IzFGQUZEOSA7XFxcIj5cXG5cXG48L0FjdGlvbkJhcj5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgPlxcblxcdFxcdDxJbWFnZSAgc3JjPVxcXCJ+L2Fzc2V0cy9wcm9maWxlLnBuZ1xcXCIgYm9yZGVyUmFkaXVzPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjcwXFxcIiB3aWR0aD1cXFwiNzBcXFwiIG1hcmdpblRvcD1cXFwiMTMwXFxcIlxcblxcdFxcdFxcdCBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIj48L0ltYWdlPlxcblxcdDwvU3RhY2theW91dD5cXG48L1N0YWNrTGF5b3V0PlxcblxcbjxTdGFja0xheW91dD5cXG5cXHQ8U3RhY2theW91dCBjbGFzcz1cXFwiYm9keVxcXCI+XFxuXFx0XFx0PExhYmVsIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgY29sb3I9XFxcImJsYWNrXFxcIiBtYXJnaW5Ub3A9XFxcIjIwMFxcXCIgdGV4dD1cXFwiVmVoaWNsZSBEZXRhaWxzXFxcIj5cXG5cXHRcXHQ8L0xhYmVsPlxcblxcdDwvU3RhY2theW91dD5cXG48L1N0YWNrTGF5b3V0PlxcblxcbjxTdGFja0xheW91dD5cXG5cXHQ8U3RhY2theW91dCBjbGFzcz1cXFwiaWRcXFwiPlxcblxcdFxcdDxMYWJlbCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIGNvbG9yPVxcXCIjODE4NDg1XFxcIiBtYXJnaW5Ub3A9XFxcIjMwMFxcXCIgdGV4dD1cXFwiVmVoaWNsZSBJZDp7QTFERFoyMUZ9XFxcIj5cXG5cXHRcXHQ8L0xhYmVsPlxcblxcdDwvU3RhY2theW91dD5cXG48L1N0YWNrTGF5b3V0PlxcblxcbjxTdGFja0xheW91dD5cXG5cXHQ8U3RhY2theW91dCBjbGFzcz1cXFwibW9kZWxcXFwiPlxcblxcdFxcdDxMYWJlbCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIGNvbG9yPVxcXCIjODE4NDg1XFxcIiBtYXJnaW5Ub3A9XFxcIjM0MFxcXCIgdGV4dD1cXFwiVmVoaWNsZSBNb2RlbDp7QTFERFoyMUZ9XFxcIj5cXG5cXHRcXHQ8L0xhYmVsPlxcblxcdDwvU3RhY2theW91dD5cXG48L1N0YWNrTGF5b3V0PlxcblxcbjxTdGFja0xheW91dD5cXG5cXHQ8U3RhY2theW91dCBjbGFzcz1cXFwib3duZXJcXFwiPlxcblxcdFxcdDxMYWJlbCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIGNvbG9yPVxcXCIjODE4NDg1XFxcIiBtYXJnaW5Ub3A9XFxcIjM4MFxcXCIgdGV4dD1cXFwiT3duZXIgTmFtZTp7U2F1cmF2fVxcXCI+XFxuXFx0XFx0PC9MYWJlbD5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXZlaGljbGVkZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZlaGljbGVkZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmVoaWNsZWRldGFpbHMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFZlaGljbGVkZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgXG4gIFxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9