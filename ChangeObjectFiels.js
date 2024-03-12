var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "freinds": ["everything"],
    "bark": "bow-bow"
};

ourDog.name = "Happy camper";
console.log(ourDog.name);
ourDog['bark'] = "cow-cow";
console.log(ourDog['bark']);
delete ourDog.bark;
console.log(ourDog);

// has own property
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }
    return "Not Found";
}

console.log(checkObj("gift"));
