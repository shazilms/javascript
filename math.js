//Generating random fractions 

function randomFunction()
{
    return Math.random(); // math.random function is used to get the random fraction numbers  between 0-1
}
 console.log(randomFunction());

 //generating random whole number
 var  someValue =  Math.floor(Math.random()*20); // using math.random it will roundup to nearest whole number 
 function randomWhole() {
    return Math.floor(Math.random() * 10); // the number will be between 0 to 9 because it is given *10
 }
 console.log(randomWhole());

 //Generating random whole number within the range
 
/*We are generating a whole number within a two given range */

function randomRange(max, min )
{
    return Math.floor(Math.random()* (max - min + 1))+ min;
}
var  myRandom = randomRange(5, 15);
console.log(myRandom);  // output will be a number between 5 and 15

