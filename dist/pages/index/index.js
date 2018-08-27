(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages\\index\\index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/Index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(/*! @utils */ "./src/scripts/utils/index.js");

var n = 0;

exports.default = {
    data: function data() {
        return {
            msg: 'msg',
            a: {
                b: 'a.b'
            },
            arr: [{ c: { d: 'd0' } }, { c: { d: 'd1' } }, 1, 2, 3],
            g: 'hello world',

            testData: {
                nested: {
                    steve: 'steve',
                    young: {
                        young: 'young'
                    }
                },
                arr: [],
                nestedArr: [{
                    name: 'steve',
                    nick: {
                        young: 'young'
                    }
                }, {
                    name: 'jame'
                }],
                insertNestedArr: []
            }
        };
    },
    onLoad: function onLoad() {
        (0, _utils.log)(this);

        global = this;


        for (var i = 100; i > 90; i--) {
            this.g = i;
            this['g'] = i + 1;
        }
    },

    computed: {
        reversedG: function reversedG() {
            return this.reverseStr(this.g);
        },
        gAndAB: function gAndAB() {
            return this.g + ' + ' + this.a.b;
        },
        dataAndComputed: function dataAndComputed() {
            return this.g + ' + ' + this.reversedG;
        }
    },
    watch: {
        msg: function msg(newVal, oldVal) {
            (0, _utils.log)('msg: ' + oldVal + ' -> ' + newVal);
        },
        'a.b': function aB(newVal, oldVal) {
            var _this = this;

            (0, _utils.log)('a.b: ' + oldVal + ' -> ' + newVal);
            setTimeout(function () {
                _this.msg = _this.reverseStr(_this.msg);
            }, 1000);
        },
        'g': function g(newVal, oldVal) {
            (0, _utils.log)('g: ' + oldVal + ' -> ' + newVal);
        },
        'reversedG': function reversedG(newVal, oldVal) {
            (0, _utils.log)('reversedG: ' + oldVal + ' -> ' + newVal);
        },
        'gAndAB': function gAndAB(newVal, oldVal) {
            (0, _utils.log)('gAndAB: ' + oldVal + ' -> ' + newVal);
        }
    },
    methods: {
        tapMsg: function tapMsg() {
            this.msg += n++;
        },
        tapAB: function tapAB() {
            this.a.b += n++;
        },
        tapArr: function tapArr() {
            this.arr.push(n++);
        },
        tapArrNest0: function tapArrNest0() {
            this.arr[0].c.d = n++;
        },
        tapArrNest1: function tapArrNest1() {
            this.arr[1].c.d = n++;
        },
        tapArrSp: function tapArrSp() {
            this.arr.splice(2, 2, n++);
        },
        tapReverseG: function tapReverseG() {
            this.g = this.reversedG;
        },
        reverseStr: function reverseStr(str) {
            return String(str).split('').reverse().join('');
        },
        unshiftNested: function unshiftNested() {
            this.arr.unshift({ c: { d: 'hey' } });
        },
        gotoLogs: function gotoLogs() {
            wx.navigateTo({ url: '/pages/logs/logs' });
        },
        gotoTodos: function gotoTodos() {
            wx.navigateTo({
                url: '/pages/todos/todos'
            });
        },
        gotoTest: function gotoTest() {
            wx.navigateTo({
                url: '/pages/index/test'
            });
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=custom&index=0&blockType=config":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js??ref--8-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/Index.vue?vue&type=custom&index=0&blockType=config ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages\\index\\index.json";

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=style&index=0&lang=less":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/Index.vue?vue&type=style&index=0&lang=less ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=template&id=5fa2cf0c&lang=wxml":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/file-loader/dist/cjs.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/Index.vue?vue&type=template&id=5fa2cf0c&lang=wxml ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  undefined
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/pages/index/Index.vue":
/*!***********************************!*\
  !*** ./src/pages/index/Index.vue ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_5fa2cf0c_lang_wxml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5fa2cf0c&lang=wxml */ "./src/pages/index/Index.vue?vue&type=template&id=5fa2cf0c&lang=wxml");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./src/pages/index/Index.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Index_vue_vue_type_style_index_0_lang_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=less */ "./src/pages/index/Index.vue?vue&type=style&index=0&lang=less");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _Index_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Index.vue?vue&type=custom&index=0&blockType=config */ "./src/pages/index/Index.vue?vue&type=custom&index=0&blockType=config");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_5fa2cf0c_lang_wxml__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_5fa2cf0c_lang_wxml__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _Index_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_Index_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\pages\\index\\Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/index/Index.vue?vue&type=custom&index=0&blockType=config":
/*!****************************************************************************!*\
  !*** ./src/pages/index/Index.vue?vue&type=custom&index=0&blockType=config ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/file-loader/dist/cjs.js??ref--8-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=custom&index=0&blockType=config */ "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=custom&index=0&blockType=config");
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_dist_cjs_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_dist_cjs_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_dist_cjs_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_file_loader_dist_cjs_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/Index.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/pages/index/Index.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/Index.vue?vue&type=style&index=0&lang=less":
/*!********************************************************************!*\
  !*** ./src/pages/index/Index.vue?vue&type=style&index=0&lang=less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=less */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=style&index=0&lang=less");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_less__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_less__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_less__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/Index.vue?vue&type=template&id=5fa2cf0c&lang=wxml":
/*!***************************************************************************!*\
  !*** ./src/pages/index/Index.vue?vue&type=template&id=5fa2cf0c&lang=wxml ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_file_loader_dist_cjs_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5fa2cf0c_lang_wxml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/file-loader/dist/cjs.js??ref--9-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=5fa2cf0c&lang=wxml */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=template&id=5fa2cf0c&lang=wxml");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_file_loader_dist_cjs_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5fa2cf0c_lang_wxml__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_file_loader_dist_cjs_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5fa2cf0c_lang_wxml__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tuaMp = __webpack_require__(/*! tua-mp */ "./node_modules/tua-mp/examples/basic/utils/tua-mp.js");

var _Index = __webpack_require__(/*! ./Index.vue */ "./src/pages/index/Index.vue");

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tuaMp.TuaPage)(_Index2.default);

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/pages/index ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\ssstudy\test\src\pages\index */"./src/pages/index/index.js");


/***/ })

},[[0,"chunks/runtime","chunks/vendors","chunks/scripts"]]]);
//# sourceMappingURL=index.js.map