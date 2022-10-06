"use strict";
(() => {
var exports = {};
exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 2285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestPostApi)
/* harmony export */ });
async function TestPostApi(req, res) {
  res.status(200).json({
    message: 'Post request sucess'
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2285));
module.exports = __webpack_exports__;

})();