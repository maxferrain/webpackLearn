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
eval("// const original = function () {\n//     return 100;\n// }\n// console.log(original())\n// const arrow = (num) => {\n//     return 100+num;\n// }\n// const arrow2 = (num) =>  100 + num;\n// const arrow3 = num =>  100 + num;\n// console.log(arrow3(12))\n// const obj = {\n//     name: 'qwe',\n//     logName: function (){\n//         setTimeout( () => {\n//             console.log('name + '+ this.name)\n//         }, 2000)\n//\n//     }\n// }\n// obj.logName()\n// const func  = (a = 20) => {\n//     return a\n// }\n//\n// console.log(func())\n// const name = 'max'\n// const age = 21\n//\n// const obj = {\n//     name,\n//     age\n// }\n// console.log(obj)\n// const createPerson = (name, surname, fieldName, fieldPostfix) => {\n//     fullname = name + ' ' + surname\n//     return  {\n//         fullname,\n//         name,\n//         surname,\n//         getJob() {\n//             return 'Front end'\n//         },\n//         [fieldName + fieldPostfix] : 100\n//     };\n//     // let finale = fieldName + fieldPostfix\n//     // person[fieldName] = 50;\n//     // return person;\n// }\n//\n// person  = createPerson('john', 'sash', 'car', '-model')\n// console.log(person)\n//---------------деструктиризация\n// let obj = {\n//     name: 'max',\n//     age: 21\n// }\n//\n// let {name: n, age: a} = obj\n// // let age = obj.age\n//\n// console.log(n, a)\n// let array = ['max', 30, ]\n// // let {0: name} = array\n// let [name, , color = 'red'] = array\n// console.log(name, color)\n//---------------rest/ spread операторы\n// function logStrings(num, ...args){ //rest(оставшиеся параметры в функцию)\n//     // var args = Array.prototype.slice.call(arguments)\n//     console.log(num, args)\n// }\n//\n// let spreadArray = ['max', 'max2', 'max3', 'max4']\n//\n// logStrings(20, ...spreadArray) //spread\n// logStrings(20, 'max', 'max2', 'max3', 'max4')\n//------------------строки\n// let name = 'max'\n// let str1 = `Hello ${name} glad to see u`\n// console.log(str1)\n//\n// let html = `\n//     <div>\n//         <h1>Hello World</h1>\n//         <span>\n//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, sapiente!</p> //lorem10 tab\n//         </span>\n//     </div>\n// `\n// console.log(html)\n//-----------------------классы\n// class  Car{\n//     constructor(name) {\n//         this.name = name\n//     }\n//\n//     logName(){\n//         console.log(this.name)\n//     }\n//\n//     static staticFunc(){\n//         console.log('im static')\n//     }\n// }\n//\n// let car = new Car('BMW')\n// car.logName()\n// Car.staticFunc()\n// class  Car{\n//     constructor(name) {\n//         console.log('car constructor')\n//         this.name = name\n//     }\n//\n//     logName(){\n//         console.log('car name is ',this.name)\n//     }\n// }\n//\n// class BMW extends Car{\n//     constructor(name) {\n//         super(name);\n//         console.log('BMW constructor')\n//     }\n//\n//     logName() {\n//         super.logName();\n//         console.log('bmw name is ',this.name)\n//     }\n// }\n//\n// let bmw = new BMW('x7')\n// bmw.logName()\n//--------------------------обьекты Set/weak\n// let set = new Set([1,2,3,3,4,4,5,3]);\n// set.add(10)\n// set.add('hello')\n// set.add({})\n// let set = new Set().add(2).add(3)\n// console.log('set size ', set.size)\n// console.log('set has', set.has(2))\nvar set = new WeakSet();\nvar key = {};\nset.add(key);\nconsole.log(set.size);\nkey = null;\nconsole.log(set.size);\n\n//# sourceURL=webpack://es6-theory-course/./index.js?");
/******/ })()
;