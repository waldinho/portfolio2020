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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
    className: "jsx-2543739298" + " " + "menu-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, item.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2543739298",
    __self: this
  }, ".bm-menu-wrap{width:100% !important;}@media screen and (min-width:426px){.bm-menu-wrap{width:300px !important;}}.bm-item{display:inline-block;-webkit-text-decoration:none;text-decoration:none;margin-bottom:10px;color:#000;-webkit-transition:color 0.2s;transition:color 0.2s;}.bm-item:focus{outline:0;color:#000;}.bm-item:hover{color:#00adff;}.bm-burger-button{position:fixed;width:36px;height:30px;right:36px;top:36px;}.bm-burger-bars{background:#fff;}.bm-cross-button{height:24px;width:24px;}.bm-cross{background:#000;}.bm-menu{background:#fff;padding:2.5em 1.5em 0;font-size:1.15em;padding:2rem 2rem 1.5rem 2rem;}.bm-morph-shape{fill:#373a47;}.bm-item-list{color:#b8b7ad;padding:6rem 0 0 0;}.bm-overlay{background:rgba(0,0,0,0.3);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QnVCLEFBRzZCLEFBSUcsQUFLSixBQVVaLEFBTUssQUFPQyxBQVNDLEFBS0osQUFNSSxBQUtBLEFBUUgsQUFLQyxBQU1nQixVQXhEbkIsRUEyQkEsQ0FtQmIsQ0F4Q0EsQUE4Q0QsQ0F2Q2MsQ0FTYixBQVdBLEFBS3dCLEtBOUNELEFBU3ZCLENBcEJBLENBSUUsQUEyQ0YsR0FkYyxDQTJDZCxNQUxBLEtBckNhLEFBd0JNLFdBdkJSLE1Bd0JxQixHQXZCaEMsYUF4QnFCLGNBZ0RyQixLQS9DYSxXQUNXLG9EQUN4QiIsImZpbGUiOiIvVXNlcnMvamFtZXN3YWxsZXIvMjAyMC1wb3J0Zm9saW8vY29tcG9uZW50cy9OYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzbGlkZSBhcyBNZW51IH0gZnJvbSBcInJlYWN0LWJ1cmdlci1tZW51XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuY29uc3QgZmV0Y2hlciA9IHF1ZXJ5ID0+XG4gIGZldGNoKCcvYXBpL2dyYXBoUUwvbmF2Jywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5IH0pLFxuICB9KVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ganNvbi5kYXRhKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCd7IHRpdGxlIHsgdGl0bGUgfSwgbmF2IHsgdGl0bGUsIHVybCwgdGFyZ2V0IH0gfScsIGZldGNoZXIpXG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZDwvZGl2PlxuICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cblxuICBjb25zdCB7IG5hdiB9ID0gZGF0YVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8TWVudSByaWdodD5cbiAgICAgIHtuYXYubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9e2l0ZW0udXJsfSB0YXJnZXQ9e2l0ZW0udGFyZ2V0fT57aXRlbS50aXRsZX08L2E+XG4gICAgICApKX1cbiAgICA8L01lbnU+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAuYm0tbWVudS13cmFwIHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNnB4KSB7XG4gICAgICAuYm0tbWVudS13cmFwIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8qIEluZGl2aWR1YWwgaXRlbSAqL1xuICAgIC5ibS1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgLyogT3VyIHNpZGViYXIgaXRlbSBzdHlsaW5nICovXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgIH1cblxuICAgIC5ibS1pdGVtOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6MDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cblxuICAgIC8qIENoYW5nZSBjb2xvciBvbiBob3ZlciAqL1xuICAgIC5ibS1pdGVtOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMDBhZGZmO1xuICAgIH1cblxuICAgIC8qIFRoZSByZXN0IGNvcGllZCBkaXJlY3RseSBmcm9tIHJlYWN0LWJ1cmdlci1tZW51IGRvY3MgKi9cblxuICAgIC8qIFBvc2l0aW9uIGFuZCBzaXppbmcgb2YgYnVyZ2VyIGJ1dHRvbiAqL1xuICAgIC5ibS1idXJnZXItYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgcmlnaHQ6IDM2cHg7XG4gICAgICB0b3A6IDM2cHg7XG4gICAgfVxuXG4gICAgLyogQ29sb3Ivc2hhcGUgb2YgYnVyZ2VyIGljb24gYmFycyAqL1xuICAgIC5ibS1idXJnZXItYmFycyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cblxuICAgIC8qIFBvc2l0aW9uIGFuZCBzaXppbmcgb2YgY2xpY2thYmxlIGNyb3NzIGJ1dHRvbiAqL1xuICAgIC5ibS1jcm9zcy1idXR0b24ge1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuXG4gICAgLyogQ29sb3Ivc2hhcGUgb2YgY2xvc2UgYnV0dG9uIGNyb3NzICovXG4gICAgLmJtLWNyb3NzIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgfVxuXG4gICAgLyogR2VuZXJhbCBzaWRlYmFyIHN0eWxlcyAqL1xuICAgIC5ibS1tZW51IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBwYWRkaW5nOiAyLjVlbSAxLjVlbSAwO1xuICAgICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgICBwYWRkaW5nOiAycmVtIDJyZW0gMS41cmVtIDJyZW07XG4gICAgfVxuXG4gICAgLyogTW9ycGggc2hhcGUgbmVjZXNzYXJ5IHdpdGggYnViYmxlIG9yIGVsYXN0aWMgKi9cbiAgICAuYm0tbW9ycGgtc2hhcGUge1xuICAgICAgZmlsbDogIzM3M2E0NztcbiAgICB9XG5cbiAgICAvKiBXcmFwcGVyIGZvciBpdGVtIGxpc3QgKi9cbiAgICAuYm0taXRlbS1saXN0IHtcbiAgICAgIGNvbG9yOiAjYjhiN2FkO1xuICAgICAgcGFkZGluZzogNnJlbSAwIDAgMFxuICAgIH1cblxuICAgIC8qIFN0eWxpbmcgb2Ygb3ZlcmxheSAqL1xuICAgIC5ibS1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbiAgPC8+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/components/Nav.js */"));
}

/***/ }),

/***/ "./components/Social.js":
/*!******************************!*\
  !*** ./components/Social.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jameswaller/2020-portfolio/components/Social.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Social = () => {
  return __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "mailto:james.waller1984@gmail.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/images/new-social-1.png",
    border: "0",
    alt: "Email",
    title: "Email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 57
    }
  })), __jsx("a", {
    href: "https://www.linkedin.com/in/james-waller-573b81b/",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/images/new-social-2.png",
    border: "0",
    alt: "LinkedIn",
    title: "LinkedIn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 89
    }
  })), __jsx("a", {
    href: "https://www.facebook.com/waldinho",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/images/new-social-3.png",
    border: "0",
    alt: "Facebook",
    title: "Facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 73
    }
  })), __jsx("a", {
    href: "https://github.com/waldinho",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/images/new-social-4.png",
    border: "0",
    alt: "GitHub",
    title: "GitHub",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 67
    }
  })));
};

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    padding: 1.5em;
    width: 100%;
    background-color: #000;
    border-top: 1px solid white;
    @media screen and (min-width: 426px) {
        background-color: transparent;
        border-top: none;
    }
    img {
        width: 40px;
        height: 40px;
    }
}
`;
/* harmony default export */ __webpack_exports__["default"] = (Social);

/***/ }),

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _components_Social__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Social */ "./components/Social.js");
var _jsxFileName = "/Users/jameswaller/2020-portfolio/pages/work.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const fetcher = url => fetch(url).then(res => res.json());

function Index() {
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_2___default()('/api/REST/portfolio', fetcher);
  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "Failed to load.");
  if (!data) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "Loading...");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-539388193",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "James Waller | Digital"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-539388193",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-539388193",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(_components_Social__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), data.map(item => __jsx(Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-539388193",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, item.title), item.companies.map(i => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Company, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx(CompanyLogo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: `/images/company-${i.id}.png`,
    className: "jsx-539388193",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 23
    }
  })), __jsx(CompanyText, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "jsx-539388193",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, i.title), i.text.map(x => {
    const paragraph = __jsx("p", {
      dangerouslySetInnerHTML: {
        __html: x.paragraph
      },
      className: "jsx-539388193",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 43
      }
    });

    return __jsx("div", {
      className: "jsx-539388193",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 27
      }
    }, paragraph);
  }))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "539388193",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:Courier,Helvetica Neue,sans-serif;background-color:#000;color:#fff;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy93b3JrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEMkIsQUFJcUIsQUFRWSxVQVBiLFNBQ3VDLEdBT2xELDJDQU53QixzQkFDWCxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy93b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nbydcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnXG5pbXBvcnQgU29jaWFsIGZyb20gJy4uL2NvbXBvbmVudHMvU29jaWFsJ1xuXG5jb25zdCBmZXRjaGVyID0gdXJsID0+IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVN3cignL2FwaS9SRVNUL3BvcnRmb2xpbycsIGZldGNoZXIpXG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZC48L2Rpdj5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5KYW1lcyBXYWxsZXIgfCBEaWdpdGFsPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMb2dvIC8+XG4gICAgICA8TmF2IC8+XG4gICAgICA8U29jaWFsIC8+XG4gICAgICB7ZGF0YS5tYXAoaXRlbSA9PiAoXG4gICAgICAgIDxDb250ZW50PlxuICAgICAgICAgICAgPGgxPntpdGVtLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICB7aXRlbS5jb21wYW5pZXMubWFwKGkgPT4gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxDb21wYW55PlxuICAgICAgICAgICAgICAgICAgICA8Q29tcGFueUxvZ28+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2AvaW1hZ2VzL2NvbXBhbnktJHtpLmlkfS5wbmdgfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29tcGFueUxvZ28+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wYW55VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPGgyPntpLnRpdGxlfTwvaDI+IFxuICAgICAgICAgICAgICAgICAgICAgIHtpLnRleHQubWFwKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYWdyYXBoID0gPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHgucGFyYWdyYXBofX0+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57cGFyYWdyYXBofTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Db21wYW55VGV4dD5cbiAgICAgICAgICAgICAgICA8L0NvbXBhbnk+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgKSl9XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBDb3VyaWVyLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gIFxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDJyZW0gN3JlbSAycmVtO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgICBwYWRkaW5nOiAxcmVtIDIwcmVtO1xuICB9XG4gIGZvbnQtZmFtaWx5OiBDb3VyaWVyLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgaDEge1xuICAgIHBhZGRpbmc6IDdyZW0gMCAwIDA7XG4gIH1cbn1cbmA7XG5cbmNvbnN0IENvbXBhbnkgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICBjb2xvcjogIzAwMDtcbmA7XG5cbmNvbnN0IENvbXBhbnlMb2dvID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpbWcge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgcGFkZGluZzogMHJlbTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkge1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgcGFkZGluZzogMnJlbTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IENvbXBhbnlUZXh0ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogIzRmZWM4ZTtcbiAgcGFkZGluZzogMCAxcmVtIDFyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuYDsiXX0= */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/pages/work.js */"));
}
const Content = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem 7rem 2rem;
  @media screen and (min-width: 1025px) {
    padding: 1rem 20rem;
  }
  font-family: Courier, Helvetica Neue, sans-serif;
  h1 {
    padding: 7rem 0 0 0;
  }
}
`;
const Company = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 426px) {
    flex-direction: row;
  }
  background: #fff;
  margin: 0 0 1rem 0;
  color: #000;
`;
const CompanyLogo = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  text-align: center;
  img {
    max-width: 150px;
    padding: 0rem;
    @media screen and (min-width: 426px) {
      padding: 1rem;
    }
    @media screen and (min-width: 1025px) {
      max-width: 200px;
      padding: 2rem;
    }
  }
`;
const CompanyText = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  background: #4fec8e;
  padding: 0 1rem 1rem 1rem;
  font-size: 12px;
`;

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/work.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jameswaller/2020-portfolio/pages/work.js */"./pages/work.js");


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
//# sourceMappingURL=work.js.map