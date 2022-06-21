const firstNum = parseInt(prompt("Enter the first number: "), 10);
const op = prompt("Enter an operator e.g + - * / : ");
const secondNum = parseInt(prompt("Enter the second number: "), 10);

if (op == "+") {
    alert(`Value is ${+firstNum + +secondNum}`);
} else if (op == "-") {
    alert(`Value is ${firstNum - secondNum}`);
} else if (op == "*") {
    alert(`Value is ${firstNum * secondNum}`);
} else if (op == "/") {
    alert(`Value is ${firstNum / secondNum}`);
} else {
    alert("Invalid operator!");
}
