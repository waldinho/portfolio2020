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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jameswaller/2020-portfolio/pages/about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import useSWR from 'swr'
// import Head from 'next/head'
// import styled from 'styled-components';
// import Logo from '../components/Logo'
// import Nav from '../components/Nav'
// const fetcher = query =>
//   fetch('/api/about', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({ query }),
//   })
//     .then(res => res.json())
//     .then(json => json.data)
// export default function Index() {
//   const { data, error } = useSWR('{ about { title, text } }', fetcher)
//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>
//   const { about } = data
//   return (
//     <div>
//       <Head>
//         <title>James Waller | Digital</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Logo />
//       {about.map((item, i) => {
//         console.log('item: ', item)
//         return (
//           <Content>
//             <h1 key={item.title}>{item.title}</h1>
//             <p key={item.text}>{item.text}</p>
//           </Content>
//         )
//       }
//       )}}
//     </div>
//   )
// }
// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 1rem 10rem;
//   font-family: Courier, Helvetica Neue, sans-serif;
//   h1 {
//     padding: 5rem 0;
//   }
// }
// `;



var fetcher = function fetcher(url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};

function Index() {
  var _this = this;

  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_1__["default"])('/api/about', fetcher),
      data = _useSwr.data,
      error = _useSwr.error;

  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, "Failed to load users");
  if (!data) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, "Loading...");
  return __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, data.map(function (item) {
    console.log('item: ', item);
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }, item.text);
  }));
}

/***/ })

})
//# sourceMappingURL=about.js.8652d057544279d5f91f.hot-update.js.map