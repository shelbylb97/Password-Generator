// Assignment Code
var generateBtn = document.querySelector("#generate");
``
 
// write password 
function writePassword() {
  var password = "";
  var allowed = {};
  if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");
}


// Add event listener to generate button 

generateBtn.addEventListener("click", function () {
 writePassword();
});

// popups
var length = Number(prompt("How long would you like your new password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Your new password needs to be between 8-128 characters. How many characters would you like your password to be?"));

var uppers = confirm("Would you like to include uppercase letters?");
var lowers = confirm("Would you like to include lowercase letters?");
var numbers = confirm("Would you like to include numbers?");
var symbols = confirm("Would you like to include special characters?");

while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppers = confirm("Would you like to include uppercase letters?");
  lowers = confirm("Would you like to include lowercase letters?");
  numbers = confirm("Would you like to include numbers?");
  symbols = confirm("Would you like to include special characters?");
}
