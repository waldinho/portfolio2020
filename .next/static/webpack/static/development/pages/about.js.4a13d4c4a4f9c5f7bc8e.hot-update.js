webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/Logo.js":
false,

/***/ "./components/Nav.js":
false,

/***/ "./node_modules/eve/eve.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-burger-menu/lib/BurgerIcon.js":
false,

/***/ "./node_modules/react-burger-menu/lib/BurgerMenu.js":
false,

/***/ "./node_modules/react-burger-menu/lib/CrossIcon.js":
false,

/***/ "./node_modules/react-burger-menu/lib/baseStyles.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menuFactory.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/bubble.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/elastic.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/fallDown.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/push.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/pushRotate.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/reveal.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/scaleDown.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/scaleRotate.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/slide.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/stack.js":
false,

/***/ "./node_modules/react-burger-menu/lib/snapsvgImporter.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/snapsvg-cjs/dist/snap.svg-cjs.js":
false,

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/jameswaller/2020-portfolio/pages/about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var fetcher = function fetcher(query) {
  return fetch('/api/about', {
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

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])('{ about { title, text } }', fetcher),
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, "Loading...");
  var about = data.about;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, about.map(function (item, i) {
    return __jsx(Content, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, __jsx("h1", {
      key: item.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, item.title), __jsx("div", {
      key: item.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, item.text));
  }));
}
var Content = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());

/***/ })

})
//# sourceMappingURL=about.js.4a13d4c4a4f9c5f7bc8e.hot-update.js.map