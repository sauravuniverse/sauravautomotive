webpackHotUpdate("bundle",{

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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlFO0FBQzFDO0FBR2dDO0FBQ0c7QUFDbEI7QUFRaEQ7SUFnQkUsd0JBQW9CLEtBQVcsRUFBVSxnQkFBa0MsRUFBVSxhQUE2QixFQUFFLElBQXFCO1FBQXJILFVBQUssR0FBTCxLQUFLLENBQU07UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBTmhILG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGFBQVEsR0FBRyxXQUFXLENBQUM7SUFFcUgsQ0FBQztJQUUvSSxpQ0FBUSxHQUFSO1FBQUEsaUJBbUJEO1FBakJHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFDLElBQUk7WUFDL0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMs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QUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBUyx3REFBVTtrREFBQztJQUNoQjtRQUF0QywrREFBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBWSx3REFBVTtxREFBQztJQUN4QjtRQUFwQywrREFBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBVSx3REFBVTttREFBQztJQUpoRCxjQUFjO1FBTDFCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixzRkFBcUM7O1NBRXRDLENBQUM7eUNBaUIyQiw0Q0FBSSxFQUE0Qiw0RUFBZ0IsRUFBd0IsOERBQWUsRUFBTyxxRUFBZ0I7T0FoQjlILGNBQWMsQ0F5RzFCO0lBQUQscUJBQUM7Q0FBQTtBQXpHMEIiLCJmaWxlIjoiYnVuZGxlLjU4NmYzMzdjOTYyMDJiNzAwODkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBUb3VjaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIlxuaW1wb3J0IHtIdHRwUG9zdFNlcnZpY2V9IGZyb20gXCIuL2xvZ2luLnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBWaWV3Q2hpbGQoXCJpdGVtXCIsIHsgc3RhdGljOiB0cnVlIH0pIGFuZ3VsYXJJdGVtOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJidG5cIiwgeyBzdGF0aWM6IHRydWUgfSkgYnRuUmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJjaXJjbGVcIiwgeyBzdGF0aWM6IHRydWUgfSkgY2lyY2xlUmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJsb2dvXCIsIHsgc3RhdGljOiB0cnVlIH0pIGxvZ29SZWY6IEVsZW1lbnRSZWY7XG4gICAgaXRlbTogVmlldztcbiAgICBidG5JdGVtOiBWaWV3O1xuICAgIGNpcmNsZUl0ZW06IFZpZXc7XG4gICAgbG9nb0l0ZW06IFZpZXc7XG5cbiAgICB0ZXh0RmllbGRWYWx1ZTogc3RyaW5nID0gXCJcIjtcbiAgICBpc0xvZ2luID0gdHJ1ZTtcbiAgICBmb3JtU3VibWl0dGVkID0gZmFsc2U7XG4gICAgbmF2aWdhdGluZyA9IGZhbHNlO1xuICAgIGxvZ2luVHh0ID0gXCJMIG8gZyBpIG5cIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbXlQb3N0U2VydmljZTpIdHRwUG9zdFNlcnZpY2UsIGh0dHA6SHR0cENsaWVudE1vZHVsZSApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5fcGFnZS5vbignbmF2aWdhdGluZ1RvJywgKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5jaXJjbGVJdGVtLnNjYWxlWCA9IDA7XG4gICAgICAgIHRoaXMuY2lyY2xlSXRlbS5zY2FsZVkgPSAwO1xuICAgICAgICB0aGlzLm5hdmlnYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2dvSXRlbS50cmFuc2xhdGVZID0gMDtcbiAgICB9KVxuICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLmJ0bkl0ZW0gPSB0aGlzLmJ0blJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuaXRlbSA9IHRoaXMuYW5ndWxhckl0ZW0ubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmNpcmNsZUl0ZW0gPSB0aGlzLmNpcmNsZVJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMubG9nb0l0ZW0gPSB0aGlzLmxvZ29SZWYubmF0aXZlRWxlbWVudDtcblxuICAgIHRoaXMuaXRlbS5zY2FsZVggPSAwO1xuICAgIHRoaXMuaXRlbS5zY2FsZVkgPSAwO1xuICAgIHRoaXMuY2lyY2xlSXRlbS5zY2FsZVggPSAwO1xuICAgIHRoaXMuY2lyY2xlSXRlbS5zY2FsZVkgPSAwO1xuICAgIHRoaXMuYnRuSXRlbS50cmFuc2xhdGVZID0gLTUwO1xufVxuXG5nZXRkYXRhKCkge1xuXG4gIHRoaXMubXlQb3N0U2VydmljZS5nZXRkYXRhKCk7XG4gIFxufVxuXG5cblxub25CdXR0b25UYXAoKTogdm9pZCB7XG5cbiAgdGhpcy5mb3JtU3VibWl0dGVkID0gdHJ1ZTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgIHRoaXMubmF2aWdhdGluZyA9IHRydWU7XG5cbiAgICAgIHRoaXMubG9nb0l0ZW0uYW5pbWF0ZSh7XG4gICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDIwMCB9LFxuICAgICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2lyY2xlSXRlbS50cmFuc2xhdGVZID0gMjAwO1xuICAgICAgICAgIHRoaXMuY2lyY2xlSXRlbS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgc2NhbGU6IHsgeDogMTUsIHk6IDE1IH0sXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgICAgIFxuICAgICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIFxuICB9LCAyNTAwKTtcbiAgXG59XG5cbm9uRm9jdXMoYXJnczogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSB7XG5cbiAgaWYgKGFyZ3MuYWN0aW9uID09IFwiZG93blwiKSB7XG4gICAgICB0aGlzLmJ0bkl0ZW0uc2NhbGVYID0gMC45O1xuICAgICAgdGhpcy5idG5JdGVtLnNjYWxlWSA9IDAuOTtcbiAgfSBlbHNlIGlmIChhcmdzLmFjdGlvbiA9PSBcInVwXCIpIHtcbiAgICAgIHRoaXMuYnRuSXRlbS5zY2FsZVggPSAxO1xuICAgICAgdGhpcy5idG5JdGVtLnNjYWxlWSA9IDE7XG4gIH1cbiAgXG59XG5zZXRUb0xvZ2luKCkge1xuICB0aGlzLml0ZW0uYW5pbWF0ZSh7XG4gICAgICBzY2FsZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICBkdXJhdGlvbjogMzAwXG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5pc0xvZ2luID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9naW5UeHQgPSBcIkwgbyBnIGkgblwiO1xuICAgICAgdGhpcy5idG5JdGVtLmFuaW1hdGUoe1xuICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAtNTAgfSxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICB9KVxuICB9KTtcbn1cbnNob3dQYXNzd29yZFxuc2hvd0hpZGVJY29uXG5zaG93SWNvblxuaGlkZUljb25cblRleHRGaWVsZFxuXG5cblxuXG4gIFxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9