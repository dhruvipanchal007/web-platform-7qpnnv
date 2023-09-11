console.log('Hello!');

const display = document.querySelector('#inputVal');
const buttons = document.querySelectorAll('.calc-btn');
let userInput = '';

const doCalculation = () => {
  // let [firstNum, operator, secondNum] = userInput;
  const ans = eval(userInput);
  return ans;
  //    const firstNum = +userInput[0];
  // const operator = userInput[1];
  // const secondNum = +userInput[2];

  // let ans = '';
  // switch (operator) {
  //   case '+':
  //     ans = +firstNum + +secondNum;
  //     break;
  //   case '*':
  //     ans = +firstNum * +secondNum;
  //     break;
  //   case '/':
  //     ans = +firstNum / +secondNum;
  //     break;
  //   case '-':
  //     ans = +firstNum - +secondNum;
  //     break;
  // }
  // return ans;
};

buttons.forEach((currBtn) => {
  currBtn.addEventListener('click', (event) => {
    if (event.target.innerText === '=') {
      const finalAns = doCalculation();
      display.value = finalAns;
      userInput = finalAns;
      // let xyz = finalAns;
      // firstNum = xyz;
    } 
    else if(event.target.input ==='Del'){
      debugger
      const cans=userInput.slice(0,-1); // mayur 0,2 = may
      display.value=cans;
    }
    else {
      userInput = userInput + event.target.innerText;
      display.value = userInput;
    }
  });
});


let d="123456"
let h=d.slice(0,-1);
console.log(h);