console.warn("1.Find the sqaure of number using function")
function getSquare(num1){
    return (num1*num1);

}
 var result =getSquare(5);
 console.log("Square of Five:",result);

 var result = getSquare(6);

 console.log("Square of Six:",result);
 var result = getSquare(25);
 console.log("Square of Twenty Five:",result);
 var result = getSquare(100);
 console.log("Square of Hundred:",result);
 console.warn("2.Type of declared function");
 console.log("Type of above declared function is:",typeof(getSquare()));

 console.warn("3.Find area of triangle");
 function areaOfTriangle(base,height){
     return ((base*height)/2);
 }
 var result = areaOfTriangle(45,34);
 console.log("Area of triangle:",result);

 console.warn("4. Function to check number positive ,negative or zero");
 function checkNumber(num){
    var res2 = (num>= 0 )?(num == 0?"Zero":" positive") : "negative";
    
     return ( res2  );
     

 }
 var result = checkNumber(-56);
 console.log(`The number -56 is: ${result}`);
 var result = checkNumber(0.567);
 console.log(`The number 0.567 is: ${result}`);
 var result = checkNumber(890);
 console.log(`The number 890 is: ${result}`);

 var result = checkNumber(0);
 console.log(`The number 0 is: ${result}`);


 
 console.warn("5. Function to check variable null or undefined");
function sumFun(str){
    console.log("type of given variable:"+str) ;
}
var fName;
sumFun("fName="+fName+" "+typeof(fName));

var address = null;
sumFun("address="+address+" "+typeof(address));

var isGirlBeutiful = "Yes";
sumFun("isBeautifulGirl="+ isGirlBeutiful+" "+typeof(isGirlBeutiful));
