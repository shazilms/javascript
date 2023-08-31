//object are similar to array expect that instead of using indexes to access data you use properties 
// build JavaScript Objects 

var ourDog = {
    "name" : "lucy",
    "legs" : 4,
    "tails": 1,
    "friends": []

};

//Accessing object properties with dot Notation

var testObj ={
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(shirtValue);

//accessing object Properties with bracket Notation
var testObj ={
    "an entree": "hamburger",
    "my shirt": "jersey",
    "The drink": "water"
};
var hatValue = testObj["an entree"];
var shirtValue = testObj['The drink'];
console.log(hatValue);

// Accessing object Properties with variables 

var testObj={
    12: "Namath",
    16: "montana",
    19: "unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player);

//Updating our object properties

var mDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp campers"]
};
mDog.name = "happy coder";
console.log(mDog.name );
console.log(mDog.friends);

//add new properties to an object, you add new properties to an object  using dot or bracket notation 

var mCat ={
    "Name" : "Phimi",
    "age" : 2,
    "tails": 1,
};
 mCat.sound = "meow";
 mCat["color"]="white";
 console.log(mCat);

 //delete properties from object
 var mCat1 ={
    "Name" : "Pheobe",
    "age" : 2,
    "tails": 1,
    "sound": "meow",
    "color": "black"
};
delete mCat1.color;
delete mCat1.sound;
console.log(mCat1);

//using objects for lookups
//you can use object instead of switch for lookup
 function phoneticLookup(val){

var result ="";

var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta" : "Denver",
    "echo" : "easy",
    "foxtrot" : "frank"
};
result = lookup[val];
return result;

 }
 console.log(phoneticLookup("charlie"));

 //testing objects for properties 
 // we can check whether the  object hasOwnProperty with has own property method 

var mObj = {
    gift : "pony",
    pet : 'kitten',
    bed : "sleigh"
};
 
function checkObj(checkProp)
{
    if(mObj.hasOwnProperty(checkProp))
    {
        return mObj[checkProp];
    }else 
    {
        return "not found ";
    }
    
}
console.log(checkObj("gift"));
console.log(checkObj("gif"));


//manipulating Complex object
//inside a array we are creating two objects with property and inside object we are creating and array 

var myMusic = [
{
    "artist" : "billy joel",
    "title " : "Piano Man",
    "release_year" : 1973,
    "formats": [
        "CD", 
        "8T",
        "LP"
    ],
    "gold" : true
},
{
    "artist" : " joel",
    "title " : "drums Man",
    "release_year" : 1998,
    "formats": [
        "CD",
        "LP"
    ],
    "gold" : false   
}
]

//Accessing nested object 

var mStorage= {
    "car" : {
        "inside": {
            "glove box" : "maps",
            "passenger seat" : "crumbs"
        },
        "outside" : {
            "trunk": "jack"
        }
    }
};
var accessNested= mStorage.car.inside["glove box"];
console.log(accessNested);

//Accessing the nested array   
var myPlants = [
    {
        type: "flower",
        list : [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
 var secondTree= myPlants[0].list[2];
 console.log(secondTree);

 //record collection

var collection = {
    "2548": {
        "album":"slippy when wet",
        "artist": "bon Jovi",
        "tracks": [
            "let it rock",
            "you give love a bad name"
        ]
    },
    "2468": {
        "album" : "1999",
        "artist": "prince",
        "tracks": [
            "1999",
            "little red corvette"
        ]
    },
    "1245": {
        "album": "robert Palmer",
        "tracks":[]
    },
    "5439": {
        "album" : "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection)); //used to make copy of the collection
function updateRecords(id,prop,value) // for ex id is collection prop is "2548" and value is "artist"
{
    if (value == "")
    {
    delete collection[id][prop];
    }else if (prop == "tracks"){
        collection[id][prop]= collection[id][prop] || [];
        collection[id][prop].push(value);
    }else {
        collection[id][prop]= value;
    }
    return collection
}
updateRecords(2468, "tracks","test");
 console.log(updateRecords(5439,"artist","ABBA"));
