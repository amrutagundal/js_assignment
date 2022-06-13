console.warn("1.Find vowels in the given string");

function checkVowels(givenString){


    
    let numberOfVowels = 0;
    let temp ="";
    for (let index = 0; index < givenString.length; index++) {
      let char = givenString.charAt(index);
        if (char == "A" ||char == "E" || char == "I" || char == "O" || char == "U" ||
        char == "a" ||char == "e" || char == "i" || char == "o" || char == "u" ){
            //console.log(char);
            numberOfVowels = numberOfVowels + 1;
            temp = temp + char;
        }
    }
    console.log("Total number of vowels",numberOfVowels);
    console.log(`vowels count is "${temp}" ${temp.length}`);


}
checkVowels("I Love flowers");
checkVowels("I Love JavaScript");

console.warn("2.sum of all given numbers");

//let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
//for (let i = 1; i <= number; i++) {
   // sum += i;
//}

//console.log('The sum of natural numbers:', sum);

   let total = 0;
    for (num = 0; num <= 10; num++) {
        total +=num;
        
        
    }
   
   console.log ('The sum of natural numbers from 1 to 10 is:',total);

   console.warn("3.Table of  5 and 7");

 
   function tableNum(num1,num2){
    console.log("table of "+num1);
   for( i = num1; i<= num2; i=i+num1){
    
    console.log(i);
    
}

   }
   
   tableNum(5,50);
   tableNum(7,70);


   console.warn("4.Finding the sum of square of numbers");

  
 
  let tota = 0;
    for (num = 0; num <= 5; num++) {
        tota +=(num*num);
        
        
    }
   
   console.log ('The sum of sqaures of 1 to 5 no. is:',tota);

   

  
   console.warn("5.Finding even and odd index characters from string");
   let givenString ="Hard Work always pays back";
   let temp1="";
   
   console.warn("5.1 even index character");
   for (let index = 0; index < givenString.length; index++) {
    let char = givenString.charAt(index);
     
     if (index%2==0){
        
         temp1=temp1+char;
       
     }
 }
 console.log(`even index characters are: ${temp1}`);

 let newStr = givenString.split(" ").join("");
 let temp2="";
 //console.log(newStr);
 console.warn("5.2 odd index character after removing spaces"); 
for (let i = 0; i < newStr.length; i++) {
    let chara = newStr.charAt(i);
     
     if (i%2!=0){
        
         temp2=temp2+chara;
       
     }
 }
 console.log(`odd index character after removing spaces are: ${temp2}`);
