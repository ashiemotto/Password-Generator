// Assignment Code
var generateBtn = document.querySelector("#generate");
// create an array to draw characters from
var alphaU ="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var alphaL ="abcdefghijklmnopqrstuvwxyz".split("");
var number = "1234567890".split("");
var other = "! #$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");


var pass= [];
var pass2 = [];

// verify that array has been made correctally 
console.log (alphaU);
console.log(alphaL)
console.log (number);
console.log (other);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
// Add prompt and alert buttons to get data from person 
generateBtn.addEventListener("click", writePassword);{
 
 
 function generatePassword(){
  var passLenght = prompt ("please select how many characters between 8 and 128 long");

  
  console.log (passLenght)
if ( passLenght <8 ){
      alert("Invalad selection");
      generatePassword;
  }
  else if(passLenght > 128){
    alert ("Invalid selection");
    
  }
 else {
     var upper = confirm ("Would you like upper-case letters");
    if (upper){
    var lower =confirm("Would you like lower-case letters");
      pass2=pass2.concat(alphaU);
     }
      else  {
       lower = confirm ("Would you like lower-case letters");
      }

      if (lower) {
      var special = confirm ("Would you like Special characters");
      pass2=pass2.concat(alphaL);
     }
     else  {
       special = confirm ("Would you like Special characters");
     
     }
        if (special){
         var num = confirm ("Would you like numbers?");
         pass2=pass2.concat(other);
        }
        else {
           num = confirm ("Would you like numbers?");
        }
        if (num ){
          alert("Thank you for your selection Generating password");
          pass2=pass2.concat(number);
        }
        else {
          alert("Thank you for your selection Generating password");
        }
 }
if (upper = true, lower = true, special = true, num = true){
 
 
  for (var i=0; i < passLenght;i++){

    pass.push( (pass2[Math.floor(Math.random()*pass2.length)]));
  }
}
  else if (lower = true, special = true, num = true){
    for (var i=0; i < passLenght;i++){

      pass.push( (pass2[Math.floor(Math.random()*pass2.length)]));
  }
}
  else if (special = true, num = true){
    for (var i=0; i < passLenght;i++){

      pass.push( (pass2[Math.floor(Math.random()*pass2.length)]));
  }
}
  else{
    for (var i=0; i < passLenght;i++){

      pass.push( (pass2[Math.floor(Math.random()*pass2.length)]));
  }
  }

return pass.join("")
 
 }

  console.log(pass)
  console.log(pass2)
 
 
 
}
 

  

 


