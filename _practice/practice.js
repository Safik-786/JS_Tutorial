const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log("Basic Calculator");
  
  const num1 = parseFloat(await askQuestion("Enter the first number: "));
  const operator = await askQuestion("Enter the operator (+, -, *, /): ");
  const num2 = parseFloat(await askQuestion("Enter the second number: "));

  let result;
  
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        console.log("Error: Division by zero is not allowed.");
        rl.close();
        return;
      }
      break;
    default:
      console.log("Error: Invalid operator.");
      rl.close();
      return;
  }

  console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
  rl.close();
}

main();