const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 계산 함수
function calculate(num1, num2, operator) {
    switch (operator) {
    case "+":
        return num1 + num2;
    case "-":
        return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
        if (num2 === 0) {
        return "0으로 나눌 수 없습니다.";
        }
        return num1 / num2;
    default:
        return "잘못된 연산자입니다.";
    } 
}

// 입력 받기
rl.question("첫 번째 숫자를 입력하세요: ", (input1) => {
  rl.question("연산자 (+, -, *, /)를 입력하세요: ", (operator) => {
    rl.question("두 번째 숫자를 입력하세요: ", (input2) => {

        const num1 = parseFloat(input1);
        const num2 = parseFloat(input2);

        const result = calculate(num1, num2, operator);

        console.log(`결과: ${result}`);

    rl.close();
    });
  });
});