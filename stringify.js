function nextInLine(arr, item)
{
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function compareEquality(a, b){
    if(a == b){
        return "Equal";
    }
    return " Not Equal";
}
compareEquality(10, "12"); // == mean equal because of type conversion 
compareEquality(10, "10");  // === mean strictly euqual not type conversion

function elseIf(a)
{
    if(a > 5)
    {
        return " greater than 5";
    }
    else
    {
        return " less than ";
    }
}

console.log(elseIf(7));