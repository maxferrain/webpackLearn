/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!******************!*\
  !*** ./index.js ***!
  \******************/
eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// const original = function () {\n//     return 100;\n// }\n// console.log(original())\n// const arrow = (num) => {\n//     return 100+num;\n// }\n// const arrow2 = (num) =>  100 + num;\n// const arrow3 = num =>  100 + num;\n// console.log(arrow3(12))\n// const obj = {\n//     name: 'qwe',\n//     logName: function (){\n//         setTimeout( () => {\n//             console.log('name + '+ this.name)\n//         }, 2000)\n//\n//     }\n// }\n// obj.logName()\n// const func  = (a = 20) => {\n//     return a\n// }\n//\n// console.log(func())\n// const name = 'max'\n// const age = 21\n//\n// const obj = {\n//     name,\n//     age\n// }\n// console.log(obj)\nvar createPerson = function createPerson(name, surname, fieldName, fieldPostfix) {\n  fullname = name + ' ' + surname;\n  return _defineProperty({\n    fullname: fullname,\n    name: name,\n    surname: surname,\n    getJob: function getJob() {\n      return 'Front end';\n    }\n  }, fieldName + fieldPostfix, 100); // let finale = fieldName + fieldPostfix\n  // person[fieldName] = 50;\n  // return person;\n};\n\nperson = createPerson('john', 'sash', 'car', '-model');\nconsole.log(person);\n\n//# sourceURL=webpack://es6-theory-course/./index.js?");
/******/ })()
;