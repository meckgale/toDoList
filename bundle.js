"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --lightgray: #EFEFEF;
    --blackish: #330000;
    --orange: #FFCC66;
}


body {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background-color: var(--lightgray);
    color: var(--blackish);
    width: 100%;
    margin: 1rem;
    gap: 2rem;
    min-width: min-content;
}

#todoAppContainer, #editContainer {
    display: none;
    flex-direction: column;
    width: 65%;
    gap: 1rem;
}

#todoAppContainer.active, #editContainer.working {
    display: flex;
}

input, textarea, select {
    border-style: none;
    border-radius: 1rem;
    height: 1.5rem;
}

#inputHeader, #editInputHeader{
    display: flex;
    justify-content: space-between;
}

#titleContainer, #dueDateContainer, #priorityContainer, #editTitleContainer, #editDueDateContainer, #editPriorityContainer{
    display: flex;
    flex-direction: column;
}

#descriptionSection, #editDescriptionSection {
    display: flex;
    flex-direction: column;
}

#taskDescription, #editTaskDescription {
    height: 8rem;
}

#listContainer{
    display: flex;
    flex-direction: column;
    width: 65%;
    gap: 2rem;
}

#taskList{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}


#deleteStorage{
    align-self: flex-end;
}

#filterContainer{
    display: flex;
    justify-content: space-between;
}

#selectContainer, #sortContainer {
    display: flex;
    flex-direction: column;
}

.taskContainer{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem;
    padding: 1rem;
    background-color: #afb3c5;
    border-radius: 1rem;
}

.topContainer{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

.bottomContainer{
    display: none;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
}

.bottomContainer.active {
    display: flex;
}

.topRight{
    display: flex;
    gap: 1rem;
    align-items: center;
}

.topLeft{
    display: flex;
    gap: 1rem;
    align-items: center;
}

button {
    align-self: center; 
    background-color: var(--orange);
    border: none;
    color: var(--blackish);
    text-align: center;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 2rem;
}

button:hover {
    transition: transform 100ms;
    transform: scale(1.1);
}

/* .detailTaskBtn {
    border: none;
    border-radius: 50%;
    padding: 0;
    min-width: 3rem;    
} */`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,iBAAiB;AACrB;;;AAKA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,iCAAiC;IACjC,kCAAkC;IAClC,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;;AAGA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,+BAA+B;IAC/B,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;;;;;GAKG","sourcesContent":[":root{\n    --lightgray: #EFEFEF;\n    --blackish: #330000;\n    --orange: #FFCC66;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto:wght@300&display=swap');\n\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 16px;\n    font-family: 'Roboto', sans-serif;\n    background-color: var(--lightgray);\n    color: var(--blackish);\n    width: 100%;\n    margin: 1rem;\n    gap: 2rem;\n    min-width: min-content;\n}\n\n#todoAppContainer, #editContainer {\n    display: none;\n    flex-direction: column;\n    width: 65%;\n    gap: 1rem;\n}\n\n#todoAppContainer.active, #editContainer.working {\n    display: flex;\n}\n\ninput, textarea, select {\n    border-style: none;\n    border-radius: 1rem;\n    height: 1.5rem;\n}\n\n#inputHeader, #editInputHeader{\n    display: flex;\n    justify-content: space-between;\n}\n\n#titleContainer, #dueDateContainer, #priorityContainer, #editTitleContainer, #editDueDateContainer, #editPriorityContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n#descriptionSection, #editDescriptionSection {\n    display: flex;\n    flex-direction: column;\n}\n\n#taskDescription, #editTaskDescription {\n    height: 8rem;\n}\n\n#listContainer{\n    display: flex;\n    flex-direction: column;\n    width: 65%;\n    gap: 2rem;\n}\n\n#taskList{\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n\n#deleteStorage{\n    align-self: flex-end;\n}\n\n#filterContainer{\n    display: flex;\n    justify-content: space-between;\n}\n\n#selectContainer, #sortContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.taskContainer{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    margin: 1rem;\n    padding: 1rem;\n    background-color: #afb3c5;\n    border-radius: 1rem;\n}\n\n.topContainer{\n    display: flex;\n    justify-content: space-between;\n    gap: 1rem;\n}\n\n.bottomContainer{\n    display: none;\n    gap: 1rem;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.bottomContainer.active {\n    display: flex;\n}\n\n.topRight{\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n.topLeft{\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\nbutton {\n    align-self: center; \n    background-color: var(--orange);\n    border: none;\n    color: var(--blackish);\n    text-align: center;\n    text-decoration: none;\n    padding: 0.5rem 1rem 0.5rem 1rem;\n    border-radius: 2rem;\n}\n\nbutton:hover {\n    transition: transform 100ms;\n    transform: scale(1.1);\n}\n\n/* .detailTaskBtn {\n    border: none;\n    border-radius: 50%;\n    padding: 0;\n    min-width: 3rem;    \n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* CREDIT: https://andy-bell.co.uk/a-modern-css-reset/ */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA,wDAAwD;;AAExD,qBAAqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA,0BAA0B;AAC1B;;;;;;;;;;EAUE,SAAS;AACX;;AAEA,2GAA2G;AAC3G;;EAEE,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA,iFAAiF;AACjF;EACE;GACC,qBAAqB;EACtB;EACA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF","sourcesContent":["/* CREDIT: https://andy-bell.co.uk/a-modern-css-reset/ */\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=\"list\"],\nol[role=\"list\"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations and transitions for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n   scroll-behavior: auto;\n  }\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initDOM: () => (/* binding */ initDOM)
/* harmony export */ });
/* harmony import */ var _currentDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentDate */ "./src/currentDate.js");


function initDOM() {
//Create a button for open-close app container
const appContainerBtn = document.createElement('button')
appContainerBtn.id = 'appContainerButton'
appContainerBtn.classList.add = 'appContainerButton'
appContainerBtn.textContent = 'New Task'

// Create a container div for the to-do app
const todoAppContainer = document.createElement('div')
todoAppContainer.id = 'todoAppContainer'
todoAppContainer.classList.add = 'todoAppContainer'

//Create a list container
const listContainer = document.createElement('div')
listContainer.id = 'listContainer'

//Create a filter container
const filterContainer = document.createElement('div')
filterContainer.id = 'filterContainer'

// Create a heading for the app
const heading = document.createElement('h1')
heading.textContent = 'To-Do List'

//Create header container for inputs(title, due date, priority and submit button)
const inputHeader = document.createElement('div')
inputHeader.id = 'inputHeader'

//Create title container for label and input elements
const titleContainer = document.createElement('div')
titleContainer.id = 'titleContainer' 

//Create due date container for label and input elements
const dueDateContainer = document.createElement('div')
dueDateContainer.id = 'dueDateContainer' 

//Create priority container for label and input elements
const priorityContainer = document.createElement('div')
priorityContainer.id = 'priorityContainer'

//Create section for description
const descriptionSection = document.createElement('div')
descriptionSection.id = 'descriptionSection'

//Label element for title input
const titleLabel = document.createElement('label')
titleLabel.textContent = 'Task Title'
titleLabel.setAttribute('for', 'taskTitle')
titleContainer.appendChild(titleLabel)

// Create an input field for adding tasks
const taskTitle = document.createElement('input')
taskTitle.id = 'taskTitle' 
taskTitle.type = 'text'
taskTitle.placeholder = 'Title'
titleContainer.appendChild(taskTitle)

// Create an description field for tasks details
const taskDescription = document.createElement('textarea')
taskDescription.id = 'taskDescription'

//Label element for title description
const descriptionLabel = document.createElement('label')
descriptionLabel.textContent = 'Task Description'
descriptionLabel.setAttribute('for', 'taskDescription')
descriptionSection.appendChild(descriptionLabel)

//Label element for due date input
const dueDateLabel = document.createElement('label')
dueDateLabel.textContent = 'Due Date'
dueDateLabel.setAttribute('for', 'dueDateLabel')
dueDateContainer.appendChild(dueDateLabel)

// Create an dueDate for tasks deadline
const taskDueDate = document.createElement('input')
taskDueDate.id = 'taskDueDate'
taskDueDate.type = 'date'
taskDueDate.value = (0,_currentDate__WEBPACK_IMPORTED_MODULE_0__.formatDate)()
dueDateContainer.appendChild(taskDueDate)

//Label element for priority input
const priorityLabel = document.createElement('label')
priorityLabel.textContent = 'Task Priority'
priorityLabel.setAttribute('for', 'priorityLabel')
priorityContainer.appendChild(priorityLabel)

//Create priority for tasks importance
const taskPriority = document.createElement('select')
taskPriority.id = "taskPriority"
const priorities = ["High", "Medium", "Low"];
// Loop through the priorities and create an option element for each
priorities.forEach((priority) => {
    const taskOption = document.createElement("option");
    taskOption.classList.add('taskOption')
    taskOption.value = priority; // Set the value attribute to the priority value
    taskOption.textContent = priority; // Set the text content of the option
    if (priority === "Medium") {
        taskOption.selected = true; // Set 'Medium' as the default selected option
    }
    taskPriority.appendChild(taskOption); // Append the option to the select element
  });
priorityContainer.appendChild(taskPriority)

// Create a button to add tasks
const addTaskBtn = document.createElement('button')
addTaskBtn.id = 'addTaskBtn'
addTaskBtn.textContent = 'Add Task'

//Create label for select element
const selectLabel = document.createElement('label')
selectLabel.textContent = 'Filter Tasks'
selectLabel.setAttribute('for', 'selectLabel')

// Create the select element
const select = document.createElement('select');
select.setAttribute('id', 'taskFilter'); // Set an ID for the select element

// Create the options and add them to the select element
const optionCompleted = document.createElement('option');
optionCompleted.value = 'completed';
optionCompleted.textContent = 'Completed';

const optionActive = document.createElement('option');
optionActive.value = 'active';
optionActive.textContent = 'Active';

const optionAll = document.createElement('option');
optionAll.value = 'all';
optionAll.textContent = 'All';

// Append the options to the select element

select.appendChild(optionAll);
select.appendChild(optionActive);
select.appendChild(optionCompleted);

// Append the select element to an existing element in the DOM
const selectContainer = document.createElement('div')
selectContainer.id = 'selectContainer'
selectContainer.appendChild(selectLabel)
selectContainer.appendChild(select)
filterContainer.appendChild(selectContainer)

//Label for select sort element
const sortLabel = document.createElement('label')
sortLabel.textContent = 'Sort By'
sortLabel.setAttribute('for', 'sortLabel')

//Create a select element to sort task list
const sort = document.createElement('select')
sort.id = 'sort'
sort.textContent = 'Sort By'
const sortOptions = ["Due Date", "Priority"]
sortOptions.forEach((sortItem, index) => {
  const option = document.createElement("option");
  const optionId = `sortOption_${index}`
  option.value = sortItem
  option.textContent = sortItem
  option.id = optionId
  if (sortItem === "Due Date") {
    option.selected = true
  }
  sort.appendChild(option)
})
const sortContainer = document.createElement('div')
sortContainer.id = 'sortContainer'
sortContainer.appendChild(sortLabel)
sortContainer.appendChild(sort)
filterContainer.appendChild(sortContainer)

//Create a button to delete task storage
const deleteStorageBtn = document.createElement('button')
deleteStorageBtn.id = 'deleteStorage'
deleteStorageBtn.textContent = 'Clear Tasks'

// Create an empty div element to hold the task list
const taskList = document.createElement('div')
taskList.id ='taskList'

// Append the heading, input field, button, and task list to the container
inputHeader.appendChild(titleContainer)
inputHeader.appendChild(dueDateContainer)
inputHeader.appendChild(priorityContainer)
inputHeader.appendChild(addTaskBtn)
todoAppContainer.appendChild(inputHeader)
descriptionSection.appendChild(taskDescription)
todoAppContainer.appendChild(descriptionSection)
listContainer.appendChild(filterContainer)
listContainer.appendChild(taskList)
listContainer.appendChild(deleteStorageBtn)

// Append the container to the document body
document.body.appendChild(heading)
document.body.appendChild(appContainerBtn)
document.body.appendChild(todoAppContainer)
document.body.appendChild(listContainer)
}



/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initUI: () => (/* binding */ initUI),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoList */ "./src/toDoList.js");
/* harmony import */ var _currentDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentDate */ "./src/currentDate.js");



function initUI() {
  // Initialize the UI, render tasks, and add event listeners
  const taskList = document.getElementById('taskList')

  // Event delegation: Add a single click event listener to the task list
  taskList.addEventListener('click', handleTaskClick)

  //New task button
  const newTaskBtn = document.getElementById('appContainerButton')
  initAppContainer(newTaskBtn, 'toggle')

  // Add event listener for adding tasks
  const addTaskBtn = document.getElementById('addTaskBtn');
  addTaskBtn.addEventListener('click', () => {
    handleAddTask()
    initAppContainer(addTaskBtn, 'remove')
    renderTasks();
  });

  //Add event listener for sorting task list
  const selectElement = document.getElementById("sort");
  selectElement.addEventListener("change", () => {
      const selectedCriteria = selectElement.value;
      (0,_toDoList__WEBPACK_IMPORTED_MODULE_0__.sortTasks)(selectedCriteria);
      renderTasks()
  });

  //Add event listener for filter task list
  const filterSelect = document.getElementById('taskFilter')
  filterSelect.addEventListener("change", () => {
    const selectedFilter = filterSelect.value;
    (0,_toDoList__WEBPACK_IMPORTED_MODULE_0__.filterTasks)(selectedFilter);
    renderTasks()
});

  //Delete tasks storage
  const deleteStorageButton = document.getElementById('deleteStorage')
  deleteStorageButton.addEventListener('click', () => {
    ;(0,_toDoList__WEBPACK_IMPORTED_MODULE_0__.deleteTaskStorage)()
    renderTasks()
    });

  // Render initial tasks
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('taskList')
  taskList.innerHTML = '' // Clear the existing task list

  for (const task of _toDoList__WEBPACK_IMPORTED_MODULE_0__.uiTasks) {
      const listItem = document.createElement('div')
      listItem.classList.add('listItem')
      listItem.dataset.id = task.id // Set a custom data attribute for the task ID
      listItem.innerHTML = `
      <div class="taskContainer">
        <div class="topContainer">
          <div class="topLeft">
            <button class="detailTaskBtn" id="detailTaskBtn-${task.id}" name="detailTaskBtn">V</button>
            <input type="checkbox" id="taskCheckbox-${task.id}" name="taskCheckbox" ${task.completed ? 'checked' : ''}>
            <div class="taskTitle" id="taskTitle-${task.id}">${task.title}</div>
          </div>
          <div class="topRight">
            <div class="taskDue" id="taskDue-${task.id}">Due: ${task.dueDate}</div>
            <div class="taskPriority" id="taskPriority-${task.id}">Priority: ${task.priority}</div>
            <button id="deleteTaskBtn-${task.id}" name="deleteTaskBtn">Delete</button>
          </div>
        </div>
        <div class="bottomContainer">
          <div class="taskDescription" id="taskDescription-${task.id}">${task.description}</div>
          <button id="editTaskBtn-${task.id}" name="editTaskBtn">Edit</button>
        </div>
      </div>`
      
      //Append elements
      taskList.appendChild(listItem)
      
      //Generate task editor
      editTaskGenerator(taskList, listItem)
  }
}

function handleAddTask() {
  const taskTitle = document.getElementById('taskTitle');
  const title = taskTitle.value.trim();

  if (title === '') {
      alert('Add title for task!');
      return; // Don't add empty tasks
  }

  const taskDescription = document.getElementById('taskDescription')
  const description = taskDescription.value

  if (description === '') {
      alert('Add description for task!');
      return; // Don't add empty tasks
  }

  const dueDateInput = document.getElementById('taskDueDate')
  const dueDate = dueDateInput.value

  const priorityOption = document.querySelector('select')
  const priority = priorityOption.value
  
  ;(0,_toDoList__WEBPACK_IMPORTED_MODULE_0__.addTask)(title, description, dueDate, priority);

  // Clear input and provide feedback
  taskTitle.value = '';
  taskDescription.value = '';
  dueDateInput.value = (0,_currentDate__WEBPACK_IMPORTED_MODULE_1__.formatDate)();
  priorityOption.value = "Medium";
  alert('Task added successfully!');
}

function handleTaskClick(event) {
  const target = event.target

  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
      // Checkbox was clicked, handle task completion
      const taskId = parseInt(target.closest('div[data-id]').dataset.id)
      const completed = target.checked
      ;(0,_toDoList__WEBPACK_IMPORTED_MODULE_0__.updateTaskStatus)(taskId, completed)
      renderTasks()
  } else if (target.tagName === 'BUTTON') {
    if(target.name === 'deleteTaskBtn') {
        // Delete button was clicked, handle task deletion
        const taskId = parseInt(target.closest('div[data-id]').dataset.id)
        ;(0,_toDoList__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(taskId)
        renderTasks()
    }
    else if(target.name === 'detailTaskBtn') {
        // Detail button was clicked, handle detail preview
        const targetedTask = target.closest('div[data-id]')
        const bottomContainer = targetedTask.querySelector('.bottomContainer')
        bottomContainer.classList.toggle('active');
    }
    else if(target.name === 'editTaskBtn') {
        // Edit button was clicked, handle task edit

        //Select clicked task item
        const selectedListItem = target.closest('div[data-id]')

        //Generate input field for editing
        // editTaskGenerator(taskList, selectedListItem)
        const selectedEditContainer = document.querySelector(`[id="editContainer"][data-id="${selectedListItem.dataset.id}"]`)

        //Assign values of selected task to input field
        assignValues(selectedListItem, selectedEditContainer)
        selectedEditContainer.classList.toggle('working')

        const taskId = parseInt(target.closest('div[data-id]').dataset.id)

        const updateTaskBtn = document.querySelector(`[id="editAddTaskBtn"][data-id="${selectedListItem.dataset.id}"]`)

    }
    else if(target.name === 'editAddTaskBtn') {
      //Select edit list item
      const selectedListItem = target.closest('div[data-id]')

      //Select edit container
      const selectedEditContainer = document.querySelector(`[id="editContainer"][data-id="${selectedListItem.dataset.id}"]`)

      //Assign values on the container to updated list
      function handleUpdateTask() {
        const taskTitle = selectedEditContainer.querySelector('#editTaskTitle');
        const title = taskTitle.value.trim();
      
        if (title === '') {
            alert('Add title for task!');
            return; // Don't add empty tasks
        }
      
        const taskDescription = selectedEditContainer.querySelector('#editTaskDescription')
        const description = taskDescription.value
      
        if (description === '') {
            alert('Add description for task!');
            return; // Don't add empty tasks
        }
      
        const dueDateInput = selectedEditContainer.querySelector('#editTaskDueDate')
        const dueDate = dueDateInput.value
      
        const priorityOption = selectedEditContainer.querySelector('#editTaskPriority')
        const priority = priorityOption.value
        
        ;(0,_toDoList__WEBPACK_IMPORTED_MODULE_0__.addTask)(title, description, dueDate, priority);
      }

      //Select task id to be edited and delete it after updated task created
      const taskId = parseInt(target.closest('div[data-id]').dataset.id)
  
      handleUpdateTask()
      ;(0,_toDoList__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(taskId)
      renderTasks()
    }
  }
}

function initAppContainer(element, action) {
  element.addEventListener('click', () => {
    const inputAppContainer = document.getElementById('todoAppContainer')
    if(action === 'add') {
      inputAppContainer.classList.add('active')
    }
    else if(action === 'remove') {
      inputAppContainer.classList.remove('active')
    }
    else if(action === 'toggle') {
      inputAppContainer.classList.toggle('active')
    }
  })
}

//Create an input fileds from todoAppContainer to edit selected task
function editTaskGenerator(parentElement, listElement) {
  const todoAppContainer = document.querySelector('#todoAppContainer')
  const editContainer = todoAppContainer.cloneNode(true)
  ;(0,_toDoList__WEBPACK_IMPORTED_MODULE_0__.generateEditIDs)(editContainer)
  editContainer.id = 'editContainer'
  editContainer.dataset.id = listElement.dataset.id
  editContainer.querySelector('#editAddTaskBtn').textContent = 'Update Task'
  editContainer.querySelector('#editAddTaskBtn').name = 'editAddTaskBtn'
  editContainer.querySelector('#editAddTaskBtn').dataset.id = listElement.dataset.id
  parentElement.appendChild(editContainer)
}

//Create a function to assign values of an elemnt to other
function assignValues(originalElement, assignedElement) {
  
  // //Assign values to input fields
  assignedElement.querySelector('#editTaskTitle').value = originalElement.querySelector('.taskTitle').textContent
  assignedElement.querySelector('#editTaskDescription').value = originalElement.querySelector('.taskDescription').textContent
  assignedElement.querySelector('#editTaskDueDate').value = originalElement.querySelector('.taskDue').innerHTML.slice(5)
  assignedElement.querySelector('#editTaskPriority').value = originalElement.querySelector('.taskPriority').innerHTML.slice(10)
}

  

/***/ }),

/***/ "./src/currentDate.js":
/*!****************************!*\
  !*** ./src/currentDate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate)
/* harmony export */ });
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date = new Date()) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDoList */ "./src/toDoList.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI */ "./src/UI.js");






(0,_DOM__WEBPACK_IMPORTED_MODULE_2__.initDOM)()
;(0,_toDoList__WEBPACK_IMPORTED_MODULE_3__.initTodoApp)()
;(0,_UI__WEBPACK_IMPORTED_MODULE_4__.initUI)()



/***/ }),

/***/ "./src/toDoList.js":
/*!*************************!*\
  !*** ./src/toDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   deleteTaskStorage: () => (/* binding */ deleteTaskStorage),
/* harmony export */   filterTasks: () => (/* binding */ filterTasks),
/* harmony export */   generateEditIDs: () => (/* binding */ generateEditIDs),
/* harmony export */   generateTaskId: () => (/* binding */ generateTaskId),
/* harmony export */   initTodoApp: () => (/* binding */ initTodoApp),
/* harmony export */   saveTasksToStorage: () => (/* binding */ saveTasksToStorage),
/* harmony export */   sortTasks: () => (/* binding */ sortTasks),
/* harmony export */   tasks: () => (/* binding */ tasks),
/* harmony export */   uiTasks: () => (/* binding */ uiTasks),
/* harmony export */   updateTaskStatus: () => (/* binding */ updateTaskStatus)
/* harmony export */ });
let taskIdCounter = 1;

// ID generator function
function generateTaskId() {
    return taskIdCounter++;
}

let appliedFilter;
let appliedSort;

function Task(title, description, dueDate = null, priority, completed = false) {
    this.id = generateTaskId();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
}

let tasks = []; // Array to store tasks
let uiTasks = [] //Array to render tasks

function initTodoApp() {
    // Initialize tasks from storage or create an empty array
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = storedTasks;
    generateUITasks();
    taskIdCounter = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
}
function addTask(title, description, dueDate, priority) {
    const newTask = new Task(title, description, dueDate, priority);
    tasks.push(newTask);
    saveTasksToStorage();
    generateUITasks()
}

function generateUITasks() {
    if (appliedFilter === 'completed') {
        uiTasks = tasks.filter(task => task.completed);
      } else if (appliedFilter === 'active') {
          uiTasks = tasks.filter(task => !task.completed);
      } else {
        // If "All Tasks" is selected or no filter is selected, show all tasks
        uiTasks = tasks;
      }

      uiTasks.sort((taskA, taskB) => {
        if (appliedSort === "Due Date") {
            // Sort by due date
            return new Date(taskA.dueDate) - new Date(taskB.dueDate);
        } else if (appliedSort === "Priority") {
            // Sort by priority (assuming priority is a string like "High", "Medium", "Low")
            const priorities = ["High", "Medium", "Low"];
            return priorities.indexOf(taskA.priority) - priorities.indexOf(taskB.priority);
        }
    });
}

function generateEditIDs(element) {
    // Get all child elements of the provided element
    const children = element.querySelectorAll('*');
  
    // Iterate through each child element
    children.forEach(child => {
      // Check if the child has an ID attribute
      if (child.id) {
        //Capitilize first letter of given ID
        const capValueID = `${child.id}`.charAt(0).toUpperCase() + `${child.id}`.slice(1)
        // Generate a new ID by adding "edit" to the beginning
        const newID = 'edit' + capValueID;
        
        // Set the new ID for the child element
        child.id = newID;
      }
      // Check if the child is a <label> element
      else if (child.tagName.toLowerCase() === 'label') {
        // Update the 'for' attribute of the label to match the new ID
        const htmlFor = child.getAttribute('for');
        if (htmlFor) {
          //Capitilize first letter of given ID
          const capValueFor = `${htmlFor}`.charAt(0).toUpperCase() + `${htmlFor}`.slice(1)
          const newHtmlFor = 'edit' + capValueFor;
          child.setAttribute('for', newHtmlFor);
        }
      }
    });
  }

function sortTasks(selectedCriteria) {
    appliedSort = selectedCriteria;
    generateUITasks()
}

function filterTasks(selectedFilter) {
    appliedFilter = selectedFilter;
    generateUITasks()
  }
  
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasksToStorage();
    generateUITasks()
}

function updateTaskStatus(taskId, completed) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = completed;
        saveTasksToStorage();
        generateUITasks()
    }
}

function saveTasksToStorage() {
    localStorage.setItem('tasks', [JSON.stringify(tasks)]);
}

function deleteTaskStorage() {
    tasks = [];
    uiTasks = [];
    localStorage.setItem('tasks', [JSON.stringify(tasks)]);
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz80Y2ZiIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2N1cnJlbnREYXRlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvRG9MaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0tbGlnaHRncmF5OiAjRUZFRkVGO1xuICAgIC0tYmxhY2tpc2g6ICMzMzAwMDA7XG4gICAgLS1vcmFuZ2U6ICNGRkNDNjY7XG59XG5cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyYXkpO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFja2lzaCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGdhcDogMnJlbTtcbiAgICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xufVxuXG4jdG9kb0FwcENvbnRhaW5lciwgI2VkaXRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNjUlO1xuICAgIGdhcDogMXJlbTtcbn1cblxuI3RvZG9BcHBDb250YWluZXIuYWN0aXZlLCAjZWRpdENvbnRhaW5lci53b3JraW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbiNpbnB1dEhlYWRlciwgI2VkaXRJbnB1dEhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI3RpdGxlQ29udGFpbmVyLCAjZHVlRGF0ZUNvbnRhaW5lciwgI3ByaW9yaXR5Q29udGFpbmVyLCAjZWRpdFRpdGxlQ29udGFpbmVyLCAjZWRpdER1ZURhdGVDb250YWluZXIsICNlZGl0UHJpb3JpdHlDb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jZGVzY3JpcHRpb25TZWN0aW9uLCAjZWRpdERlc2NyaXB0aW9uU2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jdGFza0Rlc2NyaXB0aW9uLCAjZWRpdFRhc2tEZXNjcmlwdGlvbiB7XG4gICAgaGVpZ2h0OiA4cmVtO1xufVxuXG4jbGlzdENvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDY1JTtcbiAgICBnYXA6IDJyZW07XG59XG5cbiN0YXNrTGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycmVtO1xufVxuXG5cbiNkZWxldGVTdG9yYWdle1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4jZmlsdGVyQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jc2VsZWN0Q29udGFpbmVyLCAjc29ydENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGFza0NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZmIzYzU7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLnRvcENvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5ib3R0b21Db250YWluZXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBnYXA6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib3R0b21Db250YWluZXIuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udG9wUmlnaHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvcExlZnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFja2lzaCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi8qIC5kZXRhaWxUYXNrQnRuIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWluLXdpZHRoOiAzcmVtOyAgICBcbn0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7O0FBS0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHFCQUFxQjtBQUN6Qjs7QUFFQTs7Ozs7R0FLR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1saWdodGdyYXk6ICNFRkVGRUY7XFxuICAgIC0tYmxhY2tpc2g6ICMzMzAwMDA7XFxuICAgIC0tb3JhbmdlOiAjRkZDQzY2O1xcbn1cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZmYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmF5KTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNraXNoKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4jdG9kb0FwcENvbnRhaW5lciwgI2VkaXRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiN0b2RvQXBwQ29udGFpbmVyLmFjdGl2ZSwgI2VkaXRDb250YWluZXIud29ya2luZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuI2lucHV0SGVhZGVyLCAjZWRpdElucHV0SGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiN0aXRsZUNvbnRhaW5lciwgI2R1ZURhdGVDb250YWluZXIsICNwcmlvcml0eUNvbnRhaW5lciwgI2VkaXRUaXRsZUNvbnRhaW5lciwgI2VkaXREdWVEYXRlQ29udGFpbmVyLCAjZWRpdFByaW9yaXR5Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZGVzY3JpcHRpb25TZWN0aW9uLCAjZWRpdERlc2NyaXB0aW9uU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN0YXNrRGVzY3JpcHRpb24sICNlZGl0VGFza0Rlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbn1cXG5cXG4jbGlzdENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4jdGFza0xpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuXFxuI2RlbGV0ZVN0b3JhZ2V7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4jZmlsdGVyQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNzZWxlY3RDb250YWluZXIsICNzb3J0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2tDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZiM2M1O1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4udG9wQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmJvdHRvbUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib3R0b21Db250YWluZXIuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvcFJpZ2h0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b3BMZWZ0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNraXNoKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXM7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLyogLmRldGFpbFRhc2tCdG4ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWluLXdpZHRoOiAzcmVtOyAgICBcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBDUkVESVQ6IGh0dHBzOi8vYW5keS1iZWxsLmNvLnVrL2EtbW9kZXJuLWNzcy1yZXNldC8gKi9cblxuLyogQm94IHNpemluZyBydWxlcyAqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG5ib2R5LFxuaDEsXG5oMixcbmgzLFxuaDQsXG5wLFxuZmlndXJlLFxuYmxvY2txdW90ZSxcbmRsLFxuZGQge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xudWxbcm9sZT1cImxpc3RcIl0sXG5vbFtyb2xlPVwibGlzdFwiXSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cbmh0bWw6Zm9jdXMtd2l0aGluIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXG5hOm5vdChbY2xhc3NdKSB7XG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbn1cblxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xuaW1nLFxucGljdHVyZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucyBhbmQgdHJhbnNpdGlvbnMgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcbiAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcbiAgfVxuICAqLFxuICAqOjpiZWZvcmUsXG4gICo6OmFmdGVyIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsd0RBQXdEOztBQUV4RCxxQkFBcUI7QUFDckI7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQSwwQkFBMEI7QUFDMUI7Ozs7Ozs7Ozs7RUFVRSxTQUFTO0FBQ1g7O0FBRUEsMkdBQTJHO0FBQzNHOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUEsMERBQTBEO0FBQzFEO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBLG9DQUFvQztBQUNwQzs7RUFFRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQSx5Q0FBeUM7QUFDekM7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUEsaUZBQWlGO0FBQ2pGO0VBQ0U7R0FDQyxxQkFBcUI7RUFDdEI7RUFDQTs7O0lBR0UscUNBQXFDO0lBQ3JDLHVDQUF1QztJQUN2QyxzQ0FBc0M7SUFDdEMsZ0NBQWdDO0VBQ2xDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ1JFRElUOiBodHRwczovL2FuZHktYmVsbC5jby51ay9hLW1vZGVybi1jc3MtcmVzZXQvICovXFxuXFxuLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9XFxcImxpc3RcXFwiXSxcXG5vbFtyb2xlPVxcXCJsaXN0XFxcIl0ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMgYW5kIHRyYW5zaXRpb25zIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vY3VycmVudERhdGVcIlxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERPTSgpIHtcbi8vQ3JlYXRlIGEgYnV0dG9uIGZvciBvcGVuLWNsb3NlIGFwcCBjb250YWluZXJcbmNvbnN0IGFwcENvbnRhaW5lckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5hcHBDb250YWluZXJCdG4uaWQgPSAnYXBwQ29udGFpbmVyQnV0dG9uJ1xuYXBwQ29udGFpbmVyQnRuLmNsYXNzTGlzdC5hZGQgPSAnYXBwQ29udGFpbmVyQnV0dG9uJ1xuYXBwQ29udGFpbmVyQnRuLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJ1xuXG4vLyBDcmVhdGUgYSBjb250YWluZXIgZGl2IGZvciB0aGUgdG8tZG8gYXBwXG5jb25zdCB0b2RvQXBwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnRvZG9BcHBDb250YWluZXIuaWQgPSAndG9kb0FwcENvbnRhaW5lcidcbnRvZG9BcHBDb250YWluZXIuY2xhc3NMaXN0LmFkZCA9ICd0b2RvQXBwQ29udGFpbmVyJ1xuXG4vL0NyZWF0ZSBhIGxpc3QgY29udGFpbmVyXG5jb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbmxpc3RDb250YWluZXIuaWQgPSAnbGlzdENvbnRhaW5lcidcblxuLy9DcmVhdGUgYSBmaWx0ZXIgY29udGFpbmVyXG5jb25zdCBmaWx0ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZmlsdGVyQ29udGFpbmVyLmlkID0gJ2ZpbHRlckNvbnRhaW5lcidcblxuLy8gQ3JlYXRlIGEgaGVhZGluZyBmb3IgdGhlIGFwcFxuY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbmhlYWRpbmcudGV4dENvbnRlbnQgPSAnVG8tRG8gTGlzdCdcblxuLy9DcmVhdGUgaGVhZGVyIGNvbnRhaW5lciBmb3IgaW5wdXRzKHRpdGxlLCBkdWUgZGF0ZSwgcHJpb3JpdHkgYW5kIHN1Ym1pdCBidXR0b24pXG5jb25zdCBpbnB1dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5pbnB1dEhlYWRlci5pZCA9ICdpbnB1dEhlYWRlcidcblxuLy9DcmVhdGUgdGl0bGUgY29udGFpbmVyIGZvciBsYWJlbCBhbmQgaW5wdXQgZWxlbWVudHNcbmNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnRpdGxlQ29udGFpbmVyLmlkID0gJ3RpdGxlQ29udGFpbmVyJyBcblxuLy9DcmVhdGUgZHVlIGRhdGUgY29udGFpbmVyIGZvciBsYWJlbCBhbmQgaW5wdXQgZWxlbWVudHNcbmNvbnN0IGR1ZURhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZHVlRGF0ZUNvbnRhaW5lci5pZCA9ICdkdWVEYXRlQ29udGFpbmVyJyBcblxuLy9DcmVhdGUgcHJpb3JpdHkgY29udGFpbmVyIGZvciBsYWJlbCBhbmQgaW5wdXQgZWxlbWVudHNcbmNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnByaW9yaXR5Q29udGFpbmVyLmlkID0gJ3ByaW9yaXR5Q29udGFpbmVyJ1xuXG4vL0NyZWF0ZSBzZWN0aW9uIGZvciBkZXNjcmlwdGlvblxuY29uc3QgZGVzY3JpcHRpb25TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmRlc2NyaXB0aW9uU2VjdGlvbi5pZCA9ICdkZXNjcmlwdGlvblNlY3Rpb24nXG5cbi8vTGFiZWwgZWxlbWVudCBmb3IgdGl0bGUgaW5wdXRcbmNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG50aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgVGl0bGUnXG50aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2tUaXRsZScpXG50aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKVxuXG4vLyBDcmVhdGUgYW4gaW5wdXQgZmllbGQgZm9yIGFkZGluZyB0YXNrc1xuY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxudGFza1RpdGxlLmlkID0gJ3Rhc2tUaXRsZScgXG50YXNrVGl0bGUudHlwZSA9ICd0ZXh0J1xudGFza1RpdGxlLnBsYWNlaG9sZGVyID0gJ1RpdGxlJ1xudGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxuXG4vLyBDcmVhdGUgYW4gZGVzY3JpcHRpb24gZmllbGQgZm9yIHRhc2tzIGRldGFpbHNcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbnRhc2tEZXNjcmlwdGlvbi5pZCA9ICd0YXNrRGVzY3JpcHRpb24nXG5cbi8vTGFiZWwgZWxlbWVudCBmb3IgdGl0bGUgZGVzY3JpcHRpb25cbmNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5kZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgRGVzY3JpcHRpb24nXG5kZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2tEZXNjcmlwdGlvbicpXG5kZXNjcmlwdGlvblNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbClcblxuLy9MYWJlbCBlbGVtZW50IGZvciBkdWUgZGF0ZSBpbnB1dFxuY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJ1xuZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZURhdGVMYWJlbCcpXG5kdWVEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbClcblxuLy8gQ3JlYXRlIGFuIGR1ZURhdGUgZm9yIHRhc2tzIGRlYWRsaW5lXG5jb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbnRhc2tEdWVEYXRlLmlkID0gJ3Rhc2tEdWVEYXRlJ1xudGFza0R1ZURhdGUudHlwZSA9ICdkYXRlJ1xudGFza0R1ZURhdGUudmFsdWUgPSBmb3JtYXREYXRlKClcbmR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpXG5cbi8vTGFiZWwgZWxlbWVudCBmb3IgcHJpb3JpdHkgaW5wdXRcbmNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5wcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgUHJpb3JpdHknXG5wcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5TGFiZWwnKVxucHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbClcblxuLy9DcmVhdGUgcHJpb3JpdHkgZm9yIHRhc2tzIGltcG9ydGFuY2VcbmNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG50YXNrUHJpb3JpdHkuaWQgPSBcInRhc2tQcmlvcml0eVwiXG5jb25zdCBwcmlvcml0aWVzID0gW1wiSGlnaFwiLCBcIk1lZGl1bVwiLCBcIkxvd1wiXTtcbi8vIExvb3AgdGhyb3VnaCB0aGUgcHJpb3JpdGllcyBhbmQgY3JlYXRlIGFuIG9wdGlvbiBlbGVtZW50IGZvciBlYWNoXG5wcmlvcml0aWVzLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgdGFza09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgdGFza09wdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrT3B0aW9uJylcbiAgICB0YXNrT3B0aW9uLnZhbHVlID0gcHJpb3JpdHk7IC8vIFNldCB0aGUgdmFsdWUgYXR0cmlidXRlIHRvIHRoZSBwcmlvcml0eSB2YWx1ZVxuICAgIHRhc2tPcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eTsgLy8gU2V0IHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIG9wdGlvblxuICAgIGlmIChwcmlvcml0eSA9PT0gXCJNZWRpdW1cIikge1xuICAgICAgICB0YXNrT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTsgLy8gU2V0ICdNZWRpdW0nIGFzIHRoZSBkZWZhdWx0IHNlbGVjdGVkIG9wdGlvblxuICAgIH1cbiAgICB0YXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQodGFza09wdGlvbik7IC8vIEFwcGVuZCB0aGUgb3B0aW9uIHRvIHRoZSBzZWxlY3QgZWxlbWVudFxuICB9KTtcbnByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSlcblxuLy8gQ3JlYXRlIGEgYnV0dG9uIHRvIGFkZCB0YXNrc1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5hZGRUYXNrQnRuLmlkID0gJ2FkZFRhc2tCdG4nXG5hZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJ1xuXG4vL0NyZWF0ZSBsYWJlbCBmb3Igc2VsZWN0IGVsZW1lbnRcbmNvbnN0IHNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuc2VsZWN0TGFiZWwudGV4dENvbnRlbnQgPSAnRmlsdGVyIFRhc2tzJ1xuc2VsZWN0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnc2VsZWN0TGFiZWwnKVxuXG4vLyBDcmVhdGUgdGhlIHNlbGVjdCBlbGVtZW50XG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbnNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tGaWx0ZXInKTsgLy8gU2V0IGFuIElEIGZvciB0aGUgc2VsZWN0IGVsZW1lbnRcblxuLy8gQ3JlYXRlIHRoZSBvcHRpb25zIGFuZCBhZGQgdGhlbSB0byB0aGUgc2VsZWN0IGVsZW1lbnRcbmNvbnN0IG9wdGlvbkNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xub3B0aW9uQ29tcGxldGVkLnZhbHVlID0gJ2NvbXBsZXRlZCc7XG5vcHRpb25Db21wbGV0ZWQudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcblxuY29uc3Qgb3B0aW9uQWN0aXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb25BY3RpdmUudmFsdWUgPSAnYWN0aXZlJztcbm9wdGlvbkFjdGl2ZS50ZXh0Q29udGVudCA9ICdBY3RpdmUnO1xuXG5jb25zdCBvcHRpb25BbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbm9wdGlvbkFsbC52YWx1ZSA9ICdhbGwnO1xub3B0aW9uQWxsLnRleHRDb250ZW50ID0gJ0FsbCc7XG5cbi8vIEFwcGVuZCB0aGUgb3B0aW9ucyB0byB0aGUgc2VsZWN0IGVsZW1lbnRcblxuc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkFsbCk7XG5zZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uQWN0aXZlKTtcbnNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Db21wbGV0ZWQpO1xuXG4vLyBBcHBlbmQgdGhlIHNlbGVjdCBlbGVtZW50IHRvIGFuIGV4aXN0aW5nIGVsZW1lbnQgaW4gdGhlIERPTVxuY29uc3Qgc2VsZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnNlbGVjdENvbnRhaW5lci5pZCA9ICdzZWxlY3RDb250YWluZXInXG5zZWxlY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0TGFiZWwpXG5zZWxlY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KVxuZmlsdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdENvbnRhaW5lcilcblxuLy9MYWJlbCBmb3Igc2VsZWN0IHNvcnQgZWxlbWVudFxuY29uc3Qgc29ydExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuc29ydExhYmVsLnRleHRDb250ZW50ID0gJ1NvcnQgQnknXG5zb3J0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnc29ydExhYmVsJylcblxuLy9DcmVhdGUgYSBzZWxlY3QgZWxlbWVudCB0byBzb3J0IHRhc2sgbGlzdFxuY29uc3Qgc29ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG5zb3J0LmlkID0gJ3NvcnQnXG5zb3J0LnRleHRDb250ZW50ID0gJ1NvcnQgQnknXG5jb25zdCBzb3J0T3B0aW9ucyA9IFtcIkR1ZSBEYXRlXCIsIFwiUHJpb3JpdHlcIl1cbnNvcnRPcHRpb25zLmZvckVhY2goKHNvcnRJdGVtLCBpbmRleCkgPT4ge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBjb25zdCBvcHRpb25JZCA9IGBzb3J0T3B0aW9uXyR7aW5kZXh9YFxuICBvcHRpb24udmFsdWUgPSBzb3J0SXRlbVxuICBvcHRpb24udGV4dENvbnRlbnQgPSBzb3J0SXRlbVxuICBvcHRpb24uaWQgPSBvcHRpb25JZFxuICBpZiAoc29ydEl0ZW0gPT09IFwiRHVlIERhdGVcIikge1xuICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWVcbiAgfVxuICBzb3J0LmFwcGVuZENoaWxkKG9wdGlvbilcbn0pXG5jb25zdCBzb3J0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnNvcnRDb250YWluZXIuaWQgPSAnc29ydENvbnRhaW5lcidcbnNvcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc29ydExhYmVsKVxuc29ydENvbnRhaW5lci5hcHBlbmRDaGlsZChzb3J0KVxuZmlsdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvcnRDb250YWluZXIpXG5cbi8vQ3JlYXRlIGEgYnV0dG9uIHRvIGRlbGV0ZSB0YXNrIHN0b3JhZ2VcbmNvbnN0IGRlbGV0ZVN0b3JhZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuZGVsZXRlU3RvcmFnZUJ0bi5pZCA9ICdkZWxldGVTdG9yYWdlJ1xuZGVsZXRlU3RvcmFnZUJ0bi50ZXh0Q29udGVudCA9ICdDbGVhciBUYXNrcydcblxuLy8gQ3JlYXRlIGFuIGVtcHR5IGRpdiBlbGVtZW50IHRvIGhvbGQgdGhlIHRhc2sgbGlzdFxuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudGFza0xpc3QuaWQgPSd0YXNrTGlzdCdcblxuLy8gQXBwZW5kIHRoZSBoZWFkaW5nLCBpbnB1dCBmaWVsZCwgYnV0dG9uLCBhbmQgdGFzayBsaXN0IHRvIHRoZSBjb250YWluZXJcbmlucHV0SGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKVxuaW5wdXRIZWFkZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUNvbnRhaW5lcilcbmlucHV0SGVhZGVyLmFwcGVuZENoaWxkKHByaW9yaXR5Q29udGFpbmVyKVxuaW5wdXRIZWFkZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bilcbnRvZG9BcHBDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRIZWFkZXIpXG5kZXNjcmlwdGlvblNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKVxudG9kb0FwcENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblNlY3Rpb24pXG5saXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpbHRlckNvbnRhaW5lcilcbmxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0xpc3QpXG5saXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVN0b3JhZ2VCdG4pXG5cbi8vIEFwcGVuZCB0aGUgY29udGFpbmVyIHRvIHRoZSBkb2N1bWVudCBib2R5XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRpbmcpXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcENvbnRhaW5lckJ0bilcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9kb0FwcENvbnRhaW5lcilcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcilcbn1cblxuIiwiaW1wb3J0IHsgdWlUYXNrcywgZGVsZXRlVGFzaywgdXBkYXRlVGFza1N0YXR1cywgYWRkVGFzaywgc29ydFRhc2tzLCBmaWx0ZXJUYXNrcywgZGVsZXRlVGFza1N0b3JhZ2UsIGdlbmVyYXRlRWRpdElEcyB9IGZyb20gXCIuL3RvRG9MaXN0XCJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9jdXJyZW50RGF0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFVJKCkge1xuICAvLyBJbml0aWFsaXplIHRoZSBVSSwgcmVuZGVyIHRhc2tzLCBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyc1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdCcpXG5cbiAgLy8gRXZlbnQgZGVsZWdhdGlvbjogQWRkIGEgc2luZ2xlIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSB0YXNrIGxpc3RcbiAgdGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUYXNrQ2xpY2spXG5cbiAgLy9OZXcgdGFzayBidXR0b25cbiAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBDb250YWluZXJCdXR0b24nKVxuICBpbml0QXBwQ29udGFpbmVyKG5ld1Rhc2tCdG4sICd0b2dnbGUnKVxuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciBmb3IgYWRkaW5nIHRhc2tzXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J0bicpO1xuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGhhbmRsZUFkZFRhc2soKVxuICAgIGluaXRBcHBDb250YWluZXIoYWRkVGFza0J0biwgJ3JlbW92ZScpXG4gICAgcmVuZGVyVGFza3MoKTtcbiAgfSk7XG5cbiAgLy9BZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHNvcnRpbmcgdGFzayBsaXN0XG4gIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRcIik7XG4gIHNlbGVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZENyaXRlcmlhID0gc2VsZWN0RWxlbWVudC52YWx1ZTtcbiAgICAgIHNvcnRUYXNrcyhzZWxlY3RlZENyaXRlcmlhKTtcbiAgICAgIHJlbmRlclRhc2tzKClcbiAgfSk7XG5cbiAgLy9BZGQgZXZlbnQgbGlzdGVuZXIgZm9yIGZpbHRlciB0YXNrIGxpc3RcbiAgY29uc3QgZmlsdGVyU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tGaWx0ZXInKVxuICBmaWx0ZXJTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXIgPSBmaWx0ZXJTZWxlY3QudmFsdWU7XG4gICAgZmlsdGVyVGFza3Moc2VsZWN0ZWRGaWx0ZXIpO1xuICAgIHJlbmRlclRhc2tzKClcbn0pO1xuXG4gIC8vRGVsZXRlIHRhc2tzIHN0b3JhZ2VcbiAgY29uc3QgZGVsZXRlU3RvcmFnZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVTdG9yYWdlJylcbiAgZGVsZXRlU3RvcmFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkZWxldGVUYXNrU3RvcmFnZSgpXG4gICAgcmVuZGVyVGFza3MoKVxuICAgIH0pO1xuXG4gIC8vIFJlbmRlciBpbml0aWFsIHRhc2tzXG4gIHJlbmRlclRhc2tzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUYXNrcygpIHtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0xpc3QnKVxuICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJyAvLyBDbGVhciB0aGUgZXhpc3RpbmcgdGFzayBsaXN0XG5cbiAgZm9yIChjb25zdCB0YXNrIG9mIHVpVGFza3MpIHtcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2xpc3RJdGVtJylcbiAgICAgIGxpc3RJdGVtLmRhdGFzZXQuaWQgPSB0YXNrLmlkIC8vIFNldCBhIGN1c3RvbSBkYXRhIGF0dHJpYnV0ZSBmb3IgdGhlIHRhc2sgSURcbiAgICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrQ29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BDb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wTGVmdFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRldGFpbFRhc2tCdG5cIiBpZD1cImRldGFpbFRhc2tCdG4tJHt0YXNrLmlkfVwiIG5hbWU9XCJkZXRhaWxUYXNrQnRuXCI+VjwvYnV0dG9uPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidGFza0NoZWNrYm94LSR7dGFzay5pZH1cIiBuYW1lPVwidGFza0NoZWNrYm94XCIgJHt0YXNrLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrVGl0bGVcIiBpZD1cInRhc2tUaXRsZS0ke3Rhc2suaWR9XCI+JHt0YXNrLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BSaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tEdWVcIiBpZD1cInRhc2tEdWUtJHt0YXNrLmlkfVwiPkR1ZTogJHt0YXNrLmR1ZURhdGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1ByaW9yaXR5XCIgaWQ9XCJ0YXNrUHJpb3JpdHktJHt0YXNrLmlkfVwiPlByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9PC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVsZXRlVGFza0J0bi0ke3Rhc2suaWR9XCIgbmFtZT1cImRlbGV0ZVRhc2tCdG5cIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21Db250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza0Rlc2NyaXB0aW9uXCIgaWQ9XCJ0YXNrRGVzY3JpcHRpb24tJHt0YXNrLmlkfVwiPiR7dGFzay5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwiZWRpdFRhc2tCdG4tJHt0YXNrLmlkfVwiIG5hbWU9XCJlZGl0VGFza0J0blwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5gXG4gICAgICBcbiAgICAgIC8vQXBwZW5kIGVsZW1lbnRzXG4gICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSlcbiAgICAgIFxuICAgICAgLy9HZW5lcmF0ZSB0YXNrIGVkaXRvclxuICAgICAgZWRpdFRhc2tHZW5lcmF0b3IodGFza0xpc3QsIGxpc3RJdGVtKVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUFkZFRhc2soKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGl0bGUnKTtcbiAgY29uc3QgdGl0bGUgPSB0YXNrVGl0bGUudmFsdWUudHJpbSgpO1xuXG4gIGlmICh0aXRsZSA9PT0gJycpIHtcbiAgICAgIGFsZXJ0KCdBZGQgdGl0bGUgZm9yIHRhc2shJyk7XG4gICAgICByZXR1cm47IC8vIERvbid0IGFkZCBlbXB0eSB0YXNrc1xuICB9XG5cbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjcmlwdGlvbicpXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlXG5cbiAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykge1xuICAgICAgYWxlcnQoJ0FkZCBkZXNjcmlwdGlvbiBmb3IgdGFzayEnKTtcbiAgICAgIHJldHVybjsgLy8gRG9uJ3QgYWRkIGVtcHR5IHRhc2tzXG4gIH1cblxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0R1ZURhdGUnKVxuICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlXG5cbiAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKVxuICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5T3B0aW9uLnZhbHVlXG4gIFxuICBhZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuXG4gIC8vIENsZWFyIGlucHV0IGFuZCBwcm92aWRlIGZlZWRiYWNrXG4gIHRhc2tUaXRsZS52YWx1ZSA9ICcnO1xuICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgZHVlRGF0ZUlucHV0LnZhbHVlID0gZm9ybWF0RGF0ZSgpO1xuICBwcmlvcml0eU9wdGlvbi52YWx1ZSA9IFwiTWVkaXVtXCI7XG4gIGFsZXJ0KCdUYXNrIGFkZGVkIHN1Y2Nlc3NmdWxseSEnKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0NsaWNrKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuXG4gIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgLy8gQ2hlY2tib3ggd2FzIGNsaWNrZWQsIGhhbmRsZSB0YXNrIGNvbXBsZXRpb25cbiAgICAgIGNvbnN0IHRhc2tJZCA9IHBhcnNlSW50KHRhcmdldC5jbG9zZXN0KCdkaXZbZGF0YS1pZF0nKS5kYXRhc2V0LmlkKVxuICAgICAgY29uc3QgY29tcGxldGVkID0gdGFyZ2V0LmNoZWNrZWRcbiAgICAgIHVwZGF0ZVRhc2tTdGF0dXModGFza0lkLCBjb21wbGV0ZWQpXG4gICAgICByZW5kZXJUYXNrcygpXG4gIH0gZWxzZSBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgaWYodGFyZ2V0Lm5hbWUgPT09ICdkZWxldGVUYXNrQnRuJykge1xuICAgICAgICAvLyBEZWxldGUgYnV0dG9uIHdhcyBjbGlja2VkLCBoYW5kbGUgdGFzayBkZWxldGlvblxuICAgICAgICBjb25zdCB0YXNrSWQgPSBwYXJzZUludCh0YXJnZXQuY2xvc2VzdCgnZGl2W2RhdGEtaWRdJykuZGF0YXNldC5pZClcbiAgICAgICAgZGVsZXRlVGFzayh0YXNrSWQpXG4gICAgICAgIHJlbmRlclRhc2tzKClcbiAgICB9XG4gICAgZWxzZSBpZih0YXJnZXQubmFtZSA9PT0gJ2RldGFpbFRhc2tCdG4nKSB7XG4gICAgICAgIC8vIERldGFpbCBidXR0b24gd2FzIGNsaWNrZWQsIGhhbmRsZSBkZXRhaWwgcHJldmlld1xuICAgICAgICBjb25zdCB0YXJnZXRlZFRhc2sgPSB0YXJnZXQuY2xvc2VzdCgnZGl2W2RhdGEtaWRdJylcbiAgICAgICAgY29uc3QgYm90dG9tQ29udGFpbmVyID0gdGFyZ2V0ZWRUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b21Db250YWluZXInKVxuICAgICAgICBib3R0b21Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIGVsc2UgaWYodGFyZ2V0Lm5hbWUgPT09ICdlZGl0VGFza0J0bicpIHtcbiAgICAgICAgLy8gRWRpdCBidXR0b24gd2FzIGNsaWNrZWQsIGhhbmRsZSB0YXNrIGVkaXRcblxuICAgICAgICAvL1NlbGVjdCBjbGlja2VkIHRhc2sgaXRlbVxuICAgICAgICBjb25zdCBzZWxlY3RlZExpc3RJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJ2RpdltkYXRhLWlkXScpXG5cbiAgICAgICAgLy9HZW5lcmF0ZSBpbnB1dCBmaWVsZCBmb3IgZWRpdGluZ1xuICAgICAgICAvLyBlZGl0VGFza0dlbmVyYXRvcih0YXNrTGlzdCwgc2VsZWN0ZWRMaXN0SXRlbSlcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRFZGl0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiZWRpdENvbnRhaW5lclwiXVtkYXRhLWlkPVwiJHtzZWxlY3RlZExpc3RJdGVtLmRhdGFzZXQuaWR9XCJdYClcblxuICAgICAgICAvL0Fzc2lnbiB2YWx1ZXMgb2Ygc2VsZWN0ZWQgdGFzayB0byBpbnB1dCBmaWVsZFxuICAgICAgICBhc3NpZ25WYWx1ZXMoc2VsZWN0ZWRMaXN0SXRlbSwgc2VsZWN0ZWRFZGl0Q29udGFpbmVyKVxuICAgICAgICBzZWxlY3RlZEVkaXRDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnd29ya2luZycpXG5cbiAgICAgICAgY29uc3QgdGFza0lkID0gcGFyc2VJbnQodGFyZ2V0LmNsb3Nlc3QoJ2RpdltkYXRhLWlkXScpLmRhdGFzZXQuaWQpXG5cbiAgICAgICAgY29uc3QgdXBkYXRlVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cImVkaXRBZGRUYXNrQnRuXCJdW2RhdGEtaWQ9XCIke3NlbGVjdGVkTGlzdEl0ZW0uZGF0YXNldC5pZH1cIl1gKVxuXG4gICAgfVxuICAgIGVsc2UgaWYodGFyZ2V0Lm5hbWUgPT09ICdlZGl0QWRkVGFza0J0bicpIHtcbiAgICAgIC8vU2VsZWN0IGVkaXQgbGlzdCBpdGVtXG4gICAgICBjb25zdCBzZWxlY3RlZExpc3RJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJ2RpdltkYXRhLWlkXScpXG5cbiAgICAgIC8vU2VsZWN0IGVkaXQgY29udGFpbmVyXG4gICAgICBjb25zdCBzZWxlY3RlZEVkaXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCJlZGl0Q29udGFpbmVyXCJdW2RhdGEtaWQ9XCIke3NlbGVjdGVkTGlzdEl0ZW0uZGF0YXNldC5pZH1cIl1gKVxuXG4gICAgICAvL0Fzc2lnbiB2YWx1ZXMgb24gdGhlIGNvbnRhaW5lciB0byB1cGRhdGVkIGxpc3RcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZVRhc2soKSB7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IHNlbGVjdGVkRWRpdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjZWRpdFRhc2tUaXRsZScpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRhc2tUaXRsZS52YWx1ZS50cmltKCk7XG4gICAgICBcbiAgICAgICAgaWYgKHRpdGxlID09PSAnJykge1xuICAgICAgICAgICAgYWxlcnQoJ0FkZCB0aXRsZSBmb3IgdGFzayEnKTtcbiAgICAgICAgICAgIHJldHVybjsgLy8gRG9uJ3QgYWRkIGVtcHR5IHRhc2tzXG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBzZWxlY3RlZEVkaXRDb250YWluZXIucXVlcnlTZWxlY3RvcignI2VkaXRUYXNrRGVzY3JpcHRpb24nKVxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbi52YWx1ZVxuICAgICAgXG4gICAgICAgIGlmIChkZXNjcmlwdGlvbiA9PT0gJycpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdBZGQgZGVzY3JpcHRpb24gZm9yIHRhc2shJyk7XG4gICAgICAgICAgICByZXR1cm47IC8vIERvbid0IGFkZCBlbXB0eSB0YXNrc1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gc2VsZWN0ZWRFZGl0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VGFza0R1ZURhdGUnKVxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlXG4gICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBzZWxlY3RlZEVkaXRDb250YWluZXIucXVlcnlTZWxlY3RvcignI2VkaXRUYXNrUHJpb3JpdHknKVxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5T3B0aW9uLnZhbHVlXG4gICAgICAgIFxuICAgICAgICBhZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgfVxuXG4gICAgICAvL1NlbGVjdCB0YXNrIGlkIHRvIGJlIGVkaXRlZCBhbmQgZGVsZXRlIGl0IGFmdGVyIHVwZGF0ZWQgdGFzayBjcmVhdGVkXG4gICAgICBjb25zdCB0YXNrSWQgPSBwYXJzZUludCh0YXJnZXQuY2xvc2VzdCgnZGl2W2RhdGEtaWRdJykuZGF0YXNldC5pZClcbiAgXG4gICAgICBoYW5kbGVVcGRhdGVUYXNrKClcbiAgICAgIGRlbGV0ZVRhc2sodGFza0lkKVxuICAgICAgcmVuZGVyVGFza3MoKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0QXBwQ29udGFpbmVyKGVsZW1lbnQsIGFjdGlvbikge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0QXBwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9BcHBDb250YWluZXInKVxuICAgIGlmKGFjdGlvbiA9PT0gJ2FkZCcpIHtcbiAgICAgIGlucHV0QXBwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICAgIGVsc2UgaWYoYWN0aW9uID09PSAncmVtb3ZlJykge1xuICAgICAgaW5wdXRBcHBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9XG4gICAgZWxzZSBpZihhY3Rpb24gPT09ICd0b2dnbGUnKSB7XG4gICAgICBpbnB1dEFwcENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIH1cbiAgfSlcbn1cblxuLy9DcmVhdGUgYW4gaW5wdXQgZmlsZWRzIGZyb20gdG9kb0FwcENvbnRhaW5lciB0byBlZGl0IHNlbGVjdGVkIHRhc2tcbmZ1bmN0aW9uIGVkaXRUYXNrR2VuZXJhdG9yKHBhcmVudEVsZW1lbnQsIGxpc3RFbGVtZW50KSB7XG4gIGNvbnN0IHRvZG9BcHBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0FwcENvbnRhaW5lcicpXG4gIGNvbnN0IGVkaXRDb250YWluZXIgPSB0b2RvQXBwQ29udGFpbmVyLmNsb25lTm9kZSh0cnVlKVxuICBnZW5lcmF0ZUVkaXRJRHMoZWRpdENvbnRhaW5lcilcbiAgZWRpdENvbnRhaW5lci5pZCA9ICdlZGl0Q29udGFpbmVyJ1xuICBlZGl0Q29udGFpbmVyLmRhdGFzZXQuaWQgPSBsaXN0RWxlbWVudC5kYXRhc2V0LmlkXG4gIGVkaXRDb250YWluZXIucXVlcnlTZWxlY3RvcignI2VkaXRBZGRUYXNrQnRuJykudGV4dENvbnRlbnQgPSAnVXBkYXRlIFRhc2snXG4gIGVkaXRDb250YWluZXIucXVlcnlTZWxlY3RvcignI2VkaXRBZGRUYXNrQnRuJykubmFtZSA9ICdlZGl0QWRkVGFza0J0bidcbiAgZWRpdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjZWRpdEFkZFRhc2tCdG4nKS5kYXRhc2V0LmlkID0gbGlzdEVsZW1lbnQuZGF0YXNldC5pZFxuICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVkaXRDb250YWluZXIpXG59XG5cbi8vQ3JlYXRlIGEgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcyBvZiBhbiBlbGVtbnQgdG8gb3RoZXJcbmZ1bmN0aW9uIGFzc2lnblZhbHVlcyhvcmlnaW5hbEVsZW1lbnQsIGFzc2lnbmVkRWxlbWVudCkge1xuICBcbiAgLy8gLy9Bc3NpZ24gdmFsdWVzIHRvIGlucHV0IGZpZWxkc1xuICBhc3NpZ25lZEVsZW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRUYXNrVGl0bGUnKS52YWx1ZSA9IG9yaWdpbmFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RpdGxlJykudGV4dENvbnRlbnRcbiAgYXNzaWduZWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VGFza0Rlc2NyaXB0aW9uJykudmFsdWUgPSBvcmlnaW5hbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tEZXNjcmlwdGlvbicpLnRleHRDb250ZW50XG4gIGFzc2lnbmVkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdFRhc2tEdWVEYXRlJykudmFsdWUgPSBvcmlnaW5hbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tEdWUnKS5pbm5lckhUTUwuc2xpY2UoNSlcbiAgYXNzaWduZWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VGFza1ByaW9yaXR5JykudmFsdWUgPSBvcmlnaW5hbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tQcmlvcml0eScpLmlubmVySFRNTC5zbGljZSgxMClcbn1cblxuICAiLCJmdW5jdGlvbiBwYWRUbzJEaWdpdHMobnVtKSB7XG4gICAgcmV0dXJuIG51bS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIH1cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUgPSBuZXcgRGF0ZSgpKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIHBhZFRvMkRpZ2l0cyhkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICAgIHBhZFRvMkRpZ2l0cyhkYXRlLmdldERhdGUoKSksXG4gICAgXS5qb2luKCctJyk7XG4gIH0iLCJpbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcydcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnXG5pbXBvcnQgeyBpbml0RE9NIH0gZnJvbSAnLi9ET00nXG5pbXBvcnQgeyBpbml0VG9kb0FwcCB9IGZyb20gXCIuL3RvRG9MaXN0XCJcbmltcG9ydCB7IGluaXRVSSB9IGZyb20gXCIuL1VJXCJcblxuaW5pdERPTSgpXG5pbml0VG9kb0FwcCgpXG5pbml0VUkoKVxuXG4iLCJsZXQgdGFza0lkQ291bnRlciA9IDE7XG5cbi8vIElEIGdlbmVyYXRvciBmdW5jdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGFza0lkKCkge1xuICAgIHJldHVybiB0YXNrSWRDb3VudGVyKys7XG59XG5cbmxldCBhcHBsaWVkRmlsdGVyO1xubGV0IGFwcGxpZWRTb3J0O1xuXG5leHBvcnQgZnVuY3Rpb24gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgPSBudWxsLCBwcmlvcml0eSwgY29tcGxldGVkID0gZmFsc2UpIHtcbiAgICB0aGlzLmlkID0gZ2VuZXJhdGVUYXNrSWQoKTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xufVxuXG5leHBvcnQgbGV0IHRhc2tzID0gW107IC8vIEFycmF5IHRvIHN0b3JlIHRhc2tzXG5leHBvcnQgbGV0IHVpVGFza3MgPSBbXSAvL0FycmF5IHRvIHJlbmRlciB0YXNrc1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFRvZG9BcHAoKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSB0YXNrcyBmcm9tIHN0b3JhZ2Ugb3IgY3JlYXRlIGFuIGVtcHR5IGFycmF5XG4gICAgY29uc3Qgc3RvcmVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcbiAgICB0YXNrcyA9IHN0b3JlZFRhc2tzO1xuICAgIGdlbmVyYXRlVUlUYXNrcygpO1xuICAgIHRhc2tJZENvdW50ZXIgPSB0YXNrcy5sZW5ndGggPiAwID8gdGFza3NbdGFza3MubGVuZ3RoIC0gMV0uaWQgKyAxIDogMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgdGFza3MucHVzaChuZXdUYXNrKTtcbiAgICBzYXZlVGFza3NUb1N0b3JhZ2UoKTtcbiAgICBnZW5lcmF0ZVVJVGFza3MoKVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVVJVGFza3MoKSB7XG4gICAgaWYgKGFwcGxpZWRGaWx0ZXIgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICAgIHVpVGFza3MgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmNvbXBsZXRlZCk7XG4gICAgICB9IGVsc2UgaWYgKGFwcGxpZWRGaWx0ZXIgPT09ICdhY3RpdmUnKSB7XG4gICAgICAgICAgdWlUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmNvbXBsZXRlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiBcIkFsbCBUYXNrc1wiIGlzIHNlbGVjdGVkIG9yIG5vIGZpbHRlciBpcyBzZWxlY3RlZCwgc2hvdyBhbGwgdGFza3NcbiAgICAgICAgdWlUYXNrcyA9IHRhc2tzO1xuICAgICAgfVxuXG4gICAgICB1aVRhc2tzLnNvcnQoKHRhc2tBLCB0YXNrQikgPT4ge1xuICAgICAgICBpZiAoYXBwbGllZFNvcnQgPT09IFwiRHVlIERhdGVcIikge1xuICAgICAgICAgICAgLy8gU29ydCBieSBkdWUgZGF0ZVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRhc2tBLmR1ZURhdGUpIC0gbmV3IERhdGUodGFza0IuZHVlRGF0ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXBwbGllZFNvcnQgPT09IFwiUHJpb3JpdHlcIikge1xuICAgICAgICAgICAgLy8gU29ydCBieSBwcmlvcml0eSAoYXNzdW1pbmcgcHJpb3JpdHkgaXMgYSBzdHJpbmcgbGlrZSBcIkhpZ2hcIiwgXCJNZWRpdW1cIiwgXCJMb3dcIilcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXRpZXMgPSBbXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCJdO1xuICAgICAgICAgICAgcmV0dXJuIHByaW9yaXRpZXMuaW5kZXhPZih0YXNrQS5wcmlvcml0eSkgLSBwcmlvcml0aWVzLmluZGV4T2YodGFza0IucHJpb3JpdHkpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUVkaXRJRHMoZWxlbWVudCkge1xuICAgIC8vIEdldCBhbGwgY2hpbGQgZWxlbWVudHMgb2YgdGhlIHByb3ZpZGVkIGVsZW1lbnRcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpO1xuICBcbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggZWFjaCBjaGlsZCBlbGVtZW50XG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgY2hpbGQgaGFzIGFuIElEIGF0dHJpYnV0ZVxuICAgICAgaWYgKGNoaWxkLmlkKSB7XG4gICAgICAgIC8vQ2FwaXRpbGl6ZSBmaXJzdCBsZXR0ZXIgb2YgZ2l2ZW4gSURcbiAgICAgICAgY29uc3QgY2FwVmFsdWVJRCA9IGAke2NoaWxkLmlkfWAuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBgJHtjaGlsZC5pZH1gLnNsaWNlKDEpXG4gICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IElEIGJ5IGFkZGluZyBcImVkaXRcIiB0byB0aGUgYmVnaW5uaW5nXG4gICAgICAgIGNvbnN0IG5ld0lEID0gJ2VkaXQnICsgY2FwVmFsdWVJRDtcbiAgICAgICAgXG4gICAgICAgIC8vIFNldCB0aGUgbmV3IElEIGZvciB0aGUgY2hpbGQgZWxlbWVudFxuICAgICAgICBjaGlsZC5pZCA9IG5ld0lEO1xuICAgICAgfVxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNoaWxkIGlzIGEgPGxhYmVsPiBlbGVtZW50XG4gICAgICBlbHNlIGlmIChjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdsYWJlbCcpIHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSAnZm9yJyBhdHRyaWJ1dGUgb2YgdGhlIGxhYmVsIHRvIG1hdGNoIHRoZSBuZXcgSURcbiAgICAgICAgY29uc3QgaHRtbEZvciA9IGNoaWxkLmdldEF0dHJpYnV0ZSgnZm9yJyk7XG4gICAgICAgIGlmIChodG1sRm9yKSB7XG4gICAgICAgICAgLy9DYXBpdGlsaXplIGZpcnN0IGxldHRlciBvZiBnaXZlbiBJRFxuICAgICAgICAgIGNvbnN0IGNhcFZhbHVlRm9yID0gYCR7aHRtbEZvcn1gLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYCR7aHRtbEZvcn1gLnNsaWNlKDEpXG4gICAgICAgICAgY29uc3QgbmV3SHRtbEZvciA9ICdlZGl0JyArIGNhcFZhbHVlRm9yO1xuICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnZm9yJywgbmV3SHRtbEZvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydFRhc2tzKHNlbGVjdGVkQ3JpdGVyaWEpIHtcbiAgICBhcHBsaWVkU29ydCA9IHNlbGVjdGVkQ3JpdGVyaWE7XG4gICAgZ2VuZXJhdGVVSVRhc2tzKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclRhc2tzKHNlbGVjdGVkRmlsdGVyKSB7XG4gICAgYXBwbGllZEZpbHRlciA9IHNlbGVjdGVkRmlsdGVyO1xuICAgIGdlbmVyYXRlVUlUYXNrcygpXG4gIH1cbiAgXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XG4gICAgc2F2ZVRhc2tzVG9TdG9yYWdlKCk7XG4gICAgZ2VuZXJhdGVVSVRhc2tzKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRhc2tTdGF0dXModGFza0lkLCBjb21wbGV0ZWQpIHtcbiAgICBjb25zdCB0YXNrID0gdGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG4gICAgaWYgKHRhc2spIHtcbiAgICAgICAgdGFzay5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgICAgIHNhdmVUYXNrc1RvU3RvcmFnZSgpO1xuICAgICAgICBnZW5lcmF0ZVVJVGFza3MoKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUYXNrc1RvU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBbSlNPTi5zdHJpbmdpZnkodGFza3MpXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrU3RvcmFnZSgpIHtcbiAgICB0YXNrcyA9IFtdO1xuICAgIHVpVGFza3MgPSBbXTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBbSlNPTi5zdHJpbmdpZnkodGFza3MpXSk7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==