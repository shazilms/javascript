//Use arrow function to write Concise Anonymous functions
/* instead of this we can write using arrow function 
var magic = function() {
    return new data();
};  */

const magic = () => new Data();


// Write arrow function with parameters 

/* the normal function
var myConcat = function(arr1,arr2){
    return arr1.concat(arr2);
};
console.log(nyConcat([1,2],[3,4,5]));  */

const myConcat = (arr1,arr2) =>  arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));

// Write Higher Order Arrow Functions
/* code to print the positive integer from an array and square it*/

const realNumber = [4, 5.6, -9.9, 3.14 ,42, 6,8.87,-2];
const squareList = (arr)=> {
    const squaredIntegers = arr.filter(num => Number.isInteger(num)&& num > 0).map(x => x*x);
    return squaredIntegers;
}
const squaredIntegers = squareList(realNumber);
console.log(squaredIntegers);

//write higher order arrow function
/* a code to increment the given number*/
const increment = (function() {

return function increment(number , value = 1){
    return number + value;
};
})();
console.log(increment(5,2));
console.log(increment(5));

//use the rest operator with function parameter the rest operator is ...

const sum = (function () {
    return  function sum ( ...args){           // instead of this function sum(x,y,z) { const args= [x,y,z]; you can write (...args) 
        
        return args.reduce((a,b)=>a+b, 0);
    };
})();
console.log(sum(1,2,3,4,5));

// use the spread operator to evaluate arrays in-place
/* spread operator is used to copy the array element of another array*/

const arr1 = ["jan", "feb", "march","april"];
let arr2;
(function() {
    arr2 = [...arr1]; //arr2 = arr1 is will have elements of arr1 and in the next line if you change arr1 then arr2 will also change
    arr1[0] = 'potato' // now this wont be changed in arr2 because of spread operator is used and it will have original arr1 value 
}) ();
console.log(arr2);
console.log(arr1);

