webpackHotUpdate(0,{364:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ 63);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _qs = __webpack_require__(/*! qs */ 165);\n\nvar _qs2 = _interopRequireDefault(_qs);\n\nvar _Note = __webpack_require__(/*! ../Note/Note */ 386);\n\nvar _Note2 = _interopRequireDefault(_Note);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 37);\n\nvar _reactToastify = __webpack_require__(/*! react-toastify */ 400);\n\n__webpack_require__(/*! react-toastify/dist/ReactToastify.css */ 408);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Notes = function (_Component) {\n    _inherits(Notes, _Component);\n\n    function Notes() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, Notes);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notes.__proto__ || Object.getPrototypeOf(Notes)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            notes: [],\n            authToken: _this.props.token,\n            deleted: 0,\n            refreshed_notes: []\n        }, _this.notify = function () {\n            return (0, _reactToastify.toast)(\"Logging you out !\");\n        }, _this.deleteHandle = function (id) {\n            var notes = _this.state.notes;\n\n            var list = notes.filter(function (note) {\n                return note.id !== id;\n            });\n            _this.setState({ notes: list });\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(Notes, [{\n        key: 'shouldComponentUpdate',\n        value: function shouldComponentUpdate() {\n            return this.state.refreshed_notes !== this.state.notes ? true : false;\n        }\n    }, {\n        key: 'componentDidUpdate',\n        value: function componentDidUpdate() {\n\n            console.log('logging get request using authtoken JWT ' + window.sessionStorage.getItem('token'));\n\n            // if (this.state.notes !== this.state.refreshed_notes){\n            //     this.setState({notes: this.state.refreshed_notes});\n            // }\n\n            // if (this.state.authToken == undefined) {\n            //     this.props.history.push('/login');\n            // }\n        }\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            if (this.state.authToken && this.state.notes.length <= 0) {\n                (0, _axios2.default)({\n                    method: 'get',\n                    url: 'http://127.0.0.1:8000/api/list/',\n                    headers: { Authorization: 'JWT ' + this.state.authToken }\n                }).then(function (response) {\n                    console.log(response.data);\n                    _this2.setState({ refreshed_notes: [].concat(_toConsumableArray(response.data)) });\n                    _this2.state.notes ? _this2.setState({ notes: [].concat(_toConsumableArray(response.data)) }) : null;\n                }).catch(function (e) {\n                    console.log(e);\n                    console.log(_this2.props);\n                    _this2.notify();\n                    window.sessionStorage.removeItem('token');\n                    _this2.props.history.push('/login');\n                });\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            var notes = _react2.default.createElement(\n                'div',\n                null,\n                ' No content found '\n            );\n            if (this.state.notes.length >= 1) {\n                notes = this.state.notes.map(function (n, index) {\n                    return _react2.default.createElement(_Note2.default, {\n                        id: n.id,\n                        title: n.title,\n                        created: n.created,\n                        text: n.text,\n                        key: index,\n                        token: _this3.state.authToken,\n                        deleteHandler: _this3.deleteHandle\n                    });\n                });\n            }\n            return _react2.default.createElement(\n                'div',\n                { className: 'row' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'col-sm-12' },\n                    notes,\n                    _react2.default.createElement(_reactToastify.ToastContainer, null)\n                )\n            );\n        }\n    }]);\n\n    return Notes;\n}(_react.Component);\n\n;\n\nexports.default = Notes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL05vdGVzL05vdGVzLmpzPzg0NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi4vTm90ZS9Ob3RlJztcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuXG5jbGFzcyBOb3RlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5vdGVzOiBbXSxcbiAgICAgICAgYXV0aFRva2VuOiB0aGlzLnByb3BzLnRva2VuLFxuICAgICAgICBkZWxldGVkOiAwLFxuICAgICAgICByZWZyZXNoZWRfbm90ZXM6IFtdXG4gICAgfVxuICAgIG5vdGlmeSA9ICgpID0+IHRvYXN0KFwiTG9nZ2luZyB5b3Ugb3V0ICFcIik7XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJlZnJlc2hlZF9ub3RlcyAhPT0gdGhpcy5zdGF0ZS5ub3RlcyA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBsb2dnaW5nIGdldCByZXF1ZXN0IHVzaW5nIGF1dGh0b2tlbiBKV1QgJHt3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gKTtcblxuICAgICAgICAvLyBpZiAodGhpcy5zdGF0ZS5ub3RlcyAhPT0gdGhpcy5zdGF0ZS5yZWZyZXNoZWRfbm90ZXMpe1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7bm90ZXM6IHRoaXMuc3RhdGUucmVmcmVzaGVkX25vdGVzfSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBpZiAodGhpcy5zdGF0ZS5hdXRoVG9rZW4gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xvZ2luJyk7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgZGVsZXRlSGFuZGxlID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHtub3Rlc30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBsaXN0ID0gbm90ZXMuZmlsdGVyKChub3RlKSA9PiBub3RlLmlkICE9PSBpZClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bm90ZXM6IGxpc3R9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmF1dGhUb2tlbiAmJiB0aGlzLnN0YXRlLm5vdGVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBheGlvcyh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xpc3QvJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBKV1QgJHt0aGlzLnN0YXRlLmF1dGhUb2tlbn1gIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZnJlc2hlZF9ub3RlczogWy4uLnJlc3BvbnNlLmRhdGFdIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5vdGVzID8gdGhpcy5zZXRTdGF0ZSh7IG5vdGVzOiBbLi4ucmVzcG9uc2UuZGF0YV0gfSk6IG51bGw7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkoKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbG9naW4nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5vdGVzID0gPGRpdj4gTm8gY29udGVudCBmb3VuZCA8L2Rpdj47XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm5vdGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICBub3RlcyA9IHRoaXMuc3RhdGUubm90ZXMubWFwKChuLCBpbmRleCkgPT4gPE5vdGVcbiAgICAgICAgICAgICAgICBpZD17bi5pZH1cbiAgICAgICAgICAgICAgICB0aXRsZT17bi50aXRsZX1cbiAgICAgICAgICAgICAgICBjcmVhdGVkPXtuLmNyZWF0ZWR9XG4gICAgICAgICAgICAgICAgdGV4dD17bi50ZXh0fVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgdG9rZW49e3RoaXMuc3RhdGUuYXV0aFRva2VufVxuICAgICAgICAgICAgICAgIGRlbGV0ZUhhbmRsZXI9e3RoaXMuZGVsZXRlSGFuZGxlfVxuICAgICAgICAgICAgLz4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTEyJz5cbiAgICAgICAgICAgICAgICAgICAge25vdGVzfVxuICAgICAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvTm90ZXMvTm90ZXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFnQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBbkJBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7Ozs7QUFyRUE7QUFDQTtBQXFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///364\n")}});