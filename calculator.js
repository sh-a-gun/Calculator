let calculation = "";

const output = document.getElementById("output");
const buttonContainer = document.getElementById("button-container");

const buttons = [
  "1", "2", "3", "+",
  "4", "5", "6", "-",
  "7", "8", "9", "*",
  "0", ".", "=", "/",
  "Clear"
];

function updateDisplay() {
  output.textContent = calculation || "0";
}

buttons.forEach(value => {
  const btn = document.createElement("button");
  btn.textContent = value;

  if (value === "Clear") {
    btn.id = "clear";
    btn.addEventListener("click", () => {
      calculation = "";
      updateDisplay();
    });
  } else if (value === "=") {
    btn.id = "equal";
    btn.addEventListener("click", () => {
      try {
        calculation = eval(calculation).toString();
      } catch {
        calculation = "Error";
      }
      updateDisplay();
    });
  } else {
    btn.classList.add("btn");
    btn.addEventListener("click", () => {
      calculation += value;
      updateDisplay();
    });
  }

  buttonContainer.appendChild(btn);
});
