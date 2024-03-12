var myStorage = {

    "car" :{
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
    
        "outside": {
            "trunk": "jack"
        }
    }
};

var globeBoxContents = myStorage.car.inside["glove box"];
console.log(globeBoxContents);

