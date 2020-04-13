webpackHotUpdate("static/development/pages/services.js",{

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");

var _jsxFileName = "/Users/jameswaller/2020-portfolio/pages/services.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 1rem 1rem;\n    width: 100%;\n    @media screen and (min-width: 1025px) {\n        width: 25%;\n    }\n    text-align: center;\n    font-family: Courier, Helvetica Neue, sans-serif;\n    img {\n      width: 180px;\n      height: 180px;\n      border-radius: 50%;\n      margin: 0 auto 15px auto;\n    }\n    h2 {\n        height: 32px;\n        font-size: 14px;\n        position: relative;\n    }\n    p {\n        font-size: 12px;\n    }\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 0 2rem;\n    @media screen and (min-width: 1025px) {\n        padding: 0 20rem;\n    }\n    h1 {\n        padding: 8rem 0 0 0;\n    }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  @media screen and (min-width: 1025px) {\n    flex-direction: row;\n  }\n  width: 100%;\n  align-items: flex-start;\n  padding: 0 2rem;\n  @media screen and (min-width: 1025px) {\n    padding: 0 20rem;\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var fetcher = function fetcher(url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};

function Index() {
  var _this = this;

  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])('/api/REST/services', fetcher),
      data = _useSwr.data,
      error = _useSwr.error;

  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "Failed to load.");
  if (!data) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "Loading...");
  console.log(data);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-1329882468",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "James Waller | Digital"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-1329882468",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-1329882468",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), data.map(function (item) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Title, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, __jsx("h1", {
      className: "jsx-1329882468",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, item.title)), __jsx(Wrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, item.service.map(function (i) {
      return __jsx(Content, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }
      }, __jsx("h2", {
        className: "jsx-1329882468",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }
      }, i.title), __jsx("img", {
        src: "/images/service-".concat(i.id, ".png"),
        className: "jsx-1329882468",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }
      }), __jsx("p", {
        className: "jsx-1329882468",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }
      }, i.text));
    })));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1329882468",
    __self: this
  }, "html,body{padding:0;margin:0 0 0 0;font-family:Courier,Helvetica Neue,sans-serif;background-color:#000;color:#fff;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q3lCLEFBSXFCLEFBUVksVUFQUCxZQVFmLEdBUGdELDhDQUMxQixzQkFDWCxXQUNYIiwiZmlsZSI6Ii9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy9zZXJ2aWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTd3IgZnJvbSAnc3dyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL0xvZ28nXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2J1xuXG5jb25zdCBmZXRjaGVyID0gdXJsID0+IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVN3cignL2FwaS9SRVNUL3NlcnZpY2VzJywgZmV0Y2hlcilcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkLjwvZGl2PlxuICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cblxuICBjb25zb2xlLmxvZyhkYXRhKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SmFtZXMgV2FsbGVyIHwgRGlnaXRhbDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TG9nbyAvPlxuICAgICAgPE5hdiAvPlxuICAgICAge2RhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRpdGxlPlxuICAgICAgICAgICAgICAgIDxoMT57aXRlbS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAge2l0ZW0uc2VydmljZS5tYXAoaSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57aS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC9pbWFnZXMvc2VydmljZS0ke2kuaWR9LnBuZ2B9Lz5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2kudGV4dH08L3A+ICBcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDAgMDtcbiAgICAgICAgICBmb250LWZhbWlseTogQ291cmllciwgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMCAycmVtO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgICBwYWRkaW5nOiAwIDIwcmVtO1xuICB9XG59XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzogMCAycmVtO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgICAgICBwYWRkaW5nOiAwIDIwcmVtO1xuICAgIH1cbiAgICBoMSB7XG4gICAgICAgIHBhZGRpbmc6IDhyZW0gMCAwIDA7XG4gICAgfVxufVxuYDtcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICB9XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBDb3VyaWVyLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvIDE1cHggYXV0bztcbiAgICB9XG4gICAgaDIge1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn1cbmA7Il19 */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/pages/services.js */"));
}
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject3());

/***/ })

})
//# sourceMappingURL=services.js.16dd8f1962cfd5154d22.hot-update.js.map