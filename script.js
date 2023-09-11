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
    //  
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
    } else if (event.target.innerText === 'Del') {
      const cans = userInput.slice(0, -1); // mayur 0,2 = may
      userInput = cans;
      display.value = userInput;
    } else if (event.target.innerText === 'C') {
      userInput = '';
      display.value = '0';
    } 
    else if(event.target.innerText==='%'){
      const ans=doCalculation();
      const percentage=ans/100;
      display.value=percentage;
    }
    else {
      userInput = userInput + event.target.innerText;
      display.value = userInput;
    }
  });
});
