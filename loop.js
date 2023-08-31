// Iterate with loop , while loop 
var myArray =[];
var i=0;
while(i< 5)
{
    myArray.push(i);
    i++;
}
console.log(myArray);

// iterate with for loop
var ourArray= [];
var i;
for (i=2; i<= 5;i++)
{
    ourArray.push(i);
}
console.log(ourArray);

//iterate even numbers with a for loop 

var mArray =[];
var i;
for (i=0; i<10;i +=2)
{
    mArray.push(i);
}
console.log(mArray);

//iterate odd numbers with a for loop 
var mArray =[];
var i;
for (i=1; i<10;i +=2)
{
    mArray.push(i);
}
console.log(mArray);

//count backwards with for loop

var mArray =[];
var i;
for (i=10; i>0; i--) // for(i=10;i>0; i+=2)
{
    mArray.push(i);
}
console.log(mArray);

//iterate through an array with  a for loop
//adding the number in the array 

var ourArray=[9,10,11,12];
var ourTotal = 0;
for (var  i=0; i<ourArray.length; i++)
{
    ourTotal += ourArray[i];
}

console.log(ourTotal);

//nesting for loops
//multiplying all array 
function mulAll(arr)
{
    var product =1;
    for (var i=0; i< arr.length; i++)
    {
        for (var j=0; j< arr[i].length; j++)
        {
            product *= arr[i][j];
        }
    }
    return product;
}
var product = mulAll([[1,2],[3,4],[5,6,7]]);
console.log(product);


//iterate do while loop
// while loop first checks condition before running the code with the loop and in do while it first runs the code  at least one time then checks the condition
var myArray =[];
var i =10;

do
{
    myArray.push(i);
    i++;
} while(i<5) 

console.log(i, myArray);


//Profile lookup

var contacts =
[
{
    "firstName": "Akira",
    "lastName" : "laine",
    "number": "0987654321",
    "likes": ["Pizza","Coding", "Brownie Points"]
},
{
    "firstName": "Harry",
    "lastName" : "Potter",
    "number": "6725626252",
    "likes": ["Hogwarts","Magic", "Hagrid"]
},
{
    "firstName": "shazil",
    "lastName" : "mohammed",
    "number": "096363631",
    "likes": ["Pizza","football", "Brownie"]
},
{
    "firstName": "Pops",
    "lastName" : "Star",
    "number": "76725257",
    "likes": ["anything","something", " Points"]
},
{
    "firstName": "Sumo",
    "lastName" : "la",
    "number": "0098376366",
    "likes": ["Pop","Cod", "Brow"]
}
]

function lookupProfile(name,prop)
{
    for (var i=0; i<contacts.length; i++)
    {
        if (contacts[i].firstName === name)
        {
            return contacts[i][prop] || "no such property"
        }
    }
    return "no such contact";
}

var data = lookupProfile("Akira","likes");
console.log(data);