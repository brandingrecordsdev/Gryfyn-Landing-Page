"use strict";
(() => {
var exports = {};
exports.id = 20;
exports.ids = [20];
exports.modules = {

/***/ 2856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestGetApi)
/* harmony export */ });
async function TestGetApi(req, res) {
  res.status(200).json({
    message: 'Get request sucess'
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2856));
module.exports = __webpack_exports__;

})();