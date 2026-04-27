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
exports.id = "app/api/restaurant/route";
exports.ids = ["app/api/restaurant/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frestaurant%2Froute&page=%2Fapi%2Frestaurant%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frestaurant%2Froute.ts&appDir=C%3A%5CUsers%5CHome%5CDesktop%5Cvizag%20cruise%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHome%5CDesktop%5Cvizag%20cruise&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frestaurant%2Froute&page=%2Fapi%2Frestaurant%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frestaurant%2Froute.ts&appDir=C%3A%5CUsers%5CHome%5CDesktop%5Cvizag%20cruise%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHome%5CDesktop%5Cvizag%20cruise&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Home_Desktop_vizag_cruise_src_app_api_restaurant_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/restaurant/route.ts */ \"(rsc)/./src/app/api/restaurant/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/restaurant/route\",\n        pathname: \"/api/restaurant\",\n        filename: \"route\",\n        bundlePath: \"app/api/restaurant/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Home\\\\Desktop\\\\vizag cruise\\\\src\\\\app\\\\api\\\\restaurant\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Home_Desktop_vizag_cruise_src_app_api_restaurant_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZXN0YXVyYW50JTJGcm91dGUmcGFnZT0lMkZhcGklMkZyZXN0YXVyYW50JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcmVzdGF1cmFudCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNIb21lJTVDRGVza3RvcCU1Q3ZpemFnJTIwY3J1aXNlJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNIb21lJTVDRGVza3RvcCU1Q3ZpemFnJTIwY3J1aXNlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMyQjtBQUN4RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcSG9tZVxcXFxEZXNrdG9wXFxcXHZpemFnIGNydWlzZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxyZXN0YXVyYW50XFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9yZXN0YXVyYW50L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcmVzdGF1cmFudFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcmVzdGF1cmFudC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEhvbWVcXFxcRGVza3RvcFxcXFx2aXphZyBjcnVpc2VcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccmVzdGF1cmFudFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frestaurant%2Froute&page=%2Fapi%2Frestaurant%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frestaurant%2Froute.ts&appDir=C%3A%5CUsers%5CHome%5CDesktop%5Cvizag%20cruise%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHome%5CDesktop%5Cvizag%20cruise&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/restaurant/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/restaurant/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/supabase */ \"(rsc)/./src/lib/supabase.ts\");\n\n\nconst dynamic = 'force-dynamic';\nasync function GET() {\n    try {\n        const { data, error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_1__.supabase.from('site_settings').select('*').eq('key', 'restaurant_photo').single();\n        if (error && error.code !== 'PGRST116') throw error;\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data || {\n            value: '/luxury-restaurant.png'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to fetch settings'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const { url } = await request.json();\n        const { data, error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_1__.supabaseAdmin.from('site_settings').upsert({\n            key: 'restaurant_photo',\n            value: url\n        }, {\n            onConflict: 'key'\n        }).select();\n        if (error) throw error;\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to update settings'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yZXN0YXVyYW50L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBQ3FCO0FBRXpELE1BQU1HLFVBQVUsZ0JBQWdCO0FBRWhDLGVBQWVDO0lBQ3BCLElBQUk7UUFDRixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTUwsbURBQVFBLENBQ25DTSxJQUFJLENBQUMsaUJBQ0xDLE1BQU0sQ0FBQyxLQUNQQyxFQUFFLENBQUMsT0FBTyxvQkFDVkMsTUFBTTtRQUVULElBQUlKLFNBQVNBLE1BQU1LLElBQUksS0FBSyxZQUFZLE1BQU1MO1FBQzlDLE9BQU9OLHFEQUFZQSxDQUFDWSxJQUFJLENBQUNQLFFBQVE7WUFBRVEsT0FBTztRQUF5QjtJQUNyRSxFQUFFLE9BQU9QLE9BQU87UUFDZCxPQUFPTixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVOLE9BQU87UUFBMkIsR0FBRztZQUFFUSxRQUFRO1FBQUk7SUFDaEY7QUFDRjtBQUVPLGVBQWVDLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNLEVBQUVDLEdBQUcsRUFBRSxHQUFHLE1BQU1ELFFBQVFKLElBQUk7UUFDbEMsTUFBTSxFQUFFUCxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1KLHdEQUFhQSxDQUN4Q0ssSUFBSSxDQUFDLGlCQUNMVyxNQUFNLENBQUM7WUFBRUMsS0FBSztZQUFvQk4sT0FBT0k7UUFBSSxHQUFHO1lBQUVHLFlBQVk7UUFBTSxHQUNwRVosTUFBTTtRQUVULElBQUlGLE9BQU8sTUFBTUE7UUFDakIsT0FBT04scURBQVlBLENBQUNZLElBQUksQ0FBQ1A7SUFDM0IsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBT04scURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFTixPQUFPO1FBQTRCLEdBQUc7WUFBRVEsUUFBUTtRQUFJO0lBQ2pGO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSG9tZVxcRGVza3RvcFxcdml6YWcgY3J1aXNlXFxzcmNcXGFwcFxcYXBpXFxyZXN0YXVyYW50XFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBzdXBhYmFzZSwgc3VwYWJhc2VBZG1pbiB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdXBhYmFzZSc7XG5cbmV4cG9ydCBjb25zdCBkeW5hbWljID0gJ2ZvcmNlLWR5bmFtaWMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAuZnJvbSgnc2l0ZV9zZXR0aW5ncycpXG4gICAgICAuc2VsZWN0KCcqJylcbiAgICAgIC5lcSgna2V5JywgJ3Jlc3RhdXJhbnRfcGhvdG8nKVxuICAgICAgLnNpbmdsZSgpO1xuXG4gICAgaWYgKGVycm9yICYmIGVycm9yLmNvZGUgIT09ICdQR1JTVDExNicpIHRocm93IGVycm9yO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihkYXRhIHx8IHsgdmFsdWU6ICcvbHV4dXJ5LXJlc3RhdXJhbnQucG5nJyB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBzZXR0aW5ncycgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1cmwgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW5cbiAgICAgIC5mcm9tKCdzaXRlX3NldHRpbmdzJylcbiAgICAgIC51cHNlcnQoeyBrZXk6ICdyZXN0YXVyYW50X3Bob3RvJywgdmFsdWU6IHVybCB9LCB7IG9uQ29uZmxpY3Q6ICdrZXknIH0pXG4gICAgICAuc2VsZWN0KCk7XG5cbiAgICBpZiAoZXJyb3IpIHRocm93IGVycm9yO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihkYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgc2V0dGluZ3MnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJzdXBhYmFzZSIsInN1cGFiYXNlQWRtaW4iLCJkeW5hbWljIiwiR0VUIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsInNlbGVjdCIsImVxIiwic2luZ2xlIiwiY29kZSIsImpzb24iLCJ2YWx1ZSIsInN0YXR1cyIsIlBPU1QiLCJyZXF1ZXN0IiwidXJsIiwidXBzZXJ0Iiwia2V5Iiwib25Db25mbGljdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/restaurant/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/supabase.ts":
/*!*****************************!*\
  !*** ./src/lib/supabase.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase),\n/* harmony export */   supabaseAdmin: () => (/* binding */ supabaseAdmin)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/index.mjs\");\n\nconst supabaseUrl = \"https://azgipivowtizqtpzpqvu.supabase.co\" || 0;\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6Z2lwaXZvd3RpenF0cHpwcXZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyMDcxMTEsImV4cCI6MjA5Mjc4MzExMX0.5_iAfWoYFnu6PzVchuwevXjtCIZVzNGhUe7s8soZpYs\" || 0;\nif (!supabaseUrl || !supabaseAnonKey) {\n    console.warn('Supabase credentials missing. Using placeholder for build process.');\n}\n// Using fallback placeholders to prevent build-time crashes. \n// Real values must be set in Vercel Environment Variables for runtime functionality.\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl || 'https://placeholder-url.supabase.co', supabaseAnonKey || 'placeholder-key');\n// Admin client for server-side operations (bypasses RLS)\nconst serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';\nconst supabaseAdmin = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl || 'https://placeholder-url.supabase.co', serviceRoleKey || 'placeholder-key');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3N1cGFiYXNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxRDtBQUVyRCxNQUFNQyxjQUFjQywwQ0FBb0MsSUFBSSxDQUFFO0FBQzlELE1BQU1HLGtCQUFrQkgsa05BQXlDLElBQUksQ0FBRTtBQUV2RSxJQUFJLENBQUNELGVBQWUsQ0FBQ0ksaUJBQWlCO0lBQ3BDRSxRQUFRQyxJQUFJLENBQUM7QUFDZjtBQUVBLDhEQUE4RDtBQUM5RCxxRkFBcUY7QUFDOUUsTUFBTUMsV0FBV1QsbUVBQVlBLENBQ2xDQyxlQUFlLHVDQUNmSSxtQkFBbUIsbUJBQ25CO0FBRUYseURBQXlEO0FBQ3pELE1BQU1LLGlCQUFpQlIsUUFBUUMsR0FBRyxDQUFDUSx5QkFBeUIsSUFBSTtBQUN6RCxNQUFNQyxnQkFBZ0JaLG1FQUFZQSxDQUN2Q0MsZUFBZSx1Q0FDZlMsa0JBQWtCLG1CQUNsQiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxIb21lXFxEZXNrdG9wXFx2aXphZyBjcnVpc2VcXHNyY1xcbGliXFxzdXBhYmFzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xuXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCB8fCAnJztcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIHx8ICcnO1xuXG5pZiAoIXN1cGFiYXNlVXJsIHx8ICFzdXBhYmFzZUFub25LZXkpIHtcbiAgY29uc29sZS53YXJuKCdTdXBhYmFzZSBjcmVkZW50aWFscyBtaXNzaW5nLiBVc2luZyBwbGFjZWhvbGRlciBmb3IgYnVpbGQgcHJvY2Vzcy4nKTtcbn1cblxuLy8gVXNpbmcgZmFsbGJhY2sgcGxhY2Vob2xkZXJzIHRvIHByZXZlbnQgYnVpbGQtdGltZSBjcmFzaGVzLiBcbi8vIFJlYWwgdmFsdWVzIG11c3QgYmUgc2V0IGluIFZlcmNlbCBFbnZpcm9ubWVudCBWYXJpYWJsZXMgZm9yIHJ1bnRpbWUgZnVuY3Rpb25hbGl0eS5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChcbiAgc3VwYWJhc2VVcmwgfHwgJ2h0dHBzOi8vcGxhY2Vob2xkZXItdXJsLnN1cGFiYXNlLmNvJyxcbiAgc3VwYWJhc2VBbm9uS2V5IHx8ICdwbGFjZWhvbGRlci1rZXknXG4pO1xuXG4vLyBBZG1pbiBjbGllbnQgZm9yIHNlcnZlci1zaWRlIG9wZXJhdGlvbnMgKGJ5cGFzc2VzIFJMUylcbmNvbnN0IHNlcnZpY2VSb2xlS2V5ID0gcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSB8fCAnJztcbmV4cG9ydCBjb25zdCBzdXBhYmFzZUFkbWluID0gY3JlYXRlQ2xpZW50KFxuICBzdXBhYmFzZVVybCB8fCAnaHR0cHM6Ly9wbGFjZWhvbGRlci11cmwuc3VwYWJhc2UuY28nLFxuICBzZXJ2aWNlUm9sZUtleSB8fCAncGxhY2Vob2xkZXIta2V5J1xuKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUFub25LZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsImNvbnNvbGUiLCJ3YXJuIiwic3VwYWJhc2UiLCJzZXJ2aWNlUm9sZUtleSIsIlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVkiLCJzdXBhYmFzZUFkbWluIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/supabase.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tslib","vendor-chunks/iceberg-js"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frestaurant%2Froute&page=%2Fapi%2Frestaurant%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frestaurant%2Froute.ts&appDir=C%3A%5CUsers%5CHome%5CDesktop%5Cvizag%20cruise%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHome%5CDesktop%5Cvizag%20cruise&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();