document.addEventListener("DOMContentLoaded", function () {

    var display = document.getElementById("display");
    var buttons = document.querySelectorAll(".btn");
  
    var currentInput = "";
  
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {

        if (button.textContent === "CE") {
          currentInput = currentInput.slice(0, -1);

        } else if (button.textContent === "AC") {
          currentInput = "";

        } else if (button.textContent === "=") {

          try {
            currentInput = eval(currentInput).toString();
          } catch (error) {
            currentInput = "Error";
          }

        } else {
          currentInput += button.textContent;
        }
        
          display.value = currentInput;
      });
    });
  });