var a= (0=='');
console.warn("1.0==''");
console.log("Ans :In this case, the right operand is coerced to the type Number, hence in program it is executed like 0 == 0therefore:",a);

var b = (0=='0');
console.warn("2.0=='0'");
console.log("Ans: The double equals sign tells JavaScript that even if the types are different, its allowed to coerce and compare the pure values,hence result is:",b);



var c = (0==false);
console.warn("3.0==false");
console.log("Ans:.In  javascript boolean value false returns 0 in js double equal sign does not check the type of variable hence:",c);

var d = (null == undefined);
console.warn("4. null== undefined");
console.log("Ans.Both null and undefined return false. Hence, null and undefined are considered equal therefore ans is :",d);

var e = (1==[1]);
console.warn("5. 1== [1]");
console.log("Ans.The double equals sign tells JavaScript that even if the types are different, its allowed to coerce and compare the pure values,hence result is: ",e);

var f = (1==true);
console.warn("6. 1== true");
console.log("Ans.In javascript boolean value true returns 1 and == operator only compare values even if the types are different hence value is :",f);

var g = (1=='1');
console.warn("7. 1== '1'");
console.log("Ans.The double equals sign tells JavaScript that even if the types are different, its allowed to coerce and compare the pure values,hence result is:",g);
