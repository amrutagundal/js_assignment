console.log("======= Ternary Operators ? : ======="); 
 var num1 = 20;
 var num2 = 50;

 var result = num1 > num2 ? num1 : num2; 
 console.log("1. Greatest number amongst (20,50) is:", result);

var evenno = 44;
var oddno = 29;
 
var res = (evenno%2 == 0) ? "even" :"odd" ;
console.log("2.Number 44 is : ",res);

var res = (oddno%2 == 0) ? "even" :"odd" ;
console.log("2.1.Number 29 is : ",res);

var givenNumber = 132;
var res1 = (givenNumber > 132)? " greater than 132": " equal to 132";
console.log("3.Given number 132 is:",res1);


var negNum = -33;
var negNum1 = 179;
var negNum2 = 0;
var negNum3 = 45.89;
var res2 =(negNum> 0 )?" Positive":" negative";
var res3 =(negNum1> 0 )?" Positive":" negative";
var res4 =( negNum2==0)?"Niether Positive nor negative":" positive";
var res5 =(negNum3> 0)?" Positive":" negative";
console.log("4.Given number "+negNum+" is:",res2 );
console.log( "Given number "+negNum1+ " is:",res3);
console.log( "Given number "+negNum2+ " is:",res4);
console.log( "Given number "+negNum3+  "is:",res5);

var vote1= "Male";
var age = 20;
var res6 = (vote1===vote1 && age>=21)?" you are eligible for marriage ":"You are not eligible for marriage";
console.log( "5.My gender is :"+vote1 ," and my age  is:"+age);
console.log( "5.1:",res6);


var vote2= "Female";
var age1 = 20;
var res7 = (vote2===vote2 && age>=18)?" you are eligible for marriage ":"You are not eligible for marriage";
console.log( "6.My gender is :"+vote2 ," and my age  is:"+age1);
console.log("6.1",res7);
var grad = (70/100)*100;
var hsc = (80/100)*100;
console.log("7.Graduation score:"+grad+"%", "HSC score:"+hsc+"%");
var res8 = (grad==80 || hsc==90)?"You are eligible for TCS interview":"You are not eligible for interview";
console.log("7.1",res8);

