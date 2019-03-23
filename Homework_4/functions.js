/*

Homework Assignment #4: Functions

Details: from HW assignment #3
Let's look at a popular logical argument (a syllogism)

All men are mortal
 Socrates is a man.
 Therefore, socrates is mortal.

Using "if statements" and any other logical operators and data-types you see fit, recreate this logical argument. Your code should make clear that "socrates" is part of a collection of items referred to as "men", and that all members of this collection are mortal. You should also then demonstrate that since Socrates is part of this collection, it follows that he is mortal as well.

Extra Credit:

Got the hang of creating a logical argument? Want to try another one? Try this one as well:

This cake is either vanilla or chocolate.
 This cake is not chocolate.
 Therefore, this cake is vanilla.

Homework Assignment #4: Functions


Details:

Let's go back to your syllogism (logical argument) examples from Homework #3. Now it's time to turn those loose bits of logic into functions. Rather than having procedure that demonstrates that Socrates is mortal, you should create a function that accepts a name and returns a boolean (True or False) representing whether that name identifies a man who is mortal or not. Your function to gracefully handle unexpected inputs (such as an unrecognized name or a name that is a not a string at all) without throwing an exception.


Extra Credit:

If you did the extra credit on Homework #3, let's turn that example into a function as well. It should accept in 2 arguments:

1. An array of all cake possibilities (vanilla or chocolate)

2. A boolean representing whether or not the cake is chocolate.

It should return a string indicating the actual flavor of the cake.



*/
console.log("\n*** function example ***\n")

function isMortal(name){
  // create a list of men
  const allMen = [ "Plato","Socrates","Eumenides","Euripedes","Harvey"];
  // initialize tests
  // here's our man
  function isMan(name){
    index = 0;
    while(index < allMen.length) {
    // if our man in the list set the test value
      if ( name === allMen[index]){
        console.log("Socrates is a Man");
        console.log("All men are Mortal");
        return true;
      };
      index++;
    }
  }
  return isMan(name);
}
let name = "Socrates"
if (isMortal(name)){
    console.log("Therefore ", name, " is Mortal");
}
else{
  console.log("Whoops ",name," is not Mortal")
}
name = "Fred"
if (isMortal(name)){
    console.log("Therefore ", name, " is Mortal");
}
else{
  console.log("Whoops ",name," is not Mortal")
}
name = 6
if (isMortal(name)){
    console.log("Therefore ", name, " is Mortal");
}
else{
  console.log("Whoops ",name," is not Mortal")
}

// extra Credit
console.log("\n*** extra credit ***\n")
const cakeTypes = ["vanilla","chocolate"];

function cakeType(cakeTypes,cakeIsChocolate){
  if( cakeIsChocolate) {
      return "this cake is " + cakeTypes[1];
  }
  else {
    return "this cake is " + cakeTypes[0];
  }
}
console.log(cakeType(cakeTypes,true));
console.log(cakeType(cakeTypes,false));
