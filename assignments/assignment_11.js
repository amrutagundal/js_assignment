console.warn("1.Function to check even or odd");

function toCheck(num) {
    if (num % 2 == 0) {
        var result = console.log(`Number ${num} is even`);
    } else {
        var result = console.log(`Number ${num} is odd`);
    }



    return result;
}
toCheck(2);
toCheck(45);
toCheck(70);

console.warn("2.Function to check grade of the student");

function gradeCheck(sr, num) {
    if (num >= 35 && num <= 36) {
        console.log(`${sr} You are Passed "congragulations!!" and your score is:${num}`);
    } else if (num < 35 && num >= 0) {
        console.log(`${sr} Sorry!! You are failed and your score is:${num}`);
    } else if (num > 36 && num <= 60) {
        console.log(`${sr} You got GRADE C in exam and your score is:${num}`);
    } else if (num > 60 && num <= 75) {
        console.log(`${sr} You got GRADE B in exam and your score is:${num}`);
    } else if (num > 75 && num <= 90) {
        console.log(`${sr} You got GRADE A in exam and your score is:${num}`);
    } else if (num > 90 && num <= 100) {
        console.log(`${sr} You got GRADE A+ in exam  your score is:${num}`);
    } else {
        console.log(`${sr} Invalid score!!  your score is:${num}`);

    }

}
gradeCheck(2.1, 34);
gradeCheck(2.2, 38);
gradeCheck(2.3, 50);
gradeCheck(2.4, 63);
gradeCheck(2.5, 80);
gradeCheck(2.6, 92);
gradeCheck(2.7, -10);
gradeCheck(2.8, 110);
gradeCheck(2.9, "Fourty Five");

console.warn("3.Function Expression to check type of argument")

var typefunction = function(a,b){
    var result = console.log(`${a} type of ${b} is: ` +typeof(b));
    return result;
}
typefunction(1.1,"Amruta");
typefunction(1.2,100);
typefunction(1.3,null);
typefunction(1.4,);
typefunction(1.5,true);

typefunction(1.6,NaN);

