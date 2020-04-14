webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _jsxFileName = "/Users/jameswaller/2020-portfolio/components/Nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var fetcher = function fetcher(query) {
  return fetch('/api/graphQL/nav', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      query: query
    })
  }).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.data;
  });
};

function Index() {
  var _this = this;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])('{ title { title }, nav { title, url, target } }', fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, "Failed to load");
  if (!data) return __jsx("div", {
    className: "loader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  });
  var nav = data.nav;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__["slide"], {
    right: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, nav.map(function (item, i) {
    return __jsx("a", {
      href: item.url,
      target: item.target,
      className: "jsx-879841281" + " " + "menu-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, item.title);
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "879841281",
    __self: this
  }, ".loader{border:16px solid #f3f3f3;border-top:16px solid #3498db;border-radius:50%;width:120px;height:120px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;z-index:9999;}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.bm-menu-wrap{width:100% !important;}@media screen and (min-width:426px){.bm-menu-wrap{width:300px !important;}}.bm-item{display:inline-block;-webkit-text-decoration:none;text-decoration:none;margin-bottom:10px;color:#000;-webkit-transition:color 0.2s;transition:color 0.2s;}.bm-item:focus{outline:0;color:#000;}.bm-item:hover{color:#00adff;}.bm-burger-button{position:fixed;width:36px;height:30px;right:36px;top:36px;}.bm-burger-bars{background:#fff;}.bm-cross-button{height:24px;width:24px;}.bm-cross{background:#000;}.bm-menu{background:#fff;padding:2.5em 1.5em 0;font-size:1.15em;padding:2rem 2rem 1.5rem 2rem;}.bm-morph-shape{fill:#373a47;}.bm-item-list{color:#b8b7ad;padding:6rem 0 0 0;}.bm-overlay{background:rgba(0,0,0,0.3);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QnVCLEFBR2lDLEFBVUMsQUFDSSxBQUlULEFBSUcsQUFLSixBQVVaLEFBTUssQUFPQyxBQVNDLEFBS0osQUFNSSxBQUtBLEFBUUgsQUFLQyxBQU1nQixVQXhEbkIsRUEyQkEsQ0FtQmIsQ0F4Q0EsQUE4Q0QsQ0F2Q2MsQ0FTYixBQVdBLEFBS3dCLEtBOUNELEFBU3ZCLENBcEJBLENBSUUsQUEyQ0YsR0E5RGdDLEFBZ0RsQixDQTJDZCxNQUxBLEtBckNhLEFBd0JNLFdBdkJSLE1Bd0JxQixDQXpFWixFQWtEcEIsYUF4QnFCLEdBekJQLE9BT2dCLElBa0U5QixDQXhFZSxDQU9tQixHQWtCckIsU0F4QnVCLEVBeUJaLG9EQUN4QixzQkF6QmUsYUFDZiIsImZpbGUiOiIvVXNlcnMvamFtZXN3YWxsZXIvMjAyMC1wb3J0Zm9saW8vY29tcG9uZW50cy9OYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzbGlkZSBhcyBNZW51IH0gZnJvbSBcInJlYWN0LWJ1cmdlci1tZW51XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuY29uc3QgZmV0Y2hlciA9IHF1ZXJ5ID0+XG4gIGZldGNoKCcvYXBpL2dyYXBoUUwvbmF2Jywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5IH0pLFxuICB9KVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ganNvbi5kYXRhKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCd7IHRpdGxlIHsgdGl0bGUgfSwgbmF2IHsgdGl0bGUsIHVybCwgdGFyZ2V0IH0gfScsIGZldGNoZXIpXG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZDwvZGl2PlxuICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPjwvZGl2PlxuXG4gIGNvbnN0IHsgbmF2IH0gPSBkYXRhXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxNZW51IHJpZ2h0PlxuICAgICAge25hdi5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgaHJlZj17aXRlbS51cmx9IHRhcmdldD17aXRlbS50YXJnZXR9PntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICkpfVxuICAgIDwvTWVudT5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgIC5sb2FkZXIge1xuICAgICAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IC8qIExpZ2h0IGdyZXkgKi9cbiAgICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjsgLyogQmx1ZSAqL1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICB6LWluZGV4OiA5OTk5O1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgIH1cblxuICAgIC5ibS1tZW51LXdyYXAge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIHtcbiAgICAgIC5ibS1tZW51LXdyYXAge1xuICAgICAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogSW5kaXZpZHVhbCBpdGVtICovXG4gICAgLmJtLWl0ZW0ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAvKiBPdXIgc2lkZWJhciBpdGVtIHN0eWxpbmcgKi9cbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgfVxuXG4gICAgLmJtLWl0ZW06Zm9jdXMge1xuICAgICAgb3V0bGluZTowO1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuXG4gICAgLyogQ2hhbmdlIGNvbG9yIG9uIGhvdmVyICovXG4gICAgLmJtLWl0ZW06aG92ZXIge1xuICAgICAgY29sb3I6ICMwMGFkZmY7XG4gICAgfVxuXG4gICAgLyogVGhlIHJlc3QgY29waWVkIGRpcmVjdGx5IGZyb20gcmVhY3QtYnVyZ2VyLW1lbnUgZG9jcyAqL1xuXG4gICAgLyogUG9zaXRpb24gYW5kIHNpemluZyBvZiBidXJnZXIgYnV0dG9uICovXG4gICAgLmJtLWJ1cmdlci1idXR0b24ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICByaWdodDogMzZweDtcbiAgICAgIHRvcDogMzZweDtcbiAgICB9XG5cbiAgICAvKiBDb2xvci9zaGFwZSBvZiBidXJnZXIgaWNvbiBiYXJzICovXG4gICAgLmJtLWJ1cmdlci1iYXJzIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgfVxuXG4gICAgLyogUG9zaXRpb24gYW5kIHNpemluZyBvZiBjbGlja2FibGUgY3Jvc3MgYnV0dG9uICovXG4gICAgLmJtLWNyb3NzLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG5cbiAgICAvKiBDb2xvci9zaGFwZSBvZiBjbG9zZSBidXR0b24gY3Jvc3MgKi9cbiAgICAuYm0tY3Jvc3Mge1xuICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICB9XG5cbiAgICAvKiBHZW5lcmFsIHNpZGViYXIgc3R5bGVzICovXG4gICAgLmJtLW1lbnUge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDIuNWVtIDEuNWVtIDA7XG4gICAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSAxLjVyZW0gMnJlbTtcbiAgICB9XG5cbiAgICAvKiBNb3JwaCBzaGFwZSBuZWNlc3Nhcnkgd2l0aCBidWJibGUgb3IgZWxhc3RpYyAqL1xuICAgIC5ibS1tb3JwaC1zaGFwZSB7XG4gICAgICBmaWxsOiAjMzczYTQ3O1xuICAgIH1cblxuICAgIC8qIFdyYXBwZXIgZm9yIGl0ZW0gbGlzdCAqL1xuICAgIC5ibS1pdGVtLWxpc3Qge1xuICAgICAgY29sb3I6ICNiOGI3YWQ7XG4gICAgICBwYWRkaW5nOiA2cmVtIDAgMCAwXG4gICAgfVxuXG4gICAgLyogU3R5bGluZyBvZiBvdmVybGF5ICovXG4gICAgLmJtLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIH1cbiAgYH08L3N0eWxlPlxuICA8Lz5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/components/Nav.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.c1bac6d5579b303f0929.hot-update.js.map