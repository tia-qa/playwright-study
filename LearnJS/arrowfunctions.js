function printMessage() 
{
    console.log("this is simplet")
}

printMessage()

printMessage = () => console.log("this")
printMessage()


function printGreetMessage(name)
{
    console.log ("Hi"+name)
}

printGreetMessage = name => console.log ("Hi"+name)
printGreetMessage = (name = 'Suchita') => console.log ("Hi"+name)

printGreetMessage()

function add(num1,num2){
    console.log(num1)
        console.log(num2)
    console.log(num1+num2)

}

add = (num1,num2) => {
    console.log(num1)
        console.log(num2)
    console.log(num1+num2)
}

add(46483,399)
//callback function
//higher order function
//closure function