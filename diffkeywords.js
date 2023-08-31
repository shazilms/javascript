//differences between the var and the let keyword
/* using var we can  declare a variable many times but using let you can set a value for a variable only one time it 
dose'nt let you declare twice*/

var catName= "quincy";
var quote;
var catName = "boo"; // the var is used and declared the same variable twice but if it was let it would have given error 
let catNam = "poo";
let quo;
catNam = " koo"; // this  will replace the variable which was set in the beginning now the value of catNAm is koo not boo
/* we use "use strict" so that to indicate that the code should be executed in "strict mode". With strict mode, you 
can not, for example, use undeclared variables.*/


//compare scope of the var and let keywords
/* when you declare variable with var it is declared globally or locally  if it is declared inside a function.
    the scope of let is limited  to block statement or expression that  is  declared at */

    function checkScope()
    {
        "use strict";
        let i = "function scope";
        if(true)
        {
            let i= "block scope";
            console.log("block scope i is :", i); // this output will be "block scope" because the let is declared if t was not declared then out would be function scope  
        }
        console.log("function scope i is :", i); // output will be function scope because it is out if condition and uses the let declared in the first 
        return i;
    }
    checkScope();
    

//Declare a Read-Only Variable with the const keyword
/* const is another way to declare variable it has all the features of let but it's also read only you 
cannot reassign  a const  you can declared a keyword in const but cannot reassign it*/

function printManyTimes(str)
{
    "use strict";
    const SENTENCE = str + " is cool";// it is very common to  use all caps letter so that we can remember it is constant
    //sentence = str + "is amazing "; // this wont work the code will show error because you are reassign the const keyword 
    for (let i= 0; i< str.length ; i+=2)
    {
        console.log(SENTENCE);
    
    }
    
}
printManyTimes("freeCode");


//Mutate an Array declared with const

const s=[2,4,5];
function editInPlace()
{
    s[0]= 10;
    s[1]= 20;
    s[2]= 30;
}
editInPlace();
console.log(s);

//prevent object mutation 

function freeze()
{
    "use  strict";
    const MATH_CONSTANT= {
        PI : 3.14
    };

    Object.freeze(MATH_CONSTANT); // use object.freeze if you don;t want the object value to change
    try {
        MATH_CONSTANT.PI= 99;
    } catch (ex){
        console.log(ex);
    }
    return MATH_CONSTANT.PI;
}
const PI = freeze();
console.log(freeze());






