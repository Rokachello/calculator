

let firstNumber = ""
let operator = ""
let secondNumber = ""
let contentOnScreen = ""
let calc = " "


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
       
    }
    console.log(firstNumber + " " + operator + " " + secondNumber + " = " + "")
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
    let first = firstNumber
    let second = secondNumber
    let op = operator
    firstNumber = result
    operator = ""
    secondNumber = ""
    updateContentOnScreen() 
    
    calc = first +" "+ op +" "+ second + " = " + contentOnScreen;
   document.querySelector(".calculation").textContent = calc
}
)

let clear = document.querySelector(`.clear`)
clear.addEventListener(`click`, () => 
        clearContentOnScreen() 
)

function clearContentOnScreen()  {
    console.log("clear")
    contentOnScreen = 0
    firstNumber = 0
    document.querySelector(".content").textContent = contentOnScreen;
}

function updateContentOnScreen() {
  
    contentOnScreen = firstNumber + operator + secondNumber; 
    document.querySelector(".content").textContent = contentOnScreen;
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

