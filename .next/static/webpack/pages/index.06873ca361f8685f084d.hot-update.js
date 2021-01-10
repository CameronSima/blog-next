webpackHotUpdate_N_E("pages/index",{

/***/ "./components/post-preview.js":
/*!************************************!*\
  !*** ./components/post-preview.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostPreview; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/avatar */ \"./components/avatar.js\");\n/* harmony import */ var _components_date_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date-formatter */ \"./components/date-formatter.js\");\n/* harmony import */ var _cover_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cover-image */ \"./components/cover-image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/cameron/dev/blog-next/components/post-preview.js\";\n\n\n\n\nfunction PostPreview(_ref) {\n  var title = _ref.title,\n      coverImage = _ref.coverImage,\n      date = _ref.date,\n      excerpt = _ref.excerpt,\n      author = _ref.author,\n      slug = _ref.slug;\n\n  var coverImageComp = coverImage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_cover_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    slug: slug,\n    title: title,\n    src: coverImage,\n    height: 278,\n    width: 556\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"mb-5\",\n      children: coverImageComp\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      className: \"text-3xl font-bold mb-3 leading-snug\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        as: \"/posts/\".concat(slug),\n        href: \"/posts/[slug]\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: \"hover:underline\",\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"text-lg mb-4\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_date_formatter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        dateString: date\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"text-lg leading-relaxed mb-4\",\n      children: excerpt\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n}\n_c = PostPreview;\n\nvar _c;\n\n$RefreshReg$(_c, \"PostPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LXByZXZpZXcuanM/M2JmYyJdLCJuYW1lcyI6WyJQb3N0UHJldmlldyIsInRpdGxlIiwiY292ZXJJbWFnZSIsImRhdGUiLCJleGNlcnB0IiwiYXV0aG9yIiwic2x1ZyIsImNvdmVySW1hZ2VDb21wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxPQU9aO0FBQUEsTUFOREMsS0FNQyxRQU5EQSxLQU1DO0FBQUEsTUFMREMsVUFLQyxRQUxEQSxVQUtDO0FBQUEsTUFKREMsSUFJQyxRQUpEQSxJQUlDO0FBQUEsTUFIREMsT0FHQyxRQUhEQSxPQUdDO0FBQUEsTUFGREMsTUFFQyxRQUZEQSxNQUVDO0FBQUEsTUFEREMsSUFDQyxRQUREQSxJQUNDOztBQUNELE1BQU1DLGNBQWMsR0FDbEJMLFVBQVUsaUJBQ1YscUVBQUMsb0RBQUQ7QUFDRSxRQUFJLEVBQUVJLElBRFI7QUFFRSxTQUFLLEVBQUVMLEtBRlQ7QUFHRSxPQUFHLEVBQUVDLFVBSFA7QUFJRSxVQUFNLEVBQUUsR0FKVjtBQUtFLFNBQUssRUFBRTtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjs7QUFVQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSxnQkFDR0s7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFJLGVBQVMsRUFBQyxzQ0FBZDtBQUFBLDZCQUNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBRSxtQkFBWUQsSUFBWixDQUFSO0FBQTRCLFlBQUksRUFBQyxlQUFqQztBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyxpQkFBYjtBQUFBLG9CQUFnQ0w7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFTRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsNkJBQ0UscUVBQUMsa0VBQUQ7QUFBZSxrQkFBVSxFQUFFRTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBWUU7QUFBRyxlQUFTLEVBQUMsOEJBQWI7QUFBQSxnQkFBNkNDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDtLQW5DdUJKLFciLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QtcHJldmlldy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tcG9uZW50cy9hdmF0YXInXG5pbXBvcnQgRGF0ZUZvcm1hdHRlciBmcm9tICcuLi9jb21wb25lbnRzL2RhdGUtZm9ybWF0dGVyJ1xuaW1wb3J0IENvdmVySW1hZ2UgZnJvbSAnLi9jb3Zlci1pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFByZXZpZXcoe1xuICB0aXRsZSxcbiAgY292ZXJJbWFnZSxcbiAgZGF0ZSxcbiAgZXhjZXJwdCxcbiAgYXV0aG9yLFxuICBzbHVnLFxufSkge1xuICBjb25zdCBjb3ZlckltYWdlQ29tcCA9IChcbiAgICBjb3ZlckltYWdlICYmXG4gICAgPENvdmVySW1hZ2VcbiAgICAgIHNsdWc9e3NsdWd9XG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBzcmM9e2NvdmVySW1hZ2V9XG4gICAgICBoZWlnaHQ9ezI3OH1cbiAgICAgIHdpZHRoPXs1NTZ9XG4gICAgLz5cbiAgKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAge2NvdmVySW1hZ2VDb21wfVxuICAgICAgPC9kaXY+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTMgbGVhZGluZy1zbnVnXCI+XG4gICAgICAgIDxMaW5rIGFzPXtgL3Bvc3RzLyR7c2x1Z31gfSBocmVmPVwiL3Bvc3RzL1tzbHVnXVwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPnt0aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgbWItNFwiPlxuICAgICAgICA8RGF0ZUZvcm1hdHRlciBkYXRlU3RyaW5nPXtkYXRlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYi00XCI+e2V4Y2VycHR9PC9wPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/post-preview.js\n");

/***/ })

})