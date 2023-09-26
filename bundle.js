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

#todoAppContainer{
    display: none;
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

#inputHeader{
    display: flex;
    justify-content: space-between;
}

#titleContainer, #dueDateContainer, #priorityContainer{
    display: flex;
    flex-direction: column;
}

#descriptionSection {
    display: flex;
    flex-direction: column;
}

#taskDescription {
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
}

.bottomContainer.active {
    display: flex;
}

.topRight{
    display: flex;
    gap: 1rem;
}

.topLeft{
    display: flex;
    gap: 1rem;
}

.taskTitle{
    text-transform: uppercase;
    font-weight: bolder;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,iBAAiB;AACrB;;;AAKA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,iCAAiC;IACjC,kCAAkC;IAClC,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;;AAGA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;IACT,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,+BAA+B;IAC/B,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;IAC3B,qBAAqB;AACzB","sourcesContent":[":root{\n    --lightgray: #EFEFEF;\n    --blackish: #330000;\n    --orange: #FFCC66;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto:wght@300&display=swap');\n\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 16px;\n    font-family: 'Roboto', sans-serif;\n    background-color: var(--lightgray);\n    color: var(--blackish);\n    width: 100%;\n    margin: 1rem;\n    gap: 2rem;\n    min-width: min-content;\n}\n\n#todoAppContainer{\n    display: none;\n    flex-direction: column;\n    width: 65%;\n    gap: 1rem;\n}\n\n#todoAppContainer.active {\n    display: flex;\n}\n\ninput, textarea, select {\n    border-style: none;\n    border-radius: 1rem;\n    height: 1.5rem;\n}\n\n#inputHeader{\n    display: flex;\n    justify-content: space-between;\n}\n\n#titleContainer, #dueDateContainer, #priorityContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n#descriptionSection {\n    display: flex;\n    flex-direction: column;\n}\n\n#taskDescription {\n    height: 8rem;\n}\n\n#listContainer{\n    display: flex;\n    flex-direction: column;\n    width: 65%;\n    gap: 2rem;\n}\n\n#taskList{\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n\n#deleteStorage{\n    align-self: flex-end;\n}\n\n#filterContainer{\n    display: flex;\n    justify-content: space-between;\n}\n\n#selectContainer, #sortContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.taskContainer{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    margin: 1rem;\n    padding: 1rem;\n    background-color: #afb3c5;\n    border-radius: 1rem;\n}\n\n.topContainer{\n    display: flex;\n    justify-content: space-between;\n    gap: 1rem;\n}\n\n.bottomContainer{\n    display: none;\n    gap: 1rem;\n    justify-content: space-between;\n}\n\n.bottomContainer.active {\n    display: flex;\n}\n\n.topRight{\n    display: flex;\n    gap: 1rem;\n}\n\n.topLeft{\n    display: flex;\n    gap: 1rem;\n}\n\n.taskTitle{\n    text-transform: uppercase;\n    font-weight: bolder;\n}\n\nbutton {\n    align-self: center; \n    background-color: var(--orange);\n    border: none;\n    color: var(--blackish);\n    text-align: center;\n    text-decoration: none;\n    padding: 0.5rem 1rem 0.5rem 1rem;\n    border-radius: 2rem;\n}\n\nbutton:hover {\n    transition: transform 100ms;\n    transform: scale(1.1);\n}"],"sourceRoot":""}]);
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
const priorities = ["High", "Medium", "Low"];
// Loop through the priorities and create an option element for each
priorities.forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority; // Set the value attribute to the priority value
    option.textContent = priority; // Set the text content of the option
    if (priority === "Medium") {
        option.selected = true; // Set 'Medium' as the default selected option
    }
    taskPriority.appendChild(option); // Append the option to the select element
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
const option1 = document.createElement('option');
option1.value = 'completed';
option1.textContent = 'Completed';

const option2 = document.createElement('option');
option2.value = 'active';
option2.textContent = 'Active';

const option3 = document.createElement('option');
option3.value = 'all';
option3.textContent = 'All';

// Append the options to the select element

select.appendChild(option3);
select.appendChild(option2);
select.appendChild(option1);

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
            <div class="taskTitle">${task.title}</div>
          </div>
          <div class="topRight">
            <div>Due: ${task.dueDate}</div>
            <div>Priority: ${task.priority}</div>
            <button id="deleteTaskBtn-${task.id}" name="deleteTaskBtn">Delete</button>
          </div>
        </div>
        <div class="bottomContainer">
          <div>${task.description}</div>
          <button id="editTaskBtn-${task.id}" name="editTaskBtn">Edit</button>
        </div>
      </div>`

      taskList.appendChild(listItem)
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
      //Add event listener to edit task
      const targetedTask = target.closest('div[data-id]')
      console.log(targetedTask);
      const targetBtn = document.getElementById(`${target.id}`)
      console.log(targetBtn)
      console.log(target.id)
      initAppContainer(targetBtn, 'toggle')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzPzRjZmIiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3VycmVudERhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9Eb0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZmYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1saWdodGdyYXk6ICNFRkVGRUY7XG4gICAgLS1ibGFja2lzaDogIzMzMDAwMDtcbiAgICAtLW9yYW5nZTogI0ZGQ0M2Njtcbn1cblxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JheSk7XG4gICAgY29sb3I6IHZhcigtLWJsYWNraXNoKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZ2FwOiAycmVtO1xuICAgIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbiN0b2RvQXBwQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNjUlO1xuICAgIGdhcDogMXJlbTtcbn1cblxuI3RvZG9BcHBDb250YWluZXIuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbiNpbnB1dEhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI3RpdGxlQ29udGFpbmVyLCAjZHVlRGF0ZUNvbnRhaW5lciwgI3ByaW9yaXR5Q29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2Rlc2NyaXB0aW9uU2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jdGFza0Rlc2NyaXB0aW9uIHtcbiAgICBoZWlnaHQ6IDhyZW07XG59XG5cbiNsaXN0Q29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNjUlO1xuICAgIGdhcDogMnJlbTtcbn1cblxuI3Rhc2tMaXN0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJyZW07XG59XG5cblxuI2RlbGV0ZVN0b3JhZ2V7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbiNmaWx0ZXJDb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNzZWxlY3RDb250YWluZXIsICNzb3J0Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50YXNrQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FmYjNjNTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4udG9wQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmJvdHRvbUNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGdhcDogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ib3R0b21Db250YWluZXIuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udG9wUmlnaHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG59XG5cbi50b3BMZWZ0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4udGFza1RpdGxle1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuYnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFja2lzaCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7OztBQUtBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7OztBQUdBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWxpZ2h0Z3JheTogI0VGRUZFRjtcXG4gICAgLS1ibGFja2lzaDogIzMzMDAwMDtcXG4gICAgLS1vcmFuZ2U6ICNGRkNDNjY7XFxufVxcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyZWF0K1ZpYmVzJmZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyYXkpO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2tpc2gpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbiN0b2RvQXBwQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiN0b2RvQXBwQ29udGFpbmVyLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuI2lucHV0SGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiN0aXRsZUNvbnRhaW5lciwgI2R1ZURhdGVDb250YWluZXIsICNwcmlvcml0eUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN0YXNrRGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxufVxcblxcbiNsaXN0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbiN0YXNrTGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG5cXG4jZGVsZXRlU3RvcmFnZXtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbiNmaWx0ZXJDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3NlbGVjdENvbnRhaW5lciwgI3NvcnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZmIzYzU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi50b3BDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYm90dG9tQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJvdHRvbUNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9wUmlnaHR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRvcExlZnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRhc2tUaXRsZXtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2tpc2gpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIENSRURJVDogaHR0cHM6Ly9hbmR5LWJlbGwuY28udWsvYS1tb2Rlcm4tY3NzLXJlc2V0LyAqL1xuXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5oNCxcbnAsXG5maWd1cmUsXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXG51bFtyb2xlPVwibGlzdFwiXSxcbm9sW3JvbGU9XCJsaXN0XCJdIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xuaHRtbDpmb2N1cy13aXRoaW4ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cbmE6bm90KFtjbGFzc10pIHtcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xufVxuXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXG5pbWcsXG5waWN0dXJlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zIGFuZCB0cmFuc2l0aW9ucyBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xuICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xuICB9XG4gICosXG4gICo6OmJlZm9yZSxcbiAgKjo6YWZ0ZXIge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx3REFBd0Q7O0FBRXhELHFCQUFxQjtBQUNyQjs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBLDBCQUEwQjtBQUMxQjs7Ozs7Ozs7OztFQVVFLFNBQVM7QUFDWDs7QUFFQSwyR0FBMkc7QUFDM0c7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQSwwREFBMEQ7QUFDMUQ7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEsb0NBQW9DO0FBQ3BDOztFQUVFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBLHlDQUF5QztBQUN6Qzs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQSxpRkFBaUY7QUFDakY7RUFDRTtHQUNDLHFCQUFxQjtFQUN0QjtFQUNBOzs7SUFHRSxxQ0FBcUM7SUFDckMsdUNBQXVDO0lBQ3ZDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7RUFDbEM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDUkVESVQ6IGh0dHBzOi8vYW5keS1iZWxsLmNvLnVrL2EtbW9kZXJuLWNzcy1yZXNldC8gKi9cXG5cXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbmZpZ3VyZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT1cXFwibGlzdFxcXCJdLFxcbm9sW3JvbGU9XFxcImxpc3RcXFwiXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucyBhbmQgdHJhbnNpdGlvbnMgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9jdXJyZW50RGF0ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RE9NKCkge1xuLy9DcmVhdGUgYSBidXR0b24gZm9yIG9wZW4tY2xvc2UgYXBwIGNvbnRhaW5lclxuY29uc3QgYXBwQ29udGFpbmVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmFwcENvbnRhaW5lckJ0bi5pZCA9ICdhcHBDb250YWluZXJCdXR0b24nXG5hcHBDb250YWluZXJCdG4uY2xhc3NMaXN0LmFkZCA9ICdhcHBDb250YWluZXJCdXR0b24nXG5hcHBDb250YWluZXJCdG4udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snXG5cbi8vIENyZWF0ZSBhIGNvbnRhaW5lciBkaXYgZm9yIHRoZSB0by1kbyBhcHBcbmNvbnN0IHRvZG9BcHBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudG9kb0FwcENvbnRhaW5lci5pZCA9ICd0b2RvQXBwQ29udGFpbmVyJ1xudG9kb0FwcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkID0gJ3RvZG9BcHBDb250YWluZXInXG5cbi8vQ3JlYXRlIGEgbGlzdCBjb250YWluZXJcbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxubGlzdENvbnRhaW5lci5pZCA9ICdsaXN0Q29udGFpbmVyJ1xuXG4vL0NyZWF0ZSBhIGZpbHRlciBjb250YWluZXJcbmNvbnN0IGZpbHRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5maWx0ZXJDb250YWluZXIuaWQgPSAnZmlsdGVyQ29udGFpbmVyJ1xuXG4vLyBDcmVhdGUgYSBoZWFkaW5nIGZvciB0aGUgYXBwXG5jb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuaGVhZGluZy50ZXh0Q29udGVudCA9ICdUby1EbyBMaXN0J1xuXG4vL0NyZWF0ZSBoZWFkZXIgY29udGFpbmVyIGZvciBpbnB1dHModGl0bGUsIGR1ZSBkYXRlLCBwcmlvcml0eSBhbmQgc3VibWl0IGJ1dHRvbilcbmNvbnN0IGlucHV0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmlucHV0SGVhZGVyLmlkID0gJ2lucHV0SGVhZGVyJ1xuXG4vL0NyZWF0ZSB0aXRsZSBjb250YWluZXIgZm9yIGxhYmVsIGFuZCBpbnB1dCBlbGVtZW50c1xuY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudGl0bGVDb250YWluZXIuaWQgPSAndGl0bGVDb250YWluZXInIFxuXG4vL0NyZWF0ZSBkdWUgZGF0ZSBjb250YWluZXIgZm9yIGxhYmVsIGFuZCBpbnB1dCBlbGVtZW50c1xuY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5kdWVEYXRlQ29udGFpbmVyLmlkID0gJ2R1ZURhdGVDb250YWluZXInIFxuXG4vL0NyZWF0ZSBwcmlvcml0eSBjb250YWluZXIgZm9yIGxhYmVsIGFuZCBpbnB1dCBlbGVtZW50c1xuY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxucHJpb3JpdHlDb250YWluZXIuaWQgPSAncHJpb3JpdHlDb250YWluZXInXG5cbi8vQ3JlYXRlIHNlY3Rpb24gZm9yIGRlc2NyaXB0aW9uXG5jb25zdCBkZXNjcmlwdGlvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZGVzY3JpcHRpb25TZWN0aW9uLmlkID0gJ2Rlc2NyaXB0aW9uU2VjdGlvbidcblxuLy9MYWJlbCBlbGVtZW50IGZvciB0aXRsZSBpbnB1dFxuY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbnRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBUaXRsZSdcbnRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFza1RpdGxlJylcbnRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpXG5cbi8vIENyZWF0ZSBhbiBpbnB1dCBmaWVsZCBmb3IgYWRkaW5nIHRhc2tzXG5jb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG50YXNrVGl0bGUuaWQgPSAndGFza1RpdGxlJyBcbnRhc2tUaXRsZS50eXBlID0gJ3RleHQnXG50YXNrVGl0bGUucGxhY2Vob2xkZXIgPSAnVGl0bGUnXG50aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXG5cbi8vIENyZWF0ZSBhbiBkZXNjcmlwdGlvbiBmaWVsZCBmb3IgdGFza3MgZGV0YWlsc1xuY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxudGFza0Rlc2NyaXB0aW9uLmlkID0gJ3Rhc2tEZXNjcmlwdGlvbidcblxuLy9MYWJlbCBlbGVtZW50IGZvciB0aXRsZSBkZXNjcmlwdGlvblxuY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbmRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBEZXNjcmlwdGlvbidcbmRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFza0Rlc2NyaXB0aW9uJylcbmRlc2NyaXB0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKVxuXG4vL0xhYmVsIGVsZW1lbnQgZm9yIGR1ZSBkYXRlIGlucHV0XG5jb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5kdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnXG5kdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZUxhYmVsJylcbmR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKVxuXG4vLyBDcmVhdGUgYW4gZHVlRGF0ZSBmb3IgdGFza3MgZGVhZGxpbmVcbmNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxudGFza0R1ZURhdGUuaWQgPSAndGFza0R1ZURhdGUnXG50YXNrRHVlRGF0ZS50eXBlID0gJ2RhdGUnXG50YXNrRHVlRGF0ZS52YWx1ZSA9IGZvcm1hdERhdGUoKVxuZHVlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSlcblxuLy9MYWJlbCBlbGVtZW50IGZvciBwcmlvcml0eSBpbnB1dFxuY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbnByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBQcmlvcml0eSdcbnByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHlMYWJlbCcpXG5wcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKVxuXG4vL0NyZWF0ZSBwcmlvcml0eSBmb3IgdGFza3MgaW1wb3J0YW5jZVxuY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbmNvbnN0IHByaW9yaXRpZXMgPSBbXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCJdO1xuLy8gTG9vcCB0aHJvdWdoIHRoZSBwcmlvcml0aWVzIGFuZCBjcmVhdGUgYW4gb3B0aW9uIGVsZW1lbnQgZm9yIGVhY2hcbnByaW9yaXRpZXMuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5OyAvLyBTZXQgdGhlIHZhbHVlIGF0dHJpYnV0ZSB0byB0aGUgcHJpb3JpdHkgdmFsdWVcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eTsgLy8gU2V0IHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIG9wdGlvblxuICAgIGlmIChwcmlvcml0eSA9PT0gXCJNZWRpdW1cIikge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlOyAvLyBTZXQgJ01lZGl1bScgYXMgdGhlIGRlZmF1bHQgc2VsZWN0ZWQgb3B0aW9uXG4gICAgfVxuICAgIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pOyAvLyBBcHBlbmQgdGhlIG9wdGlvbiB0byB0aGUgc2VsZWN0IGVsZW1lbnRcbiAgfSk7XG5wcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpXG5cbi8vIENyZWF0ZSBhIGJ1dHRvbiB0byBhZGQgdGFza3NcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYWRkVGFza0J0bi5pZCA9ICdhZGRUYXNrQnRuJ1xuYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdBZGQgVGFzaydcblxuLy9DcmVhdGUgbGFiZWwgZm9yIHNlbGVjdCBlbGVtZW50XG5jb25zdCBzZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbnNlbGVjdExhYmVsLnRleHRDb250ZW50ID0gJ0ZpbHRlciBUYXNrcydcbnNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3NlbGVjdExhYmVsJylcblxuLy8gQ3JlYXRlIHRoZSBzZWxlY3QgZWxlbWVudFxuY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5zZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrRmlsdGVyJyk7IC8vIFNldCBhbiBJRCBmb3IgdGhlIHNlbGVjdCBlbGVtZW50XG5cbi8vIENyZWF0ZSB0aGUgb3B0aW9ucyBhbmQgYWRkIHRoZW0gdG8gdGhlIHNlbGVjdCBlbGVtZW50XG5jb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb24xLnZhbHVlID0gJ2NvbXBsZXRlZCc7XG5vcHRpb24xLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XG5cbmNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbm9wdGlvbjIudmFsdWUgPSAnYWN0aXZlJztcbm9wdGlvbjIudGV4dENvbnRlbnQgPSAnQWN0aXZlJztcblxuY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xub3B0aW9uMy52YWx1ZSA9ICdhbGwnO1xub3B0aW9uMy50ZXh0Q29udGVudCA9ICdBbGwnO1xuXG4vLyBBcHBlbmQgdGhlIG9wdGlvbnMgdG8gdGhlIHNlbGVjdCBlbGVtZW50XG5cbnNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24zKTtcbnNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24yKTtcbnNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24xKTtcblxuLy8gQXBwZW5kIHRoZSBzZWxlY3QgZWxlbWVudCB0byBhbiBleGlzdGluZyBlbGVtZW50IGluIHRoZSBET01cbmNvbnN0IHNlbGVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5zZWxlY3RDb250YWluZXIuaWQgPSAnc2VsZWN0Q29udGFpbmVyJ1xuc2VsZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdExhYmVsKVxuc2VsZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdClcbmZpbHRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RDb250YWluZXIpXG5cbi8vTGFiZWwgZm9yIHNlbGVjdCBzb3J0IGVsZW1lbnRcbmNvbnN0IHNvcnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbnNvcnRMYWJlbC50ZXh0Q29udGVudCA9ICdTb3J0IEJ5J1xuc29ydExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3NvcnRMYWJlbCcpXG5cbi8vQ3JlYXRlIGEgc2VsZWN0IGVsZW1lbnQgdG8gc29ydCB0YXNrIGxpc3RcbmNvbnN0IHNvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuc29ydC5pZCA9ICdzb3J0J1xuc29ydC50ZXh0Q29udGVudCA9ICdTb3J0IEJ5J1xuY29uc3Qgc29ydE9wdGlvbnMgPSBbXCJEdWUgRGF0ZVwiLCBcIlByaW9yaXR5XCJdXG5zb3J0T3B0aW9ucy5mb3JFYWNoKChzb3J0SXRlbSwgaW5kZXgpID0+IHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3Qgb3B0aW9uSWQgPSBgc29ydE9wdGlvbl8ke2luZGV4fWBcbiAgb3B0aW9uLnZhbHVlID0gc29ydEl0ZW1cbiAgb3B0aW9uLnRleHRDb250ZW50ID0gc29ydEl0ZW1cbiAgb3B0aW9uLmlkID0gb3B0aW9uSWRcbiAgaWYgKHNvcnRJdGVtID09PSBcIkR1ZSBEYXRlXCIpIHtcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlXG4gIH1cbiAgc29ydC5hcHBlbmRDaGlsZChvcHRpb24pXG59KVxuY29uc3Qgc29ydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5zb3J0Q29udGFpbmVyLmlkID0gJ3NvcnRDb250YWluZXInXG5zb3J0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvcnRMYWJlbClcbnNvcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc29ydClcbmZpbHRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzb3J0Q29udGFpbmVyKVxuXG4vL0NyZWF0ZSBhIGJ1dHRvbiB0byBkZWxldGUgdGFzayBzdG9yYWdlXG5jb25zdCBkZWxldGVTdG9yYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmRlbGV0ZVN0b3JhZ2VCdG4uaWQgPSAnZGVsZXRlU3RvcmFnZSdcbmRlbGV0ZVN0b3JhZ2VCdG4udGV4dENvbnRlbnQgPSAnQ2xlYXIgVGFza3MnXG5cbi8vIENyZWF0ZSBhbiBlbXB0eSBkaXYgZWxlbWVudCB0byBob2xkIHRoZSB0YXNrIGxpc3RcbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnRhc2tMaXN0LmlkID0ndGFza0xpc3QnXG5cbi8vIEFwcGVuZCB0aGUgaGVhZGluZywgaW5wdXQgZmllbGQsIGJ1dHRvbiwgYW5kIHRhc2sgbGlzdCB0byB0aGUgY29udGFpbmVyXG5pbnB1dEhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcilcbmlucHV0SGVhZGVyLmFwcGVuZENoaWxkKGR1ZURhdGVDb250YWluZXIpXG5pbnB1dEhlYWRlci5hcHBlbmRDaGlsZChwcmlvcml0eUNvbnRhaW5lcilcbmlucHV0SGVhZGVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pXG50b2RvQXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0SGVhZGVyKVxuZGVzY3JpcHRpb25TZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbilcbnRvZG9BcHBDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25TZWN0aW9uKVxubGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChmaWx0ZXJDb250YWluZXIpXG5saXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tMaXN0KVxubGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVTdG9yYWdlQnRuKVxuXG4vLyBBcHBlbmQgdGhlIGNvbnRhaW5lciB0byB0aGUgZG9jdW1lbnQgYm9keVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkaW5nKVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHBDb250YWluZXJCdG4pXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvZG9BcHBDb250YWluZXIpXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpXG59XG5cbiIsImltcG9ydCB7IHVpVGFza3MsIGRlbGV0ZVRhc2ssIHVwZGF0ZVRhc2tTdGF0dXMsIGFkZFRhc2ssIHNvcnRUYXNrcywgZmlsdGVyVGFza3MsIGRlbGV0ZVRhc2tTdG9yYWdlLCBpbml0VG9kb0FwcCB9IGZyb20gXCIuL3RvRG9MaXN0XCJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9jdXJyZW50RGF0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFVJKCkge1xuICAvLyBJbml0aWFsaXplIHRoZSBVSSwgcmVuZGVyIHRhc2tzLCBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyc1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdCcpXG5cbiAgLy8gRXZlbnQgZGVsZWdhdGlvbjogQWRkIGEgc2luZ2xlIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSB0YXNrIGxpc3RcbiAgdGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUYXNrQ2xpY2spXG5cbiAgLy9OZXcgdGFzayBidXR0b25cbiAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBDb250YWluZXJCdXR0b24nKVxuICBpbml0QXBwQ29udGFpbmVyKG5ld1Rhc2tCdG4sICd0b2dnbGUnKVxuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciBmb3IgYWRkaW5nIHRhc2tzXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J0bicpO1xuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGhhbmRsZUFkZFRhc2soKVxuICAgIGluaXRBcHBDb250YWluZXIoYWRkVGFza0J0biwgJ3JlbW92ZScpXG4gICAgcmVuZGVyVGFza3MoKTtcbiAgfSk7XG5cbiAgLy9BZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHNvcnRpbmcgdGFzayBsaXN0XG4gIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRcIik7XG4gIHNlbGVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZENyaXRlcmlhID0gc2VsZWN0RWxlbWVudC52YWx1ZTtcbiAgICAgIHNvcnRUYXNrcyhzZWxlY3RlZENyaXRlcmlhKTtcbiAgICAgIHJlbmRlclRhc2tzKClcbiAgfSk7XG5cbiAgLy9BZGQgZXZlbnQgbGlzdGVuZXIgZm9yIGZpbHRlciB0YXNrIGxpc3RcbiAgY29uc3QgZmlsdGVyU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tGaWx0ZXInKVxuICBmaWx0ZXJTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXIgPSBmaWx0ZXJTZWxlY3QudmFsdWU7XG4gICAgZmlsdGVyVGFza3Moc2VsZWN0ZWRGaWx0ZXIpO1xuICAgIHJlbmRlclRhc2tzKClcbn0pO1xuXG4gIC8vRGVsZXRlIHRhc2tzIHN0b3JhZ2VcbiAgY29uc3QgZGVsZXRlU3RvcmFnZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVTdG9yYWdlJylcbiAgZGVsZXRlU3RvcmFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkZWxldGVUYXNrU3RvcmFnZSgpXG4gICAgcmVuZGVyVGFza3MoKVxuICAgIH0pO1xuXG4gIC8vIFJlbmRlciBpbml0aWFsIHRhc2tzXG4gIHJlbmRlclRhc2tzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUYXNrcygpIHtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0xpc3QnKVxuICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJyAvLyBDbGVhciB0aGUgZXhpc3RpbmcgdGFzayBsaXN0XG5cbiAgZm9yIChjb25zdCB0YXNrIG9mIHVpVGFza3MpIHtcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2xpc3RJdGVtJylcbiAgICAgIGxpc3RJdGVtLmRhdGFzZXQuaWQgPSB0YXNrLmlkIC8vIFNldCBhIGN1c3RvbSBkYXRhIGF0dHJpYnV0ZSBmb3IgdGhlIHRhc2sgSURcbiAgICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrQ29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BDb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wTGVmdFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRldGFpbFRhc2tCdG5cIiBpZD1cImRldGFpbFRhc2tCdG4tJHt0YXNrLmlkfVwiIG5hbWU9XCJkZXRhaWxUYXNrQnRuXCI+VjwvYnV0dG9uPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidGFza0NoZWNrYm94LSR7dGFzay5pZH1cIiBuYW1lPVwidGFza0NoZWNrYm94XCIgJHt0YXNrLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrVGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvcFJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PkR1ZTogJHt0YXNrLmR1ZURhdGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9PC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVsZXRlVGFza0J0bi0ke3Rhc2suaWR9XCIgbmFtZT1cImRlbGV0ZVRhc2tCdG5cIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21Db250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2PiR7dGFzay5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwiZWRpdFRhc2tCdG4tJHt0YXNrLmlkfVwiIG5hbWU9XCJlZGl0VGFza0J0blwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5gXG5cbiAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUFkZFRhc2soKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGl0bGUnKTtcbiAgY29uc3QgdGl0bGUgPSB0YXNrVGl0bGUudmFsdWUudHJpbSgpO1xuXG4gIGlmICh0aXRsZSA9PT0gJycpIHtcbiAgICAgIGFsZXJ0KCdBZGQgdGl0bGUgZm9yIHRhc2shJyk7XG4gICAgICByZXR1cm47IC8vIERvbid0IGFkZCBlbXB0eSB0YXNrc1xuICB9XG5cbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjcmlwdGlvbicpXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlXG5cbiAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykge1xuICAgICAgYWxlcnQoJ0FkZCBkZXNjcmlwdGlvbiBmb3IgdGFzayEnKTtcbiAgICAgIHJldHVybjsgLy8gRG9uJ3QgYWRkIGVtcHR5IHRhc2tzXG4gIH1cblxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0R1ZURhdGUnKVxuICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlXG5cbiAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKVxuICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5T3B0aW9uLnZhbHVlXG4gIFxuICBhZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuXG4gIC8vIENsZWFyIGlucHV0IGFuZCBwcm92aWRlIGZlZWRiYWNrXG4gIHRhc2tUaXRsZS52YWx1ZSA9ICcnO1xuICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgZHVlRGF0ZUlucHV0LnZhbHVlID0gZm9ybWF0RGF0ZSgpO1xuICBwcmlvcml0eU9wdGlvbi52YWx1ZSA9IFwiTWVkaXVtXCI7XG4gIGFsZXJ0KCdUYXNrIGFkZGVkIHN1Y2Nlc3NmdWxseSEnKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0NsaWNrKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICBjb25zb2xlLmxvZyh0YXJnZXQpXG5cbiAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnICYmIHRhcmdldC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAvLyBDaGVja2JveCB3YXMgY2xpY2tlZCwgaGFuZGxlIHRhc2sgY29tcGxldGlvblxuICAgICAgY29uc3QgdGFza0lkID0gcGFyc2VJbnQodGFyZ2V0LmNsb3Nlc3QoJ2RpdltkYXRhLWlkXScpLmRhdGFzZXQuaWQpXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSB0YXJnZXQuY2hlY2tlZFxuICAgICAgdXBkYXRlVGFza1N0YXR1cyh0YXNrSWQsIGNvbXBsZXRlZClcbiAgICAgIHJlbmRlclRhc2tzKClcbiAgfSBlbHNlIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICBpZih0YXJnZXQubmFtZSA9PT0gJ2RlbGV0ZVRhc2tCdG4nKSB7XG4gICAgICAgIC8vIERlbGV0ZSBidXR0b24gd2FzIGNsaWNrZWQsIGhhbmRsZSB0YXNrIGRlbGV0aW9uXG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IHBhcnNlSW50KHRhcmdldC5jbG9zZXN0KCdkaXZbZGF0YS1pZF0nKS5kYXRhc2V0LmlkKVxuICAgICAgICBkZWxldGVUYXNrKHRhc2tJZClcbiAgICAgICAgcmVuZGVyVGFza3MoKVxuICAgIH1cbiAgICBlbHNlIGlmKHRhcmdldC5uYW1lID09PSAnZGV0YWlsVGFza0J0bicpIHtcbiAgICAgICAgLy9BZGQgZXZlbnQgbGlzdGVuZXIgZm9yIGRldGFpbCB0YXNrIGJ1dHRvblxuICAgICAgICBjb25zdCB0YXJnZXRlZFRhc2sgPSB0YXJnZXQuY2xvc2VzdCgnZGl2W2RhdGEtaWRdJylcbiAgICAgICAgY29uc29sZS5sb2codGFyZ2V0ZWRUYXNrKTtcbiAgICAgICAgY29uc3QgYm90dG9tQ29udGFpbmVyID0gdGFyZ2V0ZWRUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b21Db250YWluZXInKVxuICAgICAgICBib3R0b21Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGJvdHRvbUNvbnRhaW5lci52YWx1ZSlcbiAgICB9XG4gICAgZWxzZSBpZih0YXJnZXQubmFtZSA9PT0gJ2VkaXRUYXNrQnRuJykge1xuICAgICAgLy9BZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWRpdCB0YXNrXG4gICAgICBjb25zdCB0YXJnZXRlZFRhc2sgPSB0YXJnZXQuY2xvc2VzdCgnZGl2W2RhdGEtaWRdJylcbiAgICAgIGNvbnNvbGUubG9nKHRhcmdldGVkVGFzayk7XG4gICAgICBjb25zdCB0YXJnZXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXJnZXQuaWR9YClcbiAgICAgIGNvbnNvbGUubG9nKHRhcmdldEJ0bilcbiAgICAgIGNvbnNvbGUubG9nKHRhcmdldC5pZClcbiAgICAgIGluaXRBcHBDb250YWluZXIodGFyZ2V0QnRuLCAndG9nZ2xlJylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdEFwcENvbnRhaW5lcihlbGVtZW50LCBhY3Rpb24pIHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpbnB1dEFwcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvQXBwQ29udGFpbmVyJylcbiAgICBpZihhY3Rpb24gPT09ICdhZGQnKSB7XG4gICAgICBpbnB1dEFwcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgICBlbHNlIGlmKGFjdGlvbiA9PT0gJ3JlbW92ZScpIHtcbiAgICAgIGlucHV0QXBwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxuICAgIGVsc2UgaWYoYWN0aW9uID09PSAndG9nZ2xlJykge1xuICAgICAgaW5wdXRBcHBDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICB9XG4gIH0pXG59XG5cbiIsImZ1bmN0aW9uIHBhZFRvMkRpZ2l0cyhudW0pIHtcbiAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgfVxuICBcbiAgZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSA9IG5ldyBEYXRlKCkpIHtcbiAgICByZXR1cm4gW1xuICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgcGFkVG8yRGlnaXRzKGRhdGUuZ2V0TW9udGgoKSArIDEpLFxuICAgICAgcGFkVG8yRGlnaXRzKGRhdGUuZ2V0RGF0ZSgpKSxcbiAgICBdLmpvaW4oJy0nKTtcbiAgfSIsImltcG9ydCAnLi9zdHlsZXMvcmVzZXQuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcydcbmltcG9ydCB7IGluaXRET00gfSBmcm9tICcuL0RPTSdcbmltcG9ydCB7IGluaXRUb2RvQXBwIH0gZnJvbSBcIi4vdG9Eb0xpc3RcIlxuaW1wb3J0IHsgaW5pdFVJLCByZW5kZXJUYXNrcyB9IGZyb20gXCIuL1VJXCJcblxuaW5pdERPTSgpXG5pbml0VG9kb0FwcCgpXG5pbml0VUkoKVxuXG4iLCJsZXQgdGFza0lkQ291bnRlciA9IDE7XG5cbi8vIElEIGdlbmVyYXRvciBmdW5jdGlvblxuZnVuY3Rpb24gZ2VuZXJhdGVUYXNrSWQoKSB7XG4gICAgcmV0dXJuIHRhc2tJZENvdW50ZXIrKztcbn1cblxubGV0IGFwcGxpZWRGaWx0ZXI7XG5sZXQgYXBwbGllZFNvcnQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSA9IG51bGwsIHByaW9yaXR5LCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgIHRoaXMuaWQgPSBnZW5lcmF0ZVRhc2tJZCgpO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG59XG5cbmV4cG9ydCBsZXQgdGFza3MgPSBbXTsgLy8gQXJyYXkgdG8gc3RvcmUgdGFza3NcbmV4cG9ydCBsZXQgdWlUYXNrcyA9IFtdIC8vQXJyYXkgdG8gcmVuZGVyIHRhc2tzXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VG9kb0FwcCgpIHtcbiAgICAvLyBJbml0aWFsaXplIHRhc2tzIGZyb20gc3RvcmFnZSBvciBjcmVhdGUgYW4gZW1wdHkgYXJyYXlcbiAgICBjb25zdCBzdG9yZWRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xuICAgIHRhc2tzID0gc3RvcmVkVGFza3M7XG4gICAgZ2VuZXJhdGVVSVRhc2tzKCk7XG4gICAgdGFza0lkQ291bnRlciA9IHRhc2tzLmxlbmd0aCA+IDAgPyB0YXNrc1t0YXNrcy5sZW5ndGggLSAxXS5pZCArIDEgOiAxO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIHNhdmVUYXNrc1RvU3RvcmFnZSgpO1xuICAgIGdlbmVyYXRlVUlUYXNrcygpXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVUlUYXNrcygpIHtcbiAgICBpZiAoYXBwbGllZEZpbHRlciA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgICAgdWlUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suY29tcGxldGVkKTtcbiAgICAgIH0gZWxzZSBpZiAoYXBwbGllZEZpbHRlciA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgICAgICB1aVRhc2tzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gIXRhc2suY29tcGxldGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIFwiQWxsIFRhc2tzXCIgaXMgc2VsZWN0ZWQgb3Igbm8gZmlsdGVyIGlzIHNlbGVjdGVkLCBzaG93IGFsbCB0YXNrc1xuICAgICAgICB1aVRhc2tzID0gdGFza3M7XG4gICAgICB9XG5cbiAgICAgIHVpVGFza3Muc29ydCgodGFza0EsIHRhc2tCKSA9PiB7XG4gICAgICAgIGlmIChhcHBsaWVkU29ydCA9PT0gXCJEdWUgRGF0ZVwiKSB7XG4gICAgICAgICAgICAvLyBTb3J0IGJ5IGR1ZSBkYXRlXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGFza0EuZHVlRGF0ZSkgLSBuZXcgRGF0ZSh0YXNrQi5kdWVEYXRlKTtcbiAgICAgICAgfSBlbHNlIGlmIChhcHBsaWVkU29ydCA9PT0gXCJQcmlvcml0eVwiKSB7XG4gICAgICAgICAgICAvLyBTb3J0IGJ5IHByaW9yaXR5IChhc3N1bWluZyBwcmlvcml0eSBpcyBhIHN0cmluZyBsaWtlIFwiSGlnaFwiLCBcIk1lZGl1bVwiLCBcIkxvd1wiKVxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdGllcyA9IFtcIkhpZ2hcIiwgXCJNZWRpdW1cIiwgXCJMb3dcIl07XG4gICAgICAgICAgICByZXR1cm4gcHJpb3JpdGllcy5pbmRleE9mKHRhc2tBLnByaW9yaXR5KSAtIHByaW9yaXRpZXMuaW5kZXhPZih0YXNrQi5wcmlvcml0eSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRUYXNrcyhzZWxlY3RlZENyaXRlcmlhKSB7XG4gICAgYXBwbGllZFNvcnQgPSBzZWxlY3RlZENyaXRlcmlhO1xuICAgIGdlbmVyYXRlVUlUYXNrcygpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJUYXNrcyhzZWxlY3RlZEZpbHRlcikge1xuICAgIGFwcGxpZWRGaWx0ZXIgPSBzZWxlY3RlZEZpbHRlcjtcbiAgICBnZW5lcmF0ZVVJVGFza3MoKVxuICB9XG4gIFxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFza0lkKSB7XG4gICAgdGFza3MgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlkICE9PSB0YXNrSWQpO1xuICAgIHNhdmVUYXNrc1RvU3RvcmFnZSgpO1xuICAgIGdlbmVyYXRlVUlUYXNrcygpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYXNrU3RhdHVzKHRhc2tJZCwgY29tcGxldGVkKSB7XG4gICAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgIGlmICh0YXNrKSB7XG4gICAgICAgIHRhc2suY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgICAgICBzYXZlVGFza3NUb1N0b3JhZ2UoKTtcbiAgICAgICAgZ2VuZXJhdGVVSVRhc2tzKClcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVGFza3NUb1N0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgW0pTT04uc3RyaW5naWZ5KHRhc2tzKV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFza1N0b3JhZ2UoKSB7XG4gICAgdGFza3MgPSBbXTtcbiAgICB1aVRhc2tzID0gW107XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgW0pTT04uc3RyaW5naWZ5KHRhc2tzKV0pO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=