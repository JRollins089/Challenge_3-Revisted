// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz".split('');
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const specialChars = "!@#$%^&*".split('')
const Numbers = '1234567890'
//placing variable
function generatePassword() {
  let children = [];
  var passwordLength = 0
  // seting prompted for password length
  var returnString = ""
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt('How long is the password (between 8 and 128)?')
    // setting warning to making the length between 8 and 128
    if (passwordLength < 8 || passwordLength > 128) {
      alert("must pick between 8 and 128")
    }
  }


  // seting prompted for password characters
  while (children.length == 0) {
    var hasLowerCase = confirm('Include lower case?');
    var hasUpperCase = confirm('Include upper case?');
    var hasSpecialChars = confirm('Include special characters')
    var hasNumbers = confirm('Include numbers')

    if (hasLowerCase) {
      children = children.concat(lowerCaseChars);

    }

    if (hasUpperCase) {
      children = children.concat(upperCaseChars);
    }

    if (hasSpecialChars) {
      children = children.concat(specialChars);
    }

    if (hasNumbers) {
      children = children.concat(Numbers);
    }
    // setting a alert to choose at least one
    if (children.length == 0) {
      alert("must pick one")
    }
  }
  // insure that the password is random
  for (let i = 0; i < passwordLength; i++) {

    returnString += children[Math.floor(Math.random() * children.length)];
  }



  // Insure the strings is defined
  return returnString;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
