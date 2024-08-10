/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/ErrorBoundary/ErrorBoundary.tsx":
/*!********************************************************!*\
  !*** ./src/components/ErrorBoundary/ErrorBoundary.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            hasError: false,\n            error: null,\n            errorInfo: null\n        };\n    }\n    componentDidCatch(error, errorInfo) {\n        this.setState({\n            hasError: true,\n            error: error,\n            errorInfo: errorInfo\n        });\n    }\n    render() {\n        if (this.state.hasError) {\n            return this.props.fallback;\n        }\n        return this.props.children;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5L0Vycm9yQm91bmRhcnkudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRTtBQWF0RSxNQUFNQyxzQkFBc0JELDRDQUFTQTtJQUNuQ0UsWUFBWUMsS0FBeUIsQ0FBRTtRQUNyQyxLQUFLLENBQUNBO1FBRU4sSUFBSSxDQUFDQyxLQUFLLEdBQUc7WUFDWEMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLFdBQVc7UUFDYjtJQUNGO0lBRUFDLGtCQUFrQkYsS0FBWSxFQUFFQyxTQUFvQixFQUFRO1FBQzFELElBQUksQ0FBQ0UsUUFBUSxDQUFDO1lBQ1pKLFVBQVU7WUFDVkMsT0FBT0E7WUFDUEMsV0FBV0E7UUFDYjtJQUNGO0lBRUFHLFNBQW9CO1FBQ2xCLElBQUksSUFBSSxDQUFDTixLQUFLLENBQUNDLFFBQVEsRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQ0YsS0FBSyxDQUFDUSxRQUFRO1FBQzVCO1FBRUEsT0FBTyxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsUUFBUTtJQUM1QjtBQUNGO0FBRUEsaUVBQWVYLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zcmMvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5L0Vycm9yQm91bmRhcnkudHN4P2YxYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFcnJvckluZm8sIFJlYWN0Tm9kZSwgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgRXJyb3JCb3VuZGFyeVByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgZmFsbGJhY2s6IFJlYWN0RWxlbWVudDx7IGVycm9yOiBFcnJvciB8IG51bGw7IGVycm9ySW5mbzogRXJyb3JJbmZvIHwgbnVsbCB9Pjtcbn1cblxuaW50ZXJmYWNlIEVycm9yQm91bmRhcnlTdGF0ZSB7XG4gIGhhc0Vycm9yOiBib29sZWFuO1xuICBlcnJvcjogRXJyb3IgfCBudWxsO1xuICBlcnJvckluZm86IEVycm9ySW5mbyB8IG51bGw7XG59XG5cbmNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBDb21wb25lbnQ8RXJyb3JCb3VuZGFyeVByb3BzLCBFcnJvckJvdW5kYXJ5U3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IEVycm9yQm91bmRhcnlQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIGVycm9ySW5mbzogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBlcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaGFzRXJyb3I6IHRydWUsXG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgICBlcnJvckluZm86IGVycm9ySW5mbyxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5mYWxsYmFjaztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5O1xuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkVycm9yQm91bmRhcnkiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJoYXNFcnJvciIsImVycm9yIiwiZXJyb3JJbmZvIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJzZXRTdGF0ZSIsInJlbmRlciIsImZhbGxiYWNrIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ErrorBoundary/ErrorBoundary.tsx\n");

/***/ }),

/***/ "./src/components/ErrorBoundary/ErrorContent.tsx":
/*!*******************************************************!*\
  !*** ./src/components/ErrorBoundary/ErrorContent.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ErrorContent({ error, errorInfo }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"errorContWrap\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"errorCont\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/error.jpg\",\n                    alt: \"Error\",\n                    className: \"errorCont_img\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ОБУЧЕНИЕ\\\\FrontEnd\\\\RSschool\\\\Stage-3\\\\lipan4836-REACT2024Q3\\\\src\\\\components\\\\ErrorBoundary\\\\ErrorContent.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"errorCont_text\",\n                    children: \"Ooops!.. Something gone wrong. Please, reload page\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ОБУЧЕНИЕ\\\\FrontEnd\\\\RSschool\\\\Stage-3\\\\lipan4836-REACT2024Q3\\\\src\\\\components\\\\ErrorBoundary\\\\ErrorContent.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"errorCont_message\",\n                    children: error.toString()\n                }, void 0, false, {\n                    fileName: \"E:\\\\ОБУЧЕНИЕ\\\\FrontEnd\\\\RSschool\\\\Stage-3\\\\lipan4836-REACT2024Q3\\\\src\\\\components\\\\ErrorBoundary\\\\ErrorContent.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 19\n                }, this),\n                errorInfo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                    className: \"errorCont_stack\",\n                    children: errorInfo.componentStack\n                }, void 0, false, {\n                    fileName: \"E:\\\\ОБУЧЕНИЕ\\\\FrontEnd\\\\RSschool\\\\Stage-3\\\\lipan4836-REACT2024Q3\\\\src\\\\components\\\\ErrorBoundary\\\\ErrorContent.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 23\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\ОБУЧЕНИЕ\\\\FrontEnd\\\\RSschool\\\\Stage-3\\\\lipan4836-REACT2024Q3\\\\src\\\\components\\\\ErrorBoundary\\\\ErrorContent.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\ОБУЧЕНИЕ\\\\FrontEnd\\\\RSschool\\\\Stage-3\\\\lipan4836-REACT2024Q3\\\\src\\\\components\\\\ErrorBoundary\\\\ErrorContent.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorContent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5L0Vycm9yQ29udGVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFFSztBQU8vQixTQUFTRSxhQUFhLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFxQjtJQUMzRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNMLG1EQUFLQTtvQkFBQ00sS0FBSTtvQkFBYUMsS0FBSTtvQkFBUUYsV0FBVTs7Ozs7OzhCQUM5Qyw4REFBQ0c7b0JBQUVILFdBQVU7OEJBQWlCOzs7Ozs7Z0JBQzdCSCx1QkFBUyw4REFBQ007b0JBQUVILFdBQVU7OEJBQXFCSCxNQUFNTyxRQUFROzs7Ozs7Z0JBQ3pETiwyQkFBYSw4REFBQ087b0JBQUlMLFdBQVU7OEJBQW1CRixVQUFVUSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloRjtBQUVBLGlFQUFlVixZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vc3JjL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeS9FcnJvckNvbnRlbnQudHN4PzI5M2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW50ZXJmYWNlIEVycm9yQ29udGVudFByb3BzIHtcbiAgZXJyb3I6IEVycm9yIHwgbnVsbDtcbiAgZXJyb3JJbmZvOiBFcnJvckluZm8gfCBudWxsO1xufVxuXG5mdW5jdGlvbiBFcnJvckNvbnRlbnQoeyBlcnJvciwgZXJyb3JJbmZvIH06IEVycm9yQ29udGVudFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvckNvbnRXcmFwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yQ29udFwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Vycm9yLmpwZ1wiIGFsdD1cIkVycm9yXCIgY2xhc3NOYW1lPVwiZXJyb3JDb250X2ltZ1wiIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yQ29udF90ZXh0XCI+T29vcHMhLi4gU29tZXRoaW5nIGdvbmUgd3JvbmcuIFBsZWFzZSwgcmVsb2FkIHBhZ2U8L3A+XG4gICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvckNvbnRfbWVzc2FnZVwiPntlcnJvci50b1N0cmluZygpfTwvcD59XG4gICAgICAgIHtlcnJvckluZm8gJiYgPHByZSBjbGFzc05hbWU9XCJlcnJvckNvbnRfc3RhY2tcIj57ZXJyb3JJbmZvLmNvbXBvbmVudFN0YWNrfTwvcHJlPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckNvbnRlbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkVycm9yQ29udGVudCIsImVycm9yIiwiZXJyb3JJbmZvIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwicCIsInRvU3RyaW5nIiwicHJlIiwiY29tcG9uZW50U3RhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ErrorBoundary/ErrorContent.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.scss */ \"./src/styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.ts\");\n/* harmony import */ var _components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ErrorBoundary/ErrorBoundary */ \"./src/components/ErrorBoundary/ErrorBoundary.tsx\");\n/* harmony import */ var _components_ErrorBoundary_ErrorContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ErrorBoundary/ErrorContent */ \"./src/components/ErrorBoundary/ErrorContent.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_3__, _store_store__WEBPACK_IMPORTED_MODULE_4__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_3__, _store_store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorBoundary_ErrorContent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            error: null,\n            errorInfo: null\n        }, void 0, false, {\n            fileName: \"E:\\\\ОБУЧЕНИЕ\\\\FrontEnd\\\\RSschool\\\\Stage-3\\\\lipan4836-REACT2024Q3\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 12,\n            columnNumber: 30\n        }, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n            store: _store_store__WEBPACK_IMPORTED_MODULE_4__.store,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Naruto Characters Base\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\ОБУЧЕНИЕ\\\\FrontEnd\\\\RSschool\\\\Stage-3\\\\lipan4836-REACT2024Q3\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\ОБУЧЕНИЕ\\\\FrontEnd\\\\RSschool\\\\Stage-3\\\\lipan4836-REACT2024Q3\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"E:\\\\ОБУЧЕНИЕ\\\\FrontEnd\\\\RSschool\\\\Stage-3\\\\lipan4836-REACT2024Q3\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\ОБУЧЕНИЕ\\\\FrontEnd\\\\RSschool\\\\Stage-3\\\\lipan4836-REACT2024Q3\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\ОБУЧЕНИЕ\\\\FrontEnd\\\\RSschool\\\\Stage-3\\\\lipan4836-REACT2024Q3\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDSztBQUNRO0FBQ0E7QUFDK0I7QUFDRjtBQUN2QztBQUVkLFNBQVNNLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0UsOERBQUNMLCtFQUFhQTtRQUFDTSx3QkFBVSw4REFBQ0wsOEVBQVlBO1lBQUNNLE9BQU87WUFBTUMsV0FBVzs7Ozs7O2tCQUM3RCw0RUFBQ1YsaURBQVFBO1lBQUNDLE9BQU9BLCtDQUFLQTs7OEJBQ3BCLDhEQUFDRyxrREFBSUE7OEJBQ0gsNEVBQUNPO2tDQUFNOzs7Ozs7Ozs7Ozs4QkFFVCw4REFBQ0w7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5zY3NzJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yQm91bmRhcnkvRXJyb3JCb3VuZGFyeSc7XG5pbXBvcnQgRXJyb3JDb250ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeS9FcnJvckNvbnRlbnQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8RXJyb3JCb3VuZGFyeSBmYWxsYmFjaz17PEVycm9yQ29udGVudCBlcnJvcj17bnVsbH0gZXJyb3JJbmZvPXtudWxsfSAvPn0+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPk5hcnV0byBDaGFyYWN0ZXJzIEJhc2U8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9FcnJvckJvdW5kYXJ5PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvdmlkZXIiLCJzdG9yZSIsIkVycm9yQm91bmRhcnkiLCJFcnJvckNvbnRlbnQiLCJIZWFkIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZmFsbGJhY2siLCJlcnJvciIsImVycm9ySW5mbyIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/store/slices/selectedItemsSlice.ts":
/*!************************************************!*\
  !*** ./src/store/slices/selectedItemsSlice.ts ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addItem: () => (/* binding */ addItem),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   removeAllItems: () => (/* binding */ removeAllItems),\n/* harmony export */   removeItem: () => (/* binding */ removeItem)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst initialState = {\n    selectedItems: []\n};\nconst selectedItemsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"selectedItems\",\n    initialState,\n    reducers: {\n        addItem (state, action) {\n            if (!state.selectedItems.some((item)=>item.id === action.payload.id)) {\n                state.selectedItems.push(action.payload);\n            }\n        },\n        removeItem (state, action) {\n            state.selectedItems = state.selectedItems.filter((item)=>item.id !== action.payload);\n        },\n        removeAllItems (state) {\n            state.selectedItems = [];\n        }\n    }\n});\nconst { addItem, removeItem, removeAllItems } = selectedItemsSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectedItemsSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2xpY2VzL3NlbGVjdGVkSXRlbXNTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4RDtBQU85RCxNQUFNQyxlQUFtQztJQUN2Q0MsZUFBZSxFQUFFO0FBQ25CO0FBRUEsTUFBTUMscUJBQXFCSCw2REFBV0EsQ0FBQztJQUNyQ0ksTUFBTTtJQUNOSDtJQUNBSSxVQUFVO1FBQ1JDLFNBQVFDLEtBQUssRUFBRUMsTUFBZ0M7WUFDN0MsSUFBSSxDQUFDRCxNQUFNTCxhQUFhLENBQUNPLElBQUksQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxFQUFFLEtBQUtILE9BQU9JLE9BQU8sQ0FBQ0QsRUFBRSxHQUFHO2dCQUN0RUosTUFBTUwsYUFBYSxDQUFDVyxJQUFJLENBQUNMLE9BQU9JLE9BQU87WUFDekM7UUFDRjtRQUNBRSxZQUFXUCxLQUFLLEVBQUVDLE1BQTZCO1lBQzdDRCxNQUFNTCxhQUFhLEdBQUdLLE1BQU1MLGFBQWEsQ0FBQ2EsTUFBTSxDQUFDLENBQUNMLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0gsT0FBT0ksT0FBTztRQUN2RjtRQUNBSSxnQkFBZVQsS0FBSztZQUNsQkEsTUFBTUwsYUFBYSxHQUFHLEVBQUU7UUFDMUI7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUFFSSxPQUFPLEVBQUVRLFVBQVUsRUFBRUUsY0FBYyxFQUFFLEdBQUdiLG1CQUFtQmMsT0FBTyxDQUFDO0FBQ2xGLGlFQUFlZCxtQkFBbUJlLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3NyYy9zdG9yZS9zbGljZXMvc2VsZWN0ZWRJdGVtc1NsaWNlLnRzPzRjY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJy4uLy4uL3R5cGVzL2NoYXJhY3RlclJlc3BvbnNlJztcblxuaW50ZXJmYWNlIFNlbGVjdGVkSXRlbXNTdGF0ZSB7XG4gIHNlbGVjdGVkSXRlbXM6IENoYXJhY3RlcltdO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IFNlbGVjdGVkSXRlbXNTdGF0ZSA9IHtcbiAgc2VsZWN0ZWRJdGVtczogW10sXG59O1xuXG5jb25zdCBzZWxlY3RlZEl0ZW1zU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdzZWxlY3RlZEl0ZW1zJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGFkZEl0ZW0oc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxDaGFyYWN0ZXI+KSB7XG4gICAgICBpZiAoIXN0YXRlLnNlbGVjdGVkSXRlbXMuc29tZSgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkSXRlbXMucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVJdGVtKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xuICAgICAgc3RhdGUuc2VsZWN0ZWRJdGVtcyA9IHN0YXRlLnNlbGVjdGVkSXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZCk7XG4gICAgfSxcbiAgICByZW1vdmVBbGxJdGVtcyhzdGF0ZSkge1xuICAgICAgc3RhdGUuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgcmVtb3ZlQWxsSXRlbXMgfSA9IHNlbGVjdGVkSXRlbXNTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgc2VsZWN0ZWRJdGVtc1NsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJzZWxlY3RlZEl0ZW1zIiwic2VsZWN0ZWRJdGVtc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkSXRlbSIsInN0YXRlIiwiYWN0aW9uIiwic29tZSIsIml0ZW0iLCJpZCIsInBheWxvYWQiLCJwdXNoIiwicmVtb3ZlSXRlbSIsImZpbHRlciIsInJlbW92ZUFsbEl0ZW1zIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/slices/selectedItemsSlice.ts\n");

/***/ }),

/***/ "./src/store/slices/themeSlice.ts":
/*!****************************************!*\
  !*** ./src/store/slices/themeSlice.ts ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setDarkTheme: () => (/* binding */ setDarkTheme),\n/* harmony export */   toggleTheme: () => (/* binding */ toggleTheme)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst initialState = {\n    darkTheme: false\n};\nconst themeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"theme\",\n    initialState,\n    reducers: {\n        toggleTheme (state) {\n            state.darkTheme = !state.darkTheme;\n        },\n        setDarkTheme (state, action) {\n            state.darkTheme = action.payload;\n        }\n    }\n});\nconst { toggleTheme, setDarkTheme } = themeSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2xpY2VzL3RoZW1lU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQztBQU0vQyxNQUFNQyxlQUEyQjtJQUMvQkMsV0FBVztBQUNiO0FBRUEsTUFBTUMsYUFBYUgsNkRBQVdBLENBQUM7SUFDN0JJLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNSQyxhQUFZQyxLQUFLO1lBQ2ZBLE1BQU1MLFNBQVMsR0FBRyxDQUFDSyxNQUFNTCxTQUFTO1FBQ3BDO1FBRUFNLGNBQWFELEtBQUssRUFBRUUsTUFBTTtZQUN4QkYsTUFBTUwsU0FBUyxHQUFHTyxPQUFPQyxPQUFPO1FBQ2xDO0lBQ0Y7QUFDRjtBQUVPLE1BQU0sRUFBRUosV0FBVyxFQUFFRSxZQUFZLEVBQUUsR0FBR0wsV0FBV1EsT0FBTyxDQUFDO0FBQ2hFLGlFQUFlUixXQUFXUyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zcmMvc3RvcmUvc2xpY2VzL3RoZW1lU2xpY2UudHM/MmY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5pbnRlcmZhY2UgVGhlbWVTbGljZSB7XG4gIGRhcmtUaGVtZTogYm9vbGVhbjtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBUaGVtZVNsaWNlID0ge1xuICBkYXJrVGhlbWU6IGZhbHNlLFxufTtcblxuY29uc3QgdGhlbWVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3RoZW1lJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHRvZ2dsZVRoZW1lKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5kYXJrVGhlbWUgPSAhc3RhdGUuZGFya1RoZW1lO1xuICAgIH0sXG5cbiAgICBzZXREYXJrVGhlbWUoc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUuZGFya1RoZW1lID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyB0b2dnbGVUaGVtZSwgc2V0RGFya1RoZW1lIH0gPSB0aGVtZVNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCB0aGVtZVNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJkYXJrVGhlbWUiLCJ0aGVtZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwidG9nZ2xlVGhlbWUiLCJzdGF0ZSIsInNldERhcmtUaGVtZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/slices/themeSlice.ts\n");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _slices_selectedItemsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/selectedItemsSlice */ \"./src/store/slices/selectedItemsSlice.ts\");\n/* harmony import */ var _slices_themeSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/themeSlice */ \"./src/store/slices/themeSlice.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _slices_selectedItemsSlice__WEBPACK_IMPORTED_MODULE_1__, _slices_themeSlice__WEBPACK_IMPORTED_MODULE_2__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _slices_selectedItemsSlice__WEBPACK_IMPORTED_MODULE_1__, _slices_themeSlice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        selectedItems: _slices_selectedItemsSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        theme: _slices_themeSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }\n});\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNhO0FBQ2hCO0FBRS9DLE1BQU1HLFFBQVFILGdFQUFjQSxDQUFDO0lBQzNCSSxTQUFTO1FBQ1BDLGVBQWVKLGtFQUFvQkE7UUFDbkNLLE9BQU9KLDBEQUFZQTtJQUNyQjtBQUNGO0FBSWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vc3JjL3N0b3JlL3N0b3JlLnRzPzUwMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBzZWxlY3RlZEl0ZW1zUmVkdWNlciBmcm9tICcuL3NsaWNlcy9zZWxlY3RlZEl0ZW1zU2xpY2UnO1xuaW1wb3J0IHRoZW1lUmVkdWNlciBmcm9tICcuL3NsaWNlcy90aGVtZVNsaWNlJztcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICBzZWxlY3RlZEl0ZW1zOiBzZWxlY3RlZEl0ZW1zUmVkdWNlcixcbiAgICB0aGVtZTogdGhlbWVSZWR1Y2VyLFxuICB9LFxufSk7XG5cbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xuZXhwb3J0IHsgc3RvcmUgfTtcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInNlbGVjdGVkSXRlbXNSZWR1Y2VyIiwidGhlbWVSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwic2VsZWN0ZWRJdGVtcyIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/store.ts\n");

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();