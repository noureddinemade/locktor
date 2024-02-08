/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/general.ts":
/*!**********************************!*\
  !*** ./src/functions/general.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleError: () => (/* binding */ handleError),
/* harmony export */   notifyAndClose: () => (/* binding */ notifyAndClose)
/* harmony export */ });
// Notify with a message and then close plugin
function notifyAndClose(message) {
    // console.clear();
    figma.notify(message);
    figma.closePlugin();
}
// Log the error to the console and close plugin
function handleError(message, error) {
    // Print error to console and then close plugin
    console.log('> Error:', error.message);
    console.log('-------------------');
    console.log(error.stack);
    console.log('-------------------');
    notifyAndClose(message);
}


/***/ }),

/***/ "./src/functions/runPlugin.ts":
/*!************************************!*\
  !*** ./src/functions/runPlugin.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runPlugin: () => (/* binding */ runPlugin)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./src/functions/general.ts");

// Run plugin
function runPlugin() {
    // Get selection
    const selection = figma.currentPage.selection;
    // Check if there is anything selected
    if (selection) {
        // Set up
        let locked = 0;
        let unlocked = 0;
        // Loop thru selection
        selection.forEach((i) => {
            // Check the node's lock status
            if (i.locked === true) {
                // Unlock the node
                unlocked = unlocked + 1;
                i.locked = false;
            }
            else {
                // Lock the node
                locked = locked + 1;
                i.locked = true;
            }
        });
        // Close
        (0,_general__WEBPACK_IMPORTED_MODULE_0__.notifyAndClose)(`${locked} items have been locked / ${unlocked} items have been unlocked`);
    }
    else {
        (0,_general__WEBPACK_IMPORTED_MODULE_0__.notifyAndClose)('How can you manage a lock for nothing?');
    }
    ;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/general */ "./src/functions/general.ts");
/* harmony import */ var _functions_runPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/runPlugin */ "./src/functions/runPlugin.ts");
// Import


// Run the plugin
try {
    (0,_functions_runPlugin__WEBPACK_IMPORTED_MODULE_1__.runPlugin)();
}
// Catch any errors, log in the console and close plugin
catch (error) {
    (0,_functions_general__WEBPACK_IMPORTED_MODULE_0__.handleError)('😢😢 Something went wrong', error);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkMkM7QUFDM0M7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxRQUFRLHdEQUFjLElBQUksUUFBUSwyQkFBMkIsVUFBVTtBQUN2RTtBQUNBO0FBQ0EsUUFBUSx3REFBYztBQUN0QjtBQUNBO0FBQ0E7Ozs7Ozs7VUMvQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNrRDtBQUNBO0FBQ2xEO0FBQ0E7QUFDQSxJQUFJLCtEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBVztBQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVG9rZW4gTGlzdGVyLy4vc3JjL2Z1bmN0aW9ucy9nZW5lcmFsLnRzIiwid2VicGFjazovL1Rva2VuIExpc3Rlci8uL3NyYy9mdW5jdGlvbnMvcnVuUGx1Z2luLnRzIiwid2VicGFjazovL1Rva2VuIExpc3Rlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Ub2tlbiBMaXN0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1Rva2VuIExpc3Rlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1Rva2VuIExpc3Rlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1Rva2VuIExpc3Rlci8uL3NyYy9jb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5vdGlmeSB3aXRoIGEgbWVzc2FnZSBhbmQgdGhlbiBjbG9zZSBwbHVnaW5cbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlBbmRDbG9zZShtZXNzYWdlKSB7XG4gICAgLy8gY29uc29sZS5jbGVhcigpO1xuICAgIGZpZ21hLm5vdGlmeShtZXNzYWdlKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuLy8gTG9nIHRoZSBlcnJvciB0byB0aGUgY29uc29sZSBhbmQgY2xvc2UgcGx1Z2luXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICAvLyBQcmludCBlcnJvciB0byBjb25zb2xlIGFuZCB0aGVuIGNsb3NlIHBsdWdpblxuICAgIGNvbnNvbGUubG9nKCc+IEVycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgY29uc29sZS5sb2coZXJyb3Iuc3RhY2spO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgbm90aWZ5QW5kQ2xvc2UobWVzc2FnZSk7XG59XG4iLCJpbXBvcnQgeyBub3RpZnlBbmRDbG9zZSB9IGZyb20gXCIuL2dlbmVyYWxcIjtcbi8vIFJ1biBwbHVnaW5cbmV4cG9ydCBmdW5jdGlvbiBydW5QbHVnaW4oKSB7XG4gICAgLy8gR2V0IHNlbGVjdGlvblxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhbnl0aGluZyBzZWxlY3RlZFxuICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgLy8gU2V0IHVwXG4gICAgICAgIGxldCBsb2NrZWQgPSAwO1xuICAgICAgICBsZXQgdW5sb2NrZWQgPSAwO1xuICAgICAgICAvLyBMb29wIHRocnUgc2VsZWN0aW9uXG4gICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGUgbm9kZSdzIGxvY2sgc3RhdHVzXG4gICAgICAgICAgICBpZiAoaS5sb2NrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyBVbmxvY2sgdGhlIG5vZGVcbiAgICAgICAgICAgICAgICB1bmxvY2tlZCA9IHVubG9ja2VkICsgMTtcbiAgICAgICAgICAgICAgICBpLmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTG9jayB0aGUgbm9kZVxuICAgICAgICAgICAgICAgIGxvY2tlZCA9IGxvY2tlZCArIDE7XG4gICAgICAgICAgICAgICAgaS5sb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQ2xvc2VcbiAgICAgICAgbm90aWZ5QW5kQ2xvc2UoYCR7bG9ja2VkfSBpdGVtcyBoYXZlIGJlZW4gbG9ja2VkIC8gJHt1bmxvY2tlZH0gaXRlbXMgaGF2ZSBiZWVuIHVubG9ja2VkYCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBub3RpZnlBbmRDbG9zZSgnSG93IGNhbiB5b3UgbWFuYWdlIGEgbG9jayBmb3Igbm90aGluZz8nKTtcbiAgICB9XG4gICAgO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBJbXBvcnRcbmltcG9ydCB7IGhhbmRsZUVycm9yIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2dlbmVyYWxcIjtcbmltcG9ydCB7IHJ1blBsdWdpbiB9IGZyb20gXCIuL2Z1bmN0aW9ucy9ydW5QbHVnaW5cIjtcbi8vIFJ1biB0aGUgcGx1Z2luXG50cnkge1xuICAgIHJ1blBsdWdpbigpO1xufVxuLy8gQ2F0Y2ggYW55IGVycm9ycywgbG9nIGluIHRoZSBjb25zb2xlIGFuZCBjbG9zZSBwbHVnaW5cbmNhdGNoIChlcnJvcikge1xuICAgIGhhbmRsZUVycm9yKCfwn5ii8J+YoiBTb21ldGhpbmcgd2VudCB3cm9uZycsIGVycm9yKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==