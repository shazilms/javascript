//parseInt function
/* it takes string and returns integer */

function convertToInteger(str)
{
    return parseInt(str);
}
console.log(convertToInteger("61"));

//use the parseInt function with a radix
/* the radix specify's the base of the number in string */

function convertToInteger(str)
{
    return parseInt(str, 2) //  2 is base number for the binary digits.
}
console.log(convertToInteger("10011"));

//use the conditional (ternary) operator 
/* its like one line if lese expression 
condition ? statement-if-true : statement-if-false ; */
function checkEqual(a,b)
{
  return a===b ? true : false;
//return a===b;
}
console.log(checkEqual(2,2));
/* we write this instead of 
if(a==b){
    return true
} else {
    return false;
} */


//use multiple conditional (ternary) operation
/* checking whether the number is positive , negative or zero*/

function checkSign(num)
{
    return num> 0 ? "positive" : num < 0 ? "negative" : "it is zero";
}
console.log(checkSign(0));

