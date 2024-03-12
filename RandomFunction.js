function randomFraction(){
    return Math.random(); // generate value between 0-1 
}

console.log(randomFraction());

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum(){
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

// range b/w min - max

function ourRandomRange(ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin  + 1)) + ourMin;
}

console.log(ourRandomRange(1, 9));