
//classes

class Person {
    constructor(name = 'Anonymous', age =  0){ //function default
        this.name = name;
        this.age = age;
    }

    getGreeting(){
       //template strings (es6 feature)
       return `Hi, I am ${ this.name }!`;
    }

    getDescription(){
        return ` ${this.name}: ${this.age} year(s) old.`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age); //calls parent constructor function
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    //override parent method
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is: ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age); //call the parent constructor
        this.homeLocation = homeLocation; //this  is  specific to TRAVELER subclass
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    //override parent method
    getGreeting(){
        let greeting = super.getGreeting();

        if(this.hasHomeLocation()){
            greeting += ` I am visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }

}


const me = new Traveler('Anthony Capodilupo', 27, 'Milwaukee');
const  other = new Traveler();

console.log(me.getGreeting());

console.log(other.getGreeting());