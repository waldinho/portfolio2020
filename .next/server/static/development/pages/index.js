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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_fluid_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-fluid-animation */ "react-fluid-animation");
/* harmony import */ var react_fluid_animation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_fluid_animation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! random */ "random");
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(random__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
var _jsxFileName = "/Users/jameswaller/2020-portfolio/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005
};
class Home extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      config: _objectSpread({}, defaultConfig)
    });

    _defineProperty(this, "_animationRef", ref => {
      this._animation = ref;

      this._reset();
    });

    _defineProperty(this, "_onUpdate", config => {
      this.setState({
        config
      });
    });

    _defineProperty(this, "_onClickRandomSplats", () => {
      this._animation.addSplats(5 + Math.random() * 20 | 0);
    });

    _defineProperty(this, "_onReset", () => {
      this.setState({
        config: _objectSpread({}, defaultConfig)
      });
    });
  }

  componentDidMount() {
    this._reset();
  }

  render() {
    const {
      config
    } = this.state;

    const greeting = () => {
      const today = new Date();
      const curHr = today.getHours();

      if (curHr < 12) {
        return 'morning';
      } else if (curHr < 17) {
        return 'afternoon';
      } else {
        return 'evening';
      }
    };

    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }, __jsx("title", {
      className: "jsx-2873349435",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }, "James Waller | Digital"), __jsx("link", {
      rel: "icon",
      href: "/favicon.ico",
      className: "jsx-2873349435",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
      className: "jsx-2873349435",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }), ">"), __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }
    }), __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }
    }), __jsx("div", {
      style: {
        height: "100vh"
      },
      className: "jsx-2873349435",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }
    }, __jsx(react_fluid_animation__WEBPACK_IMPORTED_MODULE_4___default.a, {
      config: config,
      animationRef: this._animationRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }), __jsx(Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }, __jsx("h1", {
      className: "jsx-2873349435",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }, "_Good_", greeting(), "."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2873349435",
      __self: this
    }, "html,body{padding:0;margin:0;font-family:Courier,Helvetica Neue,sans-serif;background-color:#000;color:#fff;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRXlCLEFBSXFCLEFBUVksVUFQYixTQUN1QyxHQU9sRCwyQ0FOd0Isc0JBQ1gsV0FDYiIsImZpbGUiOiIvVXNlcnMvamFtZXN3YWxsZXIvMjAyMC1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGbHVpZEFuaW1hdGlvbiBmcm9tIFwicmVhY3QtZmx1aWQtYW5pbWF0aW9uXCI7XG5pbXBvcnQgcmFuZG9tIGZyb20gXCJyYW5kb21cIjtcbmltcG9ydCBMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nbydcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnXG5cbmNvbnN0IGRlZmF1bHRDb25maWcgPSB7XG4gIHRleHR1cmVEb3duc2FtcGxlOiAxLFxuICBkZW5zaXR5RGlzc2lwYXRpb246IDAuOTgsXG4gIHZlbG9jaXR5RGlzc2lwYXRpb246IDAuOTksXG4gIHByZXNzdXJlRGlzc2lwYXRpb246IDAuOCxcbiAgcHJlc3N1cmVJdGVyYXRpb25zOiAyNSxcbiAgY3VybDogMzAsXG4gIHNwbGF0UmFkaXVzOiAwLjAwNVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGNvbmZpZzoge1xuICAgICAgLi4uZGVmYXVsdENvbmZpZ1xuICAgIH1cbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9yZXNldCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGdyZWV0aW5nID0gKCkgPT4ge1xuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgICBjb25zdCBjdXJIciA9IHRvZGF5LmdldEhvdXJzKClcbiAgICAgIGlmIChjdXJIciA8IDEyKSB7XG4gICAgICAgICAgcmV0dXJuICdtb3JuaW5nJyAgXG4gICAgICB9IGVsc2UgaWYgKGN1ckhyIDwgMTcpIHtcbiAgICAgICAgICByZXR1cm4gJ2FmdGVybm9vbicgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ2V2ZW5pbmcnXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5KYW1lcyBXYWxsZXIgfCBEaWdpdGFsPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiLz4+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TG9nbyAvPlxuICAgICAgPE5hdiAvPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxGbHVpZEFuaW1hdGlvbiBjb25maWc9e2NvbmZpZ30gYW5pbWF0aW9uUmVmPXt0aGlzLl9hbmltYXRpb25SZWZ9IC8+XG5cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgX0dvb2Rfe2dyZWV0aW5nKCl9LlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvQ29udGVudD5cbiAgICAgIDwvZGl2PlxuICBcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBDb3VyaWVyLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gIFxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9c1xuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuICBcbiAgX2FuaW1hdGlvblJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5fYW5pbWF0aW9uID0gcmVmO1xuICAgIHRoaXMuX3Jlc2V0KCk7XG4gIH07XG5cbiAgX29uVXBkYXRlID0gY29uZmlnID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29uZmlnIH0pO1xuICB9O1xuXG4gIF9vbkNsaWNrUmFuZG9tU3BsYXRzID0gKCkgPT4ge1xuICAgIHRoaXMuX2FuaW1hdGlvbi5hZGRTcGxhdHMoKDUgKyBNYXRoLnJhbmRvbSgpICogMjApIHwgMCk7XG4gIH07XG5cbiAgX29uUmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbmZpZzogeyAuLi5kZWZhdWx0Q29uZmlnIH0gfSk7XG4gIH07XG5cbiAgX3Jlc2V0KCkge1xuICAgIGlmICh0aGlzLl9hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX2FuaW1hdGlvbi5hZGRSYW5kb21TcGxhdHMocmFuZG9tLmludCgxMDAsIDE4MCkpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICAgcGFkZGluZzogMXJlbSAxMHJlbTtcbiAgfVxuICBmb250LWZhbWlseTogQ291cmllciwgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgcGFkZGluZzogMCAycmVtO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbk9wYWNpdHk7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbk9wYWNpdHkge1xuXHQwJSB7XG5cdFx0b3BhY2l0eTogMDtcbiAgfVxuICA2MCUge1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cblx0MTAwJSB7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxufVxuYDtcblxuIl19 */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/pages/index.js */"));
  }

  _reset() {
    if (this._animation) {
      this._animation.addRandomSplats(random__WEBPACK_IMPORTED_MODULE_5___default.a.int(100, 180));
    }
  }

}
const Content = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  color: #fff;
  pointer-events: none
  padding: 1rem 2rem;
  @media screen and (min-width: 1025px) {
    padding: 1rem 10rem;
  }
  font-family: Courier, Helvetica Neue, sans-serif;
  h1 {
    font-size: 1.75rem;
    padding: 0 2rem;
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 5s;
    @media screen and (min-width: 1025px) {
      font-size: 6rem;
      padding: 0;
    }
  }
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
  }
  60% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`;

/***/ }),

/***/ 9:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jameswaller/2020-portfolio/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "random":
/*!*************************!*\
  !*** external "random" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("random");

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

/***/ "react-fluid-animation":
/*!****************************************!*\
  !*** external "react-fluid-animation" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-fluid-animation");

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
//# sourceMappingURL=index.js.map