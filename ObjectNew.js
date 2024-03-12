function kser(name){

    this.name = name;
    this.isAdmin = false;
}

let user = new kser("Kapil");
console.log(user.name);
console.log(user.isAdmin);

let user1 = new function() {
    this.name = "John";
    this.isAdmin = false;
  
    // ...other code for user creation
    // maybe complex logic and statements
    // local variables etc
  };