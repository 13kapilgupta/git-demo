var myArray = [];
var i=0;
while(i < 5){
    myArray.push(i);
    i++;
}

console.log(myArray);

var ourArray = [];
for(var i=0; i<5; i++)
{
    ourArray.push(i);
}
console.log(ourArray);

// iterate array
var total = 0;
for(var i=0; i < ourArray.length; i++)
{
    total += ourArray[i];
}