console.log('Hello!');

const display = document.querySelector('#inputVal');
const buttons = document.querySelectorAll('.calc-btn');
let userInput = '';

const doCalculation = () => {
  /* const firstNum = +userInput[0];
const operator = userInput[1];
const secondNum = +userInput[2]; */
  const [firstNum, operator, secondNum] = userInput;

  let ans = '';
  switch (operator) {
    case '+':
      ans = firstNum + secondNum;
      break;
    case '*':
      ans = firstNum * secondNum;
      break;
      case '/':
      ans = firstNum / secondnum;
      break;
      case '-':
      ans = firstNum-secondNum;
      break;
  }
  return ans;
};

buttons.forEach((currBtn) => {
  currBtn.addEventListener('click', (event) => {
    userInput = userInput + event.target.innerText;
    display.value = userInput;

    if (event.target.innerText === '=') {
      const finalAns = doCalculation();
      display.value = finalAns;
    }
  });
});
