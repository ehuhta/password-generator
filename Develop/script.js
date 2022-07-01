// Assignment code here}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumeric() {
  return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}
function getRandomSpecial() {
  const symbols = '~!@#$%^&*()=<>?/.,":[]{}';
  return symbols[0];
}

const randomFunc = {
  lower: getRandomLower
  upper: getRandomUpper
  numeric: getRandomNumeric
  special: getRandomSpecial
  }
function generatePassword() {
  //Password Requirments?

    //prompt to ask about length of password, between 8 and 128

    //prompt to ask: include numeric?
    //prompt to ask: include special characters?
    //prompt to ask: include lowercase letters?
    //prompt to ask: include uppercase letters?

  //validate the input

  //Generate password based on criteria

  //Display password on page
return "Generated password will be here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();

