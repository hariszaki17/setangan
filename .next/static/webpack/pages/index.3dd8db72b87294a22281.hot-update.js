webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/price-card.js":
/*!**************************************!*\
  !*** ./src/components/price-card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PriceCard; });\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ \"./src/components/list.js\");\nvar _jsxFileName = \"/home/zakariya/Documents/sandBox/nextjs-LP/src/components/price-card.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction PriceCard(_ref) {\n  var _ref$data = _ref.data,\n      header = _ref$data.header,\n      name = _ref$data.name,\n      description = _ref$data.description,\n      priceWithUnit = _ref$data.priceWithUnit,\n      _ref$data$buttonText = _ref$data.buttonText,\n      buttonText = _ref$data$buttonText === void 0 ? 'Start Free Trial' : _ref$data$buttonText,\n      anotherOption = _ref$data.anotherOption,\n      points = _ref$data.points;\n  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Card\"], {\n    className: header ? 'package__card active' : 'package__card',\n    sx: styles.pricingBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, header && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Text\"], {\n    sx: styles.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 18\n    }\n  }, header), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    className: \"pacakge__header\",\n    sx: styles.pricingHeader,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Heading\"], {\n    className: \"package__name\",\n    variant: \"title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, name), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Text\"], {\n    as: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, description)), __jsx(_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    items: points,\n    childStyle: styles.listItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Text\"], {\n    className: \"package__price\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  })));\n}\n_c = PriceCard;\nvar styles = {\n  pricingBox: {\n    borderRadius: 20,\n    position: 'relative',\n    transition: 'all 0.3s',\n    p: ['35px 25px', null, null, '40px'],\n    width: ['100%', '75%', '100%'],\n    mb: '40px',\n    mt: '40px',\n    mx: [0, 'auto', 0],\n    '&:before': {\n      position: 'absolute',\n      content: \"''\",\n      width: '100%',\n      top: 0,\n      left: 0,\n      height: '100%',\n      border: '1px solid rgba(38, 78, 118, 0.1)',\n      borderRadius: 'inherit',\n      transition: 'all 0.3s',\n      zIndex: -1\n    },\n    '&:hover': {\n      boxShadow: '0px 4px 25px rgba(38, 78, 118, 0.1) !important',\n      '&:before': {\n        opacity: 0\n      }\n    }\n  },\n  header: {\n    height: ['28px', null, null, '32px'],\n    backgroundColor: 'yellow',\n    borderRadius: '5px',\n    fontWeight: 'bold',\n    fontSize: 1,\n    lineHeight: 1.2,\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    color: 'white',\n    position: 'absolute',\n    top: '-17px',\n    letterSpacing: '-.14px',\n    px: '12px'\n  },\n  pricingHeader: {\n    justifyContent: 'space-between',\n    alignItems: 'flex-start',\n    mb: ['30px', null, null, null, '40px'],\n    p: {\n      fontSize: [1, 2],\n      color: 'text',\n      lineHeight: 'heading'\n    },\n    '.package__name': {\n      marginBottom: [1, null, 2]\n    }\n  },\n  price: {\n    fontWeight: 500,\n    fontSize: [4, null, 5, null, '30px'],\n    lineHeight: 1,\n    letterSpacing: '-0.55px',\n    color: 'text',\n    marginBottom: 2,\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    pt: [4, 6],\n    '> span': {\n      position: 'relative',\n      pl: '3px',\n      display: 'inline-block',\n      fontSize: [1, 2],\n      fontWeight: 'normal'\n    }\n  },\n  listItem: {\n    fontFamily: 'DM Sans',\n    fontStyle: 'normal',\n    fontWeight: 'normal',\n    fontSize: [1, 2],\n    lineHeight: [1.75, 1.6],\n    mb: 3,\n    alignItems: 'flex-start',\n    color: 'text',\n    '&.closed': {\n      opacity: 0.55,\n      button: {\n        color: '#788FB5'\n      }\n    }\n  },\n  buttonGroup: {\n    textAlign: 'center',\n    mt: ['30px', null, null, null, '35px'],\n    '.free__trail': {\n      color: 'secondary',\n      width: '100%',\n      justifyContent: 'center',\n      fontWeight: 700,\n      fontSize: ['14px', 1],\n      p: '20px 0 0'\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"PriceCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcz83NmYxIl0sIm5hbWVzIjpbIlByaWNlQ2FyZCIsImRhdGEiLCJoZWFkZXIiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZVdpdGhVbml0IiwiYnV0dG9uVGV4dCIsImFub3RoZXJPcHRpb24iLCJwb2ludHMiLCJzdHlsZXMiLCJwcmljaW5nQm94IiwicHJpY2luZ0hlYWRlciIsImxpc3RJdGVtIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwicCIsIndpZHRoIiwibWIiLCJtdCIsIm14IiwiY29udGVudCIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJib3JkZXIiLCJ6SW5kZXgiLCJib3hTaGFkb3ciLCJvcGFjaXR5IiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsImxldHRlclNwYWNpbmciLCJweCIsIm1hcmdpbkJvdHRvbSIsInByaWNlIiwicHQiLCJwbCIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJidXR0b24iLCJidXR0b25Hcm91cCIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULE9BVVo7QUFBQSx1QkFUREMsSUFTQztBQUFBLE1BUkNDLE1BUUQsYUFSQ0EsTUFRRDtBQUFBLE1BUENDLElBT0QsYUFQQ0EsSUFPRDtBQUFBLE1BTkNDLFdBTUQsYUFOQ0EsV0FNRDtBQUFBLE1BTENDLGFBS0QsYUFMQ0EsYUFLRDtBQUFBLHVDQUpDQyxVQUlEO0FBQUEsTUFKQ0EsVUFJRCxxQ0FKYyxrQkFJZDtBQUFBLE1BSENDLGFBR0QsYUFIQ0EsYUFHRDtBQUFBLE1BRkNDLE1BRUQsYUFGQ0EsTUFFRDtBQUNELFNBQ0UsTUFBQyw2Q0FBRDtBQUNB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QUFDLElBQUQsRUFBTyxHQUFQLENBTEo7QUFNUmQsTUFBRSxFQUFFLENBTkk7QUFPUmdCLGNBQVUsRUFBRSxZQVBKO0FBUVJFLFNBQUssRUFBRSxNQVJDO0FBU1IsZ0JBQVk7QUFDVlIsYUFBTyxFQUFFLElBREM7QUFFVmlCLFlBQU0sRUFBRTtBQUNOVCxhQUFLLEVBQUU7QUFERDtBQUZFO0FBVEosR0E3RUc7QUE2RmJVLGFBQVcsRUFBRTtBQUNYQyxhQUFTLEVBQUUsUUFEQTtBQUVYNUIsTUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLE1BQTNCLENBRk87QUFHWCxvQkFBZ0I7QUFDZGlCLFdBQUssRUFBRSxXQURPO0FBRWRuQixXQUFLLEVBQUUsTUFGTztBQUdka0Isb0JBQWMsRUFBRSxRQUhGO0FBSWRMLGdCQUFVLEVBQUUsR0FKRTtBQUtkQyxjQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsQ0FBVCxDQUxJO0FBTWRmLE9BQUMsRUFBRTtBQU5XO0FBSEw7QUE3RkEsQ0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3ByaWNlLWNhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIENhcmQsIFRleHQsIEhlYWRpbmcsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljZUNhcmQoe1xuICBkYXRhOiB7XG4gICAgaGVhZGVyLFxuICAgIG5hbWUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgcHJpY2VXaXRoVW5pdCxcbiAgICBidXR0b25UZXh0ID0gJ1N0YXJ0IEZyZWUgVHJpYWwnLFxuICAgIGFub3RoZXJPcHRpb24sXG4gICAgcG9pbnRzLFxuICB9LFxufSkge1xuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgY2xhc3NOYW1lPXtoZWFkZXIgPyAncGFja2FnZV9fY2FyZCBhY3RpdmUnIDogJ3BhY2thZ2VfX2NhcmQnfVxuICAgIHN4PXtzdHlsZXMucHJpY2luZ0JveH1cbiAgICA+XG4gICAgICB7aGVhZGVyICYmIDxUZXh0IHN4PXtzdHlsZXMuaGVhZGVyfT57aGVhZGVyfTwvVGV4dD59XG4gICAgICA8Qm94PlxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cInBhY2FrZ2VfX2hlYWRlclwiIHN4PXtzdHlsZXMucHJpY2luZ0hlYWRlcn0+XG4gICAgICAgICAgPEhlYWRpbmcgY2xhc3NOYW1lPVwicGFja2FnZV9fbmFtZVwiIHZhcmlhbnQ9XCJ0aXRsZVwiPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxUZXh0IGFzPVwicFwiPntkZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8TGlzdFxuICAgICAgICBpdGVtcz17cG9pbnRzfVxuICAgICAgICBjaGlsZFN0eWxlPXtzdHlsZXMubGlzdEl0ZW19XG4gICAgICAgID48L0xpc3Q+XG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInBhY2thZ2VfX3ByaWNlXCI+PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9DYXJkPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHByaWNpbmdCb3g6IHtcbiAgICBib3JkZXJSYWRpdXM6IDIwLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gICAgcDogWyczNXB4IDI1cHgnLCBudWxsLCBudWxsLCAnNDBweCddLFxuICAgIHdpZHRoOiBbJzEwMCUnLCAnNzUlJywgJzEwMCUnXSxcbiAgICBtYjogJzQwcHgnLFxuICAgIG10OiAnNDBweCcsXG4gICAgbXg6IFswLCAnYXV0bycsIDBdLFxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogXCInJ1wiLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgICAgIHpJbmRleDogLTEsXG4gICAgfSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJveFNoYWRvdzogJzBweCA0cHggMjVweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpICFpbXBvcnRhbnQnLFxuICAgICAgJyY6YmVmb3JlJzoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBoZWFkZXI6IHtcbiAgICBoZWlnaHQ6IFsnMjhweCcsIG51bGwsIG51bGwsICczMnB4J10sXG4gICAgYmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMSxcbiAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICctMTdweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJy0uMTRweCcsXG4gICAgcHg6ICcxMnB4JyxcbiAgfSxcbiAgcHJpY2luZ0hlYWRlcjoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIG1iOiBbJzMwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnNDBweCddLFxuICAgIHA6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxuICAgIH0sXG4gICAgJy5wYWNrYWdlX19uYW1lJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiBbMSwgbnVsbCwgMl0sXG4gICAgfSxcbiAgfSxcbiAgcHJpY2U6IHtcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZm9udFNpemU6IFs0LCBudWxsLCA1LCBudWxsLCAnMzBweCddLFxuICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjU1cHgnLFxuICAgIGNvbG9yOiAndGV4dCcsXG4gICAgbWFyZ2luQm90dG9tOiAyLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcHQ6IFs0LCA2XSxcbiAgICAnPiBzcGFuJzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBwbDogJzNweCcsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICB9LFxuICB9LFxuICBsaXN0SXRlbToge1xuICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcbiAgICBmb250U3R5bGU6ICdub3JtYWwnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgbGluZUhlaWdodDogWzEuNzUsIDEuNl0sXG4gICAgbWI6IDMsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIGNvbG9yOiAndGV4dCcsXG4gICAgJyYuY2xvc2VkJzoge1xuICAgICAgb3BhY2l0eTogMC41NSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBjb2xvcjogJyM3ODhGQjUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBidXR0b25Hcm91cDoge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbXQ6IFsnMzBweCcsIG51bGwsIG51bGwsIG51bGwsICczNXB4J10sXG4gICAgJy5mcmVlX190cmFpbCc6IHtcbiAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgMV0sXG4gICAgICBwOiAnMjBweCAwIDAnLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/price-card.js\n");

/***/ })

})