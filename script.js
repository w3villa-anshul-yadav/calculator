let control = document.getElementsByClassName("control-button")[0].children;
let screenElem = document.getElementById("screen");
for (let i = 0; i < control.length; i++) {
  control[i].addEventListener("click", function () {
    if (this.innerText == "AC") {
      clickAnimation(this);
      clearAllScreen();
    } else if (this.innerText == "C") {
      if (screenElem.innerText.length == 1) {
        clearAllScreen();
      } else {
        clickAnimation(this);
        clearScreen();
      }
    }
  });
}
let operatorController =
  document.getElementsByClassName("operator-container")[0].children;
for (let i = 0; i < operatorController.length; i++) {
  operatorController[i].addEventListener("click", function () {
    let operator = operatorController[i].innerText;
    clickAnimation(operatorController[i]);
    if (screenElem.innerHTML == "0") {
      if (operator == "-") screenElem.innerText = operator;
    } else if (
      isOperator(
        screenElem.innerHTML.substring(screenElem.innerText.length - 1)
      )
    ) {
      setScreenValue(
        screenElem.innerText.slice(0, screenElem.innerText.length - 1) +
          operator
      );
    } else {
      updateScreenValue(operator);
    }
  });
}
let numberInput = document.getElementById("number").children;
for (let i = 0; i < numberInput.length; i++) {
  numberInput[i].addEventListener("click", function () {
    let num = numberInput[i].innerText;
    let screen = document.getElementById("screen");
    clickAnimation(numberInput[i]);
    if (num == ".") {
      if (ishavingpoint(screenElem.innerText)) {
      } else {
        updateScreenValue(num);
      }
    } else if (num != "=") {
      if (screenElem.innerText.length == 1 && screenElem.innerText == "0") {
        setScreenValue(num);
      } else updateScreenValue(num);
    } else {
      if (Number.isInteger(eval(screenElem.innerText))) {
        setScreenValue(eval(screenElem.innerText));
      } else {
        setScreenValue(eval(screenElem.innerText).toFixed(5));
      }
    }
  });
}
function updateScreenValue(num) {
  if (num == "." && screenElem.innerText.includes(".")) {
  }
  screenElem.innerText += num;
}
function setScreenValue(num) {
  document.getElementById("screen").innerText = num;
}
function isOperator(ope) {
  return ope == "+" || ope == "-" || ope == "*" || ope == "/";
}
function ishavingpoint(value) {
  for (let i = value.length - 1; i >= 0; i--) {
    if (
      value[i] == "+" ||
      value[i] == "-" ||
      value[i] == "*" ||
      value[i] == "/"
    ) {
      return false;
    } else if (value[i] == ".") {
      return true;
    }
  }
}
function clearAllScreen() {
  document.getElementById("screen").innerHTML = "0";
}
function clearScreen() {
  let screenElem = document.getElementById("screen");
  let screenValue = screenElem.innerText;
  if (screenValue != 0) {
    screenElem.innerText = screenValue.substring(0, screenValue.length - 1);
  }
}
function clickAnimation(elem) {
  elem.classList.toggle("on-click-bg");
  setTimeout(function () {
    elem.classList.toggle("on-click-bg");
    elem.style.transition = ".3s ease";
  }, 100);
}
