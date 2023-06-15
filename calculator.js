/*++++++++++++++++++
Below code handles the 
input using buttons
--------------------*/

/* Goal: we want after entering two operands and one operator the result is calculated for further action
--------------------*/

const btns = document.querySelectorAll("button");
const input = document.querySelector("input");

let operator_exists = false;
let can_eval = false;
let number = "";
let res;

/* check if operator is present than evaluate the expressin or vice versa.
--------------------*/
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const inp = parseInt(btn.getAttribute("value"));

    switch (inp) {
      case 11:
        if (operator_exists && can_eval) {
          if (evaluate()) {
            break;
          }
          !operator_exists;
        }
        number = number + "+";
        operator_exists = true;
        can_eval = false;
        break;
      case 12:
        if (operator_exists && can_eval) {
          if (evaluate()) {
            break;
          }
          !operator_exists;
        }
        number = number + "-";
        operator_exists = true;
        can_eval = false;
        break;
      case 13:
        if (operator_exists) {
          if (evaluate()) {
            break;
          }
          !operator_exists;
        }
        number = number + "*";
        operator_exists = true;
        can_eval = false;
        break;
      case 14:
        if (operator_exists) {
          if (evaluate()) {
            break;
          }
          !operator_exists;
        }
        number = number + "/";
        operator_exists = true;
        can_eval = false;
        break;
      case 16:
        number = number + ".";
        break;
      case 17:
        number = "";
        break;
      case 99:
        evaluate();
        break;

      default:
        can_eval = true;
        number = number + inp;
    }
    function evaluate() {
      try {
        const result = eval(number);
        number = result;
      } catch (e) {
        alert("invalid input");
        number = "";
        return 1;
      }
    }
    input.value = number;
  });
});

/*++++++++++++++++++
Below code handles operation using keyboard
--------------------*/

function handleEvent(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSubmit();
  }
}

function handleSubmit() {
  const exp = input.value;
  try {
    res = eval(exp);
  } catch (e) {
    alert("Invalid Input");
  }
  input.value = res;
}

/*++++++++++++++++++
MOOD CHANGE
--------------------*/

const icon = document.getElementById("icon");
const body = document.getElementById("body");

icon.onclick = function () {
  document.body.classList.toggle("Dark");

  if (document.body.classList.contains("Dark")) {
    icon.src = "sun.png";
    input.classList.add("input-night");
    body.classList.add("body-night");
  } else {
    input.classList.remove("input-night");
    body.classList.remove("body-night");
    icon.src = "moon.png";
  }
};
