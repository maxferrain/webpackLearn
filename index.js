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

let name = 'max'
let str1 = `Hello ${name} glad to see u`
console.log(str1)

let html = `
    <div>
        <h1>Hello World</h1>
        <span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, sapiente!</p> //lorem10 tab
        </span>
    </div>
`
console.log(html)









