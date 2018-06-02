webpackHotUpdate(0,{364:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ 63);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _qs = __webpack_require__(/*! qs */ 165);\n\nvar _qs2 = _interopRequireDefault(_qs);\n\nvar _Note = __webpack_require__(/*! ../Note/Note */ 386);\n\nvar _Note2 = _interopRequireDefault(_Note);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 37);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Notes = function (_Component) {\n    _inherits(Notes, _Component);\n\n    function Notes() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, Notes);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notes.__proto__ || Object.getPrototypeOf(Notes)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            notes: [],\n            authToken: _this.props.token,\n            deleted: false,\n            refreshed_notes: []\n        }, _this.deleteHandle = function () {\n            _this.setState({ deleted: true });\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(Notes, [{\n        key: 'shouldComponentUpdate',\n        value: function shouldComponentUpdate() {\n            return this.state.refreshed_notes !== this.state.notes ? true : false;\n        }\n    }, {\n        key: 'componentDidUpdate',\n        value: function componentDidUpdate() {\n\n            console.log('logging get request using authtoken JWT ' + window.sessionStorage.getItem('token'));\n\n            // if (this.state.notes !== this.state.refreshed_notes){\n            //     this.setState({notes: this.state.refreshed_notes});\n            // }\n\n            // if (this.state.authToken == undefined) {\n            //     this.props.history.push('/login');\n            // }\n        }\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            if (this.state.authToken && this.state.notes.length <= 0) {\n                (0, _axios2.default)({\n                    method: 'get',\n                    url: 'http://127.0.0.1:8000/api/list/',\n                    headers: { Authorization: 'JWT ' + this.state.authToken }\n                }).then(function (response) {\n                    console.log(response.data);\n                    _this2.setState({ refreshed_notes: [].concat(_toConsumableArray(response.data)) });\n                    _this2.state.notes ? _this2.setState({ notes: [].concat(_toConsumableArray(response.data)) }) : null;\n                }).catch(function (e) {\n                    console.log(e);\n                    console.log(_this2.props);\n                    _this2.props.history.push('/login');\n                });\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            var notes = _react2.default.createElement(\n                'div',\n                null,\n                ' No content found '\n            );\n            if (this.state.notes.length >= 1) {\n                notes = this.state.notes.map(function (n, index) {\n                    return _react2.default.createElement(_Note2.default, {\n                        id: n.id,\n                        title: n.title,\n                        created: n.created,\n                        text: n.text,\n                        key: index,\n                        token: _this3.state.authToken,\n                        deleteHandler: _this3.deleteHandle\n                    });\n                });\n            }\n            return _react2.default.createElement(\n                'div',\n                { className: 'row' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'col-sm-12' },\n                    notes\n                )\n            );\n        }\n    }]);\n\n    return Notes;\n}(_react.Component);\n\n;\n\nexports.default = Notes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL05vdGVzL05vdGVzLmpzPzg0NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi4vTm90ZS9Ob3RlJztcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNsYXNzIE5vdGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbm90ZXM6IFtdLFxuICAgICAgICBhdXRoVG9rZW46IHRoaXMucHJvcHMudG9rZW4sXG4gICAgICAgIGRlbGV0ZWQ6IGZhbHNlLFxuICAgICAgICByZWZyZXNoZWRfbm90ZXM6IFtdXG4gICAgfVxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yZWZyZXNoZWRfbm90ZXMgIT09IHRoaXMuc3RhdGUubm90ZXMgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhgbG9nZ2luZyBnZXQgcmVxdWVzdCB1c2luZyBhdXRodG9rZW4gSldUICR7d2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCk7XG5cbiAgICAgICAgLy8gaWYgKHRoaXMuc3RhdGUubm90ZXMgIT09IHRoaXMuc3RhdGUucmVmcmVzaGVkX25vdGVzKXtcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe25vdGVzOiB0aGlzLnN0YXRlLnJlZnJlc2hlZF9ub3Rlc30pO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gaWYgKHRoaXMuc3RhdGUuYXV0aFRva2VuID09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sb2dpbicpO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIGRlbGV0ZUhhbmRsZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGVsZXRlZDogdHJ1ZX0pO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXV0aFRva2VuICYmIHRoaXMuc3RhdGUubm90ZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbGlzdC8nLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEpXVCAke3RoaXMuc3RhdGUuYXV0aFRva2VufWAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVmcmVzaGVkX25vdGVzOiBbLi4ucmVzcG9uc2UuZGF0YV0gfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubm90ZXMgPyB0aGlzLnNldFN0YXRlKHsgbm90ZXM6IFsuLi5yZXNwb25zZS5kYXRhXSB9KTogbnVsbDtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xvZ2luJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBub3RlcyA9IDxkaXY+IE5vIGNvbnRlbnQgZm91bmQgPC9kaXY+O1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5ub3Rlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgbm90ZXMgPSB0aGlzLnN0YXRlLm5vdGVzLm1hcCgobiwgaW5kZXgpID0+IDxOb3RlXG4gICAgICAgICAgICAgICAgaWQ9e24uaWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e24udGl0bGV9XG4gICAgICAgICAgICAgICAgY3JlYXRlZD17bi5jcmVhdGVkfVxuICAgICAgICAgICAgICAgIHRleHQ9e24udGV4dH1cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIHRva2VuPXt0aGlzLnN0YXRlLmF1dGhUb2tlbn1cbiAgICAgICAgICAgICAgICBkZWxldGVIYW5kbGVyPXt0aGlzLmRlbGV0ZUhhbmRsZX1cbiAgICAgICAgICAgIC8+KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMic+XG4gICAgICAgICAgICAgICAgICAgIHtub3Rlc31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90ZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL05vdGVzL05vdGVzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBc0JBO0FBQ0E7Ozs7O0FBakJBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7Ozs7QUEvREE7QUFDQTtBQStEQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///364\n")}});