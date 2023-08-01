

let firstnumber = 0
let operator = null
let secondnumber = null

function operate(a,operator,b){
let result = null
    switch (operator) {

        case '+':
            result = add(a,b)
        break;
        case '-':
            result = subtract(a,b)
        break;
        case '*':
            result = multiply(a,b)
        break;
        case '/':
            result = divide(a,b)
        break;
        default:
         result = "ERROR"
      }

      return result
      
}


function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}


let plus = add(3, 4)
let minus = subtract(5, 2)
let mult = multiply(3, 7)
let divi = divide(15,4)
let test1 = operate(4,"+",8)
let test2 = operate(4,"-",8)
let test3 = operate(4,"*",8)
let test4 = operate(4,"/",8)
let test5 = operate(4,"x",5)

console.log(plus, minus, mult, divi)
console.log(test1, test2, test3,test4, test5)