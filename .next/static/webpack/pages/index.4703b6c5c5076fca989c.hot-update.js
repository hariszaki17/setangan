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

/***/ "./src/sections/workflow.js":
/*!**********************************!*\
  !*** ./src/sections/workflow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WorkFlow; }\n/* harmony export */ });\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/patternBG.png */ \"./src/assets/patternBG.png\");\n/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/arrowOdd.svg */ \"./src/assets/arrowOdd.svg\");\n/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/arrowEven.svg */ \"./src/assets/arrowEven.svg\");\n/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/zakariya/Documents/sandBox/nextjs-LP/src/sections/workflow.js\";\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\n\n\nvar data = [{\n  id: 1,\n  title: 'Set disbursement Instructions',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}, {\n  id: 2,\n  title: 'Assembly retrieves funds from your account',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}, {\n  id: 3,\n  title: 'Assembly initiates disbursement',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}, {\n  id: 4,\n  title: 'Customer receives funds payment',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}];\nfunction WorkFlow() {\n  var _this = this;\n\n  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"section\", {\n    sx: styles.workflow,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_section_header__WEBPACK_IMPORTED_MODULE_0__.default, {\n    slogan: \"The Tips\",\n    title: \"Meet the feature of out product\",\n    isWhite: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }), (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n    sx: styles.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, data.map(function (item) {\n    return (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      sx: styles.card,\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 15\n      }\n    }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      sx: styles.iconBox,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }\n    }, \"0\".concat(item.id)), (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      sx: styles.wrapper,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }\n    }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n      sx: styles.wrapper.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 19\n      }\n    }, item.title), (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_4__.Text, {\n      sx: styles.wrapper.subTitle,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 19\n      }\n    }, item.text)));\n  }))));\n}\n_c = WorkFlow;\nvar styles = {\n  workflow: {\n    backgroundColor: 'primary',\n    backgroundImage: \"url(\".concat((assets_patternBG_png__WEBPACK_IMPORTED_MODULE_1___default()), \")\"),\n    backgroundRepeat: \"no-repeat\",\n    backgroundPosition: 'center center',\n    backgroundSize: 'cover',\n    position: 'relative',\n    py: [8, null, 9, null, null, 10]\n  },\n  grid: {\n    mb: -1,\n    pt: 0,\n    gridGap: ['35px 0', null, '45px 30px', null, '50px 25px', null, null, '50px 65px'],\n    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']\n  },\n  card: {\n    display: 'flex',\n    flexDirection: 'column',\n    position: 'relative',\n    textAlign: ['center', null, 'left'],\n    width: ['100%', '80%', '100%'],\n    mx: ['auto'],\n    px: [4, null, null, 0],\n    '&::before': {\n      position: 'absolute',\n      content: '\"\"',\n      top: 0,\n      left: [0, null, null, null, null, 72, null, 90],\n      backgroundRepeat: \"no-repeat\",\n      backgroundPosition: 'center center',\n      width: 215,\n      height: 60,\n      '@media screen and (max-width:1220px)': {\n        display: 'none'\n      }\n    },\n    '&:nth-of-type(2n-1)::before': {\n      backgroundImage: \"url(\".concat((assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_2___default()), \")\")\n    },\n    '&:nth-of-type(2n)::before': {\n      backgroundImage: \"url(\".concat((assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_3___default()), \")\"),\n      top: 17\n    },\n    '&:last-child::before': {\n      display: 'none'\n    }\n  },\n  iconBox: {\n    width: ['50px', null, '60px', null, null, '70px'],\n    height: ['50px', null, '60px', null, null, '70px'],\n    flexShrink: 0,\n    borderRadius: [15, null, 23, null, null, 30],\n    backgroundColor: 'white',\n    display: 'flex',\n    alignItems: 'center',\n    mb: [5, null, null, null, null, 6],\n    mx: ['auto', null, 0],\n    fontSize: [6, null, 7, null, null, '30px'],\n    fontWeight: 700,\n    justifyContent: 'center',\n    color: '#234582'\n  },\n  wrapper: {\n    width: '100%',\n    display: 'flex',\n    flexDirection: 'column',\n    mt: '-5px',\n    title: {\n      fontSize: [3, null, 4, null, null, 5],\n      color: 'white',\n      lineHeight: [1.4, null, null, null, null, 1.55],\n      pr: [0, null, null, null, null, 2],\n      mb: [2, 3]\n    },\n    subTitle: {\n      fontSize: 1,\n      fontWeight: 400,\n      lineHeight: [1.85, null, null, 1.9, 2],\n      color: 'white',\n      opacity: 0.75,\n      pr: [0, null, null, null, null, 5]\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"WorkFlow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNUkQsTUFBQUEsRUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLENBQTVCO0FBTkk7QUFiSDtBQS9FSSxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy93b3JrZmxvdy5qcz8zNjM5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcblxuaW1wb3J0IFBhdHRlcm5CRyBmcm9tICdhc3NldHMvcGF0dGVybkJHLnBuZyc7XG5pbXBvcnQgQXJyb3dPZGQgZnJvbSAnYXNzZXRzL2Fycm93T2RkLnN2Zyc7XG5pbXBvcnQgQXJyb3dFdmVuIGZyb20gJ2Fzc2V0cy9hcnJvd0V2ZW4uc3ZnJztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnU2V0IGRpc2J1cnNlbWVudCBJbnN0cnVjdGlvbnMnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogJ0Fzc2VtYmx5IHJldHJpZXZlcyBmdW5kcyBmcm9tIHlvdXIgYWNjb3VudCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiAnQXNzZW1ibHkgaW5pdGlhdGVzIGRpc2J1cnNlbWVudCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiAnQ3VzdG9tZXIgcmVjZWl2ZXMgZnVuZHMgcGF5bWVudCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtGbG93KCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMud29ya2Zsb3d9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgc2xvZ2FuPVwiVGhlIFRpcHNcIlxuICAgICAgICB0aXRsZT1cIk1lZXQgdGhlIGZlYXR1cmUgb2Ygb3V0IHByb2R1Y3RcIlxuICAgICAgICBpc1doaXRlPXt0cnVlfVxuICAgICAgICAvPlxuXG4gICAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICAgIHtkYXRhLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmljb25Cb3h9PlxuICAgICAgICAgICAgICAgICAge2AwJHtpdGVtLmlkfWB9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57aXRlbS50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntpdGVtLnRleHR9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICB3b3JrZmxvdzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcbiAgfSxcbiAgZ3JpZDoge1xuICAgIG1iOiAtMSxcbiAgICBwdDogMCxcbiAgICBncmlkR2FwOiBbXG4gICAgICAnMzVweCAwJyxcbiAgICAgIG51bGwsXG4gICAgICAnNDVweCAzMHB4JyxcbiAgICAgIG51bGwsXG4gICAgICAnNTBweCAyNXB4JyxcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgJzUwcHggNjVweCcsXG4gICAgXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDEsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoNCwxZnIpJyxcbiAgICBdLFxuICB9LFxuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCAnbGVmdCddLFxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcbiAgICBteDogWydhdXRvJ10sXG4gICAgcHg6IFs0LCBudWxsLCBudWxsLCAwXSxcbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNzIsIG51bGwsIDkwXSxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4gICAgICB3aWR0aDogMjE1LFxuICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMjBweCknOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJjpudGgtb2YtdHlwZSgybi0xKTo6YmVmb3JlJzoge1xuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QXJyb3dPZGR9KWAsXG4gICAgfSxcbiAgICAnJjpudGgtb2YtdHlwZSgybik6OmJlZm9yZSc6IHtcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93RXZlbn0pYCxcbiAgICAgIHRvcDogMTcsXG4gICAgfSxcbiAgICAnJjpsYXN0LWNoaWxkOjpiZWZvcmUnOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcblxuICBpY29uQm94OiB7XG4gICAgd2lkdGg6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcbiAgICBoZWlnaHQ6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIGJvcmRlclJhZGl1czogWzE1LCBudWxsLCAyMywgbnVsbCwgbnVsbCwgMzBdLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcbiAgICBteDogWydhdXRvJywgbnVsbCwgMF0sXG4gICAgZm9udFNpemU6IFs2LCBudWxsLCA3LCBudWxsLCBudWxsLCAnMzBweCddLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgY29sb3I6ICcjMjM0NTgyJyxcbiAgfSxcbiAgd3JhcHBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG10OiAnLTVweCcsXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgNCwgbnVsbCwgbnVsbCwgNV0sXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNTVdLFxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIG1iOiBbMiwgM10sXG4gICAgfSxcblxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogMSxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAxLjksIDJdLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBvcGFjaXR5OiAwLjc1LFxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA1XSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJqc3giLCJDb250YWluZXIiLCJHcmlkIiwiQm94IiwiSGVhZGluZyIsIlRleHQiLCJTZWN0aW9uSGVhZGVyIiwiUGF0dGVybkJHIiwiQXJyb3dPZGQiLCJBcnJvd0V2ZW4iLCJkYXRhIiwiaWQiLCJ0aXRsZSIsInRleHQiLCJXb3JrRmxvdyIsInN0eWxlcyIsIndvcmtmbG93IiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJjYXJkIiwiaWNvbkJveCIsIndyYXBwZXIiLCJzdWJUaXRsZSIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsInBvc2l0aW9uIiwicHkiLCJtYiIsInB0IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInRleHRBbGlnbiIsIndpZHRoIiwibXgiLCJweCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiZmxleFNocmluayIsImJvcmRlclJhZGl1cyIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwibXQiLCJsaW5lSGVpZ2h0IiwicHIiLCJvcGFjaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/workflow.js\n");

/***/ })

});