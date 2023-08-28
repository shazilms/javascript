//Stores multiple values with array 

var mArray= ["Shazil", 25];

//nested Array

var mArray = [ ["Shazil, 25"], ["Mohammed, 2000"]]; // array inside an array is called nested array 

//Access Array data with indexes

var mArray = [50, 50, 70];
var mData = mArray[2];
console.log(mData);

//Modify Arrays data with indexes 

var mArray = [16, 64, 65];
mArray[2]= 85;
console.log(mArray);

// Access multi-dimensional Arrays with indexes

var mArray = [[10,20,30], [1,2,3], [99,88,77], [[65,75,85], 13 ,14 ]];

// var mData = mArray[0][0]; the first [0] represent the first element that is [10,20,30] and the second [0] represent the first element of the first array that is 10}

var mData = mArray[3][0];
console.log(mData);

// Multiple array with push 

var mArray = ["shazil", "s", "cat"]
mArray.push("happy"); // push element is used to add an element  in the end of the array  output  will be ['shazil', 's', 'cat', 'happy']
console.log(mArray);
var mArray = [["shazil",2], ["s", "cat"]]
mArray.push(["sad", "happy" ]);
console.log(mArray);


//Manipulate array with pop 
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); // pop removed the last array it removed 3 from [1,2,3]
console.log(ourArray);


//Manipulate array with shift

var mArray = ["shazil", 24, "cat"];
removedData = mArray.shift(); // shift is used to deleted first element in the array 
console.log(mArray);
console.log(removedData); // it shows removed data 

//Manipulate array with unshift , 

var mArray = ["cat", 25];
mArray.unshift("shazil"); // unshift is used to add element in the beginning of the array 
console.log(mArray);

//shopping list : array of array are called shopping list 

var list = [["name"," age"],["food", 2], ["water", 3], ["eggs", 4], ["juice", 5] ];



