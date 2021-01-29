// const original = function () {
//     return 100;
// }
// console.log(original())

// const arrow = (num) => {
//     return 100+num;
// }

// const arrow2 = (num) =>  100 + num;
// const arrow3 = num =>  100 + num;
// console.log(arrow3(12))

// const obj = {
//     name: 'qwe',
//     logName: function (){
//         setTimeout( () => {
//             console.log('name + '+ this.name)
//         }, 2000)
//
//     }
// }
// obj.logName()

// const func  = (a = 20) => {
//     return a
// }
//
// console.log(func())


// const name = 'max'
// const age = 21
//
// const obj = {
//     name,
//     age
// }
// console.log(obj)


// const createPerson = (name, surname, fieldName, fieldPostfix) => {
//     fullname = name + ' ' + surname
//     return  {
//         fullname,
//         name,
//         surname,
//         getJob() {
//             return 'Front end'
//         },
//         [fieldName + fieldPostfix] : 100
//     };
//     // let finale = fieldName + fieldPostfix
//     // person[fieldName] = 50;
//     // return person;
// }
//
// person  = createPerson('john', 'sash', 'car', '-model')
// console.log(person)

//---------------деструктиризация
// let obj = {
//     name: 'max',
//     age: 21
// }
//
// let {name: n, age: a} = obj
// // let age = obj.age
//
// console.log(n, a)

// let array = ['max', 30, ]
// // let {0: name} = array
// let [name, , color = 'red'] = array
// console.log(name, color)

//---------------rest/ spread операторы

// function logStrings(num, ...args){ //rest(оставшиеся параметры в функцию)
//     // var args = Array.prototype.slice.call(arguments)
//     console.log(num, args)
// }
//
// let spreadArray = ['max', 'max2', 'max3', 'max4']
//
// logStrings(20, ...spreadArray) //spread
// logStrings(20, 'max', 'max2', 'max3', 'max4')


//------------------строки

// let name = 'max'
// let str1 = `Hello ${name} glad to see u`
// console.log(str1)
//
// let html = `
//     <div>
//         <h1>Hello World</h1>
//         <span>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, sapiente!</p> //lorem10 tab
//         </span>
//     </div>
// `
// console.log(html)


//-----------------------классы

// class  Car{
//     constructor(name) {
//         this.name = name
//     }
//
//     logName(){
//         console.log(this.name)
//     }
//
//     static staticFunc(){
//         console.log('im static')
//     }
// }
//
// let car = new Car('BMW')
// car.logName()
// Car.staticFunc()

// class  Car{
//     constructor(name) {
//         console.log('car constructor')
//         this.name = name
//     }
//
//     logName(){
//         console.log('car name is ',this.name)
//     }
// }
//
// class BMW extends Car{
//     constructor(name) {
//         super(name);
//         console.log('BMW constructor')
//     }
//
//     logName() {
//         super.logName();
//         console.log('bmw name is ',this.name)
//     }
// }
//
// let bmw = new BMW('x7')
// bmw.logName()


//--------------------------обьекты Set/weak

// let set = new Set([1,2,3,3,4,4,5,3]);
// set.add(10)
// set.add('hello')
// set.add({})

// let set = new Set().add(2).add(3)
// console.log('set size ', set.size)
// console.log('set has', set.has(2))


// let set = new WeakSet()
//
// let key = {}
// set.add(key)
// console.log(set.size)
// key = null
// console.log(set.size)


//--------------------------обьекты Map/weakMap

// let map = new Map()
//
// map.set('name', 'max')
// map.set('age', 20)

// console.log(map.get('age'))

// let obj1 = {}
// let obj2 = {}
//
// map.set(obj1, 10)
// map.set(obj2, 50)
//
// console.log('size', map.size)
// console.log('has', map.has(obj2))
// console.log('delete', map.delete(obj2))
// console.log('size', map.size)
// console.log('has', map.has(obj2))


// let map = new Map([
//     ['name', 'max'],
//     ['age', 20]
// ])
// for(let val of map.values()){
//     console.log('values', val)
// }
//
// for(let val of map.keys()){
//     console.log('values', val)
// }
//
// for(let entr of map.entries()){
//     console.log(`${entr[0]}-->${entr[1]}`)
// }

// let map  = new WeakMap();
// let key = {}
// map.set(key, 'key')
// console.log('size ', map.size)
// key = null
// console.log('size ', map.size)


//--------------------------система модулей. Модули


// import * as extra from './extra'
// import {name as n, age} from "./extra";
//
// console.log(n, age)

// import func from './extra'
//
// func()
//
// import {Car} from "./extra";
//
// let car = new Car('bmw');

//--------------------------symbols
// let s = Symbol('field')
// let s2 = Symbol('1')
// let s3 = Symbol('1')
// console.log(typeof s2 === typeof s3)
// console.log( s2 === s3) // false -> unique

// let obj = {
//     age: 20,
//     [s]: 'max'
// }
//
// console.log(Object.getOwnPropertySymbols(obj))

// let num = 1;
// let str = '2'
// let arr = [1, 2]
// let obj = {name: 'max'}
//
// console.log('Number', typeof num[Symbol.iterator])
// console.log('String', typeof str[Symbol.iterator])
// console.log('Array', typeof arr[Symbol.iterator])
// console.log('Object', typeof obj[Symbol.iterator])

// Number undefined
// String function
// Array function
// Object undefined

// function createIterator(arr){
//     let count = 0
//     return {
//         next() {
//             return count < arr.length
//                 ? { value: arr[count++], done: false}
//                 : { value: undefined, done: true}
//         }
//     }
// }
// let iter = createIterator([1,2,3,4])
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// 1 1 2 3 5 8

// let fib = {
//     [Symbol.iterator](){
//         let pre = 0, cur = 1
//         return{
//             next(value) {
//                 [pre, cur] = [cur, pre + cur]
//                 return {value: cur, done: false}
//             }
//         }
//     }
// }
// for( let n of fib){
//     if( n > 100) break
//     console.log(n)
// }

//------------------------ Генераторы

// function* gen(){
//     yield 11
//     yield 22
//     yield 33
// }
//
// let iter = gen()
//
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())


// function* g1(){
//     yield 1
//     yield* g2()
//     yield 4
// }
// function* g2(){
//     yield 2
//     yield 3
// }
//
// let iter = g1()

// console.log(iter.next())


// function* getRange(start = 0, end = 100, step = 10){
//     while (start < end){
//         yield start
//         start+=step
//     }
// }
// for(let n of getRange(10, 50,3)){
//     console.log(n)
// }

// let fib = {
//     *[Symbol.iterator](){
//         let pre = 0, cur = 1
//         for(;;){
//                 [pre, cur] = [cur, pre + cur]
//                 yield cur
//         }
//     }
// }
// for( let n of fib){
//     if( n > 100) break
//     console.log(n)
// }

//-------------------new methods

// Object.assign()
// .find(x => x>3)
// str.repeat(3)
// str.startsWith('hel')

//------------------Promise

//old es5
// function oldDelay(ms, func){
//     setTimeout(function (){
//         func()
//     }, ms)
// }
// oldDelay(3000, function (){
//     console.log('old delay passed')
// }

// function delay(ms = 1000){
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             resolve()
//         }, ms)
//     })
// }
//
// delay(2000)
//     .then(()=>{
//     console.log('new delay passed')
// })
//     .catch(()=>{
//         console.info('error')
//     })


import $ from 'jquery'
let promise = new Promise((resolve, reject)=>{
    $.ajax({
        url: 'http://date.jsontest.com',
        dataType: 'json',
        success:function (response){
        resolve(response)
        },
        error: function (error){
        reject(error)
        }
    })
})

promise
    .then((data)=>{
    return data.date
})
    .then((date)=>{
        console.log('date', date)
    })
    .catch((error)=>{
        console.info(error)
    })










