console.warn('problem1 : type of variable');
console.log('primitive datatype');
var marks= 100;
var b=typeof(a);
var c ='marks=100,type:number';
console.log(c );
var word ="amruta";
var p = 'word="amruta" type:string ';
console.log(p);
var bool = true;
var d = typeof(bool);
var e = 'bool=true,type:boolean';
console.log(e);
var notdef;
var k =typeof(s);
var l= 'notdef=,type:undefined';
console.log(l);
var add = null;
var t=typeof(add);
var h = 'add=null,type:null';
console.log(h);
console.warn('problem2: string length is odd number');
var stringop = "Harry is good student";
console.log(stringop);

var o = stringop.length
console.warn('total length of  string');
console.log(o);
console.warn('first character at string');

var n= stringop.charAt(0);
console.log(n);
var lastchar= stringop.charAt(20);
console.warn('last character at string');
console.log(lastchar);


var w= stringop.length/2;
console.warn('middle value of the string due to odd length of the string');
console.log(w);
var q = stringop.charAt(11);
console.warn('middle character of the string');
console.log(q);
console.warn('problem3: difference between null and undefined' );
console.log('null: It is the intentional absence of the value. It is one of the primitive values of JavaScript');
console.log('undefined: It means value is not defined to a variable but memory space is allocated and it is global object');
