const display = document.getElementById("display");
const preview = document.getElementById("preview");
const MAX_DIGITS = 15;
let expression = "";

function appendToDisplay(char) {
  if (display.value.length + 1 > MAX_DIGITS) return;

  display.value = display.value === "0" ? char : display.value + char;
  preview.textContent =
    preview.textContent === "0" ? char : preview.textContent + char;
}

resetDisplay();

function resetDisplay() {
  display.value = "0";
  preview.textContent = "0";
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

function handlePercentage() {}

function handleBackspace() {
  if (display.value.length === 1) {
    resetDisplay();
  } else {
    display.value = display.value.slice(0, -1);
    preview.textContent = preview.textContent.slice(0, -1);
  }
}

function handleEquals() {
  console.log(
    "Expression:",
    preview.textContent,
    " = ",
    eval(preview.textContent)
  );
}

function handleOperator(operator) {
  // appendToDisplay(operator);
}

function handleNumber(number) {
  appendToDisplay(number);
}

function handleDecimal() {
  if (display.value === "0") {
    appendToDisplay("0.");
  } else if (!display.value.includes(".")) {
    appendToDisplay(".");
  }
}
