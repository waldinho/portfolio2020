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
    className: "jsx-2386333643" + " " + "menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Home"), __jsx("a", {
    href: "/about",
    className: "jsx-2386333643" + " " + "menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "About"), __jsx("a", {
    href: "/portfolio",
    className: "jsx-2386333643" + " " + "menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "Portfolio"), __jsx("a", {
    href: "/contact",
    className: "jsx-2386333643" + " " + "menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Contact"), __jsx("a", {
    href: "/resume",
    className: "jsx-2386333643" + " " + "menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "Resume")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2386333643",
    __self: undefined
  }, ".bm-item{display:inline-block;-webkit-text-decoration:none;text-decoration:none;margin-bottom:10px;color:#000;-webkit-transition:color 0.2s;transition:color 0.2s;}.bm-item:focus{outline:0;}.bm-item:hover{color:#31deff;}.bm-burger-button{position:fixed;width:36px;height:30px;right:36px;top:36px;}.bm-burger-bars{background:#fff;}.bm-cross-button{height:24px;width:24px;}.bm-cross{background:#000;}.bm-menu{background:#fff;padding:2.5em 1.5em 0;font-size:1.15em;padding:2rem 2rem 1.5rem 2rem;}.bm-morph-shape{fill:#373a47;}.bm-item-list{color:#b8b7ad;padding:6rem 0 0 0;}.bm-overlay{background:rgba(0,0,0,0.3);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnVCLEFBSWdDLEFBVVosQUFLSyxBQU9DLEFBU0MsQUFLSixBQU1JLEFBS0EsQUFRSCxBQUtDLEFBTWdCLFVBdkRoQyxFQTBCYSxDQW1CYixDQXhDQSxBQThDRCxDQXZDYyxDQVNiLEFBV0EsQUFLd0IsS0E3Q0QsRUFtQ3ZCLEdBZGMsQ0EyQ2QsTUFMQSxLQXJDYSxBQXdCTSxXQXZCUixNQXdCcUIsR0F2QmhDLGFBdkJxQixjQStDckIsS0E5Q2EsV0FDVyxvREFDeEIiLCJmaWxlIjoiL1VzZXJzL2phbWVzd2FsbGVyLzIwMjAtcG9ydGZvbGlvL2NvbXBvbmVudHMvTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2xpZGUgYXMgTWVudSB9IGZyb20gXCJyZWFjdC1idXJnZXItbWVudVwiO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8TWVudSByaWdodD5cbiAgICAgIDxhIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIvXCI+XG4gICAgICAgIEhvbWVcbiAgICAgIDwvYT5cblxuICAgICAgPGEgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICBBYm91dFxuICAgICAgPC9hPlxuXG4gICAgICA8YSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBocmVmPVwiL3BvcnRmb2xpb1wiPlxuICAgICAgICBQb3J0Zm9saW9cbiAgICAgIDwvYT5cblxuICAgICAgPGEgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgIENvbnRhY3RcbiAgICAgIDwvYT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIvcmVzdW1lXCI+XG4gICAgICAgIFJlc3VtZVxuICAgICAgPC9hPlxuICAgIDwvTWVudT5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAvKiBJbmRpdmlkdWFsIGl0ZW0gKi9cbiAgICAgICAgLmJtLWl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICAgIC8qIE91ciBzaWRlYmFyIGl0ZW0gc3R5bGluZyAqL1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgICAgIH1cblxuICAgICAgICAuYm0taXRlbTpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTowO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogQ2hhbmdlIGNvbG9yIG9uIGhvdmVyICovXG4gICAgICAgIC5ibS1pdGVtOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzMxZGVmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFRoZSByZXN0IGNvcGllZCBkaXJlY3RseSBmcm9tIHJlYWN0LWJ1cmdlci1tZW51IGRvY3MgKi9cblxuICAgICAgICAvKiBQb3NpdGlvbiBhbmQgc2l6aW5nIG9mIGJ1cmdlciBidXR0b24gKi9cbiAgICAgICAgLmJtLWJ1cmdlci1idXR0b24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgcmlnaHQ6IDM2cHg7XG4gICAgICAgICAgdG9wOiAzNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogQ29sb3Ivc2hhcGUgb2YgYnVyZ2VyIGljb24gYmFycyAqL1xuICAgICAgICAuYm0tYnVyZ2VyLWJhcnMge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBQb3NpdGlvbiBhbmQgc2l6aW5nIG9mIGNsaWNrYWJsZSBjcm9zcyBidXR0b24gKi9cbiAgICAgICAgLmJtLWNyb3NzLWJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogQ29sb3Ivc2hhcGUgb2YgY2xvc2UgYnV0dG9uIGNyb3NzICovXG4gICAgICAgIC5ibS1jcm9zcyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEdlbmVyYWwgc2lkZWJhciBzdHlsZXMgKi9cbiAgICAgICAgLmJtLW1lbnUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMi41ZW0gMS41ZW0gMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICAgICAgICBwYWRkaW5nOiAycmVtIDJyZW0gMS41cmVtIDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAvKiBNb3JwaCBzaGFwZSBuZWNlc3Nhcnkgd2l0aCBidWJibGUgb3IgZWxhc3RpYyAqL1xuICAgICAgICAuYm0tbW9ycGgtc2hhcGUge1xuICAgICAgICAgIGZpbGw6ICMzNzNhNDc7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBXcmFwcGVyIGZvciBpdGVtIGxpc3QgKi9cbiAgICAgICAgLmJtLWl0ZW0tbGlzdCB7XG4gICAgICAgICAgY29sb3I6ICNiOGI3YWQ7XG4gICAgICAgICAgcGFkZGluZzogNnJlbSAwIDAgMFxuICAgICAgICB9XG5cbiAgICAgICAgLyogU3R5bGluZyBvZiBvdmVybGF5ICovXG4gICAgICAgIC5ibS1vdmVybGF5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/components/Nav.js */"));
});

/***/ }),

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
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
var _jsxFileName = "/Users/jameswaller/2020-portfolio/pages/portfolio.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const fetcher = url => fetch(url).then(res => res.json());

function Index() {
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_2___default()('/api/portfolio', fetcher);
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
    className: "jsx-539388193",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "James Waller | Digital"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-539388193",
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
  }), data.map(item => __jsx(Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "jsx-539388193",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, item.title), item.companies.map(i => __jsx("div", {
    className: "jsx-539388193",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "jsx-539388193",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
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
        lineNumber: 30,
        columnNumber: 45
      }
    });

    return __jsx("div", {
      className: "jsx-539388193",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }
    }, paragraph);
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "539388193",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:Courier,Helvetica Neue,sans-serif;background-color:#000;color:#fff;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy9wb3J0Zm9saW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0MyQixBQUlxQixBQVFZLFVBUGIsU0FDdUMsR0FPbEQsMkNBTndCLHNCQUNYLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2phbWVzd2FsbGVyLzIwMjAtcG9ydGZvbGlvL3BhZ2VzL3BvcnRmb2xpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTd3IgZnJvbSAnc3dyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL0xvZ28nXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2J1xuXG5jb25zdCBmZXRjaGVyID0gdXJsID0+IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVN3cignL2FwaS9wb3J0Zm9saW8nLCBmZXRjaGVyKVxuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQgdXNlcnM8L2Rpdj5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5KYW1lcyBXYWxsZXIgfCBEaWdpdGFsPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExvZ28gLz5cbiAgICAgIDxOYXYgLz5cbiAgICAgIHtkYXRhLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxDb250ZW50PlxuICAgICAgICAgICAgICAgIDxoMT57aXRlbS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIHtpdGVtLmNvbXBhbmllcy5tYXAoaSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2kudGl0bGV9PC9oMj4gXG4gICAgICAgICAgICAgICAgICAgICAgICB7aS50ZXh0Lm1hcCh4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYWdyYXBoID0gPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHgucGFyYWdyYXBofX0+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3BhcmFncmFwaH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICkpfVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogQ291cmllciwgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICBcbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAyMHJlbTtcbiAgZm9udC1mYW1pbHk6IENvdXJpZXIsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuICBoMSB7XG4gICAgcGFkZGluZzogNXJlbSAwIDAgMDtcbiAgfVxufVxuYDsiXX0= */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/pages/portfolio.js */"));
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
/*!**********************************!*\
  !*** multi ./pages/portfolio.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jameswaller/2020-portfolio/pages/portfolio.js */"./pages/portfolio.js");


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
//# sourceMappingURL=portfolio.js.map