webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/Logo.js":
false,

/***/ "./components/Nav.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
false,

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
false,

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/shallowequal/index.js":
false,

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _jsxFileName = "/Users/jameswaller/2020-portfolio/pages/about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
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

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])('{ title { title }, nav { title, url } }', fetcher),
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__["slide"], {
    right: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, nav.map(function (item, i) {
    return __jsx("a", {
      href: item.url,
      className: "jsx-4267541730" + " " + "menu-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }, item.title);
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4267541730",
    __self: this
  }, ".bm-menu-wrap{width:100% !important;}@media screen and (min-width:426px){.bm-menu-wrap{width:300px !important;}}.bm-item{display:inline-block;-webkit-text-decoration:none;text-decoration:none;margin-bottom:10px;color:#000;-webkit-transition:color 0.2s;transition:color 0.2s;}.bm-item:focus{outline:0;}.bm-item:hover{color:#31deff;}.bm-burger-button{position:fixed;width:36px;height:30px;right:36px;top:36px;}.bm-burger-bars{background:#fff;}.bm-cross-button{height:24px;width:24px;}.bm-cross{background:#000;}.bm-menu{background:#fff;padding:2.5em 1.5em 0;font-size:1.15em;padding:2rem 2rem 1.5rem 2rem;}.bm-morph-shape{fill:#373a47;}.bm-item-list{color:#b8b7ad;padding:6rem 0 0 0;}.bm-overlay{background:rgba(0,0,0,0.3);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1R3VCLEFBRzZCLEFBSUcsQUFLSixBQVVaLEFBS0ssQUFPQyxBQVNDLEFBS0osQUFNSSxBQUtBLEFBUUgsQUFLQyxBQU1nQixVQXZEaEMsRUEwQmEsQ0FtQmIsQ0F4Q0EsQUE4Q0QsQ0F2Q2MsQ0FTYixBQVdBLEFBS3dCLEtBN0NELENBWHZCLENBSUUsQUEwQ0YsR0FkYyxDQTJDZCxNQUxBLEtBckNhLEFBd0JNLFdBdkJSLE1Bd0JxQixHQXZCaEMsYUF2QnFCLGNBK0NyQixLQTlDYSxXQUNXLG9EQUN4QiIsImZpbGUiOiIvVXNlcnMvamFtZXN3YWxsZXIvMjAyMC1wb3J0Zm9saW8vcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgdXNlU3dyIGZyb20gJ3N3cidcbi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLy8gaW1wb3J0IExvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dvJ1xuLy8gaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdidcblxuLy8gY29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuLy8gICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTd3IoJy9hcGkvYWJvdXQnLCBmZXRjaGVyKVxuXG4vLyAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQgdXNlcnM8L2Rpdj5cbi8vICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPEhlYWQ+XG4vLyAgICAgICAgIDx0aXRsZT5KYW1lcyBXYWxsZXIgfCBEaWdpdGFsPC90aXRsZT5cbi8vICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuLy8gICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiLz5cbi8vICAgICAgIDwvSGVhZD5cbi8vICAgICAgIDxMb2dvIC8+XG4vLyAgICAgICA8TmF2IC8+XG4vLyAgICAgICB7ZGF0YS5tYXAoaXRlbSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdpdGVtOiAnLCBpdGVtKVxuLy8gICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgIDxDb250ZW50PlxuLy8gICAgICAgICAgICAgPGgxPntpdGVtLnRpdGxlfTwvaDE+XG4vLyAgICAgICAgICAgICB7aXRlbS5wYXJhZ3JhcGgubWFwKGkgPT4ge1xuLy8gICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaTogJywgaSlcbi8vICAgICAgICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICAgICAgICA8cD57aS50ZXh0fTwvcD4gIFxuLy8gICAgICAgICAgICAgICApXG4vLyAgICAgICAgICAgICB9KX1cbi8vICAgICAgICAgICA8L0NvbnRlbnQ+XG4vLyAgICAgICAgIClcbi8vICAgICAgIH1cbi8vICAgICAgICl9XG4vLyAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuLy8gICAgICAgICAgIGh0bWwsXG4vLyAgICAgICAgICAgYm9keSB7XG4vLyAgICAgICAgICAgcGFkZGluZzogMDtcbi8vICAgICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICAgICAgZm9udC1mYW1pbHk6IENvdXJpZXIsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuLy8gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4vLyAgICAgICAgICAgY29sb3I6ICNmZmY7XG4vLyAgICAgICAgICAgfVxuICBcbi8vICAgICAgICAgICAqIHtcbi8vICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgIGB9PC9zdHlsZT5cbi8vICAgICA8Lz5cbi8vICAgKVxuLy8gfVxuXG4vLyBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbi8vICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4vLyAgICAgcGFkZGluZzogMXJlbSAyMHJlbTtcbi8vICAgfVxuLy8gICBmb250LWZhbWlseTogQ291cmllciwgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4vLyAgIGgxIHtcbi8vICAgICBwYWRkaW5nOiA3cmVtIDAgMCAwO1xuLy8gICB9XG4vLyB9XG4vLyBgO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzbGlkZSBhcyBNZW51IH0gZnJvbSBcInJlYWN0LWJ1cmdlci1tZW51XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuY29uc3QgZmV0Y2hlciA9IHF1ZXJ5ID0+XG4gIGZldGNoKCcvYXBpL25hdicsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeSB9KSxcbiAgfSlcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IGpzb24uZGF0YSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUigneyB0aXRsZSB7IHRpdGxlIH0sIG5hdiB7IHRpdGxlLCB1cmwgfSB9JywgZmV0Y2hlcilcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkPC9kaXY+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuXG4gIGNvbnN0IHsgbmF2IH0gPSBkYXRhXG5cbiAgY29uc29sZS5sb2coJ2RhdGE6ICcsIGRhdGEpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxNZW51IHJpZ2h0PlxuICAgICAge25hdi5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgaHJlZj17aXRlbS51cmx9PntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICkpfVxuICAgIDwvTWVudT5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgIC5ibS1tZW51LXdyYXAge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIHtcbiAgICAgIC5ibS1tZW51LXdyYXAge1xuICAgICAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogSW5kaXZpZHVhbCBpdGVtICovXG4gICAgLmJtLWl0ZW0ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAvKiBPdXIgc2lkZWJhciBpdGVtIHN0eWxpbmcgKi9cbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgfVxuXG4gICAgLmJtLWl0ZW06Zm9jdXMge1xuICAgICAgb3V0bGluZTowO1xuICAgIH1cblxuICAgIC8qIENoYW5nZSBjb2xvciBvbiBob3ZlciAqL1xuICAgIC5ibS1pdGVtOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMzFkZWZmO1xuICAgIH1cblxuICAgIC8qIFRoZSByZXN0IGNvcGllZCBkaXJlY3RseSBmcm9tIHJlYWN0LWJ1cmdlci1tZW51IGRvY3MgKi9cblxuICAgIC8qIFBvc2l0aW9uIGFuZCBzaXppbmcgb2YgYnVyZ2VyIGJ1dHRvbiAqL1xuICAgIC5ibS1idXJnZXItYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgcmlnaHQ6IDM2cHg7XG4gICAgICB0b3A6IDM2cHg7XG4gICAgfVxuXG4gICAgLyogQ29sb3Ivc2hhcGUgb2YgYnVyZ2VyIGljb24gYmFycyAqL1xuICAgIC5ibS1idXJnZXItYmFycyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cblxuICAgIC8qIFBvc2l0aW9uIGFuZCBzaXppbmcgb2YgY2xpY2thYmxlIGNyb3NzIGJ1dHRvbiAqL1xuICAgIC5ibS1jcm9zcy1idXR0b24ge1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuXG4gICAgLyogQ29sb3Ivc2hhcGUgb2YgY2xvc2UgYnV0dG9uIGNyb3NzICovXG4gICAgLmJtLWNyb3NzIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgfVxuXG4gICAgLyogR2VuZXJhbCBzaWRlYmFyIHN0eWxlcyAqL1xuICAgIC5ibS1tZW51IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBwYWRkaW5nOiAyLjVlbSAxLjVlbSAwO1xuICAgICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgICBwYWRkaW5nOiAycmVtIDJyZW0gMS41cmVtIDJyZW07XG4gICAgfVxuXG4gICAgLyogTW9ycGggc2hhcGUgbmVjZXNzYXJ5IHdpdGggYnViYmxlIG9yIGVsYXN0aWMgKi9cbiAgICAuYm0tbW9ycGgtc2hhcGUge1xuICAgICAgZmlsbDogIzM3M2E0NztcbiAgICB9XG5cbiAgICAvKiBXcmFwcGVyIGZvciBpdGVtIGxpc3QgKi9cbiAgICAuYm0taXRlbS1saXN0IHtcbiAgICAgIGNvbG9yOiAjYjhiN2FkO1xuICAgICAgcGFkZGluZzogNnJlbSAwIDAgMFxuICAgIH1cblxuICAgIC8qIFN0eWxpbmcgb2Ygb3ZlcmxheSAqL1xuICAgIC5ibS1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbiAgPC8+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/pages/about.js */"));
}

/***/ })

})
//# sourceMappingURL=about.js.94f62f21fa5a22e8ce15.hot-update.js.map