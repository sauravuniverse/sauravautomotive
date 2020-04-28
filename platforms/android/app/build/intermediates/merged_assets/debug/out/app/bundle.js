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
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_11__["NativeScriptCommonModule"]
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

module.exports = "<ActionBar title=\"Home\" class=\"action-bar\">\r\n\t<StackLayout orientation=\"horizontal\" ios:horizontalAlignment=\"center\" android:horizontalAlignment=\"center\">\r\n\t\t<Label text=\"Minimalism\" class=\"action-label\"></Label>\r\n\t  </StackLayout>\r\n</ActionBar>\r\n\r\n\r\n<StackLayout orientation=\"vertical\" class=\"main\">\r\n\r\n\t<Image #logo width=\"140\" class=\"vod-logo\" src=\"~/login/applelogo.png\"></Image>\r\n\t<StackLayout #circle width=\"100\" height=\"100\" class=\"login-done\" orientation=\"horizontal\"></StackLayout>\r\n\r\n\t<StackLayout [visibility]=\"navigating ? 'collapsed' : 'visible'\" orientation=\"horizontal\" class=\"reg-log-container\">\r\n\t\t<Label text=\"L O G I N\" (tap)=\"setToLogin()\" [ngClass]=\"[isLogin ? 'reg-active' : 'reg-deactive']\"></Label>\r\n      \r\n    </StackLayout>\r\n\r\n   \r\n    <StackLayout [visibility]=\"navigating ? 'collapsed' : 'visible'\" orientation=\"vertical\" class=\"form-container\" [ngClass]=\"[formSubmitted ? 'form-container-submitted' : 'form-container']\">\r\n        <TextField  [(ngModel)]=\"phoneNumber\" hint=\"VehicleId\"  class=\"input-field\" textAlignment=\"center\" ></TextField>\r\n\t\t<TextField [(ngModel)]=\"password\" hint=\"Password\" class= \"input-field\" secure=\"true\" textAlignment=\"center\" ></TextField>\r\n\t\t<TextField #item [(ngModel)]=\"confirmPassword\" [visibility]=\"!isLogin ? 'visible' : 'hidden'\" hint=\"Confirm Password\" class=\"form-input\" textAlignment=\"center\"></TextField>\r\n        <Button (touch)=\"onFocus($event)\" #btn text=\"{{loginTxt}}\" (tap)=\"onButtonTap()\" [nsRouterLink]=\"['/home']\" class=\"form-button\"></Button>\r\n        <label text=\"ForgotPassword\" (tap)=\"onForgetPassword()\" style=\"color: #C0392B;\" class=\"forget\"></label>\r\n    </StackLayout>\r\n   \r\n</StackLayout>"

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
            // icon: 'res://cool_marker', // preferred way, otherwise use:
            // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
            onTap: function (marker) { return console.log("Marker tapped with title: '" + marker.title + "'"); },
            onCalloutTap: function (marker) {
                _this.directions.navigate({
                    to: {
                        address: "patna"
                    }
                    // for iOS-specific options, see the TypeScript example below.
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

module.exports = "<ActionBar title=\"UpadtePassword\" class=\"action-bar\" style=\"background-color:#1FAFD9 ;\">\n</ActionBar>\n<GridLayout backgroundColor= \"#CCCCCC\"  class=\"body scf-card animate-bounceInLeft-delay-0ms\">\n  <ScrollView>\n      <StackLayout margin=\"10\" verticalAlignment=\"center\">\n          <StackLayout class=\"form\" padding=\"15\" backgroundColor=\"#FFFFFF\">\n              \n              <StackLayout class=\"input-field\">\n                  <Label text=\"NewPassword\" class=\"label font-weight-bold m-b-5\"></Label>\n                  <TextField class=\"input\" [(ngModel)]=\"password\" secure=\"true\"></TextField>\n                  <StackLayout class=\"hr-light\"></StackLayout>\n              </StackLayout>\n              <StackLayout class=\"input-field\">\n                  <Label text=\"ReEnterPassword\" class=\"label font-weight-bold m-b-5\"></Label>\n                  <TextField  class=\"input\" [(ngModel)]=\"Repassword\" secure=\"true\"></TextField>\n                  <StackLayout class=\"hr-light\"></StackLayout>\n\n              </StackLayout>\n              <Button class=\"btn btn-primary w-full\"  text=\"Submit\"   (tap)=\"validate()\"></Button>\n          </StackLayout>\n      </StackLayout>\n  </ScrollView>\n</GridLayout>  "

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL21hcC9tYXAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9tYXAvbWFwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL21hcC9tYXAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3VwZGF0ZXBhc3N3b3JkL3VwZGF0ZXBhc3N3b3JkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3VwZGF0ZXBhc3N3b3JkL3VwZGF0ZXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3VwZGF0ZXBhc3N3b3JkL3VwZGF0ZXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi92ZWhpY2xlZGV0YWlscy92ZWhpY2xlZGV0YWlscy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3ZlaGljbGVkZXRhaWxzL3ZlaGljbGVkZXRhaWxzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3ZlaGljbGVkZXRhaWxzL3ZlaGljbGVkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSx5RTs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUNwQjtBQUNFO0FBQzJCO0FBRUk7QUFDakM7QUFFbkQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGtFQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxxRUFBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxnR0FBdUIsRUFBRTtJQUM5RCxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsZ0dBQXVCLEVBQUU7SUFDOUQsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSwrREFBWSxFQUFFO0NBQzNDLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ3ZCN0IsNGhDQUE0aEMsNFRBQTRULGtTQUFrUyx5VEFBeVQsdWE7Ozs7Ozs7O0FDQW43RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkQ7QUFDMUI7QUFDNEI7QUFDMEM7QUFNekc7SUFHSSxzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEQsb0RBQW9EO0lBQ3hELENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksaUZBQXNCLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsc0JBQUksOENBQW9CO2FBQXhCO1lBQ0ksT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFDRCwwQ0FBbUIsR0FBbkI7UUFFSSxJQUFNLFVBQVUsR0FBa0IsdURBQWUsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxXQUFXLEVBQUU7SUFDNUIsQ0FBQztJQUVGLCtCQUFRLEdBQVI7UUFFSyxJQUFNLFVBQVUsR0FBa0IsdURBQWUsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxXQUFXLEVBQUU7SUFDNUIsQ0FBQztJQUNELHVDQUFnQixHQUFoQjtRQUVJLElBQU0sVUFBVSxHQUFrQix1REFBZSxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFdBQVcsRUFBRTtJQUM1QixDQUFDO0lBQ0QsaUNBQVUsR0FBVjtRQUdJLElBQU0sVUFBVSxHQUFrQix1REFBZSxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFdBQVcsRUFBRTtJQUM1QixDQUFDOztnQkFoQ3FDLDRFQUFnQjs7SUFIN0MsWUFBWTtRQUp4QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsOEVBQWlDO1NBQ3BDLENBQUM7eUNBSXdDLDRFQUFnQjtPQUg3QyxZQUFZLENBc0N4QjtJQUFELG1CQUFDO0NBQUE7QUF0Q3dCOzs7Ozs7OztBQ1R6Qix5SEFBMkUsbUJBQU8sQ0FBQyxzSUFBb0c7QUFDdkwsMEVBQTBFLG1CQUFPLENBQUMsc0lBQW9HLEdBQUcsa0JBQWtCLGtDQUFrQyxVQUFVLHlFQUF5RSxFQUFFLG1EQUFtRCx3RUFBd0UsRUFBRSxFQUFFLDREQUE0RCx3REFBd0QsRUFBRSxFQUFFLCtFQUErRSwwREFBMEQsRUFBRSx5REFBeUQsRUFBRSxrRUFBa0UsRUFBRSxvRUFBb0UsRUFBRSxFQUFFLHdFQUF3RSx5REFBeUQsRUFBRSwrREFBK0QsRUFBRSxvRUFBb0UsRUFBRSwwREFBMEQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLDJEQUEyRCwrREFBK0QsRUFBRSxFQUFFLGtHQUFrRywwREFBMEQsRUFBRSxFQUFFLDJFQUEyRSxxRUFBcUUsRUFBRSxFQUFFLG9HQUFvRyx3REFBd0QsRUFBRSxzREFBc0QsRUFBRSxxREFBcUQsRUFBRSx5REFBeUQsRUFBRSxzREFBc0QsRUFBRSw0REFBNEQsRUFBRSwwREFBMEQsRUFBRSxFQUFFLHFGQUFxRix3RUFBd0UsRUFBRSxFQUFFLDhFQUE4RSxxRUFBcUUsRUFBRSxFQUFFLHVHQUF1Ryx1REFBdUQsRUFBRSxFQUFFLCtFQUErRSxrRUFBa0UsRUFBRSxFQUFFLHFHQUFxRyw0REFBNEQsRUFBRSxFQUFFLDJHQUEyRyxrRUFBa0UsRUFBRSwwREFBMEQsRUFBRSxFQUFFLHlHQUF5RyxxREFBcUQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLDhHQUE4RyxxRUFBcUUsRUFBRSxFQUFFLG9IQUFvSCwwREFBMEQsRUFBRTtBQUN0d0gsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFLFNBQVM7QUFDVDs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtGO0FBQ0o7QUFDTTtBQUU1QjtBQUNUO0FBRWdCO0FBQ1Q7QUFDRztBQUMyQjtBQUNBO0FBQ2Y7QUFDRTtBQUNwQjtBQTBCbkQ7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXhCckIsOERBQVEsQ0FBQztZQUNQLFNBQVMsRUFBRTtnQkFDUiwyREFBWTthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNOLG9FQUFnQjtnQkFDaEIsMkZBQWtCO2dCQUNsQixpR0FBOEI7Z0JBQzlCLDJFQUFpQjtnQkFDakIsbUZBQXVCO2dCQUN2QixxRkFBd0I7YUFDMUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1gsMkRBQVk7Z0JBQ1osa0VBQWE7Z0JBQ2IscUVBQWM7Z0JBQ2QsZ0dBQXVCO2dCQUN2QixnR0FBdUI7Z0JBQ3ZCLGdFQUFZO2FBQ2Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ04sOERBQWdCO2FBQ2xCO1NBQ0gsQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7O0FDeEN0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0NBQ3pDLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Q5Qiw0QkFBNEIsc0JBQXNCLDBCQUEwQixhQUFhLFlBQVksc0JBQXNCLDBCQUEwQixTQUFTLGVBQWUsc0JBQXNCLDBCQUEwQixLQUFLLGVBQWUsNkJBQTZCLDBCQUEwQixpQkFBaUIsYTs7Ozs7OztBQ0F6VCxvR0FBb0cseW9CQUF5b0IsU0FBUyxnTUFBZ00sU0FBUyw2TEFBNkwsT0FBTyxtRDs7Ozs7Ozs7QUNBbm9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDZjtBQVVuQztJQUVJO1FBQ0kscURBQXFEO0lBQ3pELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsdURBQWUsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBYlEsYUFBYTtRQVB6QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFFaEIsb0ZBQW9DOztTQUd2QyxDQUFDOztPQUNXLGFBQWEsQ0FjekI7SUFBRCxvQkFBQztDQUFBO0FBZHlCOzs7Ozs7OztBQ1gxQiw2QkFBNkIsaUNBQWlDLHVCQUF1QixLQUFLLG1CQUFtQixvQkFBb0IsS0FBSyxlQUFlLHFCQUFxQixLQUFLLHdCQUF3QixxQkFBcUIsa0JBQWtCLEtBQUssaUJBQWlCLG9CQUFvQixzQkFBc0IsbURBQW1ELDZCQUE2Qix5QkFBeUIsNkJBQTZCLCtCQUErQixvQ0FBb0MsS0FBSyxzQkFBc0IsZ0NBQWdDLDZCQUE2QixvQ0FBb0MsS0FBSyxrQkFBa0Isc0JBQXNCLG9CQUFvQixzQkFBc0IsNkJBQTZCLCtCQUErQixvQ0FBb0Msa0VBQWtFLFdBQVcsdUJBQXVCLFlBQVksYUFBYSxXQUFXLGNBQWMsRUFBRSxVQUFVLFlBQVksRUFBRSxLQUFLLDBCQUEwQixZQUFZLHlCQUF5QixFQUFFLFdBQVcseUJBQXlCLEVBQUUsVUFBVSx5QkFBeUIsRUFBRSxLQUFLLGNBQWMsaUNBQWlDLDJCQUEyQiwrQkFBK0Isb0NBQW9DLGtFQUFrRSxLQUFLLHFCQUFxQixZQUFZLDRCQUE0QixFQUFFLFdBQVcsNEJBQTRCLEVBQUUsVUFBVSx3QkFBd0IsRUFBRSxLQUFLLHNCQUFzQixzQkFBc0Isb0JBQW9CLHNCQUFzQix1QkFBdUIsd0JBQXdCLDZCQUE2Qiw2QkFBNkIsb0NBQW9DLEtBQUssaUJBQWlCLHNCQUFzQix1QkFBdUIscUJBQXFCLGtCQUFrQixpREFBaUQsaURBQWlELG9CQUFvQixLQUFLLHFCQUFxQixxQkFBcUIsS0FBSywrQkFBK0Isc0NBQXNDLDZCQUE2QixvQ0FBb0MsMENBQTBDLEtBQUssZ0NBQWdDLFlBQVksYUFBYSxXQUFXLGVBQWUsVUFBVSxhQUFhLEtBQUssa0JBQWtCLGlCQUFpQixxQkFBcUIseUJBQXlCLDBCQUEwQixtQkFBbUIsS0FBSyxpQkFBaUIsaUJBQWlCLHFCQUFxQixNQUFNLGlCQUFpQixnQkFBZ0IsaUJBQWlCLDBCQUEwQixnQ0FBZ0Msa0JBQWtCLHVCQUF1QixrQkFBa0IsS0FBSyxnQkFBZ0IseUJBQXlCLHFCQUFxQixvQkFBb0IsdUJBQXVCLEtBQUssaUJBQWlCLDBCQUEwQiw0QkFBNEIsNEJBQTRCLDBCQUEwQixxQkFBcUIsb0JBQW9CLHNCQUFzQix1QkFBdUIsU0FBUyxDOzs7Ozs7O0FDQXQ2RixvakRBQW9qRCxVQUFVLHNMQUFzTCw0RTs7Ozs7Ozs7QUNDcHZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlFO0FBQzFDO0FBR2dDO0FBTy9EO0lBZ0JFLHdCQUFvQixLQUFXLEVBQVUsZ0JBQWtDO1FBQXZELFVBQUssR0FBTCxLQUFLLENBQU07UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTnpFLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGFBQVEsR0FBRyxXQUFXLENBQUM7SUFFc0QsQ0FBQztJQUVoRixpQ0FBUSxHQUFSO1FBQUEsaUJBbUJEO1FBakJHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFDLElBQUk7WUFDL0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFFM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvQ0FBVyxHQUFYO1FBQUEsaUJBcUJDO1FBbkJDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLFVBQVUsQ0FBQztZQUVQLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBRXZCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUNsQixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7Z0JBQzNCLFFBQVEsRUFBRSxHQUFHO2FBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ0osS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztvQkFDcEIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO29CQUN2QixRQUFRLEVBQUUsR0FBRztpQkFFaEIsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxJQUEyQjtRQUVqQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDN0I7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDM0I7SUFFSCxDQUFDO0lBQ0QsbUNBQVUsR0FBVjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDZCxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckIsUUFBUSxFQUFFLEdBQUc7U0FDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUNqQixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0IsUUFBUSxFQUFFLEdBQUc7YUFDaEIsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBcEU0Qiw0Q0FBSTtnQkFBNEIsNEVBQWdCOztJQWZ0QztRQUFwQywrREFBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBYyx3REFBVTt1REFBQztJQUN2QjtRQUFuQywrREFBUyxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBUyx3REFBVTtrREFBQztJQUNoQjtRQUF0QywrREFBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBWSx3REFBVTtxREFBQztJQUN4QjtRQUFwQywrREFBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBVSx3REFBVTttREFBQztJQUpoRCxjQUFjO1FBTDFCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixzRkFBcUM7O1NBRXRDLENBQUM7eUNBaUIyQiw0Q0FBSSxFQUE0Qiw0RUFBZ0I7T0FoQmhFLGNBQWMsQ0FnRzFCO0lBQUQscUJBQUM7Q0FBQTtBQWhHMEI7Ozs7Ozs7Ozs7Ozs7OztBQ1YzQixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QjtBQUNqQiwrREFBeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHpELHVDQUF1QyxtQkFBbUIsS0FBSyxDOzs7Ozs7O0FDQS9ELG1HQUFtRyw4dEI7Ozs7Ozs7O0FDQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ3NCO0FBTXRCO0FBQ2xELDZGQUFlLENBQUMsUUFBUSxFQUFFLGNBQU0sMEJBQU8sQ0FBQywrQ0FBcUIsQ0FBQyxDQUFDLFVBQVUsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBUzNFO0lBSUU7UUFFRSxJQUFJLENBQUMsVUFBVSxHQUFDLElBQUksa0VBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsK0JBQVEsR0FBUjtJQUdBLENBQUM7SUFDRCxpQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUVWLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUUxQixDQUFDO0lBQ0QsZ0NBQVMsR0FBVDtRQUFBLGlCQWdDQztRQTlCRyxJQUFNLFdBQVcsR0FBaUI7WUFDbEMsRUFBRSxFQUFFLENBQUM7WUFDTCxHQUFHLEVBQUUsT0FBTztZQUNaLEdBQUcsRUFBRSxPQUFPO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyw4REFBOEQ7WUFDN0QsOEdBQThHO1lBQy9HLEtBQUssRUFBRSxnQkFBTSxJQUFJLGNBQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsRUFBL0QsQ0FBK0Q7WUFDaEYsWUFBWSxFQUFFLGdCQUFNO2dCQUNuQixLQUFJLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztvQkFDdkIsRUFBRSxFQUFFO3dCQUNGLE9BQU8sRUFBRSxPQUFPO3FCQUNqQjtvQkFDRCw4REFBOEQ7aUJBQy9ELENBQUMsQ0FBQyxJQUFJLENBQ0w7b0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLEVBQ0QsVUFBUyxLQUFLO29CQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsQ0FDRixDQUFDO1lBQ0osQ0FBQztTQUNGLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNwQixXQUFXO1NBRVosQ0FBQztJQUNKLENBQUM7SUFDRSxvQ0FBYSxHQUFiO1FBRUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDekIsOEJBQThCO1lBQzlCLE1BQU0sRUFBRTtnQkFDSixHQUFHLEVBQUUsT0FBTztnQkFDWixHQUFHLEVBQUUsT0FBTzthQUNmO1lBQ0QsUUFBUSxFQUFDLElBQUk7WUFDYiw0QkFBNEI7WUFDNUIsa0RBQWtEO1lBQ2xELGlFQUFpRTtZQUNqRSxZQUFZO1lBQ1osaURBQWlEO1NBQ2xELENBQUM7SUFDSCxDQUFDO0lBbEVPLFlBQVk7UUFMeEIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLGtGQUFtQzs7U0FFcEMsQ0FBQzs7T0FDVyxZQUFZLENBb0V4QjtJQUFELG1CQUFDO0NBQUE7QUFwRXdCOzs7Ozs7Ozs7Ozs7Ozs7QUNqQnpCLDZHQUE2Ryx5cEM7Ozs7Ozs7QUNBN0csbUI7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNBO0FBVWxEO0lBRUU7SUFBZ0IsQ0FBQztJQUVqQiwwQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQVFELDBDQUFRLEdBQVI7UUFFQyxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUcsSUFBSSxDQUFDLFVBQVUsRUFDbEM7WUFDRyx5RUFBSyxDQUFDLHVCQUF1QixDQUFDO1NBQ2hDO0lBTUosQ0FBQztJQXhCWSx1QkFBdUI7UUFMbkMsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsd0dBQThDOztTQUUvQyxDQUFDOztPQUNXLHVCQUF1QixDQXlCbkM7SUFBRCw4QkFBQztDQUFBO0FBekJtQzs7Ozs7Ozs7QUNYcEMsNEJBQTRCLHNCQUFzQiwwQkFBMEIsYUFBYSxZQUFZLHNCQUFzQiwwQkFBMEIsU0FBUyxlQUFlLHNCQUFzQiwwQkFBMEIsS0FBSyxlQUFlLDZCQUE2QiwwQkFBMEIsaUJBQWlCLEs7Ozs7Ozs7QUNBelQsNkdBQTZHLDhpQkFBOGlCLFNBQVMsZ01BQWdNLFNBQVMsNkxBQTZMLE9BQU8sbUQ7Ozs7Ozs7O0FDQWpqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ2E7QUFPL0Q7SUFFRSxpQ0FBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBSSxDQUFDO0lBRWpELDBDQUFRLEdBQVI7SUFDQSxDQUFDOztnQkFIMkIsNEVBQWdCOztJQUZqQyx1QkFBdUI7UUFMbkMsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsd0dBQThDOztTQUUvQyxDQUFDO3lDQUc0Qiw0RUFBZ0I7T0FGakMsdUJBQXVCLENBU25DO0lBQUQsOEJBQUM7Q0FBQTtBQVRtQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnR7SG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIlxuaW1wb3J0e0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIlxuaW1wb3J0e1ZlaGljbGVkZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi92ZWhpY2xlZGV0YWlscy92ZWhpY2xlZGV0YWlscy5jb21wb25lbnRcIlxuaW1wb3J0IHsgZnJvbSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBVcGRhdGVwYXNzd29yZENvbXBvbmVudCB9IGZyb20gXCIuL3VwZGF0ZXBhc3N3b3JkL3VwZGF0ZXBhc3N3b3JkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSBcIi4vbWFwL21hcC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sb2dpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwidmVoaWNsZWRldGFpbHNcIiwgY29tcG9uZW50OiBWZWhpY2xlZGV0YWlsc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJ1cGRhdGVwYXNzd29yZFwiLCBjb21wb25lbnQ6IFVwZGF0ZXBhc3N3b3JkQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcIm1hcFwiLCBjb21wb25lbnQ6IE1hcENvbXBvbmVudCB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tXFxuUmFkU2lkZURyYXdlciBpcyBhIFVJIGNvbXBvbmVudCBwYXJ0IG9mIHRoZSBQcm9ncmVzcyBOYXRpdmVTY3JpcHQgVUkgc2V0IG9mIGNvbXBvbmVudHMuXFxuTGVhcm4gbW9yZSBhYm91dCB0aGUgUmFkU2lkZURyYXdlciBVSSBjb21wb25lbnQgYW5kIGhvdyBpdCBjYW4gYmUgY3VzdG9taXplZCBpbiB0aGlzIGRvY3VtZW50YXRpb24gYXJ0aWNsZTpcXG5odHRwOi8vZG9jcy50ZWxlcmlrLmNvbS9kZXZ0b29scy9uYXRpdmVzY3JpcHQtdWkvQ29udHJvbHMvTmF0aXZlU2NyaXB0L1NpZGVEcmF3ZXIvZ2V0dGluZy1zdGFydGVkXFxuLS0+XFxuPFJhZFNpZGVEcmF3ZXIgW2RyYXdlclRyYW5zaXRpb25dPVxcXCJzaWRlRHJhd2VyVHJhbnNpdGlvblxcXCI+XFxuXFx0PEdyaWRMYXlvdXQgdGtEcmF3ZXJDb250ZW50IHJvd3M9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyIHNpZGVkcmF3ZXItbGVmdFxcXCI+XFxuXFx0XFx0PFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItaGVhZGVyXFxcIj5cXG5cXG5cXHRcXHRcXHQ8SW1hZ2Ugc3JjPVxcXCJ+L2Fzc2V0cy9mYWNlNC5qcGdcXFwiIGJvcmRlclJhZGl1cz1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCI2MFxcXCIgd2lkdGg9XFxcIjYwXFxcIiBtYXJnaW5yaWdodD1cXFwiMjBcXFwiXFxuXFx0XFx0XFx0XFx0c3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG5cXHRcXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kXFxcIiB0ZXh0PVxcXCJTYXVyYXYgQW5hbmRcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0PExhYmVsIGNsYXNzPVxcXCJmb290bm90ZVxcXCIgdGV4dD1cXFwic2F1cmF2a3VtYXIyODE5QG1haWwuY29tXFxcIj48L0xhYmVsPlxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxuXFxuXFx0XFx0PFNjcm9sbFZpZXcgcm93PVxcXCIxXFxcIj5cXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNpZGVkcmF3ZXItY29udGVudFxcXCI+XFxuXFx0XFx0XFx0XFx0PEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItbGlzdC1pdGVtXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMWI5O1xcXCIgY2xhc3M9XFxcImZhIFxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJWZWhpY2xlRGV0YWlsc1xcXCIgKHRhcCk9XFxcImNsaWNrdmVoaWNsZWRldGFpbHMoKVxcXCIgIFtuc1JvdXRlckxpbmtdPVxcXCJbJ3ZlaGljbGVkZXRhaWxzJ11cXFwiIGNsYXNzPVxcXCJwLXItMTBcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0XFx0PC9HcmlkTGF5b3V0PlxcblxcblxcdFxcdFxcdFxcdDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjA0MTtcXFwiIGNsYXNzPVxcXCJmYVxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJNYXBcXFwiICh0YXApPVxcXCJvbk1hcFJlYWR5KClcXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJ21hcCddXFxcImNsYXNzPVxcXCJwLXItMTBcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0XFx0PC9HcmlkTGF5b3V0PlxcblxcdFxcdFxcdFxcdFxcblxcdFxcdFxcdFxcdDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjAyMztcXFwiIGNsYXNzPVxcXCJmYVxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJVcGRhdGVQYXNzd29yZFxcXCIgICh0YXApPVxcXCJvbnVwZGF0ZXBhc3N3b3JkKClcXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJ3VwZGF0ZXBhc3N3b3JkJ11cXFwiICBjbGFzcz1cXFwicC1yLTEwXFxcIj48L0xhYmVsPlxcblxcdFxcdFxcdFxcdDwvR3JpZExheW91dD5cXG5cXG5cXHRcXHRcXHRcXHQ8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiPlxcblxcdFxcdFxcdFxcdFxcdDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYwOGI7XFxcIiBjbGFzcz1cXFwiZmFcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiTG9nb3V0XFxcIiAodGFwKT1cXFwib25sb2dvdXQoKVxcXCIgW2NsZWFySGlzdG9yeV09XFxcInRydWVcXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJ2xvZ2luJ11cXFwiIGNsYXNzPVxcXCJwLXItMTBcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0XFx0PC9HcmlkTGF5b3V0PlxcblxcblxcblxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuXFxuXFxuXFx0XFx0XFx0PC9TdGFja0xheW91dD5cXG5cXHRcXHQ8L1Njcm9sbFZpZXc+XFxuXFx0PC9HcmlkTGF5b3V0PlxcblxcblxcdDxwYWdlLXJvdXRlci1vdXRsZXQgdGtNYWluQ29udGVudCBjbGFzcz1cXFwicGFnZSBwYWdlLWNvbnRlbnRcXFwiPjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcbjwvUmFkU2lkZURyYXdlcj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBSYWRTaWRlRHJhd2VyLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG4gICAgY2xpY2t2ZWhpY2xlZGV0YWlscygpXG4gICAge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKVxuICAgIH1cblxuICAgb25sb2dvdXQoKVxuICAgIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKClcbiAgICB9XG4gICAgb251cGRhdGVwYXNzd29yZCgpXG4gICAge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKVxuICAgIH1cbiAgICBvbk1hcFJlYWR5KClcbiAgICB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKVxuICAgIH1cblxuICAgIFxufVxuIiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzJ1wifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJGb250QXdlc29tZVxcXCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYW5kcm9pZC1sYmxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2UtY29udGVudCAucGFnZS1wbGFjZWhvbGRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0Q3RDdEN1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2UtY29udGVudCAucGFnZS1pY29uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiNzJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcInRvcFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNEN0Q3RDdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMjAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiLTEwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uXCIsXCIuc2lkZWRyYXdlci1saXN0LWl0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMjI3MzRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlci5zaWRlZHJhd2VyLWxlZnRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzFGQUZEOVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItaW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiNjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIuc2lkZWRyYXdlci1sZWZ0IC5mb290bm90ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItaGVhZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxRkFGRDlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1oZWFkZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMjI3MzRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1jb250ZW50IC5zaWRlZHJhd2VyLWxpc3QtaXRlbSAuZmFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1jb250ZW50IC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5zZWxlY3RlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjRjhGOEY4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW0uc2VsZWN0ZWQgTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMxRkFGRDlcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmVoaWNsZWRldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3ZlaGljbGVkZXRhaWxzL3ZlaGljbGVkZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcGRhdGVwYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vdXBkYXRlcGFzc3dvcmQvdXBkYXRlcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC9tYXAuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgIGJvb3RzdHJhcDogW1xuICAgICAgQXBwQ29tcG9uZW50XG4gICBdLFxuICAgaW1wb3J0czogW1xuICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGVcbiAgIF0sXG4gICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgIFZlaGljbGVkZXRhaWxzQ29tcG9uZW50LFxuICAgICAgVXBkYXRlcGFzc3dvcmRDb21wb25lbnQsXG4gICAgICBNYXBDb21wb25lbnRcbiAgIF0sXG4gICBzY2hlbWFzOiBbXG4gICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuYm9keVxcclxcbntcXHJcXG4gICAgZm9udC1zaXplOiAzMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4uaWRcXHJcXG57XFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcclxcbn1cXHJcXG4ub3duZXJcXHJcXG57XFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ubW9kZWxcXHJcXG57XFxyXFxuICAgXFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcXHJcXG5cXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiVGl0bGVcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojMUZBRkQ5IDtcXFwiPlxcblxcdDxOYXZpZ2F0aW9uQnV0dG9uIGljb249XFxcInJlczovL21lbnVcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPFN0YWNrTGF5b3V0PlxcblxcdDxTdGFja2F5b3V0ID5cXG5cXHRcXHQ8SW1hZ2UgIHNyYz1cXFwifi9hc3NldHMvcHJvZmlsZS5wbmdcXFwiIGJvcmRlclJhZGl1cz1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCI3MFxcXCIgd2lkdGg9XFxcIjcwXFxcIiBtYXJnaW5Ub3A9XFxcIjEzMFxcXCJcXG5cXHRcXHRcXHQgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgY2xhc3M9XFxcImJvZHlcXFwiPlxcblxcdFxcdDxMYWJlbCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIGNvbG9yPVxcXCJibGFja1xcXCIgbWFyZ2luVG9wPVxcXCIyMDBcXFwiIHRleHQ9XFxcIlZlaGljbGUgRGV0YWlsc1xcXCI+XFxuXFx0XFx0PC9MYWJlbD5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgY2xhc3M9XFxcImlkXFxcIj5cXG5cXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBjb2xvcj1cXFwiIzgxODQ4NVxcXCIgbWFyZ2luVG9wPVxcXCIzMDBcXFwiIHRleHQ9XFxcIlZlaGljbGUgSWQ6e0ExRERaMjFGfVxcXCI+XFxuXFx0XFx0PC9MYWJlbD5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgY2xhc3M9XFxcIm1vZGVsXFxcIj5cXG5cXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBjb2xvcj1cXFwiIzgxODQ4NVxcXCIgbWFyZ2luVG9wPVxcXCIzNDBcXFwiIHRleHQ9XFxcIlZlaGljbGUgTW9kZWw6e0ExRERaMjFGfVxcXCI+XFxuXFx0XFx0PC9MYWJlbD5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgY2xhc3M9XFxcIm93bmVyXFxcIj5cXG5cXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBjb2xvcj1cXFwiIzgxODQ4NVxcXCIgbWFyZ2luVG9wPVxcXCIzODBcXFwiIHRleHQ9XFxcIk93bmVyIE5hbWU6e1NhdXJhdn1cXFwiPlxcblxcdFxcdDwvTGFiZWw+XFxuXFx0PC9TdGFja2F5b3V0PlxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG5cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIkFjdGlvbkJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICB3aGl0ZTtcXHJcXG4gICAgY29sb3I6ICNmZjY3Njc7XFxyXFxufVxcclxcbi5hY3Rpb24tbGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxNjtcXHJcXG59XFxyXFxuLnZvZC1sb2dvIHtcXHJcXG4gIG1hcmdpbi10b3A6IDMwO1xcclxcbn1cXHJcXG4ucmVnLWxvZy1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogNDA7XFxyXFxuICBwYWRkaW5nOiAyMDtcXHJcXG59XFxyXFxuLnJlZy1hY3RpdmUge1xcclxcbiAgZm9udC1zaXplOiAyMDtcXHJcXG4gIGNvbG9yOmxpZ2h0Z3JheTtcXHJcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAwLCAzNCwgMC42NDQpO1xcclxcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMDtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiB0b2dnbGU7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuXFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcbnJlZy1hY3RpdmUtaW5wdXQge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHJlZ19pbnB1dDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuXFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcbi5yZWctZGVhY3RpdmV7XFxyXFxuICBjb2xvcjpsaWdodGdyYXk7XFxyXFxuICBmb250LXNpemU6IDExO1xcclxcbiAgcGFkZGluZy10b3A6IDEyO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHRvZ2dsZTtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXHJcXG5cXHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjEsIDAuMSwgMS4wLCAxLjApO1xcclxcbiAgXFxyXFxufVxcclxcbkBrZXlmcmFtZXMgdG9nZ2xlIHtcXHJcXG5cXHRmcm9tIHsgb3BhY2l0eTogMDt9XFxyXFxuICA1MCUgeyBvcGFjaXR5OiAwLjU7IH1cXHJcXG5cXHR0byB7IG9wYWNpdHk6IDE7IH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyByZWdfaW5wdXQge1xcclxcblxcdGZyb20geyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcclxcblxcdDUwJSB7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxyXFxuXFx0dG8geyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcclxcbn1cXHJcXG4vKiAubWFpbiB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMywgMC4zKTtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBtYWluO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcclxcblxcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMSwgMC4xLCAxLjAsIDEuMCk7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgbWFpbiB7XFxyXFxuXFx0ZnJvbSB7IHRyYW5zZm9ybTogc2NhbGUoMC4zLCAwLjMpOyB9XFxyXFxuXFx0NTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7IH1cXHJcXG5cXHR0byB7IHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7IH1cXHJcXG59ICovXFxyXFxuLnJlZy1zZXBhcmF0b3J7XFxyXFxuICBjb2xvcjpsaWdodGdyYXk7XFxyXFxuICBmb250LXNpemU6IDEzO1xcclxcbiAgcGFkZGluZy10b3A6IDEyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDIwO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHRvZ2dsZTtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxyXFxuXFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcbi5mb3JtLWlucHV0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjA7XFxyXFxuICBtYXJnaW4tdG9wOiAxMDtcXHJcXG4gIHBhZGRpbmc6IDEwO1xcclxcbiAgcGxhY2Vob2xkZXItY29sb3I6cmdiYSgyMDcsIDIwNywgMjA3LCAwLjYpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0MSwgMjQxLCAwLjYpO1xcclxcbiAgZm9udC1zaXplOiAxNDtcXHJcXG59XFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1O1xcclxcbn1cXHJcXG4uZm9ybS1jb250YWluZXItc3VibWl0dGVkIHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBsb2dpbl9zdWJtaXR0ZWQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcclxcblxcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgbG9naW5fc3VibWl0dGVkIHtcXHJcXG5cXHRmcm9tIHsgb3BhY2l0eTogMSB9XFxyXFxuICA1MCUgeyBvcGFjaXR5OiAwLjEgfVxcclxcblxcdHRvIHsgb3BhY2l0eTogMSB9XFxyXFxufVxcclxcbi5mb3JtLWJ1dHRvbiB7XFxyXFxuICBtYXJnaW46IDIwO1xcclxcbiAgbWFyZ2luLXRvcDogMjU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjQzAzOTJCO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uZm9ybS1sYWJlbCB7XFxyXFxuICBjb2xvcjojY2NjO1xcclxcbiAgbWFyZ2luLXRvcDogLTU7IFxcclxcbn1cXHJcXG4ubG9naW4tZG9uZSB7XFxyXFxuICB3aWR0aDogMTA7XFxyXFxuICBoZWlnaHQ6IDEwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmODRlNGU7XFxyXFxuICBwYWRkaW5nOiAxMDtcXHJcXG4gIHotaW5kZXg6IDEwMDAwMDA7XFxyXFxuICBtYXJnaW46IC01MDtcXHJcXG59XFxyXFxuLmZvcmdldFxcclxcbntcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjQzAzOTJCO1xcclxcbiAgZm9udC1zaXplOiAxNTtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxufVxcclxcbi5pbnB1dC1maWVsZHsgICAgXFxyXFxuICBib3JkZXItd2lkdGg6IDE7XFxyXFxuICBib3JkZXItc3R5bGU6ICdzb2xpZCc7XFxyXFxuICBib3JkZXItY29sb3I6ICNDMDM5MkI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4OyAgICBcXHJcXG4gIHBhZGRpbmc6MTA7XFxyXFxuICBtYXJnaW4tdG9wOjIwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMDsgICAgXFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkhvbWVcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGlvczpob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGFuZHJvaWQ6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG5cXHRcXHQ8TGFiZWwgdGV4dD1cXFwiTWluaW1hbGlzbVxcXCIgY2xhc3M9XFxcImFjdGlvbi1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHQgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuXFxyXFxuPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgY2xhc3M9XFxcIm1haW5cXFwiPlxcclxcblxcclxcblxcdDxJbWFnZSAjbG9nbyB3aWR0aD1cXFwiMTQwXFxcIiBjbGFzcz1cXFwidm9kLWxvZ29cXFwiIHNyYz1cXFwifi9sb2dpbi9hcHBsZWxvZ28ucG5nXFxcIj48L0ltYWdlPlxcclxcblxcdDxTdGFja0xheW91dCAjY2lyY2xlIHdpZHRoPVxcXCIxMDBcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiBjbGFzcz1cXFwibG9naW4tZG9uZVxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0IFt2aXNpYmlsaXR5XT1cXFwibmF2aWdhdGluZyA/ICdjb2xsYXBzZWQnIDogJ3Zpc2libGUnXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcInJlZy1sb2ctY29udGFpbmVyXFxcIj5cXHJcXG5cXHRcXHQ8TGFiZWwgdGV4dD1cXFwiTCBPIEcgSSBOXFxcIiAodGFwKT1cXFwic2V0VG9Mb2dpbigpXFxcIiBbbmdDbGFzc109XFxcIltpc0xvZ2luID8gJ3JlZy1hY3RpdmUnIDogJ3JlZy1kZWFjdGl2ZSddXFxcIj48L0xhYmVsPlxcclxcbiAgICAgIFxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbiAgIFxcclxcbiAgICA8U3RhY2tMYXlvdXQgW3Zpc2liaWxpdHldPVxcXCJuYXZpZ2F0aW5nID8gJ2NvbGxhcHNlZCcgOiAndmlzaWJsZSdcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udGFpbmVyXFxcIiBbbmdDbGFzc109XFxcIltmb3JtU3VibWl0dGVkID8gJ2Zvcm0tY29udGFpbmVyLXN1Ym1pdHRlZCcgOiAnZm9ybS1jb250YWluZXInXVxcXCI+XFxyXFxuICAgICAgICA8VGV4dEZpZWxkICBbKG5nTW9kZWwpXT1cXFwicGhvbmVOdW1iZXJcXFwiIGhpbnQ9XFxcIlZlaGljbGVJZFxcXCIgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgdGV4dEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiA+PC9UZXh0RmllbGQ+XFxyXFxuXFx0XFx0PFRleHRGaWVsZCBbKG5nTW9kZWwpXT1cXFwicGFzc3dvcmRcXFwiIGhpbnQ9XFxcIlBhc3N3b3JkXFxcIiBjbGFzcz0gXFxcImlucHV0LWZpZWxkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIHRleHRBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgPjwvVGV4dEZpZWxkPlxcclxcblxcdFxcdDxUZXh0RmllbGQgI2l0ZW0gWyhuZ01vZGVsKV09XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgW3Zpc2liaWxpdHldPVxcXCIhaXNMb2dpbiA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXFxcIiBoaW50PVxcXCJDb25maXJtIFBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1pbnB1dFxcXCIgdGV4dEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L1RleHRGaWVsZD5cXHJcXG4gICAgICAgIDxCdXR0b24gKHRvdWNoKT1cXFwib25Gb2N1cygkZXZlbnQpXFxcIiAjYnRuIHRleHQ9XFxcInt7bG9naW5UeHR9fVxcXCIgKHRhcCk9XFxcIm9uQnV0dG9uVGFwKClcXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiIGNsYXNzPVxcXCJmb3JtLWJ1dHRvblxcXCI+PC9CdXR0b24+XFxyXFxuICAgICAgICA8bGFiZWwgdGV4dD1cXFwiRm9yZ290UGFzc3dvcmRcXFwiICh0YXApPVxcXCJvbkZvcmdldFBhc3N3b3JkKClcXFwiIHN0eWxlPVxcXCJjb2xvcjogI0MwMzkyQjtcXFwiIGNsYXNzPVxcXCJmb3JnZXRcXFwiPjwvbGFiZWw+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgXFxyXFxuPC9TdGFja0xheW91dD5cIiIsIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcIml0ZW1cIiwgeyBzdGF0aWM6IHRydWUgfSkgYW5ndWxhckl0ZW06IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImJ0blwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBidG5SZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImNpcmNsZVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBjaXJjbGVSZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImxvZ29cIiwgeyBzdGF0aWM6IHRydWUgfSkgbG9nb1JlZjogRWxlbWVudFJlZjtcbiAgICBpdGVtOiBWaWV3O1xuICAgIGJ0bkl0ZW06IFZpZXc7XG4gICAgY2lyY2xlSXRlbTogVmlldztcbiAgICBsb2dvSXRlbTogVmlldztcblxuICAgIHRleHRGaWVsZFZhbHVlOiBzdHJpbmcgPSBcIlwiO1xuICAgIGlzTG9naW4gPSB0cnVlO1xuICAgIGZvcm1TdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICBuYXZpZ2F0aW5nID0gZmFsc2U7XG4gICAgbG9naW5UeHQgPSBcIkwgbyBnIGkgblwiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLl9wYWdlLm9uKCduYXZpZ2F0aW5nVG8nLCAoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmNpcmNsZUl0ZW0uc2NhbGVYID0gMDtcbiAgICAgICAgdGhpcy5jaXJjbGVJdGVtLnNjYWxlWSA9IDA7XG4gICAgICAgIHRoaXMubmF2aWdhdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvZ29JdGVtLnRyYW5zbGF0ZVkgPSAwO1xuICAgIH0pXG4gICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMuYnRuSXRlbSA9IHRoaXMuYnRuUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5pdGVtID0gdGhpcy5hbmd1bGFySXRlbS5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuY2lyY2xlSXRlbSA9IHRoaXMuY2lyY2xlUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5sb2dvSXRlbSA9IHRoaXMubG9nb1JlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5pdGVtLnNjYWxlWCA9IDA7XG4gICAgdGhpcy5pdGVtLnNjYWxlWSA9IDA7XG4gICAgdGhpcy5jaXJjbGVJdGVtLnNjYWxlWCA9IDA7XG4gICAgdGhpcy5jaXJjbGVJdGVtLnNjYWxlWSA9IDA7XG4gICAgdGhpcy5idG5JdGVtLnRyYW5zbGF0ZVkgPSAtNTA7XG59XG5vbkJ1dHRvblRhcCgpOiB2b2lkIHtcblxuICB0aGlzLmZvcm1TdWJtaXR0ZWQgPSB0cnVlO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgdGhpcy5uYXZpZ2F0aW5nID0gdHJ1ZTtcblxuICAgICAgdGhpcy5sb2dvSXRlbS5hbmltYXRlKHtcbiAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMjAwIH0sXG4gICAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaXJjbGVJdGVtLnRyYW5zbGF0ZVkgPSAyMDA7XG4gICAgICAgICAgdGhpcy5jaXJjbGVJdGVtLmFuaW1hdGUoe1xuICAgICAgICAgICAgICBzY2FsZTogeyB4OiAxNSwgeTogMTUgfSxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgXG4gIH0sIDI1MDApO1xuICBcbn1cblxub25Gb2N1cyhhcmdzOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpIHtcblxuICBpZiAoYXJncy5hY3Rpb24gPT0gXCJkb3duXCIpIHtcbiAgICAgIHRoaXMuYnRuSXRlbS5zY2FsZVggPSAwLjk7XG4gICAgICB0aGlzLmJ0bkl0ZW0uc2NhbGVZID0gMC45O1xuICB9IGVsc2UgaWYgKGFyZ3MuYWN0aW9uID09IFwidXBcIikge1xuICAgICAgdGhpcy5idG5JdGVtLnNjYWxlWCA9IDE7XG4gICAgICB0aGlzLmJ0bkl0ZW0uc2NhbGVZID0gMTtcbiAgfVxuICBcbn1cbnNldFRvTG9naW4oKSB7XG4gIHRoaXMuaXRlbS5hbmltYXRlKHtcbiAgICAgIHNjYWxlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgIGR1cmF0aW9uOiAzMDBcbiAgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmlzTG9naW4gPSB0cnVlO1xuICAgICAgdGhpcy5sb2dpblR4dCA9IFwiTCBvIGcgaSBuXCI7XG4gICAgICB0aGlzLmJ0bkl0ZW0uYW5pbWF0ZSh7XG4gICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IC01MCB9LFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICAgIH0pXG4gIH0pO1xufVxuc2hvd1Bhc3N3b3JkXG5zaG93SGlkZUljb25cbnNob3dJY29uXG5oaWRlSWNvblxuVGV4dEZpZWxkXG5cblxuXG5cbiAgXG5cbn1cbiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmJ0bi5idG4tcHJpbWFyeVxcclxcbntcXHJcXG4gICAgd2lkdGg6IDEwMDtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwibWFwc1xcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiMxRkFGRDkgO1xcXCI+PC9BY3Rpb25CYXI+XFxuXFxuXFxuPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywqXFxcIiBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICA8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuICAgIDxidXR0b24gdGV4dD1cXFwiQWRkIG1hcmtlclxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKHRhcCk9XFxcImFkZG1hcmtlcigpXFxcIj48L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiB0ZXh0PVxcXCJBbmltYXRlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAodGFwKT1cXFwiYW5pbWF0ZUNhbWVyYSgpXFxcIj48L2J1dHRvbj5cXG5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuICA8Q29udGVudFZpZXcgcm93PVxcXCIxXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIj5cXG4gIFxcbiAgICAgPE1hcGJveCBhY2Nlc3NUb2tlbj1cXFwicGsuZXlKMUlqb2lkM1ZvWVc0eE1pSXNJbUVpT2lKamF6bGpZbmsyTVdnd00ySndNMlZ2T0c0NWVtMXNNakJwSW4wLmUySTdmYXU1bzZjdTZvVF95WG5TakFcXFwiXFxuICAgICAgbWFwU3R5bGU9XFxcInRyYWZmaWNfZGF5XFxcIiBsYXRpdHVkZT1cXFwiMjYuNTg4NyBcXFwiIGxvbmdpdHVkZT1cXFwiODUuNTAxM1xcXCIgaGlkZUNvbXBhc3M9XFxcInRydWVcXFwiIHpvb21MZXZlbD1cXFwiMTBcXFwiXFxuICAgICAgc2hvd1VzZXJMb2NhdGlvbj1cXFwidHJ1ZVxcXCIgKG1hcFJlYWR5KT1cXFwib25NYXBSZWFkeSgkZXZlbnQpXFxcIj5cXG4gICAgPC9NYXBib3g+XFxuICA8L0NvbnRlbnRWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHthbGVydH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQge01hcGJveCxNYXBib3hNYXJrZXIsTWFwYm94Vmlld0FwaX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1tYXBib3hcIlxuaW1wb3J0IHtEaXJlY3Rpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRpcmVjdGlvbnNcIlxucmVnaXN0ZXJFbGVtZW50KFwiTWFwYm94XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbWFwYm94XCIpLk1hcGJveFZpZXcpO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1hcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXAuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbWFwQm94OiBNYXBib3hWaWV3QXBpXG4gIGRpcmVjdGlvbnMgOiBEaXJlY3Rpb25zO1xuICBjb25zdHJ1Y3RvcigpIFxuICB7IFxuICAgIHRoaXMuZGlyZWN0aW9ucz1uZXcgRGlyZWN0aW9ucztcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICBcbiAgICBcbiAgfVxuICBvbk1hcFJlYWR5KGFyZ3MpXG4gIHtcbiAgICAgICB0aGlzLm1hcEJveD1hcmdzLm1hcDtcbiAgIFxuICB9XG4gIGFkZG1hcmtlcigpXG4gIHtcbiAgICAgIGNvbnN0IGZpcnN0TWFya2VyID0gPE1hcGJveE1hcmtlcj57IC8vY2FzdCBhcyBhIE1hcGJveE1hcmtlciB0byBwaWNrIHVwIGhlbHBlciBmdW5jdGlvbnMgc3VjaCBhcyB1cGRhdGUoKVxuICAgICAgaWQ6IDEsIC8vIGNhbiBiZSB1c2VyIGluICdyZW1vdmVNYXJrZXJzKCknXG4gICAgICBsYXQ6IDI2LjE1NDIsIC8vIG1hbmRhdG9yeVxuICAgICAgbG5nOiA4NS44OTE4LCAvLyBtYW5kYXRvcnlcbiAgICAgIHRpdGxlOiAnRGFyYmhhbmdhJywgLy8gbm8gcG9wdXAgdW5sZXNzIHNldFxuICAgICAgc3VidGl0bGU6ICdGaW5kIERhcmJoYW5nYSBoZXJlIScsXG4gICAgICAvLyBpY29uOiAncmVzOi8vY29vbF9tYXJrZXInLCAvLyBwcmVmZXJyZWQgd2F5LCBvdGhlcndpc2UgdXNlOlxuICAgICAgIC8vIG1ha2VzIHRoZSBjYWxsb3V0IHNob3cgaW1tZWRpYXRlbHkgd2hlbiB0aGUgbWFya2VyIGlzIGFkZGVkIChub3RlOiBvbmx5IDEgbWFya2VyIGNhbiBiZSBzZWxlY3RlZCBhdCBhIHRpbWUpXG4gICAgICBvblRhcDogbWFya2VyID0+IGNvbnNvbGUubG9nKFwiTWFya2VyIHRhcHBlZCB3aXRoIHRpdGxlOiAnXCIgKyBtYXJrZXIudGl0bGUgKyBcIidcIiksXG4gICAgICBvbkNhbGxvdXRUYXA6IG1hcmtlciA9PiB7XG4gICAgICAgdGhpcy4gZGlyZWN0aW9ucy5uYXZpZ2F0ZSh7XG4gICAgICAgICAgdG86IHsgLy8gZWl0aGVyIHBhc3MgaW4gYSBzaW5nbGUgb2JqZWN0IG9yIGFuIEFycmF5IChzZWUgdGhlIFR5cGVTY3JpcHQgZXhhbXBsZSBiZWxvdylcbiAgICAgICAgICAgIGFkZHJlc3M6IFwicGF0bmFcIlxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBmb3IgaU9TLXNwZWNpZmljIG9wdGlvbnMsIHNlZSB0aGUgVHlwZVNjcmlwdCBleGFtcGxlIGJlbG93LlxuICAgICAgICB9KS50aGVuKFxuICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYXBzIGFwcCBsYXVuY2hlZC5cIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuICAgXG4gICB0aGlzLm1hcEJveC5hZGRNYXJrZXJzKFtcbiAgICAgIGZpcnN0TWFya2VyXG4gICAgIFxuICAgIF0pXG4gIH1cbiAgICAgYW5pbWF0ZUNhbWVyYSgpXG4gICAgIHtcbiAgICAgICB0aGlzLm1hcEJveC5hbmltYXRlQ2FtZXJhKHtcbiAgICAgICAgLy8gdGhpcyBpcyB3aGVyZSB3ZSBhbmltYXRlIHRvXG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgbGF0OiAyNC43OTE0LFxuICAgICAgICAgICAgbG5nOiA4NS4wMDAyXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOjE1MDBcbiAgICAgICAgLy8gem9vbUxldmVsOiAxNywgLy8gQW5kcm9pZFxuICAgICAgICAvLyBhbHRpdHVkZTogMjAwMCwgLy8gaU9TIChtZXRlcnMgZnJvbSB0aGUgZ3JvdW5kKVxuICAgICAgICAvLyBiZWFyaW5nOiAyNzAsIC8vIFdoZXJlIHRoZSBjYW1lcmEgaXMgcG9pbnRpbmcsIDAtMzYwIChkZWdyZWVzKVxuICAgICAgICAvLyB0aWx0OiA1MCxcbiAgICAgICAgLy8gZHVyYXRpb246IDUwMDAgLy8gZGVmYXVsdCAxMDAwMCAobWlsbGlzZWNvbmRzKVxuICAgICAgfSlcbiAgICAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiVXBhZHRlUGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojMUZBRkQ5IDtcXFwiPlxcbjwvQWN0aW9uQmFyPlxcbjxHcmlkTGF5b3V0IGJhY2tncm91bmRDb2xvcj0gXFxcIiNDQ0NDQ0NcXFwiICBjbGFzcz1cXFwiYm9keSBzY2YtY2FyZCBhbmltYXRlLWJvdW5jZUluTGVmdC1kZWxheS0wbXNcXFwiPlxcbiAgPFNjcm9sbFZpZXc+XFxuICAgICAgPFN0YWNrTGF5b3V0IG1hcmdpbj1cXFwiMTBcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiIHBhZGRpbmc9XFxcIjE1XFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGRkZGRkZcXFwiPlxcbiAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTmV3UGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJsYWJlbCBmb250LXdlaWdodC1ib2xkIG0tYi01XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBbKG5nTW9kZWwpXT1cXFwicGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiUmVFbnRlclBhc3N3b3JkXFxcIiBjbGFzcz1cXFwibGFiZWwgZm9udC13ZWlnaHQtYm9sZCBtLWItNVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkICBjbGFzcz1cXFwiaW5wdXRcXFwiIFsobmdNb2RlbCldPVxcXCJSZXBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHctZnVsbFxcXCIgIHRleHQ9XFxcIlN1Ym1pdFxcXCIgICAodGFwKT1cXFwidmFsaWRhdGUoKVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gIDwvU2Nyb2xsVmlldz5cXG48L0dyaWRMYXlvdXQ+ICBcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2FsZXJ0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11cGRhdGVwYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGRhdGVwYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VwZGF0ZXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlcGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuXG4gIHBhc3N3b3JkXG4gIFJlcGFzc3dvcmRcblxuXG5cbiAgdmFsaWRhdGUoKVxuIHtcbiAgIGlmKHRoaXMucGFzc3dvcmQgIT10aGlzLlJlcGFzc3dvcmQpXG4gICB7XG4gICAgICBhbGVydChcInBhc3N3b3JkIGRvZXNudCBtYXRjaFwiKVxuICAgfVxuICBcblxuICBcblxuXG59XG59XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ib2R5XFxyXFxue1xcclxcbiAgICBmb250LXNpemU6IDMwO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5pZFxcclxcbntcXHJcXG4gICAgZm9udC1zaXplOiAyMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxufVxcclxcbi5vd25lclxcclxcbntcXHJcXG4gICAgZm9udC1zaXplOiAyMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5tb2RlbFxcclxcbntcXHJcXG4gICBcXHJcXG4gICAgZm9udC1zaXplOiAyMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcclxcblxcclxcbiAgIFxcclxcbn1cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJWZWhpY2xlZGV0YWlsc1xcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiMxRkFGRDkgO1xcXCI+XFxuXFxuPC9BY3Rpb25CYXI+XFxuPFN0YWNrTGF5b3V0PlxcblxcdDxTdGFja2F5b3V0ID5cXG5cXHRcXHQ8SW1hZ2UgIHNyYz1cXFwifi9hc3NldHMvcHJvZmlsZS5wbmdcXFwiIGJvcmRlclJhZGl1cz1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCI3MFxcXCIgd2lkdGg9XFxcIjcwXFxcIiBtYXJnaW5Ub3A9XFxcIjEzMFxcXCJcXG5cXHRcXHRcXHQgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgY2xhc3M9XFxcImJvZHlcXFwiPlxcblxcdFxcdDxMYWJlbCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIGNvbG9yPVxcXCJibGFja1xcXCIgbWFyZ2luVG9wPVxcXCIyMDBcXFwiIHRleHQ9XFxcIlZlaGljbGUgRGV0YWlsc1xcXCI+XFxuXFx0XFx0PC9MYWJlbD5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgY2xhc3M9XFxcImlkXFxcIj5cXG5cXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBjb2xvcj1cXFwiIzgxODQ4NVxcXCIgbWFyZ2luVG9wPVxcXCIzMDBcXFwiIHRleHQ9XFxcIlZlaGljbGUgSWQ6e0ExRERaMjFGfVxcXCI+XFxuXFx0XFx0PC9MYWJlbD5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgY2xhc3M9XFxcIm1vZGVsXFxcIj5cXG5cXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBjb2xvcj1cXFwiIzgxODQ4NVxcXCIgbWFyZ2luVG9wPVxcXCIzNDBcXFwiIHRleHQ9XFxcIlZlaGljbGUgTW9kZWw6e0ExRERaMjFGfVxcXCI+XFxuXFx0XFx0PC9MYWJlbD5cXG5cXHQ8L1N0YWNrYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrYXlvdXQgY2xhc3M9XFxcIm93bmVyXFxcIj5cXG5cXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBjb2xvcj1cXFwiIzgxODQ4NVxcXCIgbWFyZ2luVG9wPVxcXCIzODBcXFwiIHRleHQ9XFxcIk93bmVyIE5hbWU6e1NhdXJhdn1cXFwiPlxcblxcdFxcdDwvTGFiZWw+XFxuXFx0PC9TdGFja2F5b3V0PlxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC12ZWhpY2xlZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi92ZWhpY2xlZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3ZlaGljbGVkZXRhaWxzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBWZWhpY2xlZGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIFxuICBcblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==