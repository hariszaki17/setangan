"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/feature-card.js":
/*!****************************************!*\
  !*** ./src/components/feature-card.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FeatureCard; }\n/* harmony export */ });\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/zakariya/Documents/sandBox/nextjs-LP/src/components/feature-card.js\";\n\n/** @jsxRuntime classic */\n// /** @jsx jsx */\n\nfunction FeatureCard(_ref) {\n  var src = _ref.src,\n      _ref$altText = _ref.altText,\n      altText = _ref$altText === void 0 ? 'default alt text' : _ref$altText,\n      title = _ref.title,\n      text = _ref.text;\n  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {\n    sx: styles.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Image, {\n    src: src,\n    altText: altText,\n    sx: styles.img,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }), (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {\n    sx: styles.wrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Heading, {\n    sx: styles.wrapper.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, title), (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {\n    sx: styles.wrapper.subTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, text)));\n}\n_c = FeatureCard;\nvar styles = {\n  card: {\n    display: 'flex',\n    alignItems: 'flex-start',\n    mb: -1\n  },\n  img: {\n    width: ['100px', null, null, '180px', '200px'],\n    height: 'auto',\n    flexShrink: 0,\n    mr: [2, 3, null, null, 4, 5],\n    ml: -2,\n    borderRadius: ''\n  },\n  wrapper: {\n    width: '100%',\n    display: 'flex',\n    flexDirection: 'column',\n    mt: '-5px',\n    title: {\n      fontSize: [2, 3],\n      color: 'heading_secondary',\n      lineHeight: 1.4,\n      fontWeight: 700,\n      mb: ['10px', null, '15px']\n    },\n    subTitle: {\n      fontSize: [1, '15px'],\n      fontWeight: 400,\n      lineHeight: '1.9'\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"FeatureCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuXG4vLyAvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgSW1hZ2UsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZUNhcmQoe1xuICBzcmMsXG4gIGFsdFRleHQgPSAnZGVmYXVsdCBhbHQgdGV4dCcsXG4gIHRpdGxlLFxuICB0ZXh0LFxufSkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxJbWFnZSBzcmM9e3NyY30gYWx0VGV4dD17YWx0VGV4dH0gc3g9e3N0eWxlcy5pbWd9IC8+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e3RpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57dGV4dH08L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBtYjogLTEsXG4gIH0sXG5cbiAgaW1nOiB7XG4gICAgd2lkdGg6IFsnMTAwcHgnLCBudWxsLCBudWxsLCAnMTgwcHgnLCAnMjAwcHgnXSxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG1yOiBbMiwgMywgbnVsbCwgbnVsbCwgNCwgNV0sXG4gICAgbWw6IC0yLFxuICAgIGJvcmRlclJhZGl1czogJydcbiAgfSxcbiAgd3JhcHBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG10OiAnLTVweCcsXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbMiwgM10sXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIG1iOiBbJzEwcHgnLCBudWxsLCAnMTVweCddLFxuICAgIH0sXG5cbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IFsxLCAnMTVweCddLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGluZUhlaWdodDogJzEuOScsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsianN4IiwiSW1hZ2UiLCJCb3giLCJIZWFkaW5nIiwiVGV4dCIsIkZlYXR1cmVDYXJkIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwidGV4dCIsInN0eWxlcyIsImNhcmQiLCJpbWciLCJ3cmFwcGVyIiwic3ViVGl0bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1iIiwid2lkdGgiLCJoZWlnaHQiLCJmbGV4U2hyaW5rIiwibXIiLCJtbCIsImJvcmRlclJhZGl1cyIsImZsZXhEaXJlY3Rpb24iLCJtdCIsImZvbnRTaXplIiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/feature-card.js\n");

/***/ })

});