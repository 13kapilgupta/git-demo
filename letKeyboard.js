let catname  = "Quincy";
let quote; // let is similar to var except we can not
// declare same variable again

function catTalk(){
    "use strict"; // it catch codiong mistake
    catname = "Olivier";
}

catTalk();

console.log(catname);


// scope of var and let

function checkScope(){
    "use strict";

    let i = "function scope";  // its scope is similar to c++ variable

    if(true){
        let i = "block scope";
        console.log(" block  scope is" + i);
    }

    console.log(" function scope is" + i);


}

checkScope()

function checkScope1(){
    "use strict";

   // let i = "function scope";  // its scope is similar to c++ variable

    if(true){
        var i = "block scope"; // this is also visible to outside function
        console.log(" block  scope is" + i);
    }

    console.log(" function scope is" + i);


}
// if we declare same variable like i it just overrite the value 
// in checkscope1 function for both print it will show block scope
checkScope1();