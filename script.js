function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (value === 'del') {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += value;
    }
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculateResult() {
    const expression = document.getElementById('display').value;
    try {
      const result = eval(expression);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  