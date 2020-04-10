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
    position: absolute;
    padding: 1rem 2rem 0rem 2rem;
    z-index: 9;
    h1 {
        font-family: Impact;
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burger-menu */ "react-burger-menu");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jameswaller/2020-portfolio/components/Nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__["slide"], {
    right: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "/",
    className: "jsx-1312007427" + " " + "menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Home"), __jsx("a", {
    href: "/about",
    className: "jsx-1312007427" + " " + "menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "About"), __jsx("a", {
    href: "/portfolio",
    className: "jsx-1312007427" + " " + "menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "Portfolio"), __jsx("a", {
    href: "/contact",
    className: "jsx-1312007427" + " " + "menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Contact"), __jsx("a", {
    href: "/resume",
    className: "jsx-1312007427" + " " + "menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "Resume")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1312007427",
    __self: undefined
  }, ".bm-item{display:inline-block;-webkit-text-decoration:none;text-decoration:none;margin-bottom:10px;color:#000;-webkit-transition:color 0.2s;transition:color 0.2s;}.bm-item:focus{outline:0;}.bm-item:active{color:#4663ff;}.bm-item:hover{color:#31deff;}.bm-burger-button{position:fixed;width:36px;height:30px;right:36px;top:36px;}.bm-burger-bars{background:#fff;}.bm-cross-button{height:24px;width:24px;}.bm-cross{background:#000;}.bm-menu{background:#fff;padding:2.5em 1.5em 0;font-size:1.15em;padding:2rem 2rem 1.5rem 2rem;}.bm-morph-shape{fill:#373a47;}.bm-item-list{color:#b8b7ad;padding:6rem 0 0 0;}.bm-overlay{background:rgba(0,0,0,0.3);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnVCLEFBSWdDLEFBVVosQUFJSyxBQU1BLEFBT0MsQUFTQyxBQUtKLEFBTUksQUFLQSxBQVFILEFBS0MsQUFNZ0IsVUE1RGhDLEVBK0JhLENBbUJiLENBOUNBLEFBTUEsQUE4Q0QsQ0F2Q2MsQ0FTYixBQVdBLEFBS3dCLEtBbERELEVBd0N2QixHQWRjLENBMkNkLE1BTEEsS0FyQ2EsQUF3Qk0sV0F2QlIsTUF3QnFCLEdBdkJoQyxhQTVCcUIsY0FvRHJCLEtBbkRhLFdBQ1csb0RBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNsaWRlIGFzIE1lbnUgfSBmcm9tIFwicmVhY3QtYnVyZ2VyLW1lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPE1lbnUgcmlnaHQ+XG4gICAgICA8YSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBocmVmPVwiL1wiPlxuICAgICAgICBIb21lXG4gICAgICA8L2E+XG5cbiAgICAgIDxhIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgQWJvdXRcbiAgICAgIDwvYT5cblxuICAgICAgPGEgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgaHJlZj1cIi9wb3J0Zm9saW9cIj5cbiAgICAgICAgUG9ydGZvbGlvXG4gICAgICA8L2E+XG5cbiAgICAgIDxhIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICBDb250YWN0XG4gICAgICA8L2E+XG4gICAgICA8YSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBocmVmPVwiL3Jlc3VtZVwiPlxuICAgICAgICBSZXN1bWVcbiAgICAgIDwvYT5cbiAgICA8L01lbnU+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLyogSW5kaXZpZHVhbCBpdGVtICovXG4gICAgICAgIC5ibS1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgICAgICAvKiBPdXIgc2lkZWJhciBpdGVtIHN0eWxpbmcgKi9cbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJtLWl0ZW06Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6MDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibS1pdGVtOmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICM0NjYzZmY7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qIENoYW5nZSBjb2xvciBvbiBob3ZlciAqL1xuICAgICAgICAuYm0taXRlbTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICMzMWRlZmY7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBUaGUgcmVzdCBjb3BpZWQgZGlyZWN0bHkgZnJvbSByZWFjdC1idXJnZXItbWVudSBkb2NzICovXG5cbiAgICAgICAgLyogUG9zaXRpb24gYW5kIHNpemluZyBvZiBidXJnZXIgYnV0dG9uICovXG4gICAgICAgIC5ibS1idXJnZXItYnV0dG9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHJpZ2h0OiAzNnB4O1xuICAgICAgICAgIHRvcDogMzZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIENvbG9yL3NoYXBlIG9mIGJ1cmdlciBpY29uIGJhcnMgKi9cbiAgICAgICAgLmJtLWJ1cmdlci1iYXJzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogUG9zaXRpb24gYW5kIHNpemluZyBvZiBjbGlja2FibGUgY3Jvc3MgYnV0dG9uICovXG4gICAgICAgIC5ibS1jcm9zcy1idXR0b24ge1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIENvbG9yL3NoYXBlIG9mIGNsb3NlIGJ1dHRvbiBjcm9zcyAqL1xuICAgICAgICAuYm0tY3Jvc3Mge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBHZW5lcmFsIHNpZGViYXIgc3R5bGVzICovXG4gICAgICAgIC5ibS1tZW51IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDIuNWVtIDEuNWVtIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgICAgICAgcGFkZGluZzogMnJlbSAycmVtIDEuNXJlbSAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogTW9ycGggc2hhcGUgbmVjZXNzYXJ5IHdpdGggYnViYmxlIG9yIGVsYXN0aWMgKi9cbiAgICAgICAgLmJtLW1vcnBoLXNoYXBlIHtcbiAgICAgICAgICBmaWxsOiAjMzczYTQ3O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogV3JhcHBlciBmb3IgaXRlbSBsaXN0ICovXG4gICAgICAgIC5ibS1pdGVtLWxpc3Qge1xuICAgICAgICAgIGNvbG9yOiAjYjhiN2FkO1xuICAgICAgICAgIHBhZGRpbmc6IDZyZW0gMCAwIDBcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFN0eWxpbmcgb2Ygb3ZlcmxheSAqL1xuICAgICAgICAuYm0tb3ZlcmxheSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/components/Nav.js */"));
});

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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
var _jsxFileName = "/Users/jameswaller/2020-portfolio/pages/about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const fetcher = url => fetch(url).then(res => res.json());

function Index() {
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_2___default()('/api/about', fetcher);
  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "Failed to load users");
  if (!data) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "Loading...");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-355972198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "James Waller | Digital"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-355972198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), data.map(item => {
    console.log('item: ', item);
    return __jsx(Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, __jsx("h1", {
      className: "jsx-355972198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, item.title), item.paragraph.map(i => {
      console.log('i: ', i);
      return __jsx("p", {
        className: "jsx-355972198",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }
      }, i.text);
    }));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "355972198",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:Courier,Helvetica Neue,sans-serif;background-color:#000;color:#fff;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3lCLEFBSXFCLEFBUVksVUFQYixTQUN1QyxHQU9oRCwyQ0FOc0Isc0JBQ1gsV0FDWCIsImZpbGUiOiIvVXNlcnMvamFtZXN3YWxsZXIvMjAyMC1wb3J0Zm9saW8vcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU3dyIGZyb20gJ3N3cidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dvJ1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdidcblxuY29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTd3IoJy9hcGkvYWJvdXQnLCBmZXRjaGVyKVxuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQgdXNlcnM8L2Rpdj5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5KYW1lcyBXYWxsZXIgfCBEaWdpdGFsPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExvZ28gLz5cbiAgICAgIDxOYXYgLz5cbiAgICAgIHtkYXRhLm1hcChpdGVtID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2l0ZW06ICcsIGl0ZW0pXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgICA8aDE+e2l0ZW0udGl0bGV9PC9oMT5cbiAgICAgICAgICAgIHtpdGVtLnBhcmFncmFwaC5tYXAoaSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpOiAnLCBpKVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxwPntpLnRleHR9PC9wPiAgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogQ291cmllciwgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAyMHJlbTtcbiAgZm9udC1mYW1pbHk6IENvdXJpZXIsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuICBoMSB7XG4gICAgcGFkZGluZzogNXJlbSAwIDAgMDtcbiAgfVxufVxuYDsiXX0= */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/pages/about.js */"));
}
const Content = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 20rem;
  font-family: Courier, Helvetica Neue, sans-serif;
  h1 {
    padding: 5rem 0 0 0;
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