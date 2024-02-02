// const computer = {
//     processor: 'Ryzen',
//     price: 48000,
//     ssd: '250gb',
//     monitor: 'hp'
// }
// const keys = Object.keys(computer);
// console.log(keys)

const mobile = {
    brand: 'Samsung',
    color: 'black',
    price: 25000,
    display: '6.5inch',
    isNew: true,
}

// console.log(mobile(brand))

for(const prop in mobile){
    console.log(prop,' :', mobile[prop])
}
// Object.create
// var person = {};
// person.name = 'John';
// person.age = 30;
// console.log(person)


// let str = 'Mississippi';
// console.log(str.indexOf('i',3))

// const myObject = {
//     a: 1,
//     b: 2,
//     c: 3
//   };
  
//   for (let prop in myObject) {
//     console.log(myObject[prop]);
//   }

// const x = ""
// if(!x.length){
// console.log("Hey")
// }else{
// console.log("Hi")
// }