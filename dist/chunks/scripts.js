(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["chunks/scripts"],{

/***/ "./src/scripts/constants/index.js":
/*!****************************************!*\
  !*** ./src/scripts/constants/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var VALID_FILTERS = exports.VALID_FILTERS = ['all', 'active', 'completed'];
var API = exports.API = {
	job_list: '/api/job_list',
	job_list_filter: '/api/job_list_filter'
};

/***/ }),

/***/ "./src/scripts/utils/event.js":
/*!************************************!*\
  !*** ./src/scripts/utils/event.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = _assign2.default || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getValFromEvent = exports.getValFromEvent = function getValFromEvent(_ref) {
    var detail = _ref.detail,
        currentTarget = _ref.currentTarget;
    return _extends({}, detail, currentTarget.dataset);
};

/***/ }),

/***/ "./src/scripts/utils/format.js":
/*!*************************************!*\
  !*** ./src/scripts/utils/format.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var formatTime = exports.formatTime = function formatTime(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

var formatNumber = function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
};

var filterFns = exports.filterFns = {
    all: function all(todos) {
        return todos;
    },
    active: function active(todos) {
        return todos.filter(function (todo) {
            return !todo.completed;
        });
    },
    completed: function completed(todos) {
        return todos.filter(function (todo) {
            return todo.completed;
        });
    }
};

/***/ }),

/***/ "./src/scripts/utils/index.js":
/*!************************************!*\
  !*** ./src/scripts/utils/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _log = __webpack_require__(/*! ./log */ "./src/scripts/utils/log.js");

(0, _keys2.default)(_log).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  (0, _defineProperty2.default)(exports, key, {
    enumerable: true,
    get: function get() {
      return _log[key];
    }
  });
});

var _event = __webpack_require__(/*! ./event */ "./src/scripts/utils/event.js");

(0, _keys2.default)(_event).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  (0, _defineProperty2.default)(exports, key, {
    enumerable: true,
    get: function get() {
      return _event[key];
    }
  });
});

var _format = __webpack_require__(/*! ./format */ "./src/scripts/utils/format.js");

(0, _keys2.default)(_format).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  (0, _defineProperty2.default)(exports, key, {
    enumerable: true,
    get: function get() {
      return _format[key];
    }
  });
});

var _network = __webpack_require__(/*! ./network */ "./src/scripts/utils/network.js");

(0, _keys2.default)(_network).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  (0, _defineProperty2.default)(exports, key, {
    enumerable: true,
    get: function get() {
      return _network[key];
    }
  });
});

/***/ }),

/***/ "./src/scripts/utils/log.js":
/*!**********************************!*\
  !*** ./src/scripts/utils/log.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var log = exports.log = function log(txt) {
  return console.log("[log from utils]: " + txt);
};

/***/ }),

/***/ "./src/scripts/utils/network.js":
/*!**************************************!*\
  !*** ./src/scripts/utils/network.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = _assign2.default || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var API_URI = exports.API_URI = 'https://dev.icebear.me';

var http = function http() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref$url = _ref.url,
        url = _ref$url === undefined ? '' : _ref$url,
        _ref$param = _ref.param,
        param = _ref$param === undefined ? {} : _ref$param,
        other = _objectWithoutProperties(_ref, ['url', 'param']);

    wx.showLoading({
        title: '请求中，请耐心等待..'
    });
    var timeStart = Date.now();
    var token = '';
    return new _promise2.default(function (resolve, reject) {
        wx.request(_extends({
            url: getUrl(url),
            data: param,
            header: {
                'content-type': 'application/json' }
        }, other, {
            complete: function complete(res) {
                wx.hideLoading();
                console.log('\u8017\u65F6' + (Date.now() - timeStart));
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data);
                } else {
                    reject(res);
                }
            }
        }));
    });
};

var getUrl = function getUrl(url) {
    if (url.indexOf('://') == -1) {
        url = API_URI + url;
    }
    return url;
};

var _get = function _get(url) {
    var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return http({
        url: url,
        param: param
    });
};

var _post = function _post(url) {
    var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return http({
        url: url,
        param: param,
        method: 'post'
    });
};

module.exports = {
    API_URI: API_URI,
    _get: _get,
    _post: _post
};

/***/ })

}]);
//# sourceMappingURL=scripts.js.map