"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/navbar/index.js ***!
  \****************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"./src/components/navbar/styles.module.css\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _config_redux_reducer_authReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/redux/reducer/authReducer */ \"./src/config/redux/reducer/authReducer/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Navbar() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const authState = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((store)=>store.auth);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2__.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2__.leftContainer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    onClick: ()=>router.push(\"/\"),\n                    children: \"NetConnect\"\n                }, void 0, false, {\n                    fileName: \"/home/rgukt/Music/WEB/NetConnect/client/src/components/navbar/index.js\",\n                    lineNumber: 12,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rgukt/Music/WEB/NetConnect/client/src/components/navbar/index.js\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2__.rightContainer,\n                children: [\n                    authState.profileFetched && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            gap: \"10px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2__.userName,\n                                children: [\n                                    \"hey,\",\n                                    authState.user.userId.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rgukt/Music/WEB/NetConnect/client/src/components/navbar/index.js\",\n                                lineNumber: 17,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                onClick: ()=>{\n                                    router.push(\"/profile\");\n                                },\n                                style: {\n                                    fontWeight: \"bold\",\n                                    cursor: \"pointer\"\n                                },\n                                children: \"Profile\"\n                            }, void 0, false, {\n                                fileName: \"/home/rgukt/Music/WEB/NetConnect/client/src/components/navbar/index.js\",\n                                lineNumber: 18,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                onClick: ()=>{\n                                    localStorage.removeItem(\"token\");\n                                    dispatch((0,_config_redux_reducer_authReducer__WEBPACK_IMPORTED_MODULE_3__.reset)());\n                                    router.push(\"/login\");\n                                },\n                                style: {\n                                    fontWeight: \"bold\",\n                                    cursor: \"pointer\"\n                                },\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"/home/rgukt/Music/WEB/NetConnect/client/src/components/navbar/index.js\",\n                                lineNumber: 21,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rgukt/Music/WEB/NetConnect/client/src/components/navbar/index.js\",\n                        lineNumber: 16,\n                        columnNumber: 6\n                    }, this),\n                    !authState.profileFetched && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>router.push(\"/login\"),\n                        children: \"Be a Part\"\n                    }, void 0, false, {\n                        fileName: \"/home/rgukt/Music/WEB/NetConnect/client/src/components/navbar/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rgukt/Music/WEB/NetConnect/client/src/components/navbar/index.js\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rgukt/Music/WEB/NetConnect/client/src/components/navbar/index.js\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, this);\n}\n_s(Navbar, \"e+EMObc2/ECw8bJAroUlGNl0KnQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDQTtBQUNlO0FBQ0k7QUFDM0QsU0FBU0s7O0lBQ1IsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU1PLFdBQVNMLHdEQUFXQTtJQUMxQixNQUFNTSxZQUFZTCx3REFBV0EsQ0FBQyxDQUFDTSxRQUFVQSxNQUFNQyxJQUFJO0lBQ25ELHFCQUNDLDhEQUFDQztRQUFJQyxXQUFXWCx5REFBZTs7MEJBQzlCLDhEQUFDYTtnQkFBSUYsV0FBV1gsNkRBQW1COzBCQUNsQyw0RUFBQ2U7b0JBQUdDLFNBQVMsSUFBTVgsT0FBT1ksSUFBSSxDQUFDOzhCQUFNOzs7Ozs7Ozs7OzswQkFFdEMsOERBQUNKO2dCQUFJRixXQUFXWCw4REFBb0I7O29CQUNsQ08sVUFBVVksY0FBYyxrQkFDeEIsOERBQUNOO3dCQUFJYixPQUFPOzRCQUFFb0IsU0FBUzs0QkFBUUMsS0FBSzt3QkFBTzs7MENBQzFDLDhEQUFDQztnQ0FBRVgsV0FBV1gsd0RBQWM7O29DQUFFO29DQUFLTyxVQUFVaUIsSUFBSSxDQUFDQyxNQUFNLENBQUNDLElBQUk7Ozs7Ozs7MENBQzdELDhEQUFDSjtnQ0FBRU4sU0FBUztvQ0FDWFgsT0FBT1ksSUFBSSxDQUFDO2dDQUNiO2dDQUFHakIsT0FBTztvQ0FBQzJCLFlBQVc7b0NBQU9DLFFBQU87Z0NBQVM7MENBQUc7Ozs7OzswQ0FDaEQsOERBQUNOO2dDQUFFTixTQUFTO29DQUNYYSxhQUFhQyxVQUFVLENBQUM7b0NBQ3hCeEIsU0FBU0gsd0VBQUtBO29DQUNkRSxPQUFPWSxJQUFJLENBQUM7Z0NBQ2I7Z0NBQUdqQixPQUFPO29DQUFDMkIsWUFBVztvQ0FBT0MsUUFBTztnQ0FBUzswQ0FBRzs7Ozs7Ozs7Ozs7O29CQUlqRCxDQUFDckIsVUFBVVksY0FBYyxrQkFDekIsOERBQUNOO3dCQUFJRyxTQUFTLElBQU1YLE9BQU9ZLElBQUksQ0FBQztrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hEO0dBOUJTYjs7UUFDT0wsa0RBQVNBO1FBQ1RFLG9EQUFXQTtRQUNSQyxvREFBV0E7OztLQUhyQkU7QUFnQ1QsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL2luZGV4LmpzPzgwNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgcmVzZXQgfSBmcm9tIFwiQC9jb25maWcvcmVkdXgvcmVkdWNlci9hdXRoUmVkdWNlclwiO1xuZnVuY3Rpb24gTmF2YmFyKCkge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgZGlzcGF0Y2g9dXNlRGlzcGF0Y2goKTtcblx0Y29uc3QgYXV0aFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0b3JlKSA9PiBzdG9yZS5hdXRoKTtcblx0cmV0dXJuIChcblx0XHQ8bmF2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sZWZ0Q29udGFpbmVyfT5cblx0XHRcdFx0PGgxIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX0+TmV0Q29ubmVjdDwvaDE+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yaWdodENvbnRhaW5lcn0+XG5cdFx0XHRcdHthdXRoU3RhdGUucHJvZmlsZUZldGNoZWQgJiYgKFxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogXCIxMHB4XCIgfX0+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlLnVzZXJOYW1lfT5oZXkse2F1dGhTdGF0ZS51c2VyLnVzZXJJZC5uYW1lfTwvcD5cblx0XHRcdFx0XHRcdDxwIG9uQ2xpY2s9eygpPT57XG5cdFx0XHRcdFx0XHRcdHJvdXRlci5wdXNoKFwiL3Byb2ZpbGVcIilcblx0XHRcdFx0XHRcdH19IHN0eWxlPXt7Zm9udFdlaWdodDpcImJvbGRcIixjdXJzb3I6XCJwb2ludGVyXCJ9fT5Qcm9maWxlPC9wPlxuXHRcdFx0XHRcdFx0PHAgb25DbGljaz17KCk9Pntcblx0XHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcblx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2gocmVzZXQoKSk7XG5cdFx0XHRcdFx0XHRcdHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuXHRcdFx0XHRcdFx0fX0gc3R5bGU9e3tmb250V2VpZ2h0OlwiYm9sZFwiLGN1cnNvcjpcInBvaW50ZXJcIn19PkxvZ291dDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblxuXHRcdFx0XHR7IWF1dGhTdGF0ZS5wcm9maWxlRmV0Y2hlZCAmJiAoXG5cdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9sb2dpblwiKX0+QmUgYSBQYXJ0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25hdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInN0eWxlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInJlc2V0IiwiTmF2YmFyIiwicm91dGVyIiwiZGlzcGF0Y2giLCJhdXRoU3RhdGUiLCJzdG9yZSIsImF1dGgiLCJuYXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJkaXYiLCJsZWZ0Q29udGFpbmVyIiwiaDEiLCJvbkNsaWNrIiwicHVzaCIsInJpZ2h0Q29udGFpbmVyIiwicHJvZmlsZUZldGNoZWQiLCJkaXNwbGF5IiwiZ2FwIiwicCIsInVzZXJOYW1lIiwidXNlciIsInVzZXJJZCIsIm5hbWUiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/navbar/index.js\n"));

/***/ })

});