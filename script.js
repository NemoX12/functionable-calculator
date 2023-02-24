let input = document.getElementById('input');

function insertValue(val) {
  input.value += val;
}

function clearInput() {
  input.value = '';
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
  let expression = input.value;
  let result = eval(expression);
  input.value = result;
}
