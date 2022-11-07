//Create functuons for each operation: add, subtract, multiply and divide 


//helper functions
function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}
// console.log(subtract(2,3))

function multiply(num1, num2){
    return num1 * num2
}
// console.log(multiply(2,3))

function divide(num1, num2){
    return num1 / num2
}
    // console.log(divide (6,2))


    // create a function named operate that takes in 3 parameters: 2 numbers and the operation to be performed    

function operate(num1, num2, operator){
    operator = operator.toLowerCase()
    if(operator.toLowerCase() === 'add'){
        return add(num1, num2)
    }
    else if(operator.toLowerCase() === 'subtract'){
        return subtract(num1, num2)
    }
    else if(operator.toLowerCase() === 'multiply'){
        return multiply(num1, num2)
    }
    else if(operator.toLowerCase() === 'divide'){
        return divide(num1, num2)
    }
    else {
        return 'error operator not recognized'
    }
}
// console.log(operate(1,2,'test'))

let num1 = 0
let num2 = 0
let operatorButtonVal = ''

function equalsClicked(){
    num1 = document.querySelector('#num1').value 
    num1 = parseInt(num1)
    operatorButtonVal = document.querySelector('#operator').value
    num2 = document.querySelector('#num2').value
    num2 = parseInt(num2)

    let mathOperators = document.getElementById('operator')
    if(mathOperators.options[mathOperators.selectedIndex].value === "add"){
    document.getElementById("result").innerHTML = num1+num2} 
    if(mathOperators.options[mathOperators.selectedIndex].value === "subtract"){
    document.getElementById("result").innerHTML = num1 - num2}
    if(mathOperators.options[mathOperators.selectedIndex].value === "divide"){
    document.getElementById("result").innerHTML = num1 / num2} 
    if(mathOperators.options[mathOperators.selectedIndex].value === "multiply"){
    document.getElementById("result").innerHTML = num1 * num2}
}    
    