

let firstNumber = ""
let operator = ""
let secondNumber = ""
let contentOnScreen = firstNumber + operator + secondNumber
let calc = firstNumber + " " + operator + " " + secondNumber + "xx"


// add click listeners for numbers
let numbers = document.querySelectorAll(".num");
console.log(numbers);
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    const choosenDigit = number.textContent
    if(operator === ""){
        firstNumber = firstNumber + choosenDigit
        console.log("firstNumber" + firstNumber)
    } else {
        secondNumber = secondNumber + choosenDigit
        console.log("xx" + contentOnScreen)
    }
    console.log(firstNumber + " " + operator + " " + secondNumber)
    updateContentOnScreen() 
   
});
});

// add click listeners for operators
let operations = document.querySelectorAll(".operation");
operations.forEach((operation) => {
    operation.addEventListener('click', () => {
    const choosenOperation = operation.textContent
    operator = choosenOperation
    updateContentOnScreen() 
    
});
});

let calculate = document.querySelector(`.big-button`)
calculate.addEventListener(`click`, () => {
   const result = operate(firstNumber,operator,secondNumber)
    firstNumber = result
    operator = ""
    secondNumber = ""
    updateContentOnScreen() 
}
)




function updateContentOnScreen() {
    contentOnScreen = firstNumber + operator + secondNumber;
    document.querySelector(".content").textContent = contentOnScreen;
   document.querySelector(".calculation").textContent = calc
  }

function operate(a,operator,b){
let result = null
    switch (operator) {

        case '+':
            result = add(a,b)
        break;
        case '−':
            result = subtract(a,b)
        break;
        case 'x':
            result = multiply(a,b)
        break;
        case '÷':
            result = divide(a,b)
        break;
        default:
         result = "ERROR"
      }

      return result
      
}


function add(a,b){
    a = Number(a)
    b = Number(b)
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