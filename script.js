// Assignment Code
var generateBtn = document.querySelector("#generate");
var confirmUpperCase;
var confirmLowerCase;
var confirmSpecialChar;
var confirmNumber;
var passwordLegnth;
//Get User Input
function gatherUserInput(){
    confirmUpperCase = confirm("Would you like Uppercase in your password?");
    confirmLowerCase = confirm("Would you like Lowercase in your password?");
    confirmSpecialChar = confirm("Would you like Special Characters in your password?");
    confirmNumber = confirm("Would you like Numbers in your password?");
   
    while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialChar === false && confirmNumber === false){
        alert("Please allow for at least one password criteria.");
        confirmUpperCase = confirm("Would you like Uppercase in your password?");
        confirmLowerCase = confirm("Would you like Lowercase in your password?");
        confirmSpecialChar = confirm("Would you like Special Characters in your password?");
        confirmNumber = confirm("Would you like Numbers in your password?");
    }
    passwordLegnth = prompt("Please enter an integer greater than 8 but less that 128");
    while((parseInt(passwordLegnth) < 8 || parseInt(passwordLegnth) > 128)){
        alert("Your desired password length does not fit the criteria, please try again.");
        passwordLegnth = prompt("Please enter an integer greater than 8 but less that 128");
    }
    passwordLegnth = parseInt(passwordLegnth);
}
// Write password to the #password input
function writePassword() {
  gatherUserInput();
  var password = "";
  var upperCaseAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lowerCaseAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var specialCharacters = ["#","!"];
  
  function returnRandomNumber(min, max){
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.round(Math.random() * (max-min) + min);
  }
  
  for(var i = 0; i < (passwordLegnth); i++){
      var temp = ""
      var returnCriteria = false;
    while(returnCriteria === false){   
        if (returnRandomNumber(1,4) === 1){
            if (confirmNumber === true){
                temp = (returnRandomNumber(0,9)).toString();
                returnCriteria = true;
            }
        }
        else if (returnRandomNumber(1,4) === 2){
            if (confirmUpperCase === true){    
                temp = (upperCaseAlphabet[returnRandomNumber(0,25)]).toString();
                returnCriteria = true;
            }
        }
        else if (returnRandomNumber(1,4) === 3){
            if (confirmLowerCase === true){
                temp = (lowerCaseAlphabet[returnRandomNumber(0,25)]).toString();
                returnCriteria = true;
            }
        }
        else{
            if (confirmSpecialChar === true){
                temp = (specialCharacters[returnRandomNumber(0,1)]).toString();
                returnCriteria = true;
            }
        }
        password = password + temp;
    }
  }
  var newText = document.getElementById("password");
  newText.value = password;
  return newText.value; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
