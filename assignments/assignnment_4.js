
var word = "  Hey you are doing good, keep it up   ";
console.log("1."+word);
console.log("2.Total Length of the string:" +word.length);
var rem = word.trim();

console.log("3.After Removing leading and trailing Extra Spaces:" +word.trim(),"and after removing extra space the length is:" +rem.length);


var space= word.length - rem.length;
console.log("4.Total Number of extra spaces count that is removed from first string is:" +space);

var first = rem.charAt(0);
var last = rem.charAt(33);
console.log("5.First character is:"+first, "and last charcter is:" +last);
var splitString = rem.split(" ");

console.log("6.After trim total number of words available:" +splitString.length);
var indexOfrem = word.indexOf("good");
console.info("7.Index of good from first given string is:" +indexOfrem);
console.log("8.substring starting from index 22 is:" +rem.substring(22,34));

var resultOfEndsWith = rem.endsWith("up");
console.log("9.Is string ends with word up?" +resultOfEndsWith);
var num1="150.356780";
var num2="527.0678945";

var numIn1= parseFloat(num1);
var numIn2 = parseFloat(num2);
var result = numIn1+numIn2;
console.log("10.Two string Number Result After typeconversion:" +result);