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

#todoAppContainer {
    display: none;
    flex-direction: column;
    width: 65%;
    gap: 1rem;
}

#editContainer{
    display: flex;
    flex-direction: column;
    width: 65%;
    gap: 1rem;
}

#todoAppContainer.active {
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
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,iBAAiB;AACrB;;;AAKA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,iCAAiC;IACjC,kCAAkC;IAClC,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;;AAGA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,+BAA+B;IAC/B,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;IAC3B,qBAAqB;AACzB","sourcesContent":[":root{\n    --lightgray: #EFEFEF;\n    --blackish: #330000;\n    --orange: #FFCC66;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto:wght@300&display=swap');\n\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 16px;\n    font-family: 'Roboto', sans-serif;\n    background-color: var(--lightgray);\n    color: var(--blackish);\n    width: 100%;\n    margin: 1rem;\n    gap: 2rem;\n    min-width: min-content;\n}\n\n#todoAppContainer {\n    display: none;\n    flex-direction: column;\n    width: 65%;\n    gap: 1rem;\n}\n\n#editContainer{\n    display: flex;\n    flex-direction: column;\n    width: 65%;\n    gap: 1rem;\n}\n\n#todoAppContainer.active {\n    display: flex;\n}\n\ninput, textarea, select {\n    border-style: none;\n    border-radius: 1rem;\n    height: 1.5rem;\n}\n\n#inputHeader, #editInputHeader{\n    display: flex;\n    justify-content: space-between;\n}\n\n#titleContainer, #dueDateContainer, #priorityContainer, #editTitleContainer, #editDueDateContainer, #editPriorityContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n#descriptionSection, #editDescriptionSection {\n    display: flex;\n    flex-direction: column;\n}\n\n#taskDescription, #editTaskDescription {\n    height: 8rem;\n}\n\n#listContainer{\n    display: flex;\n    flex-direction: column;\n    width: 65%;\n    gap: 2rem;\n}\n\n#taskList{\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n\n#deleteStorage{\n    align-self: flex-end;\n}\n\n#filterContainer{\n    display: flex;\n    justify-content: space-between;\n}\n\n#selectContainer, #sortContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.taskContainer{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    margin: 1rem;\n    padding: 1rem;\n    background-color: #afb3c5;\n    border-radius: 1rem;\n}\n\n.topContainer{\n    display: flex;\n    justify-content: space-between;\n    gap: 1rem;\n}\n\n.bottomContainer{\n    display: none;\n    gap: 1rem;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.bottomContainer.active {\n    display: flex;\n}\n\n.topRight{\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n.topLeft{\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\nbutton {\n    align-self: center; \n    background-color: var(--orange);\n    border: none;\n    color: var(--blackish);\n    text-align: center;\n    text-decoration: none;\n    padding: 0.5rem 1rem 0.5rem 1rem;\n    border-radius: 2rem;\n}\n\nbutton:hover {\n    transition: transform 100ms;\n    transform: scale(1.1);\n}"],"sourceRoot":""}]);
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
console.log(todoAppContainer)

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
        <div class="editContainer" id="editContainer-${task.id}"></div>
      </div>`
      //!!!Move it inside a function rather than generate it for each task 
      //Select list item

      //Create edit container
      // const todoAppContainer = document.querySelector('#todoAppContainer')
      // const editContainer = todoAppContainer.cloneNode(true)
      // generateEditIDs(editContainer)
      // editContainer.id = 'editContainer'
      // editContainer.dataset.id = task.id
      // console.log(editContainer)

      // //Assign values to input fields
      // const editTaskTitle = document.querySelector('#editTitleContainer')
      // // editTaskTitle.dataset.id = tas
      // const editTaskDueDate = document.querySelector('#editTaskDueDate')
      // const editTaskDescription = document.querySelector('#editTaskDescription')



      //Append elements
      taskList.appendChild(listItem)
      // taskList.appendChild(editContainer)
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
  console.log(target)

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
        //Add event listener for detail task button
        const targetedTask = target.closest('div[data-id]')
        console.log(targetedTask);
        const bottomContainer = targetedTask.querySelector('.bottomContainer')
        bottomContainer.classList.toggle('active');
        console.log(bottomContainer.value)
    }
    else if(target.name === 'editTaskBtn') {

        //Add event listener for edit task button
        const selectedListItem = target.closest('div[data-id]')
        console.log(selectedListItem)

        const taskList = document.getElementById('taskList')
        editTaskGenerator(taskList, selectedListItem)
        const selectedEditContainer = document.querySelector(`[id="editContainer"][data-id="${selectedListItem.dataset.id}"]`)
        console.log(selectedEditContainer)
        assignValues(selectedListItem, selectedEditContainer)
        console.log(selectedListItem.querySelector('.taskTitle').innerHTML)
        console.log(selectedListItem.querySelector('.taskPriority').innerHTML) 
        console.log(selectedListItem.querySelector('.taskDue').innerHTML)
        console.log(selectedListItem.querySelector('.taskDescription').innerHTML)
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

function editTaskGenerator(parentElement, listElement) {
  const todoAppContainer = document.querySelector('#todoAppContainer')
  const editContainer = todoAppContainer.cloneNode(true)
  ;(0,_toDoList__WEBPACK_IMPORTED_MODULE_0__.generateEditIDs)(editContainer)
  editContainer.id = 'editContainer'
  editContainer.dataset.id = listElement.dataset.id
  editContainer.querySelector('#editAddTaskBtn').textContent = 'Update Task'
  console.log(editContainer)
  parentElement.appendChild(editContainer)
}

function assignValues(originalElement, assignedElement) {
  
  // //Assign values to input fields
  assignedElement.querySelector('#editTaskTitle').value = originalElement.querySelector('.taskTitle').textContent
  assignedElement.querySelector('#editTaskDescription').value = originalElement.querySelector('.taskDescription').textContent
  // assignedElement.querySelector('#editTaskDueDate').innerHTML = originalElement.querySelector('.taskDue').innerHTML
  assignedElement.querySelector('.taskOption').selected = originalElement.querySelector('.taskPriority').textContent 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDVjJCO0FBQ0Q7QUFDSztBQUNTO0FBQ1g7O0FBRTdCLDZDQUFPO0FBQ1AsdURBQVc7QUFDWCw0Q0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JOOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsU0FBUywrQkFBK0IsU0FBUztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsUUFBUSwrQkFBK0IsUUFBUTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz80Y2ZiIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2N1cnJlbnREYXRlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvRG9MaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0tbGlnaHRncmF5OiAjRUZFRkVGO1xuICAgIC0tYmxhY2tpc2g6ICMzMzAwMDA7XG4gICAgLS1vcmFuZ2U6ICNGRkNDNjY7XG59XG5cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyYXkpO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFja2lzaCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGdhcDogMnJlbTtcbiAgICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xufVxuXG4jdG9kb0FwcENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA2NSU7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4jZWRpdENvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDY1JTtcbiAgICBnYXA6IDFyZW07XG59XG5cbiN0b2RvQXBwQ29udGFpbmVyLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xufVxuXG4jaW5wdXRIZWFkZXIsICNlZGl0SW5wdXRIZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiN0aXRsZUNvbnRhaW5lciwgI2R1ZURhdGVDb250YWluZXIsICNwcmlvcml0eUNvbnRhaW5lciwgI2VkaXRUaXRsZUNvbnRhaW5lciwgI2VkaXREdWVEYXRlQ29udGFpbmVyLCAjZWRpdFByaW9yaXR5Q29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2Rlc2NyaXB0aW9uU2VjdGlvbiwgI2VkaXREZXNjcmlwdGlvblNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI3Rhc2tEZXNjcmlwdGlvbiwgI2VkaXRUYXNrRGVzY3JpcHRpb24ge1xuICAgIGhlaWdodDogOHJlbTtcbn1cblxuI2xpc3RDb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA2NSU7XG4gICAgZ2FwOiAycmVtO1xufVxuXG4jdGFza0xpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnJlbTtcbn1cblxuXG4jZGVsZXRlU3RvcmFnZXtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuI2ZpbHRlckNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI3NlbGVjdENvbnRhaW5lciwgI3NvcnRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRhc2tDb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZiM2M1O1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi50b3BDb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uYm90dG9tQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm90dG9tQ29udGFpbmVyLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnRvcFJpZ2h0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b3BMZWZ0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2tpc2gpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXM7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOzs7QUFLQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOzs7QUFHQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWxpZ2h0Z3JheTogI0VGRUZFRjtcXG4gICAgLS1ibGFja2lzaDogIzMzMDAwMDtcXG4gICAgLS1vcmFuZ2U6ICNGRkNDNjY7XFxufVxcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyZWF0K1ZpYmVzJmZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyYXkpO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2tpc2gpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbiN0b2RvQXBwQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jZWRpdENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jdG9kb0FwcENvbnRhaW5lci5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiNpbnB1dEhlYWRlciwgI2VkaXRJbnB1dEhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jdGl0bGVDb250YWluZXIsICNkdWVEYXRlQ29udGFpbmVyLCAjcHJpb3JpdHlDb250YWluZXIsICNlZGl0VGl0bGVDb250YWluZXIsICNlZGl0RHVlRGF0ZUNvbnRhaW5lciwgI2VkaXRQcmlvcml0eUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uU2VjdGlvbiwgI2VkaXREZXNjcmlwdGlvblNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdGFza0Rlc2NyaXB0aW9uLCAjZWRpdFRhc2tEZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogOHJlbTtcXG59XFxuXFxuI2xpc3RDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuI3Rhc2tMaXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcblxcbiNkZWxldGVTdG9yYWdle1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuI2ZpbHRlckNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jc2VsZWN0Q29udGFpbmVyLCAjc29ydENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FmYjNjNTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLnRvcENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5ib3R0b21Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGdhcDogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm90dG9tQ29udGFpbmVyLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50b3BSaWdodHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9wTGVmdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFja2lzaCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQ1JFRElUOiBodHRwczovL2FuZHktYmVsbC5jby51ay9hLW1vZGVybi1jc3MtcmVzZXQvICovXG5cbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xuYm9keSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxucCxcbmZpZ3VyZSxcbmJsb2NrcXVvdGUsXG5kbCxcbmRkIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cbnVsW3JvbGU9XCJsaXN0XCJdLFxub2xbcm9sZT1cImxpc3RcIl0ge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXG5odG1sOmZvY3VzLXdpdGhpbiB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xuYTpub3QoW2NsYXNzXSkge1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG59XG5cbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cbmltZyxcbnBpY3R1cmUge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBmb250OiBpbmhlcml0O1xufVxuXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMgYW5kIHRyYW5zaXRpb25zIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICBodG1sOmZvY3VzLXdpdGhpbiB7XG4gICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XG4gIH1cbiAgKixcbiAgKjo6YmVmb3JlLFxuICAqOjphZnRlciB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHdEQUF3RDs7QUFFeEQscUJBQXFCO0FBQ3JCOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUEsMEJBQTBCO0FBQzFCOzs7Ozs7Ozs7O0VBVUUsU0FBUztBQUNYOztBQUVBLDJHQUEyRztBQUMzRzs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxvQ0FBb0M7QUFDcEM7O0VBRUUsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUEseUNBQXlDO0FBQ3pDOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBLGlGQUFpRjtBQUNqRjtFQUNFO0dBQ0MscUJBQXFCO0VBQ3RCO0VBQ0E7OztJQUdFLHFDQUFxQztJQUNyQyx1Q0FBdUM7SUFDdkMsc0NBQXNDO0lBQ3RDLGdDQUFnQztFQUNsQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENSRURJVDogaHR0cHM6Ly9hbmR5LWJlbGwuY28udWsvYS1tb2Rlcm4tY3NzLXJlc2V0LyAqL1xcblxcbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPVxcXCJsaXN0XFxcIl0sXFxub2xbcm9sZT1cXFwibGlzdFxcXCJdIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zIGFuZCB0cmFuc2l0aW9ucyBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICBodG1sOmZvY3VzLXdpdGhpbiB7XFxuICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcbiAgfVxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuL2N1cnJlbnREYXRlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRET00oKSB7XG4vL0NyZWF0ZSBhIGJ1dHRvbiBmb3Igb3Blbi1jbG9zZSBhcHAgY29udGFpbmVyXG5jb25zdCBhcHBDb250YWluZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYXBwQ29udGFpbmVyQnRuLmlkID0gJ2FwcENvbnRhaW5lckJ1dHRvbidcbmFwcENvbnRhaW5lckJ0bi5jbGFzc0xpc3QuYWRkID0gJ2FwcENvbnRhaW5lckJ1dHRvbidcbmFwcENvbnRhaW5lckJ0bi50ZXh0Q29udGVudCA9ICdOZXcgVGFzaydcblxuLy8gQ3JlYXRlIGEgY29udGFpbmVyIGRpdiBmb3IgdGhlIHRvLWRvIGFwcFxuY29uc3QgdG9kb0FwcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG50b2RvQXBwQ29udGFpbmVyLmlkID0gJ3RvZG9BcHBDb250YWluZXInXG50b2RvQXBwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQgPSAndG9kb0FwcENvbnRhaW5lcidcbmNvbnNvbGUubG9nKHRvZG9BcHBDb250YWluZXIpXG5cbi8vQ3JlYXRlIGEgbGlzdCBjb250YWluZXJcbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxubGlzdENvbnRhaW5lci5pZCA9ICdsaXN0Q29udGFpbmVyJ1xuXG4vL0NyZWF0ZSBhIGZpbHRlciBjb250YWluZXJcbmNvbnN0IGZpbHRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5maWx0ZXJDb250YWluZXIuaWQgPSAnZmlsdGVyQ29udGFpbmVyJ1xuXG4vLyBDcmVhdGUgYSBoZWFkaW5nIGZvciB0aGUgYXBwXG5jb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuaGVhZGluZy50ZXh0Q29udGVudCA9ICdUby1EbyBMaXN0J1xuXG4vL0NyZWF0ZSBoZWFkZXIgY29udGFpbmVyIGZvciBpbnB1dHModGl0bGUsIGR1ZSBkYXRlLCBwcmlvcml0eSBhbmQgc3VibWl0IGJ1dHRvbilcbmNvbnN0IGlucHV0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmlucHV0SGVhZGVyLmlkID0gJ2lucHV0SGVhZGVyJ1xuXG4vL0NyZWF0ZSB0aXRsZSBjb250YWluZXIgZm9yIGxhYmVsIGFuZCBpbnB1dCBlbGVtZW50c1xuY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudGl0bGVDb250YWluZXIuaWQgPSAndGl0bGVDb250YWluZXInIFxuXG4vL0NyZWF0ZSBkdWUgZGF0ZSBjb250YWluZXIgZm9yIGxhYmVsIGFuZCBpbnB1dCBlbGVtZW50c1xuY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5kdWVEYXRlQ29udGFpbmVyLmlkID0gJ2R1ZURhdGVDb250YWluZXInIFxuXG4vL0NyZWF0ZSBwcmlvcml0eSBjb250YWluZXIgZm9yIGxhYmVsIGFuZCBpbnB1dCBlbGVtZW50c1xuY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxucHJpb3JpdHlDb250YWluZXIuaWQgPSAncHJpb3JpdHlDb250YWluZXInXG5cbi8vQ3JlYXRlIHNlY3Rpb24gZm9yIGRlc2NyaXB0aW9uXG5jb25zdCBkZXNjcmlwdGlvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZGVzY3JpcHRpb25TZWN0aW9uLmlkID0gJ2Rlc2NyaXB0aW9uU2VjdGlvbidcblxuLy9MYWJlbCBlbGVtZW50IGZvciB0aXRsZSBpbnB1dFxuY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbnRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBUaXRsZSdcbnRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFza1RpdGxlJylcbnRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpXG5cbi8vIENyZWF0ZSBhbiBpbnB1dCBmaWVsZCBmb3IgYWRkaW5nIHRhc2tzXG5jb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG50YXNrVGl0bGUuaWQgPSAndGFza1RpdGxlJyBcbnRhc2tUaXRsZS50eXBlID0gJ3RleHQnXG50YXNrVGl0bGUucGxhY2Vob2xkZXIgPSAnVGl0bGUnXG50aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXG5cbi8vIENyZWF0ZSBhbiBkZXNjcmlwdGlvbiBmaWVsZCBmb3IgdGFza3MgZGV0YWlsc1xuY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxudGFza0Rlc2NyaXB0aW9uLmlkID0gJ3Rhc2tEZXNjcmlwdGlvbidcblxuLy9MYWJlbCBlbGVtZW50IGZvciB0aXRsZSBkZXNjcmlwdGlvblxuY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbmRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBEZXNjcmlwdGlvbidcbmRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFza0Rlc2NyaXB0aW9uJylcbmRlc2NyaXB0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKVxuXG4vL0xhYmVsIGVsZW1lbnQgZm9yIGR1ZSBkYXRlIGlucHV0XG5jb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5kdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnXG5kdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZUxhYmVsJylcbmR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKVxuXG4vLyBDcmVhdGUgYW4gZHVlRGF0ZSBmb3IgdGFza3MgZGVhZGxpbmVcbmNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxudGFza0R1ZURhdGUuaWQgPSAndGFza0R1ZURhdGUnXG50YXNrRHVlRGF0ZS50eXBlID0gJ2RhdGUnXG50YXNrRHVlRGF0ZS52YWx1ZSA9IGZvcm1hdERhdGUoKVxuZHVlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSlcblxuLy9MYWJlbCBlbGVtZW50IGZvciBwcmlvcml0eSBpbnB1dFxuY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbnByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBQcmlvcml0eSdcbnByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHlMYWJlbCcpXG5wcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKVxuXG4vL0NyZWF0ZSBwcmlvcml0eSBmb3IgdGFza3MgaW1wb3J0YW5jZVxuY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbnRhc2tQcmlvcml0eS5pZCA9IFwidGFza1ByaW9yaXR5XCJcbmNvbnN0IHByaW9yaXRpZXMgPSBbXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCJdO1xuLy8gTG9vcCB0aHJvdWdoIHRoZSBwcmlvcml0aWVzIGFuZCBjcmVhdGUgYW4gb3B0aW9uIGVsZW1lbnQgZm9yIGVhY2hcbnByaW9yaXRpZXMuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCB0YXNrT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICB0YXNrT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tPcHRpb24nKVxuICAgIHRhc2tPcHRpb24udmFsdWUgPSBwcmlvcml0eTsgLy8gU2V0IHRoZSB2YWx1ZSBhdHRyaWJ1dGUgdG8gdGhlIHByaW9yaXR5IHZhbHVlXG4gICAgdGFza09wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5OyAvLyBTZXQgdGhlIHRleHQgY29udGVudCBvZiB0aGUgb3B0aW9uXG4gICAgaWYgKHByaW9yaXR5ID09PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgIHRhc2tPcHRpb24uc2VsZWN0ZWQgPSB0cnVlOyAvLyBTZXQgJ01lZGl1bScgYXMgdGhlIGRlZmF1bHQgc2VsZWN0ZWQgb3B0aW9uXG4gICAgfVxuICAgIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZCh0YXNrT3B0aW9uKTsgLy8gQXBwZW5kIHRoZSBvcHRpb24gdG8gdGhlIHNlbGVjdCBlbGVtZW50XG4gIH0pO1xucHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KVxuXG4vLyBDcmVhdGUgYSBidXR0b24gdG8gYWRkIHRhc2tzXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmFkZFRhc2tCdG4uaWQgPSAnYWRkVGFza0J0bidcbmFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snXG5cbi8vQ3JlYXRlIGxhYmVsIGZvciBzZWxlY3QgZWxlbWVudFxuY29uc3Qgc2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5zZWxlY3RMYWJlbC50ZXh0Q29udGVudCA9ICdGaWx0ZXIgVGFza3MnXG5zZWxlY3RMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWxlY3RMYWJlbCcpXG5cbi8vIENyZWF0ZSB0aGUgc2VsZWN0IGVsZW1lbnRcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza0ZpbHRlcicpOyAvLyBTZXQgYW4gSUQgZm9yIHRoZSBzZWxlY3QgZWxlbWVudFxuXG4vLyBDcmVhdGUgdGhlIG9wdGlvbnMgYW5kIGFkZCB0aGVtIHRvIHRoZSBzZWxlY3QgZWxlbWVudFxuY29uc3Qgb3B0aW9uQ29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb25Db21wbGV0ZWQudmFsdWUgPSAnY29tcGxldGVkJztcbm9wdGlvbkNvbXBsZXRlZC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xuXG5jb25zdCBvcHRpb25BY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbm9wdGlvbkFjdGl2ZS52YWx1ZSA9ICdhY3RpdmUnO1xub3B0aW9uQWN0aXZlLnRleHRDb250ZW50ID0gJ0FjdGl2ZSc7XG5cbmNvbnN0IG9wdGlvbkFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xub3B0aW9uQWxsLnZhbHVlID0gJ2FsbCc7XG5vcHRpb25BbGwudGV4dENvbnRlbnQgPSAnQWxsJztcblxuLy8gQXBwZW5kIHRoZSBvcHRpb25zIHRvIHRoZSBzZWxlY3QgZWxlbWVudFxuXG5zZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uQWxsKTtcbnNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25BY3RpdmUpO1xuc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkNvbXBsZXRlZCk7XG5cbi8vIEFwcGVuZCB0aGUgc2VsZWN0IGVsZW1lbnQgdG8gYW4gZXhpc3RpbmcgZWxlbWVudCBpbiB0aGUgRE9NXG5jb25zdCBzZWxlY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuc2VsZWN0Q29udGFpbmVyLmlkID0gJ3NlbGVjdENvbnRhaW5lcidcbnNlbGVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RMYWJlbClcbnNlbGVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpXG5maWx0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0Q29udGFpbmVyKVxuXG4vL0xhYmVsIGZvciBzZWxlY3Qgc29ydCBlbGVtZW50XG5jb25zdCBzb3J0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5zb3J0TGFiZWwudGV4dENvbnRlbnQgPSAnU29ydCBCeSdcbnNvcnRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzb3J0TGFiZWwnKVxuXG4vL0NyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRvIHNvcnQgdGFzayBsaXN0XG5jb25zdCBzb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbnNvcnQuaWQgPSAnc29ydCdcbnNvcnQudGV4dENvbnRlbnQgPSAnU29ydCBCeSdcbmNvbnN0IHNvcnRPcHRpb25zID0gW1wiRHVlIERhdGVcIiwgXCJQcmlvcml0eVwiXVxuc29ydE9wdGlvbnMuZm9yRWFjaCgoc29ydEl0ZW0sIGluZGV4KSA9PiB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IG9wdGlvbklkID0gYHNvcnRPcHRpb25fJHtpbmRleH1gXG4gIG9wdGlvbi52YWx1ZSA9IHNvcnRJdGVtXG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHNvcnRJdGVtXG4gIG9wdGlvbi5pZCA9IG9wdGlvbklkXG4gIGlmIChzb3J0SXRlbSA9PT0gXCJEdWUgRGF0ZVwiKSB7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZVxuICB9XG4gIHNvcnQuYXBwZW5kQ2hpbGQob3B0aW9uKVxufSlcbmNvbnN0IHNvcnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuc29ydENvbnRhaW5lci5pZCA9ICdzb3J0Q29udGFpbmVyJ1xuc29ydENvbnRhaW5lci5hcHBlbmRDaGlsZChzb3J0TGFiZWwpXG5zb3J0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvcnQpXG5maWx0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc29ydENvbnRhaW5lcilcblxuLy9DcmVhdGUgYSBidXR0b24gdG8gZGVsZXRlIHRhc2sgc3RvcmFnZVxuY29uc3QgZGVsZXRlU3RvcmFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5kZWxldGVTdG9yYWdlQnRuLmlkID0gJ2RlbGV0ZVN0b3JhZ2UnXG5kZWxldGVTdG9yYWdlQnRuLnRleHRDb250ZW50ID0gJ0NsZWFyIFRhc2tzJ1xuXG4vLyBDcmVhdGUgYW4gZW1wdHkgZGl2IGVsZW1lbnQgdG8gaG9sZCB0aGUgdGFzayBsaXN0XG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG50YXNrTGlzdC5pZCA9J3Rhc2tMaXN0J1xuXG4vLyBBcHBlbmQgdGhlIGhlYWRpbmcsIGlucHV0IGZpZWxkLCBidXR0b24sIGFuZCB0YXNrIGxpc3QgdG8gdGhlIGNvbnRhaW5lclxuaW5wdXRIZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpXG5pbnB1dEhlYWRlci5hcHBlbmRDaGlsZChkdWVEYXRlQ29udGFpbmVyKVxuaW5wdXRIZWFkZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250YWluZXIpXG5pbnB1dEhlYWRlci5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKVxudG9kb0FwcENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEhlYWRlcilcbmRlc2NyaXB0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pXG50b2RvQXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uU2VjdGlvbilcbmxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlsdGVyQ29udGFpbmVyKVxubGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTGlzdClcbmxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlU3RvcmFnZUJ0bilcblxuLy8gQXBwZW5kIHRoZSBjb250YWluZXIgdG8gdGhlIGRvY3VtZW50IGJvZHlcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGluZylcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwQ29udGFpbmVyQnRuKVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b2RvQXBwQ29udGFpbmVyKVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKVxufVxuXG4iLCJpbXBvcnQgeyB1aVRhc2tzLCBkZWxldGVUYXNrLCB1cGRhdGVUYXNrU3RhdHVzLCBhZGRUYXNrLCBzb3J0VGFza3MsIGZpbHRlclRhc2tzLCBkZWxldGVUYXNrU3RvcmFnZSwgZ2VuZXJhdGVFZGl0SURzIH0gZnJvbSBcIi4vdG9Eb0xpc3RcIlxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuL2N1cnJlbnREYXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VUkoKSB7XG4gIC8vIEluaXRpYWxpemUgdGhlIFVJLCByZW5kZXIgdGFza3MsIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJzXG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tMaXN0JylcblxuICAvLyBFdmVudCBkZWxlZ2F0aW9uOiBBZGQgYSBzaW5nbGUgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHRhc2sgbGlzdFxuICB0YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRhc2tDbGljaylcblxuICAvL05ldyB0YXNrIGJ1dHRvblxuICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcENvbnRhaW5lckJ1dHRvbicpXG4gIGluaXRBcHBDb250YWluZXIobmV3VGFza0J0biwgJ3RvZ2dsZScpXG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBhZGRpbmcgdGFza3NcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJyk7XG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaGFuZGxlQWRkVGFzaygpXG4gICAgaW5pdEFwcENvbnRhaW5lcihhZGRUYXNrQnRuLCAncmVtb3ZlJylcbiAgICByZW5kZXJUYXNrcygpO1xuICB9KTtcblxuICAvL0FkZCBldmVudCBsaXN0ZW5lciBmb3Igc29ydGluZyB0YXNrIGxpc3RcbiAgY29uc3Qgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydFwiKTtcbiAgc2VsZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkQ3JpdGVyaWEgPSBzZWxlY3RFbGVtZW50LnZhbHVlO1xuICAgICAgc29ydFRhc2tzKHNlbGVjdGVkQ3JpdGVyaWEpO1xuICAgICAgcmVuZGVyVGFza3MoKVxuICB9KTtcblxuICAvL0FkZCBldmVudCBsaXN0ZW5lciBmb3IgZmlsdGVyIHRhc2sgbGlzdFxuICBjb25zdCBmaWx0ZXJTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0ZpbHRlcicpXG4gIGZpbHRlclNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEZpbHRlciA9IGZpbHRlclNlbGVjdC52YWx1ZTtcbiAgICBmaWx0ZXJUYXNrcyhzZWxlY3RlZEZpbHRlcik7XG4gICAgcmVuZGVyVGFza3MoKVxufSk7XG5cbiAgLy9EZWxldGUgdGFza3Mgc3RvcmFnZVxuICBjb25zdCBkZWxldGVTdG9yYWdlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZVN0b3JhZ2UnKVxuICBkZWxldGVTdG9yYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRlbGV0ZVRhc2tTdG9yYWdlKClcbiAgICByZW5kZXJUYXNrcygpXG4gICAgfSk7XG5cbiAgLy8gUmVuZGVyIGluaXRpYWwgdGFza3NcbiAgcmVuZGVyVGFza3MoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdCcpXG4gIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnIC8vIENsZWFyIHRoZSBleGlzdGluZyB0YXNrIGxpc3RcblxuICBmb3IgKGNvbnN0IHRhc2sgb2YgdWlUYXNrcykge1xuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnbGlzdEl0ZW0nKVxuICAgICAgbGlzdEl0ZW0uZGF0YXNldC5pZCA9IHRhc2suaWQgLy8gU2V0IGEgY3VzdG9tIGRhdGEgYXR0cmlidXRlIGZvciB0aGUgdGFzayBJRFxuICAgICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInRhc2tDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvcENvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BMZWZ0XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGV0YWlsVGFza0J0blwiIGlkPVwiZGV0YWlsVGFza0J0bi0ke3Rhc2suaWR9XCIgbmFtZT1cImRldGFpbFRhc2tCdG5cIj5WPC9idXR0b24+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0YXNrQ2hlY2tib3gtJHt0YXNrLmlkfVwiIG5hbWU9XCJ0YXNrQ2hlY2tib3hcIiAke3Rhc2suY29tcGxldGVkID8gJ2NoZWNrZWQnIDogJyd9PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tUaXRsZVwiIGlkPVwidGFza1RpdGxlLSR7dGFzay5pZH1cIj4ke3Rhc2sudGl0bGV9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvcFJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza0R1ZVwiIGlkPVwidGFza0R1ZS0ke3Rhc2suaWR9XCI+RHVlOiAke3Rhc2suZHVlRGF0ZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrUHJpb3JpdHlcIiBpZD1cInRhc2tQcmlvcml0eS0ke3Rhc2suaWR9XCI+UHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX08L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJkZWxldGVUYXNrQnRuLSR7dGFzay5pZH1cIiBuYW1lPVwiZGVsZXRlVGFza0J0blwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbUNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrRGVzY3JpcHRpb25cIiBpZD1cInRhc2tEZXNjcmlwdGlvbi0ke3Rhc2suaWR9XCI+JHt0YXNrLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJlZGl0VGFza0J0bi0ke3Rhc2suaWR9XCIgbmFtZT1cImVkaXRUYXNrQnRuXCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRDb250YWluZXJcIiBpZD1cImVkaXRDb250YWluZXItJHt0YXNrLmlkfVwiPjwvZGl2PlxuICAgICAgPC9kaXY+YFxuICAgICAgLy8hISFNb3ZlIGl0IGluc2lkZSBhIGZ1bmN0aW9uIHJhdGhlciB0aGFuIGdlbmVyYXRlIGl0IGZvciBlYWNoIHRhc2sgXG4gICAgICAvL1NlbGVjdCBsaXN0IGl0ZW1cblxuICAgICAgLy9DcmVhdGUgZWRpdCBjb250YWluZXJcbiAgICAgIC8vIGNvbnN0IHRvZG9BcHBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0FwcENvbnRhaW5lcicpXG4gICAgICAvLyBjb25zdCBlZGl0Q29udGFpbmVyID0gdG9kb0FwcENvbnRhaW5lci5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgIC8vIGdlbmVyYXRlRWRpdElEcyhlZGl0Q29udGFpbmVyKVxuICAgICAgLy8gZWRpdENvbnRhaW5lci5pZCA9ICdlZGl0Q29udGFpbmVyJ1xuICAgICAgLy8gZWRpdENvbnRhaW5lci5kYXRhc2V0LmlkID0gdGFzay5pZFxuICAgICAgLy8gY29uc29sZS5sb2coZWRpdENvbnRhaW5lcilcblxuICAgICAgLy8gLy9Bc3NpZ24gdmFsdWVzIHRvIGlucHV0IGZpZWxkc1xuICAgICAgLy8gY29uc3QgZWRpdFRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VGl0bGVDb250YWluZXInKVxuICAgICAgLy8gLy8gZWRpdFRhc2tUaXRsZS5kYXRhc2V0LmlkID0gdGFzXG4gICAgICAvLyBjb25zdCBlZGl0VGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdFRhc2tEdWVEYXRlJylcbiAgICAgIC8vIGNvbnN0IGVkaXRUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdFRhc2tEZXNjcmlwdGlvbicpXG5cblxuXG4gICAgICAvL0FwcGVuZCBlbGVtZW50c1xuICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pXG4gICAgICAvLyB0YXNrTGlzdC5hcHBlbmRDaGlsZChlZGl0Q29udGFpbmVyKVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUFkZFRhc2soKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGl0bGUnKTtcbiAgY29uc3QgdGl0bGUgPSB0YXNrVGl0bGUudmFsdWUudHJpbSgpO1xuXG4gIGlmICh0aXRsZSA9PT0gJycpIHtcbiAgICAgIGFsZXJ0KCdBZGQgdGl0bGUgZm9yIHRhc2shJyk7XG4gICAgICByZXR1cm47IC8vIERvbid0IGFkZCBlbXB0eSB0YXNrc1xuICB9XG5cbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjcmlwdGlvbicpXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlXG5cbiAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykge1xuICAgICAgYWxlcnQoJ0FkZCBkZXNjcmlwdGlvbiBmb3IgdGFzayEnKTtcbiAgICAgIHJldHVybjsgLy8gRG9uJ3QgYWRkIGVtcHR5IHRhc2tzXG4gIH1cblxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0R1ZURhdGUnKVxuICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlXG5cbiAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKVxuICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5T3B0aW9uLnZhbHVlXG4gIFxuICBhZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuXG4gIC8vIENsZWFyIGlucHV0IGFuZCBwcm92aWRlIGZlZWRiYWNrXG4gIHRhc2tUaXRsZS52YWx1ZSA9ICcnO1xuICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgZHVlRGF0ZUlucHV0LnZhbHVlID0gZm9ybWF0RGF0ZSgpO1xuICBwcmlvcml0eU9wdGlvbi52YWx1ZSA9IFwiTWVkaXVtXCI7XG4gIGFsZXJ0KCdUYXNrIGFkZGVkIHN1Y2Nlc3NmdWxseSEnKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0NsaWNrKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICBjb25zb2xlLmxvZyh0YXJnZXQpXG5cbiAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnICYmIHRhcmdldC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAvLyBDaGVja2JveCB3YXMgY2xpY2tlZCwgaGFuZGxlIHRhc2sgY29tcGxldGlvblxuICAgICAgY29uc3QgdGFza0lkID0gcGFyc2VJbnQodGFyZ2V0LmNsb3Nlc3QoJ2RpdltkYXRhLWlkXScpLmRhdGFzZXQuaWQpXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSB0YXJnZXQuY2hlY2tlZFxuICAgICAgdXBkYXRlVGFza1N0YXR1cyh0YXNrSWQsIGNvbXBsZXRlZClcbiAgICAgIHJlbmRlclRhc2tzKClcbiAgfSBlbHNlIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICBpZih0YXJnZXQubmFtZSA9PT0gJ2RlbGV0ZVRhc2tCdG4nKSB7XG4gICAgICAgIC8vIERlbGV0ZSBidXR0b24gd2FzIGNsaWNrZWQsIGhhbmRsZSB0YXNrIGRlbGV0aW9uXG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IHBhcnNlSW50KHRhcmdldC5jbG9zZXN0KCdkaXZbZGF0YS1pZF0nKS5kYXRhc2V0LmlkKVxuICAgICAgICBkZWxldGVUYXNrKHRhc2tJZClcbiAgICAgICAgcmVuZGVyVGFza3MoKVxuICAgIH1cbiAgICBlbHNlIGlmKHRhcmdldC5uYW1lID09PSAnZGV0YWlsVGFza0J0bicpIHtcbiAgICAgICAgLy9BZGQgZXZlbnQgbGlzdGVuZXIgZm9yIGRldGFpbCB0YXNrIGJ1dHRvblxuICAgICAgICBjb25zdCB0YXJnZXRlZFRhc2sgPSB0YXJnZXQuY2xvc2VzdCgnZGl2W2RhdGEtaWRdJylcbiAgICAgICAgY29uc29sZS5sb2codGFyZ2V0ZWRUYXNrKTtcbiAgICAgICAgY29uc3QgYm90dG9tQ29udGFpbmVyID0gdGFyZ2V0ZWRUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b21Db250YWluZXInKVxuICAgICAgICBib3R0b21Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGJvdHRvbUNvbnRhaW5lci52YWx1ZSlcbiAgICB9XG4gICAgZWxzZSBpZih0YXJnZXQubmFtZSA9PT0gJ2VkaXRUYXNrQnRuJykge1xuXG4gICAgICAgIC8vQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBlZGl0IHRhc2sgYnV0dG9uXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTGlzdEl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnZGl2W2RhdGEtaWRdJylcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRMaXN0SXRlbSlcblxuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdCcpXG4gICAgICAgIGVkaXRUYXNrR2VuZXJhdG9yKHRhc2tMaXN0LCBzZWxlY3RlZExpc3RJdGVtKVxuICAgICAgICBjb25zdCBzZWxlY3RlZEVkaXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCJlZGl0Q29udGFpbmVyXCJdW2RhdGEtaWQ9XCIke3NlbGVjdGVkTGlzdEl0ZW0uZGF0YXNldC5pZH1cIl1gKVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEVkaXRDb250YWluZXIpXG4gICAgICAgIGFzc2lnblZhbHVlcyhzZWxlY3RlZExpc3RJdGVtLCBzZWxlY3RlZEVkaXRDb250YWluZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkTGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLnRhc2tUaXRsZScpLmlubmVySFRNTClcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRMaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcudGFza1ByaW9yaXR5JykuaW5uZXJIVE1MKSBcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRMaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcudGFza0R1ZScpLmlubmVySFRNTClcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRMaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcudGFza0Rlc2NyaXB0aW9uJykuaW5uZXJIVE1MKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0QXBwQ29udGFpbmVyKGVsZW1lbnQsIGFjdGlvbikge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0QXBwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9BcHBDb250YWluZXInKVxuICAgIGlmKGFjdGlvbiA9PT0gJ2FkZCcpIHtcbiAgICAgIGlucHV0QXBwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICAgIGVsc2UgaWYoYWN0aW9uID09PSAncmVtb3ZlJykge1xuICAgICAgaW5wdXRBcHBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9XG4gICAgZWxzZSBpZihhY3Rpb24gPT09ICd0b2dnbGUnKSB7XG4gICAgICBpbnB1dEFwcENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2tHZW5lcmF0b3IocGFyZW50RWxlbWVudCwgbGlzdEVsZW1lbnQpIHtcbiAgY29uc3QgdG9kb0FwcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvQXBwQ29udGFpbmVyJylcbiAgY29uc3QgZWRpdENvbnRhaW5lciA9IHRvZG9BcHBDb250YWluZXIuY2xvbmVOb2RlKHRydWUpXG4gIGdlbmVyYXRlRWRpdElEcyhlZGl0Q29udGFpbmVyKVxuICBlZGl0Q29udGFpbmVyLmlkID0gJ2VkaXRDb250YWluZXInXG4gIGVkaXRDb250YWluZXIuZGF0YXNldC5pZCA9IGxpc3RFbGVtZW50LmRhdGFzZXQuaWRcbiAgZWRpdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjZWRpdEFkZFRhc2tCdG4nKS50ZXh0Q29udGVudCA9ICdVcGRhdGUgVGFzaydcbiAgY29uc29sZS5sb2coZWRpdENvbnRhaW5lcilcbiAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlZGl0Q29udGFpbmVyKVxufVxuXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZXMob3JpZ2luYWxFbGVtZW50LCBhc3NpZ25lZEVsZW1lbnQpIHtcbiAgXG4gIC8vIC8vQXNzaWduIHZhbHVlcyB0byBpbnB1dCBmaWVsZHNcbiAgYXNzaWduZWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VGFza1RpdGxlJykudmFsdWUgPSBvcmlnaW5hbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tUaXRsZScpLnRleHRDb250ZW50XG4gIGFzc2lnbmVkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdFRhc2tEZXNjcmlwdGlvbicpLnZhbHVlID0gb3JpZ2luYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrRGVzY3JpcHRpb24nKS50ZXh0Q29udGVudFxuICAvLyBhc3NpZ25lZEVsZW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRUYXNrRHVlRGF0ZScpLmlubmVySFRNTCA9IG9yaWdpbmFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0R1ZScpLmlubmVySFRNTFxuICBhc3NpZ25lZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tPcHRpb24nKS5zZWxlY3RlZCA9IG9yaWdpbmFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ByaW9yaXR5JykudGV4dENvbnRlbnQgXG5cbn1cbiIsImZ1bmN0aW9uIHBhZFRvMkRpZ2l0cyhudW0pIHtcbiAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgfVxuICBcbiAgZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSA9IG5ldyBEYXRlKCkpIHtcbiAgICByZXR1cm4gW1xuICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgcGFkVG8yRGlnaXRzKGRhdGUuZ2V0TW9udGgoKSArIDEpLFxuICAgICAgcGFkVG8yRGlnaXRzKGRhdGUuZ2V0RGF0ZSgpKSxcbiAgICBdLmpvaW4oJy0nKTtcbiAgfSIsImltcG9ydCAnLi9zdHlsZXMvcmVzZXQuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcydcbmltcG9ydCB7IGluaXRET00gfSBmcm9tICcuL0RPTSdcbmltcG9ydCB7IGluaXRUb2RvQXBwIH0gZnJvbSBcIi4vdG9Eb0xpc3RcIlxuaW1wb3J0IHsgaW5pdFVJIH0gZnJvbSBcIi4vVUlcIlxuXG5pbml0RE9NKClcbmluaXRUb2RvQXBwKClcbmluaXRVSSgpXG5cbiIsImxldCB0YXNrSWRDb3VudGVyID0gMTtcblxuLy8gSUQgZ2VuZXJhdG9yIGZ1bmN0aW9uXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrSWQoKSB7XG4gICAgcmV0dXJuIHRhc2tJZENvdW50ZXIrKztcbn1cblxubGV0IGFwcGxpZWRGaWx0ZXI7XG5sZXQgYXBwbGllZFNvcnQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSA9IG51bGwsIHByaW9yaXR5LCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgIHRoaXMuaWQgPSBnZW5lcmF0ZVRhc2tJZCgpO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG59XG5cbmV4cG9ydCBsZXQgdGFza3MgPSBbXTsgLy8gQXJyYXkgdG8gc3RvcmUgdGFza3NcbmV4cG9ydCBsZXQgdWlUYXNrcyA9IFtdIC8vQXJyYXkgdG8gcmVuZGVyIHRhc2tzXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VG9kb0FwcCgpIHtcbiAgICAvLyBJbml0aWFsaXplIHRhc2tzIGZyb20gc3RvcmFnZSBvciBjcmVhdGUgYW4gZW1wdHkgYXJyYXlcbiAgICBjb25zdCBzdG9yZWRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xuICAgIHRhc2tzID0gc3RvcmVkVGFza3M7XG4gICAgZ2VuZXJhdGVVSVRhc2tzKCk7XG4gICAgdGFza0lkQ291bnRlciA9IHRhc2tzLmxlbmd0aCA+IDAgPyB0YXNrc1t0YXNrcy5sZW5ndGggLSAxXS5pZCArIDEgOiAxO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIHNhdmVUYXNrc1RvU3RvcmFnZSgpO1xuICAgIGdlbmVyYXRlVUlUYXNrcygpXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVUlUYXNrcygpIHtcbiAgICBpZiAoYXBwbGllZEZpbHRlciA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgICAgdWlUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suY29tcGxldGVkKTtcbiAgICAgIH0gZWxzZSBpZiAoYXBwbGllZEZpbHRlciA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgICAgICB1aVRhc2tzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gIXRhc2suY29tcGxldGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIFwiQWxsIFRhc2tzXCIgaXMgc2VsZWN0ZWQgb3Igbm8gZmlsdGVyIGlzIHNlbGVjdGVkLCBzaG93IGFsbCB0YXNrc1xuICAgICAgICB1aVRhc2tzID0gdGFza3M7XG4gICAgICB9XG5cbiAgICAgIHVpVGFza3Muc29ydCgodGFza0EsIHRhc2tCKSA9PiB7XG4gICAgICAgIGlmIChhcHBsaWVkU29ydCA9PT0gXCJEdWUgRGF0ZVwiKSB7XG4gICAgICAgICAgICAvLyBTb3J0IGJ5IGR1ZSBkYXRlXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGFza0EuZHVlRGF0ZSkgLSBuZXcgRGF0ZSh0YXNrQi5kdWVEYXRlKTtcbiAgICAgICAgfSBlbHNlIGlmIChhcHBsaWVkU29ydCA9PT0gXCJQcmlvcml0eVwiKSB7XG4gICAgICAgICAgICAvLyBTb3J0IGJ5IHByaW9yaXR5IChhc3N1bWluZyBwcmlvcml0eSBpcyBhIHN0cmluZyBsaWtlIFwiSGlnaFwiLCBcIk1lZGl1bVwiLCBcIkxvd1wiKVxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdGllcyA9IFtcIkhpZ2hcIiwgXCJNZWRpdW1cIiwgXCJMb3dcIl07XG4gICAgICAgICAgICByZXR1cm4gcHJpb3JpdGllcy5pbmRleE9mKHRhc2tBLnByaW9yaXR5KSAtIHByaW9yaXRpZXMuaW5kZXhPZih0YXNrQi5wcmlvcml0eSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRWRpdElEcyhlbGVtZW50KSB7XG4gICAgLy8gR2V0IGFsbCBjaGlsZCBlbGVtZW50cyBvZiB0aGUgcHJvdmlkZWQgZWxlbWVudFxuICAgIGNvbnN0IGNoaWxkcmVuID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJyk7XG4gIFxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIGNoaWxkIGVsZW1lbnRcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBjaGlsZCBoYXMgYW4gSUQgYXR0cmlidXRlXG4gICAgICBpZiAoY2hpbGQuaWQpIHtcbiAgICAgICAgLy9DYXBpdGlsaXplIGZpcnN0IGxldHRlciBvZiBnaXZlbiBJRFxuICAgICAgICBjb25zdCBjYXBWYWx1ZUlEID0gYCR7Y2hpbGQuaWR9YC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGAke2NoaWxkLmlkfWAuc2xpY2UoMSlcbiAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgYnkgYWRkaW5nIFwiZWRpdFwiIHRvIHRoZSBiZWdpbm5pbmdcbiAgICAgICAgY29uc3QgbmV3SUQgPSAnZWRpdCcgKyBjYXBWYWx1ZUlEO1xuICAgICAgICBcbiAgICAgICAgLy8gU2V0IHRoZSBuZXcgSUQgZm9yIHRoZSBjaGlsZCBlbGVtZW50XG4gICAgICAgIGNoaWxkLmlkID0gbmV3SUQ7XG4gICAgICB9XG4gICAgICAvLyBDaGVjayBpZiB0aGUgY2hpbGQgaXMgYSA8bGFiZWw+IGVsZW1lbnRcbiAgICAgIGVsc2UgaWYgKGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2xhYmVsJykge1xuICAgICAgICAvLyBVcGRhdGUgdGhlICdmb3InIGF0dHJpYnV0ZSBvZiB0aGUgbGFiZWwgdG8gbWF0Y2ggdGhlIG5ldyBJRFxuICAgICAgICBjb25zdCBodG1sRm9yID0gY2hpbGQuZ2V0QXR0cmlidXRlKCdmb3InKTtcbiAgICAgICAgaWYgKGh0bWxGb3IpIHtcbiAgICAgICAgICAvL0NhcGl0aWxpemUgZmlyc3QgbGV0dGVyIG9mIGdpdmVuIElEXG4gICAgICAgICAgY29uc3QgY2FwVmFsdWVGb3IgPSBgJHtodG1sRm9yfWAuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBgJHtodG1sRm9yfWAuc2xpY2UoMSlcbiAgICAgICAgICBjb25zdCBuZXdIdG1sRm9yID0gJ2VkaXQnICsgY2FwVmFsdWVGb3I7XG4gICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdmb3InLCBuZXdIdG1sRm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0VGFza3Moc2VsZWN0ZWRDcml0ZXJpYSkge1xuICAgIGFwcGxpZWRTb3J0ID0gc2VsZWN0ZWRDcml0ZXJpYTtcbiAgICBnZW5lcmF0ZVVJVGFza3MoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyVGFza3Moc2VsZWN0ZWRGaWx0ZXIpIHtcbiAgICBhcHBsaWVkRmlsdGVyID0gc2VsZWN0ZWRGaWx0ZXI7XG4gICAgZ2VuZXJhdGVVSVRhc2tzKClcbiAgfVxuICBcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKHRhc2tJZCkge1xuICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pZCAhPT0gdGFza0lkKTtcbiAgICBzYXZlVGFza3NUb1N0b3JhZ2UoKTtcbiAgICBnZW5lcmF0ZVVJVGFza3MoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFza1N0YXR1cyh0YXNrSWQsIGNvbXBsZXRlZCkge1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcbiAgICBpZiAodGFzaykge1xuICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICAgICAgc2F2ZVRhc2tzVG9TdG9yYWdlKCk7XG4gICAgICAgIGdlbmVyYXRlVUlUYXNrcygpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRhc2tzVG9TdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIFtKU09OLnN0cmluZ2lmeSh0YXNrcyldKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2tTdG9yYWdlKCkge1xuICAgIHRhc2tzID0gW107XG4gICAgdWlUYXNrcyA9IFtdO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIFtKU09OLnN0cmluZ2lmeSh0YXNrcyldKTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9