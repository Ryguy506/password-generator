// variables for user inputs
var enter;
var confirmNum;
var confirmUp;
var confirmLow;
var confirmSym;
// variables with strings for password character set
var sym = "!@#$%^&*()_-+=<>?{}[]|/~";
var number = "12345678901234567890";
var chars = "abcefghijklmnopqrstuvwxyz";
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// password with no value yet
var password = " "
// variable for string concatenation
var choices;
// fuction to generate password
function generatePassword() {
// prompt to choose length of password 
  enter = prompt("Choose password character length");

// if nothing is entered alerts then recalls func
  if (!enter) {
    alert("This needs a number value!")
    generatePassword();
  }
// if characters that are NaN are entered alerts then recalls func 
  else if (isNaN(enter)) {
    enter = alert("Enter a number!")
    generatePassword();
  }
// if the number entered is less than 8 or greater than 128 characters alerts then recalls func
  else if (enter < 8 || enter > 128) {
    enter = alert("Must be between 8 and 128 characters!")
    generatePassword();

  } else {
    // truthy / falsy for else ifs
    confirmNum = confirm("Do you want numbers included")
    confirmSym = confirm("Do you want symbols included")
    confirmUp = confirm("Do you want uppercase included")
    confirmLow = confirm("Do you want lowercase included")
  
  };
// if no choices are picked alerts then recalls func
  if (!confirmNum && !confirmSym && !confirmLow && !confirmUp) {
    choices = alert("You need to pick an option!");
    generatePassword()
  }
  // 4 choices are picked
  else if (confirmNum && confirmSym && confirmLow && confirmUp) {
    choices = chars.concat(number, sym, chars2);

    // 3 choices picked
  }
  else if (confirmSym && confirmLow && confirmUp) {
    choices = chars.concat(sym, chars2);

  }
  else if (confirmNum && confirmLow && confirmUp) {
    choices = chars.concat(number, chars2);

  }
  else if (confirmNum && confirmLow && confirmSym) {
    choices = chars.concat(number, sym);

  }
  else if (confirmNum && confirmUp && confirmSym) {
    choices = number.concat(chars2, sym);

    //  2 choices picked
  }
  else if (confirmLow && confirmSym) {
    choices = chars.concat(sym);
  }
  else if (confirmLow && confirmUp) {
    choices = chars.concat(chars2);
  }
  else if (confirmLow && confirmNum) {
    choices = chars.concat(number);
  }
  else if (confirmUp && confirmSym) {
    choices = chars2.concat(sym);
  }
  else if (confirmUp && confirmNum) {
    choices = chars2.concat(number);
  }
  else if (confirmSym && confirmNum) {
    choices = sym.concat(number);
  }

  // 1 choice picked 
  else if (confirmLow) {
    choices = chars;
  }
  else if (confirmUp) {
    choices = chars2;
  }
  else if (confirmSym) {
    choices = sym;
  }
  else if (confirmNum) {
    choices = number;
  };


  // for loop to randomize specified choices
  for (var i = 0; i < enter; i++) {
    password += choices.charAt(Math.floor(Math.random() * choices.length));

  }
// to write the generated password to the html text-area element
  document.getElementById("password").value = password;
// to clear previous password on regens
  password = " ";
}
// var for html button element
var genBtn = document.getElementById("generate");
// button click event to call func
genBtn.addEventListener("click", generatePassword);

