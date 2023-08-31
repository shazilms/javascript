/**** escaping sequences in string
  * code output 
  * \' single quote 
  * \" double quote
  * \\ backslash
  * \n newline
  * \r carriage return
  * \t tab
  * \b backspace
  * \f form feed 
  ****/

var myStr = " FirstLine\n\t\\SecondLine\nThirdline";
console.log(myStr);

//concatenating strings with plus operations

var ourStr = " I comr first." + "I come second."
console.log(ourStr);

//concatenating strings with plus equals  operations
var urString = " First one."
urString += "Second one."
console.log(urString);

// constructing strings with variables 
var mName= "Shazil";
var mStr= " hello my name is "+ mName +" ,how are you";
console.log(mStr);

//Appending variables to string 
var anObj = " great";
var anFact = " Shazil is";
anFact += anObj;
console.log(anFact);


// find Length of the string 
 var firstNameLength="0";
 var firstName="shazil";
 firstNameLength = firstName.length;
 console.log(firstNameLength);

 // Bracket notation to find First Character in string 

 var firstLetterOfName="";
 var name="Shazil";
 firstLetterOfName= name[3];
 console.log(firstLetterOfName);

 //String Immutability

var myStr="Jello shazil";

myStr = "Hello world ";
console.log(myStr);

//Bracket Notation to find  last  character in String
 var fName= "shazil";
 var lastLetterOfLastName= fName[fName.length-1];
 console.log(lastLetterOfLastName);

 //Bracket Notation to find  nth to last  character in String

var fName= "shazil";
 var lastLetterOfLastName= fName[fName.length-2]; // -3 shows 3 last letter 
 console.log(lastLetterOfLastName);

 //word blanks
function wordBlanks( myNoun, myAdjective, myVerb, myAdverb)

{
  var result = "";
  result += " The " + " " + myAdjective + " " + myNoun +" " + myVerb + " very " + myAdverb ;
  return result;
  
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("man", "small", "ran", "slowly"));

 //Stores multiple values with array 

 var mArray= ["Shazil", 25];
 