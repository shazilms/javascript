//using condition logic with if statement 


function trueOrFalse(num)
{
    if ((num%2) ==0 )
    {
        return "prime number ";
    }
    return " odd number";
}
console.log(trueOrFalse(8));
 
// comparison with the equality operator 

function testEqual(val)
{
    if (val==12)
    
{
    return "equal";
}
return "not equal";

}
console.log(testEqual(12));


// comparison with the strict  equality operator  

function testStrict(val)
{
    if(val===3)
    {
        return "equal";
    }
       return "not equal";

}
 console.log(testStrict('3')); 
 /* 3==3
  3 ===3* for strict equal there should not be any double quotes also or else it gives output has false */

  // practice comparing different values 

  function test(a, b)
{
    if(a==b)
    {
        return "same";
    }
       return "not same";

}
 console.log(test(10, "10")); 
 // the difference is with  == it shows true  with === it shows false
 function test2(a, b)
 {
     if(a===b)
     {
         return "same";
     }
        return "not same";
 
 }
  console.log(test2(10, "10")); 

  // comparison with inequality operator 

  function equal(val)
  {
    if(val!=10)
    {
        return "true";
    }
    return "false";
  }
console.log(equal(9));

// comparison with  strict inequality operator 

function equal(val)
{
  if(val!==10) // strict inequality operator  is opposite with strict equality
  {
      return "true";
  }
  return "false";
}
console.log(equal('10'));

//comparison with  greater than  operator

function greater(val)
{
    if (val > 200)
    {
        return "greater than 200";
    }
    return " lesser than 200";
}
console.log(greater(201));

//  comparison with greater than and equal operator 

function greater1(val)
{
    if (val >= 200)
    {
        return "greater than  or equal to 200";
    }
    return " lesser than 200";
}
console.log(greater1(200));

//   comparison with lesser than equal operator 
function lesser(val)
{
    if (val < 300)
    {
        return "lesser than  300";
    }
    return " greater than 300";
}
console.log(lesser(200));

// comparison with lesser than equal operator 
function lesser1(val)
{
    if (val <= 300)
    {
        return "lesser than  or equal  300";
    }
    return " greater than 300";
}
console.log(lesser1(300));

//comparison with logical AND operator

function log(val)
{
    if (val <=99 && val>=66)
    {
        return "yes";
    }
    return  "no";
}
console.log(log(101));

//comparison  with logical or operator 

function log1(val)
{
    if (val >10 || val< 15)
    {
        return "yes";
    }
    return  "no";
}
console.log(log1(13));

//Else statement

function oddOrEven(num)
{
    if ((num%2) ==0 )
    {
        return "even number ";
    }
else
{
    return " odd number";
}
}
console.log(oddOrEven(9));

//else if statement
 function why(val)
 {
    if(val >10)
    {
        return "greater than 10" ;
    } 
    else if(val < 5) 
    {
        return "lesser than 5";
    }
    else 
    {
    return "number between 5 and 10"
    }
 }
 console.log(why(7));
 
 //chaining if else statement 

 function testSize(num)
 {
    if (num<5)
    {
        return "lesser than 5";
    }
    else if (num < 10 )
    {
        return "lesser than 10";

    }
    else if (num < 15)
    {
        return " lesser than 15";
    
    }
    else if (num < 20)
    {
        return "lesser than 20";
    }
    else 
    {
        return "greater then or equal to 20";
    }
 }
 console.log(testSize(21));
 console.log(testSize(19));
 console.log(testSize(14));
 console.log(testSize(9));
 console.log(testSize(4));

 //gold score 
    var names = ["hole-in-one", "eagle", "birdie", "par", "bogey", "double bogey", "go home"];
    function goldScore(par, stroke)
    {
        if (stroke==1)
        {
            return names[0];
        }
        else if (stroke <= par-2)
        {
            return names[1];
        }
        else if (stroke == par-1)
        {
            return names[2];
        }
        else if (stroke==par)
        {
            return names[3];
        }
        else if (stroke==par+1)
        {
            return names[5];
        }
        else if (stroke==par+2)
        {
            return names[2];
        }
        else if (stroke==par+3)
        {
            return names[6];
        }
    }
    console.log(goldScore(10,7));