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
    className: "loader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  });
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
    className: "jsx-2762157592" + " " + "menu-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, item.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2762157592",
    __self: this
  }, ".loader{border:16px solid #000;border-top:16px solid #4fec8e;border-radius:50%;width:120px;height:120px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;z-index:9999;position:absolute;top:50%;left:50%;margin-top:-35px;margin-left:-35px;}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.bm-menu-wrap{width:100% !important;}@media screen and (min-width:426px){.bm-menu-wrap{width:300px !important;}}.bm-item{display:inline-block;-webkit-text-decoration:none;text-decoration:none;margin-bottom:10px;color:#000;-webkit-transition:color 0.2s;transition:color 0.2s;}.bm-item:focus{outline:0;color:#000;}.bm-item:hover{color:#00adff;}.bm-burger-button{position:fixed;width:36px;height:30px;right:36px;top:36px;}.bm-burger-bars{background:#fff;}.bm-cross-button{height:24px;width:24px;}.bm-cross{background:#000;}.bm-menu{background:#fff;padding:2.5em 1.5em 0;font-size:1.15em;padding:2rem 2rem 1.5rem 2rem;}.bm-morph-shape{fill:#373a47;}.bm-item-list{color:#b8b7ad;padding:6rem 0 0 0;}.bm-overlay{background:rgba(0,0,0,0.3);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QnVCLEFBRzhCLEFBZUksQUFDSSxBQUlULEFBSUcsQUFLSixBQVVaLEFBTUssQUFPQyxBQVNDLEFBS0osQUFNSSxBQUtBLEFBUUgsQUFLQyxBQU1nQixVQXhEbkIsRUEyQkEsQ0FtQmIsQ0F4Q0EsQUE4Q0QsQ0F2Q2MsQ0FTYixBQVdBLEFBS3dCLEtBOUNELEFBU3ZCLENBcEJBLENBcEJnQyxBQXdCOUIsQUEyQ0YsR0FkYyxDQTJDZCxNQUxBLEtBckNhLEFBd0JNLFdBdkJSLElBdERTLEVBOEVZLEdBdkJoQyxhQXREYyxBQThCTyxVQWxCUyxFQVhmLEVBNkVmLEVBakVrQyxHQWtCckIsTUE3QnVCLEtBOEJaLG9EQUN4QixtQkE5QmUsYUFDSyxrQkFDVixRQUNDLFNBQ1EsaUJBQ0Msa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNsaWRlIGFzIE1lbnUgfSBmcm9tIFwicmVhY3QtYnVyZ2VyLW1lbnVcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG5jb25zdCBmZXRjaGVyID0gcXVlcnkgPT5cbiAgZmV0Y2goJy9hcGkvZ3JhcGhRTC9uYXYnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnkgfSksXG4gIH0pXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBqc29uLmRhdGEpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoJ3sgdGl0bGUgeyB0aXRsZSB9LCBuYXYgeyB0aXRsZSwgdXJsLCB0YXJnZXQgfSB9JywgZmV0Y2hlcilcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkPC9kaXY+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9kaXY+XG5cbiAgY29uc3QgeyBuYXYgfSA9IGRhdGFcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPE1lbnUgcmlnaHQ+XG4gICAgICB7bmF2Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICA8YSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBocmVmPXtpdGVtLnVybH0gdGFyZ2V0PXtpdGVtLnRhcmdldH0+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgKSl9XG4gICAgPC9NZW51PlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgLmxvYWRlciB7XG4gICAgICBib3JkZXI6IDE2cHggc29saWQgIzAwMDtcbiAgICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgIzRmZWM4ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLXRvcDogLTM1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogLTM1cHg7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgfVxuXG4gICAgLmJtLW1lbnUtd3JhcCB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkge1xuICAgICAgLmJtLW1lbnUtd3JhcCB7XG4gICAgICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAvKiBJbmRpdmlkdWFsIGl0ZW0gKi9cbiAgICAuYm0taXRlbSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgIC8qIE91ciBzaWRlYmFyIGl0ZW0gc3R5bGluZyAqL1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICB9XG5cbiAgICAuYm0taXRlbTpmb2N1cyB7XG4gICAgICBvdXRsaW5lOjA7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG5cbiAgICAvKiBDaGFuZ2UgY29sb3Igb24gaG92ZXIgKi9cbiAgICAuYm0taXRlbTpob3ZlciB7XG4gICAgICBjb2xvcjogIzAwYWRmZjtcbiAgICB9XG5cbiAgICAvKiBUaGUgcmVzdCBjb3BpZWQgZGlyZWN0bHkgZnJvbSByZWFjdC1idXJnZXItbWVudSBkb2NzICovXG5cbiAgICAvKiBQb3NpdGlvbiBhbmQgc2l6aW5nIG9mIGJ1cmdlciBidXR0b24gKi9cbiAgICAuYm0tYnVyZ2VyLWJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHJpZ2h0OiAzNnB4O1xuICAgICAgdG9wOiAzNnB4O1xuICAgIH1cblxuICAgIC8qIENvbG9yL3NoYXBlIG9mIGJ1cmdlciBpY29uIGJhcnMgKi9cbiAgICAuYm0tYnVyZ2VyLWJhcnMge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB9XG5cbiAgICAvKiBQb3NpdGlvbiBhbmQgc2l6aW5nIG9mIGNsaWNrYWJsZSBjcm9zcyBidXR0b24gKi9cbiAgICAuYm0tY3Jvc3MtYnV0dG9uIHtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cblxuICAgIC8qIENvbG9yL3NoYXBlIG9mIGNsb3NlIGJ1dHRvbiBjcm9zcyAqL1xuICAgIC5ibS1jcm9zcyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIH1cblxuICAgIC8qIEdlbmVyYWwgc2lkZWJhciBzdHlsZXMgKi9cbiAgICAuYm0tbWVudSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgcGFkZGluZzogMi41ZW0gMS41ZW0gMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xuICAgICAgcGFkZGluZzogMnJlbSAycmVtIDEuNXJlbSAycmVtO1xuICAgIH1cblxuICAgIC8qIE1vcnBoIHNoYXBlIG5lY2Vzc2FyeSB3aXRoIGJ1YmJsZSBvciBlbGFzdGljICovXG4gICAgLmJtLW1vcnBoLXNoYXBlIHtcbiAgICAgIGZpbGw6ICMzNzNhNDc7XG4gICAgfVxuXG4gICAgLyogV3JhcHBlciBmb3IgaXRlbSBsaXN0ICovXG4gICAgLmJtLWl0ZW0tbGlzdCB7XG4gICAgICBjb2xvcjogI2I4YjdhZDtcbiAgICAgIHBhZGRpbmc6IDZyZW0gMCAwIDBcbiAgICB9XG5cbiAgICAvKiBTdHlsaW5nIG9mIG92ZXJsYXkgKi9cbiAgICAuYm0tb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgfVxuICBgfTwvc3R5bGU+XG4gIDwvPlxuICApXG59Il19 */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/components/Nav.js */"));
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
/* harmony import */ var _components_Social__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Social */ "./components/Social.js");
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

const greeting = () => {
  const today = new Date();
  const curHr = today.getHours();

  if (curHr < 12) {
    return '_Good_morning.';
  } else if (curHr < 17) {
    return '_Good_afternoon.';
  } else {
    return '_Good_evening.';
  }
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

    let i = 0;
    let txt = greeting();
    let speed = 100;
    setTimeout(function typeWriter() {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }, 3000);
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
        lineNumber: 68,
        columnNumber: 7
      }
    }, __jsx("title", {
      className: "jsx-2873349435",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }
    }, "James Waller | Digital"), __jsx("link", {
      rel: "icon",
      href: "/favicon.ico",
      className: "jsx-2873349435",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
      className: "jsx-2873349435",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }
    }), ">"), __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    }), __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }
    }), __jsx(_components_Social__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
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
        lineNumber: 76,
        columnNumber: 7
      }
    }, __jsx(react_fluid_animation__WEBPACK_IMPORTED_MODULE_4___default.a, {
      config: config,
      animationRef: this._animationRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }), __jsx(Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }
    }, __jsx("h1", {
      id: "demo",
      className: "jsx-2873349435",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2873349435",
      __self: this
    }, "html,body{padding:0;margin:0;font-family:Courier,Helvetica Neue,sans-serif;background-color:#000;color:#fff;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RnlCLEFBSXFCLEFBUVksVUFQYixTQUN1QyxHQU9sRCwyQ0FOd0Isc0JBQ1gsV0FDYiIsImZpbGUiOiIvVXNlcnMvamFtZXN3YWxsZXIvMjAyMC1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGbHVpZEFuaW1hdGlvbiBmcm9tIFwicmVhY3QtZmx1aWQtYW5pbWF0aW9uXCI7XG5pbXBvcnQgcmFuZG9tIGZyb20gXCJyYW5kb21cIjtcbmltcG9ydCBMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nbydcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnXG5pbXBvcnQgU29jaWFsIGZyb20gJy4uL2NvbXBvbmVudHMvU29jaWFsJ1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICB0ZXh0dXJlRG93bnNhbXBsZTogMSxcbiAgZGVuc2l0eURpc3NpcGF0aW9uOiAwLjk4LFxuICB2ZWxvY2l0eURpc3NpcGF0aW9uOiAwLjk5LFxuICBwcmVzc3VyZURpc3NpcGF0aW9uOiAwLjgsXG4gIHByZXNzdXJlSXRlcmF0aW9uczogMjUsXG4gIGN1cmw6IDMwLFxuICBzcGxhdFJhZGl1czogMC4wMDVcbn07XG5cbmNvbnN0IGdyZWV0aW5nID0gKCkgPT4ge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgY29uc3QgY3VySHIgPSB0b2RheS5nZXRIb3VycygpXG4gIGlmIChjdXJIciA8IDEyKSB7XG4gICAgICByZXR1cm4gJ19Hb29kX21vcm5pbmcuJyAgXG4gIH0gZWxzZSBpZiAoY3VySHIgPCAxNykge1xuICAgICAgcmV0dXJuICdfR29vZF9hZnRlcm5vb24uJyAgXG4gIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ19Hb29kX2V2ZW5pbmcuJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBjb25maWc6IHtcbiAgICAgIC4uLmRlZmF1bHRDb25maWdcbiAgICB9XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fcmVzZXQoKTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHR4dCA9IGdyZWV0aW5nKClcbiAgICBsZXQgc3BlZWQgPSAxMDA7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiB0eXBlV3JpdGVyKCkge1xuICAgICAgaWYgKGkgPCB0eHQubGVuZ3RoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKS5pbm5lckhUTUwgKz0gdHh0LmNoYXJBdChpKTtcbiAgICAgICAgaSsrO1xuICAgICAgICBzZXRUaW1lb3V0KHR5cGVXcml0ZXIsIHNwZWVkKTtcbiAgICAgIH1cbiAgICB9LCAzMDAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBncmVldGluZyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgICAgY29uc3QgY3VySHIgPSB0b2RheS5nZXRIb3VycygpXG4gICAgICBpZiAoY3VySHIgPCAxMikge1xuICAgICAgICAgIHJldHVybiAnbW9ybmluZycgIFxuICAgICAgfSBlbHNlIGlmIChjdXJIciA8IDE3KSB7XG4gICAgICAgICAgcmV0dXJuICdhZnRlcm5vb24nICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdldmVuaW5nJ1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SmFtZXMgV2FsbGVyIHwgRGlnaXRhbDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIi8+PlxuICAgICAgPC9IZWFkPlxuICAgICAgPExvZ28gLz5cbiAgICAgIDxOYXYgLz5cbiAgICAgIDxTb2NpYWwgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIlxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Rmx1aWRBbmltYXRpb24gY29uZmlnPXtjb25maWd9IGFuaW1hdGlvblJlZj17dGhpcy5fYW5pbWF0aW9uUmVmfSAvPlxuXG4gICAgICAgIDxDb250ZW50PlxuICAgICAgICAgIDxoMSBpZD1cImRlbW9cIj5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogQ291cmllciwgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICBcbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfXNcbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbiAgXG4gIF9hbmltYXRpb25SZWYgPSByZWYgPT4ge1xuICAgIHRoaXMuX2FuaW1hdGlvbiA9IHJlZjtcbiAgICB0aGlzLl9yZXNldCgpO1xuICB9O1xuXG4gIF9vblVwZGF0ZSA9IGNvbmZpZyA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbmZpZyB9KTtcbiAgfTtcblxuICBfb25DbGlja1JhbmRvbVNwbGF0cyA9ICgpID0+IHtcbiAgICB0aGlzLl9hbmltYXRpb24uYWRkU3BsYXRzKCg1ICsgTWF0aC5yYW5kb20oKSAqIDIwKSB8IDApO1xuICB9O1xuXG4gIF9vblJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb25maWc6IHsgLi4uZGVmYXVsdENvbmZpZyB9IH0pO1xuICB9O1xuXG4gIF9yZXNldCgpIHtcbiAgICBpZiAodGhpcy5fYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9hbmltYXRpb24uYWRkUmFuZG9tU3BsYXRzKHJhbmRvbS5pbnQoMTAwLCAxODApKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwb2ludGVyLWV2ZW50czogbm9uZVxuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgIHBhZGRpbmc6IDFyZW0gMTByZW07XG4gIH1cbiAgZm9udC1mYW1pbHk6IENvdXJpZXIsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC8vIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5PcGFjaXR5O1xuICAgIC8vIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgLy8gYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAvLyBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQGtleWZyYW1lcyBmYWRlSW5PcGFjaXR5IHtcbi8vIFx0MCUge1xuLy8gXHRcdG9wYWNpdHk6IDA7XG4vLyAgIH1cbi8vICAgNjAlIHtcbi8vIFx0XHRvcGFjaXR5OiAwO1xuLy8gXHR9XG4vLyBcdDEwMCUge1xuLy8gXHRcdG9wYWNpdHk6IDE7XG4vLyBcdH1cbi8vIH1cbi8vIGA7XG5cbiJdfQ== */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/pages/index.js */"));
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
    // animation-name: fadeInOpacity;
    // animation-iteration-count: 1;
    // animation-timing-function: ease-in;
    // animation-duration: 5s;
    @media screen and (min-width: 1025px) {
      font-size: 6rem;
      padding: 0;
    }
  }
}

// @keyframes fadeInOpacity {
// 	0% {
// 		opacity: 0;
//   }
//   60% {
// 		opacity: 0;
// 	}
// 	100% {
// 		opacity: 1;
// 	}
// }
// `;

/***/ }),

/***/ 3:
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