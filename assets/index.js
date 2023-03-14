var numericCharacters = ['0 ', '1 ', '2 ', '3 ', '4 ', '5 ', '6 ', '7 ', '8 ', '9 '];

var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',
',',')','(','}','{',']','[','~','-','_','.',
];

// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var passwordLength = prompt("Choose a password length between 8 and 128.");

  passwordLength = parseInt(passwordLength);
  console.log(typeof passwordLength, passwordLength);

  if (!passwordLength) {return "No password entered, try again!";}

  if (!passwordLength) {
    console.log("stop")
    alert("Please enter in the correct number range.")
    return generatePassword();
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter in a number between 8 and 128.")
    return generatePassword();
  }

  var allCharacters = []; // ["a", "b"]

  var includeNumbers = confirm("Include Numbers?")

  if (includeNumbers) {
    allCharacters = allCharacters.concat(numericCharacters)
    console.log(allCharacters)
  } else {
    alert("Didn't include Numbers!")
    console.log(allCharacters)
  }

  var includeLowercase = confirm("Include Lowercase?")

  if (includeLowercase) {
    allCharacters = allCharacters.concat(lowerCasedCharacters)
    console.log(allCharacters)
  } else {
    alert("Didn't include lowercase characters!")
    console.log(allCharacters)
  }

  var includeUppercase = confirm("Include Uppercase?")

  if (includeUppercase) {
    allCharacters = allCharacters.concat(upperCasedCharacters)
    console.log(allCharacters)
  } else {
    alert("Didn't include Uppercase characters!")
    console.log(allCharacters)
  }
  var includeSpecial = confirm("Include Special Characters?")

  if (includeSpecial) {
    allCharacters = allCharacters.concat(specialCharacters)
    console.log(allCharacters)
  } else {
    alert("Didn't include Special characters!")
    console.log(allCharacters)
  }

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);

    var randomLetter = allCharacters[randomIndex];

    password = password + randomLetter;

  }

  return password;


}





// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Added list of available variables to be in password