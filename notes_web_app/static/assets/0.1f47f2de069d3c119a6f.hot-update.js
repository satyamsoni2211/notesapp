webpackHotUpdate(0,{183:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./App.css */ 184);\n\nvar _Navbar = __webpack_require__(/*! ../../components/Navbar/Navbar */ 185);\n\nvar _Navbar2 = _interopRequireDefault(_Navbar);\n\nvar _Notes = __webpack_require__(/*! ../../components/Notes/Notes */ 364);\n\nvar _Notes2 = _interopRequireDefault(_Notes);\n\nvar _Login = __webpack_require__(/*! ../../components/Login/Login */ 388);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Aux = __webpack_require__(/*! ../../hoc/Aux */ 152);\n\nvar _Aux2 = _interopRequireDefault(_Aux);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 37);\n\nvar _CreateNote = __webpack_require__(/*! ../../components/CreateNote/CreateNote */ 390);\n\nvar _CreateNote2 = _interopRequireDefault(_CreateNote);\n\nvar _isAuthenticated = __webpack_require__(/*! ../../components/Utils/isAuthenticated */ 392);\n\nvar _isAuthenticated2 = _interopRequireDefault(_isAuthenticated);\n\nvar _AuthRoute = __webpack_require__(/*! ../../components/Routers/AuthRoute */ 393);\n\nvar _AuthRoute2 = _interopRequireDefault(_AuthRoute);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      authToken: null,\n      sessionSet: false\n      // tokenHandle= Token => {\n      //   console.log(`TOken Received ${Token}`);\n      //   console.log(`My toekn is ${window.sessionStorage.getItem('token')}`);\n      //   this.setState({authToken: Token});\n      //   this.props.history.push('/login');\n      // }\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(App, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      if (this.state.authToken === null && window.sessionStorage.getItem('token')) {\n        this.setState({ authToken: window.sessionStorage.getItem('token') });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _Aux2.default,\n        null,\n        _react2.default.createElement(_Navbar2.default, null),\n        _react2.default.createElement(ToastContainer, null),\n        _react2.default.createElement(\n          _reactRouterDom.Switch,\n          null,\n          _react2.default.createElement(_AuthRoute2.default, { path: '/', exact: true, component: _Notes2.default, token: window.sessionStorage.getItem('token') }),\n          _react2.default.createElement(_AuthRoute2.default, { path: '/view_notes', component: _Notes2.default, token: window.sessionStorage.getItem('token') }),\n          _react2.default.createElement(_AuthRoute2.default, { path: '/create_notes', component: _CreateNote2.default, token: this.state.authToken, logout: this.logoutHandle }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default, tokenHandler: this.tokenHandle })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n// <AuthRoute path='/' component={Notes} exact={true}/>\n// \n// <Route path='/' exact component={Notes}/>\n// { isAuthenticated() &&\n//   <Aux>\n//   <Route path='/' exact component={Notes}/>\n//   <Route path='/view_notes' exact component={Notes}/>\n//   <Route path='/create_notes' exact component={() => <CreateNote token={this.state.authToken} logout={this.logoutHandle}/>} />\n//   </Aux>}\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb250YWluZXJzL0FwcC9BcHAuanM/MDU1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL0FwcC5jc3MnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXInO1xuaW1wb3J0IE5vdGVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTm90ZXMvTm90ZXMnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9naW4vTG9naW4nO1xuaW1wb3J0IEF1eCBmcm9tICcuLi8uLi9ob2MvQXV4JztcbmltcG9ydCB7TGluaywgUm91dGUsIFN3aXRjaCwgUmVkaXJlY3R9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IENyZWF0ZU5vdGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DcmVhdGVOb3RlL0NyZWF0ZU5vdGUnO1xuaW1wb3J0IGlzQXV0aGVudGljYXRlZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1V0aWxzL2lzQXV0aGVudGljYXRlZCc7XG5pbXBvcnQgQXV0aFJvdXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUm91dGVycy9BdXRoUm91dGUnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBhdXRoVG9rZW46IG51bGwsXG4gICAgc2Vzc2lvblNldCA6IGZhbHNlXG4gIH1cbiAgLy8gdG9rZW5IYW5kbGU9IFRva2VuID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhgVE9rZW4gUmVjZWl2ZWQgJHtUb2tlbn1gKTtcbiAgLy8gICBjb25zb2xlLmxvZyhgTXkgdG9la24gaXMgJHt3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gKTtcbiAgLy8gICB0aGlzLnNldFN0YXRlKHthdXRoVG9rZW46IFRva2VufSk7XG4gIC8vICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sb2dpbicpO1xuICAvLyB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmKHRoaXMuc3RhdGUuYXV0aFRva2VuID09PSBudWxsICYmIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2F1dGhUb2tlbjogd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBdXg+XG4gICAgICAgIDxOYXZiYXIvPlxuICAgICAgICA8VG9hc3RDb250YWluZXIvPiAgICAgICAgXG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPEF1dGhSb3V0ZSBwYXRoPScvJyBleGFjdD17dHJ1ZX0gY29tcG9uZW50PXtOb3Rlc30gdG9rZW49e3dpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfS8+ICAgICAgICBcbiAgICAgICAgICA8QXV0aFJvdXRlIHBhdGg9Jy92aWV3X25vdGVzJyBjb21wb25lbnQ9e05vdGVzfSB0b2tlbj17d2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9Lz5cbiAgICAgICAgICA8QXV0aFJvdXRlIHBhdGg9Jy9jcmVhdGVfbm90ZXMnIGNvbXBvbmVudD17Q3JlYXRlTm90ZX0gdG9rZW49e3RoaXMuc3RhdGUuYXV0aFRva2VufSBsb2dvdXQ9e3RoaXMubG9nb3V0SGFuZGxlfS8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9sb2dpbicgY29tcG9uZW50PXtMb2dpbn0gdG9rZW5IYW5kbGVyPXt0aGlzLnRva2VuSGFuZGxlfS8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9BdXg+XG4gICAgKTtcbiAgfVxufVxuLy8gPEF1dGhSb3V0ZSBwYXRoPScvJyBjb21wb25lbnQ9e05vdGVzfSBleGFjdD17dHJ1ZX0vPlxuLy8gXG4vLyA8Um91dGUgcGF0aD0nLycgZXhhY3QgY29tcG9uZW50PXtOb3Rlc30vPlxuLy8geyBpc0F1dGhlbnRpY2F0ZWQoKSAmJlxuLy8gICA8QXV4PlxuLy8gICA8Um91dGUgcGF0aD0nLycgZXhhY3QgY29tcG9uZW50PXtOb3Rlc30vPlxuLy8gICA8Um91dGUgcGF0aD0nL3ZpZXdfbm90ZXMnIGV4YWN0IGNvbXBvbmVudD17Tm90ZXN9Lz5cbi8vICAgPFJvdXRlIHBhdGg9Jy9jcmVhdGVfbm90ZXMnIGV4YWN0IGNvbXBvbmVudD17KCkgPT4gPENyZWF0ZU5vdGUgdG9rZW49e3RoaXMuc3RhdGUuYXV0aFRva2VufSBsb2dvdXQ9e3RoaXMubG9nb3V0SGFuZGxlfS8+fSAvPlxuLy8gICA8L0F1eD59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29udGFpbmVycy9BcHAvQXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFXQTs7OztBQTlCQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///183\n")}});