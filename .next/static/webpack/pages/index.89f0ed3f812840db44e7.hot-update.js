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

/***/ "./src/sections/key-feature.js":
/*!*************************************!*\
  !*** ./src/sections/key-feature.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ KeyFeature; }\n/* harmony export */ });\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/feature-card-column.js */ \"./src/components/feature-card-column.js\");\n/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/key-feature/performance.svg */ \"./src/assets/key-feature/performance.svg\");\n/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/key-feature/partnership.svg */ \"./src/assets/key-feature/partnership.svg\");\n/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/key-feature/subscription.svg */ \"./src/assets/key-feature/subscription.svg\");\n/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/key-feature/support.svg */ \"./src/assets/key-feature/support.svg\");\n/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/zakariya/Documents/sandBox/nextjs-LP/src/sections/key-feature.js\";\n\n/** @jsxRuntime classic */\n// /** @jsx jsx */\n\n\n\n\n\n\n\n\nvar data = [{\n  id: 1,\n  imgSrc: (assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_2___default()),\n  altText: '100% Stoneware Clay',\n  title: '100% Stoneware Clay',\n  text: 'Our product made by a pure stoneware clay provides more durable material'\n}, {\n  id: 2,\n  imgSrc: (assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_3___default()),\n  altText: 'Simple and Easy to Use',\n  title: 'Simple and Easy to Use',\n  text: \"Since setangan is a ready to use clay, you won't needed any tools to create your own clay craft\"\n}, {\n  id: 3,\n  imgSrc: (assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_4___default()),\n  altText: 'Complete Clay Kit',\n  title: 'Complete Clay Kit',\n  text: ''\n}, {\n  id: 4,\n  imgSrc: (assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_5___default()),\n  altText: 'Customer Support',\n  title: 'Customer Support',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}];\nfunction KeyFeature() {\n  var _this = this;\n\n  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"section\", {\n    sx: {\n      variant: 'section.keyFeature'\n    },\n    id: \"feature\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 4\n    }\n  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_6__.Container, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 6\n    }\n  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_section_header__WEBPACK_IMPORTED_MODULE_0__.default, {\n    slogan: \"About\",\n    title: \"Setangan's Clat\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 8\n    }\n  }), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n    sx: styles.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 8\n    }\n  }, data.map(function (item, i) {\n    return (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_1__.default, {\n      key: item.id,\n      src: item.imgSrc,\n      alt: item.altText,\n      title: item.title,\n      text: item.text,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 12\n      }\n    });\n  }))));\n}\n_c = KeyFeature;\nvar styles = {\n  grid: {\n    width: ['100%', '80%', '100%'],\n    mx: 'auto',\n    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],\n    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"KeyFeature\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy9rZXktZmVhdHVyZS5qcz9kOTkxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG5cbi8vIC8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XG5pbXBvcnQgRmVhdHVyZUNhcmRDb2x1bW4gZnJvbSAnY29tcG9uZW50cy9mZWF0dXJlLWNhcmQtY29sdW1uLmpzJztcbmltcG9ydCBQZXJmb3JtYW5jZSBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvcGVyZm9ybWFuY2Uuc3ZnJztcbmltcG9ydCBQYXJ0bmVyc2hpcCBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvcGFydG5lcnNoaXAuc3ZnJztcbmltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3N1YnNjcmlwdGlvbi5zdmcnO1xuaW1wb3J0IFN1cHBvcnQgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3N1cHBvcnQuc3ZnJztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGltZ1NyYzogUGVyZm9ybWFuY2UsXG4gICAgYWx0VGV4dDogJzEwMCUgU3RvbmV3YXJlIENsYXknLFxuICAgIHRpdGxlOiAnMTAwJSBTdG9uZXdhcmUgQ2xheScsXG4gICAgdGV4dDpcbiAgICAgICdPdXIgcHJvZHVjdCBtYWRlIGJ5IGEgcHVyZSBzdG9uZXdhcmUgY2xheSBwcm92aWRlcyBtb3JlIGR1cmFibGUgbWF0ZXJpYWwnLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaW1nU3JjOiBQYXJ0bmVyc2hpcCxcbiAgICBhbHRUZXh0OiAnU2ltcGxlIGFuZCBFYXN5IHRvIFVzZScsXG4gICAgdGl0bGU6ICdTaW1wbGUgYW5kIEVhc3kgdG8gVXNlJyxcbiAgICB0ZXh0OlxuICAgICAgXCJTaW5jZSBzZXRhbmdhbiBpcyBhIHJlYWR5IHRvIHVzZSBjbGF5LCB5b3Ugd29uJ3QgbmVlZGVkIGFueSB0b29scyB0byBjcmVhdGUgeW91ciBvd24gY2xheSBjcmFmdFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaW1nU3JjOiBTdWJzY3JpcHRpb24sXG4gICAgYWx0VGV4dDogJ0NvbXBsZXRlIENsYXkgS2l0JyxcbiAgICB0aXRsZTogJ0NvbXBsZXRlIENsYXkgS2l0JyxcbiAgICB0ZXh0OlxuICAgICAgJycsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBpbWdTcmM6IFN1cHBvcnQsXG4gICAgYWx0VGV4dDogJ0N1c3RvbWVyIFN1cHBvcnQnLFxuICAgIHRpdGxlOiAnQ3VzdG9tZXIgU3VwcG9ydCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtleUZlYXR1cmUoKSB7XG4gIHJldHVybiAoXG4gICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5rZXlGZWF0dXJlJyB9fSBpZD1cImZlYXR1cmVcIj5cbiAgICAgPENvbnRhaW5lcj5cbiAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgIHNsb2dhbj1cIkFib3V0XCJcbiAgICAgICB0aXRsZT1cIlNldGFuZ2FuJ3MgQ2xhdFwiXG4gICAgICAgLz5cblxuICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgPEZlYXR1cmVDYXJkQ29sdW1uXG4gICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgc3JjPXtpdGVtLmltZ1NyY31cbiAgICAgICAgICAgYWx0PXtpdGVtLmFsdFRleHR9XG4gICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XG4gICAgICAgICAgIC8+XG4gICAgICAgICApKX1cbiAgICAgICA8L0dyaWQ+XG4gICAgIDwvQ29udGFpbmVyPlxuICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGdyaWQ6IHtcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXG4gICAgbXg6ICdhdXRvJyxcbiAgICBncmlkR2FwOiBbXG4gICAgICAnMzVweCAwJyxcbiAgICAgIG51bGwsXG4gICAgICAnNDBweCA0MHB4JyxcbiAgICAgICc1MHB4IDYwcHgnLFxuICAgICAgJzMwcHgnLFxuICAgICAgJzUwcHggNDBweCcsXG4gICAgICAnNTVweCA5MHB4JyxcbiAgICBdLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDIsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCg0LDFmciknLFxuICAgIF0sXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbImpzeCIsIkNvbnRhaW5lciIsIkdyaWQiLCJTZWN0aW9uSGVhZGVyIiwiRmVhdHVyZUNhcmRDb2x1bW4iLCJQZXJmb3JtYW5jZSIsIlBhcnRuZXJzaGlwIiwiU3Vic2NyaXB0aW9uIiwiU3VwcG9ydCIsImRhdGEiLCJpZCIsImltZ1NyYyIsImFsdFRleHQiLCJ0aXRsZSIsInRleHQiLCJLZXlGZWF0dXJlIiwidmFyaWFudCIsInN0eWxlcyIsImdyaWQiLCJtYXAiLCJpdGVtIiwiaSIsIndpZHRoIiwibXgiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sections/key-feature.js\n");

/***/ })

});