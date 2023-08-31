//use destruction Assignment to assign variable from objects
var voxel = {
    x: 3.5,
    y: 4.5,
    z: 9.8
};
 /* first we used to assign like this 
 var x= voxel.x;
 var y=voxel.y;
 var z=voxel.z;  
 noe using destruction we write */

 const { x : a, y: b, z : c } =voxel; // a=3.5, y=4.5 , z=9.8
//code for finding average temp for  tomorrow
const       avgTemperature =
{
    today : 77.5,
    tomorrow : 79
};

function getTempOfTom(avgTemperature){
    "use strict";
    const { tomorrow : tempOfTomorrow }= avgTemperature;
    return tempOfTomorrow;
}
console.log(getTempOfTom(avgTemperature));

// destruction Assignment with nested objects
const LOCAL_FORECAST = {
    today : { min: 72, max: 83},
    tomorrow : { min: 73.3, max: 84.6}
};
function getMaxOfTom(forecast){
    "use strict";
    const { tomorrow : { max : maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTom(LOCAL_FORECAST));


//use Destruction Assignment to Assign Variables from arrays 

const [z,x, , y]= [1,2,3,4,5,6]; // if you want y to be equal to 4 the add an empty space that is comma(,)
console.log(z,x,y);

let n = 7, m = 9;
(()=>{
    "use strict";
    [n,m]=[m,n];

}) ();

console.log(n);
console.log(m);


// use destruction Assignment with Rest operator 
/* to remove first two elements of the array */

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const [, , ...arr] = list; // if you want to remove first two elements use two empty spaces
    return arr;
}
const arr=removeFirstTwo(source);
console.log(arr);
console.log(source);

//use Destruction Assignment to pass an object as a functions parameter 

const stats= {
    max: 56.66,
    standard : 4.66,
    median : 9.88,
    mode : 7.09,
    min : -0.75,
    average : 35.85
};
const half = (function () {
    return function half({max, min}) {  // instead of using half(stats) we only want max and min so we use mx and min and half is assigned to stats in the end 
        return (max + min)/2.0;
    };
})();
console.log(stats);
console.log(half(stats));
