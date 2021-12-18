class Person {
    constructor(name ='Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi. I am ${ this.name }!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age , major){
        super(name,age);
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            return description += ` Their major of ${this.major}`
        }else {
            return description} 
    
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name,age)
        this.homeLocation = homeLocation
    }
    getGreeting(){
        let greeting = super.getGreeting()
        if(this.homeLocation){
            return greeting += ` I'm visiting from ${this.homeLocation}`
        } else {
        return greeting
    }
}
}

const me = new Traveler('Ahmed Mamdouh',26, 'Cairo');
console.log(me)
console.log(me.getGreeting())

const other = new Traveler();
console.log(other)
console.log(other.getGreeting())