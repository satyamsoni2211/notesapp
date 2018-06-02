webpackHotUpdate(0,{364:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ 63);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _qs = __webpack_require__(/*! qs */ 165);\n\nvar _qs2 = _interopRequireDefault(_qs);\n\nvar _Note = __webpack_require__(/*! ../Note/Note */ 386);\n\nvar _Note2 = _interopRequireDefault(_Note);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 37);\n\nvar _Util = __webpack_require__(/*! ../Utils/Util */ 409);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Notes = function (_Component) {\n    _inherits(Notes, _Component);\n\n    function Notes() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, Notes);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notes.__proto__ || Object.getPrototypeOf(Notes)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            notes: [],\n            authToken: _this.props.token,\n            deleted: 0,\n            refreshed_notes: []\n        }, _this.deleteHandle = function (id) {\n            var notes = _this.state.notes;\n\n            var list = notes.filter(function (note) {\n                return note.id !== id;\n            });\n            _this.setState({ notes: list });\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(Notes, [{\n        key: 'shouldComponentUpdate',\n        value: function shouldComponentUpdate() {\n            return this.state.refreshed_notes !== this.state.notes ? true : false;\n        }\n    }, {\n        key: 'componentDidUpdate',\n        value: function componentDidUpdate() {\n\n            console.log('logging get request using authtoken JWT ' + window.sessionStorage.getItem('token'));\n\n            // if (this.state.notes !== this.state.refreshed_notes){\n            //     this.setState({notes: this.state.refreshed_notes});\n            // }\n\n            // if (this.state.authToken == undefined) {\n            //     this.props.history.push('/login');\n            // }\n        }\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            if (this.state.authToken && this.state.notes.length <= 0) {\n                (0, _axios2.default)({\n                    method: 'get',\n                    url: 'http://127.0.0.1:8000/api/list/',\n                    headers: { Authorization: 'JWT ' + this.state.authToken }\n                }).then(function (response) {\n                    console.log(response.data);\n                    _this2.setState({ refreshed_notes: [].concat(_toConsumableArray(response.data)) });\n                    _this2.state.notes ? _this2.setState({ notes: [].concat(_toConsumableArray(response.data)) }) : null;\n                }).catch(function (e) {\n                    console.log(e.response);\n                    console.log(_this2.props);\n                    (0, _Util.notify)(e.response.data.details, 'error');\n                    window.sessionStorage.removeItem('token');\n                    _this2.props.history.push('/login');\n                });\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            var notes = _react2.default.createElement(\n                'div',\n                null,\n                ' No content found '\n            );\n            if (this.state.notes.length >= 1) {\n                notes = this.state.notes.map(function (n, index) {\n                    return _react2.default.createElement(_Note2.default, {\n                        id: n.id,\n                        title: n.title,\n                        created: n.created,\n                        text: n.text,\n                        key: index,\n                        token: _this3.state.authToken,\n                        deleteHandler: _this3.deleteHandle\n                    });\n                });\n            }\n            return _react2.default.createElement(\n                'div',\n                { className: 'row' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'col-sm-12' },\n                    notes\n                )\n            );\n        }\n    }]);\n\n    return Notes;\n}(_react.Component);\n\n;\n\nexports.default = Notes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL05vdGVzL05vdGVzLmpzPzg0NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi4vTm90ZS9Ob3RlJztcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge25vdGlmeX0gZnJvbSAnLi4vVXRpbHMvVXRpbCc7XG5cbmNsYXNzIE5vdGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbm90ZXM6IFtdLFxuICAgICAgICBhdXRoVG9rZW46IHRoaXMucHJvcHMudG9rZW4sXG4gICAgICAgIGRlbGV0ZWQ6IDAsXG4gICAgICAgIHJlZnJlc2hlZF9ub3RlczogW11cbiAgICB9XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJlZnJlc2hlZF9ub3RlcyAhPT0gdGhpcy5zdGF0ZS5ub3RlcyA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBsb2dnaW5nIGdldCByZXF1ZXN0IHVzaW5nIGF1dGh0b2tlbiBKV1QgJHt3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gKTtcblxuICAgICAgICAvLyBpZiAodGhpcy5zdGF0ZS5ub3RlcyAhPT0gdGhpcy5zdGF0ZS5yZWZyZXNoZWRfbm90ZXMpe1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7bm90ZXM6IHRoaXMuc3RhdGUucmVmcmVzaGVkX25vdGVzfSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBpZiAodGhpcy5zdGF0ZS5hdXRoVG9rZW4gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xvZ2luJyk7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgZGVsZXRlSGFuZGxlID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHtub3Rlc30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBsaXN0ID0gbm90ZXMuZmlsdGVyKChub3RlKSA9PiBub3RlLmlkICE9PSBpZClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bm90ZXM6IGxpc3R9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmF1dGhUb2tlbiAmJiB0aGlzLnN0YXRlLm5vdGVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBheGlvcyh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xpc3QvJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBKV1QgJHt0aGlzLnN0YXRlLmF1dGhUb2tlbn1gIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZnJlc2hlZF9ub3RlczogWy4uLnJlc3BvbnNlLmRhdGFdIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5vdGVzID8gdGhpcy5zZXRTdGF0ZSh7IG5vdGVzOiBbLi4ucmVzcG9uc2UuZGF0YV0gfSk6IG51bGw7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5KGUucmVzcG9uc2UuZGF0YS5kZXRhaWxzLCdlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sb2dpbicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbm90ZXMgPSA8ZGl2PiBObyBjb250ZW50IGZvdW5kIDwvZGl2PjtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubm90ZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgIG5vdGVzID0gdGhpcy5zdGF0ZS5ub3Rlcy5tYXAoKG4sIGluZGV4KSA9PiA8Tm90ZVxuICAgICAgICAgICAgICAgIGlkPXtuLmlkfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtuLnRpdGxlfVxuICAgICAgICAgICAgICAgIGNyZWF0ZWQ9e24uY3JlYXRlZH1cbiAgICAgICAgICAgICAgICB0ZXh0PXtuLnRleHR9XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICB0b2tlbj17dGhpcy5zdGF0ZS5hdXRoVG9rZW59XG4gICAgICAgICAgICAgICAgZGVsZXRlSGFuZGxlcj17dGhpcy5kZWxldGVIYW5kbGV9XG4gICAgICAgICAgICAvPik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMTInPlxuICAgICAgICAgICAgICAgICAgICB7bm90ZXN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGVzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9Ob3Rlcy9Ob3Rlcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFxQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBbkJBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBOzs7O0FBbkVBO0FBQ0E7QUFtRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///364\n")}});