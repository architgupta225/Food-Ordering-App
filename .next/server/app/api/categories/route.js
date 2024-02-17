"use strict";
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
exports.id = "app/api/categories/route";
exports.ids = ["app/api/categories/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcategories%2Froute&page=%2Fapi%2Fcategories%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategories%2Froute.ts&appDir=C%3A%5CUsers%5Carchi%5CDesktop%5CFood-Ordering-App%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Carchi%5CDesktop%5CFood-Ordering-App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcategories%2Froute&page=%2Fapi%2Fcategories%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategories%2Froute.ts&appDir=C%3A%5CUsers%5Carchi%5CDesktop%5CFood-Ordering-App%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Carchi%5CDesktop%5CFood-Ordering-App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_archi_Desktop_Food_Ordering_App_src_app_api_categories_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/categories/route.ts */ \"(rsc)/./src/app/api/categories/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/categories/route\",\n        pathname: \"/api/categories\",\n        filename: \"route\",\n        bundlePath: \"app/api/categories/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\archi\\\\Desktop\\\\Food-Ordering-App\\\\src\\\\app\\\\api\\\\categories\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_archi_Desktop_Food_Ordering_App_src_app_api_categories_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/categories/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjYXRlZ29yaWVzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjYXRlZ29yaWVzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2F0ZWdvcmllcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNhcmNoaSU1Q0Rlc2t0b3AlNUNGb29kLU9yZGVyaW5nLUFwcCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDYXJjaGklNUNEZXNrdG9wJTVDRm9vZC1PcmRlcmluZy1BcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDaUM7QUFDOUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLW9yZGVyaW5nLWFwcC8/ZWI4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxhcmNoaVxcXFxEZXNrdG9wXFxcXEZvb2QtT3JkZXJpbmctQXBwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGNhdGVnb3JpZXNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NhdGVnb3JpZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jYXRlZ29yaWVzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jYXRlZ29yaWVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcYXJjaGlcXFxcRGVza3RvcFxcXFxGb29kLU9yZGVyaW5nLUFwcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxjYXRlZ29yaWVzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2NhdGVnb3JpZXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcategories%2Froute&page=%2Fapi%2Fcategories%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategories%2Froute.ts&appDir=C%3A%5CUsers%5Carchi%5CDesktop%5CFood-Ordering-App%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Carchi%5CDesktop%5CFood-Ordering-App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _libs_mongoConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/mongoConnect */ \"(rsc)/./src/libs/mongoConnect.js\");\n/* harmony import */ var _models_UserInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/UserInfo */ \"(rsc)/./src/models/UserInfo.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n\n\n\n\n\n\n\n\n\nconst authOptions = {\n    secret: process.env.SECRET,\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_8__.MongoDBAdapter)(_libs_mongoConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n            name: \"Credentials\",\n            id: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"test@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const email = credentials?.email;\n                const password = credentials?.password;\n                mongoose__WEBPACK_IMPORTED_MODULE_3__.connect(process.env.MONGO_URL);\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_4__.User.findOne({\n                    email\n                });\n                const passwordOk = user && bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compareSync(password, user.password);\n                if (passwordOk) {\n                    return user;\n                }\n                return null;\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60 // 30 days\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_5___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ0w7QUFDZjtBQUNTO0FBQ0Y7QUFDa0I7QUFDYTtBQUNWO0FBQ0Y7QUFFL0MsTUFBTVUsY0FBYztJQUN6QkMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxNQUFNO0lBQzFCQyxTQUFTTixxRUFBY0EsQ0FBQ1QsMERBQWFBO0lBQ3JDZ0IsV0FBVztRQUNUUixzRUFBY0EsQ0FBQztZQUNiUyxVQUFVTCxRQUFRQyxHQUFHLENBQUNLLGdCQUFnQjtZQUN0Q0MsY0FBY1AsUUFBUUMsR0FBRyxDQUFDTyxvQkFBb0I7UUFDaEQ7UUFDQWIsMkVBQW1CQSxDQUFDO1lBQ2xCYyxNQUFNO1lBQ05DLElBQUk7WUFDSkMsYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtvQkFBU0MsYUFBYTtnQkFBbUI7Z0JBQzNFQyxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUcsV0FBVU4sV0FBVyxFQUFFTyxHQUFHO2dCQUM5QixNQUFNQyxRQUFRUixhQUFhUTtnQkFDM0IsTUFBTUgsV0FBV0wsYUFBYUs7Z0JBRTlCekIsNkNBQWdCLENBQUNTLFFBQVFDLEdBQUcsQ0FBQ29CLFNBQVM7Z0JBQ3RDLE1BQU1DLE9BQU8sTUFBTTlCLDhDQUFJQSxDQUFDK0IsT0FBTyxDQUFDO29CQUFDSjtnQkFBSztnQkFDdEMsTUFBTUssYUFBYUYsUUFBUWhDLHlEQUFrQixDQUFDMEIsVUFBVU0sS0FBS04sUUFBUTtnQkFFckUsSUFBSVEsWUFBWTtvQkFDZCxPQUFPRjtnQkFDVDtnQkFFQSxPQUFPO1lBQ1Q7UUFDRjtLQUNEO0lBQ0RJLFNBQVM7UUFDUEMsVUFBVTtRQUNWQyxRQUFRLEtBQUssS0FBSyxLQUFLLEdBQUcsVUFBVTtJQUN0QztBQUNGLEVBQUU7QUFFRixNQUFNQyxVQUFVcEMsZ0RBQVFBLENBQUNLO0FBRWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/MjMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiQC9saWJzL21vbmdvQ29ubmVjdFwiO1xuaW1wb3J0IHtVc2VySW5mb30gZnJvbSBcIkAvbW9kZWxzL1VzZXJJbmZvXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tICdAL21vZGVscy9Vc2VyJztcbmltcG9ydCBOZXh0QXV0aCwge2dldFNlcnZlclNlc3Npb259IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAYXV0aC9tb25nb2RiLWFkYXB0ZXJcIlxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgIH0pLFxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIGlkOiAnY3JlZGVudGlhbHMnLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgdXNlcm5hbWU6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCJ0ZXN0QGV4YW1wbGUuY29tXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgY29uc3QgZW1haWwgPSBjcmVkZW50aWFscz8uZW1haWw7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gY3JlZGVudGlhbHM/LnBhc3N3b3JkO1xuXG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMKTtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7ZW1haWx9KTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRPayA9IHVzZXIgJiYgYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcblxuICAgICAgICBpZiAocGFzc3dvcmRPaykge1xuICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCAvLyAzMCBkYXlzXG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5cbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1R9Il0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJVc2VySW5mbyIsImJjcnlwdCIsIm1vbmdvb3NlIiwiVXNlciIsIk5leHRBdXRoIiwiZ2V0U2VydmVyU2Vzc2lvbiIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiYXV0aE9wdGlvbnMiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwibmFtZSIsImlkIiwiY3JlZGVudGlhbHMiLCJ1c2VybmFtZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJyZXEiLCJlbWFpbCIsImNvbm5lY3QiLCJNT05HT19VUkwiLCJ1c2VyIiwiZmluZE9uZSIsInBhc3N3b3JkT2siLCJjb21wYXJlU3luYyIsInNlc3Npb24iLCJzdHJhdGVneSIsIm1heEFnZSIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/adminUtils.js":
/*!****************************************!*\
  !*** ./src/app/api/auth/adminUtils.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_UserInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/UserInfo */ \"(rsc)/./src/models/UserInfo.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nextauth_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n\n\n\nasync function isAdmin() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_nextauth_route__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    const userEmail = session?.user?.email;\n    if (!userEmail) {\n        return false;\n    }\n    const userInfo = await _models_UserInfo__WEBPACK_IMPORTED_MODULE_0__.UserInfo.findOne({\n        email: userEmail\n    });\n    if (!userInfo) {\n        return false;\n    }\n    return userInfo.admin;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isAdmin());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL2FkbWluVXRpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkM7QUFDQTtBQUNPO0FBRXBELGVBQWVHO0lBQ1gsTUFBTUMsVUFBVSxNQUFNSCwyREFBZ0JBLENBQUNDLHdEQUFXQTtJQUNsRCxNQUFNRyxZQUFZRCxTQUFTRSxNQUFNQztJQUNqQyxJQUFJLENBQUNGLFdBQVc7UUFDZCxPQUFPO0lBQ1Q7SUFDQSxNQUFNRyxXQUFXLE1BQU1SLHNEQUFRQSxDQUFDUyxPQUFPLENBQUM7UUFBQ0YsT0FBTUY7SUFBUztJQUN4RCxJQUFJLENBQUNHLFVBQVU7UUFDYixPQUFPO0lBQ1Q7SUFDQSxPQUFPQSxTQUFTRSxLQUFLO0FBQ3pCO0FBRUEsaUVBQWVQLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLW9yZGVyaW5nLWFwcC8uL3NyYy9hcHAvYXBpL2F1dGgvYWRtaW5VdGlscy5qcz9kYmMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIkAvbW9kZWxzL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4vWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaXNBZG1pbigpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuICAgIGNvbnN0IHVzZXJFbWFpbCA9IHNlc3Npb24/LnVzZXI/LmVtYWlsO1xyXG4gICAgaWYgKCF1c2VyRW1haWwpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdXNlckluZm8gPSBhd2FpdCBVc2VySW5mby5maW5kT25lKHtlbWFpbDp1c2VyRW1haWx9KTtcclxuICAgIGlmICghdXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVzZXJJbmZvLmFkbWluO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpc0FkbWluKCk7XHJcbiAgIl0sIm5hbWVzIjpbIlVzZXJJbmZvIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiaXNBZG1pbiIsInNlc3Npb24iLCJ1c2VyRW1haWwiLCJ1c2VyIiwiZW1haWwiLCJ1c2VySW5mbyIsImZpbmRPbmUiLCJhZG1pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/adminUtils.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/categories/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/categories/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Category */ \"(rsc)/./src/models/Category.ts\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_adminUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth/adminUtils */ \"(rsc)/./src/app/api/auth/adminUtils.js\");\n\n\n\nasync function POST(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(process.env.MONGO_URL);\n    const { name } = await req.json();\n    if (await (0,_auth_adminUtils__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()) {\n        const categoryDoc = await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.create({\n            name\n        });\n        return Response.json(categoryDoc);\n    } else {\n        return Response.json({});\n    }\n}\nasync function GET() {\n    mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(process.env.MONGO_URL);\n    return Response.json(await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.find());\n}\nasync function PUT(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(process.env.MONGO_URL);\n    const { _id, name } = await req.json();\n    if (await (0,_auth_adminUtils__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()) {\n        await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.updateOne({\n            _id\n        }, {\n            name\n        });\n    }\n    return Response.json(true);\n}\nasync function DELETE(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(process.env.MONGO_URL);\n    const url = new URL(req.url);\n    const _id = url.searchParams.get(\"_id\");\n    if (await (0,_auth_adminUtils__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()) {\n        await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.deleteOne({\n            _id\n        });\n    }\n    return Response.json(true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jYXRlZ29yaWVzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ2I7QUFDVztBQUVwQyxlQUFlRyxLQUFLQyxHQUFHO0lBQzFCSCx1REFBZ0IsQ0FBQ0ssUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBQ3RDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTUwsSUFBSU0sSUFBSTtJQUMvQixJQUFHLE1BQU1SLDREQUFPQSxJQUFHO1FBQ2YsTUFBTVMsY0FBYyxNQUFNWCxzREFBUUEsQ0FBQ1ksTUFBTSxDQUFDO1lBQUVIO1FBQUs7UUFDakQsT0FBT0ksU0FBU0gsSUFBSSxDQUFDQztJQUN6QixPQUFLO1FBQ0QsT0FBT0UsU0FBU0gsSUFBSSxDQUFDLENBQUM7SUFDMUI7QUFDSjtBQUVPLGVBQWVJO0lBQ2xCYix1REFBZ0IsQ0FBQ0ssUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBQ3RDLE9BQU9LLFNBQVNILElBQUksQ0FDaEIsTUFBTVYsc0RBQVFBLENBQUNlLElBQUk7QUFFM0I7QUFFTyxlQUFlQyxJQUFJWixHQUFHO0lBQ3pCSCx1REFBZ0IsQ0FBQ0ssUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBQ3RDLE1BQU0sRUFBRVMsR0FBRyxFQUFFUixJQUFJLEVBQUUsR0FBRyxNQUFNTCxJQUFJTSxJQUFJO0lBQ3BDLElBQUksTUFBTVIsNERBQU9BLElBQUk7UUFDakIsTUFBTUYsc0RBQVFBLENBQUNrQixTQUFTLENBQUM7WUFBRUQ7UUFBSSxHQUFHO1lBQUVSO1FBQUs7SUFDN0M7SUFDQSxPQUFPSSxTQUFTSCxJQUFJLENBQUM7QUFDekI7QUFFTyxlQUFlUyxPQUFPZixHQUFHO0lBQzVCSCx1REFBZ0IsQ0FBQ0ssUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBQ3RDLE1BQU1ZLE1BQU0sSUFBSUMsSUFBSWpCLElBQUlnQixHQUFHO0lBQzNCLE1BQU1ILE1BQU1HLElBQUlFLFlBQVksQ0FBQ0MsR0FBRyxDQUFDO0lBQ2pDLElBQUksTUFBTXJCLDREQUFPQSxJQUFJO1FBQ2pCLE1BQU1GLHNEQUFRQSxDQUFDd0IsU0FBUyxDQUFDO1lBQUVQO1FBQUk7SUFDbkM7SUFDQSxPQUFPSixTQUFTSCxJQUFJLENBQUM7QUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLW9yZGVyaW5nLWFwcC8uL3NyYy9hcHAvYXBpL2NhdGVnb3JpZXMvcm91dGUudHM/OWZhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gXCJAL21vZGVscy9DYXRlZ29yeVwiO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IGlzQWRtaW4gZnJvbSAnLi8uLi9hdXRoL2FkbWluVXRpbHMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTClcbiAgICBjb25zdCB7IG5hbWUgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgaWYoYXdhaXQgaXNBZG1pbigpKXtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlEb2MgPSBhd2FpdCBDYXRlZ29yeS5jcmVhdGUoeyBuYW1lIH0pXG4gICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKGNhdGVnb3J5RG9jKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe30pXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMKVxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKFxuICAgICAgICBhd2FpdCBDYXRlZ29yeS5maW5kKClcbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxKSB7XG4gICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwpXG4gICAgY29uc3QgeyBfaWQsIG5hbWUgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgaWYgKGF3YWl0IGlzQWRtaW4oKSkge1xuICAgICAgICBhd2FpdCBDYXRlZ29yeS51cGRhdGVPbmUoeyBfaWQgfSwgeyBuYW1lIH0pXG4gICAgfVxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHRydWUpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxKSB7XG4gICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwpXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChyZXEudXJsKTtcbiAgICBjb25zdCBfaWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgnX2lkJylcbiAgICBpZiAoYXdhaXQgaXNBZG1pbigpKSB7XG4gICAgICAgIGF3YWl0IENhdGVnb3J5LmRlbGV0ZU9uZSh7IF9pZCB9KVxuICAgIH1cbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih0cnVlKVxufVxuIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwibW9uZ29vc2UiLCJpc0FkbWluIiwiUE9TVCIsInJlcSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJMIiwibmFtZSIsImpzb24iLCJjYXRlZ29yeURvYyIsImNyZWF0ZSIsIlJlc3BvbnNlIiwiR0VUIiwiZmluZCIsIlBVVCIsIl9pZCIsInVwZGF0ZU9uZSIsIkRFTEVURSIsInVybCIsIlVSTCIsInNlYXJjaFBhcmFtcyIsImdldCIsImRlbGV0ZU9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/categories/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/libs/mongoConnect.js":
/*!**********************************!*\
  !*** ./src/libs/mongoConnect.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (!process.env.MONGO_URL) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGO_URL;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9tb25nb0Nvbm5lY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUMsa0dBQWtHO0FBQzlEO0FBRXJDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxTQUFTLEVBQUU7SUFDMUIsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsTUFBTUosUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0FBQ2pDLE1BQU1HLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSVAsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1EsT0FBT0MsbUJBQW1CLEVBQUU7UUFDL0JILFNBQVMsSUFBSVAsZ0RBQVdBLENBQUNLLEtBQUtDO1FBQzlCRyxPQUFPQyxtQkFBbUIsR0FBR0gsT0FBT0ksT0FBTztJQUM3QztJQUNBSCxnQkFBZ0JDLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlRixhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvLi9zcmMvbGlicy9tb25nb0Nvbm5lY3QuanM/YzQwNiJdLCJzb3VyY2VzQ29udGVudCI6WyIgLy8gVGhpcyBhcHByb2FjaCBpcyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlcy93aXRoLW1vbmdvZGJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIlxuXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPX1VSTCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQvTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJylcbn1cblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJMXG5jb25zdCBvcHRpb25zID0ge31cblxubGV0IGNsaWVudFxubGV0IGNsaWVudFByb21pc2U7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbiAgfVxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2Vcbn0gZWxzZSB7XG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG59XG5cbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZSJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkwiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/mongoConnect.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Category.ts":
/*!********************************!*\
  !*** ./src/models/Category.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Category: () => (/* binding */ Category)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CategorySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst Category = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Category || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Category\", CategorySchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0NhdGVnb3J5LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUVqRCxNQUFNRyxpQkFBaUIsSUFBSUgsNENBQU1BLENBQUM7SUFDOUJJLE1BQU07UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0FBQ3pDLEdBQUc7SUFBRUMsWUFBWTtBQUFLO0FBRWYsTUFBTUMsV0FBV1AsNENBQU1BLEVBQUVPLFlBQVlSLCtDQUFLQSxDQUFDLFlBQVlFLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmctYXBwLy4vc3JjL21vZGVscy9DYXRlZ29yeS50cz8zYWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBDYXRlZ29yeVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9XG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSk7XG5cbmV4cG9ydCBjb25zdCBDYXRlZ29yeSA9IG1vZGVscz8uQ2F0ZWdvcnkgfHwgbW9kZWwoJ0NhdGVnb3J5JywgQ2F0ZWdvcnlTY2hlbWEpOyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsIkNhdGVnb3J5U2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRpbWVzdGFtcHMiLCJDYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Category.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: String,\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: String,\n    image: String\n}, {\n    timestamps: true\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLGFBQWEsSUFBSUQsNENBQU1BLENBQUM7SUFDNUJFLE1BQU1DO0lBQ05DLE9BQU87UUFBRUMsTUFBTUY7UUFBUUcsVUFBVTtRQUFNQyxRQUFRO0lBQUs7SUFDcERDLFVBQVVMO0lBQ1ZNLE9BQU9OO0FBQ1QsR0FBRztJQUFFTyxZQUFZO0FBQUs7QUFFZixNQUFNQyxPQUFPWiw0Q0FBTUEsRUFBRVksUUFBUWIsK0NBQUtBLENBQUMsUUFBUUcsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmctYXBwLy4vc3JjL21vZGVscy9Vc2VyLnRzPzA5NmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9kZWwsIG1vZGVscywgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgbmFtZTogU3RyaW5nLFxuICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcbiAgcGFzc3dvcmQ6IFN0cmluZyxcbiAgaW1hZ2U6IFN0cmluZyxcbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KTtcblxuZXhwb3J0IGNvbnN0IFVzZXIgPSBtb2RlbHM/LlVzZXIgfHwgbW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKTsiXSwibmFtZXMiOlsibW9kZWwiLCJtb2RlbHMiLCJTY2hlbWEiLCJVc2VyU2NoZW1hIiwibmFtZSIsIlN0cmluZyIsImVtYWlsIiwidHlwZSIsInJlcXVpcmVkIiwidW5pcXVlIiwicGFzc3dvcmQiLCJpbWFnZSIsInRpbWVzdGFtcHMiLCJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/UserInfo.js":
/*!********************************!*\
  !*** ./src/models/UserInfo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserInfo: () => (/* binding */ UserInfo)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserInfoSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        required: true\n    },\n    phone: {\n        type: String\n    },\n    streetAddress: {\n        type: String\n    },\n    postalCode: {\n        type: String\n    },\n    city: {\n        type: String\n    },\n    admin: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timeStamps: true\n});\nconst UserInfo = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.UserInfo || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"UserInfo\", UserInfoSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXJJbmZvLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUVqRCxNQUFNRyxpQkFBaUIsSUFBSUgsNENBQU1BLENBQUM7SUFDOUJJLE9BQU87UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3RDQyxPQUFPO1FBQUVILE1BQU1DO0lBQU87SUFDdEJHLGVBQWU7UUFBRUosTUFBTUM7SUFBTztJQUM5QkksWUFBWTtRQUFFTCxNQUFNQztJQUFPO0lBQzNCSyxNQUFNO1FBQUVOLE1BQU1DO0lBQU87SUFDckJNLE9BQU87UUFBRVAsTUFBTVE7UUFBU0MsU0FBUztJQUFNO0FBQzNDLEdBQUc7SUFBRUMsWUFBWTtBQUFLO0FBRWYsTUFBTUMsV0FBV2QsNENBQU1BLEVBQUVjLFlBQVlmLCtDQUFLQSxDQUFDLFlBQVlFLGdCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvLi9zcmMvbW9kZWxzL1VzZXJJbmZvLmpzP2RlMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFVzZXJJbmZvU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHBob25lOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHN0cmVldEFkZHJlc3M6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgcG9zdGFsQ29kZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBjaXR5OiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGFkbWluOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH1cbn0sIHsgdGltZVN0YW1wczogdHJ1ZSB9KTtcblxuZXhwb3J0IGNvbnN0IFVzZXJJbmZvID0gbW9kZWxzPy5Vc2VySW5mbyB8fCBtb2RlbCgnVXNlckluZm8nLCBVc2VySW5mb1NjaGVtYSkiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJVc2VySW5mb1NjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicGhvbmUiLCJzdHJlZXRBZGRyZXNzIiwicG9zdGFsQ29kZSIsImNpdHkiLCJhZG1pbiIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZVN0YW1wcyIsIlVzZXJJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/UserInfo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/@auth","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcategories%2Froute&page=%2Fapi%2Fcategories%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategories%2Froute.ts&appDir=C%3A%5CUsers%5Carchi%5CDesktop%5CFood-Ordering-App%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Carchi%5CDesktop%5CFood-Ordering-App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();