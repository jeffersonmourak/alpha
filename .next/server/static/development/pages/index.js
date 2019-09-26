module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Pages/index/About.js":
/*!*****************************************!*\
  !*** ./components/Pages/index/About.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/Section */ "./components/shared/Section.js");
/* harmony import */ var _constants_styleBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/styleBuilder */ "./constants/styleBuilder.js");
/* harmony import */ var _constants_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/fonts */ "./constants/fonts.js");
/* harmony import */ var _data_about_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/about.json */ "./data/about.json");
var _data_about_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/about.json */ "./data/about.json", 1);
var _jsxFileName = "/Users/jeffersonmourak/projects/joana/components/Pages/index/About.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "About__Text",
  componentId: "g92kea-0"
})(["", ""], Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_3__["default"])({
  defaultStyle: `
        font-size: 25px;
        line-height: 30px;
        padding: 0 115px;
        word-spacing: 5px;
    `,
  others: `
        ${_constants_fonts__WEBPACK_IMPORTED_MODULE_4__["default"].bebasRegular}
        font-size: 20px;
        line-height: 20px;
        padding: 0;
    `
}));
/**
 * Section component.
 */

const AboutSection = () => __jsx(_shared_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
  id: "about-us",
  title: "About Us",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx(Text, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, _data_about_json__WEBPACK_IMPORTED_MODULE_5__.text));

/* harmony default export */ __webpack_exports__["default"] = (AboutSection);

/***/ }),

/***/ "./components/Pages/index/Contact.js":
/*!*******************************************!*\
  !*** ./components/Pages/index/Contact.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ "google-map-react");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-mask */ "react-input-mask");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Section */ "./components/shared/Section.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/colors */ "./constants/colors.js");
/* harmony import */ var _constants_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants/fonts */ "./constants/fonts.js");
/* harmony import */ var _constants_styleBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants/styleBuilder */ "./constants/styleBuilder.js");
var _jsxFileName = "/Users/jeffersonmourak/projects/joana/components/Pages/index/Contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const MAPS_KEY = 'AIzaSyBk_WZFL3VPyZVJ3Gr8KdUC5Jq_feMaEgw';
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Contact__Content",
  componentId: "vtwygz-0"
})(["", ""], Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_7__["default"])({
  defaultStyle: `
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: calc(75vh - 50px);
        align-items: center;
        margin-bottom: 50px;
    `,
  others: `
        flex-direction: column;
    `
}));
const Column = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Contact__Column",
  componentId: "vtwygz-1"
})(["display:flex;flex-direction:column;height:calc(", "vh - 50px);width:100%;align-items:center;min-height:", "px;", ""], props => props.height || 75, props => props.minHeight || 0, Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_7__["default"])({
  others: `
        margin-bottom: 20px;
    `
}));
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Contact__Row",
  componentId: "vtwygz-2"
})(["", ""], Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_7__["default"])({
  defaultStyle: `
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        text-align: center;
        justify-content: center;
    `,
  others: `
        margin-bottom: 20px;
        flex-direction: column;
    `
}));
const Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "Contact__Form",
  componentId: "vtwygz-3"
})(["display:flex;flex-direction:column;height:calc(75vh - 50px);width:100%;"]);
const Pointer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Contact__Pointer",
  componentId: "vtwygz-4"
})(["border:none;background:transparent;cursor:pointer;width:30px;height:30px;background-image:url(/static/pointer.svg);background-size:cover;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "Contact__Label",
  componentId: "vtwygz-5"
})(["display:flex;flex-direction:column;margin-bottom:20px;font-size:22px;&::before{content:'", "';}"], props => props.text);
const ContactPhone = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "Contact__ContactPhone",
  componentId: "vtwygz-6"
})(["color:", ";font-size:35px;", " text-decoration:none;transition:all 300ms ease;&:hover{color:", ";}"], _constants_colors__WEBPACK_IMPORTED_MODULE_5__["default"].blue, _constants_fonts__WEBPACK_IMPORTED_MODULE_6__["default"].bebasBold, _constants_colors__WEBPACK_IMPORTED_MODULE_5__["default"].black);
const InputStyle = `
    line-height: 45px;
    font-size: 22px;
    border: 1px solid ${_constants_colors__WEBPACK_IMPORTED_MODULE_5__["default"].black};
    width: 95%;
    ${_constants_fonts__WEBPACK_IMPORTED_MODULE_6__["default"].bebasRegular}
`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "Contact__Input",
  componentId: "vtwygz-7"
})(["", ""], InputStyle);
const Phone = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_input_mask__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "Contact__Phone",
  componentId: "vtwygz-8"
})(["", ""], InputStyle);
const Message = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.textarea.withConfig({
  displayName: "Contact__Message",
  componentId: "vtwygz-9"
})(["", " min-height:100px;"], InputStyle);
const Send = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Contact__Send",
  componentId: "vtwygz-10"
})(["cursor:pointer;font-size:22px;", " padding:10px 0;color:", ";width:95%;background-color:", ";border:0;transition:all 300ms ease;&:hover,&:focus{background-color:", ";}"], _constants_fonts__WEBPACK_IMPORTED_MODULE_6__["default"].bebasRegular, _constants_colors__WEBPACK_IMPORTED_MODULE_5__["default"].white, _constants_colors__WEBPACK_IMPORTED_MODULE_5__["default"].black, _constants_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey);
const CallTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "Contact__CallTitle",
  componentId: "vtwygz-11"
})(["font-size:2.5em;text-align:center;color:", ";"], _constants_colors__WEBPACK_IMPORTED_MODULE_5__["default"].blue);
const PhoneTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4.withConfig({
  displayName: "Contact__PhoneTitle",
  componentId: "vtwygz-12"
})(["font-size:2em;text-align:center;color:", ";"], _constants_colors__WEBPACK_IMPORTED_MODULE_5__["default"].black);
const CENTER = [41.65842, -70.385323];
/**
 * Open maps.
 */

const openMaps = () => {
  if (navigator.platform.indexOf('iPhone') !== -1 || navigator.platform.indexOf('iPad') !== -1 || navigator.platform.indexOf('iPod') !== -1) {
    window.open('maps://maps.google.com/maps?daddr=41.65842,-70.385323');
  } else {
    window.open('https://g.page/alpha-custom-painting?share');
  }
};
/**
 * Services Section.
 */


const Contact = () => __jsx(_shared_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
  id: "contact",
  title: "Contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157
  },
  __self: undefined
}, __jsx(Content, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 158
  },
  __self: undefined
}, __jsx(Row, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159
  },
  __self: undefined
}, __jsx(Column, {
  minHeight: 500,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160
  },
  __self: undefined
}, __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
  bootstrapURLKeys: {
    key: MAPS_KEY
  },
  defaultCenter: CENTER,
  defaultZoom: 15,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161
  },
  __self: undefined
}, __jsx(Pointer, {
  onClick: openMaps,
  lat: 41.6585234,
  lng: -70.3855421,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166
  },
  __self: undefined
}))), __jsx(Column, {
  minHeight: 500,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 173
  },
  __self: undefined
}, __jsx(Form, {
  action: "https://formspree.io/alphacustom@icloud.com",
  method: "POST",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 174
  },
  __self: undefined
}, __jsx("input", {
  type: "hidden",
  name: "_subject",
  value: "Contact from website",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 175
  },
  __self: undefined
}), __jsx(Label, {
  htmlFor: "name",
  text: "Full name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176
  },
  __self: undefined
}, __jsx(Input, {
  required: true,
  type: "text",
  name: "name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 177
  },
  __self: undefined
})), __jsx(Label, {
  htmlFor: "phone",
  text: "Phone",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179
  },
  __self: undefined
}, __jsx(Phone, {
  required: true,
  mask: "(999) 999-9999",
  maskChar: " ",
  type: "tel",
  name: "phone",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 180
  },
  __self: undefined
})), __jsx(Label, {
  htmlFor: "email",
  text: "Email",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182
  },
  __self: undefined
}, __jsx(Input, {
  required: true,
  type: "email",
  name: "email",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 183
  },
  __self: undefined
})), __jsx(Label, {
  htmlFor: "message",
  text: "Message",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185
  },
  __self: undefined
}, __jsx(Message, {
  required: true,
  name: "message",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 186
  },
  __self: undefined
})), __jsx(Send, {
  type: "submit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 189
  },
  __self: undefined
}, " Send ")))), __jsx(Row, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 193
  },
  __self: undefined
}, __jsx(CallTitle, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 194
  },
  __self: undefined
}, " Call us ")), __jsx(Row, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 196
  },
  __self: undefined
}, __jsx(Column, {
  height: 40,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 197
  },
  __self: undefined
}, __jsx(PhoneTitle, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 198
  },
  __self: undefined
}, " Cleaning division "), __jsx(ContactPhone, {
  href: "tel:508-360-0316",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 199
  },
  __self: undefined
}, "508-360-0316")), __jsx(Column, {
  height: 40,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 201
  },
  __self: undefined
}, __jsx(PhoneTitle, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 202
  },
  __self: undefined
}, " Construction division "), __jsx(ContactPhone, {
  href: "tel:508-360-5357",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 203
  },
  __self: undefined
}, "508-360-5357")))));

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/Pages/index/Main.js":
/*!****************************************!*\
  !*** ./components/Pages/index/Main.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/Section */ "./components/shared/Section.js");
var _jsxFileName = "/Users/jeffersonmourak/projects/joana/components/Pages/index/Main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Main__Image",
  componentId: "g2az5q-0"
})(["width:100%;height:85vh;background-image:url(/static/pictures/cover_1.JPG);background-size:cover;background-position:center center;"]);
/**
 * Section component.
 */

const MainSection = () => __jsx(_shared_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
  background: __jsx(Image, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (MainSection);

/***/ }),

/***/ "./components/Pages/index/Reviews.js":
/*!*******************************************!*\
  !*** ./components/Pages/index/Reviews.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Section */ "./components/shared/Section.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/colors */ "./constants/colors.js");
/* harmony import */ var _constants_key__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/key */ "./constants/key.js");
/* harmony import */ var _constants_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants/fonts */ "./constants/fonts.js");
/* harmony import */ var _constants_styleBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants/styleBuilder */ "./constants/styleBuilder.js");
/* harmony import */ var _data_reviews_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/reviews.json */ "./data/reviews.json");
var _data_reviews_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/reviews.json */ "./data/reviews.json", 1);

var _jsxFileName = "/Users/jeffersonmourak/projects/joana/components/Pages/index/Reviews.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "Reviews__Text",
  componentId: "j7ddzb-0"
})(["", ""], Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_7__["default"])({
  defaultStyle: `
        font-size: 25px;
        line-height: 27px;
        padding: 0 55px;
        ${_constants_fonts__WEBPACK_IMPORTED_MODULE_6__["default"].bebasBook}
        text-align: justify;

        & strong {
            ${_constants_fonts__WEBPACK_IMPORTED_MODULE_6__["default"].bebasBold}
            display: block;
            font-size: 2em;
            margin-bottom: 5px;
        }
    `,
  others: `
    & strong {
        ${_constants_fonts__WEBPACK_IMPORTED_MODULE_6__["default"].bebasRegular}
        display: block;
        font-size: 1em;
        margin-bottom: 2px;
    }
    `
}));
const ReviewItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "Reviews__ReviewItem",
  componentId: "j7ddzb-1"
})(["", ""], Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_7__["default"])({
  defaultStyle: `
        border: none;
        background: transparent;
        cursor: pointer;
        ${_constants_fonts__WEBPACK_IMPORTED_MODULE_6__["default"].bebasBold}
        color: ${_constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].black};
        font-size: 32px;

        &:focus {
            outline: 0;
            color: ${_constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].black}
        }

        &:disabled {
            color: ${_constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey};
            text-shadow: none;
            padding: 2px 5px;
        }
    `,
  others: `
        display: none;
    `
}));
const ReviewList = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Reviews__ReviewList",
  componentId: "j7ddzb-2"
})(["display:flex;flex-direction:row;padding-bottom:20px;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Reviews__Content",
  componentId: "j7ddzb-3"
})(["position:relative;display:flex;flex-direction:column;justify-content:space-between;height:calc(70vh - 50px);align-items:center;"]);
const Star = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Reviews__Star",
  componentId: "j7ddzb-4"
})(["", ""], Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_7__["default"])({
  defaultStyle: `
        width: 72px;
        height: 72px;
        text-align: center;
        font-size: 50px;
        line-height: 80px;
        background-image: url(/static/star.svg);
    `,
  others: `
        width: 50px;
        height: 50px;
    `
}));
const Stars = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Reviews__Stars",
  componentId: "j7ddzb-5"
})(["display:flex;"]);
const Arrow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "Reviews__Arrow",
  componentId: "j7ddzb-6"
})(["", " ", ""], props => props.direction === 'forward' ? ` transform: rotateZ(180deg);
                right: 0;
            ` : ` left: 0;
                `, Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_7__["default"])({
  defaultStyle: `
            border: none;
            background: transparent;
            cursor: pointer;
            width: 72px;
            height: 72px;
            text-align: center;
            font-size: 50px;
            line-height: 80px;
            background-image: url(/static/arrow.svg);
            position: absolute;
            top: 15vh;
            background-repeat: no-repeat;
        `,
  others: `
            width: 32px;
            height: 32px;
        `
}));
/**
 * Services Section.
 */

class Services extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  /**
   * Constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      reviews: _data_reviews_json__WEBPACK_IMPORTED_MODULE_8__
    };
  }
  /**
   * On select review.
   */


  onSelectReview(current) {
    this.setState(state => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      current
    }));
  }
  /**
   * Get current.
   */


  getCurrent() {
    const {
      reviews,
      current
    } = this.state;
    return reviews[current];
  }
  /**
   * Get rating.
   */


  getRating(rating) {
    return new Array(rating).fill(0).map(() => __jsx(Star, {
      key: Object(_constants_key__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }));
  }
  /**
   * List services.
   */


  listServices() {
    const {
      reviews,
      current
    } = this.state;
    return reviews.map(({
      name
    }, index) => __jsx(ReviewItem, {
      key: Object(_constants_key__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      disabled: index === current,
      onClick: () => this.onSelectReview(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, name));
  }
  /**
   * Step review.
   */


  stepReview(step) {
    const {
      current,
      reviews
    } = this.state;
    /**
     * Index calculator.
     */

    const calc = i => (reviews.length + i) % reviews.length;

    return this.onSelectReview(calc(current + step));
  }
  /**
   * Render.
   */


  render() {
    const {
      text,
      name,
      location,
      rating
    } = this.getCurrent();
    return __jsx(_shared_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "reviews",
      title: "Reviews",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, __jsx(Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, __jsx(Text, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, text), `${name} - ${location}`), __jsx(Stars, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, this.getRating(rating)), __jsx(ReviewList, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, this.listServices()), __jsx(Arrow, {
      onClick: () => this.stepReview(-1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }), __jsx(Arrow, {
      onClick: () => this.stepReview(1),
      direction: "forward",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./components/Pages/index/Services.js":
/*!********************************************!*\
  !*** ./components/Pages/index/Services.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Section */ "./components/shared/Section.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/colors */ "./constants/colors.js");
/* harmony import */ var _constants_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/fonts */ "./constants/fonts.js");
/* harmony import */ var _constants_key__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants/key */ "./constants/key.js");
/* harmony import */ var _constants_styleBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants/styleBuilder */ "./constants/styleBuilder.js");
/* harmony import */ var _data_services_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/services.json */ "./data/services.json");
var _data_services_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/services.json */ "./data/services.json", 1);

var _jsxFileName = "/Users/jeffersonmourak/projects/joana/components/Pages/index/Services.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "Services__Text",
  componentId: "e7qt1o-0"
})(["", ""], Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_7__["default"])({
  defaultStyle: `
        font-size: 25px;
        line-height: 30px;
        padding: 0 55px;
        text-align: justify;
        color: ${_constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].white};
        text-shadow: 7px 7px 10px ${_constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].black};
    `,
  others: `
        ${_constants_fonts__WEBPACK_IMPORTED_MODULE_5__["default"].bebasRegular}
        font-size: 20px;
        line-height: 20px;
        padding: 0;
    `
}));
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Services__Image",
  componentId: "e7qt1o-1"
})(["width:100%;min-height:calc(100% - 100px);height:75vh;background-image:url(", ");background-size:cover;margin-top:100px;background-position:center center;"], props => props.src);
const ServiceItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "Services__ServiceItem",
  componentId: "e7qt1o-2"
})(["", ""], Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_7__["default"])({
  defaultStyle: `
        border: none;
        background: transparent;
        cursor: pointer;
        ${_constants_fonts__WEBPACK_IMPORTED_MODULE_5__["default"].bebasBold}
        color: ${_constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].white};
        text-shadow: 7px 7px 10px ${_constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].black};
        font-size: 25px;
        border: 1px solid transparent;

        &:focus {
            outline: 0;
            color: ${_constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey}
        }

        &:disabled {
            color: ${_constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue};
            background: ${_constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].white};
            text-shadow: none;
            padding: 2px 5px;
        }
    `,
  others: `
        &:not(.compare) {
            display: none;
        }
        
        &:disabled {
            display: block;
        }
    `
}));
const ServiceList = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Services__ServiceList",
  componentId: "e7qt1o-3"
})(["display:flex;flex-direction:row;padding-bottom:20px;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Services__Content",
  componentId: "e7qt1o-4"
})(["display:flex;flex-direction:column;justify-content:flex-end;min-height:calc(75vh - 50px);align-items:center;"]);
const Arrow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "Services__Arrow",
  componentId: "e7qt1o-5"
})(["", " ", ""], props => props.direction === 'forward' ? ` transform: rotateZ(180deg);
                right: 0;
            ` : ` left: 0;
                `, Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_7__["default"])({
  defaultStyle: `
            border: none;
            background: transparent;
            cursor: pointer;
            width: 72px;
            height: 72px;
            text-align: center;
            font-size: 50px;
            line-height: 80px;
            background-image: url(/static/arrow-white.svg);
            position: absolute;
            top: 50vh;
            background-repeat: no-repeat;
        `,
  others: `
            width: 32px;
            height: 32px;
        `
}));
/**
 * Services Section.
 */

class Services extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  /**
   * Constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      services: _data_services_json__WEBPACK_IMPORTED_MODULE_8__,
      isBefore: true
    };
  }
  /**
   * On select service.
   */


  onSelectService(current) {
    this.setState(state => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      current,
      isBefore: true
    }));
  }
  /**
   * On Select before.
   */


  onSelectBefore(isBefore) {
    this.setState(state => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      isBefore
    }));
  }
  /**
   * Get current.
   */


  getCurrent() {
    const {
      services,
      current,
      isBefore
    } = this.state;
    const activeService = services[current];
    let background = isBefore ? activeService.before : activeService.after;

    if (activeService.hideCompare) {
      // eslint-disable-next-line prefer-destructuring
      background = activeService.background;
    }

    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, activeService, {
      background
    });
  }
  /**
   * Step review.
   */


  stepService(step) {
    const {
      current,
      services
    } = this.state;
    /**
     * Index calculator.
     */

    const calc = i => (services.length + i) % services.length;

    return this.onSelectService(calc(current + step));
  }
  /**
   * List services.
   */


  listServices() {
    const {
      services,
      current
    } = this.state;
    return services.map(({
      name
    }, index) => __jsx(ServiceItem, {
      key: Object(_constants_key__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      disabled: index === current,
      onClick: () => this.onSelectService(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, name));
  }
  /**
   * Compare options.
   */


  compareOptions() {
    const {
      services,
      current,
      isBefore
    } = this.state;
    const activeService = services[current];

    const before = __jsx(ServiceItem, {
      key: Object(_constants_key__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      className: "compare",
      disabled: isBefore,
      onClick: () => this.onSelectBefore(true),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, "Before");

    const after = __jsx(ServiceItem, {
      key: Object(_constants_key__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      className: "compare",
      disabled: !isBefore,
      onClick: () => this.onSelectBefore(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }, "After");

    return activeService.hideCompare ? [] : [before, after];
  }
  /**
   * Render.
   */


  render() {
    const {
      background,
      text
    } = this.getCurrent();
    return __jsx(_shared_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "services",
      background: __jsx(Image, {
        src: background,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }),
      title: "Services",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, __jsx(Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, __jsx(Text, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }, text), __jsx(ServiceList, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }, this.compareOptions()), __jsx(ServiceList, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, this.listServices()), __jsx(Arrow, {
      onClick: () => this.stepService(-1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }), __jsx(Arrow, {
      onClick: () => this.stepService(1),
      direction: "forward",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./components/shared/Footer.js":
/*!*************************************!*\
  !*** ./components/shared/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/colors */ "./constants/colors.js");
/* harmony import */ var _constants_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/fonts */ "./constants/fonts.js");
var _jsxFileName = "/Users/jeffersonmourak/projects/joana/components/shared/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FooterContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "Footer__FooterContent",
  componentId: "sc-1dfkxi3-0"
})(["", " background-color:", ";color:", ";width:100%;height:70px;font-size:25px;line-height:70px;text-align:center;"], _constants_fonts__WEBPACK_IMPORTED_MODULE_3__["default"].bebasBold, _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].blue, _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].white);
/**
 * Section component.
 */

const Footer = () => __jsx(FooterContent, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, " 2019 Alpha Custom, inc. all rights reserved. ");

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/shared/Header.js":
/*!*************************************!*\
  !*** ./components/shared/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/colors */ "./constants/colors.js");
/* harmony import */ var _constants_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/fonts */ "./constants/fonts.js");
/* harmony import */ var _constants_styleBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/styleBuilder */ "./constants/styleBuilder.js");
var _jsxFileName = "/Users/jeffersonmourak/projects/joana/components/shared/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/label-has-for */

/* eslint-disable jsx-a11y/label-has-associated-control */





const Anchor = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "Header__Anchor",
  componentId: "ff08l-0"
})(["", ""], Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_4__["default"])({
  defaultStyle: `
        color: ${_constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].blue};
        font-size: 35px;
        ${_constants_fonts__WEBPACK_IMPORTED_MODULE_3__["default"].bebasBold}
        margin: 0 20px;
        text-decoration: none;
        transition: all 300ms ease;

        &:hover {
            color: ${_constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].black};
        }
    `,
  others: `
        display: none;
    `
}));
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header.withConfig({
  displayName: "Header__HeaderWrapper",
  componentId: "ff08l-1"
})(["height:100px;width:100%;display:flex;justify-content:center;align-items:center;position:fixed;z-index:2;background-color:", ";top:0;left:0;input{display:none;}"], _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].white);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Header__Logo",
  componentId: "ff08l-2"
})(["height:65%;margin:0 20px;"]);
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav.withConfig({
  displayName: "Header__Nav",
  componentId: "ff08l-3"
})(["", ""], Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_4__["default"])({
  defaultStyle: 'display: none;',
  others: `
        position: fixed;
        top: 0;
        z-index: 3;
        background: white;
        width: 100%;
        height: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 0;
        text-align: center;
        transition: all 750ms ease;

        input[type="checkbox"]:checked + & {
            height: 100vh;
        }
    `
}));
const NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "Header__NavItem",
  componentId: "ff08l-4"
})(["color:", ";font-size:35px;", " margin:0 20px;text-decoration:none;transition:all 300ms ease;&:hover{color:", ";}"], _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].blue, _constants_fonts__WEBPACK_IMPORTED_MODULE_3__["default"].bebasBold, _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].black);
const Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Header__Hamburger",
  componentId: "ff08l-5"
})(["", ""], Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_4__["default"])({
  defaultStyle: 'display: none;',
  others: `
        display: block;
        width: 40px;
        height: 40px;
        position: fixed;
        z-index: 4;
        top: 30px;
        left: 20px;
    `
}));
/**
 * Quick close.
 */

const quickClose = () => {
  const menu = document.getElementById('menu');
  menu.checked = false;
};
/**
 * Header component.
 */


const Header = () => __jsx(HeaderWrapper, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, __jsx("label", {
  htmlFor: "menu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}, __jsx(Hamburger, {
  alt: "menu",
  src: "/static/hamburger.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
})), __jsx("input", {
  id: "menu",
  type: "checkbox",
  name: "menu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116
  },
  __self: undefined
}), __jsx(Nav, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, __jsx(NavItem, {
  onClick: quickClose,
  href: "#services",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: undefined
}, "Services"), __jsx(NavItem, {
  onClick: quickClose,
  href: "#reviews",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}, "Reviews"), __jsx(NavItem, {
  onClick: quickClose,
  href: "#about-us",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}, "About us"), __jsx(NavItem, {
  onClick: quickClose,
  href: "#contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}, "Contact")), __jsx(Anchor, {
  href: "#services",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123
  },
  __self: undefined
}, "Services"), __jsx(Anchor, {
  href: "#reviews",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124
  },
  __self: undefined
}, "Reviews"), __jsx(Logo, {
  alt: "logo",
  src: "/static/logo.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125
  },
  __self: undefined
}), __jsx(Anchor, {
  href: "#about-us",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126
  },
  __self: undefined
}, "About us"), __jsx(Anchor, {
  href: "#contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}, "Contact"));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/shared/If.js":
/*!*********************************!*\
  !*** ./components/shared/If.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jeffersonmourak/projects/joana/components/shared/If.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 * If component.
 */

const If = ({
  children,
  condition
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, condition ? children : null);

/* harmony default export */ __webpack_exports__["default"] = (If);

/***/ }),

/***/ "./components/shared/Section.js":
/*!**************************************!*\
  !*** ./components/shared/Section.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/colors */ "./constants/colors.js");
/* harmony import */ var _constants_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/fonts */ "./constants/fonts.js");
/* harmony import */ var _If__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./If */ "./components/shared/If.js");
var _jsxFileName = "/Users/jeffersonmourak/projects/joana/components/shared/Section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "Section__SectionWrapper",
  componentId: "sc-1cix69p-0"
})(["position:relative;min-height:75vh;", " color:", ";", ";"], props => props.id ? 'padding-top: 99px;' : '', _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].black, _constants_fonts__WEBPACK_IMPORTED_MODULE_3__["default"].bebasBold);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "Section__Title",
  componentId: "sc-1cix69p-1"
})(["font-size:3.3em;text-align:center;margin-top:0;"]);
const Boundaries = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Section__Boundaries",
  componentId: "sc-1cix69p-2"
})(["margin:0 40px;"]);
const Foreground = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Section__Foreground",
  componentId: "sc-1cix69p-3"
})(["position:relative;z-index:1;"]);
const Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Section__Background",
  componentId: "sc-1cix69p-4"
})(["position:absolute;width:100%;height:75vh;z-index:0;"]);
/**
 * Section component.
 */

const Section = ({
  id,
  children,
  title,
  background
}) => __jsx(SectionWrapper, {
  id: id,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx(_If__WEBPACK_IMPORTED_MODULE_4__["default"], {
  condition: react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(background),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx(Background, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, background)), __jsx(Foreground, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx(_If__WEBPACK_IMPORTED_MODULE_4__["default"], {
  condition: title,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx(Title, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, title)), __jsx(_If__WEBPACK_IMPORTED_MODULE_4__["default"], {
  condition: react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(children),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx(Boundaries, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, children))));

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./constants/colors.js":
/*!*****************************!*\
  !*** ./constants/colors.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const COLORS = {
  blue: '#0d447b',
  white: '#ffffff',
  black: '#000000',
  grey: '#808080'
};
/* harmony default export */ __webpack_exports__["default"] = (COLORS);

/***/ }),

/***/ "./constants/fonts.js":
/*!****************************!*\
  !*** ./constants/fonts.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const bebas = `
font-family: bebas-neue-by-fontfabric, sans-serif;
font-style: normal;
`;
const bebasRegular = `
${bebas}
font-weight: 400;
`;
const bebasBook = `
${bebas}
font-weight: 300;
`;
const bebasBold = `
${bebas}
font-weight: 700;
`;
const FONTS = {
  bebasRegular,
  bebasBook,
  bebasBold
};
/* harmony default export */ __webpack_exports__["default"] = (FONTS);

/***/ }),

/***/ "./constants/key.js":
/*!**************************!*\
  !*** ./constants/key.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Key generator.
 */
const key = () => Math.random().toString(36).substr(3);

/* harmony default export */ __webpack_exports__["default"] = (key);

/***/ }),

/***/ "./constants/styleBuilder.js":
/*!***********************************!*\
  !*** ./constants/styleBuilder.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Style builder.
 */
const styleBuilder = ({
  defaultStyle = '',
  desktop = '',
  mobile = '',
  tablet = '',
  others = ''
}) => `
    ${defaultStyle}
    ${desktop}
    
    @media all and (max-width: 1024px) { 
        ${tablet}
        ${others}
    }

    @media all and (max-width: 736px) { 
        ${tablet}
        ${others}
    }
    @media all and (max-width: 480px) { 
        ${mobile}
        ${others}
    }
`;

/* harmony default export */ __webpack_exports__["default"] = (styleBuilder);

/***/ }),

/***/ "./data/about.json":
/*!*************************!*\
  !*** ./data/about.json ***!
  \*************************/
/*! exports provided: text, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"text\":\"Under Rudy Gazolla guidance Alpha custom inc. has grown steadily since opening for over a decade. Rudy and Joanna operate under a simple guideline of striving to provide each individual customer with friendly, reliable, high quality service. While always an active hands on business owner, Rudy and Joanna has also developed a reputation as an industry expert.\"}");

/***/ }),

/***/ "./data/meta.json":
/*!************************!*\
  !*** ./data/meta.json ***!
  \************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"content\":\"Meta description\",\"name\":\"description\"},{\"name\":\"keywords\",\"content\":\"painting, housing\"},{\"name\":\"robots\",\"content\":\"index, follow\"},{\"name\":\"language\",\"content\":\"English\"}]");

/***/ }),

/***/ "./data/reviews.json":
/*!***************************!*\
  !*** ./data/reviews.json ***!
  \***************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Abby\",\"rating\":1,\"text\":\"Great work, my house looks amazing now\",\"location\":\"Boston, MA\"},{\"name\":\"Jacoby\",\"rating\":2,\"text\":\"ANOTHER TEXT HERE\",\"location\":\"Other, MA\"},{\"name\":\"Brylee\",\"rating\":3,\"text\":\"ANY OTHER TEXT\",\"location\":\"Hyannis, MA\"},{\"name\":\"Madison\",\"rating\":4,\"text\":\"JUST TO TEST\",\"location\":\"City, MA\"},{\"name\":\"Anna\",\"rating\":5,\"text\":\"Great\",\"location\":\"somewhere, MA\"},{\"name\":\"Nadya\",\"rating\":4,\"text\":\"Oops.\",\"location\":\"over, MA\"},{\"name\":\"Valery\",\"rating\":3,\"text\":\"NOW\",\"location\":\"the, MA\"},{\"name\":\"Dru\",\"rating\":2,\"text\":\"Amazing\",\"location\":\"rainbow, MA\"}]");

/***/ }),

/***/ "./data/services.json":
/*!****************************!*\
  !*** ./data/services.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Painting\",\"before\":\"/static/pictures/painting_5_before.jpg\",\"after\":\"/static/pictures/painting_5_after.jpg\",\"text\":\"There’s a reason we’re the most trusted house painter on Cape Cod. We are trained to make your painting dreams come true. When you hire Alpha Custom to paint the interior or exterior of your home we try to make it as painless for you as possible.\"},{\"name\":\"Side wall\",\"before\":\"/static/pictures/side_wall_1_before.jpg\",\"after\":\"/static/pictures/side_wall_1_after.jpg\",\"text\":\"\"},{\"name\":\"Dry wall\",\"background\":\"/static/pictures/dry_wall_1.jpeg\",\"hideCompare\":true,\"text\":\"\"},{\"name\":\"Carpentry\",\"background\":\"/static/pictures/carpentry_11.jpg\",\"hideCompare\":true,\"text\":\"\"},{\"name\":\"Floor\",\"before\":\"/static/pictures/floor_2_before.jpg\",\"after\":\"/static/pictures/floor_2_after.jpg\",\"text\":\"\"},{\"name\":\"Power washing\",\"hideCompare\":true,\"background\":\"/static/pictures/power_wash_4.jpg\",\"text\":\"Power washing is used to clean your house exterior (house washing), deck, outdoor furniture as well as for commercial uses such as concrete cleaning and removing contaminants like mold or mildew that have adhered to  the surface of a building.\"}]");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_shared_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/Header */ "./components/shared/Header.js");
/* harmony import */ var _components_Pages_index_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pages/index/Main */ "./components/Pages/index/Main.js");
/* harmony import */ var _components_Pages_index_About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Pages/index/About */ "./components/Pages/index/About.js");
/* harmony import */ var _components_Pages_index_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Pages/index/Services */ "./components/Pages/index/Services.js");
/* harmony import */ var _components_Pages_index_Reviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Pages/index/Reviews */ "./components/Pages/index/Reviews.js");
/* harmony import */ var _components_Pages_index_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Pages/index/Contact */ "./components/Pages/index/Contact.js");
/* harmony import */ var _components_shared_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/shared/Footer */ "./components/shared/Footer.js");
/* harmony import */ var _data_meta_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/meta.json */ "./data/meta.json");
var _data_meta_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/meta.json */ "./data/meta.json", 1);
/* harmony import */ var _data_services_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/services.json */ "./data/services.json");
var _data_services_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/services.json */ "./data/services.json", 1);
/* harmony import */ var _constants_key__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants/key */ "./constants/key.js");
var _jsxFileName = "/Users/jeffersonmourak/projects/joana/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













const Page = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__Page",
  componentId: "sc-1orfylx-0"
})(["margin-top:100px;"]);
/**
 * Build meta.
 */

const buildMeta = () => _data_meta_json__WEBPACK_IMPORTED_MODULE_11__.map(({
  name,
  content
}) => __jsx("meta", {
  key: Object(_constants_key__WEBPACK_IMPORTED_MODULE_13__["default"])(),
  name: name,
  content: content,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}));
/**
 * Page configuration.
 */


const PageConfig = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  className: "jsx-3826789607",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-3826789607",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}), __jsx("meta", {
  httpEquiv: "Content-Type",
  content: "text/html; charset=utf-8",
  className: "jsx-3826789607",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://use.typekit.net/xws3but.css",
  className: "jsx-3826789607",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}), buildMeta(), __jsx("title", {
  className: "jsx-3826789607",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, " Alpha Custom ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3826789607",
  __self: undefined
}, "body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWZmZXJzb25tb3VyYWsvcHJvamVjdHMvam9hbmEvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENhLEFBRzhCLFNBQ2IiLCJmaWxlIjoiL1VzZXJzL2plZmZlcnNvbm1vdXJhay9wcm9qZWN0cy9qb2FuYS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvSGVhZGVyJztcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZXMvaW5kZXgvTWFpbic7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlcy9pbmRleC9BYm91dCc7XG5pbXBvcnQgU2VydmljZXMgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlcy9pbmRleC9TZXJ2aWNlcyc7XG5pbXBvcnQgUmV2aWV3cyBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VzL2luZGV4L1Jldmlld3MnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlcy9pbmRleC9Db250YWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvRm9vdGVyJztcblxuaW1wb3J0IE1FVEEgZnJvbSAnLi4vZGF0YS9tZXRhLmpzb24nO1xuaW1wb3J0IHNlcnZpY2VzIGZyb20gJy4uL2RhdGEvc2VydmljZXMuanNvbic7XG5pbXBvcnQga2V5IGZyb20gJy4uL2NvbnN0YW50cy9rZXknO1xuXG5jb25zdCBQYWdlID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbmA7XG5cbi8qKlxuICogQnVpbGQgbWV0YS5cbiAqL1xuY29uc3QgYnVpbGRNZXRhID0gKCkgPT4gTUVUQS5tYXAoKHsgbmFtZSwgY29udGVudCB9KSA9PiAoXG4gICAgPG1ldGEga2V5PXtrZXkoKX0gbmFtZT17bmFtZX0gY29udGVudD17Y29udGVudH0gLz5cbikpO1xuXG4vKipcbiAqIFBhZ2UgY29uZmlndXJhdGlvbi5cbiAqL1xuY29uc3QgUGFnZUNvbmZpZyA9ICgpID0+IChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQveHdzM2J1dC5jc3NcIiAvPlxuICAgICAgICAgICAgeyBidWlsZE1ldGEoKSB9XG4gICAgICAgICAgICA8dGl0bGU+IEFscGhhIEN1c3RvbSA8L3RpdGxlPlxuXG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuLyoqXG4gKiBJbmRleCBwYWdlLlxuICovXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgICA8UGFnZT5cbiAgICAgICAgPFBhZ2VDb25maWcgLz5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8TWFpbiAvPlxuICAgICAgICA8QWJvdXQgLz5cbiAgICAgICAgPFNlcnZpY2VzIC8+XG4gICAgICAgIDxSZXZpZXdzIC8+XG4gICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICA8L1BhZ2U+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/jeffersonmourak/projects/joana/pages/index.js */"));
/**
 * Index page.
 */


const Index = () => __jsx(Page, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx(PageConfig, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}), __jsx(_components_shared_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}), __jsx(_components_Pages_index_Main__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}), __jsx(_components_Pages_index_About__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}), __jsx(_components_Pages_index_Services__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}), __jsx(_components_Pages_index_Reviews__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}), __jsx(_components_Pages_index_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}), __jsx(_components_shared_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeffersonmourak/projects/joana/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "google-map-react":
/*!***********************************!*\
  !*** external "google-map-react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-input-mask":
/*!***********************************!*\
  !*** external "react-input-mask" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-input-mask");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map