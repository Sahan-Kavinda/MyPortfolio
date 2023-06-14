function appendValue(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  var result = document.getElementById("result").value;
  var calculatedResult = eval(result);
  document.getElementById("result").value = calculatedResult;
}

function clearResult() {
  document.getElementById("result").value = "";
}

