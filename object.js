var testObj={
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};


var hatValue = testObj.hat; // or testObj["hat"]
var shirtValue = testObj.shirt; // or testObj["shirt    "]
console.log(hatValue + " " + shirtValue); 

var testObj1={
    "an entree": "ballcap",
    "my side": "jersey",
    "the drink": "cleats"
};



var anEntree = testObj1["an entree"]; // or testObj["hat"]
var theDrink = testObj1["the drink"]; // or testObj["shirt    "]
console.log(anEntree + " " + theDrink);

var testObj2 = {
    12: "Namath",
    16: "Montana",
    17: "Kapil"
};

var playerName = 16;
var player = testObj2[playerName];
console.log(player);