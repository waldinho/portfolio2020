webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_fluid_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-fluid-animation */ "./node_modules/react-fluid-animation/dist/index.js");
/* harmony import */ var react_fluid_animation__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_fluid_animation__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! random */ "./node_modules/random/index.js");
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(random__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");








var _jsxFileName = "/Users/jameswaller/2020-portfolio/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: left;\n  color: #fff;\n  pointer-events: none\n  padding: 1rem 2rem;\n  @media screen and (min-width: 1025px) {\n    padding: 1rem 10rem;\n  }\n  font-family: Courier, Helvetica Neue, sans-serif;\n  h1 {\n    font-size: 1.75rem;\n    padding: 0 2rem;\n    opacity: 1;\n    animation-name: fadeInOpacity;\n    animation-iteration-count: 1;\n    animation-timing-function: ease-in;\n    animation-duration: 4s;\n    @media screen and (min-width: 1025px) {\n      font-size: 6rem;\n      padding: 0;\n    }\n  }\n}\n\n@keyframes fadeInOpacity {\n\t0% {\n\t\topacity: 0;\n  }\n  50% {\n\t\topacity: 0;\n\t}\n\t100% {\n\t\topacity: 1;\n\t}\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005
};

var Home = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      config: _objectSpread({}, defaultConfig)
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "_animationRef", function (ref) {
      _this._animation = ref;

      _this._reset();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "_onUpdate", function (config) {
      _this.setState({
        config: config
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "_onClickRandomSplats", function () {
      _this._animation.addSplats(5 + Math.random() * 20 | 0);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "_onReset", function () {
      _this.setState({
        config: _objectSpread({}, defaultConfig)
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._reset();
    }
  }, {
    key: "render",
    value: function render() {
      var config = this.state.config;

      var greeting = function greeting() {
        var today = new Date();
        var curHr = today.getHours();

        if (curHr < 12) {
          return 'morning';
        } else if (curHr < 17) {
          return 'afternoon';
        } else {
          return 'evening';
        }
      };

      return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
      }), ">"), __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 7
        }
      }), __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
      }, __jsx(react_fluid_animation__WEBPACK_IMPORTED_MODULE_12___default.a, {
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
      }, "_Good_", greeting(), "."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2873349435",
        __self: this
      }, "html,body{padding:0;margin:0;font-family:Courier,Helvetica Neue,sans-serif;background-color:#000;color:#fff;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRXlCLEFBSXFCLEFBUVksVUFQYixTQUN1QyxHQU9sRCwyQ0FOd0Isc0JBQ1gsV0FDYiIsImZpbGUiOiIvVXNlcnMvamFtZXN3YWxsZXIvMjAyMC1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGbHVpZEFuaW1hdGlvbiBmcm9tIFwicmVhY3QtZmx1aWQtYW5pbWF0aW9uXCI7XG5pbXBvcnQgcmFuZG9tIGZyb20gXCJyYW5kb21cIjtcbmltcG9ydCBMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nbydcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnXG5cbmNvbnN0IGRlZmF1bHRDb25maWcgPSB7XG4gIHRleHR1cmVEb3duc2FtcGxlOiAxLFxuICBkZW5zaXR5RGlzc2lwYXRpb246IDAuOTgsXG4gIHZlbG9jaXR5RGlzc2lwYXRpb246IDAuOTksXG4gIHByZXNzdXJlRGlzc2lwYXRpb246IDAuOCxcbiAgcHJlc3N1cmVJdGVyYXRpb25zOiAyNSxcbiAgY3VybDogMzAsXG4gIHNwbGF0UmFkaXVzOiAwLjAwNVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGNvbmZpZzoge1xuICAgICAgLi4uZGVmYXVsdENvbmZpZ1xuICAgIH1cbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9yZXNldCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGdyZWV0aW5nID0gKCkgPT4ge1xuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgICBjb25zdCBjdXJIciA9IHRvZGF5LmdldEhvdXJzKClcbiAgICAgIGlmIChjdXJIciA8IDEyKSB7XG4gICAgICAgICAgcmV0dXJuICdtb3JuaW5nJyAgXG4gICAgICB9IGVsc2UgaWYgKGN1ckhyIDwgMTcpIHtcbiAgICAgICAgICByZXR1cm4gJ2FmdGVybm9vbicgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ2V2ZW5pbmcnXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5KYW1lcyBXYWxsZXIgfCBEaWdpdGFsPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiLz4+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TG9nbyAvPlxuICAgICAgPE5hdiAvPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxGbHVpZEFuaW1hdGlvbiBjb25maWc9e2NvbmZpZ30gYW5pbWF0aW9uUmVmPXt0aGlzLl9hbmltYXRpb25SZWZ9IC8+XG5cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgX0dvb2Rfe2dyZWV0aW5nKCl9LlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvQ29udGVudD5cbiAgICAgIDwvZGl2PlxuICBcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBDb3VyaWVyLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gIFxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9c1xuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuICBcbiAgX2FuaW1hdGlvblJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5fYW5pbWF0aW9uID0gcmVmO1xuICAgIHRoaXMuX3Jlc2V0KCk7XG4gIH07XG5cbiAgX29uVXBkYXRlID0gY29uZmlnID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29uZmlnIH0pO1xuICB9O1xuXG4gIF9vbkNsaWNrUmFuZG9tU3BsYXRzID0gKCkgPT4ge1xuICAgIHRoaXMuX2FuaW1hdGlvbi5hZGRTcGxhdHMoKDUgKyBNYXRoLnJhbmRvbSgpICogMjApIHwgMCk7XG4gIH07XG5cbiAgX29uUmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbmZpZzogeyAuLi5kZWZhdWx0Q29uZmlnIH0gfSk7XG4gIH07XG5cbiAgX3Jlc2V0KCkge1xuICAgIGlmICh0aGlzLl9hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX2FuaW1hdGlvbi5hZGRSYW5kb21TcGxhdHMocmFuZG9tLmludCgxMDAsIDE4MCkpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICAgcGFkZGluZzogMXJlbSAxMHJlbTtcbiAgfVxuICBmb250LWZhbWlseTogQ291cmllciwgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgcGFkZGluZzogMCAycmVtO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbk9wYWNpdHk7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbk9wYWNpdHkge1xuXHQwJSB7XG5cdFx0b3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cblx0MTAwJSB7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxufVxuYDtcblxuIl19 */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/pages/index.js */"));
    }
  }, {
    key: "_reset",
    value: function _reset() {
      if (this._animation) {
        this._animation.addRandomSplats(random__WEBPACK_IMPORTED_MODULE_13___default.a["int"](100, 180));
      }
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);


var Content = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject());

/***/ })

})
//# sourceMappingURL=index.js.799a0e6c03f5d2d3eca3.hot-update.js.map