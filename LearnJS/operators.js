// Arithmetic operators: 
// +
// -
// *
// /
// %
// ++
// --

//coersion in JS ( Type conversion)
console.log(6+"9")
console.log(6-"9")
console.log(3+4+5+6+"6"+4+5)
console.log("3"+4+5+6+"6"+4+5)
console.log("anil"+"sonu")

price = 34567
delivery = undefined
totalamount = price + delivery

console.log(totalamount) //NaN ( not a number)

price = 34567
delivery = undefined
totalamount = price * delivery

console.log(totalamount) //NaN ( not a number)

console.log(34 - "20")
console.log(34 - "raju20")

//comparison operators - return true or false
// == , ===, >, <, <=, >=, 

console.log("Raju" == "raju") // Javascript case sensitive
console.log("2" == 2) // compares only values but not datatypes

// strict equal is ===
console.log(2 === 2)

console.log(7>="6")