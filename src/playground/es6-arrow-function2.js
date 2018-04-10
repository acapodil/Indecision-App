// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    
    return a + b ;
}

console.log(add(55, 1, 1001));

// this keyword - no longer bound
const user = {
    name: 'Anthony',
    cities: ['Milwaukee', 'Marquette', 'Escanaba'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());


//challenge area

const multiplier = {
    //numbers - array of numbers
    numbers: [2, 4, 6],
    //multiplyBy - single number
    multiplyBy: 2,
    //method (multiply) - return newarray where numbers have been multiplied
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());