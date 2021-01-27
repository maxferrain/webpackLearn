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

const func  = (a = 20) => {
    return a
}

console.log(func())
