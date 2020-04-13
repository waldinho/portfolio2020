module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jameswaller/2020-portfolio/components/Logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Logo = () => {
  return __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "JW"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "_Digital"));
};

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    position: fixed;
    padding: 1rem 2rem 0rem 2rem;
    z-index: 9;
    text-shadow:
        -1px -1px 0 #000,  
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
    h1 {
        font-family: Impact, Helvetica Neue, sans-serif;
        font-size: 4.25rem;   
        line-height: 0;
        color: #4fec8e;
    }
    p {
        position: relative;
        top: -1rem;
        font-family: Courier, Helvetica Neue, sans-serif;
        color: #fff;
    }
}
`;
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burger-menu */ "react-burger-menu");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jameswaller/2020-portfolio/components/Nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const fetcher = query => fetch('/api/graphQL/nav', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify({
    query
  })
}).then(res => res.json()).then(json => json.data);

function Index() {
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_3___default()('{ title { title }, nav { title, url, target } }', fetcher);
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
  const {
    nav
  } = data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__["slide"], {
    right: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, nav.map((item, i) => __jsx("a", {
    href: item.url,
    target: item.target,
    className: "jsx-4267541730" + " " + "menu-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, item.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4267541730",
    __self: this
  }, ".bm-menu-wrap{width:100% !important;}@media screen and (min-width:426px){.bm-menu-wrap{width:300px !important;}}.bm-item{display:inline-block;-webkit-text-decoration:none;text-decoration:none;margin-bottom:10px;color:#000;-webkit-transition:color 0.2s;transition:color 0.2s;}.bm-item:focus{outline:0;}.bm-item:hover{color:#31deff;}.bm-burger-button{position:fixed;width:36px;height:30px;right:36px;top:36px;}.bm-burger-bars{background:#fff;}.bm-cross-button{height:24px;width:24px;}.bm-cross{background:#000;}.bm-menu{background:#fff;padding:2.5em 1.5em 0;font-size:1.15em;padding:2rem 2rem 1.5rem 2rem;}.bm-morph-shape{fill:#373a47;}.bm-item-list{color:#b8b7ad;padding:6rem 0 0 0;}.bm-overlay{background:rgba(0,0,0,0.3);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QnVCLEFBRzZCLEFBSUcsQUFLSixBQVVaLEFBS0ssQUFPQyxBQVNDLEFBS0osQUFNSSxBQUtBLEFBUUgsQUFLQyxBQU1nQixVQXZEaEMsRUEwQmEsQ0FtQmIsQ0F4Q0EsQUE4Q0QsQ0F2Q2MsQ0FTYixBQVdBLEFBS3dCLEtBN0NELENBWHZCLENBSUUsQUEwQ0YsR0FkYyxDQTJDZCxNQUxBLEtBckNhLEFBd0JNLFdBdkJSLE1Bd0JxQixHQXZCaEMsYUF2QnFCLGNBK0NyQixLQTlDYSxXQUNXLG9EQUN4QiIsImZpbGUiOiIvVXNlcnMvamFtZXN3YWxsZXIvMjAyMC1wb3J0Zm9saW8vY29tcG9uZW50cy9OYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzbGlkZSBhcyBNZW51IH0gZnJvbSBcInJlYWN0LWJ1cmdlci1tZW51XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuY29uc3QgZmV0Y2hlciA9IHF1ZXJ5ID0+XG4gIGZldGNoKCcvYXBpL2dyYXBoUUwvbmF2Jywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5IH0pLFxuICB9KVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ganNvbi5kYXRhKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCd7IHRpdGxlIHsgdGl0bGUgfSwgbmF2IHsgdGl0bGUsIHVybCwgdGFyZ2V0IH0gfScsIGZldGNoZXIpXG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZDwvZGl2PlxuICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cblxuICBjb25zdCB7IG5hdiB9ID0gZGF0YVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8TWVudSByaWdodD5cbiAgICAgIHtuYXYubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9e2l0ZW0udXJsfSB0YXJnZXQ9e2l0ZW0udGFyZ2V0fT57aXRlbS50aXRsZX08L2E+XG4gICAgICApKX1cbiAgICA8L01lbnU+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAuYm0tbWVudS13cmFwIHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNnB4KSB7XG4gICAgICAuYm0tbWVudS13cmFwIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8qIEluZGl2aWR1YWwgaXRlbSAqL1xuICAgIC5ibS1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgLyogT3VyIHNpZGViYXIgaXRlbSBzdHlsaW5nICovXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgIH1cblxuICAgIC5ibS1pdGVtOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6MDtcbiAgICB9XG5cbiAgICAvKiBDaGFuZ2UgY29sb3Igb24gaG92ZXIgKi9cbiAgICAuYm0taXRlbTpob3ZlciB7XG4gICAgICBjb2xvcjogIzMxZGVmZjtcbiAgICB9XG5cbiAgICAvKiBUaGUgcmVzdCBjb3BpZWQgZGlyZWN0bHkgZnJvbSByZWFjdC1idXJnZXItbWVudSBkb2NzICovXG5cbiAgICAvKiBQb3NpdGlvbiBhbmQgc2l6aW5nIG9mIGJ1cmdlciBidXR0b24gKi9cbiAgICAuYm0tYnVyZ2VyLWJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHJpZ2h0OiAzNnB4O1xuICAgICAgdG9wOiAzNnB4O1xuICAgIH1cblxuICAgIC8qIENvbG9yL3NoYXBlIG9mIGJ1cmdlciBpY29uIGJhcnMgKi9cbiAgICAuYm0tYnVyZ2VyLWJhcnMge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB9XG5cbiAgICAvKiBQb3NpdGlvbiBhbmQgc2l6aW5nIG9mIGNsaWNrYWJsZSBjcm9zcyBidXR0b24gKi9cbiAgICAuYm0tY3Jvc3MtYnV0dG9uIHtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cblxuICAgIC8qIENvbG9yL3NoYXBlIG9mIGNsb3NlIGJ1dHRvbiBjcm9zcyAqL1xuICAgIC5ibS1jcm9zcyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIH1cblxuICAgIC8qIEdlbmVyYWwgc2lkZWJhciBzdHlsZXMgKi9cbiAgICAuYm0tbWVudSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgcGFkZGluZzogMi41ZW0gMS41ZW0gMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xuICAgICAgcGFkZGluZzogMnJlbSAycmVtIDEuNXJlbSAycmVtO1xuICAgIH1cblxuICAgIC8qIE1vcnBoIHNoYXBlIG5lY2Vzc2FyeSB3aXRoIGJ1YmJsZSBvciBlbGFzdGljICovXG4gICAgLmJtLW1vcnBoLXNoYXBlIHtcbiAgICAgIGZpbGw6ICMzNzNhNDc7XG4gICAgfVxuXG4gICAgLyogV3JhcHBlciBmb3IgaXRlbSBsaXN0ICovXG4gICAgLmJtLWl0ZW0tbGlzdCB7XG4gICAgICBjb2xvcjogI2I4YjdhZDtcbiAgICAgIHBhZGRpbmc6IDZyZW0gMCAwIDBcbiAgICB9XG5cbiAgICAvKiBTdHlsaW5nIG9mIG92ZXJsYXkgKi9cbiAgICAuYm0tb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgfVxuICBgfTwvc3R5bGU+XG4gIDwvPlxuICApXG59Il19 */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/components/Nav.js */"));
}

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/jameswaller/2020-portfolio/pages/about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const fetcher = query => fetch('/api/graphQL/about', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify({
    query
  })
}).then(res => res.json()).then(json => json.data);

function Index() {
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_6___default()('{ title { title }, paragraph { id, text }, images { id } }', fetcher);
  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "Failed to load");
  if (!data) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "Loading...");
  const {
    title,
    paragraph,
    images
  } = data;
  console.log('data: ', data);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("title", {
    className: "jsx-3386745504",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "James Waller | Digital"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3386745504",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-3386745504",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  })), __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }), __jsx(Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-3386745504",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, title[0].title), paragraph.map(item => __jsx("p", {
    className: "jsx-3386745504",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, item.text))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3386745504",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:Courier,Helvetica Neue,sans-serif;background-color:#000;color:#fff;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ3VCLEFBSW1CLEFBUVksVUFQYixTQUN1QyxHQU9oRCwyQ0FOc0Isc0JBQ1gsV0FDWCIsImZpbGUiOiIvVXNlcnMvamFtZXN3YWxsZXIvMjAyMC1wb3J0Zm9saW8vcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nbydcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuY29uc3QgZmV0Y2hlciA9IHF1ZXJ5ID0+XG4gIGZldGNoKCcvYXBpL2dyYXBoUUwvYWJvdXQnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnkgfSksXG4gIH0pXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBqc29uLmRhdGEpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoJ3sgdGl0bGUgeyB0aXRsZSB9LCBwYXJhZ3JhcGggeyBpZCwgdGV4dCB9LCBpbWFnZXMgeyBpZCB9IH0nLCBmZXRjaGVyKVxuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQ8L2Rpdj5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG5cbiAgY29uc3QgeyB0aXRsZSwgcGFyYWdyYXBoLCBpbWFnZXMgfSA9IGRhdGFcblxuICBjb25zb2xlLmxvZygnZGF0YTogJywgZGF0YSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+SmFtZXMgV2FsbGVyIHwgRGlnaXRhbDwvdGl0bGU+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiLz5cbiAgICA8L0hlYWQ+XG4gICAgPExvZ28gLz5cbiAgICA8TmF2IC8+XG4gICAgPENvbnRlbnQ+XG4gICAgICA8aDE+e3RpdGxlWzBdLnRpdGxlfTwvaDE+XG4gICAgICB7cGFyYWdyYXBoLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxwPntpdGVtLnRleHR9PC9wPiAgXG4gICAgICAgIClcbiAgICAgICl9XG4gICAgPC9Db250ZW50PlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBDb3VyaWVyLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC8+XG4gIClcbn1cblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgIHBhZGRpbmc6IDFyZW0gMjByZW07XG4gIH1cbiAgZm9udC1mYW1pbHk6IENvdXJpZXIsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuICBoMSB7XG4gICAgcGFkZGluZzogN3JlbSAwIDAgMDtcbiAgfVxufVxuYDsiXX0= */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/pages/about.js */"));
}
const Content = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem;
  @media screen and (min-width: 1025px) {
    padding: 1rem 20rem;
  }
  font-family: Courier, Helvetica Neue, sans-serif;
  h1 {
    padding: 7rem 0 0 0;
  }
}
`;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jameswaller/2020-portfolio/pages/about.js */"./pages/about.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-burger-menu":
/*!************************************!*\
  !*** external "react-burger-menu" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map