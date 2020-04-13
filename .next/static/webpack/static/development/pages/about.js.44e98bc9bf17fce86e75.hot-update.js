webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _components_Social__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Social */ "./components/Social.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");

var _jsxFileName = "/Users/jameswaller/2020-portfolio/pages/about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem 2rem 7rem 2rem;\n  text-align: center;\n  @media screen and (min-width: 456px) {\n    flex-direction: row;\n  }\n  @media screen and (min-width: 1025px) {\n    padding: 1rem 20rem;\n  }\n  img {\n    border-radius: 50%;\n    width: 150px;\n    height: 150px;\n    margin: 1rem auto;\n    justify-content: space-between;\n    @media screen and (min-width: 456px) {\n      width: 130px;\n      height: 130px;\n    }\n  }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem 2rem 0rem 2rem;\n  @media screen and (min-width: 1025px) {\n    padding: 1rem 20rem;\n  }\n  font-family: Courier, Helvetica Neue, sans-serif;\n  h1 {\n    padding: 7rem 0 0 0;\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var fetcher = function fetcher(query) {
  return fetch('/api/graphQL/about', {
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

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_8__["default"])('{ title { title }, paragraph { id, text }, images { id } }', fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "Failed to load");
  if (!data) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "Loading...");
  var title = data.title,
      paragraph = data.paragraph,
      images = data.images;
  console.log('data: ', data);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("title", {
    className: "jsx-3386745504",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "James Waller | Digital"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3386745504",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-3386745504",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  })), __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }), __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }), __jsx(_components_Social__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), __jsx(Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-3386745504",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, title[0].title), paragraph.map(function (item) {
    return __jsx("p", {
      className: "jsx-3386745504",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, item.text);
  })), __jsx(Images, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/images/beach.jpg",
    border: "0",
    alt: "Travel",
    title: "Travel",
    className: "jsx-3386745504",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "/images/scuba.jpeg",
    border: "0",
    alt: "Scuba Diving",
    title: "Scuba Diving",
    className: "jsx-3386745504",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "/images/beer.jpg",
    border: "0",
    alt: "Bers",
    title: "Beers",
    className: "jsx-3386745504",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "/images/footy.jpg",
    border: "0",
    alt: "Soccer",
    title: "Soccer",
    className: "jsx-3386745504",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "/images/boxing.jpg",
    border: "0",
    alt: "Boxing",
    title: "Boxing",
    className: "jsx-3386745504",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "/images/music.jpg",
    border: "0",
    alt: "Music",
    title: "Music",
    className: "jsx-3386745504",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3386745504",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:Courier,Helvetica Neue,sans-serif;background-color:#000;color:#fff;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRHVCLEFBSW1CLEFBUVksVUFQYixTQUN1QyxHQU9oRCwyQ0FOc0Isc0JBQ1gsV0FDWCIsImZpbGUiOiIvVXNlcnMvamFtZXN3YWxsZXIvMjAyMC1wb3J0Zm9saW8vcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nbydcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnXG5pbXBvcnQgU29jaWFsIGZyb20gJy4uL2NvbXBvbmVudHMvU29jaWFsJ1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbmNvbnN0IGZldGNoZXIgPSBxdWVyeSA9PlxuICBmZXRjaCgnL2FwaS9ncmFwaFFML2Fib3V0Jywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5IH0pLFxuICB9KVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ganNvbi5kYXRhKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCd7IHRpdGxlIHsgdGl0bGUgfSwgcGFyYWdyYXBoIHsgaWQsIHRleHQgfSwgaW1hZ2VzIHsgaWQgfSB9JywgZmV0Y2hlcilcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkPC9kaXY+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuXG4gIGNvbnN0IHsgdGl0bGUsIHBhcmFncmFwaCwgaW1hZ2VzIH0gPSBkYXRhXG5cbiAgY29uc29sZS5sb2coJ2RhdGE6ICcsIGRhdGEpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkphbWVzIFdhbGxlciB8IERpZ2l0YWw8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIi8+XG4gICAgPC9IZWFkPlxuICAgIDxMb2dvIC8+XG4gICAgPE5hdiAvPlxuICAgIDxTb2NpYWwgLz5cbiAgICA8Q29udGVudD5cbiAgICAgIDxoMT57dGl0bGVbMF0udGl0bGV9PC9oMT5cbiAgICAgIHtwYXJhZ3JhcGgubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgPHA+e2l0ZW0udGV4dH08L3A+ICBcbiAgICAgICAgKVxuICAgICAgKX1cbiAgICA8L0NvbnRlbnQ+XG4gICAgPEltYWdlcz5cbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9iZWFjaC5qcGdcIiBib3JkZXI9XCIwXCIgYWx0PVwiVHJhdmVsXCIgdGl0bGU9XCJUcmF2ZWxcIi8+XG4gICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2N1YmEuanBlZ1wiIGJvcmRlcj1cIjBcIiBhbHQ9XCJTY3ViYSBEaXZpbmdcIiB0aXRsZT1cIlNjdWJhIERpdmluZ1wiLz5cbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9iZWVyLmpwZ1wiIGJvcmRlcj1cIjBcIiBhbHQ9XCJCZXJzXCIgdGl0bGU9XCJCZWVyc1wiLz5cbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9mb290eS5qcGdcIiBib3JkZXI9XCIwXCIgYWx0PVwiU29jY2VyXCIgdGl0bGU9XCJTb2NjZXJcIi8+XG4gICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYm94aW5nLmpwZ1wiIGJvcmRlcj1cIjBcIiBhbHQ9XCJCb3hpbmdcIiB0aXRsZT1cIkJveGluZ1wiLz5cbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9tdXNpYy5qcGdcIiBib3JkZXI9XCIwXCIgYWx0PVwiTXVzaWNcIiB0aXRsZT1cIk11c2ljXCIvPlxuICAgIDwvSW1hZ2VzPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBDb3VyaWVyLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC8+XG4gIClcbn1cblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDJyZW0gMHJlbSAycmVtO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgICBwYWRkaW5nOiAxcmVtIDIwcmVtO1xuICB9XG4gIGZvbnQtZmFtaWx5OiBDb3VyaWVyLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgaDEge1xuICAgIHBhZGRpbmc6IDdyZW0gMCAwIDA7XG4gIH1cbn1cbmA7XG5cbmNvbnN0IEltYWdlcyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDJyZW0gN3JlbSAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1NnB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgICBwYWRkaW5nOiAxcmVtIDIwcmVtO1xuICB9XG4gIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NTZweCkge1xuICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICB9XG4gIH1cbn1cbmA7Il19 */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/pages/about.js */"));
}
var Content = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var Images = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());

/***/ })

})
//# sourceMappingURL=about.js.44e98bc9bf17fce86e75.hot-update.js.map