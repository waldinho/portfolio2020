webpackHotUpdate("static/development/pages/work.js",{

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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      href: item.url,
      target: item.target,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, __jsx("a", {
      className: "jsx-44012873" + " " + "menu-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 53
      }
    }, item.title));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "44012873",
    __self: this
  }, ".loader{border:16px solid #000;border-top:16px solid #4fec8e;border-radius:50%;width:120px;height:120px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;z-index:9999;position:absolute;top:50%;left:50%;margin-top:-35px;margin-left:-35px;}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.bm-menu-wrap{width:100% !important;}@media screen and (min-width:426px){.bm-menu-wrap{width:14% !important;}}.bm-item{display:inline-block;-webkit-text-decoration:none;text-decoration:none;margin-bottom:10px;color:#000;-webkit-transition:color 0.2s;transition:color 0.2s;}.bm-item:focus{outline:0;color:#000;}.bm-item:hover{color:#00adff;}.bm-burger-button{position:fixed;width:36px;height:30px;right:36px;top:36px;}.bm-burger-bars{background:#fff;}.bm-cross-button{height:24px;width:24px;}.bm-cross{background:#000;}.bm-menu{background:#fff;padding:2.5em 1.5em 0;font-size:1.15em;padding:2rem 2rem 1.5rem 2rem;}.bm-morph-shape{fill:#373a47;}.bm-item-list{color:#b8b7ad;padding:6rem 0 0 0;}.bm-overlay{background:rgba(0,0,0,0.3);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QnVCLEFBRzhCLEFBZUksQUFDSSxBQUlULEFBSUMsQUFLRixBQVVaLEFBTUssQUFPQyxBQVNDLEFBS0osQUFNSSxBQUtBLEFBUUgsQUFLQyxBQU1nQixVQXhEbkIsRUEyQkEsQ0FtQmIsQ0F4Q0EsQUE4Q0QsQ0F2Q2MsQ0FTYixBQVdBLEFBS3dCLEtBckR0QixBQU9xQixBQVN2QixDQXBCQSxDQXBCZ0MsQUFtRWhDLEdBZGMsQ0EyQ2QsTUFMQSxLQXJDYSxBQXdCTSxXQXZCUixJQXREUyxFQThFWSxHQXZCaEMsYUF0RGMsQUE4Qk8sVUFsQlMsRUFYZixFQTZFZixFQWpFa0MsR0FrQnJCLE1BN0J1QixLQThCWixvREFDeEIsbUJBOUJlLGFBQ0ssa0JBQ1YsUUFDQyxTQUNRLGlCQUNDLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvamFtZXN3YWxsZXIvMjAyMC1wb3J0Zm9saW8vY29tcG9uZW50cy9OYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgTGluayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2xpZGUgYXMgTWVudSB9IGZyb20gXCJyZWFjdC1idXJnZXItbWVudVwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbmNvbnN0IGZldGNoZXIgPSBxdWVyeSA9PlxuICBmZXRjaCgnL2FwaS9ncmFwaFFML25hdicsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeSB9KSxcbiAgfSlcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IGpzb24uZGF0YSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUigneyB0aXRsZSB7IHRpdGxlIH0sIG5hdiB7IHRpdGxlLCB1cmwsIHRhcmdldCB9IH0nLCBmZXRjaGVyKVxuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQ8L2Rpdj5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj48L2Rpdj5cblxuICBjb25zdCB7IG5hdiB9ID0gZGF0YVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8TWVudSByaWdodD5cbiAgICAgIHtuYXYubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0udXJsfSB0YXJnZXQ9e2l0ZW0udGFyZ2V0fSA+PGEgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+e2l0ZW0udGl0bGV9PC9hPjwvTGluaz5cbiAgICAgICkpfVxuICAgIDwvTWVudT5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgIC5sb2FkZXIge1xuICAgICAgYm9yZGVyOiAxNnB4IHNvbGlkICMwMDA7XG4gICAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICM0ZmVjOGU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi10b3A6IC0zNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgIH1cblxuICAgIC5ibS1tZW51LXdyYXAge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIHtcbiAgICAgIC5ibS1tZW51LXdyYXAge1xuICAgICAgICB3aWR0aDogMTQlICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8qIEluZGl2aWR1YWwgaXRlbSAqL1xuICAgIC5ibS1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgLyogT3VyIHNpZGViYXIgaXRlbSBzdHlsaW5nICovXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgIH1cblxuICAgIC5ibS1pdGVtOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6MDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cblxuICAgIC8qIENoYW5nZSBjb2xvciBvbiBob3ZlciAqL1xuICAgIC5ibS1pdGVtOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMDBhZGZmO1xuICAgIH1cblxuICAgIC8qIFRoZSByZXN0IGNvcGllZCBkaXJlY3RseSBmcm9tIHJlYWN0LWJ1cmdlci1tZW51IGRvY3MgKi9cblxuICAgIC8qIFBvc2l0aW9uIGFuZCBzaXppbmcgb2YgYnVyZ2VyIGJ1dHRvbiAqL1xuICAgIC5ibS1idXJnZXItYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgcmlnaHQ6IDM2cHg7XG4gICAgICB0b3A6IDM2cHg7XG4gICAgfVxuXG4gICAgLyogQ29sb3Ivc2hhcGUgb2YgYnVyZ2VyIGljb24gYmFycyAqL1xuICAgIC5ibS1idXJnZXItYmFycyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cblxuICAgIC8qIFBvc2l0aW9uIGFuZCBzaXppbmcgb2YgY2xpY2thYmxlIGNyb3NzIGJ1dHRvbiAqL1xuICAgIC5ibS1jcm9zcy1idXR0b24ge1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuXG4gICAgLyogQ29sb3Ivc2hhcGUgb2YgY2xvc2UgYnV0dG9uIGNyb3NzICovXG4gICAgLmJtLWNyb3NzIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgfVxuXG4gICAgLyogR2VuZXJhbCBzaWRlYmFyIHN0eWxlcyAqL1xuICAgIC5ibS1tZW51IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBwYWRkaW5nOiAyLjVlbSAxLjVlbSAwO1xuICAgICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgICBwYWRkaW5nOiAycmVtIDJyZW0gMS41cmVtIDJyZW07XG4gICAgfVxuXG4gICAgLyogTW9ycGggc2hhcGUgbmVjZXNzYXJ5IHdpdGggYnViYmxlIG9yIGVsYXN0aWMgKi9cbiAgICAuYm0tbW9ycGgtc2hhcGUge1xuICAgICAgZmlsbDogIzM3M2E0NztcbiAgICB9XG5cbiAgICAvKiBXcmFwcGVyIGZvciBpdGVtIGxpc3QgKi9cbiAgICAuYm0taXRlbS1saXN0IHtcbiAgICAgIGNvbG9yOiAjYjhiN2FkO1xuICAgICAgcGFkZGluZzogNnJlbSAwIDAgMFxuICAgIH1cblxuICAgIC8qIFN0eWxpbmcgb2Ygb3ZlcmxheSAqL1xuICAgIC5ibS1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbiAgPC8+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/components/Nav.js */"));
}

/***/ })

})
//# sourceMappingURL=work.js.4335a416eef575785a66.hot-update.js.map