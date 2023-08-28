//write reuseable codes with functions

function ourReuseable()
{

    console.log("hello shazil", "good");

}
ourReuseable(); // ourReuseable() is the function name and we can call this function anytime and it will give this output "hello shazil good "

//Passing value to function with argument 

function valueToArgs(a, b)
{
  console.log(a-b);
}
valueToArgs(10,5);  // output 5

/* Global scope and functions : scope refers to visibility  of variables and variables are which is declared 
outside function block have global scope , global scope means it can be seen anywhere in the js code*/

var myGlobal=10;

function fun1()
{
 oopsGlobal= 5; // since it is not defined with var it is a global scope

}
function fun2()
{
     var output= "";
     if(typeof myGlobal!= "undefined")
     {
        output += "myGlobal"+ " " + myGlobal;
     }
     if (typeof oopsGlobal != "undefined")
     {
        output += "oopsGlobal" + oopsGlobal;
     }
     console.log(output);
}
fun1();
fun2();

//local scope and functions
/* variables  which are declared within a function  as well and function parameters  has local scope
that means it is only visible within the function */

function myLocalScope()
{
   var mVar = 50; // this can be accesses only through this function 
   console.log(mVar);
}
myLocalScope();

//Global vs local scope in function

var outerWear= "T-shirt";
function myOutfit()
{
   var outerWear = " sweater"; // if local and global variable are declared with same name then  local variable take hight priority
   return outerWear;
}
 console.log(myOutfit()); // since local variable is declared so it gives local variable value 
 console.log(outerWear);

 // Return a Value from a Function with return 

 function timesFive(num)
 {
   return num*5; 
 } 
 console.log(timesFive(5)); //  the value we gave that is 5 and the out will be 25 because in return function we gave *5

 //Understanding Undefined Value returned From a function 

 var sum = 0;
 function addThree()
 {
   sum += 3; // it wont give any output because we dint write return value 
   
 }

 // assignment with a returned value 
 
 var changed = 10;
 function change(num)
 {
   return (num + 5) / 3;
 }
 changed = change(10); // here the value 10 goes to return and changes the value and gives 5 as the output
 console.log(changed);


 //Stand in Line 
 /* here what we do is remove first element of array and add one element in the end of the array */

 function nextInLine(arr, item)
{
   arr.push(item);
 return arr.shift(); // if you don't want to remove the first element and just print what item is added then write return item
}
var testArr = [1,2,3,4,5];
console.log("before"+ JSON.stringify(testArr)); //JASON.stringy is used just change the array into string that can be easily printed out in screen
console.log(nextInLine(testArr, 6));
console.log("after:"+ JSON.stringify(testArr));


// Boolean values 

function welcomeToBoolean()
{
return true;
}


