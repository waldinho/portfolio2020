webpackHotUpdate("static/development/pages/about.js",{

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _jsxFileName = "/Users/jameswaller/2020-portfolio/pages/about.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import useSwr from 'swr'
// import Head from 'next/head'
// import styled from 'styled-components';
// import Logo from '../components/Logo'
// import Nav from '../components/Nav'
// const fetcher = url => fetch(url).then(res => res.json())
// export default function Index() {
//   const { data, error } = useSwr('/api/about', fetcher)
//   if (error) return <div>Failed to load users</div>
//   if (!data) return <div>Loading...</div>
//   return (
//     <>
//       <Head>
//         <title>James Waller | Digital</title>
//         <link rel="icon" href="/favicon.ico" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//       </Head>
//       <Logo />
//       <Nav />
//       {data.map(item => {
//         console.log('item: ', item)
//         return (
//           <Content>
//             <h1>{item.title}</h1>
//             {item.paragraph.map(i => {
//               console.log('i: ', i)
//               return (
//                 <p>{i.text}</p>  
//               )
//             })}
//           </Content>
//         )
//       }
//       )}
//       <style jsx global>{`
//           html,
//           body {
//           padding: 0;
//           margin: 0;
//           font-family: Courier, Helvetica Neue, sans-serif;
//           background-color: #000;
//           color: #fff;
//           }
//           * {
//           box-sizing: border-box;
//           }
//       `}</style>
//     </>
//   )
// }
// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 1rem 2rem;
//   @media screen and (min-width: 1025px) {
//     padding: 1rem 20rem;
//   }
//   font-family: Courier, Helvetica Neue, sans-serif;
//   h1 {
//     padding: 7rem 0 0 0;
//   }
// }
// `;




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
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])('{ title { title }, paragraph { id, text }, images { id } }', fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, "Failed to load");
  if (!data) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, "Loading...");
  var nav = data.nav;
  console.log('data: ', data);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__["slide"], {
    right: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }));
}

/***/ })

})
//# sourceMappingURL=about.js.fe61fd25791285e0eddd.hot-update.js.map