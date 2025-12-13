const display = document.getElementById("display");
const preview = document.getElementById("preview");
const MAX_DIGITS = 15;
let expression = "";
let solution = null;

function appendToDisplay(char) {
  if (display.value.length + 1 > MAX_DIGITS) return;

  display.value = display.value === "0" || display.value == 'Error' ? char : display.value + char;
  preview.textContent =
    preview.textContent === "0" ? char : preview.textContent + char;
}

resetDisplay();

function resetDisplay() {
  display.value = "0";
  preview.textContent = "";
}

document.querySelectorAll(".btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const value = this.value;

    if (value === "C") {
      handleClear();
    } else if (value === "%") {
      handlePercentage();
    } else if (value === "Back") {
      handleBackspace();
    } else if (value === "=") {
      handleEquals();
    } else if (["+", "-", "*", "/"].includes(value)) {
      handleOperator(value);
    } else if (!isNaN(value)) {
      handleNumber(value);
    } else if (value === ".") {
      handleDecimal();
    }
  });
});

function handleClear() {
  resetDisplay();
}

function handlePercentage() {
  if (display.value === "0") return;
  try {
    let current = parseFloat(display.value);
    if (isNaN(current)) return;
    let percent = current / 100;
    display.value = percent;
    let exp = preview.textContent;
    exp = exp.replace(/(\d+\.?\d*)$/, percent);
    preview.textContent = exp;
  } catch (e) {
    display.value = "Error";
    preview.textContent = "";
  }
}

function handleBackspace() {
  if (display.value.length === 1) {
    resetDisplay();
  } else {
    display.value = display.value.slice(0, -1);
    preview.textContent = preview.textContent.slice(0, -1);
  }
}

function handleEquals() {
  try {
    if (!preview.textContent || /[+\-*/.]$/.test(preview.textContent)) {
      display.value = "Error";
      return;
    }
    let result = eval(preview.textContent);
    if (result === Infinity || result === -Infinity || isNaN(result)) {
      display.value = "Error";
      return;
    }
    solution = result;
    display.value = solution;
  } catch (e) {
    display.value = "Error";
  }
}

function handleOperator(operator) {
  if (isNaN(parseInt(preview.textContent.at(-1)))) return;
  if (solution !== null) {
    preview.textContent = solution;
    solution = null;
  }

  display.value = "0";
  preview.textContent += operator;
}

function handleNumber(number) {
  if (solution !== null) {
    resetDisplay();
    solution = null;
  }
  appendToDisplay(number);
}

function handleDecimal() {
  if (display.value === "0") {
    appendToDisplay("0.");
  } else if (!display.value.includes(".")) {
    appendToDisplay(".");
  }
}
