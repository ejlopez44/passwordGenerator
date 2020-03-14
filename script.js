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
    console.log(usrPwLength)
    var password = ""
    //Need to log user selections at prompts
    var basePw = "";
    var preferences = "";
    var usrSpecialChars = confirm("Should your password contain special characters?")
    if (usrSpecialChars === true) {
      preferences = preferences + specChars;
      basePw = basePw + specChars.charAt(Math.floor(Math.random() * specChars.length))
      //temporary logging
      console.log(basePw);
      console.log(preferences);
    }
    var usrUpperChars = confirm("Should your password contain uppercase characters?")
    if (usrUpperChars === true) {
      preferences = preferences + upperChars;
      basePw = basePw + upperChars.charAt(Math.floor(Math.random() * upperChars.length))
      //temporary logging
      console.log(basePw);
      console.log(preferences);
    }
    var usrLowerChars = confirm("Should your password contain lowercase characters?")
    if (usrLowerChars === true) {
      preferences = preferences + lowerChars;
      basePw = basePw + lowerChars.charAt(Math.floor(Math.random() * lowerChars.length))
      //temporary logging
      console.log(basePw);
      console.log(preferences);
    }
    var usrNumChars = confirm("Should your password contain numbers?")
    if (usrNumChars === true) {
      preferences = preferences + numChars;
      basePw = basePw + numChars.charAt(Math.floor(Math.random() * numChars.length))
      //temporary logging
      console.log(basePw);
      console.log(preferences);
    }
    //
    for (let i = (basePw.length + 1); i <= (usrPwLength); i++) {
      password = password + preferences.charAt(Math.floor(Math.random() * preferences.length));
      var passwordText = document.querySelector("#password");
      passwordText.value = password + basePw;
    }
    console.log(passwordText.value.length);
  }
  else {
    alert("Must choose between 8 and 128 characters");
    writePassword();
  }
}

//for some reason I didn't use this part of the given code
//var password = generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
