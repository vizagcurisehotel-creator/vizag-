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
exports.id = "app/api/upload/route";
exports.ids = ["app/api/upload/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=C%3A%5CUsers%5CHome%5CDesktop%5Cvizag%20cruise%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHome%5CDesktop%5Cvizag%20cruise&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=C%3A%5CUsers%5CHome%5CDesktop%5Cvizag%20cruise%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHome%5CDesktop%5Cvizag%20cruise&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Home_Desktop_vizag_cruise_src_app_api_upload_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/upload/route.ts */ \"(rsc)/./src/app/api/upload/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/upload/route\",\n        pathname: \"/api/upload\",\n        filename: \"route\",\n        bundlePath: \"app/api/upload/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Home\\\\Desktop\\\\vizag cruise\\\\src\\\\app\\\\api\\\\upload\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Home_Desktop_vizag_cruise_src_app_api_upload_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1cGxvYWQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVwbG9hZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVwbG9hZCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNIb21lJTVDRGVza3RvcCU1Q3ZpemFnJTIwY3J1aXNlJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNIb21lJTVDRGVza3RvcCU1Q3ZpemFnJTIwY3J1aXNlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN1QjtBQUNwRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcSG9tZVxcXFxEZXNrdG9wXFxcXHZpemFnIGNydWlzZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx1cGxvYWRcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VwbG9hZC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VwbG9hZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXBsb2FkL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcSG9tZVxcXFxEZXNrdG9wXFxcXHZpemFnIGNydWlzZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx1cGxvYWRcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=C%3A%5CUsers%5CHome%5CDesktop%5Cvizag%20cruise%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHome%5CDesktop%5Cvizag%20cruise&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/upload/route.ts":
/*!*************************************!*\
  !*** ./src/app/api/upload/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/supabase */ \"(rsc)/./src/lib/supabase.ts\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"(rsc)/./node_modules/uuid/dist-node/v4.js\");\n\n\n\nasync function POST(req) {\n    try {\n        const formData = await req.formData();\n        const file = formData.get('file');\n        if (!file) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'No file uploaded'\n            }, {\n                status: 400\n            });\n        }\n        const buffer = Buffer.from(await file.arrayBuffer());\n        const filename = `${(0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()}-${file.name.replace(/\\s+/g, '-')}`;\n        // Upload to Supabase Storage 'rooms' bucket\n        const { data, error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_1__.supabaseAdmin.storage.from('rooms').upload(filename, buffer, {\n            contentType: file.type,\n            upsert: true\n        });\n        if (error) {\n            console.error('Supabase storage error:', error);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Failed to upload to Supabase'\n            }, {\n                status: 500\n            });\n        }\n        // Get Public URL\n        const { data: { publicUrl } } = _lib_supabase__WEBPACK_IMPORTED_MODULE_1__.supabaseAdmin.storage.from('rooms').getPublicUrl(filename);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            url: publicUrl\n        });\n    } catch (error) {\n        console.error('Upload error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Upload failed'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91cGxvYWQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3RDtBQUNGO0FBQ2xCO0FBRTdCLGVBQWVJLEtBQUtDLEdBQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1ELElBQUlDLFFBQVE7UUFDbkMsTUFBTUMsT0FBT0QsU0FBU0UsR0FBRyxDQUFDO1FBRTFCLElBQUksQ0FBQ0QsTUFBTTtZQUNULE9BQU9QLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBbUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3hFO1FBRUEsTUFBTUMsU0FBU0MsT0FBT0MsSUFBSSxDQUFDLE1BQU1QLEtBQUtRLFdBQVc7UUFDakQsTUFBTUMsV0FBVyxHQUFHYixnREFBTUEsR0FBRyxDQUFDLEVBQUVJLEtBQUtVLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsTUFBTTtRQUVoRSw0Q0FBNEM7UUFDNUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVULEtBQUssRUFBRSxHQUFHLE1BQU1ULHdEQUFhQSxDQUFDbUIsT0FBTyxDQUNoRE4sSUFBSSxDQUFDLFNBQ0xPLE1BQU0sQ0FBQ0wsVUFBVUosUUFBUTtZQUN4QlUsYUFBYWYsS0FBS2dCLElBQUk7WUFDdEJDLFFBQVE7UUFDVjtRQUVGLElBQUlkLE9BQU87WUFDVGUsUUFBUWYsS0FBSyxDQUFDLDJCQUEyQkE7WUFDekMsT0FBT1YscURBQVlBLENBQUNTLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUErQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDcEY7UUFFQSxpQkFBaUI7UUFDakIsTUFBTSxFQUFFUSxNQUFNLEVBQUVPLFNBQVMsRUFBRSxFQUFFLEdBQUd6Qix3REFBYUEsQ0FBQ21CLE9BQU8sQ0FDbEROLElBQUksQ0FBQyxTQUNMYSxZQUFZLENBQUNYO1FBRWhCLE9BQU9oQixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQ3ZCbUIsU0FBUztZQUNUQyxLQUFLSDtRQUNQO0lBQ0YsRUFBRSxPQUFPaEIsT0FBTztRQUNkZSxRQUFRZixLQUFLLENBQUMsaUJBQWlCQTtRQUMvQixPQUFPVixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBZ0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDckU7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxIb21lXFxEZXNrdG9wXFx2aXphZyBjcnVpc2VcXHNyY1xcYXBwXFxhcGlcXHVwbG9hZFxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IHN1cGFiYXNlQWRtaW4gfSBmcm9tICcuLi8uLi8uLi9saWIvc3VwYWJhc2UnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcS5mb3JtRGF0YSgpO1xuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKSBhcyBGaWxlO1xuXG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ05vIGZpbGUgdXBsb2FkZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpKTtcbiAgICBjb25zdCBmaWxlbmFtZSA9IGAke3V1aWR2NCgpfS0ke2ZpbGUubmFtZS5yZXBsYWNlKC9cXHMrL2csICctJyl9YDtcblxuICAgIC8vIFVwbG9hZCB0byBTdXBhYmFzZSBTdG9yYWdlICdyb29tcycgYnVja2V0XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pbi5zdG9yYWdlXG4gICAgICAuZnJvbSgncm9vbXMnKVxuICAgICAgLnVwbG9hZChmaWxlbmFtZSwgYnVmZmVyLCB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiBmaWxlLnR5cGUsXG4gICAgICAgIHVwc2VydDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1N1cGFiYXNlIHN0b3JhZ2UgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gdXBsb2FkIHRvIFN1cGFiYXNlJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICAgIH1cblxuICAgIC8vIEdldCBQdWJsaWMgVVJMXG4gICAgY29uc3QgeyBkYXRhOiB7IHB1YmxpY1VybCB9IH0gPSBzdXBhYmFzZUFkbWluLnN0b3JhZ2VcbiAgICAgIC5mcm9tKCdyb29tcycpXG4gICAgICAuZ2V0UHVibGljVXJsKGZpbGVuYW1lKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IFxuICAgICAgc3VjY2VzczogdHJ1ZSwgXG4gICAgICB1cmw6IHB1YmxpY1VybCBcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdVcGxvYWQgZXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVXBsb2FkIGZhaWxlZCcgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInN1cGFiYXNlQWRtaW4iLCJ2NCIsInV1aWR2NCIsIlBPU1QiLCJyZXEiLCJmb3JtRGF0YSIsImZpbGUiLCJnZXQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJidWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwiYXJyYXlCdWZmZXIiLCJmaWxlbmFtZSIsIm5hbWUiLCJyZXBsYWNlIiwiZGF0YSIsInN0b3JhZ2UiLCJ1cGxvYWQiLCJjb250ZW50VHlwZSIsInR5cGUiLCJ1cHNlcnQiLCJjb25zb2xlIiwicHVibGljVXJsIiwiZ2V0UHVibGljVXJsIiwic3VjY2VzcyIsInVybCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/upload/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tslib","vendor-chunks/iceberg-js","vendor-chunks/uuid"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=C%3A%5CUsers%5CHome%5CDesktop%5Cvizag%20cruise%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHome%5CDesktop%5Cvizag%20cruise&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();