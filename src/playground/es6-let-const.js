var nameVar = 'Anthony';
var nameVar = 'Gabs';
console.log('nameVar: ', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet: ', nameLet);

const nameConst = 'Frank';
console.log("nameConst: ", nameConst);

//block scoping

const fullName = 'Jen Mead';
letfirstName;

if (fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);