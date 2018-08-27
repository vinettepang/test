(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages\\index\\comps\\TestComp\\TestComp"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index/comps/TestComp/TestComp.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/comps/TestComp/TestComp.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var n = 0;

exports.default = {
    props: {
        propA: {
            type: String
        },
        propB: {
            type: String
        }
    },
    data: function data() {
        return {
            a: 'a',
            b: 'b'
        };
    },

    computed: {
        propAB: function propAB() {
            return this.propA + this.propB;
        },
        aAndB: function aAndB() {
            return this.a + this.b;
        }
    },
    watch: {
        propA: function propA(newVal, oldVal) {
            console.log('propA: ' + oldVal + ' -> ' + newVal);
        },
        propB: function propB(newVal, oldVal) {
            console.log('propB: ' + oldVal + ' -> ' + newVal);
        },
        propAB: function propAB(newVal, oldVal) {
            console.log('propAB: ' + oldVal + ' -> ' + newVal);
        },
        aAndB: function aAndB(newVal, oldVal) {
            console.log('aAndB: ' + oldVal + ' -> ' + newVal);
        }
    },
    methods: {
        addA: function addA() {
            this.a += n++;
        },
        addB: function addB() {
            this.b += n++;
        }
    },
    attached: function attached() {
        console.log('this', this);
        console.log('this.data', this.data);
    }
};

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/comps/TestComp/TestComp.vue?vue&type=custom&index=0&blockType=config":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js??ref--8-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/comps/TestComp/TestComp.vue?vue&type=custom&index=0&blockType=config ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages\\index\\comps\\TestComp\\TestComp.json";

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index/comps/TestComp/TestComp.vue?vue&type=style&index=0&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/comps/TestComp/TestComp.vue?vue&type=style&index=0&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/comps/TestComp/TestComp.vue?vue&type=template&id=f4cdeca8&lang=wxml":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/file-loader/dist/cjs.js??ref--9-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/comps/TestComp/TestComp.vue?vue&type=template&id=f4cdeca8&lang=wxml ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./src/pages/index/comps/TestComp/TestComp.vue":
/*!*****************************************************!*\
  !*** ./src/pages/index/comps/TestComp/TestComp.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestComp_vue_vue_type_template_id_f4cdeca8_lang_wxml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestComp.vue?vue&type=template&id=f4cdeca8&lang=wxml */ "./src/pages/index/comps/TestComp/TestComp.vue?vue&type=template&id=f4cdeca8&lang=wxml");
/* harmony import */ var _TestComp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestComp.vue?vue&type=script&lang=js */ "./src/pages/index/comps/TestComp/TestComp.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _TestComp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _TestComp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _TestComp_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TestComp.vue?vue&type=style&index=0&lang=scss */ "./src/pages/index/comps/TestComp/TestComp.vue?vue&type=style&index=0&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _TestComp_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TestComp.vue?vue&type=custom&index=0&blockType=config */ "./src/pages/index/comps/TestComp/TestComp.vue?vue&type=custom&index=0&blockType=config");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TestComp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TestComp_vue_vue_type_template_id_f4cdeca8_lang_wxml__WEBPACK_IMPORTED_MODULE_0__["render"],
  _TestComp_vue_vue_type_template_id_f4cdeca8_lang_wxml__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _TestComp_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_TestComp_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\pages\\index\\comps\\TestComp\\TestComp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/index/comps/TestComp/TestComp.vue?vue&type=custom&index=0&blockType=config":
/*!**********************************************************************************************!*\
  !*** ./src/pages/index/comps/TestComp/TestComp.vue?vue&type=custom&index=0&blockType=config ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/file-loader/dist/cjs.js??ref--8-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TestComp.vue?vue&type=custom&index=0&blockType=config */ "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/comps/TestComp/TestComp.vue?vue&type=custom&index=0&blockType=config");
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_dist_cjs_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_dist_cjs_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_dist_cjs_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_file_loader_dist_cjs_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/comps/TestComp/TestComp.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./src/pages/index/comps/TestComp/TestComp.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TestComp.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index/comps/TestComp/TestComp.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/comps/TestComp/TestComp.vue?vue&type=style&index=0&lang=scss":
/*!**************************************************************************************!*\
  !*** ./src/pages/index/comps/TestComp/TestComp.vue?vue&type=style&index=0&lang=scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TestComp.vue?vue&type=style&index=0&lang=scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index/comps/TestComp/TestComp.vue?vue&type=style&index=0&lang=scss");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/comps/TestComp/TestComp.vue?vue&type=template&id=f4cdeca8&lang=wxml":
/*!*********************************************************************************************!*\
  !*** ./src/pages/index/comps/TestComp/TestComp.vue?vue&type=template&id=f4cdeca8&lang=wxml ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_file_loader_dist_cjs_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_template_id_f4cdeca8_lang_wxml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/file-loader/dist/cjs.js??ref--9-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TestComp.vue?vue&type=template&id=f4cdeca8&lang=wxml */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/comps/TestComp/TestComp.vue?vue&type=template&id=f4cdeca8&lang=wxml");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_file_loader_dist_cjs_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_template_id_f4cdeca8_lang_wxml__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_file_loader_dist_cjs_js_ref_9_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComp_vue_vue_type_template_id_f4cdeca8_lang_wxml__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/index/comps/TestComp/index.js":
/*!*************************************************!*\
  !*** ./src/pages/index/comps/TestComp/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tuaMp = __webpack_require__(/*! tua-mp */ "./node_modules/tua-mp/examples/basic/utils/tua-mp.js");

var _TestComp = __webpack_require__(/*! ./TestComp.vue */ "./src/pages/index/comps/TestComp/TestComp.vue");

var _TestComp2 = _interopRequireDefault(_TestComp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tuaMp.TuaComp)(_TestComp2.default);

/***/ }),

/***/ 14:
/*!**********************************************!*\
  !*** multi ./src/pages/index/comps/TestComp ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\ssstudy\test\src\pages\index\comps\TestComp */"./src/pages/index/comps/TestComp/index.js");


/***/ })

},[[14,"chunks/runtime","chunks/vendors"]]]);
//# sourceMappingURL=TestComp.js.map