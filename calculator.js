/*++++++++++++++++++
Below code handles the 
input using buttons
--------------------*/

/* Goal: we want after entering two operands and one operator the result is calculated for further action
--------------------*/

const btns = document.querySelectorAll("button");
const input = document.querySelector("input");

// "pres" hold if there is already operator in the String.
// "first_no" holds if already number exists or No (for + , -)

let pres = false;
let first_no = false;
let number = "";
let res;

/* check if operator is present than evaluate the expressin or vice versa.
--------------------*/
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const inp = parseInt(btn.getAttribute("value"));

    switch (inp) {
      case 11:
        if (pres && first_no) {
          if (evaluate()) {
            break;
          }
          !pres;
        }
        number = number + "+";
        pres = true;
        break;
      case 12:
        if (pres && first_no) {
          if (evaluate()) {
            break;
          }
          !pres;
        }
        number = number + "-";
        pres = true;
        break;
      case 13:
        if (pres) {
          if (evaluate()) {
            break;
          }
          !pres;
        }
        number = number + "*";
        pres = true;
        break;
      case 14:
        if (pres) {
          if (evaluate()) {
            break;
          }
          !pres;
        }
        number = number + "/";
        pres = true;

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
        first_no = true;
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
