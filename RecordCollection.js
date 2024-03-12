var collection = {
    "2648" : {
        "album": "Slippery When Wet",
        "artist": "Bon Javi",
        "tracks": ["Let it Rock", "you will give a Bad Name"]
    },

    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks":["1999", "Prince"]
    },
    
    "1245":{
        "artist": "Robert Palmer",
        "tracks": []
    },
    
    "5439":{
        "album":"ABBA Gold"
    }

}

var collectioncopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
    if(value === ""){
        delete collection[id][prop];
    }
    else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else{
        collection[id][prop] = value;
    }

    return collection;
}

console.log(updateRecords("5439", "artist", "KABBA"));