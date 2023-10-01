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
    justify-content: center;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background-color: var(--lightgray);
    color: var(--blackish);
    width: 100%;
    margin: 1rem;
    gap: 2rem;
    min-width: min-content;
}

#appContainerButton{
    margin-right: 60%;
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

.taskTitle{
    text-transform: capitalize;
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

.detailTaskBtn{
   transform: rotate(90deg);
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,iBAAiB;AACrB;;;AAKA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,iCAAiC;IACjC,kCAAkC;IAClC,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;;AAGA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,+BAA+B;IAC/B,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;GACG,wBAAwB;AAC3B","sourcesContent":[":root{\n    --lightgray: #EFEFEF;\n    --blackish: #330000;\n    --orange: #FFCC66;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto:wght@300&display=swap');\n\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 16px;\n    font-family: 'Roboto', sans-serif;\n    background-color: var(--lightgray);\n    color: var(--blackish);\n    width: 100%;\n    margin: 1rem;\n    gap: 2rem;\n    min-width: min-content;\n}\n\n#appContainerButton{\n    margin-right: 60%;\n}\n\n#todoAppContainer, #editContainer {\n    display: none;\n    flex-direction: column;\n    width: 65%;\n    gap: 1rem;\n}\n\n#todoAppContainer.active, #editContainer.working {\n    display: flex;\n}\n\ninput, textarea, select {\n    border-style: none;\n    border-radius: 1rem;\n    height: 1.5rem;\n}\n\n#inputHeader, #editInputHeader{\n    display: flex;\n    justify-content: space-between;\n}\n\n#titleContainer, #dueDateContainer, #priorityContainer, #editTitleContainer, #editDueDateContainer, #editPriorityContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n#descriptionSection, #editDescriptionSection {\n    display: flex;\n    flex-direction: column;\n}\n\n#taskDescription, #editTaskDescription {\n    height: 8rem;\n}\n\n#listContainer{\n    display: flex;\n    flex-direction: column;\n    width: 65%;\n    gap: 2rem;\n}\n\n#taskList{\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n\n#deleteStorage{\n    align-self: flex-end;\n}\n\n#filterContainer{\n    display: flex;\n    justify-content: space-between;\n}\n\n#selectContainer, #sortContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.taskContainer{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    margin: 1rem;\n    padding: 1rem;\n    background-color: #afb3c5;\n    border-radius: 1rem;\n}\n\n.topContainer{\n    display: flex;\n    justify-content: space-between;\n    gap: 1rem;\n}\n\n.bottomContainer{\n    display: none;\n    gap: 1rem;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.bottomContainer.active {\n    display: flex;\n}\n\n.topRight{\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n.topLeft{\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n.taskTitle{\n    text-transform: capitalize;\n}\n\nbutton {\n    align-self: center; \n    background-color: var(--orange);\n    border: none;\n    color: var(--blackish);\n    text-align: center;\n    text-decoration: none;\n    padding: 0.5rem 1rem 0.5rem 1rem;\n    border-radius: 2rem;\n}\n\nbutton:hover {\n    transition: transform 100ms;\n    transform: scale(1.1);\n}\n\n.detailTaskBtn{\n   transform: rotate(90deg);\n}"],"sourceRoot":""}]);
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
            <button class="detailTaskBtn" id="detailTaskBtn-${task.id}" name="detailTaskBtn">|></button>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz80Y2ZiIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2N1cnJlbnREYXRlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvRG9MaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0tbGlnaHRncmF5OiAjRUZFRkVGO1xuICAgIC0tYmxhY2tpc2g6ICMzMzAwMDA7XG4gICAgLS1vcmFuZ2U6ICNGRkNDNjY7XG59XG5cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyYXkpO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFja2lzaCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGdhcDogMnJlbTtcbiAgICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xufVxuXG4jYXBwQ29udGFpbmVyQnV0dG9ue1xuICAgIG1hcmdpbi1yaWdodDogNjAlO1xufVxuXG4jdG9kb0FwcENvbnRhaW5lciwgI2VkaXRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNjUlO1xuICAgIGdhcDogMXJlbTtcbn1cblxuI3RvZG9BcHBDb250YWluZXIuYWN0aXZlLCAjZWRpdENvbnRhaW5lci53b3JraW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbiNpbnB1dEhlYWRlciwgI2VkaXRJbnB1dEhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI3RpdGxlQ29udGFpbmVyLCAjZHVlRGF0ZUNvbnRhaW5lciwgI3ByaW9yaXR5Q29udGFpbmVyLCAjZWRpdFRpdGxlQ29udGFpbmVyLCAjZWRpdER1ZURhdGVDb250YWluZXIsICNlZGl0UHJpb3JpdHlDb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jZGVzY3JpcHRpb25TZWN0aW9uLCAjZWRpdERlc2NyaXB0aW9uU2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jdGFza0Rlc2NyaXB0aW9uLCAjZWRpdFRhc2tEZXNjcmlwdGlvbiB7XG4gICAgaGVpZ2h0OiA4cmVtO1xufVxuXG4jbGlzdENvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDY1JTtcbiAgICBnYXA6IDJyZW07XG59XG5cbiN0YXNrTGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycmVtO1xufVxuXG5cbiNkZWxldGVTdG9yYWdle1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4jZmlsdGVyQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jc2VsZWN0Q29udGFpbmVyLCAjc29ydENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGFza0NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZmIzYzU7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLnRvcENvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5ib3R0b21Db250YWluZXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBnYXA6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib3R0b21Db250YWluZXIuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udG9wUmlnaHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvcExlZnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2tUaXRsZXtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuYnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFja2lzaCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5kZXRhaWxUYXNrQnRue1xuICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOzs7QUFLQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHFCQUFxQjtBQUN6Qjs7QUFFQTtHQUNHLHdCQUF3QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1saWdodGdyYXk6ICNFRkVGRUY7XFxuICAgIC0tYmxhY2tpc2g6ICMzMzAwMDA7XFxuICAgIC0tb3JhbmdlOiAjRkZDQzY2O1xcbn1cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZmYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JheSk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFja2lzaCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGdhcDogMnJlbTtcXG4gICAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuI2FwcENvbnRhaW5lckJ1dHRvbntcXG4gICAgbWFyZ2luLXJpZ2h0OiA2MCU7XFxufVxcblxcbiN0b2RvQXBwQ29udGFpbmVyLCAjZWRpdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI3RvZG9BcHBDb250YWluZXIuYWN0aXZlLCAjZWRpdENvbnRhaW5lci53b3JraW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4jaW5wdXRIZWFkZXIsICNlZGl0SW5wdXRIZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3RpdGxlQ29udGFpbmVyLCAjZHVlRGF0ZUNvbnRhaW5lciwgI3ByaW9yaXR5Q29udGFpbmVyLCAjZWRpdFRpdGxlQ29udGFpbmVyLCAjZWRpdER1ZURhdGVDb250YWluZXIsICNlZGl0UHJpb3JpdHlDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNkZXNjcmlwdGlvblNlY3Rpb24sICNlZGl0RGVzY3JpcHRpb25TZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Rhc2tEZXNjcmlwdGlvbiwgI2VkaXRUYXNrRGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxufVxcblxcbiNsaXN0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbiN0YXNrTGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG5cXG4jZGVsZXRlU3RvcmFnZXtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbiNmaWx0ZXJDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3NlbGVjdENvbnRhaW5lciwgI3NvcnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZmIzYzU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi50b3BDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYm90dG9tQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvdHRvbUNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9wUmlnaHR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvcExlZnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tUaXRsZXtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNraXNoKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXM7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmRldGFpbFRhc2tCdG57XFxuICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIENSRURJVDogaHR0cHM6Ly9hbmR5LWJlbGwuY28udWsvYS1tb2Rlcm4tY3NzLXJlc2V0LyAqL1xuXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5oNCxcbnAsXG5maWd1cmUsXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXG51bFtyb2xlPVwibGlzdFwiXSxcbm9sW3JvbGU9XCJsaXN0XCJdIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xuaHRtbDpmb2N1cy13aXRoaW4ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cbmE6bm90KFtjbGFzc10pIHtcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xufVxuXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXG5pbWcsXG5waWN0dXJlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zIGFuZCB0cmFuc2l0aW9ucyBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xuICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xuICB9XG4gICosXG4gICo6OmJlZm9yZSxcbiAgKjo6YWZ0ZXIge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx3REFBd0Q7O0FBRXhELHFCQUFxQjtBQUNyQjs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBLDBCQUEwQjtBQUMxQjs7Ozs7Ozs7OztFQVVFLFNBQVM7QUFDWDs7QUFFQSwyR0FBMkc7QUFDM0c7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQSwwREFBMEQ7QUFDMUQ7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEsb0NBQW9DO0FBQ3BDOztFQUVFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBLHlDQUF5QztBQUN6Qzs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQSxpRkFBaUY7QUFDakY7RUFDRTtHQUNDLHFCQUFxQjtFQUN0QjtFQUNBOzs7SUFHRSxxQ0FBcUM7SUFDckMsdUNBQXVDO0lBQ3ZDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7RUFDbEM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDUkVESVQ6IGh0dHBzOi8vYW5keS1iZWxsLmNvLnVrL2EtbW9kZXJuLWNzcy1yZXNldC8gKi9cXG5cXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbmZpZ3VyZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT1cXFwibGlzdFxcXCJdLFxcbm9sW3JvbGU9XFxcImxpc3RcXFwiXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucyBhbmQgdHJhbnNpdGlvbnMgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9jdXJyZW50RGF0ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RE9NKCkge1xuLy9DcmVhdGUgYSBidXR0b24gZm9yIG9wZW4tY2xvc2UgYXBwIGNvbnRhaW5lclxuY29uc3QgYXBwQ29udGFpbmVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmFwcENvbnRhaW5lckJ0bi5pZCA9ICdhcHBDb250YWluZXJCdXR0b24nXG5hcHBDb250YWluZXJCdG4uY2xhc3NMaXN0LmFkZCA9ICdhcHBDb250YWluZXJCdXR0b24nXG5hcHBDb250YWluZXJCdG4udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snXG5cbi8vIENyZWF0ZSBhIGNvbnRhaW5lciBkaXYgZm9yIHRoZSB0by1kbyBhcHBcbmNvbnN0IHRvZG9BcHBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudG9kb0FwcENvbnRhaW5lci5pZCA9ICd0b2RvQXBwQ29udGFpbmVyJ1xudG9kb0FwcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkID0gJ3RvZG9BcHBDb250YWluZXInXG5cbi8vQ3JlYXRlIGEgbGlzdCBjb250YWluZXJcbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxubGlzdENvbnRhaW5lci5pZCA9ICdsaXN0Q29udGFpbmVyJ1xuXG4vL0NyZWF0ZSBhIGZpbHRlciBjb250YWluZXJcbmNvbnN0IGZpbHRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5maWx0ZXJDb250YWluZXIuaWQgPSAnZmlsdGVyQ29udGFpbmVyJ1xuXG4vLyBDcmVhdGUgYSBoZWFkaW5nIGZvciB0aGUgYXBwXG5jb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuaGVhZGluZy50ZXh0Q29udGVudCA9ICdUby1EbyBMaXN0J1xuXG4vL0NyZWF0ZSBoZWFkZXIgY29udGFpbmVyIGZvciBpbnB1dHModGl0bGUsIGR1ZSBkYXRlLCBwcmlvcml0eSBhbmQgc3VibWl0IGJ1dHRvbilcbmNvbnN0IGlucHV0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmlucHV0SGVhZGVyLmlkID0gJ2lucHV0SGVhZGVyJ1xuXG4vL0NyZWF0ZSB0aXRsZSBjb250YWluZXIgZm9yIGxhYmVsIGFuZCBpbnB1dCBlbGVtZW50c1xuY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudGl0bGVDb250YWluZXIuaWQgPSAndGl0bGVDb250YWluZXInIFxuXG4vL0NyZWF0ZSBkdWUgZGF0ZSBjb250YWluZXIgZm9yIGxhYmVsIGFuZCBpbnB1dCBlbGVtZW50c1xuY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5kdWVEYXRlQ29udGFpbmVyLmlkID0gJ2R1ZURhdGVDb250YWluZXInIFxuXG4vL0NyZWF0ZSBwcmlvcml0eSBjb250YWluZXIgZm9yIGxhYmVsIGFuZCBpbnB1dCBlbGVtZW50c1xuY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxucHJpb3JpdHlDb250YWluZXIuaWQgPSAncHJpb3JpdHlDb250YWluZXInXG5cbi8vQ3JlYXRlIHNlY3Rpb24gZm9yIGRlc2NyaXB0aW9uXG5jb25zdCBkZXNjcmlwdGlvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZGVzY3JpcHRpb25TZWN0aW9uLmlkID0gJ2Rlc2NyaXB0aW9uU2VjdGlvbidcblxuLy9MYWJlbCBlbGVtZW50IGZvciB0aXRsZSBpbnB1dFxuY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbnRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBUaXRsZSdcbnRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFza1RpdGxlJylcbnRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpXG5cbi8vIENyZWF0ZSBhbiBpbnB1dCBmaWVsZCBmb3IgYWRkaW5nIHRhc2tzXG5jb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG50YXNrVGl0bGUuaWQgPSAndGFza1RpdGxlJyBcbnRhc2tUaXRsZS50eXBlID0gJ3RleHQnXG50YXNrVGl0bGUucGxhY2Vob2xkZXIgPSAnVGl0bGUnXG50aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXG5cbi8vIENyZWF0ZSBhbiBkZXNjcmlwdGlvbiBmaWVsZCBmb3IgdGFza3MgZGV0YWlsc1xuY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxudGFza0Rlc2NyaXB0aW9uLmlkID0gJ3Rhc2tEZXNjcmlwdGlvbidcblxuLy9MYWJlbCBlbGVtZW50IGZvciB0aXRsZSBkZXNjcmlwdGlvblxuY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbmRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBEZXNjcmlwdGlvbidcbmRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFza0Rlc2NyaXB0aW9uJylcbmRlc2NyaXB0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKVxuXG4vL0xhYmVsIGVsZW1lbnQgZm9yIGR1ZSBkYXRlIGlucHV0XG5jb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5kdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnXG5kdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZUxhYmVsJylcbmR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKVxuXG4vLyBDcmVhdGUgYW4gZHVlRGF0ZSBmb3IgdGFza3MgZGVhZGxpbmVcbmNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxudGFza0R1ZURhdGUuaWQgPSAndGFza0R1ZURhdGUnXG50YXNrRHVlRGF0ZS50eXBlID0gJ2RhdGUnXG50YXNrRHVlRGF0ZS52YWx1ZSA9IGZvcm1hdERhdGUoKVxuZHVlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSlcblxuLy9MYWJlbCBlbGVtZW50IGZvciBwcmlvcml0eSBpbnB1dFxuY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbnByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBQcmlvcml0eSdcbnByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHlMYWJlbCcpXG5wcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKVxuXG4vL0NyZWF0ZSBwcmlvcml0eSBmb3IgdGFza3MgaW1wb3J0YW5jZVxuY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbnRhc2tQcmlvcml0eS5pZCA9IFwidGFza1ByaW9yaXR5XCJcbmNvbnN0IHByaW9yaXRpZXMgPSBbXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCJdO1xuLy8gTG9vcCB0aHJvdWdoIHRoZSBwcmlvcml0aWVzIGFuZCBjcmVhdGUgYW4gb3B0aW9uIGVsZW1lbnQgZm9yIGVhY2hcbnByaW9yaXRpZXMuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCB0YXNrT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICB0YXNrT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tPcHRpb24nKVxuICAgIHRhc2tPcHRpb24udmFsdWUgPSBwcmlvcml0eTsgLy8gU2V0IHRoZSB2YWx1ZSBhdHRyaWJ1dGUgdG8gdGhlIHByaW9yaXR5IHZhbHVlXG4gICAgdGFza09wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5OyAvLyBTZXQgdGhlIHRleHQgY29udGVudCBvZiB0aGUgb3B0aW9uXG4gICAgaWYgKHByaW9yaXR5ID09PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgIHRhc2tPcHRpb24uc2VsZWN0ZWQgPSB0cnVlOyAvLyBTZXQgJ01lZGl1bScgYXMgdGhlIGRlZmF1bHQgc2VsZWN0ZWQgb3B0aW9uXG4gICAgfVxuICAgIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZCh0YXNrT3B0aW9uKTsgLy8gQXBwZW5kIHRoZSBvcHRpb24gdG8gdGhlIHNlbGVjdCBlbGVtZW50XG4gIH0pO1xucHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KVxuXG4vLyBDcmVhdGUgYSBidXR0b24gdG8gYWRkIHRhc2tzXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmFkZFRhc2tCdG4uaWQgPSAnYWRkVGFza0J0bidcbmFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snXG5cbi8vQ3JlYXRlIGxhYmVsIGZvciBzZWxlY3QgZWxlbWVudFxuY29uc3Qgc2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5zZWxlY3RMYWJlbC50ZXh0Q29udGVudCA9ICdGaWx0ZXIgVGFza3MnXG5zZWxlY3RMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWxlY3RMYWJlbCcpXG5cbi8vIENyZWF0ZSB0aGUgc2VsZWN0IGVsZW1lbnRcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza0ZpbHRlcicpOyAvLyBTZXQgYW4gSUQgZm9yIHRoZSBzZWxlY3QgZWxlbWVudFxuXG4vLyBDcmVhdGUgdGhlIG9wdGlvbnMgYW5kIGFkZCB0aGVtIHRvIHRoZSBzZWxlY3QgZWxlbWVudFxuY29uc3Qgb3B0aW9uQ29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb25Db21wbGV0ZWQudmFsdWUgPSAnY29tcGxldGVkJztcbm9wdGlvbkNvbXBsZXRlZC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xuXG5jb25zdCBvcHRpb25BY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbm9wdGlvbkFjdGl2ZS52YWx1ZSA9ICdhY3RpdmUnO1xub3B0aW9uQWN0aXZlLnRleHRDb250ZW50ID0gJ0FjdGl2ZSc7XG5cbmNvbnN0IG9wdGlvbkFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xub3B0aW9uQWxsLnZhbHVlID0gJ2FsbCc7XG5vcHRpb25BbGwudGV4dENvbnRlbnQgPSAnQWxsJztcblxuLy8gQXBwZW5kIHRoZSBvcHRpb25zIHRvIHRoZSBzZWxlY3QgZWxlbWVudFxuXG5zZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uQWxsKTtcbnNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25BY3RpdmUpO1xuc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkNvbXBsZXRlZCk7XG5cbi8vIEFwcGVuZCB0aGUgc2VsZWN0IGVsZW1lbnQgdG8gYW4gZXhpc3RpbmcgZWxlbWVudCBpbiB0aGUgRE9NXG5jb25zdCBzZWxlY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuc2VsZWN0Q29udGFpbmVyLmlkID0gJ3NlbGVjdENvbnRhaW5lcidcbnNlbGVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RMYWJlbClcbnNlbGVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpXG5maWx0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0Q29udGFpbmVyKVxuXG4vL0xhYmVsIGZvciBzZWxlY3Qgc29ydCBlbGVtZW50XG5jb25zdCBzb3J0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5zb3J0TGFiZWwudGV4dENvbnRlbnQgPSAnU29ydCBCeSdcbnNvcnRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzb3J0TGFiZWwnKVxuXG4vL0NyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRvIHNvcnQgdGFzayBsaXN0XG5jb25zdCBzb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbnNvcnQuaWQgPSAnc29ydCdcbnNvcnQudGV4dENvbnRlbnQgPSAnU29ydCBCeSdcbmNvbnN0IHNvcnRPcHRpb25zID0gW1wiRHVlIERhdGVcIiwgXCJQcmlvcml0eVwiXVxuc29ydE9wdGlvbnMuZm9yRWFjaCgoc29ydEl0ZW0sIGluZGV4KSA9PiB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IG9wdGlvbklkID0gYHNvcnRPcHRpb25fJHtpbmRleH1gXG4gIG9wdGlvbi52YWx1ZSA9IHNvcnRJdGVtXG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHNvcnRJdGVtXG4gIG9wdGlvbi5pZCA9IG9wdGlvbklkXG4gIGlmIChzb3J0SXRlbSA9PT0gXCJEdWUgRGF0ZVwiKSB7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZVxuICB9XG4gIHNvcnQuYXBwZW5kQ2hpbGQob3B0aW9uKVxufSlcbmNvbnN0IHNvcnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuc29ydENvbnRhaW5lci5pZCA9ICdzb3J0Q29udGFpbmVyJ1xuc29ydENvbnRhaW5lci5hcHBlbmRDaGlsZChzb3J0TGFiZWwpXG5zb3J0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvcnQpXG5maWx0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc29ydENvbnRhaW5lcilcblxuLy9DcmVhdGUgYSBidXR0b24gdG8gZGVsZXRlIHRhc2sgc3RvcmFnZVxuY29uc3QgZGVsZXRlU3RvcmFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5kZWxldGVTdG9yYWdlQnRuLmlkID0gJ2RlbGV0ZVN0b3JhZ2UnXG5kZWxldGVTdG9yYWdlQnRuLnRleHRDb250ZW50ID0gJ0NsZWFyIFRhc2tzJ1xuXG4vLyBDcmVhdGUgYW4gZW1wdHkgZGl2IGVsZW1lbnQgdG8gaG9sZCB0aGUgdGFzayBsaXN0XG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG50YXNrTGlzdC5pZCA9J3Rhc2tMaXN0J1xuXG4vLyBBcHBlbmQgdGhlIGhlYWRpbmcsIGlucHV0IGZpZWxkLCBidXR0b24sIGFuZCB0YXNrIGxpc3QgdG8gdGhlIGNvbnRhaW5lclxuaW5wdXRIZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpXG5pbnB1dEhlYWRlci5hcHBlbmRDaGlsZChkdWVEYXRlQ29udGFpbmVyKVxuaW5wdXRIZWFkZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250YWluZXIpXG5pbnB1dEhlYWRlci5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKVxudG9kb0FwcENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEhlYWRlcilcbmRlc2NyaXB0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pXG50b2RvQXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uU2VjdGlvbilcbmxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlsdGVyQ29udGFpbmVyKVxubGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTGlzdClcbmxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlU3RvcmFnZUJ0bilcblxuLy8gQXBwZW5kIHRoZSBjb250YWluZXIgdG8gdGhlIGRvY3VtZW50IGJvZHlcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGluZylcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwQ29udGFpbmVyQnRuKVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b2RvQXBwQ29udGFpbmVyKVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKVxufVxuXG4iLCJpbXBvcnQgeyB1aVRhc2tzLCBkZWxldGVUYXNrLCB1cGRhdGVUYXNrU3RhdHVzLCBhZGRUYXNrLCBzb3J0VGFza3MsIGZpbHRlclRhc2tzLCBkZWxldGVUYXNrU3RvcmFnZSwgZ2VuZXJhdGVFZGl0SURzIH0gZnJvbSBcIi4vdG9Eb0xpc3RcIlxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuL2N1cnJlbnREYXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VUkoKSB7XG4gIC8vIEluaXRpYWxpemUgdGhlIFVJLCByZW5kZXIgdGFza3MsIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJzXG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tMaXN0JylcblxuICAvLyBFdmVudCBkZWxlZ2F0aW9uOiBBZGQgYSBzaW5nbGUgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHRhc2sgbGlzdFxuICB0YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRhc2tDbGljaylcblxuICAvL05ldyB0YXNrIGJ1dHRvblxuICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcENvbnRhaW5lckJ1dHRvbicpXG4gIGluaXRBcHBDb250YWluZXIobmV3VGFza0J0biwgJ3RvZ2dsZScpXG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBhZGRpbmcgdGFza3NcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJyk7XG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaGFuZGxlQWRkVGFzaygpXG4gICAgaW5pdEFwcENvbnRhaW5lcihhZGRUYXNrQnRuLCAncmVtb3ZlJylcbiAgICByZW5kZXJUYXNrcygpO1xuICB9KTtcblxuICAvL0FkZCBldmVudCBsaXN0ZW5lciBmb3Igc29ydGluZyB0YXNrIGxpc3RcbiAgY29uc3Qgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydFwiKTtcbiAgc2VsZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkQ3JpdGVyaWEgPSBzZWxlY3RFbGVtZW50LnZhbHVlO1xuICAgICAgc29ydFRhc2tzKHNlbGVjdGVkQ3JpdGVyaWEpO1xuICAgICAgcmVuZGVyVGFza3MoKVxuICB9KTtcblxuICAvL0FkZCBldmVudCBsaXN0ZW5lciBmb3IgZmlsdGVyIHRhc2sgbGlzdFxuICBjb25zdCBmaWx0ZXJTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0ZpbHRlcicpXG4gIGZpbHRlclNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEZpbHRlciA9IGZpbHRlclNlbGVjdC52YWx1ZTtcbiAgICBmaWx0ZXJUYXNrcyhzZWxlY3RlZEZpbHRlcik7XG4gICAgcmVuZGVyVGFza3MoKVxufSk7XG5cbiAgLy9EZWxldGUgdGFza3Mgc3RvcmFnZVxuICBjb25zdCBkZWxldGVTdG9yYWdlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZVN0b3JhZ2UnKVxuICBkZWxldGVTdG9yYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRlbGV0ZVRhc2tTdG9yYWdlKClcbiAgICByZW5kZXJUYXNrcygpXG4gICAgfSk7XG5cbiAgLy8gUmVuZGVyIGluaXRpYWwgdGFza3NcbiAgcmVuZGVyVGFza3MoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdCcpXG4gIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnIC8vIENsZWFyIHRoZSBleGlzdGluZyB0YXNrIGxpc3RcblxuICBmb3IgKGNvbnN0IHRhc2sgb2YgdWlUYXNrcykge1xuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnbGlzdEl0ZW0nKVxuICAgICAgbGlzdEl0ZW0uZGF0YXNldC5pZCA9IHRhc2suaWQgLy8gU2V0IGEgY3VzdG9tIGRhdGEgYXR0cmlidXRlIGZvciB0aGUgdGFzayBJRFxuICAgICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInRhc2tDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvcENvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BMZWZ0XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGV0YWlsVGFza0J0blwiIGlkPVwiZGV0YWlsVGFza0J0bi0ke3Rhc2suaWR9XCIgbmFtZT1cImRldGFpbFRhc2tCdG5cIj58PjwvYnV0dG9uPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidGFza0NoZWNrYm94LSR7dGFzay5pZH1cIiBuYW1lPVwidGFza0NoZWNrYm94XCIgJHt0YXNrLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrVGl0bGVcIiBpZD1cInRhc2tUaXRsZS0ke3Rhc2suaWR9XCI+JHt0YXNrLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BSaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tEdWVcIiBpZD1cInRhc2tEdWUtJHt0YXNrLmlkfVwiPkR1ZTogJHt0YXNrLmR1ZURhdGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1ByaW9yaXR5XCIgaWQ9XCJ0YXNrUHJpb3JpdHktJHt0YXNrLmlkfVwiPlByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9PC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVsZXRlVGFza0J0bi0ke3Rhc2suaWR9XCIgbmFtZT1cImRlbGV0ZVRhc2tCdG5cIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21Db250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza0Rlc2NyaXB0aW9uXCIgaWQ9XCJ0YXNrRGVzY3JpcHRpb24tJHt0YXNrLmlkfVwiPiR7dGFzay5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwiZWRpdFRhc2tCdG4tJHt0YXNrLmlkfVwiIG5hbWU9XCJlZGl0VGFza0J0blwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5gXG4gICAgICBcbiAgICAgIC8vQXBwZW5kIGVsZW1lbnRzXG4gICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSlcbiAgICAgIFxuICAgICAgLy9HZW5lcmF0ZSB0YXNrIGVkaXRvclxuICAgICAgZWRpdFRhc2tHZW5lcmF0b3IodGFza0xpc3QsIGxpc3RJdGVtKVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUFkZFRhc2soKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGl0bGUnKTtcbiAgY29uc3QgdGl0bGUgPSB0YXNrVGl0bGUudmFsdWUudHJpbSgpO1xuXG4gIGlmICh0aXRsZSA9PT0gJycpIHtcbiAgICAgIGFsZXJ0KCdBZGQgdGl0bGUgZm9yIHRhc2shJyk7XG4gICAgICByZXR1cm47IC8vIERvbid0IGFkZCBlbXB0eSB0YXNrc1xuICB9XG5cbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjcmlwdGlvbicpXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlXG5cbiAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykge1xuICAgICAgYWxlcnQoJ0FkZCBkZXNjcmlwdGlvbiBmb3IgdGFzayEnKTtcbiAgICAgIHJldHVybjsgLy8gRG9uJ3QgYWRkIGVtcHR5IHRhc2tzXG4gIH1cblxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0R1ZURhdGUnKVxuICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlXG5cbiAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKVxuICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5T3B0aW9uLnZhbHVlXG4gIFxuICBhZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuXG4gIC8vIENsZWFyIGlucHV0IGFuZCBwcm92aWRlIGZlZWRiYWNrXG4gIHRhc2tUaXRsZS52YWx1ZSA9ICcnO1xuICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgZHVlRGF0ZUlucHV0LnZhbHVlID0gZm9ybWF0RGF0ZSgpO1xuICBwcmlvcml0eU9wdGlvbi52YWx1ZSA9IFwiTWVkaXVtXCI7XG4gIGFsZXJ0KCdUYXNrIGFkZGVkIHN1Y2Nlc3NmdWxseSEnKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0NsaWNrKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuXG4gIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgLy8gQ2hlY2tib3ggd2FzIGNsaWNrZWQsIGhhbmRsZSB0YXNrIGNvbXBsZXRpb25cbiAgICAgIGNvbnN0IHRhc2tJZCA9IHBhcnNlSW50KHRhcmdldC5jbG9zZXN0KCdkaXZbZGF0YS1pZF0nKS5kYXRhc2V0LmlkKVxuICAgICAgY29uc3QgY29tcGxldGVkID0gdGFyZ2V0LmNoZWNrZWRcbiAgICAgIHVwZGF0ZVRhc2tTdGF0dXModGFza0lkLCBjb21wbGV0ZWQpXG4gICAgICByZW5kZXJUYXNrcygpXG4gIH0gZWxzZSBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgaWYodGFyZ2V0Lm5hbWUgPT09ICdkZWxldGVUYXNrQnRuJykge1xuICAgICAgICAvLyBEZWxldGUgYnV0dG9uIHdhcyBjbGlja2VkLCBoYW5kbGUgdGFzayBkZWxldGlvblxuICAgICAgICBjb25zdCB0YXNrSWQgPSBwYXJzZUludCh0YXJnZXQuY2xvc2VzdCgnZGl2W2RhdGEtaWRdJykuZGF0YXNldC5pZClcbiAgICAgICAgZGVsZXRlVGFzayh0YXNrSWQpXG4gICAgICAgIHJlbmRlclRhc2tzKClcbiAgICB9XG4gICAgZWxzZSBpZih0YXJnZXQubmFtZSA9PT0gJ2RldGFpbFRhc2tCdG4nKSB7XG4gICAgICAgIC8vIERldGFpbCBidXR0b24gd2FzIGNsaWNrZWQsIGhhbmRsZSBkZXRhaWwgcHJldmlld1xuICAgICAgICBjb25zdCB0YXJnZXRlZFRhc2sgPSB0YXJnZXQuY2xvc2VzdCgnZGl2W2RhdGEtaWRdJylcbiAgICAgICAgY29uc3QgYm90dG9tQ29udGFpbmVyID0gdGFyZ2V0ZWRUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b21Db250YWluZXInKVxuICAgICAgICBib3R0b21Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIGVsc2UgaWYodGFyZ2V0Lm5hbWUgPT09ICdlZGl0VGFza0J0bicpIHtcbiAgICAgICAgLy8gRWRpdCBidXR0b24gd2FzIGNsaWNrZWQsIGhhbmRsZSB0YXNrIGVkaXRcblxuICAgICAgICAvL1NlbGVjdCBjbGlja2VkIHRhc2sgaXRlbVxuICAgICAgICBjb25zdCBzZWxlY3RlZExpc3RJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJ2RpdltkYXRhLWlkXScpXG5cbiAgICAgICAgLy9HZW5lcmF0ZSBpbnB1dCBmaWVsZCBmb3IgZWRpdGluZ1xuICAgICAgICAvLyBlZGl0VGFza0dlbmVyYXRvcih0YXNrTGlzdCwgc2VsZWN0ZWRMaXN0SXRlbSlcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRFZGl0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiZWRpdENvbnRhaW5lclwiXVtkYXRhLWlkPVwiJHtzZWxlY3RlZExpc3RJdGVtLmRhdGFzZXQuaWR9XCJdYClcblxuICAgICAgICAvL0Fzc2lnbiB2YWx1ZXMgb2Ygc2VsZWN0ZWQgdGFzayB0byBpbnB1dCBmaWVsZFxuICAgICAgICBhc3NpZ25WYWx1ZXMoc2VsZWN0ZWRMaXN0SXRlbSwgc2VsZWN0ZWRFZGl0Q29udGFpbmVyKVxuICAgICAgICBzZWxlY3RlZEVkaXRDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnd29ya2luZycpXG5cbiAgICAgICAgY29uc3QgdGFza0lkID0gcGFyc2VJbnQodGFyZ2V0LmNsb3Nlc3QoJ2RpdltkYXRhLWlkXScpLmRhdGFzZXQuaWQpXG5cbiAgICAgICAgY29uc3QgdXBkYXRlVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cImVkaXRBZGRUYXNrQnRuXCJdW2RhdGEtaWQ9XCIke3NlbGVjdGVkTGlzdEl0ZW0uZGF0YXNldC5pZH1cIl1gKVxuXG4gICAgfVxuICAgIGVsc2UgaWYodGFyZ2V0Lm5hbWUgPT09ICdlZGl0QWRkVGFza0J0bicpIHtcbiAgICAgIC8vU2VsZWN0IGVkaXQgbGlzdCBpdGVtXG4gICAgICBjb25zdCBzZWxlY3RlZExpc3RJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJ2RpdltkYXRhLWlkXScpXG5cbiAgICAgIC8vU2VsZWN0IGVkaXQgY29udGFpbmVyXG4gICAgICBjb25zdCBzZWxlY3RlZEVkaXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCJlZGl0Q29udGFpbmVyXCJdW2RhdGEtaWQ9XCIke3NlbGVjdGVkTGlzdEl0ZW0uZGF0YXNldC5pZH1cIl1gKVxuXG4gICAgICAvL0Fzc2lnbiB2YWx1ZXMgb24gdGhlIGNvbnRhaW5lciB0byB1cGRhdGVkIGxpc3RcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZVRhc2soKSB7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IHNlbGVjdGVkRWRpdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjZWRpdFRhc2tUaXRsZScpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRhc2tUaXRsZS52YWx1ZS50cmltKCk7XG4gICAgICBcbiAgICAgICAgaWYgKHRpdGxlID09PSAnJykge1xuICAgICAgICAgICAgYWxlcnQoJ0FkZCB0aXRsZSBmb3IgdGFzayEnKTtcbiAgICAgICAgICAgIHJldHVybjsgLy8gRG9uJ3QgYWRkIGVtcHR5IHRhc2tzXG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBzZWxlY3RlZEVkaXRDb250YWluZXIucXVlcnlTZWxlY3RvcignI2VkaXRUYXNrRGVzY3JpcHRpb24nKVxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbi52YWx1ZVxuICAgICAgXG4gICAgICAgIGlmIChkZXNjcmlwdGlvbiA9PT0gJycpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdBZGQgZGVzY3JpcHRpb24gZm9yIHRhc2shJyk7XG4gICAgICAgICAgICByZXR1cm47IC8vIERvbid0IGFkZCBlbXB0eSB0YXNrc1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gc2VsZWN0ZWRFZGl0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VGFza0R1ZURhdGUnKVxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlXG4gICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBzZWxlY3RlZEVkaXRDb250YWluZXIucXVlcnlTZWxlY3RvcignI2VkaXRUYXNrUHJpb3JpdHknKVxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5T3B0aW9uLnZhbHVlXG4gICAgICAgIFxuICAgICAgICBhZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgfVxuXG4gICAgICAvL1NlbGVjdCB0YXNrIGlkIHRvIGJlIGVkaXRlZCBhbmQgZGVsZXRlIGl0IGFmdGVyIHVwZGF0ZWQgdGFzayBjcmVhdGVkXG4gICAgICBjb25zdCB0YXNrSWQgPSBwYXJzZUludCh0YXJnZXQuY2xvc2VzdCgnZGl2W2RhdGEtaWRdJykuZGF0YXNldC5pZClcbiAgXG4gICAgICBoYW5kbGVVcGRhdGVUYXNrKClcbiAgICAgIGRlbGV0ZVRhc2sodGFza0lkKVxuICAgICAgcmVuZGVyVGFza3MoKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0QXBwQ29udGFpbmVyKGVsZW1lbnQsIGFjdGlvbikge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0QXBwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9BcHBDb250YWluZXInKVxuICAgIGlmKGFjdGlvbiA9PT0gJ2FkZCcpIHtcbiAgICAgIGlucHV0QXBwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICAgIGVsc2UgaWYoYWN0aW9uID09PSAncmVtb3ZlJykge1xuICAgICAgaW5wdXRBcHBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9XG4gICAgZWxzZSBpZihhY3Rpb24gPT09ICd0b2dnbGUnKSB7XG4gICAgICBpbnB1dEFwcENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIH1cbiAgfSlcbn1cblxuLy9DcmVhdGUgYW4gaW5wdXQgZmlsZWRzIGZyb20gdG9kb0FwcENvbnRhaW5lciB0byBlZGl0IHNlbGVjdGVkIHRhc2tcbmZ1bmN0aW9uIGVkaXRUYXNrR2VuZXJhdG9yKHBhcmVudEVsZW1lbnQsIGxpc3RFbGVtZW50KSB7XG4gIGNvbnN0IHRvZG9BcHBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0FwcENvbnRhaW5lcicpXG4gIGNvbnN0IGVkaXRDb250YWluZXIgPSB0b2RvQXBwQ29udGFpbmVyLmNsb25lTm9kZSh0cnVlKVxuICBnZW5lcmF0ZUVkaXRJRHMoZWRpdENvbnRhaW5lcilcbiAgZWRpdENvbnRhaW5lci5pZCA9ICdlZGl0Q29udGFpbmVyJ1xuICBlZGl0Q29udGFpbmVyLmRhdGFzZXQuaWQgPSBsaXN0RWxlbWVudC5kYXRhc2V0LmlkXG4gIGVkaXRDb250YWluZXIucXVlcnlTZWxlY3RvcignI2VkaXRBZGRUYXNrQnRuJykudGV4dENvbnRlbnQgPSAnVXBkYXRlIFRhc2snXG4gIGVkaXRDb250YWluZXIucXVlcnlTZWxlY3RvcignI2VkaXRBZGRUYXNrQnRuJykubmFtZSA9ICdlZGl0QWRkVGFza0J0bidcbiAgZWRpdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjZWRpdEFkZFRhc2tCdG4nKS5kYXRhc2V0LmlkID0gbGlzdEVsZW1lbnQuZGF0YXNldC5pZFxuICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVkaXRDb250YWluZXIpXG59XG5cbi8vQ3JlYXRlIGEgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcyBvZiBhbiBlbGVtbnQgdG8gb3RoZXJcbmZ1bmN0aW9uIGFzc2lnblZhbHVlcyhvcmlnaW5hbEVsZW1lbnQsIGFzc2lnbmVkRWxlbWVudCkge1xuICBcbiAgLy8gLy9Bc3NpZ24gdmFsdWVzIHRvIGlucHV0IGZpZWxkc1xuICBhc3NpZ25lZEVsZW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRUYXNrVGl0bGUnKS52YWx1ZSA9IG9yaWdpbmFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RpdGxlJykudGV4dENvbnRlbnRcbiAgYXNzaWduZWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VGFza0Rlc2NyaXB0aW9uJykudmFsdWUgPSBvcmlnaW5hbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tEZXNjcmlwdGlvbicpLnRleHRDb250ZW50XG4gIGFzc2lnbmVkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdFRhc2tEdWVEYXRlJykudmFsdWUgPSBvcmlnaW5hbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tEdWUnKS5pbm5lckhUTUwuc2xpY2UoNSlcbiAgYXNzaWduZWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VGFza1ByaW9yaXR5JykudmFsdWUgPSBvcmlnaW5hbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tQcmlvcml0eScpLmlubmVySFRNTC5zbGljZSgxMClcbn1cblxuICAiLCJmdW5jdGlvbiBwYWRUbzJEaWdpdHMobnVtKSB7XG4gICAgcmV0dXJuIG51bS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIH1cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUgPSBuZXcgRGF0ZSgpKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIHBhZFRvMkRpZ2l0cyhkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICAgIHBhZFRvMkRpZ2l0cyhkYXRlLmdldERhdGUoKSksXG4gICAgXS5qb2luKCctJyk7XG4gIH0iLCJpbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcydcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnXG5pbXBvcnQgeyBpbml0RE9NIH0gZnJvbSAnLi9ET00nXG5pbXBvcnQgeyBpbml0VG9kb0FwcCB9IGZyb20gXCIuL3RvRG9MaXN0XCJcbmltcG9ydCB7IGluaXRVSSB9IGZyb20gXCIuL1VJXCJcblxuaW5pdERPTSgpXG5pbml0VG9kb0FwcCgpXG5pbml0VUkoKVxuXG4iLCJsZXQgdGFza0lkQ291bnRlciA9IDE7XG5cbi8vIElEIGdlbmVyYXRvciBmdW5jdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGFza0lkKCkge1xuICAgIHJldHVybiB0YXNrSWRDb3VudGVyKys7XG59XG5cbmxldCBhcHBsaWVkRmlsdGVyO1xubGV0IGFwcGxpZWRTb3J0O1xuXG5leHBvcnQgZnVuY3Rpb24gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgPSBudWxsLCBwcmlvcml0eSwgY29tcGxldGVkID0gZmFsc2UpIHtcbiAgICB0aGlzLmlkID0gZ2VuZXJhdGVUYXNrSWQoKTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xufVxuXG5leHBvcnQgbGV0IHRhc2tzID0gW107IC8vIEFycmF5IHRvIHN0b3JlIHRhc2tzXG5leHBvcnQgbGV0IHVpVGFza3MgPSBbXSAvL0FycmF5IHRvIHJlbmRlciB0YXNrc1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFRvZG9BcHAoKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSB0YXNrcyBmcm9tIHN0b3JhZ2Ugb3IgY3JlYXRlIGFuIGVtcHR5IGFycmF5XG4gICAgY29uc3Qgc3RvcmVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcbiAgICB0YXNrcyA9IHN0b3JlZFRhc2tzO1xuICAgIGdlbmVyYXRlVUlUYXNrcygpO1xuICAgIHRhc2tJZENvdW50ZXIgPSB0YXNrcy5sZW5ndGggPiAwID8gdGFza3NbdGFza3MubGVuZ3RoIC0gMV0uaWQgKyAxIDogMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgdGFza3MucHVzaChuZXdUYXNrKTtcbiAgICBzYXZlVGFza3NUb1N0b3JhZ2UoKTtcbiAgICBnZW5lcmF0ZVVJVGFza3MoKVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVVJVGFza3MoKSB7XG4gICAgaWYgKGFwcGxpZWRGaWx0ZXIgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICAgIHVpVGFza3MgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmNvbXBsZXRlZCk7XG4gICAgICB9IGVsc2UgaWYgKGFwcGxpZWRGaWx0ZXIgPT09ICdhY3RpdmUnKSB7XG4gICAgICAgICAgdWlUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmNvbXBsZXRlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiBcIkFsbCBUYXNrc1wiIGlzIHNlbGVjdGVkIG9yIG5vIGZpbHRlciBpcyBzZWxlY3RlZCwgc2hvdyBhbGwgdGFza3NcbiAgICAgICAgdWlUYXNrcyA9IHRhc2tzO1xuICAgICAgfVxuXG4gICAgICB1aVRhc2tzLnNvcnQoKHRhc2tBLCB0YXNrQikgPT4ge1xuICAgICAgICBpZiAoYXBwbGllZFNvcnQgPT09IFwiRHVlIERhdGVcIikge1xuICAgICAgICAgICAgLy8gU29ydCBieSBkdWUgZGF0ZVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRhc2tBLmR1ZURhdGUpIC0gbmV3IERhdGUodGFza0IuZHVlRGF0ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXBwbGllZFNvcnQgPT09IFwiUHJpb3JpdHlcIikge1xuICAgICAgICAgICAgLy8gU29ydCBieSBwcmlvcml0eSAoYXNzdW1pbmcgcHJpb3JpdHkgaXMgYSBzdHJpbmcgbGlrZSBcIkhpZ2hcIiwgXCJNZWRpdW1cIiwgXCJMb3dcIilcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXRpZXMgPSBbXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCJdO1xuICAgICAgICAgICAgcmV0dXJuIHByaW9yaXRpZXMuaW5kZXhPZih0YXNrQS5wcmlvcml0eSkgLSBwcmlvcml0aWVzLmluZGV4T2YodGFza0IucHJpb3JpdHkpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUVkaXRJRHMoZWxlbWVudCkge1xuICAgIC8vIEdldCBhbGwgY2hpbGQgZWxlbWVudHMgb2YgdGhlIHByb3ZpZGVkIGVsZW1lbnRcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpO1xuICBcbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggZWFjaCBjaGlsZCBlbGVtZW50XG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgY2hpbGQgaGFzIGFuIElEIGF0dHJpYnV0ZVxuICAgICAgaWYgKGNoaWxkLmlkKSB7XG4gICAgICAgIC8vQ2FwaXRpbGl6ZSBmaXJzdCBsZXR0ZXIgb2YgZ2l2ZW4gSURcbiAgICAgICAgY29uc3QgY2FwVmFsdWVJRCA9IGAke2NoaWxkLmlkfWAuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBgJHtjaGlsZC5pZH1gLnNsaWNlKDEpXG4gICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IElEIGJ5IGFkZGluZyBcImVkaXRcIiB0byB0aGUgYmVnaW5uaW5nXG4gICAgICAgIGNvbnN0IG5ld0lEID0gJ2VkaXQnICsgY2FwVmFsdWVJRDtcbiAgICAgICAgXG4gICAgICAgIC8vIFNldCB0aGUgbmV3IElEIGZvciB0aGUgY2hpbGQgZWxlbWVudFxuICAgICAgICBjaGlsZC5pZCA9IG5ld0lEO1xuICAgICAgfVxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNoaWxkIGlzIGEgPGxhYmVsPiBlbGVtZW50XG4gICAgICBlbHNlIGlmIChjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdsYWJlbCcpIHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSAnZm9yJyBhdHRyaWJ1dGUgb2YgdGhlIGxhYmVsIHRvIG1hdGNoIHRoZSBuZXcgSURcbiAgICAgICAgY29uc3QgaHRtbEZvciA9IGNoaWxkLmdldEF0dHJpYnV0ZSgnZm9yJyk7XG4gICAgICAgIGlmIChodG1sRm9yKSB7XG4gICAgICAgICAgLy9DYXBpdGlsaXplIGZpcnN0IGxldHRlciBvZiBnaXZlbiBJRFxuICAgICAgICAgIGNvbnN0IGNhcFZhbHVlRm9yID0gYCR7aHRtbEZvcn1gLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYCR7aHRtbEZvcn1gLnNsaWNlKDEpXG4gICAgICAgICAgY29uc3QgbmV3SHRtbEZvciA9ICdlZGl0JyArIGNhcFZhbHVlRm9yO1xuICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnZm9yJywgbmV3SHRtbEZvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydFRhc2tzKHNlbGVjdGVkQ3JpdGVyaWEpIHtcbiAgICBhcHBsaWVkU29ydCA9IHNlbGVjdGVkQ3JpdGVyaWE7XG4gICAgZ2VuZXJhdGVVSVRhc2tzKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclRhc2tzKHNlbGVjdGVkRmlsdGVyKSB7XG4gICAgYXBwbGllZEZpbHRlciA9IHNlbGVjdGVkRmlsdGVyO1xuICAgIGdlbmVyYXRlVUlUYXNrcygpXG4gIH1cbiAgXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XG4gICAgc2F2ZVRhc2tzVG9TdG9yYWdlKCk7XG4gICAgZ2VuZXJhdGVVSVRhc2tzKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRhc2tTdGF0dXModGFza0lkLCBjb21wbGV0ZWQpIHtcbiAgICBjb25zdCB0YXNrID0gdGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG4gICAgaWYgKHRhc2spIHtcbiAgICAgICAgdGFzay5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgICAgIHNhdmVUYXNrc1RvU3RvcmFnZSgpO1xuICAgICAgICBnZW5lcmF0ZVVJVGFza3MoKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUYXNrc1RvU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBbSlNPTi5zdHJpbmdpZnkodGFza3MpXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrU3RvcmFnZSgpIHtcbiAgICB0YXNrcyA9IFtdO1xuICAgIHVpVGFza3MgPSBbXTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBbSlNPTi5zdHJpbmdpZnkodGFza3MpXSk7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==