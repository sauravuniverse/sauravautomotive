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




var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
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

module.exports = "<!--\nRadSideDrawer is a UI component part of the Progress NativeScript UI set of components.\nLearn more about the RadSideDrawer UI component and how it can be customized in this documentation article:\nhttp://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/SideDrawer/getting-started\n-->\n<RadSideDrawer [drawerTransition]=\"sideDrawerTransition\">\n\t<GridLayout tkDrawerContent rows=\"auto, *\" class=\"sidedrawer sidedrawer-left\">\n\t\t<StackLayout row=\"0\" class=\"sidedrawer-header\">\n\t\t\n\t\t\t<Image  src=\"~/assets/face4.jpg\" borderRadius=\"100%\" height=\"60\" width=\"60\" marginright=\"20\"\n\t\t\t stretch=\"aspectFill\"></Image>\n\t\t\t<Label class=\"sidedrawer-header-brand\" text=\"Saurav Anand\"></Label>\n\t\t\t<Label class=\"footnote\" text=\"sauravkumar2819@mail.com\"></Label>\n\t\t</StackLayout>\n\n\t\t<ScrollView row=\"1\">\n\t\t\t<StackLayout class=\"sidedrawer-content\">\n\t\t\t\t<GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n\t\t\t\t\t<Label col=\"0\" text=\"&#xf0d1;\" class=\"fa \"></Label>\n\t\t\t\t\t<Label col=\"1\" text=\"VehicleDetails\" class=\"p-r-10\"></Label>\n\t\t\t\t</GridLayout>\n\n\t\t\t\t<GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n\t\t\t\t\t<Label col=\"0\" text=\"&#xf1ea;\" class=\"fa\"></Label>\n\t\t\t\t\t<Label col=\"1\" text=\"Map\" class=\"p-r-10\"></Label>\n\t\t\t\t</GridLayout>\n\n\t\t\t\t<GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\">\n\t\t\t\t\t<Label col=\"0\" text=\"&#xf4d9;\" class=\"fa\"></Label>\n\t\t\t\t\t<Label col=\"1\" text=\"Logout\" class=\"p-r-10\"></Label>\n\t\t\t\t</GridLayout>\n\n\t\t\t\t\n\n\t\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\n\n\t\t\t\t\n\t\t\t</StackLayout>\n\t\t</ScrollView>\n\t</GridLayout>\n\n\t<page-router-outlet tkMainContent class=\"page page-content\"></page-router-outlet>\n</RadSideDrawer>"

/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/ui-sidedrawer.js");
/* harmony import */ var nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_2__["SlideInOnTopTransition"]();
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __importDefault(__webpack_require__("./app.component.html")).default
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
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
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
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

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Title\" class=\"action-bar\" style=\"background-color:#1FAFD9 ;\"   >\n\t<NavigationButton icon=\"res://menu\"></NavigationButton>\n</ActionBar>\n\n<GridLayout class=\"page page-content\" tkMainContent>\n\t<Label class=\"page-icon fa\" text=\"&#xf015;\"></Label>\n\t<Label class=\"page-placeholder\" text=\"<!-- Page content goes here -->\"></Label>\n</GridLayout>\n"

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
            template: __importDefault(__webpack_require__("./home/home.component.html")).default
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

module.exports = "<ActionBar title=\"Home\" class=\"action-bar\">\r\n\t<StackLayout orientation=\"horizontal\" ios:horizontalAlignment=\"center\" android:horizontalAlignment=\"center\">\r\n\t\t<Label text=\"Minimalism\" class=\"action-label\"></Label>\r\n\t  </StackLayout>\r\n</ActionBar>\r\n\r\n\r\n<StackLayout orientation=\"vertical\" class=\"main\">\r\n\r\n\t<Image #logo width=\"140\" class=\"vod-logo\" src=\"~/login/applelogo.png\"></Image>\r\n\t<StackLayout #circle width=\"100\" height=\"100\" class=\"login-done\" orientation=\"horizontal\"></StackLayout>\r\n\r\n\t<StackLayout [visibility]=\"navigating ? 'collapsed' : 'visible'\" orientation=\"horizontal\" class=\"reg-log-container\">\r\n\t\t<Label text=\"L O G I N\" (tap)=\"setToLogin()\" [ngClass]=\"[isLogin ? 'reg-active' : 'reg-deactive']\"></Label>\r\n        <!-- <Label text=\" | \" class=\"reg-separator\"></Label> -->\r\n        <!-- <Label text=\"R E G I S T E R\" (tap)=\"setToRegister()\" [ngClass]=\"[!isLogin ? 'reg-active' : 'reg-deactive']\"></Label> -->\r\n    </StackLayout>\r\n\r\n\r\n    <StackLayout [visibility]=\"navigating ? 'collapsed' : 'visible'\" orientation=\"vertical\" class=\"form-container\" [ngClass]=\"[formSubmitted ? 'form-container-submitted' : 'form-container']\">\r\n        <TextField  [(ngModel)]=\"phoneNumber\" hint=\"VehicleId\"  class=\"input-field\" textAlignment=\"center\"></TextField>\r\n\t\t<TextField [(ngModel)]=\"password\" hint=\"Password\" class= \"input-field\" textAlignment=\"center\"></TextField>\r\n\t\t<TextField #item [(ngModel)]=\"confirmPassword\" [visibility]=\"!isLogin ? 'visible' : 'hidden'\" hint=\"Confirm Password\" class=\"form-input\" textAlignment=\"center\"></TextField>\r\n        <Button (touch)=\"onFocus($event)\" #btn text=\"{{loginTxt}}\" (tap)=\"onButtonTap()\" [nsRouterLink]=\"['/home']\" class=\"form-button\"></Button>\r\n        <label text=\"ForgotPassword\" (tap)=\"onForgetPassword()\" style=\"color: #C0392B;\" class=\"forget\"></label>\r\n    </StackLayout>\r\n\r\n    <!-- <AbsoluteLayout [visibility]=\"navigating ? 'collapsed' : 'visible'\">\r\n        <Image left=\"220\" top=\"-25\" width=\"150\" height=\"150\" src=\"~/home/01.jpg\"></Image>\r\n    </AbsoluteLayout> -->\r\n</StackLayout>"

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

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBQ3BCO0FBQ0U7QUFFckQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGtFQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxxRUFBYyxFQUFFO0NBQy9DLENBQUM7QUFNRjtJ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Qjs7Ozs7Ozs7Ozs7Ozs7O0FDVjNCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBZSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCO0FBQ2pCLCtEQUF5RCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnR7SG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIlxuaW1wb3J0e0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIlxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2xvZ2luXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tXFxuUmFkU2lkZURyYXdlciBpcyBhIFVJIGNvbXBvbmVudCBwYXJ0IG9mIHRoZSBQcm9ncmVzcyBOYXRpdmVTY3JpcHQgVUkgc2V0IG9mIGNvbXBvbmVudHMuXFxuTGVhcm4gbW9yZSBhYm91dCB0aGUgUmFkU2lkZURyYXdlciBVSSBjb21wb25lbnQgYW5kIGhvdyBpdCBjYW4gYmUgY3VzdG9taXplZCBpbiB0aGlzIGRvY3VtZW50YXRpb24gYXJ0aWNsZTpcXG5odHRwOi8vZG9jcy50ZWxlcmlrLmNvbS9kZXZ0b29scy9uYXRpdmVzY3JpcHQtdWkvQ29udHJvbHMvTmF0aXZlU2NyaXB0L1NpZGVEcmF3ZXIvZ2V0dGluZy1zdGFydGVkXFxuLS0+XFxuPFJhZFNpZGVEcmF3ZXIgW2RyYXdlclRyYW5zaXRpb25dPVxcXCJzaWRlRHJhd2VyVHJhbnNpdGlvblxcXCI+XFxuXFx0PEdyaWRMYXlvdXQgdGtEcmF3ZXJDb250ZW50IHJvd3M9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyIHNpZGVkcmF3ZXItbGVmdFxcXCI+XFxuXFx0XFx0PFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItaGVhZGVyXFxcIj5cXG5cXHRcXHRcXG5cXHRcXHRcXHQ8SW1hZ2UgIHNyYz1cXFwifi9hc3NldHMvZmFjZTQuanBnXFxcIiBib3JkZXJSYWRpdXM9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiNjBcXFwiIHdpZHRoPVxcXCI2MFxcXCIgbWFyZ2lucmlnaHQ9XFxcIjIwXFxcIlxcblxcdFxcdFxcdCBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIj48L0ltYWdlPlxcblxcdFxcdFxcdDxMYWJlbCBjbGFzcz1cXFwic2lkZWRyYXdlci1oZWFkZXItYnJhbmRcXFwiIHRleHQ9XFxcIlNhdXJhdiBBbmFuZFxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHQ8TGFiZWwgY2xhc3M9XFxcImZvb3Rub3RlXFxcIiB0ZXh0PVxcXCJzYXVyYXZrdW1hcjI4MTlAbWFpbC5jb21cXFwiPjwvTGFiZWw+XFxuXFx0XFx0PC9TdGFja0xheW91dD5cXG5cXG5cXHRcXHQ8U2Nyb2xsVmlldyByb3c9XFxcIjFcXFwiPlxcblxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwic2lkZWRyYXdlci1jb250ZW50XFxcIj5cXG5cXHRcXHRcXHRcXHQ8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiPlxcblxcdFxcdFxcdFxcdFxcdDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYwZDE7XFxcIiBjbGFzcz1cXFwiZmEgXFxcIj48L0xhYmVsPlxcblxcdFxcdFxcdFxcdFxcdDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIlZlaGljbGVEZXRhaWxzXFxcIiBjbGFzcz1cXFwicC1yLTEwXFxcIj48L0xhYmVsPlxcblxcdFxcdFxcdFxcdDwvR3JpZExheW91dD5cXG5cXG5cXHRcXHRcXHRcXHQ8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiPlxcblxcdFxcdFxcdFxcdFxcdDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYxZWE7XFxcIiBjbGFzcz1cXFwiZmFcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiTWFwXFxcIiBjbGFzcz1cXFwicC1yLTEwXFxcIj48L0xhYmVsPlxcblxcdFxcdFxcdFxcdDwvR3JpZExheW91dD5cXG5cXG5cXHRcXHRcXHRcXHQ8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiPlxcblxcdFxcdFxcdFxcdFxcdDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGY0ZDk7XFxcIiBjbGFzcz1cXFwiZmFcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiTG9nb3V0XFxcIiBjbGFzcz1cXFwicC1yLTEwXFxcIj48L0xhYmVsPlxcblxcdFxcdFxcdFxcdDwvR3JpZExheW91dD5cXG5cXG5cXHRcXHRcXHRcXHRcXG5cXG5cXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcblxcblxcdFxcdFxcdFxcdFxcblxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxuXFx0XFx0PC9TY3JvbGxWaWV3PlxcblxcdDwvR3JpZExheW91dD5cXG5cXG5cXHQ8cGFnZS1yb3V0ZXItb3V0bGV0IHRrTWFpbkNvbnRlbnQgY2xhc3M9XFxcInBhZ2UgcGFnZS1jb250ZW50XFxcIj48L3BhZ2Utcm91dGVyLW91dGxldD5cXG48L1JhZFNpZGVEcmF3ZXI+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgUmFkU2lkZURyYXdlciwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgfVxufVxuIiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzJ1wifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJGb250QXdlc29tZVxcXCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYW5kcm9pZC1sYmxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2UtY29udGVudCAucGFnZS1wbGFjZWhvbGRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0Q3RDdEN1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2UtY29udGVudCAucGFnZS1pY29uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiNzJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcInRvcFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNEN0Q3RDdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMjAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiLTEwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uXCIsXCIuc2lkZWRyYXdlci1saXN0LWl0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMjI3MzRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlci5zaWRlZHJhd2VyLWxlZnRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzFGQUZEOVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItaW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiNjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIuc2lkZWRyYXdlci1sZWZ0IC5mb290bm90ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItaGVhZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxRkFGRDlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1oZWFkZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMjI3MzRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1jb250ZW50IC5zaWRlZHJhd2VyLWxpc3QtaXRlbSAuZmFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1jb250ZW50IC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5zZWxlY3RlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjRjhGOEY4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW0uc2VsZWN0ZWQgTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMxRkFGRDlcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgYm9vdHN0cmFwOiBbXG4gICAgICBBcHBDb21wb25lbnRcbiAgIF0sXG4gICBpbXBvcnRzOiBbXG4gICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgSG9tZVJvdXRpbmdNb2R1bGVcbiAgIF0sXG4gICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICBMb2dpbkNvbXBvbmVudFxuICAgXSxcbiAgIHNjaGVtYXM6IFtcbiAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIlRpdGxlXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IzFGQUZEOSA7XFxcIiAgID5cXG5cXHQ8TmF2aWdhdGlvbkJ1dHRvbiBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPEdyaWRMYXlvdXQgY2xhc3M9XFxcInBhZ2UgcGFnZS1jb250ZW50XFxcIiB0a01haW5Db250ZW50PlxcblxcdDxMYWJlbCBjbGFzcz1cXFwicGFnZS1pY29uIGZhXFxcIiB0ZXh0PVxcXCImI3hmMDE1O1xcXCI+PC9MYWJlbD5cXG5cXHQ8TGFiZWwgY2xhc3M9XFxcInBhZ2UtcGxhY2Vob2xkZXJcXFwiIHRleHQ9XFxcIjwhLS0gUGFnZSBjb250ZW50IGdvZXMgaGVyZSAtLT5cXFwiPjwvTGFiZWw+XFxuPC9HcmlkTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiQWN0aW9uQmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHdoaXRlO1xcclxcbiAgICBjb2xvcjogI2ZmNjc2NztcXHJcXG59XFxyXFxuLmFjdGlvbi1sYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDE2O1xcclxcbn1cXHJcXG4udm9kLWxvZ28ge1xcclxcbiAgbWFyZ2luLXRvcDogMzA7XFxyXFxufVxcclxcbi5yZWctbG9nLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiA0MDtcXHJcXG4gIHBhZGRpbmc6IDIwO1xcclxcbn1cXHJcXG4ucmVnLWFjdGl2ZSB7XFxyXFxuICBmb250LXNpemU6IDIwO1xcclxcbiAgY29sb3I6bGlnaHRncmF5O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDAsIDM0LCAwLjY0NCk7XFxyXFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAyO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHRvZ2dsZTtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXHJcXG5cXHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG59XFxyXFxucmVnLWFjdGl2ZS1pbnB1dCB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogcmVnX2lucHV0O1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG5cXHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG59XFxyXFxuLnJlZy1kZWFjdGl2ZXtcXHJcXG4gIGNvbG9yOmxpZ2h0Z3JheTtcXHJcXG4gIGZvbnQtc2l6ZTogMTE7XFxyXFxuICBwYWRkaW5nLXRvcDogMTI7XFxyXFxuICBhbmltYXRpb24tbmFtZTogdG9nZ2xlO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcclxcblxcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMSwgMC4xLCAxLjAsIDEuMCk7XFxyXFxuICBcXHJcXG59XFxyXFxuQGtleWZyYW1lcyB0b2dnbGUge1xcclxcblxcdGZyb20geyBvcGFjaXR5OiAwO31cXHJcXG4gIDUwJSB7IG9wYWNpdHk6IDAuNTsgfVxcclxcblxcdHRvIHsgb3BhY2l0eTogMTsgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHJlZ19pbnB1dCB7XFxyXFxuXFx0ZnJvbSB7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxyXFxuXFx0NTAlIHsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXHJcXG5cXHR0byB7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxyXFxufVxcclxcbi8qIC5tYWluIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zLCAwLjMpO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IG1haW47XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuXFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xLCAwLjEsIDEuMCwgMS4wKTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBtYWluIHtcXHJcXG5cXHRmcm9tIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjMsIDAuMyk7IH1cXHJcXG5cXHQ1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTsgfVxcclxcblxcdHRvIHsgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTsgfVxcclxcbn0gKi9cXHJcXG4ucmVnLXNlcGFyYXRvcntcXHJcXG4gIGNvbG9yOmxpZ2h0Z3JheTtcXHJcXG4gIGZvbnQtc2l6ZTogMTM7XFxyXFxuICBwYWRkaW5nLXRvcDogMTI7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwO1xcclxcbiAgcGFkZGluZy1yaWdodDogMjA7XFxyXFxuICBhbmltYXRpb24tbmFtZTogdG9nZ2xlO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXHJcXG5cXHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG59XFxyXFxuLmZvcm0taW5wdXQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwO1xcclxcbiAgcGFkZGluZzogMTA7XFxyXFxuICBwbGFjZWhvbGRlci1jb2xvcjpyZ2JhKDIwNywgMjA3LCAyMDcsIDAuNik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQxLCAyNDEsIDAuNik7XFxyXFxuICBmb250LXNpemU6IDE0O1xcclxcbn1cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMTU7XFxyXFxufVxcclxcbi5mb3JtLWNvbnRhaW5lci1zdWJtaXR0ZWQge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGxvZ2luX3N1Ym1pdHRlZDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxyXFxuXFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBsb2dpbl9zdWJtaXR0ZWQge1xcclxcblxcdGZyb20geyBvcGFjaXR5OiAxIH1cXHJcXG4gIDUwJSB7IG9wYWNpdHk6IDAuMSB9XFxyXFxuXFx0dG8geyBvcGFjaXR5OiAxIH1cXHJcXG59XFxyXFxuLmZvcm0tYnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogMjA7XFxyXFxuICBtYXJnaW4tdG9wOiAyNTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwMDtcXHJcXG4gIGJhY2tncm91bmQ6ICNDMDM5MkI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5mb3JtLWxhYmVsIHtcXHJcXG4gIGNvbG9yOiNjY2M7XFxyXFxuICBtYXJnaW4tdG9wOiAtNTsgXFxyXFxufVxcclxcbi5sb2dpbi1kb25lIHtcXHJcXG4gIHdpZHRoOiAxMDtcXHJcXG4gIGhlaWdodDogMTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4NGU0ZTtcXHJcXG4gIHBhZGRpbmc6IDEwO1xcclxcbiAgei1pbmRleDogMTAwMDAwMDtcXHJcXG4gIG1hcmdpbjogLTUwO1xcclxcbn1cXHJcXG4uZm9yZ2V0XFxyXFxue1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNDMDM5MkI7XFxyXFxuICBmb250LXNpemU6IDE1O1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuLmlucHV0LWZpZWxkeyAgICBcXHJcXG4gIGJvcmRlci13aWR0aDogMTtcXHJcXG4gIGJvcmRlci1zdHlsZTogJ3NvbGlkJztcXHJcXG4gIGJvcmRlci1jb2xvcjogI0MwMzkyQjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxcclxcbiAgcGFkZGluZzoxMDtcXHJcXG4gIG1hcmdpbi10b3A6MjA7XFxyXFxuICBtYXJnaW4tbGVmdDogMjA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwOyAgICBcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiSG9tZVxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcclxcblxcdDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgaW9zOmhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgYW5kcm9pZDpob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJNaW5pbWFsaXNtXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdCAgPC9TdGFja0xheW91dD5cXHJcXG48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG5cXHJcXG48U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBjbGFzcz1cXFwibWFpblxcXCI+XFxyXFxuXFxyXFxuXFx0PEltYWdlICNsb2dvIHdpZHRoPVxcXCIxNDBcXFwiIGNsYXNzPVxcXCJ2b2QtbG9nb1xcXCIgc3JjPVxcXCJ+L2xvZ2luL2FwcGxlbG9nby5wbmdcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0PFN0YWNrTGF5b3V0ICNjaXJjbGUgd2lkdGg9XFxcIjEwMFxcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiIGNsYXNzPVxcXCJsb2dpbi1kb25lXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgW3Zpc2liaWxpdHldPVxcXCJuYXZpZ2F0aW5nID8gJ2NvbGxhcHNlZCcgOiAndmlzaWJsZSdcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiBjbGFzcz1cXFwicmVnLWxvZy1jb250YWluZXJcXFwiPlxcclxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJMIE8gRyBJIE5cXFwiICh0YXApPVxcXCJzZXRUb0xvZ2luKClcXFwiIFtuZ0NsYXNzXT1cXFwiW2lzTG9naW4gPyAncmVnLWFjdGl2ZScgOiAncmVnLWRlYWN0aXZlJ11cXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8IS0tIDxMYWJlbCB0ZXh0PVxcXCIgfCBcXFwiIGNsYXNzPVxcXCJyZWctc2VwYXJhdG9yXFxcIj48L0xhYmVsPiAtLT5cXHJcXG4gICAgICAgIDwhLS0gPExhYmVsIHRleHQ9XFxcIlIgRSBHIEkgUyBUIEUgUlxcXCIgKHRhcCk9XFxcInNldFRvUmVnaXN0ZXIoKVxcXCIgW25nQ2xhc3NdPVxcXCJbIWlzTG9naW4gPyAncmVnLWFjdGl2ZScgOiAncmVnLWRlYWN0aXZlJ11cXFwiPjwvTGFiZWw+IC0tPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcblxcclxcbiAgICA8U3RhY2tMYXlvdXQgW3Zpc2liaWxpdHldPVxcXCJuYXZpZ2F0aW5nID8gJ2NvbGxhcHNlZCcgOiAndmlzaWJsZSdcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udGFpbmVyXFxcIiBbbmdDbGFzc109XFxcIltmb3JtU3VibWl0dGVkID8gJ2Zvcm0tY29udGFpbmVyLXN1Ym1pdHRlZCcgOiAnZm9ybS1jb250YWluZXInXVxcXCI+XFxyXFxuICAgICAgICA8VGV4dEZpZWxkICBbKG5nTW9kZWwpXT1cXFwicGhvbmVOdW1iZXJcXFwiIGhpbnQ9XFxcIlZlaGljbGVJZFxcXCIgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgdGV4dEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L1RleHRGaWVsZD5cXHJcXG5cXHRcXHQ8VGV4dEZpZWxkIFsobmdNb2RlbCldPVxcXCJwYXNzd29yZFxcXCIgaGludD1cXFwiUGFzc3dvcmRcXFwiIGNsYXNzPSBcXFwiaW5wdXQtZmllbGRcXFwiIHRleHRBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9UZXh0RmllbGQ+XFxyXFxuXFx0XFx0PFRleHRGaWVsZCAjaXRlbSBbKG5nTW9kZWwpXT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBbdmlzaWJpbGl0eV09XFxcIiFpc0xvZ2luID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcXFwiIGhpbnQ9XFxcIkNvbmZpcm0gUGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWlucHV0XFxcIiB0ZXh0QWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvVGV4dEZpZWxkPlxcclxcbiAgICAgICAgPEJ1dHRvbiAodG91Y2gpPVxcXCJvbkZvY3VzKCRldmVudClcXFwiICNidG4gdGV4dD1cXFwie3tsb2dpblR4dH19XFxcIiAodGFwKT1cXFwib25CdXR0b25UYXAoKVxcXCIgW25zUm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCIgY2xhc3M9XFxcImZvcm0tYnV0dG9uXFxcIj48L0J1dHRvbj5cXHJcXG4gICAgICAgIDxsYWJlbCB0ZXh0PVxcXCJGb3Jnb3RQYXNzd29yZFxcXCIgKHRhcCk9XFxcIm9uRm9yZ2V0UGFzc3dvcmQoKVxcXCIgc3R5bGU9XFxcImNvbG9yOiAjQzAzOTJCO1xcXCIgY2xhc3M9XFxcImZvcmdldFxcXCI+PC9sYWJlbD5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG4gICAgPCEtLSA8QWJzb2x1dGVMYXlvdXQgW3Zpc2liaWxpdHldPVxcXCJuYXZpZ2F0aW5nID8gJ2NvbGxhcHNlZCcgOiAndmlzaWJsZSdcXFwiPlxcclxcbiAgICAgICAgPEltYWdlIGxlZnQ9XFxcIjIyMFxcXCIgdG9wPVxcXCItMjVcXFwiIHdpZHRoPVxcXCIxNTBcXFwiIGhlaWdodD1cXFwiMTUwXFxcIiBzcmM9XFxcIn4vaG9tZS8wMS5qcGdcXFwiPjwvSW1hZ2U+XFxyXFxuICAgIDwvQWJzb2x1dGVMYXlvdXQ+IC0tPlxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBUb3VjaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJpdGVtXCIsIHsgc3RhdGljOiB0cnVlIH0pIGFuZ3VsYXJJdGVtOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJidG5cIiwgeyBzdGF0aWM6IHRydWUgfSkgYnRuUmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJjaXJjbGVcIiwgeyBzdGF0aWM6IHRydWUgfSkgY2lyY2xlUmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJsb2dvXCIsIHsgc3RhdGljOiB0cnVlIH0pIGxvZ29SZWY6IEVsZW1lbnRSZWY7XG4gICAgaXRlbTogVmlldztcbiAgICBidG5JdGVtOiBWaWV3O1xuICAgIGNpcmNsZUl0ZW06IFZpZXc7XG4gICAgbG9nb0l0ZW06IFZpZXc7XG5cbiAgICB0ZXh0RmllbGRWYWx1ZTogc3RyaW5nID0gXCJcIjtcbiAgICBpc0xvZ2luID0gdHJ1ZTtcbiAgICBmb3JtU3VibWl0dGVkID0gZmFsc2U7XG4gICAgbmF2aWdhdGluZyA9IGZhbHNlO1xuICAgIGxvZ2luVHh0ID0gXCJMIG8gZyBpIG5cIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5fcGFnZS5vbignbmF2aWdhdGluZ1RvJywgKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5jaXJjbGVJdGVtLnNjYWxlWCA9IDA7XG4gICAgICAgIHRoaXMuY2lyY2xlSXRlbS5zY2FsZVkgPSAwO1xuICAgICAgICB0aGlzLm5hdmlnYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2dvSXRlbS50cmFuc2xhdGVZID0gMDtcbiAgICB9KVxuICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLmJ0bkl0ZW0gPSB0aGlzLmJ0blJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuaXRlbSA9IHRoaXMuYW5ndWxhckl0ZW0ubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmNpcmNsZUl0ZW0gPSB0aGlzLmNpcmNsZVJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMubG9nb0l0ZW0gPSB0aGlzLmxvZ29SZWYubmF0aXZlRWxlbWVudDtcblxuICAgIHRoaXMuaXRlbS5zY2FsZVggPSAwO1xuICAgIHRoaXMuaXRlbS5zY2FsZVkgPSAwO1xuICAgIHRoaXMuY2lyY2xlSXRlbS5zY2FsZVggPSAwO1xuICAgIHRoaXMuY2lyY2xlSXRlbS5zY2FsZVkgPSAwO1xuICAgIHRoaXMuYnRuSXRlbS50cmFuc2xhdGVZID0gLTUwO1xufVxub25CdXR0b25UYXAoKTogdm9pZCB7XG5cbiAgdGhpcy5mb3JtU3VibWl0dGVkID0gdHJ1ZTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgIHRoaXMubmF2aWdhdGluZyA9IHRydWU7XG5cbiAgICAgIHRoaXMubG9nb0l0ZW0uYW5pbWF0ZSh7XG4gICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDIwMCB9LFxuICAgICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2lyY2xlSXRlbS50cmFuc2xhdGVZID0gMjAwO1xuICAgICAgICAgIHRoaXMuY2lyY2xlSXRlbS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgc2NhbGU6IHsgeDogMTUsIHk6IDE1IH0sXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgICAgIFxuICAgICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIFxuICB9LCAyNTAwKTtcbiAgXG59XG5cbm9uRm9jdXMoYXJnczogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSB7XG5cbiAgaWYgKGFyZ3MuYWN0aW9uID09IFwiZG93blwiKSB7XG4gICAgICB0aGlzLmJ0bkl0ZW0uc2NhbGVYID0gMC45O1xuICAgICAgdGhpcy5idG5JdGVtLnNjYWxlWSA9IDAuOTtcbiAgfSBlbHNlIGlmIChhcmdzLmFjdGlvbiA9PSBcInVwXCIpIHtcbiAgICAgIHRoaXMuYnRuSXRlbS5zY2FsZVggPSAxO1xuICAgICAgdGhpcy5idG5JdGVtLnNjYWxlWSA9IDE7XG4gIH1cbiAgXG59XG5zZXRUb0xvZ2luKCkge1xuICB0aGlzLml0ZW0uYW5pbWF0ZSh7XG4gICAgICBzY2FsZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICBkdXJhdGlvbjogMzAwXG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5pc0xvZ2luID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9naW5UeHQgPSBcIkwgbyBnIGkgblwiO1xuICAgICAgdGhpcy5idG5JdGVtLmFuaW1hdGUoe1xuICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAtNTAgfSxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICB9KVxuICB9KTtcbn1cbiAvLyBzZXRUb1JlZ2lzdGVyKCkge1xuICAgICAgICBcbiAgICAvLyAgICAgdGhpcy5pc0xvZ2luID0gZmFsc2U7XG4gICAgLy8gICAgIHRoaXMubG9naW5UeHQgPSBcIlIgZSBnIGkgcyB0IGUgclwiO1xuXG4gICAgLy8gICAgIHRoaXMuYnRuSXRlbS5hbmltYXRlKHtcbiAgICAvLyAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgLy8gICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgLy8gICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5pdGVtLmFuaW1hdGUoe1xuICAgIC8vICAgICAgICAgICAgIHNjYWxlOiB7IHg6IDEuNiwgeTogMS42IH0sXG4gICAgLy8gICAgICAgICAgICAgZHVyYXRpb246IDMwMFxuICAgIC8vICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pdGVtLmFuaW1hdGUoeyBzY2FsZTogeyB4OiAxLCB5OiAxIH0sIGR1cmF0aW9uOiAyMDAgfSlcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9KTtcblxuICBcblxufVxuIiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=