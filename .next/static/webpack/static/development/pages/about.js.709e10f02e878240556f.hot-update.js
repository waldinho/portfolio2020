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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem 2rem 7rem 2rem;\n  text-align: center;\n  @media screen and (min-width: 456px) {\n    flex-direction: row;\n  }\n  @media screen and (min-width: 1025px) {\n    padding: 1rem 20rem;\n  }\n  img {\n    border-radius: 50%;\n    width: 150px;\n    height: 150px;\n    margin: 1rem auto;\n    justify-content: space-between;\n    @media screen and (min-width: 456px) {\n      width: 120px;\n      height: 120px;\n    }\n  }\n}\n"]);

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
    className: "loader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  });
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
    className: "jsx-2091767471",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "James Waller | Digital"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2091767471",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-2091767471",
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
    className: "jsx-2091767471",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, title[0].title), paragraph.map(function (item) {
    return __jsx("p", {
      className: "jsx-2091767471",
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
    className: "jsx-2091767471",
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
    className: "jsx-2091767471",
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
    className: "jsx-2091767471",
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
    className: "jsx-2091767471",
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
    className: "jsx-2091767471",
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
    className: "jsx-2091767471",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2091767471",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:Courier,Helvetica Neue,sans-serif;background-color:#000;color:#fff;}*{box-sizing:border-box;}.loader{border:16px solid #f3f3f3;border-top:16px solid #3498db;border-radius:50%;width:120px;height:120px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;z-index:9999;margin:auto;}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRHVCLEFBSW1CLEFBUVksQUFJTSxBQVdDLEFBQ0ksVUF2QnhCLFNBQ3VDLEdBT2hELElBSWdDLDhCQUNaLFNBWEUsU0FZUixPQVFnQixLQVBmLENBWkosQUFvQnVCLFdBbkJsQyxDQVlvQyw0RUFDckIsYUFDRCxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dvJ1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdidcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Tb2NpYWwnXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuY29uc3QgZmV0Y2hlciA9IHF1ZXJ5ID0+XG4gIGZldGNoKCcvYXBpL2dyYXBoUUwvYWJvdXQnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnkgfSksXG4gIH0pXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBqc29uLmRhdGEpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoJ3sgdGl0bGUgeyB0aXRsZSB9LCBwYXJhZ3JhcGggeyBpZCwgdGV4dCB9LCBpbWFnZXMgeyBpZCB9IH0nLCBmZXRjaGVyKVxuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQ8L2Rpdj5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj48L2Rpdj5cblxuICBjb25zdCB7IHRpdGxlLCBwYXJhZ3JhcGgsIGltYWdlcyB9ID0gZGF0YVxuXG4gIGNvbnNvbGUubG9nKCdkYXRhOiAnLCBkYXRhKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5KYW1lcyBXYWxsZXIgfCBEaWdpdGFsPC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIvPlxuICAgIDwvSGVhZD5cbiAgICA8TG9nbyAvPlxuICAgIDxOYXYgLz5cbiAgICA8U29jaWFsIC8+XG4gICAgPENvbnRlbnQ+XG4gICAgICA8aDE+e3RpdGxlWzBdLnRpdGxlfTwvaDE+XG4gICAgICB7cGFyYWdyYXBoLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxwPntpdGVtLnRleHR9PC9wPiAgXG4gICAgICAgIClcbiAgICAgICl9XG4gICAgPC9Db250ZW50PlxuICAgIDxJbWFnZXM+XG4gICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYmVhY2guanBnXCIgYm9yZGVyPVwiMFwiIGFsdD1cIlRyYXZlbFwiIHRpdGxlPVwiVHJhdmVsXCIvPlxuICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NjdWJhLmpwZWdcIiBib3JkZXI9XCIwXCIgYWx0PVwiU2N1YmEgRGl2aW5nXCIgdGl0bGU9XCJTY3ViYSBEaXZpbmdcIi8+XG4gICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYmVlci5qcGdcIiBib3JkZXI9XCIwXCIgYWx0PVwiQmVyc1wiIHRpdGxlPVwiQmVlcnNcIi8+XG4gICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZm9vdHkuanBnXCIgYm9yZGVyPVwiMFwiIGFsdD1cIlNvY2NlclwiIHRpdGxlPVwiU29jY2VyXCIvPlxuICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2JveGluZy5qcGdcIiBib3JkZXI9XCIwXCIgYWx0PVwiQm94aW5nXCIgdGl0bGU9XCJCb3hpbmdcIi8+XG4gICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbXVzaWMuanBnXCIgYm9yZGVyPVwiMFwiIGFsdD1cIk11c2ljXCIgdGl0bGU9XCJNdXNpY1wiLz5cbiAgICA8L0ltYWdlcz5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogQ291cmllciwgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cblxuICAgICAgICAubG9hZGVyIHtcbiAgICAgICAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgXG4gICAgICAgICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiOyBcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8Lz5cbiAgKVxufVxuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbSAwcmVtIDJyZW07XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgIHBhZGRpbmc6IDFyZW0gMjByZW07XG4gIH1cbiAgZm9udC1mYW1pbHk6IENvdXJpZXIsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuICBoMSB7XG4gICAgcGFkZGluZzogN3JlbSAwIDAgMDtcbiAgfVxufVxuYDtcblxuY29uc3QgSW1hZ2VzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbSA3cmVtIDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDU2cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgIHBhZGRpbmc6IDFyZW0gMjByZW07XG4gIH1cbiAgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1NnB4KSB7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIH1cbiAgfVxufVxuYDsiXX0= */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/pages/about.js */"));
}
var Content = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var Images = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());

/***/ })

})
//# sourceMappingURL=about.js.709e10f02e878240556f.hot-update.js.map