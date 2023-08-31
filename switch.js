/* write a switch statement which test val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/
function caseInSwitch(val)
{
var answer = "";
switch(val)
{
    case 1: 
    answer = "alpha";
    break;
    case 2 :
        answer = "beta";
    break;
    case 3: 
    answer ="gamma";
    break;
    case 4 : 
    answer ="delta";
    break;
}
return answer;
}
console.log(caseInSwitch(4));

//default option in switch statement 

function switchOfStuff(val)
{
var answer = "";
switch(val)
{
    case "a": 
    answer = "ant";
    break;
    case "b" :
        answer = "bull";
    break;
    case "c": 
    answer ="cat";
    break;
    default: 
    answer = "other animal";
    break;
}
return answer;
}
console.log(switchOfStuff("d"));


//Multiple identical options in switch statement

/* sometimes we want switch statement where multiple input give same output all we need to do is not add break statement */

function sequentialSize(val)
{
    var answer="";
    switch(val)
    {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
                break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
    }
    return answer;
}
console.log(sequentialSize(8));

//replacing if else chains with switch 

function ifToSwitch(val)
{
    var ans="";
    /* if(val == bob){
        ans ="Marley";
    }else if (val==42)
    {
        ans=" the answer"
    } else if(val==1)
    {
        ans = " there is no #1"
    } else if (val==99)
    {
        ans ="missed me by this much ";
    } else if (val==7){
        ans = "ate nine";
    }
    } 
    changing this to switch */
    switch (val)
    {
        case "bob":
            ans = "Marley";
            break;
        case 42:
            ans =" the answer";
            break;
        case 1:
            ans="There is no #1";
            break;
        case 99:
            ans="missed me by this much";
            break;
        case 7:
            ans="ate nine";
            break;
    }
    return ans;

}

console.log(ifToSwitch("bob"));


