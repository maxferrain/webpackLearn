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


const createPerson = (name, surname, fieldName, fieldPostfix) => {
    fullname = name + ' ' + surname
    return  {
        fullname,
        name,
        surname,
        getJob() {
            return 'Front end'
        },
        [fieldName + fieldPostfix] : 100
    };
    // let finale = fieldName + fieldPostfix
    // person[fieldName] = 50;
    // return person;
}

person  = createPerson('john', 'sash', 'car', '-model')
console.log(person)




