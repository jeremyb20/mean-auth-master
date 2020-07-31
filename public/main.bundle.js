webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700);", ""]);

// module
exports.push([module.i, "/*\n    DEMO STYLE\n*/\n\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    background: #fafafa;\n}\n\n@media screen and (max-width:768px){\n    .test{\n        margin-top: -180px !important;\n    }\n}\n\n.test {\n        margin-top: -70px;\n}\n\np {\n    font-family: 'Poppins', sans-serif;\n    font-size: 1.1em;\n    font-weight: 300;\n    line-height: 1.7em;\n    color: #999;\n}\n\na, a:hover, a:focus {\n    color: inherit;\n    text-decoration: none;\n    transition: all 0.3s;\n}\n\n.navbar {\n    padding: 1px;\n    background: #fff;\n    border: none;\n    border-radius: 0;\n    /* margin-bottom: 40px; */\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.navbar-btn {\n    box-shadow: none;\n    outline: none !important;\n    border: none;\n}\n\n.line {\n    width: 100%;\n    height: 1px;\n    border-bottom: 1px dashed #ddd;\n    margin: 40px 0;\n}\n\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n\n.wrapper {\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -ms-flex-align: stretch;\n        align-items: stretch;\n    perspective: 1500px;\n}\n\n\n#sidebar {\n    max-height: 100vh;\n    height: 100vh;\n    min-width: 250px;\n    max-width: 250px;\n    background: #7386D5;\n    color: #fff;\n    transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);\n    transform-origin: bottom left;\n}\n\n#sidebar.active {\n    margin-left: -250px;\n    transform: rotateY(100deg);\n}\n\n#sidebar .sidebar-header {\n    padding: 20px;\n    background: #6d7fcc;\n}\n\n#sidebar ul.components {\n    padding: 20px 0;\n    border-bottom: 1px solid #47748b;\n}\n\n#sidebar ul p {\n    color: #fff;\n    padding: 10px;\n}\n\n#sidebar ul li a {\n    padding: 10px;\n    font-size: 1.1em;\n    display: block;\n}\n#sidebar ul li a:hover {\n    color: #7386D5;\n    background: #fff;\n}\n\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\n    color: #fff;\n    background: #6d7fcc;\n}\n\n\na[data-toggle=\"collapse\"] {\n    position: relative;\n}\n\n.dropdown-toggle::after {\n    display: block;\n    position: absolute;\n    top: 50%;\n    right: 20px;\n    transform: translateY(-50%);\n}\n\nul ul a {\n    font-size: 0.9em !important;\n    padding-left: 30px !important;\n    background: #6d7fcc;\n}\n\nul.CTAs {\n    padding: 20px;\n}\n\nul.CTAs a {\n    text-align: center;\n    font-size: 0.9em !important;\n    display: block;\n    border-radius: 5px;\n    margin-bottom: 5px;\n}\n\na.download {\n    background: #fff;\n    color: #7386D5;\n}\n\na.article, a.article:hover {\n    background: #6d7fcc !important;\n    color: #fff !important;\n}\n\n\n\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n#content {\n    width: 100%;\n    padding: 5px;\n    /* max-height: 100vh; */\n    transition: all 0.3s;\n}\n\n#sidebarCollapse {\n    width: 40px;\n    height: 40px;\n    background: #f5f5f5;\n    cursor: pointer;\n}\n\n#sidebarCollapse span {\n    width: 80%;\n    height: 2px;\n    margin: 0 auto;\n    display: block;\n    background: #555;\n    transition: all 0.8s cubic-bezier(0.810, -0.330, 0.345, 1.375);\n    transition-delay: 0.2s;\n}\n\n#sidebarCollapse span:first-of-type {\n    transform: rotate(45deg) translate(2px, 2px);\n}\n#sidebarCollapse span:nth-of-type(2) {\n    opacity: 0;\n}\n#sidebarCollapse span:last-of-type {\n    transform: rotate(-45deg) translate(1px, -1px);\n}\n\n\n#sidebarCollapse.active span {\n    transform: none;\n    opacity: 1;\n    margin: 5px auto;\n}\n\n\n/* ---------------------------------------------------\n    MEDIAQUERIES\n----------------------------------------------------- */\n@media (max-width: 768px) {\n    #sidebar {\n        margin-left: -250px;\n        transform: rotateY(90deg);\n    }\n    #sidebar.active {\n        margin-left: 0;\n        transform: none;\n    }\n    #sidebarCollapse span:first-of-type,\n    #sidebarCollapse span:nth-of-type(2),\n    #sidebarCollapse span:last-of-type {\n        transform: none;\n        opacity: 1;\n        margin: 5px auto;\n    }\n    #sidebarCollapse.active span {\n        margin: 0 auto;\n    }\n    #sidebarCollapse.active span:first-of-type {\n        transform: rotate(45deg) translate(2px, 2px);\n    }\n    #sidebarCollapse.active span:nth-of-type(2) {\n        opacity: 0;\n    }\n    #sidebarCollapse.active span:last-of-type {\n        transform: rotate(-45deg) translate(1px, -1px);\n    }\n\n}\n\n\n.button-toggle-navbar {\n    position: relative;\n    padding: 10px;\n    font-size: 1.1em;\n    display: block;\n    background: transparent;\n    border: none;\n    color: #fff;\n    width: 100%;\n    text-align: inherit;\n}\n.button-toggle-navbar:focus {\n    outline: 0px dotted;\n    /* outline: 5px auto -webkit-focus-ring-color; */\n}\n\n.button-toggle-navbar:hover {\n    background-color: #fff;\n    color: #7386D5;\n}   \n\n.button-toggle-navbar ::after {\n    display: inline-block;\n    margin-left: 0.255em;\n    vertical-align: 0.255em;\n    content: \"\";\n    border-top: 0.3em solid;\n    border-right: 0.3em solid transparent;\n    border-bottom: 0;\n    border-left: 0.3em solid transparent;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"!authService.loggedIn()\">\n    <router-outlet></router-outlet>\n</div> -->\n<div class=\"test\">\n  <div>\n    <div class=\"wrapper\">\n      <!-- Sidebar Holder -->\n      <nav id=\"sidebar\">\n          <div *ngIf=\"authService.loggedIn()\" class=\"sidebar-header\">\n              <div *ngIf=\"user\">\n                <h3><span>Welcome</span> {{user.name}}</h3>\n              </div>\n          </div>\n\n          <ul class=\"list-unstyled components\">\n              <p *ngIf=\"authService.loggedIn()\">\n                <!-- <button class=\"btn btn-primary article\" [routerLink]=\"['/dashboard']\">Dashboard</button> -->\n                <button class=\"btn btn-primary btn-lg article\" (click)=\"goDashboard()\">Dashboard</button>\n              </p>\n              <li class=\"\">\n                  <button href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle button-toggle-navbar\">Home</button>\n                  <ul class=\"collapse list-unstyled\" id=\"homeSubmenu\">\n                      <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile </a>\n                      </li>\n                      <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                        <a class=\"nav-link\" [routerLink]=\"['/users']\">Users</a>\n                      </li>\n                      <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                        <a class=\"nav-link\" [routerLink]=\"['/settings']\">Settings</a>\n                      </li>\n                  </ul>\n              </li>\n              <li>\n                  <a href=\"#\">About</a>\n                  <button href=\"#pageSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle button-toggle-navbar\">Pages</button>\n                  <ul class=\"collapse list-unstyled\" id=\"pageSubmenu\">\n                      <li>\n                          <a href=\"#\">Page 1</a>\n                      </li>\n                      <li>\n                          <a href=\"#\">Page 2</a>\n                      </li>\n                      <li>\n                          <a href=\"#\">Page 3</a>\n                      </li>\n                  </ul>\n              </li>\n              <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                  <a class=\"nav-link\" [routerLink]=\"['/mailbox']\">Mailbox</a>\n              </li>\n              <li>\n                  <a href=\"#\">Contact</a>\n              </li>\n          </ul>\n\n          <ul class=\"list-unstyled CTAs\">\n              <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                  <a class=\"nav-link\" [routerLink]=\"['/login']\" class=\"download\">Login</a>\n              </li>\n              <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                  <a class=\"nav-link article\" (click)=\"openModel()\">Logout</a>\n              </li>\n          </ul>\n      </nav>\n\n      <!-- Page Content Holder -->\n      <div id=\"content\">\n          <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n              <div *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" class=\"container-fluid\">\n\n                  <button type=\"button\" id=\"sidebarCollapse\" (click)=\"isCollapsed = !isCollapsed\" class=\"navbar-btn\">\n                      <span></span>\n                      <span></span>\n                      <span></span>\n                  </button>\n                  <button class=\"btn btn-dark d-inline-block d-lg-none ml-auto\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                      <i class=\"fa fa-align-justify\"></i>\n                  </button>\n\n                  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                      <ul class=\"nav navbar-nav ml-auto\">\n                          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                              <a class=\"nav-link\" [routerLink]=\"['/mailbox']\">Mailbox</a>\n                          </li>\n                          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                              <a class=\"nav-link\" [routerLink]=\"['/chat']\">Chat</a>\n                          </li>\n                          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                              <a class=\"nav-link\" [routerLink]=\"['/settings']\">Settings</a>\n                          </li>\n                          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                              <a class=\"nav-link\" (click)=\"openModel()\">Logout</a>\n                          </li>\n                      </ul>\n                  </div>\n              </div>\n          </nav>\n          <router-outlet></router-outlet>\n          <flash-messages></flash-messages>\n      </div>\n    </div>\n    <div id=\"myModal\" class=\"modal fade\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n           <div class=\"modal-header\">\n              <h5 class=\"modal-title \">Exit {{user? user.name: ''}}</h5>\n              <button type=\"button\" class=\"close\" (click)=\"closeModel(false)\">\n                  <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <p>Are you sure you want exit?.</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" (click)=\"closeModel(true)\" class=\"btn btn-primary\">Exit</button>\n                <button type=\"button\" (click)=\"closeModel(false)\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n              </div>\n          </div>\n        </div>\n      </div>\n</div>  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(authService, chat, router, flashMessage) {
        this.authService = authService;
        this.chat = chat;
        this.router = router;
        this.flashMessage = flashMessage;
        this.test = false;
        this.isFoo = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isLogged = this.authService.loggedIn();
        if (isLogged) {
            this.authService.getProfile().subscribe(function (profile) {
                _this.user = profile.user;
                var user = {
                    username: _this.user.username,
                    status: 'Online'
                };
                _this.chat.emit('user-connected', user);
            }, function (err) {
                console.log(err);
                return false;
            });
        }
    };
    AppComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['login']);
        return false;
    };
    AppComponent.prototype.goDashboard = function () {
        this.router.navigate(['dashboard']);
    };
    AppComponent.prototype.openModel = function () {
        $("#myModal").modal('show');
    };
    AppComponent.prototype.closeModel = function (val) {
        if (val) {
            var user = {
                username: this.user.username,
                status: 'Offline'
            };
            this.chat.emit('user-connected', user);
            this.onLogoutClick();
            $("#myModal").modal('hide');
        }
        else {
            $("#myModal").modal('hide');
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_size_detector_resize_service__ = __webpack_require__("../../../../../src/app/services/size-detector/resize-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_mailbox_mailbox_component__ = __webpack_require__("../../../../../src/app/components/mailbox/mailbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_mailbox_order_by_pipe__ = __webpack_require__("../../../../../src/app/components/mailbox/order-by.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_users_users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_forgot_forgot_component__ = __webpack_require__("../../../../../src/app/components/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_reset_reset_component__ = __webpack_require__("../../../../../src/app/components/reset/reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_23__components_forgot_forgot_component__["a" /* ForgotComponent */] },
    { path: 'reset/:token', component: __WEBPACK_IMPORTED_MODULE_24__components_reset_reset_component__["a" /* ResetComponent */], pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_19__components_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'mailbox', component: __WEBPACK_IMPORTED_MODULE_20__components_mailbox_mailbox_component__["a" /* MailboxComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_22__components_users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_25__components_chat_chat_component__["a" /* ChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_mailbox_mailbox_component__["a" /* MailboxComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_mailbox_order_by_pipe__["a" /* OrderByPipe */],
                __WEBPACK_IMPORTED_MODULE_23__components_forgot_forgot_component__["a" /* ForgotComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_reset_reset_component__["a" /* ResetComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_chat_chat_component__["a" /* ChatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_9__services_size_detector_resize_service__["a" /* ResizeService */], __WEBPACK_IMPORTED_MODULE_10__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_11__services_websocket_service__["a" /* WebsocketService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .page-header{\n    background-color: black;\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#chat-container {\n    max-width: 600px;\n    margin: 30px auto;\n    border: 1px solid #ddd;\n    box-shadow: 1px 3px 5px rgba(0,0,0,0.5);\n}\n\n#chat-window {\n    padding: 14px 0;\n    margin:  0 20px;\n    border-bottom:  1px solid #e9e9e9;\n    color: #555;\n}\n\n#output p {\n    color: #aaa;\n    padding: 14px 0;\n    margin: 0 20px;\n}\n\n#actions p {\n    padding: 14px 0;\n    margin: 0 20px;\n    border-bottom: 1px solid #e9e9e9;\n    color: #555;\n}\n\ninput {\n    padding: 10px 20px ;\n    box-sizing: border-box;\n    border: 0;\n    background-color: #eee;\n    display: block;\n    width: 100%;\n}\n\nbutton {\n    background-color: #575ed8;\n    color: #fff;\n    font-size: 18px;\n    border: 0;\n    padding: 12px 0;\n    width: 100%;\n    border-radius: 5px;\n} */\n\n/* line 3, ../sass/components/chat-window.scss */\n.chat-window {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n}\n  /* line 9, ../sass/components/chat-window.scss */\n  .chat-window .col-xs-12.col-md-12 {\n    padding: 0;\n    height: 100%;\n  }\n  /* line 13, ../sass/components/chat-window.scss */\n  .chat-window .panel {\n    border: 0;\n    border-radius: 5px 5px 0 0;\n    margin-bottom: 0;\n    height: 100%;\n  }\n  \n  /* line 3, ../sass/components/chat-top-bar.scss */\n  .chat-top-bar {\n    background: #666;\n    color: #fff;\n    overflow: hidden;\n    padding: 10px;\n    position: relative;\n    height: 70px;\n    max-height: 70px;\n    border-radius: 0;\n  }\n  /* line 13, ../sass/components/chat-top-bar.scss */\n  .chat-top-bar .icon-minim {\n    padding: 2px 10px;\n  }\n  \n  /* line 3, ../sass/components/chat-bottom-bar.scss */\n  .chat-bottom-bar {\n    overflow: hidden;\n    padding: 10px;\n    position: relative;\n    height: 70px;\n    max-height: 70px;\n  }\n  /* line 10, ../sass/components/chat-bottom-bar.scss */\n  .chat-bottom-bar .icon-minim {\n    padding: 2px 10px;\n  }\n  /* line 14, ../sass/components/chat-bottom-bar.scss */\n  .chat-bottom-bar input {\n    height: calc(70px - 30px);\n  }\n  \n  /* line 4, ../sass/components/chat-msg-container.scss */\n  .msg-container-base {\n    background: #e5e5e5;\n    margin: 0;\n    height: calc(100% - 140px);\n    overflow: scroll;\n    overflow-x: hidden;\n    padding: 0 10px 10px;\n  }\n  /* line 11, ../sass/components/chat-msg-container.scss */\n  .msg-container-base::-webkit-scrollbar-track {\n    background-color: #f5f5f5;\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  }\n  /* line 16, ../sass/components/chat-msg-container.scss */\n  .msg-container-base::-webkit-scrollbar {\n    background-color: #f5f5f5;\n    width: 12px;\n  }\n  /* line 21, ../sass/components/chat-msg-container.scss */\n  .msg-container-base::-webkit-scrollbar-thumb {\n    background-color: #555;\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  }\n  /* line 26, ../sass/components/chat-msg-container.scss */\n  .msg-container-base .msg-container {\n    display: -ms-flexbox;\n    display: flex;\n    overflow: hidden;\n    padding: 10px;\n  }\n  \n  /* line 2, ../sass/components/chat-msg.scss */\n  .chat-msg {\n    background: #fff;\n    border-radius: 2px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n    max-width: 100%;\n    padding: 10px;\n  }\n  /* line 9, ../sass/components/chat-msg.scss */\n  .chat-msg p {\n    font-size: 13px;\n    margin: 0 0 .2rem;\n    float: initial;\n  }\n  /* line 14, ../sass/components/chat-msg.scss */\n  .chat-msg time {\n    color: #ccc;\n    font-size: 11px;\n  }\n  /* line 19, ../sass/components/chat-msg.scss */\n  .chat-msg .chat-msg-author {\n    display: block;\n  }\n  /* line 23, ../sass/components/chat-msg.scss */\n  .chat-msg.chat-msg-receive {\n    margin-right: 0;\n    padding-bottom: 20px;\n  }\n  /* line 28, ../sass/components/chat-msg.scss */\n  .chat-msg.chat-msg-sent {\n    margin-right: 0;\n    padding-bottom: 20px;\n  }\n  /* line 32, ../sass/components/chat-msg.scss */\n  .chat-msg.chat-msg-sent .chat-msg-author {\n    text-align: right;\n  }\n  /* line 36, ../sass/components/chat-msg.scss */\n  .chat-msg.chat-msg-sent time {\n    float: right;\n  }\n  .time {\n    display: block;\n  }\n\n\n\n\n  body {\n  background-color: #3498db;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n}\n\n.container {\n  /* margin: 60px auto; */\n  background: #fff;\n  padding: 0;\n  border-radius: 7px;\n}\n\n.test {\n  margin: inherit;\n  margin-right: 10px;\n}\n\n.profile-image {\n  width: 50px;\n  height: 50px;\n  border-radius: 40px;\n}\n\n.settings-tray {\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 7px;\n  display: -ms-flexbox;\n  display: flex;\n}\n.settings-tray .no-gutters {\n  padding: 0;\n}\n.settings-tray--right {\n  float: right;\n  margin-top: 10px;\n}\n.settings-tray--right i {\n  margin-top: 10px;\n  font-size: 25px;\n  color: grey;\n  margin-left: 14px;\n  transition: .3s;\n}\n.settings-tray--right i:hover {\n  color: #74b9ff;\n  cursor: pointer;\n}\n\n.search-box {\n  background: #fafafa;\n  padding: 10px 13px;\n}\n.search-box .input-wrapper {\n  background: #fff;\n  border-radius: 40px;\n}\n.search-box .input-wrapper i {\n  color: grey;\n  margin-left: 7px;\n  vertical-align: middle;\n}\n\n.search {\n  border: none;\n  border-radius: 30px;\n  width: 80%;\n}\ninput:-ms-input-placeholder {\n  color: #e3e3e3;\n  font-weight: 300;\n  margin-left: 20px;\n}\ninput::placeholder {\n  color: #e3e3e3;\n  font-weight: 300;\n  margin-left: 20px;\n}\ninput:focus {\n  outline: none;\n}\n\n.friend-drawer {\n  padding: 10px 15px;\n  display: -ms-flexbox;\n  display: flex;\n  vertical-align: baseline;\n  transition: .3s ease;\n}\n\n.friend-drawers {\n  padding: 10px 15px;\n  vertical-align: baseline;\n  transition: .3s ease;\n}\n.friend-drawers .text-header {\n  display: inline-table;\n  margin-left: 10px;\n}\n.friend-drawers .text-header h6 {\n  margin-bottom: 2px;\n}\n\n@media screen and (max-width:768px){\n  .friend-drawer .text {\n    margin-left: 12px !important;\n    /* width: 40% !important; */\n  }\n}\n\n.friend-drawer .text {\n  margin-left: 12px;\n  width: 80%;\n}\n.friend-drawer .text h6 {\n  margin-top: 6px;\n  margin-bottom: 0;\n}\n.friend-drawer .text p {\n  margin: 0;\n}\n.friend-drawer .time {\n  color: grey;\n}\n.friend-drawer--onhover:hover {\n  background: #74b9ff;\n  cursor: pointer;\n}\n.friend-drawer--onhover:hover p,\n.friend-drawer--onhover:hover h6,\n.friend-drawer--onhover:hover .time {\n  color: #fff !important;\n}\n\nhr {\n  margin: 5px auto;\n  width: 60%;\n}\n.chat-panel {\n  height: 100%;\n  -ms-flex:1;\n      flex:1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse;\n}\n\n@media screen and (max-width:768px){\n  .chat-content {\n    max-height: 79vh !important;\n    height: 79vh !important;\n  }\n  .offset-md-9 .chat-bubble {\n    right: 0 !important;\n    background: #74b9ff;\n    color: #fff;\n    float: right;\n    max-width: 77% !important;\n\n  }\n  .chat-bubble--left:after {\n    left: 0;\n    border-right-color: #82e03a;\n    border-left: 0;\n  }\n  .max-left-msg {\n    max-width: 80% !important;\n  }\n  .chat-bubble--right:after {\n    right: 0 !important;\n    border-left-color: #74b9ff !important;\n    border-right: 0 !important;\n  }\n  .text-clock {\n    font-size: 10px !important;\n    float: right !important;\n    margin-top: 10px !important;\n    margin-left: 10px !important;\n  }\n}\n\n.chat-bubble {\n  padding: 10px 14px;\n  background: #82e03a;\n  margin: 10px 0px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  border-radius: 9px;\n  position: relative;\n  /* animation: fadeIn 1s ease-in; */\n}\n.chat-bubble:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 20px solid transparent;\n  border-bottom: 0;\n  margin-top: -10px;\n}\n.chat-bubble--left:after {\n  left: 0; \n  border-right-color: #82e03a;\n  border-left: 0;\n  margin-left: -10px;\n  max-width: 77% !important;\n}\n.max-left-msg {\n  max-width: 270% ;\n}\n.max-left-msg-right {\n  max-width:  270%;\n  float: right;\n  right: 0px;\n}\n.chat-bubble--right:after {\n  right: 0;\n  border-left-color: #74b9ff;\n  border-right: 0;\n  margin-right: -10px;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.offset-md-9 .chat-bubble {\n  background: #74b9ff;\n  color: #fff;\n}\n\n/* .body-content {\n  height: 74vh;\n} */\n\n#data-list-container{\n  max-height: 79vh;\n}\n\n.message-content {\n  max-height: 80vh;\n  height: 80vh;\n}\n\n.text-clock {\n  font-size: 10px;\n  float: right;\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n.chat-box-tray {\n  background: #eee;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: baseline;\n      align-items: baseline;\n  padding: 5px;\n  -ms-flex-align: center;\n      align-items: center;\n  bottom: 0;\n}\n\n.chat-box-tray i {\n  color: grey;\n  font-size: 30px;\n  vertical-align: middle;\n}\n.chat-box-tray i:last-of-type {\n  margin-left: 25px;\n}\n#data-list-container {\n  height: 100%;\n  -ms-flex:1;\n      flex:1;\n  overflow-y: auto;\n  position: relative;\n}\n\n.start_new_message {\n  text-align: center;\n  vertical-align: middle;\n  padding-top: 300px;\n  padding-bottom: 300px;   \n}\n\n.text p {\n  color: gray;\n}\n\n.pull-right {\n  float: right !important;\n}\n.small {\n  float: right !important;\n}\n\n.message-text-left {\n  float: left;\n  color: grey;\n}\n\n.time-small{\n  color: gray;\n  float: right;\n}\n\n.smiley {\n  height: 26px;\n  width: 26px;\n  color: #919191;\n  margin-top: 7px;\n  margin-right: 7px;\n}\n\n.chat-submit-button {\n  background-color: #3498db;\n  color: #fff;\n}\n.chat-submit-button:hover {\n  background-color: #82e03a;\n  color: #000;\n}\n.isOnline {\n  background-color: #82e03a;\n  float: right;\n  height: 10px;\n  width: 10px;\n  border-radius: 5px;\n}\n.Online {\n  background-color: #82e03a;\n}\n\n.isOffline {\n  background-color: rgb(51, 44, 44);\n  float: right;\n  height: 10px;\n  width: 10px;\n  border-radius: 5px;\n}\n.Offline {\n  background-color: rgb(51, 44, 44);\n}\n\n.isAway {\n  background-color: #ffd21f;\n  float: right;\n  height: 10px;\n  width: 10px;\n  border-radius: 5px;\n}\n\n.Away {\n  background-color: #ffd21f;\n}\n\n.isBussy {\n  background-color:#f5455c;\n  float: right;\n  height: 10px;\n  width: 10px;\n  border-radius: 5px;\n}\n\n.Bussy {\n  background-color:#f5455c;\n}\n\n.isInvisible {\n  background-color: #cbced1;\n  float: right;\n  height: 10px;\n  width: 10px;\n  border-radius: 5px;\n}\n\n.Invisible {\n  background-color: #cbced1;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let s of sizes\" class=\"{{s.css + ' ' + (prefix + s.id) }}\"></div>\n<div *ngIf=\"authService.loggedIn()\">\n  <div *ngIf=\"user\" class=\"container-fluid\">\n    <div class=\"row no-gutters\">\n        <div *ngIf=\"!sizeBoolean || showHeaderMsg && !showBodyMsg\" class=\"col-md-4 border-right\">\n            <div class=\"settings-tray\" [ngClass]=\"{'Online': user.status === 'Online', 'Offline': user.status === 'Offline', 'Away': user.status === 'Away' , 'Bussy': user.status === 'Bussy', 'Invisible': user.status === 'Invisible' }\">\n              <div class=\"col-md-2 col-sm-2 col-xs-2 col-3\">\n                <img class=\"profile-image\" [src]=\"user.photo\" alt=\"Profile img\">\n              </div>\n              <div class=\"col-md-6 col-sm-6 col-xs-6 col-4 text-center\">\n                <select id=\"inputState\" [(ngModel)]=\"selectedStatus\" (change)=\"activeClick($event.target.value)\" class=\"form-control settings-tray--right\">\n                  <option [ngValue]=\"null\" [disabled]=\"true\" >Select Status</option>\n                  <option *ngFor=\"let status of userStatus\" [ngValue]=\"status\">{{status.name}}</option>\n                </select>\n              </div>\n              <div class=\"col-md-4 col-sm-4 col-xs-4 col-5 .d-sm-none .d-md-block\">\n                <span class=\"settings-tray--right\">\n                  <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n                  <i class=\"material-icons\">message</i>\n                  <i class=\"material-icons\">menu</i>\n                </span>\n              </div>\n            </div>\n            <div class=\"search-box\">\n              <div class=\"input-wrapper\">\n                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                <input class=\"search\" [(ngModel)]=\"searchTerm\" (ngModelChange)= \"search()\" placeholder=\"Search here\" type=\"text\">\n              </div>\n            </div>\n            <div id='data-list-container'>\n              <div *ngFor=\"let value of allUsers\" class=\"friend-drawer friend-drawer--onhover\" (click)=\"selectUserClick(value, true)\">\n                <img class=\"profile-image\" [src]=\"value.photo\" alt=\"image\">\n                <div class=\"text\">\n                  <div [ngClass]=\"{'isOnline': value.status === 'Online', 'isOffline': value.status === 'Offline', 'isAway': value.status === 'Away' , 'isBussy': value.status === 'Bussy', 'isInvisible': value.status === 'Invisible' }\">\n                  </div>\n                  <h6>{{value.username}}</h6>\n                  <div *ngFor=\"let item of value.lastMessage\">\n                    <span *ngIf='value' class=\"time-small\">{{item.date | date:'shortTime'}}</span>\n                     <p class=\"message-text-left\">{{item.message}}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr>\n          </div>\n          <div *ngIf=\"showBodyMsg || size != 0 && size != 1\" class=\"chat-window col-xs-5 col-md-8\">\n            <div class=\"col-xs-12 col-md-12\">\n                <div class=\"panel\">\n                    <div *ngFor=\"let item of itemUserSelected\" class=\"friend-drawers no-gutters panel-heading chat-top-bar\">\n                      <div class=\"row no-gutters\">\n                        <div class=\"col-md-9\">\n                          <span *ngIf=\"size == 0 || size == 1\" (click)=\"goBackMail(true)\" class=\"settings-tray--right test\">\n                            <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n                          </span>\n                          <img class=\"profile-image\" [src]=\"item.photo\" alt=\"\">\n                          <div class=\"text-header\">\n                            <h6>{{item.username}}</h6>\n                            <p>{{writing}}</p>\n                          </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                          <span class=\"settings-tray--right\">\n                            <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n                            <i class=\"material-icons\">menu</i>\n                          </span>\n                        </div>\n                      </div>\n                      </div>\n                    <div class=\"panel-body\" style=\"max-height: 74vh; height: 74vh;\">\n                        <div class=\"msg-container-base\" *ngIf=\"messages.length > 0\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n                            <div class=\"row no-gutters msg-container\" *ngFor=\"let usermessage of messages | orderBy:'date'\">\n                                <div [ngClass]=\"(usermessage.selfAuthored)?'col-md-3 offset-md-9':'col-md-3 '\">\n                                  <div [ngClass]=\"(usermessage.selfAuthored)?' chat-bubble chat-bubble--right max-left-msg-right':'chat-bubble chat-bubble--left max-left-msg'\">\n                                    {{usermessage.message}}\n                                    <span class=\"text-right text-clock\">{{usermessage.date | date:'shortTime'}}</span>\n                                  </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"start_new_message\" *ngIf=\"messages.length == 0\">\n                            <h1>Please start a new message </h1>\n                        </div>\n                        <p>{{actions}}</p>\n                        <div class=\"chat-bottom-bar\">\n                            <form style=\"display: inherit;\" (ngSubmit)=\"sendMessage()\" action=\"\">\n                                <div class=\"input-group\">\n                                  <span class=\"smiley\">\n                                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n                                        <path fill=\"currentColor\"\n                                          d=\"M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z\">\n                                        </path>\n                                      </svg>\n                                  </span>\n                                  \n                                  <input id=\"messageText\" type=\"text\" class=\"form-control input-sm chat-input\" (keyup.enter)=\"onEnter($event)\" (ngModelChange)=\"typing(messageText)\" placeholder=\"Enter message\" [(ngModel)]=\"messageText\" name=\"messageText\">\n                                    <span class=\"input-group-btn\"></span>\n                                    <input type=\"submit\" class=\"btn btn-sm chat-submit-button\" value=\"Send\">\n    \n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n\n\n<script src=\"/socket.io/socket.io.js\"></script>"

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_size_detector_resize_service__ = __webpack_require__("../../../../../src/app/services/size-detector/resize-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_size_detector_screen_size_enum__ = __webpack_require__("../../../../../src/app/services/size-detector/screen-size.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatComponent = (function () {
    //private socket: any;
    function ChatComponent(chat, resizeSvc, router, elementRef, authService) {
        var _this = this;
        this.chat = chat;
        this.resizeSvc = resizeSvc;
        this.router = router;
        this.elementRef = elementRef;
        this.authService = authService;
        this.msgReceived = [];
        this.avatar = 'https://api.adorable.io/avatars/40/abott@adorable.png';
        this.selfAuthored = false;
        this.items = this.itemsCopy;
        this.itemUserSelected = [];
        this.copyUsers = [];
        this.allUsers = [];
        this.userStatus = [
            { id: 1, name: "Online" },
            { id: 2, name: "Offline" },
            { id: 3, name: "Away" },
            { id: 4, name: "Bussy" },
            { id: 5, name: "Invisible" }
        ];
        this.selectedStatus = null;
        this.prefix = 'is-';
        this.sizes = [
            {
                id: __WEBPACK_IMPORTED_MODULE_5__services_size_detector_screen_size_enum__["a" /* SCREEN_SIZE */].XS, name: 'xs',
                css: "d-block d-sm-none"
            },
            {
                id: __WEBPACK_IMPORTED_MODULE_5__services_size_detector_screen_size_enum__["a" /* SCREEN_SIZE */].SM, name: 'sm',
                css: "d-none d-sm-block d-md-none"
            },
            {
                id: __WEBPACK_IMPORTED_MODULE_5__services_size_detector_screen_size_enum__["a" /* SCREEN_SIZE */].MD, name: 'md',
                css: "d-none d-md-block d-lg-none"
            },
            {
                id: __WEBPACK_IMPORTED_MODULE_5__services_size_detector_screen_size_enum__["a" /* SCREEN_SIZE */].LG, name: 'lg',
                css: "d-none d-lg-block d-xl-none"
            },
            {
                id: __WEBPACK_IMPORTED_MODULE_5__services_size_detector_screen_size_enum__["a" /* SCREEN_SIZE */].XL, name: 'xl',
                css: "d-none d-xl-block"
            },
        ];
        this.resizeSvc.onResize$
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["delay"])(0))
            .subscribe(function (x) {
            _this.size = x;
            _this.sizeBoolean = (x <= 1) ? true : false;
        });
        if (!this.sizeBoolean || this.sizeBoolean == undefined) {
            this.showBodyMsg = false;
            this.showHeaderMsg = true;
        }
        else {
            this.showHeaderMsg = true;
            this.showBodyMsg = false;
        }
    }
    ChatComponent.prototype.onResize = function () {
        this.detectScreenSize();
    };
    ChatComponent.prototype.ngAfterViewInit = function () {
        this.detectScreenSize();
    };
    ChatComponent.prototype.detectScreenSize = function () {
        var _this = this;
        var currentSize = this.sizes.find(function (x) {
            var el = _this.elementRef.nativeElement.querySelector("." + _this.prefix + x.id);
            var isVisible = window.getComputedStyle(el).display != 'none';
            return isVisible;
        });
        this.resizeSvc.onResize(currentSize.id);
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isLogged = this.authService.loggedIn();
        if (isLogged) {
            this.authService.getProfile().subscribe(function (profile) {
                _this.user = profile.user;
                _this.email = profile.user.email;
                _this.getAllUsers();
                var user = {
                    username: _this.user.username,
                    status: 'Online'
                };
                _this.user.status = profile.status == undefined ? 'Online' : profile.status;
                _this.getLast(profile.user.message, true);
                _this.chat.emit('user-connected', user);
            }, function (err) {
                console.log(err);
                return false;
            });
            this.messages = new Array();
            this.chat.on('message-received', function (msg) {
                if (_this.user.username == msg.username) {
                    msg.selfAuthored = false;
                }
                else {
                    msg.selfAuthored = true;
                }
                _this.getUserMessages(msg, false);
                _this.getLast(msg, false);
                _this.actions = '';
                _this.writing = '';
            });
            this.chat.on('user-connected', function (data) {
                _this.getUsersConected(_this.allUsers, data);
            });
            this.chat.on('typing', function (data) {
                if (data == 13) {
                    _this.actions = '';
                    _this.writing = '';
                }
                if (data.text == '') {
                    _this.actions = '';
                    _this.writing = '';
                }
                if (data.text == null) {
                    _this.actions = '';
                    _this.writing = '';
                }
                if (data.text != undefined) {
                    _this.actions = data.username + ' is typing a message';
                    _this.writing = 'Typing...';
                }
                else {
                    _this.actions = '';
                    _this.writing = '';
                }
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    ChatComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.authService.getUsers().subscribe(function (data) {
            _this.allUsers = data;
            _this.itemsCopy = data;
            for (var i = 0; i < _this.allUsers.length; ++i) {
                if (_this.allUsers[i].email === _this.email) {
                    _this.allUsers.splice(i, 1); // Remove even numbers
                }
            }
        }, function (err) {
            return false;
        });
    };
    ChatComponent.prototype.activeClick = function () {
        var user = {
            username: this.user.username,
            status: this.selectedStatus.name
        };
        this.chat.emit('user-connected', user);
        this.user.status = this.selectedStatus.name;
    };
    ChatComponent.prototype.getUsersConected = function (allUsers, userConected) {
        if (allUsers != undefined) {
            if (allUsers.length > 0) {
                allUsers.forEach(function (element) {
                    if (userConected.username != undefined) {
                        if (element.username == userConected.username.username) {
                            element.status = userConected.username.status;
                        }
                    }
                });
            }
        }
    };
    ChatComponent.prototype.selectUserClick = function (val, isUserSelected) {
        if (val != undefined && isUserSelected) {
            this.messages = [];
            this.itemUserSelected.push(val);
            this.getUserMessages(val, isUserSelected);
            if (this.itemUserSelected.length > 1) {
                this.itemUserSelected.shift();
            }
            if (isUserSelected && this.sizeBoolean) {
                this.showBodyMsg = true;
                this.showHeaderMsg = false;
            }
            else {
                this.showHeaderMsg = true;
            }
        }
    };
    ChatComponent.prototype.getUserMessages = function (data, isMsgSent) {
        var _this = this;
        if (!isMsgSent) {
            this.messages.push(data);
            this.allUsers.forEach(function (element) {
                if (data.username == element.username) {
                    element.lastMessage.push(data);
                }
                if (element.lastMessage.length > 1) {
                    element.lastMessage.shift();
                }
            });
        }
        else {
            if (data.message.length != undefined) {
                if (data.message.length >= 0) {
                    this.authService.getUserMessages(this.user._id).subscribe(function (item) {
                        item.forEach(function (item) {
                            if (item.username == data.username) {
                                item.selfAuthored = true;
                                _this.messages.push(item);
                            }
                        });
                    }, function (err) {
                        return false;
                    });
                    this.authService.getUserMessages(data._id).subscribe(function (value) {
                        value.forEach(function (item) {
                            if (item.username == _this.user.username) {
                                item.selfAuthored = false;
                                _this.messages.push(item);
                                _this.sortDate(_this.messages);
                            }
                        });
                    }, function (err) {
                        return false;
                    });
                }
            }
        }
    };
    ChatComponent.prototype.sortDate = function (val) {
        var _this = this;
        if (val != undefined) {
            var bar = new Promise(function (resolve, reject) {
                val.sort(function (a, b) {
                    resolve();
                    return new Date(a.date) - new Date(b.date);
                });
            });
            bar.then(function () {
                _this.getLast(val.slice(-1)[0], true);
            });
        }
    };
    ChatComponent.prototype.getLast = function (val, isBolean) {
        var _this = this;
        if (isBolean) {
            if (val != undefined) {
                if (val.length > 0) {
                    this.lastMessage = val.slice(-1)[0].username;
                    this.allUsers.forEach(function (element) {
                        if (_this.lastMessage == element.username) {
                            var object = element.message.slice(-1)[0];
                            element.lastMessage.push(object);
                        }
                        if (element.lastMessage.length > 1) {
                            element.lastMessage.shift();
                        }
                    });
                }
                else {
                    this.allUsers.forEach(function (element) {
                        if (val.username == element.username) {
                            element.lastMessage.push(val);
                        }
                        if (element.lastMessage.length > 1) {
                            element.lastMessage.shift();
                        }
                    });
                }
            }
        }
        else {
            this.allUsers.forEach(function (item) {
                if (val.idUserSent == item._id) {
                    item.lastMessage.push(val);
                }
                if (item.lastMessage.length > 1) {
                    item.lastMessage.shift();
                }
            });
        }
    };
    ChatComponent.prototype.goBackMail = function (val) {
        if (val) {
            this.showBodyMsg = false;
            this.showHeaderMsg = true;
        }
    };
    ChatComponent.prototype.search = function () {
        var term = this.searchTerm;
        this.allUsers = this.itemsCopy.filter(function (tag) {
            return tag.name.toLowerCase().indexOf(term) >= 0;
        });
    };
    ChatComponent.prototype.typing = function (val) {
        this.actions = '';
        this.writing = '';
        if (val != undefined) {
            if (val.length == 1) {
                var data = {
                    username: this.user.username,
                    text: null
                };
                this.chat.emit('typing', data);
            }
            else {
                var data = {
                    username: this.user.username,
                    text: val
                };
                this.chat.emit('typing', data);
            }
        }
    };
    ChatComponent.prototype.onEnter = function (e) {
        this.chat.emit('typing', e.keyCode);
    };
    ChatComponent.prototype.sendMessage = function () {
        var sendMessage = {
            idUserSent: this.user._id,
            username: this.itemUserSelected[0].username,
            message: this.messageText,
            date: new Date(),
            imageUrl: this.avatar
        };
        if (sendMessage.message != undefined) {
            if (sendMessage.message != '') {
                this.chat.emit('send-message', sendMessage);
                this.messageText = '';
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:resize", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChatComponent.prototype, "onResize", null);
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_4__services_size_detector_resize_service__["a" /* ResizeService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".testingg{\n    position: absolute;\n    margin-top: 50px;\n    padding: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your Dashboard</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.test = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isLogged = this.authService.loggedIn();
        if (isLogged) {
            this.authService.getProfile().subscribe(function (profile) {
                _this.user = profile.user;
            }, function (err) {
                console.log(err);
                return false;
            });
        }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/forgot/forgot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters justify-content-center fadeInDown\">\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <header class=\"card-header fadeIn first\">\n        <a [routerLink]=\"['/login']\" class=\"nav-link float-right btn btn-outline-primary mt-1\">Log in</a>\n        <h4 class=\"card-title mt-2\">Forgot Password</h4>\n      </header>\n      <article class=\"card-body\">\n        <form (submit)=\"onEmailSubmit()\">\n          \n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control fadeIn third\" id=\"email\"\n              aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div> <!-- form-group end.// -->\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block\"> Forgot Password </button>\n          </div> <!-- form-group// -->\n        </form>\n      </article> <!-- card-body end .// -->\n      <div class=\"border-top card-body text-center\">Have an account? <a [routerLink]=\"['/login']\">Log In</a></div>\n    </div> <!-- card.// -->\n  </div> <!-- col.//-->\n\n</div> <!-- row.//-->"

/***/ }),

/***/ "../../../../../src/app/components/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotComponent = (function () {
    function ForgotComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent.prototype.onEmailSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
        };
        // Required Fields
        if (!this.validateService.validateEmailEmpty(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register user
        this.authService.forgotPassword(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                // this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/forgot']);
            }
        });
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__("../../../../../src/app/components/forgot/forgot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>MEAN Authentication App</h1>\n  <p class=\"lead\">Welcome to our custom MEAN authentication application built from scratch </p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-dark\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#formContent {\n    border-radius: 10px 10px 10px 10px;\n    background: #fff;\n    padding: 30px;\n    width: 90%;\n    max-width: 450px;\n    position: relative;\n    padding: 0px;\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n    text-align: center;\n  }\n  \n  #formFooter {\n    background-color: #f6f6f6;\n    border-top: 1px solid #dce8f1;\n    padding: 25px;\n    text-align: center;\n    border-radius: 0 0 10px 10px;\n  }\n  \n  \n  \n  /* TABS */\n  \n  h2.inactive {\n    color: #cccccc;\n  }\n  \n  h2.active {\n    color: #0d0d0d;\n    border-bottom: 2px solid #5fbae9;\n  }\n  \n  \n  \n  /* FORM TYPOGRAPHY*/\n  \n  input[type=button], input[type=submit], input[type=reset]  {\n    background-color: #56baed;\n    border: none;\n    color: white;\n    padding: 15px 80px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 13px;\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n    border-radius: 5px 5px 5px 5px;\n    transition: all 0.3s ease-in-out;\n  }\n  \n  input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\n    background-color: #39ace7;\n  }\n  \n  input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\n    transform: scale(0.95);\n  }\n  \n  input[type=text],\n  input[type=password] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 85%;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n  }\n  \n  input[type=text]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n  }\n  \n  input[type=text]:placeholder {\n    color: #cccccc;\n  }\n  \n  \n  \n  /* ANIMATIONS */\n  \n  /* Simple CSS3 Fade-in-down Animation */\n  .fadeInDown {\n    animation-name: fadeInDown;\n    animation-duration: 1s;\n    animation-fill-mode: both;\n  }\n  \n  @keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      transform: none;\n    }\n  }\n  \n  /* Simple CSS3 Fade-in Animation */\n  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  \n  .fadeIn {\n    opacity:0;\n    animation:fadeIn ease-in 1;\n    animation-fill-mode:forwards;\n    animation-duration:1s;\n  }\n  \n  .fadeIn.first {\n    animation-delay: 0.4s;\n  }\n  \n  .fadeIn.second {\n    animation-delay: 0.6s;\n  }\n  \n  .fadeIn.third {\n    animation-delay: 0.8s;\n  }\n  \n  .fadeIn.fourth {\n    animation-delay: 1s;\n  }\n  \n  /* Simple CSS3 Fade-in Animation */\n  .underlineHover:after {\n    display: block;\n    left: 0;\n    bottom: -10px;\n    width: 0;\n    height: 2px;\n    background-color: #56baed;\n    content: \"\";\n    transition: width 0.2s;\n  }\n  \n  .underlineHover:hover {\n    color: #0d0d0d;\n  }\n  \n  .underlineHover:hover:after{\n    width: 100%;\n  }\n  \n  \n  \n  /* OTHERS */\n  \n  *:focus {\n      outline: none;\n  } \n  \n  #icon {\n    width:60%;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters justify-content-center fadeInDown\">\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <header class=\"card-header fadeIn first\">\n        <a [routerLink]=\"['/register']\" class=\"nav-link float-right btn btn-outline-primary mt-1\">Register</a>\n        <h4 class=\"card-title mt-2\">Log In</h4>\n      </header>\n      <article class=\"card-body\">\n        <form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"Username\">Username</label>\n            <input type=\"text\" class=\"form-control fadeIn second\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\n          </div>\n          <div class=\"form-group\">\n          <label for=\"Password\">Password</label>\n          <input type=\"password\" class=\"form-control fadeIn third\" autocomplete=\"on\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n          </div>\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" value=\"remember-me\"> Remember me\n            </label>\n          </div>\n          <input class=\"btn btn-primary btn-block\" type=\"submit\" value=\"Login\">\n        </form>\n      </article> <!-- card-body end .// -->\n      <div class=\"border-top card-body text-center\">Go home? <a [routerLink]=\"['/']\">Home</a></div>\n      <div class=\"border-top card-body text-center\">Forgot password? <a [routerLink]=\"['/forgot']\" >Forgot</a></div>\n    </div> <!-- card.// -->\n  </div> <!-- col.//-->\n\n</div> <!-- row.//-->\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
                setTimeout(function () { location.reload(true); }, 500);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/mailbox/mailbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/mailbox/mailbox.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  mailbox works\n</p>"

/***/ }),

/***/ "../../../../../src/app/components/mailbox/mailbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MailboxComponent = (function () {
    function MailboxComponent() {
    }
    MailboxComponent.prototype.ngOnInit = function () {
    };
    MailboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mailbox',
            template: __webpack_require__("../../../../../src/app/components/mailbox/mailbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/mailbox/mailbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MailboxComponent);
    return MailboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/mailbox/order-by.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        if (typeof args[0] === "undefined") {
            return array;
        }
        var direction = args[0][0];
        var column = args.replace('-', '');
        array.sort(function (a, b) {
            var left = Number(new Date(a[column]));
            var right = Number(new Date(b[column]));
            return (direction === "-") ? right - left : left - right;
        });
        return array;
    };
    OrderByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'orderBy',
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700);", ""]);

// module
exports.push([module.i, "/*\n    DEMO STYLE\n*/\n\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    background: #fafafa;\n}\n\np {\n    font-family: 'Poppins', sans-serif;\n    font-size: 1.1em;\n    font-weight: 300;\n    line-height: 1.7em;\n    color: #999;\n}\n\na, a:hover, a:focus {\n    color: inherit;\n    text-decoration: none;\n    transition: all 0.3s;\n}\n\n.navbar {\n    padding: 15px 10px;\n    background: #fff;\n    border: none;\n    border-radius: 0;\n    margin-bottom: 40px;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.navbar-btn {\n    box-shadow: none;\n    outline: none !important;\n    border: none;\n}\n\n.line {\n    width: 100%;\n    height: 1px;\n    border-bottom: 1px dashed #ddd;\n    margin: 40px 0;\n}\n\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n\n.wrapper {\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -ms-flex-align: stretch;\n        align-items: stretch;\n    perspective: 1500px;\n}\n\n\n#sidebar {\n    min-width: 250px;\n    max-width: 250px;\n    background: #7386D5;\n    color: #fff;\n    transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);\n    transform-origin: bottom left;\n}\n\n#sidebar.active {\n    margin-left: -250px;\n    transform: rotateY(100deg);\n}\n\n#sidebar .sidebar-header {\n    padding: 20px;\n    background: #6d7fcc;\n}\n\n#sidebar ul.components {\n    padding: 20px 0;\n    border-bottom: 1px solid #47748b;\n}\n\n#sidebar ul p {\n    color: #fff;\n    padding: 10px;\n}\n\n#sidebar ul li a {\n    padding: 10px;\n    font-size: 1.1em;\n    display: block;\n}\n#sidebar ul li a:hover {\n    color: #7386D5;\n    background: #fff;\n}\n\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\n    color: #fff;\n    background: #6d7fcc;\n}\n\n\na[data-toggle=\"collapse\"] {\n    position: relative;\n}\n\n.dropdown-toggle::after {\n    display: block;\n    position: absolute;\n    top: 50%;\n    right: 20px;\n    transform: translateY(-50%);\n}\n\nul ul a {\n    font-size: 0.9em !important;\n    padding-left: 30px !important;\n    background: #6d7fcc;\n}\n\nul.CTAs {\n    padding: 20px;\n}\n\nul.CTAs a {\n    text-align: center;\n    font-size: 0.9em !important;\n    display: block;\n    border-radius: 5px;\n    margin-bottom: 5px;\n}\n\na.download {\n    background: #fff;\n    color: #7386D5;\n}\n\na.article, a.article:hover {\n    background: #6d7fcc !important;\n    color: #fff !important;\n}\n\n\n\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n#content {\n    width: 100%;\n    padding: 20px;\n    min-height: 100vh;\n    transition: all 0.3s;\n}\n\n#sidebarCollapse {\n    width: 40px;\n    height: 40px;\n    background: #f5f5f5;\n    cursor: pointer;\n}\n\n#sidebarCollapse span {\n    width: 80%;\n    height: 2px;\n    margin: 0 auto;\n    display: block;\n    background: #555;\n    transition: all 0.8s cubic-bezier(0.810, -0.330, 0.345, 1.375);\n    transition-delay: 0.2s;\n}\n\n#sidebarCollapse span:first-of-type {\n    transform: rotate(45deg) translate(2px, 2px);\n}\n#sidebarCollapse span:nth-of-type(2) {\n    opacity: 0;\n}\n#sidebarCollapse span:last-of-type {\n    transform: rotate(-45deg) translate(1px, -1px);\n}\n\n\n#sidebarCollapse.active span {\n    transform: none;\n    opacity: 1;\n    margin: 5px auto;\n}\n\n\n/* ---------------------------------------------------\n    MEDIAQUERIES\n----------------------------------------------------- */\n@media (max-width: 768px) {\n    #sidebar {\n        margin-left: -250px;\n        transform: rotateY(90deg);\n    }\n    #sidebar.active {\n        margin-left: 0;\n        transform: none;\n    }\n    #sidebarCollapse span:first-of-type,\n    #sidebarCollapse span:nth-of-type(2),\n    #sidebarCollapse span:last-of-type {\n        transform: none;\n        opacity: 1;\n        margin: 5px auto;\n    }\n    #sidebarCollapse.active span {\n        margin: 0 auto;\n    }\n    #sidebarCollapse.active span:first-of-type {\n        transform: rotate(45deg) translate(2px, 2px);\n    }\n    #sidebarCollapse.active span:nth-of-type(2) {\n        opacity: 0;\n    }\n    #sidebarCollapse.active span:last-of-type {\n        transform: rotate(-45deg) translate(1px, -1px);\n    }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.test = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isLogged = this.authService.loggedIn();
        if (isLogged) {
            this.authService.getProfile().subscribe(function (profile) {
                _this.user = profile.user;
            }, function (err) {
                console.log(err);
                return false;
            });
        }
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent.prototype.onClickMe = function (val) {
        console.log(val);
        this.test = !val;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"container bootstrap snippet\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\"><!--left col-->\n      <div class=\"text-center\">\n        <img [src]=\"user.photo\" class=\"avatar img-circle img-thumbnail\" alt=\"avatar\">\n        <!-- <input type=\"file\" class=\"text-center center-block file-upload\"> -->\n      </div>\n    </div><!--/col-3-->\n    <div class=\"col-sm-9\">\n        <div class=\"tab-content\">\n          <div class=\"tab-pane active\">\n              <form class=\"form\" (ngSubmit)=\"updateUserDetails(user)\">\n                    <div class=\"form-group\">\n                        <div class=\"col-xs-6\">\n                            <label for=\"first_name\"><h4>Name</h4></label>\n                            <input type=\"text\" class=\"form-control\" name=\"first_name\" [(ngModel)]=\"user.name\" placeholder=\"first name\" title=\"enter your first name if any.\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        \n                        <div class=\"col-xs-6\">\n                          <label for=\"username\"><h4>Username </h4></label>\n                            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"last name\" title=\"enter your last name if any.\">\n                        </div>\n                    </div>\n        \n                    <div class=\"form-group\">\n                        \n                        <div class=\"col-xs-6\">\n                            <label for=\"phone\"><h4>Phone</h4></label>\n                            <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"user.phone\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"enter phone\" title=\"enter your phone number if any.\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        \n                        <div class=\"col-xs-6\">\n                            <label for=\"email\"><h4>Email</h4></label>\n                            <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"you@email.com\" title=\"enter your email.\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        \n                        <div class=\"col-xs-6\">\n                            <label for=\"address\"><h4>Address</h4></label>\n                            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.address\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"somewhere\" title=\"enter a location\">\n                        </div>\n                    </div>\n                   \n                    <div class=\"form-group\">\n                         <div class=\"col-xs-12\">\n                              <br>\n                              <button class=\"btn btn-lg btn-success\"  type=\"submit\"><i class=\"glyphicon glyphicon-ok-sign\"></i> Save</button>\n                               <button class=\"btn btn-lg\" type=\"reset\"><i class=\"glyphicon glyphicon-repeat\"></i> Reset</button>\n                          </div>\n                    </div>\n              </form>\n           </div><!--/tab-pane-->\n             \n        </div><!--/tab-pane-->\n    </div><!--/tab-content-->\n  </div>\n</div><!--/row-->\n                    "

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.updateUserDetails = function (val) {
        var _this = this;
        var updateUser = {
            _id: this.user._id,
            name: this.user.name,
            email: this.user.email,
            username: this.user.username,
            password: this.user.password,
            photo: this.user.photo,
            phone: this.user.phone,
            address: this.user.address
        };
        this.authService.updateUsers(updateUser).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                setTimeout(function () { location.reload(true); }, 500);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img {\n    margin-left: 0;\n    margin-right: 0;\n}\n\n#formContent {\n    border-radius: 10px 10px 10px 10px;\n    background: #fff;\n    padding: 30px;\n    width: 90%;\n    max-width: 450px;\n    position: relative;\n    padding: 0px;\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n    text-align: center;\n  }\n  \n  #formFooter {\n    background-color: #f6f6f6;\n    border-top: 1px solid #dce8f1;\n    padding: 25px;\n    text-align: center;\n    border-radius: 0 0 10px 10px;\n  }\n  \n  \n  \n  /* TABS */\n  \n  h2.inactive {\n    color: #cccccc;\n  }\n  \n  h2.active {\n    color: #0d0d0d;\n    border-bottom: 2px solid #5fbae9;\n  }\n  \n  \n  \n  /* FORM TYPOGRAPHY*/\n  \n  button  {\n    background-color: #56baed;\n    border: none;\n    color: white;\n    padding: 15px 80px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 13px;\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n    border-radius: 5px 5px 5px 5px;\n    transition: all 0.3s ease-in-out;\n  }\n  \n  input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\n    background-color: #39ace7;\n  }\n  \n  input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\n    transform: scale(0.95);\n  }\n\n  input[type=email],\n  input[type=text],\n  input[type=password] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n  }\n  \n  input[type=text]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n  }\n  \n  input[type=text]:placeholder {\n    color: #cccccc;\n  }\n  \n  \n  \n  /* ANIMATIONS */\n  \n  /* Simple CSS3 Fade-in-down Animation */\n  .fadeInDown {\n    animation-name: fadeInDown;\n    animation-duration: 1s;\n    animation-fill-mode: both;\n  }\n  \n  @keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      transform: none;\n    }\n  }\n  \n  /* Simple CSS3 Fade-in Animation */\n  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  \n  .fadeIn {\n    opacity:0;\n    animation:fadeIn ease-in 1;\n    animation-fill-mode:forwards;\n    animation-duration:1s;\n  }\n  \n  .fadeIn.first {\n    animation-delay: 0.4s;\n  }\n  \n  .fadeIn.second {\n    animation-delay: 0.6s;\n  }\n  \n  .fadeIn.third {\n    animation-delay: 0.8s;\n  }\n  \n  .fadeIn.fourth {\n    animation-delay: 1s;\n  }\n  \n  /* Simple CSS3 Fade-in Animation */\n  .underlineHover:after {\n    display: block;\n    left: 0;\n    bottom: -10px;\n    width: 0;\n    height: 2px;\n    background-color: #56baed;\n    content: \"\";\n    transition: width 0.2s;\n  }\n  \n  .underlineHover:hover {\n    color: #0d0d0d;\n  }\n  \n  .underlineHover:hover:after{\n    width: 100%;\n  }\n  \n  \n  \n  /* OTHERS */\n  \n  *:focus {\n      outline: none;\n  } \n  \n  #icon {\n    width:60%;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters justify-content-center fadeInDown\">\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <header class=\"card-header fadeIn first\">\n        <a [routerLink]=\"['/login']\" class=\"nav-link float-right btn btn-outline-primary mt-1\">Log in</a>\n        <h4 class=\"card-title mt-2\">Sign up</h4>\n      </header>\n      <article class=\"card-body\">\n        <form (submit)=\"onRegisterSubmit()\" enctype=\"multipart/form-data\">\n          <div class=\"form-row\">\n            <div class=\"col form-group\">\n              <label>Name </label>\n              <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control fadeIn second\" id=\"name\" placeholder=\"Enter Name\">\n            </div> <!-- form-group end.// -->\n            <div class=\"col form-group\">\n              <label for=\"username\">Username</label>\n              <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control fadeIn second\" id=\"username\"\n                placeholder=\"Enter Username\">\n            </div> <!-- form-group end.// -->\n          </div> <!-- form-row end.// -->\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control fadeIn third\" id=\"email\"\n              aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div> <!-- form-group end.// -->\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control fadeIn third\" id=\"password\"\n              placeholder=\" Enter Password\">\n          </div> <!-- form-group end.// -->\n          <div class=\"form-group text-center\">\n              <input #photoinput type=\"file\" name=\"image\" accept=\"image/*\" class=\"d-none\"\n                (change)=\"processFile($event)\">\n              <img [src]=\"photoSelected || '../../../assets/upload.png'\" alt=\"\" style=\"width: 200px; height: 200px;\"\n                class=\"img-fluid\" (click)=\"photoinput.click()\" srcset=\"\">\n          </div> <!-- form-group end.// -->\n\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block\"> Register </button>\n          </div> <!-- form-group// -->\n          <small class=\"text-muted\">By clicking the 'Sign Up' button, you confirm that you accept our <br> Terms of use\n            and Privacy Policy.</small>\n        </form>\n      </article> <!-- card-body end .// -->\n      <div class=\"border-top card-body text-center\">Have an account? <a [routerLink]=\"['/login']\">Log In</a></div>\n    </div> <!-- card.// -->\n  </div> <!-- col.//-->\n\n</div> <!-- row.//-->"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.processFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
            var reader_1 = new FileReader();
            reader_1.onload = function (e) { return _this.photoSelected = reader_1.result; };
            reader_1.readAsDataURL(this.file);
        }
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register user
        this.authService.registerUser(user, this.file).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/reset/reset.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reset/reset.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters justify-content-center fadeInDown\">\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <header class=\"card-header fadeIn first\">\n        <a [routerLink]=\"['/login']\" class=\"nav-link float-right btn btn-outline-primary mt-1\">Login</a>\n        <h4 class=\"card-title mt-2\">Log In</h4>\n      </header>\n      <article class=\"card-body\">\n        <form class=\"form-signin\" (submit)=\"onResetSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"password\">New Password</label>\n            <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"New password\" autofocus=\"autofocus\" class=\"form-control\"/>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"confirm\">Confirm Password</label>\n            <input type=\"password\" name=\"confirm\" [(ngModel)]=\"confirm\" placeholder=\"Confirm password\" class=\"form-control\"/>\n          </div>\n          <input class=\"btn btn-primary btn-block\" type=\"submit\" value=\"Reset password\">\n        </form>\n      </article> <!-- card-body end .// -->\n    </div> <!-- card.// -->\n  </div> <!-- col.//-->\n\n</div> <!-- row.//-->\n"

/***/ }),

/***/ "../../../../../src/app/components/reset/reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetComponent = (function () {
    function ResetComponent(validateService, authService, router, route, flashMessage) {
        var _this = this;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.route.params.subscribe(function (params) {
            _this.resetToken = params.token;
        });
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    ResetComponent.prototype.onResetSubmit = function () {
        var _this = this;
        var reset = {
            password: this.password,
            confirm: this.confirm,
            token: this.resetToken
        };
        // Required Fields
        if (!this.validateService.validatePasswordEmpty(reset)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //login user
        this.authService.resetPassword(reset).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    ResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__("../../../../../src/app/components/reset/reset.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/reset/reset.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .page-header{\n    background-color: black;\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#chat-container {\n    max-width: 600px;\n    margin: 30px auto;\n    border: 1px solid #ddd;\n    box-shadow: 1px 3px 5px rgba(0,0,0,0.5);\n}\n\n#chat-window {\n    padding: 14px 0;\n    margin:  0 20px;\n    border-bottom:  1px solid #e9e9e9;\n    color: #555;\n}\n\n#output p {\n    color: #aaa;\n    padding: 14px 0;\n    margin: 0 20px;\n}\n\n#actions p {\n    padding: 14px 0;\n    margin: 0 20px;\n    border-bottom: 1px solid #e9e9e9;\n    color: #555;\n}\n\ninput {\n    padding: 10px 20px ;\n    box-sizing: border-box;\n    border: 0;\n    background-color: #eee;\n    display: block;\n    width: 100%;\n}\n\nbutton {\n    background-color: #575ed8;\n    color: #fff;\n    font-size: 18px;\n    border: 0;\n    padding: 12px 0;\n    width: 100%;\n    border-radius: 5px;\n} */\n\n/* line 3, ../sass/components/chat-window.scss */\n.chat-window {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n}\n  /* line 9, ../sass/components/chat-window.scss */\n  .chat-window .col-xs-12.col-md-12 {\n    padding: 0;\n    height: 100%;\n  }\n  /* line 13, ../sass/components/chat-window.scss */\n  .chat-window .panel {\n    border: 0;\n    border-radius: 5px 5px 0 0;\n    margin-bottom: 0;\n    height: 100%;\n  }\n  \n  /* line 3, ../sass/components/chat-top-bar.scss */\n  .chat-top-bar {\n    background: #666;\n    color: #fff;\n    overflow: hidden;\n    padding: 10px;\n    position: relative;\n    height: 70px;\n    max-height: 70px;\n    border-radius: 0;\n  }\n  /* line 13, ../sass/components/chat-top-bar.scss */\n  .chat-top-bar .icon-minim {\n    padding: 2px 10px;\n  }\n  \n  /* line 3, ../sass/components/chat-bottom-bar.scss */\n  .chat-bottom-bar {\n    overflow: hidden;\n    padding: 10px;\n    position: relative;\n    height: 70px;\n    max-height: 70px;\n  }\n  /* line 10, ../sass/components/chat-bottom-bar.scss */\n  .chat-bottom-bar .icon-minim {\n    padding: 2px 10px;\n  }\n  /* line 14, ../sass/components/chat-bottom-bar.scss */\n  .chat-bottom-bar input {\n    height: calc(70px - 30px);\n  }\n  \n  /* line 4, ../sass/components/chat-msg-container.scss */\n  .msg-container-base {\n    background: #e5e5e5;\n    margin: 0;\n    height: calc(100% - 140px);\n    overflow: scroll;\n    overflow-x: hidden;\n    padding: 0 10px 10px;\n  }\n  /* line 11, ../sass/components/chat-msg-container.scss */\n  .msg-container-base::-webkit-scrollbar-track {\n    background-color: #f5f5f5;\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  }\n  /* line 16, ../sass/components/chat-msg-container.scss */\n  .msg-container-base::-webkit-scrollbar {\n    background-color: #f5f5f5;\n    width: 12px;\n  }\n  /* line 21, ../sass/components/chat-msg-container.scss */\n  .msg-container-base::-webkit-scrollbar-thumb {\n    background-color: #555;\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  }\n  /* line 26, ../sass/components/chat-msg-container.scss */\n  .msg-container-base .msg-container {\n    display: -ms-flexbox;\n    display: flex;\n    overflow: hidden;\n    padding: 10px;\n  }\n  \n  /* line 2, ../sass/components/chat-msg.scss */\n  .chat-msg {\n    background: #fff;\n    border-radius: 2px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n    max-width: 100%;\n    padding: 10px;\n  }\n  /* line 9, ../sass/components/chat-msg.scss */\n  .chat-msg p {\n    font-size: 13px;\n    margin: 0 0 .2rem;\n    float: initial;\n  }\n  /* line 14, ../sass/components/chat-msg.scss */\n  .chat-msg time {\n    color: #ccc;\n    font-size: 11px;\n  }\n  /* line 19, ../sass/components/chat-msg.scss */\n  .chat-msg .chat-msg-author {\n    display: block;\n  }\n  /* line 23, ../sass/components/chat-msg.scss */\n  .chat-msg.chat-msg-receive {\n    margin-right: 0;\n    padding-bottom: 20px;\n  }\n  /* line 28, ../sass/components/chat-msg.scss */\n  .chat-msg.chat-msg-sent {\n    margin-right: 0;\n    padding-bottom: 20px;\n  }\n  /* line 32, ../sass/components/chat-msg.scss */\n  .chat-msg.chat-msg-sent .chat-msg-author {\n    text-align: right;\n  }\n  /* line 36, ../sass/components/chat-msg.scss */\n  .chat-msg.chat-msg-sent time {\n    float: right;\n  }\n  .time {\n    display: block;\n  }\n\n\n\n\n  body {\n  background-color: #3498db;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n}\n\n.container {\n  /* margin: 60px auto; */\n  background: #fff;\n  padding: 0;\n  border-radius: 7px;\n}\n\n.test {\n  margin: inherit;\n  margin-right: 10px;\n}\n\n.profile-image {\n  width: 50px;\n  height: 50px;\n  border-radius: 40px;\n}\n\n.settings-tray {\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 7px;\n}\n.settings-tray .no-gutters {\n  padding: 0;\n}\n.settings-tray--right {\n  float: right;\n}\n.settings-tray--right i {\n  margin-top: 10px;\n  font-size: 25px;\n  color: grey;\n  margin-left: 14px;\n  transition: .3s;\n}\n.settings-tray--right i:hover {\n  color: #74b9ff;\n  cursor: pointer;\n}\n\n.search-box {\n  background: #fafafa;\n  padding: 10px 13px;\n}\n.search-box .input-wrapper {\n  background: #fff;\n  border-radius: 40px;\n}\n.search-box .input-wrapper i {\n  color: grey;\n  margin-left: 7px;\n  vertical-align: middle;\n}\n\n.search {\n  border: none;\n  border-radius: 30px;\n  width: 80%;\n}\ninput:-ms-input-placeholder {\n  color: #e3e3e3;\n  font-weight: 300;\n  margin-left: 20px;\n}\ninput::placeholder {\n  color: #e3e3e3;\n  font-weight: 300;\n  margin-left: 20px;\n}\ninput:focus {\n  outline: none;\n}\n\n.friend-drawer {\n  padding: 10px 15px;\n  display: -ms-flexbox;\n  display: flex;\n  vertical-align: baseline;\n  transition: .3s ease;\n}\n\n@media screen and (max-width:768px){\n  .friend-drawer .text {\n    margin-left: 12px !important;\n    width: 40% !important;\n  }\n}\n\n.friend-drawer .text {\n  margin-left: 12px;\n  width: 80%;\n}\n.friend-drawer .text h6 {\n  margin-top: 6px;\n  margin-bottom: 0;\n}\n.friend-drawer .text p {\n  margin: 0;\n}\n.friend-drawer .time {\n  color: grey;\n}\n.friend-drawer--onhover:hover {\n  background: #74b9ff;\n  cursor: pointer;\n}\n.friend-drawer--onhover:hover p,\n.friend-drawer--onhover:hover h6,\n.friend-drawer--onhover:hover .time {\n  color: #fff !important;\n}\n\nhr {\n  margin: 5px auto;\n  width: 60%;\n}\n.chat-panel {\n  height: 100%;\n  -ms-flex:1;\n      flex:1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse;\n}\n\n@media screen and (max-width:768px){\n  .chat-content {\n    max-height: 79vh !important;\n    height: 79vh !important;\n  }\n  .offset-md-9 .chat-bubble {\n    right: 0 !important;\n    background: #74b9ff;\n    color: #fff;\n    float: right;\n    max-width: 77% !important;\n\n  }\n  .chat-bubble--left:after {\n    left: 0;\n    border-right-color: #eee;\n    border-left: 0;\n  }\n  .max-left-msg {\n    max-width: 80% !important;\n  }\n  .chat-bubble--right:after {\n    right: 0 !important;\n    border-left-color: #74b9ff !important;\n    border-right: 0 !important;\n  }\n  .text-clock {\n    font-size: 10px !important;\n    float: right !important;\n    margin-top: 10px !important;\n    margin-left: 10px !important;\n  }\n}\n\n.chat-bubble {\n  padding: 10px 14px;\n  background: #82e03a;\n  margin: 10px 0px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  border-radius: 9px;\n  position: relative;\n  /* animation: fadeIn 1s ease-in; */\n}\n.chat-bubble:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 20px solid transparent;\n  border-bottom: 0;\n  margin-top: -10px;\n}\n.chat-bubble--left:after {\n  left: 0;\n  border-right-color: #eee;\n  border-left: 0;\n  margin-left: -20px;\n  max-width: 77% !important;\n}\n.max-left-msg {\n  max-width: 270% ;\n}\n.max-left-msg-right {\n  max-width:  270%;\n  float: right;\n  right: 0px;\n}\n.chat-bubble--right:after {\n  right: 0;\n  border-left-color: #74b9ff;\n  border-right: 0;\n  margin-right: -20px;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.offset-md-9 .chat-bubble {\n  background: #74b9ff;\n  color: #fff;\n}\n\n/* .body-content {\n  height: 74vh;\n} */\n\n#data-list-container{\n  max-height: 79vh;\n}\n\n.message-content {\n  max-height: 80vh;\n  height: 80vh;\n}\n\n.text-clock {\n  font-size: 10px;\n  float: right;\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n.chat-box-tray {\n  background: #eee;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: baseline;\n      align-items: baseline;\n  padding: 5px;\n  -ms-flex-align: center;\n      align-items: center;\n  bottom: 0;\n}\n\n.chat-box-tray i {\n  color: grey;\n  font-size: 30px;\n  vertical-align: middle;\n}\n.chat-box-tray i:last-of-type {\n  margin-left: 25px;\n}\n#data-list-container {\n  height: 100%;\n  -ms-flex:1;\n      flex:1;\n  overflow-y: auto;\n  position: relative;\n}\n\n.start_new_message {\n  text-align: center;\n  vertical-align: middle;\n  padding-top: 300px;\n  padding-bottom: 300px;   \n}\n\n.text p {\n  color: rgb(230, 166, 64);\n}\n\n.pull-right {\n  float: right !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works\n</p>"

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/components/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = false; // Change to false when you're gonna deploy your app, true when is on develop 
    }
    AuthService.prototype.registerUser = function (user, photo) {
        var fd = new FormData();
        fd.append('username', user.username);
        fd.append('email', user.email);
        fd.append('name', user.name);
        fd.append('password', user.password);
        fd.append('image', photo);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // headers.append('Content-Type', 'application/json');
        //headers.append('Content-Type', 'multipart/form-data');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        if (this.isDev) {
            return this.http.post('http://localhost:8080/users/register', fd, options).map(function (res) { return res.json(); });
        }
        else {
            return this.http.post('users/register', fd, options).map(function (res) { return res.json(); });
        }
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        if (this.isDev) {
            return this.http.post('http://localhost:8080/users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
        }
        else {
            return this.http.post('users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
        }
    };
    AuthService.prototype.getUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        if (this.isDev) {
            return this.http.get('http://localhost:8080/users/profile/getAllUsers', { headers: headers }).map(function (res) { return res.json(); });
        }
        else {
            return this.http.get('users/profile/getAllUsers', { headers: headers }).map(function (res) { return res.json(); });
        }
    };
    AuthService.prototype.updateUsers = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        this.storeUserData(token, user);
        if (this.isDev) {
            return this.http.put('http://localhost:8080/users/profile/updateUsers', user, { headers: headers }).map(function (res) { return res.json(); });
        }
        else {
            return this.http.put('users/profile/updateUsers', user, { headers: headers }).map(function (res) { return res.json(); });
        }
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        if (this.isDev) {
            return this.http.get('http://localhost:8080/users/profile', { headers: headers }).map(function (res) { return res.json(); });
        }
        else {
            return this.http.get('users/profile', { headers: headers }).map(function (res) { return res.json(); });
        }
    };
    AuthService.prototype.getSettings = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        if (this.isDev) {
            return this.http.get('http://localhost:8080/users/settings', { headers: headers }).map(function (res) { return res.json(); });
        }
        else {
            return this.http.get('users/settings', { headers: headers }).map(function (res) { return res.json(); });
        }
    };
    AuthService.prototype.getUserMessages = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        if (this.isDev) {
            return this.http.get('http://localhost:8080/users/mailbox/getMessages/' + id, { headers: headers }).map(function (res) { return res.json(); });
        }
        else {
            return this.http.get('users/mailbox/getMessages/' + id, { headers: headers }).map(function (res) { return res.json(); });
        }
    };
    //New message 
    AuthService.prototype.sendMessage = function (message) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        if (this.isDev) {
            return this.http.post('http://localhost:8080/users/mailbox/sendMessage', message, { headers: headers }).map(function (res) { return res.json(); });
        }
        else {
            return this.http.post('users/mailbox/sendMessage', message, { headers: headers }).map(function (res) { return res.json(); });
        }
    };
    AuthService.prototype.forgotPassword = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        if (this.isDev) {
            return this.http.post('http://localhost:8080/users/forgot', email, { headers: headers }).map(function (res) { return res.json(); });
        }
        else {
            return this.http.post('users/forgot', email, { headers: headers }).map(function (res) { return res.json(); });
        }
    };
    AuthService.prototype.resetPassword = function (reset) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        if (this.isDev) {
            return this.http.post('http://localhost:8080/users/reset/', reset, { headers: headers }).map(function (res) { return res.json(); });
        }
        else {
            return this.http.post('users/reset', reset, { headers: headers }).map(function (res) { return res.json(); });
        }
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = (function () {
    function ChatService(wsService) {
        this.wsService = wsService;
        this.messages = wsService
            .connect()
            .map(function (response) {
            return response;
        });
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__["connect"]();
    }
    ChatService.prototype.on = function (eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, function (data) {
                callback(data);
            });
        }
    };
    ;
    ChatService.prototype.emit = function (eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    };
    ;
    ChatService.prototype.removeListener = function (eventName) {
        if (this.socket) {
            this.socket.removeListener(eventName);
        }
    };
    ;
    ChatService.prototype.sendMsg = function (msg) {
        this.messages.next(msg);
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__websocket_service__["a" /* WebsocketService */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "../../../../../src/app/services/size-detector/resize-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResizeService = (function () {
    function ResizeService() {
        this.resizeSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    Object.defineProperty(ResizeService.prototype, "onResize$", {
        get: function () {
            return this.resizeSubject.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["distinctUntilChanged"])());
        },
        enumerable: true,
        configurable: true
    });
    ResizeService.prototype.onResize = function (size) {
        this.resizeSubject.next(size);
    };
    ResizeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ResizeService);
    return ResizeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/size-detector/screen-size.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SCREEN_SIZE; });
var SCREEN_SIZE;
(function (SCREEN_SIZE) {
    SCREEN_SIZE[SCREEN_SIZE["XS"] = 0] = "XS";
    SCREEN_SIZE[SCREEN_SIZE["SM"] = 1] = "SM";
    SCREEN_SIZE[SCREEN_SIZE["MD"] = 2] = "MD";
    SCREEN_SIZE[SCREEN_SIZE["LG"] = 3] = "LG";
    SCREEN_SIZE[SCREEN_SIZE["XL"] = 4] = "XL";
})(SCREEN_SIZE || (SCREEN_SIZE = {}));


/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmailEmpty = function (user) {
        if (user.email == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatePasswordEmpty = function (reset) {
        if (reset.password == undefined || reset.confirm == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/app/services/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsocketService = (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function () {
        var _this = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].ws_url);
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                // console.log("Received message from websocket server");
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        var observer = {
            next: function (data) {
                // this.socket.emit('message', JSON.stringify(data));
                _this.socket.emit('message', data);
            },
        };
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Subject */].create(observer, observable);
    };
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    ws_url: 'http://localhost:8080'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map