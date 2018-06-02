webpackHotUpdate(0,{183:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./App.css */ 184);\n\nvar _Navbar = __webpack_require__(/*! ../../components/Navbar/Navbar */ 185);\n\nvar _Navbar2 = _interopRequireDefault(_Navbar);\n\nvar _Notes = __webpack_require__(/*! ../../components/Notes/Notes */ 364);\n\nvar _Notes2 = _interopRequireDefault(_Notes);\n\nvar _Login = __webpack_require__(/*! ../../components/Login/Login */ 388);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Aux = __webpack_require__(/*! ../../hoc/Aux */ 152);\n\nvar _Aux2 = _interopRequireDefault(_Aux);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 37);\n\nvar _CreateNote = __webpack_require__(/*! ../../components/CreateNote/CreateNote */ 390);\n\nvar _CreateNote2 = _interopRequireDefault(_CreateNote);\n\nvar _isAuthenticated = __webpack_require__(/*! ../../components/Utils/isAuthenticated */ 392);\n\nvar _isAuthenticated2 = _interopRequireDefault(_isAuthenticated);\n\nvar _AuthRoute = __webpack_require__(/*! ../../components/Routers/AuthRoute */ 393);\n\nvar _AuthRoute2 = _interopRequireDefault(_AuthRoute);\n\nvar _reactToastify = __webpack_require__(/*! react-toastify */ 400);\n\n__webpack_require__(/*! react-toastify/dist/ReactToastify.css */ 408);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      authToken: null,\n      sessionSet: false\n      // tokenHandle= Token => {\n      //   console.log(`TOken Received ${Token}`);\n      //   console.log(`My toekn is ${window.sessionStorage.getItem('token')}`);\n      //   this.setState({authToken: Token});\n      //   this.props.history.push('/login');\n      // }\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(App, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      if (this.state.authToken === null && window.sessionStorage.getItem('token')) {\n        this.setState({ authToken: window.sessionStorage.getItem('token') });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _Aux2.default,\n        null,\n        _react2.default.createElement(_Navbar2.default, null),\n        _react2.default.createElement(_reactToastify.ToastContainer, null),\n        _react2.default.createElement(\n          _reactRouterDom.Switch,\n          null,\n          _react2.default.createElement(_AuthRoute2.default, { path: '/', exact: true, component: _Notes2.default, token: window.sessionStorage.getItem('token') }),\n          _react2.default.createElement(_AuthRoute2.default, { path: '/view_notes', component: _Notes2.default, token: window.sessionStorage.getItem('token') }),\n          _react2.default.createElement(_AuthRoute2.default, { path: '/create_notes', component: _CreateNote2.default, token: this.state.authToken, logout: this.logoutHandle }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default, tokenHandler: this.tokenHandle })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n// <AuthRoute path='/' component={Notes} exact={true}/>\n// \n// <Route path='/' exact component={Notes}/>\n// { isAuthenticated() &&\n//   <Aux>\n//   <Route path='/' exact component={Notes}/>\n//   <Route path='/view_notes' exact component={Notes}/>\n//   <Route path='/create_notes' exact component={() => <CreateNote token={this.state.authToken} logout={this.logoutHandle}/>} />\n//   </Aux>}\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb250YWluZXJzL0FwcC9BcHAuanM/MDU1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL0FwcC5jc3MnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXInO1xuaW1wb3J0IE5vdGVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTm90ZXMvTm90ZXMnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9naW4vTG9naW4nO1xuaW1wb3J0IEF1eCBmcm9tICcuLi8uLi9ob2MvQXV4JztcbmltcG9ydCB7TGluaywgUm91dGUsIFN3aXRjaCwgUmVkaXJlY3R9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IENyZWF0ZU5vdGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DcmVhdGVOb3RlL0NyZWF0ZU5vdGUnO1xuaW1wb3J0IGlzQXV0aGVudGljYXRlZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1V0aWxzL2lzQXV0aGVudGljYXRlZCc7XG5pbXBvcnQgQXV0aFJvdXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUm91dGVycy9BdXRoUm91dGUnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgYXV0aFRva2VuOiBudWxsLFxuICAgIHNlc3Npb25TZXQgOiBmYWxzZVxuICB9XG4gIC8vIHRva2VuSGFuZGxlPSBUb2tlbiA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coYFRPa2VuIFJlY2VpdmVkICR7VG9rZW59YCk7XG4gIC8vICAgY29uc29sZS5sb2coYE15IHRvZWtuIGlzICR7d2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCk7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7YXV0aFRva2VuOiBUb2tlbn0pO1xuICAvLyAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbG9naW4nKTtcbiAgLy8gfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZih0aGlzLnN0YXRlLmF1dGhUb2tlbiA9PT0gbnVsbCAmJiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHthdXRoVG9rZW46IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QXV4PlxuICAgICAgICA8TmF2YmFyLz5cbiAgICAgICAgPFRvYXN0Q29udGFpbmVyLz4gICAgICAgIFxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxBdXRoUm91dGUgcGF0aD0nLycgZXhhY3Q9e3RydWV9IGNvbXBvbmVudD17Tm90ZXN9IHRva2VuPXt3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX0vPiAgICAgICAgXG4gICAgICAgICAgPEF1dGhSb3V0ZSBwYXRoPScvdmlld19ub3RlcycgY29tcG9uZW50PXtOb3Rlc30gdG9rZW49e3dpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfS8+XG4gICAgICAgICAgPEF1dGhSb3V0ZSBwYXRoPScvY3JlYXRlX25vdGVzJyBjb21wb25lbnQ9e0NyZWF0ZU5vdGV9IHRva2VuPXt0aGlzLnN0YXRlLmF1dGhUb2tlbn0gbG9nb3V0PXt0aGlzLmxvZ291dEhhbmRsZX0vPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvbG9naW4nIGNvbXBvbmVudD17TG9naW59IHRva2VuSGFuZGxlcj17dGhpcy50b2tlbkhhbmRsZX0vPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvQXV4PlxuICAgICk7XG4gIH1cbn1cbi8vIDxBdXRoUm91dGUgcGF0aD0nLycgY29tcG9uZW50PXtOb3Rlc30gZXhhY3Q9e3RydWV9Lz5cbi8vIFxuLy8gPFJvdXRlIHBhdGg9Jy8nIGV4YWN0IGNvbXBvbmVudD17Tm90ZXN9Lz5cbi8vIHsgaXNBdXRoZW50aWNhdGVkKCkgJiZcbi8vICAgPEF1eD5cbi8vICAgPFJvdXRlIHBhdGg9Jy8nIGV4YWN0IGNvbXBvbmVudD17Tm90ZXN9Lz5cbi8vICAgPFJvdXRlIHBhdGg9Jy92aWV3X25vdGVzJyBleGFjdCBjb21wb25lbnQ9e05vdGVzfS8+XG4vLyAgIDxSb3V0ZSBwYXRoPScvY3JlYXRlX25vdGVzJyBleGFjdCBjb21wb25lbnQ9eygpID0+IDxDcmVhdGVOb3RlIHRva2VuPXt0aGlzLnN0YXRlLmF1dGhUb2tlbn0gbG9nb3V0PXt0aGlzLmxvZ291dEhhbmRsZX0vPn0gLz5cbi8vICAgPC9BdXg+fVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbnRhaW5lcnMvQXBwL0FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFXQTs7OztBQTlCQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///183\n")}});