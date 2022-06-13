console.warn("1.Two function with no argument and no return type");
function add(){
    console.log("function add():Add two numbers");

}
add();
function sub(){
    console.log("function sub():subtract two numbers");

}
sub();

console.warn("2.Function with arguments");
function myName(firstName,lastName){
    console.log("My name is:",firstName,lastName);

}
myName("Amruta","Gundal");

console.warn("3. Function with string argument");
function mystring(string){
    
   
  return string.split(" ").length;
   
  
}
var str1 = "I am Learning JavaScript";
var str2 = "Soon I am going to be IT champ";
console.log("3.1 I am learning javascript:"+mystring(str1));
console.log("3.2 Soon I am going to be IT champ:"+mystring(str2));

console.warn("4.Swapping values using function with arguments");

var a = "Virat";
var b = "Anushka";
var t;
console.log(" Before Swapping:",a,b);
function swapUsingThirdVariable(arg1, arg2){
   
     t = a;
     a = b;
     b = t;
     return (a+" "+b);
      
    
}
 var g =swapUsingThirdVariable(a,b);

console.log("4.1 After Swapping:",g);

var a = 555;
var b = 444;
console.log(" Before Swapping without using third variable:",a,b);
function swapWithoutThirdVariable(arg1, arg2){
    
   b = a+b ;//b==999
   a= b-a; //999-555=444
   b= b-a;//999-444=555
    
    return (a+" "+b);
     
   
}
var d =swapWithoutThirdVariable(a,b)
console.log("4.2 After Swapping without using third variable:",d);


