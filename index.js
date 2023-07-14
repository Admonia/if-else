//step one
// Truthy
// set a variable that has the input value from the test list
value= ""

// check if the variable is "i am a string". If it is, then print "true" because it is truthy
if (value === "I am a string") {
    console.log("true");

// if it's not a string check if it is the boolean false, then print "false"
} else if (value === false) {
    console.log("false");

// if it's not either of those and it's null then print "The null value is falsy"
} else if (value == null ) {
console.log("The null value is falsy")

// if it's none of the above and it's undefined then print "undefined is falsy"
} else if (value === undefined ) {
    console.log("undefined is falsy")

// if it's the number 0 it's falsy and print "The number 0 is falsy (the only falsy number)"
} else if (value === 0 ) {
    console.log("The number 0 is falsy (the only falsy number)")

   
// if it's the empty string "" print "The empty string is falsy (the only falsy string)"
} else if (value === "" ) {
    console.log("The empty string is falsy (the only falsy string)")
}

//step two
//Number Line 
// set variables that have the input values from the test list
const num1= -5
const num2= 0

// add two numbers together
const sum= num1+num2;

//test one of the variables to see what evaulation we're using
// check if the sum is greater than the evaluation

//with variables 50 and 51 print "101 is greater than 100"
if ( num1 === 50 && sum > 100) {
   console.log ("101 is greater than 100")
}
//with variables 99 and -2 "97 is greater than 0"
else if ( num1 === 99 && sum > 0) {
    console.log ("97 is greater than 0")
 
//with variables 0 and "101 is greater than 100"
} else if ( num1 === 0 && sum  > 100 ) {
    console.log ("101 is greater than 100")

//with variables see and -500 and -500 print "0 is equal to 0"
} else if ( num1 === 500 && sum == 0 ) {
    console.log ("0 is equal to 0")

//with variables -1000 and 0 print "-1000 is a negative number"
} else if ( num1 === -1000  && sum == -1000 ) {
    console.log ("-1000 is a negative number")

//with variables -5 and 0 print "-5 is a negative number"
}  else if ( num1 === -5  && sum == -5 ) {
    console.log ("-5 is a negative number")
}

//step three
//Greater than or equal to 5
//set variables according to test
// set two variables that have input values from the test list
const greater1 = 5
const greater2 = 5

// print which exercise this is to console to make it easier to read the output
console.log("\n[Greater than 5] test variables are " + greater1 + " and " + greater2 + ":")

// check whether the first variable is greater than 5 AND if the second one is greater than 5
 if ( greater1 >= 5 && greater2 >=5 ) {

    // print true if both values are greater than 5
    console.log(true)

    // print false if they're not
} else {
    console.log(false)
}
    
//step four
//Pair and Compair
//set variables according to test 
const param1A= "cake"
const param1B= "cake"
const param2A= "pie"
const param2B= "pie"

//If the first two are equal or if the second two variables are equal

if (param1A === param1B || param2A === param2B ) {
    console.log (true)
}

else {
    console.log (false)
}