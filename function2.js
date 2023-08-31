//returning boolean value from function  
function isLess(a,b)
{
   return a<b;
}
console.log(isLess(10,20));
console.log(isLess(30,20));

//returning Early Pattern from function 

function abTest(a, b)
{
    if ( a< 0|| b<0)
    {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2) );
}
console.log(abTest(5,5));
console.log(abTest(-5,5));

//counting  card 
 var  count = 0;
  function cc(card)
  {
    switch (card)
    {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = "hold";
    if (count>0)
    {
        holdbet= "bet";
    }
    return count+ " " + holdbet;

  } 

  cc(2); cc('k'); cc(10); cc('k'); cc('A');
  console.log(cc(4));

  //
