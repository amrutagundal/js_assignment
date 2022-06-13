console.warn("1.Marriage eligibility checker");

function checkEligible(sr, gender, age) {
    if (gender == 'female' && age >= 18) {
        console.log(`${sr} Your gender is "${gender}" and age is ${age} then you are eligible for marriage`);
    }
    else if (gender == 'male' && age >= 21) {
        console.log(`${sr} Your gender is "${gender}" and age is ${age} then you are eligible for marriage`);
    }
    else if (gender == 'other' && age >= 21) {
        console.log(`${sr} Your gender is "${gender}" and age is ${age} then you are eligible for marriage`);
    } 
   
    else{
        console.log(`${sr} Your gender is "${gender}" and age is ${age} then you are not eligible for marriage`);
    }

}
checkEligible(1.1, 'male', 17);
checkEligible(1.2, 'male', 25);
checkEligible(1.3, 'female', 28);
checkEligible(1.4, 'female', 16);
checkEligible(1.5, 'other', 35);
checkEligible(1.6, 'other', 41);