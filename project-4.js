const boxtext = document.querySelector("#text-show");

const passlen = document.querySelector("#pass-len");

const upper = document.querySelector("#upper");
const lower = document.querySelector("#lower");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbol");

const button = document.querySelector("#button");

button.addEventListener("click", () => generatePass());

function generateRandom(set = "") {
  return set.charAt(Math.floor(Math.random() * set.length));
}

function showPass(password) {
  function shuffle(password) {
    return password
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
  }
  boxtext.value = shuffle(password);
}

function generatePass(password = "") {
  let allSet = "";
  const UpperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LowerSet = "abcdefghijklmnopqrstuvwxyz";
  const numberSet = "123456789";
  const symbolSet = "!@#$%&";

  if (upper.checked) {
    password += generateRandom(UpperSet);
    console.log("upper" + password);

    allSet += UpperSet;
  }
  if (lower.checked) {
    password += generateRandom(LowerSet);
    console.log("lower" + password);
    allSet += LowerSet;
  }
  if (number.checked) {
    password += generateRandom(numberSet);
    console.log("number" + password);
    allSet += numberSet;
  }
  if (symbol.checked) {
    password += generateRandom(symbolSet);
    console.log(password);
    allSet += symbolSet;
  }

  if (!upper.checked && !lower.checked && !number.checked && !symbol.checked) {
    boxtext.value = "Please select any one";
    return;
  }
  console.log(password.length);
  console.log("passlenvalue" + passlen.value);

  while (password.length < passlen.value) {
    password += generateRandom(allSet);
    console.log(password.length + " is length and password is " + password);
  }

  showPass(password);
}
