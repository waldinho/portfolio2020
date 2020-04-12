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
  }, ".bm-menu-wrap{width:100% !important;}@media screen and (min-width:426px){.bm-menu-wrap{width:300px !important;}}.bm-item{display:inline-block;-webkit-text-decoration:none;text-decoration:none;margin-bottom:10px;color:#000;-webkit-transition:color 0.2s;transition:color 0.2s;}.bm-item:focus{outline:0;}.bm-item:hover{color:#31deff;}.bm-burger-button{position:fixed;width:36px;height:30px;right:36px;top:36px;}.bm-burger-bars{background:#fff;}.bm-cross-button{height:24px;width:24px;}.bm-cross{background:#000;}.bm-menu{background:#fff;padding:2.5em 1.5em 0;font-size:1.15em;padding:2rem 2rem 1.5rem 2rem;}.bm-morph-shape{fill:#373a47;}.bm-item-list{color:#b8b7ad;padding:6rem 0 0 0;}.bm-overlay{background:rgba(0,0,0,0.3);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1R3VCLEFBRzZCLEFBSUcsQUFLSixBQVVaLEFBS0ssQUFPQyxBQVNDLEFBS0osQUFNSSxBQUtBLEFBUUgsQUFLQyxBQU1nQixVQXZEaEMsRUEwQmEsQ0FtQmIsQ0F4Q0EsQUE4Q0QsQ0F2Q2MsQ0FTYixBQVdBLEFBS3dCLEtBN0NELENBWHZCLENBSUUsQUEwQ0YsR0FkYyxDQTJDZCxNQUxBLEtBckNhLEFBd0JNLFdBdkJSLE1Bd0JxQixHQXZCaEMsYUF2QnFCLGNBK0NyQixLQTlDYSxXQUNXLG9EQUN4QiIsImZpbGUiOiIvVXNlcnMvamFtZXN3YWxsZXIvMjAyMC1wb3J0Zm9saW8vcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgdXNlU3dyIGZyb20gJ3N3cidcbi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLy8gaW1wb3J0IExvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dvJ1xuLy8gaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdidcblxuLy8gY29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuLy8gICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTd3IoJy9hcGkvYWJvdXQnLCBmZXRjaGVyKVxuXG4vLyAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQgdXNlcnM8L2Rpdj5cbi8vICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPEhlYWQ+XG4vLyAgICAgICAgIDx0aXRsZT5KYW1lcyBXYWxsZXIgfCBEaWdpdGFsPC90aXRsZT5cbi8vICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuLy8gICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiLz5cbi8vICAgICAgIDwvSGVhZD5cbi8vICAgICAgIDxMb2dvIC8+XG4vLyAgICAgICA8TmF2IC8+XG4vLyAgICAgICB7ZGF0YS5tYXAoaXRlbSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdpdGVtOiAnLCBpdGVtKVxuLy8gICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgIDxDb250ZW50PlxuLy8gICAgICAgICAgICAgPGgxPntpdGVtLnRpdGxlfTwvaDE+XG4vLyAgICAgICAgICAgICB7aXRlbS5wYXJhZ3JhcGgubWFwKGkgPT4ge1xuLy8gICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaTogJywgaSlcbi8vICAgICAgICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICAgICAgICA8cD57aS50ZXh0fTwvcD4gIFxuLy8gICAgICAgICAgICAgICApXG4vLyAgICAgICAgICAgICB9KX1cbi8vICAgICAgICAgICA8L0NvbnRlbnQ+XG4vLyAgICAgICAgIClcbi8vICAgICAgIH1cbi8vICAgICAgICl9XG4vLyAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuLy8gICAgICAgICAgIGh0bWwsXG4vLyAgICAgICAgICAgYm9keSB7XG4vLyAgICAgICAgICAgcGFkZGluZzogMDtcbi8vICAgICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICAgICAgZm9udC1mYW1pbHk6IENvdXJpZXIsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuLy8gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4vLyAgICAgICAgICAgY29sb3I6ICNmZmY7XG4vLyAgICAgICAgICAgfVxuICBcbi8vICAgICAgICAgICAqIHtcbi8vICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgIGB9PC9zdHlsZT5cbi8vICAgICA8Lz5cbi8vICAgKVxuLy8gfVxuXG4vLyBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbi8vICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4vLyAgICAgcGFkZGluZzogMXJlbSAyMHJlbTtcbi8vICAgfVxuLy8gICBmb250LWZhbWlseTogQ291cmllciwgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4vLyAgIGgxIHtcbi8vICAgICBwYWRkaW5nOiA3cmVtIDAgMCAwO1xuLy8gICB9XG4vLyB9XG4vLyBgO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzbGlkZSBhcyBNZW51IH0gZnJvbSBcInJlYWN0LWJ1cmdlci1tZW51XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuY29uc3QgZmV0Y2hlciA9IHF1ZXJ5ID0+XG4gIGZldGNoKCcvYXBpL2Fib3V0Jywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5IH0pLFxuICB9KVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ganNvbi5kYXRhKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCd7IHRpdGxlIHsgdGl0bGUgfSwgbmF2IHsgdGl0bGUsIHVybCB9IH0nLCBmZXRjaGVyKVxuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQ8L2Rpdj5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG5cbiAgY29uc3QgeyBuYXYgfSA9IGRhdGFcblxuICBjb25zb2xlLmxvZygnZGF0YTogJywgZGF0YSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPE1lbnUgcmlnaHQ+XG4gICAgICB7bmF2Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICA8YSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBocmVmPXtpdGVtLnVybH0+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgKSl9XG4gICAgPC9NZW51PlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgLmJtLW1lbnUtd3JhcCB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkge1xuICAgICAgLmJtLW1lbnUtd3JhcCB7XG4gICAgICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAvKiBJbmRpdmlkdWFsIGl0ZW0gKi9cbiAgICAuYm0taXRlbSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgIC8qIE91ciBzaWRlYmFyIGl0ZW0gc3R5bGluZyAqL1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICB9XG5cbiAgICAuYm0taXRlbTpmb2N1cyB7XG4gICAgICBvdXRsaW5lOjA7XG4gICAgfVxuXG4gICAgLyogQ2hhbmdlIGNvbG9yIG9uIGhvdmVyICovXG4gICAgLmJtLWl0ZW06aG92ZXIge1xuICAgICAgY29sb3I6ICMzMWRlZmY7XG4gICAgfVxuXG4gICAgLyogVGhlIHJlc3QgY29waWVkIGRpcmVjdGx5IGZyb20gcmVhY3QtYnVyZ2VyLW1lbnUgZG9jcyAqL1xuXG4gICAgLyogUG9zaXRpb24gYW5kIHNpemluZyBvZiBidXJnZXIgYnV0dG9uICovXG4gICAgLmJtLWJ1cmdlci1idXR0b24ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICByaWdodDogMzZweDtcbiAgICAgIHRvcDogMzZweDtcbiAgICB9XG5cbiAgICAvKiBDb2xvci9zaGFwZSBvZiBidXJnZXIgaWNvbiBiYXJzICovXG4gICAgLmJtLWJ1cmdlci1iYXJzIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgfVxuXG4gICAgLyogUG9zaXRpb24gYW5kIHNpemluZyBvZiBjbGlja2FibGUgY3Jvc3MgYnV0dG9uICovXG4gICAgLmJtLWNyb3NzLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG5cbiAgICAvKiBDb2xvci9zaGFwZSBvZiBjbG9zZSBidXR0b24gY3Jvc3MgKi9cbiAgICAuYm0tY3Jvc3Mge1xuICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICB9XG5cbiAgICAvKiBHZW5lcmFsIHNpZGViYXIgc3R5bGVzICovXG4gICAgLmJtLW1lbnUge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDIuNWVtIDEuNWVtIDA7XG4gICAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSAxLjVyZW0gMnJlbTtcbiAgICB9XG5cbiAgICAvKiBNb3JwaCBzaGFwZSBuZWNlc3Nhcnkgd2l0aCBidWJibGUgb3IgZWxhc3RpYyAqL1xuICAgIC5ibS1tb3JwaC1zaGFwZSB7XG4gICAgICBmaWxsOiAjMzczYTQ3O1xuICAgIH1cblxuICAgIC8qIFdyYXBwZXIgZm9yIGl0ZW0gbGlzdCAqL1xuICAgIC5ibS1pdGVtLWxpc3Qge1xuICAgICAgY29sb3I6ICNiOGI3YWQ7XG4gICAgICBwYWRkaW5nOiA2cmVtIDAgMCAwXG4gICAgfVxuXG4gICAgLyogU3R5bGluZyBvZiBvdmVybGF5ICovXG4gICAgLmJtLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIH1cbiAgYH08L3N0eWxlPlxuICA8Lz5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/pages/about.js */"));
}

/***/ })

})
//# sourceMappingURL=about.js.80fc69599a74317379bd.hot-update.js.map