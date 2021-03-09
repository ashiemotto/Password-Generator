// Assignment Code
var generateBtn = document.querySelector("#generate");
// create an array to draw characters from
var characters = {
  alpha :"abcdefghijklmnopqrstuvwxyz".split(""),
  number : "1234567890".split(""),
  other : "! #$%&'()*+,-./:;<=>?@[\]^_`{|}~".split(""),
  pass:[""]
}

// verify that array has been made correctally a
console.log (characters.alpha);
console.log (characters.number);
console.log (characters.other);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
// Add prompt and alert buttons to get data from person 
generateBtn.addEventListener("click", writePassword);{
  var passLenght = prompt ("please select how many characters between 8 and 128 long");
  
  console.log (passLenght)
if ( passLenght <8 ){
      alert("Invalad selection");
      writePassword;
  }
  else if(passLenght > 128){
    alert ("Invalid selection");
    writePassword;
  }
 else {
     var upper = confirm ("Would you like upper-case letters");
    if (upper = true){
    var lower =confirm("Would you like lower-case letters");
    var letter = Math.floor(Math.random() * characters.alpha.length);
    console.log (letter)
     }
      else if(upper = false) {
      var lower = confirm ("Would you like lower-case letters");
      }
      if (lower = true) {
      var special = confirm ("Would you like Special characters");
     }
        if (special= true){
         var num = confirm ("Would you like numbers?");
        }
        else {
          var num = confirm ("Would you like numbers?");
        }
        if (num = true){
          alert("Thank you for your selection Generating password");
        }
        else {
          alert("Thank you for your selection Generating password");
        }
 }
for (var i=0; i = passLenght.length;i++){
 

}

}

console.log(characters.pass)

