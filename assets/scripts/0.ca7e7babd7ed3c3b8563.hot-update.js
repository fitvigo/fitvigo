webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	
		var anchors = ['intro', 'exchange', 'create', 'investments', 'account', 'trade', 'footer'];
	
		(0, _jquery2.default)('#fullpage').fullpage({
			scrollbar: false,
			navigation: true,
			navigationPosition: 'right',
			anchors: anchors
		});
	});

/***/ }
])
//# sourceMappingURL=0.ca7e7babd7ed3c3b8563.hot-update.js.map