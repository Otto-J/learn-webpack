/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

/**
 * 格式化文本
 *
 * @format
 * @param {string} name
 * @return {string}
 */

module.exports = function (name) {
  return `hello ${name}`;
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function 实现require方法，和commonjs类似
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache 检查模块是否在缓存里
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache) 创建一个新模块并放入缓存里
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function 执行模块方法
/******/ 		// module当前引用模块， module.exports 模块的导出对象， webpack的require方法
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module 导出 exports
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/** @format */

const hello = __webpack_require__(1);

console.log(hello("otto"));

})();

/******/ })()
;