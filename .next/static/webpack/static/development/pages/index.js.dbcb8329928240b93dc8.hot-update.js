webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dat_gui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dat-gui */ "./node_modules/react-dat-gui/dist/index.es.js");
/* harmony import */ var react_fluid_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-fluid-animation */ "./node_modules/react-fluid-animation/dist/index.js");
/* harmony import */ var react_fluid_animation__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_fluid_animation__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! random */ "./node_modules/random/index.js");
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(random__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");







var _jsxFileName = "/Users/jameswaller/2020-portfolio/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

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

var App = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(App, _Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      config: _objectSpread({}, defaultConfig)
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_animationRef", function (ref) {
      _this._animation = ref;

      _this._reset();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_onUpdate", function (config) {
      _this.setState({
        config: config
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_onClickRandomSplats", function () {
      _this._animation.addSplats(5 + Math.random() * 20 | 0);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_onReset", function () {
      _this.setState({
        config: _objectSpread({}, defaultConfig)
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._reset();
    }
  }, {
    key: "render",
    value: function render() {
      var config = this.state.config;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 7
        }
      }, __jsx("title", {
        className: "jsx-3770486659",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, "James Waller | Digital"), __jsx("link", {
        rel: "icon",
        href: "/favicon.ico",
        className: "jsx-3770486659",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      })), __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }
      }), __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 7
        }
      }), __jsx("div", {
        style: {
          height: "100vh"
        },
        className: "jsx-3770486659",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 7
        }
      }, __jsx(react_fluid_animation__WEBPACK_IMPORTED_MODULE_11___default.a, {
        config: config,
        animationRef: this._animationRef,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }), __jsx("div", {
        style: {
          position: "absolute",
          zIndex: 1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: "1em 10em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
          color: "#fff",
          pointerEvents: "none"
        },
        className: "jsx-3770486659",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, __jsx("h1", {
        style: {
          fontSize: "6em"
        },
        className: "jsx-3770486659",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }, "_Hello"))), __jsx("footer", {
        className: "jsx-3770486659",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 7
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3770486659",
        __self: this
      }, "html,body{padding:0;margin:0;font-family:Courier,Helvetica Neue,sans-serif;background-color:#000;color:#fff;}*{box-sizing:border-box;}.bm-item{display:inline-block;-webkit-text-decoration:none;text-decoration:none;margin-bottom:10px;color:#000;-webkit-transition:color 0.2s;transition:color 0.2s;}.bm-item:focus{outline:0;color:#4663ff;}.bm-item:hover{color:#31deff;}.bm-burger-button{position:fixed;width:36px;height:30px;right:36px;top:36px;}.bm-burger-bars{background:#fff;}.bm-cross-button{height:24px;width:24px;}.bm-cross{background:#000;}.bm-menu{background:#fff;padding:2.5em 1.5em 0;font-size:1.15em;padding:2rem 2rem 1.5rem 2rem;}.bm-morph-shape{fill:#373a47;}.bm-item-list{color:#b8b7ad;padding:6rem 0 0 0;}.bm-overlay{background:rgba(0,0,0,0.3);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lc3dhbGxlci8yMDIwLXBvcnRmb2xpby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RXlCLEFBSXFCLEFBUVksQUFLRCxBQVVaLEFBTUssQUFPQyxBQVNDLEFBS0osQUFNSSxBQUtBLEFBUUgsQUFLQyxBQU1nQixVQS9FckIsQUF1QkssRUEyQkgsQ0FtQmIsQ0F4Q0EsQUE4Q0QsQ0F2Q2MsQ0FTYixBQVdBLEFBS3dCLEdBNUQwQixFQWMzQixDQVB2QixDQTJDQSxDQTNCQSxFQWFjLENBMkNkLE1BTEEsS0FyQ2EsQUF3Qk0sV0F2QlIsTUF3QnFCLEdBdkJoQyxPQXRDd0IsTUFjSCxjQWdEckIsRUE3RGEsR0FjQSxRQWJiLEdBY3dCLG9EQUN4QiIsImZpbGUiOiIvVXNlcnMvamFtZXN3YWxsZXIvMjAyMC1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGF0R3VpLCB7IERhdE51bWJlciwgRGF0U2VsZWN0LCBEYXRCdXR0b24gfSBmcm9tIFwicmVhY3QtZGF0LWd1aVwiO1xuaW1wb3J0IEZsdWlkQW5pbWF0aW9uIGZyb20gXCJyZWFjdC1mbHVpZC1hbmltYXRpb25cIjtcbmltcG9ydCByYW5kb20gZnJvbSBcInJhbmRvbVwiO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dvJ1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdidcblxuY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgdGV4dHVyZURvd25zYW1wbGU6IDEsXG4gIGRlbnNpdHlEaXNzaXBhdGlvbjogMC45OCxcbiAgdmVsb2NpdHlEaXNzaXBhdGlvbjogMC45OSxcbiAgcHJlc3N1cmVEaXNzaXBhdGlvbjogMC44LFxuICBwcmVzc3VyZUl0ZXJhdGlvbnM6IDI1LFxuICBjdXJsOiAzMCxcbiAgc3BsYXRSYWRpdXM6IDAuMDA1XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBjb25maWc6IHtcbiAgICAgIC4uLmRlZmF1bHRDb25maWdcbiAgICB9XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fcmVzZXQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5zdGF0ZTtcbiBcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SmFtZXMgV2FsbGVyIHwgRGlnaXRhbDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMb2dvIC8+XG4gICAgICA8TmF2IC8+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCJcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEZsdWlkQW5pbWF0aW9uIGNvbmZpZz17Y29uZmlnfSBhbmltYXRpb25SZWY9e3RoaXMuX2FuaW1hdGlvblJlZn0gLz5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjFlbSAxMGVtXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwibGVmdFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGgxXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogXCI2ZW1cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgX0hlbGxvXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+XG4gICAgICBcbiAgICAgIDwvZm9vdGVyPlxuICBcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBDb3VyaWVyLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gIFxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogSW5kaXZpZHVhbCBpdGVtICovXG4gICAgICAgIC5ibS1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgICAgICAvKiBPdXIgc2lkZWJhciBpdGVtIHN0eWxpbmcgKi9cbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJtLWl0ZW06Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6MDtcbiAgICAgICAgICBjb2xvcjogIzQ2NjNmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIENoYW5nZSBjb2xvciBvbiBob3ZlciAqL1xuICAgICAgICAuYm0taXRlbTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICMzMWRlZmY7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBUaGUgcmVzdCBjb3BpZWQgZGlyZWN0bHkgZnJvbSByZWFjdC1idXJnZXItbWVudSBkb2NzICovXG5cbiAgICAgICAgLyogUG9zaXRpb24gYW5kIHNpemluZyBvZiBidXJnZXIgYnV0dG9uICovXG4gICAgICAgIC5ibS1idXJnZXItYnV0dG9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHJpZ2h0OiAzNnB4O1xuICAgICAgICAgIHRvcDogMzZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIENvbG9yL3NoYXBlIG9mIGJ1cmdlciBpY29uIGJhcnMgKi9cbiAgICAgICAgLmJtLWJ1cmdlci1iYXJzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogUG9zaXRpb24gYW5kIHNpemluZyBvZiBjbGlja2FibGUgY3Jvc3MgYnV0dG9uICovXG4gICAgICAgIC5ibS1jcm9zcy1idXR0b24ge1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIENvbG9yL3NoYXBlIG9mIGNsb3NlIGJ1dHRvbiBjcm9zcyAqL1xuICAgICAgICAuYm0tY3Jvc3Mge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBHZW5lcmFsIHNpZGViYXIgc3R5bGVzICovXG4gICAgICAgIC5ibS1tZW51IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDIuNWVtIDEuNWVtIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgICAgICAgcGFkZGluZzogMnJlbSAycmVtIDEuNXJlbSAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogTW9ycGggc2hhcGUgbmVjZXNzYXJ5IHdpdGggYnViYmxlIG9yIGVsYXN0aWMgKi9cbiAgICAgICAgLmJtLW1vcnBoLXNoYXBlIHtcbiAgICAgICAgICBmaWxsOiAjMzczYTQ3O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogV3JhcHBlciBmb3IgaXRlbSBsaXN0ICovXG4gICAgICAgIC5ibS1pdGVtLWxpc3Qge1xuICAgICAgICAgIGNvbG9yOiAjYjhiN2FkO1xuICAgICAgICAgIHBhZGRpbmc6IDZyZW0gMCAwIDBcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFN0eWxpbmcgb2Ygb3ZlcmxheSAqL1xuICAgICAgICAuYm0tb3ZlcmxheSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgXG4gIF9hbmltYXRpb25SZWYgPSByZWYgPT4ge1xuICAgIHRoaXMuX2FuaW1hdGlvbiA9IHJlZjtcbiAgICB0aGlzLl9yZXNldCgpO1xuICB9O1xuXG4gIF9vblVwZGF0ZSA9IGNvbmZpZyA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbmZpZyB9KTtcbiAgfTtcblxuICBfb25DbGlja1JhbmRvbVNwbGF0cyA9ICgpID0+IHtcbiAgICB0aGlzLl9hbmltYXRpb24uYWRkU3BsYXRzKCg1ICsgTWF0aC5yYW5kb20oKSAqIDIwKSB8IDApO1xuICB9O1xuXG4gIF9vblJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb25maWc6IHsgLi4uZGVmYXVsdENvbmZpZyB9IH0pO1xuICB9O1xuXG4gIF9yZXNldCgpIHtcbiAgICBpZiAodGhpcy5fYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9hbmltYXRpb24uYWRkUmFuZG9tU3BsYXRzKHJhbmRvbS5pbnQoMTAwLCAxODApKTtcbiAgICB9XG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/jameswaller/2020-portfolio/pages/index.js */"));
    }
  }, {
    key: "_reset",
    value: function _reset() {
      if (this._animation) {
        this._animation.addRandomSplats(random__WEBPACK_IMPORTED_MODULE_12___default.a["int"](100, 180));
      }
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.dbcb8329928240b93dc8.hot-update.js.map