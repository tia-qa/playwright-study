//1. Encapsulation - it is the process of wrapping the data and the code that manipulates the data into a single unit. It is used to hide the implementation details of the class from the outside world. It is used to protect the data from unauthorized access. It is used to achieve data hiding. It is used to achieve abstraction. It is used to achieve modularity. It is used to achieve reusability. It is used to achieve maintainability. It is used to achieve flexibility. It is used to achieve security. It is used to achieve polymorphism. It is used to achieve inheritance.
//binding the data between the methods and the variables of the class is called encapsulation. It is used to achieve data hiding. It is used to achieve abstraction. It is used to achieve modularity. It is used to achieve reusability. It is used to achieve maintainability. It is used to achieve flexibility. It is used to achieve security. It is used to achieve polymorphism. It is used to achieve inheritance. 

class employee {

    employeename;
    employeeplace;
    employeeid

    empdetails (employeename, employeeplace, employeeid) {
        this.employeename = employeename;
        this.employeeplace = employeeplace;
        this.employeeid = employeeid;
    }

    printEmpdetails() {
        console.log(this.employeename)
        console.log(this.employeeplace)
        console.log(this.employeeid)
    }
}

const emp1 = new employee()
emp1.empdetails("Suchita", "Bangalore", 1234)
//emp1.printEmpdetails
// console.log(emp1.employeename)
// console.log(emp1.employeeplace)
// console.log(emp1.employeeid)
emp1.printEmpdetails()
//node latest/LearnJS/oops.js
//node /Users/suchitak/Documents/learnPlayw


//coding principes
//1. DRY - Don't Repeat Yourself - it is a principle of software development that states that every piece of knowledge must have a single, unambiguous, authoritative representation within a system. It is used to avoid code duplication. It is used to improve code readability. It is used to improve code maintainability. It is used to improve code reusability. It is used to improve code flexibility. It is used to improve code security. It is used to improve code performance. It is used to improve code scalability. It is used to improve code testability. It is used to improve code reliability. It is used to improve code robustness. It is used to improve code extensibility. It is used to improve code modularity. It is used to improve code readability.
//2. KISS - Keep It Simple Stupid - it is a principle of software development that states that most systems work best if they are kept simple rather than made complicated. It is used to improve code readability. It is used to improve code maintainability. It is used to improve code reusability. It is used to improve code flexibility. It is used to improve code security. It is used to improve code performance. It is used to improve code scalability. It is used to improve code testability. It is used to improve code reliability. It is used to improve code robustness. It is used to improve code extensibility. It is used to improve code modularity. It is used to improve code readability.
//3. YAGNI - You Ain't Gonna Need It - it is a principle of software development that states that a programmer should not add functionality until it is necessary. It is used to avoid over engineering. It is used to avoid unnecessary complexity. It is used to avoid unnecessary code. It is used to avoid unnecessary features. It is used to avoid unnecessary functionality. It is used to avoid unnecessary performance. It is used to avoid unnecessary scalability. It is used to avoid unnecessary testability. It is used to avoid unnecessary reliability. It is used to avoid unnecessary robustness. It is used to avoid unnecessary extensibility. It is used to avoid unnecessary modularity. It is used to improve code readability.
//4. SOLID - it is a principle of software development that states that a programmer should design software that is easy to maintain and extend. It is used to improve code readability. It is used to improve code maintainability. It is used to improve code reusability. It is used to improve code flexibility. It is used to improve code security. It is used to improve code performance. It is used to improve code scalability. It is used to improve code testability. It is used to improve code reliability. It is used to improve code robustness. It is used to improve code extensibility. It is used to improve code modularity. It is used to improve code readability.
//5. Separation of Concerns - it is a principle of software development that states that a programmer should design software that is easy to maintain and extend. It is used to improve code readability. It is used to improve code maintainability. It is used to improve code reusability. It is used to improve code flexibility. It is used to improve code security. It is used to improve code performance. It is used to improve code scalability. It is used to improve code testability. It is used to improve code reliability. It is used to improve code robustness. It is used to improve code extensibility. It is used to improve code modularity. It is used to improve code readability.

//     2.  Inheritance - it is the process of creating a new class from an existing class. It is used to achieve code reusability. It is used to achieve code maintainability. It is used to achieve code flexibility. It is used to achieve code security. It is used to achieve code performance. It is used to achieve code scalability. It is used to achieve code testability. It is used to achieve code reliability. It is used to achieve code robustness. It is used to achieve code extensibility. It is used to achieve code modularity. It is used to improve code readability.
  // sinngle level inheritance, 
  // multilevel inheritance, 
  // hierarchical inheritance, 
  // multiple inheritance (not supported in JS),
  // hybrid inheritance

  //polymorphism - it is the process of using a single interface to represent different types of data. It is used to achieve code reusability. It is used to achieve code maintainability. It is used to achieve code flexibility. It is used to achieve code security. It is used to achieve code performance. It is used to achieve code scalability. It is used to achieve code testability. It is used to achieve code reliability. It is used to achieve code robustness. It is used to achieve code extensibility. It is used to achieve code modularity. It is used to improve code readability.
  //method overloading - it is the process of using a single method name to represent different types of data. It is used to achieve code reusability. It is used to achieve code maintainability. It is used to achieve code flexibility. It is used to achieve code security. It is used to achieve code performance. It is used to achieve code scalability. It is used to achieve code testability. It is used to achieve code reliability. It is used to achieve code robustness. It is used to achieve code extensibility. It is used to achieve code modularity. It is used to improve code readability.
  //method overriding - it is the process of using a single method name to represent different types of data in the child class. It is used

  //prototyping - it is the process of creating a new object from an existing object. It is used to achieve code reusability. It is used to achieve code maintainability. It is used to achieve code flexibility. It is used to achieve code security. It is used to achieve code performance. It is used to achieve code scalability. It is used to achieve code testability. It is used to achieve code reliability. It is used to achieve code robustness. It is used to achieve code extensibility. It is used to achieve code modularity. It is used to improve code readability.