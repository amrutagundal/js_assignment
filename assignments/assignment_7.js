console.warn("Using string template");

console.log(`1.My dream company is "Microsoft"`);

var hobby1 = "Tennis";
var hobby2 = "cooking";
var hobby3 = "Music";
console.log("2.1",hobby1);
console.log(hobby2);
console.log(hobby3);
console.log (`"2.2 My Hobbies are:", ${hobby1},  ${hobby2},  ${hobby3}`);

console.log("3.Swapping two variables without using third variable");
var number1 = 500;
var number2 = 700;
console.log("3.1 Before Swapping",number1,number2);
number1 = number1 + number2;// 1200 ==number1
number2 = number1 - number2;//500 ==number2
number1= number1 - number2;// 700 ==number1
console.log("After Swapping", number1,number2);