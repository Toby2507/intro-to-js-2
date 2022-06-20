const firstNum = prompt("Enter the first number: ");
const secondNum = prompt("Enter the second number: ");
const op = prompt("Enter an operator e.g + - * / : ");

if (op == "+") {
    alert(`Value is ${firstNum + secondNum}`)
} else if (op == "-") {
    alert(`Value is ${firstNum - secondNum}`)
} else if (op == "*") {
    alert(`Value is ${firstNum * secondNum}`)
} else if (op == "/") {
    alert(`Value is ${firstNum / secondNum}`)
} else {
    alert("Invalid operator!")
}