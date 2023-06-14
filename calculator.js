/*++++++++++++++++++
Below code handles the 
input using buttons
--------------------*/

/* APPROACH: As we want to evalute first two expressions(10*8+6) given in string and replace them by result(80+6).
So we use stack approach.
--------------------*/

const btns = document.querySelectorAll("button");
const input = document.querySelector("input");

let pres = false;
let first_no = false;
let number = "";
let res;

/* Below we add eventlistener and on evey button press update "number" variable. When any operand is added(*,-) 
we push number into "arr" and reset number
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

      /* TASK: on pressing "=" button first exp is evaluated.
 Approach: get first three array elements evaluate them and push result again in array.
--------------------*/
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
