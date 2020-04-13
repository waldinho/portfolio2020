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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem 2rem;\n  width: 25%;\n  @media screen and (min-width: 1025px) {\n    padding: 1rem 20rem;\n  }\n  font-family: Courier, Helvetica Neue, sans-serif;\n  img {\n      width: 200px;\n      height: 200px;\n      border-radius: 50%\n    }\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    h1 {\n        padding: 7rem 2rem 0 2rem;\n    }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  \n}\n"]);

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
    className: "jsx-355972198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "James Waller | Digital"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-355972198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-355972198",
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
        lineNumber: 30,
        columnNumber: 12
      }
    }), __jsx("h1", {
      className: "jsx-355972198",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 20
      }
    }, item.title), __jsx(Wrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 12
      }
    }, item.service.map(function (i) {
      return __jsx(Content, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "/images/service-".concat(i.id, ".png"),
        className: "jsx-355972198",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }
      }), __jsx("h2", {
        className: "jsx-355972198",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }
      }, i.title), __jsx("p", {
        className: "jsx-355972198",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }
      }, i.text));
    })));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "355972198",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:Courier,Helvetica Neue,sans-serif;background-color:#000;color:#fff;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q3lCLEFBSXFCLEFBUVksVUFQYixTQUN1QyxHQU9oRCwyQ0FOc0Isc0JBQ1gsV0FDWCIsImZpbGUiOiIvVXNlcnMvamFtZXN3YWxsZXIvMjAyMC1wb3J0Zm9saW8vcGFnZXMvc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU3dyIGZyb20gJ3N3cidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dvJ1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdidcblxuY29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTd3IoJy9hcGkvUkVTVC9zZXJ2aWNlcycsIGZldGNoZXIpXG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZC48L2Rpdj5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG5cbiAgY29uc29sZS5sb2coZGF0YSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkphbWVzIFdhbGxlciB8IERpZ2l0YWw8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExvZ28gLz5cbiAgICAgIDxOYXYgLz5cbiAgICAgIFxuICAgICAge2RhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICA8VGl0bGU+XG4gICAgICAgICAgIDwvVGl0bGU+PGgxPntpdGVtLnRpdGxlfTwvaDE+XG4gICAgICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAge2l0ZW0uc2VydmljZS5tYXAoaSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgL2ltYWdlcy9zZXJ2aWNlLSR7aS5pZH0ucG5nYH0vPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e2kudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2kudGV4dH08L3A+ICBcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogQ291cmllciwgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgXG59XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gICAgaDEge1xuICAgICAgICBwYWRkaW5nOiA3cmVtIDJyZW0gMCAycmVtO1xuICAgIH1cbn1cbmA7XG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICB3aWR0aDogMjUlO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgICBwYWRkaW5nOiAxcmVtIDIwcmVtO1xuICB9XG4gIGZvbnQtZmFtaWx5OiBDb3VyaWVyLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgaW1nIHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCVcbiAgICB9XG59XG5gOyJdfQ== */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/pages/services.js */"));
}
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject3());

/***/ })

})
//# sourceMappingURL=services.js.ef830312443cb3a58ec6.hot-update.js.map