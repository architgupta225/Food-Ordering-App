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
exports.id = "app/api/menu-items/route";
exports.ids = ["app/api/menu-items/route"];
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

/***/ "./action-async-storage.external?8dda":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external?3d59":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external?16bc":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmenu-items%2Froute&page=%2Fapi%2Fmenu-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-items%2Froute.ts&appDir=%2Fhome%2Fnineleaps%2FDesktop%2FFood-Ordering-App%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fnineleaps%2FDesktop%2FFood-Ordering-App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmenu-items%2Froute&page=%2Fapi%2Fmenu-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-items%2Froute.ts&appDir=%2Fhome%2Fnineleaps%2FDesktop%2FFood-Ordering-App%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fnineleaps%2FDesktop%2FFood-Ordering-App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_nineleaps_Desktop_Food_Ordering_App_src_app_api_menu_items_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/menu-items/route.ts */ \"(rsc)/./src/app/api/menu-items/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/menu-items/route\",\n        pathname: \"/api/menu-items\",\n        filename: \"route\",\n        bundlePath: \"app/api/menu-items/route\"\n    },\n    resolvedPagePath: \"/home/nineleaps/Desktop/Food-Ordering-App/src/app/api/menu-items/route.ts\",\n    nextConfigOutput,\n    userland: _home_nineleaps_Desktop_Food_Ordering_App_src_app_api_menu_items_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/menu-items/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtZW51LWl0ZW1zJTJGcm91dGUmcGFnZT0lMkZhcGklMkZtZW51LWl0ZW1zJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbWVudS1pdGVtcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGbmluZWxlYXBzJTJGRGVza3RvcCUyRkZvb2QtT3JkZXJpbmctQXBwJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGbmluZWxlYXBzJTJGRGVza3RvcCUyRkZvb2QtT3JkZXJpbmctQXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3lCO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvPzYzYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvbmluZWxlYXBzL0Rlc2t0b3AvRm9vZC1PcmRlcmluZy1BcHAvc3JjL2FwcC9hcGkvbWVudS1pdGVtcy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbWVudS1pdGVtcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL21lbnUtaXRlbXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL21lbnUtaXRlbXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9uaW5lbGVhcHMvRGVza3RvcC9Gb29kLU9yZGVyaW5nLUFwcC9zcmMvYXBwL2FwaS9tZW51LWl0ZW1zL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL21lbnUtaXRlbXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmenu-items%2Froute&page=%2Fapi%2Fmenu-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-items%2Froute.ts&appDir=%2Fhome%2Fnineleaps%2FDesktop%2FFood-Ordering-App%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fnineleaps%2FDesktop%2FFood-Ordering-App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   isAdmin: () => (/* binding */ isAdmin)\n/* harmony export */ });\n/* harmony import */ var _libs_mongoConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/mongoConnect */ \"(rsc)/./src/libs/mongoConnect.js\");\n/* harmony import */ var _models_UserInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/UserInfo */ \"(rsc)/./src/models/UserInfo.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n\n\n\n\n\n\n\n\n\nconst authOptions = {\n    secret: process.env.SECRET,\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_8__.MongoDBAdapter)(_libs_mongoConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n            name: \"Credentials\",\n            id: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"test@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const email = credentials?.email;\n                const password = credentials?.password;\n                mongoose__WEBPACK_IMPORTED_MODULE_3__.connect(process.env.MONGO_URL);\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_4__.User.findOne({\n                    email\n                });\n                const passwordOk = user && bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compareSync(password, user.password);\n                if (passwordOk) {\n                    return user;\n                }\n                return null;\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60 // 30 days\n    }\n};\nasync function isAdmin() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_5__.getServerSession)(authOptions);\n    const userEmail = session?.user?.email;\n    if (!userEmail) {\n        return false;\n    }\n    const userInfo = await _models_UserInfo__WEBPACK_IMPORTED_MODULE_1__.UserInfo.findOne({\n        email: userEmail\n    });\n    if (!userInfo) {\n        return false;\n    }\n    return userInfo.admin;\n}\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_5___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNMO0FBQ2Y7QUFDUztBQUNGO0FBQ2tCO0FBQ2E7QUFDVjtBQUNGO0FBRS9DLE1BQU1VLGNBQWM7SUFDekJDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsTUFBTTtJQUMxQkMsU0FBU04scUVBQWNBLENBQUNULDBEQUFhQTtJQUNyQ2dCLFdBQVc7UUFDVFIsc0VBQWNBLENBQUM7WUFDYlMsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxnQkFBZ0I7WUFDdENDLGNBQWNQLFFBQVFDLEdBQUcsQ0FBQ08sb0JBQW9CO1FBQ2hEO1FBQ0FiLDJFQUFtQkEsQ0FBQztZQUNsQmMsTUFBTTtZQUNOQyxJQUFJO1lBQ0pDLGFBQWE7Z0JBQ1hDLFVBQVU7b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07b0JBQVNDLGFBQWE7Z0JBQW1CO2dCQUMzRUMsVUFBVTtvQkFBRUgsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1HLFdBQVVOLFdBQVcsRUFBRU8sR0FBRztnQkFDOUIsTUFBTUMsUUFBUVIsYUFBYVE7Z0JBQzNCLE1BQU1ILFdBQVdMLGFBQWFLO2dCQUU5QnpCLDZDQUFnQixDQUFDUyxRQUFRQyxHQUFHLENBQUNvQixTQUFTO2dCQUN0QyxNQUFNQyxPQUFPLE1BQU05Qiw4Q0FBSUEsQ0FBQytCLE9BQU8sQ0FBQztvQkFBQ0o7Z0JBQUs7Z0JBQ3RDLE1BQU1LLGFBQWFGLFFBQVFoQyx5REFBa0IsQ0FBQzBCLFVBQVVNLEtBQUtOLFFBQVE7Z0JBRXJFLElBQUlRLFlBQVk7b0JBQ2QsT0FBT0Y7Z0JBQ1Q7Z0JBRUEsT0FBTztZQUNUO1FBQ0Y7S0FDRDtJQUNESSxTQUFTO1FBQ1BDLFVBQVU7UUFDVkMsUUFBUSxLQUFLLEtBQUssS0FBSyxHQUFHLFVBQVU7SUFDdEM7QUFDRixFQUFFO0FBRUssZUFBZUM7SUFDcEIsTUFBTUgsVUFBVSxNQUFNaEMsMkRBQWdCQSxDQUFDSTtJQUN2QyxNQUFNZ0MsWUFBWUosU0FBU0osTUFBTUg7SUFDakMsSUFBSSxDQUFDVyxXQUFXO1FBQ2QsT0FBTztJQUNUO0lBQ0EsTUFBTUMsV0FBVyxNQUFNMUMsc0RBQVFBLENBQUNrQyxPQUFPLENBQUM7UUFBQ0osT0FBTVc7SUFBUztJQUN4RCxJQUFJLENBQUNDLFVBQVU7UUFDYixPQUFPO0lBQ1Q7SUFDQSxPQUFPQSxTQUFTQyxLQUFLO0FBQ3ZCO0FBRUEsTUFBTUMsVUFBVXhDLGdEQUFRQSxDQUFDSztBQUVpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmctYXBwLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzPzIzMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIkAvbGlicy9tb25nb0Nvbm5lY3RcIjtcbmltcG9ydCB7VXNlckluZm99IGZyb20gXCJAL21vZGVscy9Vc2VySW5mb1wiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSAnQC9tb2RlbHMvVXNlcic7XG5pbXBvcnQgTmV4dEF1dGgsIHtnZXRTZXJ2ZXJTZXNzaW9ufSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvbW9uZ29kYi1hZGFwdGVyXCJcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcbiAgYWRhcHRlcjogTW9uZ29EQkFkYXB0ZXIoY2xpZW50UHJvbWlzZSksXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICBpZDogJ2NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiwgcGxhY2Vob2xkZXI6IFwidGVzdEBleGFtcGxlLmNvbVwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gY3JlZGVudGlhbHM/LmVtYWlsO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9IGNyZWRlbnRpYWxzPy5wYXNzd29yZDtcblxuICAgICAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTCk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe2VtYWlsfSk7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkT2sgPSB1c2VyICYmIGJjcnlwdC5jb21wYXJlU3luYyhwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG5cbiAgICAgICAgaWYgKHBhc3N3b3JkT2spIHtcbiAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICAgIG1heEFnZTogMzAgKiAyNCAqIDYwICogNjAgLy8gMzAgZGF5c1xuICB9XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNBZG1pbigpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICBjb25zdCB1c2VyRW1haWwgPSBzZXNzaW9uPy51c2VyPy5lbWFpbDtcbiAgaWYgKCF1c2VyRW1haWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgdXNlckluZm8gPSBhd2FpdCBVc2VySW5mby5maW5kT25lKHtlbWFpbDp1c2VyRW1haWx9KTtcbiAgaWYgKCF1c2VySW5mbykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdXNlckluZm8uYWRtaW47XG59XG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5cbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfSJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiVXNlckluZm8iLCJiY3J5cHQiLCJtb25nb29zZSIsIlVzZXIiLCJOZXh0QXV0aCIsImdldFNlcnZlclNlc3Npb24iLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJNb25nb0RCQWRhcHRlciIsImF1dGhPcHRpb25zIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVCIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIm5hbWUiLCJpZCIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxIiwiZW1haWwiLCJjb25uZWN0IiwiTU9OR09fVVJMIiwidXNlciIsImZpbmRPbmUiLCJwYXNzd29yZE9rIiwiY29tcGFyZVN5bmMiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJpc0FkbWluIiwidXNlckVtYWlsIiwidXNlckluZm8iLCJhZG1pbiIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/menu-items/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/menu-items/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n/* harmony import */ var _models_MenuItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/MenuItems */ \"(rsc)/./src/models/MenuItems.ts\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function POST(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGO_URL);\n    const data = await req.json();\n    if (await (0,_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.isAdmin)()) {\n        const menuItemDoc = await _models_MenuItems__WEBPACK_IMPORTED_MODULE_1__.MenuItem.create(data);\n        return Response.json(menuItemDoc);\n    } else {\n        return Response.json({});\n    }\n}\nasync function PUT(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGO_URL);\n    if (await (0,_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.isAdmin)()) {\n        const { _id, ...data } = await req.json();\n        await _models_MenuItems__WEBPACK_IMPORTED_MODULE_1__.MenuItem.findByIdAndUpdate(_id, data);\n    }\n    return Response.json(true);\n}\nasync function GET() {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGO_URL);\n    return Response.json(await _models_MenuItems__WEBPACK_IMPORTED_MODULE_1__.MenuItem.find());\n}\nasync function DELETE(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGO_URL);\n    const url = new URL(req.url);\n    const _id = url.searchParams.get(\"_id\");\n    if (await (0,_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.isAdmin)()) {\n        await _models_MenuItems__WEBPACK_IMPORTED_MODULE_1__.MenuItem.deleteOne({\n            _id\n        });\n    }\n    return Response.json(true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9tZW51LWl0ZW1zL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJEO0FBQ2I7QUFDZDtBQUV6QixlQUFlRyxLQUFLQyxHQUFHO0lBQzVCRix1REFBZ0IsQ0FBQ0ksUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBQ3RDLE1BQU1DLE9BQU8sTUFBTUwsSUFBSU0sSUFBSTtJQUMzQixJQUFJLE1BQU1WLHFFQUFPQSxJQUFJO1FBQ25CLE1BQU1XLGNBQWMsTUFBTVYsdURBQVFBLENBQUNXLE1BQU0sQ0FBQ0g7UUFDMUMsT0FBT0ksU0FBU0gsSUFBSSxDQUFDQztJQUN2QixPQUFPO1FBQ0wsT0FBT0UsU0FBU0gsSUFBSSxDQUFDLENBQUM7SUFDeEI7QUFDRjtBQUVPLGVBQWVJLElBQUlWLEdBQUc7SUFDM0JGLHVEQUFnQixDQUFDSSxRQUFRQyxHQUFHLENBQUNDLFNBQVM7SUFDdEMsSUFBSSxNQUFNUixxRUFBT0EsSUFBSTtRQUNuQixNQUFNLEVBQUNlLEdBQUcsRUFBRSxHQUFHTixNQUFLLEdBQUcsTUFBTUwsSUFBSU0sSUFBSTtRQUNyQyxNQUFNVCx1REFBUUEsQ0FBQ2UsaUJBQWlCLENBQUNELEtBQUtOO0lBQ3hDO0lBQ0EsT0FBT0ksU0FBU0gsSUFBSSxDQUFDO0FBQ3ZCO0FBRU8sZUFBZU87SUFDcEJmLHVEQUFnQixDQUFDSSxRQUFRQyxHQUFHLENBQUNDLFNBQVM7SUFDdEMsT0FBT0ssU0FBU0gsSUFBSSxDQUNsQixNQUFNVCx1REFBUUEsQ0FBQ2lCLElBQUk7QUFFdkI7QUFFTyxlQUFlQyxPQUFPZixHQUFHO0lBQzlCRix1REFBZ0IsQ0FBQ0ksUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBQ3RDLE1BQU1ZLE1BQU0sSUFBSUMsSUFBSWpCLElBQUlnQixHQUFHO0lBQzNCLE1BQU1MLE1BQU1LLElBQUlFLFlBQVksQ0FBQ0MsR0FBRyxDQUFDO0lBQ2pDLElBQUksTUFBTXZCLHFFQUFPQSxJQUFJO1FBQ25CLE1BQU1DLHVEQUFRQSxDQUFDdUIsU0FBUyxDQUFDO1lBQUNUO1FBQUc7SUFDL0I7SUFDQSxPQUFPRixTQUFTSCxJQUFJLENBQUM7QUFDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLW9yZGVyaW5nLWFwcC8uL3NyYy9hcHAvYXBpL21lbnUtaXRlbXMvcm91dGUudHM/MTA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzQWRtaW59IGZyb20gXCJAL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gXCJAL21vZGVscy9NZW51SXRlbXNcIjtcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XG4gIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gIGlmIChhd2FpdCBpc0FkbWluKCkpIHtcbiAgICBjb25zdCBtZW51SXRlbURvYyA9IGF3YWl0IE1lbnVJdGVtLmNyZWF0ZShkYXRhKTtcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbihtZW51SXRlbURvYyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe30pO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxKSB7XG4gIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMKTtcbiAgaWYgKGF3YWl0IGlzQWRtaW4oKSkge1xuICAgIGNvbnN0IHtfaWQsIC4uLmRhdGF9ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBhd2FpdCBNZW51SXRlbS5maW5kQnlJZEFuZFVwZGF0ZShfaWQsIGRhdGEpO1xuICB9XG4gIHJldHVybiBSZXNwb25zZS5qc29uKHRydWUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTCk7XG4gIHJldHVybiBSZXNwb25zZS5qc29uKFxuICAgIGF3YWl0IE1lbnVJdGVtLmZpbmQoKVxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKHJlcSkge1xuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTCk7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxLnVybCk7XG4gIGNvbnN0IF9pZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdfaWQnKTtcbiAgaWYgKGF3YWl0IGlzQWRtaW4oKSkge1xuICAgIGF3YWl0IE1lbnVJdGVtLmRlbGV0ZU9uZSh7X2lkfSk7XG4gIH1cbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24odHJ1ZSk7XG59Il0sIm5hbWVzIjpbImlzQWRtaW4iLCJNZW51SXRlbSIsIm1vbmdvb3NlIiwiUE9TVCIsInJlcSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJMIiwiZGF0YSIsImpzb24iLCJtZW51SXRlbURvYyIsImNyZWF0ZSIsIlJlc3BvbnNlIiwiUFVUIiwiX2lkIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJHRVQiLCJmaW5kIiwiREVMRVRFIiwidXJsIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZGVsZXRlT25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/menu-items/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/libs/mongoConnect.js":
/*!**********************************!*\
  !*** ./src/libs/mongoConnect.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (!process.env.MONGO_URL) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGO_URL;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9tb25nb0Nvbm5lY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUMsa0dBQWtHO0FBQzlEO0FBRXJDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxTQUFTLEVBQUU7SUFDMUIsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsTUFBTUosUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0FBQ2pDLE1BQU1HLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSVAsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1EsT0FBT0MsbUJBQW1CLEVBQUU7UUFDL0JILFNBQVMsSUFBSVAsZ0RBQVdBLENBQUNLLEtBQUtDO1FBQzlCRyxPQUFPQyxtQkFBbUIsR0FBR0gsT0FBT0ksT0FBTztJQUM3QztJQUNBSCxnQkFBZ0JDLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlRixhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvLi9zcmMvbGlicy9tb25nb0Nvbm5lY3QuanM/YzQwNiJdLCJzb3VyY2VzQ29udGVudCI6WyIgLy8gVGhpcyBhcHByb2FjaCBpcyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlcy93aXRoLW1vbmdvZGJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIlxuXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPX1VSTCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQvTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJylcbn1cblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJMXG5jb25zdCBvcHRpb25zID0ge31cblxubGV0IGNsaWVudFxubGV0IGNsaWVudFByb21pc2U7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbiAgfVxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2Vcbn0gZWxzZSB7XG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG59XG5cbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZSJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkwiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/mongoConnect.js\n");

/***/ }),

/***/ "(rsc)/./src/models/MenuItems.ts":
/*!*********************************!*\
  !*** ./src/models/MenuItems.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuItem: () => (/* binding */ MenuItem)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ExtraPriceSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: String,\n    price: Number\n});\nconst MenuItemSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    image: {\n        type: String\n    },\n    name: {\n        type: String\n    },\n    description: {\n        type: String\n    },\n    category: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types).ObjectId\n    },\n    basePrice: {\n        type: Number\n    },\n    sizes: {\n        type: [\n            ExtraPriceSchema\n        ]\n    },\n    extraIngredientsPrices: {\n        type: [\n            ExtraPriceSchema\n        ]\n    }\n}, {\n    timestamps: true\n});\nconst MenuItem = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.MenuItem || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"MenuItem\", MenuItemSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL01lbnVJdGVtcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkQ7QUFFM0QsTUFBTUksbUJBQW1CLElBQUlILDRDQUFNQSxDQUFDO0lBQ2hDSSxNQUFNQztJQUNOQyxPQUFPQztBQUNYO0FBRUEsTUFBTUMsaUJBQWlCLElBQUlSLDRDQUFNQSxDQUFDO0lBQzlCUyxPQUFPO1FBQUVDLE1BQU1MO0lBQU87SUFDdEJELE1BQU07UUFBRU0sTUFBTUw7SUFBTztJQUNyQk0sYUFBYTtRQUFFRCxNQUFNTDtJQUFPO0lBQzVCTyxVQUFVO1FBQUVGLE1BQU1YLHVEQUFjLENBQUNlLFFBQVE7SUFBQztJQUMxQ0MsV0FBVztRQUFFTCxNQUFNSDtJQUFPO0lBQzFCUyxPQUFPO1FBQUVOLE1BQU07WUFBQ1A7U0FBaUI7SUFBQztJQUNsQ2Msd0JBQXdCO1FBQUVQLE1BQU07WUFBQ1A7U0FBaUI7SUFBQztBQUN2RCxHQUFHO0lBQUVlLFlBQVk7QUFBSztBQUVmLE1BQU1DLFdBQVdqQiw0Q0FBTUEsRUFBRWlCLFlBQVlsQiwrQ0FBS0EsQ0FBQyxZQUFZTyxnQkFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmctYXBwLy4vc3JjL21vZGVscy9NZW51SXRlbXMudHM/MzYxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IEV4dHJhUHJpY2VTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgcHJpY2U6IE51bWJlclxufSlcblxuY29uc3QgTWVudUl0ZW1TY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBpbWFnZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGRlc2NyaXB0aW9uOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGNhdGVnb3J5OiB7IHR5cGU6IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkIH0sXG4gICAgYmFzZVByaWNlOiB7IHR5cGU6IE51bWJlciB9LFxuICAgIHNpemVzOiB7IHR5cGU6IFtFeHRyYVByaWNlU2NoZW1hXSB9LFxuICAgIGV4dHJhSW5ncmVkaWVudHNQcmljZXM6IHsgdHlwZTogW0V4dHJhUHJpY2VTY2hlbWFdIH0sXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSlcblxuZXhwb3J0IGNvbnN0IE1lbnVJdGVtID0gbW9kZWxzPy5NZW51SXRlbSB8fCBtb2RlbChcIk1lbnVJdGVtXCIsIE1lbnVJdGVtU2NoZW1hKSJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwiRXh0cmFQcmljZVNjaGVtYSIsIm5hbWUiLCJTdHJpbmciLCJwcmljZSIsIk51bWJlciIsIk1lbnVJdGVtU2NoZW1hIiwiaW1hZ2UiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJiYXNlUHJpY2UiLCJzaXplcyIsImV4dHJhSW5ncmVkaWVudHNQcmljZXMiLCJ0aW1lc3RhbXBzIiwiTWVudUl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/MenuItems.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/@auth","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmenu-items%2Froute&page=%2Fapi%2Fmenu-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-items%2Froute.ts&appDir=%2Fhome%2Fnineleaps%2FDesktop%2FFood-Ordering-App%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fnineleaps%2FDesktop%2FFood-Ordering-App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();