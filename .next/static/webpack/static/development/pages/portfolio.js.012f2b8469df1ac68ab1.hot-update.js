webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _this = undefined,
    _jsxFileName = "/Users/jameswaller/2020-portfolio/components/Logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: absolute;\n    padding: 1rem 2rem 0rem 2rem;\n    z-index: 9;\n    h1 {\n        font-family: Impact, Helvetica Neue, sans-serif;\n        font-size: 4.25rem;   \n        line-height: 0;\n        color: #4fec8e;\n    }\n    p {\n        position: relative;\n        top: -1rem;\n        font-family: Courier, Helvetica Neue, sans-serif;\n        color: #fff;\n    }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Logo = function Logo() {
  var combine = function combine(a, min) {
    var fn = function fn(n, src, got, all) {
      if (n == 0) {
        if (got.length > 0) {
          all[all.length] = got;
        }

        return;
      }

      for (var j = 0; j < src.length; j++) {
        fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
      }

      return;
    };

    var all = [];

    for (var i = min; i < a.length; i++) {
      fn(i, a, [], all);
    }

    all.push(a);
    return all;
  };

  var subsets = combine([1, 2, 3], 1);
  var subsetsMaxLength = subsets.length;
  console.log(subsetsMaxLength);
  return __jsx(Wrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "JW"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "_Digital"));
};

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ })

})
//# sourceMappingURL=portfolio.js.012f2b8469df1ac68ab1.hot-update.js.map