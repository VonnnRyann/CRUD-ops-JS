//syntax + concept

//syntax ==> object literal
//{key: value} ==> this is a property of an object!!
// let newObj = {}

//object contructor:
//ex. let objectVar = new Object();

let myObj = {};

console.log(myObj);

let itsCar = 'Ferrari';


let myCar = {
    brand: 'Ferrari',
    color: 'black',
    engine: 'V12'
}

console.log('itsCar:', itsCar);
console.log('myCar', myCar);

let copyMyCar = itsCar;
console.log('copyMyCar:', copyMyCar);

notMyCar = 'Toyota';
myCar.brand = 'Toyota';

///////////////////// CREATE!!
let myPhone = {
    brand: 'Nokia',
    color: 'red',
    model: 's14'
}

let myHandy = new Object({
    brand: 'Nokia',
    color: 'red',
    model: 's14'
});

console.log('myPhone ', myPhone);
console.log('myHandy ', myHandy);

/////////////////////////////7

//CRUD ==> CREATE, READ, UPDATE, DELETE

//READ PARTS!!

console.log('myPhone:', myPhone.color);
console.log('myPhone:', myPhone['brand']);

let keyName = 'color';

console.log('myPhone:', myPhone.keyName); // this is not possible!!
console.log('myPhone:', myPhone[keyName]);

//UPDATE PARTS!!
myPhone.color = 'black'
console.log('myPhone ', myPhone);

myPhone['color'] = 'yellow'
console.log('myPhone ', myPhone);

myPhone.keyName = 'blue'
console.log('myPhone ', myPhone);

myPhone['keyName'] = 'orange'
console.log('myPhone ', myPhone);

//myPhone['keyName'] = 'blue' ====> this is a bad habit
//console.log('myPhone ', myPhone);

// DELETE PARTS

delete myPhone.brand;
console.log('1: ', myPhone);

delete myPhone['color'];
console.log('2: ', myPhone);

delete myPhone['keyName'];
console.log('3: ', myPhone);

delete myPhone['model'];
console.log('4: ', myPhone);