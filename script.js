// Assignment Code
var generateBtn = document.querySelector("#generate");

//defining variables for eligible character types 
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChars = "abcdefghijklmnopqrstuvwxyz"
var specChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var numChars = "0123456789"
var preferences = ""

// Runs through password generating
function writePassword() {
  //usrPwLength = prompted initially on generate btn click, stored to create substring later
  var usrPwLength = prompt("Choose how long you would like your password. (Must be between 8-128 characters)")
  if (usrPwLength >= 8 && usrPwLength <= 128) {
    var password = ""
    //Need to log user selections at prompts
    var preferences = "";
    var usrSpecialChars = confirm("Should your password contain special characters?")
    if (usrSpecialChars === true) {
      preferences = preferences + specChars;
      //temporary logging
      console.log(preferences);
    }
    var usrUpperChars = confirm("Should your password contain uppercase characters?")
    if (usrUpperChars === true) {
      preferences = preferences + upperChars;
      //temporary logging
      console.log(preferences);
    }
    var usrLowerChars = confirm("Should your password contain lowercase characters?")
    if (usrLowerChars === true) {
      preferences = preferences + lowerChars;
      //temporary logging
      console.log(preferences);
    }
    var usrNumChars = confirm("Should your password contain numbers?")
    if (usrNumChars === true) {
      preferences = preferences + numChars;
      //temporary logging
      console.log(preferences);
    }
    for (let i = 0; i <= usrPwLength; i++) {
      password = password + preferences.charAt(Math.floor(Math.random() * preferences.length));
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
  }
  else {
    alert("Must choose between 8 and 128 characters");
    writePassword();
  }
}

//var password = generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
