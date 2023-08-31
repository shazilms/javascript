// creating a string using template literals 

/* template literals  are specials type of string that makes creating complex string easer
 the syntax is ` message`  */
const person = {
    name : "Shazil",
    age : 23
};
const greeting = `Hello my name is ${person.name}! and I am ${person.age} years old.`;
console.log(greeting);

// coding challenge 
/*creating a list based od array we passed in  we want to get result.failure output like <li class="text-warning"> no=var </li> */

const result= {
    success : ["max-length", "n0-amd", "prefer-arrow-function"],
    failure : ["no-var", "var-on-top", "lineBreak"],
    skipped : ["id-blacklist", "no-dup-keys"]
};
function makeList(arr)
{
    const resultDisplayArray = [];
    for (let i =0; i< arr.length; i++)
    {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]} </li>`)
    }
    return resultDisplayArray;

}
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

// using concise Object literals declaration using simple fields

 /* const createPerson = ( name, age , gender ) =>{
    return{
        name : name, 
        age : age,
        gender : gender
    };

 };
 console.log(createPerson("shazil", 23, "Male"));
 the easier way to do it is */
 
 const createPerson = ( name, age , gender ) => ({ name , age , gender});
 console.log(createPerson("shazil", 23, "Male"));

