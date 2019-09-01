webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/shared/Header.js":
/*!*************************************!*\
  !*** ./components/shared/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/colors */ "./constants/colors.js");
/* harmony import */ var _constants_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/fonts */ "./constants/fonts.js");
/* harmony import */ var _constants_styleBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/styleBuilder */ "./constants/styleBuilder.js");
var _jsxFileName = "/Users/jeffersonmourak/projects/joana/components/shared/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/label-has-for */

/* eslint-disable jsx-a11y/label-has-associated-control */





var Anchor = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Header__Anchor",
  componentId: "ff08l-0"
})(["", ""], Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_4__["default"])({
  defaultStyle: "\n        color: ".concat(_constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].blue, ";\n        font-size: 35px;\n        ").concat(_constants_fonts__WEBPACK_IMPORTED_MODULE_3__["default"].bebasBold, "\n        margin: 0 20px;\n        text-decoration: none;\n        transition: all 300ms ease;\n\n        &:hover {\n            color: ").concat(_constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].black, ";\n        }\n    "),
  others: "\n        display: none;\n    "
}));
var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.withConfig({
  displayName: "Header__HeaderWrapper",
  componentId: "ff08l-1"
})(["height:100px;width:100%;display:flex;justify-content:center;align-items:center;position:fixed;z-index:2;background-color:", ";top:0;left:0;input{display:none;}"], _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].white);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Header__Logo",
  componentId: "ff08l-2"
})(["height:65%;margin:0 20px;"]);
var Phone = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Header__Phone",
  componentId: "ff08l-3"
})(["", ""], Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_4__["default"])({
  defaultStyle: "\n        color: ".concat(_constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].blue, ";\n        font-size: 35px;\n        ").concat(_constants_fonts__WEBPACK_IMPORTED_MODULE_3__["default"].bebasBold, "\n        position: absolute;\n        right: 50px;\n        text-decoration: none;\n        transition: all 300ms ease;\n\n        &:hover {\n            color: ").concat(_constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].black, ";\n        }\n    "),
  others: "\n        display: none;\n    "
}));
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "Header__Nav",
  componentId: "ff08l-4"
})(["", ""], Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_4__["default"])({
  defaultStyle: 'display: none;',
  others: "\n        position: fixed;\n        top: 0;\n        z-index: 3;\n        background: white;\n        width: 100%;\n        height: 0;\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        padding: 0;\n        text-align: center;\n        transition: all 750ms ease;\n\n        input[type=\"checkbox\"]:checked + & {\n            height: 100vh;\n        }\n    "
}));
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Header__NavItem",
  componentId: "ff08l-5"
})(["color:", ";font-size:35px;", " margin:0 20px;text-decoration:none;transition:all 300ms ease;&:hover{color:", ";}"], _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].blue, _constants_fonts__WEBPACK_IMPORTED_MODULE_3__["default"].bebasBold, _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].black);
var Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Header__Hamburger",
  componentId: "ff08l-6"
})(["", ""], Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_4__["default"])({
  defaultStyle: 'display: none;',
  others: "\n        display: block;\n        width: 40px;\n        height: 40px;\n        position: fixed;\n        z-index: 4;\n        top: 30px;\n        left: 20px;\n    "
}));
var MobilePhone = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Header__MobilePhone",
  componentId: "ff08l-7"
})(["", ""], Object(_constants_styleBuilder__WEBPACK_IMPORTED_MODULE_4__["default"])({
  defaultStyle: 'display: none;',
  others: "\n        display: block;\n        width: 55px;\n        height: 55px;\n        position: fixed;\n        z-index: 2;\n        top: 25px;\n        right: 20px;\n        background-image: url(/static/phone.svg);\n        background-size: cover;\n    "
}));
/**
 * Quick close.
 */

var quickClose = function quickClose() {
  var menu = document.getElementById('menu');
  menu.checked = false;
};
/**
 * Header component.
 */


var Header = function Header() {
  return __jsx(HeaderWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(Hamburger, {
    alt: "menu",
    src: "/static/hamburger.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), __jsx("input", {
    id: "menu",
    type: "checkbox",
    name: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), __jsx(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(NavItem, {
    onClick: quickClose,
    href: "#services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Services"), __jsx(NavItem, {
    onClick: quickClose,
    href: "#reviews",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Reviews"), __jsx(NavItem, {
    onClick: quickClose,
    href: "#about-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "About us"), __jsx(NavItem, {
    onClick: quickClose,
    href: "#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Contact")), __jsx(Anchor, {
    href: "#services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Services"), __jsx(Anchor, {
    href: "#reviews",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Reviews"), __jsx(Logo, {
    alt: "logo",
    src: "/static/logo.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), __jsx(Anchor, {
    href: "#about-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "About us"), __jsx(Anchor, {
    href: "#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Contact"), __jsx(Phone, {
    href: "tel:508-360-5657",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "508-360-5657"), __jsx(MobilePhone, {
    href: "tel:508-360-5657",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.b811e138b954c6cfecae.hot-update.js.map