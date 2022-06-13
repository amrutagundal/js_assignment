console.warn("1.check given number is even or odd");

function checkEvenoOrOdd(num){
      if(num % 2 == 0){
        console.log(`The Number ${num}  is Even`);
      }
    if(num % 2 != 0){
        console.log(`The Number ${num} is odd`);
    }
}
checkEvenoOrOdd(45);
checkEvenoOrOdd(70);
checkEvenoOrOdd(67);
checkEvenoOrOdd(98);

console.warn("2.check person is eligible for vote or not");
function checkEligible(age){
    if(age >= 18){
      console.log(`Your age is: ${age} and you are eligible for vote`);
    }
  if(age <18){
      console.log(`Your age is: ${age} Sorry!! you are  not eligible for vote`);
  }
}
checkEligible(18);
checkEligible(20);
checkEligible(17);
checkEligible(40);

console.warn("3.check string contains more than 10 characters or not");
function checkString(str){
    if(str.length > 10){
      console.log(`Given String "${str}" having more than 10 character`);
    }
  if(str.length <10){
      console.log(`Given String "${str}" having less than 10 character `);
  }
}
checkString("JavaScript-ES6");
checkString("Amruta");

console.warn("4.check string starts with 'Java' using function expression");

var stringStart = function(str){
    if(str.startsWith("Java")){
        console.log(`Given String "${str}" starts with "Java"`);
      }
   
   
   }
  stringStart("JavaScript");
  

  console.warn("5.check number is even  using function expression");

 var numEven = function(num){
    if(num % 2 == 0) {
        console.log(`Given number ${num} is even`);
    }
  
 }
 numEven(2022);

 console.warn("6.check number is odd  using function expression");

 var numOdd = function(num){
    if(num % 2 != 0) {
        console.log(`Given number ${num} is odd`);
    }
  
 }
 numOdd(123);