function sum(a, b, fnToCall){
    let result = a + b;
    fnToCall(result);

}

function displayResult(data){
    console.log(" sum of two number   = "  + data);
}

function displayStaticResult(data){
    console.log(" sum of the two number for static result "  + data);
}

sum(2, 3, displayStaticResult);
