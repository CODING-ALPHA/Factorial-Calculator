"use strict";

const result = document.querySelector(".result");
const input = document.querySelector(".input");
const clearBtn = document.querySelector(".clear-btn");
const checkBtn = document.querySelector(".solve-btn");

checkBtn.addEventListener("click", function (event) {
  const number = parseInt(input.value);
  // coditional statements for from validation
  if (number < 0) {
    result.textContent = "Invalid input.";
    input.style.borderColor = "red";
    result.style.borderColor = "red";
    console.log("invalid");
  } else if (number === 0) {
    result.textContent = 1;
    input.style.borderColor = "black";
    result.style.borderColor = "black";
  } else if (input.value.trim() === "") {
    event.preventDefault();
    result.textContent = "Please enter a value.";
    result.style.borderColor = "red";
    input.style.borderColor = "red";
  } else {
    let ans = 1;
    for (let i = 1; i <= number; i++) {
      ans *= i;
      console.log(ans);
      result.textContent = `${number}! is ${ans}`;
      input.style.borderColor = "black";
      result.style.borderColor = "black";
      // result.textContent = ans;
    }
  }
});

// code for the clear button to reset app to default
clearBtn.addEventListener("click", function () {
  result.textContent = "";
  input.value = "";
  input.style.borderColor = "black";
  result.style.borderColor = "black";
});
