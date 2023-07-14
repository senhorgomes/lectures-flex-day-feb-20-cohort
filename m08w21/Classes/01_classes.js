//Before classes
const newStudentObject = {
    name: "Megan",
    favIceCream: "Chocolate Peanut Butter",
    sayHello: () => console.log('Hello, my name is ' + newStudentObject.name + ' , my favourite ice cream is ' + newStudentObject.favIceCream)
}

const anotherNewStudentObject = {
    name: "Ian",
    favIceCream: "Cherry Garcia",
    sayHello: () => console.log('Hello, my name is ' + anotherNewStudentObject.name + ' , my favourite ice cream is ' + anotherNewStudentObject.favIceCream)
}
anotherNewStudentObject.sayHello()

//After classes

class StudentObject {
    constructor(name, favIceCream){
        this.name = name;
        this.favIceCream = favIceCream;
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name} and my favourite icecream is ${this.favIceCream}.`)
    }
}

const newStudent = new StudentObject('Gord', 'Netflix and Chill\'d')

newStudent.sayHello()


//Inheritance
////Is to create classes that are based on other classes
//To grab the area of a square, it is length * length
class Square {
    constructor (length){
        this.length = length;
    }
    area(){
        return this.length * this.length;
    }
}

const calculateAreaOfSquare = new Square(3);
console.log("Square Area = ", calculateAreaOfSquare.area())

//Rectangle -> area? L X W
////We are now going to build a blueprint, from another blueprint
class Rectangle extends Square {
    constructor (length, width){
        super(length);
        this.width = width;
    }
    area(){
        return this.length * this.width;
    }
}

const calculateAreaOfRectangle = new Rectangle(3, 4);
console.log("Rectangle Area = ", calculateAreaOfRectangle.area())
//Area for a triangle 0.5*(base * height)
class Triangle extends Rectangle {
    constructor(){
        super()
    }

    area(){
        return 0.5 * (this.length * this.width)
    }
}
new Triangle(3,4)
const calculateAreaOfTriangle = new Triangle(3, 4);
console.log("Triangle Area = ", calculateAreaOfTriangle.area())
