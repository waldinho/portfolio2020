webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _jsxFileName = "/Users/jameswaller/2020-portfolio/components/Nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import React from "react";
// import { slide as Menu } from "react-burger-menu";
// export default props => {
//   return (
//     <>
//     <Menu right>
//       <a className="menu-item" href="/">
//         Home
//       </a>
//       <a className="menu-item" href="/about">
//         About
//       </a>
//       <a className="menu-item" href="/services">
//         Services
//       </a>
//       <a className="menu-item" href="/portfolio">
//         Portfolio
//       </a>
//       <a className="menu-item" href="/resume">
//         Resume
//       </a>
//     </Menu>
//     <style jsx global>{`
//         .bm-menu-wrap {
//           width: 100% !important;
//         }
//         @media screen and (min-width: 426px) {
//           .bm-menu-wrap {
//             width: 300px !important;
//           }
//         }
//         /* Individual item */
//         .bm-item {
//           display: inline-block;
//           /* Our sidebar item styling */
//           text-decoration: none;
//           margin-bottom: 10px;
//           color: #000;
//           transition: color 0.2s;
//         }
//         .bm-item:focus {
//           outline:0;
//         }
//         /* Change color on hover */
//         .bm-item:hover {
//           color: #31deff;
//         }
//         /* The rest copied directly from react-burger-menu docs */
//         /* Position and sizing of burger button */
//         .bm-burger-button {
//           position: fixed;
//           width: 36px;
//           height: 30px;
//           right: 36px;
//           top: 36px;
//         }
//         /* Color/shape of burger icon bars */
//         .bm-burger-bars {
//           background: #fff;
//         }
//         /* Position and sizing of clickable cross button */
//         .bm-cross-button {
//           height: 24px;
//           width: 24px;
//         }
//         /* Color/shape of close button cross */
//         .bm-cross {
//           background: #000;
//         }
//         /* General sidebar styles */
//         .bm-menu {
//           background: #fff;
//           padding: 2.5em 1.5em 0;
//           font-size: 1.15em;
//           padding: 2rem 2rem 1.5rem 2rem;
//         }
//         /* Morph shape necessary with bubble or elastic */
//         .bm-morph-shape {
//           fill: #373a47;
//         }
//         /* Wrapper for item list */
//         .bm-item-list {
//           color: #b8b7ad;
//           padding: 6rem 0 0 0
//         }
//         /* Styling of overlay */
//         .bm-overlay {
//           background: rgba(0, 0, 0, 0.3);
//         }
//       `}</style>
//     </>
//   );
// };


var fetcher = function fetcher(query) {
  return fetch('/api/nav', {
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

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_1__["default"])('{ nav { title, url } }', fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, "Failed to load");
  if (!data) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, "Loading...");
  var nav = data.nav;
  console.log('data: ', data);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }
  }, nav.map(function (item, i) {
    return __jsx("div", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }
    }, item.title);
  }));
}

/***/ })

})
//# sourceMappingURL=about.js.38808c1fcc6d42aa9a21.hot-update.js.map