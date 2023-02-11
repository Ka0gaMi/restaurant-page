/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Background.jpg */ "./src/images/Background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  color: black;\n  margin: 0;\n}\n\n.content {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n/* Styling header */\n\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.header > h1 {\n  margin-top: 0;\n  padding-top: 20px;\n  font-size: 50px;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n\n.nav {\n  outline: none;\n  border: none;\n  background: none;\n  color: black;\n  cursor: pointer;\n  font-size: 20px;\n  border-bottom: 2px solid black;\n}\n\n/* Styling main */\n\n.main {\n  margin-top: 50px;\n  margin-bottom: 50px;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\nh3 {\n  text-align: center;\n  padding: 10px 5px;\n  margin-bottom: 0;\n}\n\ndiv.images {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  padding: 5px;\n  padding-bottom: 10px;\n  gap: 5px;\n}\n\nimg {\n  width: 100%;\n  height: 300px;\n  border-radius: 10px;\n  object-fit: cover;\n}\n\nimg.fitted {\n  object-position: top;\n}\n\n/* Styling footer */\n\nfooter {\n  display: flex;\n  background-color: rgba(255, 255, 255, 0.5);\n  justify-content: center;\n  align-items: center;\n  padding: 25px;\n  gap: 5px;\n}\n\nfooter > p {\n  font-size: 18px;\n  margin: 0;\n}\n\n.fab {\n  font-weight: 400;\n  font-size: 20px;\n  color: black;\n}\n\n.fab:hover {\n  cursor: pointer;\n  scale: 1.1;\n}\n\n/* Styling active tab button */\n\n.active {\n  font-weight: bold;\n}\n\n/* Styling Menu tab */\n\n.menu {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  gap: 5px;\n  padding: 5px;\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.item:first-of-type,\ndiv.item:last-of-type {\n  grid-column: 1 / 3;\n}\n\ndiv.item:last-of-type {\n  object-position: bottom;\n}\n\ndiv.item > h3 {\n  margin: 0;\n  font-size: 25px;\n}\n\n/* Styling About us tab */\n\n.about-us {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  padding-bottom: 10px;\n}\n\nh3.para {\n  margin: 0;\n}\n\nimg.place {\n  object-fit: fill;\n}\n\n/* Styling Contact us tab */\n\n.contact-us {\n  display: flex;\n  flex-direction: column;\n}\n\n.contact {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nimg.svg {\n  object-fit: fit;\n  height: 20px;\n  width: 20px;\n}\n\ndiv.contact > h3 {\n  margin: 0;\n  text-align: center;\n}\n\nimg.contact {\n  padding: 10px;\n  box-sizing: border-box;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,yDAAgD;EAChD,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA,mBAAmB;;AAEnB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,8BAA8B;AAChC;;AAEA,iBAAiB;;AAEjB;EACE,gBAAgB;EAChB,mBAAmB;EACnB,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,YAAY;EACZ,oBAAoB;EACpB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;AACtB;;AAEA,mBAAmB;;AAEnB;EACE,aAAa;EACb,0CAA0C;EAC1C,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,eAAe;EACf,UAAU;AACZ;;AAEA,8BAA8B;;AAE9B;EACE,iBAAiB;AACnB;;AAEA,qBAAqB;;AAErB;EACE,aAAa;EACb,8BAA8B;EAC9B,+BAA+B;EAC/B,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;AAEA,yBAAyB;;AAEzB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,oBAAoB;AACtB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA,2BAA2B;;AAE3B;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB","sourcesContent":["body {\n  color: black;\n  margin: 0;\n}\n\n.content {\n  background-image: url(\"./images/Background.jpg\");\n  background-size: cover;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n/* Styling header */\n\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.header > h1 {\n  margin-top: 0;\n  padding-top: 20px;\n  font-size: 50px;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n\n.nav {\n  outline: none;\n  border: none;\n  background: none;\n  color: black;\n  cursor: pointer;\n  font-size: 20px;\n  border-bottom: 2px solid black;\n}\n\n/* Styling main */\n\n.main {\n  margin-top: 50px;\n  margin-bottom: 50px;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\nh3 {\n  text-align: center;\n  padding: 10px 5px;\n  margin-bottom: 0;\n}\n\ndiv.images {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  padding: 5px;\n  padding-bottom: 10px;\n  gap: 5px;\n}\n\nimg {\n  width: 100%;\n  height: 300px;\n  border-radius: 10px;\n  object-fit: cover;\n}\n\nimg.fitted {\n  object-position: top;\n}\n\n/* Styling footer */\n\nfooter {\n  display: flex;\n  background-color: rgba(255, 255, 255, 0.5);\n  justify-content: center;\n  align-items: center;\n  padding: 25px;\n  gap: 5px;\n}\n\nfooter > p {\n  font-size: 18px;\n  margin: 0;\n}\n\n.fab {\n  font-weight: 400;\n  font-size: 20px;\n  color: black;\n}\n\n.fab:hover {\n  cursor: pointer;\n  scale: 1.1;\n}\n\n/* Styling active tab button */\n\n.active {\n  font-weight: bold;\n}\n\n/* Styling Menu tab */\n\n.menu {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  gap: 5px;\n  padding: 5px;\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.item:first-of-type,\ndiv.item:last-of-type {\n  grid-column: 1 / 3;\n}\n\ndiv.item:last-of-type {\n  object-position: bottom;\n}\n\ndiv.item > h3 {\n  margin: 0;\n  font-size: 25px;\n}\n\n/* Styling About us tab */\n\n.about-us {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  padding-bottom: 10px;\n}\n\nh3.para {\n  margin: 0;\n}\n\nimg.place {\n  object-fit: fill;\n}\n\n/* Styling Contact us tab */\n\n.contact-us {\n  display: flex;\n  flex-direction: column;\n}\n\n.contact {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nimg.svg {\n  object-fit: fit;\n  height: 20px;\n  width: 20px;\n}\n\ndiv.contact > h3 {\n  margin: 0;\n  text-align: center;\n}\n\nimg.contact {\n  padding: 10px;\n  box-sizing: border-box;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

"use strict";


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

"use strict";


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

"use strict";


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
  } // For old IE

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

"use strict";


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

/***/ "./src/images/map-marker.svg":
/*!***********************************!*\
  !*** ./src/images/map-marker.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDExLjVBMi41LDIuNSAwIDAsMSA5LjUsOUEyLjUsMi41IDAgMCwxIDEyLDYuNUEyLjUsMi41IDAgMCwxIDE0LjUsOUEyLjUsMi41IDAgMCwxIDEyLDExLjVNMTIsMkE3LDcgMCAwLDAgNSw5QzUsMTQuMjUgMTIsMjIgMTIsMjJDMTIsMjIgMTksMTQuMjUgMTksOUE3LDcgMCAwLDAgMTIsMloiIC8+PC9zdmc+"

/***/ }),

/***/ "./src/images/phone.svg":
/*!******************************!*\
  !*** ./src/images/phone.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTYuNjIsMTAuNzlDOC4wNiwxMy42MiAxMC4zOCwxNS45NCAxMy4yMSwxNy4zOEwxNS40MSwxNS4xOEMxNS42OSwxNC45IDE2LjA4LDE0LjgyIDE2LjQzLDE0LjkzQzE3LjU1LDE1LjMgMTguNzUsMTUuNSAyMCwxNS41QTEsMSAwIDAsMSAyMSwxNi41VjIwQTEsMSAwIDAsMSAyMCwyMUExNywxNyAwIDAsMSAzLDRBMSwxIDAgMCwxIDQsM0g3LjVBMSwxIDAgMCwxIDguNSw0QzguNSw1LjI1IDguNyw2LjQ1IDkuMDcsNy41N0M5LjE4LDcuOTIgOS4xLDguMzEgOC44Miw4LjU5TDYuNjIsMTAuNzlaIiAvPjwvc3ZnPg=="

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_Place_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Place.jpg */ "./src/images/Place.jpg");


function createAboutTab() {
  const about = document.createElement("div");
  about.classList.add("about-us");

  about.appendChild(
    createParagraph(
      "At our burger joint, we are passionate about delivering the perfect burger experience. From our juicy, flavor-packed patties to our fresh, locally-sourced ingredients, every aspect of our menu is carefully crafted to provide you with a memorable meal."
    )
  );
  about.appendChild(
    createParagraph(
      "We believe that a great burger is the ultimate comfort food, and we are dedicated to delivering the very best to our customers. Our chefs have years of experience and are always experimenting with new and innovative recipes, ensuring that there is something for everyone on our menu."
    )
  );
  about.appendChild(
    createParagraph(
      "Our welcoming and casual atmosphere creates the perfect environment for a quick lunch, a relaxing dinner, or a fun night out with friends. We strive to provide the highest level of service and we are committed to ensuring that every guest leaves our restaurant with a smile on their face."
    )
  );
  about.appendChild(
    createParagraph(
      "So come on in, grab a seat, and let us treat you to the best burger experience in town!"
    )
  );
  about.appendChild(addImage());

  return about;
}

function createParagraph(text) {
  const para = document.createElement("h3");
  para.classList.add("para");
  para.textContent = text;

  return para;
}

function addImage() {
  const img = document.createElement("img");
  img.src = _images_Place_jpg__WEBPACK_IMPORTED_MODULE_0__;
  img.classList.add("place");

  return img;
}

function loadAboutTab() {
  const main = document.querySelector(".main");

  main.textContent = "";
  main.appendChild(createAboutTab());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAboutTab);


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_phone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/phone.svg */ "./src/images/phone.svg");
/* harmony import */ var _images_phone_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_phone_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_map_marker_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/map-marker.svg */ "./src/images/map-marker.svg");
/* harmony import */ var _images_map_marker_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_map_marker_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_Maps_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Maps.png */ "./src/images/Maps.png");




function createContactTab() {
  const contact = document.createElement("div");
  contact.classList.add("contact-us");

  contact.appendChild(createPhoneDiv());
  contact.appendChild(createAddressDiv());
  contact.appendChild(addImage());

  return contact;
}

function createPhoneDiv() {
  const phoneDiv = document.createElement("div");
  phoneDiv.classList.add("contact");

  const phone = document.createElement("img");
  phone.classList.add("svg");
  phone.src = (_images_phone_svg__WEBPACK_IMPORTED_MODULE_0___default());

  const phoneNumber = document.createElement("h3");
  phoneNumber.textContent = "0123 456 789";

  phoneDiv.appendChild(phone);
  phoneDiv.appendChild(phoneNumber);

  return phoneDiv;
}

function createAddressDiv() {
  const addressDiv = document.createElement("div");
  addressDiv.classList.add("contact");

  const home = document.createElement("img");
  home.classList.add("svg");
  home.src = (_images_map_marker_svg__WEBPACK_IMPORTED_MODULE_1___default());

  const address = document.createElement("h3");
  address.textContent = "Labdaru street 2, 01120 Vilnius";

  addressDiv.appendChild(home);
  addressDiv.appendChild(address);

  return addressDiv;
}

function addImage() {
  const img = document.createElement("img");
  img.src = _images_Maps_png__WEBPACK_IMPORTED_MODULE_2__;
  img.classList.add("contact");

  return img;
}

function loadContactTab() {
  const main = document.querySelector(".main");

  main.textContent = "";
  main.appendChild(createContactTab());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactTab);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_Home1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Home1.jpg */ "./src/images/Home1.jpg");
/* harmony import */ var _images_Home2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Home2.jpg */ "./src/images/Home2.jpg");
/* harmony import */ var _images_Home3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Home3.jpg */ "./src/images/Home3.jpg");
/* harmony import */ var _images_Home4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/Home4.jpg */ "./src/images/Home4.jpg");





function createHomeTab() {
  const home = document.createElement("div");

  const homeText = document.createElement("h3");
  homeText.textContent =
    "Welcome to our burger joint, where we serve up juicy, flavorful burgers that are sure to satisfy your cravings. Our menu features a variety of classic and creative burger options, made with only the freshest ingredients and cooked to perfection. Whether you're in the mood for a classic cheeseburger, a spicy BBQ bacon burger, or a veggie burger, we've got something for everyone. So come on in, grab a seat, and experience the ultimate in burger bliss.";

  home.appendChild(homeText);
  home.appendChild(createImageGrid());

  return home;
}

function createImageGrid() {
  const homeImagesDiv = document.createElement("div");
  homeImagesDiv.classList.add("images");

  const img1 = document.createElement("img");
  img1.src = _images_Home1_jpg__WEBPACK_IMPORTED_MODULE_0__;

  const img2 = document.createElement("img");
  img2.src = _images_Home2_jpg__WEBPACK_IMPORTED_MODULE_1__;
  img2.classList.add("fitted");

  const img3 = document.createElement("img");
  img3.src = _images_Home3_jpg__WEBPACK_IMPORTED_MODULE_2__;

  const img4 = document.createElement("img");
  img4.src = _images_Home4_jpg__WEBPACK_IMPORTED_MODULE_3__;

  homeImagesDiv.appendChild(img1);
  homeImagesDiv.appendChild(img2);
  homeImagesDiv.appendChild(img3);
  homeImagesDiv.appendChild(img4);

  return homeImagesDiv;
}

function loadHomeTab() {
  const main = document.querySelector(".main");

  main.textContent = "";
  main.appendChild(createHomeTab());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomeTab);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_Beef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Beef.jpg */ "./src/images/Beef.jpg");
/* harmony import */ var _images_Chicken_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Chicken.jpg */ "./src/images/Chicken.jpg");
/* harmony import */ var _images_Pork_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Pork.jpg */ "./src/images/Pork.jpg");
/* harmony import */ var _images_Vegetarian_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/Vegetarian.jpg */ "./src/images/Vegetarian.jpg");





function createMenuTab() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(createMenuItem(_images_Beef_jpg__WEBPACK_IMPORTED_MODULE_0__, "Beef burger"));
  menu.appendChild(createMenuItem(_images_Chicken_jpg__WEBPACK_IMPORTED_MODULE_1__, "Chicken burger"));
  menu.appendChild(createMenuItem(_images_Pork_jpg__WEBPACK_IMPORTED_MODULE_2__, "Pork burger"));
  menu.appendChild(createMenuItem(_images_Vegetarian_jpg__WEBPACK_IMPORTED_MODULE_3__, "Vegetarian burger"));

  return menu;
}

function createMenuItem(img, title) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("item");

  const image = document.createElement("img");
  image.src = img;
  image.classList.add("item");

  const name = document.createElement("h3");
  name.textContent = title;

  menuItem.appendChild(image);
  menuItem.appendChild(name);

  return menuItem;
}

function loadMenuTab() {
  const main = document.querySelector(".main");

  main.textContent = "";
  main.appendChild(createMenuTab());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuTab);


/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// Importing tabs //





// Importing CSS file //


// Creating Header //

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restName = document.createElement("h1");
  restName.textContent = "Burger Buddies";

  header.appendChild(restName);
  header.appendChild(createHeaderNav());

  return header;
}

// Creating Header Nav //

function createHeaderNav() {
  const nav = document.createElement("nav");

  // Home button //

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("nav");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    } else {
      activateButton(e);
      (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
      console.log("Home");
    }
  });

  // Menu button //

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("nav");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    } else {
      activateButton(e);
      (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
      console.log("Menu");
    }
  });

  // About button //

  const aboutBtn = document.createElement("button");
  aboutBtn.classList.add("nav");
  aboutBtn.textContent = "About us";
  aboutBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    } else {
      activateButton(e);
      (0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
      console.log("About us");
    }
  });

  // Contact button //

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("nav");
  contactBtn.textContent = "Contact us";
  contactBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    } else {
      activateButton(e);
      (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
      console.log("Contact us");
    }
  });

  // Adding buttons to nav //

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(aboutBtn);
  nav.appendChild(contactBtn);

  return nav;
}

// Function to switch tabs //

function activateButton(e) {
  const targetButton = e.target;
  const buttons = document.querySelectorAll(".nav");

  buttons.forEach((button) => {
    if (button.classList.contains("active"))
      [button.classList.remove("active")];
  });

  targetButton.classList.add("active");
}

// Creating Main tag //

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");

  return main;
}

// Creating Footer tag //

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const p = document.createElement("p");
  p.textContent = `Copyright © ${new Date().getFullYear()} Ka0gaMi`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/Ka0gaMi";
  githubLink.target = "_blank";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");

  footer.appendChild(p);
  footer.appendChild(githubLink);
  githubLink.appendChild(githubIcon);

  return footer;
}

// Creating the website //

function createWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  const homeBtn = document.querySelector(".nav");
  homeBtn.classList.add("active");
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWebsite);


/***/ }),

/***/ "./src/images/Background.jpg":
/*!***********************************!*\
  !*** ./src/images/Background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Background.jpg";

/***/ }),

/***/ "./src/images/Beef.jpg":
/*!*****************************!*\
  !*** ./src/images/Beef.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Beef.jpg";

/***/ }),

/***/ "./src/images/Chicken.jpg":
/*!********************************!*\
  !*** ./src/images/Chicken.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Chicken.jpg";

/***/ }),

/***/ "./src/images/Home1.jpg":
/*!******************************!*\
  !*** ./src/images/Home1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Home1.jpg";

/***/ }),

/***/ "./src/images/Home2.jpg":
/*!******************************!*\
  !*** ./src/images/Home2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Home2.jpg";

/***/ }),

/***/ "./src/images/Home3.jpg":
/*!******************************!*\
  !*** ./src/images/Home3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Home3.jpg";

/***/ }),

/***/ "./src/images/Home4.jpg":
/*!******************************!*\
  !*** ./src/images/Home4.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Home4.jpg";

/***/ }),

/***/ "./src/images/Maps.png":
/*!*****************************!*\
  !*** ./src/images/Maps.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Maps.png";

/***/ }),

/***/ "./src/images/Place.jpg":
/*!******************************!*\
  !*** ./src/images/Place.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Place.jpg";

/***/ }),

/***/ "./src/images/Pork.jpg":
/*!*****************************!*\
  !*** ./src/images/Pork.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Pork.jpg";

/***/ }),

/***/ "./src/images/Vegetarian.jpg":
/*!***********************************!*\
  !*** ./src/images/Vegetarian.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Vegetarian.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");


(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxpREFBVztBQUNiOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoSzdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FzQzs7QUFFdEMsb0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL21hcC1tYXJrZXIuc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMvcGhvbmUuc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvQmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIFN0eWxpbmcgaGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLmhlYWRlciA+IGgxIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubmF2IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4vKiBTdHlsaW5nIG1haW4gKi9cXG5cXG4ubWFpbiB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5kaXYuaW1hZ2VzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG5pbWcuZml0dGVkIHtcXG4gIG9iamVjdC1wb3NpdGlvbjogdG9wO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjVweDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG5mb290ZXIgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmZhYiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZmFiOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHNjYWxlOiAxLjE7XFxufVxcblxcbi8qIFN0eWxpbmcgYWN0aXZlIHRhYiBidXR0b24gKi9cXG5cXG4uYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBTdHlsaW5nIE1lbnUgdGFiICovXFxuXFxuLm1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLml0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpdi5pdGVtOmZpcnN0LW9mLXR5cGUsXFxuZGl2Lml0ZW06bGFzdC1vZi10eXBlIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuZGl2Lml0ZW06bGFzdC1vZi10eXBlIHtcXG4gIG9iamVjdC1wb3NpdGlvbjogYm90dG9tO1xcbn1cXG5cXG5kaXYuaXRlbSA+IGgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLyogU3R5bGluZyBBYm91dCB1cyB0YWIgKi9cXG5cXG4uYWJvdXQtdXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5oMy5wYXJhIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaW1nLnBsYWNlIHtcXG4gIG9iamVjdC1maXQ6IGZpbGw7XFxufVxcblxcbi8qIFN0eWxpbmcgQ29udGFjdCB1cyB0YWIgKi9cXG5cXG4uY29udGFjdC11cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW1nLnN2ZyB7XFxuICBvYmplY3QtZml0OiBmaXQ7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuZGl2LmNvbnRhY3QgPiBoMyB7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmltZy5jb250YWN0IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlEQUFnRDtFQUNoRCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUEsOEJBQThCOztBQUU5QjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsMkJBQTJCOztBQUUzQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvQmFja2dyb3VuZC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIFN0eWxpbmcgaGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLmhlYWRlciA+IGgxIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubmF2IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4vKiBTdHlsaW5nIG1haW4gKi9cXG5cXG4ubWFpbiB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5kaXYuaW1hZ2VzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG5pbWcuZml0dGVkIHtcXG4gIG9iamVjdC1wb3NpdGlvbjogdG9wO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjVweDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG5mb290ZXIgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmZhYiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZmFiOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHNjYWxlOiAxLjE7XFxufVxcblxcbi8qIFN0eWxpbmcgYWN0aXZlIHRhYiBidXR0b24gKi9cXG5cXG4uYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBTdHlsaW5nIE1lbnUgdGFiICovXFxuXFxuLm1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLml0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpdi5pdGVtOmZpcnN0LW9mLXR5cGUsXFxuZGl2Lml0ZW06bGFzdC1vZi10eXBlIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuZGl2Lml0ZW06bGFzdC1vZi10eXBlIHtcXG4gIG9iamVjdC1wb3NpdGlvbjogYm90dG9tO1xcbn1cXG5cXG5kaXYuaXRlbSA+IGgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLyogU3R5bGluZyBBYm91dCB1cyB0YWIgKi9cXG5cXG4uYWJvdXQtdXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5oMy5wYXJhIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaW1nLnBsYWNlIHtcXG4gIG9iamVjdC1maXQ6IGZpbGw7XFxufVxcblxcbi8qIFN0eWxpbmcgQ29udGFjdCB1cyB0YWIgKi9cXG5cXG4uY29udGFjdC11cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW1nLnN2ZyB7XFxuICBvYmplY3QtZml0OiBmaXQ7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuZGl2LmNvbnRhY3QgPiBoMyB7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmltZy5jb250YWN0IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSStQSEJoZEdnZ1pEMGlUVEV5TERFeExqVkJNaTQxTERJdU5TQXdJREFzTVNBNUxqVXNPVUV5TGpVc01pNDFJREFnTUN3eElERXlMRFl1TlVFeUxqVXNNaTQxSURBZ01Dd3hJREUwTGpVc09VRXlMalVzTWk0MUlEQWdNQ3d4SURFeUxERXhMalZOTVRJc01rRTNMRGNnTUNBd0xEQWdOU3c1UXpVc01UUXVNalVnTVRJc01qSWdNVElzTWpKRE1USXNNaklnTVRrc01UUXVNalVnTVRrc09VRTNMRGNnTUNBd0xEQWdNVElzTWxvaUlDOCtQQzl6ZG1jK1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSStQSEJoZEdnZ1pEMGlUVFl1TmpJc01UQXVOemxET0M0d05pd3hNeTQyTWlBeE1DNHpPQ3d4TlM0NU5DQXhNeTR5TVN3eE55NHpPRXd4TlM0ME1Td3hOUzR4T0VNeE5TNDJPU3d4TkM0NUlERTJMakE0TERFMExqZ3lJREUyTGpRekxERTBMamt6UXpFM0xqVTFMREUxTGpNZ01UZ3VOelVzTVRVdU5TQXlNQ3d4TlM0MVFURXNNU0F3SURBc01TQXlNU3d4Tmk0MVZqSXdRVEVzTVNBd0lEQXNNU0F5TUN3eU1VRXhOeXd4TnlBd0lEQXNNU0F6TERSQk1Td3hJREFnTUN3eElEUXNNMGczTGpWQk1Td3hJREFnTUN3eElEZ3VOU3cwUXpndU5TdzFMakkxSURndU55dzJMalExSURrdU1EY3NOeTQxTjBNNUxqRTRMRGN1T1RJZ09TNHhMRGd1TXpFZ09DNDRNaXc0TGpVNVREWXVOaklzTVRBdU56bGFJaUF2UGp3dmMzWm5QZz09XCIiLCJpbXBvcnQgUGxhY2UgZnJvbSBcIi4vaW1hZ2VzL1BsYWNlLmpwZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVBYm91dFRhYigpIHtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdXNcIik7XG5cbiAgYWJvdXQuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUGFyYWdyYXBoKFxuICAgICAgXCJBdCBvdXIgYnVyZ2VyIGpvaW50LCB3ZSBhcmUgcGFzc2lvbmF0ZSBhYm91dCBkZWxpdmVyaW5nIHRoZSBwZXJmZWN0IGJ1cmdlciBleHBlcmllbmNlLiBGcm9tIG91ciBqdWljeSwgZmxhdm9yLXBhY2tlZCBwYXR0aWVzIHRvIG91ciBmcmVzaCwgbG9jYWxseS1zb3VyY2VkIGluZ3JlZGllbnRzLCBldmVyeSBhc3BlY3Qgb2Ygb3VyIG1lbnUgaXMgY2FyZWZ1bGx5IGNyYWZ0ZWQgdG8gcHJvdmlkZSB5b3Ugd2l0aCBhIG1lbW9yYWJsZSBtZWFsLlwiXG4gICAgKVxuICApO1xuICBhYm91dC5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQYXJhZ3JhcGgoXG4gICAgICBcIldlIGJlbGlldmUgdGhhdCBhIGdyZWF0IGJ1cmdlciBpcyB0aGUgdWx0aW1hdGUgY29tZm9ydCBmb29kLCBhbmQgd2UgYXJlIGRlZGljYXRlZCB0byBkZWxpdmVyaW5nIHRoZSB2ZXJ5IGJlc3QgdG8gb3VyIGN1c3RvbWVycy4gT3VyIGNoZWZzIGhhdmUgeWVhcnMgb2YgZXhwZXJpZW5jZSBhbmQgYXJlIGFsd2F5cyBleHBlcmltZW50aW5nIHdpdGggbmV3IGFuZCBpbm5vdmF0aXZlIHJlY2lwZXMsIGVuc3VyaW5nIHRoYXQgdGhlcmUgaXMgc29tZXRoaW5nIGZvciBldmVyeW9uZSBvbiBvdXIgbWVudS5cIlxuICAgIClcbiAgKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUGFyYWdyYXBoKFxuICAgICAgXCJPdXIgd2VsY29taW5nIGFuZCBjYXN1YWwgYXRtb3NwaGVyZSBjcmVhdGVzIHRoZSBwZXJmZWN0IGVudmlyb25tZW50IGZvciBhIHF1aWNrIGx1bmNoLCBhIHJlbGF4aW5nIGRpbm5lciwgb3IgYSBmdW4gbmlnaHQgb3V0IHdpdGggZnJpZW5kcy4gV2Ugc3RyaXZlIHRvIHByb3ZpZGUgdGhlIGhpZ2hlc3QgbGV2ZWwgb2Ygc2VydmljZSBhbmQgd2UgYXJlIGNvbW1pdHRlZCB0byBlbnN1cmluZyB0aGF0IGV2ZXJ5IGd1ZXN0IGxlYXZlcyBvdXIgcmVzdGF1cmFudCB3aXRoIGEgc21pbGUgb24gdGhlaXIgZmFjZS5cIlxuICAgIClcbiAgKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUGFyYWdyYXBoKFxuICAgICAgXCJTbyBjb21lIG9uIGluLCBncmFiIGEgc2VhdCwgYW5kIGxldCB1cyB0cmVhdCB5b3UgdG8gdGhlIGJlc3QgYnVyZ2VyIGV4cGVyaWVuY2UgaW4gdG93biFcIlxuICAgIClcbiAgKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWRkSW1hZ2UoKSk7XG5cbiAgcmV0dXJuIGFib3V0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXJhZ3JhcGgodGV4dCkge1xuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBwYXJhLmNsYXNzTGlzdC5hZGQoXCJwYXJhXCIpO1xuICBwYXJhLnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gcGFyYTtcbn1cblxuZnVuY3Rpb24gYWRkSW1hZ2UoKSB7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5zcmMgPSBQbGFjZTtcbiAgaW1nLmNsYXNzTGlzdC5hZGQoXCJwbGFjZVwiKTtcblxuICByZXR1cm4gaW1nO1xufVxuXG5mdW5jdGlvbiBsb2FkQWJvdXRUYWIoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG5cbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXRUYWIoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRBYm91dFRhYjtcbiIsImltcG9ydCBQaG9uZSBmcm9tIFwiLi9pbWFnZXMvcGhvbmUuc3ZnXCI7XG5pbXBvcnQgTWFwIGZyb20gXCIuL2ltYWdlcy9tYXAtbWFya2VyLnN2Z1wiO1xuaW1wb3J0IGdvb2dsZU1hcHMgZnJvbSBcIi4vaW1hZ2VzL01hcHMucG5nXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RUYWIoKSB7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXVzXCIpO1xuXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY3JlYXRlUGhvbmVEaXYoKSk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkcmVzc0RpdigpKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRJbWFnZSgpKTtcblxuICByZXR1cm4gY29udGFjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGhvbmVEaXYoKSB7XG4gIGNvbnN0IHBob25lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGhvbmVEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG5cbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBwaG9uZS5jbGFzc0xpc3QuYWRkKFwic3ZnXCIpO1xuICBwaG9uZS5zcmMgPSBQaG9uZTtcblxuICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSBcIjAxMjMgNDU2IDc4OVwiO1xuXG4gIHBob25lRGl2LmFwcGVuZENoaWxkKHBob25lKTtcbiAgcGhvbmVEaXYuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xuXG4gIHJldHVybiBwaG9uZURpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRkcmVzc0RpdigpIHtcbiAgY29uc3QgYWRkcmVzc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZHJlc3NEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG5cbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcInN2Z1wiKTtcbiAgaG9tZS5zcmMgPSBNYXA7XG5cbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiTGFiZGFydSBzdHJlZXQgMiwgMDExMjAgVmlsbml1c1wiO1xuXG4gIGFkZHJlc3NEaXYuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gIGFkZHJlc3NEaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgcmV0dXJuIGFkZHJlc3NEaXY7XG59XG5cbmZ1bmN0aW9uIGFkZEltYWdlKCkge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc3JjID0gZ29vZ2xlTWFwcztcbiAgaW1nLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuXG4gIHJldHVybiBpbWc7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0VGFiKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuXG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RUYWIoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0VGFiO1xuIiwiaW1wb3J0IEhvbWUxIGZyb20gXCIuL2ltYWdlcy9Ib21lMS5qcGdcIjtcbmltcG9ydCBIb21lMiBmcm9tIFwiLi9pbWFnZXMvSG9tZTIuanBnXCI7XG5pbXBvcnQgSG9tZTMgZnJvbSBcIi4vaW1hZ2VzL0hvbWUzLmpwZ1wiO1xuaW1wb3J0IEhvbWU0IGZyb20gXCIuL2ltYWdlcy9Ib21lNC5qcGdcIjtcblxuZnVuY3Rpb24gY3JlYXRlSG9tZVRhYigpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgaG9tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhvbWVUZXh0LnRleHRDb250ZW50ID1cbiAgICBcIldlbGNvbWUgdG8gb3VyIGJ1cmdlciBqb2ludCwgd2hlcmUgd2Ugc2VydmUgdXAganVpY3ksIGZsYXZvcmZ1bCBidXJnZXJzIHRoYXQgYXJlIHN1cmUgdG8gc2F0aXNmeSB5b3VyIGNyYXZpbmdzLiBPdXIgbWVudSBmZWF0dXJlcyBhIHZhcmlldHkgb2YgY2xhc3NpYyBhbmQgY3JlYXRpdmUgYnVyZ2VyIG9wdGlvbnMsIG1hZGUgd2l0aCBvbmx5IHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cyBhbmQgY29va2VkIHRvIHBlcmZlY3Rpb24uIFdoZXRoZXIgeW91J3JlIGluIHRoZSBtb29kIGZvciBhIGNsYXNzaWMgY2hlZXNlYnVyZ2VyLCBhIHNwaWN5IEJCUSBiYWNvbiBidXJnZXIsIG9yIGEgdmVnZ2llIGJ1cmdlciwgd2UndmUgZ290IHNvbWV0aGluZyBmb3IgZXZlcnlvbmUuIFNvIGNvbWUgb24gaW4sIGdyYWIgYSBzZWF0LCBhbmQgZXhwZXJpZW5jZSB0aGUgdWx0aW1hdGUgaW4gYnVyZ2VyIGJsaXNzLlwiO1xuXG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZVRleHQpO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlR3JpZCgpKTtcblxuICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2VHcmlkKCkge1xuICBjb25zdCBob21lSW1hZ2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZUltYWdlc0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VzXCIpO1xuXG4gIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcxLnNyYyA9IEhvbWUxO1xuXG4gIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcyLnNyYyA9IEhvbWUyO1xuICBpbWcyLmNsYXNzTGlzdC5hZGQoXCJmaXR0ZWRcIik7XG5cbiAgY29uc3QgaW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZzMuc3JjID0gSG9tZTM7XG5cbiAgY29uc3QgaW1nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZzQuc3JjID0gSG9tZTQ7XG5cbiAgaG9tZUltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWcxKTtcbiAgaG9tZUltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWcyKTtcbiAgaG9tZUltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWczKTtcbiAgaG9tZUltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWc0KTtcblxuICByZXR1cm4gaG9tZUltYWdlc0Rpdjtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWVUYWIoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG5cbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZVRhYigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWVUYWI7XG4iLCJpbXBvcnQgQmVlZiBmcm9tIFwiLi9pbWFnZXMvQmVlZi5qcGdcIjtcbmltcG9ydCBDaGlja2VuIGZyb20gXCIuL2ltYWdlcy9DaGlja2VuLmpwZ1wiO1xuaW1wb3J0IFBvcmsgZnJvbSBcIi4vaW1hZ2VzL1BvcmsuanBnXCI7XG5pbXBvcnQgVmVnZXRhcmlhbiBmcm9tIFwiLi9pbWFnZXMvVmVnZXRhcmlhbi5qcGdcIjtcblxuZnVuY3Rpb24gY3JlYXRlTWVudVRhYigpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShCZWVmLCBcIkJlZWYgYnVyZ2VyXCIpKTtcbiAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShDaGlja2VuLCBcIkNoaWNrZW4gYnVyZ2VyXCIpKTtcbiAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShQb3JrLCBcIlBvcmsgYnVyZ2VyXCIpKTtcbiAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShWZWdldGFyaWFuLCBcIlZlZ2V0YXJpYW4gYnVyZ2VyXCIpKTtcblxuICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oaW1nLCB0aXRsZSkge1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2Uuc3JjID0gaW1nO1xuICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBuYW1lLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChuYW1lKTtcblxuICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51VGFiKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuXG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVUYWIoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51VGFiO1xuIiwiLy8gSW1wb3J0aW5nIHRhYnMgLy9cbmltcG9ydCBsb2FkSG9tZVRhYiBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnVUYWIgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGxvYWRBYm91dFRhYiBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IGxvYWRDb250YWN0VGFiIGZyb20gXCIuL2NvbnRhY3RcIjtcblxuLy8gSW1wb3J0aW5nIENTUyBmaWxlIC8vXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vLyBDcmVhdGluZyBIZWFkZXIgLy9cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCByZXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgcmVzdE5hbWUudGV4dENvbnRlbnQgPSBcIkJ1cmdlciBCdWRkaWVzXCI7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3ROYW1lKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlck5hdigpKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG4vLyBDcmVhdGluZyBIZWFkZXIgTmF2IC8vXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlck5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuICAvLyBIb21lIGJ1dHRvbiAvL1xuXG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2YXRlQnV0dG9uKGUpO1xuICAgICAgbG9hZEhvbWVUYWIoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiSG9tZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1lbnUgYnV0dG9uIC8vXG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbiAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZhdGVCdXR0b24oZSk7XG4gICAgICBsb2FkTWVudVRhYigpO1xuICAgICAgY29uc29sZS5sb2coXCJNZW51XCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQWJvdXQgYnV0dG9uIC8vXG5cbiAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhYm91dEJ0bi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuICBhYm91dEJ0bi50ZXh0Q29udGVudCA9IFwiQWJvdXQgdXNcIjtcbiAgYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmF0ZUJ1dHRvbihlKTtcbiAgICAgIGxvYWRBYm91dFRhYigpO1xuICAgICAgY29uc29sZS5sb2coXCJBYm91dCB1c1wiKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIENvbnRhY3QgYnV0dG9uIC8vXG5cbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbiAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29udGFjdCB1c1wiO1xuICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZhdGVCdXR0b24oZSk7XG4gICAgICBsb2FkQ29udGFjdFRhYigpO1xuICAgICAgY29uc29sZS5sb2coXCJDb250YWN0IHVzXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQWRkaW5nIGJ1dHRvbnMgdG8gbmF2IC8vXG5cbiAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gIG5hdi5hcHBlbmRDaGlsZChhYm91dEJ0bik7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICByZXR1cm4gbmF2O1xufVxuXG4vLyBGdW5jdGlvbiB0byBzd2l0Y2ggdGFicyAvL1xuXG5mdW5jdGlvbiBhY3RpdmF0ZUJ1dHRvbihlKSB7XG4gIGNvbnN0IHRhcmdldEJ1dHRvbiA9IGUudGFyZ2V0O1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZcIik7XG5cbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSlcbiAgICAgIFtidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKV07XG4gIH0pO1xuXG4gIHRhcmdldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG4vLyBDcmVhdGluZyBNYWluIHRhZyAvL1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbi8vIENyZWF0aW5nIEZvb3RlciB0YWcgLy9cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBLYTBnYU1pYDtcblxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0thMGdhTWlcIjtcbiAgZ2l0aHViTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFiXCIpO1xuICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1naXRodWJcIik7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKHApO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG4gIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuLy8gQ3JlYXRpbmcgdGhlIHdlYnNpdGUgLy9cblxuZnVuY3Rpb24gY3JlYXRlV2Vic2l0ZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XG4gIGhvbWVCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgbG9hZEhvbWVUYWIoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlV2Vic2l0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlV2Vic2l0ZSBmcm9tIFwiLi93ZWJzaXRlXCI7XG5cbmNyZWF0ZVdlYnNpdGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==