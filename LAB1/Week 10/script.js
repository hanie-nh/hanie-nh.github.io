function calculate(operation) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const resultElement = document.getElementById('result');
  
    if (num1 === '' || num2 === '') {
      resultElement.textContent = 'Inputs cannot be empty.';
      resultElement.style.color = 'red';
      return;
    }
  
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
  
    if (operation === '/' && n2 === 0) {
      resultElement.textContent = 'Cannot divide by 0.';
      resultElement.style.color = 'red';
      return;
    }
  
    let result;
    switch (operation) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        result = n1 / n2;
        break;
      default:
        result = 'Invalid operation';
    }
  
    resultElement.textContent = `Result: ${result}`;
    resultElement.style.color = 'green';
  }