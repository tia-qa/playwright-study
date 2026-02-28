class calculator {
    add(num1, num2) {
        console.log(num1+num2)
    }
    subtract(num1, num2) {
        console.log(num1-num2)
    }
    multiply(num1, num2) {
        console.log(num1*num2)
    }
    divide(num1, num2) {
        console.log(num1/num2)
    }
}

//create object or instance of this class
const calc = new calculator()
calc.add(5,3)
calc.subtract(5,3)
calc.multiply(5,3)
calc.divide(50,5)

class classname {
    //variables
    x = "Suchita"
    y = "Kumar"
    //methods
    constructor() {
        console.log("this is simple method")
    }
}
const classnameobj = new classname()
console.log(classnameobj)

//constructor - it is a special method which gets executed when we create an object of the class. It is used to initialize the variables of the class. It is called automatically when we create an object of the class. It is used to assign values to the variables of the class. It is used
const class2 = new classname()

//constructor with parameters
class classname2 {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }
}
const class2obj = new classname2("Suchita", "Singh")
console.log(class2obj.name)
console.log(class2obj.surname)

//this keyword - it is used to refer to the current object. It is used to access the variables and methods of the current object. It is used to differentiate between the local variables and the instance variables of the class. It is used to call the methods of the current object. It is used to return the current object from a method. It is used to pass the current

class student {
    x = "Suchita"
    static y = "Singh"

    m1() {
        console.log("this is m1 method")
    }

    static m2() {
        console.log("this is m2 method")
    }
    m3() {
        console.log("this is m3 method")
    }
    static m4() {
        console.log("this is m4 method")
    }
    m5() {
        console.log("this is m5 method")
        this.m1()
        this.m3()
    }
}
const stu1 = new student()
console.log(stu1.x)
console.log(stu1.y)
console.log(student.y)
console.log(student.m4())
stu1.m5()

//OOPS - Object Oriented Programming System
//4 pillars of OOPS - Encapsulation, Inheritance, Polymorphism, Abstraction (prototype based inheritance in JS)

//OOPS supported by JS - class, object, constructor, this keyword, static keyword, super keyword, method overriding, method overloading, abstraction, encapsulation, inheritance, polymorphism
//interface, abstraction not supported by JS but can be achieved by using abstract class and method overriding
//multiple inheritance not supported by JS but can be achieved by using mixins