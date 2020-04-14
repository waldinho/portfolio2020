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
      className: "jsx-719510511" + " " + "menu-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, item.title);
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "719510511",
    __self: this
  }, ".loader{border:16px solid #f3f3f3;border-top:16px solid #3498db;border-radius:50%;width:120px;height:120px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;z-index:9999;position:absolute;top:50%;left:50%;margin-top:-35px;margin-left:-35px;}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.bm-menu-wrap{width:100% !important;}@media screen and (min-width:426px){.bm-menu-wrap{width:300px !important;}}.bm-item{display:inline-block;-webkit-text-decoration:none;text-decoration:none;margin-bottom:10px;color:#000;-webkit-transition:color 0.2s;transition:color 0.2s;}.bm-item:focus{outline:0;color:#000;}.bm-item:hover{color:#00adff;}.bm-burger-button{position:fixed;width:36px;height:30px;right:36px;top:36px;}.bm-burger-bars{background:#fff;}.bm-cross-button{height:24px;width:24px;}.bm-cross{background:#000;}.bm-menu{background:#fff;padding:2.5em 1.5em 0;font-size:1.15em;padding:2rem 2rem 1.5rem 2rem;}.bm-morph-shape{fill:#373a47;}.bm-item-list{color:#b8b7ad;padding:6rem 0 0 0;}.bm-overlay{background:rgba(0,0,0,0.3);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QnVCLEFBR2lDLEFBZUMsQUFDSSxBQUlULEFBSUcsQUFLSixBQVVaLEFBTUssQUFPQyxBQVNDLEFBS0osQUFNSSxBQUtBLEFBUUgsQUFLQyxBQU1nQixVQXhEbkIsRUEyQkEsQ0FtQmIsQ0F4Q0EsQUE4Q0QsQ0F2Q2MsQ0FTYixBQVdBLEFBS3dCLEtBOUNELEFBU3ZCLENBcEJBLENBSUUsQUEyQ0YsR0FuRWdDLEFBcURsQixDQTJDZCxNQUxBLEtBckNhLEFBd0JNLFdBdkJSLE1Bd0JxQixDQTlFWixFQXVEcEIsYUF4QnFCLEdBOUJQLE9BWWdCLElBa0U5QixDQTdFZSxDQVltQixHQWtCckIsU0E3QnVCLEVBOEJaLG9EQUN4QixzQkE5QmUsYUFDSyxrQkFDVixRQUNDLFNBQ1EsaUJBQ0Msa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNsaWRlIGFzIE1lbnUgfSBmcm9tIFwicmVhY3QtYnVyZ2VyLW1lbnVcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG5jb25zdCBmZXRjaGVyID0gcXVlcnkgPT5cbiAgZmV0Y2goJy9hcGkvZ3JhcGhRTC9uYXYnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnkgfSksXG4gIH0pXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBqc29uLmRhdGEpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoJ3sgdGl0bGUgeyB0aXRsZSB9LCBuYXYgeyB0aXRsZSwgdXJsLCB0YXJnZXQgfSB9JywgZmV0Y2hlcilcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkPC9kaXY+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9kaXY+XG5cbiAgY29uc3QgeyBuYXYgfSA9IGRhdGFcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPE1lbnUgcmlnaHQ+XG4gICAgICB7bmF2Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICA8YSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBocmVmPXtpdGVtLnVybH0gdGFyZ2V0PXtpdGVtLnRhcmdldH0+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgKSl9XG4gICAgPC9NZW51PlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgLmxvYWRlciB7XG4gICAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xuICAgICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiOyAvKiBCbHVlICovXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi10b3A6IC0zNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgIH1cblxuICAgIC5ibS1tZW51LXdyYXAge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIHtcbiAgICAgIC5ibS1tZW51LXdyYXAge1xuICAgICAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogSW5kaXZpZHVhbCBpdGVtICovXG4gICAgLmJtLWl0ZW0ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAvKiBPdXIgc2lkZWJhciBpdGVtIHN0eWxpbmcgKi9cbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgfVxuXG4gICAgLmJtLWl0ZW06Zm9jdXMge1xuICAgICAgb3V0bGluZTowO1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuXG4gICAgLyogQ2hhbmdlIGNvbG9yIG9uIGhvdmVyICovXG4gICAgLmJtLWl0ZW06aG92ZXIge1xuICAgICAgY29sb3I6ICMwMGFkZmY7XG4gICAgfVxuXG4gICAgLyogVGhlIHJlc3QgY29waWVkIGRpcmVjdGx5IGZyb20gcmVhY3QtYnVyZ2VyLW1lbnUgZG9jcyAqL1xuXG4gICAgLyogUG9zaXRpb24gYW5kIHNpemluZyBvZiBidXJnZXIgYnV0dG9uICovXG4gICAgLmJtLWJ1cmdlci1idXR0b24ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICByaWdodDogMzZweDtcbiAgICAgIHRvcDogMzZweDtcbiAgICB9XG5cbiAgICAvKiBDb2xvci9zaGFwZSBvZiBidXJnZXIgaWNvbiBiYXJzICovXG4gICAgLmJtLWJ1cmdlci1iYXJzIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgfVxuXG4gICAgLyogUG9zaXRpb24gYW5kIHNpemluZyBvZiBjbGlja2FibGUgY3Jvc3MgYnV0dG9uICovXG4gICAgLmJtLWNyb3NzLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG5cbiAgICAvKiBDb2xvci9zaGFwZSBvZiBjbG9zZSBidXR0b24gY3Jvc3MgKi9cbiAgICAuYm0tY3Jvc3Mge1xuICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICB9XG5cbiAgICAvKiBHZW5lcmFsIHNpZGViYXIgc3R5bGVzICovXG4gICAgLmJtLW1lbnUge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDIuNWVtIDEuNWVtIDA7XG4gICAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSAxLjVyZW0gMnJlbTtcbiAgICB9XG5cbiAgICAvKiBNb3JwaCBzaGFwZSBuZWNlc3Nhcnkgd2l0aCBidWJibGUgb3IgZWxhc3RpYyAqL1xuICAgIC5ibS1tb3JwaC1zaGFwZSB7XG4gICAgICBmaWxsOiAjMzczYTQ3O1xuICAgIH1cblxuICAgIC8qIFdyYXBwZXIgZm9yIGl0ZW0gbGlzdCAqL1xuICAgIC5ibS1pdGVtLWxpc3Qge1xuICAgICAgY29sb3I6ICNiOGI3YWQ7XG4gICAgICBwYWRkaW5nOiA2cmVtIDAgMCAwXG4gICAgfVxuXG4gICAgLyogU3R5bGluZyBvZiBvdmVybGF5ICovXG4gICAgLmJtLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIH1cbiAgYH08L3N0eWxlPlxuICA8Lz5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/components/Nav.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.dfd640dc4960deddc4b4.hot-update.js.map